# 開発ガイド

## 目次

1. [環境構築](#環境構築)
2. [開発フロー](#開発フロー)
3. [コーディング規約](#コーディング規約)
4. [Git運用ルール](#git運用ルール)
5. [テスト](#テスト)
6. [トラブルシューティング](#トラブルシューティング)

## 環境構築

### 前提条件

開発を始める前に、以下のツールがインストールされていることを確認してください。

#### 必須ツール

- **Node.js**: v18.14.1以上
- **Git**: v2.0以上
- **エディタ**: VS Code推奨

#### 推奨ツール

- **mise**: 言語バージョン管理
- **Bun**: 高速なJavaScriptランタイム（npmの代替）

### セットアップ手順

#### 1. リポジトリのクローン

```bash
git clone [repository-url]
cd ishinova.co.jp
```

#### 2. 開発環境の初期化

```bash
# tools/bootstrap.shを使用した自動セットアップ
./tools/bootstrap.sh
```

このスクリプトは以下を実行します：
- 必要なツールの確認
- miseのインストール（未インストールの場合）
- Node.jsのバージョン設定
- 依存関係のインストール

#### 3. 手動セットアップ（代替方法）

```bash
# miseを使用したNode.jsバージョンの設定
mise install

# 依存関係のインストール
npm install
# または
bun install
```

#### 4. 開発サーバーの起動

```bash
npm run dev
# または
bun run dev
```

ブラウザで `http://localhost:4321` を開いて確認します。

### VS Code設定

推奨される拡張機能：

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

ワークスペース設定（`.vscode/settings.json`）：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 開発フロー

### 1. ブランチ戦略

```
main
├── feature/GH-{issue-number}  # 新機能開発
├── fix/GH-{issue-number}      # バグ修正
├── docs/GH-{issue-number}     # ドキュメント更新
└── chore/GH-{issue-number}    # その他の変更
```

### 2. 開発の流れ

#### Issue駆動開発

1. **Issueの確認**
   ```bash
   gh issue view {number}
   ```

2. **ブランチの作成**
   ```bash
   git checkout -b feature/GH-123
   ```

3. **TODOリストの作成**
   - Claude Codeを使用してTodoWriteツールでタスクを管理

4. **実装**
   - タスクを`in_progress`にマーク
   - 実装完了後に`completed`にマーク

5. **コミット**
   ```bash
   git add .
   git commit -m "feat: 機能の説明"
   ```

6. **プルリクエスト作成**
   ```bash
   gh pr create --title "feat: 機能の説明" --body "Closes #123"
   ```

### 3. 開発コマンド一覧

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# 依存関係のクリーン
npm run clean

# コンポーネントの雛形生成
npm run scaffold

# コードチェック（もし設定されている場合）
npm run lint
npm run typecheck
```

## コーディング規約

### TypeScript規約

#### 基本ルール

```typescript
// ✅ Good: 明示的な型定義
export interface Props {
  title: string;
  description?: string;
  isActive: boolean;
}

// ❌ Bad: any型の使用
const data: any = fetchData();
```

#### 命名規則

- **変数・関数**: camelCase
- **型・インターフェース**: PascalCase
- **定数**: UPPER_SNAKE_CASE
- **ファイル名**: kebab-case（コンポーネントはPascalCase）

### Astroコンポーネント規約

#### コンポーネント構造

```astro
---
// 1. インポート
import Layout from '../layouts/Layout.astro';
import Component from '../components/Component.astro';

// 2. Props定義
export interface Props {
  title: string;
  items?: string[];
}

// 3. Props取得とロジック
const { title, items = [] } = Astro.props;
const processedItems = items.map(item => item.toUpperCase());
---

<!-- 4. HTML構造 -->
<section class="component">
  <h2>{title}</h2>
  <ul>
    {processedItems.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
</section>

<!-- 5. スタイル -->
<style>
  .component {
    /* コンポーネント固有のスタイル */
  }
</style>
```

### CSS規約

#### BEM命名規則の採用

```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__content { }

/* Modifier */
.card--featured { }
.card__title--large { }
```

#### カスタムプロパティの使用

```css
:root {
  /* カラーパレット */
  --color-indigo: #0F4C81;
  --color-gold: #D4AF37;
  --color-charcoal: #2F2F2F;
  
  /* スペーシング */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
}
```

### アクセシビリティ

```astro
<!-- ✅ Good: セマンティックHTML + ARIA -->
<nav aria-label="メインナビゲーション">
  <ul role="list">
    <li><a href="#features">機能</a></li>
  </ul>
</nav>

<!-- ✅ Good: 画像の代替テキスト -->
<img src="/hero.jpg" alt="Ishinovaのコンセプトイメージ" />

<!-- ✅ Good: フォームラベル -->
<label for="email">メールアドレス</label>
<input id="email" type="email" required />
```

## Git運用ルール

### コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/ja/)に準拠します。

#### フォーマット

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### タイプ一覧

| タイプ | 説明 | 例 |
|--------|------|-----|
| feat | 新機能 | `feat: お問い合わせフォームを追加` |
| fix | バグ修正 | `fix: ヘッダーのレイアウト崩れを修正` |
| docs | ドキュメント | `docs: READMEに環境構築手順を追加` |
| style | コードスタイル | `style: インデントを修正` |
| refactor | リファクタリング | `refactor: コンポーネント構造を整理` |
| perf | パフォーマンス改善 | `perf: 画像の遅延読み込みを実装` |
| test | テスト | `test: ユニットテストを追加` |
| build | ビルドシステム | `build: webpack設定を更新` |
| ci | CI/CD | `ci: GitHub Actionsワークフローを追加` |
| chore | その他 | `chore: 依存関係を更新` |

### プルリクエストのルール

1. **タイトル**: Conventional Commits形式
2. **説明**: 
   - 変更内容の要約
   - 関連Issue番号（`Closes #123`）
   - テスト結果
3. **レビュー**: 最低1人のレビューが必要

### ブランチ保護

`main`ブランチは保護されており、直接のプッシュは禁止されています。

## テスト

### ビルドテスト

```bash
# ビルドが成功することを確認
npm run build

# ビルド結果のプレビュー
npm run preview
```

### Lint チェック

```bash
# TypeScriptの型チェック
npm run typecheck

# コードスタイルのチェック（設定されている場合）
npm run lint
```

### 手動テスト項目

#### レスポンシブデザイン

- [ ] モバイル（320px〜）
- [ ] タブレット（768px〜）
- [ ] デスクトップ（1024px〜）

#### ブラウザ互換性

- [ ] Chrome（最新版）
- [ ] Firefox（最新版）
- [ ] Safari（最新版）
- [ ] Edge（最新版）

#### アクセシビリティ

- [ ] キーボードナビゲーション
- [ ] スクリーンリーダー対応
- [ ] カラーコントラスト

## トラブルシューティング

### よくある問題と解決方法

#### 1. 依存関係のインストールエラー

```bash
# node_modulesとlockファイルを削除
npm run clean

# 再インストール
npm install
```

#### 2. ポート競合エラー

```bash
# 使用中のポートを確認
lsof -i :4321

# プロセスを終了
kill -9 <PID>
```

#### 3. TypeScriptエラー

```bash
# TypeScriptバージョンの確認
npx tsc --version

# 型定義の再生成
rm -rf node_modules/@types
npm install
```

#### 4. ビルドエラー

```bash
# キャッシュのクリア
rm -rf .astro
rm -rf dist

# 再ビルド
npm run build
```

### デバッグ方法

#### ブラウザ開発者ツール

1. Chrome DevToolsを開く（F12）
2. Networkタブで通信を確認
3. Consoleタブでエラーを確認
4. Elementsタブで生成されたHTMLを確認

#### Astroデバッグ

```astro
---
// サーバーサイドのデバッグ
console.log('Server:', Astro.props);
---

<script>
  // クライアントサイドのデバッグ
  console.log('Client:', window.location);
</script>
```

### サポート

問題が解決しない場合は、以下を確認してください：

1. [Astro公式ドキュメント](https://docs.astro.build)
2. プロジェクトのIssueトラッカー
3. チーム内のSlackチャンネル

---

最終更新日: 2025年5月28日