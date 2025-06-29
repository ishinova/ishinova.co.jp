# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## 概要

Ishinova株式会社のコーポレートサイト。Astro.jsベースの静的サイトジェネレーターで構築され、「和モダン × サイバーパンク」のデザインコンセプトを実現しています。

プロジェクトの全体的な情報（技術スタック、デザインガイドライン、企業情報など）については @README.md を参照してください。

## 必須コマンド

### 開発
```bash
# 開発サーバー起動 (http://localhost:4321)
bun run dev

# プロダクションビルド
bun run build

# ビルド結果のプレビュー
bun run preview
```

### 環境セットアップ
```bash
# 初回セットアップ（mise bootstrap）
mise bs

# ツール診断
mise dr

# コンポーネント雛形生成
bun run scaffold
```

### Git操作
```bash
# ブランチ作成パターン
git checkout -b feature/GH-{issue-number}   # 新機能
git checkout -b fix/GH-{issue-number}       # バグ修正
git checkout -b docs/GH-{issue-number}      # ドキュメント
git checkout -b chore/GH-{issue-number}     # その他
```



## アーキテクチャ

### 技術スタック
- **フレームワーク**: Astro.js v5.10.1（静的サイトジェネレーター）
- **言語**: TypeScript（strict mode）
- **スタイリング**: ピュアCSS（コンポーネントスコープ）
- **パッケージマネージャー**: Bun v1.2.17
- **バージョン管理**: mise

### ディレクトリ構造
```
src/
├── components/      # 再利用可能なUIコンポーネント
│   └── Company/     # ネストされたコンポーネント（例：CompanyAbout.astro）
├── layouts/         # ページレイアウト（Layout.astro）
├── pages/          # ファイルベースルーティング
│   ├── index.astro # ホームページ
│   └── company/    # 会社情報ページ
└── styles/         # グローバルスタイル
    └── global.css  # CSS変数定義
```

### 重要な設計原則

1. **静的サイト生成（SSG）**
   - すべてのページはビルド時にHTMLとして生成
   - JavaScriptゼロのデフォルト設定（必要な箇所のみ追加）
   - CDN配信に最適化

2. **Astroコンポーネント設計**
   - `.astro`ファイルはフロントマター（`---`）でロジック、その下にテンプレート
   - スコープドCSS（`<style>`タグ内のスタイルは自動的にスコープ化）
   - プロップス経由でのデータ受け渡し

3. **CSS設計**
   - グローバル変数は`src/styles/global.css`で定義
   - 各コンポーネントで`<style>`タグを使用してスコープドスタイルを記述
   - カラーパレット: 藍色（#0F4C81）、金色（#D4AF37）、墨色（#2F2F2F）

## 開発ワークフロー

### コミット規約
日本語でのコミットメッセージがデフォルト（Conventional Commits形式）：
```
feat(auth): OAuth2ログイン機能を追加
fix: データ取得のタイムアウト問題を修正 (#123)
docs: APIドキュメントを更新
```

### Git フック
- **lefthook**でcommit-msgフックを管理
- **commitlint**でコミットメッセージを検証
- フックエラー時は必ず修正してから再コミット（`--no-verify` や `LEFTHOOK=0`は使用禁止）

### CI/CD
- GitHub ActionsでCloudflare Pagesへ自動デプロイ
- Release Pleaseで自動リリース管理
- Renovateで依存関係の自動更新

## 注意事項
- ファイル編集時は必ず改行で終わるようにする
- 新規ファイル作成より既存ファイルの編集を優先
- TypeScriptのstrict modeが有効なため、型安全性を保つ

## 詳細ドキュメント

プロジェクトの詳細情報は @docs ディレクトリに整理されています：

- @docs/architecture.md - システムアーキテクチャ詳細
- @docs/components.md - コンポーネント設計ガイド
- @docs/deployment.md - デプロイ手順と設定
- @docs/design-system.md - デザインシステム仕様
- @docs/development.md - 開発環境構築と規約
- @docs/release-flow.md - リリースフローとバージョニング

開発を始める前に、特に @docs/development.md と @docs/architecture.md を参照することを推奨します。
