# デザインシステム

## 目次

1. [デザインコンセプト](#デザインコンセプト)
2. [カラーパレット](#カラーパレット)
3. [タイポグラフィ](#タイポグラフィ)
4. [スペーシング](#スペーシング)
5. [コンポーネントスタイル](#コンポーネントスタイル)
6. [アニメーション](#アニメーション)
7. [レスポンシブデザイン](#レスポンシブデザイン)
8. [アクセシビリティ](#アクセシビリティ)

## デザインコンセプト

### 和モダン × サイバーパンク

Ishinovaのデザインは、日本の伝統的な美意識と未来的なテクノロジーの融合を表現しています。

#### デザイン原則

1. **簡潔性（Simplicity）**
   - ミニマルなレイアウト
   - 余白を活かしたデザイン
   - 必要最小限の要素

2. **調和（Harmony）**
   - 伝統と革新のバランス
   - 色彩の調和
   - 要素間の統一感

3. **革新性（Innovation）**
   - モダンなインタラクション
   - 動的な視覚効果
   - 先進的な表現

### ビジュアルモチーフ

- **桜の花びら**: 日本の伝統美を象徴
- **光の波紋**: 革新の波及効果を表現
- **幾何学模様**: テクノロジーの精密さを表現
- **グラデーション**: 伝統から未来への移行を表現

## カラーパレット

### プライマリカラー

```css
:root {
  /* 藍色 (Indigo) - メインカラー */
  --color-indigo: #0F4C81;
  --color-indigo-light: #1E5FA0;
  --color-indigo-dark: #0A3A64;
  
  /* 金色 (Gold) - アクセントカラー */
  --color-gold: #D4AF37;
  --color-gold-light: #E5C254;
  --color-gold-dark: #B59628;
  
  /* 墨色 (Charcoal) - テキストカラー */
  --color-charcoal: #2F2F2F;
  --color-charcoal-light: #4A4A4A;
  --color-charcoal-dark: #1A1A1A;
}
```

### セカンダリカラー

```css
:root {
  /* 背景色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-bg-accent: #F0F4F8;
  
  /* グレースケール */
  --color-gray-100: #F7F8F9;
  --color-gray-200: #E9ECEF;
  --color-gray-300: #DEE2E6;
  --color-gray-400: #CED4DA;
  --color-gray-500: #ADB5BD;
  --color-gray-600: #6C757D;
  --color-gray-700: #495057;
  --color-gray-800: #343A40;
  --color-gray-900: #212529;
}
```

### カラー使用ガイドライン

| 要素 | カラー | 用途 |
|------|--------|------|
| ヘッダーテキスト | `--color-charcoal` | 主要な見出し |
| ボディテキスト | `--color-charcoal-light` | 本文、説明文 |
| リンク | `--color-indigo` | クリッカブル要素 |
| ホバー状態 | `--color-indigo-light` | インタラクティブ要素 |
| CTA ボタン | `--color-gold` | 重要なアクション |
| 背景 | `--color-bg-primary` | メイン背景 |
| カード背景 | `--color-bg-secondary` | セクション区切り |

## タイポグラフィ

### フォントファミリー

```css
:root {
  /* 日本語・英語共通フォント */
  --font-primary: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 
                   'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  
  /* コードフォント */
  --font-mono: 'Source Code Pro', Monaco, Consolas, 
               'Courier New', monospace;
}
```

### フォントサイズ

```css
:root {
  /* 基準サイズ */
  --text-base: 1rem;        /* 16px */
  
  /* 見出しサイズ */
  --text-xs: 0.75rem;       /* 12px */
  --text-sm: 0.875rem;      /* 14px */
  --text-md: 1rem;          /* 16px */
  --text-lg: 1.125rem;      /* 18px */
  --text-xl: 1.25rem;       /* 20px */
  --text-2xl: 1.5rem;       /* 24px */
  --text-3xl: 1.875rem;     /* 30px */
  --text-4xl: 2.25rem;      /* 36px */
  --text-5xl: 3rem;         /* 48px */
  --text-6xl: 3.75rem;      /* 60px */
}
```

### フォントウェイト

```css
:root {
  --font-normal: 400;
  --font-medium: 500;
  --font-bold: 700;
  --font-black: 900;
}
```

### 行間設定

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

### タイポグラフィ使用例

```css
/* ヒーローセクションの見出し */
.hero-title {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-charcoal);
}

/* 本文 */
.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-charcoal-light);
}

/* キャプション */
.caption {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--color-gray-600);
}
```

## スペーシング

### スペーシングスケール

```css
:root {
  /* 基準単位: 8px */
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### スペーシング使用ガイド

| 用途 | スペーシング |
|------|-------------|
| インライン要素間 | `--space-1` から `--space-2` |
| グループ内の要素間 | `--space-4` から `--space-6` |
| セクション内のブロック間 | `--space-8` から `--space-12` |
| セクション間 | `--space-16` から `--space-24` |

## コンポーネントスタイル

### ボタン

```css
/* プライマリボタン */
.btn-primary {
  background: var(--color-gold);
  color: var(--color-charcoal);
  padding: var(--space-3) var(--space-6);
  border-radius: 4px;
  font-weight: var(--font-bold);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* セカンダリボタン */
.btn-secondary {
  background: transparent;
  color: var(--color-indigo);
  border: 2px solid var(--color-indigo);
  padding: var(--space-3) var(--space-6);
  border-radius: 4px;
  font-weight: var(--font-medium);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-indigo);
  color: white;
}
```

### カード

```css
.card {
  background: var(--color-bg-secondary);
  border-radius: 8px;
  padding: var(--space-6);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-charcoal);
  margin-bottom: var(--space-4);
}

.card-content {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-charcoal-light);
}
```

### フォーム要素

```css
.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-gray-300);
  border-radius: 4px;
  font-size: var(--text-base);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-indigo);
  box-shadow: 0 0 0 3px rgba(15, 76, 129, 0.1);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-charcoal);
  margin-bottom: var(--space-2);
}
```

## アニメーション

### トランジション設定

```css
:root {
  /* トランジション時間 */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* イージング関数 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### アニメーション例

```css
/* フェードイン */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

/* パルスエフェクト */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}

/* 波紋エフェクト */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  animation: ripple var(--duration-slow) var(--ease-out);
}
```

## レスポンシブデザイン

### ブレークポイント

```css
:root {
  /* モバイルファースト */
  --screen-sm: 640px;   /* スマートフォン横向き */
  --screen-md: 768px;   /* タブレット */
  --screen-lg: 1024px;  /* デスクトップ */
  --screen-xl: 1280px;  /* 大画面デスクトップ */
  --screen-2xl: 1536px; /* フルHD以上 */
}
```

### メディアクエリ使用例

```css
/* モバイル（デフォルト） */
.container {
  padding: var(--space-4);
  max-width: 100%;
}

/* タブレット以上 */
@media (min-width: 768px) {
  .container {
    padding: var(--space-8);
    max-width: 720px;
    margin: 0 auto;
  }
}

/* デスクトップ以上 */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-12);
    max-width: 960px;
  }
}

/* 大画面デスクトップ以上 */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

### レスポンシブタイポグラフィ

```css
/* ヒーロータイトル */
.hero-title {
  font-size: var(--text-3xl);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--text-5xl);
  }
}
```

## アクセシビリティ

### カラーコントラスト

すべてのテキストは[WCAG 2.1 レベルAA](https://www.w3.org/WAI/WCAG21/quickref/)の基準を満たしています。

| 背景色 | テキスト色 | コントラスト比 | 適合性 |
|--------|-----------|--------------|--------|
| #FFFFFF | #2F2F2F | 13.4:1 | AAA |
| #FFFFFF | #0F4C81 | 8.2:1 | AAA |
| #F8F9FA | #2F2F2F | 12.8:1 | AAA |
| #D4AF37 | #2F2F2F | 6.1:1 | AA |

### フォーカススタイル

```css
/* キーボードナビゲーション時のフォーカス */
:focus {
  outline: 3px solid var(--color-indigo);
  outline-offset: 2px;
}

/* マウス使用時はフォーカスリングを非表示 */
:focus:not(:focus-visible) {
  outline: none;
}

/* キーボード使用時のみフォーカスリングを表示 */
:focus-visible {
  outline: 3px solid var(--color-indigo);
  outline-offset: 2px;
}
```

### アクセシブルな非表示

```css
/* スクリーンリーダー専用 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* フォーカス時は表示 */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### モーション設定

```css
/* モーション削減設定を尊重 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

最終更新日: 2025年5月28日