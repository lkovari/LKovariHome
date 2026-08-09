# Frontend interjúkérdések válaszokkal
Forrás: `frontend-knowledge-base.md` (László Kővári) + gyakori interjúkérdések.
Bootstrap **nincs** a kérdések között. SCSS, CSS és RxJS higher-order mapping kiemelten szerepel.
Max. **50** kérdés szintenként. Minden kérdéshez hivatalos dokumentáció link.
Formátum: **Kérdés N:** …, majd kifejtett **Válasz** (bekezdések / listák), végül **Dokumentáció**.

---

## Tartalomjegyzék

1. [Junior](#junior)
2. [Medior](#medior)
3. [Senior](#senior)
4. [Staff](#staff)

---


## Junior

### Kérdés 1: Mi a különbség a `let`, `const` és a `var` között?

**Válasz:**

A `var` függvény-hatókörű, és a deklarációja a függvény (vagy globális) tetejére „emelkedik” (hoisting), ezért a deklaráció előtt is létezik `undefined` értéken. A `let` és a `const` blokk-hatókörű (`{ ... }`), és temporal dead zone-ban vannak a deklarációig – korábbi olvasás hibát dob.

A `const` nem engedi a változó újraértékelését (új referencia hozzárendelését); az objektum/tömb tartalma viszont továbbra is módosítható. Modern kódban: alapból `const`, ha újra kell kötni `let`, a `var` kerülendő.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

### Kérdés 2: Mit jelent a strict equality (`===`) a `==`-hez képest?

**Válasz:**

Az `===` (strict equality) típuskonverzió nélkül hasonlít: csak akkor igaz, ha a típus és az érték is megegyezik. Az `==` (loose equality) előbb Abstract Equality Comparison szerint kényszerített átalakítást végez (pl. `0 == false` igaz). Ez rejtett hibákhoz vezet.

Szabály: mindig `===`/`!==`. Gyakorlati kivétel: `value == null` szándékosan ellenőrzi a `null` és `undefined` értékeket együtt.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

### Kérdés 3: Mi az a closure JavaScriptben?

**Válasz:**

Closure akkor jön létre, amikor egy belső függvény „emlékszik” a külső függvény lexikális környezetére (változóira), még akkor is, ha a külső függvény már visszatért. Így privát állapotot tudunk tartani factory-kban, event handlerekben, debounce implementációkban.

Fontos: a closure a változóra hivatkozik, nem a pillanatnyi érték másolatára – ciklusokban ezért gyakori a `let` vs `var` meglepetés.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

### Kérdés 4: Mi a különbség az arrow function és a normál függvény `this` kötése között?

**Válasz:**

A hagyományos `function` saját `this`-t kap a hívás módjától (metódus, `call`/`apply`, `new`). Az arrow function nem kap saját `this`-t, `arguments`-ot, és nem használható konstruktorként: a `this` lexikálisan a környező scope-ból jön.

Ezért callbackben (pl. `subscribe`, `map`) és osztálymezőként gyakran arrow-t használunk, hogy ne veszítsük el a komponens `this`-ét.

Prototípus-metódusnál viszont a normál függvény a szokásos választás.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

### Kérdés 5: Mik a JavaScript primitív típusok?

**Válasz:**

A specifikáció szerinti primitívek: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` és `null`. Ezek érték szerint másolódnak, és nincs saját metódusuk a heapen (a boxing miatt mégis hívhatunk pl. `"a".toUpperCase()`-t). Minden más – tömb, függvény, plain object, Date, Map – objektum, és referencia szerint adódik át.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

### Kérdés 6: Mi a különbség az `unknown` és az `any` között TypeScriptben?

**Válasz:**

Az `any` kikapcsolja a típusellenőrzést: bármilyen művelet megengedett, így hibák csak futásidőben derülnek ki. Az `unknown` szintén „bármi lehet”, de amíg típusszűkítést (typeof, type guard) nem végzünk, a fordító nem engedi a tulajdonság-hozzáférést.

Külső JSON, API válasz, user input esetén `unknown` a biztonságos default; `any` kerülendő.

**Dokumentáció:** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#unknown

### Kérdés 7: Mit csinál az `interface` és a `type` TypeScriptben?

**Válasz:**

Mindkettővel objektumalakot és API szerződést írunk le. Az `interface` declaration merginggel bővíthető, és osztályok `implements`-elhetik.

A `type` alias uniókra (`A | B`), intersectionre (`A & B`), feltételes és mapped type-okra rugalmasabb. Új kódban mindkettő elfogadott; csapatban érdemes konvenciót választani.

**Dokumentáció:** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

### Kérdés 8: Mi az a generic TypeScriptben?

**Válasz:**

A generic típusparaméter (`<T>`), amellyel a függvény/osztály/típus a hívás helyén kap konkrét típust, így újrafelhasználható és típusbiztos marad. Példa: `function identity<T>(x: T): T`, vagy `HttpClient.get<User>('/api/me')`.

Constraint-tel (`T extends { id: string }`) korlátozhatjuk, milyen alakú `T` fogadható el.

**Dokumentáció:** https://www.typescriptlang.org/docs/handbook/2/generics.html

### Kérdés 9: Mi a CSS specificity, és hogyan számoljuk?

**Válasz:**

A specifikusság dönti el, melyik szabály nyer, ha több szelektor ugyanarra a tulajdonságra vonatkozik. Egyszerűsített súly: inline stílus > ID (`#id`) > osztály/attribútum/pseudo-class (`.c`, `[attr]`, `:hover`) > elem/pseudo-elem (`div`, `::before`).

Ha a specifikusság azonos, a későbbi forrás nyer. Az `!important` ettől függetlenül felülír – ezért ritkán, tudatosan használandó.

Ütközés sorrendje: `!important` → specifikusság → forrás sorrendje.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity

### Kérdés 10: Mik a fő CSS combinatorok, és mit jelentenek?

**Válasz:**

Négy fő kombinátor.

1. leszármazott szóköz – `div p` bármilyen mélységű `p`.
2. gyermek `>` – csak közvetlen gyerek.
3. szomszédos testvér `+` – közvetlenül következő testvér.
4. általános testvér `~` – minden későbbi testvér ugyanazon a szinten.

Emellett gyakori a csoportosítás `,`-vel és az attribútum-szelektor.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators

### Kérdés 11: Mi a különbség a `position: relative`, `absolute`, `fixed` és `sticky` között?

**Válasz:**

`static` (alap): a normal flow.

- **`relative`:** a saját eredeti helyéhez képest eltolható, a helye a flow-ban megmarad.
- **`absolute`:** kikerül a flow-ból, a legközelebbi nem-static őshöz igazodik.
- **`fixed`:** a viewporthoz rögzül, görgetéskor helyben marad.
- **`sticky`:** egy küszöbig a normal flow-ban marad, majd a legközelebbi scroll konténerhez „ragad” (nem a viewporthoz, mint a `fixed`).

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/position

### Kérdés 12: Mi a Flexbox fő célja, és melyek a legfontosabb tulajdonságai?

**Válasz:**

A Flexbox egy dimenziós (egy főtengely: sor vagy oszlop) rugalmas elrendezést ad. Konténeren: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`.

Elemeken: `flex-grow`, `flex-shrink`, `flex-basis` (gyakran `flex` shorthand). Navigációs sávok, gombcsoportok, függőleges középre igazítás tipikus use case.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

### Kérdés 13: Mikor használjunk CSS Gridet Flexbox helyett?

**Válasz:**

Grid akkor, ha egyszerre sorokra és oszlopokra kell bontani (kétdimenziós layout: dashboard, card grid). Flexbox egy irányra optimalizált. Gyakorlatban gyakran együtt: Grid az oldalszerkezetre, Flex a komponensen belüli sorokra. `fr`, `minmax`, `auto-fit`/`auto-fill` a Grid erősségei.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

### Kérdés 14: Mi a különbség a `px`, `rem`, `em`, `%`, `vh`/`vw` egységek között?

**Válasz:**

`px` abszolút CSS pixel (nem azonos a fizikai eszközpixellel; HiDPI-n egy CSS `px` több device pixelt is lefedhet). `rem` a gyökérelem (`html`) fontméretéhez – tipográfia és spacing skálázásához ideális. `em` a szülő fontméretéhez, nestingnél összetett lehet. `%` a tartalmazó blokkhoz. `vh`/`vw` a viewport 1%-a – full-bleed szekcióknál hasznos, mobil böngésző chrome miatt óvatosan.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

### Kérdés 15: Mi az a CSS custom property, és miben különbözik az SCSS változótól?

**Válasz:**

A CSS custom property (`--color-primary`) futásidőben létezik, öröklődik a DOM-fában, és `var(--color-primary)`-mal olvasható. Témaváltás (`[data-theme=dark]`) reload nélkül megoldható.

Az SCSS `$color` fordításkor behelyettesítődik és eltűnik a kimenetből – nem öröklődik komponenshatárokon át. Design tokenekhez ezért CSS változó az ajánlott.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 16: Mi az SCSS, és miben segít a sima CSS-hez képest?

**Válasz:**

Az SCSS a Sass szintaxisa: CSS-szuperkészlet nestinggel, mixinekkel, függvényekkel, partial fájlokkal és modulrendszerrel (`@use` / `@forward`). Nagyobb stíluskódbázisban strukturálhatóbb.

Angularban a komponens `styleUrl` gyakran `.scss`. A futásidejű témához továbbra is CSS custom property-ket használjunk, ne csak SCSS változókat.

**Dokumentáció:** https://sass-lang.com/documentation/

### Kérdés 17: Mi a különbség az SCSS `@import` és `@use` között?

**Válasz:**

A régi `@import` globális névtérbe önti a tagokat, többször is betöltheti ugyanazt a partialt. A modern `@use` egyszer tölti be a modult, névtérbe teszi (pl. `tokens.$radius`), az `@forward` pedig újraexportál. Az `@import` hivatalosan megszűnik – új projektben kizárólag `@use`/`@forward`.

**Dokumentáció:** https://sass-lang.com/documentation/at-rules/use/

### Kérdés 18: Mi az Angular komponens?

**Válasz:**

A komponens az UI legkisebb újrafelhasználható egysége: TypeScript osztály + HTML sablon + stílusok, `@Component` metaadattal (szelektor, `standalone`, `imports`, change detection stb.). A szelektorral jelenik meg a DOM-ban.

Modern Angularban standalone komponens az alap: a függőségeit saját `imports` tömbjében adja meg, NgModule nélkül.

**Dokumentáció:** https://angular.dev/guide/components

### Kérdés 19: Milyen data binding típusok vannak Angularban?

**Válasz:**

1. Interpoláció: `{{ value }}`.
2. Property binding: `[disabled]="isDisabled"`.
3. Event binding: `(click)="save()"`.
4. Kétirányú: `[(ngModel)]` vagy signal `model()` / `[(value)]`.
5. Class/style binding: `[class.active]`, `[style.width.px]`.

A binding iránya egyértelmű: `[]` befelé, `()` kifelé.

**Dokumentáció:** https://angular.dev/guide/templates/binding

### Kérdés 20: Mi a különbség az `@Input()` / `@Output()` és a modern `input()` / `output()` között?

**Válasz:**

A dekorátoros `@Input`/`@Output` a klasszikus API; változáskor gyakran `ngOnChanges` kellett. A v17–v18+ `input()`, `output()`, `model()` signal-alapú: az inputot `this.label()`-ként olvassuk, van `input.required`, `transform`, `alias`, és `computed`-del származékos érték.

Jobban illeszkedik az OnPush/zoneless világhoz.

**Dokumentáció:** https://angular.dev/guide/signals/inputs

### Kérdés 21: Mi a pipe szerepe Angularban?

**Válasz:**

A pipe a sablonban alakít át értéket megjelenítéshez (`date`, `currency`, `async`, saját pipe). A **pure** pipe csak akkor fut újra, ha a bemenet referencia/primitív értéke változik – immutábilis adatokkal hatékony.

Az **impure** pipe minden change detection ciklusban fut, ezért ritkán indokolt. Ne tegyünk pipe-ba nehéz üzleti logikát vagy HTTP hívást.

**Dokumentáció:** https://angular.dev/guide/pipes

### Kérdés 22: Mi a különbség a strukturális és az attribútum direktíva között?

**Válasz:**

A strukturális direktíva a DOM szerkezetét változtatja: elemeket ad hozzá/vesz el (`@if`, `@for`, korábban `*ngIf`/`*ngFor`). Az attribútum direktíva meglévő elemen módosít megjelenést vagy viselkedést (`ngClass`, `ngStyle`, custom highlight).

Custom strukturális direktívánál `TemplateRef` + `ViewContainerRef` kell.

**Dokumentáció:** https://angular.dev/guide/directives

### Kérdés 23: Mi az `@if` és a `[hidden]` különbsége?

**Válasz:**

Az `@if` (és a régi `*ngIf`) feltétel hamis esetén **eltávolítja** az ágat a DOM-ból: a beágyazott komponens megsemmisül, a lifecycle és a subscription leáll. A `[hidden]` csak CSS-szinten rejti: az elem a DOM-ban marad, a komponens él.

Drága fa ellen `@if`; gyakori ki-be kapcsolásnál, ahol az állapotmegőrzés fontos, `[hidden]` vagy CSS lehet jobb.

**Dokumentáció:** https://angular.dev/guide/templates/control-flow

### Kérdés 24: Miért kell `track` az `@for`-nál?

**Válasz:**

A `track` megmondja az Angularnak, melyik listaelem melyik DOM-csomóponthoz tartozik. Stabil egyedi kulcs (`track item.id`) esetén csak a változott elemek frissülnek; enélkül (vagy `track $index` mellett sorrendmódosításkor) felesleges destroy/create, elvesző fókusz/animáció.

Nagy listáknál ez érezhető teljesítménykülönbség.

**Dokumentáció:** https://angular.dev/api/core/@for

### Kérdés 25: Mi az `ng-container`, `ng-template` és `ng-content` szerepe?

**Válasz:**

- **`ng-container`:** logikai csoportosítás extra DOM elem nélkül.
- **`ng-template`:** sablondefiníció, ami önmagában nem renderel; `ngTemplateOutlet` vagy strukturális direktíva jeleníti meg.
- **`ng-content`:** content projection – a szülő által közrefogott tartalom beszúrási pontja.

A három fogalom keverése gyakori junior hiba.

**Dokumentáció:** https://angular.dev/guide/components/content-projection

### Kérdés 26: Mi az Observable RxJS-ben?

**Válasz:**

Az Observable egy lazy, push-alapú adatfolyam: 0…n `next` érték, opcionális `error` és `complete`. Csak `subscribe` (vagy async pipe / `toSignal`) indítja el.

Az Angular `HttpClient` és sok UI stream Observable-t ad. Operátorokkal komponálható; a Promise-szal ellentétben cancelelhető és több értéket is kibocsáthat.

**Dokumentáció:** https://rxjs.dev/guide/observable

### Kérdés 27: Mi a különbség a cold és a hot Observable között?

**Válasz:**

**Cold:** minden előfizető saját végrehajtást kap (pl. új HTTP kérés előfizetőnként) – lazy producer. **Hot:** a producer az előfizetéstől függetlenül vagy megosztva fut; az új előfizető csak a későbbi értékeket kapja (Subject, DOM események). Cold → hot: tipikusan `share()` / `shareReplay()`.

**Dokumentáció:** https://rxjs.dev/guide/observable

### Kérdés 28: Mi a különbség a Subject, BehaviorSubject, ReplaySubject és AsyncSubject között?

**Válasz:**

- **`Subject`:** multicast, nincs kezdőérték; csak a feliratkozás utáni `next` értékeket kapod.
- **`BehaviorSubject`:** kötelező kezdőérték, az új előfizető azonnal megkapja az aktuálisat.
- **`ReplaySubject(n)`:** az utolsó n értéket visszajátssza.
- **`AsyncSubject`:** csak az utolsó értéket adja, és csak `complete()` után.

Állapotmegosztásra gyakran BehaviorSubject vagy signal a modern választás.

**Dokumentáció:** https://rxjs.dev/guide/subject

### Kérdés 29: Mit csinál a `map`, `filter` és a `tap` operátor?

**Válasz:**

- **`map`:** minden kibocsátott értéket átalakít (pl. DTO → view model).
- **`filter`:** predikátum alapján elengedi vagy eldobja az értéket.
- **`tap`:** mellékhatás (logolás, metrika) anélkül, hogy az értéket megváltoztatná.

Üzleti átalakítást ne `tap`-be tegyünk.

**Dokumentáció:** https://rxjs.dev/guide/operators

### Kérdés 30: Mit csinál a `debounceTime` és a `distinctUntilChanged`?

**Válasz:**

`debounceTime(ms)`: csak akkor bocsát ki, ha az adott ideig nem jött új érték – typeaheadnál csökkenti a felesleges kéréseket. `distinctUntilChanged`: csak akkor enged tovább, ha az új érték nem egyenlő az előzővel. Gyakori páros: `debounceTime(300), distinctUntilChanged(), switchMap(...)`.

**Dokumentáció:** https://rxjs.dev/api/operators/debounceTime

### Kérdés 31: Mi a Dependency Injection Angularban?

**Válasz:**

A DI keretrendszer a függőségeket létrehozza és átadja, ahelyett hogy a komponens maga példányosítaná őket (`new`). Kulcsfogalmak: token, provider (`useClass`/`useValue`/`useFactory`), injektor hierarchia. Modern kódban `inject(MyService)`; teszteléskor a provider könnyen mockolható.

**Dokumentáció:** https://angular.dev/guide/di

### Kérdés 32: Mit jelent a `@Injectable({ providedIn: 'root' })`?

**Válasz:**

A szolgáltatás a root EnvironmentInjectorben lesz elérhető, tipikusan alkalmazásszintű singletonként, és tree-shakable: ha semmi nem injektálja, a build kidobhatja. Alternatíva: feature/route `providers` – akkor az élettartam a route/feature-höz kötődik.

**Dokumentáció:** https://angular.dev/guide/di/creating-an-injectable-service

### Kérdés 33: Hogyan adunk át route paramétert Angularban?

**Válasz:**

Path param: `path: 'users/:id'`, olvasás `ActivatedRoute.paramMap` / snapshot, vagy modern `withComponentInputBinding()` + `input()`. Query: `?page=2` → `queryParamMap`. State: `navigateByUrl(..., { state })` – frissítéskor elveszhet. Resolverrel előre betöltött adat is átadható a route `data`-ján.

**Dokumentáció:** https://angular.dev/guide/routing/read-route-state

### Kérdés 34: Mi a PathLocationStrategy és a HashLocationStrategy különbsége?

**Válasz:**

Path (alap): tiszta URL (`/users/1`), SEO-barát; a szervernek minden deep linket az `index.html`-re kell fallbackelnie. Hash: `#/users/1`, a `#` utáni rész nem megy a szerverre – egyszerűbb hosting, kevésbé szép URL. Modern API: `withHashLocation()`.

**Dokumentáció:** https://angular.dev/guide/routing

### Kérdés 35: Mire való az `ngOnInit` és az `ngOnDestroy`?

**Válasz:**

`ngOnInit`: egyszer fut, miután az inputok először beálltak – inicializálás, első adatlekérés helye. `ngOnDestroy`: takarítás (unsubscribe, timer, listener). Modern alternatíva: `DestroyRef` / `takeUntilDestroyed()`, illetve signal/`resource` ahol nincs manuális subscription.

**Dokumentáció:** https://angular.dev/guide/components/lifecycle

### Kérdés 36: Mit jelent a ViewEncapsulation Emulated, None és ShadowDom?

**Válasz:**

**Emulated** (alap): attribútumokkal scope-olt stílusok, natív Shadow DOM nélkül. **None**: globális stílusok, szivárghatnak – ritkán, tudatosan. **ShadowDom**: natív shadow root, erősebb izoláció, de a global theme öröklés bonyolultabb. `::ng-deep` kerülendő.

**Dokumentáció:** https://angular.dev/guide/components/styling

### Kérdés 37: Mi a különbség a template-driven és a reactive forms között?

**Válasz:**

Template-driven: az űrlap nagy része a sablonban van (`ngModel`) – gyors kis formokra. Reactive: `FormControl`/`FormGroup`/`FormArray` a kódban, explicit validáció, jobb tesztelhetőség és skálázhatóság. v14+ Typed Forms; összetett UI-ra a reactive (később Signal Forms) az irány.

**Dokumentáció:** https://angular.dev/guide/forms

### Kérdés 38: Mik a beépített Angular validátorok, és hol használjuk őket?

**Válasz:**

Gyakoriak: `Validators.required`, `minLength`/`maxLength`, `email`, `pattern`, `min`/`max`. Reactive formsban a control létrehozásakor adhatók meg. Írhatók custom sync/async validátorok is. UX: hibát általában `touched`/`dirty` után mutassunk.

**Dokumentáció:** https://angular.dev/guide/forms/form-validation

### Kérdés 39: Mi az async pipe, és miért hasznos?

**Válasz:**

A sablonban feliratkozik Observable-re/Promise-ra, kirendereli az értéket, és a view megsemmisülésekor automatikusan unsubscribe-ol. OnPush mellett `markForCheck`-et is triggerei.

Figyelem: ugyanazt a hideg HTTP Observable-t többször `async`-elve többszörös kérés lehet – `shareReplay` vagy `toSignal` segít.

**Dokumentáció:** https://angular.dev/api/common/AsyncPipe

### Kérdés 40: Mi a standalone komponens, és miért vált alapértelmezetté?

**Válasz:**

Standalone komponens/direktíva/pipe NgModule nélkül működik: a metaadat `imports` tömbjében deklarálja a függőségeit. Egyszerűbb lazy load, tisztább határok, kevesebb boilerplate. Az új Angular projektek ezt tekintik alapnak; a régi NgModule-os kód migrálható schematiccel.

**Dokumentáció:** https://angular.dev/guide/components/importing

### Kérdés 41: Mi a kapcsolata a `*ngIf` / `*ngFor` és az új `@if` / `@for` control flow-nak?

**Válasz:**

A v17+ beépített control flow (`@if`, `@for`, `@switch`, `@defer`) natív sablonszintaxis, nem struktúrális direktíva-import. Előnyök: jobb típuskövetkeztetés, teljesítmény, olvashatóság. A régi `*ngIf`/`*ngFor` még működik, de új kódban az `@`-os forma az irány.

**Dokumentáció:** https://angular.dev/guide/templates/control-flow

### Kérdés 42: Mit jelent a semantic HTML, és miért fontos?

**Válasz:**

A jelentéshez illő elemek használata: `header`, `nav`, `main`, `button`, `a`, `label` – nem „minden div”. Előny: képernyőolvasó és billentyűzetes navigáció, SEO, karbantarthatóság. Antipattern: kattintható `div` `button` helyett, vagy heading hierarchia nélkül.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content

### Kérdés 43: Mi a `:hover`, `:focus` és `:focus-visible` szerepe?

**Válasz:**

- **`:hover`:** egér/pointer fölött.
- **`:focus`:** fókuszban.
- **`:focus-visible`:** a böngésző akkor mutatja a fókuszgyűrűt, ha indokolt (tipikusan billentyű) – egérkattintás után nem marad zavaró outline, de az a11y megmarad.

Interaktív elemeken mindig legyen látható fókuszjelzés.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible

### Kérdés 44: Mi az event bubbling, és mit csinál a `stopPropagation`?

**Válasz:**

Bubbling: az esemény a cél elemtől a szülők felé terjed. Capture fázisban fordítva. `stopPropagation()` megállítja a továbbterjedést; `preventDefault()` az alapértelmezett böngésző-viselkedést gátolja. Angular `(click)` handlerekben ritkán kell stop – inkább a komponenshatárokat tervezd jól.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

### Kérdés 45: Mi a Promise, és miben különbözik az Observable-től?

**Válasz:**

A Promise egyetlen jövőbeli érték (vagy hiba), eager, nem cancelelhető natívan. Az Observable 0…n érték, lazy, unsubscribe-bal megszakítható, operátorokkal komponálható. Angularban HTTP-hez Observable az elsődleges; Promise-ra konvertálható, de a cancellation előnyét elveszítheted.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

### Kérdés 46: Mi a `typeof null` furcsasága, és hogyan ellenőrizzünk nullt helyesen?

**Válasz:**

Történelmi okokból `typeof null === "object"`. Null ellenőrzés: `value === null`. Ha `null` és `undefined` is kell: `value == null`. Soha ne támaszkodjunk a `typeof`-ra null detektáláshoz.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

### Kérdés 47: Mire valók a TypeScript utility type-ok: `Partial`, `Pick`, `Omit`, `Readonly`?

**Válasz:**

- **`Partial<T>`:** minden mező opcionális (pl. patch DTO).
- **`Pick<T, K>`:** csak a megadott kulcsok.
- **`Omit<T, K>`:** kulcsok kihagyása.
- **`Readonly<T>`:** minden mező csak olvasható.

Ezek compile-time eszközök: futásidőben nincs runtime enforcement.

**Dokumentáció:** https://www.typescriptlang.org/docs/handbook/utility-types.html

### Kérdés 48: Hogyan hivatkozunk a sablonban egy DOM elemre, és hogyan érjük el a kódból?

**Válasz:**

Sablonban template reference variable: `<input #emailRef>`. Az osztályból: `@ViewChild('emailRef')` vagy modern `viewChild('emailRef')`. A ViewChild általában `ngAfterViewInit` után megbízható; a signal query reaktívabban frissül.

**Dokumentáció:** https://angular.dev/guide/templates/reference-variables

### Kérdés 49: Mi a különbség a `display: none` és a `visibility: hidden` között?

**Válasz:**

- **`display: none`:** nem generál boxot, nem foglal helyet.
- **`visibility: hidden`:** láthatatlan, de a helye megmarad.
- **`opacity: 0`:** helyet foglal, és pointer eseményeket is kaphat.

Elrejtésnél gondold végig az a11y hatást (`aria-hidden`, fókusz).

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/display

### Kérdés 50: Mi az AOT fordítás Angularban, és miért az alapértelmezett?

**Válasz:**

Ahead-of-Time: a sablonok és a DI metaadat a **build** idején fordulnak, nem a böngészőben. Előny: korai sablonhibák, kisebb runtime, gyorsabb indulás, jobb biztonság. Ivy óta az AOT az alapértelmezett.

**Dokumentáció:** https://angular.dev/tools/cli/aot-compiler


---


## Medior

### Kérdés 1: Mi az OnPush change detection, és mikor fut le?

**Válasz:**

Az OnPush stratégia azt mondja az Angularnak: ne ellenőrizze vakon minden ciklusban ezt a komponenst. Akkor fut CD, ha.

1. `@Input` / `input()` referencia vagy signal értéke változik.
2. a komponens (vagy gyereke) DOM eseményt kezel.
3. async pipe új értéket kap.
4. `markForCheck()` / `detectChanges()`.
5. signal változás.

Mutáló `array.push` OnPush mellett gyakran nem frissít – immutábilis frissítés kell (`[...items, x]`). v22-től az OnPush az ajánlott/default irány.

**Dokumentáció:** https://angular.dev/api/core/ChangeDetectionStrategy

### Kérdés 2: Mik a change detection öt fő triggerje Zone.js mellett?

**Válasz:**

Zone.js monkey patch-eli az aszinkron API-kat, és ezek után CD-t indít.

1. böngésző DOM események.
2. `setTimeout`/`setInterval`.
3. XHR/fetch/HTTP válaszok.
4. Promise feloldás (`then`/`async-await`).
5. manuális trigger (`ChangeDetectorRef.detectChanges`, `markForCheck`, `ApplicationRef.tick`, async pipe).

Zoneless módban az 1–4 automatikus triggerei megszűnnek – signal és explicit jelzés kell.

**Dokumentáció:** https://angular.dev/guide/zoneless

### Kérdés 3: Magyarázd el a `switchMap`, `mergeMap`, `concatMap` és `exhaustMap` különbségét?

**Válasz:**

Ezek **higher-order mapping** operátorok: minden külső értékhez egy belső Observable-t indítanak, és a belső kibocsátásokat „kilapítják” a kimeneti streamre. Nested `subscribe` helyett ezeket használd.

1. **`switchMap`:** új külső értéknél leiratkozik az előző belsőről (megszakítja). Tipikus: typeahead / keresés – csak a legfrissebb eredmény számít.
2. **`mergeMap`:** párhuzamosan futtatja a belső Observable-öket. Tipikus: független kérések, ahol a sorrend nem kritikus.
3. **`concatMap`:** sorban dolgozik; a következő belső csak az előző complete után indul. Tipikus: írási sor, sorrend fontos.
4. **`exhaustMap`:** amíg a belső fut, az új külső értékeket ignorálja. Tipikus: login / mentés gomb spam ellen.

**Dokumentáció:** https://rxjs.dev/guide/higher-order-observables

### Kérdés 4: Mikor NEM jó választás a `switchMap`?

**Válasz:**

Ha minden indított kérésnek le kell futnia és nem szabad megszakítani (pl. analitikai eventek, sorozatos mentések, fájlfeltöltés-sor), a `switchMap` eldobja a futó munkát – itt `concatMap` vagy `mergeMap` kell.

Ha a futó kérést végig kell vinni, és az új trigger (pl. dupla Submit) mellőzendő, `exhaustMap` a helyes.

Szabály: „legfrissebb eredmény kell” → switchMap; „minden eredmény kell sorrendben” → concatMap; „minden, párhuzamosan” → mergeMap; „csak az első futás” → exhaustMap.

**Dokumentáció:** https://rxjs.dev/api/operators/switchMap

### Kérdés 5: Mi a különbség a `forkJoin`, `combineLatest`, `withLatestFrom` és a `zip` között?

**Válasz:**

- **`forkJoin`:** megvárja, hogy minden forrás complete legyen, majd az utolsó értékek tömbjét/objektumát adja (Promise.all-szerű) – egyszeri párhuzamos HTTP.
- **`combineLatest`:** minden forrásból a legfrissebb értéket tartja; bármelyik újra kibocsát, új kombináció jön – élő UI állapot.
- **`withLatestFrom`:** csak a **source** kibocsátásakor párosít a többi legfrissebb értékével.
- **`zip`:** páronként, index szerint – mindnek „lépnie” kell.

Gyakori hiba: `forkJoin` élő streamre (pl. `valueChanges`), ami soha nem complete-el – ekkor a `forkJoin` soha nem emitál. `combineLatest` pedig mindhárom forrástól vár legalább egy emissziót, mielőtt először kibocsátana.

**Dokumentáció:** https://rxjs.dev/api/index/function/forkJoin

### Kérdés 6: Mi a nested `subscribe` antipattern, és mi a megoldás?

**Válasz:**

Subscribe callbackben újabb `subscribe` (HTTP a HTTP válaszában) versenyhelyzetet, nehezen kezelhető hibát és memory leaket okoz, plusz elveszíti a kompozíciót. Megoldás: higher-order mapping (`switchMap`/`concatMap`/…), egyetlen feliratkozás a lánc végén – vagy még jobb: `async` pipe / `toSignal` / `resource`, hogy a komponensben ne legyen manuális subscribe.

**Dokumentáció:** https://rxjs.dev/guide/higher-order-observables

### Kérdés 7: Hogyan előzzük meg a memory leaket Observable-nél Angularban?

**Válasz:**

Örök stream (`interval`, Subject, websocket) feliratkozását mindig le kell zárni. Eszközök: `async` pipe (automatikus), `takeUntilDestroyed()` (v16+), `DestroyRef.onDestroy`, `toSignal` (injection contextben auto-unsubscribe), finite stream (`first` + complete).

Kerüld a komponensmezőben felejtett `subscribe`-ot `ngOnDestroy` nélkül. Heap snapshotban a detached DOM + élő subscription a tipikus nyom.

**Dokumentáció:** https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed

### Kérdés 8: Mi a guardok tipikus hívási sorrendje navigációnál?

**Válasz:**

Általános sorrend: URL matching közben `canMatch` → (régi `canLoad`, deprecated) → a **jelenlegi** route `canDeactivate`-je → célfa `canActivateChild` → `canActivate` (szülő → gyerek) → `resolve`. A `canMatch` azért értékes, mert lazy chunk betöltése előtt eldöntheti, egyáltalán illeszkedik-e a route (feature flag, szerepkör).

**Dokumentáció:** https://angular.dev/guide/routing/route-guards

### Kérdés 9: Mi a különbség a `canMatch` és a `canActivate` között?

**Válasz:**

`canMatch`: a route konfiguráció egyáltalán részt vehet-e az URL illesztésben – ha nem, a router továbblép más route-ra, és lazy modul be sem töltődik. `canActivate`: az már illeszkedő route aktiválható-e (pl. be van-e jelentkezve). Feature flaggel védett lazy feature-nél `canMatch` a hatékonyabb választás.

**Dokumentáció:** https://angular.dev/api/router/CanMatchFn

### Kérdés 10: Mik a DI resolution modifier-ek (`@Optional`, `@Self`, `@SkipSelf`, `@Host`), és mire valók?

**Válasz:**

Az injektor a hierarchiában keresi a tokent.

- **`@Optional`:** ha nincs provider, `null`-t ad vissza hibadobás helyett.
- **`@Self`:** csak a saját injektorban.
- **`@SkipSelf`:** a sajátot kihagyva a szülőtől.
- **`@Host`:** a host komponens/elem injektoráig.

Az `inject()` API ugyanezt opciókkal tudja: `{ optional: true, self: true, skipSelf: true, host: true }`.

**Dokumentáció:** https://angular.dev/guide/di/hierarchical-dependency-injection

### Kérdés 11: Mi a különbség a `providers` és a `viewProviders` között?

**Válasz:**

Mindkettő a komponenshez rendel providert, de a láthatóság különbözik. `providers`: a komponens view **és** a beprojektált content (ng-content) is látja.

`viewProviders`: csak a saját view – a projected content nem kapja meg. Így encapsulálhatsz belső szolgáltatást anélkül, hogy a projected gyerek „kilátna” rá.

**Dokumentáció:** https://angular.dev/guide/di/dependency-injection-providers

### Kérdés 12: Mi a különbség a `@ViewChild` és a `@ContentChild` között?

**Válasz:**

`ViewChild` / `viewChild()` a komponens **saját** sablonjában keres. `ContentChild` / `contentChild()` a **beprojektált** tartalomban (`ng-content`). Klasszikus API-nál a lekérdezés tipikusan `ngAfterViewInit`/`ngAfterContentInit` után megbízható; a signal query-k reaktívan frissülnek.

**Dokumentáció:** https://angular.dev/guide/components/queries

### Kérdés 13: Mi a content projection, az `ngProjectAs` és a fallback tartalom?

**Válasz:**

Content projection: a szülő a gyerek szelektorai közé ír tartalmat, a gyerek `ng-content`-tel (akár `select`-tel) szúrja be. `ngProjectAs`: egy elem úgy viselkedik, mintha más szelektorra illeszkedne.

v18+: az `ng-content` slotban megadható fallback, ha a szülő nem projektál semmit – jobb üres állapot UX.

**Dokumentáció:** https://angular.dev/guide/components/content-projection

### Kérdés 14: Mikor használjunk pure, és mikor impure pipe-ot?

**Válasz:**

Pure (alap): csak bemenet változáskor fut – OnPush/immutábilis adatokkal hatékony. Impure: minden CD ciklusban fut (pl. ha tömböt helyben mutálsz és mégis frissíteni akarod) – drága, kerülendő. Helyesebb: pure pipe + új referencia, vagy a formázást `computed`/metódus helyett is átgondolni.

Ne tegyél HTTP-t pipe-ba.

**Dokumentáció:** https://angular.dev/guide/pipes

### Kérdés 15: Mi a különbség a `FormGroup.value` és a `getRawValue()` között?

**Válasz:**

A `value` kihagyja a **disabled** kontrollok értékeit. A `getRawValue()` a disabled mezőket is tartalmazza. Mentéskor / API payloadnál általában a `getRawValue()` a helyes, ha a letiltott mezőknek is menniük kell a szerverre (pl. read-only ID).

**Dokumentáció:** https://angular.dev/api/forms/AbstractControl#getRawValue

### Kérdés 16: Mik azok a Typed Forms (v14+), és miért jobbak a régieknél?

**Válasz:**

A Typed Forms compile-time típust ad a `FormControl`/`FormGroup` értékeire (pl. `FormControl<string>`), így a `value` nem `any`.

A `NonNullableFormBuilder` / `nonNullable` elkerüli a `null` meglepetéseket. Az `UntypedFormGroup` a migrációs híd a régi kódhoz.

Kevesebb runtime meglepetés, jobb IDE támogatás.

**Dokumentáció:** https://angular.dev/guide/forms/typed-forms

### Kérdés 17: Mi a ControlValueAccessor, és mikor kell implementálni?

**Válasz:**

Interfész, amellyel egyedi UI vezérlő bekapcsolódik az Angular forms világába: `writeValue` (model → view), `registerOnChange` / `registerOnTouched` (view → model), opcionálisan `setDisabledState`. A komponenst az `NG_VALUE_ACCESSOR` tokennel kell providerként regisztrálni (`multi: true`, tipikusan `forwardRef`-fel), különben a `formControlName` / `[(ngModel)]` nem csatlakozik rá.

Így a custom datepicker, rating, chip-input stb. ugyanúgy részt vesz a validációban és a disabled állapotban, mint a natív input. Signal Forms felé a `FormValueControl` a modern megfelelő.

**Dokumentáció:** https://angular.dev/api/forms/ControlValueAccessor

### Kérdés 18: Hogyan működik a funkcionális HTTP interceptor (v15+)?

**Válasz:**

`HttpInterceptorFn` egy függvény: `(req, next) => ...`. Regisztráció: `provideHttpClient(withInterceptors([authInterceptor]))`.

Tipikus feladatok: Authorization header, correlation ID, retry, hibák közös kezelése, cache. A class-based interceptor helyett ez a modern, tree-shakeable forma; a sorrend a tömb sorrendje.

**Dokumentáció:** https://angular.dev/guide/http/interceptors

### Kérdés 19: Mi a `DestroyRef` és az injection context, és miért fontosak?

**Válasz:**

`DestroyRef`: a jelenlegi DI-scope megsemmisülésekor futtat callbacket – unsubscribe dekorátor/`ngOnDestroy` nélkül. `inject()` csak injection contextben hívható (constructor, field init, factory, `runInInjectionContext`).

Contexten kívül az `inject()` hibát dob – ezért kell ismerni a határokat (pl. `setTimeout` callbackben).

**Dokumentáció:** https://angular.dev/guide/di/dependency-injection-context

### Kérdés 20: Mi a `signal`, a `computed` és az `effect` szerepe, és mit ne tegyünk `effect`-ben?

**Válasz:**

- **`signal`:** írható reaktív állapot (`set`/`update`).
- **`computed`:** származékos, memoizált, csak olvasható érték.
- **`effect`:** mellékhatás (log, imperatív sync 3rd party libhez), amikor a függő signalok változnak.

Állapotot másik signalba **ne** `effect`-tel terjessz – arra `computed` vagy `linkedSignal` való; különben könnyű a ciklus és a nehezen követhető adatfolyam.

**Dokumentáció:** https://angular.dev/guide/signals

### Kérdés 21: Mire valók az `input()`, `output()` és `model()` API-k?

**Válasz:**

Signal-alapú komponens API: `input()` / `input.required()` a bemenetre, `output()` az eseménykibocsátásra (`emit`), `model()` kétirányú kötésre (`[(value)]`). Előny: transform, alias, `computed` derivátum, jobb típusok, kevesebb `ngOnChanges`.

**Dokumentáció:** https://angular.dev/guide/signals/inputs

### Kérdés 22: Mi a döntési szabály a `toSignal` / `toObservable` és az RxJS vs Signals között?

**Válasz:**

UI állapot, derived érték → `signal`/`computed`. Debounce, retry, cancellation, websocket, összetett időbeli kombinálás → RxJS.

Híd: `toSignal`, `toObservable`, `rxResource`/`rxMethod`. A signal **nem** váltja le az RxJS-t.

Kerüld az oda-vissza `toSignal`↔`toObservable` láncolást – általában rosszul megfogalmazott adatfolyam jele.

**Dokumentáció:** https://angular.dev/guide/signals/rxjs-interop

### Kérdés 23: Hogyan érdemes SCSS architektúrát felépíteni (tokens, base, utilities, themes)?

**Válasz:**

Rétegek: `tokens/` (design tokenek CSS custom property-ként), `base/` (reset, tipográfia), `utilities/` (mixinek/függvények, önálló CSS kimenet nélkül), `themes/` (light/dark/brand). A gyökér `styles.scss` csak `@use` importokat tartalmazzon.

A komponens-SCSS a `:host` + tokenekre építsen, ne nyers hex színekre.

**Dokumentáció:** https://sass-lang.com/documentation/at-rules/use/

### Kérdés 24: Miért legyen a design token CSS custom property, ne SCSS `$változó`?

**Válasz:**

A CSS változó futásidőben cserélhető (témaváltás reload nélkül), öröklődik a komponenshatárokon át, és egy igazságforrás lehet Tailwind `theme.extend` felé is. Az SCSS változó build-time behelyettesítés – nem él a böngészőben. White-label / dark mode esetén ez kritikus különbség.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 25: Miért kerülendő a `::ng-deep`, és mi a helyette való megoldás?

**Válasz:**

`::ng-deep` deprecated, áttöri az encapsulationt, és stílusszivárgást okoz a fában. Helyette: CSS custom property-t exponálj komponens API-ként, input/variáns a gyereken, vagy tudatos `ViewEncapsulation.None` csak library-szintű alapstílushoz. Design systemben a token + host API a tartható út.

**Dokumentáció:** https://angular.dev/guide/components/styling

### Kérdés 26: Mit jelent a Flexboxban a `flex-grow`, `flex-shrink` és a `flex-basis`?

**Válasz:**

- **`flex-basis`:** a számítás kiindulási mérete a free space elosztása előtt.
- **`flex-grow`:** a fennmaradó hely arányos elosztása.
- **`flex-shrink`:** túlcsorduláskor melyik elem zsugorodjon.

Gyakori shorthand: `flex: 1 1 0` (egyforma növekedés/zsugorodás nullás basisról). `flex: 1` ≈ `1 1 0%` a böngészőkben.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/flex

### Kérdés 27: Mit jelent a CSS Gridben az `fr` egység és a `minmax` függvény?

**Válasz:**

Az `fr` (fraction) a rendelkezésre álló szabad hely arányos szelete (`1fr 2fr` = egyharmad–kétharmad). A `minmax(min, max)` alsó és felső korlátot ad (pl. `minmax(200px, 1fr)`: legalább 200px, de nyújtható). `repeat(auto-fit, minmax(...))` reszponzív card grid klasszikus mintája.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout

### Kérdés 28: Hogyan kerüljük el a CSS specificity „háborút” a gyakorlatban?

**Válasz:**

Tartsuk alacsony a specifikusságot: osztályok, BEM vagy utility, CSS változók a témához. Kerüld az ID szelektort stílushoz és a `!important`-ot (kivéve ritka utility override).

Komponenshatárokon token API, ne mélyen nestelt szelektorok. Ha mégis ütközés van: először a forrást és a specifikusságot nézd, ne azonnal `!important`.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity

### Kérdés 29: Mi a Directive Composition API (v15+), és milyen problémát old meg?

**Válasz:**

A `hostDirectives` lehetővé teszi meglévő direktívák újrafelhasználását egy komponensen/direktíván öröklés nélkül. Input/output aliasolható. Ez a „mixin” helyett tiszta kompozíció: viselkedés (pl. tooltip, disableable) újrafelhasználható, a UI osztály nem duzzad.

**Dokumentáció:** https://angular.dev/guide/directives/directive-composition-api

### Kérdés 30: Mi az `ngOptimizedImage` kötelező követelménye, és miért?

**Válasz:**

`width`/`height` vagy `fill` kötelező – enélkül a direktíva hibát dob. Ez a layout shift (CLS) ellen véd: a böngésző előre foglal helyet. Emellett lazy loading, prioritás (LCP hero), loader integráció. A direktívát a standalone `imports`-ba kell tenni.

**Dokumentáció:** https://angular.dev/guide/image-optimization

### Kérdés 31: Mi a `@defer` (v17+), és milyen triggerei vannak?

**Válasz:**

A `@defer` sablonrészt lazy tölti (külön chunk), triggerekkel: pl. `on viewport`, `on interaction`, `on idle`, `on timer`. Van `@placeholder`, `@loading`, `@error`, és prefetch. Csökkenti az initial bundle-t és javítja a TTI-t – „below the fold” widgetekre ideális, MFE helyett is sokszor elég.

**Dokumentáció:** https://angular.dev/guide/templates/defer

### Kérdés 32: Mi a Facade service minta, és mikor érdemes használni?

**Válasz:**

A Facade egy vékony szolgáltatás/API a UI felé, amely elrejti a store, HTTP, több szolgáltatás és mapping komplexitását. A komponens kevesebb függőséget lát, könnyebb a tesztelés és a cseréje a belső implementációnak.

Vigyázat: ne legyen „god facade” – feature-szintű, nem az egész app egyetlen kapuja.

**Dokumentáció:** https://angular.dev/guide/di

### Kérdés 33: Mi a különbség a smart (container) és a dumb (presentational) komponens között?

**Válasz:**

Smart/container: adatforrás, routing, store, side-effect. Dumb/presentational: input/output, kevés DI, újrafelhasználható, könnyen Storybookolható. Modern Angularban a presentational még tisztább signal `input()`/`output()` API-val. A határ elmosódhat – a lényeg a felelősségek szétválasztása.

**Dokumentáció:** https://angular.dev/style-guide

### Kérdés 34: Hogyan tesztelsz aszinkron kódot Angularban zone-alapú és zoneless környezetben?

**Válasz:**

Zone-alapú Jasmine/Karma világban: `fakeAsync`, `tick`, `flush`, `flushMicrotasks` – virtuális idő. Zoneless / Vitest default felé: Vitest fake timers (`vi.useFakeTimers`) a megbízható út. Cél: determinisztikus teszt, ne valós `setTimeout` várakozás CI-ben.

**Dokumentáció:** https://angular.dev/guide/testing/zone-js-testing-utilities

### Kérdés 35: Mi a RouterTestingHarness (v14+), és miért jobb a kézi router-tesztelésnél?

**Válasz:**

Harness a router navigáció és az aktivált komponens teszteléséhez: kevesebb boilerplate, mint a kézi `Router`/`Location` mockolás. Navigálsz, megkapod a komponens példányt, assertelsz. Route guard/resolver integrációs tesztekhez különösen hasznos.

**Dokumentáció:** https://angular.dev/guide/routing/testing

### Kérdés 36: Mi a `share` / `shareReplay` szerepe, és mire kell vigyázni?

**Válasz:**

Multicasting: egy hideg Observable (pl. HTTP) végrehajtását megosztja több előfizető között, hogy ne fusson le többször.

`shareReplay({ bufferSize: 1, refCount: true })` gyakori „cache last value” minta. Vigyázat: rossz `refCount`/`buffer` beállítás memory leakhez vagy örök élő subscriptionhöz vezethet.

**Dokumentáció:** https://rxjs.dev/api/operators/shareReplay

### Kérdés 37: Hogyan használd helyesen a `catchError` és a `retry` operátorokat?

**Válasz:**

`retry` / `retry({ count, delay })`: átmeneti hibákra (hálózat), korlátozott számban (a régi `retryWhen` helyett). `catchError`: a hibát kezeli, fallback értéket ad, vagy újra dob – ha elnyeled hibásan, a UI „csendben” üres marad.

Interceptorban globális policy, feature-ben specifikus üzenet. Typeaheadnál a `catchError` gyakran a `switchMap` **belül** van, hogy a külső stream ne haljon meg.

**Dokumentáció:** https://rxjs.dev/api/operators/catchError

### Kérdés 38: Mi a secondary routing (named outlet), és mikor használjuk?

**Válasz:**

A named `router-outlet` párhuzamos UI-t enged (pl. sidebar, help panel, modal-szerű route) az elsődleges outlet mellett: `outlet: 'aside'` és `<router-outlet name="aside">`. Az URL-ben megjelenik az auxiliary route. Hasznos, ha a mellékpanel deep-linkelhető állapot.

**Dokumentáció:** https://angular.dev/guide/routing/show-routes-with-outlets

### Kérdés 39: Mi a preloading strategy, és hogyan kapcsolódik a `@defer` prefetchhez?

**Válasz:**

Preloading: a lazy route chunkokat a kezdeti navigáció után a háttérben tölti (`PreloadAllModules` vagy custom, pl. network-aware). A `@defer` prefetch sablonrész-szintű. Együtt: route-szintű lazy + sablonon belüli defer – ne tölts mindent azonnal, de a valószínű next page-et előrehozhatod.

**Dokumentáció:** https://angular.dev/guide/routing/loading-strategies

### Kérdés 40: Mi az XSS, és hogyan véd az Angular alapból?

**Válasz:**

Cross-Site Scripting: támadó script bejuttatása az oldalba. Angular a interpolációt és a property bindinget alapból escape-eli/sanitize-eli. Veszélyes: `innerHTML`, `DomSanitizer.bypassSecurityTrust*`, user-generált URL/script. Csak trusted forrásnál bypass; CSP és Trusted Types további réteg.

**Dokumentáció:** https://angular.dev/best-practices/security

### Kérdés 41: Mi a különbség a `@HostBinding`/`@HostListener` és a `host: {}` objektum között?

**Válasz:**

Mindkettő a host elem class/style/attribútum/esemény kötésére való. A modern ajánlás a `@Component`/`@Directive` `host` metaadat objektuma: tisztább, jobban tree-shakeelhető, kevesebb dekorátor. A dekorátoros forma legacy/kompatibilis, de új kódban `host` preferált.

**Dokumentáció:** https://angular.dev/guide/components/host-elements

### Kérdés 42: Mi az `exportAs`, és hogyan használjuk a sablonban?

**Válasz:**

Az `exportAs` megadja, milyen néven érhető el a direktíva/komponens példánya template reference variable-ként, pl. `#f="ngForm"`, `#tooltip="myTooltip"`. Így a sablonból metódust/állapotot olvashatsz anélkül, hogy ViewChild kellene minden aprósághoz.

**Dokumentáció:** https://angular.dev/guide/directives

### Kérdés 43: Mit jelent az `updateOn: 'blur' | 'submit'` a reactive formsban?

**Válasz:**

A control alapból `updateOn: 'change'` – minden input eseménynél frissül érték és validáció. `'blur'`: csak elhagyáskor; `'submit'`: submitkor. Ez javítja az UX-et (kevesebb „azonnali piros” hiba) és csökkenti a felesleges validátorfutást (különösen async validátornál).

**Dokumentáció:** https://angular.dev/guide/forms/reactive-forms

### Kérdés 44: Mi a Tailwind + Angular view encapsulation gyakori buktatója?

**Válasz:**

Az emulated encapsulation miatt a szülőn lévő Tailwind utility **nem** hatol be a gyerek belső elemeire úgy, ahogy globális CSS-ben várnád. Megoldás: a gyerek exponáljon variáns `input`-ot vagy CSS változót, és belül alkalmazza a stílust.

A `content` globban a `.ts` is kell az inline sablonok miatt.

**Dokumentáció:** https://angular.dev/guide/tailwind

### Kérdés 45: Mire való a `:host` és a `:host-context()` a komponensstílusokban?

**Válasz:**

`:host`: a komponens host elemére célzol (ne a belső wrapperre). `:host-context(.theme-dark)`: akkor alkalmaz stílust, ha a host egy adott ős kontextusban van – property drilling CSS alternatíva témához/állapothoz. Túlbonyolított `:host-context` helyett gyakran jobb a CSS változó a fán.

**Dokumentáció:** https://angular.dev/guide/components/styling

### Kérdés 46: Mi a `track` / `trackBy` teljesítményhatása listáknál?

**Válasz:**

Stabil identity mellett az Angular újrafelhasználja a DOM node-okat: kevesebb destroy/create, megmarad a fókusz, input állapot, animáció. `$index` track sorrendezésnél rossz identityt ad. Nagy listáknál + OnPush + virtual scroll együtt a legjobb.

**Dokumentáció:** https://angular.dev/api/core/@for

### Kérdés 47: Mi a monkey patching, és hol találkozol vele Angularban?

**Válasz:**

Monkey patching: futásidőben felülírsz meglévő API-t. A Zone.js így patcheli a `addEventListener`, `setTimeout`, Promise, XHR stb. API-kat, hogy tudja, mikor indítson change detectiont. Ezért „mágikus” a Default CD; zoneless ezt a magától értetődő patch-et távolítja el.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Glossary/Monkey_patch

### Kérdés 48: Mit csinál a TypeScript `satisfies` operátor?

**Válasz:**

A `satisfies` ellenőrzi, hogy egy érték megfelel-e egy típusnak, **anélkül** hogy a literal típusokat `as` cast-szerűen kiszélesítené. Pl. route map vagy config objektum: a kulcsok autocomplete-je megmarad, miközben a szerződés is enforced. TS 4.9+.

**Dokumentáció:** https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4.9.html#the-satisfies-operator

### Kérdés 49: Hogyan kezeled a `null` és `undefined` értékeket Angular sablonban?

**Válasz:**

Optional chaining: `user?.name`. Nullish coalescing: `value ?? 'default'` (`null`/`undefined` esetén, üres stringnél nem). Control flow: `@if (user) { ... }`. Strict template type check (`strictTemplates`) korán megfogja a hibákat. Kerüld a `||`-t defaultolásra, ha a `0`/`''` érvényes érték.

**Dokumentáció:** https://angular.dev/guide/templates/expression-syntax

### Kérdés 50: Mi a TitleStrategy szerepe, és miért jobb, mint a kézi `title` állítgatás?

**Válasz:**

A `TitleStrategy` központilag állítja a dokumentum címét a route `title` / data alapján – konzisztens böngésző tab és SEO. Egyedi strategy-vel prefix/suffix (pl. „App | Orders”) egységesen adható. Elkerüli, hogy minden komponens `Title` service-t hívjon szétszórva.

**Dokumentáció:** https://angular.dev/api/router/TitleStrategy


---


## Senior

### Kérdés 1: Mit jelent a zoneless change detection, és mit vált fel a Zone.js helyett?

**Válasz:**

`provideZonelessChangeDetection` mellett az Angular nem támaszkodik a Zone.js monkey patch-eire. A CD-t signal-változás, input változás, async pipe, és explicit `markForCheck`/`detectChanges`/`ApplicationRef.tick` indítja.

Előny: kisebb bundle, kiszámíthatóbb teljesítmény, kevesebb „mágikus” frissítés. Stabil irány v20.2+-tól; bevezetés előtt OnPush + signal érettség kell.

**Dokumentáció:** https://angular.dev/guide/zoneless

### Kérdés 2: Miért lett az OnPush az alapértelmezett stratégia (v22+), és mi az Eager?

**Válasz:**

Az OnPush jobban illeszkedik a signal-alapú, immutábilis adatfolyamhoz, és elkerüli a felesleges fa-bejárást. v22+ felé az OnPush az ajánlott/default.

A régi, mindent ellenőrző mód neve: `ChangeDetectionStrategy.Eager` (korábban „Default”). Legacy komponensnél tudatosan választhatod az Eager-t, de új kódban OnPush + signals a cél.

**Dokumentáció:** https://angular.dev/api/core/ChangeDetectionStrategy

### Kérdés 3: Magyarázd el a signal reaktív kontextust és az `untracked` szerepét?

**Válasz:**

Amikor `computed` vagy `effect` fut, az Angular auto-trackeli a közben olvasott signalokat, és újrafuttatja a számítást, ha azok változnak. Az `untracked(() => sig())` olvasás dependency nélkül történik – hasznos, ha csak „pillanatnyi” értéket kell nézni anélkül, hogy újrafuttatást okozna, vagy ha ciklust akarsz elkerülni.

Rossz `untracked` használat viszont elrejti a valódi függőségeket.

**Dokumentáció:** https://angular.dev/guide/signals

### Kérdés 4: Mit jelent a glitch-free behavior a signaloknál?

**Válasz:**

A signal graph úgy frissül, hogy a fogyasztók ne lássanak köztes, ellentmondásos állapotot (pl. A már új, B még régi).

A `computed` értékek konzisztens snapshotot adnak. Az equality check (alapból `Object.is`/`===`, vagy custom) dönti el, egyáltalán történt-e értesítendő változás – ezért fontos az immutábilis frissítés.

**Dokumentáció:** https://angular.dev/guide/signals

### Kérdés 5: Hogyan tervezel signal graphot (állapot → derived → resource → UI)?

**Válasz:**

Forrás (írható) signalok a domain állapotra. Felettük `computed` réteg a derived view-modelhez.

Async adat: `resource`/`httpResource`/`rxResource`, paraméterként a filter signalok. Az UI csak olvassa ezeket.

Mellékhatás (`effect`, `afterRender`) az élen maradjon (DOM, analytics), ne másolj állapotot effectből effectbe. Ez olvashatóbb, mint a szétszórt Subject-lánc.

**Dokumentáció:** https://angular.dev/guide/signals

### Kérdés 6: Mikor használd a `resource`, az `rxResource` és az `httpResource` API-t?

**Válasz:**

- **`httpResource`:** HTTP-first, signal paraméterekkel, loading/error állapot beépítve.
- **`rxResource`:** ha a loader Observable stream (összetett RxJS).
- **`resource`:** általános async (nem feltétlen HTTP).

Közös: a params signal változásakor újratölt, és illeszkedik a signal graphba. Írási műveletre nem ez a tool – arra mutation/rxMethod/HTTP POST külön.

**Dokumentáció:** https://angular.dev/guide/signals/resource

### Kérdés 7: Mikor maradjon RxJS, és mikor válassz signalokat (interop döntés)?

**Válasz:**

Állapot és UI derived érték → signal/`computed`. Időbeli problémák (debounce, throttle, retry, cancellation, race, websocket, SSE, több stream összetett kombinálása) → RxJS.

Híd: `toSignal`, `toObservable`, `rxMethod`, `rxResource`. A signal **nem** helyettesíti az RxJS-t; a kettő más absztrakció (állapot vs eseményfolyam).

**Dokumentáció:** https://angular.dev/guide/signals/rxjs-interop

### Kérdés 8: Hogyan építesz fel egy production typeahead streamet higher-order mappinggel (cancel + error)?

**Válasz:**

A cél: kevesebb felesleges kérés, ne jelenjen meg elavult találat, és egy HTTP hiba ne ölje meg a teljes input streamet.

Ajánlott lánc:

1. Input `valueChanges` (vagy signal → `toObservable`)
2. `debounceTime(300)` – várj, amíg a user abbahagyja a gépelést
3. `distinctUntilChanged()` – ne keress ugyanarra újra
4. `switchMap(term => api.search(term).pipe(...))` – az elavult kérést megszakítja (race condition ellen)
5. A `catchError` a **belső** pipe-ban legyen (`of([])` vagy fallback), hogy a külső stream élve maradjon

Loading állapothoz használhatsz `finalize`-t vagy külön state-et. A lényeg: **switchMap a cancellationhez**, **belső catchError a túléléshez**.

**Dokumentáció:** https://rxjs.dev/api/operators/switchMap

### Kérdés 9: Mi a `linkedSignal` (v19/v20), és milyen use case-re való?

**Válasz:**

Írható signal, amely egy forrás signalhoz van kötve: ha a forrás változik, a linked érték újraszámolódik/resetelődik, de közben a felhasználó lokálisan felülírhatja. Klasszikus példa: kiválasztott elem egy listából – lista frissül → valid selection; user kattint → lokális override.

`computed` önmagában nem írható; sima `signal` + manuális sync effect helyett ez a tiszta API.

**Dokumentáció:** https://angular.dev/guide/signals/linked-signal

### Kérdés 10: Mikor válassz NgRx Signal Store-t a classic NgRx Store helyett?

**Válasz:**

Signal Store: feature/lokális állapot, kevesebb boilerplate, signal-native, gyorsabb onboarding. Classic Store: erős global event sourcing, időutazás/devtools kultúra, sok csapat ugyanazon a action szerződésen.

A Signal Store Events API a Flux mintát is tudja, ha kell. Új feature-nél gyakran Signal Store a default; meglévő nagy Redux kódbázist nem kötelező átírni.

**Dokumentáció:** https://ngrx.io/guide/signals/signal-store

### Kérdés 11: Mi az `rxMethod` a Signal Store-ban, és miért jobb a nyers subscribe-nál?

**Válasz:**

Az `rxMethod` side-effect belépési pont: paraméter/signal bemenetre RxJS pipe-ot futtat (`debounceTime`, `switchMap`, `catchError`), és a store-hoz igazított lifecycle-lel. Elkerüli a komponensben szétszórt subscribe-okat, és a higher-order mapping szabályait a store rétegben tartja.

**Dokumentáció:** https://ngrx.io/guide/signals/rxjs-integration

### Kérdés 12: Miért érdemes entity managementet / normalizálást használni Signal Store-ban?

**Válasz:**

Az entitásokat ID szerint tároljuk (`ids` + `entityMap`): O(1) lookup, nincs mély nested mutáció, lista- és részletnézet megosztott cache-t használ. A `withEntities` feature ezt standardizálja. Denormalizált óriás tömbökön a frissítés és a select drága és hibára hajlamos.

**Dokumentáció:** https://ngrx.io/guide/signals/signal-store/entity-management

### Kérdés 13: Mi az incremental hydration SSR mellett, és miért jobb a teljes hydratációnál?

**Válasz:**

Nem az egész alkalmazás válik azonnal interaktívvá: részenként hidrál (pl. `@defer` triggerekhez kötve). Kevesebb main-thread munka induláskor, jobb TTI/INP. v20-tól stable irány, v22 felé default. Trade-off: komplexebb mental model, figyelni kell a hydration mismatch-re és az event replayre.

**Dokumentáció:** https://angular.dev/guide/hydration

### Kérdés 14: Mi az Event Replay a hydratációnál, és milyen UX problémát old meg?

**Válasz:**

A felhasználó kattinthat/gépelhet, mielőtt a JS teljesen hidrált. Event Replay rögzíti ezeket az eseményeket, majd a hydration után visszajátssza – csökken a „holt UI” érzet, amikor a kattintás elveszne. SSR/hydration projektnél érdemes tudatosan bekapcsolni és tesztelni.

**Dokumentáció:** https://angular.dev/guide/hydration

### Kérdés 15: Hybrid rendering mellett mikor válassz SSR-t, SSG/prerender-t vagy CSR-t?

**Válasz:**

Marketing/SEO/publikus tartalom: prerender/SSG. Személyre szabott, cookie/auth függő oldal: SSR. Erősen interaktív, auth mögötti tool: CSR + jó CDN gyakran elég. A server routes (v19+/v20) route-szinten engedi keverni a stratégiákat – ne legyen „minden vagy semmi” döntés az egész appre.

**Dokumentáció:** https://angular.dev/guide/ssr

### Kérdés 16: Hogyan csökkented a main chunk méretét Angular alkalmazásban?

**Válasz:**

Lazy route-ok, `@defer` a nehéz widgetekre, tree-shakeable `providedIn`/`provide*` API-k, kerüld a rootban eager heavy lib importot, CJS függőségek kivezetése (rossz tree-shaking), application builder/esbuild, budgets a CI-ben. Bundle analyzerral nézd, mi kerül a mainbe – gyakran icon pack, moment, egész Material modul a bűnös.

**Dokumentáció:** https://angular.dev/guide/performance

### Kérdés 17: Hogyan keresel performance bottlenecket Angularban a gyakorlatban?

**Válasz:**

Lab: Chrome Performance + `ng.enableProfiling()`, CD ciklusok, long taskok. Keresd: túl gyakori CD, impure pipe, óriás lista track nélkül, túl sok binding. Mező: Core Web Vitals (LCP, INP, CLS) RUM-mal. Először mérj, aztán optimalizálj – tippelés helyett flame chart.

**Dokumentáció:** https://angular.dev/best-practices/profiling-with-chrome-devtools

### Kérdés 18: Hogyan diagnosztizálsz memory leaket Angular frontendben?

**Válasz:**

Chrome Memory: heap snapshot összehasonlítás (detach DOM, növő listener/subscription). Tipikus okok: örök `subscribe` Destroy nélkül, globális event listener, cache ami sosem ürül, 3rd party widget dispose nélkül.

Fix: `takeUntilDestroyed`, AbortController, WeakRef ahol illik, route-scoped providers. Reprodukálható navigációs ciklus a legjobb teszt.

**Dokumentáció:** https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed

### Kérdés 19: Milyen frontend biztonsági rétegeket alkalmazol XSS ellen (CSP, Trusted Types, sanitization)?

**Válasz:**

Alap: Angular default escape/sanitize. Ne bypassolj `DomSanitizer`-rel user inputon.

CSP nonce (v16+) korlátozza a script forrásokat. Trusted Types a DOM XSS sinkeket szigorítja.

Auth: HttpOnly cookie + CSRF stratégia jobb, mint sima localStorage token, ha megoldható. Dependency CVE és lockfile is a security része.

**Dokumentáció:** https://angular.dev/best-practices/security

### Kérdés 20: Hogyan építesz modern auth mintát guard + interceptor + RedirectCommand kombinációval?

**Válasz:**

Interceptor: access token csatolás, 401-nél refresh queue, correlation ID. Guard (`canMatch`/`canActivate`): belépés és szerepkör.

v18+ `RedirectCommand`: gazdagabb, típusosabb redirect a guardból. Ne tárolj hosszú életű tokent XSS-érzékeny helyen, ha van BFF/httpOnly alternatíva.

A logout minden réteget takarítson (store, cache).

**Dokumentáció:** https://angular.dev/guide/routing/route-guards

### Kérdés 21: Mikor használd az `afterRender` / `afterNextRender` API-t `ngAfterViewInit` helyett?

**Válasz:**

DOM mérés, chart lib init, böngésző-only API: render utáni fázisban, SSR-barátabban. `afterNextRender`: egyszer az első render után.

`afterRender`: minden render után, `phase` opcióval (`read`/`write`), hogy elkerüld a layout thrashinget. `ngAfterViewInit` SSR/zoneless világban gyakrabban problematikusabb timingot ad.

**Dokumentáció:** https://angular.dev/api/core/afterRender

### Kérdés 22: Miért érdemes route-szintű `providers`-t használni feature service-ekhez?

**Válasz:**

A szolgáltatás élettartama a route aktiválásához kötődik: navigációkor új példány / cleanup, jobb encapsulation, kisebb global singleton „szemét”. Nagy monolitban megakadályozza, hogy minden service `providedIn: 'root'` legyen. v22 irány: route injector cleanup kísérleti támogatása.

**Dokumentáció:** https://angular.dev/guide/di

### Kérdés 23: Mit jelent a vertical slicing / modulith architektúra Angularban?

**Válasz:**

A kódot nem (csak) horizontális rétegekbe (összes component / összes service) szervezed, hanem feature szerinti függőleges szeletekbe: UI + state + API egy feature határon belül. A megosztott kernel vékony.

Határokat Nx/Sheriff lint kényszeríti. Skálázhatóbb csapatmunkához, mint a „shared/services” szemétdomb.

**Dokumentáció:** https://angular.dev/style-guide

### Kérdés 24: Hogyan jelenik meg a SOLID elv a napi Angular kódban, és milyen példákat mondanál?

**Válasz:**

SRP: a komponens ne végezzen HTTP-t, mappinget és komplex UI-t egyszerre – Facade/store. OCP: új viselkedés `hostDirectives`/strategy providerrel, ne óriási if-lánccal.

ISP/DIP: tokenek és keskeny interface-ek, ne concrete HttpClient a deep domainben. Kerüld a god component/god service antipatternt.

**Dokumentáció:** https://angular.dev/style-guide

### Kérdés 25: Hogyan alkalmazod az Adapter, Strategy és Facade mintákat Angularban?

**Válasz:**

Adapter: API DTO → domain model a service határán. Strategy: cserélhető algoritmus DI-vel (preloading, validator, auth provider). Facade: UI elé egyszerű API a store/HTTP fölé. A DI a Strategy/Facade cseréjét tesztben és runtime-ban is megkönnyíti.

**Dokumentáció:** https://angular.dev/guide/di

### Kérdés 26: Mi a különbség a CDK a11y primitívek és az Angular Aria (v21+) között?

**Válasz:**

CDK a11y: alacsony szintű építőkockák (FocusTrap, LiveAnnouncer, InteractivityChecker). Angular Aria: headless, accessible UI minták (Tabs, Combobox, Menu…) beépített billentyűzet- és ARIA-viselkedéssel.

Material = stílusozott; Aria = viselkedés stílus nélkül. Interjún: fókuszkezelés és billentyűzet kötelező téma.

**Dokumentáció:** https://angular.dev/guide/aria/overview

### Kérdés 27: Milyen i18n stratégiákat ismersz Angularban, és mik a trade-offok?

**Válasz:**

`@angular/localize`: build-time locale, jó teljesítmény, több build/artefakt. Runtime lib (pl. transloco/ngx-translate): egy build, későbbi fordításbetöltés, rugalmasabb, más tooling. SEO-hoz locale URL (`subPath` stb.) kell. Választás: release modell, fordítócsapat workflow, SEO igény.

**Dokumentáció:** https://angular.dev/guide/i18n

### Kérdés 28: Milyen döntési szempontok vannak PWA / Service Worker bevezetésénél?

**Válasz:**

Offline cache mit fedjen (app shell vs API), update UX (`SwUpdate` – force refresh vs háttér), version skew a backenddel, privacy. Rossz SW cache nehezen debugolható „ghost” bugokat okoz. Nem minden intranet toolnak kell PWA; mérés és clear update stratégia nélkül ne kapcsold be.

**Dokumentáció:** https://angular.dev/ecosystem/service-workers

### Kérdés 29: Mikor indokolt Web Worker használata Angular alkalmazásban?

**Válasz:**

Ha CPU-intenzív munka (nagy JSON parse, crypto, image/canvas transform, komplex számítás) blokkolná a main threadet és rontaná az INP-t. Kommunikáció `postMessage`-dzsel; strukturált klón költségét vedd figyelembe. UI állapotot ne a workerben tarts – számítson, és add vissza az eredményt.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

### Kérdés 30: Mit ad a HttpClient `withFetch` és a keepalive opció?

**Válasz:**

`withFetch`: a HttpClient a Fetch API-t használja XHR helyett – modern böngésző képességek, bizonyos streaming/opciók. `keepalive` (v20+): az oldal unload közben is elküldhető beacon-szerű kérés (analytics, last-log) – klasszikus XHR ilyenkor elveszhet.

**Dokumentáció:** https://angular.dev/guide/http/making-requests

### Kérdés 31: Hogyan tervezel globális hibakezelést correlation ID-val?

**Válasz:**

Interceptor minden requesthez correlation/request ID-t tesz. `ErrorHandler` a nem várt hibákat fogja. Logging pipeline összeköti a frontend hibát a backend trace-dzsel. UX: felhasználóbarát üzenet + „hibaazonosító”. Ne nyelj el mindent csendben; ne logolj PII-t/tokent.

**Dokumentáció:** https://angular.dev/best-practices/error-handling

### Kérdés 32: Mi a különbség az ElementInjector és az EnvironmentInjector között?

**Válasz:**

ElementInjector: komponens/direktíva hierarchiához kötött (viewProviders/providers a komponensen). EnvironmentInjector: `providedIn`, `bootstrapApplication` providers, route providers – nem a DOM fához.

A feloldás tipikusan az element hierarchián felfelé, majd environment szinten. Ezt ismerni kell a „NullInjectorError” debughoz.

**Dokumentáció:** https://angular.dev/guide/di/hierarchical-dependency-injection

### Kérdés 33: Hogyan hozol létre dinamikus komponenst a modern Angular API-val?

**Válasz:**

`createComponent` + (v20+) bindings/directives opciók, vagy `ViewContainerRef.createComponent`. Kerüld a régi `ComponentFactoryResolver`/`entryComponents` világot. Inputokat bindinggel add át, ne manuális property assignnal ahol lehet. Destroy-ot ne felejtsd el (leak).

**Dokumentáció:** https://angular.dev/guide/components/programmatic-rendering

### Kérdés 34: Mit változtatnak a Signal Forms (v21+/v22) a reactive forms-hoz képest?

**Válasz:**

Deklaratív `form()` signal modellel, `[field]` kötés, schema/validator a signal világban. Egyedi vezérlő: `FormValueControl` (CVA helyett/mellett). Még kísérleti/expand fázis – production döntésnél nézd a stable státuszt. Migráció: strangler, ne big-bang; interop bridge ahol kell.

**Dokumentáció:** https://angular.dev/guide/forms/signals/overview

### Kérdés 35: Mit jelent a csapatnak, hogy a Vitest lett az alapértelmezett tesztkeretrendszer (v21)?

**Válasz:**

Jasmine/Karma stack helyett Vitest: gyorsabb, ESM/Vite natív, modern mocking, fake timers, browser mode. CI scriptek, helper utility-k, `fakeAsync` minták migrálása kell. Zoneless felé a Vitest fake timers a természetes pár. Tervezz időt a flaky tesztek takarítására a migrációban.

**Dokumentáció:** https://angular.dev/guide/testing/migrating-to-vitest

### Kérdés 36: Mit tegyél E2E (Playwright) tesztbe, és mit hagyj unit/component szinten?

**Válasz:**

E2E: kritikus user journey (login, checkout, fő happy path) – kevés, stabil. Unit/component: elágazások, validáció, edge case, hibakezelés. A 100% E2E lassú és törékeny. Contract tesztek a API határon. Flaky E2E quota = minőségi signal a csapatnak.

**Dokumentáció:** https://playwright.dev/docs/intro

### Kérdés 37: Mire való a `provideAppInitializer` és az environment initializer?

**Válasz:**

App indulás előtt futtat async inicializálást (config, feature flag, auth bootstrap). Environment initializer library-khez, hogy a host app `main`-je ne tudjon róluk. Ne blokkolj feleslegesen: minden perc TTI. Hibát kezelj expliciten – failed init = üres/hibás app.

**Dokumentáció:** https://angular.dev/api/core/provideAppInitializer

### Kérdés 38: Hogyan kerülöd el a property drillinget DI tokennel, CSS változóval vagy content projectionnel?

**Válasz:**

Ne adj át ugyanazt az Inputot 5 szinten. Alternatívák: hierarchikus DI token a részfában, CSS custom property kontextus (téma/spacing), `ng-content` / `contentChild` template injection. Válaszd a problémához illőt: adat/viselkedés → DI; vizuális kontextus → CSS var; layout slot → projection.

**Dokumentáció:** https://angular.dev/guide/di/hierarchical-dependency-injection

### Kérdés 39: Hogyan építesz vegyes SCSS + design token + Tailwind stratégiát?

**Válasz:**

Egy token-forrás CSS változókként. Tailwind `theme.extend` ezekre hivatkozik (layout utility). Komponens-SCSS a komplex, állapotfüggő stílusra (`:host`, pseudo). Kerüld a duplikált hex színeket. Encapsulation buktató: utility a szülőn nem hatol a gyerekbe – variáns API kell.

**Dokumentáció:** https://angular.dev/guide/tailwind

### Kérdés 40: Mikor válassz `@container` query-t media query helyett?

**Válasz:**

Container query: a komponens saját konténerének szélessége alapján reagál – újrafelhasználható card ugyanúgy működik sidebarban és mainben. Media query: a viewportot nézi. Design systemben a container gyakran helyesebb; a breakpoint-okat ne keverd össze felelőtlenül.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries

### Kérdés 41: Miért vezessük ki a CommonJS (CJS) függőségeket az Angular buildből?

**Válasz:**

A CJS rosszabbul tree-shakeelhető, növeli a main chunkot, esbuild/application builder figyelmeztetéseket ad. Preferáld az ESM-only csomagokat, vagy keress alternatívát. A „sideEffects” és a default import minták is számítanak. Bundle budget + analyzer mutatja a regressziót.

**Dokumentáció:** https://angular.dev/guide/performance

### Kérdés 42: Hogyan debuggolsz Angular runtime error kódokat (NG0xxx)?

**Válasz:**

A hivatalos error encyclopedia megadja a kód jelentését (DI: NG02xx, hydration: NG05xx stb.). Sourcemap, minimal reproduction, stack. Hydration mismatchnél hasonlítsd a szerver és kliens DOM/szöveget. Ne hallgasd el a hibát üres catch-csel – a kód pont azért van, hogy irányt adjon.

**Dokumentáció:** https://angular.dev/errors

### Kérdés 43: Mit tud az új `animate.enter` / `animate.leave` animációs API?

**Válasz:**

Sablonban egyszerű enter/leave CSS animációkat köt, kisebb függőséggel a klasszikus `@angular/animations` felé. Progressive enhancement: ha a böngésző/user reduced-motion-t kér, tiszteld. Komplex orchestrationnél még kellhet a régi AnimationBuilder, de list enter/leave-re ez az irány.

**Dokumentáció:** https://angular.dev/guide/animations/enter-and-leave

### Kérdés 44: Hogyan kapcsolod be a Router view transition animációkat, és mire való?

**Válasz:**

`provideRouter(routes, withViewTransitions())` a böngésző View Transitions API-jára csomagolja a navigációt – natívabb, folyamatosabb oldalváltás. Feature detection kell; nem minden böngésző egyforma. Kerüld a túl erős animációt reduced-motion mellett.

**Dokumentáció:** https://angular.dev/guide/routing/route-transition-animations

### Kérdés 45: Hogyan állítasz fel korszerű code quality toolingt (ESLint flat config, Prettier, Husky)?

**Válasz:**

angular-eslint flat config a lint szabályokhoz (beleértve template), Prettier a formázáshoz, Husky/lint-staged pre-commit. Ugyanazok a szabályok fussonak CI-ben is. Egyeztesd a formázót a linterrel (conflict elkerülés). Nested subscribe / any tiltás team szabályként.

**Dokumentáció:** https://github.com/angular-eslint/angular-eslint

### Kérdés 46: Mikor használd a `detectChanges()`-t és mikor a `markForCheck()`-et?

**Válasz:**

`markForCheck`: OnPush fát megjelöli, a következő CD ciklusban frissül – async callbackből tipikus. `detectChanges`: azonnali, helyi detektálás a komponensen – erősebb, könnyebb újraentrancy/bug, ha CD közben hívod. Alapból preferáld a signal/async pipe-ot; manuális CDR legyen kivétel.

**Dokumentáció:** https://angular.dev/api/core/ChangeDetectorRef

### Kérdés 47: Mikor szabad a `DomSanitizer.bypassSecurityTrust*` metódusokat használni?

**Válasz:**

Csak akkor, ha a tartalom forrása trusted és kontrollált (saját CMS whitelist, saját generált SVG). User inputnál, URL queryből jövő HTML-nél soha. Preferáld a default escape-et. Bypass = tudatos XSS felület; kódreview kötelező, CSP mellett is.

**Dokumentáció:** https://angular.dev/best-practices/security

### Kérdés 48: Miért érdemes feature flaget `canMatch`-csel és lazy load-dal kombinálni?

**Válasz:**

Ha a flag off, a route nem match, a lazy chunk be sem töltődik – kevesebb hálózat és JS. `canActivate` után elutasítani már késő: a modul betöltődhetett. Flag forrása legyen gyors (local/bootstrap), ne blokkoljon hosszú HTTP-vel minden navigációt.

**Dokumentáció:** https://angular.dev/api/router/CanMatchFn

### Kérdés 49: Mikor legyen az URL a source of truth a UI állapotra (filter, pagination)?

**Válasz:**

Ha az állapot megosztható, back/forward gombbal visszaállítható, bookmarkolható, SSR-barát: tedd query/path paramba. A store inkább a szerver cache-t és a client-only ephemerális state-et tartsa.

Szinkron: router state ↔ signal/resource params. Kerüld a duplikált igazságot store-ban és URL-ben konfliktussal.

**Dokumentáció:** https://angular.dev/guide/routing

### Kérdés 50: Hogyan terveznél Angular upgrade stratégiát v14-ről v20+/v22 felé?

**Válasz:**

Hivatalos update guide + `ng update` **főverzióként**, ne ugorj vakon. Először tesztzöld és CI.

Majd standalone migráció, OnPush, signals az új kódban, Vitest felé, zoneless pilot. Breaking change-eket ADR-ben rögzítsd.

Canary környezet, rollback terv, csapatképzés. A knowledge base checklistje jó sorrend.

**Dokumentáció:** https://angular.dev/update-guide


---


## Staff

### Kérdés 1: Hogyan döntesz micro-frontend mellett vagy ellen egy szervezetben?

**Válasz:**

Mellette szól:
- független deploy több csapatnak
- technológiai diverzitás
- clear ownership

Ellene szól:
- runtime komplexitás
- shared dependency skew
- UX/design konzisztencia nehézsége
- latencia
- nehezebb E2E

Először próbáld a **modulithot** erős határokkal (Nx). MFE-t akkor válassz, ha a **szervezeti** kényszer (független release train) erősebb, mint a technikai költség – ne hype miatt.

**Dokumentáció:** https://angular.dev/tools/libraries

### Kérdés 2: Milyen fő kockázatai vannak a Native Federation shell/remote felállásnak?

**Válasz:**

Verzió skew (Angular/RxJS több példány), shared singleton szerződések törése, runtime contract breaking change remote-ok között, UX fragmentáció, shell mint single point of failure. Mitigáció: semver + contract tesztek, shared mapping szigorúan, integration environment, minimal shell, graceful remote fallback.

A „csak összerakjuk webpackel” nem stratégia.

**Dokumentáció:** https://www.npmjs.com/package/@angular-architects/native-federation

### Kérdés 3: Milyen kommunikációs mintákat ajánlasz micro-frontendek között, és melyeket kerülnéd?

**Válasz:**

Ajánlott: custom events / explicit contract lib, URL/state mint megosztott igazság, jól verziózott shared types. Kerülendő: szoros shared mutable global store két remote között, rejtett event bus mindenhova.

Az implicit csatolás „distributed monolithot” szül. Minden cross-MFE API legyen dokumentált és tesztelt szerződés.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

### Kérdés 4: Mikor érdemes Web Components / Angular Elements absztrakciót használni MFE helyett vagy mellett?

**Válasz:**

`createApplication` / `createCustomElement` framework-agnosztikus beágyazást ad (host lehet más stack). Trade-off: bootstrap költség, style encapsulation, DI/lifecycle komplexitás.

Jó: widget beágyazás legacy hostba. Rossz: ha minden feature-t custom elementnek csinálsz feleslegesen – túl nagy overhead.

**Dokumentáció:** https://angular.dev/guide/elements

### Kérdés 5: Hogyan kényszeríted ki az Nx monorepo library határait, hogy ne csak dokumentáció legyen az architektúra?

**Válasz:**

Project tag-ek + `enforce-module-boundaries` (és/vagy Sheriff/Detective). A tiltott import CI-n elhasal, nem code review szubjektum. Public API csak `index.ts`-en át. Deep import tilos. Ez az „architecture fitness function” alapja: a szabály automata, nem wiki oldal.

**Dokumentáció:** https://nx.dev/features/enforce-module-boundaries

### Kérdés 6: Mit jelent az „affected” elv CI/CD-ben Angular monorepónál, és miért kritikus?

**Válasz:**

`nx affected`: csak a változott (és függő) projekteket buildeli/teszteli/deployolja. Ez tartja ébren a CI időt és költséget nagy monorepóban. Remote cache (Nx Cloud) tovább csökkenti a redundant munkát. Affected nélkül minden PR „build all” – lassú feedback, kerüli a csapat a kis PR-eket.

**Dokumentáció:** https://nx.dev/ci/intro/ci-with-nx

### Kérdés 7: Hogyan vezetnél be zoneless change detectiont egy nagy legacy Angular appban?

**Válasz:**

Ne kapcsold ki a Zone.js-t egyetlen nagy lépésben („big-bang”). Nagy legacy appban a zoneless bevezetés fokozatos, mérhető program legyen.

1. **Mérés:** vedd fel a change detection / teljesítmény baseline-t (mielőtt bármit váltasz), hogy legyen mihez hasonlítani.
2. **OnPush minden komponensen:** a Default/Eager CD-re támaszkodó fák zoneless mellett gyakran „nem frissülnek”.
3. **Signals** az új kódon és a forró pathokon – zoneless alatt a frissítések nagy része signal-változásból és explicit triggerből jön.
4. **Feature flag** mellett kapcsold be a `provideZonelessChangeDetection`-t először csak **egy** vertical slice-on (pilot feature), ne az egész appre.
5. **Regresszióvadászat:** keresd a „nem frissül a UI” típusú bugokat (ami Zone mellett „magától” ment).
6. **Harmadik féltől származó libek auditja:** van-e olyan függőség, ami Zone-ra vagy patch-elt aszinkron API-kra épít.
7. **Zone eltávolítás** csak akkor, ha a metrikák (hibaarány, CWV, manuális regresszió) zöldek a piloton.

Közben kommunikálj a csapattal: az új kód legyen zoneless-ready (OnPush, signal, ne implicit Zone-frissítés).

**Dokumentáció:** https://angular.dev/guide/zoneless

### Kérdés 8: Kötelező-e az SSR minden B2B Angular alkalmazásra, és hogyan indokolnád a platform döntést?

**Válasz:**

Nem. SEO/marketing/publikus tartalomnál SSR/SSG erős. Auth mögötti belső toolnál a CSR + CDN + jó caching gyakran jobb költség/komplexitás arány. Nézd: indexelhetőség, TTFB SLA, személyre szabás, csapat SSR tapasztalata, hydration kockázat. Hybrid rendering: dönts route-szinten, ne ideológiából.

**Dokumentáció:** https://angular.dev/guide/ssr

### Kérdés 9: Hogyan governance-elnéd a design system tokeneket, SCSS-t és komponens API-t több termékcsapatnál?

**Válasz:**

Több termékcsapatnál a design system csak akkor tartható, ha van egyértelmű ownership, szerződés és automata kapu – nem wiki-szöveg.

1. **Sematikus tokennevek:** a komponens ne „blue-500”-at használjon, hanem szerepet (pl. `--color-primary`, `--color-on-surface`).
2. **CSS custom property** legyen a runtime forrás (témaváltás, white-label); az SCSS a struktúra (`@use` / `@forward`), ne az egyetlen igazság.
3. **Breaking change policy** + visual regression a token/komponens API változásokra.
4. **Dokumentált variánsok** `input`-ként (vagy host API-ként), ne rejtett CSS hackkel.
5. **Tiltott gyakorlatok:** `::ng-deep` kultúra, nyers hex a feature SCSS-ben, deep import a design system belső fájlaiba.

A **platform team** tartja a token pipeline-t és a komponens API-t; a **product team** fogyasztó. Breaking visual change-hez RFC / review kell.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 10: Hogyan mérnéd és javítanád a Core Web Vitals-t egy Angular appban?

**Válasz:**

Lab (Lighthouse) + RUM. LCP: hero `ngOptimizedImage`, kritikus CSS, SSR/prerender ahol kell.

INP: kevesebb long task, OnPush/zoneless, virtualizálás. CLS: méretek reserved, font strategy.

`@defer` és incremental hydration a initial work csökkentésére. Budget + regresszió fail a PR-en – ne csak „egyszer megnéztük”.

**Dokumentáció:** https://web.dev/articles/vitals

### Kérdés 11: Forensic architecture analysis során mit nézel meg először egy ismeretlen Angular monorepóban?

**Válasz:**

Függőségi gráf (Nx graph), circular deps, boundary sértés, bundle analyzer (duplicate vendor), „god” libek, legmagasabb churn + bug sűrűség fájlok. Ezután runtime: CWV, error rate. A cél: hol a valódi kockázat, nem hol a legszebb README. Rövid jelentés: top 5 hotspot + javasolt fitness function.

**Dokumentáció:** https://nx.dev/features/explore-graph

### Kérdés 12: Hogyan csökkented a backend API törő változtatásainak hatását a frontendeken?

**Válasz:**

OpenAPI/contract test a CI-ben, versioned endpoint vagy expandable response, DTO adapter anti-corruption layer a feature határán, feature flag a breaking UI-hoz, szükség esetén BFF. A komponens ne a nyers backend sémát beszélje. Consumer-driven contract ahol több kliens van.

**Dokumentáció:** https://angular.dev/guide/http

### Kérdés 13: Hogyan alakítasz ki multi-team code ownershipot Angular monorepóban?

**Válasz:**

CODEOWNERS a package határokon, public API (`index.ts`), semver a shared libekre, RFC a cross-cutting változásokra, platform vs product felelősség. A „mindenki nyúl mindenhez” kaoshoz és regreszióhoz vezet. Ownership ≠ siló: clear interface a csapatok között.

**Dokumentáció:** https://nx.dev/concepts/decisions/project-dependency-rules

### Kérdés 14: Mikor választanád szervezetileg a classic NgRx Store-t a Signal Store helyett?

**Válasz:**

Ha erős audit/event log, időutazás, sok csapat ugyanazon a global action szerződésen dolgozik, és a meglévő Redux tooling az igazság. Új zöldmezős feature: Signal Store default; Flux kell → Events API. A döntés legyen ADR, ne vallásháború PR-enként.

**Dokumentáció:** https://ngrx.io/guide/store

### Kérdés 15: Hogyan kodifikálnád a RxJS higher-order mapping sztenderdet a csapatban?

**Válasz:**

A cél: ne mindenki „érzésből” válasszon higher-order mapping operátort.

1. Írj **ADR**-t + belső cookbookot.
2. Rögzítsd a mintákat: typeahead → `switchMap`, write queue → `concatMap`, spam click → `exhaustMap`, független párhuzamos → `mergeMap`.
3. Vezess be **ESLint** szabályt a nested subscribe ellen.
4. Tedd a mintát a **code review checklist** részévé.
5. Adj **reference appot / workshopot** a csapatnak.

**Dokumentáció:** https://rxjs.dev/guide/higher-order-observables

### Kérdés 16: Mit jelent az error budget / reliability a frontend oldalon, és milyen metrikákat követsz?

**Válasz:**

Nem csak backend SLO: JS error rate, hydration fail arány, API fail utáni UX siker, long task/INP, synthetic monitoring a kritikus journey-kre. Retry policy és graceful degradáció (feature kikapcsolás).

Correlation ID az incidenshez. Error budget: mennyi regresszió fér bele a release sebesség mellett.

**Dokumentáció:** https://angular.dev/best-practices/error-handling

### Kérdés 17: Mit tartalmaznál egy SPA security review checklistben release előtt?

**Válasz:**

CSP header, Trusted Types ahol lehet, XSS sink audit (`innerHTML`, bypass sanitizer), authz minden védendő route-on, token tárolás, dependency CVE + lockfile, supply chain, iframe sandbox, secret ne a bundleben. Automata scan + manuális threat model a login/payment pathra.

**Dokumentáció:** https://angular.dev/best-practices/security

### Kérdés 18: Hogyan skálázod az i18n folyamatot 10+ locale esetén?

**Válasz:**

Fordítási pipeline (TMS), pseudo-localization a UI töréshez, ICU message, build matrix vagy runtime load döntés, locale routing SEO-hoz, design token a szöveghosszokra (német vs angol). Ownership: ki fordít, mi a freeze a release előtt. Ne manuális JSON copy-paste legyen a „folyamat”.

**Dokumentáció:** https://angular.dev/guide/i18n

### Kérdés 19: Milyen akadálymentességi (a11y) acceptance criteria-t tennél a termék Definition of Done-jába, és hogyan ellenőriznéd őket?

**Válasz:**

Konkrét, ellenőrizhető kritériumok kellenek – ne szlogenek.

1. **WCAG 2.2 AA** cél a kritikus usereken (login, fő workflow).
2. Minden új interaktív felület **billentyűzettel** végigjárható, látható `:focus-visible` mellett.
3. **CI-ben axe** (vagy hasonló) a fő route-okra; regresszió esetén a build bukjon.
4. **Modal/dialog:** focus trap, Escape, fókusz visszatérése a trigger elemre.
5. **Színkontraszt** a design tokenekből jön, ne ad hoc hex a feature kódban.
6. Ahol van, **Angular Aria / CDK a11y** primitívek a saját, félkész widget helyett.

**Ellenőrzés:** automata CI + manuális keyboard smoke a PR checklistben + periodikus screen reader spotcheck. Az „a11y majd később” nem része az acceptance-nek.

**Dokumentáció:** https://www.w3.org/WAI/standards-guidelines/wcag/

### Kérdés 20: Hogyan kényszeríted ki a bundle size budgetet a CI-ben, hogy performance regresszió ne csússzon be?

**Válasz:**

Angular `budgets` az `angular.json`-ben: PR fail, ha a main/lazy chunk átlépi a soft/hard limitet. Artifactként bundle analyzer report. Trend a fő chunkra. A budget emelése legyen tudatos RFC (miért nőtt), ne csendes ignore. Performance regresszió = breaking change a platform szemében.

**Dokumentáció:** https://angular.dev/tools/cli/build#configuring-size-budgets

### Kérdés 21: Hogyan vezetnél szervezeti migrációs programot NgModule-ról standalone-re?

**Válasz:**

Schematic (`ng generate @angular/core:standalone`), feature-enként, „új kód csak standalone” rule, training, ne tarts évekig kettős stílust doksi nélkül. Mérföldkő: lazy route-ok standalone, majd shared libek.

Kommunikáld a win-t (kevesebb boilerplate, tisztább határok). Big-bang rewrite ritkán éri meg.

**Dokumentáció:** https://angular.dev/reference/migrations/standalone

### Kérdés 22: Hogyan vezetnél be signal-first architektúrát legacy RxJS-heavy appba?

**Válasz:**

Strangler: UI state → signal, HTTP/stream → marad Observable, határon `toSignal`/`rxResource`. Tiltsd az `effect`-ben state sync antipatternt. Oktatás: glitch-free, untracked, higher-order mapping marad RxJS-nél. Lint + code review guardrail. Ne írd át az egész appot egy sprintben.

**Dokumentáció:** https://angular.dev/guide/signals/rxjs-interop

### Kérdés 23: Hogyan döntesz `@defer`, lazy route és micro-frontend között (döntési mátrix)?

**Válasz:**

`@defer`: sablonrész, ugyanaz a deploy, initial JS csökkentés. Lazy route: feature navigációs határ, ugyanaz a repo/deploy train. MFE: csapat/deploy függetlenség kell. Anti-pattern: MFE-zni azt, ami deferrel vagy lazy route-tal megoldható – a komplexitás ára túl magas.

**Dokumentáció:** https://angular.dev/guide/templates/defer

### Kérdés 24: Milyen shared library versioning stratégiákat ismersz monorepóban, és mik a trade-offok?

**Válasz:**

Single version policy (minden app ugyanazt a lib verziót használja): egyszerű, de kötelező sync upgrade. Független semver libenként: rugalmasabb, de matrix hell. Minimal public API, tiltsd a deep importot, breaking change RFC. A választás az org release modelljétől függ – ADR-ben rögzítsd.

**Dokumentáció:** https://nx.dev/concepts/decisions/dependent-tasks

### Kérdés 25: Milyen elemekből állna egy frontend observability stack, és miért kell a backend trace-hez kötni?

**Válasz:**

RUM (CWV), error tracking, correlation ID a HTTP headerben, feature flag analytics, performance marks/measures. A frontend hiba csak akkor debuggolható gyorsan, ha ugyanazzal az ID-val megtalálod a backend logot/trace-t. Sampling és PII scrub kötelező.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/API/Performance_API

### Kérdés 26: Hogyan kezelnéd a „framework churn”-t (gyors Angular feature hullám v17–v22 között)?

**Válasz:**

Adoption ladder: productionban csak stable; experimental lab/sandbox. Quarterly upgrade train. Deprecate policy a belső wrapper-ekre. Ne chasingeld minden preview-t az ügyfél roadmapjén. Kommunikálj: mit veszünk át mikor, miért – különben a csapat szétesik technológiailag.

**Dokumentáció:** https://angular.dev/reference/releases

### Kérdés 27: Milyen governance szabályokat vezetnél be AI-assisted Angular fejlesztéshez (MCP, agent skills)?

**Válasz:**

MCP/docs keresés OK, de emberi review kötelező. Secret/PII ne kerüljön promptba. AI generált architektúra → ADR. Tiltsd a vak „generate whole module” merge-t tesztek nélkül. Mérd: hány AI PR bukik review-n – DX tool, nem autopilot.

**Dokumentáció:** https://angular.dev/ai/mcp

### Kérdés 28: Hogyan osztanád meg a felelősséget platform team és product team között Angular ökoszisztémában?

**Válasz:**

Platform: CLI/generators, lint boundaries, design system, CI template, upgrade train, shared auth/http. Product: feature delivery a keretek között. Clear SLA (pl. generator bug, upgrade support). Ha a platform mindent „megtilt” ownership nélkül, árnyék-IT születik.

**Dokumentáció:** https://nx.dev/concepts/mental-model

### Kérdés 29: Milyen szervezeti és technikai hatása van a hydration mismatch-nek, és hogyan előzöd meg?

**Válasz:**

Flicker, újrarender, rossz UX/SEO, support ticket spill. Szerződés: tiszta szerver/kliens adat, TransferState/resource cache, browser-only API csak `afterNextRender`-ben, tiltsd a random/időbélyeg különbséget SSR HTML-ben. Incidens után fitness function (teszt) ha elkerülhető volt.

**Dokumentáció:** https://angular.dev/guide/hydration

### Kérdés 30: Mikor vezetnél be BFF-et (Backend for Frontend) az Angular kliens elé?

**Válasz:**

Overfetch/underfetch, auth aggregáció több szolgáltatásból, instabil public API, web/mobile eltérő needs. A BFF csökkenti a frontend komplexitást, de ops és ownership költséget ad. Ne BFF mindenre – néha elég egy jól tervezett public API + adapter.

**Dokumentáció:** https://angular.dev/guide/http

### Kérdés 31: Hogyan nézne ki a tesztpiramis nagy szervezet Angular monorepójában?

**Válasz:**

Sok unit, közepes component (TestBed/Vitest), kevés E2E (Playwright) a kritikus journey-kre, contract a service határokon. Flaky E2E quota limitált. A piramis inverze (minden E2E) drága és lassú. Platform adja a test utility-ket és a CI cache-t.

**Dokumentáció:** https://angular.dev/guide/testing

### Kérdés 32: Milyen frontend „architecture fitness functions” példákat automatizálnál?

**Válasz:**

Bundle budget fail, module boundary lint, a11y axe CI, nested subscribe tiltás, max component LOC, forbidden imports (pl. feature A nem importálhatja B belsőjét), CJS warning zero. Ezek automata minőségkapuk – az architektúra nem PowerPoint.

**Dokumentáció:** https://nx.dev/features/enforce-module-boundaries

### Kérdés 33: Hogyan terveznéd az SCSS/token architektúrát dark mode és white-label mellett skálán?

**Válasz:**

Token aliasok: brand réteg → sematikus réteg → komponens. `data-theme` / `data-brand` a runtime switchhez CSS vars-szal. Tiltott nyers szín a feature SCSS-ben. Egy build több brandre runtime-dal, vagy külön build ha a izoláció/security úgy kívánja – döntés ADR.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 34: Hogyan szerveznél dependency upgrade train-t (Angular + TypeScript + RxJS + Node)?

**Válasz:**

Párosított, támogatott verziók; LTS Node; `ng update` sorrend; canary környezet; automated PR; rollback terv; breaking change kommunikáció. Ne „mindenki frissítsen egyszerre hétvégén”. A train ritmusa (pl. negyedévente) kiszámíthatóbb, mint az ad hoc pánik.

**Dokumentáció:** https://angular.dev/update-guide

### Kérdés 35: Hogyan dokumentálod a frontend architektúra döntéseket ADR-ben?

**Válasz:**

Rövid Architecture Decision Record: context, decision, consequences, status. Példák: zoneless igen/nem, MFE igen/nem, state lib, i18n stratégia. Keresshető repo mappa. Az ADR megakadályozza, hogy félévente újra vita legyen ugyanarról PR kommentekben.

**Dokumentáció:** https://github.com/src-d/adr

### Kérdés 36: Hogyan kezelnéd a shell micro-frontend single point of failure kockázatát?

**Válasz:**

Shell down = egész app down. Mitigáció: minimal shell (kevés logika), agresszív CDN/cache, healthcheck, graceful remote fallback/error boundary, kritikus journey lehetőleg ne a shell törékeny részén múljon. Incident runbook: remote disable feature flaggel.

**Dokumentáció:** https://www.npmjs.com/package/@angular-architects/native-federation

### Kérdés 37: Milyen adatvédelmi (PII) szabályokat vezetnél be a frontend logokra és a RUM-ra?

**Válasz:**

Masking/scrubbing: ne logolj tokent, jelszót, személyes adatot breadcrumbben. RUM sampling, retention GDPR szerint, minimum necessary. Error tracker beforeSend hook. Training a csapatnak: `console.log(user)` productionben is hiba.

**Dokumentáció:** https://angular.dev/best-practices/security

### Kérdés 38: Hogyan egyezteted a design tokeneket a Figma/design és a kód között hosszú távon?

**Válasz:**

Közös token forrás (JSON/CSS pipeline), sematikus nevek, automated export CI-be, visual review a breaking change-re. Kerüld a kézi „átmásolt hexet”. Ownership: design system csapat a forrás; product fogyaszt. Drift mérése (linter a tiltott nyers színekre).

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 39: Milyen migrációs elveket követnél Signal Forms + Resource API hosszú távú bevezetésénél?

**Válasz:**

Új feature új API-n (strangler). Legacy reactive forms marad, amíg nem fáj. Interop bridge (`SignalFormControl` stb.) ahol kell. Ne big-bang rewrite. Experimental jelet kommunikáld; production only stable után. Mérföldkövek feature flaggel.

**Dokumentáció:** https://angular.dev/guide/forms/signals/overview

### Kérdés 40: Miért kezeled a developer experience-t first-class product metrikaként a frontend platformon?

**Válasz:**

Cold start, HMR, build idő, flake rate, generator minőség közvetlenül a delivery sebességet adják. DX regresszió = lassabb feature, kerülőutak, árnyék toolok. Mérd és budgeteld ugyanúgy, mint a CWV-t. Platform backlogba kerüljön a „build 2x lassabb” mint P1.

**Dokumentáció:** https://angular.dev/hmr

### Kérdés 41: Hogyan kezelnéd a csapatok közötti RxJS vs Signals skill gapet?

**Válasz:**

Workshop + reference app, „default patterns” cheatsheet, lint guardrail, pair review a higher-order mappingre, belső office hour. A gap nem szégyen – a dokumentálatlan elvárás az. Seniorok mentori célja: döntési szabály (mikor melyik), nem dogma.

**Dokumentáció:** https://rxjs.dev/guide/operators

### Kérdés 42: Mikor tennéd org-szinten kötelezővé a Zone.js teljes kikapcsolását?

**Válasz:**

Ha OnPush+signal érett, tesztek zoneless-kompatibilisek, 3rd party audit kész, RUM/error metrikák zöldek a piloton, runbook van. Addig hybrid/opt-in. A „kapcsoljuk ki pénteken” nem Staff szintű döntés.

**Dokumentáció:** https://angular.dev/guide/zoneless

### Kérdés 43: Hogyan igazítanád a belső frontend platform roadmapet az Angular hivatalos roadmaphez?

**Válasz:**

Stable feature-ök (signals, zoneless, vitest, hydration) felvétele timed adoptionnal. Experimental csak lab. Ne ígérj v23 preview-t ügyfélnek. Negyedéves sync az Angular release notes-szal + belső ADR frissítés. A roadmap legyen realisztikus a csapat kapacitására.

**Dokumentáció:** https://angular.dev/roadmap

### Kérdés 44: Mi a frontend incident response lépéssor production UI outage esetén?

**Válasz:**

1. Mitigáció: feature flag off / rollback.
2. Kommunikáció stakeholdernek.
3. Error spike + correlation ID elemzés.
4. Root cause.
5. Fix + verify.
6. Postmortem blameless.
7. Fitness function ha a hiba automata kapuval elkerülhető lett volna. Ne csak „hotfix és felejtés”.

**Dokumentáció:** https://angular.dev/best-practices/error-handling

### Kérdés 45: Hogyan csökkented a vendor lock-in kockázatát state/UI library körül?

**Válasz:**

Anti-corruption layer / Facade: a domain ne a Material/NgRx mély típusait beszélje. CSS token saját kontroll. Kerüld a szétszórt direct dependency-t minden komponensben. Ha cserélni kell a libet, egy határ mögött fájjon. ADR a választásról és a kilépési tervről.

**Dokumentáció:** https://angular.dev/guide/di

### Kérdés 46: Milyen architektúra döntéseket hoznál óriási listák (10k+ sor) megjelenítésénél?

**Válasz:**

Ne renderelj 10k DOM node-ot. CDK virtual scroll / windowing, szerver oldali pagination/filter, OnPush, stabil `track`. Ha kell, Web Worker a heavy transformra. Mérd az INP-t. Az „összes sor a kliensen” ritkán indokolt – gyakran termék/UX kérdés is.

**Dokumentáció:** https://angular.dev/guide/scrolling

### Kérdés 47: Mikor válassz runtime theme-et (CSS vars) és mikor compile-time white-label buildet multi-brand esetén?

**Válasz:**

Runtime CSS vars: egy artefakt, gyors brand switch, tenancy runtime. Compile-time brand: kisebb/ specifikusabb bundle, erősebb izoláció, esetleg compliance. Org/tenancy modell dönt. Hibrid: közös shell + brand token pack. ADR a trade-offokról.

**Dokumentáció:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Kérdés 48: Hogyan építenéd be az a11y és security compliance-t a Definition of Done-ba?

**Válasz:**

DoD checklist: axe clean a érintett kritikus pathon, keyboard smoke, CSP headers stagingen, bundle budget zöld, unit a guard/interceptorra, E2E a login journey-re, nincs új bypass sanitizer indoklás nélkül. A DoD nélkül a compliance „majd sprint 99”.

**Dokumentáció:** https://www.w3.org/WAI/standards-guidelines/wcag/

### Kérdés 49: Milyen szempontok alapján értékelnél egy Senior → Staff promotiont frontend oldalon?

**Válasz:**

Nem (csak) kódminőség: multi-team befolyás, architektúra döntések mérhető következménnyel (CI idő, CWV, incident ↓), mentorálás, kockázatcsökkentés, org-level standardok (ADR, fitness functions). Staff = platform/szervezet szinten hat, nem csak a saját squad ticketjein.

**Dokumentáció:** https://angular.dev/style-guide

### Kérdés 50: Hogyan állítanál fel egy 90 napos tervet egy legacy Angular 14 alkalmazás modern (v20+) platformmá alakítására?

**Válasz:**

A terv legyen mérföldköves és mérhető – ne „írjuk újra az egész appot” jellegű.

### 0–30 nap – stabilizálás
- Hivatalos update guide szerinti verziótrain (főverziónként, ne vak ugrással).
- CI zöld, smoke E2E a kritikus journey-kre.
- Bundle- és error-baseline mérés.
- ADR sablon és ownership rögzítése.

### 31–60 nap – modern alapok
- Standalone migráció a lazy feature-eken.
- OnPush az új és érintett kódon.
- ESLint boundary szabályok.
- Csapatszabály: új kód signals + nincs nested subscribe.
- Vitest felé első pilot.

### 61–90 nap – platform képességek
- `nx affected` + bundle budgets a CI-ben.
- Signals az új feature-ökben (`toSignal` / `resource`, ahol illik).
- Zoneless **egy** vertical slice-on, feature flaggel.
- Design token / SCSS irányvonal.
- Rövid belső képzés + ADR a döntésekről.

### Siker metrikák
Build/CI idő, main chunk méret, CWV (LCP/INP/CLS), flake rate, Zone/CD hibák száma a piloton.

### Nem cél 90 nap alatt
Teljes MFE, teljes rewrite, minden experimental API productionben. Minden upgrade lépéshez legyen rollback terv.

**Dokumentáció:** https://angular.dev/update-guide


---

## Megjegyzés
- A válaszok a csatolt `frontend-knowledge-base.md` anyagára és a hivatalos Angular / RxJS / MDN / TypeScript / Sass dokumentációra támaszkodnak.
- Bootstrap szándékosan **kihagyva**.
- RxJS higher-order mapping (`switchMap` / `mergeMap` / `concatMap` / `exhaustMap`) Junior alapoktól Staff szintű kodifikációig végigvonul.
- Formátum: szintenként `Kérdés 1` … `Kérdés 50`; a válaszok kifejtett bekezdés / lista formában.
