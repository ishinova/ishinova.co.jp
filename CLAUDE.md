# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the corporate website for Ishinova, built with Astro.js. The design blends traditional Japanese aesthetics with cyberpunk/futuristic elements, featuring a specific color palette:
- 藍色 (Indigo): #0F4C81
- 金色 (Gold): #D4AF37
- 墨色 (Charcoal): #2F2F2F

## Commands

### Development
```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Clean dependencies
bun run clean

# Generate component scaffolds
bun run scaffold
```

### Git Workflow
- This project uses conventional commits (enforced by commitlint)
- Commit format: `type(scope): description`
- Valid types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

## Architecture

### Component Structure
- **Astro Components** (`src/components/`): Reusable UI components using `.astro` format
- **Pages** (`src/pages/`): File-based routing, currently single-page site (index.astro)
- **Layouts** (`src/layouts/`): Base layout wrapping all pages with common structure
- **Global Styles** (`src/styles/global.css`): Site-wide CSS definitions

### Key Components
- `Hero.astro`: Landing section with animated background
- `SEO.astro`: Meta tags and Open Graph configuration
- `Company/Company.astro`: Company information section
- Other sections: Concept, Contact, Features, Vision, Welcome

### Asset Management
- Static assets in `public/` are served directly
- Component-specific assets in `src/assets/`
- Site manifest and icons configured for PWA support

## Important Notes

- The site is deployed to https://ishinova.co.jp
- Astro's Static Site Generation (SSG) is used by default
- TypeScript is configured with strict mode
- The project uses Bun as the package manager
- Sitemap is automatically generated via @astrojs/sitemap integration

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Architecture](./docs/architecture.md)** - Technical stack, project structure, and design decisions
- **[Development Guide](./docs/development.md)** - Environment setup, coding standards, and Git workflow
- **[Deployment](./docs/deployment.md)** - Build process, deployment procedures, and troubleshooting
- **[Design System](./docs/design-system.md)** - Color palette, typography, spacing, and component styles
- **[Component Reference](./docs/components.md)** - Detailed documentation for all Astro components

Refer to these documents for detailed information about working with this codebase.