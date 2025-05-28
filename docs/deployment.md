# デプロイメントガイド

## 目次

1. [概要](#概要)
2. [ビルドプロセス](#ビルドプロセス)
3. [デプロイ手順](#デプロイ手順)
4. [環境設定](#環境設定)
5. [CDN設定](#cdn設定)
6. [監視とロギング](#監視とロギング)
7. [トラブルシューティング](#トラブルシューティング)

## 概要

Ishinovaコーポレートサイトは静的サイトジェネレーター（Astro.js）を使用して構築され、静的ファイルとしてホスティングされます。このアプローチにより、高速な配信、優れたセキュリティ、低コストの運用が実現されています。

### デプロイアーキテクチャ

```
開発環境
    ↓ (git push)
GitHub Repository
    ↓ (自動/手動トリガー)
ビルドプロセス
    ↓ (npm run build)
静的ファイル生成 (dist/)
    ↓ (デプロイ)
ホスティングサービス
    ↓ (CDN配信)
エンドユーザー
```

## ビルドプロセス

### ローカルビルド

#### 1. 事前確認

```bash
# Node.jsバージョンの確認
node --version  # v18.14.1以上

# 依存関係の確認
npm list --depth=0

# 環境変数の確認（必要な場合）
echo $NODE_ENV
```

#### 2. プロダクションビルド実行

```bash
# クリーンビルド
npm run clean
npm install
npm run build
```

#### 3. ビルド成果物の確認

```bash
# ビルド結果の確認
ls -la dist/

# ファイルサイズの確認
du -sh dist/*

# 生成されたHTMLの検証
npm run preview
```

### ビルド最適化

#### パフォーマンス最適化

```javascript
// astro.config.mjs での最適化設定例
export default defineConfig({
  build: {
    // インライン化の閾値設定
    inlineStylesheets: 'auto',
    // アセットの命名規則
    assets: '_astro',
    // 圧縮設定
    compress: true,
  },
  // 画像最適化
  image: {
    service: 'astro/assets/services/sharp',
  },
});
```

#### ビルド時の環境変数

```bash
# .env.production
SITE_URL=https://ishinova.co.jp
PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

## デプロイ手順

### 手動デプロイ

#### 1. ビルドの実行

```bash
# mainブランチの最新を取得
git checkout main
git pull origin main

# プロダクションビルド
npm run build
```

#### 2. ビルド成果物の検証

```bash
# ローカルでプレビュー
npm run preview

# ブラウザで確認
open http://localhost:4321
```

#### 3. ファイルのアップロード

静的ホスティングサービスへのアップロード方法：

```bash
# 例：rsyncを使用した場合
rsync -avz --delete dist/ user@host:/path/to/public_html/

# 例：FTPクライアントを使用する場合
# 1. FTPクライアントでサーバーに接続
# 2. dist/フォルダの内容をすべてアップロード
# 3. 既存ファイルは上書き、不要なファイルは削除
```

### CI/CDパイプライン

#### GitHub Actionsの設定例

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          SITE_URL: https://ishinova.co.jp
          
      - name: Deploy
        run: |
          # デプロイコマンド（ホスティングサービスによって異なる）
          echo "Deploying to production..."
```

### デプロイチェックリスト

- [ ] mainブランチが最新状態
- [ ] すべてのテストが通過
- [ ] ビルドエラーなし
- [ ] robots.txtが適切に設定
- [ ] サイトマップが生成されている
- [ ] OGP画像が正しく配置
- [ ] ファビコンが全種類存在
- [ ] 404ページが存在（必要な場合）

## 環境設定

### ドメイン設定

#### DNSレコード設定例

```
Type    Name    Value                   TTL
A       @       XXX.XXX.XXX.XXX        300
A       www     XXX.XXX.XXX.XXX        300
CNAME   www     ishinova.co.jp         300
```

### SSL/TLS設定

#### Let's Encrypt使用時

```bash
# Certbotを使用した証明書取得
sudo certbot --nginx -d ishinova.co.jp -d www.ishinova.co.jp
```

#### 証明書の自動更新

```bash
# Cronジョブの設定
0 0 * * * certbot renew --quiet
```

### セキュリティヘッダー

#### .htaccess設定例（Apache）

```apache
# セキュリティヘッダー
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"

# HSTS
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# CSP
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
```

#### nginx設定例

```nginx
server {
    listen 443 ssl http2;
    server_name ishinova.co.jp;
    
    # SSL設定
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # セキュリティヘッダー
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    
    # ルートディレクトリ
    root /var/www/ishinova.co.jp;
    index index.html;
    
    # キャッシュ設定
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## CDN設定

### キャッシュ戦略

#### 静的アセットのキャッシュ

| ファイルタイプ | キャッシュ期間 | Cache-Control |
|---------------|---------------|---------------|
| HTML | 1時間 | `max-age=3600` |
| CSS/JS | 1年 | `max-age=31536000, immutable` |
| 画像 | 1年 | `max-age=31536000, immutable` |
| フォント | 1年 | `max-age=31536000, immutable` |

### CDNパージ戦略

```bash
# デプロイ後のキャッシュクリア
# 例：Cloudflareの場合
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
     -H "Authorization: Bearer {api_token}" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
```

## 監視とロギング

### パフォーマンス監視

#### Google Analytics設定

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

#### Core Web Vitals監視

```javascript
// Web Vitals測定
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

### エラー監視

#### サーバーログの確認

```bash
# Apacheの場合
tail -f /var/log/apache2/error.log
tail -f /var/log/apache2/access.log

# nginxの場合
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### アップタイム監視

外部監視サービスの設定：
- URL: https://ishinova.co.jp
- 監視間隔: 5分
- アラート: メール通知

## トラブルシューティング

### よくある問題と対処法

#### 1. 404エラーが発生する

**原因**: ファイルパスの不一致、大文字小文字の違い

**対処法**:
```bash
# ファイル名の確認
find dist -name "*.html" | sort

# 大文字小文字の確認
ls -la dist/
```

#### 2. スタイルが適用されない

**原因**: CSSファイルのパスエラー、キャッシュ問題

**対処法**:
```bash
# ビルド結果の確認
grep -r "\.css" dist/*.html

# ブラウザキャッシュのクリア
# Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
```

#### 3. 画像が表示されない

**原因**: 画像パスの誤り、ファイル欠落

**対処法**:
```bash
# 画像ファイルの存在確認
ls -la dist/assets/

# HTMLでの参照確認
grep -r "src=" dist/*.html | grep -E "\.(jpg|png|svg)"
```

#### 4. サイトマップが生成されない

**原因**: astro.config.mjsの設定ミス

**対処法**:
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://ishinova.co.jp',
  integrations: [sitemap()],
});
```

### デプロイ前のチェックリスト

```bash
# ビルドテスト
npm run build && npm run preview

# HTMLバリデーション
npx html-validator dist/index.html

# リンクチェック
npx linkinator dist/

# パフォーマンステスト
npx lighthouse https://ishinova.co.jp
```

### 緊急時の対応

#### ロールバック手順

1. **前バージョンの特定**
   ```bash
   git log --oneline -10
   ```

2. **ロールバック実行**
   ```bash
   git checkout {previous-commit-hash}
   npm run build
   # デプロイ実行
   ```

3. **問題の調査**
   - エラーログの確認
   - 差分の確認
   - 修正とテスト

### サポート連絡先

- **技術サポート**: tech@ishinova.co.jp
- **緊急連絡先**: 管理者の携帯電話
- **ドキュメント**: 本ドキュメントおよびAstro公式ドキュメント

---

最終更新日: 2025年5月28日