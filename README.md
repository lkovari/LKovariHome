# LKovariHome

Personal portfolio and Angular playground deployed at [https://lkovari.github.io/LKovariHome](https://lkovari.github.io/LKovariHome).

Originally generated with Angular CLI 14; currently on **Angular 20** with standalone components, lazy-loaded feature modules, PrimeNG, Angular Material, Bootstrap, and Firebase (Digits game persistence).

---

## Tech stack

| Layer | Libraries |
|-------|-----------|
| Framework | Angular 20, RxJS 7, TypeScript 5.9 |
| UI | Angular Material, PrimeNG (Aura theme), Bootstrap 5, Font Awesome, Flex Layout |
| Backend / persistence | Firebase Firestore (`@angular/fire` compat), browser cookies (`ngx-cookie-service`) |
| Tooling | Angular CLI, ESLint, Karma/Jasmine, pnpm, gh-pages |

---

## Application architecture (top level)

The app bootstraps as a standalone root component with hash-based routing. Feature areas are lazy-loaded NgModules that register sibling routes under the empty path.

```mermaid
flowchart TB
  subgraph bootstrap["Bootstrap (main.ts)"]
    BA[AppComponent]
    PR[Providers: HTTP, Animations, PrimeNG Aura, GlobalErrorHandler]
  end

  subgraph routing["AppRoutingModule (hash router)"]
    R1[LayoutModule]
    R2[AngularNewsModule]
    R3[DigitsModule]
    R4[MaterialExamplesModule]
    R5[PlaygroundModule]
    R6[ErrorComponent - lazy standalone]
    R7[NotFoundModule]
  end

  BA --> routing
  R1 --> LayoutShell
  R2 --> NewsShell
  R3 --> DigitsGame
  R4 --> MaterialShell
  R5 --> PlaygroundShell

  subgraph shared["SharedModule (cross-cutting)"]
    Header
    SidenavList
    LayoutContent
    Checklist
  end

  LayoutShell --> shared
  PlaygroundShell --> shared
  MaterialShell --> shared
  NewsShell --> shared
```

### Feature modules and routes

| Module | Shell / entry | Example routes |
|--------|---------------|----------------|
| **LayoutModule** | `LayoutComponent` (MatSidenav + toolbar) | `#/layout-pages/home`, `#/layout-pages/about-me`, `#/layout-pages/awards` |
| **AngularNewsModule** | `AngularNewsComponent` | `#/angular-news-pages/angular-news-v16-signals`, `#/angular-news-pages/angular-news-v15-standalone` |
| **DigitsModule** | `DigitsGameComponent` | `#/digits/digits-game` |
| **MaterialExamplesModule** | `MaterialExamplesLayoutComponent` | `#/material-examples/components/material-examples-main` |
| **PlaygroundModule** | `PlaygroundLayoutComponent` | `#/playground/components/nested-example`, `customizable-wizard`, `slide-toggle-example` |

Navigation is driven by `SidenavListComponent` (PrimeNG TieredMenu) with links to all feature areas plus an external Next.js demo.

---

## Layout and shared layer

```mermaid
flowchart LR
  subgraph layout["LayoutModule"]
    LC[LayoutComponent]
    LC --> Header
    LC --> Sidenav
    LC --> RouterOutlet
  end

  subgraph shared["SharedModule exports"]
    Header[HeaderComponent]
    Sidenav[SidenavListComponent]
    LContent[LayoutContentComponent]
    Checklist[ChecklistComponent]
  end

  subgraph errors["Error handling"]
    GEH[GlobalErrorHandlerService]
    HTTP[httpErrorInterceptor]
    ENS[ErrorNotificationService]
    GEH --> ENS
    HTTP --> ENS
  end

  AppComponent --> GEH
```

- **LayoutComponent** — responsive sidenav (Flex Layout `MediaObserver`); redirects `/` → `/layout-pages/home`.
- **SharedModule** — registers Font Awesome icons; exports header, sidenav, checklist, FlexLayout, Menubar.
- **Error pipeline** — `GlobalErrorHandlerService` + HTTP interceptor funnel errors to `ErrorNotificationService`.

---

## Playground module (dynamic wizard)

Experimental UI patterns live under `PlaygroundModule`.

```mermaid
flowchart TB
  PL[PlaygroundLayoutComponent]
  PL --> NE[NestedExampleComponent]
  PL --> CW[CustomizableWizardMainComponent]
  PL --> ST[SlideToggleExampleComponent]

  CW --> CWC[CustomizableWizardComponent]
  CWC --> DCH[DynamicComponentHostDirective]
  DCH --> Person[PersonComponent]
  DCH --> Address[AddressComponent]
  DCH --> Company[CompanyComponent]
  DCH --> Misc[MiscellaneousComponent]

  CW --> Models["IWizardData / IWizardPage / IFormRuleDescriptor"]
```

The customizable wizard builds pages from `IWizardPage` descriptors and mounts step components dynamically via `ViewContainerRef` (`DynamicComponentHostDirective`).

---

## Digits module — deep architecture

Daily arithmetic puzzle (inspired by NY Times Digits). Five stages per day; each stage presents six numbers and a target. The player combines numbers with `+`, `-`, `×`, `/` until the target is reached.

### Module boundary

```mermaid
flowchart TB
  subgraph DigitsModule
    DM[digits.module.ts]
    DR[digits-routing.module.ts]
    DGC[DigitsGameComponent]
    DM --> DR
    DM --> DGC
    DM --> Firebase["AngularFireModule.initializeApp(firebasePuzzleData)"]
    DM --> Providers[NumbersFirestoreService]
  end

  Route["#/digits/digits-game"] --> DGC
```

**Imports:** PrimeNG Toast/Dialog, Material Icon, Clipboard, FlexLayout, AngularFirestore compat.  
**Providers:** `NumbersFirestoreService` (also `providedIn: 'root'`).

---

### Component tree and UI flow

```mermaid
flowchart TB
  DGC[DigitsGameComponent<br/>orchestrator, state, persistence]

  DGC --> GSL[GameStageLevelsComponent<br/>renders 5 stage tabs]
  GSL --> SL1[StageLevelComponent × 5]
  SL1 -->|click| SCS[StageCommunicationService]

  DGC --> GAO[GameArithmeticOperationsComponent<br/>operands + operators UI]
  GAO -->|expectedResultReached| DGC
  GAO -->|invalidOperationExecuted| DGC

  DGC --> Toast[p-toast]
  DGC --> Splash[p-dialog splash]
  DGC --> StageDone[p-dialog stage complete]
  DGC --> AllDone[p-dialog all stages complete]
```

| Component | Responsibility |
|-----------|----------------|
| **DigitsGameComponent** | Game lifecycle: init from cookie/DB, stage index, modals, cookie/Firestore sync, clipboard summary |
| **GameStageLevelsComponent** | Validates exactly 5 `IStageLevel` items; lays out stage indicators |
| **StageLevelComponent** | Single stage pill (selected / completed / value); emits click via `StageCommunicationService` |
| **GameArithmeticOperationsComponent** | Operand/operator buttons, undo stack, operation history, animations; emits win or invalid op |

---

### DigitsGameComponent — initialization sequence

```mermaid
sequenceDiagram
  participant User
  participant DGC as DigitsGameComponent
  participant Cookie as CookieService
  participant Gen as GenerateGameParameters
  participant FS as NumbersFirestoreService
  participant DB as Firestore /puzzledata

  User->>DGC: navigate to /digits/digits-game
  DGC->>DGC: initializeStageLevels()
  DGC->>Cookie: get(CookieLKNumbers)

  alt cookie exists and same calendar day
    Cookie-->>DGC: ICookieData
    DGC->>DGC: restore stageIndex, stageLevels, gameParameters
    opt incomplete game
      DGC->>DGC: splashVisible = true
    end
  else cookie exists but different day
    DGC->>Gen: generateStageNumbers()
    Gen-->>DGC: IGameParameters[5]
    DGC->>DGC: mapGameParametersToPuzzleData()
    DGC->>FS: upsert by navigator.language
    FS->>DB: create or update document
  else no cookie
    DGC->>FS: snapshotChanges() getAll()
    FS->>DB: query collection
    alt locale doc exists and puzzle day is today
      DB-->>DGC: JSON puzzle data
      DGC->>DGC: mapPuzzleDataToGameParameters()
    else stale or missing
      DGC->>Gen: generateStageNumbers()
      DGC->>FS: create/update puzzle doc
    end
  end
  DGC->>Cookie: set(expires midnight)
```

---

### GameArithmeticOperationsComponent — operation flow

```mermaid
stateDiagram-v2
  [*] --> Idle: ngOnInit (empty history stacks)

  Idle --> OperandSelected: onOperandButtonClick
  OperandSelected --> OperandPairSelected: second operand selected
  OperandPairSelected --> Idle: deselect operand

  OperandPairSelected --> Evaluating: operator selected
  Evaluating --> Invalid: EvaluateArythmeticOperation → MIN_VALUE
  Invalid --> Reverted: invalidOperationExecuted → revertLastOperation

  Evaluating --> Applied: valid result
  Applied --> Win: result === gameParameters.result
  Applied --> Idle: merge operands, disable used number

  Win --> [*]: expectedResultReached(operationHistory)

  Idle --> Reverted: REV operator «
  Reverted --> Idle: pop history stack
```

**Stacks inside `GameArithmeticOperationsComponent`:**

- `history: Stack<IGameParameters>` — snapshots for undo (`«` revert).
- `operationHistory: Stack<IGameOperation>` — ordered list of executed ops for victory summary.

---

### Services

```mermaid
classDiagram
  class NumbersFirestoreService {
    -dbPath: "/puzzledata"
    +getAll() AngularFirestoreCollection
    +create(puzzleData)
    +update(id, data)
    +delete(id)
  }

  class StageCommunicationService {
    -subjectItemUpdate: Subject~IStageLevel~
    +updatePerformedItem(value)
    +getUpdatedStageLevel() Observable
  }

  class DigitsGameComponent {
    uses NumbersFirestoreService
    uses StageCommunicationService
    uses CookieService
    uses ClipboardService
    uses MessageService
  }

  class StageLevelComponent {
    uses StageCommunicationService
  }

  DigitsGameComponent --> NumbersFirestoreService
  DigitsGameComponent --> StageCommunicationService
  StageLevelComponent --> StageCommunicationService
  NumbersFirestoreService --> FirestorePuzzleData
```

| Service | Scope | Role |
|---------|-------|------|
| **NumbersFirestoreService** | root + module | CRUD on Firestore collection `/puzzledata`; stores locale-keyed JSON puzzle payloads |
| **StageCommunicationService** | root | RxJS `Subject` bridge when a stage tab is clicked (observed in `DigitsGameComponent`) |

---

### Domain models (Digits)

```mermaid
erDiagram
  IGameParameters ||--o{ IGameOperand : contains
  IPuzzleData ||--o{ IPuzzleDataStage : stages
  IFirestorePuzzleData ||--|| IPuzzleData : "JSON in data field"
  ICookieData ||--o{ IStageLevel : stageLevels
  ICookieData ||--o{ IGameParameters : gameParameters

  IGameParameters {
    number result
    number stageIndex
  }
  IGameOperand {
    number id
    boolean selected
    boolean disabled
    number value
  }
  IStageLevel {
    number index
    number value
    boolean selected
    boolean completed
    string summary
  }
  IPuzzleData {
    Date day
    string locale
  }
  IPuzzleDataStage {
    number stageIndex
    number expectedValue
    number[] operands
  }
  IFirestorePuzzleData {
    string id
    string locale
    string data
  }
  IGameOperation {
    number[] operands
    string operator
    number result
  }
```

**Implementation classes:** `GameParameters`, `GameOperand`, `StageLevel`, `PuzzleData`, `PuzzleDataStage`, `FirestorePuzzleData`, `CookieData`, `GameOperation`, `Stack<T>`.

**Interfaces:** mirror models (`IGameParameters`, `IGameOperand`, `IStageLevel`, etc.) plus `IStack<T>`.

---

### Utilities and constants

```mermaid
flowchart LR
  subgraph generation["Puzzle generation"]
    GUN[GenerateUniqueNumber]
    GGP[GenerateGameParameters]
    GUN --> GGP
    GGP --> EAO[EvaluateArythmeticOperation]
  end

  subgraph gameplay["Runtime evaluation"]
    GAO[GameArithmeticOperationsComponent]
    GAO --> EAO
    EAO --> DC[DigitsConstants]
  end

  subgraph animation
    OBA[operandButtonAnimation]
    GAO --> OBA
  end
```

| File | Purpose |
|------|---------|
| `digits-constants.ts` | Operator symbols: `«`, `+`, `-`, `×`, `/` |
| `generate-unique-number.ts` | Non-repeating random integers in a range |
| `generate-game-parameters.ts` | Builds 5 stages: random operands per difficulty band, simulates valid ops to derive target, sorts stages by ascending target |
| `evaluate-arythmetic-operation.ts` | Static `evaluate()` and `cloneGameParameters()`; invalid sub/div returns `Number.MIN_VALUE` |
| `operand-button-animation.ts` | Angular animation trigger on operand buttons |

**Stage difficulty (GenerateGameParameters):** operand ranges and target bounds tighten per `stageIndex` (0–4); results sorted ascending so stage tabs show increasing targets.

---

### Persistence model

```mermaid
flowchart TB
  subgraph client["Browser"]
    Cookie["Cookie: CookieLKNumbers<br/>JSON ICookieData, expires midnight"]
    Locale["navigator.language"]
  end

  subgraph firestore["Firebase Firestore"]
    Coll["/puzzledata collection"]
    Doc["Document per locale<br/>{ locale, data: stringified IPuzzleData }"]
    Coll --> Doc
  end

  DGC[DigitsGameComponent]
  DGC <-->|read/write same day| Cookie
  DGC -->|findExistingPuzzleDocForLocale| Doc
  DGC -->|upsert daily puzzle| Doc
  Locale --> DGC
```

- **Cookie** — fast same-day resume (stage progress, parameters, completion flag).
- **Firestore** — shared daily puzzle per locale; `findExistingPuzzleDocForLocale` matches exact tag or primary language subtag.
- **Clipboard** — stage/all-stage operation summaries via `ngx-clipboard`.

---

### Digits file map

```
src/app/digits/
├── digits.module.ts
├── digits-routing.module.ts
├── digits-game.component.{ts,html,scss}
├── digits-constants.ts
├── generate-game-parameters.ts
├── generate-unique-number.ts
├── digit-styles.scss
├── components/
│   ├── game-stage-levels/
│   ├── stage-level/
│   └── game-arithmetic-operations/
│       ├── evaluate-arythmetic-operation.ts
│       └── operand-button-animation.ts
├── models/          # interfaces + model classes (puzzle, game, cookie, stack)
└── services/
    ├── numbers-firestore.service.ts
    └── stage-communication.service.ts
```

---

## Source layout (full app)

```
src/
├── main.ts                    # bootstrapApplication + providers
├── app/
│   ├── app.component.ts
│   ├── app-routing.module.ts
│   ├── layout/                # portfolio shell (home, about, awards)
│   ├── layout-pages/          # routed page components
│   ├── angular-news/          # news shell + lazy news pages
│   ├── angular-news-pages/
│   ├── digits/                # numbers puzzle (see above)
│   ├── material-examples/
│   ├── playground/
│   ├── shared/                # header, sidenav, checklist, error services
│   ├── error/
│   └── not-found/
├── assets/                    # icons, logos, CV PDF
├── environments/              # Firebase config (prod/dev)
└── styles/
```

---

## Development server

Run `pnpm start` or `ng serve`. Navigate to `http://localhost:4200/`. The app uses hash routing (`#/...`).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. Artifacts go to `dist/`.

Production GitHub Pages build:

```bash
pnpm gitbuild   # ng build --configuration production --base-href /LKovariHome/
pnpm gitdeploy  # gh-pages -d dist
```

## Running unit tests

Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Known bugs and/or To Do List

- Generating index html...1 rules skipped due to selector errors: legend+\* -> Cannot read property 'type' of undefined
- set to true : "strictPropertyInitialization": false,
- use date pipe at lastUpdateDate
- Digits: share copy to clipboard does not work reliably
- Digits: Firestore locale query could use dedicated queries instead of full collection scan

## Would be good or better

- hidden side nav when press the hamburger (menu) icon floating above the content, instead of shift right the content

## Original values which changed.

-1. angular.json production build
"maximumWarning": "500kb",
"maximumError": "1mb"

-2. angular.json below the production added
"optimization": {
"scripts": true,
"styles": {
"minify": true,
"inlineCritical": false
},
"fonts": true
},
to eliminate the following warning
Generating index html...1 rules skipped due to selector errors: legend+\* -> Cannot read property 'type' of undefined

-3. angular.json architect\build\options\styles
replaced "node_modules/bootstrap/scss/bootstrap.css" with "node_modules/bootstrap/scss/bootstrap.scss",

-4. added "preserveSymlinks": true, to prevent:
main.ts:11 ERROR Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.io/errors/NG0203

## Deployed to https://lkovari.github.io/LKovariHome
