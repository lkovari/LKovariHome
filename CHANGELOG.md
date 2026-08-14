# Changelog

All notable changes to the Knowledge Base display feature are documented here.

Entries are listed in reverse chronological order (newest first). All dated entries below are **Released / Deployed**.

---

## [Released] — 2026-08-15 — Deployed — Email domain MX check

### Reject addresses whose domain has no mail exchanger

`Validators.email` only checks format. Continue now also queries public DNS-over-HTTPS for **MX** records on the domain after `@`. The lookup runs in the browser (no Cloud Function, no API key). A missing exchanger blocks the gate; `sessionStorage` and Firestore are not written.

This proves the **domain** can receive mail, not that the mailbox (`lala@…`) exists. Firebase Auth confirmation links are still not used.

#### Lookup

| Step | Behaviour |
|------|-----------|
| Provider | `GET https://cloudflare-dns.com/dns-query?name={domain}&type=MX` (`Accept: application/dns-json`) |
| Fallback | Same query against `https://dns.google/resolve` if Cloudflare fetch/HTTP/SERVFAIL fails |
| Timeout | `min(networkLoadTimeoutMs(), 8 s)` via `withTimeout` |
| Spinner | Global wait spinner for the lookup (`begin` / `finally end`) |
| Session restore | Existing `sessionStorage.knowledgeBaseEmail` still skips the gate (no second MX check in the same tab) |

NOERROR with usable MX (DNS type 15, not RFC 7505 null MX `0 .`) → continue. Empty Answer, NXDOMAIN (Status 3), or only null MX → reject. A/AAAA implicit MX is **not** accepted.

#### User-facing gate errors

| Situation | Message |
|-----------|---------|
| Format (`required` / `email`) | Email is required. / Please enter a valid email address. |
| No MX / NXDOMAIN / null MX | This email domain cannot receive mail. Please use an address on a domain that accepts email. |
| Offline | You appear to be offline. Check your connection and try again. |
| Lookup timeout | Could not verify the email domain in time. Check your connection and try again. |
| DNS/network failure | Could not verify the email domain. Check your connection and try again. |

Implementation: `src/app/shared/services/email-mx/email-mx-check.ts`, wired in `DisplayKnowledgeBaseComponent.submitEmail`.

---

## [Released] — 2026-08-15 — Deployed — Adaptive Firestore load timeout

### Network-aware timeout for knowledge-base Markdown

`getDoc` for `knowledgeBases/{kind}` no longer waits forever. The wait spinner is always released in `finally`. If the load exceeds a timeout derived from the Network Information API, the overlay hides and a Retry-capable error is shown.

#### Timeouts (`networkLoadTimeoutMs`)

The spec’s `navigator.connection.effectiveType` is `slow-2g` | `2g` | `3g` | `4g` (there is no `'5g'` value). Fast 5G/Wi‑Fi is approximated as `4g` plus `downlink >= 10` Mbps.

| Detected quality | Timeout | Spinner |
|------------------|---------|---------|
| Offline (`navigator.onLine === false`) | Immediate fail (no wait) | Off |
| `slow-2g` | 60 s | Off after timeout |
| `2g`, or `saveData` | 45 s | Off after timeout |
| `3g` | 20 s | Off after timeout |
| `4g` | 12 s | Off after timeout |
| `4g` and downlink ≥ 10 Mbps (5G-class) | 8 s | Off after timeout |
| API missing (typical desktop) | 15 s | Off after timeout |

Implementation: `withTimeout(getKnowledgeBase(), networkLoadTimeoutMs())` in `src/app/shared/services/network-load/network-load-timeout.ts`.

#### User-facing load errors

| Situation | Message |
|-----------|---------|
| Offline | You appear to be offline. Check your connection and try again. |
| Timeout | The knowledge base took too long to load on this network. Check your connection and try again. |
| Missing / empty document | The knowledge base was not found. |
| Firestore `permission-denied` | The knowledge base could not be loaded (permission denied). |
| Firestore `unavailable` / `deadline-exceeded` | The knowledge base could not be loaded. Check your connection and try again. |
| Anything else | The knowledge base could not be loaded. Please try again. |

Raw Firebase exception text is not shown. Each error includes a **Retry** button (`retryLoad()`).

Access logging (`accessLogs`) runs **after** the Markdown is on screen and does **not** hold the spinner. Log failures are ignored so a logging outage cannot block reading.

---

## [Released] — 2026-08-15 — Deployed

### Load knowledge-base Markdown from Firestore; email gate; global wait spinner

Moved the Angular and .NET knowledge bases out of the GitHub repository and onto a dedicated Firebase project. Viewing a knowledge base now requires an email address. Long-running loads use a global overlay spinner with a ref-count so concurrent callers share one spinner.

#### Motivation

- Markdown sources in `src/assets/bigfiles/` were still reachable from the public GitHub repo even after `ngx-markdown` replaced PDF.js.
- Spark-plan **Cloud Storage** is not available (Blaze required since 2026-02-03). Firestore on Spark can store the Markdown as string fields (1 MiB per document). The Frontend (~391 KB) and Backend (~631 KB) files fit in one document each.
- A format-only email check does not prove the mailbox exists; it is enough to record who opened the viewer. Existence would require a confirmation link (Firebase Auth), which is not part of this change.
- Several features need a blocking wait UI. A single overlay with `begin()` / `end()` ref-counting avoids per-page spinners fighting each other.

#### Firebase project `knowledgebase-store` (Spark)

This is a **second** Firebase project. Digits continues to use `numbers-55698` via `environment.firebasePuzzleData` and AngularFire compat on the digits route only.

| Item | Value |
|------|--------|
| Console | https://console.firebase.google.com/project/knowledgebase-store |
| Edition | Firestore **Standard** |
| Security start mode | **Production** (`allow read, write: if false` until custom rules) |
| Client config | `environment.firebaseKnowledgeBase` in `environment.ts` and `environment.prod.ts` |
| SDK | Modular `firebase` v11 (`initializeApp(..., 'knowledgebase')` named app) so it does not collide with the Digits default app |

**Collections**

```
knowledgeBases (manual document IDs)
  angular
    markdown: string
    locale: string          // e.g. "en"
    updatedAt: timestamp
  dotnet
    markdown: string
    locale: string
    updatedAt: timestamp

accessLogs (Auto-ID per visit)
  {autoId}
    email: string
    locale: string          // typically navigator.language
    knowledgeBaseId: string // "angular" | "dotnet"
    viewedAt: timestamp     // serverTimestamp()
```

Content lives once in `knowledgeBases`. Each successful open appends a small `accessLogs` row. Do not copy the Markdown onto every access log (size and privacy).

**Security rules** (publish in the Firestore Rules tab):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /knowledgeBases/{id} {
      allow read: if true;
      allow write: if false;
    }
    match /accessLogs/{id} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

Clients may read Markdown and create access-log rows. They cannot list other people’s emails or update knowledge-base documents (edits stay in the Firebase console / Admin). `read: if true` on `knowledgeBases` still means the text is visible in the browser Network tab once displayed — that is inherent to client-side rendering.

#### How the viewer loads content

1. Home → **Modern Angular** or **.Net C#** → `#/layout-pages/display-knowledge-base/angular|dotnet`.
2. Route providers: `KnowledgeBaseFirestoreService` (lazy with that route).
3. If `sessionStorage.knowledgeBaseEmail` is a value that passes `Validators.email`, the gate is skipped for the rest of the tab session. Otherwise the user must enter an email.
4. `submitEmail` uses Angular **`Validators.required`** and **`Validators.email`** (no custom regex). Invalid input never writes Firestore.
5. `KnowledgeBaseFirestoreService.getKnowledgeBase(kind)` reads `knowledgeBases/{kind}` via `getDoc`.
6. On success, `ngx-markdown` still renders with `[data]="content"` and `[disableSanitizer]="true"`. Pandoc `{#slug}` ToC behaviour is unchanged (`pandocHeadingIdExtension` + `onViewerClick`).
7. `logAccess` then `addDoc`s to `accessLogs` with email, locale, `knowledgeBaseId`, and `serverTimestamp()`.
8. Unknown `:kind` still redirects to `/not-found`. Missing documents show an in-page error.

Service file: `knowledge-base-firestore.service.ts`. It calls `getApps()` / `initializeApp(environment.firebaseKnowledgeBase, 'knowledgebase')` and `getFirestore` on that named app.

#### Email gate details

- Template: Material outline field, `type="email"`, `[formControl]="emailControl"`.
- `FormControl` validators: `Validators.required`, `Validators.email` (`@angular/forms`). Empty values need `required` because `Validators.email` treats empty as valid.
- Errors: “Email is required.” / “Please enter a valid email address.” after touch or Continue.
- Session key: `knowledgeBaseEmail`. Closing the tab clears it; Angular vs .NET in the same tab does not ask twice.
- This is **format** validation only. Disposable or non-existent mailboxes (e.g. `lala@lila.hu` if the domain has no mailbox) are not rejected. MX lookup or Firebase Auth email-link verification were considered and not implemented here.

#### Removed from the repository (viewer sources)

- Deleted `src/assets/bigfiles/frontend-knowledge-base.md` and `backend-knowledge-base.md`.
- Removed the `angular.json` assets `ignore` entries that excluded those two files from `dist` (they were ignored so they would not be static URLs while still being bundled as text). Assets are again `"src/favicon.ico"` + `"src/assets"`.
- The viewer no longer `import()`s `.md` files. `"loader": { ".md": "text" }` remains for any other Markdown imports.

**Not removed:** Learning Check Markdown (`frontend-interview-questions-w-answers.md`, fakes), Labyrinth / Mersenne docs, About Me PDFs.

Git history may still contain the deleted `.md` files until history is rewritten; the working tree and future deploys do not.

#### Global wait spinner (refCount)

| Piece | Role |
|-------|------|
| `WaitSpinnerService` (`providedIn: 'root'`) | `refCount` signal; `begin()` +1; `end()` −1 but not below 0; `visible` = `refCount > 0` |
| `WaitSpinnerComponent` | Full-viewport overlay + `mat-progress-spinner` when `visible()` |
| `AppComponent` template | `<app-wait-spinner />` next to `<router-outlet />` so every feature area can use it |

`DisplayKnowledgeBaseComponent.loadMarkdown` calls `begin()` before Firestore I/O and `end()` in `finally`, including cancelled generation and errors. Two overlapping loads keep the overlay up until both have ended.

Other features can inject `WaitSpinnerService` and use the same `begin` / `try` / `finally { end() }` pattern.

Specs: `wait-spinner.service.spec.ts` (refCount / visibility); `AppComponent` spec uses `provideNoopAnimations()` because of `MatProgressSpinner`.

#### Files touched (high level)

- `src/environments/environment.ts`, `environment.prod.ts`
- `src/app/app.routes.ts` (route `providers: [KnowledgeBaseFirestoreService]`)
- `src/app/app.component.{ts,html,spec.ts}`
- `src/app/layout-pages/display-knowledge-base/*`
- `src/app/shared/services/wait-spinner/*`
- `src/app/shared/components/wait-spinner/*`
- `angular.json`
- Deleted knowledge-base `.md` assets

---

## [Released] — 2026-08-14 — Deployed

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
