# Portfolio Maintenance Guide

This document explains the architecture and maintenance procedures for Lucas Pinotti's bilingual portfolio.

## 1. Content Architecture

All portfolio content is decoupled from UI components and lives in:

- `src/content/portfolioContent.ts`: single source of truth for text, projects, and metadata.
- `src/content/techStack.ts`: typed list of stack logos used by the skills carousel.
- `src/types/portfolio.ts`: TypeScript definitions for content consistency.

## 2. Bilingual Support

The project uses `LanguageContext.tsx` to switch between `en` and `pt`. The `portfolioContent` object has two keys, `en` and `pt`, both following the `PortfolioContent` interface.

Every project text change should be mirrored in both languages.

## 3. Adding or Updating a Project

Projects now focus on fast scanning and practical value:

- problem
- solution
- result
- technologies
- images
- links
- confidentiality note, when needed

Example:

```typescript
{
  id: "my-new-project",
  title: "Project Title",
  category: "Operational Platform",
  status: "Professional / Public",
  shortDescription: "Brief summary for previews and modal header.",
  fullDescription: "Short overview for the modal.",
  problem: "Operational problem or business challenge.",
  solution: "System, workflow, or product built to address it.",
  result: "Practical outcome without invented metrics.",
  features: ["Queue monitoring", "Audit trail"],
  technologies: ["React", "FastAPI"],
  images: [
    { url: "/projects/my-project/cover.png", alt: "Main view" }
  ],
  links: [
    { label: "GitHub", url: "https://github.com/..." }
  ],
  confidentialityNote: "Optional note for internal or sensitive projects."
}
```

Avoid adding fields that are not rendered or reused by code. The project schema intentionally excludes legacy summary fields and role/responsibility fields that are not shown in the UI.

## 4. Image Management

- Location: `public/projects/[project-id]/`
- Recommended format: PNG or WebP.
- Cover image: first image in the `images` array, or the image marked with `type: "cover"`.
- Aspect ratio: 16:9 works well for cards and modals.
- Fallback: broken image paths render a technical placeholder.

## 5. Stack Logos

Technology logos are listed in `src/content/techStack.ts` and expected under `public/stack/`.

Missing SVG files should not break the layout. The carousel renders a text fallback when a logo is unavailable.

## 6. SEO

SEO metadata is localized in the `seo` block of `portfolioContent.ts`:

- `title`
- `description`
- `ogTitle`
- `ogDescription`
- `keywords`

Dynamic updates are handled by `Seo.tsx`.

## 7. Development Workflow

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with HMR. |
| `npm run build` | Build for production. |
| `npm run lint` | Run ESLint checks. |
| `npm run preview` | Preview the production build. |

Quality standards:

- Run `npm run build` and `npm run lint` before finishing.
- Keep confidential projects sanitized.
- Do not invent metrics or expose internal endpoints, credentials, proprietary API names, or sensitive data.
