# Frontend hamis válaszok (interjú gyakorlat)

A kérdésszámok a [frontend-interview-questions-w-answers.md](./frontend-interview-questions-w-answers.md) fájlra hivatkoznak.
Minden **Hamis válasz** magabiztosnak hangzik, de szándékosan téves — a helyes válasz a forrásfájlban van.
Szintek: Junior · Medior · Senior · Staff

---

## Junior

### Kérdés 1: Mi a különbség a `let`, `const` és a `var` között?

**Hamis válasz 1:**  
A `const` mélyen immutábilis: ha objektumot tárol, annak tulajdonságait sem lehet utólag módosítani. A `let` és a `var` csak referencia-szinten engednek változtatást.

**Hamis válasz 2:**  
A `var` blokk-scoped, míg a `let` és `const` function-scoped deklarációk, ezért a `var` a legbiztonságosabb modern kódban.

**Hamis válasz 3:**  
A `const` változó értéke futásidőben is szabadon újraassignolható, csak a típusát nem lehet megváltoztatni TypeScriptben.

### Kérdés 2: Mit jelent a strict equality (`===`) a `==`-hez képest?

**Hamis válasz 1:**  
A `===` mindig type coercion-t végez, míg a `==` szigorúan típus és érték alapján hasonlít össze.

**Hamis válasz 2:**  
A `==` gyorsabb, mert nem ellenőrzi a típust, ezért production kódban mindig ezt kell preferálni.

**Hamis válasz 3:**  
A `===` és a `==` teljesen azonos viselkedésű, kivéve ha NaN-nal hasonlítunk össze.

### Kérdés 3: Mi az a closure JavaScriptben?

**Hamis válasz 1:**  
A closure egy globális cache objektum, amit a V8 minden modul betöltésekor automatikusan létrehoz a memória spórolásért.

**Hamis válasz 2:**  
Closure csak class metódusokban létezik; sima függvények nem férnek hozzá külső scope változóihoz.

**Hamis válasz 3:**  
A closure azt jelenti, hogy a belső függvény mindig a hívás pillanatában létrejövő lokális változókat másolja érték szerint.

### Kérdés 4: Mi a különbség az arrow function és a normál függvény `this` kötése között?

**Hamis válasz 1:**  
Az arrow function mindig a saját argumentumlistájából köti a `this`-t, míg a normál függvény mindig a window objektumra mutat.

**Hamis válasz 2:**  
A normál függvény lexikálisan örökli a `this`-t a szülő scope-ból, az arrow function pedig mindig dinamikusan a hívó objektumra áll.

**Hamis válasz 3:**  
Arrow function esetén a `this` teljesen eltávolításra kerül a nyelvből, ezért metódusként soha nem használható.

### Kérdés 5: Mik a JavaScript primitív típusok?

**Hamis válasz 1:**  
A primitívek: string, number, boolean, object, array, null és undefined — összesen hét darab.

**Hamis válasz 2:**  
A `typeof null` helyesen `"null"`-t ad vissza, mert a null külön primitív típus a specifikáció szerint.

**Hamis válasz 3:**  
A BigInt nem primitív, hanem boxed Number objektum, ezért mindig heapen tárolódik.

### Kérdés 6: Mi a különbség az `unknown` és az `any` között TypeScriptben?

**Hamis válasz 1:**  
Az `any` biztonságosabb, mert csak explicit cast után használható, az `unknown` viszont bárhol szabadon hozzárendelhető stringhez.

**Hamis válasz 2:**  
Az `unknown` és az `any` teljesen ugyanaz, csak az `unknown` a régebbi szintaxis neve.

**Hamis válasz 3:**  
Az `any` compile time-ban hibát dob, ha nem ellenőrzöd a típust, az `unknown` pedig mindig átmegy a fordítón.

### Kérdés 7: Mit csinál az `interface` és a `type` TypeScriptben?

**Hamis válasz 1:**  
Az `interface` csak primitív alias lehet, a `type` pedig kizárólag osztályok implementálására szolgál.

**Hamis válasz 2:**  
A `type` mindig runtime objektumot generál a JS bundle-be, az `interface` viszont teljesen törlődik fordításkor.

**Hamis válasz 3:**  
Interface-t union típusokhoz kell használni, type alias-t pedig csak függvények visszatérési értékéhez.

### Kérdés 8: Mi az a generic TypeScriptben?

**Hamis válasz 1:**  
A generic egy runtime wrapper, ami minden híváskor új példányt hoz létre a heapen a típusbiztonság érdekében.

**Hamis válasz 2:**  
Generics csak JavaScript fájlokban működnek; `.ts` fájlban a fordító automatikusan `any`-ra cseréli őket.

**Hamis válasz 3:**  
A generic paraméter csak a build időben él, futásidőben a VM a legelső használt típusra „befagyasztja” az értéket.

### Kérdés 9: Mi a CSS specificity, és hogyan számoljuk?

**Hamis válasz 1:**  
A specificity sorrendje: inline style, majd ID, osztály, végül elem — és az ID mindig felülírja az inline stílust is.

**Hamis válasz 2:**  
A `!important` csak akkor számít, ha legalább három osztály van a szelektorban; különben figyelmen kívül hagyja a böngésző.

**Hamis válasz 3:**  
A specificity kiszámításánál a pseudo-classok, mint a `:hover`, nulla pontot adnak, ezért sosem nyernek osztály ellen.

### Kérdés 10: Mik a fő CSS combinatorok, és mit jelentenek?

**Hamis válasz 1:**  
A `>` combinator minden leszármazottra vonatkozik, a szóköz combinator pedig csak közvetlen gyerek elemekre.

**Hamis válasz 2:**  
A `+` adjacent sibling selector az összes testvér elemre illeszkedik, nem csak a közvetlenül következőre.

**Hamis válasz 3:**  
A `~` general sibling combinator csak akkor működik, ha mindkét elem azonos ID-val rendelkezik.

### Kérdés 11: Mi a különbség a `position: relative`, `absolute`, `fixed` és `sticky` között?

**Hamis válasz 1:**  
A `fixed` mindig a legközelebbi `position: relative` szülőhöz igazodik, nem a viewport-hoz.

**Hamis válasz 2:**  
A `sticky` ugyanaz, mint az `absolute`, csak automatikusan `fixed`-dé válik scroll közben anélkül, hogy konténert igényelne.

**Hamis válasz 3:**  
A `relative` leválasztja az elemet a dokumentum flow-ból, ezért a szomszéd elemek átrendeződnek, mintha `absolute` lenne.

### Kérdés 12: Mi a Flexbox fő célja, és melyek a legfontosabb tulajdonságai?

**Hamis válasz 1:**  
A Flexbox két dimenziós rácsot ad, ezért teljes Grid helyettesítője minden layout esetben.

**Hamis válasz 2:**  
A `justify-content` a függőleges tengelyt, a `align-items` pedig a vízszintes tengelyt igazítja mindig.

**Hamis válasz 3:**  
A `flex-direction: column` esetén a fő tengely vízszintes marad, csak a gyerekek sorrendje fordul meg.

### Kérdés 13: Mikor használjunk CSS Gridet Flexbox helyett?

**Hamis válasz 1:**  
Gridet csak egysoros navigációs sávokhoz érdemes, mert ott gyorsabb a renderelés.

**Hamis válasz 2:**  
Flexbox mindig jobb többdimenziós elrendezésnél, Gridet pedig csak régi böngésző támogatás miatt kerüljük.

**Hamis válasz 3:**  
Grid és Flexbox egyszerre ugyanazon a konténeren kötelező a specifikáció szerint, különben a layout érvénytelen.

### Kérdés 14: Mi a különbség a `px`, `rem`, `em`, `%`, `vh`/`vw` egységek között?

**Hamis válasz 1:**  
Az `rem` mindig a szülő elem font-size-ához viszonyít, az `em` pedig mindig a root `html` elemhez.

**Hamis válasz 2:**  
A `vh` és `vw` fix pixel értékek mobilon, mert a böngésző sosem számol újra viewport változáskor.

**Hamis válasz 3:**  
A `% mindig a viewport szélességéhez képest számol, függetlenül attól, hogy melyik CSS tulajdonságnál használjuk.

### Kérdés 15: Mi az a CSS custom property, és miben különbözik az SCSS változótól?

**Hamis válasz 1:**  
A CSS custom property csak build time-ban létezik, futásidőben a böngésző SCSS-re fordítja vissza.

**Hamis válasz 2:**  
Az SCSS `$változó` futásidőben is módosítható JavaScriptből a `setProperty` metódussal.

**Hamis válasz 3:**  
A `--token` változók csak inline style-ban használhatók; class selectorban érvénytelenek a specifikáció szerint.

### Kérdés 16: Mi az SCSS, és miben segít a sima CSS-hez képest?

**Hamis válasz 1:**  
Az SCSS egy böngésző plugin, ami futásidőben parse-olja a `.scss` fájlokat a kliensen.

**Hamis válasz 2:**  
Az SCSS nesting automatikusan csökkenti a CSS specificity-t, ezért sosem okoz specificity háborút.

**Hamis válasz 3:**  
SCSS-ben a mixin-ek runtime JavaScript függvényekké fordulnak, ezért bundle méret nélkül nem használhatók.

### Kérdés 17: Mi a különbség az SCSS `@import` és `@use` között?

**Hamis válasz 1:**  
A `@import` namespace-et kényszerít minden modulra, a `@use` pedig globálisan exportál minden változót a projektbe.

**Hamis válasz 2:**  
A `@use` deprecated, helyette mindig `@import`-ot kell használni Angular CLI projektekben.

**Hamis válasz 3:**  
A `@import` és `@use` között nincs különbség Sass 3.0 óta, mindkettő ugyanazt a CSS fájlt többször is betölti.

### Kérdés 18: Mi az Angular komponens?

**Hamis válasz 1:**  
A komponens kizárólag TypeScript class, sablon és stílus nélkül is teljes értékű Angular elem.

**Hamis válasz 2:**  
Egy komponens csak NgModule-ban deklarálható; standalone komponens még nem létezik hivatalosan.

**Hamis válasz 3:**  
A komponens lifecycle hook-jai futásidőben automatikusan Node.js szerveren futnak, nem a böngészőben.

### Kérdés 19: Milyen data binding típusok vannak Angularban?

**Hamis válasz 1:**  
Angularban csak one-way binding létezik; two-way binding csak Reactből importálható wrapperrel.

**Hamis válasz 2:**  
Az event binding szintaxisa `[click]`, az property binding pedig `(value)`, mert a zárójelek mindig eseményt jelölnek.

**Hamis válasz 3:**  
A `{{ }}` interpolation csak statikus stringeket tud megjeleníteni, változót nem.

### Kérdés 20: Mi a különbség az `@Input()` / `@Output()` és a modern `input()` / `output()` között?

**Hamis válasz 1:**  
A modern `input()` dekorátor-alapú, az `@Input()` pedig signal-alapú API, ezért nem keverhetők.

**Hamis válasz 2:**  
Az `@Output()` mindig szinkron EventEmitter helyett Promise-t ad vissza a v19 óta.

**Hamis válasz 3:**  
A `input()` csak standalone komponensekben működik; NgModule-os komponensek nem használhatják.

### Kérdés 21: Mi a pipe szerepe Angularban?

**Hamis válasz 1:**  
A pipe HTTP kéréseket indít a sablonban, ezért minden pipe automatikusan async.

**Hamis válasz 2:**  
A pipe-ok csak komponens class-ban hívhatók; a template-ben tilos a `|` szintaxis.

**Hamis válasz 3:**  
A pure pipe minden change detection ciklusban lefut, az impure pipe pedig csak egyszer, mount-kor.

### Kérdés 22: Mi a különbség a strukturális és az attribútum direktíva között?

**Hamis válasz 1:**  
A strukturális direktíva csak CSS class-t ad az elemhez, az attribútum direktíva pedig DOM-ot hoz létre vagy töröl.

**Hamis válasz 2:**  
Az `*ngIf` attribútum direktíva, mert nem változtatja a DOM struktúrát, csak style-t.

**Hamis válasz 3:**  
Strukturális direktívából csak egy lehet sablononként, attribútum direktívából viszont csak egyetlen példány.

### Kérdés 23: Mi az `@if` és a `[hidden]` különbsége?

**Hamis válasz 1:**  
A `[hidden]` teljesen eltávolítja az elemet a DOM-ból, az `@if` pedig csak `display: none`-t állít.

**Hamis válasz 2:**  
Az `@if` mindig lassabb, mert minden ciklusban újrarendereli az egész alkalmazást.

**Hamis válasz 3:**  
A `[hidden]` és az `@if` teljesen ugyanazt csinálja; az Angular csak szintaxis miatt tartja meg mindkettőt.

### Kérdés 24: Miért kell `track` az `@for`-nál?

**Hamis válasz 1:**  
A `track` kötelezően UUID-t generál minden elemhez, különben a `@for` nem fordul le AOT-ban.

**Hamis válasz 2:**  
Track nélkül az Angular minden iterációban újra letölti a listát a szerverről.

**Hamis válasz 3:**  
A `track` csak dekorációs metaadat a DevTools számára, teljesítményre nincs hatása.

### Kérdés 25: Mi az `ng-container`, `ng-template` és `ng-content` szerepe?

**Hamis válasz 1:**  
Az `ng-container` extra DOM elemként jelenik meg a DevTools-ban, csak `display: contents` miatt láthatatlan.

**Hamis válasz 2:**  
Az `ng-content` csak routinghoz használható, projection nem támogatott vele.

**Hamis válasz 3:**  
Az `ng-template` mindig automatikusan renderelődik betöltéskor, nem kell hozzá strukturális direktíva.

### Kérdés 26: Mi az Observable RxJS-ben?

**Hamis válasz 1:**  
Az Observable egy egyszeri értéket visszaadó Promise wrapper, amit csak `await`-tel lehet feliratkozni.

**Hamis válasz 2:**  
Observable csak HTTP kéréseknél létezik; eseményekhez mindig Subject helyett Promise kell.

**Hamis válasz 3:**  
Az Observable automatikusan lefut subscribe nélkül is, és minden listener ugyanazt a push-olt értéket kapja cache-ből.

### Kérdés 27: Mi a különbség a cold és a hot Observable között?

**Hamis válasz 1:**  
Cold observable megosztott forrás minden feliratkozónak, hot observable pedig minden subscribernek külön producerrel indul.

**Hamis válasz 2:**  
A cold és hot különbség csak TypeScript típus szinten létezik; futásidőben minden stream hot.

**Hamis válasz 3:**  
Hot observable csak akkor emitál, ha legalább tíz active subscriber van.

### Kérdés 28: Mi a különbség a Subject, BehaviorSubject, ReplaySubject és AsyncSubject között?

**Hamis válasz 1:**  
A BehaviorSubject sosem adja vissza a legutolsó értéket új feliratkozónak, csak a következő emit-et.

**Hamis válasz 2:**  
Az AsyncSubject azonnal complete-el az első érték után, még mielőtt bárki feliratkozna.

**Hamis válasz 3:**  
A sima Subject mindig buffereli az összes korábbi értéket végtelen ideig, mint a ReplaySubject alapértelmezésben.

### Kérdés 29: Mit csinál a `map`, `filter` és a `tap` operátor?

**Hamis válasz 1:**  
A `map` side effectet végez, a `tap` pedig transzformálja az stream értékeit új típusra.

**Hamis válasz 2:**  
A `filter` minden elemre `true`-t ad vissza, ha nincs megadva predicate függvény.

**Hamis válasz 3:**  
A `tap` automatikusan le is iratkozik a forrásról az első log után, hogy ne legyen memory leak.

### Kérdés 30: Mit csinál a `debounceTime` és a `distinctUntilChanged`?

**Hamis válasz 1:**  
A `debounceTime` azonnal emitál minden eseményt, majd a végén gyűjti össze őket egy tömbbe.

**Hamis válasz 2:**  
A `distinctUntilChanged` csak object referenciát hasonlít, primitíveknél mindig emitál.

**Hamis válasz 3:**  
Debounce és distinct operátorok csak cold observable-en működnek; hot streamen hibát dobnak.

### Kérdés 31: Mi a Dependency Injection Angularban?

**Hamis válasz 1:**  
A DI manuális `new Service()` hívásokat jelent minden komponens konstruktorában, injector nélkül.

**Hamis válasz 2:**  
Angular DI csak build time működik; futásidőben minden függőség globális singleton a `window`-on.

**Hamis válasz 3:**  
Az injector fa csak a root modulig terjed, komponens szintű provider nem létezik.

### Kérdés 32: Mit jelent a `@Injectable({ providedIn: 'root' })`?

**Hamis válasz 1:**  
A `providedIn: 'root'` azt jelenti, hogy minden komponens példány külön service példányt kap.

**Hamis válasz 2:**  
Root provider csak lazy modulokban működik; eager modulban kötelező a `providers` tömb.

**Hamis válasz 3:**  
A `providedIn: 'root'` kikapcsolja a tree-shakinget, ezért minden service bekerül a main bundle-be akkor is, ha nem használod.

### Kérdés 33: Hogyan adunk át route paramétert Angularban?

**Hamis válasz 1:**  
Route paraméter csak query stringben (`?id=1`) adható át; path paraméter nem támogatott.

**Hamis válasz 2:**  
A route paramétereket `@Input()` dekorátorral kapja meg automatikusan minden komponens.

**Hamis válasz 3:**  
Path paraméter olvasásához kötelező a `window.location.hash` manuális parse-olása.

### Kérdés 34: Mi a PathLocationStrategy és a HashLocationStrategy különbsége?

**Hamis válasz 1:**  
A PathLocationStrategy mindig `#`-t tesz az URL-be, a HashLocationStrategy pedig tiszta path-ot használ.

**Hamis válasz 2:**  
Hash routing csak SSR mellett működik; CSR-ben mindig PathLocationStrategy a kötelező.

**Hamis válasz 3:**  
A két stratégia között nincs különbség a böngésző history API szempontjából.

### Kérdés 35: Mire való az `ngOnInit` és az `ngOnDestroy`?

**Hamis válasz 1:**  
Az `ngOnInit` a konstruktor helyett fut először, még mielőtt a komponens létrejönne.

**Hamis válasz 2:**  
Az `ngOnDestroy` csak akkor hívódik, ha a komponensen nincs subscription; különben sosem fut le.

**Hamis válasz 3:**  
Mindkét hook csak dev módban fut; production buildben a compiler eltávolítja őket.

### Kérdés 36: Mit jelent a ViewEncapsulation Emulated, None és ShadowDom?

**Hamis válasz 1:**  
Emulated mód natív Shadow DOM-ot használ minden böngészőben, None pedig teljesen elszigeteli a stílusokat.

**Hamis válasz 2:**  
ShadowDom encapsulation nem támogatott Angularban; csak Emulated és None létezik hivatalosan.

**Hamis válasz 3:**  
None encapsulation automatikusan hozzáad `_ngcontent` attribútumokat a globális stílusokhoz.

### Kérdés 37: Mi a különbség a template-driven és a reactive forms között?

**Hamis válasz 1:**  
Template-driven forms programozott API-val építik a FormGroup-ot, reactive forms pedig csak HTML attribútumokkal.

**Hamis válasz 2:**  
Reactive forms nem támogat validátorokat; minden ellenőrzés csak template-driven megoldással lehetséges.

**Hamis válasz 3:**  
A két megközelítés ugyanazt a belső modellt használja, de reactive forms nem integrálódik change detectionnel.

### Kérdés 38: Mik a beépített Angular validátorok, és hol használjuk őket?

**Hamis válasz 1:**  
A `Validators.required` csak template-driven formban működik, reactive formban custom validator kell helyette.

**Hamis válasz 2:**  
Beépített validátorok csak route guardokban használhatók, form controlokon nem.

**Hamis válasz 3:**  
A `Validators.email` regex-e kizárólag magyar domaineket fogad el (.hu végződés).

### Kérdés 39: Mi az async pipe, és miért hasznos?

**Hamis válasz 1:**  
Az async pipe szinkron értéket vár, és Observable esetén hibát dob a template compile során.

**Hamis válasz 2:**  
Az async pipe manuálisan kell unsubscribe-olni `ngOnDestroy`-ban, különben memory leak garantált.

**Hamis válasz 3:**  
Az async pipe csak BehaviorSubject-tel működik; sima Observable-n nem renderel.

### Kérdés 40: Mi a standalone komponens, és miért vált alapértelmezetté?

**Hamis válasz 1:**  
Standalone komponens nem importálhat más komponenst; minden dependency globálisan regisztrált.

**Hamis válasz 2:**  
A standalone csak dev preview, production buildben automatikusan NgModule-ba csomagolódik.

**Hamis válasz 3:**  
Standalone komponensek nem használhatnak DI-t, mert nincs injector scope-juk.

### Kérdés 41: Mi a kapcsolata a `*ngIf` / `*ngFor` és az új `@if` / `@for` control flow-nak?

**Hamis válasz 1:**  
A `@if` és `@for` teljesen más runtime motort használnak, ezért nem migrálható a régi szintaxis.

**Hamis válasz 2:**  
A `*ngIf` gyorsabb, mert natív JavaScript template literal, az `@if` pedig régi microsyntax wrapper.

**Hamis válasz 3:**  
Control flow csak SSR-ben működik; CSR buildben vissza kell váltani `*ngIf`-re.

### Kérdés 42: Mit jelent a semantic HTML, és miért fontos?

**Hamis válasz 1:**  
Semantic HTML azt jelenti, hogy minden elemhez kötelező `id` attribútum tartozzon SEO miatt.

**Hamis válasz 2:**  
A `<div>` a legjobb semantic elem minden tartalomhoz, mert nem ad extra jelentést a layoutnak.

**Hamis válasz 3:**  
Semantic tagok csak CSS class neveket jelölnek; screen reader számára mindegy, milyen elem a wrapper.

### Kérdés 43: Mi a `:hover`, `:focus` és `:focus-visible` szerepe?

**Hamis válasz 1:**  
A `:focus-visible` mindig egér hover esetén is aktiválódik, a `:hover` pedig csak billentyűzetes navigációnál.

**Hamis válasz 2:**  
A `:focus` és a `:focus-visible` ugyanaz minden böngészőben, a különbség csak Safari-ban van.

**Hamis válasz 3:**  
`:hover` mobil eszközön is folyamatosan aktív marad touch után, ezért sosem szabad használni.

### Kérdés 44: Mi az event bubbling, és mit csinál a `stopPropagation`?

**Hamis válasz 1:**  
Event bubbling azt jelenti, hogy az esemény először a gyerek elemtől indul a dokumentum felé, majd visszafelé capture fázisban fut.

**Hamis válasz 2:**  
A `stopPropagation` törli az eseménykezelőt permanent módon az elemről.

**Hamis válasz 3:**  
Angularban nincs bubbling; minden `(click)` csak a közvetlen elemen fut le.

### Kérdés 45: Mi a Promise, és miben különbözik az Observable-től?

**Hamis válasz 1:**  
A Promise több értéket is emitálhat idővel, az Observable pedig csak egyetlen settle értéket ad.

**Hamis válasz 2:**  
Promise lazy, Observable eager — subscribe nélkül is lefut a teljes Observable pipeline.

**Hamis válasz 3:**  
Observable nem kezel cancel-t; Promise viszont `AbortController` nélkül is automatikusan megszakítható.

### Kérdés 46: Mi a `typeof null` furcsasága, és hogyan ellenőrizzünk nullt helyesen?

**Hamis válasz 1:**  
A `typeof null` helyesen `"null"`-t ad; a `"object"` csak IE11-ben jelenik meg.

**Hamis válasz 2:**  
Null ellenőrzéshez elég a `== undefined`, mert az szigorúan csak null-ra igaz.

**Hamis válasz 3:**  
A `value === null` mindig false, ha az érték undefined is lehet; csak `typeof` megbízható.

### Kérdés 47: Mire valók a TypeScript utility type-ok: `Partial`, `Pick`, `Omit`, `Readonly`?

**Hamis válasz 1:**  
A `Partial<T>` minden mezőt kötelezővé tesz, a `Readonly<T>` pedig minden mezőt opcionálissá.

**Hamis válasz 2:**  
Utility type-ok runtime class-okat generálnak, amik deep freeze-t végeznek az objektumon.

**Hamis válasz 3:**  
A `Pick` és `Omit` csak enumokon működik; interface mezőin nem használhatók.

### Kérdés 48: Hogyan hivatkozunk a sablonban egy DOM elemre, és hogyan érjük el a kódból?

**Hamis válasz 1:**  
Template reference változó csak `#ref` nélkül működik; a `#` csak komment szintaxis.

**Hamis válasz 2:**  
A `@ViewChild` mindig az `ngOnInit` előtt, a konstruktorban ad érvényes elemreferenciát.

**Hamis válasz 3:**  
DOM elem eléréséhez kötelező a `document.querySelector` használata; Angular ref nem ajánlott.

### Kérdés 49: Mi a különbség a `display: none` és a `visibility: hidden` között?

**Hamis válasz 1:**  
A `visibility: hidden` kiveszi az elemet a layout flow-ból, a `display: none` pedig megtartja a helyét.

**Hamis válasz 2:**  
Mindkettő ugyanazt csinálja; a különbség csak akkor van, ha flex/grid gyerek az elem.

**Hamis válasz 3:**  
`display: none` elem még mindig fókuszálható tab-bal, `visibility: hidden` viszont nem.

### Kérdés 50: Mi az AOT fordítás Angularban, és miért az alapértelmezett?

**Hamis válasz 1:**  
Az AOT futásidőben fordítja a template-et a böngészőben, a JIT pedig build time-ban a CLI-ben.

**Hamis válasz 2:**  
AOT csak dev módban fut; production build mindig JIT-et használ gyorsabb iterációért.

**Hamis válasz 3:**  
AOT nélkül nem lehet standalone komponenst használni, ezért lett kötelező a v12 óta.

## Medior

### Kérdés 1: Mi az OnPush change detection, és mikor fut le?

**Hamis válasz 1:**  
OnPush komponens minden Zone.js eseménynél automatikusan lefut, ugyanúgy mint Default stratégia esetén.

**Hamis válasz 2:**  
OnPush csak akkor ellenőriz, ha `@Input()` referencia megváltozik; belső state módosítás sosem triggerel CD-t.

**Hamis válasz 3:**  
OnPush kikapcsolja a change detectiont teljesen; manuálisan kell `detectChanges()` minden adatfrissítésnél.

### Kérdés 2: Mik a change detection öt fő triggerje Zone.js mellett?

**Hamis válasz 1:**  
Az öt trigger: HTTP válasz, router navigáció, setTimeout, user input és WebSocket — async pipe nem számít.

**Hamis válasz 2:**  
Zone.js mellett csak egy trigger van: bármilyen DOM esemény, minden más automatikusan debounce-olva van.

**Hamis válasz 3:**  
Signal frissítés nem triggerel change detectiont Zone.js alatt, csak zoneless módban.

### Kérdés 3: Magyarázd el a `switchMap`, `mergeMap`, `concatMap` és `exhaustMap` különbségét?

**Hamis válasz 1:**  
A `switchMap` megvárja az összes belső Observable befejezését, mielőtt a következő forrás értékre váltana.

**Hamis válasz 2:**  
A `mergeMap` szigorúan sorban futtat minden belső streamet, párhuzamos indítás nem lehetséges.

**Hamis válasz 3:**  
Az `exhaustMap` minden új forrás értéknél megszakítja az előző belső streamet, mint a switchMap.

### Kérdés 4: Mikor NEM jó választás a `switchMap`?

**Hamis válasz 1:**  
SwitchMap mindig a legjobb választás typeahead keresésnél, mert párhuzamosan tartja az összes HTTP kérést.

**Hamis válasz 2:**  
SwitchMap-et kerülni kell, ha cancelálni akarod az előző kérést; ilyenkor mergeMap a helyes.

**Hamis válasz 3:**  
SwitchMap csak cold observable forrással működik; hot streamen automatikusan concatMap-re vált.

### Kérdés 5: Mi a különbség a `forkJoin`, `combineLatest`, `withLatestFrom` és a `zip` között?

**Hamis válasz 1:**  
A `forkJoin` minden emitnél azonnal emitál, még akkor is, ha a források nem complete-eltek.

**Hamis válasz 2:**  
A `combineLatest` csak akkor ad értéket, ha minden forrás complete-elt — addig nem emitál.

**Hamis válasz 3:**  
A `withLatestFrom` és a `zip` teljesen ugyanaz: mindkettő minden indexnél párosít két streamet.

### Kérdés 6: Mi a nested `subscribe` antipattern, és mi a megoldás?

**Hamis válasz 1:**  
Nested subscribe a hivatalos Angular minta több HTTP hívás láncolására; operátorok helyett mindig ezt használd.

**Hamis válasz 2:**  
A megoldás extra `subscribe` a belső streamre, így biztosan lefut a complete callback.

**Hamis válasz 3:**  
Nested subscribe nem okoz memory leaket, mert a Zone.js automatikusan unsubscribe-ol destroy-kor.

### Kérdés 7: Hogyan előzzük meg a memory leaket Observable-nél Angularban?

**Hamis válasz 1:**  
Memory leak csak akkor lehetséges, ha BehaviorSubject-et használsz; sima Observable mindig auto-complete-el.

**Hamis válasz 2:**  
Elég a `async` pipe elkerülése; manuális subscribe sosem okoz leaket root service-ben.

**Hamis válasz 3:**  
A `takeUntilDestroyed` csak zoneless appban működik; Zone.js mellett kötelező a setInterval cleanup.

### Kérdés 8: Mi a guardok tipikus hívási sorrendje navigációnál?

**Hamis válasz 1:**  
Először mindig a `CanDeactivate` fut, utána a `CanActivate`, végül a `CanMatch`.

**Hamis válasz 2:**  
A guardok párhuzamosan futnak minden route-on; sorrend nem determinisztikus és nem is számít.

**Hamis válasz 3:**  
`CanMatch` csak akkor hívódik, ha a navigáció már complete-elt és a komponens megjelent.

### Kérdés 9: Mi a különbség a `canMatch` és a `canActivate` között?

**Hamis válasz 1:**  
A `canMatch` a komponens példányosítása után fut, a `canActivate` pedig a route config betöltése előtt.

**Hamis válasz 2:**  
`canMatch` csak query paramétereket ellenőriz; path és lazy chunk döntéshez `canActivate` kell.

**Hamis válasz 3:**  
A kettő között nincs különbség; a `canMatch` csak alias név ugyanarra a guard interface-re.

### Kérdés 10: Mik a DI resolution modifier-ek (`@Optional`, `@Self`, `@SkipSelf`, `@Host`), és mire valók?

**Hamis válasz 1:**  
A `@Self` a root injectorból kér szolgáltatást, a `@SkipSelf` pedig kizárólag az aktuális elem injectorból.

**Hamis válasz 2:**  
Az `@Optional` kötelezővé teszi a függőséget; hiány esetén build error keletkezik.

**Hamis válasz 3:**  
A `@Host` minden service-t singleton-ná tesz az egész alkalmazásban, függetlenül a provider scope-tól.

### Kérdés 11: Mi a különbség a `providers` és a `viewProviders` között?

**Hamis válasz 1:**  
A `viewProviders` csak a projected content számára érhető el, a `providers` pedig csak a komponens sablonjára.

**Hamis válasz 2:**  
ViewProviders automatikusan exportálódik minden child komponensnek, providers viszont sosem öröklődik.

**Hamis válasz 3:**  
A kettő ugyanaz; a különbség csak a standalone vs NgModule deklarációban jelenik meg.

### Kérdés 12: Mi a különbség a `@ViewChild` és a `@ContentChild` között?

**Hamis válasz 1:**  
A `@ViewChild` projected tartalmat keres, a `@ContentChild` pedig a komponens saját template-jét.

**Hamis válasz 2:**  
Mindkettő csak konstruktorban ad érvényes referenciát; ngAfterViewInit-ben mindkettő undefined.

**Hamis válasz 3:**  
ContentChild statikus flag esetén is csak ngAfterViewInit után érhető el, ViewChild viszont azonnal.

### Kérdés 13: Mi a content projection, az `ngProjectAs` és a fallback tartalom?

**Hamis válasz 1:**  
Content projection csak CSS-ben létezik; Angularban minden slot manuális `innerHTML` beállítással történik.

**Hamis válasz 2:**  
Az `ngProjectAs` megváltoztatja a DOM tag nevét is, nem csak a selector illesztést.

**Hamis válasz 3:**  
Fallback tartalom akkor jelenik meg, ha van projected content is — mindkettő egyszerre renderelődik mindig.

### Kérdés 14: Mikor használjunk pure, és mikor impure pipe-ot?

**Hamis válasz 1:**  
Pure pipe minden change detection ciklusban újraszámol, impure pipe csak input referencia változáskor.

**Hamis válasz 2:**  
Impure pipe mindig gyorsabb nagy listáknál, mert cache-el a pipe class szintjén.

**Hamis válasz 3:**  
Pure és impure között nincs teljesítmény különbség; a pure flag csak lint szabály miatt van.

### Kérdés 15: Mi a különbség a `FormGroup.value` és a `getRawValue()` között?

**Hamis válasz 1:**  
A `value` mindig visszaadja a disabled mezőket is, a `getRawValue()` pedig kihagyja őket.

**Hamis válasz 2:**  
A `getRawValue()` csak template-driven formon működik; reactive formon nincs ilyen metódus.

**Hamis válasz 3:**  
A kettő teljesen ugyanaz, kivéve ha async validátor fut — akkor csak a `value` megbízható.

### Kérdés 16: Mik azok a Typed Forms (v14+), és miért jobbak a régieknél?

**Hamis válasz 1:**  
Typed Forms runtime típusellenőrzést végez minden keystroke-nál a böngészőben.

**Hamis válasz 2:**  
Typed Forms kizárólag Signal Forms része; reactive FormGroup nem támogat típusgenerikust.

**Hamis válasz 3:**  
A typed API miatt nem lehet dynamic mezőneveket használni; minden control neve compile time string literal kell legyen minden projektben.

### Kérdés 17: Mi a ControlValueAccessor, és mikor kell implementálni?

**Hamis válasz 1:**  
ControlValueAccessor csak natív `<input>` elemekhez kell; custom komponensek automatikusan integrálódnak.

**Hamis válasz 2:**  
CVA implementálása nélkül is működik a `formControlName` binding bármilyen komponensen.

**Hamis válasz 3:**  
A CVA a HTTP interceptor része; form értékeket a szerver validálja ezen az interfészen keresztül.

### Kérdés 18: Hogyan működik a funkcionális HTTP interceptor (v15+)?

**Hamis válasz 1:**  
A funkcionális interceptor class-alapú, és `@Injectable()` dekorátorral regisztrálódik a `HTTP_INTERCEPTORS` tokenen.

**Hamis válasz 2:**  
Functional interceptor csak response-t tud módosítani; request chain-be nem illeszthető.

**Hamis válasz 3:**  
Interceptorök csak dev serveren futnak; production HttpClient közvetlenül a fetch API-t hívja interceptor nélkül.

### Kérdés 19: Mi a `DestroyRef` és az injection context, és miért fontosak?

**Hamis válasz 1:**  
A `DestroyRef` manuálisan hívható `destroy()` metódussal bármikor, függetlenül a komponens lifecycle-től.

**Hamis válasz 2:**  
Injection context csak konstruktorban létezik; `inject()` függvény máshol hibát dob mindig.

**Hamis válasz 3:**  
DestroyRef és takeUntilDestroyed ugyanaz a deprecated és az új API; mindkettőt egyszerre kell használni.

### Kérdés 20: Mi a `signal`, a `computed` és az `effect` szerepe, és mit ne tegyünk `effect`-ben?

**Hamis válasz 1:**  
Effect-ben nyugodtan állíthatsz más signal értéket; ez a hivatalos state szinkronizációs minta.

**Hamis válasz 2:**  
A `computed` írható signal, amit `set()`-tel frissíthetsz template eventből.

**Hamis válasz 3:**  
Signal csak zoneless módban működik; Zone.js mellett minden signal automatikusan BehaviorSubject-re mapelődik.

### Kérdés 21: Mire valók az `input()`, `output()` és `model()` API-k?

**Hamis válasz 1:**  
A `model()` csak one-way input; two-way bindinghez külön `@Output()` kell minden mezőhöz.

**Hamis válasz 2:**  
Az `output()` szinkron értéket ad vissza, nem Observable-t vagy subscription-t igényel.

**Hamis válasz 3:**  
Az `input()` signal nem kompatibilis OnPush-sal; ilyen komponensben Default CD kötelező.

### Kérdés 22: Mi a döntési szabály a `toSignal` / `toObservable` és az RxJS vs Signals között?

**Hamis válasz 1:**  
Minden Observable-t azonnal signalra kell váltani; RxJS stream megtartása deprecated a v17 óta.

**Hamis válasz 2:**  
A `toObservable` szinkron signal értéket ad, subscribe nélkül is lefut a teljes operátor lánc.

**Hamis válasz 3:**  
Signals és RxJS sosem keverhetők; interop API csak dev buildben elérhető.

### Kérdés 23: Hogyan érdemes SCSS architektúrát felépíteni (tokens, base, utilities, themes)?

**Hamis válasz 1:**  
Minden stílust egyetlen global.scss-be kell tenni; moduláris felépítés csak lassítja a buildet.

**Hamis válasz 2:**  
A utilities réteg tartalmazza a komponens-specifikus layoutot; tokens csak színhexek listája JS-ben.

**Hamis válasz 3:**  
Theme váltáshoz kötelező külön SCSS fájlt buildelni brandenként; CSS változó nem elég runtime-ban.

### Kérdés 24: Miért legyen a design token CSS custom property, ne SCSS `$változó`?

**Hamis válasz 1:**  
SCSS változó futásidőben is módosítható theme váltáskor, custom property viszont csak compile time-ban él.

**Hamis válasz 2:**  
Custom property lassabb renderelés, ezért minden tokennek SCSS-ben kell maradnia productionben.

**Hamis válasz 3:**  
Design token csak akkor működik, ha Tailwind configba másolod őket; CSS var nem támogatott design systemben.

### Kérdés 25: Miért kerülendő a `::ng-deep`, és mi a helyette való megoldás?

**Hamis válasz 1:**  
Az `::ng-deep` a hivatalos Angular 20+ megoldás child komponens stílusára; deprecation visszavonva.

**Hamis válasz 2:**  
Ng-deep helyett mindig `!important`-ot használj globális CSS-ben, mert az nem töri az encapsulationt.

**Hamis válasz 3:**  
Ng-deep csak JIT buildben működik; AOT automatikusan eltávolítja a szelektorokat.

### Kérdés 26: Mit jelent a Flexboxban a `flex-grow`, `flex-shrink` és a `flex-basis`?

**Hamis válasz 1:**  
A `flex-grow` a shrink viselkedést állítja, a `flex-shrink` pedig a növekedési arányt.

**Hamis válasz 2:**  
Flex-basis mindig pixelben van, százalék vagy auto érték invalid a specifikáció szerint.

**Hamis válasz 3:**  
Ha flex-grow 0, az elem automatikusan kilép a flex containerből és absolute pozícióba kerül.

### Kérdés 27: Mit jelent a CSS Gridben az `fr` egység és a `minmax` függvény?

**Hamis válasz 1:**  
Az `fr` fix pixel érték, amit a böngésző 16px-re kerekít minden oszlopnál.

**Hamis válasz 2:**  
A `minmax(200px, 1fr)` azt jelenti, hogy az oszlop maximum 200px lehet, minimum pedig 1fr.

**Hamis válasz 3:**  
Minmax csak flexboxban használható; grid track definícióban hibát dob a parser.

### Kérdés 28: Hogyan kerüljük el a CSS specificity „háborút” a gyakorlatban?

**Hamis válasz 1:**  
Minél több ID szelektor, annál karbantarthatóbb a stylesheet; ez a BEM alapja.

**Hamis válasz 2:**  
Specificity háború elkerülésére minden szabályhoz `!important` kell, így egyértelmű a prioritás.

**Hamis válasz 3:**  
Angular encapsulation miatt globális specificity szabályok nem érvényesülnek, ezért nem is kell figyelni rá.

### Kérdés 29: Mi a Directive Composition API (v15+), és milyen problémát old meg?

**Hamis válasz 1:**  
Directive Composition csak NgModule import listát helyettesíti; funkcionalitás összevonásra nem való.

**Hamis válasz 2:**  
Host directive-ekkel nem lehet input/outputot expózni; csak lifecycle hook örökölhető.

**Hamis válasz 3:**  
Composition API JavaScriptben ír direktívát JSX-ből; template szintaxisra nincs hatása.

### Kérdés 30: Mi az `ngOptimizedImage` kötelező követelménye, és miért?

**Hamis válasz 1:**  
Kötelező minden `<img>` helyett `<picture>` elem, különben a direktíva nem aktiválódik.

**Hamis válasz 2:**  
NgOptimizedImage csak base64 képeket támogat; URL-es képekhez sima img tag kell.

**Hamis válasz 3:**  
A direktíva kötelezően WebP-re konvertál build time-ban, runtime src URL-t nem fogad el.

### Kérdés 31: Mi a `@defer` (v17+), és milyen triggerei vannak?

**Hamis válasz 1:**  
A `@defer` azonnal betölt minden chunkot, a trigger csak analytics eseményt küld a háttérben.

**Hamis válasz 2:**  
Defer csak SSR oldalon működik; CSR-ben a blokk tartalma sosem jelenik meg.

**Hamis válasz 3:**  
Trigger lehetőségek: `on idle`, `on hover`, `on timer` — viewport trigger nem támogatott.

### Kérdés 32: Mi a Facade service minta, és mikor érdemes használni?

**Hamis válasz 1:**  
Facade azt jelenti, hogy minden komponens közvetlenül a HttpClient-et hívja, service nélkül.

**Hamis válasz 2:**  
Facade service csak UI stílusokat takar; állapotkezelésre sosem használjuk.

**Hamis válasz 3:**  
Facade pattern tilos NgRx mellett; kettő egyszerre dupla store-t hoz létre.

### Kérdés 33: Mi a különbség a smart (container) és a dumb (presentational) komponens között?

**Hamis válasz 1:**  
Smart komponens csak `@Input()`-ot kap, dumb komponens pedig mindig service-ből tölt adatot.

**Hamis válasz 2:**  
A különbség csak fájlnév konvenció; technikailag minden komponens smart alapértelmezetten.

**Hamis válasz 3:**  
Dumb komponens nem lehet standalone; csak NgModule deklarált presentational elem lehet.

### Kérdés 34: Hogyan tesztelsz aszinkron kódot Angularban zone-alapú és zoneless környezetben?

**Hamis válasz 1:**  
Zone-alapú tesztnél sosem kell `fakeAsync` vagy `waitForAsync`; a Zone automatikusan flush-el mindent.

**Hamis válasz 2:**  
Zoneless tesztben kötelező a `setTimeout(0)` minden assertion előtt; `fixture.detectChanges()` nem elég.

**Hamis válasz 3:**  
Aszinkron teszt csak E2E-ben lehetséges; unit teszt mindig szinkron mockot igényel HTTP helyett.

### Kérdés 35: Mi a RouterTestingHarness (v14+), és miért jobb a kézi router-tesztelésnél?

**Hamis válasz 1:**  
A RouterTestingHarness csak integration teszthez való; unit tesztben tilos használni.

**Hamis válasz 2:**  
Harness manuálisan kell instantiate-olni `new RouterTestingHarness()` hívással, DI nélkül.

**Hamis válasz 3:**  
A harness nem támogat guard-okat; navigációs tesztnél mindig valódi browser history kell.

### Kérdés 36: Mi a `share` / `shareReplay` szerepe, és mire kell vigyázni?

**Hamis válasz 1:**  
A `shareReplay(1)` mindig lezárja a forrás subscription-t az első subscriber után.

**Hamis válasz 2:**  
Share operátor csak cold observable-t melegít fel; hot streamen hibát dob.

**Hamis válasz 3:**  
ShareReplay refCount nélkül sosem okoz memory leaket, mert a buffer automatikusan törlődik tab bezáráskor.

### Kérdés 37: Hogyan használd helyesen a `catchError` és a `retry` operátorokat?

**Hamis válasz 1:**  
A `retry` mindig végtelen újrapróbálkozást csinál delay nélkül, még 4xx hibáknál is.

**Hamis válasz 2:**  
CatchError csak sync kódban működik; Observable pipeline-ban compile error keletkezik.

**Hamis válasz 3:**  
Retry-t mindig a catchError után kell tenni, hogy a fallback érték is újrapróbálkozzon.

### Kérdés 38: Mi a secondary routing (named outlet), és mikor használjuk?

**Hamis válasz 1:**  
Named outlet csak egy lehet alkalmazásonként; több auxiliary route invalid konfiguráció.

**Hamis válasz 2:**  
Secondary routing URL-ben `(outlet:name)` zárójel helyett `@outlet` query paraméterrel jelenik meg.

**Hamis válasz 3:**  
Named outlet komponensei nem lazy load-olhatók; minden auxiliary route eager a main bundle-ben van.

### Kérdés 39: Mi a preloading strategy, és hogyan kapcsolódik a `@defer` prefetchhez?

**Hamis válasz 1:**  
Preloading strategy letiltja a lazy route chunkok betöltését, amíg a user nem kattint.

**Hamis válasz 2:**  
A `@defer prefetch` és a router preload ugyanaz a mechanizmus; mindkettő a main.js-be húzza a modult.

**Hamis válasz 3:**  
Preload csak hash routing esetén működik; PathLocationStrategy mellett nincs hatása.

### Kérdés 40: Mi az XSS, és hogyan véd az Angular alapból?

**Hamis válasz 1:**  
Angular alapértelmezetten nem sanitizál semmit; `[innerHTML]` raw HTML-t enged minden esetben.

**Hamis válasz 2:**  
XSS ellen elég a TypeScript strict mode; template injection automatikusan lehetetlen.

**Hamis válasz 3:**  
Angular csak CSS XSS ellen véd; JavaScript injectiont a Zone.js blokkolja runtime-ban.

### Kérdés 41: Mi a különbség a `@HostBinding`/`@HostListener` és a `host: {}` objektum között?

**Hamis válasz 1:**  
A `host: {}` csak JIT-ben működik; AOT buildben kötelező a dekorátoros megoldás.

**Hamis válasz 2:**  
HostListener nem tud DOM eseményt kezelni; csak Angular Output emitálásra való.

**Hamis válasz 3:**  
HostBinding és host objektum egyszerre használva dupla event bindot eredményez mindig.

### Kérdés 42: Mi az `exportAs`, és hogyan használjuk a sablonban?

**Hamis válasz 1:**  
Az `exportAs` csak pipe-okon működik; direktíva és komponens nem exportálható alias-szal.

**Hamis válasz 2:**  
Template-ben `#ref="exportName"` helyett `@exportName` szintaxist kell használni.

**Hamis válasz 3:**  
ExportAs alias automatikusan globális változó lesz az egész modulban, nem csak a template scope-ban.

### Kérdés 43: Mit jelent az `updateOn: 'blur' | 'submit'` a reactive formsban?

**Hamis válasz 1:**  
UpdateOn blur esetén minden keystroke-nál frissül a value és a validáció is azonnal.

**Hamis válasz 2:**  
Submit mód azt jelenti, hogy a form csak server response után validál újra.

**Hamis válasz 3:**  
UpdateOn csak template-driven form option; FormControl konstruktorban nem adható meg.

### Kérdés 44: Mi a Tailwind + Angular view encapsulation gyakori buktatója?

**Hamis válasz 1:**  
Tailwind classok automatikusan átmennek encapsulation alatt; `_ngcontent` attribútumot hozzáadnak minden utility-hez.

**Hamis válasz 2:**  
ViewEncapsulation.None mellett Tailwind nem működik, mert a purge törli a komponens stílusait.

**Hamis válasz 3:**  
Tailwind csak `:host` selectorban használható; template class attribútum tilos.

### Kérdés 45: Mire való a `:host` és a `:host-context()` a komponensstílusokban?

**Hamis válasz 1:**  
A `:host` a child komponens root elemére vonatkozik, nem a saját host elemre.

**Hamis válasz 2:**  
Host-context minden böngészőben deprecated; helyette mindig `@media` query kell theme-hez.

**Hamis válasz 3:**  
`:host` csak ShadowDom encapsulation mellett fordul le; Emulated módban figyelmen kívül marad.

### Kérdés 46: Mi a `track` / `trackBy` teljesítményhatása listáknál?

**Hamis válasz 1:**  
Track nélkül az Angular mindig DOM reuse-t csinál; track csak debug információt ad.

**Hamis válasz 2:**  
TrackBy kötelező minden listánál, különben a `@for` nem fordul le production buildben.

**Hamis válasz 3:**  
Track funkció lassít, mert minden ciklusban UUID-t generál minden sorhoz.

### Kérdés 47: Mi a monkey patching, és hol találkozol vele Angularban?

**Hamis válasz 1:**  
Monkey patching az Angular AOT compiler feature-e, ami runtime-ban patch-eli a template AST-t.

**Hamis válasz 2:**  
Zone.js nem patch-el semmit; csak Passive event listenereket regisztrál natívan.

**Hamis válasz 3:**  
Angular HttpClient közvetlenül a natív fetch-et használ patch nélkül; Zone.js csak change detectionhez kell.

### Kérdés 48: Mit csinál a TypeScript `satisfies` operátor?

**Hamis válasz 1:**  
A `satisfies` runtime type check-et végez, és hibát dob, ha az objektum nem felel meg az interfésznek.

**Hamis válasz 2:**  
Satisfies ugyanaz, mint a type assertion (`as`), csak rövidebb szintaxis.

**Hamis válasz 3:**  
Satisfies csak enum értékeknél használható; object literal-on compile error keletkezik.

### Kérdés 49: Hogyan kezeled a `null` és `undefined` értékeket Angular sablonban?

**Hamis válasz 1:**  
A `?.` optional chaining csak TypeScriptben létezik; Angular template nem támogatja.

**Hamis válasz 2:**  
Nullish coalescing (`??`) helyett mindig `||` operátort kell használni, mert a `??` deprecated template-ben.

**Hamis válasz 3:**  
Strict template check kikapcsolja a null ellenőrzést; `@if` nélkül minden undefined automatikusan üres string.

### Kérdés 50: Mi a TitleStrategy szerepe, és miért jobb, mint a kézi `title` állítgatás?

**Hamis válasz 1:**  
TitleStrategy csak meta description-t állít; document title-t továbbra is kézzel kell módosítani.

**Hamis válasz 2:**  
Kézi title állítás mindig sync a routerrel; TitleStrategy csak lazy route-oknál működik.

**Hamis válasz 3:**  
TitleStrategy és Title service ugyanaz; a strategy csak alias a deprecated Title API-hoz.

## Senior

### Kérdés 1: Mit jelent a zoneless change detection, és mit vált fel a Zone.js helyett?

**Hamis válasz 1:**  
A zoneless change detection Zone.js nélkül nem működik, ezért a `provideZonelessChangeDetection` automatikusan betölti a Zone.js lite verzióját a bundle-be.

**Hamis válasz 2:**  
Zone.js helyett a zoneless mód `setInterval`-lel pollolja a teljes komponensfát 16 ms-onként, így garantálja a frissítést minden aszinkron eseménynél.

**Hamis válasz 3:**  
A zoneless mód csak SSR mellett érhető el, mert kliens oldalon továbbra is a Zone.js patch-eli az összes DOM eseményt a change detection indításához.

### Kérdés 2: Miért lett az OnPush az alapértelmezett stratégia (v22+), és mi az Eager?

**Hamis válasz 1:**  
Az OnPush azért lett alapértelmezett v22-ben, mert a Default stratégia (Eager) már deprecated, és csak legacy NgModule-okban használható.

**Hamis válasz 2:**  
Az Eager stratégia az új ajánlott mód v22-től: minden tick-ben végigmegy a teljes fán, mert a signalok nem tudnak önmagukban frissíteni.

**Hamis válasz 3:**  
OnPush alapértelmezés mellett a komponensek csak akkor frissülnek, ha explicit `@Input()` referenciaváltás történik; a signal írás nem triggerel CD-t.

### Kérdés 3: Magyarázd el a signal reaktív kontextust és az `untracked` szerepét?

**Hamis válasz 1:**  
A reaktív kontextus csak `effect`-ben létezik; `computed`-ban minden olvasott signal automatikusan `untracked`-ként viselkedik.

**Hamis válasz 2:**  
Az `untracked` arra való, hogy a signal értékét permanensen kivegyük a dependency gráfból, így a signal soha többé nem fogja újraszámolni a computed-ot.

**Hamis válasz 3:**  
Reaktív kontextus nélkül is minden signal olvasás dependency-t regisztrál, még ha `untracked` blokkban történik is — az Angular v22-ben ezt szándékosan így tervezték.

### Kérdés 4: Mit jelent a glitch-free behavior a signaloknál?

**Hamis válasz 1:**  
A glitch-free behavior azt jelenti, hogy a signalok mindig szinkronban frissítik a DOM-ot a Zone.js tick ciklusával, különben flicker keletkezik.

**Hamis válasz 2:**  
Glitch-free módban a `computed` értékek aszinkron microtask sorban frissülnek, ezért a UI pillanatnyilag ellentmondásos állapotot mutathat — ezt hívjuk glitch-nek.

**Hamis válasz 3:**  
A glitch-free viselkedés kikapcsolható `provideExperimentalGlitchySignals()` hívással, ha gyorsabb, de következetlen UI frissítést szeretnénk.

### Kérdés 5: Hogyan tervezel signal graphot (állapot → derived → resource → UI)?

**Hamis válasz 1:**  
A signal graphban az UI réteg írja az állapot signalokat, a `computed` csak dekoráció, a resource pedig csak unit tesztekben használandó.

**Hamis válasz 2:**  
A helyes sorrend: UI → effect → resource → derived → állapot, mert az effect automatikusan triggereli az HTTP hívásokat minden render után.

**Hamis válasz 3:**  
Signal graph tervezésnél minden állapotot egyetlen root `BehaviorSubject`-be kell tenni, és onnan `toSignal`-lal áthidálni — így marad RxJS-kompatibilis.

### Kérdés 6: Mikor használd a `resource`, az `rxResource` és az `httpResource` API-t?

**Hamis válasz 1:**  
A `httpResource` csak GET kéréseket támogat, POST-hoz kötelező a nyers `HttpClient` maradnia signal appban is.

**Hamis válasz 2:**  
Az `rxResource` és a `resource` ugyanaz az API, csak az egyik Observable-t, a másik Promise-t vár — választás tisztán stíluskérdés.

**Hamis válasz 3:**  
Resource API-t csak zoneless appban szabad használni; Zone.js mellett automatikusan memory leak-et okoz, mert nem unsubscribe-ol.

### Kérdés 7: Mikor maradjon RxJS, és mikor válassz signalokat (interop döntés)?

**Hamis válasz 1:**  
Signal-first appban RxJS-t teljesen ki kell iktatni; a `toObservable` deprecated v22-től, mert a signalok lefedik az összes use case-t.

**Hamis válasz 2:**  
RxJS maradjon minden állapotkezelésre, signal csak a sablonban olvasásra — a kettő soha ne keveredjen ugyanabban a service-ben.

**Hamis válasz 3:**  
Interop döntés: ha van `debounceTime`, automatikusan signal; ha van `switchMap`, automatikusan RxJS — ezt az Angular CLI dönti el buildkor.

### Kérdés 8: Hogyan építesz fel egy production typeahead streamet higher-order mappinggel (cancel + error)?

**Hamis válasz 1:**  
Production typeahead-nél `mergeMap`-et használunk, hogy minden korábbi kérés is lefusson, így garantált a teljes találati lista.

**Hamis válasz 2:**  
A typeahead streamben `exhaustMap` a helyes választás, mert így a legutolsó kérés mindig felülírja az összes előzőt anélkül, hogy cancel történne.

**Hamis válasz 3:**  
Hibakezeléshez a `catchError`-t a `subscribe`-ban kell hagyni nested módon; a stream szintű `catchError` megszakítja a teljes typeahead-et.

### Kérdés 9: Mi a `linkedSignal` (v19/v20), és milyen use case-re való?

**Hamis válasz 1:**  
A `linkedSignal` két független signal szinkron összekapcsolására való, és automatikusan kétirányú adatkötést hoz létre parent-child között.

**Hamis válasz 2:**  
A `linkedSignal` fő use case-e, hogy Observable streamet helyettesítsen — belsőleg Subject-ként működik RxJS wrapper nélkül.

**Hamis válasz 3:**  
LinkedSignal csak forms-ban használható: a form control értékét köti a backend response signalhoz, és minden blur-nál POST-ol.

### Kérdés 10: Mikor válassz NgRx Signal Store-t a classic NgRx Store helyett?

**Hamis válasz 1:**  
NgRx Signal Store-t csak akkor válaszd, ha már van classic NgRx Store — a Signal Store csak wrapper a meglévő reducer köré.

**Hamis válasz 2:**  
Classic NgRx mindig jobb nagy appban, mert a Signal Store nem támogat entity adapter-t és devtools integrációt.

**Hamis válasz 3:**  
Signal Store-t válaszd, ha Redux DevTools nélkül akarsz dolgozni és minden side effectet közvetlenül a komponensben kezelsz.

### Kérdés 11: Mi az `rxMethod` a Signal Store-ban, és miért jobb a nyers subscribe-nál?

**Hamis válasz 1:**  
Az `rxMethod` a Signal Store-ban szinkron metódus, ami belsőleg `setTimeout`-ot használ async műveletekhez — subscribe nem kell.

**Hamis válasz 2:**  
Az `rxMethod` rosszabb a nyers subscribe-nál, mert nem tudja kezelni a stream cancellation-t route váltáskor.

**Hamis válasz 3:**  
RxMethod helyett mindig `effect`-et használj HTTP hívásokra a store-ban, mert az effect automatikusan unsubscribe-ol destroy-kor.

### Kérdés 12: Miért érdemes entity managementet / normalizálást használni Signal Store-ban?

**Hamis válasz 1:**  
Entity management Signal Store-ban felesleges, mert a signalok immutable-k, így duplikált ID nem okozhat problémát a listában.

**Hamis válasz 2:**  
Normalizálást csak classic NgRx-ban érdemes csinálni; Signal Store-ban minden entitást külön fájlban tárolunk duplicate state-tel.

**Hamis válasz 3:**  
Entity adapter helyett `@for`-nál elég a `track $index`, mert a Signal Store automatikusan deduplikál ID alapján.

### Kérdés 13: Mi az incremental hydration SSR mellett, és miért jobb a teljes hydratációnál?

**Hamis válasz 1:**  
Az incremental hydration lassabb, mint a teljes hydratáció, mert minden szekciót külön bundle-ben tölt le a kliens.

**Hamis válasz 2:**  
Incremental hydration azt jelenti, hogy az egész HTML egyszerre hydratálódik, de a CSS fokozatosan töltődik be lazy módon.

**Hamis válasz 3:**  
Teljes hydratáció mindig jobb UX-et ad, mert az incremental csak akkor működik, ha a user nem kattint az oldal betöltése előtt.

### Kérdés 14: Mi az Event Replay a hydratációnál, és milyen UX problémát old meg?

**Hamis válasz 1:**  
Event Replay az SSR során generált eseményeket a szerveren futtatja újra, mielőtt a HTML kimegy a hálózatra.

**Hamis válasz 2:**  
Event Replay kikapcsolja a hydration-t, és helyette teljes CSR-re vált, ha a user a hydratáció előtt kattintott.

**Hamis válasz 3:**  
Event Replay csak touch eseményekre vonatkozik; click és keyboard események elvesznek hydratáció közben, ez known limitation.

### Kérdés 15: Hybrid rendering mellett mikor válassz SSR-t, SSG/prerender-t vagy CSR-t?

**Hamis válasz 1:**  
Hybrid renderingnél CSR mindig jobb SEO-ra, mert a Google bot nem futtat JavaScriptet, így az SSR felesleges overhead.

**Hamis válasz 2:**  
SSG/prerender csak marketing oldalakra való; B2B appban mindig CSR, mert a prerender nem tud autentikált tartalmat generálni.

**Hamis válasz 3:**  
SSR-t csak akkor válaszd, ha nincs backend API — különben a dupla adatlekérés (server + client) mindig rosszabb teljesítmény.

### Kérdés 16: Hogyan csökkented a main chunk méretét Angular alkalmazásban?

**Hamis válasz 1:**  
A main chunk méretét úgy csökkented, hogy minden lazy route-ot visszateszel a main bundle-be, így kevesebb HTTP kérés lesz.

**Hamis válasz 2:**  
A `providedIn: 'root'` service-ek mind tree-shake-elhetők automatikusan, ezért a service méret nem számít a bundle-be.

**Hamis válasz 3:**  
CommonJS modulok kisebb bundle-t adnak ESM-nél, ezért érdemes visszaváltani CJS-re a build optimalizálásához.

### Kérdés 17: Hogyan keresel performance bottlenecket Angularban a gyakorlatban?

**Hamis válasz 1:**  
Performance bottlenecket úgy keresed, hogy `console.time`-ot teszel minden lifecycle hook-ba, és a leghosszabbat optimalizálod.

**Hamis válasz 2:**  
Az Angular DevTools Performance tab csak production buildben működik; development módban mindig hamis lassúságot mutat.

**Hamis válasz 3:**  
Change detection problémát úgy találod meg, hogy minden komponenst Default stratégára állítasz — ha gyorsabb lesz, OnPush volt a gond.

### Kérdés 18: Hogyan diagnosztizálsz memory leaket Angular frontendben?

**Hamis válasz 1:**  
Memory leak diagnosztikánál elég a `ngOnDestroy`-ban `console.log` — ha lefut, nincs leak.

**Hamis válasz 2:**  
Az async pipe mindig leak-et okoz zoneless appban, mert nem unsubscribe-ol automatikusan.

**Hamis válasz 3:**  
Memory leaket csak E2E tesztekkel lehet megbízhatóan találni; Chrome DevTools heap snapshot frontendben használhatatlan.

### Kérdés 19: Milyen frontend biztonsági rétegeket alkalmazol XSS ellen (CSP, Trusted Types, sanitization)?

**Hamis válasz 1:**  
XSS ellen elég az Angular built-in sanitization — CSP és Trusted Types felesleges overhead production-ben.

**Hamis válasz 2:**  
CSP `unsafe-inline` script-src mellett is teljes védelmet ad, ha Angular AOT-ot használsz.

**Hamis válasz 3:**  
Trusted Types kikapcsolható `DomSanitizer.bypassSecurityTrustHtml` globális wrapperrel minden template-ben.

### Kérdés 20: Hogyan építesz modern auth mintát guard + interceptor + RedirectCommand kombinációval?

**Hamis válasz 1:**  
Modern auth minta: a guard csak a token létezését ellenőrzi, az interceptor pedig minden 401-et automatikusan redirectel loginra `window.location`-nel.

**Hamis válasz 2:**  
A `RedirectCommand`-ot csak SSR-ben használhatod; kliens oldalon helyette `Router.navigate` a standard.

**Hamis válasz 3:**  
Auth flow-ban a guard és interceptor ugyanazt a service-t hívja párhuzamosan minden navigációnál — így garantált a friss token.

### Kérdés 21: Mikor használd az `afterRender` / `afterNextRender` API-t `ngAfterViewInit` helyett?

**Hamis válasz 1:**  
Az `afterRender` szinkron, még mielőtt a böngésző paintelne — DOM méretezéshez ez gyorsabb, mint `ngAfterViewInit`.

**Hamis válasz 2:**  
`ngAfterViewInit` mindig preferred v22-től, mert az `afterRender` deprecated SSR hydration miatt.

**Hamis válasz 3:**  
AfterNextRender csak zoneless appban érhető el; Zone.js mellett automatikusan `ngAfterViewInit`-re esik vissza.

### Kérdés 22: Miért érdemes route-szintű `providers`-t használni feature service-ekhez?

**Hamis válasz 1:**  
Route-szintű `providers` mindig singleton root scope-ot ad — ugyanaz a service instance az egész appban marad.

**Hamis válasz 2:**  
Feature service-eket soha ne tedd route providers-be, mert lazy load mellett a service nem destroy-olódik route leave-kor.

**Hamis válasz 3:**  
Route providers csak akkor működik, ha NgModule-ot használsz — standalone route-oknál kötelező `providedIn: 'root'`.

### Kérdés 23: Mit jelent a vertical slicing / modulith architektúra Angularban?

**Hamis válasz 1:**  
Vertical slicing azt jelenti, hogy minden feature külön repository-ban él — monorepo ellentéte.

**Hamis válasz 2:**  
Modulith architektúrában minden feature ugyanabba a shared `CoreModule`-ba importál, így egy helyen van az összes dependency.

**Hamis válasz 3:**  
Vertical slice = horizontal layer (components, services, models külön mappák) — ez az Angular hivatalos ajánlása.

### Kérdés 24: Hogyan jelenik meg a SOLID elv a napi Angular kódban, és milyen példákat mondanál?

**Hamis válasz 1:**  
SOLID-ből Angularban csak az S releváns: egy komponens = egy HTML fájl, több felelősség tilos.

**Hamis válasz 2:**  
Dependency Inversion azt jelenti, hogy minden service `@Injectable({ providedIn: 'root' })` legyen — interface injection felesleges.

**Hamis válasz 3:**  
Open/Closed elv: soha ne módosíts meglévő komponenst, mindig copy-paste-eld az új feature-höz.

### Kérdés 25: Hogyan alkalmazod az Adapter, Strategy és Facade mintákat Angularban?

**Hamis válasz 1:**  
Adapter minta Angularban: minden HTTP response-t közvetlenül a komponensben map-elj, külön adapter layer felesleges.

**Hamis válasz 2:**  
Strategy minta = `@switch` a template-ben — service szintű strategy pattern overengineering Angularban.

**Hamis válasz 3:**  
Facade service mindig anti-pattern, mert duplikálja a store logikát; közvetlen store injektálás a helyes út minden komponensben.

### Kérdés 26: Mi a különbség a CDK a11y primitívek és az Angular Aria (v21+) között?

**Hamis válasz 1:**  
Az Angular Aria (v21+) lecseréli a CDK a11y primitíveket — a CDK `@angular/cdk/a11y` deprecated v22-től.

**Hamis válasz 2:**  
CDK a11y és Angular Aria ugyanaz a package, csak más import path — funkcionálisan identikusak.

**Hamis válasz 3:**  
Angular Aria csak SSR appban működik; CSR-ben maradjon a natív HTML ARIA attribútumok manuális kezelése.

### Kérdés 27: Milyen i18n stratégiákat ismersz Angularban, és mik a trade-offok?

**Hamis válasz 1:**  
i18n-nél a runtime fordítás mindig jobb, mert build-time `$localize` nem támogatja a pluralization-t.

**Hamis válasz 2:**  
Egy locale = egy külön deploy; shared bundle több nyelvvel nem tree-shake-elhető, ezért tilos monorepóban.

**Hamis válasz 3:**  
ngx-translate a hivatalos Angular i18n megoldás v22-től — a `$localize` csak legacy támogatás.

### Kérdés 28: Milyen döntési szempontok vannak PWA / Service Worker bevezetésénél?

**Hamis válasz 1:**  
PWA Service Worker minden B2B appban kötelező, mert offline mód nélkül nem deployolható production-be.

**Hamis válasz 2:**  
Service Worker automatikusan cache-eli az összes API response-t — stale data nem probléma, mert a SW frissít háttérben.

**Hamis válasz 3:**  
PWA bevezetésnél elég a `ng add @angular/pwa` — utána nincs szükség cache stratégia döntésre vagy verziózásra.

### Kérdés 29: Mikor indokolt Web Worker használata Angular alkalmazásban?

**Hamis válasz 1:**  
Web Worker minden HTTP hívást át kell helyezni workerbe — különben a main thread blokkolódik.

**Hamis válasz 2:**  
Angular nem támogat Web Worker-t hivatalosan; `@angular/web-worker` package nem létezik, custom webpack kell.

**Hamis válasz 3:**  
Web Worker csak akkor indokolt, ha a komponens több mint 500 sor — különben a bootstrap overhead nagyobb, mint a nyereség.

### Kérdés 30: Mit ad a HttpClient `withFetch` és a keepalive opció?

**Hamis válasz 1:**  
A `withFetch` kikapcsolja az interceptor chain-t, mert a Fetch API nem kompatibilis az Angular HTTP interceptors-szal.

**Hamis válasz 2:**  
Keepalive opció azt jelenti, hogy a HTTP kapcsolat soha nem záródik be — minden kérés ugyanazt a socketet használja örökre.

**Hamis válasz 3:**  
HttpClient alapból Fetch-et használ v18-tól — a `withFetch()` csak visszavált XHR-re legacy libek miatt.

### Kérdés 31: Hogyan tervezel globális hibakezelést correlation ID-val?

**Hamis válasz 1:**  
Globális hibakezelésnél a correlation ID-t a frontend generálja és soha nem küldi el a backendnek — így marad client-only trace.

**Hamis válasz 2:**  
Correlation ID-t localStorage-ban tároljuk évekig, hogy ugyanaz az ID legyen minden session-ben ugyanannál a usernél.

**Hamis válasz 3:**  
Error handler-ben elég `console.error` — production monitoring (Sentry, etc.) automatikusan összekapcsol correlation ID nélkül is.

### Kérdés 32: Mi a különbség az ElementInjector és az EnvironmentInjector között?

**Hamis válasz 1:**  
ElementInjector és EnvironmentInjector ugyanaz — a különbség csak naming, v19 óta merge-elték őket.

**Hamis válasz 2:**  
EnvironmentInjector csak SSR-ben létezik; kliens oldalon minden injektálás ElementInjector-on megy.

**Hamis válasz 3:**  
Route-level provider az EnvironmentInjector-ba kerül, de `providedIn: 'root'` az ElementInjector rootjára — ezért ütköznek lazy route-oknál.

### Kérdés 33: Hogyan hozol létre dinamikus komponenst a modern Angular API-val?

**Hamis válasz 1:**  
Dinamikus komponens modern API: `ComponentFactoryResolver` marad az egyetlen támogatott út v22-ig is.

**Hamis válasz 2:**  
`ViewContainerRef.createComponent` nem működik standalone komponensekkel — NgModule kell hozzá.

**Hamis válasz 3:**  
Dinamikus komponenshez mindig `@ViewChild` template reference kell; programmatikus létrehozás deprecated.

### Kérdés 34: Mit változtatnak a Signal Forms (v21+/v22) a reactive forms-hoz képest?

**Hamis válasz 1:**  
Signal Forms teljesen lecseréli a reactive forms-ot — `FormGroup` deprecated v22 official release-től.

**Hamis válasz 2:**  
Signal Forms csak template-driven forms wrapper; a validáció továbbra is `Validators` array a komponensben.

**Hamis válasz 3:**  
Signal Forms és reactive forms nem használható ugyanabban az appban — migrációkor big-bang kötelező egy éjszaka alatt.

### Kérdés 35: Mit jelent a csapatnak, hogy a Vitest lett az alapértelmezett tesztkeretrendszer (v21)?

**Hamis válasz 1:**  
Vitest alapértelmezés azt jelenti, hogy Karma automatikusan fut minden `ng test`-nél is — párhuzamos futás.

**Hamis válasz 2:**  
Vitest nem támogatja az Angular TestBed-et, ezért unit tesztekhez továbbra is Karma a hivatalos út.

**Hamis válasz 3:**  
Vitest csak E2E-hez való; component tesztekhez Jest maradt az ajánlott v21-ben is.

### Kérdés 36: Mit tegyél E2E (Playwright) tesztbe, és mit hagyj unit/component szinten?

**Hamis válasz 1:**  
E2E-be minden unit tesztet is át kell írni Playwright-ba — duplikált coverage jobb, mint hiányzó.

**Hamis válasz 2:**  
Unit tesztben tesztelj routing guard logikát is teljes RouterModule importtal — gyorsabb, mint E2E.

**Hamis válasz 3:**  
E2E teszt felesleges, ha van 100% unit coverage — a Playwright csak visual regression-re való.

### Kérdés 37: Mire való a `provideAppInitializer` és az environment initializer?

**Hamis válasz 1:**  
`provideAppInitializer` helyettesíti az `APP_INITIALIZER`-t, de csak zoneless appban működik — Zone.js mellett crash-el.

**Hamis válasz 2:**  
Environment initializer csak `environment.ts`-ben hívható — runtime-ban nem injektálható.

**Hamis válasz 3:**  
App initializer-ben HTTP hívás tilos, mert bootstrap előtt nincs HttpClient — mindig hardcoded config kell.

### Kérdés 38: Hogyan kerülöd el a property drillinget DI tokennel, CSS változóval vagy content projectionnel?

**Hamis válasz 1:**  
Property drilling elkerülésére mindig global singleton service a megoldás — CSS változó és content projection overkill.

**Hamis válasz 2:**  
CSS custom property nem örökölődik shadow DOM-on — content projectionnel mindig `@Input()` chain kell 5+ szinten.

**Hamis válasz 3:**  
DI token property drillingre: `@Host()` decoratorral minden child automatikusan megkapja a parent service-t injection nélkül.

### Kérdés 39: Hogyan építesz vegyes SCSS + design token + Tailwind stratégiát?

**Hamis válasz 1:**  
SCSS + Tailwind + token: Tailwind utility class minden design token felett — token csak dokumentáció, runtime-ban nem kell.

**Hamis válasz 2:**  
Design tokeneket SCSS `$variable`-ként tároljuk, mert CSS custom property nem működik `:host`-ban.

**Hamis válasz 3:**  
Tailwind és SCSS együtt tilos ugyanabban a komponensben — view encapsulation miatt conflict garantált.

### Kérdés 40: Mikor válassz `@container` query-t media query helyett?

**Hamis válasz 1:**  
`@container` query mindig helyettesíti a media query-t — viewport breakpointok már deprecated CSS-ben.

**Hamis válasz 2:**  
Container query csak Grid layouttal működik; Flexbox container nem támogatott `@container`-t.

**Hamis válasz 3:**  
Media query jobb komponens-szintű responsivitásra, mert a `@container` csak root elemre vonatkozik.

### Kérdés 41: Miért vezessük ki a CommonJS (CJS) függőségeket az Angular buildből?

**Hamis válasz 1:**  
CommonJS függőségek kisebb bundle-t adnak ESM-nél tree-shaking miatt — ezért érdemes CJS-re maradni.

**Hamis válasz 2:**  
Az Angular build automatikusan CJS-re konvertál minden ESM importot — a `allowedCommonJsDependencies` felesleges config.

**Hamis válasz 3:**  
CJS kivezetés csak Node.js backendre vonatkozik; browser bundle-ben a require() gyorsabb, mint import.

### Kérdés 42: Hogyan debuggolsz Angular runtime error kódokat (NG0xxx)?

**Hamis válasz 1:**  
NG0xxx hibakódok csak development buildben jelennek meg — production-ben generic „Application error" van.

**Hamis válasz 2:**  
NG01203 azt jelenti, hogy hiányzik a `standalone: true` — minden NG0xxx hiba ugyanerre redukálható.

**Hamis válasz 3:**  
Runtime error debug: `ng build --verbose` megmutatja a pontos template sort production bundle-ben is.

### Kérdés 43: Mit tud az új `animate.enter` / `animate.leave` animációs API?

**Hamis válasz 1:**  
`animate.enter` / `animate.leave` csak CSS `@keyframes`-re épül — JavaScript animation controller deprecated.

**Hamis válasz 2:**  
Az új animációs API csak `@if` / `@for` mellett működik; `*ngIf`-nél a régi `@angular/animations` marad kötelező.

**Hamis válasz 3:**  
Animate.enter automatikusan hozzáad `prefers-reduced-motion: no-preference` override-ot — accessibility skip.

### Kérdés 44: Hogyan kapcsolod be a Router view transition animációkat, és mire való?

**Hamis válasz 1:**  
Router view transitions csak Chrome-ban működnek — más böngészőben automatikusan kikapcsolódnak és hibát dobnak.

**Hamis válasz 2:**  
View transition animációhoz `@angular/animations` package kötelező parallelben — a Router API önmagában nem elég.

**Hamis válasz 3:**  
View transitions mindig lassítják a navigációt — csak marketing oldalakon érdemes, B2B appban tilos.

### Kérdés 45: Hogyan állítasz fel korszerű code quality toolingt (ESLint flat config, Prettier, Husky)?

**Hamis válasz 1:**  
ESLint flat config nem kompatibilis Angular projekttel — maradjon `.eslintrc.json` v22-ig is.

**Hamis válasz 2:**  
Prettier és ESLint ugyanazt csinálja — elég az egyik, dupla formázás CI időpocsékolás.

**Hamis válasz 3:**  
Husky pre-commit hook production buildet futtat minden commitnál — így garantált, hogy nem megy ki broken kód.

### Kérdés 46: Mikor használd a `detectChanges()`-t és mikor a `markForCheck()`-et?

**Hamis válasz 1:**  
`detectChanges()` csak Default stratégia mellett működik — OnPush-nál mindig `markForCheck()` kell helyette.

**Hamis válasz 2:**  
MarkForCheck azonnal futtat CD-t; detectChanges csak jelzi a következő Zone tick-et — ez a fő különbség.

**Hamis válasz 3:**  
Zoneless appban mindkettő deprecated — helyette `ApplicationRef.tick()` manuálisan minden signal write után.

### Kérdés 47: Mikor szabad a `DomSanitizer.bypassSecurityTrust*` metódusokat használni?

**Hamis válasz 1:**  
DomSanitizer bypass mindig biztonságos, ha a backend megbízható — Angular dokumentáció is ezt ajánlja first choice-ként.

**Hamis válasz 2:**  
BypassSecurityTrustHtml csak unit tesztben használható — production template-ben compile error.

**Hamis válasz 3:**  
Trusted HTML-hez elég innerHTML binding `[innerHTML]` nélkül sanitizer — Angular automatikusan bypass-ol megbízható forrást.

### Kérdés 48: Miért érdemes feature flaget `canMatch`-csel és lazy load-dal kombinálni?

**Hamis válasz 1:**  
Feature flag + canMatch: a canMatch csak akkor fut, ha a route már betöltődött — lazy load után ellenőriz.

**Hamis válasz 2:**  
Feature flag-et URL query paramban tároljuk — canMatch nélkül is elég, mert a router automatikusan cache-eli.

**Hamis válasz 3:**  
Lazy load és feature flag ellentétes — flag off esetén is be kell tölteni a chunkot, csak ne rendereljük a komponenst.

### Kérdés 49: Mikor legyen az URL a source of truth a UI állapotra (filter, pagination)?

**Hamis válasz 1:**  
URL soha ne legyen source of truth — filter és pagination mindig component state-ben, mert query param lassítja a routert.

**Hamis válasz 2:**  
Pagination URL-ben csak SEO miatt kell — B2B appban sessionStorage a helyes tároló UI állapotra.

**Hamis válasz 3:**  
Router state és URL sync automatikus minden Angular appban — kézi `queryParams` kezelés anti-pattern v15-től.

### Kérdés 50: Hogyan terveznél Angular upgrade stratégiát v14-ről v20+/v22 felé?

**Hamis válasz 1:**  
Upgrade v14-ről v20+: big-bang egy hétvégén, lépésenkénti migráció nem támogatott Angular CLI által.

**Hamis válasz 2:**  
Először RxJS 8, aztán Angular — fordítva mindig dependency conflict.

**Hamis válasz 3:**  
v14-ről v20+ upgrade: skip v15-v19, közvetlenül v20 CLI `ng update` egy parancs — intermediate verziók feleslegesek.

## Staff

### Kérdés 1: Hogyan döntesz micro-frontend mellett vagy ellen egy szervezetben?

**Hamis válasz 1:**  
Micro-frontend mindig jobb nagy szervezetben — a modulith csak kis csapatoknak való, 5+ teamnél kötelező az MFE.

**Hamis válasz 2:**  
MFE döntés purely technikai: ha Angular 17+, automatikusan Native Federation — szervezeti tényező irreleváns.

**Hamis válasz 3:**  
Ellene szól az MFE csak bundle size — deploy függetlenség és ownership nem valós előny runtime-ban.

### Kérdés 2: Milyen fő kockázatai vannak a Native Federation shell/remote felállásnak?

**Hamis válasz 1:**  
Native Federation fő kockázata a webpack 4 vs 5 — Angular verzió skew másodlagos, mert shared singleton automatikus.

**Hamis válasz 2:**  
Shell/remote felállásnál a legnagyobb probléma a CSS class name ütközés — RxJS duplikáció nem fordul elő shared mappinggel.

**Hamis válasz 3:**  
Native Federation-ben a remote-ok nem függnek a shell verziójától — semver csak dokumentációs, runtime compat mindig garantált.

### Kérdés 3: Milyen kommunikációs mintákat ajánlasz micro-frontendek között, és melyeket kerülnéd?

**Hamis válasz 1:**  
Ajánlott kommunikáció MFE-k között: shared mutable global NgRx store minden remote-ban — egyszerű, gyors.

**Hamis válasz 2:**  
Custom events helyett window.postMessage minden irányba broadcast — explicit contract felesleges overhead.

**Hamis válasz 3:**  
URL state megosztás anti-pattern MFE-ben — minden remote saját router instance-t használ teljesen izoláltan.

### Kérdés 4: Mikor érdemes Web Components / Angular Elements absztrakciót használni MFE helyett vagy mellett?

**Hamis válasz 1:**  
Angular Elements minden MFE feature-hez kötelező wrapper — Native Federation nélkül nem deployolható remote.

**Hamis válasz 2:**  
Web Components csak React hosthoz való — Angular hostba beágyazott custom element nem kap DI-t, ezért useless.

**Hamis válasz 3:**  
CreateCustomElement zero bootstrap cost — ugyanolyan gyors, mint natív HTML elem, overhead mítosz.

### Kérdés 5: Hogyan kényszeríted ki az Nx monorepo library határait, hogy ne csak dokumentáció legyen az architektúra?

**Hamis válasz 1:**  
Nx library határok kikényszerítése: README-ben dokumentált szabályok elég — enforce-module-boundaries túl szigorú CI-n.

**Hamis válasz 2:**  
Deep import engedélyezése gyorsabb fejlesztés — public API `index.ts` csak open source library-khoz való.

**Hamis válasz 3:**  
Project tag-ek dekoratívak Nx-ben — a dependency graph nem használja őket boundary check-hez.

### Kérdés 6: Mit jelent az „affected” elv CI/CD-ben Angular monorepónál, és miért kritikus?

**Hamis válasz 1:**  
Affected elv: minden PR-nél teljes monorepo build — így garantált, hogy semmi nem tör el rejtett dependency-ben.

**Hamis válasz 2:**  
Nx affected csak local dev feature — CI-ben mindig `run-many --target=build --all` a best practice.

**Hamis válasz 3:**  
Remote cache ellentétes az affected elvvel — cache miatt nem fut le a valódi affected graph.

### Kérdés 7: Hogyan vezetnél be zoneless change detectiont egy nagy legacy Angular appban?

**Hamis válasz 1:**  
Zoneless legacy bevezetés: első lépés `zone.js` azonnali eltávolítása package.json-ból — utána fixeljük a bugokat.

**Hamis válasz 2:**  
Legacy appban zoneless csak SSR route-okon — CSR marad Zone.js-en örökre, hybrid a hivatalos migrációs path.

**Hamis válasz 3:**  
Harmadik féltől származó libek automatikusan zoneless-kompatibilisek v18+ — audit felesleges.

### Kérdés 8: Kötelező-e az SSR minden B2B Angular alkalmazásra, és hogyan indokolnád a platform döntést?

**Hamis válasz 1:**  
SSR kötelező minden B2B Angular appban — Google B2B keresés is JavaScript nélkül indexel.

**Hamis válasz 2:**  
B2B platform döntés: CSR mindig olcsóbb infra — SSR csak marketing miatt, product appban soha.

**Hamis válasz 3:**  
SSR és B2B: autentikált tartalom prerender-elhető build időben statikus HTML-ként — runtime SSR felesleges.

### Kérdés 9: Hogyan governance-elnéd a design system tokeneket, SCSS-t és komponens API-t több termékcsapatnál?

**Hamis válasz 1:**  
Design system governance: minden csapat saját SCSS fork — central token repo lassítja a delivery-t.

**Hamis válasz 2:**  
Komponens API változtatás semver nélkül OK, ha internal monorepo — csak npm publish-nál kell semver.

**Hamis válasz 3:**  
Figma token sync manuális copy-paste quarterly — automatizálás túl drága kis szervezetnek is.

### Kérdés 10: Hogyan mérnéd és javítanád a Core Web Vitals-t egy Angular appban?

**Hamis válasz 1:**  
Core Web Vitals javítás: minden metrikát unit tesztben assert-elj — Lighthouse CI felesleges.

**Hamis válasz 2:**  
LCP javítás: minden képet inline base64-ként a main bundle-be — kevesebb request = jobb LCP.

**Hamis válasz 3:**  
INP csak backend latency — frontend optimalizálás nem befolyásolja, mert server response time a bottleneck.

### Kérdés 11: Forensic architecture analysis során mit nézel meg először egy ismeretlen Angular monorepóban?

**Hamis válasz 1:**  
Forensic analysis első lépés: `git log --oneline` — architecture-t commit history-ból rekonstruáljuk.

**Hamis válasz 2:**  
Ismeretlen monorepónál először a README — ha nincs, nincs értelme a kódot nézni.

**Hamis válasz 3:**  
Dependency graph helyett node_modules méret alapján döntünk — nagyobb folder = rosszabb architecture.

### Kérdés 12: Hogyan csökkented a backend API törő változtatásainak hatását a frontendeken?

**Hamis válasz 1:**  
Backend API breaking change hatása: frontend semver lock a backend minor verzióra — automatikus compat.

**Hamis válasz 2:**  
OpenAPI diff CI-ben felesleges — TypeScript strict mode elkap minden breaking change-et compile time-ban.

**Hamis válasz 3:**  
API változásnál mindig big-bang frontend deploy ugyanarra az időpontra — feature flag API versioning helyett.

### Kérdés 13: Hogyan alakítasz ki multi-team code ownershipot Angular monorepóban?

**Hamis válasz 1:**  
Multi-team ownership: minden library shared, mindenki commitolhat bármit — code review elég boundary.

**Hamis válasz 2:**  
CODEOWNERS fájl anti-pattern monorepóban — csak GitHub Enterprise feature, Nx-ben nincs equivalent.

**Hamis válasz 3:**  
Team boundary = folder név — `libs/team-a` és `libs/team-b` között import szabad, ha ugyanaz a sprint.

### Kérdés 14: Mikor választanád szervezetileg a classic NgRx Store-t a Signal Store helyett?

**Hamis válasz 1:**  
Org-szinten classic NgRx mindig jobb Signal Store-nál — DevTools és middleware ecosystem miatt.

**Hamis válasz 2:**  
Signal Store csak POC-hoz — production state 100+ action-nél classic NgRx kötelező.

**Hamis válasz 3:**  
Classic NgRx választás akkor is, ha nincs async side effect — reducer overhead elhanyagolható.

### Kérdés 15: Hogyan kodifikálnád a RxJS higher-order mapping sztenderdet a csapatban?

**Hamis válasz 1:**  
Higher-order mapping sztenderd: minden async művelet `mergeMap` — egyszerű, predictable, cancel nem kell.

**Hamis válasz 2:**  
switchMap tilos csapatban — elveszti a párhuzamos requesteket, mindig data loss.

**Hamis válasz 3:**  
RxJS mapping döntés: junior `mergeMap`, senior `concatMap`, staff `exhaustMap` — rang alapján fix operátor.

### Kérdés 16: Mit jelent az error budget / reliability a frontend oldalon, és milyen metrikákat követsz?

**Hamis válasz 1:**  
Frontend error budget = 0 failed unit test release előtt — SLO és RUM metrika irreleváns frontendre.

**Hamis válasz 2:**  
Reliability frontenden: 100% uptime a CDN-en — app bundle hiba nem számít error budget-be.

**Hamis válasz 3:**  
Error budget csak backend SRE domain — frontend csak „best effort" deploy, metrika nincs.

### Kérdés 17: Mit tartalmaznál egy SPA security review checklistben release előtt?

**Hamis válasz 1:**  
SPA security checklist: elég a `npm audit` clean — XSS és CSP külön review felesleges Angular mellett.

**Hamis válasz 2:**  
Release előtt manual penetration test minden PR-en — automatizált security scan nem talál XSS-et.

**Hamis válasz 3:**  
Security review: localStorage-ban token OK, ha HTTPS — httpOnly cookie csak legacy backend miatt kell.

### Kérdés 18: Hogyan skálázod az i18n folyamatot 10+ locale esetén?

**Hamis válasz 1:**  
10+ locale: egy bundle minden nyelvvel — lazy locale chunk anti-pattern, több request rosszabb UX.

**Hamis válasz 2:**  
i18n skálán: fordítást runtime JSON fetch-sel — build-time `$localize` nem skálázódik 5+ locale fölött.

**Hamis válasz 3:**  
Locale fallback chain: ha hiányzik fordítás, üres string — angol fallback automatikus Angular-ban nincs, ne implementáld.

### Kérdés 19: Milyen akadálymentességi (a11y) acceptance criteria-t tennél a termék Definition of Done-jába, és hogyan ellenőriznéd őket?

**Hamis válasz 1:**  
A11y DoD: manual „tab through once" elég — axe-core CI felesleges, false positive sok.

**Hamis válasz 2:**  
WCAG AA kötelező csak public sector — B2B SaaS-nál nincs legal requirement, skip acceptable.

**Hamis válasz 3:**  
Acceptance criteria: színkontraszt 3:1 minimum — WCAG 4.5:1 túl szigorú design-hoz.

### Kérdés 20: Hogyan kényszeríted ki a bundle size budgetet a CI-ben, hogy performance regresszió ne csússzon be?

**Hamis válasz 1:**  
Bundle budget CI: csak warning, soha ne fail — performance regressió post-release hotfix gyorsabb.

**Hamis válasz 2:**  
Budget-et main bundle initial size-ra állítjuk 5 MB-ra — lazy chunk nem számít.

**Hamis válasz 3:**  
Webpack bundle analyzer helyett `du -sh dist/` — ha nem nőtt a folder, nincs regressió.

### Kérdés 21: Hogyan vezetnél szervezeti migrációs programot NgModule-ról standalone-re?

**Hamis válasz 1:**  
NgModule → standalone migráció: egy éjszakai script minden fájlt konvertál — manuális review felesleges.

**Hamis válasz 2:**  
Standalone után NgModule import még yearsig supported — fokozatos migráció nem kell, várható breaking change nincs.

**Hamis válasz 3:**  
Migrációs program: először minden feature module-ot lazy NgModule-ként tartunk — standalone csak leaf component.

### Kérdés 22: Hogyan vezetnél be signal-first architektúrát legacy RxJS-heavy appba?

**Hamis válasz 1:**  
Signal-first legacy: azonnali rewrite minden service signalra — RxJS delete package.json-ból day one.

**Hamis válasz 2:**  
Legacy RxJS-heavy appban signal csak UI binding — service layer RxJS marad örökre, hybrid végállapot.

**Hamis válasz 3:**  
Migráció: `BehaviorSubject` → `signal` 1:1 rename — API ugyanaz, csak import path változik.

### Kérdés 23: Hogyan döntesz `@defer`, lazy route és micro-frontend között (döntési mátrix)?

**Hamis válasz 1:**  
Döntési mátrix: MFE > lazy route > @defer mindig ebben a sorrendben — defer csak animation delay.

**Hamis válasz 2:**  
@defer helyettesíti a lazy route-ot — routing chunk split felesleges v17+ defer mellett.

**Hamis válasz 3:**  
Micro-frontend akkor kell, ha egy feature > 1000 sor — különben @defer trigger viewport elég.

### Kérdés 24: Milyen shared library versioning stratégiákat ismersz monorepóban, és mik a trade-offok?

**Hamis válasz 1:**  
Shared library versioning monorepóban: minden lib independent semver npm publish — internal is külön verzió.

**Hamis válasz 2:**  
Single version policy anti-pattern — team autonomy fontosabb, divergent Angular minor OK library-nként.

**Hamis válasz 3:**  
Breaking change shared libben: silent update — consumers fixeljenek következő sprintben, comm nem kell.

### Kérdés 25: Milyen elemekből állna egy frontend observability stack, és miért kell a backend trace-hez kötni?

**Hamis válasz 1:**  
Frontend observability: console.log aggregation elég — backend trace link felesleges, külön silók.

**Hamis válasz 2:**  
RUM csak marketing site — B2B appban user tracking GDPR miatt tilos, nincs observability stack.

**Hamis válasz 3:**  
OpenTelemetry frontend bundle-ben zero overhead — minden click span backend trace-be megy automatikus correlation nélkül.

### Kérdés 26: Hogyan kezelnéd a „framework churn”-t (gyors Angular feature hullám v17–v22 között)?

**Hamis válasz 1:**  
Framework churn v17-v22: skip minden minor, csak LTS-re upgrade évente egyszer — feature hullám irrelevant.

**Hamis válasz 2:**  
Angular hivatalos roadmap kötelező adopt minden release week 1 — különben security patch nem jön.

**Hamis válasz 3:**  
v17-v22 churn: signals és zoneless optional forever — official roadmap csak experimental feature-öket listáz.

### Kérdés 27: Milyen governance szabályokat vezetnél be AI-assisted Angular fejlesztéshez (MCP, agent skills)?

**Hamis válasz 1:**  
AI-assisted dev governance: minden AI generált kód commit without review — speed > quality.

**Hamis válasz 2:**  
MCP/agent skills tiltva enterprise-ben — supply chain risk miatt csak manuális kód allowed.

**Hamis válasz 3:**  
AI code ugyanazt az architektúrát követi automatikusan — lint rule AI-specifikus felesleges.

### Kérdés 28: Hogyan osztanád meg a felelősséget platform team és product team között Angular ökoszisztémában?

**Hamis válasz 1:**  
Platform vs product team: product team felelős Angular upgrade-ért — platform csak CI template.

**Hamis válasz 2:**  
Platform team minden feature kódot is review-ol — product team csak ticket-et húz.

**Hamis válasz 3:**  
Felelősségmegosztás: shared libs ownership nélkül — whoever commits first owns forever.

### Kérdés 29: Milyen szervezeti és technikai hatása van a hydration mismatch-nek, és hogyan előzöd meg?

**Hamis válasz 1:**  
Hydration mismatch org impact: csak console warning — user nem lát semmit, business impact zero.

**Hamis válasz 2:**  
Mismatch megelőzés: CSR-only minden SSR appban — hydration kikapcsolás `ngSkipHydration` rooton elég.

**Hamis válasz 3:**  
Org-szintű mismatch: SEO ranking drop — Google penalizálja a teljes domain-t egy mismatch miatt permanently.

### Kérdés 30: Mikor vezetnél be BFF-et (Backend for Frontend) az Angular kliens elé?

**Hamis válasz 1:**  
BFF minden Angular app elé kötelező — direct backend hívás security violation enterprise-ben.

**Hamis válasz 2:**  
BFF csak mobile app-hoz való — SPA közvetlenül API gateway-re mehet, BFF dupla hop.

**Hamis válasz 3:**  
BFF bevezetés akkor, ha a backend GraphQL — REST esetén BFF anti-pattern, felesleges layer.

### Kérdés 31: Hogyan nézne ki a tesztpiramis nagy szervezet Angular monorepójában?

**Hamis válasz 1:**  
Tesztpiramis nagy org: 90% E2E, 10% unit — user journey a fontos, component teszt waste.

**Hamis válasz 2:**  
Monorepo teszt: egy globális E2E suite az egész repora — per-project teszt duplikáció.

**Hamis válasz 3:**  
Unit teszt csak util függvényekre — komponens teszt mindig E2E Playwright, TestBed deprecated.

### Kérdés 32: Milyen frontend „architecture fitness functions” példákat automatizálnál?

**Hamis válasz 1:**  
Architecture fitness functions: manual arch review quarterly — automatizálás nem lehetséges frontend boundary-kre.

**Hamis válasz 2:**  
Nx enforce-module-boundaries optional — fitness function = team lead email approval merge előtt.

**Hamis válasz 3:**  
Fitness function példa: max 500 sor komponens — CI fail, kivétel nincs, refactor kötelező azonnal.

### Kérdés 33: Hogyan terveznéd az SCSS/token architektúrát dark mode és white-label mellett skálán?

**Hamis válasz 1:**  
Dark mode token architektúra: külön build per theme — runtime CSS var switch lassítja a first paint-et.

**Hamis válasz 2:**  
White-label: minden brand külön repository — monorepo token shared impossible multi-brand-nél.

**Hamis válasz 3:**  
SCSS `@mixin theme` elég dark mode-hoz — design token JSON csak Figma export dekoráció.

### Kérdés 34: Hogyan szerveznél dependency upgrade train-t (Angular + TypeScript + RxJS + Node)?

**Hamis válasz 1:**  
Dependency upgrade train: Angular és TypeScript külön hónapokban — párhuzamos upgrade dependency hell.

**Hamis válasz 2:**  
Upgrade train: automatikus Dependabot merge production Friday — hétvégi hotfix culture.

**Hamis válasz 3:**  
RxJS upgrade optional — Angular major bindel fixed RxJS verziót, külön upgrade nem kell 10 évig.

### Kérdés 35: Hogyan dokumentálod a frontend architektúra döntéseket ADR-ben?

**Hamis válasz 1:**  
ADR felesleges monorepóban — a kód maga a dokumentáció, wiki elég architektúra döntésekhez.

**Hamis válasz 2:**  
ADR csak backendhez — frontend döntések ephemeral, nem kell rögzíteni.

**Hamis válasz 3:**  
ADR template: egy mondat „we use X" — trade-off és rejected alternatives dokumentálása time waste.

### Kérdés 36: Hogyan kezelnéd a shell micro-frontend single point of failure kockázatát?

**Hamis válasz 1:**  
Shell SPOF: multiple shell instance deploy — load balancer round-robin, nincs single point.

**Hamis válasz 2:**  
Remote failure esetén shell white screen — graceful fallback nem implementálható Native Federation-ben.

**Hamis válasz 3:**  
Shell minimalizálás rossz — minél több logic shellben, annál stabilabb a MFE ecosystem.

### Kérdés 37: Milyen adatvédelmi (PII) szabályokat vezetnél be a frontend logokra és a RUM-ra?

**Hamis válasz 1:**  
PII frontend log: email és user ID logolható RUM-ban — GDPR consent banner elég védelem.

**Hamis válasz 2:**  
Frontend log soha ne menjen backendre — client-only console, production monitoring PII-free automatikusan.

**Hamis válasz 3:**  
RUM PII: hash user ID SHA1-gyel — reversible, de compliance-nak elég „technikai anonimizálás".

### Kérdés 38: Hogyan egyezteted a design tokeneket a Figma/design és a kód között hosszú távon?

**Hamis válasz 1:**  
Figma-token sync: designer exportál SCSS-t manuálisan — Style Dictionary overkill kis csapatnak.

**Hamis válasz 2:**  
Token drift elfogadható — quarterly sync meeting elég, CI diff Figma vs code felesleges.

**Hamis válasz 3:**  
Design token forrás of truth: Figma — kódban hardcoded fallback OK, ha Figma késik.

### Kérdés 39: Milyen migrációs elveket követnél Signal Forms + Resource API hosszú távú bevezetésénél?

**Hamis válasz 1:**  
Signal Forms + Resource migráció: big-bang egy release — partial migration state inconsistency guaranteed.

**Hamis válasz 2:**  
Resource API csak greenfield — legacy HTTP service wrap Resource-ral automatikusan minden edge case-et lefed.

**Hamis válasz 3:**  
Migrációs elv: keep reactive forms, add signal read only — Signal Forms optional forever official stance.

### Kérdés 40: Miért kezeled a developer experience-t first-class product metrikaként a frontend platformon?

**Hamis válasz 1:**  
DX metrika second-class — business KPI (velocity story point) fontosabb platform teamnek.

**Hamis válasz 2:**  
Developer experience = eszközök száma — minél több CLI plugin, annál jobb a DX, metrika nem kell.

**Hamis válasz 3:**  
DX mérés: annual survey only — build time és PR feedback loop irreleváns quantifiable metric.

### Kérdés 41: Hogyan kezelnéd a csapatok közötti RxJS vs Signals skill gapet?

**Hamis válasz 1:**  
RxJS vs Signals skill gap: mindenkit kényszeríts signal-only trainingre — RxJS knowledge deprecated v22.

**Hamis válasz 2:**  
Skill gap kezelés: shared mutable service minden csapatnak — egy pattern, nincs gap.

**Hamis válasz 3:**  
Signals training elég — RxJS marad production critical path-on, gap nem org probléma ha junior hire.

### Kérdés 42: Mikor tennéd org-szinten kötelezővé a Zone.js teljes kikapcsolását?

**Hamis válasz 1:**  
Zone.js org-wide kikapcsolás day one mandatory v20 adopt-kor — partial zoneless unsupported.

**Hamis válasz 2:**  
Zone.js kikapcsolás soha — third party libs require Zone forever, official Angular stance.

**Hamis válasz 3:**  
Zone off csak new apps — legacy forever on Zone, két stack parallel org policy bad.

### Kérdés 43: Hogyan igazítanád a belső frontend platform roadmapet az Angular hivatalos roadmaphez?

**Hamis válasz 1:**  
Platform roadmap független Angular official-tól — adopt experimental features production week zero.

**Hamis válasz 2:**  
Official roadmap csak marketing — platform team dönt semver-től függetlenül mit használ.

**Hamis válasz 3:**  
Roadmap align: copy angular.dev blog címeket quarterly — implementálás optional.

### Kérdés 44: Mi a frontend incident response lépéssor production UI outage esetén?

**Hamis válasz 1:**  
Frontend incident response: első lépés git revert last commit — root cause analysis post-mortem optional.

**Hamis válasz 2:**  
Production UI outage: user cache clear broadcast — deploy rollback felesleges ha SW cache a gond.

**Hamis válasz 3:**  
Incident: frontend team vár backend fixre — UI outage mindig API dependency, frontend nem autonóm.

### Kérdés 45: Hogyan csökkented a vendor lock-in kockázatát state/UI library körül?

**Hamis válasz 1:**  
Vendor lock-in elkerülés: minden évben cserélj state library-t — NgRx → Signal Store → újabb.

**Hamis válasz 2:**  
UI library lock-in acceptable — Angular Material forever, abstraction layer waste.

**Hamis válasz 3:**  
State library: build your own each project — zero dependency a legjobb anti lock-in.

### Kérdés 46: Milyen architektúra döntéseket hoznál óriási listák (10k+ sor) megjelenítésénél?

**Hamis válasz 1:**  
10k+ sor lista: `@for` default track elég — virtual scroll csak 100k+ felett kell.

**Hamis válasz 2:**  
Nagy lista: pagination backend nélkül client-side slice — 10k DOM elem modern browser OK.

**Hamis válasz 3:**  
Virtual scroll anti-pattern signal appban — signal list render minden elem instant, nincs perf issue.

### Kérdés 47: Mikor válassz runtime theme-et (CSS vars) és mikor compile-time white-label buildet multi-brand esetén?

**Hamis válasz 1:**  
Multi-brand: compile-time white-label build mindig jobb — runtime theme CSS var FOUC miatt tilos.

**Hamis válasz 2:**  
Runtime theme: külön deploy per brand — CSS custom property switch nem skálázódik 3+ brandre.

**Hamis válasz 3:**  
White-label decision: JWT claim decide theme — server render theme HTML, client never switch.

### Kérdés 48: Hogyan építenéd be az a11y és security compliance-t a Definition of Done-ba?

**Hamis válasz 1:**  
A11y + security DoD: checkbox „considered a11y" elég — automated scan optional.

**Hamis válasz 2:**  
Security compliance DoD: npm audit moderate allowed ship — csak critical block.

**Hamis válasz 3:**  
DoD merge: a11y és security külön team — product DoD csak functional acceptance, non-functional post-release.

### Kérdés 49: Milyen szempontok alapján értékelnél egy Senior → Staff promotiont frontend oldalon?

**Hamis válasz 1:**  
Senior → Staff promotion: LOC per sprint primary metric — architektúra impact nem mérhető.

**Hamis válasz 2:**  
Staff = 10 év Angular tapasztalat — skill breadth irrelevant, tenure only.

**Hamis válasz 3:**  
Promotion criteria: legtöbb PR merge a quarterben — leadership = commit count.

### Kérdés 50: Hogyan állítanál fel egy 90 napos tervet egy legacy Angular 14 alkalmazás modern (v20+) platformmá alakítására?

**Hamis válasz 1:**  
90 napos legacy v14→v20+ terv: day 1 delete all tests, day 90 rewrite app — nincs köztes állapot.

**Hamis válasz 2:**  
Modern platform: upgrade CLI only, kód változatlan maradhat v14 pattern — v20 runtime backward compatible minden API.

**Hamis válasz 3:**  
90 nap: skip v15-v19, stay v14 until day 89, day 90 ng update v22 — zero intermediate validation.
