# Ishinova - コーポレートサイト

「維新（Ishin）」と「新星（Nova）」の融合による、伝統的価値観と破壊的イノベーションの統合を象徴するコーポレートサイト。

## 概要

Ishinovaは和モダンと近未来感（サイバーパンク）を掛け合わせたデザインコンセプトに基づくコーポレートサイトです。桜の花弁と光の波紋をモチーフにしたミニマルでありながら象徴的なデザインを採用しています。

## 技術スタック

- **フロントエンドフレームワーク**: [Astro.js](https://astro.build/)
- **スタイル**: CSS / CSS Modules
- **フォント**: Noto Sans JP

## 開発方法

### 必要条件

- Node.js 16.x 以上
- npm または Bun

### インストール

```bash
# 依存関係のインストール
npm install
# または
bun install
```

### 開発サーバーの起動

```bash
npm run dev
# または
bun run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:4321](http://localhost:4321) にアクセスしてください。

### ビルド

```bash
npm run build
# または
bun run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
# または
bun run preview
```

ビルドされたサイトをローカルでプレビューできます。

## プロジェクト構成

```
ishinova.co.jp/
├── public/          # 静的ファイル
│   └── assets/      # 画像などのアセット
├── src/             # ソースコード
│   ├── assets/      # コンポーネントで使用するアセット
│   ├── components/  # Astroコンポーネント
│   ├── layouts/     # レイアウトコンポーネント
│   ├── pages/       # ページコンポーネント
│   └── styles/      # グローバルスタイル
└── ...
```

## デザインガイドライン

### カラーパレット

- 藍色 (#0F4C81) - メインカラー、テキストやアクセント
- 金色 (#D4AF37) - 強調要素、CTAボタンなど
- 墨色 (#2F2F2F) - 見出し、ボディテキスト

### フォント

- 見出し: Noto Sans JP (Bold)
- 本文: Noto Sans JP (Regular)

## ライセンス

All rights reserved © Ishinova