# Changelog

All notable changes to the Knowledge Base display feature are documented here.

Entries are listed in reverse chronological order (newest first).

---

## [Unreleased] — 2026-08-14

### Replace PDF.js with markdown rendering (`ngx-markdown` + `marked`)

Replaced the PDF-based knowledge base viewer with an in-app markdown viewer.

#### Motivation

- The Frontend / Backend knowledge bases are maintained as Markdown (`.md`) instead of PDF.
- Rendering Markdown in the page enables proper Table of Contents (ToC) navigation, readable typography, and avoids shipping `pdfjs-dist` plus a large worker asset.
- Direct download of the knowledge-base Markdown sources is prevented by bundling them into lazy JS chunks instead of serving them as static files under `/assets`.

#### Dependencies and tooling

- Added `ngx-markdown` and `marked@^18`.
- Removed `pdfjs-dist`.
- Deleted `src/assets/pdfjs/pdf.worker.min.mjs`.
- Deleted `Frontend-knowledge-base.pdf` and `Backend-knowledge-base.pdf`.
- Added `frontend-knowledge-base.md` and `backend-knowledge-base.md`.

#### How markdown display works

1. **Route**  
   Home links still navigate to  
   `#/layout-pages/display-knowledge-base/:kind`  
   where `:kind` is `angular` or `dotnet`.

2. **Content mapping** (`DisplayKnowledgeBaseComponent`)  
   - `angular` → dynamic `import('.../frontend-knowledge-base.md')`  
   - `dotnet` → dynamic `import('.../backend-knowledge-base.md')`  
   Unknown `kind` values redirect to `/not-found`.

3. **Build-time text loader** (`angular.json`)  
   - `"loader": { ".md": "text" }` makes `.md` imports resolve to a string module (`default` export).  
   - `src/markdown.d.ts` declares `declare module '*.md'`.  
   - The two knowledge-base Markdown files are listed in the assets `ignore` list so they are **not** copied into `dist/assets` as downloadable URLs.

4. **Lazy loading**  
   Each Markdown file becomes its own lazy chunk (for example `frontend-knowledge-base-*.js`). The chunk is fetched only when the knowledge-base route loads the corresponding entry.

5. **Parsing and rendering**  
   - `provideMarkdown({ markedExtensions: [...] })` is registered in `src/main.ts`.  
   - The component binds the loaded string to  
     `<markdown [data]="content" [disableSanitizer]="true">`.  
   - `[data]` passes the raw Markdown into `ngx-markdown`, which uses `marked` to produce HTML.  
   - `[disableSanitizer]="true"` is required because these documents are trusted author content and contain HTML / Angular template snippets that Angular’s DomSanitizer would otherwise strip (which previously logged “sanitizing HTML stripped some content”).

6. **UI**  
   The viewer keeps a scrollable panel, loading / error states, and a Back button. PDF “Open” / download links were removed.

#### How Table of Contents (ToC) navigation works

The knowledge-base Markdown uses Pandoc-style heading IDs and hash links, for example:

```markdown
## Tartalomjegyzék {#tartalomjegyzek}

7. [Components Communication …](#components-communication-v2-input-output-v17-v18)

## 7. Components Communication … {#components-communication-v2-input-output-v17-v18}
```

**Problem with Angular hash routing**

The app uses `withHashLocation()`. A normal browser click on `<a href="#components-communication-…">` would change the URL hash to that fragment. Angular’s router would treat it as a route path, fail to match, and redirect to `/not-found`.

**Solution (two parts)**

1. **Heading IDs at parse time — `pandocHeadingIdExtension`**  
   File: `pandoc-heading-id.extension.ts`, registered in `src/main.ts` via `provideMarkdown({ markedExtensions: [...] })` using the `MARKED_EXTENSIONS` multi-provider.

   **Purpose**  
   The knowledge-base Markdown is authored with **Pandoc-style explicit heading identifiers**: a trailing `{#slug}` on the heading line. That syntax tells the author (and the ToC) which stable fragment ID a section should have, independent of the visible title text.

   Stock `marked` does **not** understand `{#slug}`. Without a custom extension it would:
   - leave `{#components-communication-…}` as visible text inside the `<h2>`;
   - emit a heading **without** an `id` attribute;
   - leave ToC links like `[…](#components-communication-…)` pointing at elements that do not exist.

   `pandocHeadingIdExtension` exists to bridge that gap: it turns author-controlled `{#slug}` markers into real HTML `id`s that ToC hash links can target.

   **How it works**
   - Implements a Marked `renderer.heading` override (Marked extension API).
   - Parses the heading’s inline tokens to HTML/text via `this.parser.parseInline(tokens)` (so links, emphasis, etc. in the title still render correctly — including auto-linked documentation URLs that appear in many headings).
   - Matches a trailing Pandoc ID with `/^(.*)\s*\{#([\w-]+)\}\s*$/`:
     - capture group 1 → visible title (HTML-capable);
     - capture group 2 → the slug used as `id` (letters, digits, `_`, `-`).
   - On match, emits  
     `<h{depth} id="{slug}">{title without {#slug}}</h{depth}>`  
     so the marker never appears in the UI.
   - If there is no `{#slug}`, falls back to a normal heading with no `id`.

   **Example**

   Markdown source:

   ```markdown
   ## 7. Components Communication … https://angular.dev/… {#components-communication-v2-input-output-v17-v18}
   ```

   HTML output (simplified):

   ```html
   <h2 id="components-communication-v2-input-output-v17-v18">
     7. Components Communication … <a href="https://angular.dev/…">…</a>
   </h2>
   ```

   The ToC entry `[…](#components-communication-v2-input-output-v17-v18)` then has a real DOM target for in-page scrolling.

   **Why explicit IDs (not auto-slugified titles)**  
   Titles in these documents are long, bilingual, and versioned; auto-generated slugs would drift whenever a heading is reworded. Explicit `{#slug}` values stay stable and match the ToC entries already written in the Markdown files.

2. **In-page click handling** — `onViewerClick` on the knowledge-base viewer:
   - Listens for clicks inside the scrollable viewer.
   - If the click target is (or is inside) an `<a>` whose `href` starts with `#` but not `#/` (Angular route hashes):
     - calls `preventDefault()` / `stopPropagation()` so the hash router does not navigate;
     - resolves `#slug` to an element with `querySelector('#slug')` inside the viewer;
     - calls `scrollIntoView({ behavior: 'smooth', block: 'start' })`.
   - External links (`https://…`) and Angular route links (`#/…`) are left alone.
   - Headings use `scroll-margin-top` so the scrolled section is not flush against the top edge of the panel.

   Together: the extension **creates** the targets; `onViewerClick` **scrolls** to them without fighting `withHashLocation()`.

**End-to-end ToC flow**

1. User opens Modern Angular or .NET C# from Home.  
2. Markdown loads into a string and is rendered by `ngx-markdown`.  
3. ToC items are ordinary hash links (`href="#…"`).  
4. Click is intercepted → matching heading `id` is found → viewer scrolls to that section.  
5. The Angular route (`#/layout-pages/display-knowledge-base/angular|dotnet`) stays unchanged.

#### Files touched (high level)

- `src/app/layout-pages/display-knowledge-base/*`
- `src/app/layout-pages/display-knowledge-base/pandoc-heading-id.extension.ts`
- `src/main.ts`
- `angular.json`
- `src/markdown.d.ts`
- `package.json` / `pnpm-lock.yaml`
- `src/assets/bigfiles/*.md` (added), PDFs and `pdfjs` worker (removed)

---

## 2026-08-13 — `c37865b` — add: pdfjs

- Added the `pdfjs-dist` dependency to `package.json` so the in-page PDF canvas renderer (introduced in the same day’s follow-up commit) could resolve the library at build/runtime.

---

## 2026-08-13 — `ed7026b` — fix: scroll on mobile the knowledge base, stop using iframe

### What changed

Replaced the `<iframe>` PDF viewer with an in-component **PDF.js** canvas renderer.

### Why

On mobile, iframe-embedded PDFs often fail to scroll reliably (touch scrolling / nested scroll containers). Rendering pages to `<canvas>` elements inside a page-controlled scroll container fixed mobile scrolling.

### Behavior

- Loaded each PDF with `pdfjs-dist` (`getDocument`) and a worker at `assets/pdfjs/pdf.worker.min.mjs`.
- Rendered every page to a canvas scaled to the viewer width.
- Used `ResizeObserver` (debounced) to re-render when the viewer width changed.
- Tracked a render generation counter so stale async renders were discarded on route change / destroy.
- Added loading and error UI, plus “Open PDF” fallback links.
- Configured touch-friendly overflow (`-webkit-overflow-scrolling`, `overscroll-behavior`, `touch-action: pan-y`).

### Files

- `display-knowledge-base.component.{ts,html,scss}`
- `src/assets/pdfjs/pdf.worker.min.mjs`

---

## 2026-08-05 — `0c5d469` — feat: add knowledge base; fix: scroll of the migration list

### What changed

Introduced the Knowledge Base feature on the site.

### Routing and entry points

- Added lazy route: `layout-pages/display-knowledge-base/:kind`.
- Added Home sidebar links:
  - **Modern Angular** → `kind=angular`
  - **.Net C#** → `kind=dotnet`

### Initial viewer implementation

- Standalone `DisplayKnowledgeBaseComponent` with `OnPush` change detection.
- Mapped `angular` / `dotnet` to PDF assets:
  - `assets/bigfiles/Frontend-knowledge-base.pdf`
  - `assets/bigfiles/Backend-knowledge-base.pdf`
- Displayed the PDF in a full-height `<iframe>` using `DomSanitizer.bypassSecurityTrustResourceUrl`.
- Redirected unknown `:kind` values to `/not-found`.
- Provided a Back button to Home.

### Related UI fix in the same commit

- Improved scrolling of the migration list on the Home upgrade panel (layout / overflow adjustments).

### Assets

- Added the large Frontend and Backend knowledge-base PDF files under `src/assets/bigfiles/`.
