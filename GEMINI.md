# Project Context

This is Lucas Pinotti's professional portfolio website.

The new positioning is:
**Software Engineer focused on Backend Systems, AI Agents, Automation Systems, Data Platforms and Operational Platforms.**

The portfolio must be available in both English and Portuguese.

Primary goals:
- Present Lucas as a software engineer with real-world backend, AI automation and operational systems experience.
- Replace generic student-like positioning with a mature professional positioning.
- Highlight internal platforms, AI assistants, Databricks apps and SaaS systems.
- Keep confidential information sanitized.
- Improve project presentation, UI quality, SEO, accessibility and maintainability.

# Tech Stack

Current stack:
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Radix UI/shadcn-like components
- Lucide React
- Framer Motion

**Constraints:** Do not migrate to Next.js, Astro or another framework in this refactor.

# Main Requirements

Implement:
- **Full bilingual content:** English and Portuguese.
- **Language toggle:** Between EN and PT.
- **SEO-friendly Localization:** Routes or state strategy that supports SEO-friendly language versions.
- **Structured content:** Data files for profile, navigation, skills, projects, and SEO.
- **Professional project grid:** High-quality display of work.
- **Project detail modals:** Including images, links, problem/solution, role, features, technologies, and confidentiality notes.
- **Rich Media:** More than one image per project.
- **Reusable Data Structure:** Document-friendly format for quick reuse in other contexts.
- **SEO Optimization:** Title, description, Open Graph, Twitter metadata, canonical, hreflang, sitemap, and robots.txt.
- **Accessibility & Responsiveness:** Semantic HTML, keyboard navigation, and fluid layouts.
- **Curated Experience:** Removal or hiding of non-professional elements (e.g., Tetris page) unless kept as an easter egg.

# Project List

1. **Lysis System**
   - *Description:* Internal operational platform for analysis, management, and tracking of customer service notes for EDP (electric utility).
   - *Key Features:* Workflow centralization, queue monitoring, note processing, and audit trails.

2. **Databricks Apps Template**
   - *Description:* Reusable template for Databricks Apps demonstrating a request chain: Browser -> Frontend -> Backend -> n8n.
   - *Goal:* Provide a consistent app-to-app communication model for internal development.

3. **TalkTOI**
   - *Description:* Internal AI assistant for EDP customer service support.
   - *Architecture:* RAG and agent-based system with skills/tools for internal APIs and customer data.

4. **SIM ERP**
   - *Description:* SaaS ERP for optical stores (FastAPI backend, React frontend).
   - *Features:* Multi-company scoping, JWT auth, inventory, finance, clinical prescriptions, and CSV import/export.

# Confidentiality Rules

For EDP/internal projects:
- **No exposure:** Internal endpoints, tokens, credentials, specific API names, or proprietary flows.
- **No fabrication:** Do not invent metrics.
- **Abstractions:** Use high-level architecture descriptions only.
- **Notes:** Include confidentiality disclaimers in project modals.
- **Sanitization:** Avoid screenshots with real data; use sanitized versions only.

# Quality Rules

- **Modular Code:** Keep components focused and reusable.
- **Pragmatism:** Avoid overengineering; prefer existing dependencies.
- **Standards:** Use semantic HTML and ensure full keyboard navigation.
- **Verification:** Always run `npm run build` and `npm run lint` before finishing.
- **Integrity:** Fix all TypeScript, lint, and build errors. No dead code or unused imports.

# Impeccable Skill

If the `impeccable` skill is available:
- **Read SKILL.md** before use.
- **Strict adherence:** Follow its documentation exactly.
- **Specific use:** Employ it for visual/design/UI review and refinement.
- **Constraint:** Do not invent commands or behaviors not present in its documentation.

If unavailable:
- Continue with manual design review and note the absence in reports.
