# Portfolio Maintenance Guide

This document explains the architecture and maintenance procedures for Lucas Pinotti's bilingual portfolio.

## 1. Content Architecture

All portfolio content is decoupled from the UI components and lives in:
- **`src/content/portfolioContent.ts`**: The single source of truth for all text, projects, and metadata.
- **`src/types/portfolio.ts`**: TypeScript definitions ensuring data consistency.

### Bilingual Support
The project uses a React Context (`LanguageContext.tsx`) to manage state between 'en' and 'pt'. The `portfolioContent` object has two main keys: `en` and `pt`, both adhering to the `PortfolioContent` interface.

## 2. Adding a New Project

To add a project, update both the `en` and `pt` arrays in `src/content/portfolioContent.ts`:

1.  **Define the Project Object**:
    ```typescript
    {
      id: "my-new-project",
      title: "Project Title",
      category: "Backend / AI",
      status: "Professional / Public",
      shortDescription: "Brief summary for the card.",
      fullDescription: "Detailed technical narrative for the modal.",
      problem: "Business challenge addressed.",
      solution: "Technical solution implemented.",
      myRole: "Specific engineering responsibilities.",
      technologies: ["Python", "FastAPI"],
      images: [
        { url: "/projects/my-project/cover.png", alt: "Main view" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/..." }
      ],
      documentSummary: {
        oneLine: "...",
        paragraph: "...",
        bulletPoints: ["...", "..."]
      }
    }
    ```
2.  **Add Images**: Place project images in `public/projects/[project-id]/`.
3.  **Confidentiality**: If the project is sensitive, add a `confidentialityNote` string. This will trigger the "Confidential" badge and legal disclaimer.

## 3. Image Management

- **Location**: `public/projects/`
- **Recommended Format**: PNG or WebP.
- **Cover Image**: The first image in the `images` array is used as the card cover.
- **Aspect Ratio**: Aim for 16:9 for consistent card and modal layouts.
- **Fallback**: If an image path is broken, the UI will automatically show a stylized technical placeholder.

## 4. Updating SEO

SEO metadata is localized. Update the `seo` block in `portfolioContent.ts`:
- `title`: Browser tab title.
- `description`: Meta description for search engines.
- `ogTitle` / `ogDescription`: Social media preview text.
- `keywords`: Technical tags for indexing.

Dynamic updates are handled by the `Seo.tsx` component via DOM manipulation.

## 5. Development Workflow

### Requirements
- Node.js
- npm (or bun/pnpm)

### Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with HMR. |
| `npm run build` | Build for production (outputs to `dist/`). |
| `npm run lint` | Run ESLint checks. |
| `npm run preview` | Locally preview the production build. |

### Quality Standards
- Always run `npm run build` before pushing to ensure no TypeScript or build errors.
- Ensure every text change is mirrored in both `en` and `pt` versions.
- Adhere to **OKLCH** colors in `index.css` for any new global styles.
