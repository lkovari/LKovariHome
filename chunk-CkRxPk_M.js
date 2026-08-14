var a=`# Front-End knowledge base
Collected by L\xE1szl\xF3 K\u0151v\xE1ri

## Tartalomjegyz\xE9k {#tartalomjegyzek}

1. [TypeScript Configuration (TypeScript 5+)](#typescript-configuration-typescript-5)
2. [Angular Compiler Options (v9+ (Ivy))](#angular-compiler-options-v9-ivy)
3. [Change Detection Strategy (OnPush) (v2+ \xB7 default from v22)](#change-detection-strategy-onpush-v2-v22-tol-alapertelmezett)
4. [Routing \u2013 Location Strategies (v2+ \xB7 withHashLocation() v15+)](#routing-location-strategies-v2-withhashlocation-v15)
5. [Routing \u2013 Passing Parameters (v2+)](#routing-parameterek-atadasa-v2)
6. [Routing Events and Guards (v2+ \xB7 functional guards v15+ \xB7 canMatch v14.2+)](#routing-events-es-guards-v2-funkcionalis-guardok-v15-canmatch-v14-2)
7. [Components Communication (v2+ \xB7 input()/output()/model() v17.x)](#components-communication-v2-input-output-v17-v18)
8. [RxJS Operators (RxJS 6+)](#rxjs-operators-rxjs-6)
9. [Observables \u2013 Hot & Cold (RxJS 6+)](#observables-hot-cold-rxjs-6)
10. [Subjects (RxJS 6+)](#subjects-rxjs-6)
11. [ES6-ES15 Features (Short Overview) (ECMAScript 2015\u20132025)](#es6-es15-features-rovid-osszefoglalo-ecmascript-2015-2025)
12. [ViewEncapsulation (v2+)](#viewencapsulation-v2)
13. [CSS Specificity (CSS)](#css-specificity-css)
14. [CSS Combinators (CSS)](#css-combinators-css)
15. [Pseudo Classes (CSS)](#pseudo-classes-css)
16. [Positioning (CSS)](#positioning-css)
17. [Closure (JavaScript)](#closure-javascript)
18. [TypeScript Data Types (and JavaScript Data Types) (TypeScript 5+)](#typescript-data-types-es-javascript-data-types-typescript-5)
19. [Error Handling (v2+ \xB7 functional interceptors v15+)](#error-handling-v2-funkcionalis-interceptorok-v15)
20. [Pipes (v2+)](#pipes-v2)
21. [Directives (v2+ \xB7 @if/@for/@switch v17+)](#directives-v2-if-for-switch-v17)
22. [Generics (TypeScript 5+)](#generics-typescript-5)
23. [DI \u2013 Resolution Modifiers (v2+ \xB7 inject() options v14+)](#di-resolution-modifiers-v2-inject-opciok-v14)
24. [Class, Property, Method, Parameter Decorators (TypeScript 5+ \xB7 v2+)](#class-property-method-parameter-decorators-typescript-5-v2)
25. [Monkey Patching in JavaScript (JavaScript)](#monkey-patching-javascript-ben-javascript)
26. [CSS Units (CSS)](#css-units-css)
27. [HTML & CSS Antipatterns (HTML/CSS)](#html-css-antipatterns-html-css)
28. [Angular & TypeScript Antipatterns (v2+)](#angular-typescript-antipatterns-v2)
29. [Bootstrap \u2013 Commonly Used Elements (Bootstrap 5)](#bootstrap-gyakran-hasznalt-elemek-bootstrap-5)
30. [Flexbox (CSS)](#flexbox-css)
31. [CSS Grid \u2013 Example (CSS)](#css-grid-pelda-css)
32. [Angular Version Overview (v5\u2013v19, Short Overview) (v5\u2013v19)](#angular-version-overview-v5-v19-rovid-attekintes-v5-v19)
33. [Angular 17 \u2013 New Features (v17)](#angular-17-uj-funkciok-v17)
34. [Angular 18 \u2013 New Features (v18)](#angular-18-uj-funkciok-v18)
35. [Angular 19 \u2013 New Features (First Overview) (v19)](#angular-19-uj-funkciok-elso-attekintes-v19)
36. [RouterTestingHarness (v14+)](#routertestingharness-v14)
37. [Directive Composition API (v15+)](#directive-composition-api-v15)
38. [Angular Signals (v16 dev preview \xB7 v17 stable)](#angular-signals-v16-dev-preview-v17-stable)
39. [Signal Input / Output (input() v17 \xB7 output() v17.3 \xB7 model() v17.2 \xB7 signal query-k v17.2)](#signal-input-output-input-v17-output-model-v18-signal-query-k-v17-2)
40. [ngOptimizedImage (v14 dev preview \xB7 v15 stable \xB7 decoding v21+)](#ngoptimizedimage-v14-dev-preview-v15-stable-decoding-v21)
41. [ngTemplateOutlet (v2+)](#ngtemplateoutlet-v2)
42. [ngProjectAs (v2+ \xB7 ng-content fallback v18+)](#ngprojectas-v2-ng-content-fallback-v18)
43. [Content Projection (v2+ \xB7 fallback tartalom v18+)](#content-projection-v2-fallback-tartalom-v18)
44. [ngNonBindable (v2+)](#ngnonbindable-v2)
45. [Custom Structural Directive \u2013 Example (v2+)](#custom-structural-direktiva-pelda-v2)
46. [Directives and Their Usage (ng* helpers) (v2+)](#directivak-es-hasznalatuk-ng-segedek-v2)
47. [Zoneless Change Detection (v18 experimental \xB7 v20.2 stable)](#zoneless-change-detection-v18-kiserleti-v20-2-stable)
48. [Server Side Rendering (SSR) (v17+ (@angular/ssr))](#server-side-rendering-ssr-v17-angular-ssr)
49. [Angular Migration Commands (v6+ (ng update))](#angular-migration-commands-v6-ng-update)
50. [UntypedFormGroup (v14+)](#untypedformgroup-v14)
51. [UntypedFormBuilder (v14+)](#untypedformbuilder-v14)
52. [Data Binding (v2+)](#data-binding-v2)
53. [Built-in Validators (v2+)](#built-in-validators-v2)
54. [Builder Settings (v16+ (esbuild) \xB7 v17+ application builder)](#builder-settings-v16-esbuild-v17-application-builder)
55. [TypeScript Method Overload / Override (TypeScript 5+)](#typescript-method-overload-override-typescript-5)
56. [FakeAsync, tick, flush, flushMicrotask (v2+ \xB7 zone-based; use Vitest fake timers when zoneless)](#fakeasync-tick-flush-flushmicrotask-v2-zone-alapu-zoneless-helyett-vitest-fake-timers)
57. [Component Selectors (v2+)](#component-selectors-v2)
58. [Style Binding (v2+)](#style-binding-v2)
59. [DestroyRef (v16+)](#destroyref-v16)
60. [Injection Context (v14+ \xB7 runInInjectionContext v16+)](#injection-context-v14-runininjectioncontext-v16)
61. [Template Reference Variables (v2+)](#template-reference-variables-v2)
62. [Structural Directive \u2013 Accessing Exported Values (v2+ \xB7 @let v19+)](#structural-directive-exportalt-ertek-elerese-v2-let-v19)
63. [Signal (v16 dev preview \xB7 v17 stable)](#signal-v16-dev-preview-v17-stable)
64. [Effect (v16 dev preview \xB7 v20 stable)](#effect-v16-dev-preview-v20-stable)
65. [Computed (v16 dev preview \xB7 v17 stable)](#computed-v16-dev-preview-v17-stable)
66. [LinkedSignal (v19 experimental \xB7 v20 stable)](#linkedsignal-v19-kiserleti-v20-stable)
67. [TypeScript Utility Types Cheat Sheet (TypeScript 5+)](#typescript-utility-types-cheat-sheet-typescript-5)
68. [SignalStore (@ngrx/signals 17+)](#signalstore-ngrx-signals-17)
69. [Angular 20 \u2013 New Features (v20)](#angular-20-uj-funkciok-v20)
70. [What to Try First \u2013 Practical Order for Teams (v17\u2013v22)](#mit-erdemes-elsokent-kiprobalni-gyakorlati-sorrend-csapatoknak-v17-v22)
71. [Angular Upgrade Migrations (v6+ (ng update) \xB7 schematics v14+)](#angular-upgrade-migrations-v6-ng-update-schematics-v14)
72. [Angular Typed Forms (v14+)](#angular-typed-forms-v14)
73. [Modern Angular \u2013 Production Grade Architekt\xFAra Best Practices (v19\u2013v22)](#modern-angular-production-grade-architektura-best-practices-v19-v22)
74. [Signal Store \u2013 Deeper Introduction (@ngrx/signals 17+)](#signal-store-melyebb-bevezeto-ngrx-signals-17)
75. [Form \u2192 Store \u2192 API (v16+)](#form-store-api-v16)
76. [Facade Service (v2+)](#facade-service-v2)
77. [NGRX (NgRx 15+ (createActionGroup, functional effects))](#ngrx-ngrx-15-createactiongroup-functional-effects)
78. [Change Detection \u2013 What Triggers It? (The 5 Main Causes) (v2+ \xB7 zoneless v20+)](#change-detection-mi-valtja-ki-az-5-fo-ok-v2-zoneless-v20)
79. [OnPush as the Default Change Detection Strategy (v22+)](#onpush-mint-alapertelmezett-change-detection-strategia-v22)
80. [afterRender Side Effects \u2013 afterRender and afterNextRender (v17+)](#rendereles-utani-mellekhatasok-afterrender-es-afternextrender-v17)
81. [Router View Transition Animations (v17+)](#router-nezetvaltas-animaciok-view-transitions-v17)
82. [First Signal-Based Router API (v21+)](#elso-signal-alapu-api-a-routerben-v21)
83. [Signal Forms \u2013 Declarative Forms with Signals (v21 experimental \xB7 v22 expanded)](#signal-forms-deklarativ-urlapok-signalokkal-v21-kiserleti-v22-bovitett)
84. [Vitest as the Default Testing Framework (v20 experimental \xB7 v21 default)](#vitest-mint-alapertelmezett-tesztelesi-keretrendszer-v20-kiserleti-v21-alapertelmezett)
85. [Angular Aria \u2013 Headless, Accessible UI Components (v21+)](#angular-aria-headless-akadalymentes-ui-komponensek-v21)
86. [Angular MCP Server (v21+ experimental)](#angular-mcp-szerver-v21-kiserleti)
87. [New Template Expressions \u2013 Spread, Arrow Function, instanceof (v21\u2013v22)](#uj-template-kifejezesek-spread-arrow-function-instanceof-v21-v22)
88. [Multiple Switch Case Matching in Templates (v22+)](#tobbszoros-switch-case-illesztes-a-sablonokban-v22)
89. [Standalone isActive Function (v22+)](#standalone-isactive-fuggveny-v22)
90. [Incremental Hydration as Default (v19 experimental \xB7 v20 stable \xB7 v22 default)](#inkrementalis-hydration-alapertelmezettkent-v19-kiserleti-v20-stable-v22-alapertelmezett)
91. [Route Injector Cleanup (K\xEDs\xE9rleti) (v22+ experimental)](#route-injector-cleanup-kiserleti-v22-kiserleti)
92. [CDK Dialog \xE9s Menu (v14+ (CDK))](#cdk-dialog-es-menu-v14-cdk)
93. [Setting the Page Title (TitleStrategy) (v14+)](#az-oldal-cimenek-beallitasa-titlestrategy-v14)
94. [ENVIRONMENT_INITIALIZER Injection Token (v14+ \xB7 provideEnvironmentInitializer() v19+)](#environment-initializer-injection-token-v14-provideenvironmentinitializer-v19)
95. [Accessing Protected Members from Templates (v14+)](#protected-tagok-elerese-a-sablonbol-v14)
96. [Angular Extended Diagnostics (v13.2+ \xB7 b\u0151v\xEDtve v14, v19, v20)](#angular-extended-diagnostics-v13-2-bovitve-v14-v19-v20)
97. [Router Data Input Bindings (withComponentInputBinding) (v16+)](#router-data-input-bindings-withcomponentinputbinding-v16)
98. [Introducing Hybrid (Zoneless) Change Detection (v18 experimental \xB7 v20 stable)](#hybrid-zoneless-change-detection-bevezetese-v18-kiserleti-v20-stable)
99. [RedirectCommand (v18+)](#redirectcommand-v18)
100. [AfterRenderEffect (v19 experimental)](#afterrendereffect-v19-kiserleti)
101. [RouterOutlet Data Input (v19+)](#routeroutlet-data-input-v19)
102. [Keepalive Fetch Requests (v20+)](#keepalive-fetch-keresek-v20)
103. [Removing ng-reflect Attributes (v20 optional \xB7 v22 default)](#ng-reflect-attributumok-megszuntetese-v20-opcionalis-v22-alapertelmezett)
104. [Direct ARIA Attribute Binding (v21+)](#aria-attributumok-kozvetlen-bindingja-v21)
105. [Server-Side Bootstrap Fix (BootstrapContext) (v21+)](#szerveroldali-bootstrap-javitasa-bootstrapcontext-v21)
106. [Image Loader Enhancements (v22+)](#image-loader-bovitesek-v22)
107. [Resource Snapshot (v21.2+)](#resource-snapshot-v22)
108. [Resource Cache for SSR (TransferState) (v22+)](#resource-cache-ssr-hez-transferstate-v22)
109. [SignalFormControl \u2013 Bridge Between Reactive and Signal Forms (v22+)](#signalformcontrol-hid-reactive-es-signal-forms-kozott-v22)
110. [@Service Decorator (v22+)](#service-dekorator-v22)
111. [Lazy Service Injection (injectAsync) (v22+)](#lazy-service-injection-injectasync-v22)
112. [Debouncing Signals (v22+)](#signalek-debounce-olasa-v22)
113. [Web MCP Tools (v22+ experimental)](#web-mcp-eszkozok-v22-kiserleti)
114. [AI Agent Skills for Angular (v22+)](#ai-agent-skills-az-angularhoz-v22)
115. [Stability Debugging (provideStabilityDebugging) (v22+)](#stabilitas-debugolasa-providestabilitydebugging-v22)
116. [Preventing Property Drilling \u2013 \`:host-context()\` \xE9s CSS Kontextus (v2+ (CSS))](#property-drilling-megelozese-host-context-es-css-kontextus-v2-css)
117. [Preventing Property Drilling \u2013 Hierarchikus DI Token (v2+ \xB7 inject() options v14+)](#property-drilling-megelozese-hierarchikus-di-token-v2-inject-opciok-v14)
118. [CSS Custom Properties as Context Passing (CSS)](#css-custom-properties-css-valtozok-mint-kontextus-atadas-css)
119. [Preventing Property Drilling \u2013 ContentChild / TemplateRef Injection (v2+ \xB7 contentChild() signal query v17.2+)](#property-drilling-megelozese-contentchild-templateref-injekcio-v2-contentchild-signal-query-v17-2)
120. [Micro-Frontend Architecture \u2013 Basics and Decision Criteria (architekt\xFAra \xB7 v14+)](#micro-frontend-architektura-alapok-es-dontesi-szempontok-architektura-v14)
121. [Native Federation \u2013 Shell and Remote Setup (@angular-architects/native-federation \xB7 v16+ (esbuild))](#native-federation-shell-es-remote-beallitasa-angular-architects-native-federation-v16-esbuild)
122. [Communication Between Micro-Frontends (v16+)](#micro-frontendek-kozotti-kommunikacio-v16)
123. [Web Components as Micro-Frontend Abstraction (v15+ (createApplication/createCustomElement))](#web-components-mint-micro-frontend-absztrakcio-v15-createapplication-createcustomelement)
124. [Vertical Slicing and Modulith \u2013 Sustainable Architecture (architekt\xFAra \xB7 v15+ standalone)](#vertical-slicing-es-modulith-fenntarthato-architektura-architektura-v15-standalone)
125. [Architecture Enforcement: Sheriff, Detective, Nx Boundaries (Sheriff/Nx \xB7 version-agnostic)](#architektura-kikenyszerites-sheriff-detective-nx-boundaries-sheriff-nx-verziofuggetlen)
126. [Nx Monorepo and Reusable Libraries (Nx 19+ \xB7 Angular CLI v14+)](#nx-monorepo-es-ujrafelhasznalhato-konyvtarak-nx-19-angular-cli-v14)
127. [Architecture Analysis with Forensic Techniques (version-agnostic)](#architektura-elemzese-forenzikus-technikakkal-verziofuggetlen)
128. [NgRx Signal Store \u2013 Mutations, rxMethod, signalMethod (@ngrx/signals 18+ \xB7 ngrx-toolkit)](#ngrx-signal-store-mutations-rxmethod-signalmethod-ngrx-signals-18-ngrx-toolkit)
129. [NgRx Signal Store \u2013 Entity Management and Normalization (@ngrx/signals 18+)](#ngrx-signal-store-entity-management-es-normalizalas-ngrx-signals-18)
130. [NgRx Signal Store \u2013 Events API (Flux/Redux Pattern) (@ngrx/signals 19+)](#ngrx-signal-store-events-api-flux-redux-minta-ngrx-signals-19)
131. [NgRx Signal Store \u2013 Custom Features and Redux DevTools (@ngrx/signals 17+)](#ngrx-signal-store-custom-features-es-redux-devtools-ngrx-signals-17)
132. [Resource API in Depth \u2013 resource, rxResource, httpResource (resource v19 experimental \xB7 httpResource v20+)](#resource-api-melyebben-resource-rxresource-httpresource-resource-v19-kiserleti-httpresource-v20)
133. [Signal Forms in Depth \u2013 Schemas, Zod, Submit, Validators (v21 experimental \xB7 v22 expanded)](#signal-forms-melyebben-semak-zod-submit-validatorok-v21-kiserleti-v22-bovitett)
134. [Signal Forms \u2013 Groups, Arrays, Subforms, Metadata, Custom Fields (v21 experimental \xB7 v22 expanded)](#signal-forms-groups-arrays-subforms-metadata-custom-fields-v21-kiserleti-v22-bovitett)
135. [Modern Testing with Vitest \u2013 TestBed, Locators, Mocking (v20 experimental \xB7 v21 default \xB7 TestBed bindings v21+)](#modern-teszteles-vitesttel-testbed-locators-mockolas-v20-kiserleti-v21-alapertelmezett-testbed-bindings-v21)
136. [Fake Timers, Debounce Testing and Coverage (Vitest \xB7 v20+)](#fake-timers-debounce-teszteles-es-coverage-vitest-v20)
137. [E2E Testing with Playwright (version-agnostic)](#e2e-teszteles-playwrighttal-verziofuggetlen)
138. [HttpClient in Depth \u2013 Functional Interceptors, Retry, Cache (provideHttpClient v15+ \xB7 withFetch v16+ \xB7 keepalive v20+)](#httpclient-melyebben-functional-interceptorok-retry-cache-providehttpclient-v15-withfetch-v16-keepalive-v20)
139. [Authentication and Authorization \u2013 Modern Patterns (v15+ \xB7 RedirectCommand v18+)](#authentikacio-es-authorizacio-modern-mintak-v15-redirectcommand-v18)
140. [Frontend Security \u2013 XSS, CSP, Trusted Types (v2+ \xB7 CSP nonce v16+)](#frontend-biztonsag-xss-csp-trusted-types-v2-csp-nonce-v16)
141. [Internationalization (i18n) (@angular/localize v9+ \xB7 subPath v20+)](#internacionalizacio-i18n-angular-localize-v9-subpath-v20)
142. [Accessibility (a11y) in Practice (CDK a11y v2+ \xB7 Angular Aria v21+)](#akadalymentesites-a11y-a-gyakorlatban-cdk-a11y-v2-angular-aria-v21)
143. [Performance and Core Web Vitals (@defer v17+ \xB7 ng.enableProfiling() v20+)](#teljesitmeny-es-core-web-vitals-defer-v17-ng-enableprofiling-v20)
144. [Hybrid Rendering, Server Routes, Prerender, Event Replay (server routes v19 experimental \xB7 v20 stable \xB7 event replay v18+)](#hybrid-rendering-server-routes-prerender-event-replay-server-routes-v19-kiserleti-v20-stable-event-replay-v18)
145. [Dynamic Components, Templates and Containers (v2+ \xB7 createComponent bindings/directives v20+)](#dinamikus-komponensek-template-ek-es-containerek-v2-createcomponent-bindings-directives-v20)
146. [Initializers \u2013 App, Environment, Platform (v14+ \xB7 provideAppInitializer v19+)](#initializerek-app-environment-platform-v14-provideappinitializer-v19)
147. [Angular CDK \u2013 Commonly Used Building Blocks (CDK v14+)](#angular-cdk-gyakran-hasznalt-epitoelemek-cdk-v14)
148. [RxJS and Signal Interop \u2013 When to Use Which (toSignal/toObservable v16+ \xB7 stable v20)](#rxjs-es-signal-interop-mikor-melyiket-tosignal-toobservable-v16-stable-v20)
149. [Advanced TypeScript Type Patterns in Practice (TypeScript 5+ (satisfies 4.9+, const type param 5.0+))](#typescript-halado-tipusmintak-a-gyakorlatban-typescript-5-satisfies-4-9-const-type-param-5-0)
150. [SOLID, KISS, YAGNI, DRY in Angular Code (version-agnostic)](#solid-kiss-yagni-dry-az-angular-kodban-verziofuggetlen)
151. [Common Design Patterns in Angular (v2+)](#gyakran-hasznalt-design-patternek-angularban-v2)
152. [Code Quality and Tooling \u2013 ESLint Flat Config, Prettier, Husky (angular-eslint 18+ (flat config))](#kodminoseg-es-tooling-eslint-flat-config-prettier-husky-angular-eslint-18-flat-config)
153. [CI/CD Pipeline for Angular Monorepos (Nx 19+ \xB7 version-agnostic)](#ci-cd-pipeline-angular-monorepohoz-nx-19-verziofuggetlen)
154. [Angular Style Guide 2026 \u2013 Naming and File Structure (v20+ style guide)](#angular-style-guide-2026-elnevezes-es-fajlstruktura-v20-style-guide)
155. [SCSS Architecture, Tailwind and Design Tokens (CSS/SCSS \xB7 Tailwind 3\u20134)](#scss-architektura-tailwind-es-design-tokenek-css-scss-tailwind-3-4)
156. [PWA, Service Worker and Web Workers (@angular/pwa v14+ \xB7 provideServiceWorker v15+)](#pwa-service-worker-es-web-workers-angular-pwa-v14-provideserviceworker-v15)
157. [AI-Assisted Development in Angular (MCP v21+ \xB7 Web MCP \xE9s agent skillek v22+)](#ai-tamogatott-fejlesztes-angularban-mcp-v21-web-mcp-es-agent-skillek-v22)
158. [Future Directions (v23+ (bejelentett ir\xE1ny))](#jovobeli-iranyok-v23-bejelentett-irany)
159. [Adoption and Version Upgrade Checklist (v14 \u2192 v22)](#bevezetesi-es-verziofrissitesi-checklist-v14-v22)
160. [Secondary Routing \u2013 Named Outlets and Auxiliary Routes (v2+ \xB7 withComponentInputBinding v16+ \xB7 routerOutletData v19+)](#secondary-routing-named-outletek-es-auxiliary-route-ok-v2-withcomponentinputbinding-v16-routeroutletdata-v19)
161. [Route Patterns in Practice \u2013 Wildcard, Redirect, UrlMatcher, Resolve (v2+ \xB7 canMatch v14.2+ \xB7 functional resolver v15+ \xB7 f\xFCggv\xE9ny-redirect v18+)](#route-mintak-a-gyakorlatban-wildcard-redirect-urlmatcher-resolve-v2-canmatch-v14-2-funkcionalis-resolver-v15-fuggveny-redirect-v18)
162. [Preloading Strategies and Network-Aware Preloading (v2+ \xB7 withPreloading v15+ \xB7 @defer prefetch v17+)](#preloading-strategiak-es-halozat-tudatos-preloading-v2-withpreloading-v15-defer-prefetch-v17)
163. [ngModelGroup and Reactive Forms Alternatives (v2+ \xB7 Typed Forms v14+ \xB7 Signal Forms v21+)](#ngmodelgroup-es-reactive-forms-alternativai-v2-typed-forms-v14-signal-forms-v21)
164. [ControlValueAccessor \u2013 Custom Form Control (v2+ \xB7 FormValueControl v21+)](#controlvalueaccessor-sajat-urlapvezerlo-v2-formvaluecontrol-v21)
165. [providers vs viewProviders (v2+ \xB7 route-szint\u0171 providers v14+)](#providers-vs-viewproviders-v2-route-szintu-providers-v14)
166. [Pipes in Depth \u2013 Pure vs Impure, Custom Pipe, Performance (v2+ \xB7 standalone pipe v14+)](#pipe-ok-melyebben-pure-vs-impure-sajat-pipe-teljesitmeny-v2-standalone-pipe-v14)
167. [Practical Q&A Collection (v2\u2013v22)](#gyakorlati-kerdes-valasz-gyujtemeny-v2-v22)
168. [Angular Feature Index by Version (v14\u2013v22) (v14\u2013v22)](#angular-feature-index-verzio-szerint-v14-v22-v14-v22)
169. [Bundle Optimization \u2013 Main Chunk, Tree Shaking, Code-Level Decisions (v14+ \xB7 esbuild v16+ \xB7 @defer v17+)](#bundle-optimalizalas-main-chunk-tree-shaking-kodszintu-dontesek-v14-esbuild-v16-defer-v17)
170. [Global Error Handling and Correlation ID (v2+ \xB7 functional interceptors v15+ \xB7 inject() v14+)](#globalis-hibakezeles-es-correlation-id-v2-funkcionalis-interceptorok-v15-inject-v14)
171. [Angular Injectors \u2013 Types, Hierarchy and Resolution Model (v2+ \xB7 EnvironmentInjector v14+ \xB7 inject() options v14+)](#angular-injectorok-tipusok-hierarchia-es-feloldasi-modell-v2-environmentinjector-v14-inject-opciok-v14)
172. [Signal Semantics \u2013 Reactive Context, Auto-tracking, untracked (v16+ \xB7 v17 stable)](#signal-szemantika-reaktiv-kontextus-auto-tracking-untracked-v16-v17-stable)
173. [Glitch-Free Behavior, Equality and Immutability (v16+ \xB7 v17 stable)](#glitch-free-viselkedes-egyenloseg-es-immutabilitas-v16-v17-stable)
174. [The Signal Graph \u2013 Designing Reactive Data Flow (v17+ \xB7 resource v19+)](#a-signal-graf-reaktiv-adatfolyam-tervezese-v17-resource-v19)
175. [The New Animations API \u2013 animate.enter / animate.leave (v20.2+ \xB7 v21 expanded)](#az-uj-animacios-api-animate-enter-animate-leave-v20-2-v21-bovitett)
176. [HttpClient Fetch Tuning and New HttpResponse Fields (withFetch v16+ \xB7 \xFAj opci\xF3k v21+)](#httpclient-fetch-alapu-finomhangolasa-es-httpresponse-uj-mezoi-withfetch-v16-uj-opciok-v21)
177. [Router Details \u2013 Injection Context, Scroll, Redirect Parameters (v21\u2013v22)](#router-finomsagok-injection-context-scroll-redirect-parameterek-v21-v22)
178. [Common Runtime Error Codes and Debugging (v2+ \xB7 hydration hib\xE1k v16+)](#gyakori-futasideju-hibakodok-es-debugolas-v2-hydration-hibak-v16)
179. [Developer Ergonomics \u2013 HMR, strictStandalone, Self-closing Tags, Language Service (v16\u2013v22)](#fejlesztoi-ergonomia-hmr-strictstandalone-self-closing-tagek-language-service-v16-v22)
180. [Phasing Out CommonJS (CJS) Dependencies and Further Shrinking the Main Chunk (v14+ \xB7 esbuild v16+)](#commonjs-cjs-fuggosegek-kivezetese-es-a-main-chunk-tovabbi-szukitese-v14-esbuild-v16)
181. [Finding Performance Bottlenecks \u2013 Methodology and Tools (v17+ \xB7 enableProfiling v20+)](#performance-bottleneck-keresese-modszertan-es-eszkozok-v17-enableprofiling-v20)
182. [Finding and Diagnosing Memory Leaks (v2+ \xB7 takeUntilDestroyed v16+)](#memory-leak-keresese-es-diagnosztizalasa-v2-takeuntildestroyed-v16)
183. [Memory Optimization \u2013 Dev Environment and Build Memory Usage (TypeScript 5+ \xB7 v14+)](#memory-optimization-a-fejlesztoi-kornyezet-es-a-build-memoriahasznalata-typescript-5-v14)
184. [TypeScript Abstract Syntax Tree (AST) (TypeScript 5+)](#typescript-abstract-syntax-tree-ast-typescript-5)
185. [Component Lifecycle \u2013 Which Hook to Use (v2+ \xB7 afterRender v17+)](#komponens-lifecycle-melyik-hook-mire-valo-v2-afterrender-v17)
186. [@HostBinding and @HostListener \u2013 Host Element Binding (v2+ \xB7 host object recommended)](#hostbinding-es-hostlistener-gazda-elem-kotese-v2-host-objektum-ajanlott)
187. [AOT Compilation \u2013 Why It Is the Default (v9+ Ivy \xB7 AOT by default)](#aot-forditas-miert-ez-az-alapertelmezett-v9-ivy-aot-alapbol)
188. [Reactive Forms Essentials \u2013 updateOn, markAllAsTouched, FormArray.clear (v2+ \xB7 markAllAsTouched/clear v8+)](#reactive-forms-praktikum-updateon-markallastouched-formarray-clear-v2-markallastouched-clear-v8)
189. [exportAs \u2013 Component/Directive API in the Template (v2+)](#exportas-komponens-direktiva-api-a-sablonban-v2)
190. [DomSanitizer \u2013 Trusted HTML, URL, Script (v2+)](#domsanitizer-trusted-html-url-script-v2)
191. [Arrow Function vs Function \u2013 \`this\` Binding (JavaScript)](#nyilfuggveny-vs-function-a-this-kotese-javascript)

## 1. TypeScript Configuration (TypeScript 5+) https://www.typescriptlang.org/tsconfig/ {#typescript-configuration-typescript-5}
A TypeScript konfigur\xE1ci\xF3ban a compiler options finomhangol\xE1sa seg\xEDthet a hib\xE1k korai felismer\xE9s\xE9ben, a k\xF3d min\u0151s\xE9g\xE9nek jav\xEDt\xE1s\xE1ban, valamint a k\xF3d fut\xE1si stabilit\xE1s\xE1nak biztos\xEDt\xE1s\xE1ban.

### alwaysStrict
Bekapcsolja a szigor\xFA m\xF3dot minden f\xE1jlhoz, amely biztos\xEDtja a JavaScript szigor\xFAbb ellen\u0151rz\xE9seit a fut\xE1s k\xF6zben.

\`\`\`json
{
  "compilerOptions": {
    "alwaysStrict": true
  }
}
\`\`\`

### strictNullChecks
Megk\xF6veteli, hogy a null \xE9s undefined t\xEDpusokat explicit m\xF3don kezelj\xFCk, ezzel elker\xFClve a fut\xE1sidej\u0171 hib\xE1kat.

\`\`\`json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
\`\`\`

### strictBindCallApply
Szigor\xFAbb ellen\u0151rz\xE9st alkalmaz a bind, call, \xE9s apply f\xFCggv\xE9nyh\xEDv\xE1sokra.

\`\`\`json
{
  "compilerOptions": {
    "strictBindCallApply": true
  }
}
\`\`\`

### strictFunctionTypes
Sz\u0171k\xEDti a f\xFCggv\xE9nyt\xEDpusok egyeztet\xE9s\xE9t, megakad\xE1lyozva a hib\xE1s param\xE9terek \xE1tad\xE1s\xE1t.

\`\`\`json
{
  "compilerOptions": {
    "strictFunctionTypes": true
  }
}
\`\`\`

### strictPropertyInitialization
Megk\xF6veteli, hogy minden oszt\xE1lytulajdons\xE1g inicializ\xE1lva legyen.

\`\`\`json
{
  "compilerOptions": {
    "strictPropertyInitialization": true
  }
}
\`\`\`

### noImplicitAny
Hib\xE1t dob, ha egy v\xE1ltoz\xF3 vagy param\xE9ter t\xEDpusa implicit m\xF3don any.

\`\`\`json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
\`\`\`

### noImplicitThis
Hib\xE1t dob, ha a this kontextust implicit m\xF3don haszn\xE1ljuk.

\`\`\`json
{
  "compilerOptions": {
    "noImplicitThis": true
  }
}
\`\`\`

### useUnknownInCatchVariables
A catch blokkokban az elkapott v\xE1ltoz\xF3 implicit t\xEDpusa unknown.

\`\`\`json
{
  "compilerOptions": {
    "useUnknownInCatchVariables": true
  }
}
\`\`\`

### noImplicitReturns
Hib\xE1t dob, ha egy f\xFCggv\xE9nyben el\xE9rhet\u0151 \xFAtvonal nem t\xE9r vissza \xE9rt\xE9kkel.

\`\`\`json
{
  "compilerOptions": {
    "noImplicitReturns": true
  }
}
\`\`\`

### noImplicitOverride
Megk\xF6veteli az override kulcssz\xF3 haszn\xE1lat\xE1t.

\`\`\`json
{
  "compilerOptions": {
    "noImplicitOverride": true
  }
}
\`\`\`

### noPropertyAccessFromIndexSignature
Megakad\xE1lyozza a tulajdons\xE1gok el\xE9r\xE9s\xE9t indexszignat\xFAr\xE1kb\xF3l.

\`\`\`json
{
  "compilerOptions": {
    "noPropertyAccessFromIndexSignature": true
  }
}
\`\`\`

### noUncheckedIndexedAccess
Megk\xF6veteli a t\xEDpusellen\u0151rz\xE9st indexszignat\xFAr\xE1s objektumokn\xE1l.

\`\`\`json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
\`\`\`

### noFallThroughCaseInSwitch
Megakad\xE1lyozza a switch fallthrough-t.

\`\`\`json
{
  "compilerOptions": {
    "noFallThroughCaseInSwitch": true
  }
}
\`\`\`

### noUnusedLocals / noUnusedParameters
Hib\xE1t dob nem haszn\xE1lt lok\xE1lis v\xE1ltoz\xF3kn\xE1l/param\xE9terekn\xE9l.

\`\`\`json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

### exactOptionalPropertyTypes
K\xFCl\xF6nbs\xE9get tesz az undefined \xE9s a hi\xE1nyz\xF3 tulajdons\xE1g k\xF6z\xF6tt.

\`\`\`json
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

### \xD6sszegz\xE9s \u2013 aj\xE1nlott be\xE1ll\xEDt\xE1sok egy helyen

\`\`\`json
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
\`\`\`

1. Inicializ\xE1l\xE1si k\xF6telezetts\xE9g: A \`strictPropertyInitialization\` (a \`strict: true\` r\xE9sze) kik\xE9nyszer\xEDti, hogy minden oszt\xE1lytulajdons\xE1g vagy azonnal inicializ\xE1lva legyen, vagy union t\xEDpusban szerepeljen \`undefined\`-k\xE9nt, vagy definite assignment assertion-t (\`prop!\`) haszn\xE1ljunk. A \`strictNullChecks\` a \`null\`/\`undefined\` kezel\xE9s\xE9t szigor\xEDtja.
2. Union t\xEDpus \xE9s definite assignment assertion probl\xE9m\xE1k: Ha egy tulajdons\xE1got \`label: string | undefined\`-k\xE9nt deklar\xE1lunk, az m\xE9g mindig lehet \`undefined\` fut\xE1s k\xF6zben.
3. Komponensek template probl\xE9m\xE1k: A nem megfelel\u0151en inicializ\xE1lt tulajdons\xE1gok sablonhaszn\xE1lat k\xF6zben is fut\xE1sidej\u0171 hib\xE1kat okozhatnak.

### Megold\xE1s a strictNullChecks \xE9s m\xE1s recommended opci\xF3k haszn\xE1lat\xE1val

**1. Biztons\xE1gos default \xE9rt\xE9kek be\xE1ll\xEDt\xE1sa**

\`\`\`ts
export class MyComponent {
  label: string = ''; // Alap\xE9rtelmezett \xE9rt\xE9k
  description?: string; // Opcion\xE1lis, nincs kezdeti \xE9rt\xE9k, undefined lehet

  constructor() {}

  ngOnInit() {
    this.label = this.getLabel();
  }

  getLabel(): string {
    return 'Val\xF3s c\xEDm';
  }
}
\`\`\`

**2. Sablonokban biztons\xE1gos el\xE9r\xE9si m\xF3dok haszn\xE1lata**

\`\`\`html
<h1>{{ label ?? 'Nincs c\xEDm megadva' }}</h1>
<p>{{ description?.toUpperCase() ?? 'Nincs le\xEDr\xE1s' }}</p>
\`\`\`

**3. A strictPropertyInitialization \xE9s strictNullChecks megfelel\u0151 kombin\xE1ci\xF3ja**

\`\`\`json
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
\`\`\`

**4. Reactive Forms haszn\xE1lata**

\`\`\`ts
import { FormGroup, FormControl } from '@angular/forms';

export class MyComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      label: new FormControl(''),
      description: new FormControl('Alap\xE9rtelmezett le\xEDr\xE1s')
    });
  }

  ngOnInit() {}
}
\`\`\`

### strict: true hat\xE1sa

Amikor a \`strict: true\` be\xE1ll\xEDt\xE1st haszn\xE1ljuk, az automatikusan bekapcsolja: \`alwaysStrict\`, \`strictNullChecks\`, \`strictBindCallApply\`, \`strictFunctionTypes\`, \`strictPropertyInitialization\`, \`noImplicitAny\`, \`noImplicitThis\`, \`useUnknownInCatchVariables\` (TS 4.4+).

Tov\xE1bbi aj\xE1nlott opci\xF3k (nem r\xE9szei a \`strict: true\`-nak): \`noImplicitOverride\`, \`noPropertyAccessFromIndexSignature\`, \`noUncheckedIndexedAccess\`, \`noFallThroughCaseInSwitch\`, \`noUnusedLocals\`/\`noUnusedParameters\`, \`exactOptionalPropertyTypes\`.

### Optimaliz\xE1lt p\xE9lda strictNullChecks haszn\xE1lat\xE1ra

\`\`\`ts
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
\`\`\`

\`\`\`html
<h1>{{ label ?? 'Alap\xE9rtelmezett c\xEDm' }}</h1>
<p>{{ description?.toUpperCase() ?? 'Nincs le\xEDr\xE1s' }}</p>
\`\`\`

Mikor inicializ\xE1ljunk?
1. Azonnal, ha a tulajdons\xE1g inicializ\xE1lhat\xF3 deklar\xE1ci\xF3n\xE1l/konstruktorban.
2. K\xE9s\u0151bbi f\xE1zisban, ha aszinkron adatokb\xF3l kap \xE9rt\xE9ket (\`!\` vagy \`?\`).

### Haszn\xE1lati eset p\xE9ld\xE1k

**Non-null assertion oper\xE1tor (!):**
\`\`\`ts
@ViewChild('modernSlideToggle') modernSlideToggle!: SlideToggleComponent;
\`\`\`

**Opcion\xE1lis t\xEDpus (?):**
\`\`\`ts
@ViewChild('modernSlideToggle') modernSlideToggle?: SlideToggleComponent;
if (this.modernSlideToggle) {
  // Haszn\xE1lhatod
}
\`\`\`

**P\xE9lda k\xF3dr\xE9szlet:**
\`\`\`ts
import { Component, ViewChild } from '@angular/core';
import { SlideToggleComponent } from './slide-toggle.component';

@Component({
  selector: 'app-example',
  template: \`<app-slide-toggle #modernSlideToggle></app-slide-toggle>\`
})
export class ExampleComponent {
  @ViewChild('modernSlideToggle') modernSlideToggle!: SlideToggleComponent;

  ngAfterViewInit() {
    if (this.modernSlideToggle) {
      this.modernSlideToggle.toggle();
    }
  }
}
\`\`\`

### Class/Field Decorators

**@ViewChild()** \u2013 A komponens saj\xE1t sablonj\xE1b\xF3l lek\xE9ri az els\u0151 illeszked\u0151 elemet vagy direkt\xEDv\xE1t.
\`\`\`ts
@ViewChild('myInput', { static: false }) input!: ElementRef;
ngAfterViewInit() {
  this.input.nativeElement.focus();
}
\`\`\`

**@ViewChildren()** \u2013 T\xF6bb egyez\u0151 elemet ad vissza QueryList form\xE1ban.
\`\`\`ts
@ViewChildren('item') items!: QueryList<ElementRef>;
ngAfterViewInit() {
  this.items.forEach(i => console.log(i.nativeElement));
}
\`\`\`

**@ContentChild()** \u2013 Az ng-content-be \xE1gyazott els\u0151 gyermek elem lek\xE9r\xE9se.
\`\`\`ts
@ContentChild('projected') projected!: ElementRef;
ngAfterContentInit() {
  console.log(this.projected.nativeElement);
}
\`\`\`

**@ContentChildren()** \u2013 T\xF6bb projected elem lek\xE9r\xE9se QueryList form\xE1ban.
\`\`\`ts
@ContentChildren('item') projectedItems!: QueryList<ElementRef>;
ngAfterContentInit() {
  this.projectedItems.forEach(i => console.log(i.nativeElement));
}
\`\`\`

**@HostBinding()** \u2013 A host element tulajdons\xE1g\xE1t k\xF6ti egy mez\u0151h\xF6z.
\`\`\`ts
@HostBinding('class.active') isActive = true;
@HostBinding('attr.role') role = 'button';
\`\`\`

**@HostListener()** \u2013 A host element esem\xE9nyeire regisztr\xE1l met\xF3dust.
\`\`\`ts
@HostListener('click') onClick() {
  console.log('Host element clicked');
}
@HostListener('window:resize', ['$event']) onResize(event: Event) {
  console.log('Window resized', event);
}
\`\`\`

**@Self()** \u2013 Csak az aktu\xE1lis injectorb\xF3l k\xE9r szolg\xE1ltat\xE1st.
\`\`\`ts
constructor(@Self() service: MyService) {}
\`\`\`

**@SkipSelf()** \u2013 A sz\xFCl\u0151 injector(ok)b\xF3l k\xE9r szolg\xE1ltat\xE1st.
\`\`\`ts
constructor(@SkipSelf() service: MyService) {}
\`\`\`

**@Optional()** \u2013 Opcion\xE1lis f\xFCgg\u0151s\xE9g, null ha nincs provider.
\`\`\`ts
constructor(@Optional() logger?: LoggerService) {
  logger?.log('Optional service injected');
}
\`\`\`

**@Inject()** \u2013 Manu\xE1lisan megadhat\xF3 token.
\`\`\`ts
constructor(@Inject('API_URL') private url: string) {}
\`\`\`

**@Attribute()** \u2013 Statikus attrib\xFAtum \xE9rt\xE9k\xE9t adja a konstruktorban.
\`\`\`ts
constructor(@Attribute('type') type: string) {
  console.log('Attribute value:', type);
}
\`\`\`

## 2. Angular Compiler Options (v9+ (Ivy)) https://angular.dev/reference/configs/angular-compiler-options {#angular-compiler-options-v9-ivy}
Az Angular projekt fejleszt\xE9se sor\xE1n az Angular compiler opci\xF3k (Angular-specific angularCompilerOptions) megfelel\u0151 konfigur\xE1l\xE1sa szint\xE9n kulcsfontoss\xE1g\xFA.

### strictTemplates
Bekapcsolja az \xF6sszes szigor\xFA ellen\u0151rz\xE9st az Angular sablonokban.
\`\`\`json
{ "angularCompilerOptions": { "strictTemplates": true } }
\`\`\`

### strictInputTypes
Megk\xF6veteli, hogy a komponensek inputjai szigor\xFAan ellen\u0151rz\xF6ttek legyenek.
\`\`\`json
{ "angularCompilerOptions": { "strictInputTypes": true } }
\`\`\`

### strictNullInputTypes
Szigor\xFAbb ellen\u0151rz\xE9s null/undefined inputokn\xE1l.
\`\`\`json
{ "angularCompilerOptions": { "strictNullInputTypes": true } }
\`\`\`

### strictAttributeTypes
Az attrib\xFAtumok t\xEDpusellen\u0151rz\xE9s\xE9t szigor\xEDtja.
\`\`\`json
{ "angularCompilerOptions": { "strictAttributeTypes": true } }
\`\`\`

### strictSafeNavigationTypes
A biztons\xE1gos navig\xE1ci\xF3 (\`?.\`) \xE9s a nem-null assertion (\`!\`) **t\xEDpusait** ellen\u0151rzi a sablonokban: hib\xE1t jelez, ha \`?.\`-ot olyan kifejez\xE9sre haszn\xE1lunk, ami nem is lehet nullish, illetve helyesen sz\u0171k\xEDti a t\xEDpust, ha lehet.
\`\`\`json
{ "angularCompilerOptions": { "strictSafeNavigationTypes": true } }
\`\`\`

### strictDomEventTypes
Az esem\xE9nykezel\u0151k t\xEDpusellen\u0151rz\xE9s\xE9t szigor\xEDtja.
\`\`\`json
{ "angularCompilerOptions": { "strictDomEventTypes": true } }
\`\`\`

### strictOutputEventTypes
A komponens @Output esem\xE9nyeinek t\xEDpusellen\u0151rz\xE9s\xE9t biztos\xEDtja.
\`\`\`json
{ "angularCompilerOptions": { "strictOutputEventTypes": true } }
\`\`\`

### fullTemplateTypeCheck (legacy)
R\xE9gebbi kapcsol\xF3 a teljes sablon-t\xEDpusellen\u0151rz\xE9shez. A modern aj\xE1nl\xE1s a \`strictTemplates: true\`; a \`fullTemplateTypeCheck\` elavult/superseded, \xFAj projektben ne ezt \xE1ll\xEDtsuk.
\`\`\`json
{ "angularCompilerOptions": { "fullTemplateTypeCheck": true } }
\`\`\`

### strictContextGenerics
A sablonokban l\xE9v\u0151 kontextus generikus t\xEDpusait kezeli helyesen.
\`\`\`json
{ "angularCompilerOptions": { "strictContextGenerics": true } }
\`\`\`

### Aj\xE1nlott angularCompilerOptions be\xE1ll\xEDt\xE1sok

\`\`\`json
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
\`\`\`

> Megjegyz\xE9s: az \`ivyTemplateTypeCheck\` soha nem volt publikus, tart\xF3s API \u2013 ne haszn\xE1ld. A sablon-t\xEDpusellen\u0151rz\xE9st a \`strictTemplates\` (\xE9s a bel\u0151le sz\xE1rmaz\xF3 \`strict*\` flag-ek) vez\xE9rli.

### Angular LifeCycle hooks

1. **ngOnChanges()** \u2013 Ha a komponens \`@Input\` \xE9rt\xE9kei megv\xE1ltoznak.
2. **ngOnInit()** \u2013 Egyszer, a komponens inicializ\xE1l\xE1sa ut\xE1n.
3. **ngDoCheck()** \u2013 Amikor az Angular a v\xE1ltoz\xE1s\xE9rz\xE9kel\xE9si ciklust futtatja.
4. **ngAfterContentInit()** \u2013 Miut\xE1n a tartalmat inicializ\xE1lta az Angular.
5. **ngAfterContentChecked()** \u2013 Minden alkalommal, amikor a tartalom ellen\u0151rz\xE9sre ker\xFCl.
6. **ngAfterViewInit()** \u2013 Miut\xE1n a n\xE9zetet inicializ\xE1lta az Angular.
7. **ngAfterViewChecked()** \u2013 Minden alkalommal, amikor a n\xE9zet ellen\u0151rz\xE9sre ker\xFCl.
8. **afterNextRender** \u2013 Egyszer fut le, a k\xF6vetkez\u0151 renderel\xE9skor.
9. **afterRender** \u2013 Minden renderel\xE9skor lefut.
10. **ngOnDestroy()** \u2013 K\xF6zvetlen\xFCl a megsemmis\xFCl\xE9s el\u0151tt.

N\xE9gy afterRender f\xE1zis (sorrendben, minden render ut\xE1n):
- **earlyRead** \u2013 DOM-olvas\xE1s a k\xE9s\u0151bbi \`write\` el\u0151tt (soha ne \xEDrj ebben a f\xE1zisban).
- **write** \u2013 csak DOM-\xEDr\xE1s (soha ne olvass ebben a f\xE1zisban).
- **mixedReadWrite** \u2013 olvas\xE1s \xE9s \xEDr\xE1s egyszerre; ker\xFClend\u0151, ha sz\xE9tv\xE1laszthat\xF3. Egyszer\u0171 \`afterRender(() => \u2026)\` callback ebbe a f\xE1zisba ker\xFCl.
- **read** \u2013 csak DOM-olvas\xE1s a write ut\xE1n (soha ne \xEDrj ebben a f\xE1zisban).

Lifecycle hook h\xEDv\xE1si sorrend: ngOnChanges \u2192 ngOnInit \u2192 ngDoCheck \u2192 ngAfterContentInit \u2192 ngAfterContentChecked \u2192 ngAfterViewInit \u2192 ngAfterViewChecked \u2192 ngOnDestroy. Az \`afterRender\` / \`afterNextRender\` nem lifecycle hook, hanem a render ciklus ut\xE1n fut.

## 3. Change Detection Strategy (OnPush) (v2+ \xB7 default from v22) https://angular.dev/api/core/ChangeDetectionStrategy {#change-detection-strategy-onpush-v2-v22-tol-alapertelmezett}
Az Angular-ban a Change Detection Strategy szab\xE1lyozza, hogy az Angular mikor \xE9s hogyan ellen\u0151rzi a komponenseket a v\xE1ltoz\xE1sokra.

### OnPush el\u0151nyei
1. **Teljes\xEDtm\xE9nyn\xF6veked\xE9s** \u2013 csak akkor fut a change detection, ha sz\xFCks\xE9ges.
2. **Cs\xF6kkentett v\xE1ltoz\xE1s\xE9rz\xE9kel\xE9s** \u2013 nem ellen\u0151rzi folyamatosan az eg\xE9sz komponensf\xE1t.
3. **Tiszt\xE1bb adathozz\xE1f\xE9r\xE9s** \u2013 immut\xE1bilis adatkezel\xE9sre k\xE9nyszer\xEDt.

### Hogyan m\u0171k\xF6dik
1. \`@Input()\` param\xE9terek v\xE1ltoz\xE1sa (\xFAj referencia)
2. Felhaszn\xE1l\xF3i interakci\xF3k
3. Aszinkron esem\xE9nyek

### Haszn\xE1lat
\`\`\`ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() data: any;
}
\`\`\`

Immut\xE1bilis adatkezel\xE9s:
\`\`\`ts
export class MyComponent {
  @Input() items: string[];

  addItem(newItem: string) {
    // Helytelen: this.items.push(newItem);
    // Helyes:
    this.items = [...this.items, newItem];
  }
}
\`\`\`

### Mikor \xE9rdemes haszn\xE1lni
- Teljes\xEDtm\xE9ny\xE9rz\xE9keny alkalmaz\xE1sokban
- Statikus vagy ritk\xE1n v\xE1ltoz\xF3 adatok eset\xE9n
- Immut\xE1bilis adatszerkezetek haszn\xE1latakor

### Mi triggereli a change detectiont OnPush eset\xE9n

1. Immutable Property Binding:
\`\`\`ts
@Input() data!: { id: number };
\`\`\`
2. Handled DOM Events:
\`\`\`html
<button (click)="onAction()">Click Me</button>
\`\`\`
3. markForCheck():
\`\`\`ts
constructor(private cdr: ChangeDetectorRef) {}
someMethod() {
  this.cdr.markForCheck();
}
\`\`\`
4. Async Pipe:
\`\`\`html
<div *ngIf="data$ | async as data">{{ data }}</div>
\`\`\`
5. Signal Change:
\`\`\`ts
const counter = signal(0);
\`\`\`

## 4. Routing \u2013 Location Strategies (v2+ \xB7 withHashLocation() v15+) https://angular.dev/guide/routing {#routing-location-strategies-v2-withhashlocation-v15}
Az Angularban a routing location strategy az URL-ek kezel\xE9s\xE9nek m\xF3dj\xE1t hat\xE1rozza meg. K\xE9t f\u0151 strat\xE9gia: PathLocationStrategy \xE9s HashLocationStrategy.

### PathLocationStrategy (Alap\xE9rtelmezett)
Tiszta URL-eket haszn\xE1l: \`https://example.com/utvonal\`

**El\u0151ny\xF6k:** Tiszta URL-ek, SEO-bar\xE1t, jobb felhaszn\xE1l\xF3i \xE9lm\xE9ny.
**H\xE1tr\xE1nyok:** Szerver konfigur\xE1ci\xF3 sz\xFCks\xE9ges (minden k\xE9r\xE9st az index.html-re kell ir\xE1ny\xEDtani).

Apache \`.htaccess\` p\xE9lda:
\`\`\`apacheconf
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
\`\`\`

### HashLocationStrategy
Hash karaktert haszn\xE1l: \`https://example.com/#/utvonal\`

**El\u0151ny\xF6k:** Nincs sz\xFCks\xE9g szerver konfigur\xE1ci\xF3ra, r\xE9gebbi b\xF6ng\xE9sz\u0151k is t\xE1mogatj\xE1k.
**H\xE1tr\xE1nyok:** Kev\xE9sb\xE9 eleg\xE1ns URL-ek, SEO probl\xE9m\xE1k.

Be\xE1ll\xEDt\xE1s (modern, standalone \u2013 ez az aj\xE1nlott forma):
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withHashLocation())],
});
\`\`\`

R\xE9gi, NgModule-alap\xFA forma:
\`\`\`ts
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
\`\`\`

## 5. Routing \u2013 Passing Parameters (v2+) https://angular.dev/guide/routing/read-route-state {#routing-parameterek-atadasa-v2}
### Path Parameters (\xDAtvonali param\xE9terek)
K\xF6telez\u0151 param\xE9terek, az URL r\xE9szek\xE9nt.

\`\`\`ts
const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];
\`\`\`
\`\`\`ts
this.router.navigate(['/user', 123]);
\`\`\`
\`\`\`ts
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
\`\`\`

**El\u0151ny\xF6k:** tiszta URL-ek, bookmarkolhat\xF3ak. **H\xE1tr\xE1nyok:** csak k\xF6telez\u0151 param\xE9terekhez.

### Query Parameters (Lek\xE9rdez\xE9si param\xE9terek)
Opcion\xE1lisak, \`?\` ut\xE1n.

\`\`\`ts
this.router.navigate(['/users'], { queryParams: { page: 2, sort: 'asc' } });
\`\`\`
\`\`\`ts
this.route.queryParamMap.subscribe(params => {
  const page = params.get('page');
  const sort = params.get('sort');
});
\`\`\`

### State Parameters (\xC1llapot param\xE9terek)
Adatok \xE1tad\xE1sa URL-ben megjelen\xEDt\xE9s n\xE9lk\xFCl.

\`\`\`ts
this.router.navigate(['/details'], { state: { data: { id: 123, name: 'John' } } });
\`\`\`
\`\`\`ts
const navigation = this.router.getCurrentNavigation();
const state = navigation?.extras.state as { data: any };
\`\`\`

**H\xE1tr\xE1nyok:** friss\xEDt\xE9skor vagy megoszt\xE1skor elveszik.

## 6. Routing Events and Guards (v2+ \xB7 functional guards v15+ \xB7 canMatch v14.2+) https://angular.dev/guide/routing/route-guards {#routing-events-es-guards-v2-funkcionalis-guardok-v15-canmatch-v14-2}
### Angular Routing Navigation Events sorrendben

Sikeres navig\xE1ci\xF3 tipikus esem\xE9nysora:
1. **NavigationStart** \u2013 navig\xE1ci\xF3 elindul.
2. **RoutesRecognized** \u2013 az Angular felismeri az \xFAtvonalat.
3. **GuardsCheckStart**
4. **ChildActivationStart** / **ActivationStart** (a fa bej\xE1r\xE1sa k\xF6zben)
5. **GuardsCheckEnd**
6. **ResolveStart**
7. **ResolveEnd**
8. **ActivationEnd** / **ChildActivationEnd**
9. **NavigationEnd**

Alternat\xEDv kimenetek (nem a happy path folytat\xE1sa): **NavigationCancel**, **NavigationError**, **NavigationSkipped**.

A guardok \xE9s a resolve a fenti \`GuardsCheck*\` / \`Resolve*\` esem\xE9nyek k\xF6z\xF6tt futnak \u2013 nem k\xFCl\xF6n \u201Eesem\xE9ny\u201D a \`NavigationStart\` \xE9s a \`RoutesRecognized\` k\xF6z\xF6tt.

### Guard t\xEDpusok
- **CanActivate** \u2013 hozz\xE1f\xE9r\xE9s-ellen\u0151rz\xE9s
\`\`\`ts
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.authService.isLoggedIn();
}
\`\`\`
- **CanActivateChild**
- **CanDeactivate**
\`\`\`ts
canDeactivate(component: EditComponent): boolean {
  return component.isFormSaved() || confirm('Are you sure you want to leave without saving?');
}
\`\`\`
- **Resolve**
\`\`\`ts
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
  return this.userService.getUser(route.paramMap.get('id'));
}
\`\`\`

### Guards H\xEDv\xE1si sorrend
Tipikus leave \u2192 enter navig\xE1ci\xF3n\xE1l:
1. canDeactivate (a jelenlegi / elhagyott route-on)
2. canMatch (\xE9s legacy \`canLoad\`, ha m\xE9g haszn\xE1latban van \u2013 deprecated, \`canMatch\` javasolt)
3. canActivateChild
4. canActivate
5. resolve

## 7. Components Communication (v2+ \xB7 input()/output() v17\u2013v18) https://angular.dev/guide/components/inputs {#components-communication-v2-input-output-v17-v18}
### @Input() Decorator (Sz\xFCl\u0151 -> Gyermek)
\`\`\`ts
@Component({ selector: 'app-parent', template: \`<app-child [data]="parentData"></app-child>\` })
export class ParentComponent { parentData = 'Hello from Parent'; }

@Component({ selector: 'app-child', template: \`<p>{{ data }}</p>\` })
export class ChildComponent { @Input() data!: string; }
\`\`\`

### @Output() \xE9s EventEmitter (Gyermek -> Sz\xFCl\u0151)
\`\`\`ts
@Component({ selector: 'app-child', template: \`<button (click)="sendMessage()">Send Message</button>\` })
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() { this.messageEvent.emit('Hello from Child'); }
}

@Component({ selector: 'app-parent', template: \`<app-child (messageEvent)="receiveMessage($event)"></app-child>\` })
export class ParentComponent {
  receiveMessage(message: string) { console.log('Message from Child:', message); }
}
\`\`\`

### Route Param\xE9terek (Navig\xE1ci\xF3 alap\xFA)
\`\`\`ts
this.router.navigate(['/details', 123]); // path param: /details/123
// m\xE1trix param (ritk\xE1bb): this.router.navigate(['/details', { id: 123 }]);

export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log('ID:', params.get('id')));
  }
}
\`\`\`

### ViewChild \xE9s ViewChildren (Sz\xFCl\u0151 -> Gyermek referencia)
\`\`\`ts
@Component({ selector: 'app-parent', template: \`<app-child></app-child>\` })
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngAfterViewInit() { console.log(this.child.data); }
}
\`\`\`

### Component Communication Service + Observable/Subject (Testv\xE9r komponensek)
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class CommunicationService {
  private messageSource = new Subject<string>();
  currentMessage = this.messageSource.asObservable();
  sendMessage(message: string) { this.messageSource.next(message); }
}

@Component({ selector: 'app-sender', template: \`<button (click)="sendMessage()">Send Message</button>\` })
export class SenderComponent {
  constructor(private communicationService: CommunicationService) {}
  sendMessage() { this.communicationService.sendMessage('Hello from Sender'); }
}

@Component({ selector: 'app-receiver', template: \`<p>{{ message }}</p>\` })
export class ReceiverComponent implements OnInit {
  message!: string;
  constructor(private communicationService: CommunicationService) {}
  ngOnInit() {
    this.communicationService.currentMessage.subscribe(message => this.message = message);
  }
}
\`\`\`

### ContentChild \xE9s ContentChildren (Tartalmi referencia)
\`\`\`ts
@Component({ selector: 'app-parent', template: \`<ng-content></ng-content>\` })
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) child!: ChildComponent;
  ngAfterContentInit() { console.log(this.child.data); }
}
\`\`\`

## 8. RxJS Operators (RxJS 6+) https://rxjs.dev/guide/operators {#rxjs-operators-rxjs-6}
### Higher-Order Mapping Oper\xE1torok

**switchMap** \u2013 megszak\xEDtja az el\u0151z\u0151t, csak a legfrissebb Observable-re iratkozik fel.
\`\`\`ts
searchTerm$.pipe(switchMap(term => this.searchService.search(term))).subscribe(result => console.log(result));
\`\`\`

**concatMap** \u2013 sorban kezeli az \xE9rt\xE9keket.
\`\`\`ts
requests$.pipe(concatMap(req => this.apiService.makeRequest(req))).subscribe(result => console.log(result));
\`\`\`

**mergeMap** \u2013 p\xE1rhuzamosan futtatja.
\`\`\`ts
requests$.pipe(mergeMap(req => this.apiService.makeRequest(req))).subscribe(result => console.log(result));
\`\`\`

**exhaustMap** \u2013 csak az els\u0151 Observable-re iratkozik fel, am\xEDg be nem fejez\u0151dik.
\`\`\`ts
buttonClick$.pipe(exhaustMap(() => this.apiService.makeRequest())).subscribe(result => console.log(result));
\`\`\`

### Egyszer\u0171bb oper\xE1torok

**of** \u2013 Observable l\xE9trehoz\xE1sa statikus \xE9rt\xE9kekb\u0151l.
\`\`\`ts
of(1, 2, 3).subscribe(value => console.log(value));
\`\`\`

**from** \u2013 t\xF6mbb\u0151l/promise-b\xF3l/iterable-b\u0151l.
\`\`\`ts
from([1, 2, 3]).subscribe(value => console.log(value));
\`\`\`

### Komplexebb oper\xE1torok

**zip** \u2013 t\xF6bb Observable \xE9rt\xE9keit p\xE1ros\xEDtja sorrend szerint.
\`\`\`ts
zip(of(1, 2, 3), of('a', 'b', 'c')).subscribe(result => console.log(result));
\`\`\`

**combineLatest** \u2013 a forr\xE1sok legfrissebb \xE9rt\xE9keit bocs\xE1tja ki; **el\u0151sz\xF6r mindegyik forr\xE1snak legal\xE1bb egyszer emitt\xE1lnia kell**, ut\xE1na b\xE1rmelyik \xFAj \xE9rt\xE9ke \xFAj kombin\xE1ci\xF3t ind\xEDt.
\`\`\`ts
combineLatest([obs1, obs2]).subscribe(([val1, val2]) => console.log(val1, val2));
\`\`\`

**withLatestFrom**
\`\`\`ts
source$.pipe(withLatestFrom(other$)).subscribe(([sourceValue, otherValue]) => console.log(sourceValue, otherValue));
\`\`\`

**forkJoin** \u2013 csak akkor bocs\xE1t ki, ha mind befejez\u0151d\xF6tt.
\`\`\`ts
forkJoin([obs1, obs2]).subscribe(([val1, val2]) => console.log(val1, val2));
\`\`\`

**debounceTime**
\`\`\`ts
input$.pipe(debounceTime(300)).subscribe(value => console.log(value));
\`\`\`

**throttleTime**
\`\`\`ts
click$.pipe(throttleTime(1000)).subscribe(value => console.log(value));
\`\`\`

**takeUntil**
\`\`\`ts
interval$.pipe(takeUntil(stop$)).subscribe(value => console.log(value));
\`\`\`

**distinctUntilChanged**
\`\`\`ts
of(1, 1, 2, 3, 3).pipe(distinctUntilChanged()).subscribe(value => console.log(value));
\`\`\`

## 9. Observables \u2013 Hot & Cold (RxJS 6+) https://rxjs.dev/guide/observable {#observables-hot-cold-rxjs-6}
### Cold Observable
Minden el\u0151fizet\u0151 k\xFCl\xF6n adatfolyamot kap, a folyamat lazy m\xF3don indul.
\`\`\`ts
const cold$ = new Observable(observer => {
  console.log('HTTP request started');
  setTimeout(() => { observer.next('Data received'); observer.complete(); }, 2000);
});
cold$.subscribe(data => console.log('First subscriber:', data));
cold$.subscribe(data => console.log('Second subscriber:', data));
\`\`\`

### Hot Observable
Egy id\u0151ben osztja meg az adatfolyamot minden el\u0151fizet\u0151vel; eager m\xF3don indul.
\`\`\`ts
const hot$ = new Subject();
hot$.subscribe(data => console.log('First subscriber:', data));
hot$.next('Data for first subscriber');
setTimeout(() => {
  hot$.subscribe(data => console.log('Second subscriber:', data));
  hot$.next('Data for both subscribers');
}, 2000);
\`\`\`

### Cold to Hot \xE1talak\xEDt\xE1s (\`share()\`)
\`\`\`ts
const cold$ = new Observable(observer => { observer.next(Math.random()); });
const hot$ = cold$.pipe(share());
hot$.subscribe(value => console.log('First subscriber:', value));
hot$.subscribe(value => console.log('Second subscriber:', value));
\`\`\`

## 10. Subjects (RxJS 6+) https://rxjs.dev/guide/subject {#subjects-rxjs-6}
### Subject
K\xE9zzel kibocs\xE1tott \xE9rt\xE9kek, csak az el\u0151fizet\xE9s ut\xE1ni adatokat kapj\xE1k meg az \xFAj el\u0151fizet\u0151k.
\`\`\`ts
const subject = new Subject<string>();
subject.subscribe(data => console.log('First subscriber:', data));
subject.next('Hello from Subject!');
subject.subscribe(data => console.log('Second subscriber:', data));
subject.next('Second message');
\`\`\`

### BehaviorSubject
Mindig megjegyzi a legut\xF3bbi kibocs\xE1tott \xE9rt\xE9ket.
\`\`\`ts
const behaviorSubject = new BehaviorSubject<string>('Initial value');
behaviorSubject.subscribe(data => console.log('First subscriber:', data));
behaviorSubject.next('New value');
behaviorSubject.subscribe(data => console.log('Second subscriber:', data));
\`\`\`

### ReplaySubject
T\xF6bb kor\xE1bbi kibocs\xE1tott \xE9rt\xE9ket is megjegyez.
\`\`\`ts
const replaySubject = new ReplaySubject<string>(2);
replaySubject.next('First message');
replaySubject.next('Second message');
replaySubject.next('Third message');
replaySubject.subscribe(data => console.log('First subscriber:', data));
replaySubject.next('Fourth message');
\`\`\`

### AsyncSubject
Csak az utols\xF3 kibocs\xE1tott \xE9rt\xE9ket adja tov\xE1bb, \xE9s csak \`complete()\` ut\xE1n.
\`\`\`ts
const asyncSubject = new AsyncSubject<string>();
asyncSubject.subscribe(data => console.log('First subscriber:', data));
asyncSubject.next('First message');
asyncSubject.next('Second message');
asyncSubject.subscribe(data => console.log('Second subscriber:', data));
asyncSubject.next('Third message');
asyncSubject.complete();
\`\`\`

### Multicasting (\`share()\`)
\`\`\`ts
const observable$ = interval(1000).pipe(share());
observable$.subscribe(data => console.log('First subscriber:', data));
observable$.subscribe(data => console.log('Second subscriber:', data));
\`\`\`

## 11. ES6-ES15 Features (Short Overview) (ECMAScript 2015\u20132025) https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview {#es6-es15-features-rovid-osszefoglalo-ecmascript-2015-2025}
- **ES6 (2015):** let/const, arrow functions, class/inheritance, modules, promises, symbols, template literals
- **ES7 (2016):** exponentiation operator (\`**\`), Array.prototype.includes()
- **ES8 (2017):** async/await, Object.entries()/values(), string padding
- **ES9 (2018):** rest/spread properties, asynchronous iteration (for-await-of)
- **ES10 (2019):** Array.flat()/flatMap(), Object.fromEntries(), optional catch binding
- **ES11 (2020):** nullish coalescing (\`??\`), optional chaining (\`?.\`), Promise.allSettled()
- **ES12 (2021):** logical assignment operators (\`||=\`, \`&&=\`, \`??=\`), numeric separators
- **ES13 (2022):** top-level await, Object.hasOwn(), \`Array.prototype.at()\`, RegExp match indices (\`/d\` flag), class static blocks, priv\xE1t mez\u0151 \`in\` ellen\u0151rz\xE9s
- **ES14 (2023):** Array.toSorted()/toReversed()/toSpliced()/with(), findLast()/findLastIndex(), Symbol as WeakMap key
- **ES15 (2024):** Object.groupBy()/Map.groupBy(), Promise.withResolvers(), Array.fromAsync(), ArrayBuffer.transfer(), RegExp \`v\` flag
- **ES16 (2025):** Iterator helpers (\`map\`/\`filter\`/\`take\` iter\xE1torokon), Set m\u0171veletek (\`union\`, \`intersection\`, \`difference\`), \`Promise.try()\`, \`RegExp.escape()\`, import attributes

> Megjegyz\xE9s: a \`ShadowRealm\` javaslat nem ker\xFClt be egyetlen kiadott ECMAScript verzi\xF3ba sem, a RegExp match indices pedig ES2022 (nem ES2024).

## 12. ViewEncapsulation (v2+) https://angular.dev/guide/components/styling {#viewencapsulation-v2}
Az Angular h\xE1romf\xE9le View Encapsulation strat\xE9gi\xE1t k\xEDn\xE1l: **Emulated** (default), **None**, **Shadow DOM**.

### Emulated (Alap\xE9rtelmezett)
Az Angular scope-olja a komponens st\xEDlusait, nat\xEDv Shadow DOM n\xE9lk\xFCl.
\`\`\`ts
@Component({
  selector: 'app-example',
  template: \`<div class="example">Hello, World!</div>\`,
  styles: [\`.example { color: red; }\`],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {}
\`\`\`
El\u0151ny\xF6k: szigetelt st\xEDlusok, minden b\xF6ng\xE9sz\u0151ben m\u0171k\xF6dik. H\xE1tr\xE1nyok: extra CSS szelektorok.

### None
A st\xEDlusok glob\xE1lisan \xE9rv\xE9nyesek.
\`\`\`ts
@Component({
  selector: 'app-example',
  template: \`<div class="example">Hello, World!</div>\`,
  styles: [\`.example { color: red; }\`],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {}
\`\`\`
El\u0151ny\xF6k: glob\xE1lis st\xEDlusok egyszer\u0171en. H\xE1tr\xE1nyok: st\xEDlus\xFCtk\xF6z\xE9sek.

### Shadow DOM (v1)
Nat\xEDv b\xF6ng\xE9sz\u0151 izol\xE1ci\xF3.
\`\`\`ts
@Component({
  selector: 'app-example',
  template: \`<div class="example">Hello, World!</div>\`,
  styles: [\`.example { color: red; }\`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent {}
\`\`\`
El\u0151ny\xF6k: teljes izol\xE1ci\xF3, j\xF3 k\xF6nyvt\xE1rakhoz. H\xE1tr\xE1nyok: nat\xEDv b\xF6ng\xE9sz\u0151-t\xE1mogat\xE1s sz\xFCks\xE9ges.

## 13. CSS Specificity (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity {#css-specificity-css}
A CSS specificity a szelektorok "erej\xE9t" jelenti: melyik st\xEDlus lesz alkalmazva \xFCtk\xF6z\xE9s eset\xE9n.

**Sorrend:** Inline st\xEDlusok > ID szelektorok > Oszt\xE1lyok/attrib\xFAtumok/pseudo-oszt\xE1lyok > Elem szelektorok/pseudo-elemek.

Specifikuss\xE1g \`(a, b, c, d)\` form\xE1ban:
- a: inline st\xEDlusok
- b: ID szelektorok
- c: oszt\xE1lyok, attrib\xFAtumok, pseudo-oszt\xE1lyok
- d: elem szelektorok, pseudo-elemek

\`\`\`css
div p { color: red; }              /* 0,0,0,2 */
.myClass div { color: blue; }      /* 0,0,1,1 */
#myID .myClass { color: green; }   /* 0,1,1,0 */
\`\`\`

\`#myID .myClass\` fel\xFCl\xEDrja a t\xF6bbit, mert nagyobb a specifikuss\xE1ga.

Priorit\xE1si sorrend (a leggyeng\xE9bbt\u0151l a leger\u0151sebbig): 1. Elem szelektorok/pseudo-elemek, 2. Oszt\xE1lyok/attrib\xFAtumok/pseudo-oszt\xE1lyok, 3. ID szelektorok, 4. Inline st\xEDlusok, 5. \`!important\`.

A \`!important\` a specifikuss\xE1gt\xF3l **f\xFCggetlen\xFCl** fel\xFCl\xEDr mindent (kiv\xE9ve egy m\xE1sik, nagyobb specifikuss\xE1g\xFA \`!important\` deklar\xE1ci\xF3t) \u2013 ez\xE9rt nem a lista v\xE9g\xE9n \xE1ll\xF3 \u201Eutols\xF3 szempont\u201D, hanem a leger\u0151sebb.

\xDCtk\xF6z\xE9s eld\xF6nt\xE9s\xE9nek sorrendje: 1. \`!important\` jelenl\xE9te, 2. specifikuss\xE1g, 3. forr\xE1s sorrendje (utols\xF3 nyer).

## 14. CSS Combinators (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators {#css-combinators-css}
### Ut\xF3d (descendant) szelektor \u201E \u201E (sz\xF3k\xF6z)
\`\`\`css
div p { color: red; }
\`\`\`
Minden \`div\`-en bel\xFCli \`p\`, b\xE1rmilyen m\xE9lys\xE9gben.

### Gyermek (child) szelektor \u201E>\u201D
\`\`\`css
div > p { color: blue; }
\`\`\`
Csak k\xF6zvetlen gyermek \`p\` elemek.

### Szomsz\xE9dos testv\xE9r (adjacent sibling) szelektor \u201E+\u201D
\`\`\`css
h1 + p { margin-top: 0; }
\`\`\`
Csak a k\xF6zvetlen\xFCl \`h1\` ut\xE1n k\xF6vetkez\u0151 \`p\`.

### \xC1ltal\xE1nos testv\xE9r (general sibling) szelektor \u201E~\u201D
\`\`\`css
h1 ~ p { color: green; }
\`\`\`
Minden \`p\`, ami \`h1\` ut\xE1n k\xF6vetkezik ugyanazon a szinten.

### Csoportos\xEDt\xF3 szelektor \u201E,\u201D
\`\`\`css
h1, h2, h3 { font-family: Arial, sans-serif; }
\`\`\`

### Egyetemes szelektor \u201E*\u201D
\`\`\`css
* { margin: 0; padding: 0; }
\`\`\`

### Attrib\xFAtum szelektorok \u201E[ ]\u201D
\`\`\`css
input[type="text"] { background-color: lightgray; }
\`\`\`
T\xEDpusok: \`[attr]\`, \`[attr="value"]\`, \`[attr^="value"]\`, \`[attr$="value"]\`, \`[attr*="value"]\`.

### Pseudo-oszt\xE1lyok \u201E:\u201D
\`\`\`css
button:hover { background-color: blue; }
li:nth-child(2) { color: red; }
\`\`\`

### Pseudo-elemek \u201E::\u201D
\`\`\`css
h1::before { content: "\u2605 "; }
p::first-letter { font-size: 2em; }
\`\`\`

### \xD6sszefoglal\xF3 (n\xE9gy f\u0151 combinator)
- **Adjacent sibling (+):** k\xF6zvetlen testv\xE9r, pl. \`h2 + p { margin-top: 0; }\`
- **General sibling (~):** minden k\xF6vetkez\u0151 testv\xE9r, pl. \`h2 ~ p { color: blue; }\`
- **Child (>):** k\xF6zvetlen gyermek, pl. \`div > p { font-weight: bold; }\`
- **Descendant (sz\xF3k\xF6z):** b\xE1rmilyen m\xE9lys\xE9g\u0171 lesz\xE1rmazott, pl. \`div p { color: red; }\`

## 15. Pseudo Classes (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes {#pseudo-classes-css}
### Dinamikus pseudo-class-ok
\`\`\`css
a:hover { color: red; }
button:active { background-color: green; }
input:focus { border-color: blue; }
button:focus-visible { outline: 2px solid yellow; }
form:focus-within { background-color: #eee; }
\`\`\`

### Struktur\xE1lis pseudo-class-ok
\`\`\`css
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
\`\`\`

### Form-\xE1llapot pseudo-class-ok
\`\`\`css
input:checked { background-color: green; }
input:disabled { background-color: lightgray; }
input:enabled { border-color: green; }
input:required { border-color: red; }
input:optional { border-color: green; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:in-range { background-color: lightgreen; }
input:out-of-range { background-color: lightcoral; }
\`\`\`

### Nyelvi pseudo-class
\`\`\`css
p:lang(en) { font-style: italic; }
\`\`\`

### Neg\xE1ci\xF3s pseudo-class
\`\`\`css
p:not(.highlight) { color: black; }
\`\`\`

### Egy\xE9b
\`\`\`css
:root { --main-color: blue; }
section:target { background-color: yellow; }
div:fullscreen { background-color: black; }
\`\`\`

## 16. Positioning (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/position {#positioning-css}
A \`position\` tulajdons\xE1g lehets\xE9ges \xE9rt\xE9kei:
1. **Static** \u2013 default, dokumentum\xE1raml\xE1s szerint.
2. **Relative** \u2013 az eredeti hely\xE9hez viszony\xEDtva mozd\xEDthat\xF3 (\`top\`, \`right\`, \`bottom\`, \`left\`).
3. **Absolute** \u2013 legk\xF6zelebbi poz\xEDcion\xE1lt \u0151selemhez viszony\xEDtva, kiker\xFCl a dokumentum\xE1raml\xE1sb\xF3l.
4. **Fixed** \u2013 a viewporthoz r\xF6gz\xEDtve, g\xF6rget\xE9skor is helyben marad.
5. **Sticky** \u2013 relat\xEDv \xE9s fix kever\xE9ke, egy g\xF6rget\xE9si pontt\xF3l r\xF6gz\xEDtett\xE9 v\xE1lik.

> A **Flexbox** \xE9s a **CSS Grid** nem \`position\` \xE9rt\xE9kek, hanem k\xFCl\xF6n elrendez\xE9si modellek \u2013 l\xE1sd a Flexbox \xE9s CSS Grid szekci\xF3kat.

Hogyan v\xE1lasszunk pozicion\xE1l\xE1si m\xF3dot?
- Statikus tartalom \u2192 \`static\`
- Kisebb eltol\xE1sok \u2192 \`relative\`
- Komplex elrendez\xE9sek, overlayek \u2192 \`absolute\` / \`fixed\`
- \xC1lland\xF3 l\xE1that\xF3s\xE1g \u2192 \`sticky\` / \`fixed\`

## 17. Closure (JavaScript) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures {#closure-javascript}
A closure egy alapvet\u0151 JavaScript koncepci\xF3: egy bels\u0151 f\xFCggv\xE9ny hozz\xE1f\xE9r a k\xFCls\u0151 f\xFCggv\xE9ny v\xE1ltoz\xF3ihoz, m\xE9g akkor is, ha a k\xFCls\u0151 f\xFCggv\xE9ny m\xE1r lefutott.

\`\`\`js
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(\`Outer Variable: \${outerVariable}\`);
        console.log(\`Inner Variable: \${innerVariable}\`);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
\`\`\`

### Mi\xE9rt hasznos?
1. **Adatinkapszul\xE1ci\xF3:**
\`\`\`js
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
\`\`\`
2. **Modul\xE1ris k\xF3d** \u2013 z\xE1rt v\xE1ltoz\xF3k\xF6rnyezet modulokban.
3. **Aszinkron k\xF3d kezel\xE9s** \u2013 callback-ek, promise-ok, setTimeout-ok.

## 18. TypeScript Data Types (and JavaScript Data Types) (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/everyday-types.html {#typescript-data-types-es-javascript-data-types-typescript-5}
### JavaScript primit\xEDv t\xEDpusok
Number, String, Boolean, Undefined, Null, Symbol (ES6), BigInt (ES11).
\`\`\`js
let num = 42;
let str = "Hello, World!";
let isActive = true;
let something; // undefined
let person = null;
let sym = Symbol('uniqueKey');
let bigInt = 12345678901234567890n;
\`\`\`

### JavaScript \xF6sszetett t\xEDpusok
Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Promise.
\`\`\`js
let person = { name: "John", age: 30 };
let fruits = ["apple", "banana", "cherry"];
function greet() { console.log("Hello!"); }
let now = new Date();
let regex = /\\d+/;
let map = new Map(); map.set('key', 'value');
let set = new Set([1, 2, 3, 3]); // [1, 2, 3]
let weakMap = new WeakMap();
let weakSet = new WeakSet();
let promise = new Promise((resolve, reject) => { resolve('Success'); });
\`\`\`

### TypeScript primit\xEDv t\xEDpusok
\`number\`, \`string\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`
\`\`\`ts
let age: number = 25;
let firstName: string = "John";
let isActive: boolean = true;
let emptyValue: null = null;
let uninitializedValue: undefined = undefined;
let sym: symbol = Symbol("unique");
let largeNumber: bigint = 9007199254740991n;
\`\`\`

### TypeScript \xF6sszetett t\xEDpusok

**T\xF6mb\xF6k:**
\`\`\`ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["apple", "banana", "cherry"];
\`\`\`

**Tuple:**
\`\`\`ts
let person: [string, number] = ["John", 25];
\`\`\`

**Object:**
\`\`\`ts
let person: { name: string; age: number } = { name: "John", age: 30 };
\`\`\`

**Enum:**
\`\`\`ts
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
\`\`\`

**Interface:**
\`\`\`ts
interface Person { name: string; age: number; }
let john: Person = { name: "John", age: 25 };
\`\`\`

**Union types:**
\`\`\`ts
let value: number | string = "Hello";
value = 42;
\`\`\`

**Intersection types:**
\`\`\`ts
interface A { name: string; }
interface B { age: number; }
let person: A & B = { name: "John", age: 25 };
\`\`\`

**F\xFCggv\xE9ny t\xEDpusok:**
\`\`\`ts
let add: (a: number, b: number) => number = (a, b) => a + b;
\`\`\`

**any / void / never / unknown:**
\`\`\`ts
let variable: any = "Hello"; variable = 42;

function logMessage(message: string): void { console.log(message); }

function throwError(message: string): never { throw new Error(message); }

let data: unknown;
data = "Hello";
if (typeof data === "string") { console.log(data.toUpperCase()); }
\`\`\`

## 19. Error Handling (v2+ \xB7 functional interceptors v15+) https://angular.dev/best-practices/error-handling {#error-handling-v2-funkcionalis-interceptorok-v15}
### 1. Try-Catch blokk (TypeScript szinten)
\`\`\`ts
try {
  const data = JSON.parse('invalid json');
} catch (error) {
  console.error('Hiba t\xF6rt\xE9nt: ', error);
}
\`\`\`

### 2. Angular Global Error Handling \u2013 ErrorHandler
\`\`\`ts
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error occurred:', error);
  }
}
\`\`\`
\`\`\`ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
\`\`\`

### 3. HTTP Hibakezel\xE9s \u2013 Interceptorok
\`\`\`ts
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = \`Client-side error: \${error.error.message}\`;
        } else {
          errorMessage = \`Server-side error: \${error.status} \${error.message}\`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
}
\`\`\`
\`\`\`ts
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class AppModule {}
\`\`\`

### 4. Observable alap\xFA hibakezel\xE9s \u2013 catchError
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get('https://api.example.com/data').pipe(
      catchError(error => {
        console.error('Hiba t\xF6rt\xE9nt: ', error);
        return throwError(() => new Error('Valami hiba t\xF6rt\xE9nt!'));
      })
    );
  }
}
\`\`\`

### 5. Hib\xE1k napl\xF3z\xE1sa \u2013 Logging
Eszk\xF6z\xF6k: LogStash, Kibana, ElasticSearch.
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class LoggingService {
  constructor(private http: HttpClient) {}
  logError(error: any): void {
    this.http.post('https://logserver.example.com/log', { error }).subscribe();
  }
}
\`\`\`

### 6. Error Reporting \xE9s Monitoring
Harmadik f\xE9l eszk\xF6zei: Sentry, Rollbar.

## 20. Pipes (v2+) https://angular.dev/guide/pipes {#pipes-v2}
### Sz\xF6veg- \xE9s karakterl\xE1nc-alap\xFA
\`uppercase\`, \`lowercase\`, \`titlecase\`, \`slice\`
\`\`\`
{{ 'hello' | uppercase }} \u2192 "HELLO"
{{ 'HELLO' | lowercase }} \u2192 "hello"
{{ 'hello world' | titlecase }} \u2192 "Hello World"
{{ 'Angular' | slice:1:4 }} \u2192 "ngu"
\`\`\`

### Sz\xE1m alap\xFA
\`number\`, \`percent\`, \`currency\`
\`\`\`
{{ 1234.5678 | number:'1.2-2' }} \u2192 "1,234.57"
{{ 0.25 | percent }} \u2192 "25%"
{{ 1234.56 | currency:'USD':'symbol':'1.2-2' }} \u2192 "$1,234.56"
\`\`\`

### D\xE1tum- \xE9s id\u0151alap\xFA
\`date\`
\`\`\`
{{ today | date }} \u2192 "Sep 22, 2024"
{{ today | date:'fullDate' }} \u2192 "Sunday, September 22, 2024"
{{ today | date:'yyyy-MM-dd' }} \u2192 "2024-09-22"
\`\`\`

### JSON pipe
\`\`\`
{{ {name: 'John', age: 30} | json }} \u2192 {"name":"John","age":30}
\`\`\`

### Aszinkron pipe
\`\`\`
{{ asyncData | async }}
\`\`\`

### i18n-alap\xFA pipe-ok
\`i18nPlural\`, \`i18nSelect\`

### Egy\xE9b
\`keyvalue\`
\`\`\`
{{ {name: 'John', age: 30} | keyvalue }}
\`\`\`

## 21. Directives (v2+ \xB7 @if/@for/@switch v17+) https://angular.dev/guide/directives {#directives-v2-if-for-switch-v17}
### Komponens direkt\xEDv\xE1k
\`\`\`ts
@Component({ selector: 'app-example', template: \`<p>Hello, world!</p>\` })
export class ExampleComponent {}
\`\`\`

### Attrib\xFAtum direkt\xEDv\xE1k
\`\`\`html
<div [ngClass]="{ 'highlight': isActive }">Hello, World!</div>
<div [ngStyle]="{ 'background-color': isActive ? 'green' : 'red' }">Hello</div>
<button [disabled]="isDisabled">Click me</button>
\`\`\`

### Struktur\xE1lis direkt\xEDv\xE1k

**@if (Angular 17+; v18-t\xF3l stable, v20-t\xF3l a \`*ngIf\` deprecated \u2013 ez az aj\xE1nlott forma)** \u2013 blokk szintaxis, nem attrib\xFAtum:
\`\`\`html
@if (isLoggedIn()) {
  <div>Welcome, user!</div>
} @else if (isGuest()) {
  <div>Welcome, guest!</div>
} @else {
  <div>Please log in.</div>
}
\`\`\`

**@for (Angular 17+)** \u2013 a \`track\` kifejez\xE9s k\xF6telez\u0151:
\`\`\`html
<ul>
  @for (item of items(); track item.id) {
    <li>{{ $index + 1 }}. {{ item.name }}</li>
  } @empty {
    <li>Nincs elem.</li>
  }
</ul>
\`\`\`
Implicit v\xE1ltoz\xF3k: \`$index\`, \`$count\`, \`$first\`, \`$last\`, \`$even\`, \`$odd\` (\`$\` prefixszel, nem \`@\`-tal).

***ngIf (klasszikus)**
\`\`\`html
<div *ngIf="isLoggedIn">Welcome back!</div>
\`\`\`

***ngFor (klasszikus)**
\`\`\`html
<ul><li *ngFor="let item of items">{{ item }}</li></ul>
\`\`\`

***ngSwitch**
\`\`\`html
<div [ngSwitch]="status">
  <div *ngSwitchCase="'online'">User is online</div>
  <div *ngSwitchCase="'offline'">User is offline</div>
  <div *ngSwitchDefault>User status is unknown</div>
</div>
\`\`\`

### Conditional Style / Class
\`\`\`html
<div [ngStyle]="{'color': isActive ? 'green' : 'red'}">
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">
\`\`\`
\`\`\`ts
@Input() inputStyle: { [klass: string]: any } | null = null;
\`\`\`
\`\`\`html
[inputStyle]="{ 'css-class': condition ? 'value1' : 'value2' }"
\`\`\`

## 22. Generics (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/generics.html {#generics-typescript-5}
\`\`\`ts
export interface GenericValue<T> {
 original?: T;
 correction?: T;
 valid?: boolean;
}
\`\`\`

## 23. DI \u2013 Resolution Modifiers (v2+ \xB7 inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#di-resolution-modifiers-v2-inject-opciok-v14}
### @Optional
Nem k\xF6telez\u0151 f\xFCgg\u0151s\xE9g; ha nincs provider, \`null\` \xE9rt\xE9ket ad.
\`\`\`ts
constructor(@Optional() @Inject('MyService') private myService: any) {
  if (this.myService) { console.log('Service is available'); }
  else { console.log('Service is not available'); }
}
\`\`\`

### @Host
Csak a host elem injector\xE1ban keres. Modern forma: \`inject(Dep, { host: true })\` (a decorator tov\xE1bbra is t\xE1mogatott).
\`\`\`ts
constructor(@Host() private logger: LoggerService) {
  this.logger.log('Host decorator example');
}
\`\`\`

### @Self
Csak az aktu\xE1lis komponens injector\xE1ban keres.
\`\`\`ts
@Component({ providers: [LoggerService] })
export class ExampleComponent {
  constructor(@Self() private logger: LoggerService) {}
}
\`\`\`

### @SkipSelf
Kihagyja az aktu\xE1lis injectort, a sz\xFCl\u0151ben keres.
\`\`\`ts
constructor(@SkipSelf() private logger: LoggerService) {}
\`\`\`

### Kombin\xE1lt haszn\xE1lat
\`\`\`ts
constructor(
  @Optional() @SkipSelf() private logger: LoggerService
) {
  if (this.logger) { this.logger.log('Combined decorators example'); }
  else { console.log('LoggerService not found in parent injectors'); }
}
\`\`\`

### Modern, \`inject()\`-alap\xFA megfelel\u0151k (aj\xE1nlott)
A decoratorok helyett az \`inject()\` opci\xF3objektuma haszn\xE1lhat\xF3 \u2013 ez m\u0171k\xF6dik oszt\xE1lymez\u0151-inicializ\xE1l\xF3ban is, \xE9s jobban tipiz\xE1lt:

\`\`\`ts
private readonly logger = inject(LoggerService, { optional: true, skipSelf: true });
private readonly self = inject(LoggerService, { self: true });
private readonly hostDep = inject(LoggerService, { host: true });
private readonly url = inject(API_URL);
\`\`\`

| Decorator | \`inject()\` opci\xF3 |
| --- | --- |
| \`@Optional()\` | \`{ optional: true }\` (visszat\xE9r\xE9si t\xEDpus \`T \\| null\`) |
| \`@Self()\` | \`{ self: true }\` |
| \`@SkipSelf()\` | \`{ skipSelf: true }\` |
| \`@Host()\` | \`{ host: true }\` |
| \`@Inject(TOKEN)\` | \`inject(TOKEN)\` |

### @defer blokk (Angular 17+)
A \`@defer\` **nem direkt\xEDva, hanem template blokk** \u2013 elhalasztja a benne l\xE9v\u0151 r\xE9sz bet\xF6lt\xE9s\xE9t (a k\xF3d k\xFCl\xF6n chunkba ker\xFCl) a teljes\xEDtm\xE9ny jav\xEDt\xE1s\xE1ra.

**Viewportba \xE9r\xE9sre:**
\`\`\`html
@defer (on viewport) {
  <app-heavy-component />
} @placeholder {
  <app-skeleton />
}
\`\`\`

**Interakci\xF3ra / hoverre:**
\`\`\`html
@defer (on interaction) {
  <app-extra-content />
} @placeholder {
  <button>Tov\xE1bbi tartalom bet\xF6lt\xE9se</button>
}
\`\`\`

**Id\u0151 alap\xFA, illetve saj\xE1t felt\xE9tel:**
\`\`\`html
@defer (on timer(2s)) { <app-late-content /> }
@defer (when isReady()) { <app-late-content /> }
@defer (on idle; prefetch on hover) {
  <app-chart />
} @loading (after 100ms; minimum 500ms) {
  <app-spinner />
} @error {
  <p>A tartalom bet\xF6lt\xE9se nem siker\xFClt.</p>
}
\`\`\`
Triggerek: \`on idle\` (default), \`on viewport\`, \`on interaction\`, \`on hover\`, \`on immediate\`, \`on timer(<id\u0151>)\`, \`when <kifejez\xE9s>\`. A \`prefetch\` k\xFCl\xF6n triggerelhet\u0151. Blokkok: \`@placeholder\`, \`@loading\`, \`@error\`.

Tipikus use case-ek: nagy k\xE9pek/vide\xF3k, adatt\xE1bl\xE1k/grafikonok, hossz\xFA tartalom, el\u0151t\xF6lt\xE9s h\xE1tt\xE9rben. El\u0151ny\xF6k: teljes\xEDtm\xE9ny optimaliz\xE1l\xE1s, er\u0151forr\xE1s-megtakar\xEDt\xE1s, jobb UX.

## 24. Class, Property, Method, Parameter Decorators (TypeScript 5+ \xB7 v2+) https://angular.dev/guide/di/creating-injectable-service {#class-property-method-parameter-decorators-typescript-5-v2}
### Class Decorator
\`\`\`ts
function LogClass(target: Function) { console.log(\`Class created: \${target.name}\`); }

@LogClass
class ExampleClass { constructor() { console.log('ExampleClass instantiated'); } }
\`\`\`
Angular: \`@Component\`, \`@Injectable\` stb.

### Property Decorator
\`\`\`ts
function LogProperty(target: any, propertyKey: string) {
  console.log(\`Property decorated: \${propertyKey}\`);
}
class ExampleClass {
  @LogProperty
  public name: string = 'Default Name';
}
\`\`\`
Angular: \`@Input\`, \`@Output\`

### Method Decorator
\`\`\`ts
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Method called: \${propertyKey}\`);
    return originalMethod.apply(this, args);
  };
}
class ExampleClass {
  @LogMethod
  sayHello() { console.log('Hello, world!'); }
}
\`\`\`

### Parameter Decorator
\`\`\`ts
function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
  console.log(\`Parameter decorated: \${propertyKey}, Index: \${parameterIndex}\`);
}
class ExampleClass {
  saySomething(@LogParameter message: string) { console.log(message); }
}
\`\`\`
Angular: \`@Inject\`

## 25. Monkey Patching in JavaScript (JavaScript) https://developer.mozilla.org/en-US/docs/Glossary/Monkey_patch {#monkey-patching-javascript-ben-javascript}
Egy fut\xF3 program viselked\xE9s\xE9nek m\xF3dos\xEDt\xE1sa an\xE9lk\xFCl, hogy a forr\xE1sk\xF3dot megv\xE1ltoztatn\xE1nk.

\`\`\`js
const person = {
  name: 'John',
  greet() { return \`Hello, my name is \${this.name}\`; }
};
console.log(person.greet()); // "Hello, my name is John"

person.greet = function() {
  return \`Hi, I am \${this.name}, nice to meet you!\`;
};
console.log(person.greet()); // "Hi, I am John, nice to meet you!"
\`\`\`

### Tipikus haszn\xE1lati esetek
1. K\xFCls\u0151 k\xF6nyvt\xE1rak viselked\xE9s\xE9nek m\xF3dos\xEDt\xE1sa
2. Hibajav\xEDt\xE1s fut\xE1sid\u0151ben
3. Viselked\xE9s m\xF3dos\xEDt\xE1sa tesztel\xE9s c\xE9lj\xE1b\xF3l
4. Legacy k\xF3d karbantart\xE1sa
5. Polyfill-ek l\xE9trehoz\xE1sa
\`\`\`js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(element) {
    return this.indexOf(element) !== -1;
  };
}
\`\`\`

**El\u0151ny\xF6k:** gyors hibajav\xEDt\xE1s, testreszab\xE1s, egyszer\u0171bb tesztek.
**H\xE1tr\xE1nyok:** kock\xE1zatos, neh\xE9z hibakeres\xE9s, inkompatibilit\xE1s friss\xEDt\xE9sekn\xE9l.

## 26. CSS Units (CSS) https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units {#css-units-css}
### Abszol\xFAt unitok
- **px** \u2013 pixel, pontos kontroll.
- **cm, mm** \u2013 nyomtat\xE1sra.
- **in** \u2013 inch, nyomtat\xE1shoz (1in = 2.54cm).
- **pt** \u2013 pont, tipogr\xE1fia (1pt = 1/72 inch).
- **pc** \u2013 pica (1pc = 12pt).

### Relat\xEDv unitok
- **em** \u2013 az elem saj\xE1t \`font-size\`-\xE1hoz viszony\xEDt (kiv\xE9ve ha mag\xE1t a \`font-size\`-t \xE1ll\xEDtjuk: akkor a sz\xFCl\u0151 \`font-size\`-\xE1hoz).
\`\`\`css
font-size: 2em;
\`\`\`
- **rem** \u2013 root elem bet\u0171m\xE9ret\xE9hez igazodik.
\`\`\`css
font-size: 2rem;
\`\`\`
- **%** \u2013 sz\xFCl\u0151 elemhez viszony\xEDtva.
\`\`\`css
width: 50%;
\`\`\`
- **vw / vh** \u2013 viewport sz\xE9less\xE9ge/magass\xE1ga.
\`\`\`css
width: 100vw;
height: 50vh;
\`\`\`
- **min-content / max-content / fit-content** \u2013 dinamikus tartalom-m\xE9retez\xE9s.

## 27. HTML & CSS Antipatterns (HTML/CSS) https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content {#html-css-antipatterns-html-css}
### HTML Antipatterns
1. **Inline st\xEDlusok** \u2013 helyette k\xFCls\u0151/bels\u0151 CSS: \`.red-text { color: red; }\`
2. **\`<table>\` alap\xFA elrendez\xE9s** \u2013 helyette Flexbox/Grid.
3. **Alt sz\xF6veg n\xE9lk\xFCli k\xE9pek** \u2013 mindig adjunk \`alt\` attrib\xFAtumot.
4. **\`<br>\` t\xFAlzott haszn\xE1lata** \u2013 helyette blokk elemek (\`<p>\`).
5. **Nem sz\xF6veges gombok** \u2013 helyette \`<button>\` elem.

### CSS Antipatterns
1. **Font-csal\xE1dok inline haszn\xE1lata** \u2013 helyette glob\xE1lis st\xEDlus a \`body\`-n.
2. **\`!important\` t\xFAlzott haszn\xE1lata** \u2013 helyette specifit\xE1s/szelektorok.
3. **Glob\xE1lis szelektorok t\xFAlzott haszn\xE1lata** \u2013 helyette oszt\xE1lyok.
4. **Nem reszponz\xEDv fix m\xE9retek (px)** \u2013 helyette \`%\`, \`vw\`, \`vh\`.
5. **Hossz\xFA, ism\xE9tl\u0151d\u0151 CSS f\xE1jlok** \u2013 helyette oszt\xE1lyalap\xFA megosztott st\xEDlusok.

## 28. Angular & TypeScript Antipatterns (v2+) {#angular-typescript-antipatterns-v2}
### Angular Antipatterns
1. **Komponensek t\xFAlzott logik\xE1ja** \u2013 helyette services-be kiszervezett \xFCzleti logika.
2. **Nem haszn\xE1lt OnDestroy/Subscription kezel\xE9s** \u2013 helyette \`takeUntil()\` vagy AsyncPipe.
\`\`\`ts
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  ngOnInit() {
    this.myService.getData().pipe(takeUntil(this.destroy$)).subscribe(data => console.log(data));
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
}
\`\`\`
3. **K\xF6zvetlen DOM-manipul\xE1ci\xF3** \u2013 helyette Renderer2/ViewChild.
4. **Nagym\xE9ret\u0171 f\xE1jlok \xE9s modulok** \u2013 helyette lazy loading.
5. **\`any\` t\xEDpus t\xFAlzott haszn\xE1lata** \u2013 helyette specifikus t\xEDpusok.

### TypeScript Antipatterns
1. Implicit \`any\` haszn\xE1lata \u2013 kapcsold be \`noImplicitAny\`-t.
2. F\xFCggv\xE9nyek t\xEDpus\xE1nak figyelmen k\xEDv\xFCl hagy\xE1sa.
3. T\xFAlzott t\xEDpusok haszn\xE1lata (inferencia hagy\xE1sa).
4. T\xFAlzott t\xEDpusellen\u0151rz\xE9s runtime-ban.
5. Felesleges null/undefined kezel\xE9s.

## 29. Bootstrap \u2013 Commonly Used Elements (Bootstrap 5) https://getbootstrap.com/docs/5.3/getting-started/introduction/ {#bootstrap-gyakran-hasznalt-elemek-bootstrap-5}
### Grid rendszer
\`.container\`, \`.container-fluid\`, \`.row\`, \`.col\`, \`.col-{size}-{number}\`

### Typography
Fejl\xE9cek, \`.lead\`, \`.text-muted\`, \`.text-center/.text-start/.text-end\`, \`.fw-bold/.fw-normal/.fw-light\`

### Buttons
\`.btn\`, \`.btn-primary\` (\xE9s m\xE1s sz\xEDnek), \`.btn-outline-...\`, \`.btn-lg/.btn-sm\`

### Formok
\`.form-control\`, \`.form-select\`, \`.form-check\`

### Cards
\`.card\`, \`.card-header\`, \`.card-body\`, \`.card-footer\`

### Navig\xE1ci\xF3
\`.navbar\`, \`.navbar-expand-lg\`

### Utilities
Margin/padding (\`m-\`/\`p-\` + ir\xE1ny + m\xE9ret), sz\xF6veg igaz\xEDt\xE1s, sz\xEDnek (\`.text-primary\`, \`.bg-light\`), display oszt\xE1lyok (\`.d-none .d-md-block\`)

## 30. Flexbox (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox {#flexbox-css}
### Alapfogalmak
Main Axis (f\u0151tengely) \xE9s Cross Axis (keresztir\xE1ny\xFA tengely).

### Kont\xE9ner tulajdons\xE1gok
- \`display: flex;\` / \`display: inline-flex;\`
- \`flex-direction\`: row (alap) / row-reverse / column / column-reverse
- \`flex-wrap\`: nowrap (alap) / wrap / wrap-reverse
- \`flex-flow\`: r\xF6vid\xEDt\xE9s direction+wrap-hoz
- \`justify-content\`: flex-start / flex-end / center / space-between / space-around / space-evenly
- \`align-items\`: stretch (alap) / flex-start / flex-end / center / baseline
- \`align-content\`: flex-start / flex-end / center / space-between / space-around / stretch

### Elem tulajdons\xE1gok
- \`flex-grow\` \u2013 mennyi helyet foglalhat el (alap: 0)
- \`flex-shrink\` \u2013 zsugorod\xE1s ar\xE1nya (alap: 1)
- \`flex-basis\` \u2013 az elem alapm\xE9rete

## 31. CSS Grid \u2013 Example (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout {#css-grid-pelda-css}
Header + Left Sidebar + Body reszponz\xEDv elrendez\xE9s.

\`\`\`html
<div class="grid-container">
  <header class="header">Header</header>
  <aside class="sidebar">Left Sidebar</aside>
  <main class="main-content">Main Content</main>
</div>
\`\`\`

\`\`\`css
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
\`\`\`

## 32. Angular Version Overview (v5\u2013v19, Short Overview) (v5\u2013v19) https://angular.dev/reference/releases {#angular-version-overview-v5-v19-rovid-attekintes-v5-v19}
- **Angular 5 (2017):** Build optimizations, HttpClient, i18n, Forms Validation
- **Angular 6 (2018):** CLI v6 (\`ng add\`/\`ng update\`), Angular Elements, Tree-Shakable Providers, Service Worker
- **Angular 7 (2018):** CLI Prompts, Virtual Scrolling, Drag and Drop, Content Projection Updates
- **Angular 8 (2019):** Differential Loading, Ivy (preview), Lazy Loading dynamic imports
- **Angular 9 (2020):** Ivy default, Improved Type Checking, ng update improvements
- **Angular 10 (2020):** Date Range Picker, Optional Stricter Settings, TSLib Update
- **Angular 11 (2020):** Faster Builds, Automatic Font Inlining, Component Test Harnesses
- **Angular 12 (2021):** ESLint (TSLint helyett), Ivy Everywhere, Nullish Coalescing sablonokban
- **Angular 13 (2021):** View Engine elt\xE1vol\xEDtva, ESBuild, Dynamic Component Creation
- **Angular 14 (2022):** Standalone Components, Typed Forms, Router Improvements
- **Angular 15 (2022):** Stable Standalone Components, Directive Composition API, Router-Component Scoping
- **Angular 16 (2023):** Signals API, Hydration API
- **Angular 17 (2023):** \xDAj control flow (\`@if\`/\`@for\`/\`@switch\`, preview), \`@defer\`, View Transitions, hydration stable, Signals stable, esbuild+Vite stable
- **Angular 18 (2024):** Zoneless CD (experimental), \`model()\`/\`output()\`, \`ng-content\` fallback, \`RedirectCommand\`, Material 3
- **Angular 19 (2024):** Standalone default, \`linkedSignal\`/Resource/\`@let\`, incremental hydration, \`provideAppInitializer\`

## 33. Angular 17 \u2013 New Features (v17) https://angular.dev/reference/releases {#angular-17-uj-funkciok-v17}
1. **\xDAj control flow** \u2013 \`@if\` / \`@for\` / \`@switch\` (dev preview; k\xE9s\u0151bb stable).
2. **\`@defer\`** \u2013 k\xE9sleltetett n\xE9zetek (dev preview).
3. **Hydration stable** \u2013 \`provideClientHydration()\` az \`@angular/platform-browser\`-b\u0151l.
\`\`\`ts
import { provideClientHydration } from '@angular/platform-browser';
bootstrapApplication(AppComponent, { providers: [provideClientHydration()] });
\`\`\`
4. **Signals API stable** \u2013 hat\xE9konyabb reaktivit\xE1s.
\`\`\`ts
import { signal, effect } from '@angular/core';
export class CounterComponent {
  count = signal(0);
  constructor() { effect(() => console.log('Current count:', this.count())); }
  increment() { this.count.update(value => value + 1); }
}
\`\`\`
5. **View Transitions** \u2013 \`withViewTransitions()\` a routeren.
6. **\`afterRender\` / \`afterNextRender\`** \u2013 DOM-m\u0171veletek a render ut\xE1n.
7. **esbuild + Vite** \u2013 alkalmaz\xE1s-build (stable).
8. **Signal inputs** \xE9s (v17.2+) signal query-k (\`viewChild\` / \`contentChild\`).

## 34. Angular 18 \u2013 New Features (v18) https://angular.dev/reference/releases {#angular-18-uj-funkciok-v18}
1. **Zoneless change detection (experimental)** \u2013 \`provideExperimentalZonelessChangeDetection()\` (k\xE9s\u0151bb \`provideZonelessChangeDetection()\`).
2. **\`model()\` (v17.2) \xE9s \`output()\` (v17.3)** \u2013 signal-alap\xFA two-way / event API; v18-ban tov\xE1bb stabiliz\xE1l\xF3dott a signal authoring fel\xFClet.
3. **\`ng-content\` fallback tartalom** \u2013 tartal\xE9k a \`<ng-content>\` elemen bel\xFCl, ha nincs projekci\xF3.
4. **\`RedirectCommand\`** \u2013 guard/redirect eredm\xE9ny skipLocationChange \xE9s t\xE1rsai mellett.
5. **Funkcion\xE1lis route redirect** \u2013 \`redirectTo\` f\xFCggv\xE9nyk\xE9nt is megadhat\xF3.
6. **Material 3** \xE9s hydration debug fejleszt\xE9sek.
7. **Signal query-k / signal inputs stable** (a v16\u2013v17 preview ut\xE1n).

> Typed Forms (v14), Directive Composition API (v15), Signals preview (v16) \xE9s hydration bevezet\xE9se (v16\u2013v17) **nem** v18 \xFAjdons\xE1gok \u2013 kor\xE1bbi verzi\xF3kban jelentek meg.
> v19-t\u0151l a komponensek **alapb\xF3l standalone-ok**, ez\xE9rt a \`standalone: true\` sor elhagyhat\xF3. NgModule-ba tartoz\xF3 komponensn\xE9l explicit \`standalone: false\` kell.

## 35. Angular 19 \u2013 New Features (First Overview) (v19) https://angular.dev/reference/releases {#angular-19-uj-funkciok-elso-attekintes-v19}
1. **Standalone default** \u2013 \xFAj komponens/direkt\xEDva/pipe alapb\xF3l standalone; NgModule-hoz \`standalone: false\`.
2. **\`linkedSignal\` (experimental)** \u2013 forr\xE1shoz k\xF6t\xF6tt, fel\xFCl\xEDrhat\xF3 signal.
3. **Resource API (experimental)** \u2013 aszinkron adat \`resource\` / k\xE9s\u0151bb \`rxResource\` / \`httpResource\`.
4. **\`@let\` template v\xE1ltoz\xF3**
5. **Inkrement\xE1lis hydration (experimental)** \xE9s server route konfigur\xE1ci\xF3.
6. **\`ROUTER_OUTLET_DATA\` / \`routerOutletData\`**
7. **Initializer provider f\xFCggv\xE9nyek** \u2013 \`provideAppInitializer\`, \`provideEnvironmentInitializer\`.
8. **\`afterRenderEffect\` (experimental)**, HMR fejleszt\xE9sek, \xFAj diagnosztik\xE1k.

> Typed Forms, Directive Composition API \xE9s a \u201EStrict Templates\u201D **nem** v19 \xFAjdons\xE1gok.

## 36. RouterTestingHarness (v14+) https://angular.dev/guide/routing/testing {#routertestingharness-v14}
Az Angular RouterTestingHarness a router logik\xE1val rendelkez\u0151 alkalmaz\xE1sok tesztel\xE9s\xE9t seg\xEDti (dinamikus \xFAtvonalak, lazy loading).

\`\`\`ts
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
\`\`\`

El\u0151ny\xF6k: egyszer\u0171bb router tesztel\xE9s, izol\xE1lt tesztek, async tesztel\xE9s t\xE1mogat\xE1sa, \xE1tfog\xF3 \xFAtvonal logika tesztel\xE9se.

> A \`RouterTestingModule\` legacy; \xFAj tesztekben \`provideRouter([...])\` a TestBed \`providers\` t\xF6mbj\xE9ben.

## 37. Directive Composition API (v15+) https://angular.dev/guide/directives/directive-composition-api {#directive-composition-api-v15}
Lehet\u0151v\xE9 teszi, hogy egy komponens t\xF6bb direkt\xEDv\xE1t is haszn\xE1ljon (\`hostDirectives\`).

\`\`\`ts
@Component({
  standalone: true,
  selector: 'admin-menu',
  templateUrl: './admin-menu.html',
  hostDirectives: [HighlightDirective, TooltipDirective, MenuBehavior],
})
export class AdminMenu {}
\`\`\`

V\xE9grehajt\xE1si sorrend: host direkt\xEDv\xE1k p\xE9ld\xE1nyai l\xE9trej\xF6nnek \u2192 AdminMenu l\xE9trej\xF6n \u2192 host direkt\xEDv\xE1k ngOnInit \u2192 AdminMenu ngOnInit \u2192 host bindingek (el\u0151bb a hostDirectives, majd a komponens).

El\u0151ny\xF6k: modularit\xE1s, karbantarthat\xF3s\xE1g, meghat\xE1rozott v\xE9grehajt\xE1si sorrend.

## 38. Angular Signals (v16 dev preview \xB7 v17 stable) https://angular.dev/guide/signals {#angular-signals-v16-dev-preview-v17-stable}
Reakt\xEDv API \xE1llapotkezel\xE9sre.

**\xCDrhat\xF3 Signal:**
\`\`\`ts
const count = signal(0); // WritableSignal<number>
count(); // 0
count.set(5);
count.update(v => v + 1); // 6
\`\`\`
Met\xF3dusok: \`()\`, \`.set(value)\`, \`.update(fn)\`, \`.asReadonly()\`

> A kor\xE1bban tervezett \`.mutate()\` **nem ker\xFClt be** a v\xE9gleges API-ba: a signalok immut\xE1bilis friss\xEDt\xE9st v\xE1rnak, ez\xE9rt \`update(v => ...)\`-tal \xFAj \xE9rt\xE9ket adunk vissza.

**Csak olvashat\xF3 Signal:**
\`\`\`ts
const count = signal(5);
const doubled = computed(() => count() * 2); // ReadonlySignal<number>
doubled(); // 10
\`\`\`
\`\`\`ts
const _count = signal(0);
export const count = _count.asReadonly();
\`\`\`

**Effect:**
\`\`\`ts
const count = signal(0);
effect(() => console.log(\`Count changed: \${count()}\`));
count.set(count() + 1);
\`\`\`

**Computed:**
\`\`\`ts
const count = signal(2);
const doubleCount = computed(() => count() * 2);
console.log(doubleCount());  // 4
count.set(4);
console.log(doubleCount());  // 8
\`\`\`

**OnPush komponens signal-lel:**
\`\`\`ts
@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`{{ doubleCount() }}\`,
  standalone: true
})
export class CounterComponent {
  count = signal(2);
  doubleCount = computed(() => this.count() * 2);
}
\`\`\`

## 39. Signal Input / Output (input() v17 \xB7 output() v17.3 \xB7 model() v17.2 \xB7 signal query-k v17.2) https://angular.dev/guide/signals/inputs {#signal-input-output-input-v17-output-model-v18-signal-query-k-v17-2}
A signal input **nem** \`@Input()\`-tal \xE1tadott \`Signal\` objektum, hanem az \`input()\` f\xFCggv\xE9nnyel deklar\xE1lt mez\u0151. Az \xE9rt\xE9k sima \xE9rt\xE9kk\xE9nt \xE9rkezik, a komponens signalk\xE9nt olvassa:

\`\`\`ts
@Component({ selector: 'app-child', template: \`{{ label() }} \u2013 {{ upper() }}\` })
export class ChildComponent {
  readonly label = input<string>('');                       // optional, with default
  readonly count = input.required<number>();                // k\xF6telez\u0151
  readonly disabled = input(false, { transform: booleanAttribute });  // value transform
  readonly name = input<string>('', { alias: 'userName' }); // aliasing
  readonly upper = computed(() => this.label().toUpperCase());
}

@Component({
  selector: 'app-parent',
  template: \`<app-child [label]="title()" [count]="3" disabled userName="admin" (changed)="onChanged($event)" />\`,
})
export class ParentComponent { readonly title = signal('Hello from parent'); }
\`\`\`

**Output \xE9s k\xE9tir\xE1ny\xFA k\xF6t\xE9s:**
\`\`\`ts
readonly changed = output<string>();          // EventEmitter helyett
readonly value = model<string>('');           // k\xE9tir\xE1ny\xFA: [(value)]
// kibocs\xE1t\xE1s
this.changed.emit('\xFAj \xE9rt\xE9k');
\`\`\`

**Signal query-k** (decorator helyett):
\`\`\`ts
readonly input = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
readonly items = viewChildren(ItemComponent);
readonly projected = contentChild(TemplateRef);
\`\`\`

El\u0151ny\xF6k: value transform, aliasing, deriv\xE1lt \xE9rt\xE9kek \`computed\`-del, nincs \`ngOnChanges\`, nincs \`QueryList\` \xE9letciklus-k\xE9rd\xE9s, \xE9s a query-k \`undefined\` helyett reakt\xEDvan friss\xFClnek. Migr\xE1ci\xF3: \`ng generate @angular/core:signals\`.

## 40. ngOptimizedImage (v14 dev preview \xB7 v15 stable \xB7 decoding v21+) https://angular.dev/guide/image-optimization {#ngoptimizedimage-v14-dev-preview-v15-stable-decoding-v21}
K\xE9pek optimaliz\xE1l\xE1s\xE1ra a teljes\xEDtm\xE9ny szempontj\xE1b\xF3l.

Haszn\xE1lat el\u0151tt a \`NgOptimizedImage\` direkt\xEDv\xE1t import\xE1lni kell a komponensbe, \xE9s a \`width\`/\`height\` (vagy a \`fill\` attrib\xFAtum) **k\xF6telez\u0151** \u2013 ezek n\xE9lk\xFCl a direkt\xEDva hib\xE1t dob (ez akad\xE1lyozza meg a layout shiftet).

\`\`\`ts
@Component({ imports: [NgOptimizedImage], /* ... */ })
\`\`\`
\`\`\`html
<!-- LCP k\xE9p: priority \u2192 preload link \xE9s fetchpriority="high" -->
<img ngSrc="hero.jpg" width="1200" height="600" priority alt="Nyit\xF3k\xE9p">

<!-- reszponz\xEDv: a direkt\xEDva srcset-et gener\xE1l -->
<img ngSrc="card.jpg" width="400" height="300" sizes="(max-width: 768px) 100vw, 400px" alt="K\xE1rtya">

<!-- kont\xE9nert kit\xF6lt\u0151 k\xE9p, ismert ar\xE1ny n\xE9lk\xFCl -->
<div style="position: relative; aspect-ratio: 16/9">
  <img ngSrc="bg.jpg" fill alt="H\xE1tt\xE9r">
</div>
\`\`\`
CDN loader be\xE1ll\xEDt\xE1sa: \`provideImgixLoader('https://...')\`, \`provideCloudinaryLoader(...)\`, \`provideImageKitLoader(...)\`, \`provideCloudflareLoader(...)\`, illetve \`IMAGE_LOADER\` tokennel saj\xE1t loader. Egyedi transzform\xE1ci\xF3k a \`loaderParams\` inputtal adhat\xF3k \xE1t.

Amit ad: automatikus \`srcset\`, lazy loading alapb\xF3l, \`priority\` eset\xE9n preload, figyelmeztet\xE9s t\xFAl nagy let\xF6lt\xF6tt k\xE9pre \xE9s hi\xE1nyz\xF3 m\xE9retre. Tipikus use case: nagy m\xE9ret\u0171 k\xE9pek, reszponz\xEDv k\xE9pek, LCP/SEO optimaliz\xE1l\xE1s.

## 41. ngTemplateOutlet (v2+) https://angular.dev/api/common/NgTemplateOutlet {#ngtemplateoutlet-v2}
Sablon dinamikus megjelen\xEDt\xE9se.

\`\`\`html
<ng-template #myTemplate>
  <p>Ez egy dinamikus tartalom!</p>
</ng-template>
<div *ngTemplateOutlet="myTemplate"></div>
\`\`\`

## 42. ngProjectAs (v2+ \xB7 ng-content fallback v18+) https://angular.dev/guide/templates/ng-content {#ngprojectas-v2-ng-content-fallback-v18}
Az \`ngProjectAs\` attrib\xFAtummal meghat\xE1rozhat\xF3, hogy egy elem hogyan viselkedjen az \`ng-content select="..."\` kiv\xE1laszt\xE1s\xE1n\xE1l, f\xFCggetlen\xFCl a val\xF3di t\xEDpus\xE1t\xF3l.

\`\`\`html
<div class="card-shadow">
  <ng-content select="card-title"></ng-content>
  <div class="card-divider"></div>
  <ng-content></ng-content>
</div>
\`\`\`
\`\`\`html
<custom-card>
  <h3 ngProjectAs="card-title">Hello</h3>
  <p>Welcome to the example</p>
</custom-card>
\`\`\`

### Fallback content (v18+)
A tartal\xE9k tartalom a \`<ng-content>\` **elem belsej\xE9be** ker\xFCl; csak akkor jelenik meg, ha semmi sem lett projekt\xE1lva.
\`\`\`html
<div class="wrapper">
  <ng-content>Alap\xE9rtelmezett sz\xF6veg, ha nincs tartalom megadva.</ng-content>
</div>
\`\`\`
\`\`\`html
<header>
  <ng-content select="[header]">
    <h1>Default header</h1>
  </ng-content>
</header>
\`\`\`

> A \`*ngIf="hasContent"\` + k\xFCl\xF6n fallback minta **nem** a v18 \`ng-content\` fallback API \u2013 az Angular a projekt\xE1lt tartalom megl\xE9t\xE9t maga kezeli.

## 43. Content Projection (v2+ \xB7 fallback tartalom v18+) https://angular.dev/guide/components/content-projection {#content-projection-v2-fallback-tartalom-v18}
**Single-slot:**
\`\`\`html
<!-- Sz\xFCl\u0151 -->
<app-child><p>Ez a tartalom ker\xFCl vet\xEDt\xE9sre.</p></app-child>
<!-- Gyermek -->
<div><ng-content></ng-content></div>
\`\`\`

**Multi-slot:**
\`\`\`html
<!-- Sz\xFCl\u0151 -->
<app-child><header>Fejl\xE9c tartalom</header><p>F\u0151 tartalom</p></app-child>
<!-- Gyermek -->
<div>
  <ng-content select="header"></ng-content>
  <ng-content></ng-content>
</div>
\`\`\`

## 44. ngNonBindable (v2+) https://angular.dev/guide/templates {#ngnonbindable-v2}
Letiltja az Angular adatbek\xF6t\xE9st egy elemen bel\xFCl.
\`\`\`html
<p ngNonBindable>{{ username }}</p>
\`\`\`

## 45. Custom Structural Directive \u2013 Example (v2+) https://angular.dev/guide/directives/structural-directives {#custom-structural-direktiva-pelda-v2}
\`\`\`ts
@Directive({ selector: '[appMyIf]' })
export class MyIfDirective {
  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {}
  @Input() set appMyIf(condition: boolean) {
    this.vc.clear();
    if (condition) { this.vc.createEmbeddedView(this.tpl); }
  }
}
\`\`\`
\`\`\`html
<div *appMyIf="isLoggedIn">Be vagy jelentkezve!</div>
\`\`\`

## 46. Directives and Their Usage (ng* helpers) (v2+) https://angular.dev/guide/directives {#directivak-es-hasznalatuk-ng-segedek-v2}
- **ngTemplateOutlet** \u2013 dinamikus sablonok megjelen\xEDt\xE9se
- **ngOptimizedImage** \u2013 k\xE9poptimaliz\xE1l\xE1s
- **ngContainer** \u2013 csoportos\xEDt\xE1s renderel\xE9s n\xE9lk\xFCl
- **ngPlural / ngPluralCase** \u2013 t\xF6bbes sz\xE1m kezel\xE9se
- **ngSwitch / ngSwitchCase / ngSwitchDefault** \u2013 felt\xE9teles megjelen\xEDt\xE9s
- **ngModelGroup** \u2013 \u0171rlap csoportos\xEDtott vez\xE9rl\u0151elemek (template-driven; reactive megfelel\u0151je a be\xE1gyazott \`FormGroup\` + \`formGroupName\` \u2013 l\xE1sd az *ngModelGroup and Reactive Forms Alternatives* szekci\xF3t)
- **ng-template** \u2013 sablon elem (nem direkt\xEDva); a kapcsol\xF3d\xF3 direkt\xEDva az \`NgTemplateOutlet\` / \`*ngTemplateOutlet\`
- **ngComponentOutlet** \u2013 dinamikus komponens megjelen\xEDt\xE9se (\`inputs\`, \`injector\`, \`directives\` opci\xF3kkal)
- **ngSrc / ngSrcset** (\`NgOptimizedImage\`) \u2013 k\xE9pbet\xF6lt\xE9s optimaliz\xE1l\xE1sa

> Nem direkt\xEDv\xE1k, csak gyakran ide keverednek: **NgZone** (injekt\xE1lhat\xF3 szolg\xE1ltat\xE1s a z\xF3na-kezel\xE9shez), **NgModuleRef** (modulp\xE9ld\xE1ny referencia), **ngProbeToken** (bels\u0151 debug token), \`ngZoneOptions\` (bootstrap konfigur\xE1ci\xF3). Ezek TypeScript API-k, nem haszn\xE1lhat\xF3k sablonban.

## 47. Zoneless Change Detection (v18 experimental \xB7 v20.2 stable) https://angular.dev/guide/zoneless {#zoneless-change-detection-v18-kiserleti-v20-2-stable}
\`\`\`bash
npm uninstall zone.js
\`\`\`
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
});

@Component({ selector: 'app-root', template: \`{{ count() }}\` })
export class AppComponent {
  count = signal(0);
  increment() { this.count.set(this.count() + 1); }
}
\`\`\`
Signal-\xEDr\xE1s, \`markForCheck()\`, AsyncPipe \xFAj \xE9rt\xE9k, input-be\xE1ll\xEDt\xE1s \xE9s komponens csatol\xE1s/lev\xE1laszt\xE1s \xFCtemezi a CD-t \u2013 manu\xE1lis \`ApplicationRef.tick()\` \xE1ltal\xE1ban nem kell.

## 48. Server Side Rendering (SSR) (v17+ (@angular/ssr)) https://angular.dev/guide/ssr {#server-side-rendering-ssr-v17-angular-ssr}
\`\`\`bash
ng add @angular/ssr
npm run build
npm run serve:ssr
\`\`\`

> A \`@nguniversal/express-engine\` csomag megsz\u0171nt (v17-t\u0151l): a funkci\xF3 a be\xE9p\xEDtett \`@angular/ssr\` csomagba ker\xFClt. R\xE9gi projektekn\xE9l az \`ng update\` migr\xE1ci\xF3ja \xE1t\xEDrja a konfigur\xE1ci\xF3t.
Hydration: a b\xF6ng\xE9sz\u0151 "hidrat\xE1lja" a szerveren gener\xE1lt statikus HTML-t, aktiv\xE1lva a dinamikus funkci\xF3kat.

## 49. Angular Migration Commands (v6+ (ng update)) https://angular.dev/update {#angular-migration-commands-v6-ng-update}
\`\`\`bash
ng update @angular/core @angular/cli
ng update @angular/core          # inject() migr\xE1ci\xF3 / control flow syntax
ng update @angular/core @angular/router   # lazy-loaded routes
\`\`\`

## 50. UntypedFormGroup (v14+) https://angular.dev/guide/forms/typed-forms {#untypedformgroup-v14}
Nem t\xEDpusos \u0171rlapok kezel\xE9s\xE9re (Angular 14+).
\`\`\`ts
// FormGroup (t\xEDpusos)
form = new FormGroup<{ name: FormControl<string> }>({ name: new FormControl('') });
// UntypedFormGroup (nem t\xEDpusos)
form = new UntypedFormGroup({ name: new FormControl('') });
\`\`\`

### formControlName vs [formControl]
\`\`\`html
<input formControlName="name">     <!-- FormGroup-on bel\xFCl -->
<input [formControl]="nameControl"> <!-- \xF6n\xE1ll\xF3 vez\xE9rl\u0151 -->
\`\`\`

## 51. UntypedFormBuilder (v14+) https://angular.dev/guide/forms/typed-forms {#untypedformbuilder-v14}
\`\`\`ts
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({ selector: 'app-sample-form', template: \`<form [formGroup]="form"></form>\` })
export class SampleFormComponent {
  form: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({ name: '', age: '' });
  }
}
\`\`\`
C\xE9lja: rugalmas, gyors formkezel\xE9s t\xEDpusellen\u0151rz\xE9s n\xE9lk\xFCl.

## 52. Data Binding (v2+) https://angular.dev/guide/templates/binding {#data-binding-v2}
1. **Interpol\xE1ci\xF3:** \`{{ propertyName }}\`
2. **Property binding:** \`[property]="expression"\`
3. **Event binding:** \`(event)="method()"\`
4. **K\xE9tir\xE1ny\xFA:** \`[(ngModel)]="property"\`

\`\`\`html
<input [(ngModel)]="name" placeholder="\xCDrd be a neved">
<p>\xDCdv\xF6z\xF6llek, {{ name }}!</p>
\`\`\`

## 53. Built-in Validators (v2+) https://angular.dev/guide/forms/form-validation {#built-in-validators-v2}
\`\`\`ts
Validators.required
Validators.min(18), Validators.max(65)
Validators.minLength(5), Validators.maxLength(15)
Validators.requiredTrue
Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$")
Validators.nullValidator
Validators.compose([Validators.required, Validators.minLength(5)])
Validators.composeAsync([asyncValidator])
\`\`\`

**Async Validator p\xE9lda (Zip Code):**
\`\`\`ts
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
\`\`\`

## 54. Builder Settings (v16+ (esbuild) \xB7 v17+ application builder) https://angular.dev/tools/cli/cli-builder {#builder-settings-v16-esbuild-v17-application-builder}
\`\`\`json
"build": { "builder": "@angular/build:application" }
\`\`\`
Aj\xE1nlott: **\`@angular/build:application\`** (esbuild-alap\xFA, modern default). A \`@angular-devkit/build-angular:browser-esbuild\` \xE1tmeneti builder volt a webpack \`browser\` \xE9s az \`application\` k\xF6z\xF6tt.
Egy\xE9b aj\xE1nlott opci\xF3k: \`optimization: true\`, \`sourceMap: false\`. A \`buildOptimizer\` a r\xE9gi webpack \`browser\` builder opci\xF3ja \u2013 az application/esbuild \xFAton nem relev\xE1ns.

## 55. TypeScript Method Overload / Override (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads {#typescript-method-overload-override-typescript-5}
**Overriding:**
\`\`\`ts
class Animal { makeSound(): void { console.log("Some sound"); } }
class Dog extends Animal { makeSound(): void { console.log("Bark"); } }
\`\`\`

**Overloading:**
\`\`\`ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any { return a + b; }
}
\`\`\`

## 56. FakeAsync, tick, flush, flushMicrotask (v2+ \xB7 zone-based; use Vitest fake timers when zoneless) https://angular.dev/guide/testing/zone-js-testing-utilities {#fakeasync-tick-flush-flushmicrotask-v2-zone-alapu-zoneless-helyett-vitest-fake-timers}
- \`tick()\` \u2013 id\u0151 el\u0151rel\xE9ptet\xE9se
- \`flush()\` \u2013 minden aszinkron feladat v\xE9grehajt\xE1sa
- \`flushMicrotasks()\` \u2013 csak Promise-ok v\xE9grehajt\xE1sa

\`\`\`ts
it('should handle async task', fakeAsync(() => {
  let done = false;
  setTimeout(() => { done = true; }, 1000);
  tick(1000);
  expect(done).toBeTrue();
}));
\`\`\`

## 57. Component Selectors (v2+) https://angular.dev/guide/components/selectors {#component-selectors-v2}
**Elem szelektor:**
\`\`\`ts
@Component({ selector: 'app-user-card' })
\`\`\`
\`\`\`html
<app-user-card></app-user-card>
\`\`\`

**Attrib\xFAtum szelektor:**
\`\`\`ts
@Component({ selector: '[appUserCard]' })
\`\`\`
\`\`\`html
<div appUserCard></div>
\`\`\`

**Oszt\xE1ly szelektor:**
\`\`\`ts
@Component({ selector: '.app-user-card' })
\`\`\`
\`\`\`html
<div class="app-user-card"></div>
\`\`\`

**T\xF6bb szelektor:**
\`\`\`ts
@Component({ selector: 'app-user-card, [appUserCard], .app-user-card' })
\`\`\`

### Host Element
\`\`\`html
<app-user-profile></app-user-profile>
\`\`\`
Haszn\xE1lat: \`:host\` pszeudo-szelektor st\xEDlushoz, \`@HostBinding\`, \`@HostListener\`, vagy \`host: { class: 'css-classname' }\` a \`@Component\` decoratoron bel\xFCl.

## 58. Style Binding (v2+) https://angular.dev/guide/templates/binding {#style-binding-v2}
**Class binding:**
\`\`\`html
<div [class.active]="isActive">Elem</div>
<div [class]="myClassString"></div>
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }"></div>
\`\`\`

**Style Binding:**
\`\`\`html
<div [style.color]="'red'">Piros sz\xF6veg</div>
<div [style.font-size.px]="fontSize">Dinamikus m\xE9ret</div>
<div [ngStyle]="{'color': 'blue', 'font-weight': 'bold'}">K\xE9k, f\xE9lk\xF6v\xE9r</div>
\`\`\`
\`\`\`ts
styles = { color: 'green', 'font-size': '20px', 'background-color': 'lightgray' };
\`\`\`
\`\`\`html
<div [ngStyle]="styles">St\xEDlus objektumb\xF3l</div>
\`\`\`

## 59. DestroyRef (v16+) https://angular.dev/api/core/DestroyRef {#destroyref-v16}
Automatikusan v\xE9grehajt logik\xE1t a komponens/service megsemmis\xFCl\xE9sekor, kiv\xE1ltva sok esetben az \`OnDestroy\` hook-ot.

\`\`\`ts
private destroyRef = inject(DestroyRef);
this.destroyRef.onDestroy(() => { /* clean something */ });
\`\`\`
Kombin\xE1lhat\xF3 \`takeUntilDestroyed()\` / \`takeUntilDestroyed(destroyRef)\` (\`@angular/core/rxjs-interop\`) \xE9s \`effect()\`-tel. A \`DestroyRef\` **nem** Observable \u2013 ne haszn\xE1ld \`takeUntil(destroyRef)\`-k\xE9nt.

## 60. Injection Context (v14+ \xB7 runInInjectionContext v16+) https://angular.dev/guide/di/dependency-injection-context {#injection-context-v14-runininjectioncontext-v16}
A DI rendszer bels\u0151leg egy fut\xE1sidej\u0171 kontextusra t\xE1maszkodik, ahol az aktu\xE1lis injector el\xE9rhet\u0151. Ez el\xE9rhet\u0151:
- DI-rendszer \xE1ltal instanci\xE1lt oszt\xE1lyokban (konstruktor)
- oszt\xE1ly mez\u0151k inicializ\xE1l\xF3j\xE1ban
- Provider/@Injectable \`useFactory\` gy\xE1ri f\xFCggv\xE9nyben
- InjectionToken gy\xE1ri f\xFCggv\xE9nyben
- injekt\xE1l\xE1si kontextusban fut\xF3 stack frame-en bel\xFCl

Ha injekt\xE1l\xE1si kontextusban vagyunk, az \`inject\` f\xFCggv\xE9ny haszn\xE1lhat\xF3.

## 61. Template Reference Variables (v2+) https://angular.dev/guide/templates/reference-variables {#template-reference-variables-v2}
**DOM elemhez hozz\xE1f\xE9r\xE9s:**
\`\`\`html
<form (ngSubmit)="onSubmit(inputElement)">
  <input #inputElement type="text">
  <button type="button" (click)="print(inputElement.value)">Print value</button>
</form>
\`\`\`
\`\`\`ts
onSubmit(inputElement: HTMLInputElement) {}
print(value: string) { console.log(value); }
\`\`\`

> A sablonban **nincs** \`console\`, \`window\` vagy m\xE1s glob\xE1lis objektum \u2013 a kifejez\xE9sek a komponensp\xE9ld\xE1ny kontextus\xE1ban \xE9rt\xE9kel\u0151dnek ki. Napl\xF3z\xE1shoz komponens-met\xF3dust kell h\xEDvni.

**Komponens p\xE9ld\xE1ny el\xE9r\xE9se:**
\`\`\`html
<app-counter #counterComp></app-counter>
<button (click)="counterComp.reset()">Reset Counter</button>
\`\`\`

## 62. Structural Directive \u2013 Accessing Exported Values (v2+ \xB7 @let v19+) https://angular.dev/guide/templates/let-template-variables {#structural-directive-exportalt-ertek-elerese-v2-let-v19}
\`\`\`html
<div *ngIf="user as currentUser">{{ currentUser.name }}</div>
\`\`\`

### @let Template Variables
\`\`\`html
@let name = user.name;
@let greeting = 'Hello, ' + name;
@let data = data$ | async;
@let pi = 3.1459;
@let coordinates = {x: 50, y: 100};
\`\`\`
\`@let\` deklar\xE1ci\xF3k az aktu\xE1lis n\xE9zetre \xE9s lesz\xE1rmazottaira korl\xE1toz\xF3dnak; \xFAj n\xE9zet j\xF6n l\xE9tre komponenshat\xE1ron, control flow blokkokn\xE1l, \`@defer\` blokkokn\xE1l, vagy struktur\xE1lis direkt\xEDv\xE1kn\xE1l.

## 63. Signal (v16 dev preview \xB7 v17 stable) https://angular.dev/guide/signals {#signal-v16-dev-preview-v17-stable}
\`\`\`ts
type Signal<T> = (() => T) & { [SIGNAL]: unknown; }
\`\`\`
\`\`\`ts
function signal<T>(initialValue: T, options?: CreateSignalOptions<T>): WritableSignal<T>;
interface WritableSignal<T> extends Signal<T> {
  set(value: T): void;
  update(updateFn: (value: T) => T): void;
  asReadonly(): Signal<T>;
}
\`\`\`

## 64. Effect (v16 dev preview \xB7 v20 stable) https://angular.dev/guide/signals/effect {#effect-v16-dev-preview-v20-stable}
\`\`\`ts
function effect(effectFn: (onCleanup: EffectCleanupRegisterFn) => void, options?: CreateEffectOptions): EffectRef;
\`\`\`

### Mikor haszn\xE1ljunk effektet
- adatnapl\xF3z\xE1s, analitika
- adatok szinkronban tart\xE1sa \`window.localStorage\`-tel
- egy\xE9ni DOM viselked\xE9s
- egyedi renderel\xE9s (canvas, diagramk\xE9sz\xEDt\u0151 k\xF6nyvt\xE1r)

### Mikor NE
- \xE1llapotv\xE1ltoz\xE1sok terjed\xE9s\xE9hez (helyette \`computed\`)

## 65. Computed (v16 dev preview \xB7 v17 stable) https://angular.dev/guide/signals {#computed-v16-dev-preview-v17-stable}
\`\`\`ts
function computed<T>(computation: () => T, options?: CreateComputedOptions<T>): Signal<T>;
\`\`\`

## 66. LinkedSignal (v19 experimental \xB7 v20 stable) https://angular.dev/guide/signals/linked-signal {#linkedsignal-v19-kiserleti-v20-stable}
Egy speci\xE1lis signal, ami egy m\xE1sik forr\xE1shoz k\xF6t\xF6tt, de saj\xE1t maga is fel\xFCl\xEDrhat\xF3; ha a forr\xE1s v\xE1ltozik, \xFAjra szinkroniz\xE1l\xF3dik.

\`\`\`ts
function linkedSignal<D>(computation: () => D, options?): WritableSignal<D>;
function linkedSignal<S, D>(options: { source: () => S; computation: (source, previous?) => D; }): WritableSignal<D>;
\`\`\`

### Haszn\xE1lati esetek
1. \u0170rlapmez\u0151k default \xE9rt\xE9kei
2. \xC1tmeneti szerkeszt\xE9si \xE1llapot
3. \xC9l\u0151 konfigur\xE1ci\xF3 szerkeszt\xE9s
4. Keres\u0151s\xE1v/sz\u0171r\u0151 \xE9rt\xE9kek kezel\xE9se

> Az \`NgControl\` status class-ok (\`ng-valid\`, \`ng-dirty\`, \u2026) \xE9s a \`formControlName\` vs \`[formControl]\` \xF6sszevet\xE9s az \u0171rlap szekci\xF3kban / Q&A-ban szerepel \u2013 nem LinkedSignal-t\xE9ma.

## 67. TypeScript Utility Types Cheat Sheet (TypeScript 5+) https://www.typescriptlang.org/docs/handbook/utility-types.html {#typescript-utility-types-cheat-sheet-typescript-5}
- **Partial<T>** \u2013 minden mez\u0151t optional-l\xE1 tesz. \`type PartialUser = Partial<User>;\`
- **Required<T>** \u2013 minden mez\u0151t k\xF6telez\u0151v\xE9 tesz. \`type Final = Required<Draft>;\`
- **Readonly<T>** \u2013 minden mez\u0151t readonly-v\xE1 tesz. \`type ImmutableConfig = Readonly<Config>;\`
- **Pick<T, K>** \u2013 kiv\xE1laszt n\xE9h\xE1ny mez\u0151t. \`type ContactInfo = Pick<User, 'name' | 'email'>;\`
- **Omit<T, K>** \u2013 elt\xE1vol\xEDt mez\u0151ket. \`type UpdateUserDto = Omit<User, 'id'>;\`
- **Record<K, T>** \u2013 objektumt\xEDpus kulcs-\xE9rt\xE9k p\xE1rokkal. \`type PermissionMap = Record<Permission, boolean>;\`
- **ReturnType<T>** \u2013 f\xFCggv\xE9ny visszat\xE9r\xE9si t\xEDpusa. \`type UserReturn = ReturnType<typeof getUser>;\`
- **Parameters<T>** \u2013 f\xFCggv\xE9ny param\xE9terei tuple-k\xE9nt. \`type Args = Parameters<typeof log>;\`
- **NonNullable<T>** \u2013 elt\xE1vol\xEDtja null/undefined-ot. \`type CleanValue = NonNullable<Value>;\`
- **Exclude<T, U>** \u2013 elt\xE1vol\xEDtja U t\xEDpusokat. \`type VisibleStatus = Exclude<Status, 'deleted'>;\`
- **Extract<T, U>** \u2013 megtartja a k\xF6z\xF6s t\xEDpusokat. \`type Common = Extract<A, B>;\`
- **Awaited<T>** \u2013 kicsomagolja a Promise bels\u0151 t\xEDpus\xE1t. \`type Result = Awaited<Promise<string>>;\`

Kombin\xE1lhat\xF3k: \`type Editable = Partial<Omit<User, 'id'>>;\`

> Az al\xE1bbi **Providers** \xE9s **SSR** blokkok Angular bootstrap t\xE9m\xE1k (nem TypeScript utility type-ok); a cheat sheet ut\xE1ni gyakorlati kieg\xE9sz\xEDt\xE9sk\xE9nt szerepelnek.

### Providers (standalone) \u2013 mi mire val\xF3

A standalone bootstrap az \`NgModule\`-ok \`imports\` t\xF6mbj\xE9t **provider-f\xFCggv\xE9nyekre** cser\xE9li. Ezek tree-shakeable-ek (amit nem h\xEDvunk meg, nem ker\xFCl a bundle-be), tipiz\xE1ltak, \xE9s a viselked\xE9s\xFCket \`with*()\` **feature-f\xFCggv\xE9nyekkel** finom\xEDtjuk. Konvenci\xF3: \`provideXyz()\` = a szolg\xE1ltat\xE1s bekapcsol\xE1sa, \`withXyz()\` = optional kieg\xE9sz\xEDt\u0151 ugyanahhoz.

\`\`\`ts
bootstrapApplication(AppComponent, appConfig);

export const appConfig: ApplicationConfig = { providers: [ /* itt h\xEDvjuk \u0151ket */ ] };
\`\`\`

#### Alapr\xE9tegek (v14\u2013v16)

**\`provideHttpClient(...features)\`** \u2013 bekapcsolja a \`HttpClient\`-et. Ez v\xE1ltja ki a \`HttpClientModule\`-t (az r\xE9gi projektekben deprecated). Feature-ek:
- \`withFetch()\` (v16+) \u2013 XHR helyett a Fetch API-t haszn\xE1lja; jobb SSR-viselked\xE9s. A \`keepalive\` (v20+) **opcion\xE1lis** request-opci\xF3 (pl. analytics/beacon), nem felt\xE9tele a Fetch haszn\xE1lat\xE1nak.
- \`withInterceptors([fn1, fn2])\` (v15+) \u2013 **funkcion\xE1lis** interceptorok a deklar\xE1lt sorrendben; bel\xFCl \`inject()\` haszn\xE1lhat\xF3.
- \`withInterceptorsFromDi()\` \u2013 a r\xE9gi, oszt\xE1lyalap\xFA \`HTTP_INTERCEPTORS\` interceptorok \xE1tv\xE9tele migr\xE1ci\xF3 k\xF6zben.
- \`withXsrfConfiguration({ cookieName, headerName })\` / \`withNoXsrfProtection()\` \u2013 CSRF token kezel\xE9se.
- \`withRequestsMadeViaParent()\` \u2013 gyerek injectorban a sz\xFCl\u0151 interceptor-l\xE1nc\xE1t haszn\xE1lja.
- \`withJsonpSupport()\`, \`withHttpTransferCacheOptions({...})\` (SSR cache).

**\`provideRouter(routes, ...features)\`** \u2013 a router konfigur\xE1l\xE1sa \xE9s a route-t\xE1bla \xE1tad\xE1sa. A \`RouterModule.forRoot()\` modern megfelel\u0151je. Feature-ek:
- \`withComponentInputBinding()\` (v16+) \u2013 a route param\xE9terek, query param\xE9terek \xE9s resolved data k\xF6zvetlen\xFCl a komponens \`@Input()\`/\`input()\` mez\u0151ibe ker\xFClnek, nem kell \`ActivatedRoute\`-ot injekt\xE1lni.
- \`withViewTransitions()\` (v17+) \u2013 a navig\xE1ci\xF3t \`document.startViewTransition()\`-be csomagolja (nat\xEDv oldal\xE1tmenet).
- \`withPreloading(PreloadAllModules)\` \u2013 lazy chunkok el\u0151t\xF6lt\xE9se (l\xE1sd a preloading szekci\xF3t).
- \`withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })\` \u2013 g\xF6rget\xE9si poz\xEDci\xF3 vissza\xE1ll\xEDt\xE1sa \xE9s \`#anchor\` ugr\xE1s.
- \`withHashLocation()\` \u2013 \`/#/route\` URL-ek szerverkonfigur\xE1ci\xF3 n\xE9lk\xFCl.
- \`withEnabledBlockingInitialNavigation()\` \u2013 SSR-n\xE9l az els\u0151 navig\xE1ci\xF3 blokkol\xF3, hogy a szerver a v\xE9gleges HTML-t adja; \`withDisabledInitialNavigation()\` az ellenkez\u0151je (manu\xE1lis bootstrap).
- \`withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })\`.
- \`withDebugTracing()\` \u2013 minden router event konzolra \xEDr\xE1sa (csak fejleszt\xE9shez).

**\`provideAnimations()\`** \u2013 a r\xE9gi \`@angular/animations\` motor (\`BrowserAnimationsModule\` megfelel\u0151je). **v20-t\xF3l a csomag deprecated**, az \xFAj \xFAt az \`animate.enter\` / \`animate.leave\` \xE9s nat\xEDv CSS. Ha csak Material komponensek anim\xE1ci\xF3i miatt kellene, \xE9rdemes \xE1tgondolni.
**\`provideNoopAnimations()\`** \u2013 az anim\xE1ci\xF3s API-t kiel\xE9g\xEDti, de nem anim\xE1l. Haszn\xE1lat: tesztek, CI, akad\xE1lymentes\xEDt\xE9s (\`prefers-reduced-motion\`), lass\xFA eszk\xF6z\xF6k.
**\`provideAnimationsAsync()\`** (v17+) \u2013 az anim\xE1ci\xF3s motort lazy chunkban t\xF6lti be, \xEDgy nem terheli a kezdeti bundle-t.

**\`provideServiceWorker('ngsw-worker.js', { enabled, registrationStrategy })\`** (v15+) \u2013 PWA service worker regisztr\xE1l\xE1sa. A \`registrationStrategy: 'registerWhenStable:30000'\` addig v\xE1r, am\xEDg az app stabiliz\xE1l\xF3dik (max 30 s), hogy a regisztr\xE1ci\xF3 ne versenyezzen a kezdeti bet\xF6lt\xE9ssel. Fejleszt\xE9sben \`enabled: !isDevMode()\`.

**\`provideEnvironmentProviders([...])\`** / **\`makeEnvironmentProviders([...])\`** (v15\u2013v16) \u2013 ez a **k\xF6nyvt\xE1r\xEDr\xF3k eszk\xF6ze**: t\xF6bb providert csomagol egyetlen, t\xEDpusos \`EnvironmentProviders\` \xE9rt\xE9kbe, amit a fogyaszt\xF3 egyetlen h\xEDv\xE1sk\xE9nt ad meg. \xCDgy \xE9p\xFCl fel minden \`provideXyz()\` f\xFCggv\xE9ny:
\`\`\`ts
export function provideMyFeature(config: MyConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: MY_CONFIG, useValue: config },
    MyFeatureService,
  ]);
}
\`\`\`
El\u0151nye a sima t\xF6mbbel szemben: nem sz\xFArhat\xF3 be komponens \`providers\`-be (ford\xEDt\xE1si hiba), teh\xE1t a k\xF6nyvt\xE1r kik\xE9nyszer\xEDti a helyes haszn\xE1latot.

#### SSR \xE9s hydration (v17+)

**\`provideServerRendering()\`** \u2013 a **szerveroldali** konfigur\xE1ci\xF3 (\`app.config.server.ts\`), a szerver platform szolg\xE1ltat\xE1sait adja. v19-t\u0151l ide ker\xFClhet a \`withRoutes(serverRoutes)\` a route-szint\u0171 render m\xF3dhoz (\`Server\`, \`Client\`, \`Prerender\`).

**\`provideClientHydration(...features)\`** \u2013 a **kliensoldali** hydration: a b\xF6ng\xE9sz\u0151 nem dobja el \xE9s \xE9p\xEDti \xFAjra a szerver HTML-j\xE9t, hanem \u201E\xE9letre kelti\u201D (jelent\u0151s LCP/CLS javul\xE1s). Feature-ek:
- \`withEventReplay()\` (v18+) \u2013 a hidrat\xE1l\xE1s el\u0151tti kattint\xE1sokat elt\xE1rolja \xE9s ut\xF3lag lej\xE1tssza, \xEDgy nem veszik el a korai interakci\xF3.
- \`withIncrementalHydration()\` (v19 experimental, v20 stable) \u2013 a \`@defer (hydrate on ...)\` blokkok csak akkor hidrat\xE1l\xF3dnak, amikor t\xE9nyleg kellenek. **v22-t\u0151l ez a default**, ez\xE9rt ott m\xE1r nem kell ki\xEDrni; kikapcsol\xE1sa \`withNoIncrementalHydration()\`.
- \`withHttpTransferCacheOptions({ includePostRequests: false, filter })\` \u2013 a szerveren lefutott HTTP k\xE9r\xE9sek v\xE1lasz\xE1t \xE1tadja a kliensnek (\`TransferState\`), hogy ne k\xE9rje le k\xE9tszer.
- \`withI18nSupport()\`, \`withNoHttpTransferCache()\`.

#### Inicializ\xE1l\xE1s \xE9s change detection (v19\u2013v20)

**\`provideAppInitializer(fn)\`** (v19+) \u2013 a r\xE9gi \`APP_INITIALIZER\` multi-provider tipiz\xE1lt ut\xF3dja. A bootstrap **megv\xE1rja** a visszaadott \`Promise\`/\`Observable\`-t, teh\xE1t ide val\xF3 a runtime konfigur\xE1ci\xF3 bet\xF6lt\xE9se, feature flagek, auth session helyre\xE1ll\xEDt\xE1sa. Minden ide tett m\u0171velet lass\xEDtja az els\u0151 rendert \u2013 csak a val\xF3ban blokkol\xF3 dolgok.

**\`provideEnvironmentInitializer(fn)\`** (v19+) \u2013 az \`ENVIRONMENT_INITIALIZER\` ut\xF3dja: az environment injector fel\xE1ll\xE1sakor fut, **nem v\xE1rja meg** az aszinkron eredm\xE9nyt. Telemetria ind\xEDt\xE1sa, glob\xE1lis DI-alap\xFA regisztr\xE1ci\xF3k. (L\xE9tezik \`providePlatformInitializer()\` is: a platform szintj\xE9n, az app el\u0151tt fut.)

**\`provideZonelessChangeDetection()\`** (v18 \`provideExperimentalZonelessChangeDetection()\` n\xE9ven, v20.2-t\u0151l stable) \u2013 kiveszi a zone.js-t a change detection \xFCtemez\xE9s\xE9b\u0151l. Ezut\xE1n a CD-t signal-v\xE1ltoz\xE1s, \`markForCheck()\`, AsyncPipe \xFAj \xE9rt\xE9ke, komponens csatol\xE1s/lev\xE1laszt\xE1s \xE9s input-be\xE1ll\xEDt\xE1s ind\xEDtja. El\u0151nye: kisebb bundle, kisz\xE1m\xEDthat\xF3bb \xE9s kevesebb renderel\xE9s, jobb INP. Felt\xE9tele, hogy a k\xF3d (\xE9s a 3rd party libek) ne t\xE1maszkodjanak a zone-ra \u2013 ez\xE9rt ez a moderniz\xE1l\xE1s utols\xF3 l\xE9p\xE9se.

#### Diagnosztika \xE9s AI (v22)

**\`provideStabilityDebugging()\`** \u2013 megmutatja, **mi\xE9rt nem stabiliz\xE1l\xF3dik** az alkalmaz\xE1s a v\xE1rt (default 9 m\xE1sodperces) hat\xE1rid\u0151n bel\xFCl; tipikus SSR/hydration hibakeres\xE9s (v\xE9gtelen \`interval\`, be nem fejez\u0151d\u0151 k\xE9r\xE9s). Kell hozz\xE1 a \`zone.js/plugins/task-tracking\` import. Fejleszt\u0151i m\xF3dban \`provideClientHydration()\` mellett automatikusan bekapcsol.

**\`provideNgReflectAttributes()\`** \u2013 v22-t\u0151l az Angular m\xE1r **nem** gener\xE1l \`ng-reflect-*\` attrib\xFAtumokat (kisebb DOM, gyorsabb renderel\xE9s). Ez a provider visszakapcsolja \u0151ket, ha egy r\xE9gi debug- vagy tesztszkript r\xE1juk \xE9p\xFCl. \xDAj k\xF3dban ne t\xE1maszkodjunk r\xE1juk \u2013 haszn\xE1ljunk \`data-testid\`-t.

**\`provideWebMcpTools([...])\`** (v22, experimental) \u2013 struktur\xE1lt, tipiz\xE1lt eszk\xF6z\xF6ket (\`name\`, \`description\`, \`inputSchema\`, \`execute\`) tesz el\xE9rhet\u0151v\xE9 AI b\xF6ng\xE9sz\u0151-\xFCgyn\xF6k\xF6k sz\xE1m\xE1ra, hogy ne a DOM-ot kelljen tal\xE1lgatniuk. L\xE1sd a Web MCP szekci\xF3t.

#### Tesztel\xE9sben haszn\xE1lt providerek

| Provider | Mit ad |
| --- | --- |
| \`provideHttpClient(), provideHttpClientTesting()\` | a val\xF3di h\xE1l\xF3zat helyett \`HttpTestingController\`: \`expectOne()\`, \`flush()\`, \`verify()\`. **Mindkett\u0151t** meg kell adni, a testing a m\xE1sodikban \xEDrja fel\xFCl a backendet |
| \`provideRouter([])\` | m\u0171k\xF6d\u0151 router \xFCres route-t\xE1bl\xE1val \u2013 ennyi kell, ha a komponens csak \`routerLink\`-et haszn\xE1l; a \`RouterTestingModule\` modern helyettes\xEDt\u0151je |
| \`provideLocationMocks()\` | \`SpyLocation\` + \`MockPlatformLocation\`: navig\xE1ci\xF3 szimul\xE1l\xE1sa a b\xF6ng\xE9sz\u0151 URL-j\xE9nek m\xF3dos\xEDt\xE1sa n\xE9lk\xFCl |
| \`provideNoopAnimations()\` | az anim\xE1ci\xF3k kikapcsol\xE1sa, hogy a teszt ne v\xE1rjon \xE1tmenetekre |
| \`provideZonelessChangeDetection()\` | zoneless komponens tesztel\xE9se; ut\xE1na \`await fixture.whenStable()\` a \`detectChanges()\` helyett |
| \`provideExperimentalCheckNoChangesForDebug()\` | \u201Echanged after checked\u201D hib\xE1k felder\xEDt\xE9se |

\`\`\`ts
await TestBed.configureTestingModule({
  imports: [FlightSearch],
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideHttpClientTesting(),
    provideNoopAnimations(),
  ],
}).compileComponents();
\`\`\`

#### Hol adjuk meg \u0151ket
| Hely | \xC9lettartam | Mire |
| --- | --- | --- |
| \`bootstrapApplication\` / \`ApplicationConfig\` | alkalmaz\xE1s | glob\xE1lis infrastrukt\xFAra (\`provideRouter\`, \`provideHttpClient\`) |
| \`Route.providers\` (v14+) | a route akt\xEDv \xE1llapot\xE1ig | feature-lok\xE1lis store, feature-specifikus konfigur\xE1ci\xF3 |
| \`@Component({ providers })\` | a komponens \xE9lete | n\xE9zet-lok\xE1lis store, komponens-lok\xE1lis szolg\xE1ltat\xE1s |
| \`@Component({ viewProviders })\` | a komponens \xE9lete, projekt\xE1lt tartalom n\xE9lk\xFCl | bels\u0151 implement\xE1ci\xF3s r\xE9szlet elrejt\xE9se |

> Nem l\xE9tez\u0151 providerek, amikkel gyakran tal\xE1lkozni r\xE9gi jegyzetekben: \`provideImageKit()\`, \`provideSignalStore()\`, \`withStateTransfer()\`. Az image loaderek val\xF3di nevei: \`provideImgixLoader()\`, \`provideCloudinaryLoader()\`, \`provideImageKitLoader()\`, \`provideCloudflareLoader()\`; az SSR transfer cache: \`withHttpTransferCacheOptions()\`.

### SSR (Server-Side Rendering) \u2013 \xF6sszefoglal\xF3

\`\`\`bash
ng add @angular/ssr
npm run dev:ssr
npm run build:ssr && npm run serve:ssr
\`\`\`
Hydration opci\xF3k: Basic hydration, Dom hydration options (v17+, \`provideClientHydration()\`), Optimaliz\xE1l\xE1sok: \`@defer\`, \`ngSkipHydration\` attrib\xFAtum, \`TransferState\` / HTTP transfer cache.
Alternat\xEDv\xE1k: \`@angular/ssr\` (a r\xE9gi Angular Universal ut\xF3dja), static prerendering, edge rendering.

## 68. SignalStore (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#signalstore-ngrx-signals-17}
A Signal Store az **NgRx** (\`@ngrx/signals\`) signal-alap\xFA \xE1llapotkezel\xE9si megold\xE1sa \u2013 nem az Angular core r\xE9sze.

Alkot\xF3elemei: Store, State, Updaters, Effects, Computed, InjectStore.

A val\xF3s API a \`@ngrx/signals\` csomagb\xF3l sz\xE1rmazik: a store-t a \`signalStore()\` f\xFCggv\xE9ny \xE1ll\xEDtja el\u0151, az \xE1llapotot pedig a \`patchState()\` friss\xEDti (nincs \`createStore\`, nincs \`state()\` wrapper \u2013 a state mez\u0151i k\xF6zvetlen\xFCl signalok).

\`\`\`ts
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
\`\`\`
\`\`\`ts
@Component({
  selector: 'app-counter',
  template: \`
    <h1>Count: {{ store.count() }} (x2: {{ store.doubled() }})</h1>
    <button (click)="store.increment()">+</button>
    <button (click)="store.decrement()">-</button>
    <button (click)="store.reset()">Reset</button>
  \`,
})
export class CounterComponent { protected readonly store = inject(CounterStore); }
\`\`\`
\xC9p\xEDt\u0151elemek: \`withState\`, \`withComputed\`, \`withMethods\`, \`withProps\`, \`withHooks\`, \`withEntities\`, \`withReducer\`/\`withEventHandlers\` (Events API), \`withMutations\`, \`withResource\`. Nincs \`provideSignalStore()\`: a store vagy \`{ providedIn: 'root' }\`-tal glob\xE1lis, vagy a komponens \`providers\` t\xF6mbj\xE9ben feature-lok\xE1lis.

## 69. Angular 20 \u2013 New Features (v20) https://angular.dev/reference/releases {#angular-20-uj-funkciok-v20}
1. **A reaktivit\xE1s alapjai stabilak** \u2013 \`effect\`, \`linkedSignal\`, \`toSignal\` stable.
\`\`\`ts
private tick$ = timer(0, 1000).pipe(map(v => v + 1));
tick = toSignal(this.tick$, { initialValue: 0 });
doubleTick = computed(() => this.tick() * 2);
\`\`\`
\`\`\`ts
title = input.required<string>();
editableTitle = linkedSignal({ source: this.title, computation: (t) => t.trim() });
\`\`\`

2. **Be\xE9p\xEDtett control flow el\u0151t\xE9rben** \u2013 \`*ngIf/*ngFor/*ngSwitch\` deprec\xE1lva, \`@if/@for/@switch\` aj\xE1nlott.
\`\`\`html
@if (isLoading()) { Bet\xF6lt\xE9s... } @else if (error()) { Hiba: {{ error() }} } @else { ... }
@for (item of items(); track item.id) { {{ item.name }} }
@switch (role()) { @case ('admin') {...} @default {...} }
\`\`\`
Migr\xE1ci\xF3: \`ng generate @angular/core:control-flow\`

3. **K\xEDs\xE9rleti async \xE1llapotkezel\xE9s: resource, httpResource**
\`\`\`ts
readonly user = httpResource<User>(() => \`https://example.com/v1/users/\${this.userId()}\`);
\`\`\`

4. **Dinamikus komponens-l\xE9trehoz\xE1s: bindings \xE9s directives** (\`createComponent\` + \`inputBinding\`, \`outputBinding\`, \`twoWayBinding\`)

5. **Incremental hydration stable**
\`\`\`ts
provideClientHydration(withIncrementalHydration())
\`\`\`
\`\`\`html
@defer (hydrate on viewport) { ... }
@defer (hydrate on interaction) { ... }
\`\`\`

6. **Route-szint\u0171 render m\xF3d stable**
\`\`\`ts
export const serverRoutes: ServerRoute[] = [
  { path: 'login', renderMode: RenderMode.Client },
  { path: 'catalog', renderMode: RenderMode.Server },
  { path: 'product/:id', renderMode: RenderMode.Prerender },
];
\`\`\`

7. **Zoneless Angular stable (v20.2-t\u0151l)**
\`\`\`ts
bootstrapApplication(AppComponent, { providers: [provideZonelessChangeDetection()] });
\`\`\`

8. **animate.enter / animate.leave** (v20.2), \`@angular/animations\` deprec\xE1lt

9. **Angular a Chrome DevTools Performance panelben** \u2013 \`ng.enableProfiling()\`

10. **typeCheckHostBindings** tsconfig opci\xF3

11. **Vitest experimental t\xE1mogat\xE1s** az Angular CLI-ben

## 70. What to Try First \u2013 Practical Order for Teams (v17\u2013v22) https://angular.dev/overview {#mit-erdemes-elsokent-kiprobalni-gyakorlati-sorrend-csapatoknak-v17-v22}
1. Control flow (@if/@for/@switch) \xE9s migr\xE1ci\xF3
2. Signals stable primit\xEDvek (state signal/computed/effect alapra)
3. Incremental hydration + @defer (SSR/hybrid eset\xE9n)
4. Zoneless (k\xFCl\xF6n\xF6sen \xFAj appn\xE1l)
5. httpResource/resource (kontroll\xE1ltan, experimental)
6. animate.enter/leave (ha van "enter/leave" UI)
7. Vitest experimental (pilotk\xE9nt)

## 71. Angular Upgrade Migrations (v6+ (ng update) \xB7 schematics v14+) https://angular.dev/update-guide {#angular-upgrade-migrations-v6-ng-update-schematics-v14}
### Alapelv
Soha ne ugorj \xE1t f\u0151verzi\xF3t: v15 \u2192 v16 \u2192 v17 \u2192 v18 \u2192 v19 \u2192 v20 (helyes), v15 \u2192 v19 (helytelen).

### Hivatalos Angular Update Tool
\`\`\`bash
ng update
ng update --all --force --dry-run
ng update @angular/core@latest @angular/cli@latest
ng update @angular/core
npm install -g @angular/cli@latest
\`\`\`

### Angular Schematics Migrations
\`\`\`bash
ng update @angular/core@17
ng generate @angular/core:standalone
\`\`\`

### Standalone komponens migr\xE1ci\xF3
\`\`\`bash
ng generate @angular/core:standalone
\`\`\`
\`\`\`ts
// El\u0151tte
@NgModule({ declarations: [AppComponent], imports: [BrowserModule], bootstrap: [AppComponent] })
export class AppModule {}
// Ut\xE1na
bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
\`\`\`

### Signals migr\xE1ci\xF3
\`\`\`bash
ng generate @angular/core:signals
\`\`\`
\`\`\`ts
// El\u0151tte: @Input() value!: number;
// Ut\xE1na: value = input<number>();
const total = computed(() => price() * count());
\`\`\`

### Zone.js elt\xE1vol\xEDt\xE1s migr\xE1ci\xF3
\`\`\`bash
ng generate @angular/core:zoneless
\`\`\`
\`\`\`ts
bootstrapApplication(AppComponent, { providers: [provideZonelessChangeDetection()] });
\`\`\`

### RxJS migr\xE1ci\xF3
\`\`\`bash
ng update rxjs
\`\`\`
\`\`\`ts
// El\u0151tte: await obs.toPromise();
// Ut\xE1na: await firstValueFrom(obs);
\`\`\`

### TypeScript migr\xE1ci\xF3
\`\`\`bash
npm install typescript@latest --save-dev
\`\`\`
\`\`\`json
{ "strict": true, "noImplicitAny": true, "strictNullChecks": true }
\`\`\`

### Nx migr\xE1ci\xF3s szkriptek
\`\`\`bash
nx migrate latest
npm install
nx migrate --run-migrations
nx migrate latest --dry-run
nx g @nx/angular:convert-to-standalone
\`\`\`

### Codemod eszk\xF6z\xF6k
\`\`\`bash
npm install -g jscodeshift
jscodeshift -t migrate.js src/
\`\`\`

### ESLint migr\xE1ci\xF3
\`\`\`bash
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint
\`\`\`

### Build rendszer migr\xE1ci\xF3 (esbuild)
\`\`\`bash
ng update @angular/cli
\`\`\`
\`\`\`json
"builder": "@angular-devkit/build-angular:browser-esbuild"
\`\`\`

### SSR \xE9s Hydration migr\xE1ci\xF3
\`\`\`bash
ng add @angular/ssr
\`\`\`
\`\`\`ts
provideClientHydration()
\`\`\`

### Deprecated API migr\xE1ci\xF3k
\`\`\`ts
// El\u0151tte: imports: [HttpClientModule]
// Ut\xE1na: providers: [provideHttpClient()]
\`\`\`

### Automatiz\xE1lt CI Pipeline
\`\`\`bash
npm ci
ng update --dry-run
ng test
ng lint
ng build
\`\`\`

### Teljes migr\xE1ci\xF3s workflow minta (v16 \u2192 v20)
\`\`\`bash
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
\`\`\`

### Legjobb gyakorlatok
Mindig: Git backup, feature branch, increment\xE1lis upgrade, CI futtat\xE1s, E2E tesztel\xE9s.
Soha: force upgrade productionon, skippelt verzi\xF3, teszt n\xE9lk\xFCli deploy.

## 72. Angular Typed Forms (v14+) https://angular.dev/guide/forms/typed-forms {#angular-typed-forms-v14}
T\xEDpusbiztos (generics alap\xFA) Reactive Forms v\xE1ltozat. C\xE9l: compile-time ellen\u0151rz\xE9s, kevesebb type assertion, jobb autocomplete/refaktor\xE1l\xE1s.

### NonNullableFormBuilder vs nullable FormControl
\`\`\`ts
new FormControl<string>('abc') // gyakran string | null
\`\`\`
\`NonNullableFormBuilder\` (\`fb.nonNullable\`) \u2013 a kontrollok \xE9rt\xE9ke nem lehet null.

### Form Model t\xEDpus minta
\`\`\`ts
type UserDto = {
  id: string; email: string; displayName: string | null; age?: number;
  isActive: boolean; address?: { city: string; zip: string } | null;
};

type AddressFormModel = { city: FormControl<string>; zip: FormControl<string>; };
type UserFormModel = {
  email: FormControl<string>; displayName: FormControl<string>; age: FormControl<number>;
  isActive: FormControl<boolean>; address: FormGroup<AddressFormModel>; tags: FormArray<FormControl<string>>;
};
\`\`\`

\`\`\`ts
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
\`\`\`

### patchValue vs setValue
\`setValue\` \u2013 minden mez\u0151t meg kell adni. \`patchValue\` \u2013 r\xE9szleges friss\xEDt\xE9s.

\`\`\`ts
function toFormPatch(dto: UserDto) {
  return {
    email: dto.email, displayName: dto.displayName ?? '', age: dto.age ?? 18,
    isActive: dto.isActive,
    address: { city: dto.address?.city ?? '', zip: dto.address?.zip ?? '' },
  };
}
this.form.patchValue(toFormPatch(dtoFromApi));
\`\`\`

### FormArray minta \u2013 kos\xE1r t\xE9telek
\`\`\`ts
type CartItemFormModel = { productId: FormControl<string>; quantity: FormControl<number>; };
type CartFormModel = { items: FormArray<FormGroup<CartItemFormModel>>; };
\`\`\`

### Cross-field valid\xE1ci\xF3
\`\`\`ts
function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup<{ password: FormControl<string>; confirm: FormControl<string>; }>;
    return group.controls.password.value === group.controls.confirm.value ? null : { passwordsNotMatch: true };
  };
}
\`\`\`

### getRawValue vs value
\`value\` \u2013 nem tartalmazza a disabled mez\u0151ket. \`getRawValue()\` \u2013 tartalmazza \u0151ket, ment\xE9shez aj\xE1nlott.

### Best practice aj\xE1nl\xE1sok
1. \`NonNullableFormBuilder\` alap\xE9rtelmez\xE9sk\xE9nt
2. DTO \xE9s FormModel elk\xFCl\xF6n\xEDt\xE9se
3. Explicit mapping r\xE9teg (\`toFormPatch\`, \`toDto\`)
4. FormArray helper met\xF3dusok
5. \`this.form.controls.x\` a \`form.get('path')\` helyett

## 73. Modern Angular \u2013 Production Grade Architekt\xFAra Best Practices (v19\u2013v22) https://angular.dev/style-guide {#modern-angular-production-grade-architektura-best-practices-v19-v22}
### C\xE9lok
Sk\xE1l\xE1zhat\xF3 fejleszt\xE9s, tiszta hat\xE1rok, stable teljes\xEDtm\xE9ny, k\xF6vetkezetes min\u0151s\xE9g, biztons\xE1g, hossz\xFA t\xE1v\xFA evol\xFAci\xF3.

### Domain-alap\xFA Nx monorepo strukt\xFAra
\`\`\`
apps/ (shell, admin, docs)
libs/
  shared/ (ui, util, data-access)
  billing/ (feature, ui, data-access, domain)
  user-profile/ (feature, ui, data-access, domain)
\`\`\`
K\xF6nyvt\xE1rt\xEDpusok: feature (route entry, container), ui (prezent\xE1ci\xF3s), data-access (API/cache/repo), domain (t\xEDpusok, szab\xE1lyok, mapping).

### Smart (container) \xE9s Dumb (presentational) komponensek
\`\`\`ts
@Component({
  standalone: true, selector: 'my-user-profile-page',
  imports: [UserProfileCardComponent],
  template: \`<my-user-profile-card [vm]="vm()" (refresh)="reload()" />\`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePageComponent {
  private readonly store = inject(UserProfileStore);
  readonly vm = computed(() => ({ user: this.store.user(), loading: this.store.loading(), error: this.store.error() }));
  reload(): void { this.store.load(); }
}
\`\`\`

### Bootstrap 2026: standalone + zoneless + router
\`\`\`ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([correlationIdInterceptor, authInterceptor]))
  ]
};
\`\`\`

### Signal Store + RxJS orchestration
\`\`\`ts
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
      error: () => { this.error.set('Bet\xF6lt\xE9si hiba'); this.loading.set(false); }
    });
  }
}
\`\`\`

RxJS keres\xE9s-debounce example (switchMap):
\`\`\`ts
this.term$.pipe(debounceTime(300), distinctUntilChanged(), switchMap((t) => {
  this.loading.set(true);
  return this.http.get<string[]>(\`/api/search?q=\${encodeURIComponent(t)}\`);
})).subscribe((items) => { this.results.set(items); this.loading.set(false); });
\`\`\`

### SSR + defer
\`\`\`html
@defer (on viewport) { <heavy-recommendations /> } @placeholder { <p>Aj\xE1nl\xF3k bet\xF6lt\xE9se...</p> }
\`\`\`

### Performance
OnPush/Signal komponensek, lazy loading minden nagy feature-re, \`@for\` list\xE1kn\xE1l \`track\` (legacy \`*ngFor\`-n\xE1l \`trackBy\`), bundle budget figyel\xE9s.

### Biztons\xE1g
Auth interceptor, correlation-id interceptor, DomSanitizer.

### Antipatternek
Nested subscribe, \`effect()\` t\xFAlhaszn\xE1lata, domain hat\xE1rok hi\xE1nya, lazy loading n\xE9lk\xFCli \xF3ri\xE1s feature-\xF6k.

### D\xF6nt\xE9si t\xE9rk\xE9p
Kicsi projekt: standalone + feature szervez\xE9s + egyszer\u0171 signal store.
Nagy projekt: domain-driven Nx monorepo, tag-ek, boundary enforcement, signals UI-state-re + RxJS orchestration-re.

## 74. Signal Store \u2013 Deeper Introduction (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#signal-store-melyebb-bevezeto-ngrx-signals-17}
### Alapfogalmak
State, Feature State, Updater, Selector, Effect, Entity, Slice, Facade.

### Aj\xE1nlott strukt\xFAra
\`\`\`
features/users/store/{users.store.ts, users.state.ts, users.effects.ts}
\`\`\`

### State \xE9s Store alapimplement\xE1ci\xF3
\`\`\`ts
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
\`\`\`

\`withState\`, \`withMethods\`, \`withComputed\`, \`withHooks\` \u2013 az \xE9p\xEDt\u0151elemek.

### Mut\xE1torok (immutable)
\`\`\`ts
patchState(state, { users: [...state.users(), user] }); // j\xF3
// state.users().push(user); // rossz
\`\`\`

### Effektek (aszinkron logika)
\`\`\`ts
withMethods((state, http = inject(HttpClient)) => ({
  async fetchUsers() {
    patchState(state, { loading: true });
    try {
      const users = await firstValueFrom(http.get<User[]>('/api/users'));
      patchState(state, { users, loading: false });
    } catch (e) { patchState(state, { error: 'Load failed', loading: false }); }
  },
}));
\`\`\`

### Component integr\xE1ci\xF3
\`\`\`ts
@Component({ providers: [UsersStore], ... })
export class UsersComponent {
  constructor(public store: UsersStore) { this.store.fetchUsers(); }
}
\`\`\`

### Entity kezel\xE9s
\`\`\`ts
interface UsersState { entities: Record<string, User>; ids: string[]; }
withComputed((state) => ({ users: computed(() => state.ids().map(id => state.entities()[id])) }));
\`\`\`

### Store kommunik\xE1ci\xF3 \u2013 Facade
\`\`\`ts
@Injectable()
export class UserFacade {
  constructor(private users: UsersStore, private auth: AuthStore) {}
}
\`\`\`

### Tesztel\xE9s
\`\`\`ts
it('should load users', () => {
  store.loadUsers([{ id: '1', name: 'Test' }]);
  expect(store.users().length).toBe(1);
});
\`\`\`

### Tipikus use case-ek
Aj\xE1nlott: dashboard state, lista+r\xE9szletek, sz\u0171r\xE9s, pagin\xE1ci\xF3, modal \xE1llapot, editor workflow, wizard.
Nem aj\xE1nlott: cross-app auth, permission rendszer, offline sync engine.

### Anti-patterns
Glob\xE1lis mega-store, direct DOM access, side-effect computed-ben, mut\xE1ci\xF3 patchState n\xE9lk\xFCl.

### Enterprise aj\xE1nl\xE1s
Feature Store \u2192 Signal Store; Global Store \u2192 NgRx Store; Backend Sync \u2192 Effects (hibrid architekt\xFAra).

## 75. Form \u2192 Store \u2192 API (v16+) https://ngrx.io/guide/signals/signal-store {#form-store-api-v16}
\`\`\`ts
@Component(...)
export class EditUserComponent {
  form = this.fb.group({ name: [''], email: [''] });
  save() { this.store.updateUser(this.form.value); }
}
\`\`\`
Ne t\xE1rold a teljes formot a store-ban: Store = domain state, Form = UI state.

## 76. Facade Service (v2+) https://angular.dev/guide/di/creating-injectable-service {#facade-service-v2}
Facade = publikus API a komponenseknek: expone-ol Observable/signal-eket \xE9s dispatch-el\u0151 met\xF3dusokat, elrejti a store bels\u0151 r\xE9szleteit. Cs\xF6kkenti a coupling-ot, konzisztens mint\xE1t ad csapatoknak. Bad practice: business logic/subscribe a facade-ban.

## 77. NGRX (NgRx 15+ (createActionGroup, functional effects)) https://ngrx.io/guide/store {#ngrx-ngrx-15-createactiongroup-functional-effects}
### Mikor Store, mikor ComponentStore, mikor semmi
- **Semmi:** helyi, r\xF6vid \xE9let\u0171 \xE1llapot.
- **ComponentStore:** feature/route-szint\u0171 \xE1llapot, RxJS orchestration egy feature-\xF6n bel\xFCl.
- **Global Store:** t\xF6bb feature megosztja az \xE1llapotot, glob\xE1lis cache, time-travel debug.

### Actions
\`\`\`ts
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
\`\`\`

### State + Reducer
\`\`\`ts
export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, (state, { query }) => ({ ...state, loading: true, lastQuery: query })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users: byId(users) })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
\`\`\`

### Selectors
\`\`\`ts
export const selectUsersState = createFeatureSelector<UsersState>('users');
export const selectAllUsers = createSelector(selectUsersMap, selectUserIds, (map, ids) => ids.map(id => map[id]));
\`\`\`

### Effects
\`\`\`ts
export const loadUsers$ = createEffect(
  (actions$ = inject(Actions), api = inject(UsersApi)) => actions$.pipe(
    ofType(UsersActions.loadUsers),
    switchMap((action) => api.search(action.query).pipe(
      map(users => UsersActions.loadUsersSuccess({ users })),
      catchError(err => of(UsersActions.loadUsersFailure({ error: String(err) })))
    ))
  ), { functional: true }
);
\`\`\`
Oper\xE1tor v\xE1laszt\xE1s: \`switchMap\` (cancel), \`exhaustMap\` (ignore), \`concatMap\` (queue), \`mergeMap\` (parallel).

### Entities (NgRx Entity)
\`\`\`ts
export const usersAdapter = createEntityAdapter<User>({ selectId: (u) => u.id });
export const initialState: UsersState = usersAdapter.getInitialState({ selectedUserId: null, loading: false, error: null });
\`\`\`

### Router Store
State derived from the URL: \`selectRouteParams\`, \`selectQueryParams\`.

### Facade
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class UsersFacade {
  readonly users$ = this.store.select(selectAllUsers);
  constructor(private readonly store: Store) {}
  search(query: string): void { this.store.dispatch(UsersActions.loadUsers({ query })); }
}
\`\`\`

### ComponentStore deep dive
\`\`\`ts
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
\`\`\`

### RxJS Playbook
1. Ne nesteld a subscribe-ot.
2. Async pipe prefer\xE1l\xE1sa.
3. Hibakezel\xE9s a streamben (catchError).
4. Explicit cancellation-modellez\xE9s (oper\xE1tor-v\xE1laszt\xE1s).

### Anti-patterns (kiemelt)
- Business logika komponensben
- Dispatch \`tap\`-ben
- Derived data state-ben t\xE1rol\xE1sa
- "God feature" state
- T\xFAl sok mindent csin\xE1l\xF3 effect
- Side-effect selectorban
- Loading/error nem modellezve
- Glob\xE1lis store ephemeral UI state-hez

### ComponentStore code smells (prioritiz\xE1lt)
**P0:** manual subscribe effektben, side effect updaterben, glob\xE1lisk\xE9nt haszn\xE1lt ComponentStore, strukt\xFAr\xE1latlan patchState effektben.
**P1:** effekt imperat\xEDv triggerel\xE9s, derived data state-ben, t\xFAlterhelt store felel\u0151ss\xE9g.
**P2:** patchState t\xFAlzott sz\xF3rt haszn\xE1lata, dr\xE1ga sz\xE1m\xEDt\xE1s selectorban, "god vm$".
**P3:** inkonzisztens elnevez\xE9s, implement\xE1ci\xF3s r\xE9szletek sziv\xE1rg\xE1sa, teardown hi\xE1nya.

### Cheat sheet
Store: cross-feature/glob\xE1lis. Effects: async orchestration. Entity: nagy kollekci\xF3k. Router Store: URL-derived state. Facade: egyszer\u0171 komponens API. ComponentStore: feature-lok\xE1lis state.

## 78. Change Detection \u2013 What Triggers It? (The 5 Main Causes) (v2+ \xB7 zoneless v20+) https://angular.dev/guide/zoneless {#change-detection-mi-valtja-ki-az-5-fo-ok-v2-zoneless-v20}
1. **B\xF6ng\xE9sz\u0151 esem\xE9nyek (DOM events)** \u2013 Zone.js patcheli az \`addEventListener\`-t.
2. **setTimeout / setInterval** \u2013 Zone.js patchelt API-k.
3. **XHR / Fetch / HTTP v\xE1laszok** \u2013 HttpClient k\xE9r\xE9sek is ide tartoznak.
4. **Promise-ok felold\xE1sa** (\`then/catch/finally\`, \`async/await\`).
5. **Manu\xE1lis trigger** \u2013 \`ChangeDetectorRef.detectChanges()\`, \`markForCheck()\`, \`ApplicationRef.tick()\`, async pipe.

Zoneless m\xF3dban (\`provideZonelessChangeDetection\`) az 1\u20134. pont automatikus triggerei megsz\u0171nnek \u2013 csak signal-v\xE1ltoz\xE1s \xE9s explicit trigger ind\xEDtja a CD-t.

## 79. OnPush as the Default Change Detection Strategy (v22+) https://angular.dev/api/core/ChangeDetectionStrategy {#onpush-mint-alapertelmezett-change-detection-strategia-v22}
Az OnPush lett az aj\xE1nlott/default strat\xE9gia. A r\xE9gi eager m\xF3d explicit neve: \`ChangeDetectionStrategy.Eager\` (kor\xE1bban "Default").
\`\`\`ts
@Component({ changeDetection: ChangeDetectionStrategy.Eager }) // r\xE9gi, mindent-ellen\u0151rz\u0151 m\xF3d
@Component({}) // OnPush a default, megad\xE1s n\xE9lk\xFCl is
\`\`\`

## 80. afterRender Side Effects \u2013 afterRender and afterNextRender (v17+) https://angular.dev/api/core/afterRender {#rendereles-utani-mellekhatasok-afterrender-es-afternextrender-v17}
\`\`\`ts
constructor() {
  afterNextRender(() => { this.initChartLibrary(); });
  afterRender({
    read: () => { this.measureCanvas(); },
  });
}
\`\`\`
F\xE1zisok (sorrend): \`earlyRead\` \u2192 \`write\` \u2192 \`mixedReadWrite\` \u2192 \`read\`. Modern API: f\xE1zisonk\xE9nti callback objektum; az egyszer\u0171 \`afterRender(fn)\` a \`mixedReadWrite\` f\xE1zisban fut.

## 81. Router View Transition Animations (v17+) https://angular.dev/guide/routing/route-transition-animations {#router-nezetvaltas-animaciok-view-transitions-v17}
\`\`\`ts
bootstrapApplication(AppComponent, { providers: [provideRouter(routes, withViewTransitions())] });
\`\`\`
\`document.startViewTransition()\`-be csomagolja a navig\xE1ci\xF3kat, ha a b\xF6ng\xE9sz\u0151 t\xE1mogatja.

## 82. First Signal-Based Router API (v21+) https://angular.dev/guide/routing {#elso-signal-alapu-api-a-routerben-v21}
\`getCurrentNavigation()\` deprecated \u2192 \`currentNavigation\` signal, \`lastSuccessfulNavigation\` is signal.
\`\`\`ts
readonly isNavigating = computed(() => this._router.currentNavigation() !== null);
readonly url = computed(() => this._router.lastSuccessfulNavigation()?.finalUrl);
\`\`\`

## 83. Signal Forms \u2013 Declarative Forms with Signals (v21 experimental \xB7 v22 expanded) https://angular.dev/guide/forms/signals/overview {#signal-forms-deklarativ-urlapok-signalokkal-v21-kiserleti-v22-bovitett}
\`\`\`ts
@Component({ imports: [Field], template: \`
  <input placeholder="Email" [field]="loginForm.email" />
  <input type="password" placeholder="Password" [field]="loginForm.password" />
  <button [disabled]="loginForm().invalid()" (click)="login()">Login</button>
\` })
export class LoginComponent {
  private readonly _loginModel = signal<LoginFormModel>({ email: '', password: '' });
  readonly loginForm = form(this._loginModel, (login) => {
    required(login.email, { message: 'Email is required' });
    email(login.email, { message: 'Provide valid email address' });
    required(login.password, { message: 'Password is required' });
  });
}
\`\`\`
Egyedi vez\xE9rl\u0151kh\xF6z \`FormValueControl\` interf\xE9sz (\`ControlValueAccessor\` helyett):
\`\`\`ts
export class RatingControl implements FormValueControl<number> { readonly value = model(0); }
\`\`\`

## 84. Vitest as the Default Testing Framework (v20 experimental \xB7 v21 default) https://angular.dev/guide/testing/migrating-to-vitest {#vitest-mint-alapertelmezett-tesztelesi-keretrendszer-v20-kiserleti-v21-alapertelmezett}
Vitest b\xF6ng\xE9sz\u0151 m\xF3dja val\xF3di b\xF6ng\xE9sz\u0151ben futtatja a teszteket (mint Jasmine/Karma), TypeScript/ESM/Vite integr\xE1ci\xF3. Egy\xE9rtelm\u0171, hivatalos v\xE1lasz a Jasmine/Karma vs Jest vs Vitest k\xE9rd\xE9sre.

## 85. Angular Aria \u2013 Headless, Accessible UI Components (v21+) https://angular.dev/guide/aria/overview {#angular-aria-headless-akadalymentes-ui-komponensek-v21}
8 UI minta, 13 komponens (Accordion, Combobox, Grid, Listbox, Menu, Tabs, Toolbar, Tree) automatikus billenty\u0171zet-navig\xE1ci\xF3val, ARIA attrib\xFAtumokkal, f\xF3kuszkezel\xE9ssel.
\`\`\`html
<div ngTabs>
  <div ngTabList selectionMode="follow" selectedTab="movie">
    <div ngTab value="movie">Movie</div>
  </div>
</div>
\`\`\`
Kieg\xE9sz\xEDti a CDK-t (viselked\xE9si primit\xEDvek) \xE9s Material-t (st\xEDlusozott komponensek).

## 86. Angular MCP Server (v21+ experimental) https://angular.dev/ai/mcp {#angular-mcp-szerver-v21-kiserleti}
K\xEDs\xE9rleti MCP szerver az Angular CLI-ben, AI-asszisztensekhez. Eszk\xF6z\xF6k: \`ai_tutor\`, \`find_examples\`, \`get_best_practices\`, \`list_projects\`, \`onpush_zoneless_migration\`, \`search_documentation\`.

## 87. New Template Expressions \u2013 Spread, Arrow Function, instanceof (v21\u2013v22) https://angular.dev/guide/templates/expression-syntax {#uj-template-kifejezesek-spread-arrow-function-instanceof-v21-v22}
\`\`\`html
@let numbers = [1, 2, 3];
@let moreNumbers = [...numbers, 4, 5, 6];
<button (click)="counter.update((value) => value - 1)">-1</button>
@if (pet instanceof Dog) { <p>This dog name is {{ pet.name }}</p> }
\`\`\`

## 88. Multiple Switch Case Matching in Templates (v22+) https://angular.dev/guide/templates/control-flow {#tobbszoros-switch-case-illesztes-a-sablonokban-v22}
\`\`\`html
@switch (status()) {
  @case ('pending')
  @case ('processing') { <loading-widget /> }
  @case ('completed') { <success-widget /> }
}
\`\`\`

## 89. Standalone isActive Function (v22+) https://angular.dev/api/router/isActive {#standalone-isactive-fuggveny-v22}
\`\`\`ts
readonly isUsersActive = isActive('/users', this._router);
readonly isBestsellerProductsActive = isActive(
  this._router.createUrlTree(['/products'], { queryParams: { bestseller: true } }),
  this._router, { paths: 'exact', queryParams: 'subset' },
);
\`\`\`
Reakt\xEDv signal-t ad vissza, \`Router.isActive()\` deprecated helyette.

## 90. Incremental Hydration as Default (v19 experimental \xB7 v20 stable \xB7 v22 default) https://angular.dev/guide/incremental-hydration {#inkrementalis-hydration-alapertelmezettkent-v19-kiserleti-v20-stable-v22-alapertelmezett}
\`\`\`ts
provideClientHydration() // alapb\xF3l bekapcsolva
provideClientHydration(withNoIncrementalHydration()) // kikapcsol\xE1s
\`\`\`

## 91. Route Injector Cleanup (K\xEDs\xE9rleti) (v22+ experimental) https://angular.dev/guide/routing {#route-injector-cleanup-kiserleti-v22-kiserleti}
\`\`\`ts
withExperimentalAutoCleanupInjectors()
\`\`\`
\`\`\`ts
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDestroyInjector(route: Route): boolean { return !route.data?.[RETAIN_INJECTOR_DATA_KEY]; }
}
\`\`\`

## 92. CDK Dialog \xE9s Menu (v14+ (CDK)) https://material.angular.dev/cdk/dialog/overview {#cdk-dialog-es-menu-v14-cdk}
\`\`\`ts
const dialogRef = dialog.open(DialogComponent, { height: '300px', width: '500px' });
\`\`\`
\`\`\`html
<button [cdkMenuTriggerFor]="menu">Open menu</button>
<ng-template #menu>
  <div cdkMenu><button cdkMenuItem>Item 1</button></div>
</ng-template>
\`\`\`

## 93. Setting the Page Title (TitleStrategy) (v14+) https://angular.dev/api/router/TitleStrategy {#az-oldal-cimenek-beallitasa-titlestrategy-v14}
\`\`\`ts
export const routes: Routes = [
  { path: 'home', title: 'Home Page', loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) },
];
\`\`\`
Egyedi \`TitleStrategy\`:
\`\`\`ts
@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(title !== undefined ? \`My App - \${title}\` : \`My App - Home\`);
  }
}
\`\`\`

## 94. ENVIRONMENT_INITIALIZER Injection Token (v14+ \xB7 provideEnvironmentInitializer() v19+) https://angular.dev/api/core/ENVIRONMENT_INITIALIZER {#environment-initializer-injection-token-v14-provideenvironmentinitializer-v19}
\`\`\`ts
bootstrapApplication(AppComponent, {
  providers: [{ provide: ENVIRONMENT_INITIALIZER, multi: true, useValue: () => inject(ConfigurationService).init() }],
});
\`\`\`

## 95. Accessing Protected Members from Templates (v14+) https://angular.dev/guide/templates {#protected-tagok-elerese-a-sablonbol-v14}
\`\`\`ts
@Component({ selector: 'my-component', template: '{{ message }}' })
export class MyComponent { protected message: string = 'Hello world'; }
\`\`\`

## 96. Angular Extended Diagnostics (v13.2+ \xB7 b\u0151v\xEDtve v14, v19, v20) https://angular.dev/extended-diagnostics {#angular-extended-diagnostics-v13-2-bovitve-v14-v19-v20}
Be\xE9p\xEDtett compiler-szint\u0171 "linter" a gyan\xFAs sablon-mint\xE1khoz (pl. \`([foo])\` two-way binding t\xE9veszt\xE9s \`[(foo)]\` helyett). \`angularCompilerOptions\`-ban kapcsolhat\xF3 be.

## 97. Router Data Input Bindings (withComponentInputBinding) (v16+) https://angular.dev/api/router/withComponentInputBinding {#router-data-input-bindings-withcomponentinputbinding-v16}
\`\`\`ts
provideRouter([...], withComponentInputBinding())
\`\`\`
\`\`\`ts
export default class ExampleComponent {
  @Input() id!: string;
  @Input() bar!: boolean;
  @Input() baz!: string;
}
\`\`\`
Precedencia: Resolved data \u2192 Static data \u2192 Optional/matrix params \u2192 Path params \u2192 Query params.

## 98. Introducing Hybrid (Zoneless) Change Detection (v18 experimental \xB7 v20 stable) https://angular.dev/guide/zoneless {#hybrid-zoneless-change-detection-bevezetese-v18-kiserleti-v20-stable}
\`\`\`ts
// v18\u2013v19 (experimental n\xE9v)
bootstrapApplication(RootCmp, { providers: [provideExperimentalZonelessChangeDetection()] });

// v20-t\xF3l stable n\xE9v \u2013 ezt haszn\xE1ljuk
bootstrapApplication(RootCmp, { providers: [provideZonelessChangeDetection()] });
\`\`\`
CD \xFCtemez\u0151dik: signal friss\xFClt, \`markForCheck()\`, AsyncPipe \xFAj \xE9rt\xE9k, komponens csatol\xE1s/lev\xE1laszt\xE1s, input be\xE1ll\xEDt\xE1s.

## 99. RedirectCommand (v18+) https://angular.dev/api/router/RedirectCommand {#redirectcommand-v18}
\`\`\`ts
const route: Route = {
  path: 'page1', component: PageComponent,
  canActivate: [() => {
    const router: Router = inject(Router);
    const urlTree: UrlTree = router.parseUrl('./page2');
    return new RedirectCommand(urlTree, { skipLocationChange: true });
  }],
};
\`\`\`

## 100. AfterRenderEffect (v19 experimental) https://angular.dev/api/core/afterRenderEffect {#afterrendereffect-v19-kiserleti}
\`\`\`ts
counter = signal(0);
constructor() {
  afterRenderEffect(() => { console.log('after render effect', this.counter()); }); // csak ha counter v\xE1ltozott
  afterRender(() => { console.log('after render', this.counter()); }); // minden render ut\xE1n
}
\`\`\`

## 101. RouterOutlet Data Input (v19+) https://angular.dev/guide/routing/show-routes-with-outlets {#routeroutlet-data-input-v19}
\`\`\`html
<router-outlet [routerOutletData]="routerOutletData()" />
\`\`\`
\`\`\`ts
export class ChildComponent {
  readonly routerOutletData: Signal<MyType> = inject(ROUTER_OUTLET_DATA);
}
\`\`\`

## 102. Keepalive Fetch Requests (v20+) https://angular.dev/guide/http/making-requests {#keepalive-fetch-keresek-v20}
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly _http = inject(HttpClient);
  sendAnalyticsData(data: AnalyticsData): Observable<unknown> {
    return this._http.post('/api/analytics', data, { keepalive: true });
  }
}
\`\`\`
Fetch API \`keepalive\` opci\xF3 t\xE1mogat\xE1sa \`withFetch()\` mellett \u2013 k\xE9r\xE9s t\xFAl\xE9li az oldal elhagy\xE1s\xE1t.

## 103. Removing ng-reflect Attributes (v20 optional \xB7 v22 default) https://angular.dev/reference/releases {#ng-reflect-attributumok-megszuntetese-v20-opcionalis-v22-alapertelmezett}
Alapb\xF3l nincs \`ng-reflect-*\` attrib\xFAtum gener\xE1l\xE1s. Visszakapcsolhat\xF3: \`provideNgReflectAttributes()\`.

## 104. Direct ARIA Attribute Binding (v21+) https://angular.dev/guide/templates/attribute-binding {#aria-attributumok-kozvetlen-bindingja-v21}
\`\`\`html
<!-- r\xE9gi m\xF3d -->
<button [attr.aria-label]="label"></button>
<!-- \xFAj m\xF3d -->
<button [aria-label]="label"></button>
\`\`\`
\`[aria-label]\` \xE9s \`[ariaLabel]\` is \xE9rv\xE9nyes, \`attr.\` prefix n\xE9lk\xFCl.

## 105. Server-Side Bootstrap Fix (BootstrapContext) (v21+) https://angular.dev/guide/ssr {#szerveroldali-bootstrap-javitasa-bootstrapcontext-v21}
Minden SSR k\xE9r\xE9s saj\xE1t, elk\xFCl\xF6n\xEDtett platform-referenci\xE1t kap.
\`\`\`ts
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);
\`\`\`
\`getPlatform()\` szerveren mindig \`null\`; \`destroyPlatform()\` no-op szerverrenderel\xE9s k\xF6zben.

## 106. Image Loader Enhancements (v22+) https://angular.dev/guide/image-optimization {#image-loader-bovitesek-v22}
Egyedi transzform\xE1ci\xF3k (Cloudflare, Cloudinary, ImageKit, Imgix) a \`loaderParams\` inputtal.
\`\`\`ts
readonly loaderParams = computed(() => ({ transform: \`w=\${this.size()},h=\${this.size()},fit=crop,g=face\` }));
\`\`\`

## 107. Resource Snapshot (v21.2+) https://angular.dev/guide/signals/resource {#resource-snapshot-v22}
\`\`\`ts
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
\`\`\`
\`resourceFromSnapshots()\` \u2013 snapshot (signal/computation) visszaalak\xEDt\xE1sa resource-\xE1. (v21.2 experimental)

## 108. Resource Cache for SSR (TransferState) (v22+) https://angular.dev/guide/ssr {#resource-cache-ssr-hez-transferstate-v22}
\`\`\`ts
const productKey = makeStateKey('product');

readonly productResource = rxResource({
  params: () => this.productId(),
  stream: ({ params: productId }) => this._productService.getProduct(productId),
  id: productKey,
});
\`\`\`
Az \`id\` opci\xF3 k\xF6ti a TransferState-hez a szerver \xE9s kliens k\xF6z\xF6tti gyors\xEDt\xF3t\xE1raz\xE1shoz.

## 109. SignalFormControl \u2013 Bridge Between Reactive and Signal Forms (v22+) https://angular.dev/guide/forms/signals/overview {#signalformcontrol-hid-reactive-es-signal-forms-kozott-v22}
\`\`\`ts
readonly emailControl = new SignalFormControl<string>('', (path) => {
  required(path, { message: 'Email is required' });
  email(path, { message: 'Provide a valid email address' });
});

readonly userForm = this._fb.nonNullable.group({
  firstName: ['', Validators.required],
  email: this.emailControl,
});
\`\`\`
Fokozatos \xE1t\xE1ll\xE1st tesz lehet\u0151v\xE9 Signal Forms fel\xE9, megl\xE9v\u0151 FormGroup strukt\xFAra megtart\xE1s\xE1val.

## 110. @Service Decorator (v22+) https://angular.dev/api/core/Service {#service-dekorator-v22}
Egyszer\u0171bb alternat\xEDva a \`@Injectable({ providedIn: 'root' })\`-hoz: alapb\xF3l root-provided, \`inject()\`-k\xF6zpont\xFA.
\`\`\`ts
@Service()
export class PostService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _authService = inject(AuthService);
  getUserPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('/api/posts/' + this._authService.userId);
  }
}
\`\`\`

## 111. Lazy Service Injection (injectAsync) (v22+) https://angular.dev/api/core/injectAsync {#lazy-service-injection-injectasync-v22}
\`\`\`ts
private readonly _heavyTransformationService = injectAsync(() =>
  import('./heavy-transformation.service').then((m) => m.HeavyTransformationService),
);

async performHeavyTransformation(params: TransformationParams): Promise<void> {
  const transformationService = await this._heavyTransformationService();
  transformationService.transform(params);
}
\`\`\`
\`InjectAsyncOptions\` \u2013 prefetch opci\xF3 is el\xE9rhet\u0151.

## 112. Debouncing Signals (v22+) https://angular.dev/guide/signals/debounced {#signalek-debounce-olasa-v22}
\`\`\`ts
const query = signal('initial');
const debouncedQuery = debounced(() => query(), 300);
\`\`\`
A \`debounced()\` egy **Resource**-ot ad vissza (nem sima signal-t): van settled / loading / error \xE1llapota. A template-ben tipikusan \`debouncedQuery.value()\` \xE9s \`debouncedQuery.isLoading()\` haszn\xE1latos. Signal \xE1tad\xE1s is lehets\xE9ges: \`debounced(query, 300)\`.

## 113. Web MCP Tools (v22+ experimental) https://angular.dev/ai/webmcp {#web-mcp-eszkozok-v22-kiserleti}
\`\`\`ts
export const provideProductSearchWebMcp = () =>
  provideWebMcpTools([{
    name: 'search_products',
    description: 'Search for products by a keyword',
    inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
    execute: async ({ query }) => {
      const productsService = inject(ProductService);
      const products = await firstValueFrom(productsService.searchProducts({ term: query as string }));
      return { content: [{ type: 'text', text: \`Found \${products.length} products\` }] };
    },
  }]);
\`\`\`
Struktur\xE1lt eszk\xF6z\xF6ket ad AI b\xF6ng\xE9sz\u0151-\xFCgyn\xF6k\xF6knek, DOM-tal\xE1lgat\xE1s helyett.

## 114. AI Agent Skills for Angular (v22+) https://angular.dev/ai/agent-skills {#ai-agent-skills-az-angularhoz-v22}
Dedik\xE1lt AI agent skillek: **angular-developer** (k\xF3d\xEDr\xE1s/architekt\xFAra, verzi\xF3-tudatos), **Angular New App** (\xFAj alkalmaz\xE1s l\xE9trehoz\xE1sa \`ng new\`-vel).

## 115. Stability Debugging (provideStabilityDebugging) (v22+) https://angular.dev/api/core/provideStabilityDebugging {#stabilitas-debugolasa-providestabilitydebugging-v22}
\`\`\`ts
import { provideStabilityDebugging } from '@angular/core';
import 'zone.js/plugins/task-tracking';

export const appConfig: ApplicationConfig = { providers: [provideStabilityDebugging()] };
\`\`\`
Seg\xEDt meg\xE9rteni, mi\xE9rt nem stabiliz\xE1l\xF3dik egy alkalmaz\xE1s a v\xE1rt (default 9 m\xE1sodperces) hat\xE1rid\u0151n bel\xFCl. Fejleszt\u0151i m\xF3dban automatikusan bekapcsol \`provideClientHydration()\` mellett.

## 116. Preventing Property Drilling \u2013 \`:host-context()\` \xE9s CSS Kontextus (v2+ (CSS)) https://angular.dev/guide/components/styling {#property-drilling-megelozese-host-context-es-css-kontextus-v2-css}
A \`:host-context()\` megold\xE1s elker\xFCli, hogy egy boolean flaget \`@Input()\`-k\xE9nt v\xE9gig kelljen adogatni komponensr\u0151l komponensre, mert a **DOM hierarchi\xE1ban l\xE9v\u0151 \u0151sre** rakott CSS class-t b\xE1rmelyik lesz\xE1rmazott komponens \xE9rz\xE9kelheti an\xE9lk\xFCl, hogy tudna r\xF3la a k\xF6ztes komponensek l\xE1nca.

**1. A "kontextus jel\xF6l\u0151" oszt\xE1ly a sz\xFCl\u0151n(\xF6k)\xF6n** \u2013 b\xE1rhol az \u0151s DOM-f\xE1ban elhelyezhet\u0151, nem kell megegyeznie az Angular komponens-hierarchi\xE1val, csak a renderelt HTML-ben kell ott lennie:

\`\`\`html
<!-- message-participants-data-table.component.html -->
<div class="messages-text-context">
  <neptun-wrapper>...</neptun-wrapper>
</div>

<!-- user-list.component.html -->
<div class="messages-text-context">
  <div class="selection">...</div>
</div>
\`\`\`

**2. A lesz\xE1rmazott komponens saj\xE1t SCSS-\xE9ben reag\xE1l r\xE1:**

\`\`\`scss
.texts {
  // alap st\xEDlus

  :host-context(.messages-text-context) & {
    // kontextusf\xFCgg\u0151 m\xF3dos\xEDt\xE1s
  }
}

// vagy k\xF6zvetlen\xFCl
:host-context(.messages-text-context) .texts {
  // ez fut le, ha b\xE1rhol felette van .messages-text-context
}
\`\`\`

A komponens **nem tudja**, hogy \xE9ppen melyik sz\xFCl\u0151b\u0151l van megh\xEDvva \u2013 csak azt n\xE9zi, van-e felette a DOM-ban a marker class. Emiatt mindegy, h\xE1ny k\xF6ztes komponensen megy \xE1t.

**Mi\xE9rt ker\xFCli el a property drillinget:**
- Nincs sz\xFCks\xE9g \`@Input() isMessagesContext: boolean\` l\xE1ncra minden k\xF6ztes komponensen.
- A k\xF6ztes komponenseknek nem kell tudniuk err\u0151l a flagr\u0151l, forwardolniuk se kell \u2013 teljesen transzparensek maradnak.
- A logika csak CSS szinten (megjelen\xE9s) d\u0151l el, a komponens TS k\xF3dja v\xE1ltozatlan marad.

**Korl\xE1tai:**
- Csak st\xEDlusra j\xF3 \u2013 ha a viselked\xE9snek (felt\xE9teles renderel\xE9s, esem\xE9ny, API h\xEDv\xE1s) is kontextusf\xFCgg\u0151nek kell lennie, ehhez TS szint\u0171 megold\xE1s kell.
- Val\xF3di DOM sz\xFCl\u0151-gyerek kapcsolat sz\xFCks\xE9ges \u2013 ha a komponens \`ng-content\`-tel vagy port\xE1llal (pl. CDK Overlay, modal) van kirenderelve m\xE1shova a DOM-ban, a \`:host-context\` nem l\xE1tja az \u0151sre rakott classt.
- Emulated encapsulation mellett rendesen m\u0171k\xF6dik; Shadow DOM eset\xE9n (\`ViewEncapsulation.ShadowDom\`) b\xF6ng\xE9sz\u0151f\xFCgg\u0151 elt\xE9r\xE9sek lehetnek, \xE9rdemes tesztelni.
- Nehezebb debugolni, mint egy explicit \`@Input()\`-ot \u2013 grep-pel nehezebben k\xF6vethet\u0151, honnan j\xF6n a st\xEDlus.

## 117. Preventing Property Drilling \u2013 Hierarchikus DI Token (v2+ \xB7 inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#property-drilling-megelozese-hierarchikus-di-token-v2-inject-opciok-v14}
Ha nem csak st\xEDlust, hanem t\xE9nyleges viselked\xE9st/adatot kellene "kontextusb\xF3l" megkapni t\xF6bb szinten \xE1t, az Angular-nat\xEDv megold\xE1s erre a hierarchikus DI. Ez a \`:host-context()\` logikai megfelel\u0151je: nem kell a k\xF6ztes komponenseken \xE1tadni, csak a DI f\xE1ba kell "beleinjekt\xE1lni" fel\xFCl, \xE9s b\xE1rhol lejjebb el\xE9rhet\u0151.

\`\`\`ts
// token
export const MESSAGES_CONTEXT = new InjectionToken<boolean>('MESSAGES_CONTEXT');

// sz\xFCl\u0151 komponens providerei
providers: [{ provide: MESSAGES_CONTEXT, useValue: true }]

// b\xE1rmely lesz\xE1rmazott, ak\xE1rh\xE1ny szinttel lejjebb
constructor(@Optional() @Inject(MESSAGES_CONTEXT) private isMessagesContext: boolean | null) {}
\`\`\`

Modern, \`inject()\`-alap\xFA \xEDr\xE1sm\xF3ddal:

\`\`\`ts
readonly isMessagesContext = inject(MESSAGES_CONTEXT, { optional: true }) ?? false;
\`\`\`

**El\u0151nyei a sima \`@Input()\` l\xE1nchoz k\xE9pest:**
- A k\xF6ztes komponensek nem is "tudnak" a tokenr\u0151l, nincs \`@Input()\` \xE9s \`[input]="input"\` forwardol\xE1s minden szinten.
- T\xEDpusbiztos, tesztelhet\u0151 (\`TestBed.overrideProvider\`), \xE9s Angular DevTools-ban is l\xE1that\xF3, honnan j\xF6n az \xE9rt\xE9k.
- \`@Optional()\` / \`{ optional: true }\` n\xE9lk\xFCl a token hi\xE1nya hib\xE1t dob \u2013 ez seg\xEDt elkapni, ha valaki elfelejti provide-olni a kontextust.

**Korl\xE1tai:**
- Ha a komponens \`ViewContainerRef\`-fel, port\xE1llal (pl. \`Overlay\`, \`Dialog\`) van kirenderelve, saj\xE1t injector f\xE1t kaphat, amely nem felt\xE9tlen\xFCl \xF6r\xF6kli a logikai sz\xFCl\u0151 providereit \u2013 explicit injector-\xE1tad\xE1s sz\xFCks\xE9ges (\`createComponent(..., { injector })\`).
- T\xFAlzott haszn\xE1lata "rejtett glob\xE1lis \xE1llapotot" eredm\xE9nyezhet, ami megnehez\xEDti a komponens \xF6n\xE1ll\xF3 \xFAjrafelhaszn\xE1lhat\xF3s\xE1g\xE1t \u2013 \xE9rdemes csak val\xF3di kontextusf\xFCgg\u0151 esetekn\xE9l alkalmazni, nem \xE1ltal\xE1nos adat\xE1tad\xE1sra.

## 118. CSS Custom Properties as Context Passing (CSS) https://developer.mozilla.org/en-US/docs/Web/CSS/--* {#css-custom-properties-css-valtozok-mint-kontextus-atadas-css}
A CSS custom property-k (\`--valtozo-nev\`) \xF6r\xF6kl\u0151dnek a DOM-f\xE1ban, ez\xE9rt hasonl\xF3an haszn\xE1lhat\xF3k kontextus\xE1tad\xE1sra, mint a \`:host-context()\`, de nem csak boolean logik\xE1ra, hanem konkr\xE9t \xE9rt\xE9kek (sz\xEDn, m\xE9ret, spacing) \xE1tad\xE1s\xE1ra is \u2013 an\xE9lk\xFCl, hogy \`@Input()\`-k\xE9nt v\xE9gig kellene vinni \u0151ket.

\`\`\`scss
// sz\xFCl\u0151 komponens
:host {
  --accent-color: #ff6600;
  --item-spacing: 12px;
}
\`\`\`

\`\`\`scss
// m\xE9lyen be\xE1gyazott lesz\xE1rmazott komponens, ak\xE1r 5 szinttel lejjebb
.item {
  color: var(--accent-color, #333);       // fallback, ha nincs defini\xE1lva
  margin-bottom: var(--item-spacing, 8px);
}
\`\`\`

**Mi\xE9rt ker\xFCli el a property drillinget:**
- A b\xF6ng\xE9sz\u0151 nat\xEDvan kezeli az \xF6r\xF6kl\u0151d\xE9st, nincs sz\xFCks\xE9g Angular \`@Input()\` l\xE1ncra vagy \`[style.--x]\` bindingra minden k\xF6ztes komponensen.
- Fut\xE1sid\u0151ben is m\xF3dos\xEDthat\xF3 (\`element.style.setProperty('--accent-color', 'red')\`), ami dinamikus t\xE9m\xE1z\xE1st (theming) tesz lehet\u0151v\xE9 JS/TS beavatkoz\xE1s n\xE9lk\xFCl is.
- Kombin\xE1lhat\xF3 Angular signalokkal: \`[style.--accent-color]="accentColor()"\` a gy\xF6k\xE9r komponensen, \xE9s onnant\xF3l tiszt\xE1n CSS-ben terjed tov\xE1bb.

**Korl\xE1tai:**
- Csak CSS-ben felhaszn\xE1lhat\xF3 \xE9rt\xE9kekre j\xF3 (sz\xEDn, m\xE9ret, id\u0151 stb.), objektum vagy komplex adat nem adhat\xF3 \xE1t.
- \`ng-content\`/port\xE1l eset\xE9n ugyan\xFAgy a t\xE9nyleges DOM-poz\xEDci\xF3 sz\xE1m\xEDt, nem a logikai Angular komponensfa \u2013 ha a projekt\xE1lt tartalom DOM-ban k\xEDv\xFCl esik az \xF6r\xF6kl\u0151d\xE9si l\xE1ncon, nem kapja meg az \xE9rt\xE9ket.
- IE11 nem t\xE1mogatja (ma m\xE1r ritk\xE1n relev\xE1ns szempont).

## 119. Preventing Property Drilling \u2013 ContentChild / TemplateRef Injection (v2+ \xB7 contentChild() signal query v17.2+) https://angular.dev/guide/components/queries {#property-drilling-megelozese-contentchild-templateref-injekcio-v2-contentchild-signal-query-v17-2}
Ha nem statikus kontextus\xE9rt\xE9ket, hanem t\xE9nyleges tartalmat vagy viselked\xE9st (pl. egyedi renderel\xE9st) kell \xE1tadni, a sz\xFCl\u0151 komponens \`contentChild\`/\`ContentChild\` lek\xE9rdez\xE9se + \`ngTemplateOutlet\` elker\xFClheti, hogy minden k\xF6ztes gyereken v\xE9gig kelljen vezetni egy \`@Input() customTemplate\` mez\u0151t \u2013 **felt\xE9ve**, hogy a template a lek\xE9rdez\u0151 hostba van projekt\xE1lva.

\`\`\`ts
@Component({
  selector: 'app-list',
  template: \`
    @for (item of items(); track item.id) {
      <ng-container
        *ngTemplateOutlet="itemTemplate() ?? defaultTemplate; context: { $implicit: item }"
      />
    }
    <ng-template #defaultTemplate let-item>{{ item.label }}</ng-template>
  \`,
})
export class ListComponent {
  items = input.required<Item[]>();
  itemTemplate = contentChild<TemplateRef<unknown>>('itemTemplate');
}
\`\`\`

\`\`\`html
<app-list [items]="items">
  <ng-template #itemTemplate let-item>
    <strong>{{ item.label }}</strong>
  </ng-template>
</app-list>
\`\`\`

**Mi\xE9rt ker\xFCli el a property drillinget:**
- A sablont a lista-host kapja projekt\xE1lva, \xE9s ott rendereli \u2013 a k\xF6ztes wrapper komponenseknek nem kell \`TemplateRef\` inputot tov\xE1bbadniuk, ha \u0151k maguk nem a query hostjai.
- Tiszt\xE1n szepar\xE1lja a megjelen\xEDt\xE9si logik\xE1t az adatlogik\xE1t\xF3l \u2013 hasonl\xF3 mint\xE1zat \xE1ll a CDK portalok \xE9s sok UI k\xF6nyvt\xE1r \`cellTemplate\` megold\xE1sa m\xF6g\xF6tt.

**Korl\xE1tai:**
- A \`contentChild\` **csak a saj\xE1t hostba projekt\xE1lt** tartalmat l\xE1tja. Egy m\xE9ly gyerek komponens **nem** \u201El\xE1t felfel\xE9\u201D egy \u0151sbe projekt\xE1lt template-et \`descendants: true\` mellett sem.
- Ha k\xF6ztes wrappernek kell tov\xE1bbadnia a sablont, az explicit \`input()\`/\`@Input()\`, DI token, vagy portal \u2013 nem upward ContentChild.
- T\xFAlzott haszn\xE1lata nehezen k\xF6vethet\u0151, \u201Eimplicit\u201D komponens-API-t eredm\xE9nyezhet \u2013 dokument\xE1lni \xE9rdemes, mely \`#template\` neveket v\xE1rja a komponens.

## 120. Micro-Frontend Architecture \u2013 Basics and Decision Criteria (architekt\xFAra \xB7 v14+) {#micro-frontend-architektura-alapok-es-dontesi-szempontok-architektura-v14}
A micro-frontend architekt\xFAra c\xE9lja, hogy t\xF6bb, egym\xE1st\xF3l f\xFCggetlen\xFCl fejleszt\u0151 \xE9s **k\xFCl\xF6n deployolhat\xF3** csapat dolgozhasson egyetlen felhaszn\xE1l\xF3i fel\xFCleten. A frontendet nem technol\xF3giai r\xE9tegek, hanem **\xFCzleti ter\xFCletek (domainek)** szerint v\xE1gjuk fel.

### Motiv\xE1ci\xF3
- Csapatf\xFCggetlens\xE9g: k\xFCl\xF6n rep\xF3/pipeline/release \xFCtem, saj\xE1t temp\xF3ban.
- Domain-tulajdonl\xE1s: egy csapat v\xE9gig felel egy \xFCzleti ter\xFClet\xE9rt (Self-Contained System).
- Fokozatos moderniz\xE1ci\xF3: legacy alkalmaz\xE1s r\xE9szenk\xE9nt cser\xE9lhet\u0151 ki.
- Cs\xF6kkentett koordin\xE1ci\xF3s k\xF6lts\xE9g nagy szervezetben (Conway t\xF6rv\xE9nye).

### Kih\xEDv\xE1sok, amiket el\u0151re kell l\xE1tni
- **Bundle-duplik\xE1ci\xF3**: minden remote saj\xE1t Angular p\xE9ld\xE1nyt hozhat, ha nincs shared dependency strat\xE9gia.
- **Verzi\xF3sz\xF3r\xE1s**: k\xFCl\xF6nb\xF6z\u0151 Angular verzi\xF3k egy oldalon (multi-version) csak web component absztrakci\xF3val kezelhet\u0151 biztons\xE1gosan.
- **Konzisztens UX**: k\xF6z\xF6s design system n\xE9lk\xFCl sz\xE9tesik a fel\xFClet.
- **Cross-cutting concernek**: auth, i18n, error handling, telemetria \u2013 ezeket a shell-nek kell biztos\xEDtania.
- **Integr\xE1ci\xF3s tesztel\xE9s**: a hib\xE1k a hat\xE1rokon jelennek meg, nem a modulokon bel\xFCl.

### Mikor NE haszn\xE1ljuk
Ha egyetlen csapat dolgozik az alkalmaz\xE1son, a micro-frontend csak k\xF6lts\xE9g. Ilyenkor **modulith** (l\xE1sd a Vertical Slicing szekci\xF3t) a helyes v\xE1lasz: ugyanaz a modulariz\xE1ci\xF3, deploy-komplexit\xE1s n\xE9lk\xFCl.

### Integr\xE1ci\xF3s szintek
| Szint | Eszk\xF6z | Mikor |
| --- | --- | --- |
| Build-time | npm package / monorepo lib | szoros verzi\xF3k\xF6t\xE9s elfogadhat\xF3 |
| Run-time (script) | Native Federation / Module Federation | egy framework, egy verzi\xF3 |
| Run-time (elem) | Web Components / Custom Elements | multi-framework, multi-version |
| Route-time | reverse proxy, k\xFCl\xF6n SPA-k | teljes izol\xE1ci\xF3, teljes reload |

## 121. Native Federation \u2013 Shell and Remote Setup (@angular-architects/native-federation \xB7 v16+ (esbuild)) https://github.com/angular-architects/module-federation-plugin {#native-federation-shell-es-remote-beallitasa-angular-architects-native-federation-v16-esbuild}
A **Native Federation** (\`@angular-architects/native-federation\`) a Module Federation \xF6tlet\xE9t \xE9p\xEDti \xFAjra b\xF6ng\xE9sz\u0151-standardokra (Import Maps, ESM), ez\xE9rt bundler-f\xFCggetlen \xE9s j\xF3l m\u0171k\xF6dik az Angular esbuild/Vite pipeline-j\xE1val.

### Remote (micro-frontend) fel\xE1ll\xEDt\xE1sa
\`\`\`bash
ng add @angular-architects/native-federation --project miles --port 4201 --type remote
\`\`\`

A schematic l\xE9trehozza a \`federation.config.js\`-t:
\`\`\`js
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
\`\`\`
- \`name\` \u2013 a remote egyedi azonos\xEDt\xF3ja.
- \`exposes\` \u2013 mit publik\xE1l a remote (komponens, route config, NgModule, b\xE1rmilyen TS/ESM konstrukci\xF3).
- \`shared\` + \`shareAll\` \u2013 k\xF6z\xF6sen haszn\xE1lt npm csomagok (Angular, RxJS) csak egyszer t\xF6lt\u0151dnek be.
- \`skip\` \u2013 amit nem \xE9rdemes megosztani (build- \xE9s indul\xE1si id\u0151t sp\xF3rol).
- \`ignoreUnusedDeps\` \u2013 a \`package.json\`-ban l\xE9v\u0151, de nem haszn\xE1lt libeket kihagyja.

### Shell (host) fel\xE1ll\xEDt\xE1sa
\`\`\`bash
ng add @angular-architects/native-federation --project flights --port 4200 --type dynamic-host
\`\`\`

A \`dynamic-host\` t\xEDpus azt jelenti, hogy a remote-ok list\xE1ja fut\xE1sid\u0151ben, manifestb\u0151l j\xF6n:
\`\`\`json
// public/federation.manifest.json
{ "miles": "http://localhost:4201/remoteEntry.json" }
\`\`\`
A manifest **assetek\xE9nt** deployonk\xE9nt cser\xE9lhet\u0151, \xEDgy ugyanaz a build t\xF6bb k\xF6rnyezetben haszn\xE1lhat\xF3.

\`\`\`ts
// src/main.ts
import { initFederation } from '@angular-architects/native-federation';

initFederation('federation.manifest.json')
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
\`\`\`
Az \`initFederation\` beolvassa a remote-ok metaadatait \xE9s fel\xE9p\xEDti az Import Mapet, majd a \`bootstrap.ts\` ind\xEDtja az Angular alkalmaz\xE1st.

### Remote bet\xF6lt\xE9se route-k\xE9nt
\`\`\`ts
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  // egyetlen komponens
  { path: 'miles', loadComponent: () => loadRemoteModule('miles', './Component') },
  // teljes feature route-configgal (aj\xE1nlott granularit\xE1s)
  { path: 'miles', loadChildren: () => loadRemoteModule('miles', './Routes') },
];
\`\`\`
A \`loadRemoteModule\` a teljes ES modult adja vissza, ez\xE9rt a bet\xF6lt\xF6tt \xE9rt\xE9k legyen \`default export\`, vagy haszn\xE1ljunk \`then\`-klauzul\xE1t:
\`\`\`ts
{ path: 'miles', loadChildren: () => loadRemoteModule('miles', './Routes').then(m => m.routes) }
\`\`\`

### Granularit\xE1s
Egyetlen komponenst expon\xE1lni t\xFAl finom szemcs\xE9s. \xC9les projektben **feature-szint\u0171 route configot** publik\xE1lunk, a shell pedig path-prefixszel navig\xE1l r\xE1 (\`miles/home\`, \`miles/next-level\`).

## 122. Communication Between Micro-Frontends (v16+) {#micro-frontendek-kozotti-kommunikacio-v16}
**Alapelv:** a micro-frontendek sz\xE9tcsatol\xE1sa a c\xE9l, ez\xE9rt min\xE9l kevesebb k\xF6zvetlen kommunik\xE1ci\xF3, ann\xE1l jobb. A gyakorlatban jellemz\u0151en csak n\xE9h\xE1ny kontextusadat megoszt\xE1sa indokolt: bejelentkezett felhaszn\xE1l\xF3, aktu\xE1lis \xFCgyf\xE9l/tenant, n\xE9h\xE1ny glob\xE1lis sz\u0171r\u0151.

### Megosztott \xE1llapot shared library-ben
\`\`\`ts
// libs/shared/context/src/lib/app-context.ts  (shared, singleton)
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppContext {
  private readonly _userName = signal<string | null>(null);
  readonly userName = this._userName.asReadonly();
  setUserName(name: string): void { this._userName.set(name); }
}
\`\`\`
A libet a \`shared\` szekci\xF3ban \`singleton: true\`-val kell megosztani, k\xFCl\xF6nben minden remote saj\xE1t p\xE9ld\xE1nyt kap.

### Alternat\xEDv\xE1k
- **Custom event / message bus**: \`window.dispatchEvent(new CustomEvent('cart:changed', { detail }))\`. Framework-f\xFCggetlen, de t\xEDpusbiztons\xE1g n\xE9lk\xFCli \u2013 tegy\xFCnk r\xE1 tipiz\xE1lt wrappert.
- **URL mint \xE1llapot**: a legrobusztusabb csatorna. A shell route param\xE9terekben/query stringben adja \xE1t a kontextust, a remote onnan olvassa.
- **Backend mint igazs\xE1g**: a legkev\xE9sb\xE9 csatolt megold\xE1s \u2013 mindk\xE9t frontend a szervert\u0151l k\xE9ri le az \xE1llapotot.

### Antipatternek
- Megosztott, mindenki \xE1ltal \xEDrhat\xF3 \u201Eglobal store\u201D: rejtett csatol\xE1s, kider\xEDthetetlen hib\xE1k.
- Remote-ok k\xF6z\xF6tti direkt import (\`loadRemoteModule\` remote-b\xF3l remote-ba): a f\xFCggetlens\xE9g elveszt\xE9se.
- \xDCzleti logika a shared libben: a shared lib maradjon v\xE9kony (t\xEDpusok, kontextus, design system).

## 123. Web Components as Micro-Frontend Abstraction (v15+ (createApplication/createCustomElement)) https://angular.dev/guide/elements {#web-components-mint-micro-frontend-absztrakcio-v15-createapplication-createcustomelement}
Ha t\xF6bb framework vagy t\xF6bb Angular **verzi\xF3** kell egy oldalon (tipikusan legacy migr\xE1ci\xF3 k\xF6zben), a micro-frontendeket web componentk\xE9nt (Custom Element) csomagoljuk be.

\`\`\`ts
// remote: bootstrap ut\xE1n regisztr\xE1l\xE1s
import { createCustomElement } from '@angular/elements';

const app = await createApplication({ providers: [/* ... */] });
const element = createCustomElement(MilesOverview, { injector: app.injector });
customElements.define('miles-overview', element);
\`\`\`

A shellben ez m\xE1r csak egy HTML elem:
\`\`\`html
<miles-overview [passenger-id]="passengerId()"></miles-overview>
\`\`\`

### Amire figyelni kell
- **Zone.js megoszt\xE1sa**: ha az egyik alkalmaz\xE1s m\xE9g zone-alap\xFA, a \`zone.js\` csak egyszer t\xF6lt\u0151dhet be \u2013 a shell t\xF6ltse be, a remote-ok ne.
- **Saj\xE1t router web componentben**: k\xE9t Angular router ugyanazon a \`location\`-on \xFCtk\xF6zik. Megold\xE1s: a remote \`withHashLocation()\`-t vagy saj\xE1t \`UrlHandlingStrategy\`-t haszn\xE1l, illetve csak a shell routol \xE9s a remote \u201Eroute n\xE9lk\xFCli\u201D n\xE9zeteket ad.
- **St\xEDlussziv\xE1rg\xE1s**: \`ViewEncapsulation.ShadowDom\` er\u0151s izol\xE1ci\xF3t ad, de a glob\xE1lis design tokeneket CSS custom property-kkel kell \xE1tvinni.
- **Bundle m\xE9ret**: minden verzi\xF3 saj\xE1t Angular runtime-ot hoz. Ez a multi-version \xE1r \u2013 tudatosan v\xE1llalt kompromisszum.

### A micro-frontendek k\xF6lts\xE9ge
T\xF6bb pipeline, t\xF6bb monitoring, t\xF6bb integr\xE1ci\xF3s teszt, nehezebb refaktor a hat\xE1rokon \xE1t. Ha nincs meg a **t\xF6bb f\xFCggetlen csapat**, ez a k\xF6lts\xE9g nem t\xE9r\xFCl meg.

## 124. Vertical Slicing and Modulith \u2013 Sustainable Architecture (architekt\xFAra \xB7 v15+ standalone) {#vertical-slicing-es-modulith-fenntarthato-architektura-architektura-v15-standalone}
### Mi\xE9rt vertik\xE1lis v\xE1g\xE1s
A klasszikus horizont\xE1lis r\xE9tegez\xE9s (\`components/\`, \`services/\`, \`models/\`) mellett minden funkci\xF3v\xE1ltoz\xE1s az \xF6sszes mapp\xE1t \xE9rinti. A **vertik\xE1lis szelet** (domain/feature) egy \xFCzleti k\xE9pess\xE9get z\xE1r egybe, ez\xE9rt a v\xE1ltoz\xE1s lok\xE1lis marad.

\`\`\`
src/app/
  domains/
    booking/
      feature-search/      # route entry, container komponensek
      feature-edit/
      ui/                  # domainhez tartoz\xF3 prezent\xE1ci\xF3s komponensek
      data/                # HTTP kliens, store, DTO\u2192domain mapping
      util/                # tiszta f\xFCggv\xE9nyek
    boarding/
    luggage/
    shared/                # design system, kontextus, keretrendszer-wrapper
  shell/                   # layout, routing, cross-cutting providerek
\`\`\`

### Hat\xE1rok megtal\xE1l\xE1sa
- **Event Storming**: a szak\xE9rt\u0151kkel fel\xEDrjuk az \xFCzleti esem\xE9nyeket id\u0151rendben, a csoportosul\xE1sok mutatj\xE1k a domain hat\xE1rokat.
- **Different models**: ugyanaz a fogalom t\xF6bb domainben m\xE1s adat. A \u201EPassenger\u201D a boarding \xE9s a billing domainben nem ugyanaz a t\xEDpus \u2013 ne k\xE9nyszer\xEDts\xFCnk k\xF6z\xF6s modellt.
- A frontend v\xE1g\xE1sa nem kell, hogy megegyezzen a backend microservice-v\xE1g\xE1ssal: a frontend a **felhaszn\xE1l\xF3i munkafolyamatot** k\xF6veti.

### Architekt\xFAra-m\xE1trix
Sorok = domainek, oszlopok = r\xE9tegek (\`feature\` \u2192 \`ui\` \u2192 \`data\` \u2192 \`util\`). A szab\xE1ly:
1. Modul csak **saj\xE1t domainj\xE9vel** \xE9s \`shared\`-del kommunik\xE1lhat.
2. Modul csak **alatta l\xE9v\u0151 r\xE9teget** haszn\xE1lhat.
3. Modul csak m\xE1s modul **publikus API-j\xE1t** (\`index.ts\`) \xE9rheti el.

### Modulith
A modulith ugyanezt a modulariz\xE1ci\xF3t adja, de **egyetlen deployolhat\xF3 alkalmaz\xE1sban**. Ez a default v\xE1laszt\xE1s; micro-frontendre csak akkor v\xE1ltunk, ha a f\xFCggetlen deploy val\xF3di szervezeti ig\xE9ny.

**Information hiding**: minden modulmappa \`index.ts\`-t kap (barrel = publikus API), vagy barrel-less m\xF3dban az \`internal/\` alk\xF6nyvt\xE1r tartalma priv\xE1t.

## 125. Architecture Enforcement: Sheriff, Detective, Nx Boundaries (Sheriff/Nx \xB7 version-agnostic) https://nx.dev/features/enforce-module-boundaries {#architektura-kikenyszerites-sheriff-detective-nx-boundaries-sheriff-nx-verziofuggetlen}
A konvenci\xF3, amit nem ellen\u0151riz g\xE9p, n\xE9h\xE1ny sprint alatt elhal. Ez\xE9rt a modulhat\xE1rokat **lintelni** kell.

### Sheriff
\`\`\`bash
npm i @softarc/sheriff-core @softarc/eslint-plugin-sheriff -D
\`\`\`
\`\`\`js
// eslint.config.js
const sheriff = require('@softarc/eslint-plugin-sheriff');
module.exports = defineConfig([
  { files: ['**/*.ts'], extends: [sheriff.configs.all] },
]);
\`\`\`
\`\`\`ts
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
\`\`\`
A tagek mappanevekre utalnak, a \`<domain>\`/\`<name>\` placeholderek. A \`depRules\` a fenti k\xE9t szab\xE1lyt (domain-izol\xE1ci\xF3 + r\xE9tegir\xE1ny) k\xE9nyszer\xEDti ki. Ellen\u0151rz\xE9s: \`npx sheriff list src/main.ts\`.

### Detective
\`npx detective\` \u2013 interakt\xEDv gr\xE1fban vizualiz\xE1lja a modulokat \xE9s f\xFCgg\u0151s\xE9geiket, megmutatja a szab\xE1lys\xE9rt\xE9seket \xE9s a ciklusokat.

### Nx module boundaries
Nx workspace-ben ugyanezt az \`@nx/enforce-module-boundaries\` ESLint szab\xE1ly \xE9s a projektek \`tags\` mez\u0151je adja:
\`\`\`json
{
  "@nx/enforce-module-boundaries": ["error", {
    "depConstraints": [
      { "sourceTag": "type:feature", "onlyDependOnLibsWithTags": ["type:ui", "type:data", "type:util"] },
      { "sourceTag": "domain:booking", "onlyDependOnLibsWithTags": ["domain:booking", "domain:shared"] }
    ]
  }]
}
\`\`\`
Sheriff \xE9s Nx egym\xE1s mellett is haszn\xE1lhat\xF3: Nx a projektek, Sheriff a projekten bel\xFCli mapp\xE1k szintj\xE9n.

## 126. Nx Monorepo and Reusable Libraries (Nx 19+ \xB7 Angular CLI v14+) https://nx.dev/getting-started/intro {#nx-monorepo-es-ujrafelhasznalhato-konyvtarak-nx-19-angular-cli-v14}
### Angular CLI-alap\xFA monorep\xF3
\`\`\`bash
ng new my-workspace --no-create-application
ng generate application shell
ng generate library ui-controls
ng build ui-controls && cd dist/ui-controls && npm publish
\`\`\`
A library \`ng-packagr\`-rel \xE9p\xFCl, a \`public-api.ts\` a publikus fel\xFClet. A \`peerDependencies\`-ben adjuk meg az Angular verzi\xF3tartom\xE1nyt.

### Nx workspace
\`\`\`bash
npx create-nx-workspace@latest my-workspace --preset=angular-monorepo
nx g @nx/angular:library booking-data --directory=libs/booking/data --tags=domain:booking,type:data
\`\`\`

### Amit az Nx hoz
- **Affected**: \`nx affected -t build test lint\` \u2013 csak a v\xE1ltoz\xE1s \xE1ltal \xE9rintett projekteket futtatja.
- **Inkrement\xE1lis build + local/remote cache**: azonos input \u2192 nincs \xFAjrafuttat\xE1s.
- **Nx Cloud**: megosztott (distributed) cache \xE9s a taskok elosztott p\xE1rhuzamos\xEDt\xE1sa CI-ben.
- **Gener\xE1torok \xE9s migr\xE1ci\xF3k**: \`nx migrate latest\` \u2192 \`nx migrate --run-migrations\`.
- **Graph**: \`nx graph\` \u2013 f\xFCgg\u0151s\xE9gi gr\xE1f, ciklusok felder\xEDt\xE9se.

### K\xF6nyvt\xE1r-t\xEDpusok (tag konvenci\xF3)
\`type:feature\` (route entry, container), \`type:ui\` (prezent\xE1ci\xF3s, dumb), \`type:data\` (API, store), \`type:util\` (tiszta f\xFCggv\xE9nyek), \`type:testing\`. Ehhez j\xF6n a \`domain:*\` tag. A tagek n\xE9lk\xFCl a boundary-lintel\xE9s nem m\u0171k\xF6dik.

## 127. Architecture Analysis with Forensic Techniques (version-agnostic) {#architektura-elemzese-forenzikus-technikakkal-verziofuggetlen}
A k\xF3d nem csak a jelenlegi \xE1llapot\xE1t mutatja meg, hanem a **v\xE1ltoz\xE1st\xF6rt\xE9net\xE9t** is. A git t\xF6rt\xE9net elemz\xE9se objekt\xEDv jelz\xE9seket ad az architekt\xFAra val\xF3s \xE1llapot\xE1r\xF3l.

### Change coupling (egy\xFCtt-v\xE1ltoz\xE1s)
Ha k\xE9t modul a commitok nagy r\xE9sz\xE9ben **egy\xFCtt** m\xF3dosul, akkor logikailag csatoltak \u2013 f\xFCggetlen\xFCl att\xF3l, hogy van-e k\xF6zt\xFCk import. Ez a rejtett csatol\xE1s a legdr\xE1g\xE1bb fajta: a lintel\xE9s nem fogja meg.

### Hotspotok
Hotspot = magas v\xE1ltoz\xE1si gyakoris\xE1g + magas komplexit\xE1s. Ezek a f\xE1jlok adj\xE1k a hib\xE1k \xE9s a lassul\xE1s nagy r\xE9sz\xE9t, \xE9s itt t\xE9r\xFCl meg legjobban a refaktor. A csak-komplex, de sosem v\xE1ltoz\xF3 k\xF3d ellenben hagyhat\xF3 b\xE9k\xE9n.

### Team alignment \xE9s Conway t\xF6rv\xE9nye
Ha egy modult sok k\xFCl\xF6nb\xF6z\u0151 csapat m\xF3dos\xEDt, a modulhat\xE1r nem esik egybe a szervezeti hat\xE1rral. Vagy a hat\xE1rt kell \xE1thelyezni, vagy a tulajdonl\xE1st tiszt\xE1zni.

### Eszk\xF6z\xF6k
- **Detective** (\`npx detective\`) \u2013 f\xFCgg\u0151s\xE9gi gr\xE1f, layering ellen\u0151rz\xE9s, change coupling.
- **CodeScene** \u2013 \xE9rettebb forenzikus elemz\xE9s: hotspot t\xE9rk\xE9p, knowledge loss, temporal coupling.
- \`git log --format=%H --name-only\` alapj\xE1n saj\xE1t elemz\xE9s is \xEDrhat\xF3.

### Kritikus szeml\xE9let
A metrik\xE1k jelz\xE9sek, nem verdiktek. Egy hotspot lehet sz\xE1nd\xE9kosan s\u0171r\u0171 \xFCzleti mag is. Az adat ind\xEDtson besz\xE9lget\xE9st, ne helyettes\xEDtse.

## 128. NgRx Signal Store \u2013 Mutations, rxMethod, signalMethod (@ngrx/signals 18+ \xB7 ngrx-toolkit) https://ngrx.io/guide/signals/signal-store {#ngrx-signal-store-mutations-rxmethod-signalmethod-ngrx-signals-18-ngrx-toolkit}
### withMutations \u2013 \xEDr\xE1si m\u0171veletek boilerplate n\xE9lk\xFCl
\`\`\`ts
import { httpMutation, concatOp } from '@angular-architects/ngrx-toolkit';

export const FlightDetailStore = signalStore(
  withState({ /* ... */ }),
  withProps(() => ({ _snackBar: inject(MatSnackBar) })),
  withMutations((store) => ({
    saveFlight: httpMutation<Flight, Flight>({
      request: (flight) => ({ url: \`/api/flight/\${flight.id}\`, method: 'PUT', body: flight }),
      operator: concatOp,
      onSuccess: (result, param) => store._snackBar.open('Ment\xE9s sikeres', 'OK', { duration: 3000 }),
      onError: (error, param) => store._snackBar.open('Ment\xE9s sikertelen', 'OK', { duration: 5000 }),
    }),
  })),
);
\`\`\`
A store automatikusan megkapja a \`saveFlight(flight)\` met\xF3dust **\xE9s** a \`saveFlightIsPending\`, \`saveFlightError\` st\xE1tusz signalokat.

**Oper\xE1tor-szemantika \xE1tfed\u0151 h\xEDv\xE1sokra** (az RxJS flattening oper\xE1torok mint\xE1j\xE1ra):
| Oper\xE1tor | Viselked\xE9s | Tipikus use case |
| --- | --- | --- |
| \`switchOp\` | el\u0151z\u0151t megszak\xEDtja | csak a legfrissebb k\xE9r\xE9s \xE9rdekes (keres\xE9s) |
| \`mergeOp\` | p\xE1rhuzamosan fut mind | minden k\xE9r\xE9st fel kell dolgozni |
| \`concatOp\` | sorba \xE1ll\xEDtja (**default**) | sorrend-\u0151rz\xE9s, race condition elker\xFCl\xE9se |
| \`exhaustOp\` | fut\xE1s k\xF6zben \xFAjat elnyom | dupla submit megel\u0151z\xE9se |

Fogyaszt\xE1s komponensben:
\`\`\`ts
protected readonly isPending = this.store.saveFlightIsPending;
protected readonly error = this.store.saveFlightError;

protected async save(): Promise<void> {
  const result = await this.store.saveFlight(this.flight());
  if (result.status === 'success') { /* ... */ }
  else if (result.status === 'error') { /* ... */ }
  else { /* cancelled */ }
}
\`\`\`
A HTTP r\xE9szletek ne a store-ban \xE9ljenek: \xE9rdemes a \`data\` r\xE9teg kliens\xE9be kiszervezni egy \`createSaveMutation(options)\` factory-t, \xE9s a store csak az \`onSuccess\`/\`onError\` callbackeket adja meg.

### rxMethod \u2013 RxJS pipeline signal-vil\xE1gban
\`\`\`ts
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
\`\`\`
- A h\xEDv\xF3 \xE1tadhat **plain \xE9rt\xE9ket, \`Signal\`-t vagy \`Observable\`-t**; signal/observable eset\xE9n minden \xFAj \xE9rt\xE9k \xE1tfolyik a pipe-on.
- Bel\xFCl \`effect\`-et haszn\xE1l, ez\xE9rt csak **injection contextben** h\xEDvhat\xF3.
- A glitch-free tulajdons\xE1g miatt a signal kezd\u0151\xE9rt\xE9ke nem fut \xE1t a pipe-on.

### signalMethod
Ha nincs sz\xFCks\xE9g RxJS oper\xE1torokra, csak signal-v\xE1ltoz\xE1sra akarunk reag\xE1lni, a \`signalMethod\` k\xF6nnyebb: nincs Observable, nincs subscription, csak egy tipiz\xE1lt visszah\xEDv\xE1s.

**Mikor melyik:** debounce, cancellation, retry, konkurencia-kezel\xE9s \u2192 \`rxMethod\`. Egyszer\u0171 \u201Eha ez a signal v\xE1ltozik, tedd meg ezt\u201D \u2192 \`signalMethod\`. Egyszeri, imperat\xEDv m\u0171velet \u2192 sima \`withMethods\`.

## 129. NgRx Signal Store \u2013 Entity Management and Normalization (@ngrx/signals 18+) https://ngrx.io/guide/signals/entities {#ngrx-signal-store-entity-management-es-normalizalas-ngrx-signals-18}
### withEntities
\`\`\`ts
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
\`\`\`
A \`collection\` opci\xF3val **t\xF6bb entit\xE1st\xEDpus** kezelhet\u0151 egy store-ban. A feature \`flightEntities()\` (t\xF6mb), \`flightEntityMap()\` (id \u2192 entity) \xE9s \`flightIds()\` signalokat ad.

### Normaliz\xE1l\xE1s
Ne t\xE1roljunk m\xE9lyen egym\xE1sba \xE1gyazott adatot, ha friss\xEDt\xFCnk is benne \u2013 a duplik\xE1tumok inkonzisztenci\xE1hoz vezetnek. T\xE1roljuk laposan, id-referenci\xE1kkal, \xE9s a n\xE9zeteket \`computed\`-tel \xE1ll\xEDtsuk el\u0151:

\`\`\`ts
export type FlightWithPassengers = Flight & { passengers: Passenger[] };

withComputed((store) => ({
  flightsWithPassengers: computed<FlightWithPassengers[]>(() =>
    store.flightEntities().map((f) => ({
      ...f,
      passengers: f.passengerIds.map((id) => store.passengerEntityMap()[id]),
    })),
  ),
}));
\`\`\`

**Honnan j\xF6n a normaliz\xE1lt adat?** Ide\xE1lis esetben a backend (vagy egy BFF) m\xE1r \xEDgy adja. Ha nem, a bet\xF6lt\xE9s ut\xE1n, t\xE1rol\xE1s el\u0151tt normaliz\xE1lunk kliensen (\`map\`/\`reduce\`). Ha az adatot csak olvassuk, vagy mindig eg\xE9szben cser\xE9lj\xFCk, a normaliz\xE1l\xE1s kihagyhat\xF3.

## 130. NgRx Signal Store \u2013 Events API (Flux/Redux Pattern) (@ngrx/signals 19+) https://ngrx.io/guide/signals/events {#ngrx-signal-store-events-api-flux-redux-minta-ngrx-signals-19}
Ha egy feature t\xF6bb store-ral dolgozik, vagy egy store-t t\xF6bb feature haszn\xE1l, a direkt met\xF3dush\xEDv\xE1sok csatol\xE1st \xE9s inkonzisztencia-vesz\xE9lyt sz\xFClnek. Az **Events API** ezt eventinggel oldja fel: a komponens **eventet dispatchel**, a store-ok pedig eld\xF6ntik, reag\xE1lnak-e r\xE1.

### Event group
\`\`\`ts
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
\`\`\`
Aszinkron m\u0171veletre a bev\xE1lt minta a **h\xE1rom event**: trigger / success / failure. A \`source\` a debugol\xE1st seg\xEDti \u2013 az NgRx team finomabb szemcs\xE9z\xE9st javasol (a fogyaszt\xF3 komponens vagy service nev\xE9t), pl. \`luggageOverviewEvents\` \xE9s \`luggageApiEvents\` sz\xE9tv\xE1lasztva.

### Reducer \u2013 szinkron \xE1llapotfriss\xEDt\xE9s
\`\`\`ts
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
\`\`\`
A reducer **mindig szinkron**, \xE9s r\xE9szleges state-et ad vissza, amit a store patchel.

### Event handler \u2013 mell\xE9khat\xE1s \xE9s aszinkronit\xE1s
\`\`\`ts
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
\`\`\`
Az event handler a klasszikus NgRx **effect** megfelel\u0151je \u2013 az elnevez\xE9s az\xE9rt v\xE1ltozott, hogy ne keveredjen az Angular \`effect()\` primit\xEDvj\xE9vel. A \`mapResponse\` a \`map\` + \`catchError\` r\xF6vid\xEDt\xE9se.

### Dispatch
\`\`\`ts
export class LuggageOverview {
  private readonly store = inject(LuggageStore);
  private readonly dispatcher = inject(Dispatcher);
  protected readonly luggage = this.store.luggage;

  constructor() {
    this.dispatcher.dispatch(luggageEvents.loadLuggageTriggered({ passengerId: 4711 }));
  }
}
\`\`\`
Az **olvas\xE1s** tov\xE1bbra is k\xF6zvetlen\xFCl a store signaljain t\xF6rt\xE9nik \u2013 csak az \xEDr\xE1s megy eventen kereszt\xFCl (unidirekcion\xE1lis adatfolyam).

**Mikor \xE9rdemes:** t\xF6bb store \xE9rintett, cross-feature koordin\xE1ci\xF3, audit\xE1lhat\xF3 \xE1llapotv\xE1ltoz\xE1sok, Redux DevTools id\u0151utaz\xE1s. **Mikor nem:** egyetlen store, egyetlen komponens \u2013 ott a \`withMethods\` egyszer\u0171bb \xE9s olvashat\xF3bb.

## 131. NgRx Signal Store \u2013 Custom Features and Redux DevTools (@ngrx/signals 17+) https://ngrx.io/guide/signals/signal-store {#ngrx-signal-store-custom-features-es-redux-devtools-ngrx-signals-17}
### Custom feature
Az ism\xE9tl\u0151d\u0151 store-r\xE9szleteket (loading/error st\xE1tusz, \u201Eselected\u201D kezel\xE9s, undo) \xFAjrahasznos\xEDthat\xF3 feature-be emelj\xFCk:
\`\`\`ts
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
\`\`\`
Ha a feature a megl\xE9v\u0151 state-re \xE9p\xFCl, \`signalStoreFeature({ state: type<{ ... }>() }, ...)\` form\xE1val deklar\xE1ljuk az elv\xE1rt bemenetet.

### Redux DevTools
\`\`\`ts
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('flights'),
);
\`\`\`
Az \xE1llapotv\xE1ltoz\xE1sok megjelennek a Redux DevTools kiterjeszt\xE9sben (time-travel, state diff). **Produkci\xF3ban kapcsoljuk ki** \u2013 k\xF6rnyezetf\xFCgg\u0151 providerrel vagy a feature felt\xE9teles hozz\xE1ad\xE1s\xE1val, hogy ne sziv\xE1rogjon ki bels\u0151 \xE1llapot \xE9s ne legyen felesleges overhead.

## 132. Resource API in Depth \u2013 resource, rxResource, httpResource (resource v19 experimental \xB7 httpResource v20+) https://angular.dev/guide/signals/resource {#resource-api-melyebben-resource-rxresource-httpresource-resource-v19-kiserleti-httpresource-v20}
A \`resource\` az aszinkron adatbet\xF6lt\xE9s signal-alap\xFA primit\xEDvje: param\xE9tert figyel, bet\xF6lt, \xE9s st\xE1tuszt is ad \u2013 \xEDgy kiv\xE1ltja a k\xE9zzel \xEDrt \`loading\`/\`error\`/\`data\` h\xE1rmast.

### httpResource \u2013 deklarat\xEDv HTTP GET
\`\`\`ts
readonly flightId = signal(1);
readonly flight = httpResource<Flight>(() => \`/api/flight/\${this.flightId()}\`, {
  defaultValue: undefined,
  parse: (raw) => FlightZodSchema.parse(raw),
});
\`\`\`
A \`flightId()\` v\xE1ltoz\xE1sakor automatikusan \xFAjrat\xF6lt. El\xE9rhet\u0151: \`flight.value()\`, \`flight.status()\`, \`flight.error()\`, \`flight.isLoading()\`, \`flight.reload()\`.

### rxResource \u2013 Observable alap\xFA (interceptorok, oper\xE1torok megtart\xE1s\xE1val)
\`\`\`ts
readonly flight = rxResource({
  params: () => this.flightId(),
  stream: ({ params: id }) => this._flightService.getFlight(id),
  defaultValue: undefined,
});
\`\`\`

### resource \u2013 Promise alap\xFA, abort signallal
\`\`\`ts
readonly flight = resource({
  params: () => this.flightId(),
  loader: async ({ params: id, abortSignal }) => {
    const res = await fetch(\`/api/flight/\${id}\`, { signal: abortSignal });
    if (!res.ok) throw new Error(res.statusText);
    return (await res.json()) as Flight;
  },
});
\`\`\`
Az \`abortSignal\` miatt a param\xE9terv\xE1ltoz\xE1skor a kor\xE1bbi k\xE9r\xE9s megszakad \u2013 ez a \`switchMap\` szemantik\xE1ja.

### St\xE1tuszok
\`idle\` \u2192 \`loading\` \u2192 \`resolved\` | \`error\`, illetve \`reloading\` \xE9s \`local\` (helyi fel\xFCl\xEDr\xE1s \`set()\`-tel). Sablonban:
\`\`\`html
@if (flight.isLoading()) { <app-spinner /> }
@else if (flight.error()) { <app-error [error]="flight.error()" /> }
@else { <app-flight-card [flight]="flight.value()!" /> }
\`\`\`

### Gyakorlati megjegyz\xE9sek
- A \`defaultValue\` n\xE9lk\xFCl a \`value()\` t\xEDpusa \`T | undefined\`.
- A resource **olvas\xE1sra** val\xF3. \xCDr\xE1shoz mutation kell (\`httpMutation\`/\`rxMutation\`) \u2013 ne pr\xF3b\xE1ljunk POST-ot resource-szal modellezni.
- \`equal\` opci\xF3val megadhat\xF3, mikor sz\xE1m\xEDt v\xE1ltoz\xE1snak a param\xE9ter.
- SSR-hez az \`id\` opci\xF3 + \`TransferState\` k\xF6ti \xF6ssze a szerveren bet\xF6lt\xF6tt adatot a klienssel (l\xE1sd a Resource Cache szekci\xF3t).

## 133. Signal Forms in Depth \u2013 Schemas, Zod, Submit, Validators (v21 experimental \xB7 v22 expanded) https://angular.dev/guide/forms/signals/schemas {#signal-forms-melyebben-semak-zod-submit-validatorok-v21-kiserleti-v22-bovitett}
### S\xE9ma k\xFCl\xF6n f\xE1jlban
A valid\xE1ci\xF3s szab\xE1lyokat \xE9rdemes a \`data\` r\xE9tegbe emelni, hogy t\xF6bb \u0171rlap \xE9s a szerveroldal is haszn\xE1lhassa:
\`\`\`ts
// data/flight-schema.ts
import { schema, required, minLength } from '@angular/forms/signals';

export const flightSchema = schema<Flight>((path) => {
  required(path.from, { message: 'Indul\xE1si hely k\xF6telez\u0151' });
  minLength(path.from, 3);
  required(path.to, { message: 'C\xE9l k\xF6telez\u0151' });
});
\`\`\`
\`\`\`ts
protected readonly flightForm = form(this.flight, flightSchema);
\`\`\`

### Valid\xE1l\xE1s Zod / Standard Schema ellen
\`\`\`ts
// data/flight-zod-schema.ts
export const FlightZodSchema = z.object({
  id: z.number().int(),
  from: z.string().min(3).max(20),
  to: z.string().min(3).max(20),
  date: z.string(),
  delayed: z.boolean(),
});
\`\`\`
\`\`\`ts
import { validateStandardSchema, schema } from '@angular/forms/signals';

export const flightSchema = schema<Flight>((path) => {
  validateStandardSchema(path, FlightZodSchema);
  // tov\xE1bbi, csak UI-szint\u0171 szab\xE1lyok
});
\`\`\`
B\xE1rmely **Standard Schema**-kompatibilis k\xF6nyvt\xE1r m\u0171k\xF6dik (Zod, Valibot, ArkType). Ha a s\xE9ma OpenAPI-b\xF3l/JSON Schem\xE1b\xF3l gener\xE1lt, a kliens \xE9s a szerver valid\xE1ci\xF3ja egy forr\xE1sb\xF3l sz\xE1rmazik.

### Submit logika az \u0171rlap defin\xEDci\xF3j\xE1ban
\`\`\`ts
protected readonly flightForm = form(this.flight, flightSchema, {
  submission: {
    action: async (form) => this.save(form),
    ignoreValidators: 'none',
    onInvalid: (form) => this.reportValidationError(form),
  },
});
\`\`\`
\`\`\`html
<form [formRoot]="flightForm">
  <input [field]="flightForm.from" />
  <button type="submit" [disabled]="flightForm().submitting()">Ment\xE9s</button>
</form>
\`\`\`
A submit \xE1llapota (\`submitting\`, \`submitted\`) az \u0171rlapon \xE9l, nem kell k\xFCl\xF6n \`isSaving\` signal.

### Saj\xE1t valid\xE1torok
\`\`\`ts
export function validateAirport(path: FieldPath<string>) {
  validate(path, ({ value }) =>
    KNOWN_AIRPORTS.includes(value()) ? null : { kind: 'unknownAirport', message: 'Ismeretlen rep\xFCl\u0151t\xE9r' },
  );
}
\`\`\`
- **Felt\xE9teles valid\xE1ci\xF3**: \`validate(path, ...)\` belsej\xE9ben olvassunk m\xE1s signalokat \u2013 a szab\xE1ly automatikusan reakt\xEDv lesz.
- **Multi-field / tree valid\xE1tor**: a sz\xFCl\u0151 \`path\`-ra tessz\xFCk, \xEDgy t\xF6bb mez\u0151t l\xE1tunk egyszerre (pl. jelsz\xF3-egyez\xE9s, d\xE1tumintervallum).
- **Sibling mez\u0151k el\xE9r\xE9se**: a valid\xE1tor kontextus\xE1b\xF3l a testv\xE9rmez\u0151k \xE9rt\xE9kei olvashat\xF3k.
- **Aszinkron \xE9s HTTP valid\xE1tor**: \`validateAsync\` / \`validateHttp\` \u2013 a pending \xE1llapot automatikusan megjelenik a mez\u0151 metaadataiban.

### Hib\xE1k megjelen\xEDt\xE9se
\`\`\`html
@for (err of flightForm.from().errors(); track err.kind) {
  <span class="error">{{ err.message }}</span>
}
\`\`\`

## 134. Signal Forms \u2013 Groups, Arrays, Subforms, Metadata, Custom Fields (v21 experimental \xB7 v22 expanded) https://angular.dev/guide/forms/signals/custom-controls {#signal-forms-groups-arrays-subforms-metadata-custom-fields-v21-kiserleti-v22-bovitett}
### Form group \xE9s array
A \`form()\` a modell **alakj\xE1t** k\xF6veti, nem kell k\xFCl\xF6n \`FormGroup\`/\`FormArray\` konstrukci\xF3:
\`\`\`ts
interface BookingModel {
  contact: { email: string; phone: string };
  passengers: { firstName: string; lastName: string }[];
}
readonly model = signal<BookingModel>({ contact: { email: '', phone: '' }, passengers: [] });
readonly bookingForm = form(this.model, bookingSchema);
\`\`\`
\`\`\`html
<input [field]="bookingForm.contact.email" />

@for (p of bookingForm.passengers; track $index) {
  <input [field]="p.firstName" />
  <input [field]="p.lastName" />
}
<button (click)="addPassenger()">Utas hozz\xE1ad\xE1sa</button>
\`\`\`
\`\`\`ts
addPassenger(): void {
  this.model.update((m) => ({ ...m, passengers: [...m.passengers, { firstName: '', lastName: '' }] }));
}
\`\`\`
Az array elemeire a s\xE9ma is alkalmazhat\xF3 (\`applyEach\`), \xEDgy minden elem ugyanazokat a szab\xE1lyokat kapja.

### Subformok
Egy \xF6sszetett \u0171rlap r\xE9sz\xE9t saj\xE1t komponens kezelheti: a \`FieldTree\` r\xE9szf\xE1j\xE1t inputk\xE9nt adjuk \xE1t. A gyerekkomponens nem tud a teljes \u0171rlapr\xF3l, m\xE9gis r\xE9szt vesz a valid\xE1ci\xF3ban \xE9s a submitban \u2013 ez v\xE1ltja ki a \`ControlValueAccessor\` boilerplate nagy r\xE9sz\xE9t \xF6sszetett szekci\xF3kn\xE1l.

### Metaadatok
\`\`\`html
<input [field]="flightForm.from" [class.touched]="flightForm.from().touched()" />
@if (flightForm.from().pending()) { <span>Ellen\u0151rz\xE9s\u2026</span> }
\`\`\`
Be\xE9p\xEDtett metaadatok: \`touched\`, \`dirty\`, \`valid\`, \`invalid\`, \`disabled\`, \`readonly\`, \`pending\`, \`errors\`. Saj\xE1t metaadat is defini\xE1lhat\xF3 (\`defineMetadata\` / s\xE9ma-szint\u0171 annot\xE1ci\xF3) \u2013 pl. \u201Eez a mez\u0151 csak adminnak szerkeszthet\u0151\u201D, \xE9s a template ezt olvassa, nem tal\xE1l ki \xFAj inputot.

### Null \xE9s undefined
A modell t\xEDpusa d\xF6nt: ha \`string | null\` a mez\u0151, a form is azt kezeli. \xC9rdemes a **DTO \u2192 form modell** ir\xE1nyban explicit mappinget \xEDrni (\`?? ''\`), \xE9s ment\xE9skor visszafel\xE9 is (\`length ? value : null\`) \u2013 ugyanaz az elv, mint a Typed Forms-n\xE1l.

### Custom field (saj\xE1t vez\xE9rl\u0151)
\`\`\`ts
@Component({ selector: 'app-rating', /* ... */ })
export class RatingControl implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
}
\`\`\`
\`\`\`html
<app-rating [field]="flightForm.rating" />
\`\`\`
A \`FormValueControl\` (illetve \`FormCheckboxControl\`) a \`ControlValueAccessor\` modern megfelel\u0151je: egy \`model()\` signal, semmi \`registerOnChange\` boilerplate.

### Migr\xE1ci\xF3s strat\xE9gia
Nem kell mindent egyszerre \xE1t\xEDrni: a \`SignalFormControl\` (l\xE1sd a megfelel\u0151 szekci\xF3t) be\xE9p\xEDthet\u0151 megl\xE9v\u0151 \`FormGroup\`-ba, \xEDgy mez\u0151 szinten lehet \xE1t\xE1llni Reactive Formsr\xF3l Signal Formsra.

## 135. Modern Testing with Vitest \u2013 TestBed, Locators, Mocking (v20 experimental \xB7 v21 default \xB7 TestBed bindings v21+) https://angular.dev/guide/testing/migrating-to-vitest {#modern-teszteles-vitesttel-testbed-locators-mockolas-v20-kiserleti-v21-alapertelmezett-testbed-bindings-v21}
### Vitest alapok
\`\`\`ts
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('flight-search', () => {
  it.skip('later', () => {});
  it('works', () => expect(1 + 1).toBe(2));
});
\`\`\`
B\xF6ng\xE9sz\u0151 m\xF3d (\`browser: { enabled: true }\` a Vite configban) val\xF3di b\xF6ng\xE9sz\u0151ben futtat \u2013 ez v\xE1ltja ki a Karm\xE1t, mik\xF6zben megmarad a Vite/ESM/TypeScript integr\xE1ci\xF3 \xE9s a gyors watch m\xF3d.

### TestBed
\`\`\`ts
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
\`\`\`
A \`ComponentFixture\` f\u0151 tagjai: \`componentInstance\`, \`nativeElement\`, \`debugElement\` (injector \xE9s DOM lek\xE9rdez\xE9s), \`detectChanges()\`, \`whenStable()\`.

### Input binding TestBedb\u0151l (v21+)
\`\`\`ts
const fixture = TestBed.createComponent(FlightCard, {
  bindings: [inputBinding('flight', () => flight), outputBinding('selected', (f) => selected.push(f))],
});
\`\`\`
Signal inputokat \xE9s outputokat \xEDgy k\xF6zvetlen\xFCl k\xF6t\xFCnk \u2013 nincs sz\xFCks\xE9g host komponensre.

### Locators \xE9s DOM-lek\xE9rdez\xE9s
\`\`\`ts
// Vitest browser mode locator API
await page.getByRole('button', { name: 'Keres\xE9s' }).click();
await expect.element(page.getByText('3 tal\xE1lat')).toBeVisible();

// vagy DebugElement
const button = fixture.debugElement.query(By.css('[data-testid="search"]'));
button.triggerEventHandler('click');
fixture.detectChanges();
\`\`\`
Haszn\xE1ljunk \`data-testid\`-t vagy szemantikus role-t \u2013 a CSS class szerinti lek\xE9rdez\xE9s minden restyle-n\xE1l elt\xF6rik.

### Mockol\xE1s
\`\`\`ts
// service mock providerrel
providers: [{ provide: FlightService, useValue: { find: vi.fn().mockReturnValue(of([mockFlight])) } }]

// HTTP mock
component.search();
const req = ctrl.expectOne('/api/flight?from=London');
expect(req.request.method).toBe('GET');
req.flush([mockFlight]);

// spy megl\xE9v\u0151 objektumon (gray-box)
const spy = vi.spyOn(store, 'load');
\`\`\`
**Shallow testing**: a gyerekkomponenseket \xFCres stub komponensre cser\xE9lj\xFCk (\`TestBed.overrideComponent\` vagy stub import), \xEDgy a teszt nem borul el a gyerek hib\xE1in.

## 136. Fake Timers, Debounce Testing and Coverage (Vitest \xB7 v20+) https://angular.dev/guide/testing/utility-apis {#fake-timers-debounce-teszteles-es-coverage-vitest-v20}
### Fake timers
\`\`\`ts
beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it('debounces the search', async () => {
  component.term.set('Lon');
  vi.advanceTimersByTime(300);
  await fixture.whenStable();
  expect(service.find).toHaveBeenCalledTimes(1);
});
\`\`\`
A \`vi.advanceTimersByTime()\` a \`tick()\` megfelel\u0151je. Signal-alap\xFA k\xF3dn\xE1l \`fakeAsync\`/\`tick\` helyett a Vitest fake timer + \`await fixture.whenStable()\` p\xE1ros a modern \xFAt.

### K\xE9sleltet\xE9s mockol\xE1sa
\`\`\`ts
vi.spyOn(service, 'find').mockReturnValue(of([mockFlight]).pipe(delay(1000)));
\`\`\`

### Default timeout
\`\`\`ts
it('slow test', async () => { /* ... */ }, 10_000);
\`\`\`

### Service tesztel\xE9se
\`\`\`ts
const service = TestBed.inject(FlightService);   // DI-n kereszt\xFCl, ne \`new\`-vel
\`\`\`
Signal store tesztel\xE9se: hozzuk l\xE9tre \`TestBed.inject(FlightStore)\`-ral, h\xEDvjuk a met\xF3dusait, \xE9s a \`store.x()\` signalokra assert\xE1ljunk.

### Coverage
\`\`\`bash
ng test --coverage
\`\`\`
A \`vitest.config.ts\`-ben \xE1ll\xEDthat\xF3 a provider (\`v8\` vagy \`istanbul\`), a riportform\xE1tum \xE9s a k\xFCsz\xF6b\xF6k:
\`\`\`ts
coverage: { thresholds: { lines: 80, functions: 80, branches: 70 } }
\`\`\`
A coverage sz\xE1m nem c\xE9l, hanem jelz\xE9s: a 0%-os data r\xE9teg vagy a lefedetlen guard/interceptor a val\xF3di kock\xE1zat.

## 137. E2E Testing with Playwright (version-agnostic) https://playwright.dev/docs/intro {#e2e-teszteles-playwrighttal-verziofuggetlen}
\`\`\`bash
npm init playwright@latest
\`\`\`
\`\`\`ts
import { test, expect } from '@playwright/test';

test('user can search flights', async ({ page }) => {
  await page.goto('/flight-search');
  await page.getByLabel('Honnan').fill('London');
  await page.getByRole('button', { name: 'Keres\xE9s' }).click();
  await expect(page.getByTestId('flight-card')).toHaveCount(3);
});
\`\`\`

### Gyakorlati elvek
- **Teszt-piramis**: sok unit (Vitest), kev\xE9s integr\xE1ci\xF3s komponensteszt, **kev\xE9s** E2E. Az E2E a kritikus \xFCzleti \xFAtvonalakat fedje (login, checkout), ne a valid\xE1ci\xF3s r\xE9szleteket.
- **H\xE1l\xF3zat mockol\xE1sa**: \`page.route('**/api/flight*', route => route.fulfill({ json: flights }))\` \u2013 determinist\xE9 teszi a tesztet.
- **Auth gyors\xEDt\xE1s**: \`storageState\` ment\xE9se egy setup projektben, hogy ne minden teszt l\xE9pjen be \xFAjra.
- **Ker\xFClj\xFCk a \`waitForTimeout\`-ot**: a Playwright locator-ok auto-waitolnak.
- **CI**: \`--shard\`-dal p\xE1rhuzamos\xEDthat\xF3, trace/vide\xF3 artefaktumk\xE9nt mentend\u0151 a hibakeres\xE9shez.
- **Vizu\xE1lis regresszi\xF3**: \`expect(page).toHaveScreenshot()\` \u2013 design system komponensekn\xE9l hasznos, alkalmaz\xE1sszinten k\xF6nnyen zajos.

## 138. HttpClient in Depth \u2013 Functional Interceptors, Retry, Cache (provideHttpClient v15+ \xB7 withFetch v16+ \xB7 keepalive v20+) https://angular.dev/guide/http {#httpclient-melyebben-functional-interceptorok-retry-cache-providehttpclient-v15-withfetch-v16-keepalive-v20}
### Setup \xE9s functional interceptorok
\`\`\`ts
provideHttpClient(
  withFetch(),
  withInterceptors([correlationIdInterceptor, authInterceptor, retryInterceptor, errorInterceptor]),
);
\`\`\`
\`\`\`ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthStore).token();
  if (!token) return next(req);
  return next(req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } }));
};
\`\`\`
A funkcion\xE1lis interceptor \`inject()\`-et haszn\xE1lhat, tree-shakeable, \xE9s a sorrend a t\xF6mbben deklar\xE1lt sorrend.

### Retry exponenci\xE1lis backoffal
\`\`\`ts
export const retryInterceptor: HttpInterceptorFn = (req, next) =>
  req.method === 'GET'
    ? next(req).pipe(retry({ count: 3, delay: (err, n) => timer(Math.pow(2, n) * 300) }))
    : next(req);
\`\`\`
Csak **idempotens** k\xE9r\xE9st ism\xE9telj\xFCnk automatikusan.

### HttpContext \u2013 k\xE9r\xE9senk\xE9nti metaadat
\`\`\`ts
export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);

this.http.get('/api/public', { context: new HttpContext().set(SKIP_AUTH, true) });

// interceptorban
if (req.context.get(SKIP_AUTH)) return next(req);
\`\`\`
Ez a tiszta megold\xE1s a \u201Eminden k\xE9r\xE9sre, kiv\xE9ve ezt\u201D probl\xE9m\xE1ra \u2013 URL-string-egyeztet\xE9s helyett.

### Cache interceptor
\`\`\`ts
export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(HttpCache);
  if (req.method !== 'GET') return next(req);
  const hit = cache.get(req.urlWithParams);
  if (hit) return of(hit.clone());
  return next(req).pipe(tap((e) => e instanceof HttpResponse && cache.set(req.urlWithParams, e)));
};
\`\`\`
SSR-n\xE9l ugyanezt a \`withHttpTransferCacheOptions()\` adja be\xE9p\xEDtve.

### Egy\xE9b hasznos be\xE1ll\xEDt\xE1sok
- \`withRequestsMadeViaParent()\` \u2013 gyerek injectorb\xF3l a sz\xFCl\u0151 interceptor-l\xE1ncot haszn\xE1lja.
- \`keepalive: true\` \u2013 analitikai k\xE9r\xE9s t\xFAl\xE9li az oldal elhagy\xE1s\xE1t.
- \`HttpResponse.headers\` / \`progress\` esem\xE9nyek \u2013 let\xF6lt\xE9s/felt\xF6lt\xE9s folyamatjelz\u0151h\xF6z.
- Timeout: \`timeout(10_000)\` oper\xE1tor az interceptorban, egys\xE9ges hibakezel\xE9ssel.

## 139. Authentication and Authorization \u2013 Modern Patterns (v15+ \xB7 RedirectCommand v18+) https://angular.dev/guide/routing/route-guards {#authentikacio-es-authorizacio-modern-mintak-v15-redirectcommand-v18}
### Cookie-alap\xFA authentik\xE1ci\xF3
A session cookie-nak legyen \`HttpOnly\` (JS nem olvashatja \u2192 XSS-ellen\xE1ll\xF3), \`Secure\` (csak HTTPS) \xE9s \`SameSite=Lax\` vagy \`Strict\` (CSRF-v\xE9delem) attrib\xFAtuma.

**XSRF**: ha a cookie automatikusan megy minden k\xE9r\xE9ssel, kell CSRF token. Angular be\xE9p\xEDtett t\xE1mogat\xE1sa:
\`\`\`ts
provideHttpClient(withXsrfConfiguration({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' }));
\`\`\`
A szerver be\xE1ll\xEDt egy nem-HttpOnly XSRF cookie-t, az Angular pedig fejl\xE9cbe m\xE1solja \u2013 a t\xE1mad\xF3 m\xE1sik originb\u0151l nem tudja olvasni.

### Token-alap\xFA biztons\xE1g
- **OAuth 2** \u2013 authoriz\xE1ci\xF3 (deleg\xE1lt hozz\xE1f\xE9r\xE9s), **OpenID Connect** \u2013 authentik\xE1ci\xF3 (ki a felhaszn\xE1l\xF3) OAuth 2 f\xF6l\xF6tt.
- **JWT** \u2013 al\xE1\xEDrt, base64url-k\xF3dolt token (header.payload.signature). Nem titkos\xEDtott: **ne tegy\xFCnk bele \xE9rz\xE9keny adatot**, \xE9s mindig ellen\u0151rizz\xFCk az al\xE1\xEDr\xE1st szerveroldalon.

### Flow-k
| Flow | Haszn\xE1lat |
| --- | --- |
| Authorization Code + PKCE | SPA/mobil, ha kliensoldali OAuth kell |
| Client Credentials | g\xE9p-g\xE9p, nincs felhaszn\xE1l\xF3 |
| Implicit | **elavult**, ne haszn\xE1ljuk |

### Aktu\xE1lis aj\xE1nl\xE1s: szerveroldali OAuth 2 (BFF)
A b\xF6ng\xE9sz\u0151ben t\xE1rolt access token (localStorage vagy ak\xE1r mem\xF3ria) XSS eset\xE9n kisziv\xE1rogtathat\xF3an \xE9rz\xE9keny. A jelenlegi aj\xE1nl\xE1s a **Backend for Frontend** minta:
1. A token-csere \xE9s -t\xE1rol\xE1s a BFF-en t\xF6rt\xE9nik.
2. A b\xF6ng\xE9sz\u0151 csak \`HttpOnly\` session cookie-t kap.
3. A BFF proxyzza az API-h\xEDv\xE1sokat, \xE9s \u0151 teszi r\xE1 az access tokent.

\xCDgy nincs token a JS-ben, a refresh flow is szerveroldali, \xE9s a kliens k\xF3dja l\xE9nyegesen egyszer\u0171bb.

### Authoriz\xE1ci\xF3 a frontenden
\`\`\`ts
export const hasRole = (role: string): CanActivateFn => () => {
  const auth = inject(AuthStore);
  return auth.roles().includes(role) ? true : new RedirectCommand(inject(Router).parseUrl('/forbidden'));
};
\`\`\`
**A frontend authoriz\xE1ci\xF3 csak UX**: elrejt \xE9s ir\xE1ny\xEDt. Az \xE9rdemi ellen\u0151rz\xE9s mindig a szerveren van \u2013 a kliensben l\xE9v\u0151 guard megker\xFClhet\u0151.

## 140. Frontend Security \u2013 XSS, CSP, Trusted Types (v2+ \xB7 CSP nonce v16+) https://angular.dev/best-practices/security {#frontend-biztonsag-xss-csp-trusted-types-v2-csp-nonce-v16}
### XSS \xE9s az Angular v\xE9delme
Az Angular alapb\xF3l **kontextus-tudatosan escape-eli** az interpol\xE1lt \xE9rt\xE9keket, ez\xE9rt a \`{{ userInput }}\` biztons\xE1gos. A r\xE9s ott van, ahol ezt kikapcsoljuk:
\`\`\`ts
// ker\xFClend\u0151, csak megb\xEDzhat\xF3, szerveroldalon tiszt\xEDtott tartalomra
this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
\`\`\`
A \`bypassSecurityTrust*\` met\xF3dusok minden el\u0151fordul\xE1s\xE1t indokolni \xE9s code review-ban kiemelten kezelni kell. \`[innerHTML]\` eset\xE9n az Angular sanitiz\xE1l, de \`<script>\` mellett \`onerror\` \xE9s \`javascript:\` URL-ek is figyelend\u0151k.

### Content Security Policy
\`\`\`
Content-Security-Policy: default-src 'self';
  script-src 'self' 'nonce-{RANDOM}';
  style-src 'self' 'nonce-{RANDOM}';
  object-src 'none'; base-uri 'self';
\`\`\`
Angular CLI t\xE1mogatja a CSP nonce-t (\`ngCspNonce\` attrib\xFAtum a root elemen, illetve automatikus nonce-injekt\xE1l\xE1s SSR-n\xE9l), \xEDgy nem kell \`unsafe-inline\`.

### Trusted Types
\`\`\`
Content-Security-Policy: require-trusted-types-for 'script';
\`\`\`
Az Angular Trusted Types-kompatibilis; ez a leger\u0151sebb el\xE9rhet\u0151 DOM-XSS v\xE9delem.

### Egy\xE9b napi szempontok
- **Dependency higi\xE9nia**: \`npm audit\`, lockfile review, Renovate/Dependabot. A supply chain t\xE1mad\xE1s ma re\xE1lisabb, mint a klasszikus XSS.
- **Titkok**: az \`environment.ts\` **nem** titkos \u2013 a bundle-ba ker\xFCl. Kliensbe nem tessz\xFCk API kulcsot.
- **Source map** production build-ben ne legyen publikus.
- **K\xFCls\u0151 link**: \`rel="noopener noreferrer"\` a \`target="_blank"\` mell\xE9.
- **Iframe**: \`X-Frame-Options\` / \`frame-ancestors\` a clickjacking ellen.
- **Prototype pollution**: m\xE9ly merge-n\xE9l (\`lodash.merge\`) figyelj\xFCnk a \`__proto__\` kulcsra.

## 141. Internationalization (i18n) (@angular/localize v9+ \xB7 subPath v20+) https://angular.dev/guide/i18n {#internacionalizacio-i18n-angular-localize-v9-subpath-v20}
### Be\xE9p\xEDtett \`@angular/localize\`
\`\`\`bash
ng add @angular/localize
\`\`\`
\`\`\`html
<h1 i18n="@@flight.search.title">Rep\xFCl\u0151j\xE1rat keres\xE9se</h1>
<img [src]="logo" i18n-alt alt="Log\xF3" />
\`\`\`
\`\`\`ts
$localize\`:@@flight.notFound:Nincs tal\xE1lat\`;
\`\`\`
\`\`\`bash
ng extract-i18n --output-path src/locale --format xlf2
\`\`\`
\`\`\`json
// angular.json
"i18n": {
  "sourceLocale": "hu",
  "locales": { "en": "src/locale/messages.en.xlf", "de": "src/locale/messages.de.xlf" }
}
\`\`\`
A build **lok\xE1lonk\xE9nt k\xFCl\xF6n bundle-t** k\xE9sz\xEDt \u2013 nulla fut\xE1sidej\u0171 overhead, de deploykor \xFAtvonal- vagy subpath-alap\xFA kiszolg\xE1l\xE1s kell (\`/en/\`, \`/de/\`). Fejleszt\xE9s k\xF6zben: \`ng serve --configuration=en\`.

### Grammatikai form\xE1k (ICU)
\`\`\`html
{ count, plural, =0 {Nincs utas} =1 {Egy utas} other {{{count}} utas} }
{ gender, select, male {\u0150} female {\u0150} other {\u0150k} }
\`\`\`
A magyar \xE9s a szl\xE1v nyelvek t\xF6bbes sz\xE1m\xFA szab\xE1lyai miatt az ICU plural elhagy\xE1sa szinte biztosan hib\xE1s ford\xEDt\xE1shoz vezet.

### Form\xE1tumok
\`DatePipe\`, \`CurrencyPipe\`, \`DecimalPipe\` a \`LOCALE_ID\`-t k\xF6veti:
\`\`\`ts
providers: [{ provide: LOCALE_ID, useValue: 'hu-HU' }]
\`\`\`
T\xE1mogatott ford\xEDt\xE1si form\xE1tumok: XLIFF 1.2, XLIFF 2, XMB/XTB, JSON (ARB).

### K\xF6z\xF6ss\xE9gi alternat\xEDv\xE1k
- **Transloco** \u2013 fut\xE1sidej\u0171 nyelvv\xE1lt\xE1s, lazy-loadolt ford\xEDt\xE1si sz\xF3t\xE1rak, egy bundle. Ha nyelvv\xE1lt\xE1s reload n\xE9lk\xFCl kell, ez a gyakorlati v\xE1laszt\xE1s.
- **ngx-translate** \u2013 \xE9rett, elterjedt, de a be\xE9p\xEDtett \xE9s a Transloco ir\xE1ny\xE1ba mozdul az \xF6kosziszt\xE9ma.

**D\xF6nt\xE9s:** SEO-fontos, per-nyelv deployolhat\xF3 oldal \u2192 be\xE9p\xEDtett i18n. Bels\u0151 alkalmaz\xE1s fut\xE1sidej\u0171 nyelvv\xE1lt\xE1ssal \u2192 Transloco.

## 142. Accessibility (a11y) in Practice (CDK a11y v2+ \xB7 Angular Aria v21+) https://angular.dev/guide/aria/overview {#akadalymentesites-a11y-a-gyakorlatban-cdk-a11y-v2-angular-aria-v21}
### Szemantika el\u0151sz\xF6r
A helyes HTML elem t\xF6bbet \xE9r minden ARIA attrib\xFAtumn\xE1l: \`<button>\` a kattinthat\xF3hoz, \`<a href>\` a navig\xE1ci\xF3hoz, \`<label for>\` a mez\u0151h\xF6z, heading hierarchia kihagy\xE1s n\xE9lk\xFCl. ARIA-t csak akkor, ha nincs nat\xEDv megfelel\u0151.

### Modern binding
\`\`\`html
<button [aria-label]="label()" [aria-expanded]="isOpen()">\u2026</button>
\`\`\`
Az \`attr.\` prefix m\xE1r nem kell.

### F\xF3kuszkezel\xE9s
\`\`\`ts
private readonly focusTrap = inject(ConfigurableFocusTrapFactory);
private readonly liveAnnouncer = inject(LiveAnnouncer);

openDialog(): void {
  this.trap = this.focusTrap.create(this.dialogEl().nativeElement);
  this.trap.focusInitialElement();
  this.liveAnnouncer.announce('P\xE1rbesz\xE9dpanel megnyitva');
}
\`\`\`
A \`@angular/cdk/a11y\` csomag adja: \`FocusTrap\`, \`LiveAnnouncer\`, \`FocusMonitor\`, \`cdkTrapFocus\`, \`A11yModule\`.

### Angular Aria
A headless, akad\xE1lymentes primit\xEDvek (Accordion, Combobox, Grid, Listbox, Menu, Tabs, Toolbar, Tree) automatikusan hozz\xE1k a billenty\u0171zet-navig\xE1ci\xF3t, az ARIA attrib\xFAtumokat \xE9s a f\xF3kuszkezel\xE9st \u2013 csak a st\xEDlus a mi dolgunk. Saj\xE1t dropdown/tab implement\xE1ci\xF3 helyett ezt haszn\xE1ljuk.

### Ellen\u0151rz\u0151lista
- Teljes billenty\u0171zetes bej\xE1rhat\xF3s\xE1g, l\xE1that\xF3 \`:focus-visible\` jelz\xE9s.
- Kontraszt: norm\xE1l sz\xF6veg 4.5:1, nagy sz\xF6veg 3:1.
- \u0170rlaphiba: \`aria-invalid\` + \`aria-describedby\` a hibasz\xF6veghez, ne csak piros keret.
- Route v\xE1lt\xE1s: c\xEDm friss\xEDt\xE9se (\`TitleStrategy\`) \xE9s f\xF3kusz a f\u0151 tartalomra \u2013 SPA-ban a k\xE9perny\u0151olvas\xF3 k\xFCl\xF6nben nem tudja, hogy v\xE1ltozott az oldal.
- \`prefers-reduced-motion\` tiszteletben tart\xE1sa anim\xE1ci\xF3kn\xE1l.
- Automatiz\xE1lt ellen\u0151rz\xE9s: \`axe-core\` a Playwright tesztekben. Az automata eszk\xF6z a hib\xE1k kb. harmad\xE1t fogja meg \u2013 kell k\xE9zi billenty\u0171zet- \xE9s k\xE9perny\u0151olvas\xF3-teszt is.

## 143. Performance and Core Web Vitals (@defer v17+ \xB7 ng.enableProfiling() v20+) https://angular.dev/guide/performance {#teljesitmeny-es-core-web-vitals-defer-v17-ng-enableprofiling-v20}
### A h\xE1rom metrika
- **LCP** (Largest Contentful Paint) \u2264 2.5 s \u2013 a legnagyobb tartalmi elem megjelen\xE9se. Jav\xEDt\xE1s: SSR/prerender, \`ngOptimizedImage\` + \`priority\`, kritikus CSS, font preload.
- **INP** (Interaction to Next Paint) \u2264 200 ms \u2013 interakci\xF3 v\xE1laszk\xE9szs\xE9ge. Jav\xEDt\xE1s: OnPush/zoneless, hossz\xFA taskok sz\xE9tv\xE1g\xE1sa, felesleges change detection megsz\xFCntet\xE9se.
- **CLS** (Cumulative Layout Shift) \u2264 0.1 \u2013 elrendez\xE9s-ugr\xE1s. Jav\xEDt\xE1s: k\xE9p \`width\`/\`height\`, skeleton placeholder fix m\xE9rettel, \`font-display: optional\` vagy \`size-adjust\`.

### Bundle-kontroll
\`\`\`json
"budgets": [
  { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
  { "type": "anyComponentStyle", "maximumWarning": "4kB" }
]
\`\`\`
\`\`\`bash
ng build --stats-json && npx esbuild-visualizer --metadata dist/stats.json
\`\`\`
A budget CI-ben t\xF6rj\xF6n buildet \u2013 k\xFCl\xF6nben csak d\xEDsz.

### Angular-specifikus eszk\xF6z\xF6k
\`\`\`ts
// b\xF6ng\xE9sz\u0151 konzolban
ng.enableProfiling();
\`\`\`
Ezut\xE1n a Chrome DevTools Performance panelen az Angular saj\xE1t s\xE1vj\xE1n l\xE1tszik, melyik komponens change detectionje mennyi ideig tart.

### Bet\xF6lt\xE9s-strat\xE9gia
\`\`\`html
@defer (on viewport; prefetch on idle) {
  <app-recommendations />
} @placeholder (minimum 300ms) {
  <app-skeleton />
} @loading {
  <app-spinner />
}
\`\`\`
Triggerek: \`on idle\`, \`on viewport\`, \`on interaction\`, \`on hover\`, \`on timer(2s)\`, \`on immediate\`, \`when <kifejez\xE9s>\`. A \`prefetch\` k\xFCl\xF6n triggerelhet\u0151.

Route-szinten: \`loadComponent\`/\`loadChildren\` + \`PreloadAllModules\` vagy saj\xE1t \`PreloadingStrategy\` (pl. csak j\xF3 h\xE1l\xF3zaton).

### Runtime teljes\xEDtm\xE9ny
- OnPush (default from v22) \xE9s signal-alap\xFA state.
- \`@for\` **mindig** \`track\` kifejez\xE9ssel \u2013 en\xE9lk\xFCl teljes \xFAjrarenderel\xE9s.
- Dr\xE1ga sz\xE1m\xEDt\xE1s \`computed\`-ben (memoiz\xE1lt), nem getterben vagy sablonh\xEDv\xE1sban.
- Nagy list\xE1khoz \`cdk-virtual-scroll-viewport\`.
- Sablonban ne h\xEDvjunk f\xFCggv\xE9nyt, ami minden CD-ciklusban lefut.

## 144. Hybrid Rendering, Server Routes, Prerender, Event Replay (server routes v19 experimental \xB7 v20 stable \xB7 event replay v18+) https://angular.dev/guide/hybrid-rendering {#hybrid-rendering-server-routes-prerender-event-replay-server-routes-v19-kiserleti-v20-stable-event-replay-v18}
### SSR bekapcsol\xE1sa
\`\`\`bash
ng add @angular/ssr
\`\`\`
(A r\xE9gi \`@nguniversal/express-engine\` megsz\u0171nt, a funkci\xF3 a \`@angular/ssr\` csomagba ker\xFClt.)

### Route-szint\u0171 render m\xF3d
\`\`\`ts
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
\`\`\`
Ez a **hybrid rendering**: statikus marketing oldal prerender, katal\xF3gus SSR (friss adat + SEO), bel\xE9p\xE9s ut\xE1ni fel\xFClet CSR.

### Inkrement\xE1lis hydration \xE9s event replay
\`\`\`ts
provideClientHydration(withEventReplay());
\`\`\`
Az inkrement\xE1lis hydration default from v22 (\`withNoIncrementalHydration()\` kapcsolja ki). Az event replay elt\xE1rolja a hydration el\u0151tti kattint\xE1sokat, \xE9s a hidrat\xE1l\xE1s ut\xE1n lej\xE1tssza \u2013 \xEDgy nem veszik el a korai interakci\xF3.
\`\`\`html
@defer (hydrate on viewport) { <app-heavy-widget /> }
@defer (hydrate never) { <app-static-footer /> }
\`\`\`

### Szerver \xE9s kliens elt\xE9r\u0151 implement\xE1ci\xF3
\`\`\`ts
// DI-vel (aj\xE1nlott)
{ provide: StorageService, useClass: isServer ? ServerStorage : BrowserStorage }

// fut\xE1sidej\u0171 ellen\u0151rz\xE9s
private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
\`\`\`
Szerveren nincs \`window\`, \`document\`, \`localStorage\`. A DOM-hoz ny\xFAl\xF3 k\xF3dot tegy\xFCk \`afterNextRender()\`-be \u2013 az csak a b\xF6ng\xE9sz\u0151ben fut.

### HTTP request/response el\xE9r\xE9se
\`\`\`ts
const req = inject(REQUEST, { optional: true });        // fejl\xE9cek, cookie-k
const ctx = inject(RESPONSE_INIT, { optional: true });  // status, header be\xE1ll\xEDt\xE1s
\`\`\`
Tipikus haszn\xE1lat: 404 status be\xE1ll\xEDt\xE1sa nem l\xE9tez\u0151 term\xE9koldaln\xE1l, nyelv detekt\xE1l\xE1s \`Accept-Language\` alapj\xE1n.

### Hibaforr\xE1sok
- Hydration mismatch: a szerver \xE9s a kliens m\xE1s DOM-ot \xE1ll\xEDt el\u0151 (pl. \`Math.random()\`, \`new Date()\` a sablonban). Haszn\xE1ljunk stable adatot vagy \`ngSkipHydration\`-t.
- Dupla adatbet\xF6lt\xE9s: \`TransferState\` / \`withHttpTransferCacheOptions()\` n\xE9lk\xFCl a kliens \xFAjra lek\xE9ri, amit a szerver m\xE1r bet\xF6lt\xF6tt.

## 145. Dynamic Components, Templates and Containers (v2+ \xB7 createComponent bindings/directives v20+) https://angular.dev/guide/components/programmatic-rendering {#dinamikus-komponensek-template-ek-es-containerek-v2-createcomponent-bindings-directives-v20}
### Komponens l\xE9trehoz\xE1sa k\xF3db\xF3l bindingokkal
\`\`\`ts
import { createComponent, inputBinding, outputBinding, twoWayBinding } from '@angular/core';

const ref = createComponent(FlightCard, {
  environmentInjector: this.injector,
  bindings: [
    inputBinding('flight', () => this.flight()),
    outputBinding<Flight>('selected', (f) => this.onSelect(f)),
    twoWayBinding('expanded', this.expanded),
  ],
  directives: [{ type: TooltipDirective, bindings: [inputBinding('appTooltip', () => 'R\xE9szletek')] }],
});
\`\`\`
A \`bindings\` \xE9s \`directives\` opci\xF3 megsz\xFCnteti a kor\xE1bbi k\xE9zi \`setInput()\` + \`detectChanges()\` koreogr\xE1fi\xE1t, \xE9s a dinamikus komponens is kaphat direkt\xEDv\xE1kat.

### ViewContainerRef \xE9s TemplateRef
\`\`\`ts
private readonly vcr = viewChild.required('host', { read: ViewContainerRef });

show(): void {
  this.vcr().clear();
  this.vcr().createEmbeddedView(this.tpl(), { $implicit: this.item() });
}
\`\`\`
\`\`\`html
<ng-container *ngTemplateOutlet="rowTpl; context: { $implicit: row, index: i }" />
\`\`\`

### Struktur\xE1lis direkt\xEDva \u201Edesugarolva\u201D
\`\`\`html
<div *appMyIf="cond">\u2026</div>
<!-- ekvivalens -->
<ng-template appMyIf [appMyIf]="cond"><div>\u2026</div></ng-template>
\`\`\`
Ez magyar\xE1zza, mi\xE9rt kap a direkt\xEDva \`TemplateRef\`-et \xE9s \`ViewContainerRef\`-et a konstruktor\xE1ban, \xE9s mi\xE9rt m\u0171k\xF6dnek a \`let-\` v\xE1ltoz\xF3k.

### NgComponentOutlet
\`\`\`html
<ng-container
  *ngComponentOutlet="widgetType(); inputs: widgetInputs(); injector: widgetInjector()" />
\`\`\`
Dinamikus dashboard/widget-rendszerekhez ez a legkevesebb k\xF3ddal j\xE1r\xF3 megold\xE1s \u2013 \`inputs\`, \`injector\`, \`content\` \xE9s \`directives\` opci\xF3kat is t\xE1mogat.

### Mod\xE1lis dial\xF3gus CDK-val
\`\`\`ts
const ref = this.dialog.open(FlightEditDialog, { data: { flightId }, width: '600px' });
const result = await firstValueFrom(ref.closed);
\`\`\`
A CDK Dialog headless (nincs st\xEDlusa), az Angular Material \`MatDialog\` st\xEDlusozott v\xE1ltozat. Port\xE1l eset\xE9n \xFCgyelj\xFCnk arra, hogy a komponens **saj\xE1t injectorba** ker\xFCl \u2013 a \`:host-context()\` \xE9s a sz\xFCl\u0151 providerek nem felt\xE9tlen\xFCl \xE9rv\xE9nyesek, ez\xE9rt adjuk \xE1t explicit injectort.

## 146. Initializers \u2013 App, Environment, Platform (v14+ \xB7 provideAppInitializer v19+) https://angular.dev/api/core/provideAppInitializer {#initializerek-app-environment-platform-v14-provideappinitializer-v19}
### Modern provider-f\xFCggv\xE9nyek
\`\`\`ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(async () => {
      await inject(ConfigService).load();     // Promise-t is visszaadhat: a bootstrap megv\xE1rja
    }),
    provideEnvironmentInitializer(() => {
      inject(TelemetryService).start();       // az environment injector l\xE9trej\xF6ttekor
    }),
  ],
};
\`\`\`
Ezek v\xE1ltj\xE1k ki a r\xE9gi \`APP_INITIALIZER\` / \`ENVIRONMENT_INITIALIZER\` multi-provider szintaxist \u2013 tipiz\xE1ltak, \`inject()\`-alap\xFAak \xE9s jobban tree-shakelhet\u0151k.

### Melyiket mikor
| Initializer | Id\u0151pont | Tipikus feladat |
| --- | --- | --- |
| Platform initializer | a platform l\xE9trej\xF6ttekor, app el\u0151tt | glob\xE1lis polyfill, error hook |
| App initializer | bootstrap k\xF6zben, els\u0151 render el\u0151tt (**megv\xE1rja a Promise-t**) | runtime konfigur\xE1ci\xF3 bet\xF6lt\xE9se, feature flagek, auth session helyre\xE1ll\xEDt\xE1s |
| Environment initializer | az environment injector fel\xE1ll\xE1sakor | telemetria, DI-alap\xFA glob\xE1lis regisztr\xE1ci\xF3k |

### Runtime konfigur\xE1ci\xF3 minta
\`\`\`ts
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
\`\`\`
Ez az \`environment.ts\` build-time konstansok helyett **k\xF6rnyezetenk\xE9nt cser\xE9lhet\u0151** konfigur\xE1ci\xF3t ad: ugyanaz az artefaktum megy dev/staging/prod-ra.

**Figyelem:** minden app initializer lass\xEDtja az els\u0151 renderel\xE9st. Csak az ker\xFClj\xF6n bele, ami n\xE9lk\xFCl az alkalmaz\xE1s val\xF3ban nem indulhat el.

## 147. Angular CDK \u2013 Commonly Used Building Blocks (CDK v14+) https://material.angular.dev/cdk/categories {#angular-cdk-gyakran-hasznalt-epitoelemek-cdk-v14}
A CDK viselked\xE9si primit\xEDvek gy\u0171jtem\xE9nye st\xEDlus n\xE9lk\xFCl. Saj\xE1t implement\xE1ci\xF3 helyett szinte mindig ezt \xE9rdemes haszn\xE1lni.

| Modul | Mire j\xF3 |
| --- | --- |
| \`cdk/overlay\` | pozicion\xE1lt overlay (dropdown, tooltip, popover) flexible positioning strategy-vel |
| \`cdk/portal\` | tartalom kirenderel\xE9se a DOM m\xE1s pontj\xE1ra |
| \`cdk/dialog\` | headless mod\xE1lis dial\xF3gus |
| \`cdk/menu\` | akad\xE1lymentes men\xFC, submen\xFCk, billenty\u0171zet-navig\xE1ci\xF3 |
| \`cdk/a11y\` | \`FocusTrap\`, \`LiveAnnouncer\`, \`FocusMonitor\` |
| \`cdk/layout\` | \`BreakpointObserver\` \u2013 reszponz\xEDv logika TS-ben |
| \`cdk/scrolling\` | virtu\xE1lis scroll nagy list\xE1khoz |
| \`cdk/drag-drop\` | drag & drop list\xE1k, sorbarendez\xE9s |
| \`cdk/table\` | headless t\xE1bl\xE1zat (sort/paginate n\xE9lk\xFCl) |
| \`cdk/clipboard\` | \`cdkCopyToClipboard\` |
| \`cdk/testing\` | Component Test Harness \u2013 stable teszt-API a komponensekhez |

\`\`\`html
<cdk-virtual-scroll-viewport itemSize="48" style="height: 400px">
  @for (flight of flights(); track flight.id) {
    <app-flight-row [flight]="flight" />
  }
</cdk-virtual-scroll-viewport>
\`\`\`
\`\`\`ts
private readonly breakpoints = inject(BreakpointObserver);
readonly isMobile = toSignal(
  this.breakpoints.observe('(max-width: 768px)').pipe(map((s) => s.matches)),
  { initialValue: false },
);
\`\`\`

**Component Test Harness**: a \`cdk/testing\` harness API-jai a bels\u0151 DOM-t\xF3l f\xFCggetlen\xEDtik a tesztet \u2013 ha a Material komponens markupja v\xE1ltozik, a teszt nem t\xF6rik el.

## 148. RxJS and Signal Interop \u2013 When to Use Which (toSignal/toObservable v16+ \xB7 stable v20) https://angular.dev/guide/signals/rxjs-interop {#rxjs-es-signal-interop-mikor-melyiket-tosignal-toobservable-v16-stable-v20}
### Interop API-k
\`\`\`ts
// Observable \u2192 Signal
readonly user = toSignal(this.userService.user$, { initialValue: null });

// Signal \u2192 Observable
readonly term$ = toObservable(this.term);

// resource-ba k\xF6t\xF6tt Observable
readonly flights = rxResource({ params: () => this.filter(), stream: ({ params }) => this.api.find(params) });
\`\`\`
A \`toSignal\` automatikusan unsubscribe-ol a kontextus megsz\u0171n\xE9sekor, ez\xE9rt nem kell \`takeUntilDestroyed\`. Injection contexten k\xEDv\xFCl adjuk meg a \`{ injector }\` opci\xF3t.

### D\xF6nt\xE9si szab\xE1ly
| Feladat | Eszk\xF6z |
| --- | --- |
| UI \xE1llapot, derived \xE9rt\xE9k | \`signal\` / \`computed\` |
| Szinkron \xE1llapot megjelen\xEDt\xE9se | \`signal\` |
| Adatbet\xF6lt\xE9s param\xE9ter alapj\xE1n | \`resource\` / \`httpResource\` / \`rxResource\` |
| \xCDr\xE1si m\u0171velet st\xE1tusszal | \`httpMutation\` / \`rxMutation\` |
| Debounce, throttle, retry, cancellation | **RxJS** (\`rxMethod\`, interceptor) |
| T\xF6bb stream kombin\xE1l\xE1sa id\u0151ben | **RxJS** (\`combineLatest\`, \`withLatestFrom\`) |
| WebSocket, SSE, folyamatos esem\xE9ny | **RxJS** |
| Egyszer\u0171 \u201Eha v\xE1ltozik, tedd meg\u201D | \`effect\` / \`signalMethod\` |

**A signal nem v\xE1ltja le az RxJS-t.** A signal \xE1llapotot reprezent\xE1l, az Observable esem\xE9nyfolyamot. Ahol az *id\u0151* a probl\xE9ma (sorrend, k\xE9sleltet\xE9s, megszak\xEDt\xE1s), ott RxJS a helyes eszk\xF6z.

### Gyakori hib\xE1k
- \`effect()\`-ben \xE1llapotot \xEDrni m\xE1s signalba \xE1llapotterjeszt\xE9s c\xE9lj\xE1b\xF3l \u2192 \`computed\` vagy \`linkedSignal\`.
- \`toSignal\` + \`toObservable\` oda-vissza l\xE1ncol\xE1sa \u2192 \xE1ltal\xE1ban rosszul megfogalmazott adatfolyam jele.
- Nested \`subscribe\` \u2192 higher-order mapping oper\xE1tor (\`switchMap\`, \`concatMap\`).
- Manu\xE1lis \`subscribe\` komponensben \u2192 \`toSignal\`, \`resource\`, vagy \`takeUntilDestroyed()\`.

## 149. Advanced TypeScript Type Patterns in Practice (TypeScript 5+ (satisfies 4.9+, const type param 5.0+)) https://www.typescriptlang.org/docs/handbook/2/types-from-types.html {#typescript-halado-tipusmintak-a-gyakorlatban-typescript-5-satisfies-4-9-const-type-param-5-0}
### \`satisfies\` \u2013 ellen\u0151rz\xE9s a t\xEDpussz\u0171k\xEDt\xE9s elveszt\xE9se n\xE9lk\xFCl
\`\`\`ts
const routes = {
  home: '/',
  flightDetail: (id: number) => \`/flight/\${id}\`,
} satisfies Record<string, string | ((...args: never[]) => string)>;
// routes.home t\xEDpusa '/' marad, nem string
\`\`\`

### Discriminated union \xE1llapotokhoz
\`\`\`ts
type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function render(state: LoadState<Flight[]>) {
  switch (state.status) {
    case 'success': return state.data.length;   // data itt biztosan l\xE9tezik
    case 'error': return state.error;
    default: return 0;
  }
}
\`\`\`
Ez a minta megsz\xFCnteti a \u201Eloading true, de data undefined\u201D t\xEDpus\xFA lehetetlen \xE1llapotokat.

### Exhaustiveness check
\`\`\`ts
function assertNever(x: never): never { throw new Error(\`Unexpected: \${JSON.stringify(x)}\`); }
// switch default \xE1g\xE1ban: return assertNever(state);
\`\`\`
Ha \xFAj vari\xE1nst adunk az unionhoz, a ford\xEDt\xF3 azonnal jelez.

### Branded (nominal) t\xEDpusok
\`\`\`ts
type Brand<T, B extends string> = T & { readonly __brand: B };
type FlightId = Brand<number, 'FlightId'>;
type PassengerId = Brand<number, 'PassengerId'>;
// FlightId-t nem lehet PassengerId hely\xE9re adni
\`\`\`

### Template literal types
\`\`\`ts
type Locale = 'hu' | 'en' | 'de';
type TranslationKey = \`flight.\${'search' | 'detail'}.\${'title' | 'subtitle'}\`;
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
\`\`\`

### Type guard \xE9s assertion function
\`\`\`ts
function isFlight(value: unknown): value is Flight {
  return typeof value === 'object' && value !== null && 'id' in value;
}
function assertDefined<T>(v: T | null | undefined, msg = 'Missing value'): asserts v is T {
  if (v == null) throw new Error(msg);
}
\`\`\`

### Mapped \xE9s conditional t\xEDpusok
\`\`\`ts
type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };
type FormOf<T> = { [K in keyof T]-?: FormControl<NonNullable<T[K]>> };
type Unwrap<T> = T extends Signal<infer U> ? U : T;
\`\`\`

### \`const\` type parameter
\`\`\`ts
function tuple<const T extends readonly unknown[]>(...args: T): T { return args; }
const cols = tuple('id', 'from', 'to');   // readonly ['id','from','to']
\`\`\`

### Runtime valid\xE1ci\xF3 a hat\xE1ron
A t\xEDpus a ford\xEDt\xE1sn\xE1l l\xE9tezik, a szerver v\xE1lasza fut\xE1sid\u0151ben j\xF6n. A \`data\` r\xE9teg hat\xE1r\xE1n valid\xE1ljunk (Zod/Valibot), \xE9s onnant\xF3l b\xEDzzunk a t\xEDpusokban:
\`\`\`ts
const FlightSchema = z.object({ id: z.number(), from: z.string(), to: z.string() });
export type Flight = z.infer<typeof FlightSchema>;
\`\`\`

## 150. SOLID, KISS, YAGNI, DRY in Angular Code (version-agnostic) {#solid-kiss-yagni-dry-az-angular-kodban-verziofuggetlen}
### SOLID
- **S \u2013 Single Responsibility**: a komponens rendereljen, a store tartsa az \xE1llapotot, a kliens besz\xE9ljen a HTTP-vel, a util sz\xE1moljon. Ha egy komponens 300 sor f\xF6l\xE9 n\u0151, jellemz\u0151en t\xF6bb felel\u0151ss\xE9get visz.
- **O \u2013 Open/Closed**: viselked\xE9st b\u0151v\xEDts\xFCnk kompoz\xEDci\xF3val (\`hostDirectives\`, custom signal store feature, interceptor l\xE1nc), ne if-\xE1gak hozz\xE1ad\xE1s\xE1val.
- **L \u2013 Liskov**: ha egy szolg\xE1ltat\xE1snak t\xF6bb implement\xE1ci\xF3ja van (\`StorageService\` \u2192 \`BrowserStorage\` / \`ServerStorage\`), a szerz\u0151d\xE9s maradjon azonos \u2013 ne dobjon v\xE1ratlanul kiv\xE9telt az egyik.
- **I \u2013 Interface Segregation**: sz\u0171k inputfel\xFClet. Egy \u201Edumb\u201D komponens kapjon 3 konkr\xE9t inputot, ne egy 40 mez\u0151s domain objektumot.
- **D \u2013 Dependency Inversion**: \`InjectionToken\` vagy absztrakt oszt\xE1ly ellen injekt\xE1ljunk, ha a megval\xF3s\xEDt\xE1s k\xF6rnyezetf\xFCgg\u0151 vagy tesztben cser\xE9lni kell.

\`\`\`ts
export const FLIGHT_REPOSITORY = new InjectionToken<FlightRepository>('FLIGHT_REPOSITORY');
// prod: HttpFlightRepository, teszt: InMemoryFlightRepository
\`\`\`

### KISS
A legegyszer\u0171bb m\u0171k\xF6d\u0151 megold\xE1s nyer. Egy komponens-lok\xE1lis \`signal()\` gyakran el\xE9g \u2013 nem minden \xE1llapothoz kell store, \xE9s nem minden store-hoz Events API.

### YAGNI
Ne \xE9p\xEDts\xFCnk absztrakci\xF3t egyetlen haszn\xE1lati eset alapj\xE1n. A \u201Egeneric table component minden esethez\u201D tipikusan dr\xE1g\xE1bb, mint h\xE1rom konkr\xE9t t\xE1bl\xE1zat. Az absztrakci\xF3t a **harmadik** ism\xE9tl\u0151d\xE9s indokolja.

### DRY \u2013 \xE9s a hat\xE1rai
A tud\xE1st ne duplik\xE1ljuk (valid\xE1ci\xF3s szab\xE1ly, \xFCzleti sz\xE1m\xEDt\xE1s, API \xFAtvonal). A *v\xE9letlen\xFCl hasonl\xF3* k\xF3dot viszont ne vonjuk \xF6ssze: k\xE9t domain hasonl\xF3 \u0171rlapja k\xFCl\xF6n fejl\u0151dik tov\xE1bb, \xE9s a k\xF6z\xF6s absztrakci\xF3 param\xE9terek dzsungel\xE9be fordul. A rossz absztrakci\xF3 dr\xE1g\xE1bb, mint a duplik\xE1ci\xF3.

### Vertical Slice + Clean Architecture \xF6sszek\xF6t\xE9se
\`\`\`
feature (UI, route)          \u2192 csak lefel\xE9 h\xEDv
  ui (prezent\xE1ci\xF3s)
    data (store, repository) \u2192 interf\xE9sz a domain fel\xE9
      domain/util (tiszta \xFCzleti szab\xE1lyok, t\xEDpusok, mapping)
\`\`\`
A domain r\xE9teg **ne import\xE1ljon Angulart** \u2013 \xEDgy egys\xE9gtesztelhet\u0151 keretrendszer n\xE9lk\xFCl, \xE9s a keretrendszer-v\xE1lt\xE1s sem \xE9rinti.

## 151. Common Design Patterns in Angular (v2+) https://angular.dev/guide/di {#gyakran-hasznalt-design-patternek-angularban-v2}
| Pattern | Angular megjelen\xE9s | Mikor |
| --- | --- | --- |
| Facade | \`UsersFacade\` a store el\u0151tt | store bels\u0151 szerkezet\xE9nek elrejt\xE9se |
| Repository | \`FLIGHT_REPOSITORY\` token + HTTP implement\xE1ci\xF3 | adatel\xE9r\xE9s cser\xE9lhet\u0151v\xE9 t\xE9tele, tesztel\xE9s |
| Adapter | DTO \u2192 domain mapping a \`data\` r\xE9tegben | backend s\xE9ma sziv\xE1rg\xE1s\xE1nak megakad\xE1lyoz\xE1sa |
| Strategy | \`PreloadingStrategy\`, \`TitleStrategy\`, \`ErrorHandler\` | pluggable viselked\xE9s |
| Decorator | \`hostDirectives\`, HTTP interceptor l\xE1nc | viselked\xE9s hozz\xE1ad\xE1sa m\xF3dos\xEDt\xE1s n\xE9lk\xFCl |
| Observer | Signal / Observable | reakt\xEDv adatfolyam |
| Composite | rekurz\xEDv tree komponens | hierarchikus UI |
| Command | Events API event / NgRx action | audit\xE1lhat\xF3, visszaj\xE1tszhat\xF3 m\u0171velet |
| State | discriminated union \`LoadState<T>\` | lehetetlen \xE1llapotok kiz\xE1r\xE1sa |
| Builder | \`NonNullableFormBuilder\`, s\xE9ma-\xE9p\xEDt\xE9s | \xF6sszetett objektum l\xE9p\xE9senk\xE9nti fel\xE9p\xEDt\xE9se |
| Singleton | \`providedIn: 'root'\` | alkalmaz\xE1sszint\u0171 szolg\xE1ltat\xE1s |
| Factory | \`useFactory\`, \`signalStoreFeature\` | konfigur\xE1ci\xF3t\xF3l f\xFCgg\u0151 l\xE9trehoz\xE1s |
| Null Object | \`NoopLogger\`, \`provideNoopAnimations()\` | optional f\xFCgg\u0151s\xE9g egyszer\u0171s\xEDt\xE9se |

### Container / Presentational (Smart / Dumb)
\`\`\`ts
// container: tudja, honnan j\xF6n az adat
@Component({
  selector: 'app-flight-search-page',
  imports: [FlightList],
  template: \`<app-flight-list [flights]="flights()" (select)="onSelect($event)" />\`,
})
export class FlightSearchPage {
  private readonly store = inject(FlightStore);
  protected readonly flights = this.store.flights;
  protected onSelect(f: Flight): void { this.store.select(f.id); }
}

// presentational: csak inputot kap, outputot ad \u2013 nincs DI, k\xF6nnyen tesztelhet\u0151
@Component({ selector: 'app-flight-list', /* ... */ })
export class FlightList {
  readonly flights = input.required<Flight[]>();
  readonly select = output<Flight>();
}
\`\`\`
Ez a legnagyobb hozad\xE9k\xFA szerkezeti minta: a \`ui\` r\xE9teg \xFAjrahasznos\xEDthat\xF3 \xE9s trivi\xE1lisan tesztelhet\u0151, a \`feature\` r\xE9teg pedig egy helyen d\xF6nt az adatr\xF3l.

## 152. Code Quality and Tooling \u2013 ESLint Flat Config, Prettier, Husky (angular-eslint 18+ (flat config)) https://github.com/angular-eslint/angular-eslint {#kodminoseg-es-tooling-eslint-flat-config-prettier-husky-angular-eslint-18-flat-config}
### ESLint flat config
\`\`\`js
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
\`\`\`
A template accessibility konfigur\xE1ci\xF3 ingyen elkap egy sor a11y hib\xE1t (\`alt\` n\xE9lk\xFCli k\xE9p, kattinthat\xF3 \`div\`, \`label\` n\xE9lk\xFCli input).

### Prettier + git hookok
\`\`\`bash
npm i -D prettier husky lint-staged @commitlint/{cli,config-conventional}
npx husky init
\`\`\`
\`\`\`json
// package.json
"lint-staged": {
  "*.{ts,html,scss,json,md}": ["prettier --write"],
  "*.ts": ["eslint --fix"]
}
\`\`\`
\`\`\`
# .husky/pre-commit
npx lint-staged

# .husky/commit-msg
npx commitlint --edit "$1"
\`\`\`
A conventional commit (\`feat:\`, \`fix:\`, \`chore:\`) nem formalit\xE1s: ebb\u0151l gener\xE1lhat\xF3 a changelog \xE9s a semantic version.

### Egy\xE9b
- **strict TypeScript** (l\xE1sd az els\u0151 szekci\xF3t) \u2013 a legjobb megt\xE9r\xFCl\xE9s\u0171 lint.
- **SonarQube / SonarCloud** \u2013 duplik\xE1ci\xF3, kognit\xEDv komplexit\xE1s, security hotspot.
- **Knip / ts-prune** \u2013 halott k\xF3d \xE9s nem haszn\xE1lt export felder\xEDt\xE9se.
- **Renovate / Dependabot** \u2013 automatikus dependency PR-ok, csoportos\xEDtott Angular friss\xEDt\xE9sekkel.

## 153. CI/CD Pipeline for Angular Monorepos (Nx 19+ \xB7 version-agnostic) https://nx.dev/ci/intro/ci-with-nx {#ci-cd-pipeline-angular-monorepohoz-nx-19-verziofuggetlen}
\`\`\`yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }          # Nx affected-hez kell a t\xF6rt\xE9net
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npx nx affected -t lint test build --parallel=3
      - run: npx nx affected -t e2e --parallel=1
      - uses: actions/upload-artifact@v4
        if: failure()
        with: { name: playwright-report, path: playwright-report/ }
\`\`\`

### Elvek
- **Affected-only**: monorep\xF3ban ne buildelj\xFCnk mindent minden PR-on.
- **Cache**: npm cache + Nx (remote) cache. Ez a legnagyobb egyszeri gyors\xEDt\xE1s.
- **Fail fast sorrend**: format \u2192 lint \u2192 typecheck \u2192 unit \u2192 build \u2192 e2e.
- **Budget \xE9s lighthouse ellen\u0151rz\xE9s** a build ut\xE1n, nem k\xFCl\xF6n manu\xE1lis l\xE9p\xE9sk\xE9nt.
- **Deploy el\u0151tti smoke teszt** a val\xF3di artefaktum ellen, nem dev serveren.
- **Verzi\xF3friss\xEDt\xE9s PR-k\xE9nt**: \`ng update\` egy-egy f\u0151verzi\xF3val, k\xFCl\xF6n branchen, \`--dry-run\` el\u0151ellen\u0151rz\xE9ssel.
- **K\xF6rnyezetf\xFCgg\u0151 konfigur\xE1ci\xF3** ne build-time legyen (l\xE1sd Initializerek) \u2013 \xEDgy egy artefaktum promot\xE1lhat\xF3 dev \u2192 staging \u2192 prod \xFAtvonalon.

### Release
\`\`\`bash
npx nx release          # verzi\xF3z\xE1s, changelog, tag, publish egy l\xE9p\xE9sben
\`\`\`
Vagy \`semantic-release\` a conventional commitokb\xF3l. A k\xE9zzel \xEDrt changelog n\xE9h\xE1ny h\xF3nap ut\xE1n mindig elavul.

## 154. Angular Style Guide 2026 \u2013 Naming and File Structure (v20+ style guide) https://angular.dev/style-guide {#angular-style-guide-2026-elnevezes-es-fajlstruktura-v20-style-guide}
Az Angular style guide 2025-ben jelent\u0151sen egyszer\u0171s\xF6d\xF6tt. A r\xE9gi \`*.component.ts\` / \`*.service.ts\` suffixek **m\xE1r nem javasoltak**, \xE9s a CLI sem gener\xE1lja \u0151ket.

| R\xE9gi | \xDAj |
| --- | --- |
| \`flight-search.component.ts\` \u2192 \`FlightSearchComponent\` | \`flight-search.ts\` \u2192 \`FlightSearch\` |
| \`flight.service.ts\` \u2192 \`FlightService\` | \`flight-client.ts\` \u2192 \`FlightClient\` (besz\xE9l\u0151 n\xE9v) |
| \`flight.module.ts\` | nincs \u2013 standalone |
| \`flight.pipe.ts\` \u2192 \`FlightPipe\` | \`format-flight.ts\` \u2192 \`FormatFlight\` |

### Aj\xE1nlott konvenci\xF3k
- F\xE1jln\xE9v **kebab-case**, oszt\xE1lyn\xE9v **PascalCase**, a f\xE1jln\xE9v t\xFCkr\xF6zze az oszt\xE1lynevet.
- A t\xEDpust ne a suffix, hanem a **besz\xE9l\u0151 n\xE9v** hordozza: \`FlightClient\`, \`FlightStore\`, \`FlightSearchPage\`, \`FlightCard\`.
- Egy f\xE1jl = egy publikus konstrukci\xF3.
- Sablon \xE9s st\xEDlus k\xFCl\xF6n f\xE1jlba, ha 15\u201320 sor felett van; inline alatta.
- Tagsorrend oszt\xE1lyon bel\xFCl: injekt\xE1lt f\xFCgg\u0151s\xE9gek \u2192 state signalok \u2192 computed \u2192 lifecycle \u2192 publikus met\xF3dusok \u2192 priv\xE1t met\xF3dusok.
- \`private readonly\` az injekt\xE1lt f\xFCgg\u0151s\xE9geknek, \`protected readonly\` annak, amit a sablon haszn\xE1l (\`public\` nem kell).
- \`_\` prefix csak a store bels\u0151 (\`withProps\`) tagjain\xE1l, ahol a konvenci\xF3 a priv\xE1t jelent\xE9st hordozza.
- Route-f\xE1jl: \`<domain>.routes.ts\`, default exporttal, ha lazy-loadolt.

### Modern komponens-alapminta
\`\`\`ts
@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.scss',
  // v22-t\u0151l OnPush a default \u2013 nem kell ki\xEDrni
})
export class FlightCard {
  readonly flight = input.required<Flight>();
  readonly selected = output<Flight>();
  protected readonly isDelayed = computed(() => this.flight().delayed);
}
\`\`\`
Amit m\xE1r nem \xEDrunk: \`standalone: true\` (v19+ default), \`changeDetection: OnPush\` (v22+ default), \`@Input()\`/\`@Output()\` decorator (helyette \`input()\`/\`output()\`), konstruktor-injekt\xE1l\xE1s (helyette \`inject()\`).

## 155. SCSS Architecture, Tailwind and Design Tokens (CSS/SCSS \xB7 Tailwind 3\u20134) https://angular.dev/guide/tailwind {#scss-architektura-tailwind-es-design-tokenek-css-scss-tailwind-3-4}
### R\xE9tegek
\`\`\`
styles/
  tokens/      # design tokenek CSS custom property-k\xE9nt
  base/        # reset, tipogr\xE1fia, alap elemst\xEDlus
  utilities/   # mixinek, f\xFCggv\xE9nyek (nincs kimenet)
  themes/      # light / dark / brand
styles.scss    # csak importok
\`\`\`

### Tokenek CSS v\xE1ltoz\xF3k\xE9nt, ne SCSS v\xE1ltoz\xF3k\xE9nt
\`\`\`scss
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
\`\`\`
A CSS custom property fut\xE1sid\u0151ben cser\xE9lhet\u0151 (t\xE9mav\xE1lt\xE1s reload n\xE9lk\xFCl) \xE9s \xF6r\xF6kl\u0151dik a komponenshat\xE1rokon \xE1t \u2013 az SCSS v\xE1ltoz\xF3 ford\xEDt\xE1skor elt\u0171nik.

### Komponensst\xEDlus
\`\`\`scss
:host {
  display: block;
  padding: var(--space-2);
  background: var(--color-surface);
  color: var(--color-on-surface);
}
:host([data-variant='compact']) { padding: 0; }
\`\`\`
- \`::ng-deep\` **ker\xFClend\u0151** \u2013 deprecated \xE9s sziv\xE1rog. Helyette: CSS custom property a komponens API-jak\xE9nt, vagy \`ViewEncapsulation.None\` tudatosan, csak k\xF6nyvt\xE1r-szint\u0171 alapst\xEDlushoz.
- Modern SCSS: \`@use\` / \`@forward\`, nem \`@import\` (ut\xF3bbi megsz\u0171nik).
- \`@container\` query-k komponens-szint\u0171 reszponzivit\xE1shoz a media query helyett.

### Tailwind Angularral
\`\`\`js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: { colors: { primary: 'var(--color-primary)' } } },
};
\`\`\`
- A design tokeneket a Tailwind t\xE9m\xE1ba is CSS v\xE1ltoz\xF3k\xE9nt k\xF6ss\xFCk be \u2013 \xEDgy egy igazs\xE1gforr\xE1s van.
- A \`content\` glob tartalmazza a \`.ts\`-t is az inline sablonok miatt.
- Tailwind oszt\xE1ly **nem** hatol \xE1t a komponenshat\xE1ron: ha a sz\xFCl\u0151 Tailwind oszt\xE1lyt ad a gyerek bels\u0151 elem\xE9re, az emulated encapsulation miatt nem \xE9rv\xE9nyes\xFCl. A gyerek expon\xE1ljon vari\xE1nst inputk\xE9nt vagy CSS v\xE1ltoz\xF3t.
- Vegyes strat\xE9gia j\xF3l m\u0171k\xF6dik: Tailwind az elrendez\xE9sre, komponens-SCSS a komplex, \xE1llapotf\xFCgg\u0151 st\xEDlusra.

## 156. PWA, Service Worker and Web Workers (@angular/pwa v14+ \xB7 provideServiceWorker v15+) https://angular.dev/ecosystem/service-workers {#pwa-service-worker-es-web-workers-angular-pwa-v14-provideserviceworker-v15}
### Service worker
\`\`\`bash
ng add @angular/pwa
\`\`\`
\`\`\`ts
provideServiceWorker('ngsw-worker.js', {
  enabled: !isDevMode(),
  registrationStrategy: 'registerWhenStable:30000',
});
\`\`\`
\`\`\`json
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
\`\`\`
Strat\xE9gia: \`freshness\` (network-first) v\xE1ltoz\xF3 adatra, \`performance\` (cache-first) statikus referenciaadatra.

### Friss\xEDt\xE9skezel\xE9s
\`\`\`ts
private readonly updates = inject(SwUpdate);

constructor() {
  this.updates.versionUpdates
    .pipe(filter((e): e is VersionReadyEvent => e.type === 'VERSION_READY'), takeUntilDestroyed())
    .subscribe(() => this.showReloadPrompt());
}
\`\`\`
En\xE9lk\xFCl a felhaszn\xE1l\xF3 napokig r\xE9gi verzi\xF3t futtathat \u2013 ez a leggyakoribb \u201En\xE1lam nem az van\u201D hibaforr\xE1s PWA-ban.

### Web Worker
\`\`\`bash
ng generate web-worker data-processor
\`\`\`
\`\`\`ts
const worker = new Worker(new URL('./data-processor.worker', import.meta.url));
worker.onmessage = ({ data }) => this.result.set(data);
worker.postMessage(largeDataset);
\`\`\`
Haszn\xE1ljuk nagy adathalmaz feldolgoz\xE1s\xE1hoz, CSV/Excel parse-hoz, titkos\xEDt\xE1shoz, k\xE9pfeldolgoz\xE1shoz \u2013 minden olyanhoz, ami k\xFCl\xF6nben blokkoln\xE1 a f\u0151 sz\xE1lat \xE9s rontan\xE1 az INP-t. A workerben nincs DOM \xE9s nincs Angular DI.

## 157. AI-Assisted Development in Angular (MCP v21+ \xB7 Web MCP \xE9s agent skillek v22+) https://angular.dev/ai {#ai-tamogatott-fejlesztes-angularban-mcp-v21-web-mcp-es-agent-skillek-v22}
### Angular MCP szerver
Az Angular CLI experimental MCP szervert ad, amivel az AI asszisztens **verzi\xF3tudatos, val\xF3s** Angular inform\xE1ci\xF3t kap a betan\xEDtott eml\xE9kei helyett:
\`\`\`bash
ng mcp
\`\`\`
Eszk\xF6z\xF6k: \`ai_tutor\`, \`find_examples\`, \`get_best_practices\`, \`list_projects\`, \`onpush_zoneless_migration\`, \`search_documentation\`.

### AI agent skillek
- **angular-developer** \u2013 k\xF3d\xEDr\xE1s \xE9s architekt\xFAra, a projekt Angular verzi\xF3j\xE1hoz illeszkedve.
- **Angular New App** \u2013 \xFAj alkalmaz\xE1s fel\xE1ll\xEDt\xE1sa \`ng new\`-vel, modern alapbe\xE1ll\xEDt\xE1sokkal.

### Web MCP \u2013 az alkalmaz\xE1s mint eszk\xF6z AI \xFCgyn\xF6k\xF6k sz\xE1m\xE1ra
\`\`\`ts
export const provideProductSearchWebMcp = () =>
  provideWebMcpTools([{
    name: 'search_products',
    description: 'Search for products by a keyword',
    inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
    execute: async ({ query }) => {
      const products = await firstValueFrom(inject(ProductService).searchProducts({ term: query as string }));
      return { content: [{ type: 'text', text: \`Found \${products.length} products\` }] };
    },
  }]);
\`\`\`
\xCDgy a b\xF6ng\xE9sz\u0151-\xFCgyn\xF6k nem a DOM-ot tal\xE1lgatja, hanem struktur\xE1lt, tipiz\xE1lt m\u0171veleteket h\xEDv.

### Agentic UI Hashbrownnal
\`\`\`ts
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
\`\`\`
A modell nem szabad HTML-t gener\xE1l, hanem a **mi komponenseinket** v\xE1lasztja ki \xE9s param\xE9terezi (structured output) \u2013 \xEDgy a design system \xE9s az akad\xE1lymentess\xE9g megmarad. A \`chatResource\` tool callinggal, a \`uiChatResource\` generat\xEDv UI-jal m\u0171k\xF6dik.

### Gyakorlati elvek
- API kulcs **soha** a kliensben \u2013 proxyzzunk BFF-en \xE1t.
- A modell kimenete nem megb\xEDzhat\xF3 bemenet: valid\xE1ljuk (Zod), \xE9s \xEDr\xE1si m\u0171velet el\u0151tt k\xE9rj\xFCnk meger\u0151s\xEDt\xE9st.
- \u201EDumb komponens + smart wrapper\u201D: az AI-nak expon\xE1lt komponens maradjon prezent\xE1ci\xF3s, a mell\xE9khat\xE1s a wrapperben legyen.
- Few-shot / one-shot p\xE9ld\xE1k ad\xE1sa jelent\u0151sen jav\xEDtja a struktur\xE1lt kimenet stabilit\xE1s\xE1t.
- Determinisztikus feladatot ne adjunk modellnek: sz\u0171r\xE9s, rendez\xE9s, sz\xE1m\xEDt\xE1s maradjon k\xF3dban.

## 158. Future Directions (v23+ (bejelentett ir\xE1ny)) https://angular.dev/roadmap {#jovobeli-iranyok-v23-bejelentett-irany}
### Selectorless komponensek
A c\xE9l a \`imports\` t\xF6mb \xE9s a szelektor-alap\xFA felold\xE1s kiv\xE1lt\xE1sa: a komponenst k\xF6zvetlen\xFCl az oszt\xE1lynev\xE9vel haszn\xE1ljuk a sablonban, TypeScript importtal.
\`\`\`html
<FlightCard [flight]="flight()" />
\`\`\`
El\u0151ny\xF6k: automatikus import az IDE-b\u0151l, nincs \u201Eelfelejtett import\u201D hiba, jobb tree-shaking \xE9s tooling.

### Streamed server-side rendering
A szerver nem v\xE1rja meg a teljes HTML elk\xE9sz\xFCl\xE9s\xE9t, hanem darabokban streameli. Ez \xE9rdemben jav\xEDtja a TTFB-t \xE9s az LCP-t adatintenz\xEDv oldalakon.

### Signal integr\xE1ci\xF3k
A keretrendszer tov\xE1bbi r\xE9szei v\xE1lnak signal-alap\xFAv\xE1 (router API-k m\xE1r megkezdt\xE9k), \xE9s a signal integr\xE1ci\xF3k m\xE9ly\xFClnek a formok, a resource-ok \xE9s a DI k\xF6r\xFCl.

### Amire \xE9rdemes k\xE9sz\xFClni
- A zone.js-alap\xFA k\xF3d v\xE9gleges kivezet\xE9se (zoneless a default ir\xE1ny).
- A \`@angular/animations\` helyett \`animate.enter\` / \`animate.leave\` \xE9s nat\xEDv CSS.
- Reactive Forms \u2192 Signal Forms fokozatos \xE1t\xE1ll\xE1s (\`SignalFormControl\` a h\xEDd).
- Vitest mint egyetlen tesztfut\xF3; Karma megsz\u0171nt.
- Az AI-integr\xE1ci\xF3 nem k\xFCl\xF6n\xE1ll\xF3 funkci\xF3, hanem a fejleszt\u0151i munkafolyamat \xE9s a fut\xE1sidej\u0171 fel\xFClet r\xE9sze is lesz.

## 159. Adoption and Version Upgrade Checklist (v14 \u2192 v22) https://angular.dev/update-guide {#bevezetesi-es-verziofrissitesi-checklist-v14-v22}
### Friss\xEDt\xE9s (verzi\xF3r\xF3l verzi\xF3ra, sosem \xE1tl\xE9pve)
1. \`git checkout -b upgrade/vNN\`, tiszta working tree.
2. \`ng update --dry-run\` \u2192 hat\xE1s \xE1ttekint\xE9se.
3. \`ng update @angular/core@NN @angular/cli@NN\` (egy f\u0151verzi\xF3).
4. Schematics migr\xE1ci\xF3k lefuttat\xE1sa, a gener\xE1lt diff **\xE1tolvas\xE1sa**.
5. \`npm audit\` + peer dependency konfliktusok kezel\xE9se (Material, NgRx, Nx egy\xFCtt friss\xFCl).
6. \`nx migrate latest\` \u2192 \`nx migrate --run-migrations\` (Nx workspace eset\xE9n).
7. Deprecation warningok a build/log kimenetb\u0151l \u2013 ezek a k\xF6vetkez\u0151 verzi\xF3 hib\xE1i.
8. \`ng lint && ng test && ng build && e2e\` z\xF6ld.
9. Bundle m\xE9ret \xE9s Core Web Vitals \xF6sszevet\xE9se a friss\xEDt\xE9s el\u0151ttivel.
10. Merge, majd a k\xF6vetkez\u0151 f\u0151verzi\xF3.

### Moderniz\xE1l\xE1si sorrend megl\xE9v\u0151 k\xF3db\xE1zison
1. **Strict TypeScript + strictTemplates** \u2013 a legt\xF6bb rejtett hib\xE1t ez hozza felsz\xEDnre.
2. **Standalone** migr\xE1ci\xF3 (\`ng generate @angular/core:standalone\`).
3. **Control flow** migr\xE1ci\xF3 \`@if\`/\`@for\`/\`@switch\`-re (\`ng generate @angular/core:control-flow\`).
4. **inject()** migr\xE1ci\xF3 konstruktor-injekt\xE1l\xE1s helyett.
5. **Signal inputs/outputs/queries** (\`ng generate @angular/core:signals\`).
6. **OnPush mindenhol**, majd \xE1llapot signalokra.
7. **Zoneless** (\`ng generate @angular/core:zoneless\`) \u2013 utols\xF3 l\xE9p\xE9s, mert a 3rd party libek is \xE9rintettek.
8. **Vertik\xE1lis szeletek + Sheriff/Nx boundary lintel\xE9s** bevezet\xE9se.
9. **Signal store** a feature state-re, \`resource\` az adatbet\xF6lt\xE9sre.
10. **Vitest** migr\xE1ci\xF3, majd az E2E lefedetts\xE9g rendez\xE9se.

### \xDAj projekt (2026) alapkonfigur\xE1ci\xF3
\`\`\`ts
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
\`\`\`
Ehhez: \`strict: true\` + \`strictTemplates\`, ESLint flat config + template accessibility + Sheriff, Prettier + Husky + commitlint, Vitest + Playwright, vertik\xE1lis domain-strukt\xFAra, design tokenek CSS custom property-k\xE9nt, bundle budget CI-ben.

### Amit ne vezess\xFCnk be reflexb\u0151l
Micro-frontend egy csapatn\xE1l, glob\xE1lis NgRx Store lok\xE1lis UI \xE1llapotra, Events API egyetlen store-hoz, generikus \u201Eminden esetre\u201D komponens-absztrakci\xF3, \`effect()\` \xE1llapotterjeszt\xE9sre. Mindegyik ugyanaz a hiba: a megold\xE1s komplexit\xE1sa meghaladja a probl\xE9m\xE1\xE9t.

## 160. Secondary Routing \u2013 Named Outlets and Auxiliary Routes (v2+ \xB7 withComponentInputBinding v16+ \xB7 routerOutletData v19+) https://angular.dev/guide/routing/show-routes-with-outlets {#secondary-routing-named-outletek-es-auxiliary-route-ok-v2-withcomponentinputbinding-v16-routeroutletdata-v19}
A **secondary (auxiliary) routing** azt jelenti, hogy egy n\xE9zeten **egyszerre t\xF6bb, egym\xE1st\xF3l f\xFCggetlen** route akt\xEDv. A \`<router-outlet>\` alapb\xF3l n\xE9vtelen (\`primary\`), de t\xF6bb, **n\xE9vvel ell\xE1tott** outlet is elhelyezhet\u0151 ugyanabban a sablonban, \xE9s mindegyik saj\xE1t route-ot rendereli, saj\xE1t \xE9letciklussal \xE9s saj\xE1t URL-szegmenssel.

Tipikus haszn\xE1lat: \xE1lland\xF3an l\xE1that\xF3 oldals\xE1v/chat panel, r\xE9szletez\u0151 panel a lista mellett, mod\xE1lis dial\xF3gus routolhat\xF3 URL-lel (deep linkelhet\u0151 modal), t\xF6bb egym\xE1s melletti widget-ter\xFClet.

### Outletek defini\xE1l\xE1sa
\`\`\`html
<!-- app.html -->
<router-outlet />                        <!-- primary -->
<router-outlet name="sidebar" />
<router-outlet name="modal" />
\`\`\`

### Route-ok hozz\xE1rendel\xE9se az outlethez
\`\`\`ts
export const routes: Routes = [
  { path: 'flights', component: FlightSearch },                       // primary
  { path: 'help', component: HelpPanel, outlet: 'sidebar' },
  { path: 'filters', component: FilterPanel, outlet: 'sidebar' },
  { path: 'flight/:id', component: FlightDialog, outlet: 'modal' },
];
\`\`\`
Az \`outlet\` property n\xE9lk\xFCl a route a primary outletbe ker\xFCl.

### Navig\xE1ci\xF3 \u2013 az URL szintaxisa
A secondary route-ok az URL-ben **z\xE1r\xF3jeles blokkban** jelennek meg, \`outletName:path\` form\xE1ban:

\`\`\`
/flights(sidebar:help)
/flights(sidebar:filters//modal:flight/42)
\`\`\`
A \`//\` t\xF6bb p\xE1rhuzamos secondary outlet elv\xE1laszt\xF3ja.

\`\`\`ts
// megnyit\xE1s
this.router.navigate([{ outlets: { sidebar: ['help'] } }]);

// primary \xE9s secondary egyszerre
this.router.navigate([{ outlets: { primary: ['flights'], sidebar: ['filters'] } }]);

// bez\xE1r\xE1s: null az outletre
this.router.navigate([{ outlets: { sidebar: null } }]);
\`\`\`
\`\`\`html
<a [routerLink]="[{ outlets: { sidebar: ['help'] } }]">S\xFAg\xF3</a>
<a [routerLink]="[{ outlets: { sidebar: null } }]">S\xFAg\xF3 bez\xE1r\xE1sa</a>
\`\`\`

### Relat\xEDv navig\xE1ci\xF3 secondary outletben
\`\`\`ts
this.router.navigate([{ outlets: { modal: ['flight', id] } }], {
  relativeTo: this.route,          // a jelenlegi route-hoz k\xE9pest
  queryParamsHandling: 'preserve', // a query param\xE9terek megmaradnak
});
\`\`\`

### Routolhat\xF3 modal minta (deep linkelhet\u0151 dial\xF3gus)
\`\`\`ts
{
  path: 'flight/:id',
  outlet: 'modal',
  component: FlightDialog,
  // a modal bez\xE1r\xE1sa = navig\xE1ci\xF3 outlets: { modal: null }-lal
}
\`\`\`
El\u0151nye a \`MatDialog\`/CDK Dialog megnyit\xE1s\xE1val szemben: a dial\xF3gus \xE1llapota az URL-ben van, teh\xE1t megoszthat\xF3, bookmarkolhat\xF3, a b\xF6ng\xE9sz\u0151 vissza gombja bez\xE1rja, \xE9s SSR-n\xE9l szerveroldalon is renderelhet\u0151.

### Amire figyelni kell
- **Guardok \xE9s resolverek** outletenk\xE9nt k\xFCl\xF6n futnak: a secondary route saj\xE1t \`canActivate\`/\`resolve\` l\xE1ncot kap.
- **Lazy loading** m\u0171k\xF6dik secondary outleten is (\`loadChildren\`), de a chunk csak az outlet aktiv\xE1l\xE1sakor t\xF6lt\u0151dik.
- Az URL z\xE1r\xF3jeles form\xE1ja **nem sz\xE9p**: publikus, SEO-fontos oldalakon a secondary outlet nem ide\xE1lis; bels\u0151 alkalmaz\xE1sokban viszont kifejezetten hasznos.
- A \`RouterLinkActive\` secondary outletn\xE9l is m\u0171k\xF6dik, de az \`exact\` illeszt\xE9sn\xE9l a teljes URL-t (a z\xE1r\xF3jeles blokkot is) figyeli.
- Ne haszn\xE1ljunk sok p\xE1rhuzamos outletet: 1\u20132 secondary outlet f\xF6l\xF6tt az URL \xE9s a state kezel\xE9se nehezen k\xF6vethet\u0151v\xE9 v\xE1lik \u2013 ilyenkor a state-et ink\xE1bb store-ban tartjuk.
- \`withComponentInputBinding()\` (v16+) a secondary outlet route param\xE9tereit is inputk\xE9nt adja a komponensnek.
- A \`ROUTER_OUTLET_DATA\` (v19+) \xE9s a \`[routerOutletData]\` n\xE9vvel ell\xE1tott outletn\xE9l is haszn\xE1lhat\xF3.

## 161. Route Patterns in Practice \u2013 Wildcard, Redirect, UrlMatcher, Resolve (v2+ \xB7 canMatch v14.2+ \xB7 functional resolver v15+ \xB7 f\xFCggv\xE9ny-redirect v18+) https://angular.dev/guide/routing/define-routes {#route-mintak-a-gyakorlatban-wildcard-redirect-urlmatcher-resolve-v2-canmatch-v14-2-funkcionalis-resolver-v15-fuggveny-redirect-v18}
### Route sorrend \xE9s wildcard
A router **fentr\u0151l lefel\xE9, az els\u0151 illeszked\xE9sig** vizsg\xE1lja a route-okat, ez\xE9rt a sorrend jelent\u0151s\xE9ggel b\xEDr. A wildcard mindig utols\xF3:
\`\`\`ts
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flights' },
  { path: 'flights', loadChildren: () => import('./flights/flights.routes') },
  { path: 'not-found', component: NotFound },
  { path: '**', component: NotFound },      // wildcard: minden nem illeszked\u0151 URL
];
\`\`\`
- \`pathMatch: 'full'\` \u2013 a **teljes** URL-nek egyeznie kell. \xDCres path + redirect eset\xE9n k\xF6telez\u0151, k\xFCl\xF6nben v\xE9gtelen ciklus keletkezik.
- \`pathMatch: 'prefix'\` (default) \u2013 el\xE9g, ha az URL a path-tal kezd\u0151dik.
- A \`**\` a lazy-loadolt gyerek route-okon bel\xFCl is haszn\xE1lhat\xF3 a feature-specifikus 404-hez.

### Funkcion\xE1lis redirect (v18+)
\`\`\`ts
{
  path: 'legacy/:id',
  redirectTo: (info) => \`/flights/\${info.params['id']}\`,
},
{
  path: 'dashboard',
  redirectTo: () => (inject(AuthStore).isAdmin() ? '/admin' : '/home'),
},
\`\`\`
Aszinkron redirect (v20+): a f\xFCggv\xE9ny \`Promise\`/\`Observable\`-t is visszaadhat.

### RedirectCommand guardb\xF3l (v18+)
\`\`\`ts
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
\`\`\`

### Egyedi UrlMatcher
Ha a path nem \xEDrhat\xF3 le sztringgel (pl. v\xE1ltoz\xF3 szegmenssz\xE1m, regex-illeszt\xE9s):
\`\`\`ts
export function versionMatcher(segments: UrlSegment[]): UrlMatchResult | null {
  if (segments.length >= 1 && /^v\\d+$/.test(segments[0].path)) {
    return { consumed: [segments[0]], posParams: { version: segments[0] } };
  }
  return null;
}

{ matcher: versionMatcher, component: DocsPage }
\`\`\`

### canMatch \u2013 felt\xE9teles route-illeszt\xE9s (v14.2+)
A \`canMatch\` a \`canActivate\`-tel szemben **nem tiltja**, hanem \u201E\xE1tl\xE9pi\u201D a route-ot, \xEDgy a router tov\xE1bbmegy a k\xF6vetkez\u0151 illeszked\xE9sre. Ez a feature-flag \xE9s A/B kiszolg\xE1l\xE1s helyes eszk\xF6ze:
\`\`\`ts
{ path: 'checkout', component: NewCheckout, canMatch: [() => inject(Flags).newCheckout()] },
{ path: 'checkout', component: LegacyCheckout },
\`\`\`

### Resolve t\xF6bb szolg\xE1ltat\xE1sb\xF3l
Funkcion\xE1lis resolver (v15+), t\xF6bb adat p\xE1rhuzamos bet\xF6lt\xE9s\xE9vel:
\`\`\`ts
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
\`\`\`
\`\`\`ts
// olvas\xE1s \u2013 withComponentInputBinding() mellett inputk\xE9nt is megkaphat\xF3
readonly data = input.required<FlightPageData>();
\`\`\`
K\xFCl\xF6n kulcsokra bontva a router **p\xE1rhuzamosan** futtatja \u0151ket, \xE9s csak akkor navig\xE1l, ha mindegyik befejez\u0151d\xF6tt:
\`\`\`ts
resolve: { flight: flightResolver, airports: airportsResolver }
\`\`\`

**Mikor ne haszn\xE1ljunk resolvert:** ha a bet\xF6lt\xE9s lass\xFA, a resolver a teljes navig\xE1ci\xF3t blokkolja, \xE9s a felhaszn\xE1l\xF3 \u201Emegakadt\u201D appot l\xE1t. Ilyenkor navig\xE1ljunk azonnal, \xE9s a komponensben \`resource()\`/\`httpResource()\` t\xF6ltse be az adatot skeleton \xE1llapottal. A resolver ott indokolt, ahol az adat n\xE9lk\xFCl a route \xE9rtelmezhetetlen (pl. jogosults\xE1gi kontextus), vagy ahol SEO miatt kell a szerveroldali bet\xF6lt\xE9s.

### canDeactivate \u2013 nem mentett m\xF3dos\xEDt\xE1s v\xE9delme
\`\`\`ts
export interface HasUnsavedChanges { hasUnsavedChanges(): boolean; }

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) =>
  !component.hasUnsavedChanges() || confirm('Nem mentett m\xF3dos\xEDt\xE1sok vannak. Biztosan elnavig\xE1lsz?');

{ path: 'flight/:id/edit', component: FlightEdit, canDeactivate: [unsavedChangesGuard] }
\`\`\`
- A guard **els\u0151 param\xE9tere a komponensp\xE9ld\xE1ny** \u2013 \xEDgy k\xF6zvetlen\xFCl k\xE9rdezhet\u0151 az \u0171rlap \xE1llapota (\`form().dirty()\`).
- A guardot arra a route-ra kell tenni, **amelyet elhagyunk**. Ha egy eg\xE9sz feature-t v\xE9d\xFCnk, a sz\xFCl\u0151 route-ra tessz\xFCk, \xE9s a \`canDeactivateChild\` helyett a gyerekek k\xF6z\xF6tti navig\xE1ci\xF3ra is figyelj\xFCnk (a sz\xFCl\u0151 guard nem fut le gyerekek k\xF6z\xF6tti v\xE1lt\xE1sn\xE1l).
- B\xF6ng\xE9sz\u0151-szint\u0171 elnavig\xE1l\xE1sra (tab bez\xE1r\xE1s, reload) k\xFCl\xF6n \`beforeunload\` kezel\u0151 kell \u2013 a router guard ott nem fut.

## 162. Preloading Strategies and Network-Aware Preloading (v2+ \xB7 withPreloading v15+ \xB7 @defer prefetch v17+) https://angular.dev/guide/routing/loading-strategies {#preloading-strategiak-es-halozat-tudatos-preloading-v2-withpreloading-v15-defer-prefetch-v17}
A lazy loading cs\xF6kkenti a kezdeti bundle-t, de a felhaszn\xE1l\xF3 az els\u0151 navig\xE1ci\xF3kor v\xE1rni fog a chunk let\xF6lt\xE9s\xE9re. A **preloading** ezt a k\xE9s\xE9st tolja el: a kezdeti render ut\xE1n, h\xE1tt\xE9rben t\xF6lti le a chunkokat.

### Be\xE9p\xEDtett strat\xE9gi\xE1k
\`\`\`ts
import { provideRouter, NoPreloading, PreloadAllModules } from '@angular/router';

provideRouter(routes, withPreloading(PreloadAllModules));
\`\`\`
- **\`NoPreloading\`** \u2013 az **default**: nincs el\u0151t\xF6lt\xE9s, minden chunk az els\u0151 navig\xE1ci\xF3kor j\xF6n.
- **\`PreloadAllModules\`** \u2013 az \xF6sszes lazy route chunkja let\xF6lt\u0151dik a kezdeti render ut\xE1n.

### Route-onk\xE9nti kikapcsol\xE1s
\`\`\`ts
{ path: 'admin', loadChildren: () => import('./admin/admin.routes'), data: { preload: false } }
\`\`\`

### Egyedi strat\xE9gia \u2013 szelekt\xEDv preload
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class SelectivePreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data?.['preload'] ? load() : of(null);
  }
}

provideRouter(routes, withPreloading(SelectivePreloading));
\`\`\`

### H\xE1l\xF3zat-tudatos (network-aware) preloading
A \`navigator.connection\` (Network Information API) alapj\xE1n csak j\xF3 kapcsolaton \xE9s nem takar\xE9kos m\xF3dban t\xF6lt\xFCnk el\u0151re \u2013 \xEDgy mobilh\xE1l\xF3zaton nem fogyasztjuk a felhaszn\xE1l\xF3 adatforgalm\xE1t:

\`\`\`ts
@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.hasGoodConnection() ? load() : of(null);
  }

  private hasGoodConnection(): boolean {
    const conn = (navigator as any).connection;
    if (!conn) return true;                       // nincs API \u2192 ne b\xFCntess\xFCk a felhaszn\xE1l\xF3t
    if (conn.saveData) return false;              // adattakar\xE9kos m\xF3d
    return !['slow-2g', '2g', '3g'].includes(conn.effectiveType);
  }
}
\`\`\`
Kombin\xE1lhat\xF3 a \`data: { preload: true }\` jel\xF6l\xE9ssel: csak a fontos route-ok, \xE9s csak j\xF3 h\xE1l\xF3zaton.

### Kapcsol\xF3d\xF3 technik\xE1k
- **\`@defer (prefetch on hover)\`** (v17+) \u2013 komponens-szint\u0171 el\u0151t\xF6lt\xE9s interakci\xF3-jelz\xE9sre. Finomabb granularit\xE1s, mint a route-preload.
- **\`<link rel="prefetch">\`** \u2013 a build \xE1ltal gener\xE1lt chunkok k\xE9zi el\u0151t\xF6lt\xE9se; SSR-n\xE9l a szerver injekt\xE1lhatja.
- **\`quicklink\`-jelleg\u0171 minta** \u2013 csak a viewportban l\xE1that\xF3 linkek c\xE9lj\xE1t t\xF6ltj\xFCk el\u0151 (\`IntersectionObserver\` + \`router.getConfig()\`).
- **\`withEnabledBlockingInitialNavigation()\`** \u2013 SSR-n\xE9l az els\u0151 navig\xE1ci\xF3 blokkol\xF3, hogy a szerver a v\xE9gleges HTML-t adja.

**M\xE9r\xE9s n\xE9lk\xFCl ne optimaliz\xE1ljunk:** a \`PreloadAllModules\` nagy alkalmaz\xE1sban t\xF6bb megab\xE1jt h\xE1tt\xE9rforgalmat jelenthet, ami mobilon rontja az \xE9lm\xE9nyt. El\u0151bb n\xE9zz\xFCk meg a val\xF3s navig\xE1ci\xF3s \xFAtvonalakat, \xE9s csak a leggyakoribb 2\u20133 feature-t t\xF6lts\xFCk el\u0151.

## 163. ngModelGroup and Reactive Forms Alternatives (v2+ \xB7 Typed Forms v14+ \xB7 Signal Forms v21+) https://angular.dev/guide/forms/reactive-forms {#ngmodelgroup-es-reactive-forms-alternativai-v2-typed-forms-v14-signal-forms-v21}
### Mi az \`ngModelGroup\` (template-driven)
Az \`ngModelGroup\` a **template-driven** \u0171rlapokban csoportos\xEDt t\xF6bb \`ngModel\`-t egy logikai egys\xE9gbe, saj\xE1t \xE9rv\xE9nyess\xE9gi \xE9s \u201Etouched/dirty\u201D \xE1llapottal. A csoport a \`form.value\` objektumban **be\xE1gyazott objektumk\xE9nt** jelenik meg.

\`\`\`html
<form #f="ngForm" (ngSubmit)="save(f.value)" novalidate>
  <input name="email" [(ngModel)]="model.email" required email>

  <fieldset ngModelGroup="address" #addr="ngModelGroup">
    <input name="city" [(ngModel)]="model.address.city" required>
    <input name="zip" [(ngModel)]="model.address.zip" required>
    @if (addr.invalid && addr.touched) {
      <span>A c\xEDm kit\xF6lt\xE9se k\xF6telez\u0151.</span>
    }
  </fieldset>

  <button type="submit" [disabled]="f.invalid">Ment\xE9s</button>
</form>
\`\`\`
\`f.value\` alakja:
\`\`\`json
{ "email": "a@b.hu", "address": { "city": "Budapest", "zip": "1011" } }
\`\`\`
A \`novalidate\` attrib\xFAtum kikapcsolja a b\xF6ng\xE9sz\u0151 nat\xEDv valid\xE1ci\xF3s bubor\xE9kjait, hogy az Angular (illetve a saj\xE1t hibamegjelen\xEDt\xE9s\xFCnk) vegye \xE1t a szerepet.

### Alternat\xEDva Reactive Forms eset\xE9n: \`FormGroup\` mint alcsoport
A \`ngModelGroup\` k\xF6zvetlen megfelel\u0151je a **be\xE1gyazott \`FormGroup\`** + \`formGroupName\`:

\`\`\`ts
readonly form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  address: this.fb.nonNullable.group({
    city: ['', Validators.required],
    zip: ['', Validators.required],
  }),
});
\`\`\`
\`\`\`html
<form [formGroup]="form" (ngSubmit)="save()" novalidate>
  <input formControlName="email">

  <fieldset formGroupName="address">
    <input formControlName="city">
    <input formControlName="zip">
    @if (form.controls.address.invalid && form.controls.address.touched) {
      <span>A c\xEDm kit\xF6lt\xE9se k\xF6telez\u0151.</span>
    }
  </fieldset>
</form>
\`\`\`

### Megfelel\xE9si t\xE1bl\xE1zat
| Template-driven | Reactive Forms | Signal Forms (v21+) |
| --- | --- | --- |
| \`ngForm\` | \`FormGroup\` + \`[formGroup]\` | \`form(modelSignal, schema)\` |
| \`ngModel\` | \`FormControl\` + \`formControlName\` | \`[field]="f.email"\` |
| \`ngModelGroup="address"\` | \`FormGroup\` + \`formGroupName="address"\` | a modell be\xE1gyazott objektuma (\`f.address.city\`) |
| \u2014 (nincs) | \`FormArray\` + \`formArrayName\` | a modell t\xF6mbje (\`@for (x of f.items; track $index)\`) |
| \`#addr="ngModelGroup"\` | \`form.controls.address\` | \`f.address()\` metaadatai |
| \`[ngModelOptions]="{updateOn:'blur'}"\` | \`{ updateOn: 'blur' }\` a control opci\xF3j\xE1ban | s\xE9ma-szint\u0171 \`updateOn\`/debounce |

### \`formGroupName\` vs \`[formGroup]\`
- \`formGroupName="address"\` \u2013 a **sz\xFCl\u0151** \`FormGroup\`-on bel\xFCli alcsoportra hivatkozik neves\xEDtve. Csak \`[formGroup]\`-on bel\xFCl m\u0171k\xF6dik.
- \`[formGroup]="subForm"\` \u2013 \xF6n\xE1ll\xF3 csoportra k\xF6t, akkor is, ha nincs sz\xFCl\u0151. Gyerekkomponensben \xE1tadott alcsoportn\xE1l ezt haszn\xE1ljuk.

### Alcsoport szint\u0171 valid\xE1ci\xF3 (cross-field)
Ez az egyik legfontosabb \xE9rv a \`FormGroup\` mellett: a csoportra tett valid\xE1tor egyszerre l\xE1tja a tagjait.
\`\`\`ts
address: this.fb.nonNullable.group(
  { city: [''], zip: [''] },
  { validators: [cityZipMatchValidator()] },
);
\`\`\`

### Alcsoport kiszervez\xE9se gyerekkomponensbe
\`\`\`ts
// AddressForm komponens
readonly group = input.required<FormGroup<AddressFormModel>>();
\`\`\`
\`\`\`html
<app-address-form [group]="form.controls.address" />
<!-- a gyerekben -->
<fieldset [formGroup]="group()">
  <input formControlName="city">
</fieldset>
\`\`\`
Ez egyszer\u0171bb, mint minden alcsoportra \`ControlValueAccessor\`-t \xEDrni, \xE9s meg\u0151rzi a t\xEDpusokat.

### Mikor melyik \u0171rlap-megk\xF6zel\xEDt\xE9s
- **Template-driven** (\`ngModel\`, \`ngModelGroup\`): egyszer\u0171, r\xF6vid \u0171rlap, kev\xE9s dinamikus szab\xE1ly. Kevesebb k\xF3d, de a logika a sablonban van, nehezebben tesztelhet\u0151, \xE9s t\xEDpusbiztons\xE1ga gyeng\xE9bb.
- **Reactive Forms**: dinamikus mez\u0151k, cross-field valid\xE1ci\xF3, tesztelhet\u0151s\xE9g, \`FormArray\`. Ez az \xE9rett v\xE1laszt\xE1s v14\u2013v20 k\xF6z\xF6tt (l\xE1sd a Typed Forms szekci\xF3t).
- **Signal Forms** (v21+ experimental, v22-ben b\u0151v\xFClt): a modell egy signal, a szab\xE1lyok s\xE9ma; ez a j\xF6v\u0151beli ir\xE1ny. Fokozatos \xE1t\xE1ll\xE1sra a \`SignalFormControl\` a h\xEDd.

## 164. ControlValueAccessor \u2013 Custom Form Control (v2+ \xB7 FormValueControl v21+) https://angular.dev/guide/forms/signals/custom-controls {#controlvalueaccessor-sajat-urlapvezerlo-v2-formvaluecontrol-v21}
### Mire val\xF3 \u2013 mi a l\xE9nyege
Az Angular \u0171rlap-API (\`FormControl\`, \`ngModel\`) csak azt tudja, hogy egy vez\xE9rl\u0151nek **van \xE9rt\xE9ke, van \xE9rv\xE9nyess\xE9ge \xE9s van \u201E\xE9rintve/m\xF3dos\xEDtva\u201D \xE1llapota**. Azt viszont nem tudja, hogyan jelenik meg ez az \xE9rt\xE9k: egy \`<input>\`-n\xE1l a \`value\` property, egy checkboxn\xE1l a \`checked\`, egy saj\xE1t csillagos \xE9rt\xE9kel\xE9sn\xE9l \xF6t gomb kit\xF6lt\xF6tts\xE9ge.

A \`ControlValueAccessor\` ez a **ford\xEDt\xF3 r\xE9teg (adapter) a forms-modell \xE9s a konkr\xE9t megjelen\xEDt\xE9s k\xF6z\xF6tt**. K\xE9t ir\xE1nyban dolgozik:

\`\`\`
FormControl.setValue()  \u2500\u2500\u25BA  writeValue()          \u2500\u2500\u25BA  a komponens megjelen\xEDti
felhaszn\xE1l\xF3i interakci\xF3 \u2500\u2500\u25BA  onChange() / onTouched() \u2500\u2500\u25BA  FormControl friss\xFCl
\`\`\`

Az Angular a be\xE9p\xEDtett elemekre saj\xE1t CVA-kat sz\xE1ll\xEDt (\`DefaultValueAccessor\` az inputra, \`CheckboxControlValueAccessor\`, \`SelectControlValueAccessor\`, \`RadioControlValueAccessor\`, \`NumberValueAccessor\`, \`RangeValueAccessor\`). Ez\xE9rt m\u0171k\xF6dik a \`formControlName\` egy sima \`<input>\`-on \u201Evar\xE1zslat n\xE9lk\xFCl\u201D. Amikor **saj\xE1t komponenst** akarunk ugyan\xEDgy haszn\xE1lni, nek\xFCnk kell meg\xEDrni ezt az adaptert \u2013 ezt regisztr\xE1ljuk az \`NG_VALUE_ACCESSOR\` multi-provider tokenen.

**Mi\xE9rt \xE9rdemes CVA-t \xEDrni ahelyett, hogy a komponens \`@Input() value\` + \`@Output() valueChange\` p\xE1rral dolgozik:**
- a komponens **b\xE1rhol** haszn\xE1lhat\xF3 \`formControlName\`-mel, \`[formControl]\`-lal \xE9s \`[(ngModel)]\`-lel egyar\xE1nt,
- automatikusan megkapja a valid\xE1ci\xF3t, a \`touched\`/\`dirty\` \xE1llapotot \xE9s a \`ng-invalid\` stb. CSS oszt\xE1lyokat,
- a \`form.disable()\` / \`form.reset()\` / \`patchValue()\` ingyen m\u0171k\xF6dik r\xE1,
- a sz\xFCl\u0151 \u0171rlapnak nem kell tudnia a komponens bels\u0151 szerkezet\xE9r\u0151l.

### A n\xE9gy met\xF3dus
| Met\xF3dus | Ki h\xEDvja | Feladat |
| --- | --- | --- |
| \`writeValue(value)\` | Angular \u2192 komponens | a modell\xE9rt\xE9k megjelen\xEDt\xE9se |
| \`registerOnChange(fn)\` | Angular \u2192 komponens | a komponens ezzel jelzi az \xFAj \xE9rt\xE9ket |
| \`registerOnTouched(fn)\` | Angular \u2192 komponens | a komponens ezzel jelzi az \u201E\xE9rintve\u201D \xE1llapotot |
| \`setDisabledState(isDisabled)\` | Angular \u2192 komponens | letilt\xE1s kezel\xE9se (optional) |

### Klasszikus v\xE1ltozat (v2\u2013v16) \u2013 decoratorok, \`ChangeDetectorRef\`
Ezzel a form\xE1val tal\xE1lkozunk a legt\xF6bb r\xE9gi k\xF3db\xE1zisban. Jellemz\u0151i: sima mez\u0151k signal helyett, konstruktor-injekt\xE1l\xE1s, \xE9s OnPush mellett **k\xE9zi** \`markForCheck()\`, mert a \`writeValue()\` az Angular forms API-b\xF3l h\xEDv\xF3dik, nem a komponens saj\xE1t esem\xE9ny\xE9b\u0151l.

\`\`\`ts
import { Component, Input, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true },
  ],
  template: \`
    <button *ngFor="let star of stars"
            type="button"
            [disabled]="isDisabled"
            (click)="select(star)"
            (blur)="onTouched()">
      {{ star <= value ? '\u2605' : '\u2606' }}
    </button>
  \`,
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
    this.cdr.markForCheck();          // OnPush mellett K\xD6TELEZ\u0150, k\xFCl\xF6nben nem friss\xFCl a n\xE9zet
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
    this.onChange(star);              // \xE9rtes\xEDtj\xFCk a FormControl-t
    this.onTouched();
  }
}
\`\`\`
Ha \`NgModule\`-alap\xFA a projekt, a komponenst deklar\xE1lni \xE9s export\xE1lni kell abban a modulban, amit az \u0171rlapot tartalmaz\xF3 modul import\xE1l.

### Modern v\xE1ltozat (v17+) \u2013 signalok, \`inject()\`, standalone
Ugyanaz a szerz\u0151d\xE9s, de: signal \xE1llapot (nincs \`markForCheck()\`), \`inject()\` konstruktor helyett, be\xE9p\xEDtett control flow, standalone komponens.

\`\`\`ts
@Component({
  selector: 'app-rating',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
  template: \`
    @for (star of stars; track star) {
      <button type="button" [disabled]="isDisabled()"
              (click)="select(star)" (blur)="onTouched()">
        {{ star <= value() ? '\u2605' : '\u2606' }}
      </button>
    }
  \`,
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
\`\`\`
\`\`\`html
<app-rating formControlName="rating" />
<app-rating [(ngModel)]="rating" />
\`\`\`

### \`forwardRef\` \u2013 mi\xE9rt kell
A \`providers\` t\xF6mb a decorator ki\xE9rt\xE9kel\xE9sekor fut le, amikor az oszt\xE1ly m\xE9g nincs defini\xE1lva. A \`forwardRef(() => RatingComponent)\` k\xE9slelteti a hivatkoz\xE1s felold\xE1s\xE1t. A \`useExisting\` (nem \`useClass\`) az\xE9rt kell, hogy a **komponens saj\xE1t p\xE9ld\xE1nya** legyen a value accessor, ne egy m\xE1sik objektum.

### Valid\xE1ci\xF3 a komponensen bel\xFCl
\`\`\`ts
providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true },
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => RatingComponent), multi: true },
]
// ...
validate(control: AbstractControl): ValidationErrors | null {
  return control.value > 0 ? null : { ratingRequired: true };
}
\`\`\`

### Gyakori hib\xE1k
- \`onChange\` h\xEDv\xE1sa \`writeValue\`-b\xF3l \u2192 v\xE9gtelen ciklus.
- \`registerOnTouched\` mell\u0151z\xE9se \u2192 a \`touched\` \xE1llapot sosem lesz igaz, a hiba\xFCzenetek nem jelennek meg.
- \`setDisabledState\` mell\u0151z\xE9se \u2192 a \`form.disable()\` nem hat a komponensre.
- OnPush strat\xE9gia mellett \`writeValue\`-ban signal helyett sima mez\u0151 \xEDr\xE1sa \u2192 nem friss\xFCl a n\xE9zet (signallal ez automatikusan megoldott).

### \`forwardRef\` elker\xFCl\xE9se \u2013 \`NgControl\` self-injekt\xE1l\xE1s
Az \`NG_VALUE_ACCESSOR\` + \`forwardRef\` k\xF6r-hivatkoz\xE1st hoz l\xE9tre (a komponens injekt\xE1lja azt a tokent, amit \u0151 maga szolg\xE1ltat), ami megnehez\xEDti a valid\xE1torok injekt\xE1l\xE1s\xE1t. Alternat\xEDva: **ne** szolg\xE1ltassuk a tokent, hanem k\xE9rj\xFCk be a saj\xE1t \`NgControl\`-t, \xE9s mi \xE1ll\xEDtsuk be magunkat value accessork\xE9nt.

\`\`\`ts
@Component({ selector: 'app-rating', /* nincs providers! */ })
export class RatingComponent implements ControlValueAccessor {
  private readonly ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  /** \xEDgy a komponens el is \xE9ri a saj\xE1t FormControl-j\xE1t (errors, touched, disabled) */
  protected readonly control = computed(() => this.ngControl?.control ?? null);

  writeValue(v: number | null): void { /* ... */ }
  registerOnChange(fn: (v: number) => void): void { /* ... */ }
  registerOnTouched(fn: () => void): void { /* ... */ }
}
\`\`\`
El\u0151nye: a komponens **bel\xFClr\u0151l** megjelen\xEDtheti a saj\xE1t hib\xE1it (\`this.ngControl.control?.errors\`), \xE9s nem alakul ki cirkul\xE1ris DI. H\xE1tr\xE1nya: kicsit \u201Em\xE1gikusabb\u201D, \xE9s a komponens csak reakt\xEDv/ngModel kontextusban haszn\xE1lhat\xF3 (\xF6n\xE1ll\xF3an nem).

### Melyik v\xE1ltozatot mikor
| | Klasszikus CVA (v2\u2013v16) | Modern CVA (v17+) | Signal Forms \`FormValueControl\` (v21+) |
| --- | --- | --- | --- |
| Regisztr\xE1ci\xF3 | \`NG_VALUE_ACCESSOR\` + \`forwardRef\` | ugyanaz, vagy \`NgControl\` self-injekt\xE1l\xE1s | nincs \u2013 el\xE9g az interf\xE9sz |
| \xC1llapot | mez\u0151 + \`markForCheck()\` | \`signal()\` | \`model()\` |
| Callbackek | 4 met\xF3dus | 4 met\xF3dus | nincs |
| Letilt\xE1s | \`setDisabledState()\` | \`setDisabledState()\` | \`input(false)\` / \`disabled\` metaadat |
| Valid\xE1ci\xF3 | \`NG_VALIDATORS\` + \`validate()\` | ugyanaz | s\xE9ma (\`schema()\`, \`validateStandardSchema()\`) |
| K\xF3d mennyis\xE9ge | ~50 sor | ~30 sor | ~4 sor |
| Mikor haszn\xE1ljuk | megl\xE9v\u0151 k\xF3db\xE1zis, v16 vagy r\xE9gebbi | v17\u2013v20 projekt, Reactive Forms | v21+ \xFAj k\xF3d, Signal Forms |

Migr\xE1ci\xF3s sorrend: klasszikus \u2192 modern CVA (mechanikus \xE1t\xEDr\xE1s, a szerz\u0151d\xE9s nem v\xE1ltozik) \u2192 Signal Forms, ahol az \u0171rlap m\xE1r \`form()\`-alap\xFA. \xC1tmeneti id\u0151szakban a \`SignalFormControl\` (v22+) hidat ad: Signal Forms mez\u0151t tehet\xFCnk egy megl\xE9v\u0151 \`FormGroup\`-ba.

### Signal Forms megfelel\u0151je (v21+)
Signal Formsban ez a boilerplate megsz\u0171nik: a \`FormValueControl\` interf\xE9szt egyetlen \`model()\` signal el\xE9g\xEDti ki.
\`\`\`ts
export class RatingControl implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
}
\`\`\`
\`\`\`html
<app-rating [field]="flightForm.rating" />
\`\`\`
Checkbox-jelleg\u0171 vez\xE9rl\u0151kh\xF6z \`FormCheckboxControl\`. Nincs \`NG_VALUE_ACCESSOR\`, nincs \`forwardRef\`, nincs n\xE9gy callback.

## 165. providers vs viewProviders (v2+ \xB7 route-szint\u0171 providers v14+) https://angular.dev/guide/di/dependency-injection-providers {#providers-vs-viewproviders-v2-route-szintu-providers-v14}
Mindkett\u0151 a komponens szintj\xE9n regisztr\xE1l providert, a k\xFCl\xF6nbs\xE9g az, hogy **kik l\xE1tj\xE1k**:

| | \`providers\` | \`viewProviders\` |
| --- | --- | --- |
| A komponens saj\xE1t sablonja (view children) | \u2705 | \u2705 |
| A \`<ng-content>\`-en beprojekt\xE1lt tartalom (content children) | \u2705 | \u274C |

\`\`\`ts
@Component({
  selector: 'app-panel',
  template: \`
    <app-view-child />        <!-- l\xE1tja mindkett\u0151t -->
    <ng-content />            <!-- csak a providers-t l\xE1tja -->
  \`,
  providers: [SharedService],
  viewProviders: [InternalService],
})
export class PanelComponent {}
\`\`\`
\`\`\`html
<app-panel>
  <app-content-child />       <!-- InternalService-t NEM kapja meg -->
</app-panel>
\`\`\`

### Mire j\xF3 ez a gyakorlatban
A \`viewProviders\` egy komponens **bels\u0151** implement\xE1ci\xF3s r\xE9szleteit rejti el: a beprojekt\xE1lt, k\xEDv\xFClr\u0151l \xE9rkez\u0151 tartalom nem tud v\xE9letlen\xFCl a bels\u0151 szolg\xE1ltat\xE1sra k\xF6tni, teh\xE1t a komponens API-ja sz\u0171kebb \xE9s stabilabb marad. Ez az Angular Material \xF6sszetett komponenseinek (accordion, tabs, table) egyik bev\xE1lt technik\xE1ja.

### Injector-hierarchia r\xF6viden
1. **Element (node) injector** \u2013 komponensen/direkt\xEDv\xE1n megadott \`providers\` / \`viewProviders\`; a DOM-f\xE1t k\xF6veti felfel\xE9.
2. **Environment injector** \u2013 \`bootstrapApplication\` providerei, \`providedIn: 'root'\`, route-szint\u0171 \`providers\`.
3. \`@Self()\`, \`@SkipSelf()\`, \`@Host()\` (illetve \`inject(..., { self, skipSelf, host })\`) m\xF3dos\xEDtja a keres\xE9s menet\xE9t.
4. Route-szint\u0171 \`providers\` (v14+) feature-lok\xE1lis p\xE9ld\xE1nyt ad, \`withExperimentalAutoCleanupInjectors()\` (v22) mellett automatikus felszabad\xEDt\xE1ssal.

### Komponens-lok\xE1lis szolg\xE1ltat\xE1s minta
\`\`\`ts
@Component({ selector: 'app-users-page', providers: [UsersPageStore] })
export class UsersPage {}
\`\`\`
\xCDgy a store p\xE9ld\xE1nya a komponenssel egy\xFCtt j\xF6n l\xE9tre \xE9s semmis\xFCl meg \u2013 nincs \xE1llapot-\xE1tsziv\xE1rg\xE1s k\xE9t n\xE9zetl\xE1togat\xE1s k\xF6z\xF6tt. Glob\xE1lis \xE1llapotra \`providedIn: 'root'\`, feature-lok\xE1lisra route-szint\u0171 \`providers\`, n\xE9zet-lok\xE1lisra komponens \`providers\`.

## 166. Pipes in Depth \u2013 Pure vs Impure, Custom Pipe, Performance (v2+ \xB7 standalone pipe v14+) https://angular.dev/guide/pipes {#pipe-ok-melyebben-pure-vs-impure-sajat-pipe-teljesitmeny-v2-standalone-pipe-v14}
### Pure pipe (default)
\`\`\`ts
@Pipe({ name: 'initials' })            // pure: true a default
export class InitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name.split(' ').map((p) => p[0]).join('.');
  }
}
\`\`\`
A \`transform()\` **csak akkor** fut \xFAjra, ha a bemenet **referenci\xE1ja** v\xE1ltozik. Ez\xE9rt olcs\xF3, \xE9s ez\xE9rt nem \xE9rz\xE9keli, ha egy t\xF6mbbe \`push\`-olunk (a referencia ugyanaz marad).

### Impure pipe
\`\`\`ts
@Pipe({ name: 'filterActive', pure: false })
export class FilterActivePipe implements PipeTransform {
  transform(items: Item[]): Item[] { return items.filter((i) => i.active); }
}
\`\`\`
Minden change detection ciklusban lefut. Nagy list\xE1n ez komoly teljes\xEDtm\xE9nyprobl\xE9ma \u2013 **ker\xFClj\xFCk**. Helyette:
- sz\xE1m\xEDtott \xE9rt\xE9k \`computed()\`-ben (signal-alap\xFA k\xF3d),
- vagy a sz\u0171rt lista el\u0151\xE1ll\xEDt\xE1sa a komponensben/store-ban.

Az \`AsyncPipe\` sz\xE1nd\xE9kosan impure (feliratkoz\xE1st kezel) \u2013 ez a kiv\xE9tel, ami indokolt.

### Param\xE9terek \xE9s t\xF6bb argumentum
\`\`\`ts
transform(value: number, currency = 'HUF', digits = 0): string { /* ... */ }
\`\`\`
\`\`\`html
{{ price | money:'EUR':2 }}
\`\`\`

### \`inject()\` pipe-ban
\`\`\`ts
@Pipe({ name: 'localDate' })
export class LocalDatePipe implements PipeTransform {
  private readonly locale = inject(LOCALE_ID);
  transform(value: Date | string): string {
    return new Intl.DateTimeFormat(this.locale).format(new Date(value));
  }
}
\`\`\`

### \`ngOnDestroy\` pipe-ban
Impure, er\u0151forr\xE1st haszn\xE1l\xF3 pipe implement\xE1lhatja az \`OnDestroy\`-t (az \`AsyncPipe\` is ezt teszi a leiratkoz\xE1shoz).

### Standalone pipe haszn\xE1lata (v14+ / v19-t\u0151l default)
\`\`\`ts
@Component({ imports: [InitialsPipe], /* ... */ })
\`\`\`

### Be\xE9p\xEDtett pipe-ok, amiket \xE9rdemes ismerni
\`date\`, \`number\`, \`currency\`, \`percent\`, \`uppercase\`/\`lowercase\`/\`titlecase\`, \`slice\`, \`json\`, \`keyvalue\`, \`async\`, \`i18nPlural\`, \`i18nSelect\`.

### Teljes\xEDtm\xE9ny-\xF6k\xF6lszab\xE1lyok
- Pipe **helyett** ne h\xEDvjunk met\xF3dust a sablonban: \`{{ format(x) }}\` minden CD-ciklusban lefut, a pure pipe nem.
- Pipe-ot ne haszn\xE1ljunk mell\xE9khat\xE1sra (HTTP h\xEDv\xE1s, napl\xF3z\xE1s) \u2013 kisz\xE1m\xEDthatatlan, h\xE1nyszor fut le.
- Signal-alap\xFA k\xF3dban a \`computed()\` sokszor jobb v\xE1laszt\xE1s, mint egy pipe: memoiz\xE1lt, tesztelhet\u0151, \xE9s a t\xEDpusa is l\xE1tszik.
- \`keyvalue\` pipe rendez\xE9st v\xE9gez \u2013 nagy objektumon dr\xE1ga; ha a sorrend nem \xE9rdekes, \`Object.entries\`-t adjunk \xE1t el\u0151re kisz\xE1m\xEDtva.

## 167. Practical Q&A Collection (v2\u2013v22) {#gyakorlati-kerdes-valasz-gyujtemeny-v2-v22}
R\xF6vid, napi munk\xE1ban \xE9s interj\xFAn egyar\xE1nt visszat\xE9r\u0151 k\xE9rd\xE9sek.

### Sablon \xE9s renderel\xE9s
**\`[hidden]\` vs \`@if\` / \`*ngIf\`** \u2013 a \`[hidden]\` csak CSS-szinten elrejt (\`display: none\`), az elem a DOM-ban marad, a komponens **\xE9l, a lifecycle \xE9s a subscription is fut**. Az \`@if\` elt\xE1vol\xEDtja a DOM-b\xF3l \xE9s megsemmis\xEDti a komponenst. Dr\xE1ga komponensn\xE9l mindig \`@if\`; gyakori ki-be v\xE1lt\xE1sn\xE1l a \`[hidden]\` (vagy CSS) gyorsabb, mert nincs \xFAjra\xE9p\xEDt\xE9s.

**\`@for\` \`track\` (kor\xE1bban \`trackBy\`)** \u2013 az elemek azonos\xEDt\xE1sa a \`track\` kifejez\xE9ssel t\xF6rt\xE9nik; en\xE9lk\xFCl minden v\xE1ltoz\xE1sn\xE1l teljes \xFAjrarenderel\xE9s. Stabil, egyedi \xE9rt\xE9ket adjunk meg (\`track item.id\`), ne \`$index\`-et, ha a lista sorrendje v\xE1ltozhat.

**\`ng-container\` vs \`ng-template\` vs \`ng-content\`** \u2013 \`ng-container\`: csoportos\xEDt, nem renderel elemet a DOM-ba. \`ng-template\`: defini\xE1l, de nem renderel, m\xEDg valaki (\`ngTemplateOutlet\`, struktur\xE1lis direkt\xEDva) meg nem jelen\xEDti. \`ng-content\`: a sz\xFCl\u0151t\u0151l \xE9rkez\u0151 tartalom besz\xFAr\xE1si pontja (projection).

**\`ngProjectAs\`** \u2013 egy elem \xFAgy \u201Eviselkedjen\u201D, mintha m\xE1s szelektorra illeszkedne az \`ng-content select="..."\`-n\xE1l.

**\`ngNonBindable\`** \u2013 kikapcsolja az Angular ki\xE9rt\xE9kel\xE9st egy r\xE9szf\xE1n (pl. k\xF3dr\xE9szletek megjelen\xEDt\xE9s\xE9hez).

### Komponensek \xE9s DI
**\`@Input()\` setter vs getter** \u2013 setter: ha az \xE9rt\xE9k meg\xE9rkez\xE9sekor tenni kell valamit (\xE1talak\xEDt\xE1s, mell\xE9khat\xE1s). Getter: ha kifel\xE9 sz\xE1m\xEDtott form\xE1ban adjuk. Modern alternat\xEDva: \`input(..., { transform })\` \xE9s \`computed()\` \u2013 v17+.

**\`@ViewChild\` vs \`@ContentChild\`** \u2013 a \`ViewChild\` a komponens **saj\xE1t** sablonj\xE1ban keres, a \`ContentChild\` a beprojekt\xE1lt tartalomban. Signal megfelel\u0151ik: \`viewChild()\`, \`contentChild()\` (v17.2+).

**Szolg\xE1ltat\xE1s programozott injekt\xE1l\xE1sa** \u2013 \`inject(MyService)\` injection contextben, azon k\xEDv\xFCl \`injector.get(MyService)\` egy elt\xE1rolt \`EnvironmentInjector\`/\`Injector\` p\xE9ld\xE1nyon, vagy \`runInInjectionContext(injector, () => inject(MyService))\` (v16+).

**\`provider\` fogalma** \u2013 recept arra, hogyan \xE1ll\xEDtsa el\u0151 a DI a tokenhez tartoz\xF3 \xE9rt\xE9ket: \`useClass\`, \`useValue\`, \`useFactory\`, \`useExisting\`, \`multi: true\`.

### \u0170rlapok
**\`NgControl\` status classes** \u2013 \`ng-valid\`/\`ng-invalid\`, \`ng-pending\`, \`ng-pristine\`/\`ng-dirty\`, \`ng-touched\`/\`ng-untouched\`, \`ng-submitted\`. Hib\xE1t csak \`dirty\` vagy \`touched\` \xE1llapotban mutassunk, k\xFCl\xF6nben az \u0171rlap azonnal \u201Epirosan\u201D ny\xEDlik.

**\`novalidate\` a \`<form>\`-on** \u2013 kikapcsolja a b\xF6ng\xE9sz\u0151 nat\xEDv valid\xE1ci\xF3s UI-j\xE1t, hogy az alkalmaz\xE1s egys\xE9ges hibamegjelen\xEDt\xE9st adhasson.

**\`FormBuilder\`** \u2013 r\xF6videbb szintaxis \`FormGroup\`/\`FormControl\` l\xE9trehoz\xE1s\xE1ra; \`fb.nonNullable\` (v14+) eset\xE9n a kontrollok \xE9rt\xE9ke nem lehet \`null\`.

**\`value\` vs \`getRawValue()\`** \u2013 a \`value\` kihagyja a letiltott mez\u0151ket, a \`getRawValue()\` tartalmazza. Ment\xE9shez \xE1ltal\xE1ban a \`getRawValue()\` a helyes.

### JavaScript / TypeScript
**Arrow function vs norm\xE1l f\xFCggv\xE9ny** \u2013 az arrow function nem kap saj\xE1t \`this\`-t (lexik\xE1lisan z\xE1rja be a k\xFCls\u0151 \`this\`-t), nincs \`arguments\` objektuma, nem haszn\xE1lhat\xF3 konstruktork\xE9nt, \xE9s nem hoistol\xF3dik. Ez\xE9rt callbackben \xE9s oszt\xE1lymez\u0151-met\xF3dusban arrow, protot\xEDpus-met\xF3dusk\xE9nt norm\xE1l f\xFCggv\xE9ny.

**\`==\` vs \`===\`** \u2013 az \`==\` t\xEDpuskonverzi\xF3t v\xE9gez; k\xF3dban haszn\xE1ljunk mindig \`===\`-t (kiv\xE9tel: \`== null\` sz\xE1nd\xE9kosan \`null\` \xE9s \`undefined\` egy\xFCtt).

**\`unknown\` vs \`any\`** \u2013 az \`unknown\`-nal semmit nem tehet\xFCnk t\xEDpussz\u0171k\xEDt\xE9s n\xE9lk\xFCl, ez\xE9rt biztons\xE1gos k\xFCls\u0151 adatokra; az \`any\` kikapcsolja az ellen\u0151rz\xE9st.

### Routing
**\`RouterOutlet\`** \u2013 az a hely a sablonban, ahov\xE1 a router az aktiv\xE1lt komponenst rendereli. N\xE9vvel ell\xE1tva secondary outlet (l\xE1sd a Secondary Routing szekci\xF3t).

**Guardok h\xEDv\xE1si sorrendje** \u2013 tipikus leave \u2192 enter: \`canDeactivate\` (jelenlegi route) \u2192 \`canMatch\` \u2192 \`canLoad\` (deprecated) \u2192 \`canActivateChild\` \u2192 \`canActivate\` \u2192 \`resolve\`.

**Wildcard route** \u2013 \`path: '**'\`, a nem illeszked\u0151 URL-ek elkap\xE1sa (404 oldal). Mindig a route-lista v\xE9g\xE9n.

### Egy\xE9b
**Dinamikus script besz\xFAr\xE1sa** \u2013 ne \`document.write\`-tal:
\`\`\`ts
private readonly doc = inject(DOCUMENT);
loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = this.doc.createElement('script');
    s.src = src; s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(\`Script bet\xF6lt\xE9s sikertelen: \${src}\`));
    this.doc.body.appendChild(s);
  });
}
\`\`\`
SSR-n\xE9l a \`DOCUMENT\` token miatt szerveren nem hasal el, de a h\xEDv\xE1st tegy\xFCk \`afterNextRender()\`-be.

**\`ngDoBootstrap()\`** \u2013 az \`NgModule\` met\xF3dusa manu\xE1lis bootstraphez (pl. Angular Elements, t\xF6bb root komponens). **Nem** komponens lifecycle hook. Standalone alkalmaz\xE1sban a \`bootstrapApplication\` / \`createApplication\` v\xE1ltja ki.

**Yarn / pnpm vs npm** \u2013 mindh\xE1rom lockfile-lal determinisztikus telep\xEDt\xE9st ad; a pnpm content-addressable store-ral sp\xF3rol lemezt \xE9s gyorsabb monorep\xF3ban. Egy projektben **egy** package managert haszn\xE1ljunk (a kett\u0151s lockfile a leggyakoribb CI-hibaforr\xE1s).

## 168. Angular Feature Index by Version (v14\u2013v22) (v14\u2013v22) https://angular.dev/reference/releases {#angular-feature-index-verzio-szerint-v14-v22-v14-v22}
Gyors keres\u0151: melyik funkci\xF3 melyik verzi\xF3ban jelent meg. A \u201E(dev preview)\u201D jel\xF6l\xE9s fejleszt\u0151i el\u0151n\xE9zetet jelent \u2013 \xE9les haszn\xE1lat el\u0151tt \xE9rdemes a stable verzi\xF3t megv\xE1rni.

### v14 (2022. j\xFAnius)
Standalone API (dev preview) \xB7 Typed Forms \xB7 \`inject()\` f\xFCggv\xE9ny \xB7 CDK Dialog \xE9s Menu \xB7 route \`title\` + \`TitleStrategy\` \xB7 \`ENVIRONMENT_INITIALIZER\` \xB7 \`protected\` tagok bindingja sablonb\xF3l \xB7 extended diagnostics \xB7 \`NonNullableFormBuilder\` \xB7 \`canMatch\` guard (v14.2) \xB7 route-szint\u0171 \`providers\`

### v15 (2022. november)
Standalone API (stable) \xB7 Directive Composition API (\`hostDirectives\`) \xB7 \`NgOptimizedImage\` (stable) \xB7 CDK Listbox \xB7 functional guards \xE9s resolverek \xB7 MDC-alap\xFA Material komponensek \xB7 jobb stack trace-ek \xB7 auto-import a language service-ben

### v16 (2023. m\xE1jus)
Signals (dev preview) \xB7 SSR hydration (dev preview) \xB7 Vite-alap\xFA dev szerver \xB7 \`input.required\` / k\xF6telez\u0151 inputok \xB7 input transform f\xFCggv\xE9ny \xB7 Router data input bindings (\`withComponentInputBinding\`) \xB7 \`DestroyRef\` + \`takeUntilDestroyed\` \xB7 self-closing tagek \xB7 \`runInInjectionContext\` \xB7 \`provideEnvironmentProviders\`

### v17 (2023. november)
Signals (stable) \xB7 Signal inputs \xB7 \xFAj control flow \`@if\`/\`@for\`/\`@switch\` (dev preview) \xB7 \`@defer\` (dev preview) \xB7 \`NgComponentOutlet\` input binding \xB7 animation lazy loading \xB7 View Transitions \xB7 esbuild + Vite (stable) \xB7 SSR hydration (stable) \xB7 \`afterRender\` / \`afterNextRender\` \xB7 \`viewChild()\`/\`contentChild()\` signal query-k (v17.2)

### v18 (2024. m\xE1jus)
Hybrid (zoneless) change detection (experimental) \xB7 signal inputs (stable) \xB7 \`model()\` inputok \xB7 signal query-k (stable) \xB7 \`output()\` szintaxis \xB7 \`ng-content\` fallback tartalom \xB7 funkcion\xE1lis route redirect \xB7 \`RedirectCommand\` \xB7 jobb hydration debug \xB7 \xFAj Observable-\xF6k a formokban \xB7 Material 3 \xB7 Wiz-egy\xFCttm\u0171k\xF6d\xE9s

### v19 (2024. november)
\`linkedSignal\` (experimental) \xB7 Resource API (experimental) \xB7 \`afterRenderEffect\` (experimental) \xB7 \`@let\` template v\xE1ltoz\xF3 \xB7 inkrement\xE1lis hydration (experimental) \xB7 server route konfigur\xE1ci\xF3 (experimental) \xB7 \`RouterOutlet\` data input (\`ROUTER_OUTLET_DATA\`) \xB7 \`RouterLink\` fejleszt\xE9sek \xB7 **komponensek alapb\xF3l standalone** \xB7 strict standalone flag \xB7 initializer provider f\xFCggv\xE9nyek (\`provideAppInitializer\`) \xB7 HMR \`ng serve\`-hez \xB7 \xFAj diagnosztik\xE1k

### v20 (2025. m\xE1jus)
\`effect\` / \`linkedSignal\` / \`toSignal\` stable \xB7 \`*ngIf\`/\`*ngFor\`/\`*ngSwitch\` deprecated (\`@if\`/\`@for\`/\`@switch\` az aj\xE1nlott) \xB7 \`httpResource\` (experimental) \xB7 \`resource\` \`defaultValue\` \xB7 dinamikus komponensek \`bindings\` \xE9s \`directives\` opci\xF3val \xB7 aszinkron redirect f\xFCggv\xE9ny \xB7 **zoneless stable** (v20.2) \xB7 \`animate.enter\` / \`animate.leave\` (v20.2), \`@angular/animations\` deprecated \xB7 route-szint\u0171 render m\xF3d stable \xB7 inkrement\xE1lis hydration stable \xB7 \`ng.enableProfiling()\` a Chrome DevToolsban \xB7 \`typeCheckHostBindings\` \xB7 Vitest (experimental) \xB7 \`NgComponentOutlet\` b\u0151v\xEDt\xE9sek \xB7 i18n subPath

### v21 (2025. november)
\xFAj template kifejez\xE9sek (spread, arrow function, \`instanceof\`) \xB7 t\xF6bb \`HttpClient\` konfigur\xE1ci\xF3 \xB7 \xFAj \`HttpResponse\` property-k \xB7 lazy route bet\xF6lt\xE9s injection contextben \xB7 \`NgOptimizedImage\` decoding t\xE1mogat\xE1s \xB7 \`TestBed\` binding t\xE1mogat\xE1s (\`inputBinding\`/\`outputBinding\`) \xB7 \xFAj anim\xE1ci\xF3s API \xB7 ARIA property binding (\`[aria-label]\`) \xB7 els\u0151 signal-alap\xFA Router API (\`currentNavigation\`, \`lastSuccessfulNavigation\`) \xB7 jobb szerveroldali bootstrap \xB7 **Signal Forms** (experimental) \xB7 **Vitest a default tesztfut\xF3** \xB7 **Angular Aria** \xB7 MCP szerver \xB7 **resource snapshot / \`resourceFromSnapshots\` (v21.2)**

### v22 (2026)
\xFAj template kifejez\xE9sek \xB7 t\xF6bbsz\xF6r\xF6s switch case illeszt\xE9s \xB7 route injector cleanup (experimental) \xB7 standalone \`isActive()\` f\xFCggv\xE9ny \xB7 Router-fejleszt\xE9sek \xB7 image loader b\u0151v\xEDt\xE9sek (\`loaderParams\`) \xB7 \`provideStabilityDebugging()\` \xB7 **OnPush a default change detection** (\`ChangeDetectionStrategy.Eager\` a r\xE9gi m\xF3d neve) \xB7 **inkrement\xE1lis hydration default** (\`withNoIncrementalHydration()\` kapcsolja ki) \xB7 resource cache SSR-hez (\`TransferState\`) \xB7 Signal Forms API friss\xEDt\xE9sek \xB7 \`SignalFormControl\` \xB7 \`@Service\` decorator \xB7 \`injectAsync\` (lazy service injection) \xB7 \`debounced()\` signalokhoz \xB7 Web MCP eszk\xF6z\xF6k (experimental) \xB7 AI agent skillek \xB7 \`ng-reflect-*\` attrib\xFAtumok megsz\xFCntet\xE9se

### Fejleszt\xE9s alatt / bejelentett ir\xE1ny
Selectorless komponensek \xB7 streamed SSR \xB7 tov\xE1bbi signal integr\xE1ci\xF3k \xB7 zone.js teljes kivezet\xE9se

### Verzi\xF3-t\xE1mogat\xE1si \xF6k\xF6lszab\xE1lyok
- Egy Angular f\u0151verzi\xF3 **18 h\xF3nap** t\xE1mogat\xE1st kap (6 h\xF3nap akt\xEDv + 12 h\xF3nap LTS).
- **Sosem** l\xE9p\xFCnk \xE1t f\u0151verzi\xF3t friss\xEDt\xE9skor: v18 \u2192 v19 \u2192 v20, nem v18 \u2192 v20.
- A Node.js \xE9s TypeScript minimumverzi\xF3 minden f\u0151verzi\xF3val emelkedik \u2013 friss\xEDt\xE9s el\u0151tt ellen\u0151rizz\xFCk.
- Az \`update.angular.dev\` (kor\xE1bban \`update.angular.io\`) gener\xE1lja a verzi\xF3p\xE1ronk\xE9nti l\xE9p\xE9slist\xE1t.

## 169. Bundle Optimization \u2013 Main Chunk, Tree Shaking, Code-Level Decisions (v14+ \xB7 esbuild v16+ \xB7 @defer v17+) https://angular.dev/guide/performance {#bundle-optimalizalas-main-chunk-tree-shaking-kodszintu-dontesek-v14-esbuild-v16-defer-v17}
A kezdeti (initial) bundle m\xE9rete k\xF6zvetlen\xFCl az LCP-t \xE9s a TTI-t hat\xE1rozza meg. A c\xE9l nem az \u201E\xE1ltal\xE1ban kisebb k\xF3d\u201D, hanem az, hogy **az els\u0151 k\xE9perny\u0151h\xF6z sz\xFCks\xE9ges k\xF3d** legyen kicsi.

### 1. El\u0151sz\xF6r m\xE9rj
\`\`\`bash
ng build --configuration production --stats-json
npx esbuild-visualizer --metadata dist/<app>/stats.json --open
# vagy
npx source-map-explorer dist/<app>/browser/*.js
\`\`\`
A riport megmutatja, mely npm csomag \xE9s mely saj\xE1t f\xE1jl mekkora r\xE9szt foglal a main chunkb\xF3l. Optimaliz\xE1l\xE1s m\xE9r\xE9s n\xE9lk\xFCl \xE1ltal\xE1ban rossz helyre ir\xE1nyul.

### 2. Budget, ami CI-ben t\xF6rik
\`\`\`json
// angular.json \u2192 architect.build.configurations.production
"budgets": [
  { "type": "initial", "maximumWarning": "400kB", "maximumError": "600kB" },
  { "type": "allScript", "maximumWarning": "1.2MB" },
  { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" }
]
\`\`\`
A budget \xE9rt\xE9ket a **jelenlegi** m\xE9rethez \xE1ll\xEDtsuk be, kicsivel sz\u0171kebbre \u2013 \xEDgy minden regresszi\xF3 azonnal l\xE1tszik, nem h\xF3napok m\xFAlva.

### 3. Mi ker\xFCl a main chunkba \u2013 \xE9s hogyan vegy\xFCk ki
A main chunkba minden beker\xFCl, amit a root komponens \xE9s a bootstrap **statikusan** el\xE9r. Tipikus t\xFAls\xFAly-okok \xE9s megold\xE1saik:

| Ok | Megold\xE1s |
| --- | --- |
| minden route eagerly import\xE1lva | \`loadComponent\` / \`loadChildren\` dinamikus importtal |
| nagy komponens az els\u0151 n\xE9zetben | \`@defer (on viewport)\` blokk (v17+) |
| neh\xE9z k\xF6nyvt\xE1r (chart, editor, PDF, moment) a root \xFAtvonalon | dinamikus \`import()\` a haszn\xE1lat hely\xE9n, vagy \`injectAsync()\` (v22+) |
| barrel \`index.ts\` \u201Emindent\u201D export\xE1l | k\xF6zvetlen f\xE1jl-import, vagy \`internal/\` szepar\xE1ci\xF3 (Sheriff barrel-less m\xF3d) |
| shared modul, ami mindent beh\xFAz | \`shared\` lib sz\xE9tv\xE1g\xE1sa apr\xF3, c\xE9lzott libekre |
| anim\xE1ci\xF3k | \`provideAnimationsAsync()\` (v17+), vagy \`animate.enter\`/\`animate.leave\` + nat\xEDv CSS |
| ikonk\xE9szlet teljes bet\xF6lt\xE9se | csak a haszn\xE1lt ikonok, inline SVG vagy sprite |
| polyfillek r\xE9gi b\xF6ng\xE9sz\u0151kh\xF6z | \`browserslist\` sz\u0171k\xEDt\xE9se \u2013 az esbuild ez alapj\xE1n d\xF6nt |

\`\`\`ts
// route-szint\u0171 lazy loading \u2013 ez a legnagyobb egyszeri nyeres\xE9g
export const routes: Routes = [
  { path: 'flights', loadChildren: () => import('./flights/flights.routes') },
  { path: 'admin', loadComponent: () => import('./admin/admin-page').then((m) => m.AdminPage) },
];
\`\`\`
\`\`\`ts
// k\xF6nyvt\xE1r lazy bet\xF6lt\xE9se a haszn\xE1lat hely\xE9n
protected async exportPdf(): Promise<void> {
  const { jsPDF } = await import('jspdf');       // k\xFCl\xF6n chunkba ker\xFCl
  new jsPDF().text('Hello', 10, 10).save('report.pdf');
}
\`\`\`
\`\`\`ts
// szolg\xE1ltat\xE1s lazy injekt\xE1l\xE1sa (v22+)
private readonly _heavy = injectAsync(() => import('./heavy.service').then((m) => m.HeavyService));
\`\`\`

### 4. Tree shaking \u2013 mi\xE9rt fontos \xE9s mi rontja el
A tree shaking a nem haszn\xE1lt exportok elt\xE1vol\xEDt\xE1sa a bundle-b\u0151l. N\xE9lk\xFCle egy 300 kB-os k\xF6nyvt\xE1rb\xF3l akkor is mind beker\xFCl, ha egyetlen f\xFCggv\xE9nyt haszn\xE1lunk.

**Felt\xE9telei:**
- **ESM import/export** \u2013 a \`require()\` \xE9s a CommonJS csomag nem shakelhet\u0151. Az Angular CLI k\xFCl\xF6n figyelmeztet a CommonJS importokra (\`allowedCommonJsDependencies\` csak indokolt esetben).
- **Nincs top-level mell\xE9khat\xE1s** \u2013 ha egy modul bet\xF6lt\xE9skor glob\xE1lisan regisztr\xE1l valamit, a bundler nem meri kihagyni. A csomag \`package.json\`-j\xE1ban a \`"sideEffects": false\` (vagy a mell\xE9khat\xE1sos f\xE1jlok list\xE1ja) mondja meg, hogy biztons\xE1gos elt\xE1vol\xEDtani.
- **Nincs re-export l\xE1nc, ami mindent beh\xFAz** \u2013 a m\xE9ly barrel (\`index.ts\` \u2192 \`index.ts\` \u2192 \u2026) sok bundlern\xE9l megakad\xE1lyozza a pontos elemz\xE9st.

**Angular-specifikus tree shaking-eszk\xF6z\xF6k:**
- \`providedIn: 'root'\` \u2013 a szolg\xE1ltat\xE1s csak akkor ker\xFCl a bundle-be, ha valaki injekt\xE1lja (a r\xE9gi \`NgModule.providers\` mindig beker\xFClt).
- \`provideXyz()\` provider-f\xFCggv\xE9nyek az \`XyzModule\` helyett \u2013 amit nem h\xEDvunk, nem ker\xFCl be.
- Funkcion\xE1lis interceptorok/guardok oszt\xE1lyalap\xFAak helyett.
- Standalone komponensek: az \`imports\` pontosan megmondja, mi kell \u2013 nincs \u201Emindent beh\xFAz\xF3\u201D shared modul.
- \`import { map } from 'rxjs'\` (RxJS 7+ egyetlen bel\xE9p\xE9si pont) \u2013 ne \`rxjs/internal/...\`.

**Amit ker\xFClni kell:**
\`\`\`ts
// ROSSZ: az eg\xE9sz k\xF6nyvt\xE1r beker\xFCl
import * as _ from 'lodash';
import moment from 'moment';               // nem tree-shakeable, nagy locale-k\xE9szlet

// J\xD3
import { debounce } from 'lodash-es';      // ESM build, per-f\xFCggv\xE9ny shakelhet\u0151
// vagy egy\xE1ltal\xE1n nem kell k\xFCls\u0151 lib:
const fmt = new Intl.DateTimeFormat('hu-HU').format(new Date());
\`\`\`

### 5. \`enum\` helyett union type \u2013 mi\xE9rt
A TypeScript \`enum\` **fut\xE1sidej\u0171 JavaScript objektumot** gener\xE1l, teh\xE1t beker\xFCl a bundle-be, \xE9s (nem \`const enum\` eset\xE9n) nem shakelhet\u0151 ki, m\xE9g akkor sem, ha csak t\xEDpusk\xE9nt haszn\xE1ljuk:

\`\`\`ts
// enum \u2013 k\xF3d keletkezik bel\u0151le
export enum Status { Draft = 'draft', Active = 'active', Deleted = 'deleted' }
\`\`\`
gener\xE1lt JS:
\`\`\`js
var Status;
(function (Status) {
  Status["Draft"] = "draft";
  Status["Active"] = "active";
  Status["Deleted"] = "deleted";
})(Status || (Status = {}));
\`\`\`

\`\`\`ts
// union type \u2013 NULLA fut\xE1sidej\u0171 k\xF3d
export type Status = 'draft' | 'active' | 'deleted';

// ha a list\xE1ra is sz\xFCks\xE9g van (pl. leg\xF6rd\xFCl\u0151 men\xFC):
export const STATUSES = ['draft', 'active', 'deleted'] as const;
export type Status = typeof STATUSES[number];      // 'draft' | 'active' | 'deleted'
\`\`\`

**A union tov\xE1bbi el\u0151nyei a bundle-m\xE9ret mellett:**
- **Exhaustiveness check**: \`switch\` eset\xE9n a ford\xEDt\xF3 jelzi, ha \xFAj vari\xE1nst nem kezel\xFCnk (\`assertNever\`).
- Nincs a numerikus enum csapd\xE1ja: a \`Status.Draft\` numerikus enumn\xE1l \`0\`, ami \`falsy\` \u2013 klasszikus hibaforr\xE1s.
- A szerver JSON-j\xE1ban am\xFAgy is sztring van; a union k\xF6zvetlen\xFCl illeszkedik r\xE1, nincs oda-vissza konverzi\xF3.
- Jobb IDE-\xE9lm\xE9ny: a liter\xE1l \xE9rt\xE9kek autocomplete-elnek stringkontextusban is (\`[status]="'draft'"\`).
- Nincs deklar\xE1ci\xF3s \xF6sszefon\xF3d\xE1s: az \`enum\` egyszerre t\xEDpus \xE9s \xE9rt\xE9k, ez\xE9rt nem t\xF6r\xF6lhet\u0151 t\xEDpusimportk\xE9nt.

**Amikor az \`enum\` m\xE9gis v\xE9dhet\u0151:** ha k\xFCls\u0151 API kifejezetten enumot v\xE1r, vagy reverse mapping (\`Status[0] === 'Draft'\`) kell. A \`const enum\` kisebb k\xF3dot ad, de \`isolatedModules\`/esbuild alatt tiltott vagy probl\xE9m\xE1s \u2013 az Angular buildben ne haszn\xE1ljuk.

### 6. Import-higi\xE9nia
\`\`\`ts
// t\xEDpus-only import: a ford\xEDt\xE1s ut\xE1n teljesen elt\u0171nik
import type { Flight } from './flight';
import { type Flight, findFlight } from './flight';   // inline type modifier
\`\`\`
\`\`\`json
// tsconfig.json
{ "compilerOptions": { "verbatimModuleSyntax": true } }
\`\`\`
A \`verbatimModuleSyntax\` kik\xE9nyszer\xEDti, hogy a csak t\xEDpusk\xE9nt haszn\xE1lt importot \`import type\`-tal \xEDrjuk \u2013 \xEDgy biztosan nem keletkezik fut\xE1sidej\u0171 import. Az \`importsNotUsedAsValues\` elavult; helyette a \`verbatimModuleSyntax\` haszn\xE1land\xF3.

### 7. Egy\xE9b k\xF3dszint\u0171 optimaliz\xE1l\xE1sok
- **Ne hozzunk l\xE9tre oszt\xE1lyt, ha f\xFCggv\xE9ny is el\xE9g** \u2013 a funkcion\xE1lis guard/interceptor/resolver kisebb \xE9s shakelhet\u0151.
- **\`InjectionToken\` + factory** helyett \`providedIn: 'root'\` szolg\xE1ltat\xE1s, ha nincs k\xF6rnyezetf\xFCgg\u0151 implement\xE1ci\xF3 (kevesebb k\xF3d).
- **Konstansok**: \`as const\` objektum kisebb, mint egy statikus mez\u0151kkel teli oszt\xE1ly.
- **Ne export\xE1ljunk mindent** \u2013 a nem export\xE1lt, nem haszn\xE1lt f\xFCggv\xE9nyt a bundler kidobja; a publikus export mindig \u201E\xE9l\u0151nek\u201D sz\xE1m\xEDt.
- **Sablon helyett string konkaten\xE1ci\xF3**: elhanyagolhat\xF3; ne itt optimaliz\xE1ljunk.
- **\`@angular/animations\` elhagy\xE1sa** (v20+): tipikusan 30\u201360 kB nyeres\xE9g.
- **\`zone.js\` elhagy\xE1sa** zoneless m\xF3dban: ~30 kB gzip nyeres\xE9g \xE9s kevesebb runtime munka.
- **Duplik\xE1lt tranzit\xEDv dependency** felder\xEDt\xE9se: \`npm ls <pkg>\` / \`npm dedupe\` \u2013 k\xE9t verzi\xF3 ugyanabb\xF3l a libb\u0151l dupl\xE1n ker\xFCl a bundle-be.
- **SCSS**: a glob\xE1lis \`styles.scss\` mindig a kezdeti bet\xF6lt\xE9s r\xE9sze. Ami komponens-specifikus, ker\xFClj\xF6n a komponens st\xEDlus\xE1ba (a \`anyComponentStyle\` budget ezt \u0151rzi).
- **K\xE9p \xE9s font**: nem a JS bundle r\xE9sze, de ugyanazt az LCP-t rontja \u2013 \`ngOptimizedImage\`, \`font-display\`, csak a haszn\xE1lt bet\u0171vastags\xE1gok.

### 8. Build-oldali be\xE1ll\xEDt\xE1sok
\`\`\`json
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
\`\`\`
- Az **\`application\` builder** (v17+, default) esbuild-alap\xFA: gyorsabb build \xE9s jobb chunk-szeletel\xE9s, mint a r\xE9gi webpack-alap\xFA \`browser\` builder.
- A \`browserslist\` sz\u0171k\xEDt\xE9se (\`last 2 Chrome versions, last 2 Firefox versions, safari >= 16\`) kevesebb downlevel k\xF3dot \xE9s polyfillt jelent.
- \`"extractLicenses": true\`, \`"subresourceIntegrity": true\` \u2013 nem m\xE9ret, hanem megfelel\xE9s/biztons\xE1g.
- SSR-n\xE9l a \`provideClientHydration()\` nem cs\xF6kkenti a bundle-t, de a **l\xE1tsz\xF3** bet\xF6lt\xE9si id\u0151t jelent\u0151sen jav\xEDtja \u2013 gyakran ez \xE9r t\xF6bbet, mint tov\xE1bbi 20 kB lefarag\xE1sa.

### Priorit\xE1si sorrend (a legnagyobb nyeres\xE9gt\u0151l)
1. Route-szint\u0171 lazy loading minden nem-kezd\u0151 feature-re.
2. Neh\xE9z k\xFCls\u0151 k\xF6nyvt\xE1rak dinamikus importja.
3. \`@defer\` a kezd\u0151 n\xE9zet nem kritikus r\xE9szeire.
4. Barrel- \xE9s shared-modul higi\xE9nia (mit h\xFAz be val\xF3j\xE1ban az els\u0151 route).
5. \`enum\` \u2192 union type, \`import type\`, \`sideEffects\` ellen\u0151rz\xE9se.
6. Build-flagek \xE9s \`browserslist\` finom\xEDt\xE1sa.

## 170. Global Error Handling and Correlation ID (v2+ \xB7 functional interceptors v15+ \xB7 inject() v14+) https://angular.dev/best-practices/error-handling {#globalis-hibakezeles-es-correlation-id-v2-funkcionalis-interceptorok-v15-inject-v14}
### Mi\xE9rt kell mindkett\u0151 egy\xFCtt
A glob\xE1lis \`ErrorHandler\` elkapja azt, amit senki m\xE1s nem kapott el; a **correlation ID** pedig \xF6sszekapcsolja a kliensoldali hib\xE1t a szerveroldali loggal. K\xFCl\xF6n-k\xFCl\xF6n mindkett\u0151 f\xE9lkar\xFA: hibajelent\xE9s azonos\xEDt\xF3 n\xE9lk\xFCl nem visszakereshet\u0151, azonos\xEDt\xF3 hibajelent\xE9s n\xE9lk\xFCl nem hasznosul.

### Correlation ID interceptor
\`\`\`ts
// core/http/correlation-id.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CorrelationService } from './correlation.service';

export const correlationIdInterceptor: HttpInterceptorFn = (req, next) => {
  const correlation = inject(CorrelationService);
  return next(
    req.clone({
      setHeaders: {
        'X-Correlation-Id': correlation.requestId(),  // k\xE9r\xE9senk\xE9nt egyedi
        'X-Session-Id': correlation.sessionId,        // b\xF6ng\xE9sz\u0151-munkamenetre \xE1lland\xF3
      },
    }),
  );
};
\`\`\`

\`\`\`ts
// core/http/correlation.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CorrelationService {
  /** A teljes b\xF6ng\xE9sz\u0151-munkamenetre \xE1lland\xF3 \u2013 t\xF6bb k\xE9r\xE9s \xF6sszekapcsol\xE1s\xE1ra. */
  readonly sessionId = this.newId();

  private _lastRequestId = this.sessionId;
  /** A legut\xF3bb kiadott k\xE9r\xE9s azonos\xEDt\xF3ja \u2013 a hibajelent\xE9s ezt csatolja. */
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
\`\`\`

Regisztr\xE1ci\xF3 \u2013 a correlation interceptor legyen **az els\u0151** a l\xE1ncban, hogy minden tov\xE1bbmen\u0151 k\xE9r\xE9s (a retry ism\xE9tl\xE9sei is) megkapja a fejl\xE9cet:
\`\`\`ts
provideHttpClient(
  withFetch(),
  withInterceptors([correlationIdInterceptor, authInterceptor, retryInterceptor, errorInterceptor]),
);
\`\`\`

### Fejl\xE9c-konvenci\xF3k
| Fejl\xE9c | Jelent\xE9s |
| --- | --- |
| \`X-Correlation-Id\` | egy logikai m\u0171velet azonos\xEDt\xF3ja v\xE9gig a rendszeren (kliens \u2192 BFF \u2192 mikroszolg\xE1ltat\xE1sok) |
| \`X-Request-Id\` | egyetlen HTTP k\xE9r\xE9s azonos\xEDt\xF3ja |
| \`traceparent\` | W3C Trace Context standard \u2013 ha a backend OpenTelemetryt haszn\xE1l, **ezt** kell k\xFCldeni |

\`\`\`ts
// W3C traceparent: version-traceId(32 hex)-spanId(16 hex)-flags
const traceparent = \`00-\${hex(32)}-\${hex(16)}-01\`;
return next(req.clone({ setHeaders: { traceparent } }));
\`\`\`

**CORS figyelmeztet\xE9s:** egyedi fejl\xE9c k\xFCld\xE9se cross-origin k\xE9r\xE9sn\xE9l preflightot v\xE1lt ki, \xE9s a szervernek enged\xE9lyeznie kell (\`Access-Control-Allow-Headers: X-Correlation-Id\`). Ha a v\xE1laszban is visszak\xFCldi a szerver, azt \`Access-Control-Expose-Headers\`-rel kell kitennie, hogy a kliens olvashassa.

### A v\xE1lasz correlation ID-j\xE1nak kiolvas\xE1sa
Gyakran a szerver gener\xE1lja az azonos\xEDt\xF3t \u2013 ilyenkor a v\xE1laszb\xF3l vessz\xFCk \xE1t:
\`\`\`ts
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
\`\`\`

### HTTP hib\xE1k kezel\xE9se interceptorban
\`\`\`ts
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
        case 403: notify.error('Nincs jogosults\xE1god ehhez a m\u0171velethez.'); break;
        case 404: /* a h\xEDv\xF3 kezeli, nem glob\xE1lis hiba */ break;
        case 422: /* valid\xE1ci\xF3s hiba: az \u0171rlap kezeli */ break;
        default:
          notify.error(\`V\xE1ratlan hiba t\xF6rt\xE9nt. Hivatkoz\xE1si sz\xE1m: \${correlationId}\`);
          logger.logHttpError(err, { correlationId, url: req.urlWithParams, method: req.method });
      }
      return throwError(() => err);
    }),
  );
};
\`\`\`
Az interceptor **ne nyelje el** a hib\xE1t (\`return EMPTY\`), k\xFCl\xF6nben a h\xEDv\xF3 azt hiszi, siker\xFClt a m\u0171velet. A \`throwError\`-ral tov\xE1bbadjuk, \xE9s a h\xEDv\xF3 d\xF6nt.

### Glob\xE1lis ErrorHandler
Ez fogja el a nem kezelt kiv\xE9teleket: sablon-kifejez\xE9s hib\xE1k, lifecycle hookban dobott kiv\xE9tel, nem kezelt Promise rejection, effect hib\xE1ja.

\`\`\`ts
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
    // A HTTP hib\xE1kat az errorInterceptor m\xE1r kezelte \xE9s napl\xF3zta
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

    // A handleError a z\xF3n\xE1n k\xEDv\xFCl futhat \u2013 UI-m\u0171veletet z\xF3n\xE1n bel\xFCl ind\xEDtunk
    this.zone.run(() =>
      this.notify.error(\`V\xE1ratlan hiba t\xF6rt\xE9nt. Hivatkoz\xE1si sz\xE1m: \${this.correlation.lastRequestId}\`),
    );
  }

  /** Promise rejection \xE9s zone-wrapped hib\xE1k kicsomagol\xE1sa. */
  private unwrap(error: unknown): Error {
    const e = (error as { rejection?: unknown })?.rejection ?? error;
    return e instanceof Error ? e : new Error(typeof e === 'string' ? e : JSON.stringify(e));
  }
}
\`\`\`

Regisztr\xE1ci\xF3:
\`\`\`ts
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    // ...
  ],
};
\`\`\`

### Napl\xF3z\xF3 szolg\xE1ltat\xE1s \u2013 ne gener\xE1ljon hibaciklust
\`\`\`ts
@Injectable({ providedIn: 'root' })
export class LoggingService {
  private readonly http = inject(HttpClient);
  private readonly queue: LogEntry[] = [];
  private sending = false;

  logError(entry: LogEntry): void {
    this.queue.push(entry);
    if (this.queue.length > 50) this.queue.shift();   // mem\xF3riakorl\xE1t
    void this.flush();
  }

  private async flush(): Promise<void> {
    if (this.sending || !this.queue.length) return;
    this.sending = true;
    const batch = this.queue.splice(0, this.queue.length);
    try {
      // keepalive: a k\xE9r\xE9s t\xFAl\xE9li az oldal elhagy\xE1s\xE1t
      await firstValueFrom(
        this.http.post('/api/logs', batch, {
          keepalive: true,
          context: new HttpContext().set(SKIP_ERROR_HANDLING, true),   // ne logoljuk a log-hib\xE1t
        }),
      );
    } catch {
      /* csendben elnyelj\xFCk: a napl\xF3z\xE1s hib\xE1ja nem lehet felhaszn\xE1l\xF3i hiba */
    } finally {
      this.sending = false;
    }
  }
}
\`\`\`
A \`SKIP_ERROR_HANDLING\` egy \`HttpContextToken\` \u2013 az \`errorInterceptor\` ezt olvasva kihagyja a log-endpoint hib\xE1it. En\xE9lk\xFCl egy el\xE9rhetetlen log-szerver **v\xE9gtelen hibaciklust** okoz.

### Amit az ErrorHandler nem fog el
\`\`\`ts
// nem kezelt Promise rejection Angular kontextuson k\xEDv\xFCl
window.addEventListener('unhandledrejection', (e) => handler.handleError(e.reason));
// er\u0151forr\xE1s-bet\xF6lt\xE9si hiba (k\xE9p, script)
window.addEventListener('error', (e) => handler.handleError(e.error ?? e.message), true);
\`\`\`
Zoneless m\xF3dban (v20+) ezek a glob\xE1lis listenerek k\xFCl\xF6n\xF6sen fontosak, mert nincs zone, ami a hib\xE1t az Angular fel\xE9 tov\xE1bb\xEDtsa.

### Hibakezel\xE9s signal-alap\xFA k\xF3dban
\`\`\`ts
readonly flight = httpResource<Flight>(() => \`/api/flight/\${this.id()}\`);
\`\`\`
\`\`\`html
@if (flight.error()) {
  <app-error [error]="flight.error()" (retry)="flight.reload()" />
}
\`\`\`
A \`resource\` a hib\xE1t **\xE1llapotk\xE9nt** modellezi, nem kiv\xE9telk\xE9nt \u2013 ez\xE9rt nem jut el az \`ErrorHandler\`-ig, \xE9s ez a helyes: a felhaszn\xE1l\xF3 egy \xFAjrapr\xF3b\xE1lhat\xF3 hiba\xE1llapotot l\xE1t, nem glob\xE1lis hibajelz\xE9st.

### Kapcsolat k\xFCls\u0151 monitoringgal
Sentry, Rollbar, Application Insights, Datadog RUM \u2013 mindegyik \`ErrorHandler\` implement\xE1ci\xF3t ad. A saj\xE1t handler is haszn\xE1lhat\xF3 mellette: a \`correlationId\`-t \xE9s \`sessionId\`-t **tagk\xE9nt/contextk\xE9nt** adjuk \xE1t, hogy a monitoring fel\xFCleten kereshet\u0151 legyen.
\`\`\`ts
Sentry.setTag('correlationId', this.correlation.lastRequestId);
Sentry.setTag('sessionId', this.correlation.sessionId);
\`\`\`

### Ellen\u0151rz\u0151lista
- [ ] \`correlationIdInterceptor\` a l\xE1nc **elej\xE9n**, minden kimen\u0151 k\xE9r\xE9sen fejl\xE9c.
- [ ] A szerver napl\xF3zza a \`X-Correlation-Id\`-t, \xE9s a v\xE1laszban vissza is adja.
- [ ] A hiba\xFCzenet a felhaszn\xE1l\xF3nak **tartalmazza az azonos\xEDt\xF3t** (hogy t\xE1mogat\xE1sn\xE1l bedikt\xE1lhat\xF3 legyen).
- [ ] \`errorInterceptor\` st\xE1tuszk\xF3d szerint differenci\xE1l, \xE9s nem nyeli el a hib\xE1t.
- [ ] \`GlobalErrorHandler\` kihagyja a \`HttpErrorResponse\`-t (nincs dupla napl\xF3z\xE1s).
- [ ] A log-endpoint hib\xE1i nem gener\xE1lnak \xFAj napl\xF3bejegyz\xE9st.
- [ ] \`unhandledrejection\` \xE9s \`error\` window listener be\xE1ll\xEDtva.
- [ ] Az appverzi\xF3 (build hash) minden bejegyz\xE9sben \u2013 k\xFCl\xF6nben a source map nem illeszthet\u0151.
- [ ] \xC9les k\xF6rnyezetben nem \xEDrunk stack trace-t a konzolra (inform\xE1ci\xF3sziv\xE1rg\xE1s).

## 171. Angular Injectors \u2013 Types, Hierarchy and Resolution Model (v2+ \xB7 EnvironmentInjector v14+ \xB7 inject() options v14+) https://angular.dev/guide/di/hierarchical-dependency-injection {#angular-injectorok-tipusok-hierarchia-es-feloldasi-modell-v2-environmentinjector-v14-inject-opciok-v14}
Az Angular DI-ja **nem egyetlen** injectorb\xF3l \xE1ll. Egy alkalmaz\xE1sban t\xF6bb, p\xE1rhuzamos injector-fa l\xE9tezik, \xE9s a felold\xE1s menete ezekb\u0151l k\xF6vetkezik. A legt\xF6bb \u201Emi\xE9rt nem azt a p\xE9ld\xE1nyt kapom?\u201D \xE9s \u201Emi\xE9rt \`NullInjectorError\`?\u201D k\xE9rd\xE9s innen \xE9rthet\u0151 meg.

### 1. Mi\xE9rt van t\xF6bb injector
K\xE9tf\xE9le ig\xE9ny van egyszerre:
- **alkalmaz\xE1sszint\u0171** szolg\xE1ltat\xE1sok (HTTP kliens, router, glob\xE1lis store) \u2013 egyetlen p\xE9ld\xE1ny, mindenhonnan el\xE9rhet\u0151,
- **komponens- vagy DOM-poz\xEDci\xF3t\xF3l f\xFCgg\u0151** szolg\xE1ltat\xE1sok (az adott form szekci\xF3 valid\xE1tora, egy panel bels\u0151 \xE1llapota) \u2013 p\xE9ld\xE1ny a n\xE9zeti hierarchia adott pontj\xE1n.

Ez\xE9rt az Angular k\xE9t, egym\xE1ssal \xF6sszek\xF6t\xF6tt hierarchi\xE1t tart fenn: az **Element (node) injector** f\xE1t, amely a DOM/komponens-f\xE1t k\xF6veti, \xE9s az **Environment injector** f\xE1t, amely az alkalmaz\xE1s/route/modul szerkezet\xE9t k\xF6veti.

\`\`\`
NullInjector
    \u25B2
Platform injector          (platformBrowser, t\xF6bb app k\xF6z\xF6s r\xE9sze)
    \u25B2
Root environment injector  (bootstrapApplication providers, providedIn: 'root')
    \u25B2
Route environment injector (Route.providers \u2013 lazy feature)
    \u25B2
Element injector (root komponens)      \u2190 a komponens/direkt\xEDva providers
    \u25B2
Element injector (gyerek komponens)
\`\`\`
A keres\xE9s **lentr\u0151l felfel\xE9** megy: el\u0151sz\xF6r az elem-injectorok a DOM-f\xE1n felfel\xE9, majd az environment injectorok, v\xE9g\xFCl a \`NullInjector\`, ami hib\xE1t dob.

### 2. Az injectorok t\xEDpusai

| Injector | Honnan kapja a providereket | \xC9lettartam | Tipikus tartalom |
| --- | --- | --- | --- |
| **NullInjector** | semmi | \u2013 | csak \`NullInjectorError\`-t dob (a l\xE1nc v\xE9ge) |
| **Platform injector** | \`platformBrowser([...])\`, \`providePlatformInitializer()\` | a b\xF6ng\xE9sz\u0151lap | t\xF6bb Angular alkalmaz\xE1s k\xF6z\xF6s r\xE9sze, glob\xE1lis error hook |
| **Root environment injector** | \`bootstrapApplication(App, { providers })\`, \`providedIn: 'root'\` | az alkalmaz\xE1s | \`HttpClient\`, \`Router\`, glob\xE1lis store-ok |
| **Route (environment) injector** | \`Route.providers\` (v14+) | am\xEDg a route akt\xEDv | feature-lok\xE1lis store, feature konfigur\xE1ci\xF3 |
| **Element (node) injector** | \`@Component/@Directive({ providers })\` \xE9s \`viewProviders\` | a komponens/direkt\xEDva p\xE9ld\xE1nya | n\xE9zet-lok\xE1lis \xE1llapot, form-szekci\xF3 szolg\xE1ltat\xE1s |
| **ModuleInjector** (legacy) | \`NgModule.providers\`, \`providedIn: SomeModule\` | a modul | r\xE9gi, \`NgModule\`-alap\xFA alkalmaz\xE1sok |

> Terminol\xF3gia: r\xE9gebbi dokument\xE1ci\xF3ban a \u201EModuleInjector\u201D \xE9s \u201EElementInjector\u201D p\xE1r szerepel. A standalone vil\xE1gban a ModuleInjector hely\xE9t az **EnvironmentInjector** vette \xE1t (a \`NgModuleRef.injector\` is ilyen), de a keres\xE9si logika ugyanaz.

### 3. Element injector \u2013 hogyan viselkedik
Az element injector a **sablonban elfoglalt hely** szerint kap p\xE9ld\xE1nyt, nem az oszt\xE1ly szerint. Ha egy komponens \`providers\`-ben regisztr\xE1l egy szolg\xE1ltat\xE1st, akkor:
- a komponens **minden p\xE9ld\xE1nya** saj\xE1t szolg\xE1ltat\xE1s-p\xE9ld\xE1nyt kap,
- a p\xE9ld\xE1ny a komponenssel egy\xFCtt j\xF6n l\xE9tre \xE9s **semmis\xFCl meg** (nincs \xE1llapot-\xE1tsziv\xE1rg\xE1s k\xE9t n\xE9zetl\xE1togat\xE1s k\xF6z\xF6tt),
- a komponens sablonj\xE1ban l\xE9v\u0151 minden gyerek ugyanezt a p\xE9ld\xE1nyt kapja, ha nem regisztr\xE1lja \xFAjra.

\`\`\`ts
@Component({
  selector: 'app-panel',
  providers: [PanelState],           // p\xE9ld\xE1nyonk\xE9nt egy PanelState
  template: \`<app-panel-body />\`,    // ugyanazt a PanelState-et injekt\xE1lja
})
export class Panel {}
\`\`\`
\`\`\`html
<app-panel />   <!-- PanelState #1 -->
<app-panel />   <!-- PanelState #2 \u2013 f\xFCggetlen -->
\`\`\`

**Direkt\xEDva is szolg\xE1ltathat.** Ez az Angular Material \xF6sszetett komponenseinek (tabs, accordion, table) alapmint\xE1ja: a sz\xFCl\u0151 direkt\xEDva/komponens regisztr\xE1l egy koordin\xE1tor szolg\xE1ltat\xE1st, a gyerekek pedig injekt\xE1lj\xE1k azt \u2013 \xEDgy nincs input-l\xE1ncol\xE1s (property drilling).

\`\`\`ts
@Directive({ selector: '[appAccordion]', providers: [AccordionCoordinator] })
export class AccordionDirective {}

@Component({ selector: 'app-accordion-item' })
export class AccordionItem {
  private readonly coordinator = inject(AccordionCoordinator);   // a sz\xFCl\u0151t\u0151l
}
\`\`\`

**\`providers\` vs \`viewProviders\`**: a \`viewProviders\` a beprojekt\xE1lt (\`ng-content\`) tartalom sz\xE1m\xE1ra **nem** l\xE1that\xF3 \u2013 l\xE1sd a *providers vs viewProviders* szekci\xF3t.

### 4. A felold\xE1s pontos menete
1. Az Angular megkeresi az injekt\xE1l\xE1st k\xE9r\u0151 **elem** injector\xE1t, \xE9s ott keresi a tokent.
2. Ha nincs, felmegy a **sz\xFCl\u0151 elem** injector\xE1ba \u2013 \xE9s \xEDgy tov\xE1bb a komponens-fa gy\xF6ker\xE9ig. Ez a DOM-f\xE1t k\xF6veti, **nem** az oszt\xE1lyok \xF6r\xF6kl\u0151d\xE9s\xE9t \xE9s nem az \`import\` szerkezetet.
3. Ha az elem-fa gy\xF6ker\xE9ig nem tal\xE1lta meg, \xE1tl\xE9p a hozz\xE1 tartoz\xF3 **environment injectorba** (komponens \u2192 route \u2192 root \u2192 platform).
4. V\xE9g\xFCl a \`NullInjector\` k\xF6vetkezik, ami \`NullInjectorError: No provider for X!\` hib\xE1t dob.

**Fontos k\xF6vetkezm\xE9ny:** ha egy szolg\xE1ltat\xE1st egy gyerekkomponens \`providers\`-\xE9ben regisztr\xE1ltunk, a **sz\xFCl\u0151 nem l\xE1tja**. A DI-l\xE1nc egyir\xE1ny\xFA, felfel\xE9 keres.

### 5. Felold\xE1s-m\xF3dos\xEDt\xF3k
\`\`\`ts
private readonly a = inject(Service);                          // teljes l\xE1nc
private readonly b = inject(Service, { self: true });          // csak a saj\xE1t element injector
private readonly c = inject(Service, { skipSelf: true });      // a saj\xE1tot kihagyva, sz\xFCl\u0151t\u0151l
private readonly d = inject(Service, { host: true });          // a host elemig
private readonly e = inject(Service, { optional: true });      // Service | null, nem dob hib\xE1t
\`\`\`
Kombin\xE1lhat\xF3k: \`inject(PARENT_FORM, { skipSelf: true, optional: true })\` \u2013 a tipikus \u201Eoptional sz\xFCl\u0151-kontextus\u201D minta.

A decorator-based megfelel\u0151k (\`@Self()\`, \`@SkipSelf()\`, \`@Host()\`, \`@Optional()\`) tov\xE1bbra is m\u0171k\xF6dnek; az \`inject()\` opci\xF3objektum a modern, aj\xE1nlott forma.

### 6. Provider-receptek (a \u201Et\xF6bbf\xE9le m\xF3dja\u201D a szolg\xE1ltat\xE1s megad\xE1s\xE1nak)

| Recept | Mit ad | Mikor |
| --- | --- | --- |
| \`Service\` (r\xF6vid forma) | \`{ provide: Service, useClass: Service }\` | a szok\xE1sos eset |
| \`useClass\` | m\xE1s oszt\xE1ly p\xE9ld\xE1nya ugyanarra a tokenre | k\xF6rnyezetf\xFCgg\u0151 implement\xE1ci\xF3 (szerver/b\xF6ng\xE9sz\u0151), mock |
| \`useValue\` | k\xE9sz \xE9rt\xE9k (objektum, konstans, mock) | konfigur\xE1ci\xF3, teszt-dupla |
| \`useFactory\` (+ \`deps\`) | f\xFCggv\xE9ny \xE1ltal el\u0151\xE1ll\xEDtott \xE9rt\xE9k | felt\xE9teles l\xE9trehoz\xE1s, fut\xE1sidej\u0171 d\xF6nt\xE9s |
| \`useExisting\` | **alias** egy m\xE1sik tokenre (nem \xFAj p\xE9ld\xE1ny) | absztrakt oszt\xE1ly \u2192 konkr\xE9t, CVA self-referencia |
| \`multi: true\` | t\xF6mb\xF6t \xE9p\xEDt ugyanabb\xF3l a tokenb\u0151l | interceptorok, valid\xE1torok, initializerek |

\`\`\`ts
providers: [
  FlightService,                                                  // r\xF6vid forma
  { provide: FLIGHT_REPOSITORY, useClass: HttpFlightRepository },  // interf\xE9sz \u2192 implement\xE1ci\xF3
  { provide: API_URL, useValue: 'https://api.example.com' },       // konstans
  { provide: LoggerService, useExisting: ConsoleLogger },          // alias, ugyanaz a p\xE9ld\xE1ny
  {
    provide: StorageService,
    useFactory: () => (isPlatformBrowser(inject(PLATFORM_ID)) ? new BrowserStorage() : new ServerStorage()),
  },
  { provide: VALIDATORS, useValue: emailValidator, multi: true },  // t\xF6bb \xE9rt\xE9k egy tokenre
]
\`\`\`

**\`useExisting\` vs \`useClass\`**: a \`useClass\` **\xFAj p\xE9ld\xE1nyt** hoz l\xE9tre, a \`useExisting\` a m\xE1r l\xE9tez\u0151 p\xE9ld\xE1nyra mutat. Ha ugyanaz az objektum kell k\xE9t token alatt (pl. absztrakt oszt\xE1ly \xE9s konkr\xE9t t\xEDpus), \`useExisting\` a helyes.

### 7. Nem-oszt\xE1ly \xE9rt\xE9kek injekt\xE1l\xE1sa \u2013 \`InjectionToken\`
Interf\xE9szt \xE9s primit\xEDv t\xEDpust nem lehet tokenk\xE9nt haszn\xE1lni (a TypeScript interf\xE9sz a ford\xEDt\xE1s ut\xE1n nem l\xE9tezik). Ez\xE9rt kell \`InjectionToken\`:

\`\`\`ts
export interface AppConfig { apiUrl: string; retries: number; }

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG', {
  factory: () => ({ apiUrl: '/api', retries: 3 }),   // tree-shakeable alap\xE9rt\xE9k
});

// megad\xE1s
providers: [{ provide: APP_CONFIG, useValue: { apiUrl: 'https://api.example.com', retries: 5 } }]

// olvas\xE1s
private readonly config = inject(APP_CONFIG);
\`\`\`
- A le\xEDr\xF3 sztring (\`'APP_CONFIG'\`) **csak** hiba\xFCzenetben jelenik meg, nem azonos\xEDt\xF3 \u2013 k\xE9t k\xFCl\xF6n \`new InjectionToken('X')\` k\xE9t k\xFCl\xF6nb\xF6z\u0151 token.
- A \`factory\` opci\xF3val a token \xF6nmag\xE1ban is m\u0171k\xF6dik provider n\xE9lk\xFCl, \xE9s tree-shakeable (ez a \`providedIn: 'root'\` megfelel\u0151je nem-oszt\xE1ly \xE9rt\xE9kre).
- Absztrakt oszt\xE1ly **haszn\xE1lhat\xF3** tokenk\xE9nt (\`abstract class FlightRepository\`), \xE9s t\xEDpusk\xE9nt is szolg\xE1l \u2013 gyakran k\xE9nyelmesebb, mint interf\xE9sz + token.

**Be\xE9p\xEDtett tokenek, amiket \xE9rdemes ismerni:** \`DOCUMENT\`, \`PLATFORM_ID\`, \`LOCALE_ID\`, \`APP_ID\`, \`ElementRef\`, \`ChangeDetectorRef\`, \`ViewContainerRef\`, \`TemplateRef\`, \`NgZone\`, \`DestroyRef\`, \`ApplicationRef\`, \`Injector\`, \`EnvironmentInjector\`, \`REQUEST\` / \`RESPONSE_INIT\` (SSR, v19+).

### 8. Szolg\xE1ltat\xE1s injekt\xE1l\xE1sa szolg\xE1ltat\xE1sba
Ugyanaz a szab\xE1ly: \`providedIn: 'root'\` szolg\xE1ltat\xE1s csak a root environment injectorban l\xE9v\u0151 (vagy szint\xE9n root) szolg\xE1ltat\xE1sokat l\xE1tja \u2013 **nem** l\xE1tja egy komponens \`providers\`-\xE9ben regisztr\xE1lt p\xE9ld\xE1nyt.

\`\`\`ts
@Injectable({ providedIn: 'root' })
export class FlightService {
  private readonly http = inject(HttpClient);       // oszt\xE1lymez\u0151ben, injection contextben
  private readonly config = inject(APP_CONFIG);
}
\`\`\`
Ha egy root szolg\xE1ltat\xE1snak m\xE9gis komponens-lok\xE1lis \xE9rt\xE9kre van sz\xFCks\xE9ge, az architekt\xFAra ford\xEDtva van: a komponens-lok\xE1lis szolg\xE1ltat\xE1s injekt\xE1lja a glob\xE1lisat, ne viszont.

### 9. Injection context \xE9s programozott felold\xE1s
Az \`inject()\` csak **injection contextben** h\xEDvhat\xF3: oszt\xE1lymez\u0151-inicializ\xE1l\xF3ban, konstruktorban, \`factory\` f\xFCggv\xE9nyben, \`provideXyz()\` belsej\xE9ben, \`runInInjectionContext()\` blokkban.

\`\`\`ts
// nem injection contextben: elt\xE1rolt injectorral
private readonly injector = inject(Injector);

lateResolve(): void {
  const service = this.injector.get(FlightService);
}

// vagy futtat\xE1s injection contextben (v16+)
runInInjectionContext(this.injector, () => {
  const service = inject(FlightService);
});
\`\`\`
Tipikus hib\xE1k: \`inject()\` egy esem\xE9nykezel\u0151ben, \`setTimeout\` callbackben vagy \`subscribe\`-on bel\xFCl \u2192 \`NG0203\` hiba.

### 10. Cirkul\xE1ris f\xFCgg\u0151s\xE9g
Ha \`A\` injekt\xE1lja \`B\`-t \xE9s \`B\` injekt\xE1lja \`A\`-t, az Angular \`NG0200: Circular dependency in DI\` hib\xE1t dob. Megold\xE1sok, roml\xE1si sorrendben:
1. **Harmadik szolg\xE1ltat\xE1s kiemel\xE9se** a k\xF6z\xF6s r\xE9szre \u2013 ez az eg\xE9szs\xE9ges megold\xE1s (a ciklus mindig tervez\xE9si hiba jele).
2. **Esem\xE9ny/signal** haszn\xE1lata direkt h\xEDv\xE1s helyett (az egyik f\xE9l nem h\xEDvja a m\xE1sikat, csak jelez).
3. Lazy felold\xE1s: \`private readonly injector = inject(Injector)\` \xE9s k\xE9s\u0151bb \`injector.get(B)\`.
4. \`forwardRef()\` \u2013 ha a hivatkoz\xE1s sorrendje a probl\xE9ma (nem a val\xF3di ciklus), pl. \`NG_VALUE_ACCESSOR\` self-provider eset\xE9n.

### 11. DI vizsg\xE1lata Angular DevToolsban
Az **Angular DevTools** (Chrome/Edge kieg\xE9sz\xEDt\u0151) *Injector Tree* f\xFCl\xE9n megjelenik:
- a teljes injector-hierarchia (environment \xE9s element injectorok k\xFCl\xF6n f\xE1val),
- melyik injector szolg\xE1ltatja a kiv\xE1lasztott komponens egyes f\xFCgg\u0151s\xE9geit,
- a komponens saj\xE1t providerei \xE9s az \xF6r\xF6kl\xF6tt providerek.

Ez a leggyorsabb \xFAt annak eld\xF6nt\xE9s\xE9hez, hogy egy szolg\xE1ltat\xE1sb\xF3l **h\xE1ny p\xE9ld\xE1ny** \xE9l, \xE9s melyik szintr\u0151l kapja a komponens. Konzolb\xF3l is vizsg\xE1lhat\xF3:
\`\`\`ts
// b\xF6ng\xE9sz\u0151 konzolban, kiv\xE1lasztott elemre
ng.getInjector($0);
ng.getComponent($0);
\`\`\`

### 12. NgModule \xE9s DI (legacy kontextus)
\`NgModule\`-alap\xFA alkalmaz\xE1sban:
- az \`NgModule.providers\` a **ModuleInjectorba** ker\xFCl, \xE9s a modul import\xE1l\xE1s\xE1val **alkalmaz\xE1sszint\u0171v\xE9** v\xE1lik \u2013 a lazy-loadolt modul viszont saj\xE1t child injectort kap, ez\xE9rt ott \xFAj p\xE9ld\xE1ny j\xF6n l\xE9tre (klasszikus \u201Ek\xE9t p\xE9ld\xE1ny ugyanabb\xF3l a service-b\u0151l\u201D hibaforr\xE1s),
- \`providedIn: SomeModule\` \u2013 a szolg\xE1ltat\xE1s csak akkor ker\xFCl a bundle-be, ha a modult haszn\xE1lj\xE1k,
- \`forRoot()\` / \`forChild()\` minta: a \`forRoot()\` a providereket adja (csak egyszer, a root modulban), a \`forChild()\` csak a deklar\xE1ci\xF3kat. A standalone vil\xE1gban ezt a **\`provideXyz()\`** f\xFCggv\xE9ny v\xE1ltotta ki (l\xE1sd a *Providers (standalone)* r\xE9szt).

Standalone alkalmaz\xE1sban ez a r\xE9teg elt\u0171nik: \`providedIn: 'root'\` a glob\xE1lis, \`Route.providers\` a feature-lok\xE1lis, komponens \`providers\` a n\xE9zet-lok\xE1lis szolg\xE1ltat\xE1sokra.

### Mikor melyik injectort / provider-szintet haszn\xE1ljuk

| Sz\xFCks\xE9g | Hol regisztr\xE1ld | Mi\xE9rt |
| --- | --- | --- |
| Egy p\xE9ld\xE1ny az eg\xE9sz appban (\`HttpClient\`, auth, glob\xE1lis store) | \`providedIn: 'root'\` vagy \`bootstrapApplication({ providers })\` | Root **EnvironmentInjector** \u2013 mindenhol ugyanaz a p\xE9ld\xE1ny |
| Feature-lok\xE1lis \xE1llapot (csak egy lazy route alatt) | \`Route.providers\` | Route **EnvironmentInjector** \u2013 a feature elhagy\xE1sakor felszabadulhat |
| Komponens-p\xE9ld\xE1nyonk\xE9nti \xE1llapot (panel, wizard l\xE9p\xE9s) | \`@Component({ providers: [...] })\` | **Element injector** \u2013 minden \`<app-x>\` saj\xE1t p\xE9ld\xE1nyt kap |
| Csak a saj\xE1t view l\xE1ssa, a projected tartalom ne | \`viewProviders\` | Element injector, de \`ng-content\` fel\xE9 rejtett |
| T\xF6bb Angular-app k\xF6z\xF6s r\xE9sze egy lapon | \`platformBrowser([...])\` / platform initializer | **Platform injector** |
| Bootstrap el\u0151tt k\xF6telez\u0151 async bet\xF6lt\xE9s | \`provideAppInitializer(...)\` | App environment \u2013 **megv\xE1rja** a Promise-t |
| DI fel\xE1ll\xE1sakor azonnali (nem blokkol\xF3) oldalhat\xE1s | \`provideEnvironmentInitializer(...)\` | Environment injector \u2013 **nem** v\xE1r async-et |
| Tesztben fel\xFCl\xEDr\xE1s | \`TestBed.configureTestingModule({ providers })\` / \`TestBed.overrideProvider\` | Teszt environment injector |

**D\xF6nt\xE9si fa (r\xF6viden):**
1. Kell-e **\xE1llapot** a szolg\xE1ltat\xE1snak? Ha nem \u2192 \`providedIn: 'root'\` (stateless helper).
2. Az \xE1llapot **glob\xE1lis** (user session)? \u2192 root. **Feature-szint\u0171**? \u2192 \`Route.providers\`. **N\xE9zet-p\xE9ld\xE1ny**? \u2192 komponens \`providers\`.
3. A gyerek DOM-b\xF3l kell el\xE9rni, a projected tartalomb\xF3l nem? \u2192 \`viewProviders\`.
4. Bootstrap el\u0151tt kell adat? \u2192 \`provideAppInitializer\`. Csak regisztr\xE1lni/ind\xEDtani kell? \u2192 \`provideEnvironmentInitializer\`.

\`\`\`ts
// root \u2013 mindenki ugyanazt kapja
@Injectable({ providedIn: 'root' })
export class AuthStore { /* ... */ }

// route \u2013 csak a /checkout fa alatt \xE9l
export const checkoutRoutes: Routes = [{
  path: 'checkout',
  providers: [CheckoutStore],
  loadComponent: () => import('./checkout.page'),
}];

// element \u2013 minden Panel saj\xE1t store-t kap
@Component({ selector: 'app-panel', providers: [PanelStore], template: \`...\` })
export class Panel {}
\`\`\`

### \xD6k\xF6lszab\xE1lyok
- Alap\xE9rtelmez\xE9s: \`providedIn: 'root'\`. Csak akkor l\xE9pj\xFCnk lejjebb, ha **p\xE9ld\xE1nyonk\xE9nti** \xE1llapot kell.
- N\xE9zet-lok\xE1lis store \u2192 komponens \`providers\`. Feature-lok\xE1lis store \u2192 \`Route.providers\`. Glob\xE1lis \u2192 \`'root'\`.
- Interf\xE9sz helyett absztrakt oszt\xE1ly vagy \`InjectionToken\` \u2013 \xEDgy cser\xE9lhet\u0151 az implement\xE1ci\xF3 tesztben \xE9s szerveroldalon.
- \`multi: true\` tokent mindig \`optional: true\`-val olvassunk, ha lehet, hogy senki nem szolg\xE1ltatta.
- Ha nem tudod, honnan j\xF6n egy p\xE9ld\xE1ny, ne tal\xE1lgass: Angular DevTools \u2192 Injector Tree.
## 172. Signal Semantics \u2013 Reactive Context, Auto-tracking, untracked (v16+ \xB7 v17 stable) https://angular.dev/guide/signals {#signal-szemantika-reaktiv-kontextus-auto-tracking-untracked-v16-v17-stable}
### Mi az a reakt\xEDv kontextus
Az Angular **automatikusan nyilv\xE1ntartja** (auto-tracking) az \xF6sszes signalt, amit egy reakt\xEDv kontextusban olvasunk. Alkalmaz\xE1sfejleszt\u0151i szemsz\xF6gb\u0151l az Angular mind\xF6ssze **k\xE9t** helyen hoz l\xE9tre reakt\xEDv kontextust:

1. a **sablon** (template),
2. az **effect**.

A \`computed\`-ben olvasott signalok is nyilv\xE1ntart\xE1sba ker\xFClnek, de ilyenkor nem saj\xE1t kontextust kapnak: az \u0151ket olvas\xF3 sablon vagy effect kontextusa \xE9rv\xE9nyes\xFCl.

### A tracking \xE1tterjed a h\xEDvott f\xFCggv\xE9nyekre
Ez a leggyakoribb meglepet\xE9s forr\xE1sa: az Angular akkor is k\xF6veti a signalt, ha azt egy **a kontextusb\xF3l h\xEDvott met\xF3dus** olvassa.

\`\`\`ts
export class FlightSearch {
  protected readonly filter = signal({ from: 'Hamburg', to: 'Graz' });

  constructor() {
    // az effect automatikusan k\xF6veti a logCriteria-ban olvasott \xF6sszes signalt
    effect(() => {
      this.logCriteria();
    });
  }

  private logCriteria(): void {
    const filter = this.filter(); // k\xF6vetve lesz, pedig az effectben nem is l\xE1tszik
    console.log('Criteria:', filter.from, '\u2192', filter.to);
  }
}
\`\`\`

Az effectet olvasva **nem l\xE1tszik**, hogy a \`filter\`-t\u0151l f\xFCgg. Canvasra rajzol\xF3 vagy imperat\xEDv renderel\u0151 effectn\xE9l ez pont k\xEDv\xE1natos; \xFCzleti logik\xE1n\xE1l viszont csapda.

### Ez\xE9rt nem h\xEDvunk \xFCzleti logik\xE1t effectb\u0151l

\`\`\`ts
effect(() => {
  const criteria = this.criteria();
  this.businessService.executeLogic(criteria); // \u26A0 ne
});
\`\`\`

Ha az \`executeLogic\` bel\xFCl olvassa az \`isLoading\` \xE9s a \`userId\` signalokat, akkor **azok v\xE1ltoz\xE1sa is \xFAjrafuttatja az effectet** \u2013 vagyis az alkalmaz\xE1s egy t\xE1voli pontj\xE1n t\xF6rt\xE9n\u0151 \xE1llapotv\xE1ltoz\xE1s \xFAjra t\xF6r\xF6lni fog rekordokat. A m\xE1sodik ok: az effect \u2013 a Resource API-val ellent\xE9tben \u2013 **nem kezeli a versenyhelyzetet**, az \xE1tfed\u0151 h\xEDv\xE1sok fel\xFCl\xEDrhatj\xE1k egym\xE1s eredm\xE9ny\xE9t.

### Explicit effect \`untracked\`-kel

\`\`\`ts
// csak a criteria v\xE1ltoz\xE1s\xE1ra fut \xFAjra
effect(() => {
  const criteria = this.criteria();
  untracked(() => {
    this.businessService.executeLogic(criteria);
  });
});
\`\`\`

Az \`untracked\` blokkban olvasott signalok nem ker\xFClnek nyilv\xE1ntart\xE1sba. A minta a k\xF6z\xF6ss\xE9gben **vitatott**: megoldja a fenti probl\xE9m\xE1t, de \xE1tl\xE1thatatlanabb\xE1 teszi a k\xF3dot, nem illik a reakt\xEDv programoz\xE1s szellem\xE9be (ahol az \xE9rt\xE9kek egym\xE1sb\xF3l sz\xE1rmaznak), nehezen debugolhat\xF3 l\xE1ncreakci\xF3kat \xE9s ciklusokat okozhat, \xE9s a race conditiont tov\xE1bbra sem kezeli. El\u0151sz\xF6r mindig k\xE9rdezz\xFCk meg: ez t\xE9nyleg effect, vagy ink\xE1bb \`computed\` / \`resource\` / esem\xE9nykezel\u0151?

### Felt\xE9teles olvas\xE1s = felt\xE9teles tracking
A signal akkor is \u201Eleker\xFCl a list\xE1r\xF3l\u201D, ha egy fut\xE1s sor\xE1n **nem olvassuk**:

\`\`\`ts
effect(() => {
  if (isDelayed()) {
    console.log(delay()); // a delay csak akkor k\xF6vetett, ha isDelayed() igaz
  }
});
\`\`\`

Ha az \`isDelayed\` false lesz, a \`delay\` v\xE1ltoz\xE1sa t\xF6bb\xE9 nem futtatja \xFAjra az effectet. Ha mindig kell a reakci\xF3, olvassuk ki **a felt\xE9tel el\u0151tt**:

\`\`\`ts
effect(() => {
  const isDelayedValue = isDelayed();
  const delayValue = delay();
  if (isDelayedValue) {
    console.log(delayValue);
  }
});
\`\`\`

Ugyanez \xE9rv\xE9nyes a \`computed\`-re \xE9s a sablonban olvasott signalokra is. A mem\xF3riasziv\xE1rg\xE1s ellen az Angular a hordoz\xF3 egys\xE9g (pl. komponens) megsemmis\xFCl\xE9sekor automatikusan le\xE1ll\xEDtja a trackinget.

### \xD6k\xF6lszab\xE1lyok
- Effect = **mell\xE9khat\xE1s a keretrendszeren k\xEDv\xFClre** (canvas, harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 lib, logol\xE1s, \`localStorage\`), nem \xE1llapotterjeszt\xE9s.
- Sz\xE1rmaztatott \xE9rt\xE9k \u2192 \`computed\`. \xCDrhat\xF3 sz\xE1rmaztatott \xE9rt\xE9k \u2192 \`linkedSignal\`. Aszinkron bet\xF6lt\xE9s \u2192 \`resource\`.
- Ha egy effectben \`set()\` / \`patchState()\` h\xEDv\xE1s van, az majdnem mindig tervez\xE9si hiba.

## 173. Glitch-Free Behavior, Equality and Immutability (v16+ \xB7 v17 stable) https://angular.dev/guide/signals {#glitch-free-viselkedes-egyenloseg-es-immutabilitas-v16-v17-stable}
### Glitch-free: nincs k\xF6ztes \xE1llapot
Az Angular signaljai **glitch-free**-k: a fogyaszt\xF3 (sablon, effect) sosem l\xE1t inkonzisztens k\xF6ztes \xE1llapotot. T\xF6bb signal m\xF3dos\xEDt\xE1sa ut\xE1n a reakt\xEDv kontextus **egyszer** fut le, a v\xE9gleges \xE9rt\xE9kekkel.

\`\`\`ts
this.filter.update((f) => ({ ...f, from: 'Paris' }));
this.filter.update((f) => ({ ...f, from: 'Frankfurt' }));
this.filter.update((f) => ({ ...f, from: 'New York' }));
this.filter.update((f) => ({ ...f, to: 'Berlin' }));
this.filter.update((f) => ({ ...f, to: 'Zurich' }));
this.filter.update((f) => ({ ...f, to: 'London' }));
\`\`\`

Az effect **egyszer** fut le, \xE9s \`New York\` + \`London\` \xE9rt\xE9ket \xEDr ki. Ez megakad\xE1lyozza az inkonzisztens \xE1llapotot \xE9s a felesleges renderel\xE9st.

**A m\xE1sik oldala:** a signal **nem alkalmas esem\xE9ny vagy id\u0151beli adatfolyam \xE1br\xE1zol\xE1s\xE1ra** \u2013 a gyorsan k\xF6vet\u0151 \xFCzenetek elvesznek. Erre az RxJS \xE9s az Observable val\xF3. (Ez magyar\xE1zza azt is, hogy az \`rxMethod\` pipe-j\xE1n a signal kezd\u0151\xE9rt\xE9ke mi\xE9rt nem folyik \xE1t.)

### Egyenl\u0151s\xE9g: alapb\xF3l \`===\`
\xCDr\xE1skor az Angular ellen\u0151rzi, hogy az \xE9rt\xE9k **t\xE9nyleg** v\xE1ltozott-e:

\`\`\`ts
const count = signal(0);
count.set(0);
count.set(0); // nincs \xE9rtes\xEDt\xE9s, nincs \xFAjrarenderel\xE9s
\`\`\`

Primit\xEDvekn\xE9l ez j\xF3l m\u0171k\xF6dik. Objektumn\xE1l \xE9s t\xF6mbn\xE9l viszont a \`===\` **referenci\xE1t** hasonl\xEDt, nem tartalmat \u2013 ez\xE9rt \xFAj p\xE9ld\xE1nyt kell l\xE9trehozni:

\`\`\`ts
flight.update((flight) => ({
  ...flight,
  date: newDate,
  delayed: true,
}));
\`\`\`

A spread sek\xE9ly m\xE1solatot k\xE9sz\xEDt, a fel\xFCl\xEDrt mez\u0151k \xFAjak, az eredm\xE9ny \xFAj referencia \u2013 \xEDgy az Angular \xE9szleli a v\xE1ltoz\xE1st.

### Immutabilit\xE1s \xE9s OnPush \xF6sszef\xFCgg\xE9se
Az OnPush is az immutabilit\xE1sra \xE9p\xFCl. A \`@for\`-ban renderelt k\xE1rty\xE1kn\xE1l:

\`\`\`html
@for (flight of flights(); track flight.id) {
  <app-flight-card [item]="flight" [selected]="basket()[flight.id]" />
}
\`\`\`

Az Angular a r\xE9gi \xE9s az \xFAj \`flight\` objektumot \`===\`-szel veti \xF6ssze. Ha a referencia azonos, **nem** friss\xEDti az adott \`FlightCard\`-ot; ha elt\xE9r, k\xF6zelebbr\u0151l megn\xE9zi a bindingjait. Ha helyben mut\xE1ljuk az objektumot (\`flight.delayed = true\`), a referencia v\xE1ltozatlan marad, \xE9s a k\xE1rtya **nem friss\xFCl**.

R\xF6viden: **k\xF6t\xF6tt objektumot \xE9s t\xF6mb\xF6t mindig \xFAj p\xE9ld\xE1nyk\xE9nt \xEDrjunk vissza.**

### Egy\xE9ni egyenl\u0151s\xE9g-f\xFCggv\xE9ny

\`\`\`ts
const point = signal({ x: 0, y: 0 }, { equal: (a, b) => a.x === b.x && a.y === b.y });
\`\`\`

A gyakorlatban ritk\xE1n kell, \xE9s alkalmaz\xE1sk\xF3dban \xE1ltal\xE1ban t\xF6bb zavart okoz, mint hasznot. Tipikus indokolt eset: nagy, dr\xE1g\xE1n \xFAjrasz\xE1molt strukt\xFAra, ahol m\xE9rhet\u0151 a nyeres\xE9g.

### Gyakori hib\xE1k

| Hiba | K\xF6vetkezm\xE9ny | Megold\xE1s |
|---|---|---|
| \`items().push(x)\` | nincs v\xE1ltoz\xE1s\xE9szlel\xE9s | \`items.update(i => [...i, x])\` |
| \`state().user.name = 'x'\` | n\xE9ma elavul\xE1s a UI-ban | \xFAj objektum a l\xE1ncon v\xE9gig |
| \`signal\` esem\xE9nyekhez (toast, gombnyom\xE1s) | eldobott \xFCzenetek | \`Subject\` / RxJS |
| m\xE9ly objektum egyetlen signalban | felesleges \xFAjrasz\xE1m\xEDt\xE1s | bontsuk kisebb signalokra vagy \`computed\`-ekre |

## 174. The Signal Graph \u2013 Designing Reactive Data Flow (v17+ \xB7 resource v19+) https://angular.dev/guide/signals {#a-signal-graf-reaktiv-adatfolyam-tervezese-v17-resource-v19}
### Mit tart nyilv\xE1n az Angular
Az Angular a h\xE1tt\xE9rben **signal gr\xE1fot** \xE9p\xEDt: egy adatszerkezetet arr\xF3l, hogy a signalok, a \`computed\`-ek \xE9s a fogyaszt\xF3k (effectek, sablonok) hogyan f\xFCggnek egym\xE1st\xF3l. Ez a gr\xE1f **az alkalmaz\xE1s adat\xE1raml\xE1sa**. Ha ebben gondolkodunk, a reakt\xEDv folyam tervez\xE9se term\xE9szetess\xE9 v\xE1lik.

### Tipikus folyam

\`\`\`
filter (signal)
   \u2514\u2500\u25BA flightsResource (httpResource)   \u2500\u2500 aszinkron projekci\xF3
          \u2514\u2500\u25BA flights (signal)
                 \u2514\u2500\u25BA flightsWithDelays (computed) \u25C4\u2500\u2500 delayInMin (signal)
                        \u2514\u2500\u25BA sablon
\`\`\`

\`\`\`ts
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
\`\`\`

### Tervez\xE9si elvek
- **Forr\xE1sok (writable signal) kevesen legyenek**: felhaszn\xE1l\xF3i bemenet, route param\xE9ter, kapcsol\xF3\xE1ll\xE1s. Minden m\xE1s **sz\xE1rmaztatott**.
- A gr\xE1f **ir\xE1ny\xEDtott \xE9s k\xF6rmentes**: ha k\xF6r keletkezik, az azt jelenti, hogy k\xE9t \xE9rt\xE9ket egym\xE1sb\xF3l akarunk levezetni \u2013 valamelyiket forr\xE1ss\xE1 kell tenni (\`linkedSignal\`).
- **A lev\xE9l a sablon.** Ha egy \xE9rt\xE9ket csak megjelen\xEDteni akarunk, ne t\xE1roljuk \u2013 sz\xE1moljuk.
- Aszinkron l\xE9p\xE9s a gr\xE1fban mindig \`resource\` / \`httpResource\` / \`rxResource\`, mert az kezeli a \`loading\`, \`error\`, \`reload\` \xE1llapotot \xE9s a versenyhelyzetet is.
- Ami a gr\xE1fon **k\xEDv\xFClre** hat (canvas, analytics, harmadik f\xE9l), az \`effect\`.

### Mi ellen v\xE9d ez a gondolkod\xE1sm\xF3d
- Nincs \u201Eki felejtette el friss\xEDteni ezt a mez\u0151t\u201D hiba: a sz\xE1rmaztat\xE1s garant\xE1lja a szinkront.
- Nincs k\xE9zzel hangolt friss\xEDt\xE9si sorrend: a glitch-free tulajdons\xE1g rendezi.
- A gr\xE1f **olvashat\xF3 dokument\xE1ci\xF3**: code review-ban a \`computed\`-ek l\xE1nc\xE1b\xF3l l\xE1tszik az \xFCzleti szab\xE1ly.

### Diagnosztika
Angular DevTools \u2192 *Profiler*, illetve \`ng.enableProfiling()\` a konzolban: l\xE1tszik, mely komponens change detectionje mennyi ideig tart. Ha egy \`computed\` gyan\xFAsan gyakran fut, majdnem mindig egy f\xF6l\xF6sleges forr\xE1ssignal (vagy egy effectben v\xE9gzett \xEDr\xE1s) van a l\xE1ncban.

## 175. The New Animations API \u2013 animate.enter / animate.leave (v20.2+ \xB7 v21 expanded) https://angular.dev/guide/animations/enter-and-leave {#az-uj-animacios-api-animate-enter-animate-leave-v20-2-v21-bovitett}
A \`@angular/animations\` csomag v20-t\xF3l **deprecated**. Helyette k\xE9t be\xE9p\xEDtett binding j\xF6tt: az \`animate.enter\` \xE9s az \`animate.leave\`. Ezek nem direkt\xEDv\xE1k, hanem **ford\xEDt\xF3szint\u0171 funkci\xF3k**, amiket az Angular k\xF6zvetlen\xFCl ismer \u2013 sablonban \xE9s host bindingk\xE9nt is haszn\xE1lhat\xF3k. Nem kell hozz\xE1juk provider, \xE9s nem h\xFAznak be k\xFCl\xF6n anim\xE1ci\xF3s motort.

### animate.enter
Akkor fut, amikor az elem **beker\xFCl a DOM-ba**. Az anim\xE1ci\xF3 v\xE9g\xE9n az Angular **automatikusan leveszi** a megadott oszt\xE1lyt, \xEDgy az csak az anim\xE1ci\xF3 idej\xE9re akt\xEDv.

\`\`\`ts
@Component({
  selector: 'animate-enter-example',
  template: \`
    <button (click)="toggleVisibility()">Toggle element</button>
    @if (isVisible()) {
      <div class="container" animate.enter="enter-animation">
        <p>animate.enter example</p>
      </div>
    }
  \`,
  styles: [\`
    .container { border: solid 1px black; padding: 1rem; }
    .enter-animation { animation: slide-fade 1s; }
    @keyframes slide-fade {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  \`],
})
export class EnterExample {
  readonly isVisible = signal(false);

  toggleVisibility(): void {
    this.isVisible.update((v) => !v);
  }
}
\`\`\`

T\xF6bb oszt\xE1ly is megadhat\xF3 sz\xF3k\xF6zzel elv\xE1lasztva, \xE9s az \xE9rt\xE9k k\xF6thet\u0151 is: \`[animate.enter]="enterClass()"\`.

### animate.leave
Az elem **elt\xE1vol\xEDt\xE1sa el\u0151tt** fut le, \xE9s az Angular **megv\xE1rja az anim\xE1ci\xF3 v\xE9g\xE9t**, csak ut\xE1na csatolja le az elemet. Ez az, ami\xE9rt kor\xE1bban \`setTimeout\`-os ker\xFCl\u0151megold\xE1s kellett.

\`\`\`ts
@Component({
  template: \`
    <button (click)="toggleVisibility()">Toggle element</button>
    @if (isVisible()) {
      <div class="container" animate.leave="leave-animation">
        <p>animate.leave example</p>
      </div>
    }
  \`,
  styles: [\`
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
  \`],
})
export class LeaveExample {
  readonly isVisible = signal(false);

  toggleVisibility(): void {
    this.isVisible.update((v) => !v);
  }
}
\`\`\`

A nat\xEDv CSS \`@starting-style\` a bel\xE9p\u0151 \xE1llapot kezd\u0151\xE9rt\xE9k\xE9t adja meg \u2013 vele az \`animate.enter\` sok esetben kiv\xE1lthat\xF3 tiszta CSS-sel.

### Event binding \xE9s k\xFCls\u0151 anim\xE1ci\xF3s k\xF6nyvt\xE1rak
Mindk\xE9t binding t\xE1mogatja az esem\xE9nyk\xF6t\xE9s-szintaxist. Az \`$event\` t\xEDpusa \`AnimationCallbackEvent\`: tartalmazza az elemet (\`target\`), \xE9s van rajta egy \`animationComplete()\` f\xFCggv\xE9ny, amivel **jelezz\xFCk a keretrendszernek**, hogy v\xE9gezt\xFCnk.

\`\`\`ts
@Component({
  template: \`
    @if (isVisible()) {
      <div class="container" (animate.leave)="animateLeaving($event)">
        <p>event binding example</p>
      </div>
    }
  \`,
})
export class EventBindingExample {
  readonly isVisible = signal(false);

  animateLeaving(event: AnimationCallbackEvent): void {
    gsap.to(event.target, {
      duration: 1,
      x: 100,
      onComplete: () => event.animationComplete(), // \u26A0 en\xE9lk\xFCl az elem nem t\u0171nik el
    });
  }
}
\`\`\`

### Gyakorlati megjegyz\xE9sek
- **Kisebb bundle**: nincs \`@angular/animations\` \xE9s nincs anim\xE1ci\xF3s motor a f\u0151 chunkban.
- Migr\xE1ci\xF3kor a \`@Component({ animations: [...] })\` metaadat, a \`trigger\`/\`state\`/\`transition\` DSL \xE9s a \`provideAnimations()\` kiv\xE1lthat\xF3 CSS-sel \xE9s a k\xE9t bindinggal. \xD6sszetettebb, sorrendezett anim\xE1ci\xF3hoz maradjon a Web Animations API vagy egy k\xFCls\u0151 k\xF6nyvt\xE1r az event binding m\xF6g\xF6tt.
- A \`prefers-reduced-motion\` figyelembev\xE9tele tov\xE1bbra is a mi felel\u0151ss\xE9g\xFCnk \u2013 a CSS media query a legegyszer\u0171bb \xFAt.
- Tesztben nincs sz\xFCks\xE9g \`provideNoopAnimations()\`-re, mert nincs mit kikapcsolni. A jsdom viszont nem futtat CSS anim\xE1ci\xF3t, ez\xE9rt \`animate.leave\` esem\xE9nyk\xF6t\xE9sn\xE9l az \`animationComplete()\` h\xEDv\xE1s\xE1t mockoljuk.

## 176. HttpClient Fetch Tuning and New HttpResponse Fields (withFetch v16+ \xB7 \xFAj opci\xF3k v21+) https://angular.dev/guide/http/making-requests {#httpclient-fetch-alapu-finomhangolasa-es-httpresponse-uj-mezoi-withfetch-v16-uj-opciok-v21}
Az \xFAj k\xE9r\xE9sopci\xF3k (a \`timeout\` kiv\xE9tel\xE9vel) **csak** \`provideHttpClient(withFetch())\` mellett vagy \`httpResource\`-on kereszt\xFCl \xE9rv\xE9nyesek \u2013 ezek kapcsolj\xE1k \xE1t az Angulart a r\xE9gi \`XMLHttpRequest\`-r\u0151l a Fetch API-ra.

\`\`\`ts
bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch(), withInterceptors([authInterceptor]))],
});
\`\`\`

### K\xE9r\xE9sopci\xF3k

\`\`\`ts
this.http.get<Flight[]>('/api/flight', {
  timeout: 5000,           // ms; letelte ut\xE1n a k\xE9r\xE9s megszakad
  cache: 'no-store',       // default | no-store | reload | no-cache | force-cache | only-if-cached
  priority: 'high',        // auto | high | low
  mode: 'cors',            // same-origin | no-cors | cors | navigate
  redirect: 'follow',      // follow | error | manual
  credentials: 'include',  // omit | same-origin | include
  referrerPolicy: 'no-referrer',
  integrity: 'sha384-...', // Subresource Integrity ellen\u0151rz\xE9s a v\xE1laszra
});
\`\`\`

Napi haszon:
- **\`timeout\`** \u2013 a lefagy\xF3 backend nem tartja \xF6r\xF6kk\xE9 \u201Eloading\u201D \xE1llapotban a UI-t. Egyetlen helyen, interceptorban is be\xE1ll\xEDthat\xF3 alap\xE9rtelmez\xE9sk\xE9nt.
- **\`priority\`** \u2013 az LCP-t befoly\xE1sol\xF3 k\xE9r\xE9s \`high\`, a h\xE1tt\xE9rben fut\xF3 telemetria \`low\`. List\xE1s \xE9s dashboard oldalakon m\xE9rhet\u0151 a nyeres\xE9g.
- **\`credentials\`** \u2013 cookie-alap\xFA authn\xE1l explicit, kisz\xE1m\xEDthat\xF3 viselked\xE9s.
- **\`cache: 'no-store'\`** \u2013 \xE9rz\xE9keny adatn\xE1l (profil, kos\xE1r) megakad\xE1lyozza a b\xF6ng\xE9sz\u0151-cache-t.

### \xDAj mez\u0151k a HttpResponse-on
- **\`responseType\`** \u2013 hogyan kezelte a b\xF6ng\xE9sz\u0151 a v\xE1laszt: \`"basic"\`, \`"cors"\`, \`"opaque"\` vagy \`"error"\`. CORS-hibakeres\xE9sn\xE9l ez mondja meg, hogy a v\xE1lasz egy\xE1ltal\xE1n olvashat\xF3 volt-e.
- **\`redirected\`** \u2013 volt-e \xE1tir\xE1ny\xEDt\xE1s. Hasznos auth-flow k\xF6vet\xE9s\xE9hez, biztons\xE1gi szab\xE1lyok kik\xE9nyszer\xEDt\xE9s\xE9hez \xE9s analitik\xE1hoz, egyedi fetch-logika n\xE9lk\xFCl.

\`\`\`ts
this.http.get('/api/me', { observe: 'response' }).subscribe((res) => {
  if (res.redirected) {
    this.logger.warn('Redirect t\xF6rt\xE9nt \u2013 val\xF3sz\xEDn\u0171leg lej\xE1rt a session');
  }
});
\`\`\`

### \xD6k\xF6lszab\xE1lyok
- A \`withFetch()\` ma a default v\xE1laszt\xE1s; n\xE9lk\xFCle a fenti opci\xF3k nem \xE9lnek, \xE9s a \`keepalive\` sem m\u0171k\xF6dik.
- Az opci\xF3kat ne sz\xF3rjuk sz\xE9t a komponensekben: az \xE1ltal\xE1nos szab\xE1lyokat (timeout, credentials, correlation ID) **interceptorban** \xE1ll\xEDtsuk be, csak a kiv\xE9telt \xEDrjuk a h\xEDv\xE1s hely\xE9re.

## 177. Router Details \u2013 Injection Context, Scroll, Redirect Parameters (v21\u2013v22) https://angular.dev/guide/routing {#router-finomsagok-injection-context-scroll-redirect-parameterek-v21-v22}
### Lazy loading injection contextben (v21+)
A \`loadChildren\` \xE9s a \`loadComponent\` **a route injection contextj\xE9ben** fut, \xEDgy k\xF6zvetlen\xFCl injekt\xE1lhatunk benn\xFCk szolg\xE1ltat\xE1st. Feature flag alap\xFA route-v\xE1laszt\xE1s \xEDgy tr\xFCkk\xF6k n\xE9lk\xFCl megoldhat\xF3:

\`\`\`ts
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
\`\`\`

\xCDgy a lazy loading az alkalmaz\xE1s **val\xF3s fut\xE1sidej\u0171 \xE1llapot\xE1ra** alapozhat\xF3, glob\xE1lis v\xE1ltoz\xF3k \xE9s ker\xFCl\u0151utak n\xE9lk\xFCl.

### Navig\xE1ci\xF3nk\xE9nti scroll-vez\xE9rl\xE9s (v22+)
A \`NavigationBehaviorOptions\` \xFAj \`scroll\` mez\u0151je akkor is szab\xE1lyozza az egyes navig\xE1ci\xF3kat, ha a routerben be van kapcsolva a scroll restoration:

\`\`\`ts
this.router.navigate(['/flights', id], { scroll: 'manual' });            // ne g\xF6rgessen
this.router.navigate(['/flights', id], { scroll: 'after-transition' });  // a NavigationEnd ut\xE1n g\xF6rgessen
\`\`\`

A \`'manual'\` eset\xE9n a router a navig\xE1ci\xF3 v\xE9g\xE9n **nem** g\xF6rget \u2013 tipikus eset: tab-v\xE1lt\xE1s vagy sz\u0171r\u0151 m\xF3dos\xEDt\xE1sa, ahol a poz\xEDci\xF3 megtart\xE1sa a helyes UX.

### RunGuardsAndResolvers injection contextben (v22+)
A \`runGuardsAndResolvers\` f\xFCggv\xE9nyv\xE1ltozata is injection contextben fut, \xEDgy a guard/resolver \xFAjrafuttat\xE1si szab\xE1lya f\xFCgghet szolg\xE1ltat\xE1sokt\xF3l \u2013 p\xE9ld\xE1ul jogosults\xE1gt\xF3l vagy feature flagt\u0151l.

### Redirect f\xFCggv\xE9ny param\xE9terei (v22+)
A \`RedirectFunction\` megkapja a \`paramMap\`-et \xE9s a \`queryParamMap\`-et, \xEDgy az \xE1tir\xE1ny\xEDt\xE1s sor\xE1n a param\xE9terek k\xE9nyelmesen el\xE9rhet\u0151k:

\`\`\`ts
const routes: Routes = [
  {
    path: 'old-user/:id',
    redirectTo: (params) => {
      const userId = params.paramMap.get('id');
      const source = params.queryParamMap.get('source');
      return \`/users/\${userId}?ref=\${source}\`;
    },
  },
];
\`\`\`

### Elavult component input \xE9rt\xE9kek kezel\xE9se (v22+)
\`withComponentInputBinding()\` mellett szab\xE1lyozhat\xF3, mi t\xF6rt\xE9njen, ha egy komponens inputhoz nincs illeszked\u0151 router-adat:
- **\`'alwaysUndefined'\`** \u2013 minden nem illeszked\u0151 inputot t\xF6r\xF6l, \xEDgy nem marad elavult \xE9rt\xE9k.
- **\`'undefinedIfStale'\`** \u2013 szelekt\xEDvebb: \xE9rintetlen\xFCl hagyja azokat az inputokat, amiket a router az adott komponensp\xE9ld\xE1nyhoz **sosem** adott meg, de \`undefined\`-ra \xE1ll\xEDtja azokat, amelyeknek kor\xE1bban volt router-\xE9rt\xE9ke, \xE9s az elt\u0171nt.

Az \`'undefinedIfStale'\` a biztons\xE1gos v\xE1laszt\xE1s \xFAjrahasznos\xEDtott komponensp\xE9ld\xE1nyokn\xE1l \u2013 amikor ugyanaz a komponens marad akt\xEDv k\xE9t param\xE9terv\xE1lt\xE1s k\xF6z\xF6tt.

## 178. Common Runtime Error Codes and Debugging (v2+ \xB7 hydration hib\xE1k v16+) https://angular.dev/errors {#gyakori-futasideju-hibakodok-es-debugolas-v2-hydration-hibak-v16}
Az Angular hiba\xFCzenetei \`NGxxxx\` k\xF3ddal kezd\u0151dnek, \xE9s a k\xF3d alapj\xE1n az angular.dev-en teljes magyar\xE1zat \xE9rhet\u0151 el (\`https://angular.dev/errors/NG0100\`). Az al\xE1bbiak azok, amikkel a napi munk\xE1ban t\xE9nyleg tal\xE1lkozunk.

| K\xF3d | \xDCzenet | Tipikus ok | Megold\xE1s |
|---|---|---|---|
| **NG0100** | ExpressionChangedAfterItHasBeenCheckedError | a sablonban olvasott \xE9rt\xE9k a change detection ut\xE1n m\xF3dosul (pl. \`ngAfterViewInit\`-ben \xEDrt property, vagy sablonban h\xEDvott, minden ciklusban \xFAj objektumot ad\xF3 f\xFCggv\xE9ny) | signal / \`computed\`, az \xEDr\xE1s \xE1thelyez\xE9se el\u0151bbre, v\xE9gs\u0151 esetben \`afterNextRender\` |
| **NG0200** | Circular dependency in DI | \`A\` injekt\xE1lja \`B\`-t \xE9s ford\xEDtva | k\xF6z\xF6s r\xE9sz kiemel\xE9se harmadik szolg\xE1ltat\xE1sba (a ciklus tervez\xE9si hiba jele) |
| **NG0201** | No provider for X | hi\xE1nyz\xF3 \`providedIn\` / \`providers\`, vagy rossz injectorban keress\xFCk | \`@Injectable({ providedIn: 'root' })\`, route- vagy komponensszint\u0171 \`providers\` |
| **NG0203** | inject() must be called from an injection context | \`inject()\` callbackben, \`setTimeout\`-ban vagy met\xF3dusban | mez\u0151inicializ\xE1l\xF3ban vagy konstruktorban h\xEDvjuk, illetve \`runInInjectionContext()\` |
| **NG0301** | Export not found | \`#ref="ngForm"\`-szer\u0171 exportName nem l\xE9tezik (hi\xE1nyz\xF3 import) | a direkt\xEDva felv\xE9tele az \`imports\` t\xF6mbbe |
| **NG0303** | Can't bind to 'ngModel' | \`FormsModule\` nincs import\xE1lva a standalone komponensben | \`imports: [FormsModule]\` |
| **NG0500 / NG0501 / NG0502** | Hydration node mismatch | a szerver \xE9s a kliens elt\xE9r\u0151 DOM-ot \xE1ll\xEDt el\u0151 (\`Math.random()\`, \`Date.now()\`, b\xF6ng\xE9sz\u0151-API a renderben) | determinisztikus render, \`afterNextRender\`, v\xE9gs\u0151 esetben \`ngSkipHydration\` az adott elemre |
| **NG0505** | Hydration was requested but no server rendering | \`provideClientHydration()\` SSR n\xE9lk\xFCl | SSR be\xE1ll\xEDt\xE1sa vagy a hydration provider elt\xE1vol\xEDt\xE1sa |
| **NG0912** | Component ID generation collision | k\xE9t komponens azonos szelektorral, sablonnal \xE9s st\xEDlussal | elt\xE9r\u0151 szelektor vagy tartalom; gyakran gener\xE1lt k\xF3dn\xE1l jelentkezik |
| **NG0913** | Image performance warning | \`NgOptimizedImage\` n\xE9lk\xFCl bet\xF6lt\xF6tt nagy LCP k\xE9p, hi\xE1nyz\xF3 \`priority\` | \`ngSrc\` + \`priority\` az LCP k\xE9pre |
| **NG0955** | Duplicate keys in @for track | a \`track\` kifejez\xE9s nem egyedi | val\xF3di azonos\xEDt\xF3 (\`track item.id\`); mut\xE1l\xF3d\xF3 list\xE1n\xE1l soha ne \`track $index\` |
| **NG01203** | No value accessor for form control | egyedi komponensre k\xF6t\xF6tt \`formControlName\` \`ControlValueAccessor\` n\xE9lk\xFCl | \`NG_VALUE_ACCESSOR\` provider, vagy (v21+) \`FormValueControl\` |

### Debugol\xE1s a b\xF6ng\xE9sz\u0151ben
- **Fejleszt\u0151i konzol** \u2013 a fenti hib\xE1k itt jelennek meg el\u0151sz\xF6r; a stack trace v15 \xF3ta az alkalmaz\xE1s k\xF3dj\xE1ra sz\u0171k\xEDtett (az Angular bels\u0151 keretei ki vannak hagyva).
- **Source map** \u2013 dev buildben alapb\xF3l van. Production buildben ne szolg\xE1ljuk ki publikusan, de t\xF6lts\xFCk fel a hibak\xF6vet\u0151 rendszerbe \u2013 a build hash minden loghoz kelleni fog, k\xFCl\xF6nben nem illeszthet\u0151.
- **Angular DevTools** (Chrome/Edge kieg\xE9sz\xEDt\u0151):
  - *Components* \u2013 komponensfa, az aktu\xE1lis input/output \xE9s \xE1llapot\xE9rt\xE9kek \xE9l\u0151ben szerkeszthet\u0151k.
  - *Profiler* \u2013 change detection ciklusok id\u0151bont\xE1sban; itt l\xE1tszik, melyik komponens fut feleslegesen.
  - *Injector Tree* \u2013 melyik injector szolg\xE1ltatja az adott f\xFCgg\u0151s\xE9get (DI hib\xE1k felder\xEDt\xE9s\xE9nek leggyorsabb \xFAtja).
- **\`ng.enableProfiling()\`** (v20+) a konzolban: az Angular saj\xE1t s\xE1vot kap a Chrome DevTools Performance panelj\xE9n.
- **\`provideStabilityDebugging()\`** (v22+): megmutatja, mi tartja \u201Einstable\u201D \xE1llapotban az alkalmaz\xE1st (f\xFCgg\u0151ben l\xE9v\u0151 task, timer, HTTP k\xE9r\xE9s) \u2013 SSR-n\xE9l \xE9s flaky e2e tesztekn\xE9l ez a leggyorsabb nyom.

### Debugol\xE1s VS Code-b\xF3l

\`\`\`json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "\${workspaceFolder}"
    }
  ]
}
\`\`\`

\xCDgy a t\xF6r\xE9spont k\xF6zvetlen\xFCl a TypeScript forr\xE1sban m\u0171k\xF6dik, \xE9s a Vitest tesztek is debugolhat\xF3k a VS Code teszt-integr\xE1ci\xF3j\xE1b\xF3l.

## 179. Developer Ergonomics \u2013 HMR, strictStandalone, Self-closing Tags, Language Service (v16\u2013v22) https://angular.dev/hmr {#fejlesztoi-ergonomia-hmr-strictstandalone-self-closing-tagek-language-service-v16-v22}
Ezek k\xFCl\xF6n-k\xFCl\xF6n apr\xF3s\xE1gok, de naponta t\xF6bbsz\xF6r sz\xE1m\xEDtanak.

### Hot Module Replacement (v19+)
A \`ng serve\` be\xE9p\xEDtetten t\xE1mogatja a **st\xEDlusok** HMR-j\xE9t, \xE9s experimental jelleggel a **sablonok\xE9t** is. A v\xE1ltoz\xE1s \xFAgy jelenik meg, hogy az **alkalmaz\xE1s \xE1llapota megmarad** \u2013 nem kell \xFAjra v\xE9gigkattintani a wizardot minden CSS m\xF3dos\xEDt\xE1s ut\xE1n.

\`\`\`bash
ng serve             # HMR alapb\xF3l bekapcsolva
ng serve --no-hmr    # kikapcsol\xE1s, ha zavar\xF3
\`\`\`

### strictStandalone (v19+)

\`\`\`json
{
  "angularCompilerOptions": {
    "strictStandalone": true
  }
}
\`\`\`

Bekapcsolva a ford\xEDt\xF3 **megtiltja** a nem standalone komponenst, direkt\xEDv\xE1t \xE9s pipe-ot:

\`\`\`
[ERROR] TS-992023: Only standalone components/directives are allowed when
'strictStandalone' is enabled.
\`\`\`

Alap\xE9rtelmezetten \`false\` a fokozatos bevezet\xE9s miatt. A migr\xE1ci\xF3 v\xE9g\xE9n kapcsoljuk be \u2013 ez akad\xE1lyozza meg, hogy visszasziv\xE1rogjon a \`NgModule\`-alap\xFA k\xF3d.

### Self-closing tagek (v16+)

\`\`\`html
<app-flight-card [item]="flight" />
\`\`\`

Kevesebb zaj, kevesebb elg\xE9pelt z\xE1r\xF3tag. Migr\xE1ci\xF3: \`ng generate @angular/core:self-closing-tag\`.

### Angular Language Service
- **Auto-import** (v15+): a sablonba \xEDrt ismeretlen komponenst az IDE felaj\xE1nlja import\xE1lni \u2013 standalone vil\xE1gban ez sp\xF3rolja a legt\xF6bb id\u0151t.
- **Rename symbol** \xE9s **go to definition** sablonb\xF3l is m\u0171k\xF6dik.
- v19-t\u0151l jobb t\xE1mogat\xE1s a \`@if\` / \`@for\` blokkokhoz \xE9s a signal API-khoz.

### Extended diagnostics
A ford\xEDt\xF3 figyelmeztet a n\xE9ma hib\xE1kra \u2013 \xE9rdemes hibaszintre emelni \u0151ket:

\`\`\`json
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
\`\`\`

Tipikus fog\xE1sok: \`[(ngModel)]\` helyett \`([ngModel])\`, \`(click)="save"\` a \`save()\` helyett, \`@for\` \`track\` f\xFCggv\xE9ny megh\xEDv\xE1s n\xE9lk\xFCl, \`??\` egy soha nem nullish kifejez\xE9sen, hi\xE1nyz\xF3 struktur\xE1lis direkt\xEDva import (v20-t\xF3l ezt is jelzi).

### typeCheckHostBindings (v20+)

\`\`\`json
{ "angularCompilerOptions": { "typeCheckHostBindings": true } }
\`\`\`

A \`host: { '[class.active]': 'isActive()' }\` kifejez\xE9sek is t\xEDpusellen\u0151rz\xE9st kapnak \u2013 kor\xE1bban ezek n\xE9m\xE1n elsz\xE1lltak fut\xE1sid\u0151ben.

### Migr\xE1ci\xF3s schematicok, amiket \xE9rdemes fejb\u0151l tudni

\`\`\`bash
ng generate @angular/core:standalone
ng generate @angular/core:control-flow
ng generate @angular/core:inject
ng generate @angular/core:signals
ng generate @angular/core:self-closing-tag
ng generate @angular/core:cleanup-unused-imports
\`\`\`

## 180. Phasing Out CommonJS (CJS) Dependencies and Further Shrinking the Main Chunk (v14+ \xB7 esbuild v16+ \xB7 application builder v17+) https://angular.dev/guide/performance {#commonjs-cjs-fuggosegek-kivezetese-es-a-main-chunk-tovabbi-szukitese-v14-esbuild-v16}
Kieg\xE9sz\xEDt\xE9s a *Bundle-optimaliz\xE1l\xE1s* szekci\xF3hoz: ott a m\xE9r\xE9s, a budget \xE9s a lazy loading szerepel, itt a k\xE9t konkr\xE9t k\xE9rd\xE9s \u2013 **mit\u0151l nagy a CommonJS-hozz\xE1j\xE1rul\xE1s**, \xE9s **mi maradt m\xE9g a main chunkban**.

### Mi\xE9rt dr\xE1ga egy CommonJS csomag
Az ESM (\`import\`/\`export\`,) statikusan elemezhet\u0151: a bundler ford\xEDt\xE1si id\u0151ben tudja, mely exportokat haszn\xE1ljuk, a t\xF6bbit kidobja. A CommonJS (\`require()\`, \`module.exports\`,) **fut\xE1sid\u0151ben** old\xF3dik fel, ez\xE9rt:

- **nincs tree shaking** \u2013 a csomag teljes tartalma beker\xFCl, akkor is, ha egyetlen f\xFCggv\xE9nyt h\xEDvunk bel\u0151le;
- a bundler **interop-wrappert** gener\xE1l k\xF6r\xE9 (\`__toESM\`, \`__commonJS\`), ami k\xFCl\xF6n k\xF3d \xE9s fut\xE1sidej\u0171 k\xF6lts\xE9g;
- gyakran **duplik\xE1l\xF3dik**: ha a fa t\xF6bb pontj\xE1n m\xE1s verzi\xF3 kell bel\u0151le, t\xF6bb p\xE9ld\xE1ny ker\xFCl a bundle-be;
- az Angular CLI ez\xE9rt figyelmeztet build k\xF6zben:
  \`Warning: <lib> depends on 'xyz'. CommonJS or AMD dependencies can cause optimization bailouts.\`

### 1. Der\xEDts\xFCk ki, mi a CommonJS
\`\`\`bash
ng build --configuration production          # a figyelmeztet\xE9sek list\xE1ja maga a lelt\xE1r
npm ls <csomag>                              # h\xE1ny verzi\xF3 van a f\xE1ban
cat node_modules/<csomag>/package.json       # "type", "module", "exports" mez\u0151k
npx publint node_modules/<csomag>            # a csomag ESM/CJS helyess\xE9g\xE9nek auditja
\`\`\`

Egy csomag akkor ESM-bar\xE1t, ha van \`"module"\` vagy \`"exports"\` mez\u0151je ESM bel\xE9p\xE9si ponttal, \xE9s \`"sideEffects": false\`.

### 2. Cser\xE9lj\xFCk ESM-v\xE1ltozatra
| CommonJS csomag | ESM alternat\xEDva | Megjegyz\xE9s |
| --- | --- | --- |
| \`moment\` / \`moment-timezone\` | \`date-fns\`, \`luxon\`, nat\xEDv \`Intl\` vagy \`Temporal\` | a \`moment\` egyben lok\xE1lokat is beh\xFAz |
| \`lodash\` | \`lodash-es\`, vagy nat\xEDv nyelvi elem: \`structuredClone\`, \`Object.groupBy\` | \`import { debounce } from 'lodash-es'\` shakelhet\u0151 |
| \`rxjs/internal/...\` m\xE9lyimport | \`import { map } from 'rxjs'\` | RxJS 7+ egyetlen bel\xE9p\xE9si |
| \`uuid\` r\xE9gi verzi\xF3 | \`crypto.randomUUID()\` | nat\xEDv, nulla bundle |
| \`chart.js\` 2.x / r\xE9gi grafikon-libek | ESM | a major friss\xEDt\xE9s gyakran \xF6nmag\xE1ban megold\xE1s |

### 3. Amit nem lehet lecser\xE9lni: z\xE1rjuk lazy chunkba
Ha a CJS k\xF6nyvt\xE1r nem v\xE1lthat\xF3 ki, akkor legal\xE1bb **ne a main chunkban** legyen (dinamikus):

\`\`\`ts
protected async openEditor(): Promise<void> {
  const { default: Editor } = await import('legacy-cjs-editor'); // saj\xE1t chunk, csak ig\xE9ny szerint
  this.editor = new Editor(this.host.nativeElement);
}
\`\`\`
A figyelmeztet\xE9st csak azut\xE1n n\xE9m\xEDtsuk el, hogy tudatos d\xF6nt\xE9s lett bel\u0151le:
\`\`\`json
// angular.json \u2192 architect.build.options
"allowedCommonJsDependencies": ["legacy-cjs-editor"]
\`\`\`
Ez **nem optimaliz\xE1l\xE1s**, hanem a warning elrejt\xE9se \u2013 \xFCres list\xE1val induljunk, \xE9s minden \xFAj bejegyz\xE9s kapjon indokl\xE1st a PR-ben.

### 4. Duplik\xE1lt verzi\xF3k \xF6sszevon\xE1sa
Ugyanaz a k\xF6nyvt\xE1r k\xE9t verzi\xF3ban k\xE9tszer ker\xFCl a bundle-be:
\`\`\`bash
npm ls date-fns          # t\xF6bb verzi\xF3 \u2192 duplik\xE1ci\xF3
npm dedupe               #
\`\`\`
\`\`\`json
// package.json \u2013 csak akkor, ha a verzi\xF3k kompatibilisek
"overrides": { "date-fns": "^4.1.0" }
\`\`\`

### 5. Ami a main chunkban maradni szokott
| T\xE9tel | Mit tegy\xFCnk |
| --- | --- |
| \`zone.js\` (~35 kB) | zoneless m\xF3d (\`provideZonelessChangeDetection()\`,), \xE9s a \`polyfills\` bejegyz\xE9s t\xF6rl\xE9se az \`angular.json\`-b\xF3l |
| \`@angular/localize\` polyfill | csak akkor kell, ha runtime i18n van; build |
| r\xE9gi b\xF6ng\xE9sz\u0151knek sz\xF3l\xF3 polyfillek | \`browserslist\` sz\u0171k\xEDt\xE9se \u2013 az esbuild ez alapj\xE1n d\xF6nt, mit transzpil\xE1l |
| teljes ikon- vagy Material-k\xE9szlet | n\xE9vre sz\xF3l\xF3 import, illetve csak a haszn\xE1lt komponensek |
| eagerly import\xE1lt error-tracking/analytics SDK | dinamikus import az \`afterNextRender\`-ben |
| fejleszt\u0151i seg\xE9dk\xF3d (mock adat, seed, debug panel) | build configuration szerinti felt\xE9teles import, hogy production buildben ki se ker\xFClj\xF6n |

Ellen\u0151rz\xE9s a v\xE9g\xE9n \u2013 mi t\xF6lt\u0151dik be, de nem fut le az els\u0151 k\xE9perny\u0151n: Chrome DevTools **Coverage** panel. Az itt l\xE1tsz\xF3 \u201Eunused bytes\u201D a lazy loading legjobb c\xE9lpontlist\xE1ja.

Bundle-vizualiz\xE1ci\xF3: source-map-explorer, esbuild-visualizer.

## 181. Finding Performance Bottlenecks \u2013 Methodology and Tools (v17+ \xB7 enableProfiling v20+ \xB7 provideStabilityDebugging v22+) https://angular.dev/best-practices/profiling-with-chrome-devtools {#performance-bottleneck-keresese-modszertan-es-eszkozok-v17-enableprofiling-v20}
A c\xE9l nem az, hogy \u201Egyors\xEDtsunk valamit\u201D, hanem hogy **megtal\xE1ljuk a sz\u0171k keresztmetszetet**. A sorrend mindig: m\xE9r\xE9s \u2192 hipot\xE9zis \u2192 c\xE9lzott jav\xEDt\xE1s \u2192 \xFAjram\xE9r\xE9s. Angular teljes\xEDtm\xE9ny

### 1. Melyik metrika romlott?
El\u0151sz\xF6r azonos\xEDtsuk a t\xFCnetet, mert m\xE1s eszk\xF6z tartozik hozz\xE1:

| T\xFCnet | Metrika | Els\u0151 eszk\xF6z |
| --- | --- | --- |
| lass\xFA els\u0151 megjelen\xE9s | LCP, TTFB | Lighthouse, Network panel |
| kattint\xE1sra k\xE9sik a UI | INP | Performance panel, Long Animation Frames |
| g\xF6rget\xE9s akadozik | frame drop | Performance panel Frames |
| be\xEDr\xE1s k\xF6zben lassul a form | change detection | Angular DevTools |
| id\u0151vel egyre lassul | mem\xF3riasziv\xE1rg\xE1s | Memory panel \u2013 ld. a k\xF6vetkez\u0151 szekci\xF3 |
| e2e teszt flaky / SSR nem fejez\u0151dik be | stabilit\xE1s | |

\xC9les adat m\xE9r\xE9s\xE9re a **web-vitals** k\xF6nyvt\xE1r val\xF3 \u2013 a labor\xE9rt\xE9k \xE9s a mezei felhaszn\xE1l\xF3 \xE9lm\xE9nye elt\xE9r:
\`\`\`ts
import { onLCP, onINP, onCLS } from 'web-vitals';
onINP((metric) => this.telemetry.send('inp', metric.value));
\`\`\`

### 2. Chrome DevTools Performance panel

A felv\xE9tel (Record \u2192 interakci\xF3 \u2192 Stop) ut\xE1n: A flame chart tetej\xE9n l\xE1tszik a legfels\u0151 h\xEDv\xF3, alul a t\xE9nyleges munka.
- **Bottom-Up** n\xE9zet \u2013 \u201Emi fogyasztotta a legt\xF6bb \xF6nid\u0151t\u201D. Ez a leggyorsabb \xFAt a val\xF3di b\u0171n\xF6sh\xF6z.
- **Call Tree** \u2013 a h\xEDv\xE1si l\xE1nc, ha tudni akarjuk, honnan indul.
- **Frames** \u2013 vizu\xE1lisan mutatja a kiesett k\xE9pkock\xE1kat.

### 3. Angular-specifikus profiloz\xE1s
\`\`\`ts
// b\xF6ng\xE9sz\u0151 konzol
ng.enableProfiling();
\`\`\`
Ezut\xE1n az Angular saj\xE1t s\xE1vot kap a Performance panelen: l\xE1tszik, melyik komponens change detectionje, template-je vagy effectje mennyi ideig fut.

**Angular DevTools \u2192 Profiler**: felv\xE9tel ind\xEDt\xE1sa, majd interakci\xF3. A bar chart minden change detection ciklust k\xFCl\xF6n mutat, komponensenk\xE9nti bont\xE1sban. Amit keres\xFCnk:
- ugyanaz a komponens **sokszor** fut le egyetlen interakci\xF3ra \u2192 hi\xE1nyz\xF3 OnPush, vagy effectben v\xE9gzett \xEDr\xE1s;
- egy komponens **egyszer, de sok\xE1ig** fut \u2192 dr\xE1ga sablon-kifejez\xE9s vagy nagy lista \`track\` n\xE9lk\xFCl;
- **minden** komponens \xFAjrafut \u2192 zone.js-alap\xFA glob\xE1lis ciklus (glob\xE1lis esem\xE9ny, \`setInterval\`, harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 lib).

### 4. Angularban tipikus bottleneck-ek

| Jel | Ok | Jav\xEDt\xE1s |
| --- | --- | --- |
| sablonban h\xEDvott f\xFCggv\xE9ny minden CD-ciklusban lefut | \`{{ calculateTotal() }}\` | \`computed()\` |
| hossz\xFA lista \xFAjrarenderel\xE9se | hi\xE1nyz\xF3 vagy rossz \`track\` | \`track |
| pipe minden ciklusban \xFAjrasz\xE1mol | impure pipe | pure pipe vagy |
| g\xE9pel\xE9sre HTTP k\xE9r\xE9s-\xF6z\xF6n | nincs debounce | \`debounced()\` signal (v22+, |
| minden esem\xE9ny glob\xE1lis CD-t ind\xEDt | zone.js | zoneless m\xF3d, vagy \`NgZone.runOutsideAngular()\` a nagy frekvenci\xE1j\xFA |
| \xF3ri\xE1si t\xE1bl\xE1zat DOM-ban | nincs virtualiz\xE1ci\xF3 | CDK \`cdk |
| lass\xFA kezdeti render | mindent egyszerre renderel\xFCnk | \`@defer (on |
| f\u0151sz\xE1lat blokkol\xF3 sz\xE1m\xEDt\xE1s | nagy adathalmaz parse/transzform\xE1ci\xF3 | Web |

### 5. H\xE1l\xF3zat \xE9s szerveroldal
- **Network waterfall**: mikor indul a k\xE9r\xE9s (waterfall l\xE9pcs\u0151 = szekvenci\xE1lis f\xFCgg\xE9s), mekkora a payload, van-e t\xF6m\xF6r\xEDt\xE9s, cache-header. megmondja, mi tartja instable \xE1llapotban az alkalmaz\xE1st \u2013 f\xFCgg\u0151ben l\xE9v\u0151 HTTP k\xE9r\xE9s, timer, task. SSR-n\xE9l ez magyar\xE1zza a lass\xFA TTFB-t, e2e-n\xE9l a flakyt.

### 6. Regresszi\xF3 elleni v\xE9delem

## 182. Finding and Diagnosing Memory Leaks (v2+ \xB7 takeUntilDestroyed v16+ \xB7 DestroyRef v16+) https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed {#memory-leak-keresese-es-diagnosztizalasa-v2-takeuntildestroyed-v16}
Mem\xF3riasziv\xE1rg\xE1s akkor van, ha egy m\xE1r nem haszn\xE1lt objektumot **m\xE9g mindig hivatkoz** valami, ez\xE9rt a GC nem tudja felszabad\xEDtani. A t\xFCnet: az alkalmaz\xE1s hossz\xFA haszn\xE1lat sor\xE1n lassul, majd \xF6sszeomlik \u2013 tipikusan navig\xE1l\xE1s vagy mod\xE1l nyitogat\xE1s ut\xE1n.

### 1. Reproduk\xE1l\xE1s m\xE9rhet\u0151 form\xE1ban
Mindig ugyanazt a ciklust futtassuk (pl. \u201Enyisd meg a list\xE1t \u2192 nyisd meg a r\xE9szleteket \u2192 navig\xE1lj vissza\u201D \xD710), \xE9s a ciklusok k\xF6z\xF6tt m\xE9rj\xFCnk. Ha a felhaszn\xE1lt heap ciklusonk\xE9nt monoton n\u0151 \xE9s a GC ut\xE1n sem esik vissza, val\xF3s sziv\xE1rg\xE1s van.

### 2. Chrome DevTools \u2192 Memory panel
**Heap snapshot \xF6sszehasonl\xEDt\xE1s**:
1. Nyisd meg a gyan\xFAs n\xE9zetet, majd navig\xE1lj el r\xF3la.
2. K\xE9nyszer\xEDtett GC (a Memory panel kuka ikonja), majd **Snapshot 1**.
3. Futtasd le a ciklust 5\u201310-szer.
4. Ism\xE9t GC, majd **Snapshot 2**.
5. A snapshot list\xE1ban v\xE1lts **Comparison** n\xE9zetre, rendezz \`#Delta\` szerint.

Amit keres\xFCnk: a komponensoszt\xE1ly neve (\`FlightSearchComponent\`) \`#Delta = +10\` \xE9rt\xE9kkel, azaz **10 p\xE9ld\xE1ny maradt \xE9letben** 10 ciklus ut\xE1n. Kattintsunk r\xE1, majd a **Retainers** panelen visszafel\xE9 olvasva l\xE1tszik a hivatkoz\xE1si l\xE1nc, ami \xE9letben tartja \u2013 ez maga a hib\xE1s k\xF3d helye.

**Detached DOM node-ok:** a snapshot Summary n\xE9zet\xE9ben sz\u0171rj\xFCnk a \`Detached\` sz\xF3ra. A DOM-b\xF3l elt\xE1vol\xEDtott, de JS-b\u0151l m\xE9g hivatkozott elemek majdnem mindig leiratkozatlan event listenerre vagy elmentett \`ElementRef\`-re utalnak.

**Allocation instrumentation on timeline:** folyamatos felv\xE9tel, ami id\u0151vonalon mutatja a foglal\xE1sokat; a fel nem szabadul\xF3 s\xE1vok mutatj\xE1k a sziv\xE1rg\xF3 allok\xE1ci\xF3kat

**Performance panel Memory jel\xF6l\u0151n\xE9gyzete**: a JS heap g\xF6rbe alakja \xE1rulkod\xF3 \u2013 a f\u0171r\xE9szfog eg\xE9szs\xE9ges, a l\xE9pcs\u0151zetesen emelked\u0151 alapvonal sziv\xE1rg\xE1s.

### 3. Angularban tipikus sziv\xE1rg\xE1sforr\xE1sok

| Forr\xE1s | Mi\xE9rt marad \xE9letben | Megold\xE1s |
| --- | --- | --- |
| k\xE9zi \`subscribe()\` a komponensben | a stream tartja a komponenst | \`toSignal()\`, \`resource\`, vagy \`takeUntilDestroyed()\` |
| \`Router.events\`, \`NavigationEnd\` feliratkoz\xE1s | a router az app teljes \xE9letciklus\xE1n \xE9l | \`takeUntilDestroyed()\` |
| \`setInterval\` / \`setTimeout\` | a timer tartja a callback closure-j\xE9t | \`DestroyRef.onDestroy(() => |
| \`window\`/\`document\` event listener | a glob\xE1lis objektum tartja | \`@HostListener\`, \`fromEvent\` + \`takeUntilDestroyed\`, vagy explicit \`removeEventListener\` |
| \`ResizeObserver\` / \`IntersectionObserver\` | soha nem h\xEDvott \`disconnect()\` | |
| harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 lib (chart, map, editor) | saj\xE1t bels\u0151 regisztr\xE1ci\xF3 | a lib \`destroy()\` met\xF3dusa \`ngOnDestroy\` |
| statikus/\`root\` szint\u0171 cache Map | soha nem \xFCr\xFCl | m\xE9retkorl\xE1t, TTL, vagy |
| \`ViewContainerRef.createComponent()\` | a n\xE9zet a containerben marad | \`viewRef.destroy()\` / |
| \`BehaviorSubject\` nagy objektummal singleton service-ben | az utols\xF3 \xE9rt\xE9k \xF6r\xF6kre bent marad | null\xE1z\xE1s kil\xE9p\xE9skor, vagy sz\u0171kebb scope |
| elhagyott \`effect()\` injection contexten k\xEDv\xFCl | nincs, ami megsemmis\xEDtse | injection contextben hozzuk l\xE9tre, vagy |

\`\`\`ts
// a h\xE1rom leggyakoribb takar\xEDt\xE1s egy helyen
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
\`\`\`

### 4. Megel\u0151z\xE9s
- **Deklarat\xEDv adatfolyam**: \`toSignal\` / \`resource\` / \`httpResource\` mellett nincs mit leiratkoztatni.
- **Route-szint\u0171 provider** a hossz\xFA \xE9let\u0171 \`root\` service helyett, ha az \xE1llapot csak egy funkci\xF3hoz tartozik \u2013 \xEDgy a route elhagy\xE1sakor felszabadul.

### 5. Szerveroldal (SSR) \xE9s Node
Az SSR folyamat hosszan \xE9l, ez\xE9rt ott a sziv\xE1rg\xE1s azonnal \xFCzemzavar:
\`\`\`bash
node --inspect dist/server/server.mjs      # DevTools r\xE1csatlakoz\xE1s, heap snapshot ugyan\xFAgy
node --heapsnapshot-signal=SIGUSR2 server.mjs   # snapshot \xE9lesben, jelre
\`\`\`
\`\`\`ts
setInterval(() => console.log(process.memoryUsage().heapUsed / 1e6, 'MB'), 30_000);
\`\`\`
Tipikus szerveroldali ok: modul-szint\u0171 (glob\xE1lis) cache, ami k\xE9r\xE9senk\xE9nt n\u0151, illetve a k\xE9r\xE9s kontextus\xE1t fog\xF3 closure. K\xE9r\xE9s-szint\u0171 \xE1llapotot mindig k\xE9r\xE9s-szint\u0171 injectorban tartsunk.

### 6. B\xF6ng\xE9sz\u0151oldali telemetria
\`\`\`ts
if ('measureUserAgentSpecificMemory' in performance) {
  const result = await performance.measureUserAgentSpecificMemory();
  this.telemetry.send('memory', result.bytes);
}
\`\`\`
Cross-origin izol\xE1ci\xF3t ig\xE9nyel, de \xE9les k\xF6rnyezetben ez ad val\xF3s trendet \u2013 a laborban \xE9szre sem vett sziv\xE1rg\xE1s \xEDgy j\xF6n el\u0151.

## 183. Memory Optimization \u2013 Dev Environment and Build Memory Usage (TypeScript 5+ \xB7 v14+) https://www.typescriptlang.org/tsconfig/ {#memory-optimization-a-fejlesztoi-kornyezet-es-a-build-memoriahasznalata-typescript-5-v14}
Nem csak a fut\xF3 alkalmaz\xE1s fogyaszt mem\xF3ri\xE1t: egy nagy Angular monorep\xF3ban a **szerkeszt\u0151, a ford\xEDt\xF3, a linter \xE9s a tesztfuttat\xF3** egy\xFCtt k\xF6nnyen elviszi a g\xE9p RAM

### 1. TypeScript: mekkora programot l\xE1t a ford\xEDt\xF3
**\`skipLibCheck: true\`** \u2013 en\xE9lk\xFCl a TypeScript a \`node_modules\` alatti **\xF6sszes** \`.d.ts\` f\xE1jlt m\xE9lyen t\xEDpusellen\u0151rzi minden ford\xEDt\xE1sn\xE1l, \xE9s ezt **minden folyamat k\xFCl\xF6n elv\xE9gzi**: a szerkeszt\u0151 nyelvi szervere, a build \xE9s minden p\xE1rhuzamos teszt-worker. Nagy projektben ez t\xEDzezres nagys\xE1grend\u0171 f\xE1jl. A saj\xE1t k\xF3dunk t\xEDpusbiztons\xE1g\xE1t nem cs\xF6kkenti, csak az ism\xE9tl\u0151d\u0151 munk\xE1t sz\xFCnteti meg; \xFAj Angular projektekben ez az alap\xE9rtelmez\xE9s.
\`\`\`json
{ "compilerOptions": { "skipLibCheck": true } }
\`\`\`

**\`exclude\` a gy\xF6k\xE9r \`tsconfig.json\`-ban** \u2013 a szerkeszt\u0151 nyelvi szervere azt a tsconfigot haszn\xE1lja, amelynek \`include\`-ja lefedi a szerkesztett f\xE1jlt. Ha nincs \`exclude\`, akkor idegen k\xF3db\xE1zisok (mock szerver, Storybook, gener\xE1lt k\xF3d, \`dist\`) is **ugyanabba a TypeScript-programba** ker\xFClnek, m\xE1s be\xE1ll\xEDt\xE1sokkal.
\`\`\`json
{
  "exclude": ["node_modules", "dist", "coverage", "out-tsc", ".storybook", "mock-server", ".angular"]
}
\`\`\`
Ellen\u0151rz\xE9s \u2013 mennyi f\xE1jlt l\xE1t val\xF3j\xE1ban a ford\xEDt\xF3:
\`\`\`bash
npx tsc --listFilesOnly | wc -l
npx tsc --noEmit --extendedDiagnostics    # mem\xF3ria- \xE9s id\u0151bont\xE1s f\xE1zisonk\xE9nt
\`\`\`

**Projekthivatkoz\xE1sok** (\`references\` + \`composite: true\`,) nagy monorep\xF3ban: a ford\xEDt\xF3 r\xE9szprogramokra bontja a munk\xE1t, \xE9s inkrement\xE1lisan dolgozik ahelyett, hogy mindent egyetlen programba t\xF6ltene.

### 2. Linter: a type-aware lint \xE1ra
A t\xEDpusinform\xE1ci\xF3t haszn\xE1l\xF3 lint szab\xE1lyok saj\xE1t TypeScript

K\xE9t gyakori hiba sokszorozza a k\xF6lts\xE9get:
- **t\xF6bb, egym\xE1st \xE1tfed\u0151 \`project\` bejegyz\xE9s**, vagy nem l\xE9tez\u0151 tsconfigra hivatkoz\xE1s; \u2013 a typescript-eslint dokument\xE1ci\xF3ja is jelent\u0151s lassul\xE1s \xE9s mem\xF3riaprobl\xE9ma forr\xE1sak\xE9nt \xEDrja le.

Mai aj\xE1nl\xE1s: egyetlen, pontos \`project\`, vagy a **project service** haszn\xE1lata, \xE9s a linter Node-processz\xE9nek heap-korl\xE1toz\xE1sa:
\`\`\`json
// .vscode/settings.json
{ "eslint.execArgv": ["--max-old-space-size=2048"], "eslint.run": "onSave" }
\`\`\`
Az \`onSave\` azt jelenti, hogy a linter nem fut minden billenty\u0171le\xFCt\xE9sre \u2013 cser\xE9be nincs \xE9l\u0151, g\xE9pel\xE9s k\xF6zbeni visszajelz\xE9s.

### 3. Tesztfuttat\xE1s: ne ford\xEDtsunk k\xE9tszer
- **Transpile-only m\xF3d** \u2013 ts-jest \`isolatedModules\`, jest-preset-angular, illetve az esbuild/SWC-alap\xFA transformerek \xE9s a Vitest alap\xE9rtelmez\xE9se: a teszt-workerek f\xE1jlonk\xE9nt, t\xEDpusellen\u0151rz\xE9s n\xE9lk\xFCl ford\xEDtanak. A t\xEDpushelyess\xE9get \xFAgyis a szerkeszt\u0151, a build \xE9s a CI ellen\u0151rzi k\xFCl\xF6n \u2013 a workerenk\xE9nti \xFAjraellen\u0151rz\xE9s tiszta duplik\xE1ci\xF3. Tapasztalati nyeres\xE9g nagy suite-on: 15\u201320% fut\xE1sid\u0151 \xE9s ar\xE1nyos mem\xF3ria.
  *Kock\xE1zat:* decorator tesztek elromolhatnak t\u0151le \u2013 bevezet\xE9s ut\xE1n **futtassuk le a teljes suite-ot** el\u0151tte/ut\xE1na, \xE9s hasonl\xEDtsuk \xF6ssze a darabsz\xE1mot.
- **Worker-sz\xE1m korl\xE1toz\xE1sa**: \`--maxWorkers=50%\`. Minden worker k\xFCl\xF6n Node-processz, saj\xE1t heappel \u2013 a CPU-magok sz\xE1ma szerinti automatikus sk\xE1l\xE1z\xE1s a fejleszt\u0151i g\xE9pet kifagyaszthatja. k\xFCl\xF6nben a projekt megnyit\xE1sakor \xE9s minden ment\xE9sn\xE9l elindul a teljes suite \u2013 gyakran m\xE9g lefedetts\xE9g-sz\xE1m\xEDt\xE1ssal is. komponensf\xE1t \xE9s injectort \xE9p\xEDt; a tiszta f\xFCggv\xE9ny- vagy store-teszt nem. Ahol nincs sablon, ott ne legyen TestBed. M\xE9rhet\u0151 k\xFCl\xF6nbs\xE9g jellemz\u0151en **k\xE9tszeres** fut\xE1sid\u0151 \xE9s ar\xE1nyos mem\xF3ria tesztf\xE1jlonk\xE9nt.

### 4. Szerkeszt\u0151: mit indexel \xE9s mit figyel
Be\xE1ll\xEDt\xE1sok

| Be\xE1ll\xEDt\xE1s | Hat\xE1s |
| --- | --- |
| a nyelvi szerver mem\xF3riakorl\xE1tja (pl. \`js/ts.tsserver.maxMemory: 4096\`) | fels\u0151 korl\xE1t a folyamatnak; nagyon nagy m\u0171velet (workspace-szint\u0171 \xE1tnevez\xE9s) eset\xE9n ink\xE1bb \xFAjraindul, mint hogy tov\xE1bb n\u0151j\xF6n |
| \`package.json\` | a nyelvi szerver alapb\xF3l az **\xF6sszes** f\xFCgg\u0151s\xE9get indexeli auto-import javaslatokhoz; kikapcsolva csak a saj\xE1t f\xE1jlokb\xF3l javasol |
| nat\xEDv f\xE1jlrendszer | nagy fastrukt\xFAr\xE1n\xE1l l\xE9nyegesen kevesebb CPU \xE9s mem\xF3ria |
| \`files.watcherExclude\` / \`search.exclude\` b\u0151v\xEDt\xE9se | a gener\xE1lt mapp\xE1k (\`dist\`, \`coverage\`, cache, riportok) kiker\xFClnek a figyel\xE9sb\u0151l \xE9s az indexel\xE9sb\u0151l |
| mem\xF3riaig\xE9nyes szerkeszt\u0151-b\u0151v\xEDtm\xE9nyek (folyamatos blame-annot\xE1ci\xF3, soron bel\xFCli hover-k\xE1rty\xE1k, \xE9l\u0151 tesztfut\xE1s) | kapcsoljuk ki az automatikus, minden sorra fut\xF3 m\xF3djukat \u2013 a funkci\xF3 parancsb\xF3l tov\xE1bbra is el\xE9rhet\u0151 |

Fontos: a szerkeszt\u0151-be\xE1ll\xEDt\xE1sok kulcsnevei verzi\xF3r\xF3l verzi\xF3ra elavulhatnak. Bevezet\xE9s ut\xE1n ellen\u0151rizz\xFCk, hogy a be\xE1ll\xEDt\xE1s nem kap \u201Edeprecated\u201D jelz\xE9st \u2013 az elavult kulcs n\xE9m\xE1n hat\xE1stalan.

### 5. F\xFCgg\u0151s\xE9g-higi\xE9nia
- **Nem haszn\xE1lt csomagok**: minden telep\xEDtett devDependency n\xF6veli a f\xE1jlsz\xE1mot, a t\xEDpusf\xE1t \xE9s az indexelnival\xF3t. Keres\xE9s: \`npx knip\`, \`npx depcheck\`. Egyetlen nagy, sehol nem h\xEDvott eszk\xF6zcsomag k\xF6nnyen a \`node_modules\` 10\u201320%-a lehet.
- **\xDCtk\xF6z\u0151 verzi\xF3\xE1gak**: ha egy csomag m\xE1s major verzi\xF3j\xFA alf\xFCgg\u0151s\xE9get h\xFAz be, duplik\xE1l\xF3dik a t\xEDpusfa is. \`npm ls <csomag>\` mutatja meg; \xF6sszevon\xE1s: \`npm dedupe\`.
- **Determinisztikus telep\xEDt\xE9s**: \`npm ci\` a \`npm install\` helyett. A driftelt \`node_modules\` nemcsak reproduk\xE1lhatatlan, hanem a biztons\xE1gi \`overrides\` bejegyz\xE9sek **n\xE9m\xE1n hat\xE1stalann\xE1** v\xE1lhatnak benne. Ellen\u0151rz\xE9s: \`npm ls --depth=0\` ne jelezzen \`invalid\` csomagot.

### 6. Holt konfigur\xE1ci\xF3 \xE9s elhagyott munkak\xF6nyvt\xE1rak
- **Holt config**: nem haszn\xE1lt tesztfuttat\xF3-konfigur\xE1ci\xF3, duplik\xE1lt tsconfig, t\xF6r\xF6tt npm scriptek. Nem fogyasztanak sokat, de a nyelvi szervert \xE9s a fejleszt\u0151t is f\xE9lrevezetik \u2013 t\xF6r\xF6lj\xFCk, miut\xE1n ellen\u0151rizt\xFCk, hogy semmi nem hivatkozik r\xE1juk.
- **Elhagyott git worktree-k / munkam\xE1solatok**: a legalattomosabb t\xE9tel. N\xE9h\xE1ny felejtett worktree t\xF6bb t\xEDzezer extra forr\xE1sf\xE1jlt jelent a figyelt fastrukt\xFAr\xE1ban, \xE9s ett\u0151l a mem\xF3riafogyaszt\xE1s megsokszoroz\xF3dhat.
\`\`\`bash
git worktree list
git worktree prune
\`\`\`
\xC9rdemes ezt (\xE9s a felismert tesztf\xE1jlok darabsz\xE1m\xE1t) egy n\xE9h\xE1ny soros diagnosztikai scriptbe tenni, amit gyan\xFAs lassul\xE1s eset\xE9n b\xE1rki lefuttathat.

### 7. Heap-korl\xE1tok be\xE1ll\xEDt\xE1sa
\`\`\`bash
#
NODE_OPTIONS=--max-old-space-size=4096 npm run build
\`\`\`
A korl\xE1t nem cs\xF6kkenti a fogyaszt\xE1st, de **kisz\xE1m\xEDthat\xF3v\xE1** teszi: a folyamat hamarabb \xE9s \xE9rtelmezhet\u0151 hib\xE1val \xE1ll meg, ahelyett hogy a teljes g\xE9pet swapbe k\xE9nyszer\xEDten\xE9. CI-ben minden hossz\xFA fut\xE1s\xFA Node-l\xE9p\xE9snek adjunk explicit korl\xE1tot.

### 8. Ellen\u0151rz\u0151lista
- [ ] \`skipLibCheck: true\` minden tsconfigban
- [ ] a gy\xF6k\xE9r tsconfig \`exclude\`-ja lefedi a gener\xE1lt \xE9s idegen mapp\xE1kat
- [ ] \`tsc --listFilesOnly\` f\xE1jlsz\xE1ma indokolt (nincs benne idegen k\xF3db\xE1zis)
- [ ] a type-aware lint egyetlen, l\xE9tez\u0151 tsconfigra mutat, nincs fallback program-\xE9p\xEDt\xE9s
- [ ] a teszt-workerek transpile-only m\xF3dban futnak, korl\xE1tozott worker-sz\xE1mmal
- [ ] a tesztek nem indulnak automatikusan a szerkeszt\u0151 megnyit\xE1sakor
- [ ] a szerkeszt\u0151 nem indexeli a \`node_modules\`-t auto-importhoz, \xE9s nem figyeli a \`dist\`/cache mapp\xE1kat
- [ ] \`npm ci\` a telep\xEDt\xE9s, \`npm ls --depth=0\` tiszta
- [ ] nincs nem haszn\xE1lt devDependency (\`knip\` / \`depcheck\`)
- [ ] nincs elhagyott git worktree
- [ ] a hossz\xFA fut\xE1s\xFA Node-l\xE9p\xE9seknek van explicit heap-korl\xE1tja


## 184. TypeScript Abstract Syntax Tree (AST) (TypeScript 5+) https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API {#typescript-abstract-syntax-tree-ast-typescript-5}
Az **AST** a TypeScript forr\xE1sk\xF3d fa-szerkezet\u0171, g\xE9ppel olvashat\xF3 \xE1br\xE1zol\xE1sa. A ford\xEDt\xF3 (\xE9s az Angular compiler, az ESLint, a Prettier, a schematics) nem a sz\xF6vegre, hanem erre a f\xE1ra dolgozik: bej\xE1rja a csom\xF3pontokat, ellen\u0151riz, \xE1talak\xEDt, k\xF3dot gener\xE1l.

**Mire val\xF3 a napi munk\xE1ban**
- saj\xE1t ESLint szab\xE1ly / codemod (\u201Eminden \`subscribe()\`-hoz legyen \`takeUntilDestroyed\`\u201D),
- Angular schematics \xE9s \`ng update\` migr\xE1ci\xF3k,
- Language Service (autocomplete, quick fix),
- build-id\u0151 optimaliz\xE1l\xE1s \xE9s tree-shaking elemz\xE9s.

\`\`\`ts
import ts from 'typescript';

const source = \`const answer = 42;\`;
const sf = ts.createSourceFile('demo.ts', source, ts.ScriptTarget.Latest, true);

function visit(node: ts.Node): void {
  if (ts.isVariableDeclaration(node) && node.name.getText(sf) === 'answer') {
    console.log('initializer:', node.initializer?.getText(sf)); // 42
  }
  ts.forEachChild(node, visit);
}
visit(sf);
\`\`\`

A l\xE9nyeg: sz\xF6veges \`replace\` helyett az AST-n dolgozunk \u2013 \xEDgy a kommentek, whitespace \xE9s a szintaxis hat\xE1rai biztons\xE1gosan kezelhet\u0151k. Az Angular Ivy is template-AST-t \xE9p\xEDt a sablonokb\xF3l (bindingek, control flow), ez\xE9rt a \`strictTemplates\` hib\xE1k is AST-alap\xFAak.

## 185. Component Lifecycle \u2013 Which Hook to Use (v2+ \xB7 afterRender v17+) https://angular.dev/guide/components/lifecycle {#komponens-lifecycle-melyik-hook-mire-valo-v2-afterrender-v17}
A lifecycle hookok a komponens/direkt\xEDva **\xE9letszakaszaira** adnak visszah\xEDv\xE1st. Napi munk\xE1ban ne mindet implement\xE1ld \u2013 csak azt, amire t\xE9nyleg sz\xFCks\xE9g van.

| Hook / API | Mikor fut | Tipikus haszn\xE1lat |
| --- | --- | --- |
| konstruktor | p\xE9ld\xE1nyos\xEDt\xE1skor | csak DI mez\u0151k; **ne** DOM, ne HTTP |
| \`ngOnChanges\` | input v\xE1ltozik | legacy input-reakci\xF3; modern: \`input()\` + \`computed\`/\`effect\` |
| \`ngOnInit\` | els\u0151 inputok ut\xE1n, egyszer | egyszeri setup (ha nem megy mez\u0151inicializ\xE1l\xF3ba) |
| \`ngDoCheck\` | minden CD-ciklusban | ker\xFCld \u2013 dr\xE1ga; OnPush + signal jobb |
| \`ngAfterContentInit\` | projected tartalom k\xE9sz | \`contentChild\` helyett ritk\xE1n kell |
| \`ngAfterViewInit\` | saj\xE1t view k\xE9sz | DOM m\xE9r\xE9s legacy m\xF3don; modern: \`afterNextRender\` |
| \`ngOnDestroy\` | megsemmis\xFCl\xE9s el\u0151tt | cleanup; modern: \`DestroyRef\` / \`takeUntilDestroyed\` |
| \`afterNextRender\` | k\xF6vetkez\u0151 b\xF6ng\xE9sz\u0151-render ut\xE1n, egyszer | chart init, focus, \`getBoundingClientRect\` |
| \`afterRender\` / \`afterRenderEffect\` | minden render ut\xE1n | folyamatos DOM-szinkron (ritka) |

\`\`\`ts
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
\`\`\`

**\xD6k\xF6lszab\xE1ly:** adat/logika \u2192 signal + \`computed\`/\`resource\`; DOM a render ut\xE1n \u2192 \`afterNextRender\`; feliratkoz\xE1s le\xE1ll\xEDt\xE1sa \u2192 \`takeUntilDestroyed\` / \`DestroyRef\`. A klasszikus \`ngOnInit\`/\`ngOnDestroy\` p\xE1r egyre ritk\xE1bban kell.

## 186. @HostBinding and @HostListener \u2013 Host Element Binding (v2+ \xB7 host object recommended) https://angular.dev/guide/components/host-elements {#hostbinding-es-hostlistener-gazda-elem-kotese-v2-host-objektum-ajanlott}
A host API a **komponens/direkt\xEDva saj\xE1t host element** k\xF6t oszt\xE1lyt, attrib\xFAtumot, st\xEDlust vagy esem\xE9nyt \u2013 an\xE9lk\xFCl, hogy a sablonban wrapper divet vezetn\xE9l be.

**Mire haszn\xE1ljuk**
- akad\xE1lymentes \`role\` / \`aria-*\` a host element,
- \`class.active\` \xE1llapot a direkt\xEDv\xE1b\xF3l,
- billenty\u0171zet / click / \`window:resize\` kezel\xE9se encapsulation\xF6n bel\xFCl.

\`\`\`ts
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
\`\`\`

A decorator-based forma (\`@HostBinding\`, \`@HostListener\`) m\u0171k\xF6dik, de a \`@Component\`/\`@Directive\` **\`host\`** objektuma az aj\xE1nlott, modern \xEDr\xE1sm\xF3d (jobban l\xE1tszik egy helyen, \xE9s a \`typeCheckHostBindings\` ellen\u0151rzi).

## 187. AOT Compilation \u2013 Why It Is the Default (v9+ Ivy \xB7 AOT by default) https://angular.dev/tools/cli/aot-compiler {#aot-forditas-miert-ez-az-alapertelmezett-v9-ivy-aot-alapbol}
Az **AOT (Ahead-of-Time)** a sablonokat \xE9s a TypeScriptet **build id\u0151ben** JavaScriptt\xE9 ford\xEDtja. A b\xF6ng\xE9sz\u0151 m\xE1r k\xE9sz k\xF3dot kap \u2013 kisebb runtime, kor\xE1bbi hib\xE1k, jobb biztons\xE1g (nincs runtime template compiler a prod bundle-ben).

**Mire val\xF3**
- production build (\`ng build\`) \u2013 AOT az alap,
- \`strictTemplates\` hib\xE1k elkap\xE1sa CI-ben,
- kisebb \xE9s gyorsabb indul\xF3 bundle Ivy mellett.

\`\`\`bash
ng build                 # AOT default
ng serve                 # dev-ben is AOT (Ivy \xF3ta)
\`\`\`

A r\xE9gi **JIT** (Just-in-Time) a b\xF6ng\xE9sz\u0151ben ford\xEDtott \u2013 ma m\xE1r ritka kiv\xE9tel. Ha egy library View Engine form\xE1tumban van, az \`ngcc\` (r\xE9gebbi) vagy az Ivy-kompatibilis package format kell; modern Angularban a partial-Ivy library form\xE1tum az elv\xE1rt.

## 188. Reactive Forms Essentials \u2013 updateOn, markAllAsTouched, FormArray.clear (v2+ \xB7 markAllAsTouched/clear v8+) https://angular.dev/guide/forms/reactive-forms {#reactive-forms-praktikum-updateon-markallastouched-formarray-clear-v2-markallastouched-clear-v8}
H\xE1rom napi fog\xE1s, ami sokat jav\xEDt az UX-en \xE9s a k\xF3d r\xF6vids\xE9g\xE9n.

**\`updateOn: 'change' | 'blur' | 'submit'\`** \u2013 mikor \xEDrja az \xE9rt\xE9k/valid\xE1ci\xF3 a kontrollt. Keres\u0151mez\u0151n\xE9l gyakran \`blur\` vagy debounce; submit-only valid\xE1ci\xF3n\xE1l \`submit\`.

\`\`\`ts
this.form = this.fb.nonNullable.group({
  email: ['', { validators: [Validators.email], updateOn: 'blur' }],
});
\`\`\`

**\`markAllAsTouched()\`** \u2013 submitkor az eg\xE9sz fa (group/array lesz\xE1rmazottak) touched lesz, \xEDgy a hib\xE1k megjelennek an\xE9lk\xFCl, hogy mez\u0151nk\xE9nt kellene v\xE9gigj\xE1rni.

\`\`\`ts
onSubmit(): void {
  this.form.markAllAsTouched();
  if (this.form.invalid) return;
  this.save(this.form.getRawValue());
}
\`\`\`

**\`FormArray.clear()\`** \u2013 az \xF6sszes kontroll elt\xE1vol\xEDt\xE1sa egy h\xEDv\xE1ssal (loop + \`removeAt\` helyett).

\`\`\`ts
const tags = this.fb.nonNullable.array<string>(['a', 'b']);
tags.clear(); // []
\`\`\`

## 189. exportAs \u2013 Component/Directive API in the Template (v2+) https://angular.dev/guide/directives {#exportas-komponens-direktiva-api-a-sablonban-v2}
Az \`exportAs\` megad egy **template v\xE1ltoz\xF3nevet**, amellyel a sz\xFCl\u0151 sablon el\xE9ri a direkt\xEDva/komponens nyilv\xE1nos API-j\xE1t \u2013 an\xE9lk\xFCl, hogy \`@ViewChild\`-ot \xEDrn\xE1l a oszt\xE1lyba.

\`\`\`ts
@Directive({ selector: '[appTooltip]', exportAs: 'tooltip' })
export class TooltipDirective {
  open(): void { /* ... */ }
  close(): void { /* ... */ }
}
\`\`\`
\`\`\`html
<span appTooltip #tip="tooltip">S\xFAg\xF3</span>
<button type="button" (click)="tip.open()">Megnyit\xE1s</button>
\`\`\`

**Mire val\xF3:** reusable UI primit\xEDvek (tooltip, dropdown, stepper), ahol a sablonb\xF3l kell h\xEDvni \`open()\`/\`close()\` met\xF3dust. T\xF6bb alias is megadhat\xF3: \`exportAs: 'menu, menuTrigger'\`.

## 190. DomSanitizer \u2013 Trusted HTML, URL, Script (v2+) https://angular.dev/best-practices/security {#domsanitizer-trusted-html-url-script-v2}
Az Angular alapb\xF3l **sanitiz\xE1lja** a vesz\xE9lyes HTML/URL \xE9rt\xE9keket. Ha sz\xE1nd\xE9kosan kell \u201Enyers\u201D HTML (CMS tartalom, SVG), a \`DomSanitizer\` jel\xF6li trustedk\xE9nt \u2013 de ez XSS kapu, ez\xE9rt ritk\xE1n \xE9s indokkal.

\`\`\`ts
private readonly sanitizer = inject(DomSanitizer);

readonly safeHtml = computed(() =>
  this.sanitizer.bypassSecurityTrustHtml(this.htmlFromCms()),
);
\`\`\`
\`\`\`html
<div [innerHTML]="safeHtml()"></div>
\`\`\`

**Mire haszn\xE1ljuk:** trusted CMS HTML, resource URL iframe-hez (\`bypassSecurityTrustResourceUrl\`), st\xEDlus URL. **Ne** haszn\xE1ljuk user inputra review n\xE9lk\xFCl; r\xE9szes\xEDtsd el\u0151nyben a markdown\u2192safe HTML pipeline-t vagy a backend oldali sanitiz\xE1l\xE1st.

## 191. Arrow Function vs Function \u2013 \`this\` Binding (JavaScript) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions {#nyilfuggveny-vs-function-a-this-kotese-javascript}
A klasszikus \`function\` saj\xE1t \`this\`-t kap h\xEDv\xE1skor; az **arrow function lexik\xE1lisan** \xF6r\xF6kli a k\xFCls\u0151 \`this\`-t. Angular oszt\xE1lymet\xF3dusok callbackjein\xE9l (RxJS, DOM) ez a leggyakoribb \`undefined\` forr\xE1s.

\`\`\`ts
export class Search {
  private readonly term = signal('');

  // rossz: function eset\xE9n this elv\xE9sz a subscribe callbackben, ha nem bindolod
  legacy(): void {
    this.http.get<string[]>('/api').subscribe(function (rows) {
      // this.term ... TypeError lehet
    });
  }

  // j\xF3: arrow function megtartja az oszt\xE1ly this-\xE9t
  modern(): void {
    this.http.get<string[]>('/api').subscribe((rows) => this.term.set(rows[0] ?? ''));
  }
}
\`\`\`

**\xD6k\xF6lszab\xE1ly:** oszt\xE1lyon bel\xFCl callbackhez mindig \`arrow function\` (vagy class-field arrow function). \`bind(this)\` csak legacy k\xF3dban.
`;export{a as default};