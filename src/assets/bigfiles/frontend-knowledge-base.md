# Front-End knowledge base
Collected by László Kővári

## Tartalomjegyzék {#tartalomjegyzek}

1. [TypeScript Configuration (TypeScript 5+)](#typescript-configuration-typescript-5)
2. [Angular Compiler Options (v9+ (Ivy))](#angular-compiler-options-v9-ivy)
3. [Change Detection Strategy (OnPush) (v2+ · default from v22)](#change-detection-strategy-onpush-v2-v22-tol-alapertelmezett)
4. [Routing – Location Strategies (v2+ · withHashLocation() v15+)](#routing-location-strategies-v2-withhashlocation-v15)
5. [Routing – Passing Parameters (v2+)](#routing-parameterek-atadasa-v2)
6. [Routing Events and Guards (v2+ · functional guards v15+ · canMatch v14.2+)](#routing-events-es-guards-v2-funkcionalis-guardok-v15-canmatch-v14-2)
7. [Components Communication (v2+ · input()/output()/model() v17.x)](#components-communication-v2-input-output-v17-v18)
8. [RxJS Operators (RxJS 6+)](#rxjs-operators-rxjs-6)
9. [Observables – Hot & Cold (RxJS 6+)](#observables-hot-cold-rxjs-6)
10. [Subjects (RxJS 6+)](#subjects-rxjs-6)
11. [ES6-ES15 Features (Short Overview) (ECMAScript 2015–2025)](#es6-es15-features-rovid-osszefoglalo-ecmascript-2015-2025)
12. [ViewEncapsulation (v2+)](#viewencapsulation-v2)
13. [CSS Specificity (CSS)](#css-specificity-css)
14. [CSS Combinators (CSS)](#css-combinators-css)
15. [Pseudo Classes (CSS)](#pseudo-classes-css)
16. [Positioning (CSS)](#positioning-css)
17. [Closure (JavaScript)](#closure-javascript)
18. [TypeScript Data Types (and JavaScript Data Types) (TypeScript 5+)](#typescript-data-types-es-javascript-data-types-typescript-5)
19. [Error Handling (v2+ · functional interceptors v15+)](#error-handling-v2-funkcionalis-interceptorok-v15)
20. [Pipes (v2+)](#pipes-v2)
21. [Directives (v2+ · @if/@for/@switch v17+)](#directives-v2-if-for-switch-v17)
22. [Generics (TypeScript 5+)](#generics-typescript-5)
23. [DI – Resolution Modifiers (v2+ · inject() options v14+)](#di-resolution-modifiers-v2-inject-opciok-v14)
24. [Class, Property, Method, Parameter Decorators (TypeScript 5+ · v2+)](#class-property-method-parameter-decorators-typescript-5-v2)
25. [Monkey Patching in JavaScript (JavaScript)](#monkey-patching-javascript-ben-javascript)
26. [CSS Units (CSS)](#css-units-css)
27. [HTML & CSS Antipatterns (HTML/CSS)](#html-css-antipatterns-html-css)
28. [Angular & TypeScript Antipatterns (v2+)](#angular-typescript-antipatterns-v2)
29. [Bootstrap – Commonly Used Elements (Bootstrap 5)](#bootstrap-gyakran-hasznalt-elemek-bootstrap-5)
30. [Flexbox (CSS)](#flexbox-css)
31. [CSS Grid – Example (CSS)](#css-grid-pelda-css)
32. [Angular Version Overview (v5–v19, Short Overview) (v5–v19)](#angular-version-overview-v5-v19-rovid-attekintes-v5-v19)
33. [Angular 17 – New Features (v17)](#angular-17-uj-funkciok-v17)
34. [Angular 18 – New Features (v18)](#angular-18-uj-funkciok-v18)
35. [Angular 19 – New Features (First Overview) (v19)](#angular-19-uj-funkciok-elso-attekintes-v19)
36. [RouterTestingHarness (v14+)](#routertestingharness-v14)
37. [Directive Composition API (v15+)](#directive-composition-api-v15)
38. [Angular Signals (v16 dev preview · v17 stable)](#angular-signals-v16-dev-preview-v17-stable)
39. [Signal Input / Output (input() v17 · output() v17.3 · model() v17.2 · signal query-k v17.2)](#signal-input-output-input-v17-output-model-v18-signal-query-k-v17-2)
40. [ngOptimizedImage (v14 dev preview · v15 stable · decoding v21+)](#ngoptimizedimage-v14-dev-preview-v15-stable-decoding-v21)
41. [ngTemplateOutlet (v2+)](#ngtemplateoutlet-v2)
42. [ngProjectAs (v2+ · ng-content fallback v18+)](#ngprojectas-v2-ng-content-fallback-v18)
43. [Content Projection (v2+ · fallback tartalom v18+)](#content-projection-v2-fallback-tartalom-v18)
44. [ngNonBindable (v2+)](#ngnonbindable-v2)
45. [Custom Structural Directive – Example (v2+)](#custom-structural-direktiva-pelda-v2)
46. [Directives and Their Usage (ng* helpers) (v2+)](#directivak-es-hasznalatuk-ng-segedek-v2)
47. [Zoneless Change Detection (v18 experimental · v20.2 stable)](#zoneless-change-detection-v18-kiserleti-v20-2-stable)
48. [Server Side Rendering (SSR) (v17+ (@angular/ssr))](#server-side-rendering-ssr-v17-angular-ssr)
49. [Angular Migration Commands (v6+ (ng update))](#angular-migration-commands-v6-ng-update)
50. [UntypedFormGroup (v14+)](#untypedformgroup-v14)
51. [UntypedFormBuilder (v14+)](#untypedformbuilder-v14)
52. [Data Binding (v2+)](#data-binding-v2)
53. [Built-in Validators (v2+)](#built-in-validators-v2)
54. [Builder Settings (v16+ (esbuild) · v17+ application builder)](#builder-settings-v16-esbuild-v17-application-builder)
55. [TypeScript Method Overload / Override (TypeScript 5+)](#typescript-method-overload-override-typescript-5)
56. [FakeAsync, tick, flush, flushMicrotask (v2+ · zone-based; use Vitest fake timers when zoneless)](#fakeasync-tick-flush-flushmicrotask-v2-zone-alapu-zoneless-helyett-vitest-fake-timers)
57. [Component Selectors (v2+)](#component-selectors-v2)
58. [Style Binding (v2+)](#style-binding-v2)
59. [DestroyRef (v16+)](#destroyref-v16)
60. [Injection Context (v14+ · runInInjectionContext v16+)](#injection-context-v14-runininjectioncontext-v16)
61. [Template Reference Variables (v2+)](#template-reference-variables-v2)
62. [Structural Directive – Accessing Exported Values (v2+ · @let v19+)](#structural-directive-exportalt-ertek-elerese-v2-let-v19)
63. [Signal (v16 dev preview · v17 stable)](#signal-v16-dev-preview-v17-stable)
64. [Effect (v16 dev preview · v20 stable)](#effect-v16-dev-preview-v20-stable)
65. [Computed (v16 dev preview · v17 stable)](#computed-v16-dev-preview-v17-stable)
66. [LinkedSignal (v19 experimental · v20 stable)](#linkedsignal-v19-kiserleti-v20-stable)
67. [TypeScript Utility Types Cheat Sheet (TypeScript 5+)](#typescript-utility-types-cheat-sheet-typescript-5)
68. [SignalStore (@ngrx/signals 17+)](#signalstore-ngrx-signals-17)
69. [Angular 20 – New Features (v20)](#angular-20-uj-funkciok-v20)
70. [What to Try First – Practical Order for Teams (v17–v22)](#mit-erdemes-elsokent-kiprobalni-gyakorlati-sorrend-csapatoknak-v17-v22)
71. [Angular Upgrade Migrations (v6+ (ng update) · schematics v14+)](#angular-upgrade-migrations-v6-ng-update-schematics-v14)
72. [Angular Typed Forms (v14+)](#angular-typed-forms-v14)
73. [Modern Angular – Production Grade Architektúra Best Practices (v19–v22)](#modern-angular-production-grade-architektura-best-practices-v19-v22)
74. [Signal Store – Deeper Introduction (@ngrx/signals 17+)](#signal-store-melyebb-bevezeto-ngrx-signals-17)
75. [Form → Store → API (v16+)](#form-store-api-v16)
76. [Facade Service (v2+)](#facade-service-v2)
77. [NGRX (NgRx 15+ (createActionGroup, functional effects))](#ngrx-ngrx-15-createactiongroup-functional-effects)
78. [Change Detection – What Triggers It? (The 5 Main Causes) (v2+ · zoneless v20+)](#change-detection-mi-valtja-ki-az-5-fo-ok-v2-zoneless-v20)
79. [OnPush as the Default Change Detection Strategy (v22+)](#onpush-mint-alapertelmezett-change-detection-strategia-v22)
80. [afterRender Side Effects – afterRender and afterNextRender (v17+)](#rendereles-utani-mellekhatasok-afterrender-es-afternextrender-v17)
81. [Router View Transition Animations (v17+)](#router-nezetvaltas-animaciok-view-transitions-v17)
82. [First Signal-Based Router API (v21+)](#elso-signal-alapu-api-a-routerben-v21)
83. [Signal Forms – Declarative Forms with Signals (v21 experimental · v22 expanded)](#signal-forms-deklarativ-urlapok-signalokkal-v21-kiserleti-v22-bovitett)
84. [Vitest as the Default Testing Framework (v20 experimental · v21 default)](#vitest-mint-alapertelmezett-tesztelesi-keretrendszer-v20-kiserleti-v21-alapertelmezett)
85. [Angular Aria – Headless, Accessible UI Components (v21+)](#angular-aria-headless-akadalymentes-ui-komponensek-v21)
86. [Angular MCP Server (v21+ experimental)](#angular-mcp-szerver-v21-kiserleti)
87. [New Template Expressions – Spread, Arrow Function, instanceof (v21–v22)](#uj-template-kifejezesek-spread-arrow-function-instanceof-v21-v22)
88. [Multiple Switch Case Matching in Templates (v22+)](#tobbszoros-switch-case-illesztes-a-sablonokban-v22)
89. [Standalone isActive Function (v22+)](#standalone-isactive-fuggveny-v22)
90. [Incremental Hydration as Default (v19 experimental · v20 stable · v22 default)](#inkrementalis-hydration-alapertelmezettkent-v19-kiserleti-v20-stable-v22-alapertelmezett)
91. [Route Injector Cleanup (Kísérleti) (v22+ experimental)](#route-injector-cleanup-kiserleti-v22-kiserleti)
92. [CDK Dialog és Menu (v14+ (CDK))](#cdk-dialog-es-menu-v14-cdk)
93. [Setting the Page Title (TitleStrategy) (v14+)](#az-oldal-cimenek-beallitasa-titlestrategy-v14)
94. [ENVIRONMENT_INITIALIZER Injection Token (v14+ · provideEnvironmentInitializer() v19+)](#environment-initializer-injection-token-v14-provideenvironmentinitializer-v19)
95. [Accessing Protected Members from Templates (v14+)](#protected-tagok-elerese-a-sablonbol-v14)
96. [Angular Extended Diagnostics (v13.2+ · bővítve v14, v19, v20)](#angular-extended-diagnostics-v13-2-bovitve-v14-v19-v20)
97. [Router Data Input Bindings (withComponentInputBinding) (v16+)](#router-data-input-bindings-withcomponentinputbinding-v16)
98. [Introducing Hybrid (Zoneless) Change Detection (v18 experimental · v20 stable)](#hybrid-zoneless-change-detection-bevezetese-v18-kiserleti-v20-stable)
99. [RedirectCommand (v18+)](#redirectcommand-v18)
100. [AfterRenderEffect (v19 experimental)](#afterrendereffect-v19-kiserleti)
101. [RouterOutlet Data Input (v19+)](#routeroutlet-data-input-v19)
102. [Keepalive Fetch Requests (v20+)](#keepalive-fetch-keresek-v20)
103. [Removing ng-reflect Attributes (v20 optional · v22 default)](#ng-reflect-attributumok-megszuntetese-v20-opcionalis-v22-alapertelmezett)
104. [Direct ARIA Attribute Binding (v21+)](#aria-attributumok-kozvetlen-bindingja-v21)
105. [Server-Side Bootstrap Fix (BootstrapContext) (v21+)](#szerveroldali-bootstrap-javitasa-bootstrapcontext-v21)
106. [Image Loader Enhancements (v22+)](#image-loader-bovitesek-v22)
107. [Resource Snapshot (v21.2+)](#resource-snapshot-v22)
108. [Resource Cache for SSR (TransferState) (v22+)](#resource-cache-ssr-hez-transferstate-v22)
109. [SignalFormControl – Bridge Between Reactive and Signal Forms (v22+)](#signalformcontrol-hid-reactive-es-signal-forms-kozott-v22)
110. [@Service Decorator (v22+)](#service-dekorator-v22)
111. [Lazy Service Injection (injectAsync) (v22+)](#lazy-service-injection-injectasync-v22)
112. [Debouncing Signals (v22+)](#signalek-debounce-olasa-v22)
113. [Web MCP Tools (v22+ experimental)](#web-mcp-eszkozok-v22-kiserleti)
114. [AI Agent Skills for Angular (v22+)](#ai-agent-skills-az-angularhoz-v22)
115. [Stability Debugging (provideStabilityDebugging) (v22+)](#stabilitas-debugolasa-providestabilitydebugging-v22)
116. [Preventing Property Drilling – `:host-context()` és CSS Kontextus (v2+ (CSS))](#property-drilling-megelozese-host-context-es-css-kontextus-v2-css)
117. [Preventing Property Drilling – Hierarchikus DI Token (v2+ · inject() options v14+)](#property-drilling-megelozese-hierarchikus-di-token-v2-inject-opciok-v14)
118. [CSS Custom Properties as Context Passing (CSS)](#css-custom-properties-css-valtozok-mint-kontextus-atadas-css)
119. [Preventing Property Drilling – ContentChild / TemplateRef Injection (v2+ · contentChild() signal query v17.2+)](#property-drilling-megelozese-contentchild-templateref-injekcio-v2-contentchild-signal-query-v17-2)
120. [Micro-Frontend Architecture – Basics and Decision Criteria (architektúra · v14+)](#micro-frontend-architektura-alapok-es-dontesi-szempontok-architektura-v14)
121. [Native Federation – Shell and Remote Setup (@angular-architects/native-federation · v16+ (esbuild))](#native-federation-shell-es-remote-beallitasa-angular-architects-native-federation-v16-esbuild)
122. [Communication Between Micro-Frontends (v16+)](#micro-frontendek-kozotti-kommunikacio-v16)
123. [Web Components as Micro-Frontend Abstraction (v15+ (createApplication/createCustomElement))](#web-components-mint-micro-frontend-absztrakcio-v15-createapplication-createcustomelement)
124. [Vertical Slicing and Modulith – Sustainable Architecture (architektúra · v15+ standalone)](#vertical-slicing-es-modulith-fenntarthato-architektura-architektura-v15-standalone)
125. [Architecture Enforcement: Sheriff, Detective, Nx Boundaries (Sheriff/Nx · version-agnostic)](#architektura-kikenyszerites-sheriff-detective-nx-boundaries-sheriff-nx-verziofuggetlen)
126. [Nx Monorepo and Reusable Libraries (Nx 19+ · Angular CLI v14+)](#nx-monorepo-es-ujrafelhasznalhato-konyvtarak-nx-19-angular-cli-v14)
127. [Architecture Analysis with Forensic Techniques (version-agnostic)](#architektura-elemzese-forenzikus-technikakkal-verziofuggetlen)
128. [NgRx Signal Store – Mutations, rxMethod, signalMethod (@ngrx/signals 18+ · ngrx-toolkit)](#ngrx-signal-store-mutations-rxmethod-signalmethod-ngrx-signals-18-ngrx-toolkit)
129. [NgRx Signal Store – Entity Management and Normalization (@ngrx/signals 18+)](#ngrx-signal-store-entity-management-es-normalizalas-ngrx-signals-18)
130. [NgRx Signal Store – Events API (Flux/Redux Pattern) (@ngrx/signals 19+)](#ngrx-signal-store-events-api-flux-redux-minta-ngrx-signals-19)
131. [NgRx Signal Store – Custom Features and Redux DevTools (@ngrx/signals 17+)](#ngrx-signal-store-custom-features-es-redux-devtools-ngrx-signals-17)
132. [Resource API in Depth – resource, rxResource, httpResource (resource v19 experimental · httpResource v20+)](#resource-api-melyebben-resource-rxresource-httpresource-resource-v19-kiserleti-httpresource-v20)
133. [Signal Forms in Depth – Schemas, Zod, Submit, Validators (v21 experimental · v22 expanded)](#signal-forms-melyebben-semak-zod-submit-validatorok-v21-kiserleti-v22-bovitett)
134. [Signal Forms – Groups, Arrays, Subforms, Metadata, Custom Fields (v21 experimental · v22 expanded)](#signal-forms-groups-arrays-subforms-metadata-custom-fields-v21-kiserleti-v22-bovitett)
135. [Modern Testing with Vitest – TestBed, Locators, Mocking (v20 experimental · v21 default · TestBed bindings v21+)](#modern-teszteles-vitesttel-testbed-locators-mockolas-v20-kiserleti-v21-alapertelmezett-testbed-bindings-v21)
136. [Fake Timers, Debounce Testing and Coverage (Vitest · v20+)](#fake-timers-debounce-teszteles-es-coverage-vitest-v20)
137. [E2E Testing with Playwright (version-agnostic)](#e2e-teszteles-playwrighttal-verziofuggetlen)
138. [HttpClient in Depth – Functional Interceptors, Retry, Cache (provideHttpClient v15+ · withFetch v16+ · keepalive v20+)](#httpclient-melyebben-functional-interceptorok-retry-cache-providehttpclient-v15-withfetch-v16-keepalive-v20)
139. [Authentication and Authorization – Modern Patterns (v15+ · RedirectCommand v18+)](#authentikacio-es-authorizacio-modern-mintak-v15-redirectcommand-v18)
140. [Frontend Security – XSS, CSP, Trusted Types (v2+ · CSP nonce v16+)](#frontend-biztonsag-xss-csp-trusted-types-v2-csp-nonce-v16)
141. [Internationalization (i18n) (@angular/localize v9+ · subPath v20+)](#internacionalizacio-i18n-angular-localize-v9-subpath-v20)
142. [Accessibility (a11y) in Practice (CDK a11y v2+ · Angular Aria v21+)](#akadalymentesites-a11y-a-gyakorlatban-cdk-a11y-v2-angular-aria-v21)
143. [Performance and Core Web Vitals (@defer v17+ · ng.enableProfiling() v20+)](#teljesitmeny-es-core-web-vitals-defer-v17-ng-enableprofiling-v20)
144. [Hybrid Rendering, Server Routes, Prerender, Event Replay (server routes v19 experimental · v20 stable · event replay v18+)](#hybrid-rendering-server-routes-prerender-event-replay-server-routes-v19-kiserleti-v20-stable-event-replay-v18)
145. [Dynamic Components, Templates and Containers (v2+ · createComponent bindings/directives v20+)](#dinamikus-komponensek-template-ek-es-containerek-v2-createcomponent-bindings-directives-v20)
146. [Initializers – App, Environment, Platform (v14+ · provideAppInitializer v19+)](#initializerek-app-environment-platform-v14-provideappinitializer-v19)
147. [Angular CDK – Commonly Used Building Blocks (CDK v14+)](#angular-cdk-gyakran-hasznalt-epitoelemek-cdk-v14)
148. [RxJS and Signal Interop – When to Use Which (toSignal/toObservable v16+ · stable v20)](#rxjs-es-signal-interop-mikor-melyiket-tosignal-toobservable-v16-stable-v20)
149. [Advanced TypeScript Type Patterns in Practice (TypeScript 5+ (satisfies 4.9+, const type param 5.0+))](#typescript-halado-tipusmintak-a-gyakorlatban-typescript-5-satisfies-4-9-const-type-param-5-0)
150. [SOLID, KISS, YAGNI, DRY in Angular Code (version-agnostic)](#solid-kiss-yagni-dry-az-angular-kodban-verziofuggetlen)
151. [Common Design Patterns in Angular (v2+)](#gyakran-hasznalt-design-patternek-angularban-v2)
152. [Code Quality and Tooling – ESLint Flat Config, Prettier, Husky (angular-eslint 18+ (flat config))](#kodminoseg-es-tooling-eslint-flat-config-prettier-husky-angular-eslint-18-flat-config)
153. [CI/CD Pipeline for Angular Monorepos (Nx 19+ · version-agnostic)](#ci-cd-pipeline-angular-monorepohoz-nx-19-verziofuggetlen)
154. [Angular Style Guide 2026 – Naming and File Structure (v20+ style guide)](#angular-style-guide-2026-elnevezes-es-fajlstruktura-v20-style-guide)
155. [SCSS Architecture, Tailwind and Design Tokens (CSS/SCSS · Tailwind 3–4)](#scss-architektura-tailwind-es-design-tokenek-css-scss-tailwind-3-4)
156. [PWA, Service Worker and Web Workers (@angular/pwa v14+ · provideServiceWorker v15+)](#pwa-service-worker-es-web-workers-angular-pwa-v14-provideserviceworker-v15)
157. [AI-Assisted Development in Angular (MCP v21+ · Web MCP és agent skillek v22+)](#ai-tamogatott-fejlesztes-angularban-mcp-v21-web-mcp-es-agent-skillek-v22)
158. [Future Directions (v23+ (bejelentett irány))](#jovobeli-iranyok-v23-bejelentett-irany)
159. [Adoption and Version Upgrade Checklist (v14 → v22)](#bevezetesi-es-verziofrissitesi-checklist-v14-v22)
160. [Secondary Routing – Named Outlets and Auxiliary Routes (v2+ · withComponentInputBinding v16+ · routerOutletData v19+)](#secondary-routing-named-outletek-es-auxiliary-route-ok-v2-withcomponentinputbinding-v16-routeroutletdata-v19)
161. [Route Patterns in Practice – Wildcard, Redirect, UrlMatcher, Resolve (v2+ · canMatch v14.2+ · functional resolver v15+ · függvény-redirect v18+)](#route-mintak-a-gyakorlatban-wildcard-redirect-urlmatcher-resolve-v2-canmatch-v14-2-funkcionalis-resolver-v15-fuggveny-redirect-v18)
162. [Preloading Strategies and Network-Aware Preloading (v2+ · withPreloading v15+ · @defer prefetch v17+)](#preloading-strategiak-es-halozat-tudatos-preloading-v2-withpreloading-v15-defer-prefetch-v17)
163. [ngModelGroup and Reactive Forms Alternatives (v2+ · Typed Forms v14+ · Signal Forms v21+)](#ngmodelgroup-es-reactive-forms-alternativai-v2-typed-forms-v14-signal-forms-v21)
164. [ControlValueAccessor – Custom Form Control (v2+ · FormValueControl v21+)](#controlvalueaccessor-sajat-urlapvezerlo-v2-formvaluecontrol-v21)
165. [providers vs viewProviders (v2+ · route-szintű providers v14+)](#providers-vs-viewproviders-v2-route-szintu-providers-v14)
166. [Pipes in Depth – Pure vs Impure, Custom Pipe, Performance (v2+ · standalone pipe v14+)](#pipe-ok-melyebben-pure-vs-impure-sajat-pipe-teljesitmeny-v2-standalone-pipe-v14)
167. [Practical Q&A Collection (v2–v22)](#gyakorlati-kerdes-valasz-gyujtemeny-v2-v22)
168. [Angular Feature Index by Version (v14–v22) (v14–v22)](#angular-feature-index-verzio-szerint-v14-v22-v14-v22)
169. [Bundle Optimization – Main Chunk, Tree Shaking, Code-Level Decisions (v14+ · esbuild v16+ · @defer v17+)](#bundle-optimalizalas-main-chunk-tree-shaking-kodszintu-dontesek-v14-esbuild-v16-defer-v17)
170. [Global Error Handling and Correlation ID (v2+ · functional interceptors v15+ · inject() v14+)](#globalis-hibakezeles-es-correlation-id-v2-funkcionalis-interceptorok-v15-inject-v14)
171. [Angular Injectors – Types, Hierarchy and Resolution Model (v2+ · EnvironmentInjector v14+ · inject() options v14+)](#angular-injectorok-tipusok-hierarchia-es-feloldasi-modell-v2-environmentinjector-v14-inject-opciok-v14)
172. [Signal Semantics – Reactive Context, Auto-tracking, untracked (v16+ · v17 stable)](#signal-szemantika-reaktiv-kontextus-auto-tracking-untracked-v16-v17-stable)
173. [Glitch-Free Behavior, Equality and Immutability (v16+ · v17 stable)](#glitch-free-viselkedes-egyenloseg-es-immutabilitas-v16-v17-stable)
174. [The Signal Graph – Designing Reactive Data Flow (v17+ · resource v19+)](#a-signal-graf-reaktiv-adatfolyam-tervezese-v17-resource-v19)
175. [The New Animations API – animate.enter / animate.leave (v20.2+ · v21 expanded)](#az-uj-animacios-api-animate-enter-animate-leave-v20-2-v21-bovitett)
176. [HttpClient Fetch Tuning and New HttpResponse Fields (withFetch v16+ · új opciók v21+)](#httpclient-fetch-alapu-finomhangolasa-es-httpresponse-uj-mezoi-withfetch-v16-uj-opciok-v21)
177. [Router Details – Injection Context, Scroll, Redirect Parameters (v21–v22)](#router-finomsagok-injection-context-scroll-redirect-parameterek-v21-v22)
178. [Common Runtime Error Codes and Debugging (v2+ · hydration hibák v16+)](#gyakori-futasideju-hibakodok-es-debugolas-v2-hydration-hibak-v16)
179. [Developer Ergonomics – HMR, strictStandalone, Self-closing Tags, Language Service (v16–v22)](#fejlesztoi-ergonomia-hmr-strictstandalone-self-closing-tagek-language-service-v16-v22)
180. [Phasing Out CommonJS (CJS) Dependencies and Further Shrinking the Main Chunk (v14+ · esbuild v16+)](#commonjs-cjs-fuggosegek-kivezetese-es-a-main-chunk-tovabbi-szukitese-v14-esbuild-v16)
181. [Finding Performance Bottlenecks – Methodology and Tools (v17+ · enableProfiling v20+)](#performance-bottleneck-keresese-modszertan-es-eszkozok-v17-enableprofiling-v20)
182. [Finding and Diagnosing Memory Leaks (v2+ · takeUntilDestroyed v16+)](#memory-leak-keresese-es-diagnosztizalasa-v2-takeuntildestroyed-v16)
183. [Memory Optimization – Dev Environment and Build Memory Usage (TypeScript 5+ · v14+)](#memory-optimization-a-fejlesztoi-kornyezet-es-a-build-memoriahasznalata-typescript-5-v14)
184. [TypeScript Abstract Syntax Tree (AST) (TypeScript 5+)](#typescript-abstract-syntax-tree-ast-typescript-5)
185. [Component Lifecycle – Which Hook to Use (v2+ · afterRender v17+)](#komponens-lifecycle-melyik-hook-mire-valo-v2-afterrender-v17)
186. [@HostBinding and @HostListener – Host Element Binding (v2+ · host object recommended)](#hostbinding-es-hostlistener-gazda-elem-kotese-v2-host-objektum-ajanlott)
187. [AOT Compilation – Why It Is the Default (v9+ Ivy · AOT by default)](#aot-forditas-miert-ez-az-alapertelmezett-v9-ivy-aot-alapbol)
188. [Reactive Forms Essentials – updateOn, markAllAsTouched, FormArray.clear (v2+ · markAllAsTouched/clear v8+)](#reactive-forms-praktikum-updateon-markallastouched-formarray-clear-v2-markallastouched-clear-v8)
189. [exportAs – Component/Directive API in the Template (v2+)](#exportas-komponens-direktiva-api-a-sablonban-v2)
190. [DomSanitizer – Trusted HTML, URL, Script (v2+)](#domsanitizer-trusted-html-url-script-v2)
191. [Arrow Function vs Function – `this` Binding (JavaScript)](#nyilfuggveny-vs-function-a-this-kotese-javascript)

## 1. TypeScript Configuration (TypeScript 5+) https://www.typescriptlang.org/tsconfig/ {#typescript-configuration-typescript-5}
A TypeScript konfigurációban a compiler options finomhangolása segíthet a hibák korai felismerésében, a kód minőségének javításában, valamint a kód futási stabilitásának biztosításában.

### alwaysStrict
Bekapcsolja a szigorú módot minden fájlhoz, amely biztosítja a JavaScript szigorúbb ellenőrzéseit a futás közben.

```json
{
  "compilerOptions": {
    "alwaysStrict": true
  }
}
```

### strictNullChecks
Megköveteli, hogy a null és undefined típusokat explicit módon kezeljük, ezzel elkerülve a futásidejű hibákat.

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

### strictBindCallApply
Szigorúbb ellenőrzést alkalmaz a bind, call, és apply függvényhívásokra.

```json
{
  "compilerOptions": {
    "strictBindCallApply": true
  }
}
```

### strictFunctionTypes
Szűkíti a függvénytípusok egyeztetését, megakadályozva a hibás paraméterek átadását.

```json
{
  "compilerOptions": {
    "strictFunctionTypes": true
  }
}
```

### strictPropertyInitialization
Megköveteli, hogy minden osztálytulajdonság inicializálva legyen.

```json
{
  "compilerOptions": {
    "strictPropertyInitialization": true
  }
}
```

### noImplicitAny
Hibát dob, ha egy változó vagy paraméter típusa implicit módon any.

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

### noImplicitThis
Hibát dob, ha a this kontextust implicit módon használjuk.

```json
{
  "compilerOptions": {
    "noImplicitThis": true
  }
}
```

### useUnknownInCatchVariables
A catch blokkokban az elkapott változó implicit típusa unknown.

```json
{
  "compilerOptions": {
    "useUnknownInCatchVariables": true
  }
}
```

### noImplicitReturns
Hibát dob, ha egy függvényben elérhető útvonal nem tér vissza értékkel.

```json
{
  "compilerOptions": {
    "noImplicitReturns": true
  }
}
```

### noImplicitOverride
Megköveteli az override kulcsszó használatát.

```json
{
  "compilerOptions": {
    "noImplicitOverride": true
  }
}
```

### noPropertyAccessFromIndexSignature
Megakadályozza a tulajdonságok elérését indexszignatúrákból.

```json
{
  "compilerOptions": {
    "noPropertyAccessFromIndexSignature": true
  }
}
```

### noUncheckedIndexedAccess
Megköveteli a típusellenőrzést indexszignatúrás objektumoknál.

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

### noFallThroughCaseInSwitch
Megakadályozza a switch fallthrough-t.

```json
{
  "compilerOptions": {
    "noFallThroughCaseInSwitch": true
  }
}
```

### noUnusedLocals / noUnusedParameters
Hibát dob nem használt lokális változóknál/paramétereknél.

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### exactOptionalPropertyTypes
Különbséget tesz az undefined és a hiányzó tulajdonság között.

```json
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true
  }
}
```

### Összegzés – ajánlott beállítások egy helyen

```json
{
  "compilerOptions": {
    "alwaysStrict": true,
    "strictNullChecks": true,
    "strictBindCallApply": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noFallThroughCaseInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

1. Inicializálási kötelezettség: A `strictPropertyInitialization` (a `strict: true` része) kikényszeríti, hogy minden osztálytulajdonság vagy azonnal inicializálva legyen, vagy union típusban szerepeljen `undefined`-ként, vagy definite assignment assertion-t (`prop!`) használjunk. A `strictNullChecks` a `null`/`undefined` kezelését szigorítja.
2. Union típus és definite assignment assertion problémák: Ha egy tulajdonságot `label: string | undefined`-ként deklarálunk, az még mindig lehet `undefined` futás közben.
3. Komponensek template problémák: A nem megfelelően inicializált tulajdonságok sablonhasználat közben is futásidejű hibákat okozhatnak.

### Megoldás a strictNullChecks és más recommended opciók használatával

**1. Biztonságos default értékek beállítása**

```ts
export class MyComponent {
  label: string = ''; // Alapértelmezett érték
  description?: string; // Opcionális, nincs kezdeti érték, undefined lehet

  constructor() {}

  ngOnInit() {
    this.label = this.getLabel();
  }

  getLabel(): string {
    return 'Valós cím';
  }
}
```

**2. Sablonokban biztonságos elérési módok használata**

```html
<h1>{{ label ?? 'Nincs cím megadva' }}</h1>
<p>{{ description?.toUpperCase() ?? 'Nincs leírás' }}</p>
```

**3. A strictPropertyInitialization és strictNullChecks megfelelő kombinációja**

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "useUnknownInCatchVariables": true,
    "noImplicitReturns": true,
    "noFallThroughCaseInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**4. Reactive Forms használata**

```ts
import { FormGroup, FormControl } from '@angular/forms';

export class MyComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      label: new FormControl(''),
      description: new FormControl('Alapértelmezett leírás')
    });
  }

  ngOnInit() {}
}
```

### strict: true hatása

Amikor a `strict: true` beállítást használjuk, az automatikusan bekapcsolja: `alwaysStrict`, `strictNullChecks`, `strictBindCallApply`, `strictFunctionTypes`, `strictPropertyInitialization`, `noImplicitAny`, `noImplicitThis`, `useUnknownInCatchVariables` (TS 4.4+).

További ajánlott opciók (nem részei a `strict: true`-nak): `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noUncheckedIndexedAccess`, `noFallThroughCaseInSwitch`, `noUnusedLocals`/`noUnusedParameters`, `exactOptionalPropertyTypes`.

### Optimalizált példa strictNullChecks használatára

```ts
export class MyComponent {
  label!: string;
  description?: string;

  constructor() {}

  ngOnInit() {
    this.initializeProperties();
  }

  initializeProperties() {
    this.label = this.getLabel();
  }

  getLabel(): string {
    return 'My Component Label';
  }
}
```

```html
<h1>{{ label ?? 'Alapértelmezett cím' }}</h1>
<p>{{ description?.toUpperCase() ?? 'Nincs leírás' }}</p>
```

Mikor inicializáljunk?
1. Azonnal, ha a tulajdonság inicializálható deklarációnál/konstruktorban.
2. Későbbi fázisban, ha aszinkron adatokból kap értéket (`!` vagy `?`).

### Használati eset példák

**Non-null assertion operátor (!):**
```ts
@ViewChild('modernSlideToggle') modernSlideToggle!: SlideToggleComponent;
```

**Opcionális típus (?):**
```ts
@ViewChild('modernSlideToggle') modernSlideToggle?: SlideToggleComponent;
if (this.modernSlideToggle) {
  // Használhatod
}
```

**Példa kódrészlet:**
```ts
import { Component, ViewChild } from '@angular/core';
import { SlideToggleComponent } from './slide-toggle.component';

@Component({
  selector: 'app-example',
  template: `<app-slide-toggle #modernSlideToggle></app-slide-toggle>`
})
export class ExampleComponent {
  @ViewChild('modernSlideToggle') modernSlideToggle!: SlideToggleComponent;

  ngAfterViewInit() {
    if (this.modernSlideToggle) {
      this.modernSlideToggle.toggle();
    }
  }
}
```

### Class/Field Decorators

**@ViewChild()** – A komponens saját sablonjából lekéri az első illeszkedő elemet vagy direktívát.
```ts
@ViewChild('myInput', { static: false }) input!: ElementRef;
ngAfterViewInit() {
  this.input.nativeElement.focus();
}
```

**@ViewChildren()** – Több egyező elemet ad vissza QueryList formában.
```ts
@ViewChildren('item') items!: QueryList<ElementRef>;
ngAfterViewInit() {
  this.items.forEach(i => console.log(i.nativeElement));
}
```

**@ContentChild()** – Az ng-content-be ágyazott első gyermek elem lekérése.
```ts
@ContentChild('projected') projected!: ElementRef;
ngAfterContentInit() {
  console.log(this.projected.nativeElement);
}
```

**@ContentChildren()** – Több projected elem lekérése QueryList formában.
```ts
@ContentChildren('item') projectedItems!: QueryList<ElementRef>;
ngAfterContentInit() {
  this.projectedItems.forEach(i => console.log(i.nativeElement));
}
```

**@HostBinding()** – A host element tulajdonságát köti egy mezőhöz.
```ts
@HostBinding('class.active') isActive = true;
@HostBinding('attr.role') role = 'button';
```

**@HostListener()** – A host element eseményeire regisztrál metódust.
```ts
@HostListener('click') onClick() {
  console.log('Host element clicked');
}
@HostListener('window:resize', ['$event']) onResize(event: Event) {
  console.log('Window resized', event);
}
```

**@Self()** – Csak az aktuális injectorból kér szolgáltatást.
```ts
constructor(@Self() service: MyService) {}
```

**@SkipSelf()** – A szülő injector(ok)ból kér szolgáltatást.
```ts
constructor(@SkipSelf() service: MyService) {}
```

**@Optional()** – Opcionális függőség, null ha nincs provider.
```ts
constructor(@Optional() logger?: LoggerService) {
  logger?.log('Optional service injected');
}
```

**@Inject()** – Manuálisan megadható token.
```ts
constructor(@Inject('API_URL') private url: string) {}
```

**@Attribute()** – Statikus attribútum értékét adja a konstruktorban.
```ts
constructor(@Attribute('type') type: string) {
  console.log('Attribute value:', type);
}
```

## 2. Angular Compiler Options (v9+ (Ivy)) https://angular.dev/reference/configs/angular-compiler-options {#angular-compiler-options-v9-ivy}
Az Angular projekt fejlesztése során az Angular compiler opciók (Angular-specific angularCompilerOptions) megfelelő konfigurálása szintén kulcsfontosságú.

### strictTemplates
Bekapcsolja az összes szigorú ellenőrzést az Angular sablonokban.
```json
{ "angularCompilerOptions": { "strictTemplates": true } }
```

### strictInputTypes
Megköveteli, hogy a komponensek inputjai szigorúan ellenőrzöttek legyenek.
```json
{ "angularCompilerOptions": { "strictInputTypes": true } }
```

### strictNullInputTypes
Szigorúbb ellenőrzés null/undefined inputoknál.
```json
{ "angularCompilerOptions": { "strictNullInputTypes": true } }
```

### strictAttributeTypes
Az attribútumok típusellenőrzését szigorítja.
```json
{ "angularCompilerOptions": { "strictAttributeTypes": true } }
```

### strictSafeNavigationTypes
A biztonságos navigáció (`?.`) és a nem-null assertion (`!`) **típusait** ellenőrzi a sablonokban: hibát jelez, ha `?.`-ot olyan kifejezésre használunk, ami nem is lehet nullish, illetve helyesen szűkíti a típust, ha lehet.
```json
{ "angularCompilerOptions": { "strictSafeNavigationTypes": true } }
```

### strictDomEventTypes
Az eseménykezelők típusellenőrzését szigorítja.
```json
{ "angularCompilerOptions": { "strictDomEventTypes": true } }
```

### strictOutputEventTypes
A komponens @Output eseményeinek típusellenőrzését biztosítja.
```json
{ "angularCompilerOptions": { "strictOutputEventTypes": true } }
```

### fullTemplateTypeCheck (legacy)
Régebbi kapcsoló a teljes sablon-típusellenőrzéshez. A modern ajánlás a `strictTemplates: true`; a `fullTemplateTypeCheck` elavult/superseded, új projektben ne ezt állítsuk.
```json
{ "angularCompilerOptions": { "fullTemplateTypeCheck": true } }
```

### strictContextGenerics
A sablonokban lévő kontextus generikus típusait kezeli helyesen.
```json
{ "angularCompilerOptions": { "strictContextGenerics": true } }
```

### Ajánlott angularCompilerOptions beállítások

```json
{
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictInputTypes": true,
    "strictNullInputTypes": true,
    "strictAttributeTypes": true,
    "strictSafeNavigationTypes": true,
    "strictDomEventTypes": true,
    "strictOutputEventTypes": true,
    "strictContextGenerics": true
  }
}
```

> Megjegyzés: az `ivyTemplateTypeCheck` soha nem volt publikus, tartós API – ne használd. A sablon-típusellenőrzést a `strictTemplates` (és a belőle származó `strict*` flag-ek) vezérli.

### Angular LifeCycle hooks

1. **ngOnChanges()** – Ha a komponens `@Input` értékei megváltoznak.
2. **ngOnInit()** – Egyszer, a komponens inicializálása után.
3. **ngDoCheck()** – Amikor az Angular a változásérzékelési ciklust futtatja.
4. **ngAfterContentInit()** – Miután a tartalmat inicializálta az Angular.
5. **ngAfterContentChecked()** – Minden alkalommal, amikor a tartalom ellenőrzésre kerül.
6. **ngAfterViewInit()** – Miután a nézetet inicializálta az Angular.
7. **ngAfterViewChecked()** – Minden alkalommal, amikor a nézet ellenőrzésre kerül.
8. **afterNextRender** – Egyszer fut le, a következő rendereléskor.
9. **afterRender** – Minden rendereléskor lefut.
10. **ngOnDestroy()** – Közvetlenül a megsemmisülés előtt.

Négy afterRender fázis (sorrendben, minden render után):
- **earlyRead** – DOM-olvasás a későbbi `write` előtt (soha ne írj ebben a fázisban).
- **write** – csak DOM-írás (soha ne olvass ebben a fázisban).
- **mixedReadWrite** – olvasás és írás egyszerre; kerülendő, ha szétválasztható. Egyszerű `afterRender(() => …)` callback ebbe a fázisba kerül.
- **read** – csak DOM-olvasás a write után (soha ne írj ebben a fázisban).

Lifecycle hook hívási sorrend: ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked → ngOnDestroy. Az `afterRender` / `afterNextRender` nem lifecycle hook, hanem a render ciklus után fut.

## 3. Change Detection Strategy (OnPush) (v2+ · default from v22) https://angular.dev/api/core/ChangeDetectionStrategy {#change-detection-strategy-onpush-v2-v22-tol-alapertelmezett}
Az Angular-ban a Change Detection Strategy szabályozza, hogy az Angular mikor és hogyan ellenőrzi a komponenseket a változásokra.

### OnPush előnyei
1. **Teljesítménynövekedés** – csak akkor fut a change detection, ha szükséges.
2. **Csökkentett változásérzékelés** – nem ellenőrzi folyamatosan az egész komponensfát.
3. **Tisztább adathozzáférés** – immutábilis adatkezelésre kényszerít.

### Hogyan működik
1. `@Input()` paraméterek változása (új referencia)
2. Felhasználói interakciók
3. Aszinkron események

### Használat
```ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() data: any;
}
```

Immutábilis adatkezelés:
```ts
export class MyComponent {
  @Input() items: string[];

  addItem(newItem: string) {
    // Helytelen: this.items.push(newItem);
    // Helyes:
    this.items = [...this.items, newItem];
  }
}
```

### Mikor érdemes használni
- Teljesítményérzékeny alkalmazásokban
- Statikus vagy ritkán változó adatok esetén
- Immutábilis adatszerkezetek használatakor

### Mi triggereli a change detectiont OnPush esetén

1. Immutable Property Binding:
```ts
@Input() data!: { id: number };
```
2. Handled DOM Events:
```html
<button (click)="onAction()">Click Me</button>
```
3. markForCheck():
```ts
constructor(private cdr: ChangeDetectorRef) {}
someMethod() {
  this.cdr.markForCheck();
}
```
4. Async Pipe:
```html
<div *ngIf="data$ | async as data">{{ data }}</div>
```
5. Signal Change:
```ts
const counter = signal(0);
```

## 4. Routing – Location Strategies (v2+ · withHashLocation() v15+) https://angular.dev/guide/routing {#routing-location-strategies-v2-withhashlocation-v15}
Az Angularban a routing location strategy az URL-ek kezelésének módját határozza meg. Két fő stratégia: PathLocationStrategy és HashLocationStrategy.

### PathLocationStrategy (Alapértelmezett)
Tiszta URL-eket használ: `https://example.com/utvonal`

**Előnyök:** Tiszta URL-ek, SEO-barát, jobb felhasználói élmény.
**Hátrányok:** Szerver konfiguráció szükséges (minden kérést az index.html-re kell irányítani).

Apache `.htaccess` példa:
```apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### HashLocationStrategy
Hash karaktert használ: `https://example.com/#/utvonal`

**Előnyök:** Nincs szükség szerver konfigurációra, régebbi böngészők is támogatják.
**Hátrányok:** Kevésbé elegáns URL-ek, SEO problémák.

Beállítás (modern, standalone – ez az ajánlott forma):
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withHashLocation())],
});
```

Régi, NgModule-alapú forma:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 5. Routing – Passing Parameters (v2+) https://angular.dev/guide/routing/read-route-state {#routing-parameterek-atadasa-v2}
### Path Parameters (Útvonali paraméterek)
Kötelező paraméterek, az URL részeként.

```ts
const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];
```
```ts
this.router.navigate(['/user', 123]);
```
```ts
import { ActivatedRoute } from '@angular/router';

export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('User ID:', id);
    });
  }
}
```

**Előnyök:** tiszta URL-ek, bookmarkolhatóak. **Hátrányok:** csak kötelező paraméterekhez.

### Query Parameters (Lekérdezési paraméterek)
Opcionálisak, `?` után.

```ts
this.router.navigate(['/users'], { queryParams: { page: 2, sort: 'asc' } });
```
```ts
this.route.queryParamMap.subscribe(params => {
  const page = params.get('page');
  const sort = params.get('sort');
});
```

### State Parameters (Állapot paraméterek)
Adatok átadása URL-ben megjelenítés nélkül.

```ts
this.router.navigate(['/details'], { state: { data: { id: 123, name: 'John' } } });
```
```ts
const navigation = this.router.getCurrentNavigation();
const state = navigation?.extras.state as { data: any };
```

**Hátrányok:** frissítéskor vagy megosztáskor elveszik.

## 6. Routing Events and Guards (v2+ · functional guards v15+ · canMatch v14.2+) https://angular.dev/guide/routing/route-guards {#routing-events-es-guards-v2-funkcionalis-guardok-v15-canmatch-v14-2}
### Angular Routing Navigation Events sorrendben

Sikeres navigáció tipikus eseménysora:
1. **NavigationStart** – navigáció elindul.
2. **RoutesRecognized** – az Angular felismeri az útvonalat.
3. **GuardsCheckStart**
4. **ChildActivationStart** / **ActivationStart** (a fa bejárása közben)
5. **GuardsCheckEnd**
6. **ResolveStart**
7. **ResolveEnd**
8. **ActivationEnd** / **ChildActivationEnd**
9. **NavigationEnd**

Alternatív kimenetek (nem a happy path folytatása): **NavigationCancel**, **NavigationError**, **NavigationSkipped**.

A guardok és a resolve a fenti `GuardsCheck*` / `Resolve*` események között futnak – nem külön „esemény” a `NavigationStart` és a `RoutesRecognized` között.

### Guard típusok
- **CanActivate** – hozzáférés-ellenőrzés
```ts
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.authService.isLoggedIn();
}
```
- **CanActivateChild**
- **CanDeactivate**
```ts
canDeactivate(component: EditComponent): boolean {
  return component.isFormSaved() || confirm('Are you sure you want to leave without saving?');
}
```
- **Resolve**
```ts
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
  return this.userService.getUser(route.paramMap.get('id'));
}
```

### Guards Hívási sorrend
Tipikus leave → enter navigációnál:
1. canDeactivate (a jelenlegi / elhagyott route-on)
2. canMatch (és legacy `canLoad`, ha még használatban van – deprecated, `canMatch` javasolt)
3. canActivateChild
4. canActivate
5. resolve

## 7. Components Communication (v2+ · input()/output() v17–v18) https://angular.dev/guide/components/inputs {#components-communication-v2-input-output-v17-v18}
### @Input() Decorator (Szülő -> Gyermek)
```ts
@Component({ selector: 'app-parent', template: `<app-child [data]="parentData"></app-child>` })
export class ParentComponent { parentData = 'Hello from Parent'; }

@Component({ selector: 'app-child', template: `<p>{{ data }}</p>` })
export class ChildComponent { @Input() data!: string; }
```

### @Output() és EventEmitter (Gyermek -> Szülő)
```ts
@Component({ selector: 'app-child', template: `<button (click)="sendMessage()">Send Message</button>` })
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() { this.messageEvent.emit('Hello from Child'); }
}

@Component({ selector: 'app-parent', template: `<app-child (messageEvent)="receiveMessage($event)"></app-child>` })
export class ParentComponent {
  receiveMessage(message: string) { console.log('Message from Child:', message); }
}
```

### Route Paraméterek (Navigáció alapú)
```ts
this.router.navigate(['/details', 123]); // path param: /details/123
// mátrix param (ritkább): this.router.navigate(['/details', { id: 123 }]);

export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log('ID:', params.get('id')));
  }
}
```

### ViewChild és ViewChildren (Szülő -> Gyermek referencia)
```ts
@Component({ selector: 'app-parent', template: `<app-child></app-child>` })
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngAfterViewInit() { console.log(this.child.data); }
}
```

### Component Communication Service + Observable/Subject (Testvér komponensek)
```ts
@Injectable({ providedIn: 'root' })
export class CommunicationService {
  private messageSource = new Subject<string>();
  currentMessage = this.messageSource.asObservable();
  sendMessage(message: string) { this.messageSource.next(message); }
}

@Component({ selector: 'app-sender', template: `<button (click)="sendMessage()">Send Message</button>` })
export class SenderComponent {
  constructor(private communicationService: CommunicationService) {}
  sendMessage() { this.communicationService.sendMessage('Hello from Sender'); }
}

@Component({ selector: 'app-receiver', template: `<p>{{ message }}</p>` })
export class ReceiverComponent implements OnInit {
  message!: string;
  constructor(private communicationService: CommunicationService) {}
  ngOnInit() {
    this.communicationService.currentMessage.subscribe(message => this.message = message);
  }
}
```

### ContentChild és ContentChildren (Tartalmi referencia)
```ts
@Component({ selector: 'app-parent', template: `<ng-content></ng-content>` })
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) child!: ChildComponent;
  ngAfterContentInit() { console.log(this.child.data); }
}
```

## 8. RxJS Operators (RxJS 6+) https://rxjs.dev/guide/operators {#rxjs-operators-rxjs-6}
### Higher-Order Mapping Operátorok

**switchMap** – megszakítja az előzőt, csak a legfrissebb Observable-re iratkozik fel.
```ts
searchTerm$.pipe(switchMap(term => this.searchService.search(term))).subscribe(result => console.log(result));
```

**concatMap** – sorban kezeli az értékeket.
```ts
requests$.pipe(concatMap(req => this.apiService.makeRequest(req))).subscribe(result => console.log(result));
```

**mergeMap** – párhuzamosan futtatja.
```ts
requests$.pipe(mergeMap(req => this.apiService.makeRequest(req))).subscribe(result => console.log(result));
```

**exhaustMap** – csak az első Observable-re iratkozik fel, amíg be nem fejeződik.
```ts
buttonClick$.pipe(exhaustMap(() => this.apiService.makeRequest())).subscribe(result => console.log(result));
```

### Egyszerűbb operátorok

**of** – Observable létrehozása statikus értékekből.
```ts
of(1, 2, 3).subscribe(value => console.log(value));
```

**from** – tömbből/promise-ból/iterable-ből.
```ts
from([1, 2, 3]).subscribe(value => console.log(value));
```

### Komplexebb operátorok

**zip** – több Observable értékeit párosítja sorrend szerint.
```ts
zip(of(1, 2, 3), of('a', 'b', 'c')).subscribe(result => console.log(result));
```

**combineLatest** – a források legfrissebb értékeit bocsátja ki; **először mindegyik forrásnak legalább egyszer emittálnia kell**, utána bármelyik új értéke új kombinációt indít.
```ts
combineLatest([obs1, obs2]).subscribe(([val1, val2]) => console.log(val1, val2));
```

**withLatestFrom**
```ts
source$.pipe(withLatestFrom(other$)).subscribe(([sourceValue, otherValue]) => console.log(sourceValue, otherValue));
```

**forkJoin** – csak akkor bocsát ki, ha mind befejeződött.
```ts
forkJoin([obs1, obs2]).subscribe(([val1, val2]) => console.log(val1, val2));
```

**debounceTime**
```ts
input$.pipe(debounceTime(300)).subscribe(value => console.log(value));
```

**throttleTime**
```ts
click$.pipe(throttleTime(1000)).subscribe(value => console.log(value));
```

**takeUntil**
```ts
interval$.pipe(takeUntil(stop$)).subscribe(value => console.log(value));
```

**distinctUntilChanged**
```ts
of(1, 1, 2, 3, 3).pipe(distinctUntilChanged()).subscribe(value => console.log(value));
```

## 9. Observables – Hot & Cold (RxJS 6+) https://rxjs.dev/guide/observable {#observables-hot-cold-rxjs-6}
### Cold Observable
Minden előfizető külön adatfolyamot kap, a folyamat lazy módon indul.
```ts
const cold$ = new Observable(observer => {
  console.log('HTTP request started');
  setTimeout(() => { observer.next('Data received'); observer.complete(); }, 2000);
});
cold$.subscribe(data => console.log('First subscriber:', data));
cold$.subscribe(data => console.log('Second subscriber:', data));
```

### Hot Observable
Egy időben osztja meg az adatfolyamot minden előfizetővel; eager módon indul.
```ts
const hot$ = new Subject();
hot$.subscribe(data => console.log('First subscriber:', data));
hot$.next('Data for first subscriber');
setTimeout(() => {
  hot$.subscribe(data => console.log('Second subscriber:', data));
  hot$.next('Data for both subscribers');
}, 2000);
```

### Cold to Hot átalakítás (`share()`)
```ts
const cold$ = new Observable(observer => { observer.next(Math.random()); });
const hot$ = cold$.pipe(share());
hot$.subscribe(value => console.log('First subscriber:', value));
hot$.subscribe(value => console.log('Second subscriber:', value));
```

## 10. Subjects (RxJS 6+) https://rxjs.dev/guide/subject {#subjects-rxjs-6}
### Subject
Kézzel kibocsátott értékek, csak az előfizetés utáni adatokat kapják meg az új előfizetők.
```ts
const subject = new Subject<string>();
subject.subscribe(data => console.log('First subscriber:', data));
subject.next('Hello from Subject!');
subject.subscribe(data => console.log('Second subscriber:', data));
subject.next('Second message');
```

### BehaviorSubject
Mindig megjegyzi a legutóbbi kibocsátott értéket.
```ts
const behaviorSubject = new BehaviorSubject<string>('Initial value');
behaviorSubject.subscribe(data => console.log('First subscriber:', data));
behaviorSubject.next('New value');
behaviorSubject.subscribe(data => console.log('Second subscriber:', data));
```

### ReplaySubject
Több korábbi kibocsátott értéket is megjegyez.
```ts
const replaySubject = new ReplaySubject<string>(2);
replaySubject.next('First message');
replaySubject.next('Second message');
replaySubject.next('Third message');
replaySubject.subscribe(data => console.log('First subscriber:', data));
replaySubject.next('Fourth message');
```

### AsyncSubject
Csak az utolsó kibocsátott értéket adja tovább, és csak `complete()` után.
```ts
const asyncSubject = new AsyncSubject<string>();
asyncSubject.subscribe(data => console.log('First subscriber:', data));
asyncSubject.next('First message');
asyncSubject.next('Second message');
asyncSubject.subscribe(data => console.log('Second subscriber:', data));
asyncSubject.next('Third message');
asyncSubject.complete();
```

### Multicasting (`share()`)
```ts
const observable$ = interval(1000).pipe(share());
observable$.subscribe(data => console.log('First subscriber:', data));
observable$.subscribe(data => console.log('Second subscriber:', data));
```

## 11. ES6-ES15 Features (Short Overview) (ECMAScript 2015–2025) https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview {#es6-es15-features-rovid-osszefoglalo-ecmascript-2015-2025}
- **ES6 (2015):** let/const, arrow functions, class/inheritance, modules, promises, symbols, template literals
- **ES7 (2016):** exponentiation operator (`**`), Array.prototype.includes()
- **ES8 (2017):** async/await, Object.entries()/values(), string padding
- **ES9 (2018):** rest/spread properties, asynchronous iteration (for-await-of)
- **ES10 (2019):** Array.flat()/flatMap(), Object.fromEntries(), optional catch binding
- **ES11 (2020):** nullish coalescing (`??`), optional chaining (`?.`), Promise.allSettled()
- **ES12 (2021):** logical assignment operators (`||=`, `&&=`, `??=`), numeric separators
- **ES13 (2022):** top-level await, Object.hasOwn(), `Array.prototype.at()`, RegExp match indices (`/d` flag), class static blocks, privát mező `in` ellenőrzés
- **ES14 (2023):** Array.toSorted()/toReversed()/toSpliced()/with(), findLast()/findLastIndex(), Symbol as WeakMap key
- **ES15 (2024):** Object.groupBy()/Map.groupBy(), Promise.withResolvers(), Array.fromAsync(), ArrayBuffer.transfer(), RegExp `v` flag
- **ES16 (2025):** Iterator helpers (`map`/`filter`/`take` iterátorokon), Set műveletek (`union`, `intersection`, `difference`), `Promise.try()`, `RegExp.escape()`, import attributes

> Megjegyzés: a `ShadowRealm` javaslat nem került be egyetlen kiadott ECMAScript verzióba sem, a RegExp match indices pedig ES2022 (nem ES2024).

## 12. ViewEncapsulation (v2+) https://angular.dev/guide/components/styling {#viewencapsulation-v2}
Az Angular háromféle View Encapsulation stratégiát kínál: **Emulated** (default), **None**, **Shadow DOM**.

### Emulated (Alapértelmezett)
Az Angular scope-olja a komponens stílusait, natív Shadow DOM nélkül.
```ts
@Component({
  selector: 'app-example',
  template: `<div class="example">Hello, World!</div>`,
  styles: [`.example { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {}
```
Előnyök: szigetelt stílusok, minden böngészőben működik. Hátrányok: extra CSS szelektorok.

### None
A stílusok globálisan érvényesek.
```ts
@Component({
  selector: 'app-example',
  template: `<div class="example">Hello, World!</div>`,
  styles: [`.example { color: red; }`],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {}
```
Előnyök: globális stílusok egyszerűen. Hátrányok: stílusütközések.

### Shadow DOM (v1)
Natív böngésző izoláció.
```ts
@Component({
  selector: 'app-example',
  template: `<div class="example">Hello, World!</div>`,
  styles: [`.example { color: red; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent {}
```
Előnyök: teljes izoláció, jó könyvtárakhoz. Hátrányok: natív böngésző-támogatás szükséges.

## 13. CSS Specificity (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity {#css-specificity-css}
A CSS specificity a szelektorok "erejét" jelenti: melyik stílus lesz alkalmazva ütközés esetén.

**Sorrend:** Inline stílusok > ID szelektorok > Osztályok/attribútumok/pseudo-osztályok > Elem szelektorok/pseudo-elemek.

Specifikusság `(a, b, c, d)` formában:
- a: inline stílusok
- b: ID szelektorok
- c: osztályok, attribútumok, pseudo-osztályok
- d: elem szelektorok, pseudo-elemek

```css
div p { color: red; }              /* 0,0,0,2 */
.myClass div { color: blue; }      /* 0,0,1,1 */
#myID .myClass { color: green; }   /* 0,1,1,0 */
```

`#myID .myClass` felülírja a többit, mert nagyobb a specifikussága.

Prioritási sorrend (a leggyengébbtől a legerősebbig): 1. Elem szelektorok/pseudo-elemek, 2. Osztályok/attribútumok/pseudo-osztályok, 3. ID szelektorok, 4. Inline stílusok, 5. `!important`.

A `!important` a specifikusságtól **függetlenül** felülír mindent (kivéve egy másik, nagyobb specifikusságú `!important` deklarációt) – ezért nem a lista végén álló „utolsó szempont”, hanem a legerősebb.

Ütközés eldöntésének sorrendje: 1. `!important` jelenléte, 2. specifikusság, 3. forrás sorrendje (utolsó nyer).

## 14. CSS Combinators (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators {#css-combinators-css}
### Utód (descendant) szelektor „ „ (szóköz)
```css
div p { color: red; }
```
Minden `div`-en belüli `p`, bármilyen mélységben.

### Gyermek (child) szelektor „>”
```css
div > p { color: blue; }
```
Csak közvetlen gyermek `p` elemek.

### Szomszédos testvér (adjacent sibling) szelektor „+”
```css
h1 + p { margin-top: 0; }
```
Csak a közvetlenül `h1` után következő `p`.

### Általános testvér (general sibling) szelektor „~”
```css
h1 ~ p { color: green; }
```
Minden `p`, ami `h1` után következik ugyanazon a szinten.

### Csoportosító szelektor „,”
```css
h1, h2, h3 { font-family: Arial, sans-serif; }
```

### Egyetemes szelektor „*”
```css
* { margin: 0; padding: 0; }
```

### Attribútum szelektorok „[ ]”
```css
input[type="text"] { background-color: lightgray; }
```
Típusok: `[attr]`, `[attr="value"]`, `[attr^="value"]`, `[attr$="value"]`, `[attr*="value"]`.

### Pseudo-osztályok „:”
```css
button:hover { background-color: blue; }
li:nth-child(2) { color: red; }
```

### Pseudo-elemek „::”
```css
h1::before { content: "★ "; }
p::first-letter { font-size: 2em; }
```

### Összefoglaló (négy fő combinator)
- **Adjacent sibling (+):** közvetlen testvér, pl. `h2 + p { margin-top: 0; }`
- **General sibling (~):** minden következő testvér, pl. `h2 ~ p { color: blue; }`
- **Child (>):** közvetlen gyermek, pl. `div > p { font-weight: bold; }`
- **Descendant (szóköz):** bármilyen mélységű leszármazott, pl. `div p { color: red; }`

## 15. Pseudo Classes (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes {#pseudo-classes-css}
### Dinamikus pseudo-class-ok
```css
a:hover { color: red; }
button:active { background-color: green; }
input:focus { border-color: blue; }
button:focus-visible { outline: 2px solid yellow; }
form:focus-within { background-color: #eee; }
```

### Strukturális pseudo-class-ok
```css
p:first-child { font-weight: bold; }
p:last-child { font-style: italic; }
li:nth-child(2) { color: red; }
li:nth-child(odd) { background-color: #f9f9f9; }
li:nth-last-child(1) { color: blue; }
p:first-of-type { color: red; }
p:last-of-type { font-size: larger; }
p:nth-of-type(2) { color: red; }
p:nth-last-of-type(1) { font-style: italic; }
p:only-child { background-color: yellow; }
p:only-of-type { border: 2px solid red; }
div:empty { display: none; }
```

### Form-állapot pseudo-class-ok
```css
input:checked { background-color: green; }
input:disabled { background-color: lightgray; }
input:enabled { border-color: green; }
input:required { border-color: red; }
input:optional { border-color: green; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:in-range { background-color: lightgreen; }
input:out-of-range { background-color: lightcoral; }
```

### Nyelvi pseudo-class
```css
p:lang(en) { font-style: italic; }
```

### Negációs pseudo-class
```css
p:not(.highlight) { color: black; }
```

### Egyéb
```css
:root { --main-color: blue; }
section:target { background-color: yellow; }
div:fullscreen { background-color: black; }
```

## 16. Positioning (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/position {#positioning-css}
A `position` tulajdonság lehetséges értékei:
1. **Static** – default, dokumentumáramlás szerint.
2. **Relative** – az eredeti helyéhez viszonyítva mozdítható (`top`, `right`, `bottom`, `left`).
3. **Absolute** – legközelebbi pozícionált őselemhez viszonyítva, kikerül a dokumentumáramlásból.
4. **Fixed** – a viewporthoz rögzítve, görgetéskor is helyben marad.
5. **Sticky** – relatív és fix keveréke, egy görgetési ponttól rögzítetté válik.

> A **Flexbox** és a **CSS Grid** nem `position` értékek, hanem külön elrendezési modellek – lásd a Flexbox és CSS Grid szekciókat.

Hogyan válasszunk pozicionálási módot?
- Statikus tartalom → `static`
- Kisebb eltolások → `relative`
- Komplex elrendezések, overlayek → `absolute` / `fixed`
- Állandó láthatóság → `sticky` / `fixed`

## 17. Closure (JavaScript) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures {#closure-javascript}
A closure egy alapvető JavaScript koncepció: egy belső függvény hozzáfér a külső függvény változóihoz, még akkor is, ha a külső függvény már lefutott.

```js
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
```

### Miért hasznos?
1. **Adatinkapszuláció:**
```js
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
2. **Moduláris kód** – zárt változókörnyezet modulokban.
3. **Aszinkron kód kezelés** – callback-ek, promise-ok, setTimeout-ok.

## 18. TypeScript Data Types (and JavaScript Data Types) (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/everyday-types.html {#typescript-data-types-es-javascript-data-types-typescript-5}
### JavaScript primitív típusok
Number, String, Boolean, Undefined, Null, Symbol (ES6), BigInt (ES11).
```js
let num = 42;
let str = "Hello, World!";
let isActive = true;
let something; // undefined
let person = null;
let sym = Symbol('uniqueKey');
let bigInt = 12345678901234567890n;
```

### JavaScript összetett típusok
Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Promise.
```js
let person = { name: "John", age: 30 };
let fruits = ["apple", "banana", "cherry"];
function greet() { console.log("Hello!"); }
let now = new Date();
let regex = /\d+/;
let map = new Map(); map.set('key', 'value');
let set = new Set([1, 2, 3, 3]); // [1, 2, 3]
let weakMap = new WeakMap();
let weakSet = new WeakSet();
let promise = new Promise((resolve, reject) => { resolve('Success'); });
```

### TypeScript primitív típusok
`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
```ts
let age: number = 25;
let firstName: string = "John";
let isActive: boolean = true;
let emptyValue: null = null;
let uninitializedValue: undefined = undefined;
let sym: symbol = Symbol("unique");
let largeNumber: bigint = 9007199254740991n;
```

### TypeScript összetett típusok

**Tömbök:**
```ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["apple", "banana", "cherry"];
```

**Tuple:**
```ts
let person: [string, number] = ["John", 25];
```

**Object:**
```ts
let person: { name: string; age: number } = { name: "John", age: 30 };
```

**Enum:**
```ts
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
```

**Interface:**
```ts
interface Person { name: string; age: number; }
let john: Person = { name: "John", age: 25 };
```

**Union types:**
```ts
let value: number | string = "Hello";
value = 42;
```

**Intersection types:**
```ts
interface A { name: string; }
interface B { age: number; }
let person: A & B = { name: "John", age: 25 };
```

**Függvény típusok:**
```ts
let add: (a: number, b: number) => number = (a, b) => a + b;
```

**any / void / never / unknown:**
```ts
let variable: any = "Hello"; variable = 42;

function logMessage(message: string): void { console.log(message); }

function throwError(message: string): never { throw new Error(message); }

let data: unknown;
data = "Hello";
if (typeof data === "string") { console.log(data.toUpperCase()); }
```

## 19. Error Handling (v2+ · functional interceptors v15+) https://angular.dev/best-practices/error-handling {#error-handling-v2-funkcionalis-interceptorok-v15}
### 1. Try-Catch blokk (TypeScript szinten)
```ts
try {
  const data = JSON.parse('invalid json');
} catch (error) {
  console.error('Hiba történt: ', error);
}
```

### 2. Angular Global Error Handling – ErrorHandler
```ts
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error occurred:', error);
  }
}
```
```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. HTTP Hibakezelés – Interceptorok
```ts
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
}
```
```ts
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class AppModule {}
```

### 4. Observable alapú hibakezelés – catchError
```ts
@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get('https://api.example.com/data').pipe(
      catchError(error => {
        console.error('Hiba történt: ', error);
        return throwError(() => new Error('Valami hiba történt!'));
      })
    );
  }
}
```

### 5. Hibák naplózása – Logging
Eszközök: LogStash, Kibana, ElasticSearch.
```ts
@Injectable({ providedIn: 'root' })
export class LoggingService {
  constructor(private http: HttpClient) {}
  logError(error: any): void {
    this.http.post('https://logserver.example.com/log', { error }).subscribe();
  }
}
```

### 6. Error Reporting és Monitoring
Harmadik fél eszközei: Sentry, Rollbar.

## 20. Pipes (v2+) https://angular.dev/guide/pipes {#pipes-v2}
### Szöveg- és karakterlánc-alapú
`uppercase`, `lowercase`, `titlecase`, `slice`
```
{{ 'hello' | uppercase }} → "HELLO"
{{ 'HELLO' | lowercase }} → "hello"
{{ 'hello world' | titlecase }} → "Hello World"
{{ 'Angular' | slice:1:4 }} → "ngu"
```

### Szám alapú
`number`, `percent`, `currency`
```
{{ 1234.5678 | number:'1.2-2' }} → "1,234.57"
{{ 0.25 | percent }} → "25%"
{{ 1234.56 | currency:'USD':'symbol':'1.2-2' }} → "$1,234.56"
```

### Dátum- és időalapú
`date`
```
{{ today | date }} → "Sep 22, 2024"
{{ today | date:'fullDate' }} → "Sunday, September 22, 2024"
{{ today | date:'yyyy-MM-dd' }} → "2024-09-22"
```

### JSON pipe
```
{{ {name: 'John', age: 30} | json }} → {"name":"John","age":30}
```

### Aszinkron pipe
```
{{ asyncData | async }}
```

### i18n-alapú pipe-ok
`i18nPlural`, `i18nSelect`

### Egyéb
`keyvalue`
```
{{ {name: 'John', age: 30} | keyvalue }}
```

## 21. Directives (v2+ · @if/@for/@switch v17+) https://angular.dev/guide/directives {#directives-v2-if-for-switch-v17}
### Komponens direktívák
```ts
@Component({ selector: 'app-example', template: `<p>Hello, world!</p>` })
export class ExampleComponent {}
```

### Attribútum direktívák
```html
<div [ngClass]="{ 'highlight': isActive }">Hello, World!</div>
<div [ngStyle]="{ 'background-color': isActive ? 'green' : 'red' }">Hello</div>
<button [disabled]="isDisabled">Click me</button>
```

### Strukturális direktívák

**@if (Angular 17+; v18-tól stable, v20-tól a `*ngIf` deprecated – ez az ajánlott forma)** – blokk szintaxis, nem attribútum:
```html
@if (isLoggedIn()) {
  <div>Welcome, user!</div>
} @else if (isGuest()) {
  <div>Welcome, guest!</div>
} @else {
  <div>Please log in.</div>
}
```

**@for (Angular 17+)** – a `track` kifejezés kötelező:
```html
<ul>
  @for (item of items(); track item.id) {
    <li>{{ $index + 1 }}. {{ item.name }}</li>
  } @empty {
    <li>Nincs elem.</li>
  }
</ul>
```
Implicit változók: `$index`, `$count`, `$first`, `$last`, `$even`, `$odd` (`$` prefixszel, nem `@`-tal).

***ngIf (klasszikus)**
```html
<div *ngIf="isLoggedIn">Welcome back!</div>
```

***ngFor (klasszikus)**
```html
<ul><li *ngFor="let item of items">{{ item }}</li></ul>
```

***ngSwitch**
```html
<div [ngSwitch]="status">
  <div *ngSwitchCase="'online'">User is online</div>
  <div *ngSwitchCase="'offline'">User is offline</div>
  <div *ngSwitchDefault>User status is unknown</div>
</div>
```

### Conditional Style / Class
```html
<div [ngStyle]="{'color': isActive ? 'green' : 'red'}">
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
```
```ts
@Input() inputStyle: { [klass: string]: any } | null = null;
```
```html
[inputStyle]="{ 'css-class': condition ? 'value1' : 'value2' }"
```

## 22. Generics (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/generics.html {#generics-typescript-5}
```ts
export interface GenericValue<T> {
 original?: T;
 correction?: T;
 valid?: boolean;
}
```

## 23. DI – Resolution Modifiers (v2+ · inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#di-resolution-modifiers-v2-inject-opciok-v14}
### @Optional
Nem kötelező függőség; ha nincs provider, `null` értéket ad.
```ts
constructor(@Optional() @Inject('MyService') private myService: any) {
  if (this.myService) { console.log('Service is available'); }
  else { console.log('Service is not available'); }
}
```

### @Host
Csak a host elem injectorában keres. Modern forma: `inject(Dep, { host: true })` (a decorator továbbra is támogatott).
```ts
constructor(@Host() private logger: LoggerService) {
  this.logger.log('Host decorator example');
}
```

### @Self
Csak az aktuális komponens injectorában keres.
```ts
@Component({ providers: [LoggerService] })
export class ExampleComponent {
  constructor(@Self() private logger: LoggerService) {}
}
```

### @SkipSelf
Kihagyja az aktuális injectort, a szülőben keres.
```ts
constructor(@SkipSelf() private logger: LoggerService) {}
```

### Kombinált használat
```ts
constructor(
  @Optional() @SkipSelf() private logger: LoggerService
) {
  if (this.logger) { this.logger.log('Combined decorators example'); }
  else { console.log('LoggerService not found in parent injectors'); }
}
```

### Modern, `inject()`-alapú megfelelők (ajánlott)
A decoratorok helyett az `inject()` opcióobjektuma használható – ez működik osztálymező-inicializálóban is, és jobban tipizált:

```ts
private readonly logger = inject(LoggerService, { optional: true, skipSelf: true });
private readonly self = inject(LoggerService, { self: true });
private readonly hostDep = inject(LoggerService, { host: true });
private readonly url = inject(API_URL);
```

| Decorator | `inject()` opció |
| --- | --- |
| `@Optional()` | `{ optional: true }` (visszatérési típus `T \| null`) |
| `@Self()` | `{ self: true }` |
| `@SkipSelf()` | `{ skipSelf: true }` |
| `@Host()` | `{ host: true }` |
| `@Inject(TOKEN)` | `inject(TOKEN)` |

### @defer blokk (Angular 17+)
A `@defer` **nem direktíva, hanem template blokk** – elhalasztja a benne lévő rész betöltését (a kód külön chunkba kerül) a teljesítmény javítására.

**Viewportba érésre:**
```html
@defer (on viewport) {
  <app-heavy-component />
} @placeholder {
  <app-skeleton />
}
```

**Interakcióra / hoverre:**
```html
@defer (on interaction) {
  <app-extra-content />
} @placeholder {
  <button>További tartalom betöltése</button>
}
```

**Idő alapú, illetve saját feltétel:**
```html
@defer (on timer(2s)) { <app-late-content /> }
@defer (when isReady()) { <app-late-content /> }
@defer (on idle; prefetch on hover) {
  <app-chart />
} @loading (after 100ms; minimum 500ms) {
  <app-spinner />
} @error {
  <p>A tartalom betöltése nem sikerült.</p>
}
```
Triggerek: `on idle` (default), `on viewport`, `on interaction`, `on hover`, `on immediate`, `on timer(<idő>)`, `when <kifejezés>`. A `prefetch` külön triggerelhető. Blokkok: `@placeholder`, `@loading`, `@error`.

Tipikus use case-ek: nagy képek/videók, adattáblák/grafikonok, hosszú tartalom, előtöltés háttérben. Előnyök: teljesítmény optimalizálás, erőforrás-megtakarítás, jobb UX.

## 24. Class, Property, Method, Parameter Decorators (TypeScript 5+ · v2+) https://angular.dev/guide/di/creating-injectable-service {#class-property-method-parameter-decorators-typescript-5-v2}
### Class Decorator
```ts
function LogClass(target: Function) { console.log(`Class created: ${target.name}`); }

@LogClass
class ExampleClass { constructor() { console.log('ExampleClass instantiated'); } }
```
Angular: `@Component`, `@Injectable` stb.

### Property Decorator
```ts
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property decorated: ${propertyKey}`);
}
class ExampleClass {
  @LogProperty
  public name: string = 'Default Name';
}
```
Angular: `@Input`, `@Output`

### Method Decorator
```ts
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method called: ${propertyKey}`);
    return originalMethod.apply(this, args);
  };
}
class ExampleClass {
  @LogMethod
  sayHello() { console.log('Hello, world!'); }
}
```

### Parameter Decorator
```ts
function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter decorated: ${propertyKey}, Index: ${parameterIndex}`);
}
class ExampleClass {
  saySomething(@LogParameter message: string) { console.log(message); }
}
```
Angular: `@Inject`

## 25. Monkey Patching in JavaScript (JavaScript) https://developer.mozilla.org/en-US/docs/Glossary/Monkey_patch {#monkey-patching-javascript-ben-javascript}
Egy futó program viselkedésének módosítása anélkül, hogy a forráskódot megváltoztatnánk.

```js
const person = {
  name: 'John',
  greet() { return `Hello, my name is ${this.name}`; }
};
console.log(person.greet()); // "Hello, my name is John"

person.greet = function() {
  return `Hi, I am ${this.name}, nice to meet you!`;
};
console.log(person.greet()); // "Hi, I am John, nice to meet you!"
```

### Tipikus használati esetek
1. Külső könyvtárak viselkedésének módosítása
2. Hibajavítás futásidőben
3. Viselkedés módosítása tesztelés céljából
4. Legacy kód karbantartása
5. Polyfill-ek létrehozása
```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(element) {
    return this.indexOf(element) !== -1;
  };
}
```

**Előnyök:** gyors hibajavítás, testreszabás, egyszerűbb tesztek.
**Hátrányok:** kockázatos, nehéz hibakeresés, inkompatibilitás frissítéseknél.

## 26. CSS Units (CSS) https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units {#css-units-css}
### Abszolút unitok
- **px** – pixel, pontos kontroll.
- **cm, mm** – nyomtatásra.
- **in** – inch, nyomtatáshoz (1in = 2.54cm).
- **pt** – pont, tipográfia (1pt = 1/72 inch).
- **pc** – pica (1pc = 12pt).

### Relatív unitok
- **em** – az elem saját `font-size`-ához viszonyít (kivéve ha magát a `font-size`-t állítjuk: akkor a szülő `font-size`-ához).
```css
font-size: 2em;
```
- **rem** – root elem betűméretéhez igazodik.
```css
font-size: 2rem;
```
- **%** – szülő elemhez viszonyítva.
```css
width: 50%;
```
- **vw / vh** – viewport szélessége/magassága.
```css
width: 100vw;
height: 50vh;
```
- **min-content / max-content / fit-content** – dinamikus tartalom-méretezés.

## 27. HTML & CSS Antipatterns (HTML/CSS) https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content {#html-css-antipatterns-html-css}
### HTML Antipatterns
1. **Inline stílusok** – helyette külső/belső CSS: `.red-text { color: red; }`
2. **`<table>` alapú elrendezés** – helyette Flexbox/Grid.
3. **Alt szöveg nélküli képek** – mindig adjunk `alt` attribútumot.
4. **`<br>` túlzott használata** – helyette blokk elemek (`<p>`).
5. **Nem szöveges gombok** – helyette `<button>` elem.

### CSS Antipatterns
1. **Font-családok inline használata** – helyette globális stílus a `body`-n.
2. **`!important` túlzott használata** – helyette specifitás/szelektorok.
3. **Globális szelektorok túlzott használata** – helyette osztályok.
4. **Nem reszponzív fix méretek (px)** – helyette `%`, `vw`, `vh`.
5. **Hosszú, ismétlődő CSS fájlok** – helyette osztályalapú megosztott stílusok.

## 28. Angular & TypeScript Antipatterns (v2+) {#angular-typescript-antipatterns-v2}
### Angular Antipatterns
1. **Komponensek túlzott logikája** – helyette services-be kiszervezett üzleti logika.
2. **Nem használt OnDestroy/Subscription kezelés** – helyette `takeUntil()` vagy AsyncPipe.
```ts
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  ngOnInit() {
    this.myService.getData().pipe(takeUntil(this.destroy$)).subscribe(data => console.log(data));
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
}
```
3. **Közvetlen DOM-manipuláció** – helyette Renderer2/ViewChild.
4. **Nagyméretű fájlok és modulok** – helyette lazy loading.
5. **`any` típus túlzott használata** – helyette specifikus típusok.

### TypeScript Antipatterns
1. Implicit `any` használata – kapcsold be `noImplicitAny`-t.
2. Függvények típusának figyelmen kívül hagyása.
3. Túlzott típusok használata (inferencia hagyása).
4. Túlzott típusellenőrzés runtime-ban.
5. Felesleges null/undefined kezelés.

## 29. Bootstrap – Commonly Used Elements (Bootstrap 5) https://getbootstrap.com/docs/5.3/getting-started/introduction/ {#bootstrap-gyakran-hasznalt-elemek-bootstrap-5}
### Grid rendszer
`.container`, `.container-fluid`, `.row`, `.col`, `.col-{size}-{number}`

### Typography
Fejlécek, `.lead`, `.text-muted`, `.text-center/.text-start/.text-end`, `.fw-bold/.fw-normal/.fw-light`

### Buttons
`.btn`, `.btn-primary` (és más színek), `.btn-outline-...`, `.btn-lg/.btn-sm`

### Formok
`.form-control`, `.form-select`, `.form-check`

### Cards
`.card`, `.card-header`, `.card-body`, `.card-footer`

### Navigáció
`.navbar`, `.navbar-expand-lg`

### Utilities
Margin/padding (`m-`/`p-` + irány + méret), szöveg igazítás, színek (`.text-primary`, `.bg-light`), display osztályok (`.d-none .d-md-block`)

## 30. Flexbox (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox {#flexbox-css}
### Alapfogalmak
Main Axis (főtengely) és Cross Axis (keresztirányú tengely).

### Konténer tulajdonságok
- `display: flex;` / `display: inline-flex;`
- `flex-direction`: row (alap) / row-reverse / column / column-reverse
- `flex-wrap`: nowrap (alap) / wrap / wrap-reverse
- `flex-flow`: rövidítés direction+wrap-hoz
- `justify-content`: flex-start / flex-end / center / space-between / space-around / space-evenly
- `align-items`: stretch (alap) / flex-start / flex-end / center / baseline
- `align-content`: flex-start / flex-end / center / space-between / space-around / stretch

### Elem tulajdonságok
- `flex-grow` – mennyi helyet foglalhat el (alap: 0)
- `flex-shrink` – zsugorodás aránya (alap: 1)
- `flex-basis` – az elem alapmérete

## 31. CSS Grid – Example (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout {#css-grid-pelda-css}
Header + Left Sidebar + Body reszponzív elrendezés.

```html
<div class="grid-container">
  <header class="header">Header</header>
  <aside class="sidebar">Left Sidebar</aside>
  <main class="main-content">Main Content</main>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main-content";
  height: 100vh;
}
.header { grid-area: header; background-color: #333; color: white; text-align: center; padding: 1rem; }
.sidebar { grid-area: sidebar; background-color: #f4f4f4; padding: 1rem; }
.main-content { grid-area: main-content; background-color: #fff; padding: 1rem; }

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header"
      "main-content"
      "sidebar";
  }
  .sidebar { padding: 1rem 0; }
}
```

## 32. Angular Version Overview (v5–v19, Short Overview) (v5–v19) https://angular.dev/reference/releases {#angular-version-overview-v5-v19-rovid-attekintes-v5-v19}
- **Angular 5 (2017):** Build optimizations, HttpClient, i18n, Forms Validation
- **Angular 6 (2018):** CLI v6 (`ng add`/`ng update`), Angular Elements, Tree-Shakable Providers, Service Worker
- **Angular 7 (2018):** CLI Prompts, Virtual Scrolling, Drag and Drop, Content Projection Updates
- **Angular 8 (2019):** Differential Loading, Ivy (preview), Lazy Loading dynamic imports
- **Angular 9 (2020):** Ivy default, Improved Type Checking, ng update improvements
- **Angular 10 (2020):** Date Range Picker, Optional Stricter Settings, TSLib Update
- **Angular 11 (2020):** Faster Builds, Automatic Font Inlining, Component Test Harnesses
- **Angular 12 (2021):** ESLint (TSLint helyett), Ivy Everywhere, Nullish Coalescing sablonokban
- **Angular 13 (2021):** View Engine eltávolítva, ESBuild, Dynamic Component Creation
- **Angular 14 (2022):** Standalone Components, Typed Forms, Router Improvements
- **Angular 15 (2022):** Stable Standalone Components, Directive Composition API, Router-Component Scoping
- **Angular 16 (2023):** Signals API, Hydration API
- **Angular 17 (2023):** Új control flow (`@if`/`@for`/`@switch`, preview), `@defer`, View Transitions, hydration stable, Signals stable, esbuild+Vite stable
- **Angular 18 (2024):** Zoneless CD (experimental), `model()`/`output()`, `ng-content` fallback, `RedirectCommand`, Material 3
- **Angular 19 (2024):** Standalone default, `linkedSignal`/Resource/`@let`, incremental hydration, `provideAppInitializer`

## 33. Angular 17 – New Features (v17) https://angular.dev/reference/releases {#angular-17-uj-funkciok-v17}
1. **Új control flow** – `@if` / `@for` / `@switch` (dev preview; később stable).
2. **`@defer`** – késleltetett nézetek (dev preview).
3. **Hydration stable** – `provideClientHydration()` az `@angular/platform-browser`-ből.
```ts
import { provideClientHydration } from '@angular/platform-browser';
bootstrapApplication(AppComponent, { providers: [provideClientHydration()] });
```
4. **Signals API stable** – hatékonyabb reaktivitás.
```ts
import { signal, effect } from '@angular/core';
export class CounterComponent {
  count = signal(0);
  constructor() { effect(() => console.log('Current count:', this.count())); }
  increment() { this.count.update(value => value + 1); }
}
```
5. **View Transitions** – `withViewTransitions()` a routeren.
6. **`afterRender` / `afterNextRender`** – DOM-műveletek a render után.
7. **esbuild + Vite** – alkalmazás-build (stable).
8. **Signal inputs** és (v17.2+) signal query-k (`viewChild` / `contentChild`).

## 34. Angular 18 – New Features (v18) https://angular.dev/reference/releases {#angular-18-uj-funkciok-v18}
1. **Zoneless change detection (experimental)** – `provideExperimentalZonelessChangeDetection()` (később `provideZonelessChangeDetection()`).
2. **`model()` (v17.2) és `output()` (v17.3)** – signal-alapú two-way / event API; v18-ban tovább stabilizálódott a signal authoring felület.
3. **`ng-content` fallback tartalom** – tartalék a `<ng-content>` elemen belül, ha nincs projekció.
4. **`RedirectCommand`** – guard/redirect eredmény skipLocationChange és társai mellett.
5. **Funkcionális route redirect** – `redirectTo` függvényként is megadható.
6. **Material 3** és hydration debug fejlesztések.
7. **Signal query-k / signal inputs stable** (a v16–v17 preview után).

> Typed Forms (v14), Directive Composition API (v15), Signals preview (v16) és hydration bevezetése (v16–v17) **nem** v18 újdonságok – korábbi verziókban jelentek meg.
> v19-től a komponensek **alapból standalone-ok**, ezért a `standalone: true` sor elhagyható. NgModule-ba tartozó komponensnél explicit `standalone: false` kell.

## 35. Angular 19 – New Features (First Overview) (v19) https://angular.dev/reference/releases {#angular-19-uj-funkciok-elso-attekintes-v19}
1. **Standalone default** – új komponens/direktíva/pipe alapból standalone; NgModule-hoz `standalone: false`.
2. **`linkedSignal` (experimental)** – forráshoz kötött, felülírható signal.
3. **Resource API (experimental)** – aszinkron adat `resource` / később `rxResource` / `httpResource`.
4. **`@let` template változó**
5. **Inkrementális hydration (experimental)** és server route konfiguráció.
6. **`ROUTER_OUTLET_DATA` / `routerOutletData`**
7. **Initializer provider függvények** – `provideAppInitializer`, `provideEnvironmentInitializer`.
8. **`afterRenderEffect` (experimental)**, HMR fejlesztések, új diagnosztikák.

> Typed Forms, Directive Composition API és a „Strict Templates” **nem** v19 újdonságok.

## 36. RouterTestingHarness (v14+) https://angular.dev/guide/routing/testing {#routertestingharness-v14}
Az Angular RouterTestingHarness a router logikával rendelkező alkalmazások tesztelését segíti (dinamikus útvonalak, lazy loading).

```ts
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

TestBed.configureTestingModule({
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ])
  ]
});

it('should navigate to the about page', async () => {
  const harness = await RouterTestingHarness.create();
  await harness.navigateByUrl('/about');
  expect(harness.routeNativeElement.querySelector('h1').textContent).toContain('About Page');
});
```

Előnyök: egyszerűbb router tesztelés, izolált tesztek, async tesztelés támogatása, átfogó útvonal logika tesztelése.

> A `RouterTestingModule` legacy; új tesztekben `provideRouter([...])` a TestBed `providers` tömbjében.

## 37. Directive Composition API (v15+) https://angular.dev/guide/directives/directive-composition-api {#directive-composition-api-v15}
Lehetővé teszi, hogy egy komponens több direktívát is használjon (`hostDirectives`).

```ts
@Component({
  standalone: true,
  selector: 'admin-menu',
  templateUrl: './admin-menu.html',
  hostDirectives: [HighlightDirective, TooltipDirective, MenuBehavior],
})
export class AdminMenu {}
```

Végrehajtási sorrend: host direktívák példányai létrejönnek → AdminMenu létrejön → host direktívák ngOnInit → AdminMenu ngOnInit → host bindingek (előbb a hostDirectives, majd a komponens).

Előnyök: modularitás, karbantarthatóság, meghatározott végrehajtási sorrend.

## 38. Angular Signals (v16 dev preview · v17 stable) https://angular.dev/guide/signals {#angular-signals-v16-dev-preview-v17-stable}
Reaktív API állapotkezelésre.

**Írható Signal:**
```ts
const count = signal(0); // WritableSignal<number>
count(); // 0
count.set(5);
count.update(v => v + 1); // 6
```
Metódusok: `()`, `.set(value)`, `.update(fn)`, `.asReadonly()`

> A korábban tervezett `.mutate()` **nem került be** a végleges API-ba: a signalok immutábilis frissítést várnak, ezért `update(v => ...)`-tal új értéket adunk vissza.

**Csak olvasható Signal:**
```ts
const count = signal(5);
const doubled = computed(() => count() * 2); // ReadonlySignal<number>
doubled(); // 10
```
```ts
const _count = signal(0);
export const count = _count.asReadonly();
```

**Effect:**
```ts
const count = signal(0);
effect(() => console.log(`Count changed: ${count()}`));
count.set(count() + 1);
```

**Computed:**
```ts
const count = signal(2);
const doubleCount = computed(() => count() * 2);
console.log(doubleCount());  // 4
count.set(4);
console.log(doubleCount());  // 8
```

**OnPush komponens signal-lel:**
```ts
@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ doubleCount() }}`,
  standalone: true
})
export class CounterComponent {
  count = signal(2);
  doubleCount = computed(() => this.count() * 2);
}
```

## 39. Signal Input / Output (input() v17 · output() v17.3 · model() v17.2 · signal query-k v17.2) https://angular.dev/guide/signals/inputs {#signal-input-output-input-v17-output-model-v18-signal-query-k-v17-2}
A signal input **nem** `@Input()`-tal átadott `Signal` objektum, hanem az `input()` függvénnyel deklarált mező. Az érték sima értékként érkezik, a komponens signalként olvassa:

```ts
@Component({ selector: 'app-child', template: `{{ label() }} – {{ upper() }}` })
export class ChildComponent {
  readonly label = input<string>('');                       // optional, with default
  readonly count = input.required<number>();                // kötelező
  readonly disabled = input(false, { transform: booleanAttribute });  // value transform
  readonly name = input<string>('', { alias: 'userName' }); // aliasing
  readonly upper = computed(() => this.label().toUpperCase());
}

@Component({
  selector: 'app-parent',
  template: `<app-child [label]="title()" [count]="3" disabled userName="admin" (changed)="onChanged($event)" />`,
})
export class ParentComponent { readonly title = signal('Hello from parent'); }
```

**Output és kétirányú kötés:**
```ts
readonly changed = output<string>();          // EventEmitter helyett
readonly value = model<string>('');           // kétirányú: [(value)]
// kibocsátás
this.changed.emit('új érték');
```

**Signal query-k** (decorator helyett):
```ts
readonly input = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
readonly items = viewChildren(ItemComponent);
readonly projected = contentChild(TemplateRef);
```

Előnyök: value transform, aliasing, derivált értékek `computed`-del, nincs `ngOnChanges`, nincs `QueryList` életciklus-kérdés, és a query-k `undefined` helyett reaktívan frissülnek. Migráció: `ng generate @angular/core:signals`.

## 40. ngOptimizedImage (v14 dev preview · v15 stable · decoding v21+) https://angular.dev/guide/image-optimization {#ngoptimizedimage-v14-dev-preview-v15-stable-decoding-v21}
Képek optimalizálására a teljesítmény szempontjából.

Használat előtt a `NgOptimizedImage` direktívát importálni kell a komponensbe, és a `width`/`height` (vagy a `fill` attribútum) **kötelező** – ezek nélkül a direktíva hibát dob (ez akadályozza meg a layout shiftet).

```ts
@Component({ imports: [NgOptimizedImage], /* ... */ })
```
```html
<!-- LCP kép: priority → preload link és fetchpriority="high" -->
<img ngSrc="hero.jpg" width="1200" height="600" priority alt="Nyitókép">

<!-- reszponzív: a direktíva srcset-et generál -->
<img ngSrc="card.jpg" width="400" height="300" sizes="(max-width: 768px) 100vw, 400px" alt="Kártya">

<!-- konténert kitöltő kép, ismert arány nélkül -->
<div style="position: relative; aspect-ratio: 16/9">
  <img ngSrc="bg.jpg" fill alt="Háttér">
</div>
```
CDN loader beállítása: `provideImgixLoader('https://...')`, `provideCloudinaryLoader(...)`, `provideImageKitLoader(...)`, `provideCloudflareLoader(...)`, illetve `IMAGE_LOADER` tokennel saját loader. Egyedi transzformációk a `loaderParams` inputtal adhatók át.

Amit ad: automatikus `srcset`, lazy loading alapból, `priority` esetén preload, figyelmeztetés túl nagy letöltött képre és hiányzó méretre. Tipikus use case: nagy méretű képek, reszponzív képek, LCP/SEO optimalizálás.

## 41. ngTemplateOutlet (v2+) https://angular.dev/api/common/NgTemplateOutlet {#ngtemplateoutlet-v2}
Sablon dinamikus megjelenítése.

```html
<ng-template #myTemplate>
  <p>Ez egy dinamikus tartalom!</p>
</ng-template>
<div *ngTemplateOutlet="myTemplate"></div>
```

## 42. ngProjectAs (v2+ · ng-content fallback v18+) https://angular.dev/guide/templates/ng-content {#ngprojectas-v2-ng-content-fallback-v18}
Az `ngProjectAs` attribútummal meghatározható, hogy egy elem hogyan viselkedjen az `ng-content select="..."` kiválasztásánál, függetlenül a valódi típusától.

```html
<div class="card-shadow">
  <ng-content select="card-title"></ng-content>
  <div class="card-divider"></div>
  <ng-content></ng-content>
</div>
```
```html
<custom-card>
  <h3 ngProjectAs="card-title">Hello</h3>
  <p>Welcome to the example</p>
</custom-card>
```

### Fallback content (v18+)
A tartalék tartalom a `<ng-content>` **elem belsejébe** kerül; csak akkor jelenik meg, ha semmi sem lett projektálva.
```html
<div class="wrapper">
  <ng-content>Alapértelmezett szöveg, ha nincs tartalom megadva.</ng-content>
</div>
```
```html
<header>
  <ng-content select="[header]">
    <h1>Default header</h1>
  </ng-content>
</header>
```

> A `*ngIf="hasContent"` + külön fallback minta **nem** a v18 `ng-content` fallback API – az Angular a projektált tartalom meglétét maga kezeli.

## 43. Content Projection (v2+ · fallback tartalom v18+) https://angular.dev/guide/components/content-projection {#content-projection-v2-fallback-tartalom-v18}
**Single-slot:**
```html
<!-- Szülő -->
<app-child><p>Ez a tartalom kerül vetítésre.</p></app-child>
<!-- Gyermek -->
<div><ng-content></ng-content></div>
```

**Multi-slot:**
```html
<!-- Szülő -->
<app-child><header>Fejléc tartalom</header><p>Fő tartalom</p></app-child>
<!-- Gyermek -->
<div>
  <ng-content select="header"></ng-content>
  <ng-content></ng-content>
</div>
```

## 44. ngNonBindable (v2+) https://angular.dev/guide/templates {#ngnonbindable-v2}
Letiltja az Angular adatbekötést egy elemen belül.
```html
<p ngNonBindable>{{ username }}</p>
```

## 45. Custom Structural Directive – Example (v2+) https://angular.dev/guide/directives/structural-directives {#custom-structural-direktiva-pelda-v2}
```ts
@Directive({ selector: '[appMyIf]' })
export class MyIfDirective {
  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {}
  @Input() set appMyIf(condition: boolean) {
    this.vc.clear();
    if (condition) { this.vc.createEmbeddedView(this.tpl); }
  }
}
```
```html
<div *appMyIf="isLoggedIn">Be vagy jelentkezve!</div>
```

## 46. Directives and Their Usage (ng* helpers) (v2+) https://angular.dev/guide/directives {#directivak-es-hasznalatuk-ng-segedek-v2}
- **ngTemplateOutlet** – dinamikus sablonok megjelenítése
- **ngOptimizedImage** – képoptimalizálás
- **ngContainer** – csoportosítás renderelés nélkül
- **ngPlural / ngPluralCase** – többes szám kezelése
- **ngSwitch / ngSwitchCase / ngSwitchDefault** – feltételes megjelenítés
- **ngModelGroup** – űrlap csoportosított vezérlőelemek (template-driven; reactive megfelelője a beágyazott `FormGroup` + `formGroupName` – lásd az *ngModelGroup and Reactive Forms Alternatives* szekciót)
- **ng-template** – sablon elem (nem direktíva); a kapcsolódó direktíva az `NgTemplateOutlet` / `*ngTemplateOutlet`
- **ngComponentOutlet** – dinamikus komponens megjelenítése (`inputs`, `injector`, `directives` opciókkal)
- **ngSrc / ngSrcset** (`NgOptimizedImage`) – képbetöltés optimalizálása

> Nem direktívák, csak gyakran ide keverednek: **NgZone** (injektálható szolgáltatás a zóna-kezeléshez), **NgModuleRef** (modulpéldány referencia), **ngProbeToken** (belső debug token), `ngZoneOptions` (bootstrap konfiguráció). Ezek TypeScript API-k, nem használhatók sablonban.

## 47. Zoneless Change Detection (v18 experimental · v20.2 stable) https://angular.dev/guide/zoneless {#zoneless-change-detection-v18-kiserleti-v20-2-stable}
```bash
npm uninstall zone.js
```
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
});

@Component({ selector: 'app-root', template: `{{ count() }}` })
export class AppComponent {
  count = signal(0);
  increment() { this.count.set(this.count() + 1); }
}
```
Signal-írás, `markForCheck()`, AsyncPipe új érték, input-beállítás és komponens csatolás/leválasztás ütemezi a CD-t – manuális `ApplicationRef.tick()` általában nem kell.

## 48. Server Side Rendering (SSR) (v17+ (@angular/ssr)) https://angular.dev/guide/ssr {#server-side-rendering-ssr-v17-angular-ssr}
```bash
ng add @angular/ssr
npm run build
npm run serve:ssr
```

> A `@nguniversal/express-engine` csomag megszűnt (v17-től): a funkció a beépített `@angular/ssr` csomagba került. Régi projekteknél az `ng update` migrációja átírja a konfigurációt.
Hydration: a böngésző "hidratálja" a szerveren generált statikus HTML-t, aktiválva a dinamikus funkciókat.

## 49. Angular Migration Commands (v6+ (ng update)) https://angular.dev/update {#angular-migration-commands-v6-ng-update}
```bash
ng update @angular/core @angular/cli
ng update @angular/core          # inject() migráció / control flow syntax
ng update @angular/core @angular/router   # lazy-loaded routes
```

## 50. UntypedFormGroup (v14+) https://angular.dev/guide/forms/typed-forms {#untypedformgroup-v14}
Nem típusos űrlapok kezelésére (Angular 14+).
```ts
// FormGroup (típusos)
form = new FormGroup<{ name: FormControl<string> }>({ name: new FormControl('') });
// UntypedFormGroup (nem típusos)
form = new UntypedFormGroup({ name: new FormControl('') });
```

### formControlName vs [formControl]
```html
<input formControlName="name">     <!-- FormGroup-on belül -->
<input [formControl]="nameControl"> <!-- önálló vezérlő -->
```

## 51. UntypedFormBuilder (v14+) https://angular.dev/guide/forms/typed-forms {#untypedformbuilder-v14}
```ts
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({ selector: 'app-sample-form', template: `<form [formGroup]="form"></form>` })
export class SampleFormComponent {
  form: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({ name: '', age: '' });
  }
}
```
Célja: rugalmas, gyors formkezelés típusellenőrzés nélkül.

## 52. Data Binding (v2+) https://angular.dev/guide/templates/binding {#data-binding-v2}
1. **Interpoláció:** `{{ propertyName }}`
2. **Property binding:** `[property]="expression"`
3. **Event binding:** `(event)="method()"`
4. **Kétirányú:** `[(ngModel)]="property"`

```html
<input [(ngModel)]="name" placeholder="Írd be a neved">
<p>Üdvözöllek, {{ name }}!</p>
```

## 53. Built-in Validators (v2+) https://angular.dev/guide/forms/form-validation {#built-in-validators-v2}
```ts
Validators.required
Validators.min(18), Validators.max(65)
Validators.minLength(5), Validators.maxLength(15)
Validators.requiredTrue
Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
Validators.nullValidator
Validators.compose([Validators.required, Validators.minLength(5)])
Validators.composeAsync([asyncValidator])
```

**Async Validator példa (Zip Code):**
```ts
function zipCodeValidator(service: ZipCodeService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return service.checkZipCode(control.value).pipe(
      map(isValid => isValid ? null : { invalidZip: true }),
      catchError(() => of(null))
    );
  };
}
this.form = this.fb.group({
  zipCode: ['', [Validators.required], [zipCodeValidator(this.zipCodeService)]]
});
```

## 54. Builder Settings (v16+ (esbuild) · v17+ application builder) https://angular.dev/tools/cli/cli-builder {#builder-settings-v16-esbuild-v17-application-builder}
```json
"build": { "builder": "@angular/build:application" }
```
Ajánlott: **`@angular/build:application`** (esbuild-alapú, modern default). A `@angular-devkit/build-angular:browser-esbuild` átmeneti builder volt a webpack `browser` és az `application` között.
Egyéb ajánlott opciók: `optimization: true`, `sourceMap: false`. A `buildOptimizer` a régi webpack `browser` builder opciója – az application/esbuild úton nem releváns.

## 55. TypeScript Method Overload / Override (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads {#typescript-method-overload-override-typescript-5}
**Overriding:**
```ts
class Animal { makeSound(): void { console.log("Some sound"); } }
class Dog extends Animal { makeSound(): void { console.log("Bark"); } }
```

**Overloading:**
```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any { return a + b; }
}
```

## 56. FakeAsync, tick, flush, flushMicrotask (v2+ · zone-based; use Vitest fake timers when zoneless) https://angular.dev/guide/testing/zone-js-testing-utilities {#fakeasync-tick-flush-flushmicrotask-v2-zone-alapu-zoneless-helyett-vitest-fake-timers}
- `tick()` – idő előreléptetése
- `flush()` – minden aszinkron feladat végrehajtása
- `flushMicrotasks()` – csak Promise-ok végrehajtása

```ts
it('should handle async task', fakeAsync(() => {
  let done = false;
  setTimeout(() => { done = true; }, 1000);
  tick(1000);
  expect(done).toBeTrue();
}));
```

## 57. Component Selectors (v2+) https://angular.dev/guide/components/selectors {#component-selectors-v2}
**Elem szelektor:**
```ts
@Component({ selector: 'app-user-card' })
```
```html
<app-user-card></app-user-card>
```

**Attribútum szelektor:**
```ts
@Component({ selector: '[appUserCard]' })
```
```html
<div appUserCard></div>
```

**Osztály szelektor:**
```ts
@Component({ selector: '.app-user-card' })
```
```html
<div class="app-user-card"></div>
```

**Több szelektor:**
```ts
@Component({ selector: 'app-user-card, [appUserCard], .app-user-card' })
```

### Host Element
```html
<app-user-profile></app-user-profile>
```
Használat: `:host` pszeudo-szelektor stílushoz, `@HostBinding`, `@HostListener`, vagy `host: { class: 'css-classname' }` a `@Component` decoratoron belül.

## 58. Style Binding (v2+) https://angular.dev/guide/templates/binding {#style-binding-v2}
**Class binding:**
```html
<div [class.active]="isActive">Elem</div>
<div [class]="myClassString"></div>
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }"></div>
```

**Style Binding:**
```html
<div [style.color]="'red'">Piros szöveg</div>
<div [style.font-size.px]="fontSize">Dinamikus méret</div>
<div [ngStyle]="{'color': 'blue', 'font-weight': 'bold'}">Kék, félkövér</div>
```
```ts
styles = { color: 'green', 'font-size': '20px', 'background-color': 'lightgray' };
```
```html
<div [ngStyle]="styles">Stílus objektumból</div>
```

## 59. DestroyRef (v16+) https://angular.dev/api/core/DestroyRef {#destroyref-v16}
Automatikusan végrehajt logikát a komponens/service megsemmisülésekor, kiváltva sok esetben az `OnDestroy` hook-ot.

```ts
private destroyRef = inject(DestroyRef);
this.destroyRef.onDestroy(() => { /* clean something */ });
```
Kombinálható `takeUntilDestroyed()` / `takeUntilDestroyed(destroyRef)` (`@angular/core/rxjs-interop`) és `effect()`-tel. A `DestroyRef` **nem** Observable – ne használd `takeUntil(destroyRef)`-ként.

## 60. Injection Context (v14+ · runInInjectionContext v16+) https://angular.dev/guide/di/dependency-injection-context {#injection-context-v14-runininjectioncontext-v16}
A DI rendszer belsőleg egy futásidejű kontextusra támaszkodik, ahol az aktuális injector elérhető. Ez elérhető:
- DI-rendszer által instanciált osztályokban (konstruktor)
- osztály mezők inicializálójában
- Provider/@Injectable `useFactory` gyári függvényben
- InjectionToken gyári függvényben
- injektálási kontextusban futó stack frame-en belül

Ha injektálási kontextusban vagyunk, az `inject` függvény használható.

## 61. Template Reference Variables (v2+) https://angular.dev/guide/templates/reference-variables {#template-reference-variables-v2}
**DOM elemhez hozzáférés:**
```html
<form (ngSubmit)="onSubmit(inputElement)">
  <input #inputElement type="text">
  <button type="button" (click)="print(inputElement.value)">Print value</button>
</form>
```
```ts
onSubmit(inputElement: HTMLInputElement) {}
print(value: string) { console.log(value); }
```

> A sablonban **nincs** `console`, `window` vagy más globális objektum – a kifejezések a komponenspéldány kontextusában értékelődnek ki. Naplózáshoz komponens-metódust kell hívni.

**Komponens példány elérése:**
```html
<app-counter #counterComp></app-counter>
<button (click)="counterComp.reset()">Reset Counter</button>
```

## 62. Structural Directive – Accessing Exported Values (v2+ · @let v19+) https://angular.dev/guide/templates/let-template-variables {#structural-directive-exportalt-ertek-elerese-v2-let-v19}
```html
<div *ngIf="user as currentUser">{{ currentUser.name }}</div>
```

### @let Template Variables
```html
@let name = user.name;
@let greeting = 'Hello, ' + name;
@let data = data$ | async;
@let pi = 3.1459;
@let coordinates = {x: 50, y: 100};
```
`@let` deklarációk az aktuális nézetre és leszármazottaira korlátozódnak; új nézet jön létre komponenshatáron, control flow blokkoknál, `@defer` blokkoknál, vagy strukturális direktíváknál.

## 63. Signal (v16 dev preview · v17 stable) https://angular.dev/guide/signals {#signal-v16-dev-preview-v17-stable}
```ts
type Signal<T> = (() => T) & { [SIGNAL]: unknown; }
```
```ts
function signal<T>(initialValue: T, options?: CreateSignalOptions<T>): WritableSignal<T>;
interface WritableSignal<T> extends Signal<T> {
  set(value: T): void;
  update(updateFn: (value: T) => T): void;
  asReadonly(): Signal<T>;
}
```

## 64. Effect (v16 dev preview · v20 stable) https://angular.dev/guide/signals/effect {#effect-v16-dev-preview-v20-stable}
```ts
function effect(effectFn: (onCleanup: EffectCleanupRegisterFn) => void, options?: CreateEffectOptions): EffectRef;
```

### Mikor használjunk effektet
- adatnaplózás, analitika
- adatok szinkronban tartása `window.localStorage`-tel
- egyéni DOM viselkedés
- egyedi renderelés (canvas, diagramkészítő könyvtár)

### Mikor NE
- állapotváltozások terjedéséhez (helyette `computed`)

## 65. Computed (v16 dev preview · v17 stable) https://angular.dev/guide/signals {#computed-v16-dev-preview-v17-stable}
```ts
function computed<T>(computation: () => T, options?: CreateComputedOptions<T>): Signal<T>;
```

## 66. LinkedSignal (v19 experimental · v20 stable) https://angular.dev/guide/signals/linked-signal {#linkedsignal-v19-kiserleti-v20-stable}
Egy speciális signal, ami egy másik forráshoz kötött, de saját maga is felülírható; ha a forrás változik, újra szinkronizálódik.

```ts
function linkedSignal<D>(computation: () => D, options?): WritableSignal<D>;
function linkedSignal<S, D>(options: { source: () => S; computation: (source, previous?) => D; }): WritableSignal<D>;
```

### Használati esetek
1. Űrlapmezők default értékei
2. Átmeneti szerkesztési állapot
3. Élő konfiguráció szerkesztés
4. Keresősáv/szűrő értékek kezelése

> Az `NgControl` status class-ok (`ng-valid`, `ng-dirty`, …) és a `formControlName` vs `[formControl]` összevetés az űrlap szekciókban / Q&A-ban szerepel – nem LinkedSignal-téma.

## 67. TypeScript Utility Types Cheat Sheet (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/utility-types.html {#typescript-utility-types-cheat-sheet-typescript-5}
- **Partial<T>** – minden mezőt optional-lá tesz. `type PartialUser = Partial<User>;`
- **Required<T>** – minden mezőt kötelezővé tesz. `type Final = Required<Draft>;`
- **Readonly<T>** – minden mezőt readonly-vá tesz. `type ImmutableConfig = Readonly<Config>;`
- **Pick<T, K>** – kiválaszt néhány mezőt. `type ContactInfo = Pick<User, 'name' | 'email'>;`
- **Omit<T, K>** – eltávolít mezőket. `type UpdateUserDto = Omit<User, 'id'>;`
- **Record<K, T>** – objektumtípus kulcs-érték párokkal. `type PermissionMap = Record<Permission, boolean>;`
- **ReturnType<T>** – függvény visszatérési típusa. `type UserReturn = ReturnType<typeof getUser>;`
- **Parameters<T>** – függvény paraméterei tuple-ként. `type Args = Parameters<typeof log>;`
- **NonNullable<T>** – eltávolítja null/undefined-ot. `type CleanValue = NonNullable<Value>;`
- **Exclude<T, U>** – eltávolítja U típusokat. `type VisibleStatus = Exclude<Status, 'deleted'>;`
- **Extract<T, U>** – megtartja a közös típusokat. `type Common = Extract<A, B>;`
- **Awaited<T>** – kicsomagolja a Promise belső típusát. `type Result = Awaited<Promise<string>>;`

Kombinálhatók: `type Editable = Partial<Omit<User, 'id'>>;`

> Az alábbi **Providers** és **SSR** blokkok Angular bootstrap témák (nem TypeScript utility type-ok); a cheat sheet utáni gyakorlati kiegészítésként szerepelnek.

### Providers (standalone) – mi mire való

A standalone bootstrap az `NgModule`-ok `imports` tömbjét **provider-függvényekre** cseréli. Ezek tree-shakeable-ek (amit nem hívunk meg, nem kerül a bundle-be), tipizáltak, és a viselkedésüket `with*()` **feature-függvényekkel** finomítjuk. Konvenció: `provideXyz()` = a szolgáltatás bekapcsolása, `withXyz()` = optional kiegészítő ugyanahhoz.

```ts
bootstrapApplication(AppComponent, appConfig);

export const appConfig: ApplicationConfig = { providers: [ /* itt hívjuk őket */ ] };
```

#### Alaprétegek (v14–v16)

**`provideHttpClient(...features)`** – bekapcsolja a `HttpClient`-et. Ez váltja ki a `HttpClientModule`-t (az régi projektekben deprecated). Feature-ek:
- `withFetch()` (v16+) – XHR helyett a Fetch API-t használja; jobb SSR-viselkedés. A `keepalive` (v20+) **opcionális** request-opció (pl. analytics/beacon), nem feltétele a Fetch használatának.
- `withInterceptors([fn1, fn2])` (v15+) – **funkcionális** interceptorok a deklarált sorrendben; belül `inject()` használható.
- `withInterceptorsFromDi()` – a régi, osztályalapú `HTTP_INTERCEPTORS` interceptorok átvétele migráció közben.
- `withXsrfConfiguration({ cookieName, headerName })` / `withNoXsrfProtection()` – CSRF token kezelése.
- `withRequestsMadeViaParent()` – gyerek injectorban a szülő interceptor-láncát használja.
- `withJsonpSupport()`, `withHttpTransferCacheOptions({...})` (SSR cache).

**`provideRouter(routes, ...features)`** – a router konfigurálása és a route-tábla átadása. A `RouterModule.forRoot()` modern megfelelője. Feature-ek:
- `withComponentInputBinding()` (v16+) – a route paraméterek, query paraméterek és resolved data közvetlenül a komponens `@Input()`/`input()` mezőibe kerülnek, nem kell `ActivatedRoute`-ot injektálni.
- `withViewTransitions()` (v17+) – a navigációt `document.startViewTransition()`-be csomagolja (natív oldalátmenet).
- `withPreloading(PreloadAllModules)` – lazy chunkok előtöltése (lásd a preloading szekciót).
- `withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })` – görgetési pozíció visszaállítása és `#anchor` ugrás.
- `withHashLocation()` – `/#/route` URL-ek szerverkonfiguráció nélkül.
- `withEnabledBlockingInitialNavigation()` – SSR-nél az első navigáció blokkoló, hogy a szerver a végleges HTML-t adja; `withDisabledInitialNavigation()` az ellenkezője (manuális bootstrap).
- `withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })`.
- `withDebugTracing()` – minden router event konzolra írása (csak fejlesztéshez).

**`provideAnimations()`** – a régi `@angular/animations` motor (`BrowserAnimationsModule` megfelelője). **v20-tól a csomag deprecated**, az új út az `animate.enter` / `animate.leave` és natív CSS. Ha csak Material komponensek animációi miatt kellene, érdemes átgondolni.
**`provideNoopAnimations()`** – az animációs API-t kielégíti, de nem animál. Használat: tesztek, CI, akadálymentesítés (`prefers-reduced-motion`), lassú eszközök.
**`provideAnimationsAsync()`** (v17+) – az animációs motort lazy chunkban tölti be, így nem terheli a kezdeti bundle-t.

**`provideServiceWorker('ngsw-worker.js', { enabled, registrationStrategy })`** (v15+) – PWA service worker regisztrálása. A `registrationStrategy: 'registerWhenStable:30000'` addig vár, amíg az app stabilizálódik (max 30 s), hogy a regisztráció ne versenyezzen a kezdeti betöltéssel. Fejlesztésben `enabled: !isDevMode()`.

**`provideEnvironmentProviders([...])`** / **`makeEnvironmentProviders([...])`** (v15–v16) – ez a **könyvtárírók eszköze**: több providert csomagol egyetlen, típusos `EnvironmentProviders` értékbe, amit a fogyasztó egyetlen hívásként ad meg. Így épül fel minden `provideXyz()` függvény:
```ts
export function provideMyFeature(config: MyConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: MY_CONFIG, useValue: config },
    MyFeatureService,
  ]);
}
```
Előnye a sima tömbbel szemben: nem szúrható be komponens `providers`-be (fordítási hiba), tehát a könyvtár kikényszeríti a helyes használatot.

#### SSR és hydration (v17+)

**`provideServerRendering()`** – a **szerveroldali** konfiguráció (`app.config.server.ts`), a szerver platform szolgáltatásait adja. v19-től ide kerülhet a `withRoutes(serverRoutes)` a route-szintű render módhoz (`Server`, `Client`, `Prerender`).

**`provideClientHydration(...features)`** – a **kliensoldali** hydration: a böngésző nem dobja el és építi újra a szerver HTML-jét, hanem „életre kelti” (jelentős LCP/CLS javulás). Feature-ek:
- `withEventReplay()` (v18+) – a hidratálás előtti kattintásokat eltárolja és utólag lejátssza, így nem veszik el a korai interakció.
- `withIncrementalHydration()` (v19 experimental, v20 stable) – a `@defer (hydrate on ...)` blokkok csak akkor hidratálódnak, amikor tényleg kellenek. **v22-től ez a default**, ezért ott már nem kell kiírni; kikapcsolása `withNoIncrementalHydration()`.
- `withHttpTransferCacheOptions({ includePostRequests: false, filter })` – a szerveren lefutott HTTP kérések válaszát átadja a kliensnek (`TransferState`), hogy ne kérje le kétszer.
- `withI18nSupport()`, `withNoHttpTransferCache()`.

#### Inicializálás és change detection (v19–v20)

**`provideAppInitializer(fn)`** (v19+) – a régi `APP_INITIALIZER` multi-provider tipizált utódja. A bootstrap **megvárja** a visszaadott `Promise`/`Observable`-t, tehát ide való a runtime konfiguráció betöltése, feature flagek, auth session helyreállítása. Minden ide tett művelet lassítja az első rendert – csak a valóban blokkoló dolgok.

**`provideEnvironmentInitializer(fn)`** (v19+) – az `ENVIRONMENT_INITIALIZER` utódja: az environment injector felállásakor fut, **nem várja meg** az aszinkron eredményt. Telemetria indítása, globális DI-alapú regisztrációk. (Létezik `providePlatformInitializer()` is: a platform szintjén, az app előtt fut.)

**`provideZonelessChangeDetection()`** (v18 `provideExperimentalZonelessChangeDetection()` néven, v20.2-től stable) – kiveszi a zone.js-t a change detection ütemezéséből. Ezután a CD-t signal-változás, `markForCheck()`, AsyncPipe új értéke, komponens csatolás/leválasztás és input-beállítás indítja. Előnye: kisebb bundle, kiszámíthatóbb és kevesebb renderelés, jobb INP. Feltétele, hogy a kód (és a 3rd party libek) ne támaszkodjanak a zone-ra – ezért ez a modernizálás utolsó lépése.

#### Diagnosztika és AI (v22)

**`provideStabilityDebugging()`** – megmutatja, **miért nem stabilizálódik** az alkalmazás a várt (default 9 másodperces) határidőn belül; tipikus SSR/hydration hibakeresés (végtelen `interval`, be nem fejeződő kérés). Kell hozzá a `zone.js/plugins/task-tracking` import. Fejlesztői módban `provideClientHydration()` mellett automatikusan bekapcsol.

**`provideNgReflectAttributes()`** – v22-től az Angular már **nem** generál `ng-reflect-*` attribútumokat (kisebb DOM, gyorsabb renderelés). Ez a provider visszakapcsolja őket, ha egy régi debug- vagy tesztszkript rájuk épül. Új kódban ne támaszkodjunk rájuk – használjunk `data-testid`-t.

**`provideWebMcpTools([...])`** (v22, experimental) – strukturált, tipizált eszközöket (`name`, `description`, `inputSchema`, `execute`) tesz elérhetővé AI böngésző-ügynökök számára, hogy ne a DOM-ot kelljen találgatniuk. Lásd a Web MCP szekciót.

#### Tesztelésben használt providerek

| Provider | Mit ad |
| --- | --- |
| `provideHttpClient(), provideHttpClientTesting()` | a valódi hálózat helyett `HttpTestingController`: `expectOne()`, `flush()`, `verify()`. **Mindkettőt** meg kell adni, a testing a másodikban írja felül a backendet |
| `provideRouter([])` | működő router üres route-táblával – ennyi kell, ha a komponens csak `routerLink`-et használ; a `RouterTestingModule` modern helyettesítője |
| `provideLocationMocks()` | `SpyLocation` + `MockPlatformLocation`: navigáció szimulálása a böngésző URL-jének módosítása nélkül |
| `provideNoopAnimations()` | az animációk kikapcsolása, hogy a teszt ne várjon átmenetekre |
| `provideZonelessChangeDetection()` | zoneless komponens tesztelése; utána `await fixture.whenStable()` a `detectChanges()` helyett |
| `provideExperimentalCheckNoChangesForDebug()` | „changed after checked” hibák felderítése |

```ts
await TestBed.configureTestingModule({
  imports: [FlightSearch],
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideHttpClientTesting(),
    provideNoopAnimations(),
  ],
}).compileComponents();
```

#### Hol adjuk meg őket
| Hely | Élettartam | Mire |
| --- | --- | --- |
| `bootstrapApplication` / `ApplicationConfig` | alkalmazás | globális infrastruktúra (`provideRouter`, `provideHttpClient`) |
| `Route.providers` (v14+) | a route aktív állapotáig | feature-lokális store, feature-specifikus konfiguráció |
| `@Component({ providers })` | a komponens élete | nézet-lokális store, komponens-lokális szolgáltatás |
| `@Component({ viewProviders })` | a komponens élete, projektált tartalom nélkül | belső implementációs részlet elrejtése |

> Nem létező providerek, amikkel gyakran találkozni régi jegyzetekben: `provideImageKit()`, `provideSignalStore()`, `withStateTransfer()`. Az image loaderek valódi nevei: `provideImgixLoader()`, `provideCloudinaryLoader()`, `provideImageKitLoader()`, `provideCloudflareLoader()`; az SSR transfer cache: `withHttpTransferCacheOptions()`.

### SSR (Server-Side Rendering) – összefoglaló

```bash
ng add @angular/ssr
npm run dev:ssr
npm run build:ssr && npm run serve:ssr
```
Hydration opciók: Basic hydration, Dom hydration options (v17+, `provideClientHydration()`), Optimalizálások: `@defer`, `ngSkipHydration` attribútum, `TransferState` / HTTP transfer cache.
Alternatívák: `@angular/ssr` (a régi Angular Universal utódja), static prerendering, edge rendering.

## 68. SignalStore (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#signalstore-ngrx-signals-17}
A Signal Store az **NgRx** (`@ngrx/signals`) signal-alapú állapotkezelési megoldása – nem az Angular core része.

Alkotóelemei: Store, State, Updaters, Effects, Computed, InjectStore.

A valós API a `@ngrx/signals` csomagból származik: a store-t a `signalStore()` függvény állítja elő, az állapotot pedig a `patchState()` frissíti (nincs `createStore`, nincs `state()` wrapper – a state mezői közvetlenül signalok).

```ts
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';

export interface CounterState { count: number; }

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState<CounterState>({ count: 0 }),
  withComputed(({ count }) => ({ doubled: computed(() => count() * 2) })),
  withMethods((store) => ({
    increment: () => patchState(store, { count: store.count() + 1 }),
    decrement: () => patchState(store, { count: store.count() - 1 }),
    reset: () => patchState(store, { count: 0 }),
  })),
);
```
```ts
@Component({
  selector: 'app-counter',
  template: `
    <h1>Count: {{ store.count() }} (x2: {{ store.doubled() }})</h1>
    <button (click)="store.increment()">+</button>
    <button (click)="store.decrement()">-</button>
    <button (click)="store.reset()">Reset</button>
  `,
})
export class CounterComponent { protected readonly store = inject(CounterStore); }
```
Építőelemek: `withState`, `withComputed`, `withMethods`, `withProps`, `withHooks`, `withEntities`, `withReducer`/`withEventHandlers` (Events API), `withMutations`, `withResource`. Nincs `provideSignalStore()`: a store vagy `{ providedIn: 'root' }`-tal globális, vagy a komponens `providers` tömbjében feature-lokális.

## 69. Angular 20 – New Features (v20) https://angular.dev/reference/releases {#angular-20-uj-funkciok-v20}
1. **A reaktivitás alapjai stabilak** – `effect`, `linkedSignal`, `toSignal` stable.
```ts
private tick$ = timer(0, 1000).pipe(map(v => v + 1));
tick = toSignal(this.tick$, { initialValue: 0 });
doubleTick = computed(() => this.tick() * 2);
```
```ts
title = input.required<string>();
editableTitle = linkedSignal({ source: this.title, computation: (t) => t.trim() });
```

2. **Beépített control flow előtérben** – `*ngIf/*ngFor/*ngSwitch` deprecálva, `@if/@for/@switch` ajánlott.
```html
@if (isLoading()) { Betöltés... } @else if (error()) { Hiba: {{ error() }} } @else { ... }
@for (item of items(); track item.id) { {{ item.name }} }
@switch (role()) { @case ('admin') {...} @default {...} }
```
Migráció: `ng generate @angular/core:control-flow`

3. **Kísérleti async állapotkezelés: resource, httpResource**
```ts
readonly user = httpResource<User>(() => `https://example.com/v1/users/${this.userId()}`);
```

4. **Dinamikus komponens-létrehozás: bindings és directives** (`createComponent` + `inputBinding`, `outputBinding`, `twoWayBinding`)

5. **Incremental hydration stable**
```ts
provideClientHydration(withIncrementalHydration())
```
```html
@defer (hydrate on viewport) { ... }
@defer (hydrate on interaction) { ... }
```

6. **Route-szintű render mód stable**
```ts
export const serverRoutes: ServerRoute[] = [
  { path: 'login', renderMode: RenderMode.Client },
  { path: 'catalog', renderMode: RenderMode.Server },
  { path: 'product/:id', renderMode: RenderMode.Prerender },
];
```

7. **Zoneless Angular stable (v20.2-től)**
```ts
bootstrapApplication(AppComponent, { providers: [provideZonelessChangeDetection()] });
```

8. **animate.enter / animate.leave** (v20.2), `@angular/animations` deprecált

9. **Angular a Chrome DevTools Performance panelben** – `ng.enableProfiling()`

10. **typeCheckHostBindings** tsconfig opció

11. **Vitest experimental támogatás** az Angular CLI-ben

## 70. What to Try First – Practical Order for Teams (v17–v22) https://angular.dev/overview {#mit-erdemes-elsokent-kiprobalni-gyakorlati-sorrend-csapatoknak-v17-v22}
1. Control flow (@if/@for/@switch) és migráció
2. Signals stable primitívek (state signal/computed/effect alapra)
3. Incremental hydration + @defer (SSR/hybrid esetén)
4. Zoneless (különösen új appnál)
5. httpResource/resource (kontrolláltan, experimental)
6. animate.enter/leave (ha van "enter/leave" UI)
7. Vitest experimental (pilotként)

## 71. Angular Upgrade Migrations (v6+ (ng update) · schematics v14+) https://angular.dev/update-guide {#angular-upgrade-migrations-v6-ng-update-schematics-v14}
### Alapelv
Soha ne ugorj át főverziót: v15 → v16 → v17 → v18 → v19 → v20 (helyes), v15 → v19 (helytelen).

### Hivatalos Angular Update Tool
```bash
ng update
ng update --all --force --dry-run
ng update @angular/core@latest @angular/cli@latest
ng update @angular/core
npm install -g @angular/cli@latest
```

### Angular Schematics Migrations
```bash
ng update @angular/core@17
ng generate @angular/core:standalone
```

### Standalone komponens migráció
```bash
ng generate @angular/core:standalone
```
```ts
// Előtte
@NgModule({ declarations: [AppComponent], imports: [BrowserModule], bootstrap: [AppComponent] })
export class AppModule {}
// Utána
bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
```

### Signals migráció
```bash
ng generate @angular/core:signals
```
```ts
// Előtte: @Input() value!: number;
// Utána: value = input<number>();
const total = computed(() => price() * count());
```

### Zone.js eltávolítás migráció
```bash
ng generate @angular/core:zoneless
```
```ts
bootstrapApplication(AppComponent, { providers: [provideZonelessChangeDetection()] });
```

### RxJS migráció
```bash
ng update rxjs
```
```ts
// Előtte: await obs.toPromise();
// Utána: await firstValueFrom(obs);
```

### TypeScript migráció
```bash
npm install typescript@latest --save-dev
```
```json
{ "strict": true, "noImplicitAny": true, "strictNullChecks": true }
```

### Nx migrációs szkriptek
```bash
nx migrate latest
npm install
nx migrate --run-migrations
nx migrate latest --dry-run
nx g @nx/angular:convert-to-standalone
```

### Codemod eszközök
```bash
npm install -g jscodeshift
jscodeshift -t migrate.js src/
```

### ESLint migráció
```bash
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint
```

### Build rendszer migráció (esbuild)
```bash
ng update @angular/cli
```
```json
"builder": "@angular-devkit/build-angular:browser-esbuild"
```

### SSR és Hydration migráció
```bash
ng add @angular/ssr
```
```ts
provideClientHydration()
```

### Deprecated API migrációk
```ts
// Előtte: imports: [HttpClientModule]
// Utána: providers: [provideHttpClient()]
```

### Automatizált CI Pipeline
```bash
npm ci
ng update --dry-run
ng test
ng lint
ng build
```

### Teljes migrációs workflow minta (v16 → v20)
```bash
git checkout -b migrate-v20
ng update @angular/core@17 @angular/cli@17
ng update @angular/core@18 @angular/cli@18
ng update @angular/core@19 @angular/cli@19
ng update @angular/core@20 @angular/cli@20
ng generate @angular/core:standalone
ng generate @angular/core:signals
ng generate @angular/core:zoneless
nx migrate latest
nx migrate --run-migrations
ng test
ng build
```

### Legjobb gyakorlatok
Mindig: Git backup, feature branch, incrementális upgrade, CI futtatás, E2E tesztelés.
Soha: force upgrade productionon, skippelt verzió, teszt nélküli deploy.

## 72. Angular Typed Forms (v14+) https://angular.dev/guide/forms/typed-forms {#angular-typed-forms-v14}
Típusbiztos (generics alapú) Reactive Forms változat. Cél: compile-time ellenőrzés, kevesebb type assertion, jobb autocomplete/refaktorálás.

### NonNullableFormBuilder vs nullable FormControl
```ts
new FormControl<string>('abc') // gyakran string | null
```
`NonNullableFormBuilder` (`fb.nonNullable`) – a kontrollok értéke nem lehet null.

### Form Model típus minta
```ts
type UserDto = {
  id: string; email: string; displayName: string | null; age?: number;
  isActive: boolean; address?: { city: string; zip: string } | null;
};

type AddressFormModel = { city: FormControl<string>; zip: FormControl<string>; };
type UserFormModel = {
  email: FormControl<string>; displayName: FormControl<string>; age: FormControl<number>;
  isActive: FormControl<boolean>; address: FormGroup<AddressFormModel>; tags: FormArray<FormControl<string>>;
};
```

```ts
@Component({ selector: 'app-user-editor', ... })
export class UserEditorComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  readonly form: FormGroup<UserFormModel> = this.fb.group<UserFormModel>({
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
    displayName: this.fb.control('', { validators: [Validators.required] }),
    age: this.fb.control(18, { validators: [Validators.min(0)] }),
    isActive: this.fb.control(true),
    address: this.fb.group<AddressFormModel>({
      city: this.fb.control('', { validators: [Validators.required] }),
      zip: this.fb.control('', { validators: [Validators.required] }),
    }),
    tags: this.fb.array<FormControl<string>>([]),
  });

  get tags(): FormArray<FormControl<string>> { return this.form.controls.tags; }
  addTag(): void { this.tags.push(this.fb.control('')); }
  removeTag(index: number): void { this.tags.removeAt(index); }

  save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    const dto: UserDto = {
      id: 'some-id', email: raw.email,
      displayName: raw.displayName.length ? raw.displayName : null,
      age: raw.age, isActive: raw.isActive,
      address: { city: raw.address.city, zip: raw.address.zip },
    };
  }
}
```

### patchValue vs setValue
`setValue` – minden mezőt meg kell adni. `patchValue` – részleges frissítés.

```ts
function toFormPatch(dto: UserDto) {
  return {
    email: dto.email, displayName: dto.displayName ?? '', age: dto.age ?? 18,
    isActive: dto.isActive,
    address: { city: dto.address?.city ?? '', zip: dto.address?.zip ?? '' },
  };
}
this.form.patchValue(toFormPatch(dtoFromApi));
```

### FormArray minta – kosár tételek
```ts
type CartItemFormModel = { productId: FormControl<string>; quantity: FormControl<number>; };
type CartFormModel = { items: FormArray<FormGroup<CartItemFormModel>>; };
```

### Cross-field validáció
```ts
function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup<{ password: FormControl<string>; confirm: FormControl<string>; }>;
    return group.controls.password.value === group.controls.confirm.value ? null : { passwordsNotMatch: true };
  };
}
```

### getRawValue vs value
`value` – nem tartalmazza a disabled mezőket. `getRawValue()` – tartalmazza őket, mentéshez ajánlott.

### Best practice ajánlások
1. `NonNullableFormBuilder` alapértelmezésként
2. DTO és FormModel elkülönítése
3. Explicit mapping réteg (`toFormPatch`, `toDto`)
4. FormArray helper metódusok
5. `this.form.controls.x` a `form.get('path')` helyett

## 73. Modern Angular – Production Grade Architektúra Best Practices (v19–v22) https://angular.dev/style-guide {#modern-angular-production-grade-architektura-best-practices-v19-v22}
### Célok
Skálázható fejlesztés, tiszta határok, stable teljesítmény, következetes minőség, biztonság, hosszú távú evolúció.

### Domain-alapú Nx monorepo struktúra
```
apps/ (shell, admin, docs)
libs/
  shared/ (ui, util, data-access)
  billing/ (feature, ui, data-access, domain)
  user-profile/ (feature, ui, data-access, domain)
```
Könyvtártípusok: feature (route entry, container), ui (prezentációs), data-access (API/cache/repo), domain (típusok, szabályok, mapping).

### Smart (container) és Dumb (presentational) komponensek
```ts
@Component({
  standalone: true, selector: 'my-user-profile-page',
  imports: [UserProfileCardComponent],
  template: `<my-user-profile-card [vm]="vm()" (refresh)="reload()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePageComponent {
  private readonly store = inject(UserProfileStore);
  readonly vm = computed(() => ({ user: this.store.user(), loading: this.store.loading(), error: this.store.error() }));
  reload(): void { this.store.load(); }
}
```

### Bootstrap 2026: standalone + zoneless + router
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([correlationIdInterceptor, authInterceptor]))
  ]
};
```

### Signal Store + RxJS orchestration
```ts
@Injectable({ providedIn: 'root' })
export class UserProfileStore {
  private readonly http = inject(HttpClient);
  readonly user = signal<UserDto | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly hasUser = computed(() => this.user() !== null);

  load(): void {
    this.loading.set(true);
    this.http.get<UserDto>('/api/me').subscribe({
      next: (u) => { this.user.set(u); this.loading.set(false); },
      error: () => { this.error.set('Betöltési hiba'); this.loading.set(false); }
    });
  }
}
```

RxJS keresés-debounce example (switchMap):
```ts
this.term$.pipe(debounceTime(300), distinctUntilChanged(), switchMap((t) => {
  this.loading.set(true);
  return this.http.get<string[]>(`/api/search?q=${encodeURIComponent(t)}`);
})).subscribe((items) => { this.results.set(items); this.loading.set(false); });
```

### SSR + defer
```html
@defer (on viewport) { <heavy-recommendations /> } @placeholder { <p>Ajánlók betöltése...</p> }
```

### Performance
OnPush/Signal komponensek, lazy loading minden nagy feature-re, `@for` listáknál `track` (legacy `*ngFor`-nál `trackBy`), bundle budget figyelés.

### Biztonság
Auth interceptor, correlation-id interceptor, DomSanitizer.

### Antipatternek
Nested subscribe, `effect()` túlhasználata, domain határok hiánya, lazy loading nélküli óriás feature-ök.

### Döntési térkép
Kicsi projekt: standalone + feature szervezés + egyszerű signal store.
Nagy projekt: domain-driven Nx monorepo, tag-ek, boundary enforcement, signals UI-state-re + RxJS orchestration-re.

## 74. Signal Store – Deeper Introduction (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#signal-store-melyebb-bevezeto-ngrx-signals-17}
### Alapfogalmak
State, Feature State, Updater, Selector, Effect, Entity, Slice, Facade.

### Ajánlott struktúra
```
features/users/store/{users.store.ts, users.state.ts, users.effects.ts}
```

### State és Store alapimplementáció
```ts
export interface UsersState { users: User[]; selectedUserId: string | null; loading: boolean; error: string | null; }
export const initialUsersState: UsersState = { users: [], selectedUserId: null, loading: false, error: null };

export const UsersStore = signalStore(
  withState(initialUsersState),
  withComputed((state) => ({ selectedUser: computed(() => state.users().find(u => u.id === state.selectedUserId())) })),
  withMethods((state) => ({
    loadUsers(users: User[]) { patchState(state, { users, loading: false }); },
    selectUser(id: string) { patchState(state, { selectedUserId: id }); },
  }))
);
```

`withState`, `withMethods`, `withComputed`, `withHooks` – az építőelemek.

### Mutátorok (immutable)
```ts
patchState(state, { users: [...state.users(), user] }); // jó
// state.users().push(user); // rossz
```

### Effektek (aszinkron logika)
```ts
withMethods((state, http = inject(HttpClient)) => ({
  async fetchUsers() {
    patchState(state, { loading: true });
    try {
      const users = await firstValueFrom(http.get<User[]>('/api/users'));
      patchState(state, { users, loading: false });
    } catch (e) { patchState(state, { error: 'Load failed', loading: false }); }
  },
}));
```

### Component integráció
```ts
@Component({ providers: [UsersStore], ... })
export class UsersComponent {
  constructor(public store: UsersStore) { this.store.fetchUsers(); }
}
```

### Entity kezelés
```ts
interface UsersState { entities: Record<string, User>; ids: string[]; }
withComputed((state) => ({ users: computed(() => state.ids().map(id => state.entities()[id])) }));
```

### Store kommunikáció – Facade
```ts
@Injectable()
export class UserFacade {
  constructor(private users: UsersStore, private auth: AuthStore) {}
}
```

### Tesztelés
```ts
it('should load users', () => {
  store.loadUsers([{ id: '1', name: 'Test' }]);
  expect(store.users().length).toBe(1);
});
```

### Tipikus use case-ek
Ajánlott: dashboard state, lista+részletek, szűrés, pagináció, modal állapot, editor workflow, wizard.
Nem ajánlott: cross-app auth, permission rendszer, offline sync engine.

### Anti-patterns
Globális mega-store, direct DOM access, side-effect computed-ben, mutáció patchState nélkül.

### Enterprise ajánlás
Feature Store → Signal Store; Global Store → NgRx Store; Backend Sync → Effects (hibrid architektúra).

## 75. Form → Store → API (v16+) https://ngrx.io/guide/signals/signal-store {#form-store-api-v16}
```ts
@Component(...)
export class EditUserComponent {
  form = this.fb.group({ name: [''], email: [''] });
  save() { this.store.updateUser(this.form.value); }
}
```
Ne tárold a teljes formot a store-ban: Store = domain state, Form = UI state.

## 76. Facade Service (v2+) https://angular.dev/guide/di/creating-injectable-service {#facade-service-v2}
Facade = publikus API a komponenseknek: expone-ol Observable/signal-eket és dispatch-elő metódusokat, elrejti a store belső részleteit. Csökkenti a coupling-ot, konzisztens mintát ad csapatoknak. Bad practice: business logic/subscribe a facade-ban.

## 77. NGRX (NgRx 15+ (createActionGroup, functional effects)) https://ngrx.io/guide/store {#ngrx-ngrx-15-createactiongroup-functional-effects}
### Mikor Store, mikor ComponentStore, mikor semmi
- **Semmi:** helyi, rövid életű állapot.
- **ComponentStore:** feature/route-szintű állapot, RxJS orchestration egy feature-ön belül.
- **Global Store:** több feature megosztja az állapotot, globális cache, time-travel debug.

### Actions
```ts
export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Enter Page': emptyProps(),
    'Load Users': props<{ query: string }>(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),
    'Select User': props<{ userId: string }>(),
  }
});
```

### State + Reducer
```ts
export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, (state, { query }) => ({ ...state, loading: true, lastQuery: query })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users: byId(users) })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
```

### Selectors
```ts
export const selectUsersState = createFeatureSelector<UsersState>('users');
export const selectAllUsers = createSelector(selectUsersMap, selectUserIds, (map, ids) => ids.map(id => map[id]));
```

### Effects
```ts
export const loadUsers$ = createEffect(
  (actions$ = inject(Actions), api = inject(UsersApi)) => actions$.pipe(
    ofType(UsersActions.loadUsers),
    switchMap((action) => api.search(action.query).pipe(
      map(users => UsersActions.loadUsersSuccess({ users })),
      catchError(err => of(UsersActions.loadUsersFailure({ error: String(err) })))
    ))
  ), { functional: true }
);
```
Operátor választás: `switchMap` (cancel), `exhaustMap` (ignore), `concatMap` (queue), `mergeMap` (parallel).

### Entities (NgRx Entity)
```ts
export const usersAdapter = createEntityAdapter<User>({ selectId: (u) => u.id });
export const initialState: UsersState = usersAdapter.getInitialState({ selectedUserId: null, loading: false, error: null });
```

### Router Store
State derived from the URL: `selectRouteParams`, `selectQueryParams`.

### Facade
```ts
@Injectable({ providedIn: 'root' })
export class UsersFacade {
  readonly users$ = this.store.select(selectAllUsers);
  constructor(private readonly store: Store) {}
  search(query: string): void { this.store.dispatch(UsersActions.loadUsers({ query })); }
}
```

### ComponentStore deep dive
```ts
@Injectable()
export class UsersPageStore extends ComponentStore<UsersPageState> {
  constructor(private readonly api: UsersApi) { super(initial); }
  readonly query$ = this.select(s => s.query);
  readonly setQuery = this.updater<string>((state, query) => ({ ...state, query }));
  readonly searchUsers = this.effect<string>((query$) => query$.pipe(
    debounceTime(250), distinctUntilChanged(),
    switchMap((query) => {
      this.patchState({ loading: true });
      return this.api.search(query).pipe(
        tapResponse(
          (users) => this.patchState({ users, loading: false }),
          (err) => this.patchState({ error: String(err), loading: false })
        )
      );
    })
  ));
}
```

### RxJS Playbook
1. Ne nesteld a subscribe-ot.
2. Async pipe preferálása.
3. Hibakezelés a streamben (catchError).
4. Explicit cancellation-modellezés (operátor-választás).

### Anti-patterns (kiemelt)
- Business logika komponensben
- Dispatch `tap`-ben
- Derived data state-ben tárolása
- "God feature" state
- Túl sok mindent csináló effect
- Side-effect selectorban
- Loading/error nem modellezve
- Globális store ephemeral UI state-hez

### ComponentStore code smells (prioritizált)
**P0:** manual subscribe effektben, side effect updaterben, globálisként használt ComponentStore, struktúrálatlan patchState effektben.
**P1:** effekt imperatív triggerelés, derived data state-ben, túlterhelt store felelősség.
**P2:** patchState túlzott szórt használata, drága számítás selectorban, "god vm$".
**P3:** inkonzisztens elnevezés, implementációs részletek szivárgása, teardown hiánya.

### Cheat sheet
Store: cross-feature/globális. Effects: async orchestration. Entity: nagy kollekciók. Router Store: URL-derived state. Facade: egyszerű komponens API. ComponentStore: feature-lokális state.

## 78. Change Detection – What Triggers It? (The 5 Main Causes) (v2+ · zoneless v20+) https://angular.dev/guide/zoneless {#change-detection-mi-valtja-ki-az-5-fo-ok-v2-zoneless-v20}
1. **Böngésző események (DOM events)** – Zone.js patcheli az `addEventListener`-t.
2. **setTimeout / setInterval** – Zone.js patchelt API-k.
3. **XHR / Fetch / HTTP válaszok** – HttpClient kérések is ide tartoznak.
4. **Promise-ok feloldása** (`then/catch/finally`, `async/await`).
5. **Manuális trigger** – `ChangeDetectorRef.detectChanges()`, `markForCheck()`, `ApplicationRef.tick()`, async pipe.

Zoneless módban (`provideZonelessChangeDetection`) az 1–4. pont automatikus triggerei megszűnnek – csak signal-változás és explicit trigger indítja a CD-t.

## 79. OnPush as the Default Change Detection Strategy (v22+) https://angular.dev/api/core/ChangeDetectionStrategy {#onpush-mint-alapertelmezett-change-detection-strategia-v22}
Az OnPush lett az ajánlott/default stratégia. A régi eager mód explicit neve: `ChangeDetectionStrategy.Eager` (korábban "Default").
```ts
@Component({ changeDetection: ChangeDetectionStrategy.Eager }) // régi, mindent-ellenőrző mód
@Component({}) // OnPush a default, megadás nélkül is
```

## 80. afterRender Side Effects – afterRender and afterNextRender (v17+) https://angular.dev/api/core/afterRender {#rendereles-utani-mellekhatasok-afterrender-es-afternextrender-v17}
```ts
constructor() {
  afterNextRender(() => { this.initChartLibrary(); });
  afterRender({
    read: () => { this.measureCanvas(); },
  });
}
```
Fázisok (sorrend): `earlyRead` → `write` → `mixedReadWrite` → `read`. Modern API: fázisonkénti callback objektum; az egyszerű `afterRender(fn)` a `mixedReadWrite` fázisban fut.

## 81. Router View Transition Animations (v17+) https://angular.dev/guide/routing/route-transition-animations {#router-nezetvaltas-animaciok-view-transitions-v17}
```ts
bootstrapApplication(AppComponent, { providers: [provideRouter(routes, withViewTransitions())] });
```
`document.startViewTransition()`-be csomagolja a navigációkat, ha a böngésző támogatja.

## 82. First Signal-Based Router API (v21+) https://angular.dev/guide/routing {#elso-signal-alapu-api-a-routerben-v21}
`getCurrentNavigation()` deprecated → `currentNavigation` signal, `lastSuccessfulNavigation` is signal.
```ts
readonly isNavigating = computed(() => this._router.currentNavigation() !== null);
readonly url = computed(() => this._router.lastSuccessfulNavigation()?.finalUrl);
```

## 83. Signal Forms – Declarative Forms with Signals (v21 experimental · v22 expanded) https://angular.dev/guide/forms/signals/overview {#signal-forms-deklarativ-urlapok-signalokkal-v21-kiserleti-v22-bovitett}
```ts
@Component({ imports: [Field], template: `
  <input placeholder="Email" [field]="loginForm.email" />
  <input type="password" placeholder="Password" [field]="loginForm.password" />
  <button [disabled]="loginForm().invalid()" (click)="login()">Login</button>
` })
export class LoginComponent {
  private readonly _loginModel = signal<LoginFormModel>({ email: '', password: '' });
  readonly loginForm = form(this._loginModel, (login) => {
    required(login.email, { message: 'Email is required' });
    email(login.email, { message: 'Provide valid email address' });
    required(login.password, { message: 'Password is required' });
  });
}
```
Egyedi vezérlőkhöz `FormValueControl` interfész (`ControlValueAccessor` helyett):
```ts
export class RatingControl implements FormValueControl<number> { readonly value = model(0); }
```

## 84. Vitest as the Default Testing Framework (v20 experimental · v21 default) https://angular.dev/guide/testing/migrating-to-vitest {#vitest-mint-alapertelmezett-tesztelesi-keretrendszer-v20-kiserleti-v21-alapertelmezett}
Vitest böngésző módja valódi böngészőben futtatja a teszteket (mint Jasmine/Karma), TypeScript/ESM/Vite integráció. Egyértelmű, hivatalos válasz a Jasmine/Karma vs Jest vs Vitest kérdésre.

## 85. Angular Aria – Headless, Accessible UI Components (v21+) https://angular.dev/guide/aria/overview {#angular-aria-headless-akadalymentes-ui-komponensek-v21}
8 UI minta, 13 komponens (Accordion, Combobox, Grid, Listbox, Menu, Tabs, Toolbar, Tree) automatikus billentyűzet-navigációval, ARIA attribútumokkal, fókuszkezeléssel.
```html
<div ngTabs>
  <div ngTabList selectionMode="follow" selectedTab="movie">
    <div ngTab value="movie">Movie</div>
  </div>
</div>
```
Kiegészíti a CDK-t (viselkedési primitívek) és Material-t (stílusozott komponensek).

## 86. Angular MCP Server (v21+ experimental) https://angular.dev/ai/mcp {#angular-mcp-szerver-v21-kiserleti}
Kísérleti MCP szerver az Angular CLI-ben, AI-asszisztensekhez. Eszközök: `ai_tutor`, `find_examples`, `get_best_practices`, `list_projects`, `onpush_zoneless_migration`, `search_documentation`.

## 87. New Template Expressions – Spread, Arrow Function, instanceof (v21–v22) https://angular.dev/guide/templates/expression-syntax {#uj-template-kifejezesek-spread-arrow-function-instanceof-v21-v22}
```html
@let numbers = [1, 2, 3];
@let moreNumbers = [...numbers, 4, 5, 6];
<button (click)="counter.update((value) => value - 1)">-1</button>
@if (pet instanceof Dog) { <p>This dog name is {{ pet.name }}</p> }
```

## 88. Multiple Switch Case Matching in Templates (v22+) https://angular.dev/guide/templates/control-flow {#tobbszoros-switch-case-illesztes-a-sablonokban-v22}
```html
@switch (status()) {
  @case ('pending')
  @case ('processing') { <loading-widget /> }
  @case ('completed') { <success-widget /> }
}
```

## 89. Standalone isActive Function (v22+) https://angular.dev/api/router/isActive {#standalone-isactive-fuggveny-v22}
```ts
readonly isUsersActive = isActive('/users', this._router);
readonly isBestsellerProductsActive = isActive(
  this._router.createUrlTree(['/products'], { queryParams: { bestseller: true } }),
  this._router, { paths: 'exact', queryParams: 'subset' },
);
```
Reaktív signal-t ad vissza, `Router.isActive()` deprecated helyette.

## 90. Incremental Hydration as Default (v19 experimental · v20 stable · v22 default) https://angular.dev/guide/incremental-hydration {#inkrementalis-hydration-alapertelmezettkent-v19-kiserleti-v20-stable-v22-alapertelmezett}
```ts
provideClientHydration() // alapból bekapcsolva
provideClientHydration(withNoIncrementalHydration()) // kikapcsolás
```

## 91. Route Injector Cleanup (Kísérleti) (v22+ experimental) https://angular.dev/guide/routing {#route-injector-cleanup-kiserleti-v22-kiserleti}
```ts
withExperimentalAutoCleanupInjectors()
```
```ts
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDestroyInjector(route: Route): boolean { return !route.data?.[RETAIN_INJECTOR_DATA_KEY]; }
}
```

## 92. CDK Dialog és Menu (v14+ (CDK)) https://material.angular.dev/cdk/dialog/overview {#cdk-dialog-es-menu-v14-cdk}
```ts
const dialogRef = dialog.open(DialogComponent, { height: '300px', width: '500px' });
```
```html
<button [cdkMenuTriggerFor]="menu">Open menu</button>
<ng-template #menu>
  <div cdkMenu><button cdkMenuItem>Item 1</button></div>
</ng-template>
```

## 93. Setting the Page Title (TitleStrategy) (v14+) https://angular.dev/api/router/TitleStrategy {#az-oldal-cimenek-beallitasa-titlestrategy-v14}
```ts
export const routes: Routes = [
  { path: 'home', title: 'Home Page', loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) },
];
```
Egyedi `TitleStrategy`:
```ts
@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(title !== undefined ? `My App - ${title}` : `My App - Home`);
  }
}
```

## 94. ENVIRONMENT_INITIALIZER Injection Token (v14+ · provideEnvironmentInitializer() v19+) https://angular.dev/api/core/ENVIRONMENT_INITIALIZER {#environment-initializer-injection-token-v14-provideenvironmentinitializer-v19}
```ts
bootstrapApplication(AppComponent, {
  providers: [{ provide: ENVIRONMENT_INITIALIZER, multi: true, useValue: () => inject(ConfigurationService).init() }],
});
```

## 95. Accessing Protected Members from Templates (v14+) https://angular.dev/guide/templates {#protected-tagok-elerese-a-sablonbol-v14}
```ts
@Component({ selector: 'my-component', template: '{{ message }}' })
export class MyComponent { protected message: string = 'Hello world'; }
```

## 96. Angular Extended Diagnostics (v13.2+ · bővítve v14, v19, v20) https://angular.dev/extended-diagnostics {#angular-extended-diagnostics-v13-2-bovitve-v14-v19-v20}
Beépített compiler-szintű "linter" a gyanús sablon-mintákhoz (pl. `([foo])` two-way binding tévesztés `[(foo)]` helyett). `angularCompilerOptions`-ban kapcsolható be.

## 97. Router Data Input Bindings (withComponentInputBinding) (v16+) https://angular.dev/api/router/withComponentInputBinding {#router-data-input-bindings-withcomponentinputbinding-v16}
```ts
provideRouter([...], withComponentInputBinding())
```
```ts
export default class ExampleComponent {
  @Input() id!: string;
  @Input() bar!: boolean;
  @Input() baz!: string;
}
```
Precedencia: Resolved data → Static data → Optional/matrix params → Path params → Query params.

## 98. Introducing Hybrid (Zoneless) Change Detection (v18 experimental · v20 stable) https://angular.dev/guide/zoneless {#hybrid-zoneless-change-detection-bevezetese-v18-kiserleti-v20-stable}
```ts
// v18–v19 (experimental név)
bootstrapApplication(RootCmp, { providers: [provideExperimentalZonelessChangeDetection()] });

// v20-tól stable név – ezt használjuk
bootstrapApplication(RootCmp, { providers: [provideZonelessChangeDetection()] });
```
CD ütemeződik: signal frissült, `markForCheck()`, AsyncPipe új érték, komponens csatolás/leválasztás, input beállítás.

## 99. RedirectCommand (v18+) https://angular.dev/api/router/RedirectCommand {#redirectcommand-v18}
```ts
const route: Route = {
  path: 'page1', component: PageComponent,
  canActivate: [() => {
    const router: Router = inject(Router);
    const urlTree: UrlTree = router.parseUrl('./page2');
    return new RedirectCommand(urlTree, { skipLocationChange: true });
  }],
};
```

## 100. AfterRenderEffect (v19 experimental) https://angular.dev/api/core/afterRenderEffect {#afterrendereffect-v19-kiserleti}
```ts
counter = signal(0);
constructor() {
  afterRenderEffect(() => { console.log('after render effect', this.counter()); }); // csak ha counter változott
  afterRender(() => { console.log('after render', this.counter()); }); // minden render után
}
```

## 101. RouterOutlet Data Input (v19+) https://angular.dev/guide/routing/show-routes-with-outlets {#routeroutlet-data-input-v19}
```html
<router-outlet [routerOutletData]="routerOutletData()" />
```
```ts
export class ChildComponent {
  readonly routerOutletData: Signal<MyType> = inject(ROUTER_OUTLET_DATA);
}
```

## 102. Keepalive Fetch Requests (v20+) https://angular.dev/guide/http/making-requests {#keepalive-fetch-keresek-v20}
```ts
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly _http = inject(HttpClient);
  sendAnalyticsData(data: AnalyticsData): Observable<unknown> {
    return this._http.post('/api/analytics', data, { keepalive: true });
  }
}
```
Fetch API `keepalive` opció támogatása `withFetch()` mellett – kérés túléli az oldal elhagyását.

## 103. Removing ng-reflect Attributes (v20 optional · v22 default) https://angular.dev/reference/releases {#ng-reflect-attributumok-megszuntetese-v20-opcionalis-v22-alapertelmezett}
Alapból nincs `ng-reflect-*` attribútum generálás. Visszakapcsolható: `provideNgReflectAttributes()`.

## 104. Direct ARIA Attribute Binding (v21+) https://angular.dev/guide/templates/attribute-binding {#aria-attributumok-kozvetlen-bindingja-v21}
```html
<!-- régi mód -->
<button [attr.aria-label]="label"></button>
<!-- új mód -->
<button [aria-label]="label"></button>
```
`[aria-label]` és `[ariaLabel]` is érvényes, `attr.` prefix nélkül.

## 105. Server-Side Bootstrap Fix (BootstrapContext) (v21+) https://angular.dev/guide/ssr {#szerveroldali-bootstrap-javitasa-bootstrapcontext-v21}
Minden SSR kérés saját, elkülönített platform-referenciát kap.
```ts
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);
```
`getPlatform()` szerveren mindig `null`; `destroyPlatform()` no-op szerverrenderelés közben.

## 106. Image Loader Enhancements (v22+) https://angular.dev/guide/image-optimization {#image-loader-bovitesek-v22}
Egyedi transzformációk (Cloudflare, Cloudinary, ImageKit, Imgix) a `loaderParams` inputtal.
```ts
readonly loaderParams = computed(() => ({ transform: `w=${this.size()},h=${this.size()},fit=crop,g=face` }));
```

## 107. Resource Snapshot (v21.2+) https://angular.dev/guide/signals/resource {#resource-snapshot-v22}
```ts
function withPreviousValue<T>(input: Resource<T>): Resource<T> {
  const derived = linkedSignal<ResourceSnapshot<T>, ResourceSnapshot<T>>({
    source: input.snapshot,
    computation: (snap, previous) => {
      if (snap.status === 'loading' && previous?.value?.status === 'resolved') {
        return { status: 'loading' as const, value: previous.value.value };
      }
      return snap;
    },
  });
  return resourceFromSnapshots(derived);
}
```
`resourceFromSnapshots()` – snapshot (signal/computation) visszaalakítása resource-á. (v21.2 experimental)

## 108. Resource Cache for SSR (TransferState) (v22+) https://angular.dev/guide/ssr {#resource-cache-ssr-hez-transferstate-v22}
```ts
const productKey = makeStateKey('product');

readonly productResource = rxResource({
  params: () => this.productId(),
  stream: ({ params: productId }) => this._productService.getProduct(productId),
  id: productKey,
});
```
Az `id` opció köti a TransferState-hez a szerver és kliens közötti gyorsítótárazáshoz.

## 109. SignalFormControl – Bridge Between Reactive and Signal Forms (v22+) https://angular.dev/guide/forms/signals/overview {#signalformcontrol-hid-reactive-es-signal-forms-kozott-v22}
```ts
readonly emailControl = new SignalFormControl<string>('', (path) => {
  required(path, { message: 'Email is required' });
  email(path, { message: 'Provide a valid email address' });
});

readonly userForm = this._fb.nonNullable.group({
  firstName: ['', Validators.required],
  email: this.emailControl,
});
```
Fokozatos átállást tesz lehetővé Signal Forms felé, meglévő FormGroup struktúra megtartásával.

## 110. @Service Decorator (v22+) https://angular.dev/api/core/Service {#service-dekorator-v22}
Egyszerűbb alternatíva a `@Injectable({ providedIn: 'root' })`-hoz: alapból root-provided, `inject()`-központú.
```ts
@Service()
export class PostService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _authService = inject(AuthService);
  getUserPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('/api/posts/' + this._authService.userId);
  }
}
```

## 111. Lazy Service Injection (injectAsync) (v22+) https://angular.dev/api/core/injectAsync {#lazy-service-injection-injectasync-v22}
```ts
private readonly _heavyTransformationService = injectAsync(() =>
  import('./heavy-transformation.service').then((m) => m.HeavyTransformationService),
);

async performHeavyTransformation(params: TransformationParams): Promise<void> {
  const transformationService = await this._heavyTransformationService();
  transformationService.transform(params);
}
```
`InjectAsyncOptions` – prefetch opció is elérhető.

## 112. Debouncing Signals (v22+) https://angular.dev/guide/signals/debounced {#signalek-debounce-olasa-v22}
```ts
const query = signal('initial');
const debouncedQuery = debounced(() => query(), 300);
```
A `debounced()` egy **Resource**-ot ad vissza (nem sima signal-t): van settled / loading / error állapota. A template-ben tipikusan `debouncedQuery.value()` és `debouncedQuery.isLoading()` használatos. Signal átadás is lehetséges: `debounced(query, 300)`.

## 113. Web MCP Tools (v22+ experimental) https://angular.dev/ai/webmcp {#web-mcp-eszkozok-v22-kiserleti}
```ts
export const provideProductSearchWebMcp = () =>
  provideWebMcpTools([{
    name: 'search_products',
    description: 'Search for products by a keyword',
    inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
    execute: async ({ query }) => {
      const productsService = inject(ProductService);
      const products = await firstValueFrom(productsService.searchProducts({ term: query as string }));
      return { content: [{ type: 'text', text: `Found ${products.length} products` }] };
    },
  }]);
```
Strukturált eszközöket ad AI böngésző-ügynököknek, DOM-találgatás helyett.

## 114. AI Agent Skills for Angular (v22+) https://angular.dev/ai/agent-skills {#ai-agent-skills-az-angularhoz-v22}
Dedikált AI agent skillek: **angular-developer** (kódírás/architektúra, verzió-tudatos), **Angular New App** (új alkalmazás létrehozása `ng new`-vel).

## 115. Stability Debugging (provideStabilityDebugging) (v22+) https://angular.dev/api/core/provideStabilityDebugging {#stabilitas-debugolasa-providestabilitydebugging-v22}
```ts
import { provideStabilityDebugging } from '@angular/core';
import 'zone.js/plugins/task-tracking';

export const appConfig: ApplicationConfig = { providers: [provideStabilityDebugging()] };
```
Segít megérteni, miért nem stabilizálódik egy alkalmazás a várt (default 9 másodperces) határidőn belül. Fejlesztői módban automatikusan bekapcsol `provideClientHydration()` mellett.

## 116. Preventing Property Drilling – `:host-context()` és CSS Kontextus (v2+ (CSS)) https://angular.dev/guide/components/styling {#property-drilling-megelozese-host-context-es-css-kontextus-v2-css}
A `:host-context()` megoldás elkerüli, hogy egy boolean flaget `@Input()`-ként végig kelljen adogatni komponensről komponensre, mert a **DOM hierarchiában lévő ősre** rakott CSS class-t bármelyik leszármazott komponens érzékelheti anélkül, hogy tudna róla a köztes komponensek lánca.

**1. A "kontextus jelölő" osztály a szülőn(ök)ön** – bárhol az ős DOM-fában elhelyezhető, nem kell megegyeznie az Angular komponens-hierarchiával, csak a renderelt HTML-ben kell ott lennie:

```html
<!-- message-participants-data-table.component.html -->
<div class="messages-text-context">
  <neptun-wrapper>...</neptun-wrapper>
</div>

<!-- user-list.component.html -->
<div class="messages-text-context">
  <div class="selection">...</div>
</div>
```

**2. A leszármazott komponens saját SCSS-ében reagál rá:**

```scss
.texts {
  // alap stílus

  :host-context(.messages-text-context) & {
    // kontextusfüggő módosítás
  }
}

// vagy közvetlenül
:host-context(.messages-text-context) .texts {
  // ez fut le, ha bárhol felette van .messages-text-context
}
```

A komponens **nem tudja**, hogy éppen melyik szülőből van meghívva – csak azt nézi, van-e felette a DOM-ban a marker class. Emiatt mindegy, hány köztes komponensen megy át.

**Miért kerüli el a property drillinget:**
- Nincs szükség `@Input() isMessagesContext: boolean` láncra minden köztes komponensen.
- A köztes komponenseknek nem kell tudniuk erről a flagről, forwardolniuk se kell – teljesen transzparensek maradnak.
- A logika csak CSS szinten (megjelenés) dől el, a komponens TS kódja változatlan marad.

**Korlátai:**
- Csak stílusra jó – ha a viselkedésnek (feltételes renderelés, esemény, API hívás) is kontextusfüggőnek kell lennie, ehhez TS szintű megoldás kell.
- Valódi DOM szülő-gyerek kapcsolat szükséges – ha a komponens `ng-content`-tel vagy portállal (pl. CDK Overlay, modal) van kirenderelve máshova a DOM-ban, a `:host-context` nem látja az ősre rakott classt.
- Emulated encapsulation mellett rendesen működik; Shadow DOM esetén (`ViewEncapsulation.ShadowDom`) böngészőfüggő eltérések lehetnek, érdemes tesztelni.
- Nehezebb debugolni, mint egy explicit `@Input()`-ot – grep-pel nehezebben követhető, honnan jön a stílus.

## 117. Preventing Property Drilling – Hierarchikus DI Token (v2+ · inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#property-drilling-megelozese-hierarchikus-di-token-v2-inject-opciok-v14}
Ha nem csak stílust, hanem tényleges viselkedést/adatot kellene "kontextusból" megkapni több szinten át, az Angular-natív megoldás erre a hierarchikus DI. Ez a `:host-context()` logikai megfelelője: nem kell a köztes komponenseken átadni, csak a DI fába kell "beleinjektálni" felül, és bárhol lejjebb elérhető.

```ts
// token
export const MESSAGES_CONTEXT = new InjectionToken<boolean>('MESSAGES_CONTEXT');

// szülő komponens providerei
providers: [{ provide: MESSAGES_CONTEXT, useValue: true }]

// bármely leszármazott, akárhány szinttel lejjebb
constructor(@Optional() @Inject(MESSAGES_CONTEXT) private isMessagesContext: boolean | null) {}
```

Modern, `inject()`-alapú írásmóddal:

```ts
readonly isMessagesContext = inject(MESSAGES_CONTEXT, { optional: true }) ?? false;
```

**Előnyei a sima `@Input()` lánchoz képest:**
- A köztes komponensek nem is "tudnak" a tokenről, nincs `@Input()` és `[input]="input"` forwardolás minden szinten.
- Típusbiztos, tesztelhető (`TestBed.overrideProvider`), és Angular DevTools-ban is látható, honnan jön az érték.
- `@Optional()` / `{ optional: true }` nélkül a token hiánya hibát dob – ez segít elkapni, ha valaki elfelejti provide-olni a kontextust.

**Korlátai:**
- Ha a komponens `ViewContainerRef`-fel, portállal (pl. `Overlay`, `Dialog`) van kirenderelve, saját injector fát kaphat, amely nem feltétlenül örökli a logikai szülő providereit – explicit injector-átadás szükséges (`createComponent(..., { injector })`).
- Túlzott használata "rejtett globális állapotot" eredményezhet, ami megnehezíti a komponens önálló újrafelhasználhatóságát – érdemes csak valódi kontextusfüggő eseteknél alkalmazni, nem általános adatátadásra.

## 118. CSS Custom Properties as Context Passing (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/--* {#css-custom-properties-css-valtozok-mint-kontextus-atadas-css}
A CSS custom property-k (`--valtozo-nev`) öröklődnek a DOM-fában, ezért hasonlóan használhatók kontextusátadásra, mint a `:host-context()`, de nem csak boolean logikára, hanem konkrét értékek (szín, méret, spacing) átadására is – anélkül, hogy `@Input()`-ként végig kellene vinni őket.

```scss
// szülő komponens
:host {
  --accent-color: #ff6600;
  --item-spacing: 12px;
}
```

```scss
// mélyen beágyazott leszármazott komponens, akár 5 szinttel lejjebb
.item {
  color: var(--accent-color, #333);       // fallback, ha nincs definiálva
  margin-bottom: var(--item-spacing, 8px);
}
```

**Miért kerüli el a property drillinget:**
- A böngésző natívan kezeli az öröklődést, nincs szükség Angular `@Input()` láncra vagy `[style.--x]` bindingra minden köztes komponensen.
- Futásidőben is módosítható (`element.style.setProperty('--accent-color', 'red')`), ami dinamikus témázást (theming) tesz lehetővé JS/TS beavatkozás nélkül is.
- Kombinálható Angular signalokkal: `[style.--accent-color]="accentColor()"` a gyökér komponensen, és onnantól tisztán CSS-ben terjed tovább.

**Korlátai:**
- Csak CSS-ben felhasználható értékekre jó (szín, méret, idő stb.), objektum vagy komplex adat nem adható át.
- `ng-content`/portál esetén ugyanúgy a tényleges DOM-pozíció számít, nem a logikai Angular komponensfa – ha a projektált tartalom DOM-ban kívül esik az öröklődési láncon, nem kapja meg az értéket.
- IE11 nem támogatja (ma már ritkán releváns szempont).

## 119. Preventing Property Drilling – ContentChild / TemplateRef Injection (v2+ · contentChild() signal query v17.2+) https://angular.dev/guide/components/queries {#property-drilling-megelozese-contentchild-templateref-injekcio-v2-contentchild-signal-query-v17-2}
Ha nem statikus kontextusértéket, hanem tényleges tartalmat vagy viselkedést (pl. egyedi renderelést) kell átadni, a szülő komponens `contentChild`/`ContentChild` lekérdezése + `ngTemplateOutlet` elkerülheti, hogy minden köztes gyereken végig kelljen vezetni egy `@Input() customTemplate` mezőt – **feltéve**, hogy a template a lekérdező hostba van projektálva.

```ts
@Component({
  selector: 'app-list',
  template: `
    @for (item of items(); track item.id) {
      <ng-container
        *ngTemplateOutlet="itemTemplate() ?? defaultTemplate; context: { $implicit: item }"
      />
    }
    <ng-template #defaultTemplate let-item>{{ item.label }}</ng-template>
  `,
})
export class ListComponent {
  items = input.required<Item[]>();
  itemTemplate = contentChild<TemplateRef<unknown>>('itemTemplate');
}
```

```html
<app-list [items]="items">
  <ng-template #itemTemplate let-item>
    <strong>{{ item.label }}</strong>
  </ng-template>
</app-list>
```

**Miért kerüli el a property drillinget:**
- A sablont a lista-host kapja projektálva, és ott rendereli – a köztes wrapper komponenseknek nem kell `TemplateRef` inputot továbbadniuk, ha ők maguk nem a query hostjai.
- Tisztán szeparálja a megjelenítési logikát az adatlogikától – hasonló mintázat áll a CDK portalok és sok UI könyvtár `cellTemplate` megoldása mögött.

**Korlátai:**
- A `contentChild` **csak a saját hostba projektált** tartalmat látja. Egy mély gyerek komponens **nem** „lát felfelé” egy ősbe projektált template-et `descendants: true` mellett sem.
- Ha köztes wrappernek kell továbbadnia a sablont, az explicit `input()`/`@Input()`, DI token, vagy portal – nem upward ContentChild.
- Túlzott használata nehezen követhető, „implicit” komponens-API-t eredményezhet – dokumentálni érdemes, mely `#template` neveket várja a komponens.

## 120. Micro-Frontend Architecture – Basics and Decision Criteria (architektúra · v14+) {#micro-frontend-architektura-alapok-es-dontesi-szempontok-architektura-v14}
A micro-frontend architektúra célja, hogy több, egymástól függetlenül fejlesztő és **külön deployolható** csapat dolgozhasson egyetlen felhasználói felületen. A frontendet nem technológiai rétegek, hanem **üzleti területek (domainek)** szerint vágjuk fel.

### Motiváció
- Csapatfüggetlenség: külön repó/pipeline/release ütem, saját tempóban.
- Domain-tulajdonlás: egy csapat végig felel egy üzleti területért (Self-Contained System).
- Fokozatos modernizáció: legacy alkalmazás részenként cserélhető ki.
- Csökkentett koordinációs költség nagy szervezetben (Conway törvénye).

### Kihívások, amiket előre kell látni
- **Bundle-duplikáció**: minden remote saját Angular példányt hozhat, ha nincs shared dependency stratégia.
- **Verziószórás**: különböző Angular verziók egy oldalon (multi-version) csak web component absztrakcióval kezelhető biztonságosan.
- **Konzisztens UX**: közös design system nélkül szétesik a felület.
- **Cross-cutting concernek**: auth, i18n, error handling, telemetria – ezeket a shell-nek kell biztosítania.
- **Integrációs tesztelés**: a hibák a határokon jelennek meg, nem a modulokon belül.

### Mikor NE használjuk
Ha egyetlen csapat dolgozik az alkalmazáson, a micro-frontend csak költség. Ilyenkor **modulith** (lásd a Vertical Slicing szekciót) a helyes válasz: ugyanaz a modularizáció, deploy-komplexitás nélkül.

### Integrációs szintek
| Szint | Eszköz | Mikor |
| --- | --- | --- |
| Build-time | npm package / monorepo lib | szoros verziókötés elfogadható |
| Run-time (script) | Native Federation / Module Federation | egy framework, egy verzió |
| Run-time (elem) | Web Components / Custom Elements | multi-framework, multi-version |
| Route-time | reverse proxy, külön SPA-k | teljes izoláció, teljes reload |

## 121. Native Federation – Shell and Remote Setup (@angular-architects/native-federation · v16+ (esbuild)) https://github.com/angular-architects/module-federation-plugin {#native-federation-shell-es-remote-beallitasa-angular-architects-native-federation-v16-esbuild}
A **Native Federation** (`@angular-architects/native-federation`) a Module Federation ötletét építi újra böngésző-standardokra (Import Maps, ESM), ezért bundler-független és jól működik az Angular esbuild/Vite pipeline-jával.

### Remote (micro-frontend) felállítása
```bash
ng add @angular-architects/native-federation --project miles --port 4201 --type remote
```

A schematic létrehozza a `federation.config.js`-t:
```js
// projects/miles/federation.config.js
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'miles',
  exposes: {
    './Component': './projects/miles/src/app/miles-overview.ts',
    './Routes': './projects/miles/src/app/app.routes.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket'],
  features: { ignoreUnusedDeps: true },
});
```
- `name` – a remote egyedi azonosítója.
- `exposes` – mit publikál a remote (komponens, route config, NgModule, bármilyen TS/ESM konstrukció).
- `shared` + `shareAll` – közösen használt npm csomagok (Angular, RxJS) csak egyszer töltődnek be.
- `skip` – amit nem érdemes megosztani (build- és indulási időt spórol).
- `ignoreUnusedDeps` – a `package.json`-ban lévő, de nem használt libeket kihagyja.

### Shell (host) felállítása
```bash
ng add @angular-architects/native-federation --project flights --port 4200 --type dynamic-host
```

A `dynamic-host` típus azt jelenti, hogy a remote-ok listája futásidőben, manifestből jön:
```json
// public/federation.manifest.json
{ "miles": "http://localhost:4201/remoteEntry.json" }
```
A manifest **asseteként** deployonként cserélhető, így ugyanaz a build több környezetben használható.

```ts
// src/main.ts
import { initFederation } from '@angular-architects/native-federation';

initFederation('federation.manifest.json')
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
```
Az `initFederation` beolvassa a remote-ok metaadatait és felépíti az Import Mapet, majd a `bootstrap.ts` indítja az Angular alkalmazást.

### Remote betöltése route-ként
```ts
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  // egyetlen komponens
  { path: 'miles', loadComponent: () => loadRemoteModule('miles', './Component') },
  // teljes feature route-configgal (ajánlott granularitás)
  { path: 'miles', loadChildren: () => loadRemoteModule('miles', './Routes') },
];
```
A `loadRemoteModule` a teljes ES modult adja vissza, ezért a betöltött érték legyen `default export`, vagy használjunk `then`-klauzulát:
```ts
{ path: 'miles', loadChildren: () => loadRemoteModule('miles', './Routes').then(m => m.routes) }
```

### Granularitás
Egyetlen komponenst exponálni túl finom szemcsés. Éles projektben **feature-szintű route configot** publikálunk, a shell pedig path-prefixszel navigál rá (`miles/home`, `miles/next-level`).

## 122. Communication Between Micro-Frontends (v16+) {#micro-frontendek-kozotti-kommunikacio-v16}
**Alapelv:** a micro-frontendek szétcsatolása a cél, ezért minél kevesebb közvetlen kommunikáció, annál jobb. A gyakorlatban jellemzően csak néhány kontextusadat megosztása indokolt: bejelentkezett felhasználó, aktuális ügyfél/tenant, néhány globális szűrő.

### Megosztott állapot shared library-ben
```ts
// libs/shared/context/src/lib/app-context.ts  (shared, singleton)
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppContext {
  private readonly _userName = signal<string | null>(null);
  readonly userName = this._userName.asReadonly();
  setUserName(name: string): void { this._userName.set(name); }
}
```
A libet a `shared` szekcióban `singleton: true`-val kell megosztani, különben minden remote saját példányt kap.

### Alternatívák
- **Custom event / message bus**: `window.dispatchEvent(new CustomEvent('cart:changed', { detail }))`. Framework-független, de típusbiztonság nélküli – tegyünk rá tipizált wrappert.
- **URL mint állapot**: a legrobusztusabb csatorna. A shell route paraméterekben/query stringben adja át a kontextust, a remote onnan olvassa.
- **Backend mint igazság**: a legkevésbé csatolt megoldás – mindkét frontend a szervertől kéri le az állapotot.

### Antipatternek
- Megosztott, mindenki által írható „global store”: rejtett csatolás, kideríthetetlen hibák.
- Remote-ok közötti direkt import (`loadRemoteModule` remote-ból remote-ba): a függetlenség elvesztése.
- Üzleti logika a shared libben: a shared lib maradjon vékony (típusok, kontextus, design system).

## 123. Web Components as Micro-Frontend Abstraction (v15+ (createApplication/createCustomElement)) https://angular.dev/guide/elements {#web-components-mint-micro-frontend-absztrakcio-v15-createapplication-createcustomelement}
Ha több framework vagy több Angular **verzió** kell egy oldalon (tipikusan legacy migráció közben), a micro-frontendeket web componentként (Custom Element) csomagoljuk be.

```ts
// remote: bootstrap után regisztrálás
import { createCustomElement } from '@angular/elements';

const app = await createApplication({ providers: [/* ... */] });
const element = createCustomElement(MilesOverview, { injector: app.injector });
customElements.define('miles-overview', element);
```

A shellben ez már csak egy HTML elem:
```html
<miles-overview [passenger-id]="passengerId()"></miles-overview>
```

### Amire figyelni kell
- **Zone.js megosztása**: ha az egyik alkalmazás még zone-alapú, a `zone.js` csak egyszer töltődhet be – a shell töltse be, a remote-ok ne.
- **Saját router web componentben**: két Angular router ugyanazon a `location`-on ütközik. Megoldás: a remote `withHashLocation()`-t vagy saját `UrlHandlingStrategy`-t használ, illetve csak a shell routol és a remote „route nélküli” nézeteket ad.
- **Stílusszivárgás**: `ViewEncapsulation.ShadowDom` erős izolációt ad, de a globális design tokeneket CSS custom property-kkel kell átvinni.
- **Bundle méret**: minden verzió saját Angular runtime-ot hoz. Ez a multi-version ár – tudatosan vállalt kompromisszum.

### A micro-frontendek költsége
Több pipeline, több monitoring, több integrációs teszt, nehezebb refaktor a határokon át. Ha nincs meg a **több független csapat**, ez a költség nem térül meg.

## 124. Vertical Slicing and Modulith – Sustainable Architecture (architektúra · v15+ standalone) {#vertical-slicing-es-modulith-fenntarthato-architektura-architektura-v15-standalone}
### Miért vertikális vágás
A klasszikus horizontális rétegezés (`components/`, `services/`, `models/`) mellett minden funkcióváltozás az összes mappát érinti. A **vertikális szelet** (domain/feature) egy üzleti képességet zár egybe, ezért a változás lokális marad.

```
src/app/
  domains/
    booking/
      feature-search/      # route entry, container komponensek
      feature-edit/
      ui/                  # domainhez tartozó prezentációs komponensek
      data/                # HTTP kliens, store, DTO→domain mapping
      util/                # tiszta függvények
    boarding/
    luggage/
    shared/                # design system, kontextus, keretrendszer-wrapper
  shell/                   # layout, routing, cross-cutting providerek
```

### Határok megtalálása
- **Event Storming**: a szakértőkkel felírjuk az üzleti eseményeket időrendben, a csoportosulások mutatják a domain határokat.
- **Different models**: ugyanaz a fogalom több domainben más adat. A „Passenger” a boarding és a billing domainben nem ugyanaz a típus – ne kényszerítsünk közös modellt.
- A frontend vágása nem kell, hogy megegyezzen a backend microservice-vágással: a frontend a **felhasználói munkafolyamatot** követi.

### Architektúra-mátrix
Sorok = domainek, oszlopok = rétegek (`feature` → `ui` → `data` → `util`). A szabály:
1. Modul csak **saját domainjével** és `shared`-del kommunikálhat.
2. Modul csak **alatta lévő réteget** használhat.
3. Modul csak más modul **publikus API-ját** (`index.ts`) érheti el.

### Modulith
A modulith ugyanezt a modularizációt adja, de **egyetlen deployolható alkalmazásban**. Ez a default választás; micro-frontendre csak akkor váltunk, ha a független deploy valódi szervezeti igény.

**Information hiding**: minden modulmappa `index.ts`-t kap (barrel = publikus API), vagy barrel-less módban az `internal/` alkönyvtár tartalma privát.

## 125. Architecture Enforcement: Sheriff, Detective, Nx Boundaries (Sheriff/Nx · version-agnostic) https://nx.dev/features/enforce-module-boundaries {#architektura-kikenyszerites-sheriff-detective-nx-boundaries-sheriff-nx-verziofuggetlen}
A konvenció, amit nem ellenőriz gép, néhány sprint alatt elhal. Ezért a modulhatárokat **lintelni** kell.

### Sheriff
```bash
npm i @softarc/sheriff-core @softarc/eslint-plugin-sheriff -D
```
```js
// eslint.config.js
const sheriff = require('@softarc/eslint-plugin-sheriff');
module.exports = defineConfig([
  { files: ['**/*.ts'], extends: [sheriff.configs.all] },
]);
```
```ts
// sheriff.config.ts
import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  enableBarrelLess: true,
  modules: {
    'src/app/domains/<domain>': {
      'feature-<name>': ['domain:<domain>', 'type:feature'],
      'ui-<name>':      ['domain:<domain>', 'type:ui'],
      'data-<name>':    ['domain:<domain>', 'type:data'],
      'util-<name>':    ['domain:<domain>', 'type:util'],
    },
    'src/app/testing': ['testing'],
  },
  depRules: {
    root: '*',
    'domain:*': [sameTag, 'domain:shared'],
    'type:feature': ['type:ui', 'type:data', 'type:util'],
    'type:ui': ['type:data', 'type:util'],
    'type:data': ['type:util'],
    'type:util': [],
    testing: '*',
    '*': ['testing'],
  },
};
```
A tagek mappanevekre utalnak, a `<domain>`/`<name>` placeholderek. A `depRules` a fenti két szabályt (domain-izoláció + rétegirány) kényszeríti ki. Ellenőrzés: `npx sheriff list src/main.ts`.

### Detective
`npx detective` – interaktív gráfban vizualizálja a modulokat és függőségeiket, megmutatja a szabálysértéseket és a ciklusokat.

### Nx module boundaries
Nx workspace-ben ugyanezt az `@nx/enforce-module-boundaries` ESLint szabály és a projektek `tags` mezője adja:
```json
{
  "@nx/enforce-module-boundaries": ["error", {
    "depConstraints": [
      { "sourceTag": "type:feature", "onlyDependOnLibsWithTags": ["type:ui", "type:data", "type:util"] },
      { "sourceTag": "domain:booking", "onlyDependOnLibsWithTags": ["domain:booking", "domain:shared"] }
    ]
  }]
}
```
Sheriff és Nx egymás mellett is használható: Nx a projektek, Sheriff a projekten belüli mappák szintjén.

## 126. Nx Monorepo and Reusable Libraries (Nx 19+ · Angular CLI v14+) https://nx.dev/getting-started/intro {#nx-monorepo-es-ujrafelhasznalhato-konyvtarak-nx-19-angular-cli-v14}
### Angular CLI-alapú monorepó
```bash
ng new my-workspace --no-create-application
ng generate application shell
ng generate library ui-controls
ng build ui-controls && cd dist/ui-controls && npm publish
```
A library `ng-packagr`-rel épül, a `public-api.ts` a publikus felület. A `peerDependencies`-ben adjuk meg az Angular verziótartományt.

### Nx workspace
```bash
npx create-nx-workspace@latest my-workspace --preset=angular-monorepo
nx g @nx/angular:library booking-data --directory=libs/booking/data --tags=domain:booking,type:data
```

### Amit az Nx hoz
- **Affected**: `nx affected -t build test lint` – csak a változás által érintett projekteket futtatja.
- **Inkrementális build + local/remote cache**: azonos input → nincs újrafuttatás.
- **Nx Cloud**: megosztott (distributed) cache és a taskok elosztott párhuzamosítása CI-ben.
- **Generátorok és migrációk**: `nx migrate latest` → `nx migrate --run-migrations`.
- **Graph**: `nx graph` – függőségi gráf, ciklusok felderítése.

### Könyvtár-típusok (tag konvenció)
`type:feature` (route entry, container), `type:ui` (prezentációs, dumb), `type:data` (API, store), `type:util` (tiszta függvények), `type:testing`. Ehhez jön a `domain:*` tag. A tagek nélkül a boundary-lintelés nem működik.

## 127. Architecture Analysis with Forensic Techniques (version-agnostic) {#architektura-elemzese-forenzikus-technikakkal-verziofuggetlen}
A kód nem csak a jelenlegi állapotát mutatja meg, hanem a **változástörténetét** is. A git történet elemzése objektív jelzéseket ad az architektúra valós állapotáról.

### Change coupling (együtt-változás)
Ha két modul a commitok nagy részében **együtt** módosul, akkor logikailag csatoltak – függetlenül attól, hogy van-e köztük import. Ez a rejtett csatolás a legdrágább fajta: a lintelés nem fogja meg.

### Hotspotok
Hotspot = magas változási gyakoriság + magas komplexitás. Ezek a fájlok adják a hibák és a lassulás nagy részét, és itt térül meg legjobban a refaktor. A csak-komplex, de sosem változó kód ellenben hagyható békén.

### Team alignment és Conway törvénye
Ha egy modult sok különböző csapat módosít, a modulhatár nem esik egybe a szervezeti határral. Vagy a határt kell áthelyezni, vagy a tulajdonlást tisztázni.

### Eszközök
- **Detective** (`npx detective`) – függőségi gráf, layering ellenőrzés, change coupling.
- **CodeScene** – érettebb forenzikus elemzés: hotspot térkép, knowledge loss, temporal coupling.
- `git log --format=%H --name-only` alapján saját elemzés is írható.

### Kritikus szemlélet
A metrikák jelzések, nem verdiktek. Egy hotspot lehet szándékosan sűrű üzleti mag is. Az adat indítson beszélgetést, ne helyettesítse.

## 128. NgRx Signal Store – Mutations, rxMethod, signalMethod (@ngrx/signals 18+ · ngrx-toolkit) https://ngrx.io/guide/signals/signal-store {#ngrx-signal-store-mutations-rxmethod-signalmethod-ngrx-signals-18-ngrx-toolkit}
### withMutations – írási műveletek boilerplate nélkül
```ts
import { httpMutation, concatOp } from '@angular-architects/ngrx-toolkit';

export const FlightDetailStore = signalStore(
  withState({ /* ... */ }),
  withProps(() => ({ _snackBar: inject(MatSnackBar) })),
  withMutations((store) => ({
    saveFlight: httpMutation<Flight, Flight>({
      request: (flight) => ({ url: `/api/flight/${flight.id}`, method: 'PUT', body: flight }),
      operator: concatOp,
      onSuccess: (result, param) => store._snackBar.open('Mentés sikeres', 'OK', { duration: 3000 }),
      onError: (error, param) => store._snackBar.open('Mentés sikertelen', 'OK', { duration: 5000 }),
    }),
  })),
);
```
A store automatikusan megkapja a `saveFlight(flight)` metódust **és** a `saveFlightIsPending`, `saveFlightError` státusz signalokat.

**Operátor-szemantika átfedő hívásokra** (az RxJS flattening operátorok mintájára):
| Operátor | Viselkedés | Tipikus use case |
| --- | --- | --- |
| `switchOp` | előzőt megszakítja | csak a legfrissebb kérés érdekes (keresés) |
| `mergeOp` | párhuzamosan fut mind | minden kérést fel kell dolgozni |
| `concatOp` | sorba állítja (**default**) | sorrend-őrzés, race condition elkerülése |
| `exhaustOp` | futás közben újat elnyom | dupla submit megelőzése |

Fogyasztás komponensben:
```ts
protected readonly isPending = this.store.saveFlightIsPending;
protected readonly error = this.store.saveFlightError;

protected async save(): Promise<void> {
  const result = await this.store.saveFlight(this.flight());
  if (result.status === 'success') { /* ... */ }
  else if (result.status === 'error') { /* ... */ }
  else { /* cancelled */ }
}
```
A HTTP részletek ne a store-ban éljenek: érdemes a `data` réteg kliensébe kiszervezni egy `createSaveMutation(options)` factory-t, és a store csak az `onSuccess`/`onError` callbackeket adja meg.

### rxMethod – RxJS pipeline signal-világban
```ts
import { rxMethod } from '@ngrx/signals/rxjs-interop';

updateFilter: rxMethod<PassengerFilter>(
  pipe(
    tap((filter) => patchState(store, { ...filter, isLoading: true })),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((filter) => store._passengerClient.find(filter)),
    tap((passengers) => patchState(store, { passengers, isLoading: false })),
  ),
);
```
- A hívó átadhat **plain értéket, `Signal`-t vagy `Observable`-t**; signal/observable esetén minden új érték átfolyik a pipe-on.
- Belül `effect`-et használ, ezért csak **injection contextben** hívható.
- A glitch-free tulajdonság miatt a signal kezdőértéke nem fut át a pipe-on.

### signalMethod
Ha nincs szükség RxJS operátorokra, csak signal-változásra akarunk reagálni, a `signalMethod` könnyebb: nincs Observable, nincs subscription, csak egy tipizált visszahívás.

**Mikor melyik:** debounce, cancellation, retry, konkurencia-kezelés → `rxMethod`. Egyszerű „ha ez a signal változik, tedd meg ezt” → `signalMethod`. Egyszeri, imperatív művelet → sima `withMethods`.

## 129. NgRx Signal Store – Entity Management and Normalization (@ngrx/signals 18+) https://ngrx.io/guide/signals/entities {#ngrx-signal-store-entity-management-es-normalizalas-ngrx-signals-18}
### withEntities
```ts
import { withEntities, setEntities, type } from '@ngrx/signals/entities';

export const TicketingStore = signalStore(
  { providedIn: 'root' },
  withEntities({ entity: type<Flight>(), collection: 'flight' }),
  withEntities({ entity: type<Passenger>(), collection: 'passenger' }),
  withHooks({
    onInit(store) {
      patchState(store,
        setEntities(flights, { collection: 'flight' }),
        setEntities(passengers, { collection: 'passenger' }),
      );
    },
  }),
);
```
A `collection` opcióval **több entitástípus** kezelhető egy store-ban. A feature `flightEntities()` (tömb), `flightEntityMap()` (id → entity) és `flightIds()` signalokat ad.

### Normalizálás
Ne tároljunk mélyen egymásba ágyazott adatot, ha frissítünk is benne – a duplikátumok inkonzisztenciához vezetnek. Tároljuk laposan, id-referenciákkal, és a nézeteket `computed`-tel állítsuk elő:

```ts
export type FlightWithPassengers = Flight & { passengers: Passenger[] };

withComputed((store) => ({
  flightsWithPassengers: computed<FlightWithPassengers[]>(() =>
    store.flightEntities().map((f) => ({
      ...f,
      passengers: f.passengerIds.map((id) => store.passengerEntityMap()[id]),
    })),
  ),
}));
```

**Honnan jön a normalizált adat?** Ideális esetben a backend (vagy egy BFF) már így adja. Ha nem, a betöltés után, tárolás előtt normalizálunk kliensen (`map`/`reduce`). Ha az adatot csak olvassuk, vagy mindig egészben cseréljük, a normalizálás kihagyható.

## 130. NgRx Signal Store – Events API (Flux/Redux Pattern) (@ngrx/signals 19+) https://ngrx.io/guide/signals/events {#ngrx-signal-store-events-api-flux-redux-minta-ngrx-signals-19}
Ha egy feature több store-ral dolgozik, vagy egy store-t több feature használ, a direkt metódushívások csatolást és inkonzisztencia-veszélyt szülnek. Az **Events API** ezt eventinggel oldja fel: a komponens **eventet dispatchel**, a store-ok pedig eldöntik, reagálnak-e rá.

### Event group
```ts
import { eventGroup } from '@ngrx/signals/events';
import { type } from '@ngrx/signals';

export const luggageEvents = eventGroup({
  source: 'Luggage Store',
  events: {
    loadLuggageTriggered: type<{ passengerId: number }>(),
    loadLuggageSucceeded: type<{ luggage: Luggage[] }>(),
    loadLuggageFailed: type<{ error: string }>(),
  },
});
```
Aszinkron műveletre a bevált minta a **három event**: trigger / success / failure. A `source` a debugolást segíti – az NgRx team finomabb szemcsézést javasol (a fogyasztó komponens vagy service nevét), pl. `luggageOverviewEvents` és `luggageApiEvents` szétválasztva.

### Reducer – szinkron állapotfrissítés
```ts
import { withReducer, on } from '@ngrx/signals/events';

export const LuggageStore = signalStore(
  { providedIn: 'root' },
  withState({ luggage: [] as Luggage[], isLoading: false, error: null as string | null }),
  withReducer(
    on(luggageEvents.loadLuggageTriggered, () => ({ isLoading: true, error: null })),
    on(luggageEvents.loadLuggageSucceeded, ({ payload }) => ({ luggage: payload.luggage, isLoading: false })),
    on(luggageEvents.loadLuggageFailed, ({ payload }) => ({ error: payload.error, isLoading: false })),
  ),
);
```
A reducer **mindig szinkron**, és részleges state-et ad vissza, amit a store patchel.

### Event handler – mellékhatás és aszinkronitás
```ts
import { Events, withEventHandlers } from '@ngrx/signals/events';
import { mapResponse } from '@ngrx/operators';

withProps(() => ({ _client: inject(LuggageClient), _events: inject(Events) })),
withEventHandlers((store) => ({
  loadLuggage$: store._events.on(luggageEvents.loadLuggageTriggered).pipe(
    switchMap(({ payload }) => store._client.find(payload.passengerId).pipe(
      mapResponse({
        next: (luggage) => luggageEvents.loadLuggageSucceeded({ luggage }),
        error: (error) => luggageEvents.loadLuggageFailed({ error: String(error) }),
      }),
    )),
  ),
})),
```
Az event handler a klasszikus NgRx **effect** megfelelője – az elnevezés azért változott, hogy ne keveredjen az Angular `effect()` primitívjével. A `mapResponse` a `map` + `catchError` rövidítése.

### Dispatch
```ts
export class LuggageOverview {
  private readonly store = inject(LuggageStore);
  private readonly dispatcher = inject(Dispatcher);
  protected readonly luggage = this.store.luggage;

  constructor() {
    this.dispatcher.dispatch(luggageEvents.loadLuggageTriggered({ passengerId: 4711 }));
  }
}
```
Az **olvasás** továbbra is közvetlenül a store signaljain történik – csak az írás megy eventen keresztül (unidirekcionális adatfolyam).

**Mikor érdemes:** több store érintett, cross-feature koordináció, auditálható állapotváltozások, Redux DevTools időutazás. **Mikor nem:** egyetlen store, egyetlen komponens – ott a `withMethods` egyszerűbb és olvashatóbb.

## 131. NgRx Signal Store – Custom Features and Redux DevTools (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#ngrx-signal-store-custom-features-es-redux-devtools-ngrx-signals-17}
### Custom feature
Az ismétlődő store-részleteket (loading/error státusz, „selected” kezelés, undo) újrahasznosítható feature-be emeljük:
```ts
import { signalStoreFeature, withState, withMethods, patchState, type } from '@ngrx/signals';

export function withCallState() {
  return signalStoreFeature(
    withState({ isLoading: false, error: null as string | null }),
    withMethods((store) => ({
      setLoading: () => patchState(store, { isLoading: true, error: null }),
      setLoaded: () => patchState(store, { isLoading: false }),
      setError: (error: string) => patchState(store, { isLoading: false, error }),
    })),
  );
}

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withState({ flights: [] as Flight[] }),
  withCallState(),
);
```
Ha a feature a meglévő state-re épül, `signalStoreFeature({ state: type<{ ... }>() }, ...)` formával deklaráljuk az elvárt bemenetet.

### Redux DevTools
```ts
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('flights'),
);
```
Az állapotváltozások megjelennek a Redux DevTools kiterjesztésben (time-travel, state diff). **Produkcióban kapcsoljuk ki** – környezetfüggő providerrel vagy a feature feltételes hozzáadásával, hogy ne szivárogjon ki belső állapot és ne legyen felesleges overhead.

## 132. Resource API in Depth – resource, rxResource, httpResource (resource v19 experimental · httpResource v20+) https://angular.dev/guide/signals/resource {#resource-api-melyebben-resource-rxresource-httpresource-resource-v19-kiserleti-httpresource-v20}
A `resource` az aszinkron adatbetöltés signal-alapú primitívje: paramétert figyel, betölt, és státuszt is ad – így kiváltja a kézzel írt `loading`/`error`/`data` hármast.

### httpResource – deklaratív HTTP GET
```ts
readonly flightId = signal(1);
readonly flight = httpResource<Flight>(() => `/api/flight/${this.flightId()}`, {
  defaultValue: undefined,
  parse: (raw) => FlightZodSchema.parse(raw),
});
```
A `flightId()` változásakor automatikusan újratölt. Elérhető: `flight.value()`, `flight.status()`, `flight.error()`, `flight.isLoading()`, `flight.reload()`.

### rxResource – Observable alapú (interceptorok, operátorok megtartásával)
```ts
readonly flight = rxResource({
  params: () => this.flightId(),
  stream: ({ params: id }) => this._flightService.getFlight(id),
  defaultValue: undefined,
});
```

### resource – Promise alapú, abort signallal
```ts
readonly flight = resource({
  params: () => this.flightId(),
  loader: async ({ params: id, abortSignal }) => {
    const res = await fetch(`/api/flight/${id}`, { signal: abortSignal });
    if (!res.ok) throw new Error(res.statusText);
    return (await res.json()) as Flight;
  },
});
```
Az `abortSignal` miatt a paraméterváltozáskor a korábbi kérés megszakad – ez a `switchMap` szemantikája.

### Státuszok
`idle` → `loading` → `resolved` | `error`, illetve `reloading` és `local` (helyi felülírás `set()`-tel). Sablonban:
```html
@if (flight.isLoading()) { <app-spinner /> }
@else if (flight.error()) { <app-error [error]="flight.error()" /> }
@else { <app-flight-card [flight]="flight.value()!" /> }
```

### Gyakorlati megjegyzések
- A `defaultValue` nélkül a `value()` típusa `T | undefined`.
- A resource **olvasásra** való. Íráshoz mutation kell (`httpMutation`/`rxMutation`) – ne próbáljunk POST-ot resource-szal modellezni.
- `equal` opcióval megadható, mikor számít változásnak a paraméter.
- SSR-hez az `id` opció + `TransferState` köti össze a szerveren betöltött adatot a klienssel (lásd a Resource Cache szekciót).

## 133. Signal Forms in Depth – Schemas, Zod, Submit, Validators (v21 experimental · v22 expanded) https://angular.dev/guide/forms/signals/schemas {#signal-forms-melyebben-semak-zod-submit-validatorok-v21-kiserleti-v22-bovitett}
### Séma külön fájlban
A validációs szabályokat érdemes a `data` rétegbe emelni, hogy több űrlap és a szerveroldal is használhassa:
```ts
// data/flight-schema.ts
import { schema, required, minLength } from '@angular/forms/signals';

export const flightSchema = schema<Flight>((path) => {
  required(path.from, { message: 'Indulási hely kötelező' });
  minLength(path.from, 3);
  required(path.to, { message: 'Cél kötelező' });
});
```
```ts
protected readonly flightForm = form(this.flight, flightSchema);
```

### Validálás Zod / Standard Schema ellen
```ts
// data/flight-zod-schema.ts
export const FlightZodSchema = z.object({
  id: z.number().int(),
  from: z.string().min(3).max(20),
  to: z.string().min(3).max(20),
  date: z.string(),
  delayed: z.boolean(),
});
```
```ts
import { validateStandardSchema, schema } from '@angular/forms/signals';

export const flightSchema = schema<Flight>((path) => {
  validateStandardSchema(path, FlightZodSchema);
  // további, csak UI-szintű szabályok
});
```
Bármely **Standard Schema**-kompatibilis könyvtár működik (Zod, Valibot, ArkType). Ha a séma OpenAPI-ból/JSON Schemából generált, a kliens és a szerver validációja egy forrásból származik.

### Submit logika az űrlap definíciójában
```ts
protected readonly flightForm = form(this.flight, flightSchema, {
  submission: {
    action: async (form) => this.save(form),
    ignoreValidators: 'none',
    onInvalid: (form) => this.reportValidationError(form),
  },
});
```
```html
<form [formRoot]="flightForm">
  <input [field]="flightForm.from" />
  <button type="submit" [disabled]="flightForm().submitting()">Mentés</button>
</form>
```
A submit állapota (`submitting`, `submitted`) az űrlapon él, nem kell külön `isSaving` signal.

### Saját validátorok
```ts
export function validateAirport(path: FieldPath<string>) {
  validate(path, ({ value }) =>
    KNOWN_AIRPORTS.includes(value()) ? null : { kind: 'unknownAirport', message: 'Ismeretlen repülőtér' },
  );
}
```
- **Feltételes validáció**: `validate(path, ...)` belsejében olvassunk más signalokat – a szabály automatikusan reaktív lesz.
- **Multi-field / tree validátor**: a szülő `path`-ra tesszük, így több mezőt látunk egyszerre (pl. jelszó-egyezés, dátumintervallum).
- **Sibling mezők elérése**: a validátor kontextusából a testvérmezők értékei olvashatók.
- **Aszinkron és HTTP validátor**: `validateAsync` / `validateHttp` – a pending állapot automatikusan megjelenik a mező metaadataiban.

### Hibák megjelenítése
```html
@for (err of flightForm.from().errors(); track err.kind) {
  <span class="error">{{ err.message }}</span>
}
```

## 134. Signal Forms – Groups, Arrays, Subforms, Metadata, Custom Fields (v21 experimental · v22 expanded) https://angular.dev/guide/forms/signals/custom-controls {#signal-forms-groups-arrays-subforms-metadata-custom-fields-v21-kiserleti-v22-bovitett}
### Form group és array
A `form()` a modell **alakját** követi, nem kell külön `FormGroup`/`FormArray` konstrukció:
```ts
interface BookingModel {
  contact: { email: string; phone: string };
  passengers: { firstName: string; lastName: string }[];
}
readonly model = signal<BookingModel>({ contact: { email: '', phone: '' }, passengers: [] });
readonly bookingForm = form(this.model, bookingSchema);
```
```html
<input [field]="bookingForm.contact.email" />

@for (p of bookingForm.passengers; track $index) {
  <input [field]="p.firstName" />
  <input [field]="p.lastName" />
}
<button (click)="addPassenger()">Utas hozzáadása</button>
```
```ts
addPassenger(): void {
  this.model.update((m) => ({ ...m, passengers: [...m.passengers, { firstName: '', lastName: '' }] }));
}
```
Az array elemeire a séma is alkalmazható (`applyEach`), így minden elem ugyanazokat a szabályokat kapja.

### Subformok
Egy összetett űrlap részét saját komponens kezelheti: a `FieldTree` részfáját inputként adjuk át. A gyerekkomponens nem tud a teljes űrlapról, mégis részt vesz a validációban és a submitban – ez váltja ki a `ControlValueAccessor` boilerplate nagy részét összetett szekcióknál.

### Metaadatok
```html
<input [field]="flightForm.from" [class.touched]="flightForm.from().touched()" />
@if (flightForm.from().pending()) { <span>Ellenőrzés…</span> }
```
Beépített metaadatok: `touched`, `dirty`, `valid`, `invalid`, `disabled`, `readonly`, `pending`, `errors`. Saját metaadat is definiálható (`defineMetadata` / séma-szintű annotáció) – pl. „ez a mező csak adminnak szerkeszthető”, és a template ezt olvassa, nem talál ki új inputot.

### Null és undefined
A modell típusa dönt: ha `string | null` a mező, a form is azt kezeli. Érdemes a **DTO → form modell** irányban explicit mappinget írni (`?? ''`), és mentéskor visszafelé is (`length ? value : null`) – ugyanaz az elv, mint a Typed Forms-nál.

### Custom field (saját vezérlő)
```ts
@Component({ selector: 'app-rating', /* ... */ })
export class RatingControl implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
}
```
```html
<app-rating [field]="flightForm.rating" />
```
A `FormValueControl` (illetve `FormCheckboxControl`) a `ControlValueAccessor` modern megfelelője: egy `model()` signal, semmi `registerOnChange` boilerplate.

### Migrációs stratégia
Nem kell mindent egyszerre átírni: a `SignalFormControl` (lásd a megfelelő szekciót) beépíthető meglévő `FormGroup`-ba, így mező szinten lehet átállni Reactive Formsról Signal Formsra.

## 135. Modern Testing with Vitest – TestBed, Locators, Mocking (v20 experimental · v21 default · TestBed bindings v21+) https://angular.dev/guide/testing/migrating-to-vitest {#modern-teszteles-vitesttel-testbed-locators-mockolas-v20-kiserleti-v21-alapertelmezett-testbed-bindings-v21}
### Vitest alapok
```ts
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('flight-search', () => {
  it.skip('later', () => {});
  it('works', () => expect(1 + 1).toBe(2));
});
```
Böngésző mód (`browser: { enabled: true }` a Vite configban) valódi böngészőben futtat – ez váltja ki a Karmát, miközben megmarad a Vite/ESM/TypeScript integráció és a gyors watch mód.

### TestBed
```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('flight-search', () => {
  let fixture: ComponentFixture<FlightSearch>;
  let component: FlightSearch;
  let ctrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearch],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearch);
    component = fixture.componentInstance;
    ctrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => ctrl.verify());
});
```
A `ComponentFixture` fő tagjai: `componentInstance`, `nativeElement`, `debugElement` (injector és DOM lekérdezés), `detectChanges()`, `whenStable()`.

### Input binding TestBedből (v21+)
```ts
const fixture = TestBed.createComponent(FlightCard, {
  bindings: [inputBinding('flight', () => flight), outputBinding('selected', (f) => selected.push(f))],
});
```
Signal inputokat és outputokat így közvetlenül kötünk – nincs szükség host komponensre.

### Locators és DOM-lekérdezés
```ts
// Vitest browser mode locator API
await page.getByRole('button', { name: 'Keresés' }).click();
await expect.element(page.getByText('3 találat')).toBeVisible();

// vagy DebugElement
const button = fixture.debugElement.query(By.css('[data-testid="search"]'));
button.triggerEventHandler('click');
fixture.detectChanges();
```
Használjunk `data-testid`-t vagy szemantikus role-t – a CSS class szerinti lekérdezés minden restyle-nál eltörik.

### Mockolás
```ts
// service mock providerrel
providers: [{ provide: FlightService, useValue: { find: vi.fn().mockReturnValue(of([mockFlight])) } }]

// HTTP mock
component.search();
const req = ctrl.expectOne('/api/flight?from=London');
expect(req.request.method).toBe('GET');
req.flush([mockFlight]);

// spy meglévő objektumon (gray-box)
const spy = vi.spyOn(store, 'load');
```
**Shallow testing**: a gyerekkomponenseket üres stub komponensre cseréljük (`TestBed.overrideComponent` vagy stub import), így a teszt nem borul el a gyerek hibáin.

## 136. Fake Timers, Debounce Testing and Coverage (Vitest · v20+) https://angular.dev/guide/testing/utility-apis {#fake-timers-debounce-teszteles-es-coverage-vitest-v20}
### Fake timers
```ts
beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it('debounces the search', async () => {
  component.term.set('Lon');
  vi.advanceTimersByTime(300);
  await fixture.whenStable();
  expect(service.find).toHaveBeenCalledTimes(1);
});
```
A `vi.advanceTimersByTime()` a `tick()` megfelelője. Signal-alapú kódnál `fakeAsync`/`tick` helyett a Vitest fake timer + `await fixture.whenStable()` páros a modern út.

### Késleltetés mockolása
```ts
vi.spyOn(service, 'find').mockReturnValue(of([mockFlight]).pipe(delay(1000)));
```

### Default timeout
```ts
it('slow test', async () => { /* ... */ }, 10_000);
```

### Service tesztelése
```ts
const service = TestBed.inject(FlightService);   // DI-n keresztül, ne `new`-vel
```
Signal store tesztelése: hozzuk létre `TestBed.inject(FlightStore)`-ral, hívjuk a metódusait, és a `store.x()` signalokra assertáljunk.

### Coverage
```bash
ng test --coverage
```
A `vitest.config.ts`-ben állítható a provider (`v8` vagy `istanbul`), a riportformátum és a küszöbök:
```ts
coverage: { thresholds: { lines: 80, functions: 80, branches: 70 } }
```
A coverage szám nem cél, hanem jelzés: a 0%-os data réteg vagy a lefedetlen guard/interceptor a valódi kockázat.

## 137. E2E Testing with Playwright (version-agnostic) https://playwright.dev/docs/intro {#e2e-teszteles-playwrighttal-verziofuggetlen}
```bash
npm init playwright@latest
```
```ts
import { test, expect } from '@playwright/test';

test('user can search flights', async ({ page }) => {
  await page.goto('/flight-search');
  await page.getByLabel('Honnan').fill('London');
  await page.getByRole('button', { name: 'Keresés' }).click();
  await expect(page.getByTestId('flight-card')).toHaveCount(3);
});
```

### Gyakorlati elvek
- **Teszt-piramis**: sok unit (Vitest), kevés integrációs komponensteszt, **kevés** E2E. Az E2E a kritikus üzleti útvonalakat fedje (login, checkout), ne a validációs részleteket.
- **Hálózat mockolása**: `page.route('**/api/flight*', route => route.fulfill({ json: flights }))` – deterministé teszi a tesztet.
- **Auth gyorsítás**: `storageState` mentése egy setup projektben, hogy ne minden teszt lépjen be újra.
- **Kerüljük a `waitForTimeout`-ot**: a Playwright locator-ok auto-waitolnak.
- **CI**: `--shard`-dal párhuzamosítható, trace/videó artefaktumként mentendő a hibakereséshez.
- **Vizuális regresszió**: `expect(page).toHaveScreenshot()` – design system komponenseknél hasznos, alkalmazásszinten könnyen zajos.

## 138. HttpClient in Depth – Functional Interceptors, Retry, Cache (provideHttpClient v15+ · withFetch v16+ · keepalive v20+) https://angular.dev/guide/http {#httpclient-melyebben-functional-interceptorok-retry-cache-providehttpclient-v15-withfetch-v16-keepalive-v20}
### Setup és functional interceptorok
```ts
provideHttpClient(
  withFetch(),
  withInterceptors([correlationIdInterceptor, authInterceptor, retryInterceptor, errorInterceptor]),
);
```
```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthStore).token();
  if (!token) return next(req);
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
```
A funkcionális interceptor `inject()`-et használhat, tree-shakeable, és a sorrend a tömbben deklarált sorrend.

### Retry exponenciális backoffal
```ts
export const retryInterceptor: HttpInterceptorFn = (req, next) =>
  req.method === 'GET'
    ? next(req).pipe(retry({ count: 3, delay: (err, n) => timer(Math.pow(2, n) * 300) }))
    : next(req);
```
Csak **idempotens** kérést ismételjünk automatikusan.

### HttpContext – kérésenkénti metaadat
```ts
export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);

this.http.get('/api/public', { context: new HttpContext().set(SKIP_AUTH, true) });

// interceptorban
if (req.context.get(SKIP_AUTH)) return next(req);
```
Ez a tiszta megoldás a „minden kérésre, kivéve ezt” problémára – URL-string-egyeztetés helyett.

### Cache interceptor
```ts
export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(HttpCache);
  if (req.method !== 'GET') return next(req);
  const hit = cache.get(req.urlWithParams);
  if (hit) return of(hit.clone());
  return next(req).pipe(tap((e) => e instanceof HttpResponse && cache.set(req.urlWithParams, e)));
};
```
SSR-nél ugyanezt a `withHttpTransferCacheOptions()` adja beépítve.

### Egyéb hasznos beállítások
- `withRequestsMadeViaParent()` – gyerek injectorból a szülő interceptor-láncot használja.
- `keepalive: true` – analitikai kérés túléli az oldal elhagyását.
- `HttpResponse.headers` / `progress` események – letöltés/feltöltés folyamatjelzőhöz.
- Timeout: `timeout(10_000)` operátor az interceptorban, egységes hibakezeléssel.

## 139. Authentication and Authorization – Modern Patterns (v15+ · RedirectCommand v18+) https://angular.dev/guide/routing/route-guards {#authentikacio-es-authorizacio-modern-mintak-v15-redirectcommand-v18}
### Cookie-alapú authentikáció
A session cookie-nak legyen `HttpOnly` (JS nem olvashatja → XSS-ellenálló), `Secure` (csak HTTPS) és `SameSite=Lax` vagy `Strict` (CSRF-védelem) attribútuma.

**XSRF**: ha a cookie automatikusan megy minden kéréssel, kell CSRF token. Angular beépített támogatása:
```ts
provideHttpClient(withXsrfConfiguration({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' }));
```
A szerver beállít egy nem-HttpOnly XSRF cookie-t, az Angular pedig fejlécbe másolja – a támadó másik originből nem tudja olvasni.

### Token-alapú biztonság
- **OAuth 2** – authorizáció (delegált hozzáférés), **OpenID Connect** – authentikáció (ki a felhasználó) OAuth 2 fölött.
- **JWT** – aláírt, base64url-kódolt token (header.payload.signature). Nem titkosított: **ne tegyünk bele érzékeny adatot**, és mindig ellenőrizzük az aláírást szerveroldalon.

### Flow-k
| Flow | Használat |
| --- | --- |
| Authorization Code + PKCE | SPA/mobil, ha kliensoldali OAuth kell |
| Client Credentials | gép-gép, nincs felhasználó |
| Implicit | **elavult**, ne használjuk |

### Aktuális ajánlás: szerveroldali OAuth 2 (BFF)
A böngészőben tárolt access token (localStorage vagy akár memória) XSS esetén kiszivárogtathatóan érzékeny. A jelenlegi ajánlás a **Backend for Frontend** minta:
1. A token-csere és -tárolás a BFF-en történik.
2. A böngésző csak `HttpOnly` session cookie-t kap.
3. A BFF proxyzza az API-hívásokat, és ő teszi rá az access tokent.

Így nincs token a JS-ben, a refresh flow is szerveroldali, és a kliens kódja lényegesen egyszerűbb.

### Authorizáció a frontenden
```ts
export const hasRole = (role: string): CanActivateFn => () => {
  const auth = inject(AuthStore);
  return auth.roles().includes(role) ? true : new RedirectCommand(inject(Router).parseUrl('/forbidden'));
};
```
**A frontend authorizáció csak UX**: elrejt és irányít. Az érdemi ellenőrzés mindig a szerveren van – a kliensben lévő guard megkerülhető.

## 140. Frontend Security – XSS, CSP, Trusted Types (v2+ · CSP nonce v16+) https://angular.dev/best-practices/security {#frontend-biztonsag-xss-csp-trusted-types-v2-csp-nonce-v16}
### XSS és az Angular védelme
Az Angular alapból **kontextus-tudatosan escape-eli** az interpolált értékeket, ezért a `{{ userInput }}` biztonságos. A rés ott van, ahol ezt kikapcsoljuk:
```ts
// kerülendő, csak megbízható, szerveroldalon tisztított tartalomra
this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
```
A `bypassSecurityTrust*` metódusok minden előfordulását indokolni és code review-ban kiemelten kezelni kell. `[innerHTML]` esetén az Angular sanitizál, de `<script>` mellett `onerror` és `javascript:` URL-ek is figyelendők.

### Content Security Policy
```
Content-Security-Policy: default-src 'self';
  script-src 'self' 'nonce-{RANDOM}';
  style-src 'self' 'nonce-{RANDOM}';
  object-src 'none'; base-uri 'self';
```
Angular CLI támogatja a CSP nonce-t (`ngCspNonce` attribútum a root elemen, illetve automatikus nonce-injektálás SSR-nél), így nem kell `unsafe-inline`.

### Trusted Types
```
Content-Security-Policy: require-trusted-types-for 'script';
```
Az Angular Trusted Types-kompatibilis; ez a legerősebb elérhető DOM-XSS védelem.

### Egyéb napi szempontok
- **Dependency higiénia**: `npm audit`, lockfile review, Renovate/Dependabot. A supply chain támadás ma reálisabb, mint a klasszikus XSS.
- **Titkok**: az `environment.ts` **nem** titkos – a bundle-ba kerül. Kliensbe nem tesszük API kulcsot.
- **Source map** production build-ben ne legyen publikus.
- **Külső link**: `rel="noopener noreferrer"` a `target="_blank"` mellé.
- **Iframe**: `X-Frame-Options` / `frame-ancestors` a clickjacking ellen.
- **Prototype pollution**: mély merge-nél (`lodash.merge`) figyeljünk a `__proto__` kulcsra.

## 141. Internationalization (i18n) (@angular/localize v9+ · subPath v20+) https://angular.dev/guide/i18n {#internacionalizacio-i18n-angular-localize-v9-subpath-v20}
### Beépített `@angular/localize`
```bash
ng add @angular/localize
```
```html
<h1 i18n="@@flight.search.title">Repülőjárat keresése</h1>
<img [src]="logo" i18n-alt alt="Logó" />
```
```ts
$localize`:@@flight.notFound:Nincs találat`;
```
```bash
ng extract-i18n --output-path src/locale --format xlf2
```
```json
// angular.json
"i18n": {
  "sourceLocale": "hu",
  "locales": { "en": "src/locale/messages.en.xlf", "de": "src/locale/messages.de.xlf" }
}
```
A build **lokálonként külön bundle-t** készít – nulla futásidejű overhead, de deploykor útvonal- vagy subpath-alapú kiszolgálás kell (`/en/`, `/de/`). Fejlesztés közben: `ng serve --configuration=en`.

### Grammatikai formák (ICU)
```html
{ count, plural, =0 {Nincs utas} =1 {Egy utas} other {{{count}} utas} }
{ gender, select, male {Ő} female {Ő} other {Ők} }
```
A magyar és a szláv nyelvek többes számú szabályai miatt az ICU plural elhagyása szinte biztosan hibás fordításhoz vezet.

### Formátumok
`DatePipe`, `CurrencyPipe`, `DecimalPipe` a `LOCALE_ID`-t követi:
```ts
providers: [{ provide: LOCALE_ID, useValue: 'hu-HU' }]
```
Támogatott fordítási formátumok: XLIFF 1.2, XLIFF 2, XMB/XTB, JSON (ARB).

### Közösségi alternatívák
- **Transloco** – futásidejű nyelvváltás, lazy-loadolt fordítási szótárak, egy bundle. Ha nyelvváltás reload nélkül kell, ez a gyakorlati választás.
- **ngx-translate** – érett, elterjedt, de a beépített és a Transloco irányába mozdul az ökoszisztéma.

**Döntés:** SEO-fontos, per-nyelv deployolható oldal → beépített i18n. Belső alkalmazás futásidejű nyelvváltással → Transloco.

## 142. Accessibility (a11y) in Practice (CDK a11y v2+ · Angular Aria v21+) https://angular.dev/guide/aria/overview {#akadalymentesites-a11y-a-gyakorlatban-cdk-a11y-v2-angular-aria-v21}
### Szemantika először
A helyes HTML elem többet ér minden ARIA attribútumnál: `<button>` a kattinthatóhoz, `<a href>` a navigációhoz, `<label for>` a mezőhöz, heading hierarchia kihagyás nélkül. ARIA-t csak akkor, ha nincs natív megfelelő.

### Modern binding
```html
<button [aria-label]="label()" [aria-expanded]="isOpen()">…</button>
```
Az `attr.` prefix már nem kell.

### Fókuszkezelés
```ts
private readonly focusTrap = inject(ConfigurableFocusTrapFactory);
private readonly liveAnnouncer = inject(LiveAnnouncer);

openDialog(): void {
  this.trap = this.focusTrap.create(this.dialogEl().nativeElement);
  this.trap.focusInitialElement();
  this.liveAnnouncer.announce('Párbeszédpanel megnyitva');
}
```
A `@angular/cdk/a11y` csomag adja: `FocusTrap`, `LiveAnnouncer`, `FocusMonitor`, `cdkTrapFocus`, `A11yModule`.

### Angular Aria
A headless, akadálymentes primitívek (Accordion, Combobox, Grid, Listbox, Menu, Tabs, Toolbar, Tree) automatikusan hozzák a billentyűzet-navigációt, az ARIA attribútumokat és a fókuszkezelést – csak a stílus a mi dolgunk. Saját dropdown/tab implementáció helyett ezt használjuk.

### Ellenőrzőlista
- Teljes billentyűzetes bejárhatóság, látható `:focus-visible` jelzés.
- Kontraszt: normál szöveg 4.5:1, nagy szöveg 3:1.
- Űrlaphiba: `aria-invalid` + `aria-describedby` a hibaszöveghez, ne csak piros keret.
- Route váltás: cím frissítése (`TitleStrategy`) és fókusz a fő tartalomra – SPA-ban a képernyőolvasó különben nem tudja, hogy változott az oldal.
- `prefers-reduced-motion` tiszteletben tartása animációknál.
- Automatizált ellenőrzés: `axe-core` a Playwright tesztekben. Az automata eszköz a hibák kb. harmadát fogja meg – kell kézi billentyűzet- és képernyőolvasó-teszt is.

## 143. Performance and Core Web Vitals (@defer v17+ · ng.enableProfiling() v20+) https://angular.dev/guide/performance {#teljesitmeny-es-core-web-vitals-defer-v17-ng-enableprofiling-v20}
### A három metrika
- **LCP** (Largest Contentful Paint) ≤ 2.5 s – a legnagyobb tartalmi elem megjelenése. Javítás: SSR/prerender, `ngOptimizedImage` + `priority`, kritikus CSS, font preload.
- **INP** (Interaction to Next Paint) ≤ 200 ms – interakció válaszkészsége. Javítás: OnPush/zoneless, hosszú taskok szétvágása, felesleges change detection megszüntetése.
- **CLS** (Cumulative Layout Shift) ≤ 0.1 – elrendezés-ugrás. Javítás: kép `width`/`height`, skeleton placeholder fix mérettel, `font-display: optional` vagy `size-adjust`.

### Bundle-kontroll
```json
"budgets": [
  { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
  { "type": "anyComponentStyle", "maximumWarning": "4kB" }
]
```
```bash
ng build --stats-json && npx esbuild-visualizer --metadata dist/stats.json
```
A budget CI-ben törjön buildet – különben csak dísz.

### Angular-specifikus eszközök
```ts
// böngésző konzolban
ng.enableProfiling();
```
Ezután a Chrome DevTools Performance panelen az Angular saját sávján látszik, melyik komponens change detectionje mennyi ideig tart.

### Betöltés-stratégia
```html
@defer (on viewport; prefetch on idle) {
  <app-recommendations />
} @placeholder (minimum 300ms) {
  <app-skeleton />
} @loading {
  <app-spinner />
}
```
Triggerek: `on idle`, `on viewport`, `on interaction`, `on hover`, `on timer(2s)`, `on immediate`, `when <kifejezés>`. A `prefetch` külön triggerelhető.

Route-szinten: `loadComponent`/`loadChildren` + `PreloadAllModules` vagy saját `PreloadingStrategy` (pl. csak jó hálózaton).

### Runtime teljesítmény
- OnPush (default from v22) és signal-alapú state.
- `@for` **mindig** `track` kifejezéssel – enélkül teljes újrarenderelés.
- Drága számítás `computed`-ben (memoizált), nem getterben vagy sablonhívásban.
- Nagy listákhoz `cdk-virtual-scroll-viewport`.
- Sablonban ne hívjunk függvényt, ami minden CD-ciklusban lefut.

## 144. Hybrid Rendering, Server Routes, Prerender, Event Replay (server routes v19 experimental · v20 stable · event replay v18+) https://angular.dev/guide/hybrid-rendering {#hybrid-rendering-server-routes-prerender-event-replay-server-routes-v19-kiserleti-v20-stable-event-replay-v18}
### SSR bekapcsolása
```bash
ng add @angular/ssr
```
(A régi `@nguniversal/express-engine` megszűnt, a funkció a `@angular/ssr` csomagba került.)

### Route-szintű render mód
```ts
export const serverRoutes: ServerRoute[] = [
  { path: 'login', renderMode: RenderMode.Client },
  { path: 'catalog', renderMode: RenderMode.Server },
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams: () => (await getProductIds()).map((id) => ({ id })),
  },
];
```
Ez a **hybrid rendering**: statikus marketing oldal prerender, katalógus SSR (friss adat + SEO), belépés utáni felület CSR.

### Inkrementális hydration és event replay
```ts
provideClientHydration(withEventReplay());
```
Az inkrementális hydration default from v22 (`withNoIncrementalHydration()` kapcsolja ki). Az event replay eltárolja a hydration előtti kattintásokat, és a hidratálás után lejátssza – így nem veszik el a korai interakció.
```html
@defer (hydrate on viewport) { <app-heavy-widget /> }
@defer (hydrate never) { <app-static-footer /> }
```

### Szerver és kliens eltérő implementáció
```ts
// DI-vel (ajánlott)
{ provide: StorageService, useClass: isServer ? ServerStorage : BrowserStorage }

// futásidejű ellenőrzés
private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
```
Szerveren nincs `window`, `document`, `localStorage`. A DOM-hoz nyúló kódot tegyük `afterNextRender()`-be – az csak a böngészőben fut.

### HTTP request/response elérése
```ts
const req = inject(REQUEST, { optional: true });        // fejlécek, cookie-k
const ctx = inject(RESPONSE_INIT, { optional: true });  // status, header beállítás
```
Tipikus használat: 404 status beállítása nem létező termékoldalnál, nyelv detektálás `Accept-Language` alapján.

### Hibaforrások
- Hydration mismatch: a szerver és a kliens más DOM-ot állít elő (pl. `Math.random()`, `new Date()` a sablonban). Használjunk stable adatot vagy `ngSkipHydration`-t.
- Dupla adatbetöltés: `TransferState` / `withHttpTransferCacheOptions()` nélkül a kliens újra lekéri, amit a szerver már betöltött.

## 145. Dynamic Components, Templates and Containers (v2+ · createComponent bindings/directives v20+) https://angular.dev/guide/components/programmatic-rendering {#dinamikus-komponensek-template-ek-es-containerek-v2-createcomponent-bindings-directives-v20}
### Komponens létrehozása kódból bindingokkal
```ts
import { createComponent, inputBinding, outputBinding, twoWayBinding } from '@angular/core';

const ref = createComponent(FlightCard, {
  environmentInjector: this.injector,
  bindings: [
    inputBinding('flight', () => this.flight()),
    outputBinding<Flight>('selected', (f) => this.onSelect(f)),
    twoWayBinding('expanded', this.expanded),
  ],
  directives: [{ type: TooltipDirective, bindings: [inputBinding('appTooltip', () => 'Részletek')] }],
});
```
A `bindings` és `directives` opció megszünteti a korábbi kézi `setInput()` + `detectChanges()` koreográfiát, és a dinamikus komponens is kaphat direktívákat.

### ViewContainerRef és TemplateRef
```ts
private readonly vcr = viewChild.required('host', { read: ViewContainerRef });

show(): void {
  this.vcr().clear();
  this.vcr().createEmbeddedView(this.tpl(), { $implicit: this.item() });
}
```
```html
<ng-container *ngTemplateOutlet="rowTpl; context: { $implicit: row, index: i }" />
```

### Strukturális direktíva „desugarolva”
```html
<div *appMyIf="cond">…</div>
<!-- ekvivalens -->
<ng-template appMyIf [appMyIf]="cond"><div>…</div></ng-template>
```
Ez magyarázza, miért kap a direktíva `TemplateRef`-et és `ViewContainerRef`-et a konstruktorában, és miért működnek a `let-` változók.

### NgComponentOutlet
```html
<ng-container
  *ngComponentOutlet="widgetType(); inputs: widgetInputs(); injector: widgetInjector()" />
```
Dinamikus dashboard/widget-rendszerekhez ez a legkevesebb kóddal járó megoldás – `inputs`, `injector`, `content` és `directives` opciókat is támogat.

### Modális dialógus CDK-val
```ts
const ref = this.dialog.open(FlightEditDialog, { data: { flightId }, width: '600px' });
const result = await firstValueFrom(ref.closed);
```
A CDK Dialog headless (nincs stílusa), az Angular Material `MatDialog` stílusozott változat. Portál esetén ügyeljünk arra, hogy a komponens **saját injectorba** kerül – a `:host-context()` és a szülő providerek nem feltétlenül érvényesek, ezért adjuk át explicit injectort.

## 146. Initializers – App, Environment, Platform (v14+ · provideAppInitializer v19+) https://angular.dev/api/core/provideAppInitializer {#initializerek-app-environment-platform-v14-provideappinitializer-v19}
### Modern provider-függvények
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(async () => {
      await inject(ConfigService).load();     // Promise-t is visszaadhat: a bootstrap megvárja
    }),
    provideEnvironmentInitializer(() => {
      inject(TelemetryService).start();       // az environment injector létrejöttekor
    }),
  ],
};
```
Ezek váltják ki a régi `APP_INITIALIZER` / `ENVIRONMENT_INITIALIZER` multi-provider szintaxist – tipizáltak, `inject()`-alapúak és jobban tree-shakelhetők.

### Melyiket mikor
| Initializer | Időpont | Tipikus feladat |
| --- | --- | --- |
| Platform initializer | a platform létrejöttekor, app előtt | globális polyfill, error hook |
| App initializer | bootstrap közben, első render előtt (**megvárja a Promise-t**) | runtime konfiguráció betöltése, feature flagek, auth session helyreállítás |
| Environment initializer | az environment injector felállásakor | telemetria, DI-alapú globális regisztrációk |

### Runtime konfiguráció minta
```ts
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly http = inject(HttpClient);
  private _config?: AppConfig;
  get config(): AppConfig {
    if (!this._config) throw new Error('Config not loaded');
    return this._config;
  }
  async load(): Promise<void> {
    this._config = await firstValueFrom(this.http.get<AppConfig>('/assets/config.json'));
  }
}
```
Ez az `environment.ts` build-time konstansok helyett **környezetenként cserélhető** konfigurációt ad: ugyanaz az artefaktum megy dev/staging/prod-ra.

**Figyelem:** minden app initializer lassítja az első renderelést. Csak az kerüljön bele, ami nélkül az alkalmazás valóban nem indulhat el.

## 147. Angular CDK – Commonly Used Building Blocks (CDK v14+) https://material.angular.dev/cdk/categories {#angular-cdk-gyakran-hasznalt-epitoelemek-cdk-v14}
A CDK viselkedési primitívek gyűjteménye stílus nélkül. Saját implementáció helyett szinte mindig ezt érdemes használni.

| Modul | Mire jó |
| --- | --- |
| `cdk/overlay` | pozicionált overlay (dropdown, tooltip, popover) flexible positioning strategy-vel |
| `cdk/portal` | tartalom kirenderelése a DOM más pontjára |
| `cdk/dialog` | headless modális dialógus |
| `cdk/menu` | akadálymentes menü, submenük, billentyűzet-navigáció |
| `cdk/a11y` | `FocusTrap`, `LiveAnnouncer`, `FocusMonitor` |
| `cdk/layout` | `BreakpointObserver` – reszponzív logika TS-ben |
| `cdk/scrolling` | virtuális scroll nagy listákhoz |
| `cdk/drag-drop` | drag & drop listák, sorbarendezés |
| `cdk/table` | headless táblázat (sort/paginate nélkül) |
| `cdk/clipboard` | `cdkCopyToClipboard` |
| `cdk/testing` | Component Test Harness – stable teszt-API a komponensekhez |

```html
<cdk-virtual-scroll-viewport itemSize="48" style="height: 400px">
  @for (flight of flights(); track flight.id) {
    <app-flight-row [flight]="flight" />
  }
</cdk-virtual-scroll-viewport>
```
```ts
private readonly breakpoints = inject(BreakpointObserver);
readonly isMobile = toSignal(
  this.breakpoints.observe('(max-width: 768px)').pipe(map((s) => s.matches)),
  { initialValue: false },
);
```

**Component Test Harness**: a `cdk/testing` harness API-jai a belső DOM-tól függetlenítik a tesztet – ha a Material komponens markupja változik, a teszt nem törik el.

## 148. RxJS and Signal Interop – When to Use Which (toSignal/toObservable v16+ · stable v20) https://angular.dev/guide/signals/rxjs-interop {#rxjs-es-signal-interop-mikor-melyiket-tosignal-toobservable-v16-stable-v20}
### Interop API-k
```ts
// Observable → Signal
readonly user = toSignal(this.userService.user$, { initialValue: null });

// Signal → Observable
readonly term$ = toObservable(this.term);

// resource-ba kötött Observable
readonly flights = rxResource({ params: () => this.filter(), stream: ({ params }) => this.api.find(params) });
```
A `toSignal` automatikusan unsubscribe-ol a kontextus megszűnésekor, ezért nem kell `takeUntilDestroyed`. Injection contexten kívül adjuk meg a `{ injector }` opciót.

### Döntési szabály
| Feladat | Eszköz |
| --- | --- |
| UI állapot, derived érték | `signal` / `computed` |
| Szinkron állapot megjelenítése | `signal` |
| Adatbetöltés paraméter alapján | `resource` / `httpResource` / `rxResource` |
| Írási művelet státusszal | `httpMutation` / `rxMutation` |
| Debounce, throttle, retry, cancellation | **RxJS** (`rxMethod`, interceptor) |
| Több stream kombinálása időben | **RxJS** (`combineLatest`, `withLatestFrom`) |
| WebSocket, SSE, folyamatos esemény | **RxJS** |
| Egyszerű „ha változik, tedd meg” | `effect` / `signalMethod` |

**A signal nem váltja le az RxJS-t.** A signal állapotot reprezentál, az Observable eseményfolyamot. Ahol az *idő* a probléma (sorrend, késleltetés, megszakítás), ott RxJS a helyes eszköz.

### Gyakori hibák
- `effect()`-ben állapotot írni más signalba állapotterjesztés céljából → `computed` vagy `linkedSignal`.
- `toSignal` + `toObservable` oda-vissza láncolása → általában rosszul megfogalmazott adatfolyam jele.
- Nested `subscribe` → higher-order mapping operátor (`switchMap`, `concatMap`).
- Manuális `subscribe` komponensben → `toSignal`, `resource`, vagy `takeUntilDestroyed()`.

## 149. Advanced TypeScript Type Patterns in Practice (TypeScript 5+ (satisfies 4.9+, const type param 5.0+)) https://www.typescriptlang.org/docs/handbook/2/types-from-types.html {#typescript-halado-tipusmintak-a-gyakorlatban-typescript-5-satisfies-4-9-const-type-param-5-0}
### `satisfies` – ellenőrzés a típusszűkítés elvesztése nélkül
```ts
const routes = {
  home: '/',
  flightDetail: (id: number) => `/flight/${id}`,
} satisfies Record<string, string | ((...args: never[]) => string)>;
// routes.home típusa '/' marad, nem string
```

### Discriminated union állapotokhoz
```ts
type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function render(state: LoadState<Flight[]>) {
  switch (state.status) {
    case 'success': return state.data.length;   // data itt biztosan létezik
    case 'error': return state.error;
    default: return 0;
  }
}
```
Ez a minta megszünteti a „loading true, de data undefined” típusú lehetetlen állapotokat.

### Exhaustiveness check
```ts
function assertNever(x: never): never { throw new Error(`Unexpected: ${JSON.stringify(x)}`); }
// switch default ágában: return assertNever(state);
```
Ha új variánst adunk az unionhoz, a fordító azonnal jelez.

### Branded (nominal) típusok
```ts
type Brand<T, B extends string> = T & { readonly __brand: B };
type FlightId = Brand<number, 'FlightId'>;
type PassengerId = Brand<number, 'PassengerId'>;
// FlightId-t nem lehet PassengerId helyére adni
```

### Template literal types
```ts
type Locale = 'hu' | 'en' | 'de';
type TranslationKey = `flight.${'search' | 'detail'}.${'title' | 'subtitle'}`;
type EventName<T extends string> = `on${Capitalize<T>}`;
```

### Type guard és assertion function
```ts
function isFlight(value: unknown): value is Flight {
  return typeof value === 'object' && value !== null && 'id' in value;
}
function assertDefined<T>(v: T | null | undefined, msg = 'Missing value'): asserts v is T {
  if (v == null) throw new Error(msg);
}
```

### Mapped és conditional típusok
```ts
type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };
type FormOf<T> = { [K in keyof T]-?: FormControl<NonNullable<T[K]>> };
type Unwrap<T> = T extends Signal<infer U> ? U : T;
```

### `const` type parameter
```ts
function tuple<const T extends readonly unknown[]>(...args: T): T { return args; }
const cols = tuple('id', 'from', 'to');   // readonly ['id','from','to']
```

### Runtime validáció a határon
A típus a fordításnál létezik, a szerver válasza futásidőben jön. A `data` réteg határán validáljunk (Zod/Valibot), és onnantól bízzunk a típusokban:
```ts
const FlightSchema = z.object({ id: z.number(), from: z.string(), to: z.string() });
export type Flight = z.infer<typeof FlightSchema>;
```

## 150. SOLID, KISS, YAGNI, DRY in Angular Code (version-agnostic) {#solid-kiss-yagni-dry-az-angular-kodban-verziofuggetlen}
### SOLID
- **S – Single Responsibility**: a komponens rendereljen, a store tartsa az állapotot, a kliens beszéljen a HTTP-vel, a util számoljon. Ha egy komponens 300 sor fölé nő, jellemzően több felelősséget visz.
- **O – Open/Closed**: viselkedést bővítsünk kompozícióval (`hostDirectives`, custom signal store feature, interceptor lánc), ne if-ágak hozzáadásával.
- **L – Liskov**: ha egy szolgáltatásnak több implementációja van (`StorageService` → `BrowserStorage` / `ServerStorage`), a szerződés maradjon azonos – ne dobjon váratlanul kivételt az egyik.
- **I – Interface Segregation**: szűk inputfelület. Egy „dumb” komponens kapjon 3 konkrét inputot, ne egy 40 mezős domain objektumot.
- **D – Dependency Inversion**: `InjectionToken` vagy absztrakt osztály ellen injektáljunk, ha a megvalósítás környezetfüggő vagy tesztben cserélni kell.

```ts
export const FLIGHT_REPOSITORY = new InjectionToken<FlightRepository>('FLIGHT_REPOSITORY');
// prod: HttpFlightRepository, teszt: InMemoryFlightRepository
```

### KISS
A legegyszerűbb működő megoldás nyer. Egy komponens-lokális `signal()` gyakran elég – nem minden állapothoz kell store, és nem minden store-hoz Events API.

### YAGNI
Ne építsünk absztrakciót egyetlen használati eset alapján. A „generic table component minden esethez” tipikusan drágább, mint három konkrét táblázat. Az absztrakciót a **harmadik** ismétlődés indokolja.

### DRY – és a határai
A tudást ne duplikáljuk (validációs szabály, üzleti számítás, API útvonal). A *véletlenül hasonló* kódot viszont ne vonjuk össze: két domain hasonló űrlapja külön fejlődik tovább, és a közös absztrakció paraméterek dzsungelébe fordul. A rossz absztrakció drágább, mint a duplikáció.

### Vertical Slice + Clean Architecture összekötése
```
feature (UI, route)          → csak lefelé hív
  ui (prezentációs)
    data (store, repository) → interfész a domain felé
      domain/util (tiszta üzleti szabályok, típusok, mapping)
```
A domain réteg **ne importáljon Angulart** – így egységtesztelhető keretrendszer nélkül, és a keretrendszer-váltás sem érinti.

## 151. Common Design Patterns in Angular (v2+) https://angular.dev/guide/di {#gyakran-hasznalt-design-patternek-angularban-v2}
| Pattern | Angular megjelenés | Mikor |
| --- | --- | --- |
| Facade | `UsersFacade` a store előtt | store belső szerkezetének elrejtése |
| Repository | `FLIGHT_REPOSITORY` token + HTTP implementáció | adatelérés cserélhetővé tétele, tesztelés |
| Adapter | DTO → domain mapping a `data` rétegben | backend séma szivárgásának megakadályozása |
| Strategy | `PreloadingStrategy`, `TitleStrategy`, `ErrorHandler` | pluggable viselkedés |
| Decorator | `hostDirectives`, HTTP interceptor lánc | viselkedés hozzáadása módosítás nélkül |
| Observer | Signal / Observable | reaktív adatfolyam |
| Composite | rekurzív tree komponens | hierarchikus UI |
| Command | Events API event / NgRx action | auditálható, visszajátszható művelet |
| State | discriminated union `LoadState<T>` | lehetetlen állapotok kizárása |
| Builder | `NonNullableFormBuilder`, séma-építés | összetett objektum lépésenkénti felépítése |
| Singleton | `providedIn: 'root'` | alkalmazásszintű szolgáltatás |
| Factory | `useFactory`, `signalStoreFeature` | konfigurációtól függő létrehozás |
| Null Object | `NoopLogger`, `provideNoopAnimations()` | optional függőség egyszerűsítése |

### Container / Presentational (Smart / Dumb)
```ts
// container: tudja, honnan jön az adat
@Component({
  selector: 'app-flight-search-page',
  imports: [FlightList],
  template: `<app-flight-list [flights]="flights()" (select)="onSelect($event)" />`,
})
export class FlightSearchPage {
  private readonly store = inject(FlightStore);
  protected readonly flights = this.store.flights;
  protected onSelect(f: Flight): void { this.store.select(f.id); }
}

// presentational: csak inputot kap, outputot ad – nincs DI, könnyen tesztelhető
@Component({ selector: 'app-flight-list', /* ... */ })
export class FlightList {
  readonly flights = input.required<Flight[]>();
  readonly select = output<Flight>();
}
```
Ez a legnagyobb hozadékú szerkezeti minta: a `ui` réteg újrahasznosítható és triviálisan tesztelhető, a `feature` réteg pedig egy helyen dönt az adatról.

## 152. Code Quality and Tooling – ESLint Flat Config, Prettier, Husky (angular-eslint 18+ (flat config)) https://github.com/angular-eslint/angular-eslint {#kodminoseg-es-tooling-eslint-flat-config-prettier-husky-angular-eslint-18-flat-config}
### ESLint flat config
```js
// eslint.config.js
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const sheriff = require('@softarc/eslint-plugin-sheriff');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...angular.configs.tsRecommended,
      sheriff.configs.all,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
  },
);
```
A template accessibility konfiguráció ingyen elkap egy sor a11y hibát (`alt` nélküli kép, kattintható `div`, `label` nélküli input).

### Prettier + git hookok
```bash
npm i -D prettier husky lint-staged @commitlint/{cli,config-conventional}
npx husky init
```
```json
// package.json
"lint-staged": {
  "*.{ts,html,scss,json,md}": ["prettier --write"],
  "*.ts": ["eslint --fix"]
}
```
```
# .husky/pre-commit
npx lint-staged

# .husky/commit-msg
npx commitlint --edit "$1"
```
A conventional commit (`feat:`, `fix:`, `chore:`) nem formalitás: ebből generálható a changelog és a semantic version.

### Egyéb
- **strict TypeScript** (lásd az első szekciót) – a legjobb megtérülésű lint.
- **SonarQube / SonarCloud** – duplikáció, kognitív komplexitás, security hotspot.
- **Knip / ts-prune** – halott kód és nem használt export felderítése.
- **Renovate / Dependabot** – automatikus dependency PR-ok, csoportosított Angular frissítésekkel.

## 153. CI/CD Pipeline for Angular Monorepos (Nx 19+ · version-agnostic) https://nx.dev/ci/intro/ci-with-nx {#ci-cd-pipeline-angular-monorepohoz-nx-19-verziofuggetlen}
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }          # Nx affected-hez kell a történet
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npx nx affected -t lint test build --parallel=3
      - run: npx nx affected -t e2e --parallel=1
      - uses: actions/upload-artifact@v4
        if: failure()
        with: { name: playwright-report, path: playwright-report/ }
```

### Elvek
- **Affected-only**: monorepóban ne buildeljünk mindent minden PR-on.
- **Cache**: npm cache + Nx (remote) cache. Ez a legnagyobb egyszeri gyorsítás.
- **Fail fast sorrend**: format → lint → typecheck → unit → build → e2e.
- **Budget és lighthouse ellenőrzés** a build után, nem külön manuális lépésként.
- **Deploy előtti smoke teszt** a valódi artefaktum ellen, nem dev serveren.
- **Verziófrissítés PR-ként**: `ng update` egy-egy főverzióval, külön branchen, `--dry-run` előellenőrzéssel.
- **Környezetfüggő konfiguráció** ne build-time legyen (lásd Initializerek) – így egy artefaktum promotálható dev → staging → prod útvonalon.

### Release
```bash
npx nx release          # verziózás, changelog, tag, publish egy lépésben
```
Vagy `semantic-release` a conventional commitokból. A kézzel írt changelog néhány hónap után mindig elavul.

## 154. Angular Style Guide 2026 – Naming and File Structure (v20+ style guide) https://angular.dev/style-guide {#angular-style-guide-2026-elnevezes-es-fajlstruktura-v20-style-guide}
Az Angular style guide 2025-ben jelentősen egyszerűsödött. A régi `*.component.ts` / `*.service.ts` suffixek **már nem javasoltak**, és a CLI sem generálja őket.

| Régi | Új |
| --- | --- |
| `flight-search.component.ts` → `FlightSearchComponent` | `flight-search.ts` → `FlightSearch` |
| `flight.service.ts` → `FlightService` | `flight-client.ts` → `FlightClient` (beszélő név) |
| `flight.module.ts` | nincs – standalone |
| `flight.pipe.ts` → `FlightPipe` | `format-flight.ts` → `FormatFlight` |

### Ajánlott konvenciók
- Fájlnév **kebab-case**, osztálynév **PascalCase**, a fájlnév tükrözze az osztálynevet.
- A típust ne a suffix, hanem a **beszélő név** hordozza: `FlightClient`, `FlightStore`, `FlightSearchPage`, `FlightCard`.
- Egy fájl = egy publikus konstrukció.
- Sablon és stílus külön fájlba, ha 15–20 sor felett van; inline alatta.
- Tagsorrend osztályon belül: injektált függőségek → state signalok → computed → lifecycle → publikus metódusok → privát metódusok.
- `private readonly` az injektált függőségeknek, `protected readonly` annak, amit a sablon használ (`public` nem kell).
- `_` prefix csak a store belső (`withProps`) tagjainál, ahol a konvenció a privát jelentést hordozza.
- Route-fájl: `<domain>.routes.ts`, default exporttal, ha lazy-loadolt.

### Modern komponens-alapminta
```ts
@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.scss',
  // v22-től OnPush a default – nem kell kiírni
})
export class FlightCard {
  readonly flight = input.required<Flight>();
  readonly selected = output<Flight>();
  protected readonly isDelayed = computed(() => this.flight().delayed);
}
```
Amit már nem írunk: `standalone: true` (v19+ default), `changeDetection: OnPush` (v22+ default), `@Input()`/`@Output()` decorator (helyette `input()`/`output()`), konstruktor-injektálás (helyette `inject()`).

## 155. SCSS Architecture, Tailwind and Design Tokens (CSS/SCSS · Tailwind 3–4) https://angular.dev/guide/tailwind {#scss-architektura-tailwind-es-design-tokenek-css-scss-tailwind-3-4}
### Rétegek
```
styles/
  tokens/      # design tokenek CSS custom property-ként
  base/        # reset, tipográfia, alap elemstílus
  utilities/   # mixinek, függvények (nincs kimenet)
  themes/      # light / dark / brand
styles.scss    # csak importok
```

### Tokenek CSS változóként, ne SCSS változóként
```scss
:root {
  --color-surface: #ffffff;
  --color-on-surface: #1a1a1a;
  --color-primary: #0057b8;
  --space-2: 8px;
  --radius-md: 8px;
}

[data-theme='dark'] {
  --color-surface: #121212;
  --color-on-surface: #ececec;
}
```
A CSS custom property futásidőben cserélhető (témaváltás reload nélkül) és öröklődik a komponenshatárokon át – az SCSS változó fordításkor eltűnik.

### Komponensstílus
```scss
:host {
  display: block;
  padding: var(--space-2);
  background: var(--color-surface);
  color: var(--color-on-surface);
}
:host([data-variant='compact']) { padding: 0; }
```
- `::ng-deep` **kerülendő** – deprecated és szivárog. Helyette: CSS custom property a komponens API-jaként, vagy `ViewEncapsulation.None` tudatosan, csak könyvtár-szintű alapstílushoz.
- Modern SCSS: `@use` / `@forward`, nem `@import` (utóbbi megszűnik).
- `@container` query-k komponens-szintű reszponzivitáshoz a media query helyett.

### Tailwind Angularral
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: { colors: { primary: 'var(--color-primary)' } } },
};
```
- A design tokeneket a Tailwind témába is CSS változóként kössük be – így egy igazságforrás van.
- A `content` glob tartalmazza a `.ts`-t is az inline sablonok miatt.
- Tailwind osztály **nem** hatol át a komponenshatáron: ha a szülő Tailwind osztályt ad a gyerek belső elemére, az emulated encapsulation miatt nem érvényesül. A gyerek exponáljon variánst inputként vagy CSS változót.
- Vegyes stratégia jól működik: Tailwind az elrendezésre, komponens-SCSS a komplex, állapotfüggő stílusra.

## 156. PWA, Service Worker and Web Workers (@angular/pwa v14+ · provideServiceWorker v15+) https://angular.dev/ecosystem/service-workers {#pwa-service-worker-es-web-workers-angular-pwa-v14-provideserviceworker-v15}
### Service worker
```bash
ng add @angular/pwa
```
```ts
provideServiceWorker('ngsw-worker.js', {
  enabled: !isDevMode(),
  registrationStrategy: 'registerWhenStable:30000',
});
```
```json
// ngsw-config.json
{
  "assetGroups": [
    { "name": "app", "installMode": "prefetch", "resources": { "files": ["/index.html", "/*.css", "/*.js"] } },
    { "name": "assets", "installMode": "lazy", "updateMode": "prefetch", "resources": { "files": ["/assets/**"] } }
  ],
  "dataGroups": [
    {
      "name": "api-cache",
      "urls": ["/api/reference-data/**"],
      "cacheConfig": { "strategy": "freshness", "maxSize": 100, "maxAge": "1h", "timeout": "3s" }
    }
  ]
}
```
Stratégia: `freshness` (network-first) változó adatra, `performance` (cache-first) statikus referenciaadatra.

### Frissítéskezelés
```ts
private readonly updates = inject(SwUpdate);

constructor() {
  this.updates.versionUpdates
    .pipe(filter((e): e is VersionReadyEvent => e.type === 'VERSION_READY'), takeUntilDestroyed())
    .subscribe(() => this.showReloadPrompt());
}
```
Enélkül a felhasználó napokig régi verziót futtathat – ez a leggyakoribb „nálam nem az van” hibaforrás PWA-ban.

### Web Worker
```bash
ng generate web-worker data-processor
```
```ts
const worker = new Worker(new URL('./data-processor.worker', import.meta.url));
worker.onmessage = ({ data }) => this.result.set(data);
worker.postMessage(largeDataset);
```
Használjuk nagy adathalmaz feldolgozásához, CSV/Excel parse-hoz, titkosításhoz, képfeldolgozáshoz – minden olyanhoz, ami különben blokkolná a fő szálat és rontaná az INP-t. A workerben nincs DOM és nincs Angular DI.

## 157. AI-Assisted Development in Angular (MCP v21+ · Web MCP és agent skillek v22+) https://angular.dev/ai {#ai-tamogatott-fejlesztes-angularban-mcp-v21-web-mcp-es-agent-skillek-v22}
### Angular MCP szerver
Az Angular CLI experimental MCP szervert ad, amivel az AI asszisztens **verziótudatos, valós** Angular információt kap a betanított emlékei helyett:
```bash
ng mcp
```
Eszközök: `ai_tutor`, `find_examples`, `get_best_practices`, `list_projects`, `onpush_zoneless_migration`, `search_documentation`.

### AI agent skillek
- **angular-developer** – kódírás és architektúra, a projekt Angular verziójához illeszkedve.
- **Angular New App** – új alkalmazás felállítása `ng new`-vel, modern alapbeállításokkal.

### Web MCP – az alkalmazás mint eszköz AI ügynökök számára
```ts
export const provideProductSearchWebMcp = () =>
  provideWebMcpTools([{
    name: 'search_products',
    description: 'Search for products by a keyword',
    inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
    execute: async ({ query }) => {
      const products = await firstValueFrom(inject(ProductService).searchProducts({ term: query as string }));
      return { content: [{ type: 'text', text: `Found ${products.length} products` }] };
    },
  }]);
```
Így a böngésző-ügynök nem a DOM-ot találgatja, hanem strukturált, tipizált műveleteket hív.

### Agentic UI Hashbrownnal
```ts
readonly chat = uiChatResource({
  model: 'gpt-4.1',
  system: 'You help users manage their flights.',
  components: [
    exposeComponent(FlightCard, { description: 'Shows a single flight', input: { flight: s.object({ /* ... */ }) } }),
    exposeComponent(Markdown, { description: 'Formatted text' }),
  ],
  tools: [
    createTool({
      name: 'getFlights',
      description: 'Load flights for a route',
      schema: s.object({ from: s.string(), to: s.string() }),
      handler: async ({ from, to }) => firstValueFrom(inject(FlightClient).find({ from, to })),
    }),
  ],
});
```
A modell nem szabad HTML-t generál, hanem a **mi komponenseinket** választja ki és paraméterezi (structured output) – így a design system és az akadálymentesség megmarad. A `chatResource` tool callinggal, a `uiChatResource` generatív UI-jal működik.

### Gyakorlati elvek
- API kulcs **soha** a kliensben – proxyzzunk BFF-en át.
- A modell kimenete nem megbízható bemenet: validáljuk (Zod), és írási művelet előtt kérjünk megerősítést.
- „Dumb komponens + smart wrapper”: az AI-nak exponált komponens maradjon prezentációs, a mellékhatás a wrapperben legyen.
- Few-shot / one-shot példák adása jelentősen javítja a strukturált kimenet stabilitását.
- Determinisztikus feladatot ne adjunk modellnek: szűrés, rendezés, számítás maradjon kódban.

## 158. Future Directions (v23+ (bejelentett irány)) https://angular.dev/roadmap {#jovobeli-iranyok-v23-bejelentett-irany}
### Selectorless komponensek
A cél a `imports` tömb és a szelektor-alapú feloldás kiváltása: a komponenst közvetlenül az osztálynevével használjuk a sablonban, TypeScript importtal.
```html
<FlightCard [flight]="flight()" />
```
Előnyök: automatikus import az IDE-ből, nincs „elfelejtett import” hiba, jobb tree-shaking és tooling.

### Streamed server-side rendering
A szerver nem várja meg a teljes HTML elkészülését, hanem darabokban streameli. Ez érdemben javítja a TTFB-t és az LCP-t adatintenzív oldalakon.

### Signal integrációk
A keretrendszer további részei válnak signal-alapúvá (router API-k már megkezdték), és a signal integrációk mélyülnek a formok, a resource-ok és a DI körül.

### Amire érdemes készülni
- A zone.js-alapú kód végleges kivezetése (zoneless a default irány).
- A `@angular/animations` helyett `animate.enter` / `animate.leave` és natív CSS.
- Reactive Forms → Signal Forms fokozatos átállás (`SignalFormControl` a híd).
- Vitest mint egyetlen tesztfutó; Karma megszűnt.
- Az AI-integráció nem különálló funkció, hanem a fejlesztői munkafolyamat és a futásidejű felület része is lesz.

## 159. Adoption and Version Upgrade Checklist (v14 → v22) https://angular.dev/update-guide {#bevezetesi-es-verziofrissitesi-checklist-v14-v22}
### Frissítés (verzióról verzióra, sosem átlépve)
1. `git checkout -b upgrade/vNN`, tiszta working tree.
2. `ng update --dry-run` → hatás áttekintése.
3. `ng update @angular/core@NN @angular/cli@NN` (egy főverzió).
4. Schematics migrációk lefuttatása, a generált diff **átolvasása**.
5. `npm audit` + peer dependency konfliktusok kezelése (Material, NgRx, Nx együtt frissül).
6. `nx migrate latest` → `nx migrate --run-migrations` (Nx workspace esetén).
7. Deprecation warningok a build/log kimenetből – ezek a következő verzió hibái.
8. `ng lint && ng test && ng build && e2e` zöld.
9. Bundle méret és Core Web Vitals összevetése a frissítés előttivel.
10. Merge, majd a következő főverzió.

### Modernizálási sorrend meglévő kódbázison
1. **Strict TypeScript + strictTemplates** – a legtöbb rejtett hibát ez hozza felszínre.
2. **Standalone** migráció (`ng generate @angular/core:standalone`).
3. **Control flow** migráció `@if`/`@for`/`@switch`-re (`ng generate @angular/core:control-flow`).
4. **inject()** migráció konstruktor-injektálás helyett.
5. **Signal inputs/outputs/queries** (`ng generate @angular/core:signals`).
6. **OnPush mindenhol**, majd állapot signalokra.
7. **Zoneless** (`ng generate @angular/core:zoneless`) – utolsó lépés, mert a 3rd party libek is érintettek.
8. **Vertikális szeletek + Sheriff/Nx boundary lintelés** bevezetése.
9. **Signal store** a feature state-re, `resource` az adatbetöltésre.
10. **Vitest** migráció, majd az E2E lefedettség rendezése.

### Új projekt (2026) alapkonfiguráció
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions(), withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideHttpClient(withFetch(), withInterceptors([correlationIdInterceptor, authInterceptor, errorInterceptor])),
    provideClientHydration(withEventReplay()),
    provideAppInitializer(() => inject(ConfigService).load()),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
```
Ehhez: `strict: true` + `strictTemplates`, ESLint flat config + template accessibility + Sheriff, Prettier + Husky + commitlint, Vitest + Playwright, vertikális domain-struktúra, design tokenek CSS custom property-ként, bundle budget CI-ben.

### Amit ne vezessünk be reflexből
Micro-frontend egy csapatnál, globális NgRx Store lokális UI állapotra, Events API egyetlen store-hoz, generikus „minden esetre” komponens-absztrakció, `effect()` állapotterjesztésre. Mindegyik ugyanaz a hiba: a megoldás komplexitása meghaladja a problémáét.

## 160. Secondary Routing – Named Outlets and Auxiliary Routes (v2+ · withComponentInputBinding v16+ · routerOutletData v19+) https://angular.dev/guide/routing/show-routes-with-outlets {#secondary-routing-named-outletek-es-auxiliary-route-ok-v2-withcomponentinputbinding-v16-routeroutletdata-v19}
A **secondary (auxiliary) routing** azt jelenti, hogy egy nézeten **egyszerre több, egymástól független** route aktív. A `<router-outlet>` alapból névtelen (`primary`), de több, **névvel ellátott** outlet is elhelyezhető ugyanabban a sablonban, és mindegyik saját route-ot rendereli, saját életciklussal és saját URL-szegmenssel.

Tipikus használat: állandóan látható oldalsáv/chat panel, részletező panel a lista mellett, modális dialógus routolható URL-lel (deep linkelhető modal), több egymás melletti widget-terület.

### Outletek definiálása
```html
<!-- app.html -->
<router-outlet />                        <!-- primary -->
<router-outlet name="sidebar" />
<router-outlet name="modal" />
```

### Route-ok hozzárendelése az outlethez
```ts
export const routes: Routes = [
  { path: 'flights', component: FlightSearch },                       // primary
  { path: 'help', component: HelpPanel, outlet: 'sidebar' },
  { path: 'filters', component: FilterPanel, outlet: 'sidebar' },
  { path: 'flight/:id', component: FlightDialog, outlet: 'modal' },
];
```
Az `outlet` property nélkül a route a primary outletbe kerül.

### Navigáció – az URL szintaxisa
A secondary route-ok az URL-ben **zárójeles blokkban** jelennek meg, `outletName:path` formában:

```
/flights(sidebar:help)
/flights(sidebar:filters//modal:flight/42)
```
A `//` több párhuzamos secondary outlet elválasztója.

```ts
// megnyitás
this.router.navigate([{ outlets: { sidebar: ['help'] } }]);

// primary és secondary egyszerre
this.router.navigate([{ outlets: { primary: ['flights'], sidebar: ['filters'] } }]);

// bezárás: null az outletre
this.router.navigate([{ outlets: { sidebar: null } }]);
```
```html
<a [routerLink]="[{ outlets: { sidebar: ['help'] } }]">Súgó</a>
<a [routerLink]="[{ outlets: { sidebar: null } }]">Súgó bezárása</a>
```

### Relatív navigáció secondary outletben
```ts
this.router.navigate([{ outlets: { modal: ['flight', id] } }], {
  relativeTo: this.route,          // a jelenlegi route-hoz képest
  queryParamsHandling: 'preserve', // a query paraméterek megmaradnak
});
```

### Routolható modal minta (deep linkelhető dialógus)
```ts
{
  path: 'flight/:id',
  outlet: 'modal',
  component: FlightDialog,
  // a modal bezárása = navigáció outlets: { modal: null }-lal
}
```
Előnye a `MatDialog`/CDK Dialog megnyitásával szemben: a dialógus állapota az URL-ben van, tehát megosztható, bookmarkolható, a böngésző vissza gombja bezárja, és SSR-nél szerveroldalon is renderelhető.

### Amire figyelni kell
- **Guardok és resolverek** outletenként külön futnak: a secondary route saját `canActivate`/`resolve` láncot kap.
- **Lazy loading** működik secondary outleten is (`loadChildren`), de a chunk csak az outlet aktiválásakor töltődik.
- Az URL zárójeles formája **nem szép**: publikus, SEO-fontos oldalakon a secondary outlet nem ideális; belső alkalmazásokban viszont kifejezetten hasznos.
- A `RouterLinkActive` secondary outletnél is működik, de az `exact` illesztésnél a teljes URL-t (a zárójeles blokkot is) figyeli.
- Ne használjunk sok párhuzamos outletet: 1–2 secondary outlet fölött az URL és a state kezelése nehezen követhetővé válik – ilyenkor a state-et inkább store-ban tartjuk.
- `withComponentInputBinding()` (v16+) a secondary outlet route paramétereit is inputként adja a komponensnek.
- A `ROUTER_OUTLET_DATA` (v19+) és a `[routerOutletData]` névvel ellátott outletnél is használható.

## 161. Route Patterns in Practice – Wildcard, Redirect, UrlMatcher, Resolve (v2+ · canMatch v14.2+ · functional resolver v15+ · függvény-redirect v18+) https://angular.dev/guide/routing/define-routes {#route-mintak-a-gyakorlatban-wildcard-redirect-urlmatcher-resolve-v2-canmatch-v14-2-funkcionalis-resolver-v15-fuggveny-redirect-v18}
### Route sorrend és wildcard
A router **fentről lefelé, az első illeszkedésig** vizsgálja a route-okat, ezért a sorrend jelentőséggel bír. A wildcard mindig utolsó:
```ts
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flights' },
  { path: 'flights', loadChildren: () => import('./flights/flights.routes') },
  { path: 'not-found', component: NotFound },
  { path: '**', component: NotFound },      // wildcard: minden nem illeszkedő URL
];
```
- `pathMatch: 'full'` – a **teljes** URL-nek egyeznie kell. Üres path + redirect esetén kötelező, különben végtelen ciklus keletkezik.
- `pathMatch: 'prefix'` (default) – elég, ha az URL a path-tal kezdődik.
- A `**` a lazy-loadolt gyerek route-okon belül is használható a feature-specifikus 404-hez.

### Funkcionális redirect (v18+)
```ts
{
  path: 'legacy/:id',
  redirectTo: (info) => `/flights/${info.params['id']}`,
},
{
  path: 'dashboard',
  redirectTo: () => (inject(AuthStore).isAdmin() ? '/admin' : '/home'),
},
```
Aszinkron redirect (v20+): a függvény `Promise`/`Observable`-t is visszaadhat.

### RedirectCommand guardból (v18+)
```ts
{
  path: 'admin',
  component: AdminPage,
  canActivate: [() => {
    const router = inject(Router);
    return inject(AuthStore).isAdmin()
      ? true
      : new RedirectCommand(router.parseUrl('/forbidden'), { skipLocationChange: true });
  }],
}
```

### Egyedi UrlMatcher
Ha a path nem írható le sztringgel (pl. változó szegmensszám, regex-illesztés):
```ts
export function versionMatcher(segments: UrlSegment[]): UrlMatchResult | null {
  if (segments.length >= 1 && /^v\d+$/.test(segments[0].path)) {
    return { consumed: [segments[0]], posParams: { version: segments[0] } };
  }
  return null;
}

{ matcher: versionMatcher, component: DocsPage }
```

### canMatch – feltételes route-illesztés (v14.2+)
A `canMatch` a `canActivate`-tel szemben **nem tiltja**, hanem „átlépi” a route-ot, így a router továbbmegy a következő illeszkedésre. Ez a feature-flag és A/B kiszolgálás helyes eszköze:
```ts
{ path: 'checkout', component: NewCheckout, canMatch: [() => inject(Flags).newCheckout()] },
{ path: 'checkout', component: LegacyCheckout },
```

### Resolve több szolgáltatásból
Funkcionális resolver (v15+), több adat párhuzamos betöltésével:
```ts
export const flightPageResolver: ResolveFn<FlightPageData> = (route) => {
  const flights = inject(FlightClient);
  const airports = inject(AirportClient);
  const id = Number(route.paramMap.get('id'));
  return forkJoin({
    flight: flights.findById(id),
    airports: airports.findAll(),
  });
};

{ path: 'flight/:id', component: FlightDetail, resolve: { data: flightPageResolver } }
```
```ts
// olvasás – withComponentInputBinding() mellett inputként is megkapható
readonly data = input.required<FlightPageData>();
```
Külön kulcsokra bontva a router **párhuzamosan** futtatja őket, és csak akkor navigál, ha mindegyik befejeződött:
```ts
resolve: { flight: flightResolver, airports: airportsResolver }
```

**Mikor ne használjunk resolvert:** ha a betöltés lassú, a resolver a teljes navigációt blokkolja, és a felhasználó „megakadt” appot lát. Ilyenkor navigáljunk azonnal, és a komponensben `resource()`/`httpResource()` töltse be az adatot skeleton állapottal. A resolver ott indokolt, ahol az adat nélkül a route értelmezhetetlen (pl. jogosultsági kontextus), vagy ahol SEO miatt kell a szerveroldali betöltés.

### canDeactivate – nem mentett módosítás védelme
```ts
export interface HasUnsavedChanges { hasUnsavedChanges(): boolean; }

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) =>
  !component.hasUnsavedChanges() || confirm('Nem mentett módosítások vannak. Biztosan elnavigálsz?');

{ path: 'flight/:id/edit', component: FlightEdit, canDeactivate: [unsavedChangesGuard] }
```
- A guard **első paramétere a komponenspéldány** – így közvetlenül kérdezhető az űrlap állapota (`form().dirty()`).
- A guardot arra a route-ra kell tenni, **amelyet elhagyunk**. Ha egy egész feature-t védünk, a szülő route-ra tesszük, és a `canDeactivateChild` helyett a gyerekek közötti navigációra is figyeljünk (a szülő guard nem fut le gyerekek közötti váltásnál).
- Böngésző-szintű elnavigálásra (tab bezárás, reload) külön `beforeunload` kezelő kell – a router guard ott nem fut.

## 162. Preloading Strategies and Network-Aware Preloading (v2+ · withPreloading v15+ · @defer prefetch v17+) https://angular.dev/guide/routing/loading-strategies {#preloading-strategiak-es-halozat-tudatos-preloading-v2-withpreloading-v15-defer-prefetch-v17}
A lazy loading csökkenti a kezdeti bundle-t, de a felhasználó az első navigációkor várni fog a chunk letöltésére. A **preloading** ezt a késést tolja el: a kezdeti render után, háttérben tölti le a chunkokat.

### Beépített stratégiák
```ts
import { provideRouter, NoPreloading, PreloadAllModules } from '@angular/router';

provideRouter(routes, withPreloading(PreloadAllModules));
```
- **`NoPreloading`** – az **default**: nincs előtöltés, minden chunk az első navigációkor jön.
- **`PreloadAllModules`** – az összes lazy route chunkja letöltődik a kezdeti render után.

### Route-onkénti kikapcsolás
```ts
{ path: 'admin', loadChildren: () => import('./admin/admin.routes'), data: { preload: false } }
```

### Egyedi stratégia – szelektív preload
```ts
@Injectable({ providedIn: 'root' })
export class SelectivePreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data?.['preload'] ? load() : of(null);
  }
}

provideRouter(routes, withPreloading(SelectivePreloading));
```

### Hálózat-tudatos (network-aware) preloading
A `navigator.connection` (Network Information API) alapján csak jó kapcsolaton és nem takarékos módban töltünk előre – így mobilhálózaton nem fogyasztjuk a felhasználó adatforgalmát:

```ts
@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.hasGoodConnection() ? load() : of(null);
  }

  private hasGoodConnection(): boolean {
    const conn = (navigator as any).connection;
    if (!conn) return true;                       // nincs API → ne büntessük a felhasználót
    if (conn.saveData) return false;              // adattakarékos mód
    return !['slow-2g', '2g', '3g'].includes(conn.effectiveType);
  }
}
```
Kombinálható a `data: { preload: true }` jelöléssel: csak a fontos route-ok, és csak jó hálózaton.

### Kapcsolódó technikák
- **`@defer (prefetch on hover)`** (v17+) – komponens-szintű előtöltés interakció-jelzésre. Finomabb granularitás, mint a route-preload.
- **`<link rel="prefetch">`** – a build által generált chunkok kézi előtöltése; SSR-nél a szerver injektálhatja.
- **`quicklink`-jellegű minta** – csak a viewportban látható linkek célját töltjük elő (`IntersectionObserver` + `router.getConfig()`).
- **`withEnabledBlockingInitialNavigation()`** – SSR-nél az első navigáció blokkoló, hogy a szerver a végleges HTML-t adja.

**Mérés nélkül ne optimalizáljunk:** a `PreloadAllModules` nagy alkalmazásban több megabájt háttérforgalmat jelenthet, ami mobilon rontja az élményt. Előbb nézzük meg a valós navigációs útvonalakat, és csak a leggyakoribb 2–3 feature-t töltsük elő.

## 163. ngModelGroup and Reactive Forms Alternatives (v2+ · Typed Forms v14+ · Signal Forms v21+) https://angular.dev/guide/forms/reactive-forms {#ngmodelgroup-es-reactive-forms-alternativai-v2-typed-forms-v14-signal-forms-v21}
### Mi az `ngModelGroup` (template-driven)
Az `ngModelGroup` a **template-driven** űrlapokban csoportosít több `ngModel`-t egy logikai egységbe, saját érvényességi és „touched/dirty” állapottal. A csoport a `form.value` objektumban **beágyazott objektumként** jelenik meg.

```html
<form #f="ngForm" (ngSubmit)="save(f.value)" novalidate>
  <input name="email" [(ngModel)]="model.email" required email>

  <fieldset ngModelGroup="address" #addr="ngModelGroup">
    <input name="city" [(ngModel)]="model.address.city" required>
    <input name="zip" [(ngModel)]="model.address.zip" required>
    @if (addr.invalid && addr.touched) {
      <span>A cím kitöltése kötelező.</span>
    }
  </fieldset>

  <button type="submit" [disabled]="f.invalid">Mentés</button>
</form>
```
`f.value` alakja:
```json
{ "email": "a@b.hu", "address": { "city": "Budapest", "zip": "1011" } }
```
A `novalidate` attribútum kikapcsolja a böngésző natív validációs buborékjait, hogy az Angular (illetve a saját hibamegjelenítésünk) vegye át a szerepet.

### Alternatíva Reactive Forms esetén: `FormGroup` mint alcsoport
A `ngModelGroup` közvetlen megfelelője a **beágyazott `FormGroup`** + `formGroupName`:

```ts
readonly form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  address: this.fb.nonNullable.group({
    city: ['', Validators.required],
    zip: ['', Validators.required],
  }),
});
```
```html
<form [formGroup]="form" (ngSubmit)="save()" novalidate>
  <input formControlName="email">

  <fieldset formGroupName="address">
    <input formControlName="city">
    <input formControlName="zip">
    @if (form.controls.address.invalid && form.controls.address.touched) {
      <span>A cím kitöltése kötelező.</span>
    }
  </fieldset>
</form>
```

### Megfelelési táblázat
| Template-driven | Reactive Forms | Signal Forms (v21+) |
| --- | --- | --- |
| `ngForm` | `FormGroup` + `[formGroup]` | `form(modelSignal, schema)` |
| `ngModel` | `FormControl` + `formControlName` | `[field]="f.email"` |
| `ngModelGroup="address"` | `FormGroup` + `formGroupName="address"` | a modell beágyazott objektuma (`f.address.city`) |
| — (nincs) | `FormArray` + `formArrayName` | a modell tömbje (`@for (x of f.items; track $index)`) |
| `#addr="ngModelGroup"` | `form.controls.address` | `f.address()` metaadatai |
| `[ngModelOptions]="{updateOn:'blur'}"` | `{ updateOn: 'blur' }` a control opciójában | séma-szintű `updateOn`/debounce |

### `formGroupName` vs `[formGroup]`
- `formGroupName="address"` – a **szülő** `FormGroup`-on belüli alcsoportra hivatkozik nevesítve. Csak `[formGroup]`-on belül működik.
- `[formGroup]="subForm"` – önálló csoportra köt, akkor is, ha nincs szülő. Gyerekkomponensben átadott alcsoportnál ezt használjuk.

### Alcsoport szintű validáció (cross-field)
Ez az egyik legfontosabb érv a `FormGroup` mellett: a csoportra tett validátor egyszerre látja a tagjait.
```ts
address: this.fb.nonNullable.group(
  { city: [''], zip: [''] },
  { validators: [cityZipMatchValidator()] },
);
```

### Alcsoport kiszervezése gyerekkomponensbe
```ts
// AddressForm komponens
readonly group = input.required<FormGroup<AddressFormModel>>();
```
```html
<app-address-form [group]="form.controls.address" />
<!-- a gyerekben -->
<fieldset [formGroup]="group()">
  <input formControlName="city">
</fieldset>
```
Ez egyszerűbb, mint minden alcsoportra `ControlValueAccessor`-t írni, és megőrzi a típusokat.

### Mikor melyik űrlap-megközelítés
- **Template-driven** (`ngModel`, `ngModelGroup`): egyszerű, rövid űrlap, kevés dinamikus szabály. Kevesebb kód, de a logika a sablonban van, nehezebben tesztelhető, és típusbiztonsága gyengébb.
- **Reactive Forms**: dinamikus mezők, cross-field validáció, tesztelhetőség, `FormArray`. Ez az érett választás v14–v20 között (lásd a Typed Forms szekciót).
- **Signal Forms** (v21+ experimental, v22-ben bővült): a modell egy signal, a szabályok séma; ez a jövőbeli irány. Fokozatos átállásra a `SignalFormControl` a híd.

## 164. ControlValueAccessor – Custom Form Control (v2+ · FormValueControl v21+) https://angular.dev/guide/forms/signals/custom-controls {#controlvalueaccessor-sajat-urlapvezerlo-v2-formvaluecontrol-v21}
### Mire való – mi a lényege
Az Angular űrlap-API (`FormControl`, `ngModel`) csak azt tudja, hogy egy vezérlőnek **van értéke, van érvényessége és van „érintve/módosítva” állapota**. Azt viszont nem tudja, hogyan jelenik meg ez az érték: egy `<input>`-nál a `value` property, egy checkboxnál a `checked`, egy saját csillagos értékelésnél öt gomb kitöltöttsége.

A `ControlValueAccessor` ez a **fordító réteg (adapter) a forms-modell és a konkrét megjelenítés között**. Két irányban dolgozik:

```
FormControl.setValue()  ──►  writeValue()          ──►  a komponens megjeleníti
felhasználói interakció ──►  onChange() / onTouched() ──►  FormControl frissül
```

Az Angular a beépített elemekre saját CVA-kat szállít (`DefaultValueAccessor` az inputra, `CheckboxControlValueAccessor`, `SelectControlValueAccessor`, `RadioControlValueAccessor`, `NumberValueAccessor`, `RangeValueAccessor`). Ezért működik a `formControlName` egy sima `<input>`-on „varázslat nélkül”. Amikor **saját komponenst** akarunk ugyanígy használni, nekünk kell megírni ezt az adaptert – ezt regisztráljuk az `NG_VALUE_ACCESSOR` multi-provider tokenen.

**Miért érdemes CVA-t írni ahelyett, hogy a komponens `@Input() value` + `@Output() valueChange` párral dolgozik:**
- a komponens **bárhol** használható `formControlName`-mel, `[formControl]`-lal és `[(ngModel)]`-lel egyaránt,
- automatikusan megkapja a validációt, a `touched`/`dirty` állapotot és a `ng-invalid` stb. CSS osztályokat,
- a `form.disable()` / `form.reset()` / `patchValue()` ingyen működik rá,
- a szülő űrlapnak nem kell tudnia a komponens belső szerkezetéről.

### A négy metódus
| Metódus | Ki hívja | Feladat |
| --- | --- | --- |
| `writeValue(value)` | Angular → komponens | a modellérték megjelenítése |
| `registerOnChange(fn)` | Angular → komponens | a komponens ezzel jelzi az új értéket |
| `registerOnTouched(fn)` | Angular → komponens | a komponens ezzel jelzi az „érintve” állapotot |
| `setDisabledState(isDisabled)` | Angular → komponens | letiltás kezelése (optional) |

### Klasszikus változat (v2–v16) – decoratorok, `ChangeDetectorRef`
Ezzel a formával találkozunk a legtöbb régi kódbázisban. Jellemzői: sima mezők signal helyett, konstruktor-injektálás, és OnPush mellett **kézi** `markForCheck()`, mert a `writeValue()` az Angular forms API-ból hívódik, nem a komponens saját eseményéből.

```ts
import { Component, Input, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true },
  ],
  template: `
    <button *ngFor="let star of stars"
            type="button"
            [disabled]="isDisabled"
            (click)="select(star)"
            (blur)="onTouched()">
      {{ star <= value ? '★' : '☆' }}
    </button>
  `,
})
export class RatingComponent implements ControlValueAccessor {
  @Input() max = 5;

  stars = [1, 2, 3, 4, 5];
  value = 0;
  isDisabled = false;

  private onChange: (v: number) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private readonly cdr: ChangeDetectorRef) {}

  writeValue(v: number | null): void {
    this.value = v ?? 0;
    this.cdr.markForCheck();          // OnPush mellett KÖTELEZŐ, különben nem frissül a nézet
  }
  registerOnChange(fn: (v: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.cdr.markForCheck();
  }

  select(star: number): void {
    if (this.isDisabled) return;
    this.value = star;
    this.onChange(star);              // értesítjük a FormControl-t
    this.onTouched();
  }
}
```
Ha `NgModule`-alapú a projekt, a komponenst deklarálni és exportálni kell abban a modulban, amit az űrlapot tartalmazó modul importál.

### Modern változat (v17+) – signalok, `inject()`, standalone
Ugyanaz a szerződés, de: signal állapot (nincs `markForCheck()`), `inject()` konstruktor helyett, beépített control flow, standalone komponens.

```ts
@Component({
  selector: 'app-rating',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
  template: `
    @for (star of stars; track star) {
      <button type="button" [disabled]="isDisabled()"
              (click)="select(star)" (blur)="onTouched()">
        {{ star <= value() ? '★' : '☆' }}
      </button>
    }
  `,
})
export class RatingComponent implements ControlValueAccessor {
  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly value = signal(0);
  protected readonly isDisabled = signal(false);

  private onChange: (v: number) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(v: number | null): void { this.value.set(v ?? 0); }
  registerOnChange(fn: (v: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.isDisabled.set(isDisabled); }

  protected select(star: number): void {
    this.value.set(star);
    this.onChange(star);
    this.onTouched();
  }
}
```
```html
<app-rating formControlName="rating" />
<app-rating [(ngModel)]="rating" />
```

### `forwardRef` – miért kell
A `providers` tömb a decorator kiértékelésekor fut le, amikor az osztály még nincs definiálva. A `forwardRef(() => RatingComponent)` késlelteti a hivatkozás feloldását. A `useExisting` (nem `useClass`) azért kell, hogy a **komponens saját példánya** legyen a value accessor, ne egy másik objektum.

### Validáció a komponensen belül
```ts
providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true },
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => RatingComponent), multi: true },
]
// ...
validate(control: AbstractControl): ValidationErrors | null {
  return control.value > 0 ? null : { ratingRequired: true };
}
```

### Gyakori hibák
- `onChange` hívása `writeValue`-ból → végtelen ciklus.
- `registerOnTouched` mellőzése → a `touched` állapot sosem lesz igaz, a hibaüzenetek nem jelennek meg.
- `setDisabledState` mellőzése → a `form.disable()` nem hat a komponensre.
- OnPush stratégia mellett `writeValue`-ban signal helyett sima mező írása → nem frissül a nézet (signallal ez automatikusan megoldott).

### `forwardRef` elkerülése – `NgControl` self-injektálás
Az `NG_VALUE_ACCESSOR` + `forwardRef` kör-hivatkozást hoz létre (a komponens injektálja azt a tokent, amit ő maga szolgáltat), ami megnehezíti a validátorok injektálását. Alternatíva: **ne** szolgáltassuk a tokent, hanem kérjük be a saját `NgControl`-t, és mi állítsuk be magunkat value accessorként.

```ts
@Component({ selector: 'app-rating', /* nincs providers! */ })
export class RatingComponent implements ControlValueAccessor {
  private readonly ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  /** így a komponens el is éri a saját FormControl-ját (errors, touched, disabled) */
  protected readonly control = computed(() => this.ngControl?.control ?? null);

  writeValue(v: number | null): void { /* ... */ }
  registerOnChange(fn: (v: number) => void): void { /* ... */ }
  registerOnTouched(fn: () => void): void { /* ... */ }
}
```
Előnye: a komponens **belülről** megjelenítheti a saját hibáit (`this.ngControl.control?.errors`), és nem alakul ki cirkuláris DI. Hátránya: kicsit „mágikusabb”, és a komponens csak reaktív/ngModel kontextusban használható (önállóan nem).

### Melyik változatot mikor
| | Klasszikus CVA (v2–v16) | Modern CVA (v17+) | Signal Forms `FormValueControl` (v21+) |
| --- | --- | --- | --- |
| Regisztráció | `NG_VALUE_ACCESSOR` + `forwardRef` | ugyanaz, vagy `NgControl` self-injektálás | nincs – elég az interfész |
| Állapot | mező + `markForCheck()` | `signal()` | `model()` |
| Callbackek | 4 metódus | 4 metódus | nincs |
| Letiltás | `setDisabledState()` | `setDisabledState()` | `input(false)` / `disabled` metaadat |
| Validáció | `NG_VALIDATORS` + `validate()` | ugyanaz | séma (`schema()`, `validateStandardSchema()`) |
| Kód mennyisége | ~50 sor | ~30 sor | ~4 sor |
| Mikor használjuk | meglévő kódbázis, v16 vagy régebbi | v17–v20 projekt, Reactive Forms | v21+ új kód, Signal Forms |

Migrációs sorrend: klasszikus → modern CVA (mechanikus átírás, a szerződés nem változik) → Signal Forms, ahol az űrlap már `form()`-alapú. Átmeneti időszakban a `SignalFormControl` (v22+) hidat ad: Signal Forms mezőt tehetünk egy meglévő `FormGroup`-ba.

### Signal Forms megfelelője (v21+)
Signal Formsban ez a boilerplate megszűnik: a `FormValueControl` interfészt egyetlen `model()` signal elégíti ki.
```ts
export class RatingControl implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
}
```
```html
<app-rating [field]="flightForm.rating" />
```
Checkbox-jellegű vezérlőkhöz `FormCheckboxControl`. Nincs `NG_VALUE_ACCESSOR`, nincs `forwardRef`, nincs négy callback.

## 165. providers vs viewProviders (v2+ · route-szintű providers v14+) https://angular.dev/guide/di/dependency-injection-providers {#providers-vs-viewproviders-v2-route-szintu-providers-v14}
Mindkettő a komponens szintjén regisztrál providert, a különbség az, hogy **kik látják**:

| | `providers` | `viewProviders` |
| --- | --- | --- |
| A komponens saját sablonja (view children) | ✅ | ✅ |
| A `<ng-content>`-en beprojektált tartalom (content children) | ✅ | ❌ |

```ts
@Component({
  selector: 'app-panel',
  template: `
    <app-view-child />        <!-- látja mindkettőt -->
    <ng-content />            <!-- csak a providers-t látja -->
  `,
  providers: [SharedService],
  viewProviders: [InternalService],
})
export class PanelComponent {}
```
```html
<app-panel>
  <app-content-child />       <!-- InternalService-t NEM kapja meg -->
</app-panel>
```

### Mire jó ez a gyakorlatban
A `viewProviders` egy komponens **belső** implementációs részleteit rejti el: a beprojektált, kívülről érkező tartalom nem tud véletlenül a belső szolgáltatásra kötni, tehát a komponens API-ja szűkebb és stabilabb marad. Ez az Angular Material összetett komponenseinek (accordion, tabs, table) egyik bevált technikája.

### Injector-hierarchia röviden
1. **Element (node) injector** – komponensen/direktíván megadott `providers` / `viewProviders`; a DOM-fát követi felfelé.
2. **Environment injector** – `bootstrapApplication` providerei, `providedIn: 'root'`, route-szintű `providers`.
3. `@Self()`, `@SkipSelf()`, `@Host()` (illetve `inject(..., { self, skipSelf, host })`) módosítja a keresés menetét.
4. Route-szintű `providers` (v14+) feature-lokális példányt ad, `withExperimentalAutoCleanupInjectors()` (v22) mellett automatikus felszabadítással.

### Komponens-lokális szolgáltatás minta
```ts
@Component({ selector: 'app-users-page', providers: [UsersPageStore] })
export class UsersPage {}
```
Így a store példánya a komponenssel együtt jön létre és semmisül meg – nincs állapot-átszivárgás két nézetlátogatás között. Globális állapotra `providedIn: 'root'`, feature-lokálisra route-szintű `providers`, nézet-lokálisra komponens `providers`.

## 166. Pipes in Depth – Pure vs Impure, Custom Pipe, Performance (v2+ · standalone pipe v14+) https://angular.dev/guide/pipes {#pipe-ok-melyebben-pure-vs-impure-sajat-pipe-teljesitmeny-v2-standalone-pipe-v14}
### Pure pipe (default)
```ts
@Pipe({ name: 'initials' })            // pure: true a default
export class InitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name.split(' ').map((p) => p[0]).join('.');
  }
}
```
A `transform()` **csak akkor** fut újra, ha a bemenet **referenciája** változik. Ezért olcsó, és ezért nem érzékeli, ha egy tömbbe `push`-olunk (a referencia ugyanaz marad).

### Impure pipe
```ts
@Pipe({ name: 'filterActive', pure: false })
export class FilterActivePipe implements PipeTransform {
  transform(items: Item[]): Item[] { return items.filter((i) => i.active); }
}
```
Minden change detection ciklusban lefut. Nagy listán ez komoly teljesítményprobléma – **kerüljük**. Helyette:
- számított érték `computed()`-ben (signal-alapú kód),
- vagy a szűrt lista előállítása a komponensben/store-ban.

Az `AsyncPipe` szándékosan impure (feliratkozást kezel) – ez a kivétel, ami indokolt.

### Paraméterek és több argumentum
```ts
transform(value: number, currency = 'HUF', digits = 0): string { /* ... */ }
```
```html
{{ price | money:'EUR':2 }}
```

### `inject()` pipe-ban
```ts
@Pipe({ name: 'localDate' })
export class LocalDatePipe implements PipeTransform {
  private readonly locale = inject(LOCALE_ID);
  transform(value: Date | string): string {
    return new Intl.DateTimeFormat(this.locale).format(new Date(value));
  }
}
```

### `ngOnDestroy` pipe-ban
Impure, erőforrást használó pipe implementálhatja az `OnDestroy`-t (az `AsyncPipe` is ezt teszi a leiratkozáshoz).

### Standalone pipe használata (v14+ / v19-től default)
```ts
@Component({ imports: [InitialsPipe], /* ... */ })
```

### Beépített pipe-ok, amiket érdemes ismerni
`date`, `number`, `currency`, `percent`, `uppercase`/`lowercase`/`titlecase`, `slice`, `json`, `keyvalue`, `async`, `i18nPlural`, `i18nSelect`.

### Teljesítmény-ökölszabályok
- Pipe **helyett** ne hívjunk metódust a sablonban: `{{ format(x) }}` minden CD-ciklusban lefut, a pure pipe nem.
- Pipe-ot ne használjunk mellékhatásra (HTTP hívás, naplózás) – kiszámíthatatlan, hányszor fut le.
- Signal-alapú kódban a `computed()` sokszor jobb választás, mint egy pipe: memoizált, tesztelhető, és a típusa is látszik.
- `keyvalue` pipe rendezést végez – nagy objektumon drága; ha a sorrend nem érdekes, `Object.entries`-t adjunk át előre kiszámítva.

## 167. Practical Q&A Collection (v2–v22) {#gyakorlati-kerdes-valasz-gyujtemeny-v2-v22}
Rövid, napi munkában és interjún egyaránt visszatérő kérdések.

### Sablon és renderelés
**`[hidden]` vs `@if` / `*ngIf`** – a `[hidden]` csak CSS-szinten elrejt (`display: none`), az elem a DOM-ban marad, a komponens **él, a lifecycle és a subscription is fut**. Az `@if` eltávolítja a DOM-ból és megsemmisíti a komponenst. Drága komponensnél mindig `@if`; gyakori ki-be váltásnál a `[hidden]` (vagy CSS) gyorsabb, mert nincs újraépítés.

**`@for` `track` (korábban `trackBy`)** – az elemek azonosítása a `track` kifejezéssel történik; enélkül minden változásnál teljes újrarenderelés. Stabil, egyedi értéket adjunk meg (`track item.id`), ne `$index`-et, ha a lista sorrendje változhat.

**`ng-container` vs `ng-template` vs `ng-content`** – `ng-container`: csoportosít, nem renderel elemet a DOM-ba. `ng-template`: definiál, de nem renderel, míg valaki (`ngTemplateOutlet`, strukturális direktíva) meg nem jeleníti. `ng-content`: a szülőtől érkező tartalom beszúrási pontja (projection).

**`ngProjectAs`** – egy elem úgy „viselkedjen”, mintha más szelektorra illeszkedne az `ng-content select="..."`-nál.

**`ngNonBindable`** – kikapcsolja az Angular kiértékelést egy részfán (pl. kódrészletek megjelenítéséhez).

### Komponensek és DI
**`@Input()` setter vs getter** – setter: ha az érték megérkezésekor tenni kell valamit (átalakítás, mellékhatás). Getter: ha kifelé számított formában adjuk. Modern alternatíva: `input(..., { transform })` és `computed()` – v17+.

**`@ViewChild` vs `@ContentChild`** – a `ViewChild` a komponens **saját** sablonjában keres, a `ContentChild` a beprojektált tartalomban. Signal megfelelőik: `viewChild()`, `contentChild()` (v17.2+).

**Szolgáltatás programozott injektálása** – `inject(MyService)` injection contextben, azon kívül `injector.get(MyService)` egy eltárolt `EnvironmentInjector`/`Injector` példányon, vagy `runInInjectionContext(injector, () => inject(MyService))` (v16+).

**`provider` fogalma** – recept arra, hogyan állítsa elő a DI a tokenhez tartozó értéket: `useClass`, `useValue`, `useFactory`, `useExisting`, `multi: true`.

### Űrlapok
**`NgControl` status classes** – `ng-valid`/`ng-invalid`, `ng-pending`, `ng-pristine`/`ng-dirty`, `ng-touched`/`ng-untouched`, `ng-submitted`. Hibát csak `dirty` vagy `touched` állapotban mutassunk, különben az űrlap azonnal „pirosan” nyílik.

**`novalidate` a `<form>`-on** – kikapcsolja a böngésző natív validációs UI-ját, hogy az alkalmazás egységes hibamegjelenítést adhasson.

**`FormBuilder`** – rövidebb szintaxis `FormGroup`/`FormControl` létrehozására; `fb.nonNullable` (v14+) esetén a kontrollok értéke nem lehet `null`.

**`value` vs `getRawValue()`** – a `value` kihagyja a letiltott mezőket, a `getRawValue()` tartalmazza. Mentéshez általában a `getRawValue()` a helyes.

### JavaScript / TypeScript
**Arrow function vs normál függvény** – az arrow function nem kap saját `this`-t (lexikálisan zárja be a külső `this`-t), nincs `arguments` objektuma, nem használható konstruktorként, és nem hoistolódik. Ezért callbackben és osztálymező-metódusban arrow, prototípus-metódusként normál függvény.

**`==` vs `===`** – az `==` típuskonverziót végez; kódban használjunk mindig `===`-t (kivétel: `== null` szándékosan `null` és `undefined` együtt).

**`unknown` vs `any`** – az `unknown`-nal semmit nem tehetünk típusszűkítés nélkül, ezért biztonságos külső adatokra; az `any` kikapcsolja az ellenőrzést.

### Routing
**`RouterOutlet`** – az a hely a sablonban, ahová a router az aktivált komponenst rendereli. Névvel ellátva secondary outlet (lásd a Secondary Routing szekciót).

**Guardok hívási sorrendje** – tipikus leave → enter: `canDeactivate` (jelenlegi route) → `canMatch` → `canLoad` (deprecated) → `canActivateChild` → `canActivate` → `resolve`.

**Wildcard route** – `path: '**'`, a nem illeszkedő URL-ek elkapása (404 oldal). Mindig a route-lista végén.

### Egyéb
**Dinamikus script beszúrása** – ne `document.write`-tal:
```ts
private readonly doc = inject(DOCUMENT);
loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = this.doc.createElement('script');
    s.src = src; s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Script betöltés sikertelen: ${src}`));
    this.doc.body.appendChild(s);
  });
}
```
SSR-nél a `DOCUMENT` token miatt szerveren nem hasal el, de a hívást tegyük `afterNextRender()`-be.

**`ngDoBootstrap()`** – az `NgModule` metódusa manuális bootstraphez (pl. Angular Elements, több root komponens). **Nem** komponens lifecycle hook. Standalone alkalmazásban a `bootstrapApplication` / `createApplication` váltja ki.

**Yarn / pnpm vs npm** – mindhárom lockfile-lal determinisztikus telepítést ad; a pnpm content-addressable store-ral spórol lemezt és gyorsabb monorepóban. Egy projektben **egy** package managert használjunk (a kettős lockfile a leggyakoribb CI-hibaforrás).

## 168. Angular Feature Index by Version (v14–v22) (v14–v22) https://angular.dev/reference/releases {#angular-feature-index-verzio-szerint-v14-v22-v14-v22}
Gyors kereső: melyik funkció melyik verzióban jelent meg. A „(dev preview)” jelölés fejlesztői előnézetet jelent – éles használat előtt érdemes a stable verziót megvárni.

### v14 (2022. június)
Standalone API (dev preview) · Typed Forms · `inject()` függvény · CDK Dialog és Menu · route `title` + `TitleStrategy` · `ENVIRONMENT_INITIALIZER` · `protected` tagok bindingja sablonból · extended diagnostics · `NonNullableFormBuilder` · `canMatch` guard (v14.2) · route-szintű `providers`

### v15 (2022. november)
Standalone API (stable) · Directive Composition API (`hostDirectives`) · `NgOptimizedImage` (stable) · CDK Listbox · functional guards és resolverek · MDC-alapú Material komponensek · jobb stack trace-ek · auto-import a language service-ben

### v16 (2023. május)
Signals (dev preview) · SSR hydration (dev preview) · Vite-alapú dev szerver · `input.required` / kötelező inputok · input transform függvény · Router data input bindings (`withComponentInputBinding`) · `DestroyRef` + `takeUntilDestroyed` · self-closing tagek · `runInInjectionContext` · `provideEnvironmentProviders`

### v17 (2023. november)
Signals (stable) · Signal inputs · új control flow `@if`/`@for`/`@switch` (dev preview) · `@defer` (dev preview) · `NgComponentOutlet` input binding · animation lazy loading · View Transitions · esbuild + Vite (stable) · SSR hydration (stable) · `afterRender` / `afterNextRender` · `viewChild()`/`contentChild()` signal query-k (v17.2)

### v18 (2024. május)
Hybrid (zoneless) change detection (experimental) · signal inputs (stable) · `model()` inputok · signal query-k (stable) · `output()` szintaxis · `ng-content` fallback tartalom · funkcionális route redirect · `RedirectCommand` · jobb hydration debug · új Observable-ök a formokban · Material 3 · Wiz-együttműködés

### v19 (2024. november)
`linkedSignal` (experimental) · Resource API (experimental) · `afterRenderEffect` (experimental) · `@let` template változó · inkrementális hydration (experimental) · server route konfiguráció (experimental) · `RouterOutlet` data input (`ROUTER_OUTLET_DATA`) · `RouterLink` fejlesztések · **komponensek alapból standalone** · strict standalone flag · initializer provider függvények (`provideAppInitializer`) · HMR `ng serve`-hez · új diagnosztikák

### v20 (2025. május)
`effect` / `linkedSignal` / `toSignal` stable · `*ngIf`/`*ngFor`/`*ngSwitch` deprecated (`@if`/`@for`/`@switch` az ajánlott) · `httpResource` (experimental) · `resource` `defaultValue` · dinamikus komponensek `bindings` és `directives` opcióval · aszinkron redirect függvény · **zoneless stable** (v20.2) · `animate.enter` / `animate.leave` (v20.2), `@angular/animations` deprecated · route-szintű render mód stable · inkrementális hydration stable · `ng.enableProfiling()` a Chrome DevToolsban · `typeCheckHostBindings` · Vitest (experimental) · `NgComponentOutlet` bővítések · i18n subPath

### v21 (2025. november)
új template kifejezések (spread, arrow function, `instanceof`) · több `HttpClient` konfiguráció · új `HttpResponse` property-k · lazy route betöltés injection contextben · `NgOptimizedImage` decoding támogatás · `TestBed` binding támogatás (`inputBinding`/`outputBinding`) · új animációs API · ARIA property binding (`[aria-label]`) · első signal-alapú Router API (`currentNavigation`, `lastSuccessfulNavigation`) · jobb szerveroldali bootstrap · **Signal Forms** (experimental) · **Vitest a default tesztfutó** · **Angular Aria** · MCP szerver · **resource snapshot / `resourceFromSnapshots` (v21.2)**

### v22 (2026)
új template kifejezések · többszörös switch case illesztés · route injector cleanup (experimental) · standalone `isActive()` függvény · Router-fejlesztések · image loader bővítések (`loaderParams`) · `provideStabilityDebugging()` · **OnPush a default change detection** (`ChangeDetectionStrategy.Eager` a régi mód neve) · **inkrementális hydration default** (`withNoIncrementalHydration()` kapcsolja ki) · resource cache SSR-hez (`TransferState`) · Signal Forms API frissítések · `SignalFormControl` · `@Service` decorator · `injectAsync` (lazy service injection) · `debounced()` signalokhoz · Web MCP eszközök (experimental) · AI agent skillek · `ng-reflect-*` attribútumok megszüntetése

### Fejlesztés alatt / bejelentett irány
Selectorless komponensek · streamed SSR · további signal integrációk · zone.js teljes kivezetése

### Verzió-támogatási ökölszabályok
- Egy Angular főverzió **18 hónap** támogatást kap (6 hónap aktív + 12 hónap LTS).
- **Sosem** lépünk át főverziót frissítéskor: v18 → v19 → v20, nem v18 → v20.
- A Node.js és TypeScript minimumverzió minden főverzióval emelkedik – frissítés előtt ellenőrizzük.
- Az `update.angular.dev` (korábban `update.angular.io`) generálja a verziópáronkénti lépéslistát.

## 169. Bundle Optimization – Main Chunk, Tree Shaking, Code-Level Decisions (v14+ · esbuild v16+ · @defer v17+) https://angular.dev/guide/performance {#bundle-optimalizalas-main-chunk-tree-shaking-kodszintu-dontesek-v14-esbuild-v16-defer-v17}
A kezdeti (initial) bundle mérete közvetlenül az LCP-t és a TTI-t határozza meg. A cél nem az „általában kisebb kód”, hanem az, hogy **az első képernyőhöz szükséges kód** legyen kicsi.

### 1. Először mérj
```bash
ng build --configuration production --stats-json
npx esbuild-visualizer --metadata dist/<app>/stats.json --open
# vagy
npx source-map-explorer dist/<app>/browser/*.js
```
A riport megmutatja, mely npm csomag és mely saját fájl mekkora részt foglal a main chunkból. Optimalizálás mérés nélkül általában rossz helyre irányul.

### 2. Budget, ami CI-ben törik
```json
// angular.json → architect.build.configurations.production
"budgets": [
  { "type": "initial", "maximumWarning": "400kB", "maximumError": "600kB" },
  { "type": "allScript", "maximumWarning": "1.2MB" },
  { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" }
]
```
A budget értéket a **jelenlegi** mérethez állítsuk be, kicsivel szűkebbre – így minden regresszió azonnal látszik, nem hónapok múlva.

### 3. Mi kerül a main chunkba – és hogyan vegyük ki
A main chunkba minden bekerül, amit a root komponens és a bootstrap **statikusan** elér. Tipikus túlsúly-okok és megoldásaik:

| Ok | Megoldás |
| --- | --- |
| minden route eagerly importálva | `loadComponent` / `loadChildren` dinamikus importtal |
| nagy komponens az első nézetben | `@defer (on viewport)` blokk (v17+) |
| nehéz könyvtár (chart, editor, PDF, moment) a root útvonalon | dinamikus `import()` a használat helyén, vagy `injectAsync()` (v22+) |
| barrel `index.ts` „mindent” exportál | közvetlen fájl-import, vagy `internal/` szeparáció (Sheriff barrel-less mód) |
| shared modul, ami mindent behúz | `shared` lib szétvágása apró, célzott libekre |
| animációk | `provideAnimationsAsync()` (v17+), vagy `animate.enter`/`animate.leave` + natív CSS |
| ikonkészlet teljes betöltése | csak a használt ikonok, inline SVG vagy sprite |
| polyfillek régi böngészőkhöz | `browserslist` szűkítése – az esbuild ez alapján dönt |

```ts
// route-szintű lazy loading – ez a legnagyobb egyszeri nyereség
export const routes: Routes = [
  { path: 'flights', loadChildren: () => import('./flights/flights.routes') },
  { path: 'admin', loadComponent: () => import('./admin/admin-page').then((m) => m.AdminPage) },
];
```
```ts
// könyvtár lazy betöltése a használat helyén
protected async exportPdf(): Promise<void> {
  const { jsPDF } = await import('jspdf');       // külön chunkba kerül
  new jsPDF().text('Hello', 10, 10).save('report.pdf');
}
```
```ts
// szolgáltatás lazy injektálása (v22+)
private readonly _heavy = injectAsync(() => import('./heavy.service').then((m) => m.HeavyService));
```

### 4. Tree shaking – miért fontos és mi rontja el
A tree shaking a nem használt exportok eltávolítása a bundle-ből. Nélküle egy 300 kB-os könyvtárból akkor is mind bekerül, ha egyetlen függvényt használunk.

**Feltételei:**
- **ESM import/export** – a `require()` és a CommonJS csomag nem shakelhető. Az Angular CLI külön figyelmeztet a CommonJS importokra (`allowedCommonJsDependencies` csak indokolt esetben).
- **Nincs top-level mellékhatás** – ha egy modul betöltéskor globálisan regisztrál valamit, a bundler nem meri kihagyni. A csomag `package.json`-jában a `"sideEffects": false` (vagy a mellékhatásos fájlok listája) mondja meg, hogy biztonságos eltávolítani.
- **Nincs re-export lánc, ami mindent behúz** – a mély barrel (`index.ts` → `index.ts` → …) sok bundlernél megakadályozza a pontos elemzést.

**Angular-specifikus tree shaking-eszközök:**
- `providedIn: 'root'` – a szolgáltatás csak akkor kerül a bundle-be, ha valaki injektálja (a régi `NgModule.providers` mindig bekerült).
- `provideXyz()` provider-függvények az `XyzModule` helyett – amit nem hívunk, nem kerül be.
- Funkcionális interceptorok/guardok osztályalapúak helyett.
- Standalone komponensek: az `imports` pontosan megmondja, mi kell – nincs „mindent behúzó” shared modul.
- `import { map } from 'rxjs'` (RxJS 7+ egyetlen belépési pont) – ne `rxjs/internal/...`.

**Amit kerülni kell:**
```ts
// ROSSZ: az egész könyvtár bekerül
import * as _ from 'lodash';
import moment from 'moment';               // nem tree-shakeable, nagy locale-készlet

// JÓ
import { debounce } from 'lodash-es';      // ESM build, per-függvény shakelhető
// vagy egyáltalán nem kell külső lib:
const fmt = new Intl.DateTimeFormat('hu-HU').format(new Date());
```

### 5. `enum` helyett union type – miért
A TypeScript `enum` **futásidejű JavaScript objektumot** generál, tehát bekerül a bundle-be, és (nem `const enum` esetén) nem shakelhető ki, még akkor sem, ha csak típusként használjuk:

```ts
// enum – kód keletkezik belőle
export enum Status { Draft = 'draft', Active = 'active', Deleted = 'deleted' }
```
generált JS:
```js
var Status;
(function (Status) {
  Status["Draft"] = "draft";
  Status["Active"] = "active";
  Status["Deleted"] = "deleted";
})(Status || (Status = {}));
```

```ts
// union type – NULLA futásidejű kód
export type Status = 'draft' | 'active' | 'deleted';

// ha a listára is szükség van (pl. legördülő menü):
export const STATUSES = ['draft', 'active', 'deleted'] as const;
export type Status = typeof STATUSES[number];      // 'draft' | 'active' | 'deleted'
```

**A union további előnyei a bundle-méret mellett:**
- **Exhaustiveness check**: `switch` esetén a fordító jelzi, ha új variánst nem kezelünk (`assertNever`).
- Nincs a numerikus enum csapdája: a `Status.Draft` numerikus enumnál `0`, ami `falsy` – klasszikus hibaforrás.
- A szerver JSON-jában amúgy is sztring van; a union közvetlenül illeszkedik rá, nincs oda-vissza konverzió.
- Jobb IDE-élmény: a literál értékek autocomplete-elnek stringkontextusban is (`[status]="'draft'"`).
- Nincs deklarációs összefonódás: az `enum` egyszerre típus és érték, ezért nem törölhető típusimportként.

**Amikor az `enum` mégis védhető:** ha külső API kifejezetten enumot vár, vagy reverse mapping (`Status[0] === 'Draft'`) kell. A `const enum` kisebb kódot ad, de `isolatedModules`/esbuild alatt tiltott vagy problémás – az Angular buildben ne használjuk.

### 6. Import-higiénia
```ts
// típus-only import: a fordítás után teljesen eltűnik
import type { Flight } from './flight';
import { type Flight, findFlight } from './flight';   // inline type modifier
```
```json
// tsconfig.json
{ "compilerOptions": { "verbatimModuleSyntax": true } }
```
A `verbatimModuleSyntax` kikényszeríti, hogy a csak típusként használt importot `import type`-tal írjuk – így biztosan nem keletkezik futásidejű import. Az `importsNotUsedAsValues` elavult; helyette a `verbatimModuleSyntax` használandó.

### 7. Egyéb kódszintű optimalizálások
- **Ne hozzunk létre osztályt, ha függvény is elég** – a funkcionális guard/interceptor/resolver kisebb és shakelhető.
- **`InjectionToken` + factory** helyett `providedIn: 'root'` szolgáltatás, ha nincs környezetfüggő implementáció (kevesebb kód).
- **Konstansok**: `as const` objektum kisebb, mint egy statikus mezőkkel teli osztály.
- **Ne exportáljunk mindent** – a nem exportált, nem használt függvényt a bundler kidobja; a publikus export mindig „élőnek” számít.
- **Sablon helyett string konkatenáció**: elhanyagolható; ne itt optimalizáljunk.
- **`@angular/animations` elhagyása** (v20+): tipikusan 30–60 kB nyereség.
- **`zone.js` elhagyása** zoneless módban: ~30 kB gzip nyereség és kevesebb runtime munka.
- **Duplikált tranzitív dependency** felderítése: `npm ls <pkg>` / `npm dedupe` – két verzió ugyanabból a libből duplán kerül a bundle-be.
- **SCSS**: a globális `styles.scss` mindig a kezdeti betöltés része. Ami komponens-specifikus, kerüljön a komponens stílusába (a `anyComponentStyle` budget ezt őrzi).
- **Kép és font**: nem a JS bundle része, de ugyanazt az LCP-t rontja – `ngOptimizedImage`, `font-display`, csak a használt betűvastagságok.

### 8. Build-oldali beállítások
```json
"configurations": {
  "production": {
    "optimization": true,
    "sourceMap": false,
    "namedChunks": false,
    "outputHashing": "all",
    "fonts": { "inline": true },
    "budgets": [ /* ... */ ]
  }
}
```
- Az **`application` builder** (v17+, default) esbuild-alapú: gyorsabb build és jobb chunk-szeletelés, mint a régi webpack-alapú `browser` builder.
- A `browserslist` szűkítése (`last 2 Chrome versions, last 2 Firefox versions, safari >= 16`) kevesebb downlevel kódot és polyfillt jelent.
- `"extractLicenses": true`, `"subresourceIntegrity": true` – nem méret, hanem megfelelés/biztonság.
- SSR-nél a `provideClientHydration()` nem csökkenti a bundle-t, de a **látszó** betöltési időt jelentősen javítja – gyakran ez ér többet, mint további 20 kB lefaragása.

### Prioritási sorrend (a legnagyobb nyereségtől)
1. Route-szintű lazy loading minden nem-kezdő feature-re.
2. Nehéz külső könyvtárak dinamikus importja.
3. `@defer` a kezdő nézet nem kritikus részeire.
4. Barrel- és shared-modul higiénia (mit húz be valójában az első route).
5. `enum` → union type, `import type`, `sideEffects` ellenőrzése.
6. Build-flagek és `browserslist` finomítása.

## 170. Global Error Handling and Correlation ID (v2+ · functional interceptors v15+ · inject() v14+) https://angular.dev/best-practices/error-handling {#globalis-hibakezeles-es-correlation-id-v2-funkcionalis-interceptorok-v15-inject-v14}
### Miért kell mindkettő együtt
A globális `ErrorHandler` elkapja azt, amit senki más nem kapott el; a **correlation ID** pedig összekapcsolja a kliensoldali hibát a szerveroldali loggal. Külön-külön mindkettő félkarú: hibajelentés azonosító nélkül nem visszakereshető, azonosító hibajelentés nélkül nem hasznosul.

### Correlation ID interceptor
```ts
// core/http/correlation-id.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CorrelationService } from './correlation.service';

export const correlationIdInterceptor: HttpInterceptorFn = (req, next) => {
  const correlation = inject(CorrelationService);
  return next(
    req.clone({
      setHeaders: {
        'X-Correlation-Id': correlation.requestId(),  // kérésenként egyedi
        'X-Session-Id': correlation.sessionId,        // böngésző-munkamenetre állandó
      },
    }),
  );
};
```

```ts
// core/http/correlation.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CorrelationService {
  /** A teljes böngésző-munkamenetre állandó – több kérés összekapcsolására. */
  readonly sessionId = this.newId();

  private _lastRequestId = this.sessionId;
  /** A legutóbb kiadott kérés azonosítója – a hibajelentés ezt csatolja. */
  get lastRequestId(): string { return this._lastRequestId; }

  requestId(): string {
    this._lastRequestId = this.newId();
    return this._lastRequestId;
  }

  private newId(): string {
    return typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}
```

Regisztráció – a correlation interceptor legyen **az első** a láncban, hogy minden továbbmenő kérés (a retry ismétlései is) megkapja a fejlécet:
```ts
provideHttpClient(
  withFetch(),
  withInterceptors([correlationIdInterceptor, authInterceptor, retryInterceptor, errorInterceptor]),
);
```

### Fejléc-konvenciók
| Fejléc | Jelentés |
| --- | --- |
| `X-Correlation-Id` | egy logikai művelet azonosítója végig a rendszeren (kliens → BFF → mikroszolgáltatások) |
| `X-Request-Id` | egyetlen HTTP kérés azonosítója |
| `traceparent` | W3C Trace Context standard – ha a backend OpenTelemetryt használ, **ezt** kell küldeni |

```ts
// W3C traceparent: version-traceId(32 hex)-spanId(16 hex)-flags
const traceparent = `00-${hex(32)}-${hex(16)}-01`;
return next(req.clone({ setHeaders: { traceparent } }));
```

**CORS figyelmeztetés:** egyedi fejléc küldése cross-origin kérésnél preflightot vált ki, és a szervernek engedélyeznie kell (`Access-Control-Allow-Headers: X-Correlation-Id`). Ha a válaszban is visszaküldi a szerver, azt `Access-Control-Expose-Headers`-rel kell kitennie, hogy a kliens olvashassa.

### A válasz correlation ID-jának kiolvasása
Gyakran a szerver generálja az azonosítót – ilyenkor a válaszból vesszük át:
```ts
export const correlationIdInterceptor: HttpInterceptorFn = (req, next) => {
  const correlation = inject(CorrelationService);
  const id = correlation.requestId();
  return next(req.clone({ setHeaders: { 'X-Correlation-Id': id } })).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        correlation.remember(id, event.headers.get('X-Correlation-Id') ?? id);
      }
    }),
  );
};
```

### HTTP hibák kezelése interceptorban
```ts
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggingService);
  const notify = inject(NotificationService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const correlationId = req.headers.get('X-Correlation-Id') ?? undefined;

      switch (err.status) {
        case 0:   notify.error('Nincs kapcsolat a szerverrel.'); break;
        case 401: router.navigate(['/login']); break;
        case 403: notify.error('Nincs jogosultságod ehhez a művelethez.'); break;
        case 404: /* a hívó kezeli, nem globális hiba */ break;
        case 422: /* validációs hiba: az űrlap kezeli */ break;
        default:
          notify.error(`Váratlan hiba történt. Hivatkozási szám: ${correlationId}`);
          logger.logHttpError(err, { correlationId, url: req.urlWithParams, method: req.method });
      }
      return throwError(() => err);
    }),
  );
};
```
Az interceptor **ne nyelje el** a hibát (`return EMPTY`), különben a hívó azt hiszi, sikerült a művelet. A `throwError`-ral továbbadjuk, és a hívó dönt.

### Globális ErrorHandler
Ez fogja el a nem kezelt kivételeket: sablon-kifejezés hibák, lifecycle hookban dobott kivétel, nem kezelt Promise rejection, effect hibája.

```ts
// core/error/global-error-handler.ts
import { ErrorHandler, Injectable, inject, isDevMode, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly logger = inject(LoggingService);
  private readonly notify = inject(NotificationService);
  private readonly correlation = inject(CorrelationService);
  private readonly zone = inject(NgZone);

  handleError(error: unknown): void {
    // A HTTP hibákat az errorInterceptor már kezelte és naplózta
    if (error instanceof HttpErrorResponse) return;

    const err = this.unwrap(error);

    if (isDevMode()) {
      console.error('[GlobalErrorHandler]', err);
    }

    this.logger.logError({
      message: err.message,
      stack: err.stack,
      correlationId: this.correlation.lastRequestId,
      sessionId: this.correlation.sessionId,
      url: location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      appVersion: APP_VERSION,
    });

    // A handleError a zónán kívül futhat – UI-műveletet zónán belül indítunk
    this.zone.run(() =>
      this.notify.error(`Váratlan hiba történt. Hivatkozási szám: ${this.correlation.lastRequestId}`),
    );
  }

  /** Promise rejection és zone-wrapped hibák kicsomagolása. */
  private unwrap(error: unknown): Error {
    const e = (error as { rejection?: unknown })?.rejection ?? error;
    return e instanceof Error ? e : new Error(typeof e === 'string' ? e : JSON.stringify(e));
  }
}
```

Regisztráció:
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    // ...
  ],
};
```

### Naplózó szolgáltatás – ne generáljon hibaciklust
```ts
@Injectable({ providedIn: 'root' })
export class LoggingService {
  private readonly http = inject(HttpClient);
  private readonly queue: LogEntry[] = [];
  private sending = false;

  logError(entry: LogEntry): void {
    this.queue.push(entry);
    if (this.queue.length > 50) this.queue.shift();   // memóriakorlát
    void this.flush();
  }

  private async flush(): Promise<void> {
    if (this.sending || !this.queue.length) return;
    this.sending = true;
    const batch = this.queue.splice(0, this.queue.length);
    try {
      // keepalive: a kérés túléli az oldal elhagyását
      await firstValueFrom(
        this.http.post('/api/logs', batch, {
          keepalive: true,
          context: new HttpContext().set(SKIP_ERROR_HANDLING, true),   // ne logoljuk a log-hibát
        }),
      );
    } catch {
      /* csendben elnyeljük: a naplózás hibája nem lehet felhasználói hiba */
    } finally {
      this.sending = false;
    }
  }
}
```
A `SKIP_ERROR_HANDLING` egy `HttpContextToken` – az `errorInterceptor` ezt olvasva kihagyja a log-endpoint hibáit. Enélkül egy elérhetetlen log-szerver **végtelen hibaciklust** okoz.

### Amit az ErrorHandler nem fog el
```ts
// nem kezelt Promise rejection Angular kontextuson kívül
window.addEventListener('unhandledrejection', (e) => handler.handleError(e.reason));
// erőforrás-betöltési hiba (kép, script)
window.addEventListener('error', (e) => handler.handleError(e.error ?? e.message), true);
```
Zoneless módban (v20+) ezek a globális listenerek különösen fontosak, mert nincs zone, ami a hibát az Angular felé továbbítsa.

### Hibakezelés signal-alapú kódban
```ts
readonly flight = httpResource<Flight>(() => `/api/flight/${this.id()}`);
```
```html
@if (flight.error()) {
  <app-error [error]="flight.error()" (retry)="flight.reload()" />
}
```
A `resource` a hibát **állapotként** modellezi, nem kivételként – ezért nem jut el az `ErrorHandler`-ig, és ez a helyes: a felhasználó egy újrapróbálható hibaállapotot lát, nem globális hibajelzést.

### Kapcsolat külső monitoringgal
Sentry, Rollbar, Application Insights, Datadog RUM – mindegyik `ErrorHandler` implementációt ad. A saját handler is használható mellette: a `correlationId`-t és `sessionId`-t **tagként/contextként** adjuk át, hogy a monitoring felületen kereshető legyen.
```ts
Sentry.setTag('correlationId', this.correlation.lastRequestId);
Sentry.setTag('sessionId', this.correlation.sessionId);
```

### Ellenőrzőlista
- [ ] `correlationIdInterceptor` a lánc **elején**, minden kimenő kérésen fejléc.
- [ ] A szerver naplózza a `X-Correlation-Id`-t, és a válaszban vissza is adja.
- [ ] A hibaüzenet a felhasználónak **tartalmazza az azonosítót** (hogy támogatásnál bediktálható legyen).
- [ ] `errorInterceptor` státuszkód szerint differenciál, és nem nyeli el a hibát.
- [ ] `GlobalErrorHandler` kihagyja a `HttpErrorResponse`-t (nincs dupla naplózás).
- [ ] A log-endpoint hibái nem generálnak új naplóbejegyzést.
- [ ] `unhandledrejection` és `error` window listener beállítva.
- [ ] Az appverzió (build hash) minden bejegyzésben – különben a source map nem illeszthető.
- [ ] Éles környezetben nem írunk stack trace-t a konzolra (információszivárgás).

## 171. Angular Injectors – Types, Hierarchy and Resolution Model (v2+ · EnvironmentInjector v14+ · inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#angular-injectorok-tipusok-hierarchia-es-feloldasi-modell-v2-environmentinjector-v14-inject-opciok-v14}
Az Angular DI-ja **nem egyetlen** injectorból áll. Egy alkalmazásban több, párhuzamos injector-fa létezik, és a feloldás menete ezekből következik. A legtöbb „miért nem azt a példányt kapom?” és „miért `NullInjectorError`?” kérdés innen érthető meg.

### 1. Miért van több injector
Kétféle igény van egyszerre:
- **alkalmazásszintű** szolgáltatások (HTTP kliens, router, globális store) – egyetlen példány, mindenhonnan elérhető,
- **komponens- vagy DOM-pozíciótól függő** szolgáltatások (az adott form szekció validátora, egy panel belső állapota) – példány a nézeti hierarchia adott pontján.

Ezért az Angular két, egymással összekötött hierarchiát tart fenn: az **Element (node) injector** fát, amely a DOM/komponens-fát követi, és az **Environment injector** fát, amely az alkalmazás/route/modul szerkezetét követi.

```
NullInjector
    ▲
Platform injector          (platformBrowser, több app közös része)
    ▲
Root environment injector  (bootstrapApplication providers, providedIn: 'root')
    ▲
Route environment injector (Route.providers – lazy feature)
    ▲
Element injector (root komponens)      ← a komponens/direktíva providers
    ▲
Element injector (gyerek komponens)
```
A keresés **lentről felfelé** megy: először az elem-injectorok a DOM-fán felfelé, majd az environment injectorok, végül a `NullInjector`, ami hibát dob.

### 2. Az injectorok típusai

| Injector | Honnan kapja a providereket | Élettartam | Tipikus tartalom |
| --- | --- | --- | --- |
| **NullInjector** | semmi | – | csak `NullInjectorError`-t dob (a lánc vége) |
| **Platform injector** | `platformBrowser([...])`, `providePlatformInitializer()` | a böngészőlap | több Angular alkalmazás közös része, globális error hook |
| **Root environment injector** | `bootstrapApplication(App, { providers })`, `providedIn: 'root'` | az alkalmazás | `HttpClient`, `Router`, globális store-ok |
| **Route (environment) injector** | `Route.providers` (v14+) | amíg a route aktív | feature-lokális store, feature konfiguráció |
| **Element (node) injector** | `@Component/@Directive({ providers })` és `viewProviders` | a komponens/direktíva példánya | nézet-lokális állapot, form-szekció szolgáltatás |
| **ModuleInjector** (legacy) | `NgModule.providers`, `providedIn: SomeModule` | a modul | régi, `NgModule`-alapú alkalmazások |

> Terminológia: régebbi dokumentációban a „ModuleInjector” és „ElementInjector” pár szerepel. A standalone világban a ModuleInjector helyét az **EnvironmentInjector** vette át (a `NgModuleRef.injector` is ilyen), de a keresési logika ugyanaz.

### 3. Element injector – hogyan viselkedik
Az element injector a **sablonban elfoglalt hely** szerint kap példányt, nem az osztály szerint. Ha egy komponens `providers`-ben regisztrál egy szolgáltatást, akkor:
- a komponens **minden példánya** saját szolgáltatás-példányt kap,
- a példány a komponenssel együtt jön létre és **semmisül meg** (nincs állapot-átszivárgás két nézetlátogatás között),
- a komponens sablonjában lévő minden gyerek ugyanezt a példányt kapja, ha nem regisztrálja újra.

```ts
@Component({
  selector: 'app-panel',
  providers: [PanelState],           // példányonként egy PanelState
  template: `<app-panel-body />`,    // ugyanazt a PanelState-et injektálja
})
export class Panel {}
```
```html
<app-panel />   <!-- PanelState #1 -->
<app-panel />   <!-- PanelState #2 – független -->
```

**Direktíva is szolgáltathat.** Ez az Angular Material összetett komponenseinek (tabs, accordion, table) alapmintája: a szülő direktíva/komponens regisztrál egy koordinátor szolgáltatást, a gyerekek pedig injektálják azt – így nincs input-láncolás (property drilling).

```ts
@Directive({ selector: '[appAccordion]', providers: [AccordionCoordinator] })
export class AccordionDirective {}

@Component({ selector: 'app-accordion-item' })
export class AccordionItem {
  private readonly coordinator = inject(AccordionCoordinator);   // a szülőtől
}
```

**`providers` vs `viewProviders`**: a `viewProviders` a beprojektált (`ng-content`) tartalom számára **nem** látható – lásd a *providers vs viewProviders* szekciót.

### 4. A feloldás pontos menete
1. Az Angular megkeresi az injektálást kérő **elem** injectorát, és ott keresi a tokent.
2. Ha nincs, felmegy a **szülő elem** injectorába – és így tovább a komponens-fa gyökeréig. Ez a DOM-fát követi, **nem** az osztályok öröklődését és nem az `import` szerkezetet.
3. Ha az elem-fa gyökeréig nem találta meg, átlép a hozzá tartozó **environment injectorba** (komponens → route → root → platform).
4. Végül a `NullInjector` következik, ami `NullInjectorError: No provider for X!` hibát dob.

**Fontos következmény:** ha egy szolgáltatást egy gyerekkomponens `providers`-ében regisztráltunk, a **szülő nem látja**. A DI-lánc egyirányú, felfelé keres.

### 5. Feloldás-módosítók
```ts
private readonly a = inject(Service);                          // teljes lánc
private readonly b = inject(Service, { self: true });          // csak a saját element injector
private readonly c = inject(Service, { skipSelf: true });      // a sajátot kihagyva, szülőtől
private readonly d = inject(Service, { host: true });          // a host elemig
private readonly e = inject(Service, { optional: true });      // Service | null, nem dob hibát
```
Kombinálhatók: `inject(PARENT_FORM, { skipSelf: true, optional: true })` – a tipikus „optional szülő-kontextus” minta.

A decorator-based megfelelők (`@Self()`, `@SkipSelf()`, `@Host()`, `@Optional()`) továbbra is működnek; az `inject()` opcióobjektum a modern, ajánlott forma.

### 6. Provider-receptek (a „többféle módja” a szolgáltatás megadásának)

| Recept | Mit ad | Mikor |
| --- | --- | --- |
| `Service` (rövid forma) | `{ provide: Service, useClass: Service }` | a szokásos eset |
| `useClass` | más osztály példánya ugyanarra a tokenre | környezetfüggő implementáció (szerver/böngésző), mock |
| `useValue` | kész érték (objektum, konstans, mock) | konfiguráció, teszt-dupla |
| `useFactory` (+ `deps`) | függvény által előállított érték | feltételes létrehozás, futásidejű döntés |
| `useExisting` | **alias** egy másik tokenre (nem új példány) | absztrakt osztály → konkrét, CVA self-referencia |
| `multi: true` | tömböt épít ugyanabból a tokenből | interceptorok, validátorok, initializerek |

```ts
providers: [
  FlightService,                                                  // rövid forma
  { provide: FLIGHT_REPOSITORY, useClass: HttpFlightRepository },  // interfész → implementáció
  { provide: API_URL, useValue: 'https://api.example.com' },       // konstans
  { provide: LoggerService, useExisting: ConsoleLogger },          // alias, ugyanaz a példány
  {
    provide: StorageService,
    useFactory: () => (isPlatformBrowser(inject(PLATFORM_ID)) ? new BrowserStorage() : new ServerStorage()),
  },
  { provide: VALIDATORS, useValue: emailValidator, multi: true },  // több érték egy tokenre
]
```

**`useExisting` vs `useClass`**: a `useClass` **új példányt** hoz létre, a `useExisting` a már létező példányra mutat. Ha ugyanaz az objektum kell két token alatt (pl. absztrakt osztály és konkrét típus), `useExisting` a helyes.

### 7. Nem-osztály értékek injektálása – `InjectionToken`
Interfészt és primitív típust nem lehet tokenként használni (a TypeScript interfész a fordítás után nem létezik). Ezért kell `InjectionToken`:

```ts
export interface AppConfig { apiUrl: string; retries: number; }

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG', {
  factory: () => ({ apiUrl: '/api', retries: 3 }),   // tree-shakeable alapérték
});

// megadás
providers: [{ provide: APP_CONFIG, useValue: { apiUrl: 'https://api.example.com', retries: 5 } }]

// olvasás
private readonly config = inject(APP_CONFIG);
```
- A leíró sztring (`'APP_CONFIG'`) **csak** hibaüzenetben jelenik meg, nem azonosító – két külön `new InjectionToken('X')` két különböző token.
- A `factory` opcióval a token önmagában is működik provider nélkül, és tree-shakeable (ez a `providedIn: 'root'` megfelelője nem-osztály értékre).
- Absztrakt osztály **használható** tokenként (`abstract class FlightRepository`), és típusként is szolgál – gyakran kényelmesebb, mint interfész + token.

**Beépített tokenek, amiket érdemes ismerni:** `DOCUMENT`, `PLATFORM_ID`, `LOCALE_ID`, `APP_ID`, `ElementRef`, `ChangeDetectorRef`, `ViewContainerRef`, `TemplateRef`, `NgZone`, `DestroyRef`, `ApplicationRef`, `Injector`, `EnvironmentInjector`, `REQUEST` / `RESPONSE_INIT` (SSR, v19+).

### 8. Szolgáltatás injektálása szolgáltatásba
Ugyanaz a szabály: `providedIn: 'root'` szolgáltatás csak a root environment injectorban lévő (vagy szintén root) szolgáltatásokat látja – **nem** látja egy komponens `providers`-ében regisztrált példányt.

```ts
@Injectable({ providedIn: 'root' })
export class FlightService {
  private readonly http = inject(HttpClient);       // osztálymezőben, injection contextben
  private readonly config = inject(APP_CONFIG);
}
```
Ha egy root szolgáltatásnak mégis komponens-lokális értékre van szüksége, az architektúra fordítva van: a komponens-lokális szolgáltatás injektálja a globálisat, ne viszont.

### 9. Injection context és programozott feloldás
Az `inject()` csak **injection contextben** hívható: osztálymező-inicializálóban, konstruktorban, `factory` függvényben, `provideXyz()` belsejében, `runInInjectionContext()` blokkban.

```ts
// nem injection contextben: eltárolt injectorral
private readonly injector = inject(Injector);

lateResolve(): void {
  const service = this.injector.get(FlightService);
}

// vagy futtatás injection contextben (v16+)
runInInjectionContext(this.injector, () => {
  const service = inject(FlightService);
});
```
Tipikus hibák: `inject()` egy eseménykezelőben, `setTimeout` callbackben vagy `subscribe`-on belül → `NG0203` hiba.

### 10. Cirkuláris függőség
Ha `A` injektálja `B`-t és `B` injektálja `A`-t, az Angular `NG0200: Circular dependency in DI` hibát dob. Megoldások, romlási sorrendben:
1. **Harmadik szolgáltatás kiemelése** a közös részre – ez az egészséges megoldás (a ciklus mindig tervezési hiba jele).
2. **Esemény/signal** használata direkt hívás helyett (az egyik fél nem hívja a másikat, csak jelez).
3. Lazy feloldás: `private readonly injector = inject(Injector)` és később `injector.get(B)`.
4. `forwardRef()` – ha a hivatkozás sorrendje a probléma (nem a valódi ciklus), pl. `NG_VALUE_ACCESSOR` self-provider esetén.

### 11. DI vizsgálata Angular DevToolsban
Az **Angular DevTools** (Chrome/Edge kiegészítő) *Injector Tree* fülén megjelenik:
- a teljes injector-hierarchia (environment és element injectorok külön fával),
- melyik injector szolgáltatja a kiválasztott komponens egyes függőségeit,
- a komponens saját providerei és az öröklött providerek.

Ez a leggyorsabb út annak eldöntéséhez, hogy egy szolgáltatásból **hány példány** él, és melyik szintről kapja a komponens. Konzolból is vizsgálható:
```ts
// böngésző konzolban, kiválasztott elemre
ng.getInjector($0);
ng.getComponent($0);
```

### 12. NgModule és DI (legacy kontextus)
`NgModule`-alapú alkalmazásban:
- az `NgModule.providers` a **ModuleInjectorba** kerül, és a modul importálásával **alkalmazásszintűvé** válik – a lazy-loadolt modul viszont saját child injectort kap, ezért ott új példány jön létre (klasszikus „két példány ugyanabból a service-ből” hibaforrás),
- `providedIn: SomeModule` – a szolgáltatás csak akkor kerül a bundle-be, ha a modult használják,
- `forRoot()` / `forChild()` minta: a `forRoot()` a providereket adja (csak egyszer, a root modulban), a `forChild()` csak a deklarációkat. A standalone világban ezt a **`provideXyz()`** függvény váltotta ki (lásd a *Providers (standalone)* részt).

Standalone alkalmazásban ez a réteg eltűnik: `providedIn: 'root'` a globális, `Route.providers` a feature-lokális, komponens `providers` a nézet-lokális szolgáltatásokra.

### Mikor melyik injectort / provider-szintet használjuk

| Szükség | Hol regisztráld | Miért |
| --- | --- | --- |
| Egy példány az egész appban (`HttpClient`, auth, globális store) | `providedIn: 'root'` vagy `bootstrapApplication({ providers })` | Root **EnvironmentInjector** – mindenhol ugyanaz a példány |
| Feature-lokális állapot (csak egy lazy route alatt) | `Route.providers` | Route **EnvironmentInjector** – a feature elhagyásakor felszabadulhat |
| Komponens-példányonkénti állapot (panel, wizard lépés) | `@Component({ providers: [...] })` | **Element injector** – minden `<app-x>` saját példányt kap |
| Csak a saját view lássa, a projected tartalom ne | `viewProviders` | Element injector, de `ng-content` felé rejtett |
| Több Angular-app közös része egy lapon | `platformBrowser([...])` / platform initializer | **Platform injector** |
| Bootstrap előtt kötelező async betöltés | `provideAppInitializer(...)` | App environment – **megvárja** a Promise-t |
| DI felállásakor azonnali (nem blokkoló) oldalhatás | `provideEnvironmentInitializer(...)` | Environment injector – **nem** vár async-et |
| Tesztben felülírás | `TestBed.configureTestingModule({ providers })` / `TestBed.overrideProvider` | Teszt environment injector |

**Döntési fa (röviden):**
1. Kell-e **állapot** a szolgáltatásnak? Ha nem → `providedIn: 'root'` (stateless helper).
2. Az állapot **globális** (user session)? → root. **Feature-szintű**? → `Route.providers`. **Nézet-példány**? → komponens `providers`.
3. A gyerek DOM-ból kell elérni, a projected tartalomból nem? → `viewProviders`.
4. Bootstrap előtt kell adat? → `provideAppInitializer`. Csak regisztrálni/indítani kell? → `provideEnvironmentInitializer`.

```ts
// root – mindenki ugyanazt kapja
@Injectable({ providedIn: 'root' })
export class AuthStore { /* ... */ }

// route – csak a /checkout fa alatt él
export const checkoutRoutes: Routes = [{
  path: 'checkout',
  providers: [CheckoutStore],
  loadComponent: () => import('./checkout.page'),
}];

// element – minden Panel saját store-t kap
@Component({ selector: 'app-panel', providers: [PanelStore], template: `...` })
export class Panel {}
```

### Ökölszabályok
- Alapértelmezés: `providedIn: 'root'`. Csak akkor lépjünk lejjebb, ha **példányonkénti** állapot kell.
- Nézet-lokális store → komponens `providers`. Feature-lokális store → `Route.providers`. Globális → `'root'`.
- Interfész helyett absztrakt osztály vagy `InjectionToken` – így cserélhető az implementáció tesztben és szerveroldalon.
- `multi: true` tokent mindig `optional: true`-val olvassunk, ha lehet, hogy senki nem szolgáltatta.
- Ha nem tudod, honnan jön egy példány, ne találgass: Angular DevTools → Injector Tree.
## 172. Signal Semantics – Reactive Context, Auto-tracking, untracked (v16+ · v17 stable) https://angular.dev/guide/signals {#signal-szemantika-reaktiv-kontextus-auto-tracking-untracked-v16-v17-stable}
### Mi az a reaktív kontextus
Az Angular **automatikusan nyilvántartja** (auto-tracking) az összes signalt, amit egy reaktív kontextusban olvasunk. Alkalmazásfejlesztői szemszögből az Angular mindössze **két** helyen hoz létre reaktív kontextust:

1. a **sablon** (template),
2. az **effect**.

A `computed`-ben olvasott signalok is nyilvántartásba kerülnek, de ilyenkor nem saját kontextust kapnak: az őket olvasó sablon vagy effect kontextusa érvényesül.

### A tracking átterjed a hívott függvényekre
Ez a leggyakoribb meglepetés forrása: az Angular akkor is követi a signalt, ha azt egy **a kontextusból hívott metódus** olvassa.

```ts
export class FlightSearch {
  protected readonly filter = signal({ from: 'Hamburg', to: 'Graz' });

  constructor() {
    // az effect automatikusan követi a logCriteria-ban olvasott összes signalt
    effect(() => {
      this.logCriteria();
    });
  }

  private logCriteria(): void {
    const filter = this.filter(); // követve lesz, pedig az effectben nem is látszik
    console.log('Criteria:', filter.from, '→', filter.to);
  }
}
```

Az effectet olvasva **nem látszik**, hogy a `filter`-től függ. Canvasra rajzoló vagy imperatív renderelő effectnél ez pont kívánatos; üzleti logikánál viszont csapda.

### Ezért nem hívunk üzleti logikát effectből

```ts
effect(() => {
  const criteria = this.criteria();
  this.businessService.executeLogic(criteria); // ⚠ ne
});
```

Ha az `executeLogic` belül olvassa az `isLoading` és a `userId` signalokat, akkor **azok változása is újrafuttatja az effectet** – vagyis az alkalmazás egy távoli pontján történő állapotváltozás újra törölni fog rekordokat. A második ok: az effect – a Resource API-val ellentétben – **nem kezeli a versenyhelyzetet**, az átfedő hívások felülírhatják egymás eredményét.

### Explicit effect `untracked`-kel

```ts
// csak a criteria változására fut újra
effect(() => {
  const criteria = this.criteria();
  untracked(() => {
    this.businessService.executeLogic(criteria);
  });
});
```

Az `untracked` blokkban olvasott signalok nem kerülnek nyilvántartásba. A minta a közösségben **vitatott**: megoldja a fenti problémát, de átláthatatlanabbá teszi a kódot, nem illik a reaktív programozás szellemébe (ahol az értékek egymásból származnak), nehezen debugolható láncreakciókat és ciklusokat okozhat, és a race conditiont továbbra sem kezeli. Először mindig kérdezzük meg: ez tényleg effect, vagy inkább `computed` / `resource` / eseménykezelő?

### Feltételes olvasás = feltételes tracking
A signal akkor is „lekerül a listáról”, ha egy futás során **nem olvassuk**:

```ts
effect(() => {
  if (isDelayed()) {
    console.log(delay()); // a delay csak akkor követett, ha isDelayed() igaz
  }
});
```

Ha az `isDelayed` false lesz, a `delay` változása többé nem futtatja újra az effectet. Ha mindig kell a reakció, olvassuk ki **a feltétel előtt**:

```ts
effect(() => {
  const isDelayedValue = isDelayed();
  const delayValue = delay();
  if (isDelayedValue) {
    console.log(delayValue);
  }
});
```

Ugyanez érvényes a `computed`-re és a sablonban olvasott signalokra is. A memóriaszivárgás ellen az Angular a hordozó egység (pl. komponens) megsemmisülésekor automatikusan leállítja a trackinget.

### Ökölszabályok
- Effect = **mellékhatás a keretrendszeren kívülre** (canvas, harmadik féltől származó lib, logolás, `localStorage`), nem állapotterjesztés.
- Származtatott érték → `computed`. Írható származtatott érték → `linkedSignal`. Aszinkron betöltés → `resource`.
- Ha egy effectben `set()` / `patchState()` hívás van, az majdnem mindig tervezési hiba.

## 173. Glitch-Free Behavior, Equality and Immutability (v16+ · v17 stable) https://angular.dev/guide/signals {#glitch-free-viselkedes-egyenloseg-es-immutabilitas-v16-v17-stable}
### Glitch-free: nincs köztes állapot
Az Angular signaljai **glitch-free**-k: a fogyasztó (sablon, effect) sosem lát inkonzisztens köztes állapotot. Több signal módosítása után a reaktív kontextus **egyszer** fut le, a végleges értékekkel.

```ts
this.filter.update((f) => ({ ...f, from: 'Paris' }));
this.filter.update((f) => ({ ...f, from: 'Frankfurt' }));
this.filter.update((f) => ({ ...f, from: 'New York' }));
this.filter.update((f) => ({ ...f, to: 'Berlin' }));
this.filter.update((f) => ({ ...f, to: 'Zurich' }));
this.filter.update((f) => ({ ...f, to: 'London' }));
```

Az effect **egyszer** fut le, és `New York` + `London` értéket ír ki. Ez megakadályozza az inkonzisztens állapotot és a felesleges renderelést.

**A másik oldala:** a signal **nem alkalmas esemény vagy időbeli adatfolyam ábrázolására** – a gyorsan követő üzenetek elvesznek. Erre az RxJS és az Observable való. (Ez magyarázza azt is, hogy az `rxMethod` pipe-ján a signal kezdőértéke miért nem folyik át.)

### Egyenlőség: alapból `===`
Íráskor az Angular ellenőrzi, hogy az érték **tényleg** változott-e:

```ts
const count = signal(0);
count.set(0);
count.set(0); // nincs értesítés, nincs újrarenderelés
```

Primitíveknél ez jól működik. Objektumnál és tömbnél viszont a `===` **referenciát** hasonlít, nem tartalmat – ezért új példányt kell létrehozni:

```ts
flight.update((flight) => ({
  ...flight,
  date: newDate,
  delayed: true,
}));
```

A spread sekély másolatot készít, a felülírt mezők újak, az eredmény új referencia – így az Angular észleli a változást.

### Immutabilitás és OnPush összefüggése
Az OnPush is az immutabilitásra épül. A `@for`-ban renderelt kártyáknál:

```html
@for (flight of flights(); track flight.id) {
  <app-flight-card [item]="flight" [selected]="basket()[flight.id]" />
}
```

Az Angular a régi és az új `flight` objektumot `===`-szel veti össze. Ha a referencia azonos, **nem** frissíti az adott `FlightCard`-ot; ha eltér, közelebbről megnézi a bindingjait. Ha helyben mutáljuk az objektumot (`flight.delayed = true`), a referencia változatlan marad, és a kártya **nem frissül**.

Röviden: **kötött objektumot és tömböt mindig új példányként írjunk vissza.**

### Egyéni egyenlőség-függvény

```ts
const point = signal({ x: 0, y: 0 }, { equal: (a, b) => a.x === b.x && a.y === b.y });
```

A gyakorlatban ritkán kell, és alkalmazáskódban általában több zavart okoz, mint hasznot. Tipikus indokolt eset: nagy, drágán újraszámolt struktúra, ahol mérhető a nyereség.

### Gyakori hibák

| Hiba | Következmény | Megoldás |
|---|---|---|
| `items().push(x)` | nincs változásészlelés | `items.update(i => [...i, x])` |
| `state().user.name = 'x'` | néma elavulás a UI-ban | új objektum a láncon végig |
| `signal` eseményekhez (toast, gombnyomás) | eldobott üzenetek | `Subject` / RxJS |
| mély objektum egyetlen signalban | felesleges újraszámítás | bontsuk kisebb signalokra vagy `computed`-ekre |

## 174. The Signal Graph – Designing Reactive Data Flow (v17+ · resource v19+) https://angular.dev/guide/signals {#a-signal-graf-reaktiv-adatfolyam-tervezese-v17-resource-v19}
### Mit tart nyilván az Angular
Az Angular a háttérben **signal gráfot** épít: egy adatszerkezetet arról, hogy a signalok, a `computed`-ek és a fogyasztók (effectek, sablonok) hogyan függnek egymástól. Ez a gráf **az alkalmazás adatáramlása**. Ha ebben gondolkodunk, a reaktív folyam tervezése természetessé válik.

### Tipikus folyam

```
filter (signal)
   └─► flightsResource (httpResource)   ── aszinkron projekció
          └─► flights (signal)
                 └─► flightsWithDelays (computed) ◄── delayInMin (signal)
                        └─► sablon
```

```ts
export class FlightSearch {
  protected readonly filter = signal({ from: 'Hamburg', to: 'Graz' });

  private readonly flightsResource = httpResource<Flight[]>(
    () => ({
      url: '/api/flight',
      params: { from: this.filter().from, to: this.filter().to },
    }),
    { defaultValue: [] },
  );

  protected readonly delayInMin = signal(0);

  protected readonly flightsWithDelays = computed(() => {
    const flights = this.flightsResource.value();
    const delay = this.delayInMin();
    return flights.map((f, i) => (i === 0 ? { ...f, delayed: delay > 0 } : f));
  });
}
```

### Tervezési elvek
- **Források (writable signal) kevesen legyenek**: felhasználói bemenet, route paraméter, kapcsolóállás. Minden más **származtatott**.
- A gráf **irányított és körmentes**: ha kör keletkezik, az azt jelenti, hogy két értéket egymásból akarunk levezetni – valamelyiket forrássá kell tenni (`linkedSignal`).
- **A levél a sablon.** Ha egy értéket csak megjeleníteni akarunk, ne tároljuk – számoljuk.
- Aszinkron lépés a gráfban mindig `resource` / `httpResource` / `rxResource`, mert az kezeli a `loading`, `error`, `reload` állapotot és a versenyhelyzetet is.
- Ami a gráfon **kívülre** hat (canvas, analytics, harmadik fél), az `effect`.

### Mi ellen véd ez a gondolkodásmód
- Nincs „ki felejtette el frissíteni ezt a mezőt” hiba: a származtatás garantálja a szinkront.
- Nincs kézzel hangolt frissítési sorrend: a glitch-free tulajdonság rendezi.
- A gráf **olvasható dokumentáció**: code review-ban a `computed`-ek láncából látszik az üzleti szabály.

### Diagnosztika
Angular DevTools → *Profiler*, illetve `ng.enableProfiling()` a konzolban: látszik, mely komponens change detectionje mennyi ideig tart. Ha egy `computed` gyanúsan gyakran fut, majdnem mindig egy fölösleges forrássignal (vagy egy effectben végzett írás) van a láncban.

## 175. The New Animations API – animate.enter / animate.leave (v20.2+ · v21 expanded) https://angular.dev/guide/animations/enter-and-leave {#az-uj-animacios-api-animate-enter-animate-leave-v20-2-v21-bovitett}
A `@angular/animations` csomag v20-tól **deprecated**. Helyette két beépített binding jött: az `animate.enter` és az `animate.leave`. Ezek nem direktívák, hanem **fordítószintű funkciók**, amiket az Angular közvetlenül ismer – sablonban és host bindingként is használhatók. Nem kell hozzájuk provider, és nem húznak be külön animációs motort.

### animate.enter
Akkor fut, amikor az elem **bekerül a DOM-ba**. Az animáció végén az Angular **automatikusan leveszi** a megadott osztályt, így az csak az animáció idejére aktív.

```ts
@Component({
  selector: 'animate-enter-example',
  template: `
    <button (click)="toggleVisibility()">Toggle element</button>
    @if (isVisible()) {
      <div class="container" animate.enter="enter-animation">
        <p>animate.enter example</p>
      </div>
    }
  `,
  styles: [`
    .container { border: solid 1px black; padding: 1rem; }
    .enter-animation { animation: slide-fade 1s; }
    @keyframes slide-fade {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `],
})
export class EnterExample {
  readonly isVisible = signal(false);

  toggleVisibility(): void {
    this.isVisible.update((v) => !v);
  }
}
```

Több osztály is megadható szóközzel elválasztva, és az érték köthető is: `[animate.enter]="enterClass()"`.

### animate.leave
Az elem **eltávolítása előtt** fut le, és az Angular **megvárja az animáció végét**, csak utána csatolja le az elemet. Ez az, amiért korábban `setTimeout`-os kerülőmegoldás kellett.

```ts
@Component({
  template: `
    <button (click)="toggleVisibility()">Toggle element</button>
    @if (isVisible()) {
      <div class="container" animate.leave="leave-animation">
        <p>animate.leave example</p>
      </div>
    }
  `,
  styles: [`
    .container {
      border: solid 1px black;
      padding: 1rem;
      @starting-style { opacity: 0; }
    }
    .leave-animation {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 500ms ease-out, transform 500ms ease-out;
    }
  `],
})
export class LeaveExample {
  readonly isVisible = signal(false);

  toggleVisibility(): void {
    this.isVisible.update((v) => !v);
  }
}
```

A natív CSS `@starting-style` a belépő állapot kezdőértékét adja meg – vele az `animate.enter` sok esetben kiváltható tiszta CSS-sel.

### Event binding és külső animációs könyvtárak
Mindkét binding támogatja az eseménykötés-szintaxist. Az `$event` típusa `AnimationCallbackEvent`: tartalmazza az elemet (`target`), és van rajta egy `animationComplete()` függvény, amivel **jelezzük a keretrendszernek**, hogy végeztünk.

```ts
@Component({
  template: `
    @if (isVisible()) {
      <div class="container" (animate.leave)="animateLeaving($event)">
        <p>event binding example</p>
      </div>
    }
  `,
})
export class EventBindingExample {
  readonly isVisible = signal(false);

  animateLeaving(event: AnimationCallbackEvent): void {
    gsap.to(event.target, {
      duration: 1,
      x: 100,
      onComplete: () => event.animationComplete(), // ⚠ enélkül az elem nem tűnik el
    });
  }
}
```

### Gyakorlati megjegyzések
- **Kisebb bundle**: nincs `@angular/animations` és nincs animációs motor a fő chunkban.
- Migrációkor a `@Component({ animations: [...] })` metaadat, a `trigger`/`state`/`transition` DSL és a `provideAnimations()` kiváltható CSS-sel és a két bindinggal. Összetettebb, sorrendezett animációhoz maradjon a Web Animations API vagy egy külső könyvtár az event binding mögött.
- A `prefers-reduced-motion` figyelembevétele továbbra is a mi felelősségünk – a CSS media query a legegyszerűbb út.
- Tesztben nincs szükség `provideNoopAnimations()`-re, mert nincs mit kikapcsolni. A jsdom viszont nem futtat CSS animációt, ezért `animate.leave` eseménykötésnél az `animationComplete()` hívását mockoljuk.

## 176. HttpClient Fetch Tuning and New HttpResponse Fields (withFetch v16+ · új opciók v21+) https://angular.dev/guide/http/making-requests {#httpclient-fetch-alapu-finomhangolasa-es-httpresponse-uj-mezoi-withfetch-v16-uj-opciok-v21}
Az új kérésopciók (a `timeout` kivételével) **csak** `provideHttpClient(withFetch())` mellett vagy `httpResource`-on keresztül érvényesek – ezek kapcsolják át az Angulart a régi `XMLHttpRequest`-ről a Fetch API-ra.

```ts
bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch(), withInterceptors([authInterceptor]))],
});
```

### Kérésopciók

```ts
this.http.get<Flight[]>('/api/flight', {
  timeout: 5000,           // ms; letelte után a kérés megszakad
  cache: 'no-store',       // default | no-store | reload | no-cache | force-cache | only-if-cached
  priority: 'high',        // auto | high | low
  mode: 'cors',            // same-origin | no-cors | cors | navigate
  redirect: 'follow',      // follow | error | manual
  credentials: 'include',  // omit | same-origin | include
  referrerPolicy: 'no-referrer',
  integrity: 'sha384-...', // Subresource Integrity ellenőrzés a válaszra
});
```

Napi haszon:
- **`timeout`** – a lefagyó backend nem tartja örökké „loading” állapotban a UI-t. Egyetlen helyen, interceptorban is beállítható alapértelmezésként.
- **`priority`** – az LCP-t befolyásoló kérés `high`, a háttérben futó telemetria `low`. Listás és dashboard oldalakon mérhető a nyereség.
- **`credentials`** – cookie-alapú authnál explicit, kiszámítható viselkedés.
- **`cache: 'no-store'`** – érzékeny adatnál (profil, kosár) megakadályozza a böngésző-cache-t.

### Új mezők a HttpResponse-on
- **`responseType`** – hogyan kezelte a böngésző a választ: `"basic"`, `"cors"`, `"opaque"` vagy `"error"`. CORS-hibakeresésnél ez mondja meg, hogy a válasz egyáltalán olvasható volt-e.
- **`redirected`** – volt-e átirányítás. Hasznos auth-flow követéséhez, biztonsági szabályok kikényszerítéséhez és analitikához, egyedi fetch-logika nélkül.

```ts
this.http.get('/api/me', { observe: 'response' }).subscribe((res) => {
  if (res.redirected) {
    this.logger.warn('Redirect történt – valószínűleg lejárt a session');
  }
});
```

### Ökölszabályok
- A `withFetch()` ma a default választás; nélküle a fenti opciók nem élnek, és a `keepalive` sem működik.
- Az opciókat ne szórjuk szét a komponensekben: az általános szabályokat (timeout, credentials, correlation ID) **interceptorban** állítsuk be, csak a kivételt írjuk a hívás helyére.

## 177. Router Details – Injection Context, Scroll, Redirect Parameters (v21–v22) https://angular.dev/guide/routing {#router-finomsagok-injection-context-scroll-redirect-parameterek-v21-v22}
### Lazy loading injection contextben (v21+)
A `loadChildren` és a `loadComponent` **a route injection contextjében** fut, így közvetlenül injektálhatunk bennük szolgáltatást. Feature flag alapú route-választás így trükkök nélkül megoldható:

```ts
{
  path: 'product-configuration',
  loadComponent: async () => {
    const featureFlagService = inject(FeatureFlagService);
    const isEnabled = featureFlagService.isEnabled('ai_product_configuration');
    return isEnabled
      ? (await import('@my-app/ai-product-configuration')).AiProductConfigurationComponent
      : (await import('@my-app/product-configuration')).ProductConfigurationComponent;
  },
}
```

Így a lazy loading az alkalmazás **valós futásidejű állapotára** alapozható, globális változók és kerülőutak nélkül.

### Navigációnkénti scroll-vezérlés (v22+)
A `NavigationBehaviorOptions` új `scroll` mezője akkor is szabályozza az egyes navigációkat, ha a routerben be van kapcsolva a scroll restoration:

```ts
this.router.navigate(['/flights', id], { scroll: 'manual' });            // ne görgessen
this.router.navigate(['/flights', id], { scroll: 'after-transition' });  // a NavigationEnd után görgessen
```

A `'manual'` esetén a router a navigáció végén **nem** görget – tipikus eset: tab-váltás vagy szűrő módosítása, ahol a pozíció megtartása a helyes UX.

### RunGuardsAndResolvers injection contextben (v22+)
A `runGuardsAndResolvers` függvényváltozata is injection contextben fut, így a guard/resolver újrafuttatási szabálya függhet szolgáltatásoktól – például jogosultságtól vagy feature flagtől.

### Redirect függvény paraméterei (v22+)
A `RedirectFunction` megkapja a `paramMap`-et és a `queryParamMap`-et, így az átirányítás során a paraméterek kényelmesen elérhetők:

```ts
const routes: Routes = [
  {
    path: 'old-user/:id',
    redirectTo: (params) => {
      const userId = params.paramMap.get('id');
      const source = params.queryParamMap.get('source');
      return `/users/${userId}?ref=${source}`;
    },
  },
];
```

### Elavult component input értékek kezelése (v22+)
`withComponentInputBinding()` mellett szabályozható, mi történjen, ha egy komponens inputhoz nincs illeszkedő router-adat:
- **`'alwaysUndefined'`** – minden nem illeszkedő inputot töröl, így nem marad elavult érték.
- **`'undefinedIfStale'`** – szelektívebb: érintetlenül hagyja azokat az inputokat, amiket a router az adott komponenspéldányhoz **sosem** adott meg, de `undefined`-ra állítja azokat, amelyeknek korábban volt router-értéke, és az eltűnt.

Az `'undefinedIfStale'` a biztonságos választás újrahasznosított komponenspéldányoknál – amikor ugyanaz a komponens marad aktív két paraméterváltás között.

## 178. Common Runtime Error Codes and Debugging (v2+ · hydration hibák v16+) https://angular.dev/errors {#gyakori-futasideju-hibakodok-es-debugolas-v2-hydration-hibak-v16}
Az Angular hibaüzenetei `NGxxxx` kóddal kezdődnek, és a kód alapján az angular.dev-en teljes magyarázat érhető el (`https://angular.dev/errors/NG0100`). Az alábbiak azok, amikkel a napi munkában tényleg találkozunk.

| Kód | Üzenet | Tipikus ok | Megoldás |
|---|---|---|---|
| **NG0100** | ExpressionChangedAfterItHasBeenCheckedError | a sablonban olvasott érték a change detection után módosul (pl. `ngAfterViewInit`-ben írt property, vagy sablonban hívott, minden ciklusban új objektumot adó függvény) | signal / `computed`, az írás áthelyezése előbbre, végső esetben `afterNextRender` |
| **NG0200** | Circular dependency in DI | `A` injektálja `B`-t és fordítva | közös rész kiemelése harmadik szolgáltatásba (a ciklus tervezési hiba jele) |
| **NG0201** | No provider for X | hiányzó `providedIn` / `providers`, vagy rossz injectorban keressük | `@Injectable({ providedIn: 'root' })`, route- vagy komponensszintű `providers` |
| **NG0203** | inject() must be called from an injection context | `inject()` callbackben, `setTimeout`-ban vagy metódusban | mezőinicializálóban vagy konstruktorban hívjuk, illetve `runInInjectionContext()` |
| **NG0301** | Export not found | `#ref="ngForm"`-szerű exportName nem létezik (hiányzó import) | a direktíva felvétele az `imports` tömbbe |
| **NG0303** | Can't bind to 'ngModel' | `FormsModule` nincs importálva a standalone komponensben | `imports: [FormsModule]` |
| **NG0500 / NG0501 / NG0502** | Hydration node mismatch | a szerver és a kliens eltérő DOM-ot állít elő (`Math.random()`, `Date.now()`, böngésző-API a renderben) | determinisztikus render, `afterNextRender`, végső esetben `ngSkipHydration` az adott elemre |
| **NG0505** | Hydration was requested but no server rendering | `provideClientHydration()` SSR nélkül | SSR beállítása vagy a hydration provider eltávolítása |
| **NG0912** | Component ID generation collision | két komponens azonos szelektorral, sablonnal és stílussal | eltérő szelektor vagy tartalom; gyakran generált kódnál jelentkezik |
| **NG0913** | Image performance warning | `NgOptimizedImage` nélkül betöltött nagy LCP kép, hiányzó `priority` | `ngSrc` + `priority` az LCP képre |
| **NG0955** | Duplicate keys in @for track | a `track` kifejezés nem egyedi | valódi azonosító (`track item.id`); mutálódó listánál soha ne `track $index` |
| **NG01203** | No value accessor for form control | egyedi komponensre kötött `formControlName` `ControlValueAccessor` nélkül | `NG_VALUE_ACCESSOR` provider, vagy (v21+) `FormValueControl` |

### Debugolás a böngészőben
- **Fejlesztői konzol** – a fenti hibák itt jelennek meg először; a stack trace v15 óta az alkalmazás kódjára szűkített (az Angular belső keretei ki vannak hagyva).
- **Source map** – dev buildben alapból van. Production buildben ne szolgáljuk ki publikusan, de töltsük fel a hibakövető rendszerbe – a build hash minden loghoz kelleni fog, különben nem illeszthető.
- **Angular DevTools** (Chrome/Edge kiegészítő):
  - *Components* – komponensfa, az aktuális input/output és állapotértékek élőben szerkeszthetők.
  - *Profiler* – change detection ciklusok időbontásban; itt látszik, melyik komponens fut feleslegesen.
  - *Injector Tree* – melyik injector szolgáltatja az adott függőséget (DI hibák felderítésének leggyorsabb útja).
- **`ng.enableProfiling()`** (v20+) a konzolban: az Angular saját sávot kap a Chrome DevTools Performance paneljén.
- **`provideStabilityDebugging()`** (v22+): megmutatja, mi tartja „instable” állapotban az alkalmazást (függőben lévő task, timer, HTTP kérés) – SSR-nél és flaky e2e teszteknél ez a leggyorsabb nyom.

### Debugolás VS Code-ból

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

Így a töréspont közvetlenül a TypeScript forrásban működik, és a Vitest tesztek is debugolhatók a VS Code teszt-integrációjából.

## 179. Developer Ergonomics – HMR, strictStandalone, Self-closing Tags, Language Service (v16–v22) https://angular.dev/hmr {#fejlesztoi-ergonomia-hmr-strictstandalone-self-closing-tagek-language-service-v16-v22}
Ezek külön-külön apróságok, de naponta többször számítanak.

### Hot Module Replacement (v19+)
A `ng serve` beépítetten támogatja a **stílusok** HMR-jét, és experimental jelleggel a **sablonokét** is. A változás úgy jelenik meg, hogy az **alkalmazás állapota megmarad** – nem kell újra végigkattintani a wizardot minden CSS módosítás után.

```bash
ng serve             # HMR alapból bekapcsolva
ng serve --no-hmr    # kikapcsolás, ha zavaró
```

### strictStandalone (v19+)

```json
{
  "angularCompilerOptions": {
    "strictStandalone": true
  }
}
```

Bekapcsolva a fordító **megtiltja** a nem standalone komponenst, direktívát és pipe-ot:

```
[ERROR] TS-992023: Only standalone components/directives are allowed when
'strictStandalone' is enabled.
```

Alapértelmezetten `false` a fokozatos bevezetés miatt. A migráció végén kapcsoljuk be – ez akadályozza meg, hogy visszaszivárogjon a `NgModule`-alapú kód.

### Self-closing tagek (v16+)

```html
<app-flight-card [item]="flight" />
```

Kevesebb zaj, kevesebb elgépelt zárótag. Migráció: `ng generate @angular/core:self-closing-tag`.

### Angular Language Service
- **Auto-import** (v15+): a sablonba írt ismeretlen komponenst az IDE felajánlja importálni – standalone világban ez spórolja a legtöbb időt.
- **Rename symbol** és **go to definition** sablonból is működik.
- v19-től jobb támogatás a `@if` / `@for` blokkokhoz és a signal API-khoz.

### Extended diagnostics
A fordító figyelmeztet a néma hibákra – érdemes hibaszintre emelni őket:

```json
{
  "angularCompilerOptions": {
    "extendedDiagnostics": {
      "defaultCategory": "error",
      "checks": {
        "invalidBananaInBox": "error",
        "nullishCoalescingNotNullable": "error",
        "uninvokedFunctionInEventBinding": "error",
        "missingControlFlowDirective": "error",
        "uninvokedTrackFunction": "error"
      }
    }
  }
}
```

Tipikus fogások: `[(ngModel)]` helyett `([ngModel])`, `(click)="save"` a `save()` helyett, `@for` `track` függvény meghívás nélkül, `??` egy soha nem nullish kifejezésen, hiányzó strukturális direktíva import (v20-tól ezt is jelzi).

### typeCheckHostBindings (v20+)

```json
{ "angularCompilerOptions": { "typeCheckHostBindings": true } }
```

A `host: { '[class.active]': 'isActive()' }` kifejezések is típusellenőrzést kapnak – korábban ezek némán elszálltak futásidőben.

### Migrációs schematicok, amiket érdemes fejből tudni

```bash
ng generate @angular/core:standalone
ng generate @angular/core:control-flow
ng generate @angular/core:inject
ng generate @angular/core:signals
ng generate @angular/core:self-closing-tag
ng generate @angular/core:cleanup-unused-imports
```

## 180. Phasing Out CommonJS (CJS) Dependencies and Further Shrinking the Main Chunk (v14+ · esbuild v16+ · application builder v17+) https://angular.dev/guide/performance {#commonjs-cjs-fuggosegek-kivezetese-es-a-main-chunk-tovabbi-szukitese-v14-esbuild-v16}
Kiegészítés a *Bundle-optimalizálás* szekcióhoz: ott a mérés, a budget és a lazy loading szerepel, itt a két konkrét kérdés – **mitől nagy a CommonJS-hozzájárulás**, és **mi maradt még a main chunkban**.

### Miért drága egy CommonJS csomag
Az ESM (`import`/`export`,) statikusan elemezhető: a bundler fordítási időben tudja, mely exportokat használjuk, a többit kidobja. A CommonJS (`require()`, `module.exports`,) **futásidőben** oldódik fel, ezért:

- **nincs tree shaking** – a csomag teljes tartalma bekerül, akkor is, ha egyetlen függvényt hívunk belőle;
- a bundler **interop-wrappert** generál köré (`__toESM`, `__commonJS`), ami külön kód és futásidejű költség;
- gyakran **duplikálódik**: ha a fa több pontján más verzió kell belőle, több példány kerül a bundle-be;
- az Angular CLI ezért figyelmeztet build közben:
  `Warning: <lib> depends on 'xyz'. CommonJS or AMD dependencies can cause optimization bailouts.`

### 1. Derítsük ki, mi a CommonJS
```bash
ng build --configuration production          # a figyelmeztetések listája maga a leltár
npm ls <csomag>                              # hány verzió van a fában
cat node_modules/<csomag>/package.json       # "type", "module", "exports" mezők
npx publint node_modules/<csomag>            # a csomag ESM/CJS helyességének auditja
```

Egy csomag akkor ESM-barát, ha van `"module"` vagy `"exports"` mezője ESM belépési ponttal, és `"sideEffects": false`.

### 2. Cseréljük ESM-változatra
| CommonJS csomag | ESM alternatíva | Megjegyzés |
| --- | --- | --- |
| `moment` / `moment-timezone` | `date-fns`, `luxon`, natív `Intl` vagy `Temporal` | a `moment` egyben lokálokat is behúz |
| `lodash` | `lodash-es`, vagy natív nyelvi elem: `structuredClone`, `Object.groupBy` | `import { debounce } from 'lodash-es'` shakelhető |
| `rxjs/internal/...` mélyimport | `import { map } from 'rxjs'` | RxJS 7+ egyetlen belépési |
| `uuid` régi verzió | `crypto.randomUUID()` | natív, nulla bundle |
| `chart.js` 2.x / régi grafikon-libek | ESM | a major frissítés gyakran önmagában megoldás |

### 3. Amit nem lehet lecserélni: zárjuk lazy chunkba
Ha a CJS könyvtár nem váltható ki, akkor legalább **ne a main chunkban** legyen (dinamikus):

```ts
protected async openEditor(): Promise<void> {
  const { default: Editor } = await import('legacy-cjs-editor'); // saját chunk, csak igény szerint
  this.editor = new Editor(this.host.nativeElement);
}
```
A figyelmeztetést csak azután némítsuk el, hogy tudatos döntés lett belőle:
```json
// angular.json → architect.build.options
"allowedCommonJsDependencies": ["legacy-cjs-editor"]
```
Ez **nem optimalizálás**, hanem a warning elrejtése – üres listával induljunk, és minden új bejegyzés kapjon indoklást a PR-ben.

### 4. Duplikált verziók összevonása
Ugyanaz a könyvtár két verzióban kétszer kerül a bundle-be:
```bash
npm ls date-fns          # több verzió → duplikáció
npm dedupe               #
```
```json
// package.json – csak akkor, ha a verziók kompatibilisek
"overrides": { "date-fns": "^4.1.0" }
```

### 5. Ami a main chunkban maradni szokott
| Tétel | Mit tegyünk |
| --- | --- |
| `zone.js` (~35 kB) | zoneless mód (`provideZonelessChangeDetection()`,), és a `polyfills` bejegyzés törlése az `angular.json`-ból |
| `@angular/localize` polyfill | csak akkor kell, ha runtime i18n van; build |
| régi böngészőknek szóló polyfillek | `browserslist` szűkítése – az esbuild ez alapján dönt, mit transzpilál |
| teljes ikon- vagy Material-készlet | névre szóló import, illetve csak a használt komponensek |
| eagerly importált error-tracking/analytics SDK | dinamikus import az `afterNextRender`-ben |
| fejlesztői segédkód (mock adat, seed, debug panel) | build configuration szerinti feltételes import, hogy production buildben ki se kerüljön |

Ellenőrzés a végén – mi töltődik be, de nem fut le az első képernyőn: Chrome DevTools **Coverage** panel. Az itt látszó „unused bytes” a lazy loading legjobb célpontlistája.

Bundle-vizualizáció: source-map-explorer, esbuild-visualizer.

## 181. Finding Performance Bottlenecks – Methodology and Tools (v17+ · enableProfiling v20+ · provideStabilityDebugging v22+) https://angular.dev/best-practices/profiling-with-chrome-devtools {#performance-bottleneck-keresese-modszertan-es-eszkozok-v17-enableprofiling-v20}
A cél nem az, hogy „gyorsítsunk valamit”, hanem hogy **megtaláljuk a szűk keresztmetszetet**. A sorrend mindig: mérés → hipotézis → célzott javítás → újramérés. Angular teljesítmény

### 1. Melyik metrika romlott?
Először azonosítsuk a tünetet, mert más eszköz tartozik hozzá:

| Tünet | Metrika | Első eszköz |
| --- | --- | --- |
| lassú első megjelenés | LCP, TTFB | Lighthouse, Network panel |
| kattintásra késik a UI | INP | Performance panel, Long Animation Frames |
| görgetés akadozik | frame drop | Performance panel Frames |
| beírás közben lassul a form | change detection | Angular DevTools |
| idővel egyre lassul | memóriaszivárgás | Memory panel – ld. a következő szekció |
| e2e teszt flaky / SSR nem fejeződik be | stabilitás | |

Éles adat mérésére a **web-vitals** könyvtár való – a laborérték és a mezei felhasználó élménye eltér:
```ts
import { onLCP, onINP, onCLS } from 'web-vitals';
onINP((metric) => this.telemetry.send('inp', metric.value));
```

### 2. Chrome DevTools Performance panel

A felvétel (Record → interakció → Stop) után: A flame chart tetején látszik a legfelső hívó, alul a tényleges munka.
- **Bottom-Up** nézet – „mi fogyasztotta a legtöbb önidőt”. Ez a leggyorsabb út a valódi bűnöshöz.
- **Call Tree** – a hívási lánc, ha tudni akarjuk, honnan indul.
- **Frames** – vizuálisan mutatja a kiesett képkockákat.

### 3. Angular-specifikus profilozás
```ts
// böngésző konzol
ng.enableProfiling();
```
Ezután az Angular saját sávot kap a Performance panelen: látszik, melyik komponens change detectionje, template-je vagy effectje mennyi ideig fut.

**Angular DevTools → Profiler**: felvétel indítása, majd interakció. A bar chart minden change detection ciklust külön mutat, komponensenkénti bontásban. Amit keresünk:
- ugyanaz a komponens **sokszor** fut le egyetlen interakcióra → hiányzó OnPush, vagy effectben végzett írás;
- egy komponens **egyszer, de sokáig** fut → drága sablon-kifejezés vagy nagy lista `track` nélkül;
- **minden** komponens újrafut → zone.js-alapú globális ciklus (globális esemény, `setInterval`, harmadik féltől származó lib).

### 4. Angularban tipikus bottleneck-ek

| Jel | Ok | Javítás |
| --- | --- | --- |
| sablonban hívott függvény minden CD-ciklusban lefut | `{{ calculateTotal() }}` | `computed()` |
| hosszú lista újrarenderelése | hiányzó vagy rossz `track` | `track |
| pipe minden ciklusban újraszámol | impure pipe | pure pipe vagy |
| gépelésre HTTP kérés-özön | nincs debounce | `debounced()` signal (v22+, |
| minden esemény globális CD-t indít | zone.js | zoneless mód, vagy `NgZone.runOutsideAngular()` a nagy frekvenciájú |
| óriási táblázat DOM-ban | nincs virtualizáció | CDK `cdk |
| lassú kezdeti render | mindent egyszerre renderelünk | `@defer (on |
| főszálat blokkoló számítás | nagy adathalmaz parse/transzformáció | Web |

### 5. Hálózat és szerveroldal
- **Network waterfall**: mikor indul a kérés (waterfall lépcső = szekvenciális függés), mekkora a payload, van-e tömörítés, cache-header. megmondja, mi tartja instable állapotban az alkalmazást – függőben lévő HTTP kérés, timer, task. SSR-nél ez magyarázza a lassú TTFB-t, e2e-nél a flakyt.

### 6. Regresszió elleni védelem

## 182. Finding and Diagnosing Memory Leaks (v2+ · takeUntilDestroyed v16+ · DestroyRef v16+) https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed {#memory-leak-keresese-es-diagnosztizalasa-v2-takeuntildestroyed-v16}
Memóriaszivárgás akkor van, ha egy már nem használt objektumot **még mindig hivatkoz** valami, ezért a GC nem tudja felszabadítani. A tünet: az alkalmazás hosszú használat során lassul, majd összeomlik – tipikusan navigálás vagy modál nyitogatás után.

### 1. Reprodukálás mérhető formában
Mindig ugyanazt a ciklust futtassuk (pl. „nyisd meg a listát → nyisd meg a részleteket → navigálj vissza” ×10), és a ciklusok között mérjünk. Ha a felhasznált heap ciklusonként monoton nő és a GC után sem esik vissza, valós szivárgás van.

### 2. Chrome DevTools → Memory panel
**Heap snapshot összehasonlítás**:
1. Nyisd meg a gyanús nézetet, majd navigálj el róla.
2. Kényszerített GC (a Memory panel kuka ikonja), majd **Snapshot 1**.
3. Futtasd le a ciklust 5–10-szer.
4. Ismét GC, majd **Snapshot 2**.
5. A snapshot listában válts **Comparison** nézetre, rendezz `#Delta` szerint.

Amit keresünk: a komponensosztály neve (`FlightSearchComponent`) `#Delta = +10` értékkel, azaz **10 példány maradt életben** 10 ciklus után. Kattintsunk rá, majd a **Retainers** panelen visszafelé olvasva látszik a hivatkozási lánc, ami életben tartja – ez maga a hibás kód helye.

**Detached DOM node-ok:** a snapshot Summary nézetében szűrjünk a `Detached` szóra. A DOM-ból eltávolított, de JS-ből még hivatkozott elemek majdnem mindig leiratkozatlan event listenerre vagy elmentett `ElementRef`-re utalnak.

**Allocation instrumentation on timeline:** folyamatos felvétel, ami idővonalon mutatja a foglalásokat; a fel nem szabaduló sávok mutatják a szivárgó allokációkat

**Performance panel Memory jelölőnégyzete**: a JS heap görbe alakja árulkodó – a fűrészfog egészséges, a lépcsőzetesen emelkedő alapvonal szivárgás.

### 3. Angularban tipikus szivárgásforrások

| Forrás | Miért marad életben | Megoldás |
| --- | --- | --- |
| kézi `subscribe()` a komponensben | a stream tartja a komponenst | `toSignal()`, `resource`, vagy `takeUntilDestroyed()` |
| `Router.events`, `NavigationEnd` feliratkozás | a router az app teljes életciklusán él | `takeUntilDestroyed()` |
| `setInterval` / `setTimeout` | a timer tartja a callback closure-jét | `DestroyRef.onDestroy(() => |
| `window`/`document` event listener | a globális objektum tartja | `@HostListener`, `fromEvent` + `takeUntilDestroyed`, vagy explicit `removeEventListener` |
| `ResizeObserver` / `IntersectionObserver` | soha nem hívott `disconnect()` | |
| harmadik féltől származó lib (chart, map, editor) | saját belső regisztráció | a lib `destroy()` metódusa `ngOnDestroy` |
| statikus/`root` szintű cache Map | soha nem ürül | méretkorlát, TTL, vagy |
| `ViewContainerRef.createComponent()` | a nézet a containerben marad | `viewRef.destroy()` / |
| `BehaviorSubject` nagy objektummal singleton service-ben | az utolsó érték örökre bent marad | nullázás kilépéskor, vagy szűkebb scope |
| elhagyott `effect()` injection contexten kívül | nincs, ami megsemmisítse | injection contextben hozzuk létre, vagy |

```ts
// a három leggyakoribb takarítás egy helyen
export class MapPanel {
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const id = setInterval(() => this.tick(), 1000);
    const observer = new ResizeObserver(() => this.relayout());
    this.destroyRef.onDestroy(() => {
      clearInterval(id);
      observer.disconnect();
      this.thirdPartyMap?.destroy();
    });

    this.router.events
      .pipe(takeUntilDestroyed())
      .subscribe((e) => this.handle(e));
  }
}
```

### 4. Megelőzés
- **Deklaratív adatfolyam**: `toSignal` / `resource` / `httpResource` mellett nincs mit leiratkoztatni.
- **Route-szintű provider** a hosszú életű `root` service helyett, ha az állapot csak egy funkcióhoz tartozik – így a route elhagyásakor felszabadul.

### 5. Szerveroldal (SSR) és Node
Az SSR folyamat hosszan él, ezért ott a szivárgás azonnal üzemzavar:
```bash
node --inspect dist/server/server.mjs      # DevTools rácsatlakozás, heap snapshot ugyanúgy
node --heapsnapshot-signal=SIGUSR2 server.mjs   # snapshot élesben, jelre
```
```ts
setInterval(() => console.log(process.memoryUsage().heapUsed / 1e6, 'MB'), 30_000);
```
Tipikus szerveroldali ok: modul-szintű (globális) cache, ami kérésenként nő, illetve a kérés kontextusát fogó closure. Kérés-szintű állapotot mindig kérés-szintű injectorban tartsunk.

### 6. Böngészőoldali telemetria
```ts
if ('measureUserAgentSpecificMemory' in performance) {
  const result = await performance.measureUserAgentSpecificMemory();
  this.telemetry.send('memory', result.bytes);
}
```
Cross-origin izolációt igényel, de éles környezetben ez ad valós trendet – a laborban észre sem vett szivárgás így jön elő.

## 183. Memory Optimization – Dev Environment and Build Memory Usage (TypeScript 5+ · v14+) https://www.typescriptlang.org/tsconfig/ {#memory-optimization-a-fejlesztoi-kornyezet-es-a-build-memoriahasznalata-typescript-5-v14}
Nem csak a futó alkalmazás fogyaszt memóriát: egy nagy Angular monorepóban a **szerkesztő, a fordító, a linter és a tesztfuttató** együtt könnyen elviszi a gép RAM

### 1. TypeScript: mekkora programot lát a fordító
**`skipLibCheck: true`** – enélkül a TypeScript a `node_modules` alatti **összes** `.d.ts` fájlt mélyen típusellenőrzi minden fordításnál, és ezt **minden folyamat külön elvégzi**: a szerkesztő nyelvi szervere, a build és minden párhuzamos teszt-worker. Nagy projektben ez tízezres nagyságrendű fájl. A saját kódunk típusbiztonságát nem csökkenti, csak az ismétlődő munkát szünteti meg; új Angular projektekben ez az alapértelmezés.
```json
{ "compilerOptions": { "skipLibCheck": true } }
```

**`exclude` a gyökér `tsconfig.json`-ban** – a szerkesztő nyelvi szervere azt a tsconfigot használja, amelynek `include`-ja lefedi a szerkesztett fájlt. Ha nincs `exclude`, akkor idegen kódbázisok (mock szerver, Storybook, generált kód, `dist`) is **ugyanabba a TypeScript-programba** kerülnek, más beállításokkal.
```json
{
  "exclude": ["node_modules", "dist", "coverage", "out-tsc", ".storybook", "mock-server", ".angular"]
}
```
Ellenőrzés – mennyi fájlt lát valójában a fordító:
```bash
npx tsc --listFilesOnly | wc -l
npx tsc --noEmit --extendedDiagnostics    # memória- és időbontás fázisonként
```

**Projekthivatkozások** (`references` + `composite: true`,) nagy monorepóban: a fordító részprogramokra bontja a munkát, és inkrementálisan dolgozik ahelyett, hogy mindent egyetlen programba töltene.

### 2. Linter: a type-aware lint ára
A típusinformációt használó lint szabályok saját TypeScript

Két gyakori hiba sokszorozza a költséget:
- **több, egymást átfedő `project` bejegyzés**, vagy nem létező tsconfigra hivatkozás; – a typescript-eslint dokumentációja is jelentős lassulás és memóriaprobléma forrásaként írja le.

Mai ajánlás: egyetlen, pontos `project`, vagy a **project service** használata, és a linter Node-processzének heap-korlátozása:
```json
// .vscode/settings.json
{ "eslint.execArgv": ["--max-old-space-size=2048"], "eslint.run": "onSave" }
```
Az `onSave` azt jelenti, hogy a linter nem fut minden billentyűleütésre – cserébe nincs élő, gépelés közbeni visszajelzés.

### 3. Tesztfuttatás: ne fordítsunk kétszer
- **Transpile-only mód** – ts-jest `isolatedModules`, jest-preset-angular, illetve az esbuild/SWC-alapú transformerek és a Vitest alapértelmezése: a teszt-workerek fájlonként, típusellenőrzés nélkül fordítanak. A típushelyességet úgyis a szerkesztő, a build és a CI ellenőrzi külön – a workerenkénti újraellenőrzés tiszta duplikáció. Tapasztalati nyereség nagy suite-on: 15–20% futásidő és arányos memória.
  *Kockázat:* decorator tesztek elromolhatnak tőle – bevezetés után **futtassuk le a teljes suite-ot** előtte/utána, és hasonlítsuk össze a darabszámot.
- **Worker-szám korlátozása**: `--maxWorkers=50%`. Minden worker külön Node-processz, saját heappel – a CPU-magok száma szerinti automatikus skálázás a fejlesztői gépet kifagyaszthatja. különben a projekt megnyitásakor és minden mentésnél elindul a teljes suite – gyakran még lefedettség-számítással is. komponensfát és injectort épít; a tiszta függvény- vagy store-teszt nem. Ahol nincs sablon, ott ne legyen TestBed. Mérhető különbség jellemzően **kétszeres** futásidő és arányos memória tesztfájlonként.

### 4. Szerkesztő: mit indexel és mit figyel
Beállítások

| Beállítás | Hatás |
| --- | --- |
| a nyelvi szerver memóriakorlátja (pl. `js/ts.tsserver.maxMemory: 4096`) | felső korlát a folyamatnak; nagyon nagy művelet (workspace-szintű átnevezés) esetén inkább újraindul, mint hogy tovább nőjön |
| `package.json` | a nyelvi szerver alapból az **összes** függőséget indexeli auto-import javaslatokhoz; kikapcsolva csak a saját fájlokból javasol |
| natív fájlrendszer | nagy fastruktúránál lényegesen kevesebb CPU és memória |
| `files.watcherExclude` / `search.exclude` bővítése | a generált mappák (`dist`, `coverage`, cache, riportok) kikerülnek a figyelésből és az indexelésből |
| memóriaigényes szerkesztő-bővítmények (folyamatos blame-annotáció, soron belüli hover-kártyák, élő tesztfutás) | kapcsoljuk ki az automatikus, minden sorra futó módjukat – a funkció parancsból továbbra is elérhető |

Fontos: a szerkesztő-beállítások kulcsnevei verzióról verzióra elavulhatnak. Bevezetés után ellenőrizzük, hogy a beállítás nem kap „deprecated” jelzést – az elavult kulcs némán hatástalan.

### 5. Függőség-higiénia
- **Nem használt csomagok**: minden telepített devDependency növeli a fájlszámot, a típusfát és az indexelnivalót. Keresés: `npx knip`, `npx depcheck`. Egyetlen nagy, sehol nem hívott eszközcsomag könnyen a `node_modules` 10–20%-a lehet.
- **Ütköző verzióágak**: ha egy csomag más major verziójú alfüggőséget húz be, duplikálódik a típusfa is. `npm ls <csomag>` mutatja meg; összevonás: `npm dedupe`.
- **Determinisztikus telepítés**: `npm ci` a `npm install` helyett. A driftelt `node_modules` nemcsak reprodukálhatatlan, hanem a biztonsági `overrides` bejegyzések **némán hatástalanná** válhatnak benne. Ellenőrzés: `npm ls --depth=0` ne jelezzen `invalid` csomagot.

### 6. Holt konfiguráció és elhagyott munkakönyvtárak
- **Holt config**: nem használt tesztfuttató-konfiguráció, duplikált tsconfig, törött npm scriptek. Nem fogyasztanak sokat, de a nyelvi szervert és a fejlesztőt is félrevezetik – töröljük, miután ellenőriztük, hogy semmi nem hivatkozik rájuk.
- **Elhagyott git worktree-k / munkamásolatok**: a legalattomosabb tétel. Néhány felejtett worktree több tízezer extra forrásfájlt jelent a figyelt fastruktúrában, és ettől a memóriafogyasztás megsokszorozódhat.
```bash
git worktree list
git worktree prune
```
Érdemes ezt (és a felismert tesztfájlok darabszámát) egy néhány soros diagnosztikai scriptbe tenni, amit gyanús lassulás esetén bárki lefuttathat.

### 7. Heap-korlátok beállítása
```bash
#
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```
A korlát nem csökkenti a fogyasztást, de **kiszámíthatóvá** teszi: a folyamat hamarabb és értelmezhető hibával áll meg, ahelyett hogy a teljes gépet swapbe kényszerítené. CI-ben minden hosszú futású Node-lépésnek adjunk explicit korlátot.

### 8. Ellenőrzőlista
- [ ] `skipLibCheck: true` minden tsconfigban
- [ ] a gyökér tsconfig `exclude`-ja lefedi a generált és idegen mappákat
- [ ] `tsc --listFilesOnly` fájlszáma indokolt (nincs benne idegen kódbázis)
- [ ] a type-aware lint egyetlen, létező tsconfigra mutat, nincs fallback program-építés
- [ ] a teszt-workerek transpile-only módban futnak, korlátozott worker-számmal
- [ ] a tesztek nem indulnak automatikusan a szerkesztő megnyitásakor
- [ ] a szerkesztő nem indexeli a `node_modules`-t auto-importhoz, és nem figyeli a `dist`/cache mappákat
- [ ] `npm ci` a telepítés, `npm ls --depth=0` tiszta
- [ ] nincs nem használt devDependency (`knip` / `depcheck`)
- [ ] nincs elhagyott git worktree
- [ ] a hosszú futású Node-lépéseknek van explicit heap-korlátja


## 184. TypeScript Abstract Syntax Tree (AST) (TypeScript 5+) https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API {#typescript-abstract-syntax-tree-ast-typescript-5}
Az **AST** a TypeScript forráskód fa-szerkezetű, géppel olvasható ábrázolása. A fordító (és az Angular compiler, az ESLint, a Prettier, a schematics) nem a szövegre, hanem erre a fára dolgozik: bejárja a csomópontokat, ellenőriz, átalakít, kódot generál.

**Mire való a napi munkában**
- saját ESLint szabály / codemod („minden `subscribe()`-hoz legyen `takeUntilDestroyed`”),
- Angular schematics és `ng update` migrációk,
- Language Service (autocomplete, quick fix),
- build-idő optimalizálás és tree-shaking elemzés.

```ts
import ts from 'typescript';

const source = `const answer = 42;`;
const sf = ts.createSourceFile('demo.ts', source, ts.ScriptTarget.Latest, true);

function visit(node: ts.Node): void {
  if (ts.isVariableDeclaration(node) && node.name.getText(sf) === 'answer') {
    console.log('initializer:', node.initializer?.getText(sf)); // 42
  }
  ts.forEachChild(node, visit);
}
visit(sf);
```

A lényeg: szöveges `replace` helyett az AST-n dolgozunk – így a kommentek, whitespace és a szintaxis határai biztonságosan kezelhetők. Az Angular Ivy is template-AST-t épít a sablonokból (bindingek, control flow), ezért a `strictTemplates` hibák is AST-alapúak.

## 185. Component Lifecycle – Which Hook to Use (v2+ · afterRender v17+) https://angular.dev/guide/components/lifecycle {#komponens-lifecycle-melyik-hook-mire-valo-v2-afterrender-v17}
A lifecycle hookok a komponens/direktíva **életszakaszaira** adnak visszahívást. Napi munkában ne mindet implementáld – csak azt, amire tényleg szükség van.

| Hook / API | Mikor fut | Tipikus használat |
| --- | --- | --- |
| konstruktor | példányosításkor | csak DI mezők; **ne** DOM, ne HTTP |
| `ngOnChanges` | input változik | legacy input-reakció; modern: `input()` + `computed`/`effect` |
| `ngOnInit` | első inputok után, egyszer | egyszeri setup (ha nem megy mezőinicializálóba) |
| `ngDoCheck` | minden CD-ciklusban | kerüld – drága; OnPush + signal jobb |
| `ngAfterContentInit` | projected tartalom kész | `contentChild` helyett ritkán kell |
| `ngAfterViewInit` | saját view kész | DOM mérés legacy módon; modern: `afterNextRender` |
| `ngOnDestroy` | megsemmisülés előtt | cleanup; modern: `DestroyRef` / `takeUntilDestroyed` |
| `afterNextRender` | következő böngésző-render után, egyszer | chart init, focus, `getBoundingClientRect` |
| `afterRender` / `afterRenderEffect` | minden render után | folyamatos DOM-szinkron (ritka) |

```ts
export class ChartHost {
  readonly el = viewChild.required<ElementRef<HTMLDivElement>>('host');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const chart = new Chart(this.el().nativeElement);
      this.destroyRef.onDestroy(() => chart.destroy());
    });
  }
}
```

**Ökölszabály:** adat/logika → signal + `computed`/`resource`; DOM a render után → `afterNextRender`; feliratkozás leállítása → `takeUntilDestroyed` / `DestroyRef`. A klasszikus `ngOnInit`/`ngOnDestroy` pár egyre ritkábban kell.

## 186. @HostBinding and @HostListener – Host Element Binding (v2+ · host object recommended) https://angular.dev/guide/components/host-elements {#hostbinding-es-hostlistener-gazda-elem-kotese-v2-host-objektum-ajanlott}
A host API a **komponens/direktíva saját host element** köt osztályt, attribútumot, stílust vagy eseményt – anélkül, hogy a sablonban wrapper divet vezetnél be.

**Mire használjuk**
- akadálymentes `role` / `aria-*` a host element,
- `class.active` állapot a direktívából,
- billentyűzet / click / `window:resize` kezelése encapsulationön belül.

```ts
@Directive({
  selector: '[appMenuItem]',
  host: {
    '[class.active]': 'isActive()',
    '[attr.aria-current]': 'isActive() ? "page" : null',
    '(click)': 'activate()',
    '(document:keydown.escape)': 'close()',
  },
})
export class MenuItemDirective {
  readonly isActive = input(false);
  readonly activate = output<void>();
  close(): void { /* ... */ }
}
```

A decorator-based forma (`@HostBinding`, `@HostListener`) működik, de a `@Component`/`@Directive` **`host`** objektuma az ajánlott, modern írásmód (jobban látszik egy helyen, és a `typeCheckHostBindings` ellenőrzi).

## 187. AOT Compilation – Why It Is the Default (v9+ Ivy · AOT by default) https://angular.dev/tools/cli/aot-compiler {#aot-forditas-miert-ez-az-alapertelmezett-v9-ivy-aot-alapbol}
Az **AOT (Ahead-of-Time)** a sablonokat és a TypeScriptet **build időben** JavaScriptté fordítja. A böngésző már kész kódot kap – kisebb runtime, korábbi hibák, jobb biztonság (nincs runtime template compiler a prod bundle-ben).

**Mire való**
- production build (`ng build`) – AOT az alap,
- `strictTemplates` hibák elkapása CI-ben,
- kisebb és gyorsabb induló bundle Ivy mellett.

```bash
ng build                 # AOT default
ng serve                 # dev-ben is AOT (Ivy óta)
```

A régi **JIT** (Just-in-Time) a böngészőben fordított – ma már ritka kivétel. Ha egy library View Engine formátumban van, az `ngcc` (régebbi) vagy az Ivy-kompatibilis package format kell; modern Angularban a partial-Ivy library formátum az elvárt.

## 188. Reactive Forms Essentials – updateOn, markAllAsTouched, FormArray.clear (v2+ · markAllAsTouched/clear v8+) https://angular.dev/guide/forms/reactive-forms {#reactive-forms-praktikum-updateon-markallastouched-formarray-clear-v2-markallastouched-clear-v8}
Három napi fogás, ami sokat javít az UX-en és a kód rövidségén.

**`updateOn: 'change' | 'blur' | 'submit'`** – mikor írja az érték/validáció a kontrollt. Keresőmezőnél gyakran `blur` vagy debounce; submit-only validációnál `submit`.

```ts
this.form = this.fb.nonNullable.group({
  email: ['', { validators: [Validators.email], updateOn: 'blur' }],
});
```

**`markAllAsTouched()`** – submitkor az egész fa (group/array leszármazottak) touched lesz, így a hibák megjelennek anélkül, hogy mezőnként kellene végigjárni.

```ts
onSubmit(): void {
  this.form.markAllAsTouched();
  if (this.form.invalid) return;
  this.save(this.form.getRawValue());
}
```

**`FormArray.clear()`** – az összes kontroll eltávolítása egy hívással (loop + `removeAt` helyett).

```ts
const tags = this.fb.nonNullable.array<string>(['a', 'b']);
tags.clear(); // []
```

## 189. exportAs – Component/Directive API in the Template (v2+) https://angular.dev/guide/directives {#exportas-komponens-direktiva-api-a-sablonban-v2}
Az `exportAs` megad egy **template változónevet**, amellyel a szülő sablon eléri a direktíva/komponens nyilvános API-ját – anélkül, hogy `@ViewChild`-ot írnál a osztályba.

```ts
@Directive({ selector: '[appTooltip]', exportAs: 'tooltip' })
export class TooltipDirective {
  open(): void { /* ... */ }
  close(): void { /* ... */ }
}
```
```html
<span appTooltip #tip="tooltip">Súgó</span>
<button type="button" (click)="tip.open()">Megnyitás</button>
```

**Mire való:** reusable UI primitívek (tooltip, dropdown, stepper), ahol a sablonból kell hívni `open()`/`close()` metódust. Több alias is megadható: `exportAs: 'menu, menuTrigger'`.

## 190. DomSanitizer – Trusted HTML, URL, Script (v2+) https://angular.dev/best-practices/security {#domsanitizer-trusted-html-url-script-v2}
Az Angular alapból **sanitizálja** a veszélyes HTML/URL értékeket. Ha szándékosan kell „nyers” HTML (CMS tartalom, SVG), a `DomSanitizer` jelöli trustedként – de ez XSS kapu, ezért ritkán és indokkal.

```ts
private readonly sanitizer = inject(DomSanitizer);

readonly safeHtml = computed(() =>
  this.sanitizer.bypassSecurityTrustHtml(this.htmlFromCms()),
);
```
```html
<div [innerHTML]="safeHtml()"></div>
```

**Mire használjuk:** trusted CMS HTML, resource URL iframe-hez (`bypassSecurityTrustResourceUrl`), stílus URL. **Ne** használjuk user inputra review nélkül; részesítsd előnyben a markdown→safe HTML pipeline-t vagy a backend oldali sanitizálást.

## 191. Arrow Function vs Function – `this` Binding (JavaScript) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions {#nyilfuggveny-vs-function-a-this-kotese-javascript}
A klasszikus `function` saját `this`-t kap híváskor; az **arrow function lexikálisan** örökli a külső `this`-t. Angular osztálymetódusok callbackjeinél (RxJS, DOM) ez a leggyakoribb `undefined` forrás.

```ts
export class Search {
  private readonly term = signal('');

  // rossz: function esetén this elvész a subscribe callbackben, ha nem bindolod
  legacy(): void {
    this.http.get<string[]>('/api').subscribe(function (rows) {
      // this.term ... TypeError lehet
    });
  }

  // jó: arrow function megtartja az osztály this-ét
  modern(): void {
    this.http.get<string[]>('/api').subscribe((rows) => this.term.set(rows[0] ?? ''));
  }
}
```

**Ökölszabály:** osztályon belül callbackhez mindig `arrow function` (vagy class-field arrow function). `bind(this)` csak legacy kódban.
