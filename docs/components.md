# コンポーネントリファレンス

## 目次

1. [レイアウトコンポーネント](#レイアウトコンポーネント)
2. [SEOコンポーネント](#seoコンポーネント)
3. [ナビゲーションコンポーネント](#ナビゲーションコンポーネント)
4. [セクションコンポーネント](#セクションコンポーネント)
5. [ユーティリティコンポーネント](#ユーティリティコンポーネント)

## レイアウトコンポーネント

### Layout.astro

基本的なHTML構造とメタ情報を提供するラッパーコンポーネント。

#### 使用方法

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="ページタイトル">
  <!-- ページコンテンツ -->
</Layout>
```

#### プロパティ

| プロパティ | 型 | 必須 | デフォルト | 説明 |
|-----------|-----|------|-----------|------|
| title | string | ✓ | - | ページタイトル |

#### 実装詳細

- Google Fontsの読み込み（Noto Sans JP）
- グローバルCSSの適用
- SEOコンポーネントの組み込み
- レスポンシブビューポート設定

## SEOコンポーネント

### SEO.astro

SEO最適化のためのメタタグを管理するコンポーネント。

#### 使用方法

```astro
---
import SEO from '../components/SEO.astro';
---

<SEO 
  title="ページタイトル"
  description="ページの説明"
  image="/ogp-custom.png"
/>
```

#### プロパティ

| プロパティ | 型 | 必須 | デフォルト | 説明 |
|-----------|-----|------|-----------|------|
| title | string | ✓ | - | ページタイトル |
| description | string | × | サイトデフォルト | メタディスクリプション |
| image | string | × | /ogp.png | OGP画像パス |
| type | string | × | website | OGPタイプ |

#### 生成されるメタタグ

1. **基本メタタグ**
   - `<title>`
   - `<meta name="description">`
   - `<link rel="canonical">`

2. **Open Graph**
   - `og:title`
   - `og:description`
   - `og:image`
   - `og:type`
   - `og:url`
   - `og:locale`

3. **Twitter Card**
   - `twitter:card`
   - `twitter:title`
   - `twitter:description`
   - `twitter:image`

4. **構造化データ（JSON-LD）**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Corporation",
     "name": "株式会社Ishinova",
     "url": "https://ishinova.co.jp",
     "logo": "https://ishinova.co.jp/logo.svg",
     "sameAs": []
   }
   ```

## ナビゲーションコンポーネント

### Header.astro

サイトのヘッダーナビゲーションコンポーネント。

#### 使用方法

```astro
---
import Header from '../components/Header.astro';
---

<Header />
```

#### 機能

- ロゴ表示
- ナビゲーションメニュー
- レスポンシブ対応（モバイルメニュー）
- スムーズスクロール

#### ナビゲーション項目

```javascript
const menuItems = [
  { href: "#concept", label: "CONCEPT" },
  { href: "#vision", label: "VISION" },
  { href: "#company", label: "COMPANY" },
  { href: "#contact", label: "CONTACT" }
];
```

### Footer.astro

サイトのフッターコンポーネント。

#### 使用方法

```astro
---
import Footer from '../components/Footer.astro';
---

<Footer />
```

#### 機能

- 著作権表示
- リンク集（プライバシーポリシー、利用規約）
- レスポンシブ対応

## セクションコンポーネント

### Hero.astro

ランディングセクションのヒーローコンポーネント。

#### 使用方法

```astro
---
import Hero from '../components/Hero.astro';
---

<Hero />
```

#### 特徴

- フルスクリーンレイアウト
- アニメーション背景
- グラデーションオーバーレイ
- レスポンシブタイポグラフィ

#### 構造

```astro
<section class="hero">
  <div class="hero-background">
    <!-- 背景アニメーション -->
  </div>
  <div class="hero-content">
    <h1>地域の「あったらいいな」をカタチに。</h1>
    <p>伝統と革新の融合で、新しい価値を創造する</p>
  </div>
</section>
```

### Concept.astro

企業コンセプトを説明するセクション。

#### 使用方法

```astro
---
import Concept from '../components/Concept.astro';
---

<Concept />
```

#### コンテンツ構造

```astro
<section id="concept" class="concept">
  <div class="container">
    <h2>CONCEPT</h2>
    <div class="concept-grid">
      <div class="concept-text">
        <!-- テキストコンテンツ -->
      </div>
      <div class="concept-image">
        <!-- イメージ -->
      </div>
    </div>
  </div>
</section>
```

### Features.astro

サービス特徴を紹介するセクション。

#### 使用方法

```astro
---
import Features from '../components/Features.astro';
---

<Features />
```

#### 機能カード

```javascript
const features = [
  {
    title: "地域密着",
    description: "地域の特性を理解し、最適なソリューションを提供",
    icon: "🏘️"
  },
  {
    title: "シンプル設計",
    description: "誰もが使いやすい、直感的なインターフェース",
    icon: "✨"
  },
  {
    title: "継続的サポート",
    description: "導入後も安心の長期サポート体制",
    icon: "🤝"
  }
];
```

### Vision.astro

企業ビジョンを表現するセクション。

#### 使用方法

```astro
---
import Vision from '../components/Vision.astro';
---

<Vision />
```

#### ビジョンステートメント

- 技術の力で地域課題を解決
- 持続可能な地域社会の実現
- 共創による価値創造

### Company.astro

会社情報の詳細セクション。

#### 使用方法

```astro
---
import Company from '../components/Company/Company.astro';
---

<Company />
```

#### 情報構造

```javascript
const companyInfo = {
  name: "株式会社Ishinova",
  founded: "2024年",
  location: "埼玉県",
  mission: "地域の「あったらいいな」をカタチに。",
  services: [
    "カスタムソフトウェア開発",
    "モバイルアプリケーション開発",
    "Webアプリケーション開発"
  ],
  projects: [
    {
      name: "瀞の場（Toronoba）",
      description: "長瀞町の古民家リノベーションプロジェクト"
    }
  ]
};
```

### Contact.astro

お問い合わせ情報セクション。

#### 使用方法

```astro
---
import Contact from '../components/Contact.astro';
---

<Contact />
```

#### 連絡先情報

```javascript
const contactInfo = {
  email: "info@ishinova.co.jp",
  message: "お気軽にお問い合わせください"
};
```

## ユーティリティコンポーネント

### Welcome.astro

ウェルカムメッセージを表示するコンポーネント。

#### 使用方法

```astro
---
import Welcome from '../components/Welcome.astro';
---

<Welcome 
  title="ようこそ"
  message="Ishinovaへようこそ"
/>
```

#### プロパティ

| プロパティ | 型 | 必須 | デフォルト | 説明 |
|-----------|-----|------|-----------|------|
| title | string | × | "Welcome" | タイトル |
| message | string | × | - | メッセージ |

## コンポーネント開発ガイドライン

### 1. ファイル構造

```
components/
├── Component.astro      # 単独コンポーネント
└── ComponentGroup/      # 関連コンポーネント群
    ├── Main.astro
    └── Sub.astro
```

### 2. コンポーネント設計原則

1. **単一責任**: 1つのコンポーネントは1つの役割
2. **再利用性**: 汎用的に使えるよう設計
3. **型安全性**: TypeScriptでプロパティを定義
4. **アクセシビリティ**: ARIA属性の適切な使用

### 3. スタイリング規則

```astro
<style>
  /* スコープドスタイル */
  .component {
    /* カスタムプロパティを使用 */
    color: var(--color-charcoal);
    padding: var(--space-4);
  }
  
  /* レスポンシブ対応 */
  @media (min-width: 768px) {
    .component {
      padding: var(--space-8);
    }
  }
</style>
```

### 4. パフォーマンス考慮事項

- 画像の遅延読み込み
- 不要なJavaScriptの削減
- CSSの最適化
- コンポーネントの適切な分割

---

最終更新日: 2025年5月28日