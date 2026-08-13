# Frontend hamis válaszok (interjú gyakorlat)

A kérdésszámok a [frontend-interview-questions-w-answers.md](./frontend-interview-questions-w-answers.md) fájlra hivatkoznak.
Minden **Hamis válasz** magabiztosnak hangzik, de szándékosan téves — a helyes válasz a forrásfájlban van.
Szintek: Junior · Medior · Senior · Staff

---

## Junior

### Kérdés 1: Mi a különbség a `let`, `const` és a `var` között?

**Hamis válasz 1:**  
A `const` mélyen immutábilis: ha objektumot tárol, annak tulajdonságait sem lehet utólag módosítani. A `let` és a `var` csak referencia-szinten engednek változtatást. Ennek az az oka, hogy a `const` mélyen immutábilis: ha objektumot tárol, annak tulajdonságait sem lehet utólag módosítani — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
A `var` blokk-scoped, míg a `let` és `const` function-scoped deklarációk, ezért a `var` a legbiztonságosabb modern kódban. A „Mi a különbség a `let`, `const` és a `var` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `var` blokk-scoped, míg a `let` és `const` function-scoped deklarációk, ezért a `var` a legbiztonságosabb modern kódban. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
A `const` változó értéke futásidőben is szabadon újraassignolható, csak a típusát nem lehet megváltoztatni TypeScriptben. Ha architektúra review-n indokolod, a kiinduló tétel: A `const` változó értéke futásidőben is szabadon újraassignolható, csak a típusát nem lehet megváltoztatni TypeScriptben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 2: Mit jelent a strict equality (`===`) a `==`-hez képest?

**Hamis válasz 1:**  
A `===` mindig type coercion-t végez, míg a `==` szigorúan típus és érték alapján hasonlít össze. Ennek az az oka, hogy a `===` mindig type coercion-t végez, míg a `==` szigorúan típus és érték alapján hasonlít össze — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktu.

**Hamis válasz 2:**  
A `==` gyorsabb, mert nem ellenőrzi a típust, ezért production kódban mindig ezt kell preferálni. A „Mit jelent a strict equality (`===`) a `==`-hez képest" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `==` gyorsabb, mert nem ellenőrzi a típust, ezért production kódban mindig ezt kell preferálni. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban,.

**Hamis válasz 3:**  
A `===` és a `==` teljesen azonos viselkedésű, kivéve ha NaN-nal hasonlítunk össze. Ha architektúra review-n indokolod, a kiinduló tétel: A `===` és a `==` teljesen azonos viselkedésű, kivéve ha NaN-nal hasonlítunk össze. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is,.

### Kérdés 3: Mi az a closure JavaScriptben?

**Hamis válasz 1:**  
A closure egy globális cache objektum, amit a V8 minden modul betöltésekor automatikusan létrehoz a memória spórolásért. Ennek az az oka, hogy a closure egy globális cache objektum, amit a V8 minden modul betöltésekor automatikusan létrehoz a memória spórolásért — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade.

**Hamis válasz 2:**  
Closure csak class metódusokban létezik; sima függvények nem férnek hozzá külső scope változóihoz. A „Mi az a closure JavaScriptben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy closure csak class metódusokban létezik; sima függvények nem férnek hozzá külső scope változóihoz. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-sz.

**Hamis válasz 3:**  
A closure azt jelenti, hogy a belső függvény mindig a hívás pillanatában létrejövő lokális változókat másolja érték szerint. Ha architektúra review-n indokolod, a kiinduló tétel: A closure azt jelenti, hogy a belső függvény mindig a hívás pillanatában létrejövő lokális változókat másolja érték szerint. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 4: Mi a különbség az arrow function és a normál függvény `this` kötése között?

**Hamis válasz 1:**  
Az arrow function mindig a saját argumentumlistájából köti a `this`-t, míg a normál függvény mindig a window objektumra mutat. Ennek az az oka, hogy az arrow function mindig a saját argumentumlistájából köti a `this`-t, míg a normál függvény mindig a window objektumra mutat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak.

**Hamis válasz 2:**  
A normál függvény lexikálisan örökli a `this`-t a szülő scope-ból, az arrow function pedig mindig dinamikusan a hívó objektumra áll. A „Mi a különbség az arrow function és a normál függvény `this` kötése között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a normál függvény lexikálisan örökli a `this`-t a szülő scope-ból, az arrow function pedig mindig dinamikusan a hívó objektumra áll.

**Hamis válasz 3:**  
Arrow function esetén a `this` teljesen eltávolításra kerül a nyelvből, ezért metódusként soha nem használható. Ha architektúra review-n indokolod, a kiinduló tétel: Arrow function esetén a `this` teljesen eltávolításra kerül a nyelvből, ezért metódusként soha nem használható. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 5: Mik a JavaScript primitív típusok?

**Hamis válasz 1:**  
A primitívek: string, number, boolean, object, array, null és undefined — összesen hét darab. Ennek az az oka, hogy a primitívek: string, number, boolean, object, array, null és undefined — összesen hét darab — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle,.

**Hamis válasz 2:**  
A `typeof null` helyesen `"null"`-t ad vissza, mert a null külön primitív típus a specifikáció szerint. A „Mik a JavaScript primitív típusok" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `typeof null` helyesen `"null"`-t ad vissza, mert a null külön primitív típus a specifikáció szerint.

**Hamis válasz 3:**  
A BigInt nem primitív, hanem boxed Number objektum, ezért mindig heapen tárolódik. Ha architektúra review-n indokolod, a kiinduló tétel: A BigInt nem primitív, hanem boxed Number objektum, ezért mindig heapen tárolódik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdeme.

### Kérdés 6: Mi a különbség az `unknown` és az `any` között TypeScriptben?

**Hamis válasz 1:**  
Az `any` biztonságosabb, mert csak explicit cast után használható, az `unknown` viszont bárhol szabadon hozzárendelhető stringhez. Ennek az az oka, hogy az `any` biztonságosabb, mert csak explicit cast után használható, az `unknown` viszont bárhol szabadon hozzárendelhető stringhez — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
Az `unknown` és az `any` teljesen ugyanaz, csak az `unknown` a régebbi szintaxis neve. A „Mi a különbség az `unknown` és az `any` között TypeScriptben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `unknown` és az `any` teljesen ugyanaz, csak az `unknown` a régebbi szintaxis neve.

**Hamis válasz 3:**  
Az `any` compile time-ban hibát dob, ha nem ellenőrzöd a típust, az `unknown` pedig mindig átmegy a fordítón. Ha architektúra review-n indokolod, a kiinduló tétel: Az `any` compile time-ban hibát dob, ha nem ellenőrzöd a típust, az `unknown` pedig mindig átmegy a fordítón. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 7: Mit csinál az `interface` és a `type` TypeScriptben?

**Hamis válasz 1:**  
Az `interface` csak primitív alias lehet, a `type` pedig kizárólag osztályok implementálására szolgál. Ennek az az oka, hogy az `interface` csak primitív alias lehet, a `type` pedig kizárólag osztályok implementálására szolgál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként.

**Hamis válasz 2:**  
A `type` mindig runtime objektumot generál a JS bundle-be, az `interface` viszont teljesen törlődik fordításkor. A „Mit csinál az `interface` és a `type` TypeScriptben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `type` mindig runtime objektumot generál a JS bundle-be, az `interface` viszont tel.

**Hamis válasz 3:**  
Interface-t union típusokhoz kell használni, type alias-t pedig csak függvények visszatérési értékéhez. Ha architektúra review-n indokolod, a kiinduló tétel: Interface-t union típusokhoz kell használni, type alias-t pedig csak függvények visszatérési értékéhez. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 8: Mi az a generic TypeScriptben?

**Hamis válasz 1:**  
A generic egy runtime wrapper, ami minden híváskor új példányt hoz létre a heapen a típusbiztonság érdekében. Ennek az az oka, hogy a generic egy runtime wrapper, ami minden híváskor új példányt hoz létre a heapen a típusbiztonság érdekében — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíciókén.

**Hamis válasz 2:**  
Generics csak JavaScript fájlokban működnek; `.ts` fájlban a fordító automatikusan `any`-ra cseréli őket. A „Mi az a generic TypeScriptben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy generics csak JavaScript fájlokban működnek; `.ts` fájlban a fordító automatikusan `any`-ra cseréli őket.

**Hamis válasz 3:**  
A generic paraméter csak a build időben él, futásidőben a VM a legelső használt típusra „befagyasztja” az értéket. Ha architektúra review-n indokolod, a kiinduló tétel: A generic paraméter csak a build időben él, futásidőben a VM a legelső használt típusra „befagyasztja” az értéket. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 9: Mi a CSS specificity, és hogyan számoljuk?

**Hamis válasz 1:**  
A specificity sorrendje: inline style, majd ID, osztály, végül elem — és az ID mindig felülírja az inline stílust is. Ennek az az oka, hogy a specificity sorrendje: inline style, majd ID, osztály, végül elem — és az ID mindig felülírja az inline stílust is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
A `!important` csak akkor számít, ha legalább három osztály van a szelektorban; különben figyelmen kívül hagyja a böngésző. A „Mi a CSS specificity, és hogyan számoljuk" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `!important` csak akkor számít, ha legalább három osztály van a szelektorban; különben figyelmen kívül hagyja a böngésző. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz r.

**Hamis válasz 3:**  
A specificity kiszámításánál a pseudo-classok, mint a `:hover`, nulla pontot adnak, ezért sosem nyernek osztály ellen. Ha architektúra review-n indokolod, a kiinduló tétel: A specificity kiszámításánál a pseudo-classok, mint a `:hover`, nulla pontot adnak, ezért sosem nyernek osztály ellen. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztan.

### Kérdés 10: Mik a fő CSS combinatorok, és mit jelentenek?

**Hamis válasz 1:**  
A `>` combinator minden leszármazottra vonatkozik, a szóköz combinator pedig csak közvetlen gyerek elemekre. Ennek az az oka, hogy a `>` combinator minden leszármazottra vonatkozik, a szóköz combinator pedig csak közvetlen gyerek elemekre — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definí.

**Hamis válasz 2:**  
A `+` adjacent sibling selector az összes testvér elemre illeszkedik, nem csak a közvetlenül következőre. A „Mik a fő CSS combinatorok, és mit jelentenek" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `+` adjacent sibling selector az összes testvér elemre illeszkedik, nem csak a közvetle.

**Hamis válasz 3:**  
A `~` general sibling combinator csak akkor működik, ha mindkét elem azonos ID-val rendelkezik. Ha architektúra review-n indokolod, a kiinduló tétel: A `~` general sibling combinator csak akkor működik, ha mindkét elem azonos ID-val rendelkezik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 11: Mi a különbség a `position: relative`, `absolute`, `fixed` és `sticky` között?

**Hamis válasz 1:**  
A `fixed` mindig a legközelebbi `position: relative` szülőhöz igazodik, nem a viewport-hoz. Ennek az az oka, hogy a `fixed` mindig a legközelebbi `position: relative` szülőhöz igazodik, nem a viewport-hoz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
A `sticky` ugyanaz, mint az `absolute`, csak automatikusan `fixed`-dé válik scroll közben anélkül, hogy konténert igényelne. A „Mi a különbség a `position: relative`, `absolute`, `fixed` és `sticky` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `sticky` ugyanaz, mint az `absolute`, csak automatikusan `fixed`-dé válik scroll közben anélkül, hogy konténert igényelne.

**Hamis válasz 3:**  
A `relative` leválasztja az elemet a dokumentum flow-ból, ezért a szomszéd elemek átrendeződnek, mintha `absolute` lenne. Ha architektúra review-n indokolod, a kiinduló tétel: A `relative` leválasztja az elemet a dokumentum flow-ból, ezért a szomszéd elemek átrendeződnek, mintha `absolute` lenne. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 12: Mi a Flexbox fő célja, és melyek a legfontosabb tulajdonságai?

**Hamis válasz 1:**  
A Flexbox két dimenziós rácsot ad, ezért teljes Grid helyettesítője minden layout esetben. Ennek az az oka, hogy a Flexbox két dimenziós rácsot ad, ezért teljes Grid helyettesítője minden layout esetben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-of.

**Hamis válasz 2:**  
A `justify-content` a függőleges tengelyt, a `align-items` pedig a vízszintes tengelyt igazítja mindig. A „Mi a Flexbox fő célja, és melyek a legfontosabb tulajdonságai" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `justify-content` a függőleges tengelyt, a `align-items` pedig a vízszintes tengelyt igazítja mindig.

**Hamis válasz 3:**  
A `flex-direction: column` esetén a fő tengely vízszintes marad, csak a gyerekek sorrendje fordul meg. Ha architektúra review-n indokolod, a kiinduló tétel: A `flex-direction: column` esetén a fő tengely vízszintes marad, csak a gyerekek sorrendje fordul meg. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 13: Mikor használjunk CSS Gridet Flexbox helyett?

**Hamis válasz 1:**  
Gridet csak egysoros navigációs sávokhoz érdemes, mert ott gyorsabb a renderelés. Ennek az az oka, hogy gridet csak egysoros navigációs sávokhoz érdemes, mert ott gyorsabb a renderelés — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Flexbox mindig jobb többdimenziós elrendezésnél, Gridet pedig csak régi böngésző támogatás miatt kerüljük. A „Mikor használjunk CSS Gridet Flexbox helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy flexbox mindig jobb többdimenziós elrendezésnél, Gridet pedig.

**Hamis válasz 3:**  
Grid és Flexbox egyszerre ugyanazon a konténeren kötelező a specifikáció szerint, különben a layout érvénytelen. Ha architektúra review-n indokolod, a kiinduló tétel: Grid és Flexbox egyszerre ugyanazon a konténeren kötelező a specifikáció szerint, különben a layout érvénytelen.

### Kérdés 14: Mi a különbség a `px`, `rem`, `em`, `%`, `vh`/`vw` egységek között?

**Hamis válasz 1:**  
Az `rem` mindig a szülő elem font-size-ához viszonyít, az `em` pedig mindig a root `html` elemhez. Ennek az az oka, hogy az `rem` mindig a szülő elem font-size-ához viszonyít, az `em` pedig mindig a root `html` elemhez — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
A `vh` és `vw` fix pixel értékek mobilon, mert a böngésző sosem számol újra viewport változáskor. A „Mi a különbség a `px`, `rem`, `em`, `%`, `vh`/`vw` egységek között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `vh` és `vw` fix pixel értékek mobilon, mert a böngésző sosem számol újra viewport változáskor.

**Hamis válasz 3:**  
A `% mindig a viewport szélességéhez képest számol, függetlenül attól, hogy melyik CSS tulajdonságnál használjuk. Ha architektúra review-n indokolod, a kiinduló tétel: A `% mindig a viewport szélességéhez képest számol, függetlenül attól, hogy melyik CSS tulajdonságnál használjuk. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline.

### Kérdés 15: Mi az a CSS custom property, és miben különbözik az SCSS változótól?

**Hamis válasz 1:**  
A CSS custom property csak build time-ban létezik, futásidőben a böngésző SCSS-re fordítja vissza. Ennek az az oka, hogy a CSS custom property csak build time-ban létezik, futásidőben a böngésző SCSS-re fordítja vissza — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a dönt.

**Hamis válasz 2:**  
Az SCSS `$változó` futásidőben is módosítható JavaScriptből a `setProperty` metódussal. A „Mi az a CSS custom property, és miben különbözik az SCSS változótól" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az SCSS `$változó` futásidőben is módosítható JavaScriptből a `setProperty` metódussal.

**Hamis válasz 3:**  
A `--token` változók csak inline style-ban használhatók; class selectorban érvénytelenek a specifikáció szerint. Ha architektúra review-n indokolod, a kiinduló tétel: A `--token` változók csak inline style-ban használhatók; class selectorban érvénytelenek a specifikáció szerint. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 16: Mi az SCSS, és miben segít a sima CSS-hez képest?

**Hamis válasz 1:**  
Az SCSS egy böngésző plugin, ami futásidőben parse-olja a `.scss` fájlokat a kliensen. Ennek az az oka, hogy az SCSS egy böngésző plugin, ami futásidőben parse-olja a `.scss` fájlokat a kliensen — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trad.

**Hamis válasz 2:**  
Az SCSS nesting automatikusan csökkenti a CSS specificity-t, ezért sosem okoz specificity háborút. A „Mi az SCSS, és miben segít a sima CSS-hez képest" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az SCSS nesting automatikusan csökkenti a CSS specificity-t, ezért sosem okoz specificity háborút.

**Hamis válasz 3:**  
SCSS-ben a mixin-ek runtime JavaScript függvényekké fordulnak, ezért bundle méret nélkül nem használhatók. Ha architektúra review-n indokolod, a kiinduló tétel: SCSS-ben a mixin-ek runtime JavaScript függvényekké fordulnak, ezért bundle méret nélkül nem használhatók. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 17: Mi a különbség az SCSS `@import` és `@use` között?

**Hamis válasz 1:**  
A `@import` namespace-et kényszerít minden modulra, a `@use` pedig globálisan exportál minden változót a projektbe. Ennek az az oka, hogy a `@import` namespace-et kényszerít minden modulra, a `@use` pedig globálisan exportál minden változót a projektbe — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne.

**Hamis válasz 2:**  
A `@use` deprecated, helyette mindig `@import`-ot kell használni Angular CLI projektekben. A „Mi a különbség az SCSS `@import` és `@use` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `@use` deprecated, helyette mindig `@import`-ot kell használni Angular CLI projektekben.

**Hamis válasz 3:**  
A `@import` és `@use` között nincs különbség Sass 3.0 óta, mindkettő ugyanazt a CSS fájlt többször is betölti. Ha architektúra review-n indokolod, a kiinduló tétel: A `@import` és `@use` között nincs különbség Sass 3.0 óta, mindkettő ugyanazt a CSS fájlt többször is betölti.

### Kérdés 18: Mi az Angular komponens?

**Hamis válasz 1:**  
A komponens kizárólag TypeScript class, sablon és stílus nélkül is teljes értékű Angular elem. Ennek az az oka, hogy a komponens kizárólag TypeScript class, sablon és stílus nélkül is teljes értékű Angular elem — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést.

**Hamis válasz 2:**  
Egy komponens csak NgModule-ban deklarálható; standalone komponens még nem létezik hivatalosan. A „Mi az Angular komponens" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy komponens csak NgModule-ban deklarálható; standalone komponens még nem létezik hivatalosan. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabá.

**Hamis válasz 3:**  
A komponens lifecycle hook-jai futásidőben automatikusan Node.js szerveren futnak, nem a böngészőben. Ha architektúra review-n indokolod, a kiinduló tétel: A komponens lifecycle hook-jai futásidőben automatikusan Node.js szerveren futnak, nem a böngészőben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 19: Milyen data binding típusok vannak Angularban?

**Hamis válasz 1:**  
Angularban csak one-way binding létezik; two-way binding csak Reactből importálható wrapperrel. Ennek az az oka, hogy angularban csak one-way binding létezik; two-way binding csak Reactből importálható wrapperrel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az event binding szintaxisa `[click]`, az property binding pedig `(value)`, mert a zárójelek mindig eseményt jelölnek. A „Milyen data binding típusok vannak Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az event binding szintaxisa `[click]`.

**Hamis válasz 3:**  
A `{{ }}` interpolation csak statikus stringeket tud megjeleníteni, változót nem. Ha architektúra review-n indokolod, a kiinduló tétel: A `{{ }}` interpolation csak statikus stringeket tud megjeleníteni, változót nem. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 20: Mi a különbség az `@Input()` / `@Output()` és a modern `input()` / `output()` között?

**Hamis válasz 1:**  
A modern `input()` dekorátor-alapú, az `@Input()` pedig signal-alapú API, ezért nem keverhetők. Ennek az az oka, hogy a modern `input()` dekorátor-alapú, az `@Input()` pedig signal-alapú API, ezért nem keverhetők — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `@Output()` mindig szinkron EventEmitter helyett Promise-t ad vissza a v19 óta. A „Mi a különbség az `@Input()` / `@Output()` és a modern `input()` / `output()` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `@Output()` mindig szinkron EventEmitter hely.

**Hamis válasz 3:**  
A `input()` csak standalone komponensekben működik; NgModule-os komponensek nem használhatják. Ha architektúra review-n indokolod, a kiinduló tétel: A `input()` csak standalone komponensekben működik; NgModule-os komponensek nem használhatják. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 21: Mi a pipe szerepe Angularban?

**Hamis válasz 1:**  
A pipe HTTP kéréseket indít a sablonban, ezért minden pipe automatikusan async. Ennek az az oka, hogy a pipe HTTP kéréseket indít a sablonban, ezért minden pipe automatikusan async — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron.

**Hamis válasz 2:**  
A pipe-ok csak komponens class-ban hívhatók; a template-ben tilos a `|` szintaxis. A „Mi a pipe szerepe Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a pipe-ok csak komponens class-ban hívhatók; a template-ben tilos a `|` szintaxis. Interjúban érdemes a döntést trade-offokkal is alátáma.

**Hamis válasz 3:**  
A pure pipe minden change detection ciklusban lefut, az impure pipe pedig csak egyszer, mount-kor. Ha architektúra review-n indokolod, a kiinduló tétel: A pure pipe minden change detection ciklusban lefut, az impure pipe pedig csak egyszer, mount-kor. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 22: Mi a különbség a strukturális és az attribútum direktíva között?

**Hamis válasz 1:**  
A strukturális direktíva csak CSS class-t ad az elemhez, az attribútum direktíva pedig DOM-ot hoz létre vagy töröl. Ennek az az oka, hogy a strukturális direktíva csak CSS class-t ad az elemhez, az attribútum direktíva pedig DOM-ot hoz létre vagy töröl — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `*ngIf` attribútum direktíva, mert nem változtatja a DOM struktúrát, csak style-t. A „Mi a különbség a strukturális és az attribútum direktíva között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `*ngIf` attribútum direktíva, mert nem változtatja a DOM struktúrát, csak style-t.

**Hamis válasz 3:**  
Strukturális direktívából csak egy lehet sablononként, attribútum direktívából viszont csak egyetlen példány. Ha architektúra review-n indokolod, a kiinduló tétel: Strukturális direktívából csak egy lehet sablononként, attribútum direktívából viszont csak egyetlen példány. Interjúban érdemes a dönté.

### Kérdés 23: Mi az `@if` és a `[hidden]` különbsége?

**Hamis válasz 1:**  
A `[hidden]` teljesen eltávolítja az elemet a DOM-ból, az `@if` pedig csak `display: none`-t állít. Ennek az az oka, hogy a `[hidden]` teljesen eltávolítja az elemet a DOM-ból, az `@if` pedig csak `display: none`-t állít — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus.

**Hamis válasz 2:**  
Az `@if` mindig lassabb, mert minden ciklusban újrarendereli az egész alkalmazást. A „Mi az `@if` és a `[hidden]` különbsége" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `@if` mindig lassabb, mert minden ciklusban újrarendereli az egész alkalmazást. Interjúban érdemes a döntést trade-offok.

**Hamis válasz 3:**  
A `[hidden]` és az `@if` teljesen ugyanazt csinálja; az Angular csak szintaxis miatt tartja meg mindkettőt. Ha architektúra review-n indokolod, a kiinduló tétel: A `[hidden]` és az `@if` teljesen ugyanazt csinálja; az Angular csak szintaxis miatt tartja meg mindkettőt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 24: Miért kell `track` az `@for`-nál?

**Hamis válasz 1:**  
A `track` kötelezően UUID-t generál minden elemhez, különben a `@for` nem fordul le AOT-ban. Ennek az az oka, hogy a `track` kötelezően UUID-t generál minden elemhez, különben a `@for` nem fordul le AOT-ban — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Track nélkül az Angular minden iterációban újra letölti a listát a szerverről. A „Miért kell `track` az `@for`-nál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy track nélkül az Angular minden iterációban újra letölti a listát a szerverről. Interjúban érdemes a döntést tr.

**Hamis válasz 3:**  
A `track` csak dekorációs metaadat a DevTools számára, teljesítményre nincs hatása. Ha architektúra review-n indokolod, a kiinduló tétel: A `track` csak dekorációs metaadat a DevTools számára, teljesítményre nincs hatása. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 25: Mi az `ng-container`, `ng-template` és `ng-content` szerepe?

**Hamis válasz 1:**  
Az `ng-container` extra DOM elemként jelenik meg a DevTools-ban, csak `display: contents` miatt láthatatlan. Ennek az az oka, hogy az `ng-container` extra DOM elemként jelenik meg a DevTools-ban, csak `display: contents` miatt láthatatlan — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `ng-content` csak routinghoz használható, projection nem támogatott vele. A „Mi az `ng-container`, `ng-template` és `ng-content` szerepe" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `ng-content` csak routinghoz használható, projection nem támogatott vele.

**Hamis válasz 3:**  
Az `ng-template` mindig automatikusan renderelődik betöltéskor, nem kell hozzá strukturális direktíva. Ha architektúra review-n indokolod, a kiinduló tétel: Az `ng-template` mindig automatikusan renderelődik betöltéskor, nem kell hozzá strukturális direktíva. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 26: Mi az Observable RxJS-ben?

**Hamis válasz 1:**  
Az Observable egy egyszeri értéket visszaadó Promise wrapper, amit csak `await`-tel lehet feliratkozni. Ennek az az oka, hogy az Observable egy egyszeri értéket visszaadó Promise wrapper, amit csak `await`-tel lehet feliratkozni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. A gyors fix helyett a hosszú távú karbantarthatóságot hangsúlyozd: a félreértett alapfogalom később egész feature-láncot mérgezhet meg.

**Hamis válasz 2:**  
Observable csak HTTP kéréseknél létezik; eseményekhez mindig Subject helyett Promise kell. A „Mi az Observable RxJS-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy observable csak HTTP kéréseknél létezik; eseményekhez mindig Subject helyett Promise kell.

**Hamis válasz 3:**  
Az Observable automatikusan lefut subscribe nélkül is, és minden listener ugyanazt a push-olt értéket kapja cache-ből. Ha architektúra review-n indokolod, a kiinduló tétel: Az Observable automatikusan lefut subscribe nélkül is, és minden listener ugyanazt a push-olt értéket kapja cache-ből.

### Kérdés 27: Mi a különbség a cold és a hot Observable között?

**Hamis válasz 1:**  
Cold observable megosztott forrás minden feliratkozónak, hot observable pedig minden subscribernek külön producerrel indul. Ennek az az oka, hogy cold observable megosztott forrás minden feliratkozónak, hot observable pedig minden subscribernek külön producerrel indul — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként.

**Hamis válasz 2:**  
A cold és hot különbség csak TypeScript típus szinten létezik; futásidőben minden stream hot. A „Mi a különbség a cold és a hot Observable között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a cold és hot különbség csak TypeScript típus szinten létezik; futásidőbe.

**Hamis válasz 3:**  
Hot observable csak akkor emitál, ha legalább tíz active subscriber van. Ha architektúra review-n indokolod, a kiinduló tétel: Hot observable csak akkor emitál, ha legalább tíz active subscriber van. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 28: Mi a különbség a Subject, BehaviorSubject, ReplaySubject és AsyncSubject között?

**Hamis válasz 1:**  
A BehaviorSubject sosem adja vissza a legutolsó értéket új feliratkozónak, csak a következő emit-et. Ennek az az oka, hogy a BehaviorSubject sosem adja vissza a legutolsó értéket új feliratkozónak, csak a következő emit-et — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha.

**Hamis válasz 2:**  
Az AsyncSubject azonnal complete-el az első érték után, még mielőtt bárki feliratkozna. A „Mi a különbség a Subject, BehaviorSubject, ReplaySubject és AsyncSubject között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az AsyncSubject azonnal complete-el az első érték után, még mielőtt bárki feliratkozna. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
A sima Subject mindig buffereli az összes korábbi értéket végtelen ideig, mint a ReplaySubject alapértelmezésben. Ha architektúra review-n indokolod, a kiinduló tétel: A sima Subject mindig buffereli az összes korábbi értéket végtelen ideig, mint a ReplaySubject alapértelmezésben.

### Kérdés 29: Mit csinál a `map`, `filter` és a `tap` operátor?

**Hamis válasz 1:**  
A `map` side effectet végez, a `tap` pedig transzformálja az stream értékeit új típusra. Ennek az az oka, hogy a `map` side effectet végez, a `tap` pedig transzformálja az stream értékeit új típusra — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elm.

**Hamis válasz 2:**  
A `filter` minden elemre `true`-t ad vissza, ha nincs megadva predicate függvény. A „Mit csinál a `map`, `filter` és a `tap` operátor" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `filter` minden elemre `true`-t ad vissza, ha nincs megadva predicate függvény.

**Hamis válasz 3:**  
A `tap` automatikusan le is iratkozik a forrásról az első log után, hogy ne legyen memory leak. Ha architektúra review-n indokolod, a kiinduló tétel: A `tap` automatikusan le is iratkozik a forrásról az első log után, hogy ne legyen memory leak.

### Kérdés 30: Mit csinál a `debounceTime` és a `distinctUntilChanged`?

**Hamis válasz 1:**  
A `debounceTime` azonnal emitál minden eseményt, majd a végén gyűjti össze őket egy tömbbe. Ennek az az oka, hogy a `debounceTime` azonnal emitál minden eseményt, majd a végén gyűjti össze őket egy tömbbe — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként e.

**Hamis válasz 2:**  
A `distinctUntilChanged` csak object referenciát hasonlít, primitíveknél mindig emitál. A „Mit csinál a `debounceTime` és a `distinctUntilChanged`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `distinctUntilChanged` csak object referenciát hasonl.

**Hamis válasz 3:**  
Debounce és distinct operátorok csak cold observable-en működnek; hot streamen hibát dobnak. Ha architektúra review-n indokolod, a kiinduló tétel: Debounce és distinct operátorok csak cold observable-en működnek; hot streamen hibát dobnak. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 31: Mi a Dependency Injection Angularban?

**Hamis válasz 1:**  
A DI manuális `new Service()` hívásokat jelent minden komponens konstruktorában, injector nélkül. Ennek az az oka, hogy a DI manuális `new Service()` hívásokat jelent minden komponens konstruktorában, injector nélkül — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
Angular DI csak build time működik; futásidőben minden függőség globális singleton a `window`-on. A „Mi a Dependency Injection Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy angular DI csak build time működik; futásidőben.

**Hamis válasz 3:**  
Az injector fa csak a root modulig terjed, komponens szintű provider nem létezik. Ha architektúra review-n indokolod, a kiinduló tétel: Az injector fa csak a root modulig terjed, komponens szintű provider nem létezik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 32: Mit jelent a `@Injectable({ providedIn: 'root' })`?

**Hamis válasz 1:**  
A `providedIn: 'root'` azt jelenti, hogy minden komponens példány külön service példányt kap. Ennek az az oka, hogy a `providedIn: 'root'` azt jelenti, hogy minden komponens példány külön service példányt kap — ezt rögtön mechanizmus-szinten is.

**Hamis válasz 2:**  
Root provider csak lazy modulokban működik; eager modulban kötelező a `providers` tömb. A „Mit jelent a `@Injectable({ providedIn: 'root' })`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy root provider csak lazy modulokban működik; eager.

**Hamis válasz 3:**  
A `providedIn: 'root'` kikapcsolja a tree-shakinget, ezért minden service bekerül a main bundle-be akkor is, ha nem használod. Ha architektúra review-n indokolod, a kiinduló tétel: A `providedIn: 'root'` kikapcsolja a tree-shakinget, ezért minden service bekerül a main bundle-be akkor is, ha nem használod.

### Kérdés 33: Hogyan adunk át route paramétert Angularban?

**Hamis válasz 1:**  
Route paraméter csak query stringben (`?id=1`) adható át; path paraméter nem támogatott. Ennek az az oka, hogy route paraméter csak query stringben (`?id=1`) adható át; path paraméter nem támogatott — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A route paramétereket `@Input()` dekorátorral kapja meg automatikusan minden komponens. A „Hogyan adunk át route paramétert Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a route paramétereket `@Input()` dekorátorral kapja meg automatikusan minden komponens.

**Hamis válasz 3:**  
Path paraméter olvasásához kötelező a `window.location.hash` manuális parse-olása. Ha architektúra review-n indokolod, a kiinduló tétel: Path paraméter olvasásához kötelező a `window.location.hash` manuális parse-olása. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 34: Mi a PathLocationStrategy és a HashLocationStrategy különbsége?

**Hamis válasz 1:**  
A PathLocationStrategy mindig `#`-t tesz az URL-be, a HashLocationStrategy pedig tiszta path-ot használ. Ennek az az oka, hogy a PathLocationStrategy mindig `#`-t tesz az URL-be, a HashLocationStrategy pedig tiszta path-ot használ — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csa.

**Hamis válasz 2:**  
Hash routing csak SSR mellett működik; CSR-ben mindig PathLocationStrategy a kötelező. A „Mi a PathLocationStrategy és a HashLocationStrategy különbsége" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hash routing csak S.

**Hamis válasz 3:**  
A két stratégia között nincs különbség a böngésző history API szempontjából. Ha architektúra review-n indokolod, a kiinduló tétel: A két stratégia között nincs különbség a böngésző history API szempontjából. Interjúban érdemes a döntés.

### Kérdés 35: Mire való az `ngOnInit` és az `ngOnDestroy`?

**Hamis válasz 1:**  
Az `ngOnInit` a konstruktor helyett fut először, még mielőtt a komponens létrejönne. Ennek az az oka, hogy az `ngOnInit` a konstruktor helyett fut először, még mielőtt a komponens létrejönne — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `ngOnDestroy` csak akkor hívódik, ha a komponensen nincs subscription; különben sosem fut le. A „Mire való az `ngOnInit` és az `ngOnDestroy`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `ngOnDestroy` csak akkor hívódik, ha.

**Hamis válasz 3:**  
Mindkét hook csak dev módban fut; production buildben a compiler eltávolítja őket. Ha architektúra review-n indokolod, a kiinduló tétel: Mindkét hook csak dev módban fut; production buildben a compiler eltávolítja őket. Ebből vezethető le a hibakezelés, a tesztelés és a production checkl.

### Kérdés 36: Mit jelent a ViewEncapsulation Emulated, None és ShadowDom?

**Hamis válasz 1:**  
Emulated mód natív Shadow DOM-ot használ minden böngészőben, None pedig teljesen elszigeteli a stílusokat. Ennek az az oka, hogy emulated mód natív Shadow DOM-ot használ minden böngészőben, None pedig teljesen elszigeteli a stílusokat — ezt rögtön mechan.

**Hamis válasz 2:**  
ShadowDom encapsulation nem támogatott Angularban; csak Emulated és None létezik hivatalosan. A „Mit jelent a ViewEncapsulation Emulated, None és ShadowDom" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy shadowDom encapsulation nem támogatott.

**Hamis válasz 3:**  
None encapsulation automatikusan hozzáad `_ngcontent` attribútumokat a globális stílusokhoz. Ha architektúra review-n indokolod, a kiinduló tétel: None encapsulation automatikusan hozzáad `_ngcontent` attribútumokat a globális stílusokhoz. Ebből vezethető le a hibakezelés, a tesztelés és a production c.

### Kérdés 37: Mi a különbség a template-driven és a reactive forms között?

**Hamis válasz 1:**  
Template-driven forms programozott API-val építik a FormGroup-ot, reactive forms pedig csak HTML attribútumokkal. Ennek az az oka, hogy template-driven forms programozott API-val építik a FormGroup-ot, reactive forms pedig csak HTML attribútumokkal — ezt rögtön mechani.

**Hamis válasz 2:**  
Reactive forms nem támogat validátorokat; minden ellenőrzés csak template-driven megoldással lehetséges. A „Mi a különbség a template-driven és a reactive forms között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy reactive forms nem támogat validátorokat; minden ellenőrzés csak.

**Hamis válasz 3:**  
A két megközelítés ugyanazt a belső modellt használja, de reactive forms nem integrálódik change detectionnel. Ha architektúra review-n indokolod, a kiinduló tétel: A két megközelítés ugyanazt a belső modellt használja, de reactive forms nem integrálódik change detectionnel.

### Kérdés 38: Mik a beépített Angular validátorok, és hol használjuk őket?

**Hamis válasz 1:**  
A `Validators.required` csak template-driven formban működik, reactive formban custom validator kell helyette. Ennek az az oka, hogy a `Validators.required` csak template-driven formban működik, reactive formban custom validator kell helyette — ezt rögtön mechanizmus-szinten is meg szo.

**Hamis válasz 2:**  
Beépített validátorok csak route guardokban használhatók, form controlokon nem. A „Mik a beépített Angular validátorok, és hol használjuk őket" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy beépített validátorok csak route gua.

**Hamis válasz 3:**  
A `Validators.email` regex-e kizárólag magyar domaineket fogad el (.hu végződés). Ha architektúra review-n indokolod, a kiinduló tétel: A `Validators.email` regex-e kizárólag magyar domaineket fogad el (.hu végződés).

### Kérdés 39: Mi az async pipe, és miért hasznos?

**Hamis válasz 1:**  
Az async pipe szinkron értéket vár, és Observable esetén hibát dob a template compile során. Ennek az az oka, hogy az async pipe szinkron értéket vár, és Observable esetén hibát dob a template compile során — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az async pipe manuálisan kell unsubscribe-olni `ngOnDestroy`-ban, különben memory leak garantált. A „Mi az async pipe, és miért hasznos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az async pipe manuálisan kell unsubscribe-olni `ngOnDestroy`-ban, különben memory leak garantált.

**Hamis válasz 3:**  
Az async pipe csak BehaviorSubject-tel működik; sima Observable-n nem renderel. Ha architektúra review-n indokolod, a kiinduló tétel: Az async pipe csak BehaviorSubject-tel működik; sima Observable-n nem renderel. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 40: Mi a standalone komponens, és miért vált alapértelmezetté?

**Hamis válasz 1:**  
Standalone komponens nem importálhat más komponenst; minden dependency globálisan regisztrált. Ennek az az oka, hogy standalone komponens nem importálhat más komponenst; minden dependency globálisan regisztrált — ezt rögtön mechanizmus-szinten is meg szokás véden.

**Hamis válasz 2:**  
A standalone csak dev preview, production buildben automatikusan NgModule-ba csomagolódik. A „Mi a standalone komponens, és miért vált alapértelmezetté" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a standalone csak dev preview, production buildben automatikusan NgModule-ba csomago.

**Hamis válasz 3:**  
Standalone komponensek nem használhatnak DI-t, mert nincs injector scope-juk. Ha architektúra review-n indokolod, a kiinduló tétel: Standalone komponensek nem használhatnak DI-t, mert nincs injector scope-juk. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 41: Mi a kapcsolata a `*ngIf` / `*ngFor` és az új `@if` / `@for` control flow-nak?

**Hamis válasz 1:**  
A `@if` és `@for` teljesen más runtime motort használnak, ezért nem migrálható a régi szintaxis. Ennek az az oka, hogy a `@if` és `@for` teljesen más runtime motort használnak, ezért nem migrálható a régi szintaxis — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíció.

**Hamis válasz 2:**  
A `*ngIf` gyorsabb, mert natív JavaScript template literal, az `@if` pedig régi microsyntax wrapper. A „Mi a kapcsolata a `*ngIf` / `*ngFor` és az új `@if` / `@for` control flow-nak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány.

**Hamis válasz 3:**  
Control flow csak SSR-ben működik; CSR buildben vissza kell váltani `*ngIf`-re. Ha architektúra review-n indokolod, a kiinduló tétel: Control flow csak SSR-ben működik; CSR buildben vissza kell váltani `*ngIf`-re. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 42: Mit jelent a semantic HTML, és miért fontos?

**Hamis válasz 1:**  
Semantic HTML azt jelenti, hogy minden elemhez kötelező `id` attribútum tartozzon SEO miatt. Ennek az az oka, hogy semantic HTML azt jelenti, hogy minden elemhez kötelező `id` attribútum tartozzon SEO miatt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmo.

**Hamis válasz 2:**  
A `<div>` a legjobb semantic elem minden tartalomhoz, mert nem ad extra jelentést a layoutnak. A „Mit jelent a semantic HTML, és miért fontos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `<div>` a legjobb semantic elem minden tartalomhoz, mert nem ad extra jelen.

**Hamis válasz 3:**  
Semantic tagok csak CSS class neveket jelölnek; screen reader számára mindegy, milyen elem a wrapper. Ha architektúra review-n indokolod, a kiinduló tétel: Semantic tagok csak CSS class neveket jelölnek; screen reader számára mindegy, milyen elem a wrapper.

### Kérdés 43: Mi a `:hover`, `:focus` és `:focus-visible` szerepe?

**Hamis válasz 1:**  
A `:focus-visible` mindig egér hover esetén is aktiválódik, a `:hover` pedig csak billentyűzetes navigációnál. Ennek az az oka, hogy a `:focus-visible` mindig egér hover esetén is aktiválódik, a `:hover` pedig csak billentyűzetes navigációnál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíciók.

**Hamis válasz 2:**  
A `:focus` és a `:focus-visible` ugyanaz minden böngészőben, a különbség csak Safari-ban van. A „Mi a `:hover`, `:focus` és `:focus-visible` szerepe" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `:focus` és a `:focus-visible` ugyanaz minden böngészőben, a különbség csak Safari-ban van.

**Hamis válasz 3:**  
`:hover` mobil eszközön is folyamatosan aktív marad touch után, ezért sosem szabad használni. Ha architektúra review-n indokolod, a kiinduló tétel: `:hover` mobil eszközön is folyamatosan aktív marad touch után, ezért sosem szabad használni. Interjúban érdemes a döntést.

### Kérdés 44: Mi az event bubbling, és mit csinál a `stopPropagation`?

**Hamis válasz 1:**  
Event bubbling azt jelenti, hogy az esemény először a gyerek elemtől indul a dokumentum felé, majd visszafelé capture fázisban fut. Ennek az az oka, hogy event bubbling azt jelenti, hogy az esemény először a gyerek elemtől indul a dokumentum felé, majd visszafelé capture fázisban fut — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként e.

**Hamis válasz 2:**  
A `stopPropagation` törli az eseménykezelőt permanent módon az elemről. A „Mi az event bubbling, és mit csinál a `stopPropagation`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `stopPropagation` törli az eseménykezelőt permanent módon.

**Hamis válasz 3:**  
Angularban nincs bubbling; minden `(click)` csak a közvetlen elemen fut le. Ha architektúra review-n indokolod, a kiinduló tétel: Angularban nincs bubbling; minden `(click)` csak a közvetlen elemen fut le. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 45: Mi a Promise, és miben különbözik az Observable-től?

**Hamis válasz 1:**  
A Promise több értéket is emitálhat idővel, az Observable pedig csak egyetlen settle értéket ad. Ennek az az oka, hogy a Promise több értéket is emitálhat idővel, az Observable pedig csak egyetlen settle értéket ad — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
Promise lazy, Observable eager — subscribe nélkül is lefut a teljes Observable pipeline. A „Mi a Promise, és miben különbözik az Observable-től" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy promise lazy, Observable eager — subscribe.

**Hamis válasz 3:**  
Observable nem kezel cancel-t; Promise viszont `AbortController` nélkül is automatikusan megszakítható. Ha architektúra review-n indokolod, a kiinduló tétel: Observable nem kezel cancel-t; Promise viszont `AbortController` nélkül is automatikusan megszakítható. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 46: Mi a `typeof null` furcsasága, és hogyan ellenőrizzünk nullt helyesen?

**Hamis válasz 1:**  
A `typeof null` helyesen `"null"`-t ad; a `"object"` csak IE11-ben jelenik meg. Ennek az az oka, hogy a `typeof null` helyesen `"null"`-t ad; a `"object"` csak IE11-ben jelenik meg — ez.

**Hamis válasz 2:**  
Null ellenőrzéshez elég a `== undefined`, mert az szigorúan csak null-ra igaz. A „Mi a `typeof null` furcsasága, és hogyan ellenőrizzünk nullt helyesen" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont a.

**Hamis válasz 3:**  
A `value === null` mindig false, ha az érték undefined is lehet; csak `typeof` megbízható. Ha architektúra review-n indokolod, a kiinduló tétel: A `value === null` mindig false, ha az érték undefined.

### Kérdés 47: Mire valók a TypeScript utility type-ok: `Partial`, `Pick`, `Omit`, `Readonly`?

**Hamis válasz 1:**  
A `Partial<T>` minden mezőt kötelezővé tesz, a `Readonly<T>` pedig minden mezőt opcionálissá. Ennek az az oka, hogy a `Partial<T>` minden mezőt kötelezővé tesz, a `Readonly<T>` pedig minden mezőt opcionálissá — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Utility type-ok runtime class-okat generálnak, amik deep freeze-t végeznek az objektumon. A „Mire valók a TypeScript utility type-ok: `Partial`, `Pick`, `Omit`, `Readonly`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az,.

**Hamis válasz 3:**  
A `Pick` és `Omit` csak enumokon működik; interface mezőin nem használhatók. Ha architektúra review-n indokolod, a kiinduló tétel: A `Pick` és `Omit` csak enumokon működik; interface mezőin nem használhatók. Ebből vezethető le a hibakezelés, a tesztelés és a production chec.

### Kérdés 48: Hogyan hivatkozunk a sablonban egy DOM elemre, és hogyan érjük el a kódból?

**Hamis válasz 1:**  
Template reference változó csak `#ref` nélkül működik; a `#` csak komment szintaxis. Ennek az az oka, hogy template reference változó csak `#ref` nélkül működik; a `#` csak komment szintaxis — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `@ViewChild` mindig az `ngOnInit` előtt, a konstruktorban ad érvényes elemreferenciát. A „Hogyan hivatkozunk a sablonban egy DOM elemre, és hogyan érjük el a kódból" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, h.

**Hamis válasz 3:**  
DOM elem eléréséhez kötelező a `document.querySelector` használata; Angular ref nem ajánlott. Ha architektúra review-n indokolod, a kiinduló tétel: DOM elem eléréséhez kötelező a `document.querySelector` használata; Angular r.

### Kérdés 49: Mi a különbség a `display: none` és a `visibility: hidden` között?

**Hamis válasz 1:**  
A `visibility: hidden` kiveszi az elemet a layout flow-ból, a `display: none` pedig megtartja a helyét. Ennek az az oka, hogy a `visibility: hidden` kiveszi az elemet a layout flow-ból, a `display: none` pedig megtartja a helyét — ezt rögtön mechanizmus-szinten is meg szokás v.

**Hamis válasz 2:**  
Mindkettő ugyanazt csinálja; a különbség csak akkor van, ha flex/grid gyerek az elem. A „Mi a különbség a `display: none` és a `visibility: hidden` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mindket.

**Hamis válasz 3:**  
`display: none` elem még mindig fókuszálható tab-bal, `visibility: hidden` viszont nem. Ha architektúra review-n indokolod, a kiinduló tétel: `display: none` elem még mindig fókuszálható tab-bal, `visibility: hidden` viszont nem. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 50: Mi az AOT fordítás Angularban, és miért az alapértelmezett?

**Hamis válasz 1:**  
Az AOT futásidőben fordítja a template-et a böngészőben, a JIT pedig build time-ban a CLI-ben. Ennek az az oka, hogy az AOT futásidőben fordítja a template-et a böngészőben, a JIT pedig build time-ban a CLI-ben — ezt rögtön mechanizmus-szinten is me.

**Hamis válasz 2:**  
AOT csak dev módban fut; production build mindig JIT-et használ gyorsabb iterációért. A „Mi az AOT fordítás Angularban, és miért az alapértelmezett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos.

**Hamis válasz 3:**  
AOT nélkül nem lehet standalone komponenst használni, ezért lett kötelező a v12 óta. Ha architektúra review-n indokolod, a kiinduló tétel: AOT nélkül nem lehet standalone komponenst használni, ezé.

## Medior

### Kérdés 1: Mi az OnPush change detection, és mikor fut le?

**Hamis válasz 1:**  
OnPush komponens minden Zone.js eseménynél automatikusan lefut, ugyanúgy mint Default stratégia esetén. Ennek az az oka, hogy onPush komponens minden Zone.js eseménynél automatikusan lefut, ugyanúgy mint Default stratégia esetén — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
OnPush csak akkor ellenőriz, ha `@Input()` referencia megváltozik; belső state módosítás sosem triggerel CD-t. A „Mi az OnPush change detection, és mikor fut le" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy onPush csak akkor ellenőriz, ha `@Input()` referencia megváltozik; belső state módosítás sosem triggerel CD-t. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
OnPush kikapcsolja a change detectiont teljesen; manuálisan kell `detectChanges()` minden adatfrissítésnél. Ha architektúra review-n indokolod, a kiinduló tétel: OnPush kikapcsolja a change detectiont teljesen; manuálisan kell `detectChanges()` minden adatfrissítésnél. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbne.

### Kérdés 2: Mik a change detection öt fő triggerje Zone.js mellett?

**Hamis válasz 1:**  
Az öt trigger: HTTP válasz, router navigáció, setTimeout, user input és WebSocket — async pipe nem számít. Ennek az az oka, hogy az öt trigger: HTTP válasz, router navigáció, setTimeout, user input és WebSocket — async pipe nem számít — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, m.

**Hamis válasz 2:**  
Zone.js mellett csak egy trigger van: bármilyen DOM esemény, minden más automatikusan debounce-olva van. A „Mik a change detection öt fő triggerje Zone.js mellett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy zone.js mellett csak egy trigger van: bármilyen DOM esemény, minden más automatikusan debounce-olva van. Interjúban érdemes a döntést.

**Hamis válasz 3:**  
Signal frissítés nem triggerel change detectiont Zone.js alatt, csak zoneless módban. Ha architektúra review-n indokolod, a kiinduló tétel: Signal frissítés nem triggerel change detectiont Zone.js alatt, csak zoneless módban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 3: Magyarázd el a `switchMap`, `mergeMap`, `concatMap` és `exhaustMap` különbségét?

**Hamis válasz 1:**  
A `switchMap` megvárja az összes belső Observable befejezését, mielőtt a következő forrás értékre váltana. Ennek az az oka, hogy a `switchMap` megvárja az összes belső Observable befejezését, mielőtt a következő forrás értékre váltana — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
A `mergeMap` szigorúan sorban futtat minden belső streamet, párhuzamos indítás nem lehetséges. A „Magyarázd el a `switchMap`, `mergeMap`, `concatMap` és `exhaustMap` különbségét" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `mergeMap` szigorúan sorban futtat minden belső streamet, párhuzamos indítás nem lehetséges. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál e.

**Hamis válasz 3:**  
Az `exhaustMap` minden új forrás értéknél megszakítja az előző belső streamet, mint a switchMap. Ha architektúra review-n indokolod, a kiinduló tétel: Az `exhaustMap` minden új forrás értéknél megszakítja az előző belső streamet, mint a switchMap. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 4: Mikor NEM jó választás a `switchMap`?

**Hamis válasz 1:**  
SwitchMap mindig a legjobb választás typeahead keresésnél, mert párhuzamosan tartja az összes HTTP kérést. Ennek az az oka, hogy switchMap mindig a legjobb választás typeahead keresésnél, mert párhuzamosan tartja az összes HTTP kérést — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni s.

**Hamis válasz 2:**  
SwitchMap-et kerülni kell, ha cancelálni akarod az előző kérést; ilyenkor mergeMap a helyes. A „Mikor NEM jó választás a `switchMap`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy switchMap-et kerülni kell, ha cancelálni akarod az előző kérést; ilyenkor mergeMap a helyes. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
SwitchMap csak cold observable forrással működik; hot streamen automatikusan concatMap-re vált. Ha architektúra review-n indokolod, a kiinduló tétel: SwitchMap csak cold observable forrással működik; hot streamen automatikusan concatMap-re vált. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 5: Mi a különbség a `forkJoin`, `combineLatest`, `withLatestFrom` és a `zip` között?

**Hamis válasz 1:**  
A `forkJoin` minden emitnél azonnal emitál, még akkor is, ha a források nem complete-eltek. Ennek az az oka, hogy a `forkJoin` minden emitnél azonnal emitál, még akkor is, ha a források nem complete-eltek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-inst.

**Hamis válasz 2:**  
A `combineLatest` csak akkor ad értéket, ha minden forrás complete-elt — addig nem emitál. A „Mi a különbség a `forkJoin`, `combineLatest`, `withLatestFrom` és a `zip` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `combineLatest` csak akkor ad értéket, ha minden forrás complete-elt — addig nem emitál. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
A `withLatestFrom` és a `zip` teljesen ugyanaz: mindkettő minden indexnél párosít két streamet. Ha architektúra review-n indokolod, a kiinduló tétel: A `withLatestFrom` és a `zip` teljesen ugyanaz: mindkettő minden indexnél párosít két streamet. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mut.

### Kérdés 6: Mi a nested `subscribe` antipattern, és mi a megoldás?

**Hamis válasz 1:**  
Nested subscribe a hivatalos Angular minta több HTTP hívás láncolására; operátorok helyett mindig ezt használd. Ennek az az oka, hogy nested subscribe a hivatalos Angular minta több HTTP hívás láncolására; operátorok helyett mindig ezt használd — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. A gyors fix helyett a hosszú távú karbantarthatóságot hangsúlyozd: a félreértett alapfogalom később egész feature-láncot mérgezhet meg.

**Hamis válasz 2:**  
A megoldás extra `subscribe` a belső streamre, így biztosan lefut a complete callback. A „Mi a nested `subscribe` antipattern, és mi a megoldás" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a megoldás extra `subscribe` a belső streamre, így biztosan lefut a complete callback. Interjúban érdemes a döntést.

**Hamis válasz 3:**  
Nested subscribe nem okoz memory leaket, mert a Zone.js automatikusan unsubscribe-ol destroy-kor. Ha architektúra review-n indokolod, a kiinduló tétel: Nested subscribe nem okoz memory leaket, mert a Zone.js automatikusan unsubscribe-ol destroy-kor. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 7: Hogyan előzzük meg a memory leaket Observable-nél Angularban?

**Hamis válasz 1:**  
Memory leak csak akkor lehetséges, ha BehaviorSubject-et használsz; sima Observable mindig auto-complete-el. Ennek az az oka, hogy memory leak csak akkor lehetséges, ha BehaviorSubject-et használsz; sima Observable mindig auto-complete-el — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Elég a `async` pipe elkerülése; manuális subscribe sosem okoz leaket root service-ben. A „Hogyan előzzük meg a memory leaket Observable-nél Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy elég a `async` pipe elkerülése; manuális subscribe sosem okoz leaket root service-ben. Interjúban érdemes a döntést trade-offokkal is alátá.

**Hamis válasz 3:**  
A `takeUntilDestroyed` csak zoneless appban működik; Zone.js mellett kötelező a setInterval cleanup. Ha architektúra review-n indokolod, a kiinduló tétel: A `takeUntilDestroyed` csak zoneless appban működik; Zone.js mellett kötelező a setInterval cleanup. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb.

### Kérdés 8: Mi a guardok tipikus hívási sorrendje navigációnál?

**Hamis válasz 1:**  
Először mindig a `CanDeactivate` fut, utána a `CanActivate`, végül a `CanMatch`. Ennek az az oka, hogy először mindig a `CanDeactivate` fut, utána a `CanActivate`, végül a `CanMatch` — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-off.

**Hamis válasz 2:**  
A guardok párhuzamosan futnak minden route-on; sorrend nem determinisztikus és nem is számít. A „Mi a guardok tipikus hívási sorrendje navigációnál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a guardok párhuzamosan futnak minden route-on; sorrend nem determinisztikus és nem is számít.

**Hamis válasz 3:**  
`CanMatch` csak akkor hívódik, ha a navigáció már complete-elt és a komponens megjelent. Ha architektúra review-n indokolod, a kiinduló tétel: `CanMatch` csak akkor hívódik, ha a navigáció már complete-elt és a komponens megjelent. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a run.

### Kérdés 9: Mi a különbség a `canMatch` és a `canActivate` között?

**Hamis válasz 1:**  
A `canMatch` a komponens példányosítása után fut, a `canActivate` pedig a route config betöltése előtt. Ennek az az oka, hogy a `canMatch` a komponens példányosítása után fut, a `canActivate` pedig a route config betöltése előtt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
`canMatch` csak query paramétereket ellenőriz; path és lazy chunk döntéshez `canActivate` kell. A „Mi a különbség a `canMatch` és a `canActivate` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `canMatch` csak query paramétereket ellenőriz; path és lazy chunk döntéshez `canActivate` kell.

**Hamis válasz 3:**  
A kettő között nincs különbség; a `canMatch` csak alias név ugyanarra a guard interface-re. Ha architektúra review-n indokolod, a kiinduló tétel: A kettő között nincs különbség; a `canMatch` csak alias név ugyanarra a guard interface-re. Ebből vezethető le a hibakezelés, a tesztelés és a production.

### Kérdés 10: Mik a DI resolution modifier-ek (`@Optional`, `@Self`, `@SkipSelf`, `@Host`), és mire valók?

**Hamis válasz 1:**  
A `@Self` a root injectorból kér szolgáltatást, a `@SkipSelf` pedig kizárólag az aktuális elem injectorból. Ennek az az oka, hogy a `@Self` a root injectorból kér szolgáltatást, a `@SkipSelf` pedig kizárólag az aktuális elem injectorból — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető.

**Hamis válasz 2:**  
Az `@Optional` kötelezővé teszi a függőséget; hiány esetén build error keletkezik. A „Mik a DI resolution modifier-ek (`@Optional`, `@Self`, `@SkipSelf`, `@Host`), és mire valók" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `@Optional` kötelezővé teszi a függőséget; hiány esetén build error keletkezik.

**Hamis válasz 3:**  
A `@Host` minden service-t singleton-ná tesz az egész alkalmazásban, függetlenül a provider scope-tól. Ha architektúra review-n indokolod, a kiinduló tétel: A `@Host` minden service-t singleton-ná tesz az egész alkalmazásban, függetlenül a provider scope-tól. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 11: Mi a különbség a `providers` és a `viewProviders` között?

**Hamis válasz 1:**  
A `viewProviders` csak a projected content számára érhető el, a `providers` pedig csak a komponens sablonjára. Ennek az az oka, hogy a `viewProviders` csak a projected content számára érhető el, a `providers` pedig csak a komponens sablonjára — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
ViewProviders automatikusan exportálódik minden child komponensnek, providers viszont sosem öröklődik. A „Mi a különbség a `providers` és a `viewProviders` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy viewProviders automatikusan exportálódik minden child komponensnek, providers viszont sosem öröklődik.

**Hamis válasz 3:**  
A kettő ugyanaz; a különbség csak a standalone vs NgModule deklarációban jelenik meg. Ha architektúra review-n indokolod, a kiinduló tétel: A kettő ugyanaz; a különbség csak a standalone vs NgModule deklarációban jelenik meg. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 12: Mi a különbség a `@ViewChild` és a `@ContentChild` között?

**Hamis válasz 1:**  
A `@ViewChild` projected tartalmat keres, a `@ContentChild` pedig a komponens saját template-jét. Ennek az az oka, hogy a `@ViewChild` projected tartalmat keres, a `@ContentChild` pedig a komponens saját template-jét — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne.

**Hamis válasz 2:**  
Mindkettő csak konstruktorban ad érvényes referenciát; ngAfterViewInit-ben mindkettő undefined. A „Mi a különbség a `@ViewChild` és a `@ContentChild` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mindkettő csak konstruktorban ad érvényes referenciát; ngAfterViewInit-ben mindkettő undefined.

**Hamis válasz 3:**  
ContentChild statikus flag esetén is csak ngAfterViewInit után érhető el, ViewChild viszont azonnal. Ha architektúra review-n indokolod, a kiinduló tétel: ContentChild statikus flag esetén is csak ngAfterViewInit után érhető el, ViewChild viszont azonnal. Interjúban érdemes .

### Kérdés 13: Mi a content projection, az `ngProjectAs` és a fallback tartalom?

**Hamis válasz 1:**  
Content projection csak CSS-ben létezik; Angularban minden slot manuális `innerHTML` beállítással történik. Ennek az az oka, hogy content projection csak CSS-ben létezik; Angularban minden slot manuális `innerHTML` beállítással történik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `ngProjectAs` megváltoztatja a DOM tag nevét is, nem csak a selector illesztést. A „Mi a content projection, az `ngProjectAs` és a fallback tartalom" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `ngProjectAs` megváltoztatja a DOM tag nevét is, nem csak a selector illesz.

**Hamis válasz 3:**  
Fallback tartalom akkor jelenik meg, ha van projected content is — mindkettő egyszerre renderelődik mindig. Ha architektúra review-n indokolod, a kiinduló tétel: Fallback tartalom akkor jelenik meg, ha van projected content is — mindkettő egyszerre renderelődik mindig. Interjúban érdemes .

### Kérdés 14: Mikor használjunk pure, és mikor impure pipe-ot?

**Hamis válasz 1:**  
Pure pipe minden change detection ciklusban újraszámol, impure pipe csak input referencia változáskor. Ennek az az oka, hogy pure pipe minden change detection ciklusban újraszámol, impure pipe csak input referencia változáskor — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Impure pipe mindig gyorsabb nagy listáknál, mert cache-el a pipe class szintjén. A „Mikor használjunk pure, és mikor impure pipe-ot" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy impure pipe mindig gyorsabb nagy listáknál, mert cache-el a pipe class szintjén.

**Hamis válasz 3:**  
Pure és impure között nincs teljesítmény különbség; a pure flag csak lint szabály miatt van. Ha architektúra review-n indokolod, a kiinduló tétel: Pure és impure között nincs teljesítmény különbség; a pure flag csak lint szabály miatt van. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 15: Mi a különbség a `FormGroup.value` és a `getRawValue()` között?

**Hamis válasz 1:**  
A `value` mindig visszaadja a disabled mezőket is, a `getRawValue()` pedig kihagyja őket. Ennek az az oka, hogy a `value` mindig visszaadja a disabled mezőket is, a `getRawValue()` pedig kihagyja őket — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `getRawValue()` csak template-driven formon működik; reactive formon nincs ilyen metódus. A „Mi a különbség a `FormGroup.value` és a `getRawValue()` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszo.

**Hamis válasz 3:**  
A kettő teljesen ugyanaz, kivéve ha async validátor fut — akkor csak a `value` megbízható. Ha architektúra review-n indokolod, a kiinduló tétel: A kettő teljesen ugyanaz, kivéve ha async validátor fut — akkor csak a `value` megbízható.

### Kérdés 16: Mik azok a Typed Forms (v14+), és miért jobbak a régieknél?

**Hamis válasz 1:**  
Typed Forms runtime típusellenőrzést végez minden keystroke-nál a böngészőben. Ennek az az oka, hogy typed Forms runtime típusellenőrzést végez minden keystroke-nál a böngészőben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontra.

**Hamis válasz 2:**  
Typed Forms kizárólag Signal Forms része; reactive FormGroup nem támogat típusgenerikust. A „Mik azok a Typed Forms (v14+), és miért jobbak a régieknél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy typed Forms kizárólag Signal Forms része; reactive FormGro.

**Hamis válasz 3:**  
A typed API miatt nem lehet dynamic mezőneveket használni; minden control neve compile time string literal kell legyen minden projektben. Ha architektúra review-n indokolod, a kiinduló tétel: A typed API miatt nem lehet dynamic mezőneveket használni; minden control neve compile time string literal kell legyen minden projektben.

### Kérdés 17: Mi a ControlValueAccessor, és mikor kell implementálni?

**Hamis válasz 1:**  
ControlValueAccessor csak natív `<input>` elemekhez kell; custom komponensek automatikusan integrálódnak. Ennek az az oka, hogy controlValueAccessor csak natív `<input>` elemekhez kell; custom komponensek automatikusan integrálódnak — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik.

**Hamis válasz 2:**  
CVA implementálása nélkül is működik a `formControlName` binding bármilyen komponensen. A „Mi a ControlValueAccessor, és mikor kell implementálni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cVA implementálása nélkül is működik a `formControlName` binding bármilyen komponensen. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
A CVA a HTTP interceptor része; form értékeket a szerver validálja ezen az interfészen keresztül. Ha architektúra review-n indokolod, a kiinduló tétel: A CVA a HTTP interceptor része; form értékeket a szerver validálja ezen az interfészen keresztül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 18: Hogyan működik a funkcionális HTTP interceptor (v15+)?

**Hamis válasz 1:**  
A funkcionális interceptor class-alapú, és `@Injectable()` dekorátorral regisztrálódik a `HTTP_INTERCEPTORS` tokenen. Ennek az az oka, hogy a funkcionális interceptor class-alapú, és `@Injectable()` dekorátorral regisztrálódik a `HTTP_INTERCEPTORS` tokenen — ezt rögtön mechanizmus-szinten is meg szokás v.

**Hamis válasz 2:**  
Functional interceptor csak response-t tud módosítani; request chain-be nem illeszthető. A „Hogyan működik a funkcionális HTTP interceptor (v15+)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy functional interceptor csak response-t tud módosítani; request chain-be nem illeszthető.

**Hamis válasz 3:**  
Interceptorök csak dev serveren futnak; production HttpClient közvetlenül a fetch API-t hívja interceptor nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Interceptorök csak dev serveren futnak; production HttpClient közvetlenül a fetch API-t hívja interceptor nélkül. Ebből vezethető le a hibakezelés, a tesztelés és a production checkl.

### Kérdés 19: Mi a `DestroyRef` és az injection context, és miért fontosak?

**Hamis válasz 1:**  
A `DestroyRef` manuálisan hívható `destroy()` metódussal bármikor, függetlenül a komponens lifecycle-től. Ennek az az oka, hogy a `DestroyRef` manuálisan hívható `destroy()` metódussal bármikor, függetlenül a komponens lifecycle-től — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Injection context csak konstruktorban létezik; `inject()` függvény máshol hibát dob mindig. A „Mi a `DestroyRef` és az injection context, és miért fontosak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy injection context csak konstruktorban létezik; `inject()` függvény máshol hibát do.

**Hamis válasz 3:**  
DestroyRef és takeUntilDestroyed ugyanaz a deprecated és az új API; mindkettőt egyszerre kell használni. Ha architektúra review-n indokolod, a kiinduló tétel: DestroyRef és takeUntilDestroyed ugyanaz a deprecated és az új API; mindkettőt egyszerre kell használni. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 20: Mi a `signal`, a `computed` és az `effect` szerepe, és mit ne tegyünk `effect`-ben?

**Hamis válasz 1:**  
Effect-ben nyugodtan állíthatsz más signal értéket; ez a hivatalos state szinkronizációs minta. Ennek az az oka, hogy effect-ben nyugodtan állíthatsz más signal értéket; ez a hivatalos state szinkronizációs minta — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért i.

**Hamis válasz 2:**  
A `computed` írható signal, amit `set()`-tel frissíthetsz template eventből. A „Mi a `signal`, a `computed` és az `effect` szerepe, és mit ne tegyünk `effect`-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `computed` írható signal, amit `set()`-tel frissíthetsz template eventből. Interjúban érdemes a döntést trade-off.

**Hamis válasz 3:**  
Signal csak zoneless módban működik; Zone.js mellett minden signal automatikusan BehaviorSubject-re mapelődik. Ha architektúra review-n indokolod, a kiinduló tétel: Signal csak zoneless módban működik; Zone.js mellett minden signal automatikusan BehaviorSubject-re mapelődik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 21: Mire valók az `input()`, `output()` és `model()` API-k?

**Hamis válasz 1:**  
A `model()` csak one-way input; two-way bindinghez külön `@Output()` kell minden mezőhöz. Ennek az az oka, hogy a `model()` csak one-way input; two-way bindinghez külön `@Output()` kell minden mezőhöz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak.

**Hamis válasz 2:**  
Az `output()` szinkron értéket ad vissza, nem Observable-t vagy subscription-t igényel. A „Mire valók az `input()`, `output()` és `model()` API-k" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `output()` szinkron értéket ad vissza, nem Observ.

**Hamis válasz 3:**  
Az `input()` signal nem kompatibilis OnPush-sal; ilyen komponensben Default CD kötelező. Ha architektúra review-n indokolod, a kiinduló tétel: Az `input()` signal nem kompatibilis OnPush-sal; ilyen komponensben Default CD kötelező.

### Kérdés 22: Mi a döntési szabály a `toSignal` / `toObservable` és az RxJS vs Signals között?

**Hamis válasz 1:**  
Minden Observable-t azonnal signalra kell váltani; RxJS stream megtartása deprecated a v17 óta. Ennek az az oka, hogy minden Observable-t azonnal signalra kell váltani; RxJS stream megtartása deprecated a v17 óta — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `toObservable` szinkron signal értéket ad, subscribe nélkül is lefut a teljes operátor lánc. A „Mi a döntési szabály a `toSignal` / `toObservable` és az RxJS vs Signals között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `toObservable` szinkron signal értéket ad, subscribe n.

**Hamis válasz 3:**  
Signals és RxJS sosem keverhetők; interop API csak dev buildben elérhető. Ha architektúra review-n indokolod, a kiinduló tétel: Signals és RxJS sosem keverhetők; interop API csak dev buildben elérhető. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook.

### Kérdés 23: Hogyan érdemes SCSS architektúrát felépíteni (tokens, base, utilities, themes)?

**Hamis válasz 1:**  
Minden stílust egyetlen global.scss-be kell tenni; moduláris felépítés csak lassítja a buildet. Ennek az az oka, hogy minden stílust egyetlen global.scss-be kell tenni; moduláris felépítés csak lassítja a buildet — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A utilities réteg tartalmazza a komponens-specifikus layoutot; tokens csak színhexek listája JS-ben. A „Hogyan érdemes SCSS architektúrát felépíteni (tokens, base, utilities, themes)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a utilities réteg tartalmazza a komponens-specifikus layoutot; tokens csak színhexek listája JS-ben.

**Hamis válasz 3:**  
Theme váltáshoz kötelező külön SCSS fájlt buildelni brandenként; CSS változó nem elég runtime-ban. Ha architektúra review-n indokolod, a kiinduló tétel: Theme váltáshoz kötelező külön SCSS fájlt buildelni brandenként; CSS változó nem elég runtime-ban. Ebből vezethető le a hibakezelés, a tesztelés és a producti.

### Kérdés 24: Miért legyen a design token CSS custom property, ne SCSS `$változó`?

**Hamis válasz 1:**  
SCSS változó futásidőben is módosítható theme váltáskor, custom property viszont csak compile time-ban él. Ennek az az oka, hogy sCSS változó futásidőben is módosítható theme váltáskor, custom property viszont csak compile time-ban él — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak def.

**Hamis válasz 2:**  
Custom property lassabb renderelés, ezért minden tokennek SCSS-ben kell maradnia productionben. A „Miért legyen a design token CSS custom property, ne SCSS `$változó`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy custom proper.

**Hamis válasz 3:**  
Design token csak akkor működik, ha Tailwind configba másolod őket; CSS var nem támogatott design systemben. Ha architektúra review-n indokolod, a kiinduló tétel: Design token csak akkor működik, ha Tailwind configba másolod őket; CSS var nem támogatott design systemben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 25: Miért kerülendő a `::ng-deep`, és mi a helyette való megoldás?

**Hamis válasz 1:**  
Az `::ng-deep` a hivatalos Angular 20+ megoldás child komponens stílusára; deprecation visszavonva. Ennek az az oka, hogy az `::ng-deep` a hivatalos Angular 20+ megoldás child komponens stílusára; deprecation visszavonva — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak de.

**Hamis válasz 2:**  
Ng-deep helyett mindig `!important`-ot használj globális CSS-ben, mert az nem töri az encapsulationt. A „Miért kerülendő a `::ng-deep`, és mi a helyette való megoldás" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ng-deep helyett mindig `!important`-ot használj glob.

**Hamis válasz 3:**  
Ng-deep csak JIT buildben működik; AOT automatikusan eltávolítja a szelektorokat. Ha architektúra review-n indokolod, a kiinduló tétel: Ng-deep csak JIT buildben működik; AOT automatikusan eltávolítja a szelektorokat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 26: Mit jelent a Flexboxban a `flex-grow`, `flex-shrink` és a `flex-basis`?

**Hamis válasz 1:**  
A `flex-grow` a shrink viselkedést állítja, a `flex-shrink` pedig a növekedési arányt. Ennek az az oka, hogy a `flex-grow` a shrink viselkedést állítja, a `flex-shrink` pedig a növekedési arányt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a .

**Hamis válasz 2:**  
Flex-basis mindig pixelben van, százalék vagy auto érték invalid a specifikáció szerint. A „Mit jelent a Flexboxban a `flex-grow`, `flex-shrink` és a `flex-basis`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy flex-basis mindig pixelben van, százalék vagy auto ért.

**Hamis válasz 3:**  
Ha flex-grow 0, az elem automatikusan kilép a flex containerből és absolute pozícióba kerül. Ha architektúra review-n indokolod, a kiinduló tétel: Ha flex-grow 0, az elem automatikusan kilép a flex containerből és absolute pozícióba kerül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 27: Mit jelent a CSS Gridben az `fr` egység és a `minmax` függvény?

**Hamis válasz 1:**  
Az `fr` fix pixel érték, amit a böngésző 16px-re kerekít minden oszlopnál. Ennek az az oka, hogy az `fr` fix pixel érték, amit a böngésző 16px-re kerekít minden oszlopnál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `minmax(200px, 1fr)` azt jelenti, hogy az oszlop maximum 200px lehet, minimum pedig 1fr. A „Mit jelent a CSS Gridben az `fr` egység és a `minmax` függvény" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `minmax(200px, 1fr)` azt jelenti.

**Hamis válasz 3:**  
Minmax csak flexboxban használható; grid track definícióban hibát dob a parser. Ha architektúra review-n indokolod, a kiinduló tétel: Minmax csak flexboxban használható; grid track definícióban hibát dob a parser. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 28: Hogyan kerüljük el a CSS specificity „háborút” a gyakorlatban?

**Hamis válasz 1:**  
Minél több ID szelektor, annál karbantarthatóbb a stylesheet; ez a BEM alapja. Ennek az az oka, hogy minél több ID szelektor, annál karbantarthatóbb a stylesheet; ez a BEM alapja — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus produc.

**Hamis válasz 2:**  
Specificity háború elkerülésére minden szabályhoz `!important` kell, így egyértelmű a prioritás. A „Hogyan kerüljük el a CSS specificity „háborút” a gyakorlatban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy specificity háború elkerülésére minden szabályhoz `!important` kell, így egyértelmű a prioritás.

**Hamis válasz 3:**  
Angular encapsulation miatt globális specificity szabályok nem érvényesülnek, ezért nem is kell figyelni rá. Ha architektúra review-n indokolod, a kiinduló tétel: Angular encapsulation miatt globális specificity szabályok nem érvényesülnek, ezért nem is kell figyelni rá. Interjúban érdemes a döntést trade-offo.

### Kérdés 29: Mi a Directive Composition API (v15+), és milyen problémát old meg?

**Hamis válasz 1:**  
Directive Composition csak NgModule import listát helyettesíti; funkcionalitás összevonásra nem való. Ennek az az oka, hogy directive Composition csak NgModule import listát helyettesíti; funkcionalitás összevonásra nem való — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne cs.

**Hamis válasz 2:**  
Host directive-ekkel nem lehet input/outputot expózni; csak lifecycle hook örökölhető. A „Mi a Directive Composition API (v15+), és milyen problémát old meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy host di.

**Hamis válasz 3:**  
Composition API JavaScriptben ír direktívát JSX-ből; template szintaxisra nincs hatása. Ha architektúra review-n indokolod, a kiinduló tétel: Composition API JavaScriptben ír direktívát JSX-ből; template szintaxisra nincs hatása. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 30: Mi az `ngOptimizedImage` kötelező követelménye, és miért?

**Hamis válasz 1:**  
Kötelező minden `<img>` helyett `<picture>` elem, különben a direktíva nem aktiválódik. Ennek az az oka, hogy kötelező minden `<img>` helyett `<picture>` elem, különben a direktíva nem aktiválódik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defi.

**Hamis válasz 2:**  
NgOptimizedImage csak base64 képeket támogat; URL-es képekhez sima img tag kell. A „Mi az `ngOptimizedImage` kötelező követelménye, és miért" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ngOptimizedImage.

**Hamis válasz 3:**  
A direktíva kötelezően WebP-re konvertál build time-ban, runtime src URL-t nem fogad el. Ha architektúra review-n indokolod, a kiinduló tétel: A direktíva kötelezően WebP-re konvertál build time-ban, runtime src URL-t nem fogad el. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 31: Mi a `@defer` (v17+), és milyen triggerei vannak?

**Hamis válasz 1:**  
A `@defer` azonnal betölt minden chunkot, a trigger csak analytics eseményt küld a háttérben. Ennek az az oka, hogy a `@defer` azonnal betölt minden chunkot, a trigger csak analytics eseményt küld a háttérben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Defer csak SSR oldalon működik; CSR-ben a blokk tartalma sosem jelenik meg. A „Mi a `@defer` (v17+), és milyen triggerei vannak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy defer csak SSR oldalon működik; CSR-ben a blokk tartalma sosem jelen.

**Hamis válasz 3:**  
Trigger lehetőségek: `on idle`, `on hover`, `on timer` — viewport trigger nem támogatott. Ha architektúra review-n indokolod, a kiinduló tétel: Trigger lehetőségek: `on idle`, `on hover`, `on timer` — viewport trigger nem támogatott. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 32: Mi a Facade service minta, és mikor érdemes használni?

**Hamis válasz 1:**  
Facade azt jelenti, hogy minden komponens közvetlenül a HttpClient-et hívja, service nélkül. Ennek az az oka, hogy facade azt jelenti, hogy minden komponens közvetlenül a HttpClient-et hívja, service nélkül — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Facade service csak UI stílusokat takar; állapotkezelésre sosem használjuk. A „Mi a Facade service minta, és mikor érdemes használni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy facade service csak UI stílusokat takar; állapotkezelésre sosem használjuk. Ha két megoldás közül választasz, azt vedd, amelyik kevesebb implicit állapotot vezet be — ez jól hangzó döntési elv interjúban.

**Hamis válasz 3:**  
Facade pattern tilos NgRx mellett; kettő egyszerre dupla store-t hoz létre. Ha architektúra review-n indokolod, a kiinduló tétel: Facade pattern tilos NgRx mellett; kettő egyszerre dupla store-t hoz létre. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 33: Mi a különbség a smart (container) és a dumb (presentational) komponens között?

**Hamis válasz 1:**  
Smart komponens csak `@Input()`-ot kap, dumb komponens pedig mindig service-ből tölt adatot. Ennek az az oka, hogy smart komponens csak `@Input()`-ot kap, dumb komponens pedig mindig service-ből tölt adatot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmo.

**Hamis válasz 2:**  
A különbség csak fájlnév konvenció; technikailag minden komponens smart alapértelmezetten. A „Mi a különbség a smart (container) és a dumb (presentational) komponens között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a különbség csak fájlnév konvenció; technikailag minden komponens smart alapértelmezetten.

**Hamis válasz 3:**  
Dumb komponens nem lehet standalone; csak NgModule deklarált presentational elem lehet. Ha architektúra review-n indokolod, a kiinduló tétel: Dumb komponens nem lehet standalone; csak NgModule deklarált presentational elem lehet. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 34: Hogyan tesztelsz aszinkron kódot Angularban zone-alapú és zoneless környezetben?

**Hamis válasz 1:**  
Zone-alapú tesztnél sosem kell `fakeAsync` vagy `waitForAsync`; a Zone automatikusan flush-el mindent. Ennek az az oka, hogy zone-alapú tesztnél sosem kell `fakeAsync` vagy `waitForAsync`; a Zone automatikusan flush-el mindent — ezt rögtön mechanizmus-szinten is meg sz.

**Hamis válasz 2:**  
Zoneless tesztben kötelező a `setTimeout(0)` minden assertion előtt; `fixture.detectChanges()` nem elég. A „Hogyan tesztelsz aszinkron kódot Angularban zone-alapú és zoneless környezetben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irá.

**Hamis válasz 3:**  
Aszinkron teszt csak E2E-ben lehetséges; unit teszt mindig szinkron mockot igényel HTTP helyett. Ha architektúra review-n indokolod, a kiinduló tétel: Aszinkron teszt csak E2E-ben lehetséges; unit teszt mindig szinkron mockot igényel HTTP helyett.

### Kérdés 35: Mi a RouterTestingHarness (v14+), és miért jobb a kézi router-tesztelésnél?

**Hamis válasz 1:**  
A RouterTestingHarness csak integration teszthez való; unit tesztben tilos használni. Ennek az az oka, hogy a RouterTestingHarness csak integration teszthez való; unit tesztben tilos használni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Harness manuálisan kell instantiate-olni `new RouterTestingHarness()` hívással, DI nélkül. A „Mi a RouterTestingHarness (v14+), és miért jobb a kézi router-tesztelésnél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irá.

**Hamis válasz 3:**  
A harness nem támogat guard-okat; navigációs tesztnél mindig valódi browser history kell. Ha architektúra review-n indokolod, a kiinduló tétel: A harness nem támogat guard-okat; navigációs tesztnél mindig valódi browser history kell.

### Kérdés 36: Mi a `share` / `shareReplay` szerepe, és mire kell vigyázni?

**Hamis válasz 1:**  
A `shareReplay(1)` mindig lezárja a forrás subscription-t az első subscriber után. Ennek az az oka, hogy a `shareReplay(1)` mindig lezárja a forrás subscription-t az első subscriber után — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Share operátor csak cold observable-t melegít fel; hot streamen hibát dob. A „Mi a `share` / `shareReplay` szerepe, és mire kell vigyázni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy share operátor csak cold observable-t melegít fel; hot streamen hibát dob.

**Hamis válasz 3:**  
ShareReplay refCount nélkül sosem okoz memory leaket, mert a buffer automatikusan törlődik tab bezáráskor. Ha architektúra review-n indokolod, a kiinduló tétel: ShareReplay refCount nélkül sosem okoz memory leaket, mert a buffer automatikusan törlődik tab bezáráskor. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 37: Hogyan használd helyesen a `catchError` és a `retry` operátorokat?

**Hamis válasz 1:**  
A `retry` mindig végtelen újrapróbálkozást csinál delay nélkül, még 4xx hibáknál is. Ennek az az oka, hogy a `retry` mindig végtelen újrapróbálkozást csinál delay nélkül, még 4xx hibáknál is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjú.

**Hamis válasz 2:**  
CatchError csak sync kódban működik; Observable pipeline-ban compile error keletkezik. A „Hogyan használd helyesen a `catchError` és a `retry` operátorokat" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy catchError csak sync kódban működik; Observable pipeline-ban compile error keletkezik. Interjúban érdemes a döntést trade-offo.

**Hamis válasz 3:**  
Retry-t mindig a catchError után kell tenni, hogy a fallback érték is újrapróbálkozzon. Ha architektúra review-n indokolod, a kiinduló tétel: Retry-t mindig a catchError után kell tenni, hogy a fallback érték is újrapróbálkozzon. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakez.

### Kérdés 38: Mi a secondary routing (named outlet), és mikor használjuk?

**Hamis válasz 1:**  
Named outlet csak egy lehet alkalmazásonként; több auxiliary route invalid konfiguráció. Ennek az az oka, hogy named outlet csak egy lehet alkalmazásonként; több auxiliary route invalid konfiguráció — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne.

**Hamis válasz 2:**  
Secondary routing URL-ben `(outlet:name)` zárójel helyett `@outlet` query paraméterrel jelenik meg. A „Mi a secondary routing (named outlet), és mikor használjuk" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy secondary routing URL-ben `(outlet:n.

**Hamis válasz 3:**  
Named outlet komponensei nem lazy load-olhatók; minden auxiliary route eager a main bundle-ben van. Ha architektúra review-n indokolod, a kiinduló tétel: Named outlet komponensei nem lazy load-olhatók; minden auxiliary route eager a main bundle-ben van. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 39: Mi a preloading strategy, és hogyan kapcsolódik a `@defer` prefetchhez?

**Hamis válasz 1:**  
Preloading strategy letiltja a lazy route chunkok betöltését, amíg a user nem kattint. Ennek az az oka, hogy preloading strategy letiltja a lazy route chunkok betöltését, amíg a user nem kattint — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `@defer prefetch` és a router preload ugyanaz a mechanizmus; mindkettő a main.js-be húzza a modult. A „Mi a preloading strategy, és hogyan kapcsolódik a `@defer` prefetchhez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `@defer prefetch` és a router preload ugyanaz a mechanizmus; mindkettő a main.j.

**Hamis válasz 3:**  
Preload csak hash routing esetén működik; PathLocationStrategy mellett nincs hatása. Ha architektúra review-n indokolod, a kiinduló tétel: Preload csak hash routing esetén működik; PathLocationStrategy mellett nincs hatása. Ebből vezethető le a hibakezelés, a tesztelés és a produ.

### Kérdés 40: Mi az XSS, és hogyan véd az Angular alapból?

**Hamis válasz 1:**  
Angular alapértelmezetten nem sanitizál semmit; `[innerHTML]` raw HTML-t enged minden esetben. Ennek az az oka, hogy angular alapértelmezetten nem sanitizál semmit; `[innerHTML]` raw HTML-t enged minden esetben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
XSS ellen elég a TypeScript strict mode; template injection automatikusan lehetetlen. A „Mi az XSS, és hogyan véd az Angular alapból" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy xSS ellen elég a TypeScript strict mode; template injection aut.

**Hamis válasz 3:**  
Angular csak CSS XSS ellen véd; JavaScript injectiont a Zone.js blokkolja runtime-ban. Ha architektúra review-n indokolod, a kiinduló tétel: Angular csak CSS XSS ellen véd; JavaScript injectiont a Zone.js blokkolja runtime-ban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 41: Mi a különbség a `@HostBinding`/`@HostListener` és a `host: {}` objektum között?

**Hamis válasz 1:**  
A `host: {}` csak JIT-ben működik; AOT buildben kötelező a dekorátoros megoldás. Ennek az az oka, hogy a `host: {}` csak JIT-ben működik; AOT buildben kötelező a dekorátoros megoldás — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
HostListener nem tud DOM eseményt kezelni; csak Angular Output emitálásra való. A „Mi a különbség a `@HostBinding`/`@HostListener` és a `host: {}` objektum között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hostLi.

**Hamis válasz 3:**  
HostBinding és host objektum egyszerre használva dupla event bindot eredményez mindig. Ha architektúra review-n indokolod, a kiinduló tétel: HostBinding és host objektum egyszerre használva dupla event bindot eredményez mindig. Interjúban érdemes a döntést.

### Kérdés 42: Mi az `exportAs`, és hogyan használjuk a sablonban?

**Hamis válasz 1:**  
Az `exportAs` csak pipe-okon működik; direktíva és komponens nem exportálható alias-szal. Ennek az az oka, hogy az `exportAs` csak pipe-okon működik; direktíva és komponens nem exportálható alias-szal — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Template-ben `#ref="exportName"` helyett `@exportName` szintaxist kell használni. A „Mi az `exportAs`, és hogyan használjuk a sablonban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy template-ben `#ref="exportName"` helyett `@exp.

**Hamis válasz 3:**  
ExportAs alias automatikusan globális változó lesz az egész modulban, nem csak a template scope-ban. Ha architektúra review-n indokolod, a kiinduló tétel: ExportAs alias automatikusan globális változó lesz az egész modulban, nem csak a template sc.

### Kérdés 43: Mit jelent az `updateOn: 'blur' | 'submit'` a reactive formsban?

**Hamis válasz 1:**  
UpdateOn blur esetén minden keystroke-nál frissül a value és a validáció is azonnal. Ennek az az oka, hogy updateOn blur esetén minden keystroke-nál frissül a value és a validáció is azonnal — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Submit mód azt jelenti, hogy a form csak server response után validál újra. A „Mit jelent az `updateOn: 'blur' | 'submit'` a reactive formsban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy submit mód azt jelenti, hogy a.

**Hamis válasz 3:**  
UpdateOn csak template-driven form option; FormControl konstruktorban nem adható meg. Ha architektúra review-n indokolod, a kiinduló tétel: UpdateOn csak template-driven form option; FormControl konstruktorban nem adható meg. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 44: Mi a Tailwind + Angular view encapsulation gyakori buktatója?

**Hamis válasz 1:**  
Tailwind classok automatikusan átmennek encapsulation alatt; `_ngcontent` attribútumot hozzáadnak minden utility-hez. Ennek az az oka, hogy tailwind classok automatikusan átmennek encapsulation alatt; `_ngcontent` attribútumot hozzáadnak minden utility-hez — ezt rögtön mechanizmus-szinten is meg s.

**Hamis válasz 2:**  
ViewEncapsulation.None mellett Tailwind nem működik, mert a purge törli a komponens stílusait. A „Mi a Tailwind + Angular view encapsulation gyakori buktatója" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy viewEncapsulation.None mellett Tailwind nem működik, mert a purge törli a.

**Hamis válasz 3:**  
Tailwind csak `:host` selectorban használható; template class attribútum tilos. Ha architektúra review-n indokolod, a kiinduló tétel: Tailwind csak `:host` selectorban használható; template class attribútum tilos. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 45: Mire való a `:host` és a `:host-context()` a komponensstílusokban?

**Hamis válasz 1:**  
A `:host` a child komponens root elemére vonatkozik, nem a saját host elemre. Ennek az az oka, hogy a `:host` a child komponens root elemére vonatkozik, nem a saját host elemre — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Host-context minden böngészőben deprecated; helyette mindig `@media` query kell theme-hez. A „Mire való a `:host` és a `:host-context()` a komponensstílusokban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy host-context minden böngészőben deprecated; helyette mindig `@media` query kell t.

**Hamis válasz 3:**  
`:host` csak ShadowDom encapsulation mellett fordul le; Emulated módban figyelmen kívül marad. Ha architektúra review-n indokolod, a kiinduló tétel: `:host` csak ShadowDom encapsulation mellett fordul le; Emulated módban figyelmen kívül marad. Interjúban érdemes a döntést tra.

### Kérdés 46: Mi a `track` / `trackBy` teljesítményhatása listáknál?

**Hamis válasz 1:**  
Track nélkül az Angular mindig DOM reuse-t csinál; track csak debug információt ad. Ennek az az oka, hogy track nélkül az Angular mindig DOM reuse-t csinál; track csak debug információt ad — ezt rögtön mechanizmus-szinten is meg szokás véde.

**Hamis válasz 2:**  
TrackBy kötelező minden listánál, különben a `@for` nem fordul le production buildben. A „Mi a `track` / `trackBy` teljesítményhatása listáknál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy trackBy kötelező minden list.

**Hamis válasz 3:**  
Track funkció lassít, mert minden ciklusban UUID-t generál minden sorhoz. Ha architektúra review-n indokolod, a kiinduló tétel: Track funkció lassít, mert minden ciklusban UUID-t generál minden sorhoz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 47: Mi a monkey patching, és hol találkozol vele Angularban?

**Hamis válasz 1:**  
Monkey patching az Angular AOT compiler feature-e, ami runtime-ban patch-eli a template AST-t. Ennek az az oka, hogy monkey patching az Angular AOT compiler feature-e, ami runtime-ban patch-eli a template AST-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Zone.js nem patch-el semmit; csak Passive event listenereket regisztrál natívan. A „Mi a monkey patching, és hol találkozol vele Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy zone.js nem patch-el semmit; csak.

**Hamis válasz 3:**  
Angular HttpClient közvetlenül a natív fetch-et használ patch nélkül; Zone.js csak change detectionhez kell. Ha architektúra review-n indokolod, a kiinduló tétel: Angular HttpClient közvetlenül a natív fetch-et használ patch nélkül; Zone.js csak change detectionhez kell.

### Kérdés 48: Mit csinál a TypeScript `satisfies` operátor?

**Hamis válasz 1:**  
A `satisfies` runtime type check-et végez, és hibát dob, ha az objektum nem felel meg az interfésznek. Ennek az az oka, hogy a `satisfies` runtime type check-et végez, és hibát dob, ha az objektum nem felel meg az interfésznek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak def.

**Hamis válasz 2:**  
Satisfies ugyanaz, mint a type assertion (`as`), csak rövidebb szintaxis. A „Mit csinál a TypeScript `satisfies` operátor" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy satisfies ugyanaz, mint a type.

**Hamis válasz 3:**  
Satisfies csak enum értékeknél használható; object literal-on compile error keletkezik. Ha architektúra review-n indokolod, a kiinduló tétel: Satisfies csak enum értékeknél használható; object literal-on compile error keletkezik.

### Kérdés 49: Hogyan kezeled a `null` és `undefined` értékeket Angular sablonban?

**Hamis válasz 1:**  
A `?.` optional chaining csak TypeScriptben létezik; Angular template nem támogatja. Ennek az az oka, hogy a `?.` optional chaining csak TypeScriptben létezik; Angular template nem támogatja — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Nullish coalescing (`??`) helyett mindig `||` operátort kell használni, mert a `??` deprecated template-ben. A „Hogyan kezeled a `null` és `undefined` értékeket Angular sablonban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nullish coalescing (`??`) helyett mindig `||` o.

**Hamis válasz 3:**  
Strict template check kikapcsolja a null ellenőrzést; `@if` nélkül minden undefined automatikusan üres string. Ha architektúra review-n indokolod, a kiinduló tétel: Strict template check kikapcsolja a null ellenőrzést; `@if` nélkül minden undefined automatikusan üres string.

### Kérdés 50: Mi a TitleStrategy szerepe, és miért jobb, mint a kézi `title` állítgatás?

**Hamis válasz 1:**  
TitleStrategy csak meta description-t állít; document title-t továbbra is kézzel kell módosítani. Ennek az az oka, hogy titleStrategy csak meta description-t állít; document title-t továbbra is kézzel kell módosítani — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defin.

**Hamis válasz 2:**  
Kézi title állítás mindig sync a routerrel; TitleStrategy csak lazy route-oknál működik. A „Mi a TitleStrategy szerepe, és miért jobb, mint a kézi `title` állítgatás" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy kézi title állítás mindig sync a routerrel; TitleS.

**Hamis válasz 3:**  
TitleStrategy és Title service ugyanaz; a strategy csak alias a deprecated Title API-hoz. Ha architektúra review-n indokolod, a kiinduló tétel: TitleStrategy és Title service ugyanaz; a strategy csak alias a deprecated Title API-hoz. Interjúban érde.

## Senior

### Kérdés 1: Mit jelent a zoneless change detection, és mit vált fel a Zone.js helyett?

**Hamis válasz 1:**  
A zoneless change detection Zone.js nélkül nem működik, ezért a `provideZonelessChangeDetection` automatikusan betölti a Zone.js lite verzióját a bundle-be. Ennek az az oka, hogy a zoneless change detection Zone.js nélkül nem működik, ezért a `provideZonelessChangeDetection` automatikusan betölti a Zone.js lite verzióját a bundle-be — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Zone.js helyett a zoneless mód `setInterval`-lel pollolja a teljes komponensfát 16 ms-onként, így garantálja a frissítést minden aszinkron eseménynél. A „Mit jelent a zoneless change detection, és mit vált fel a Zone.js helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy zone.js helyett a zoneless mód `setInterval`-lel pollolja a teljes komponensfát 16 ms-onkén.

**Hamis válasz 3:**  
A zoneless mód csak SSR mellett érhető el, mert kliens oldalon továbbra is a Zone.js patch-eli az összes DOM eseményt a change detection indításához. Ha architektúra review-n indokolod, a kiinduló tétel: A zoneless mód csak SSR mellett érhető el, mert kliens oldalon továbbra is a Zone.js patch-eli az összes DOM eseményt a change detection indításához.

### Kérdés 2: Miért lett az OnPush az alapértelmezett stratégia (v22+), és mi az Eager?

**Hamis válasz 1:**  
Az OnPush azért lett alapértelmezett v22-ben, mert a Default stratégia (Eager) már deprecated, és csak legacy NgModule-okban használható. Ennek az az oka, hogy az OnPush azért lett alapértelmezett v22-ben, mert a Default stratégia (Eager) már deprecated, és csak legacy NgModule-okban használható — ezt rögtön mechanizmus-szin.

**Hamis válasz 2:**  
Az Eager stratégia az új ajánlott mód v22-től: minden tick-ben végigmegy a teljes fán, mert a signalok nem tudnak önmagukban frissíteni. A „Miért lett az OnPush az alapértelmezett stratégia (v22+), és mi az Eager" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az Eager stratégia az új ajánlott mód v22-től: minden tick-ben végigmegy a teljes fán, mert a signalok.

**Hamis válasz 3:**  
OnPush alapértelmezés mellett a komponensek csak akkor frissülnek, ha explicit `@Input()` referenciaváltás történik; a signal írás nem triggerel CD-t. Ha architektúra review-n indokolod, a kiinduló tétel: OnPush alapértelmezés mellett a komponensek csak akkor frissülnek, ha explicit `@Input()` referenciaváltás történik; a signal írás nem trigge.

### Kérdés 3: Magyarázd el a signal reaktív kontextust és az `untracked` szerepét?

**Hamis válasz 1:**  
A reaktív kontextus csak `effect`-ben létezik; `computed`-ban minden olvasott signal automatikusan `untracked`-ként viselkedik. Ennek az az oka, hogy a reaktív kontextus csak `effect`-ben létezik; `computed`-ban minden olvasott signal automatikusan `untracked`-ként viselkedik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Az `untracked` arra való, hogy a signal értékét permanensen kivegyük a dependency gráfból, így a signal soha többé nem fogja újraszámolni a computed-ot. A „Magyarázd el a signal reaktív kontextust és az `untracked` szerepét" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `untracked` arra való, hogy a signal értékét permanensen kivegyük.

**Hamis válasz 3:**  
Reaktív kontextus nélkül is minden signal olvasás dependency-t regisztrál, még ha `untracked` blokkban történik is — az Angular v22-ben ezt szándékosan így tervezték. Ha architektúra review-n indokolod, a kiinduló tétel: Reaktív kontextus nélkül is minden signal olvasás dependency-t regisztrál, még ha `untracked` blokkban történik is — az Angular v22-ben ezt szándékosan így tervezték. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 4: Mit jelent a glitch-free behavior a signaloknál?

**Hamis válasz 1:**  
A glitch-free behavior azt jelenti, hogy a signalok mindig szinkronban frissítik a DOM-ot a Zone.js tick ciklusával, különben flicker keletkezik. Ennek az az oka, hogy a glitch-free behavior azt jelenti, hogy a signalok mindig szinkronban frissítik a DOM-ot a Zone.js tick ciklusával, különben flicker keletke.

**Hamis válasz 2:**  
Glitch-free módban a `computed` értékek aszinkron microtask sorban frissülnek, ezért a UI pillanatnyilag ellentmondásos állapotot mutathat — ezt hívjuk glitch-nek. A „Mit jelent a glitch-free behavior a signaloknál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy glitch-free módban a `computed` értékek aszinkron microtask sorban frissülnek, ezért.

**Hamis válasz 3:**  
A glitch-free viselkedés kikapcsolható `provideExperimentalGlitchySignals()` hívással, ha gyorsabb, de következetlen UI frissítést szeretnénk. Ha architektúra review-n indokolod, a kiinduló tétel: A glitch-free viselkedés kikapcsolható `provideExperimentalGlitchySignals()` hívással, ha gyorsabb, de következetlen UI frissítést szeretnénk.

### Kérdés 5: Hogyan tervezel signal graphot (állapot → derived → resource → UI)?

**Hamis válasz 1:**  
A signal graphban az UI réteg írja az állapot signalokat, a `computed` csak dekoráció, a resource pedig csak unit tesztekben használandó. Ennek az az oka, hogy a signal graphban az UI réteg írja az állapot signalokat, a `computed` csak dekoráció, a resource pedig csak unit tesztekben használandó — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A helyes sorrend: UI → effect → resource → derived → állapot, mert az effect automatikusan triggereli az HTTP hívásokat minden render után. A „Hogyan tervezel signal graphot (állapot → derived → resource → UI)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a helyes sorrend: UI → effect → resource → derived → állapot, me.

**Hamis válasz 3:**  
Signal graph tervezésnél minden állapotot egyetlen root `BehaviorSubject`-be kell tenni, és onnan `toSignal`-lal áthidálni — így marad RxJS-kompatibilis. Ha architektúra review-n indokolod, a kiinduló tétel: Signal graph tervezésnél minden állapotot egyetlen root `BehaviorSubject`-be kell tenni, és onnan `toSignal`-lal áthidálni — így marad RxJS-kompatibilis.

### Kérdés 6: Mikor használd a `resource`, az `rxResource` és az `httpResource` API-t?

**Hamis válasz 1:**  
A `httpResource` csak GET kéréseket támogat, POST-hoz kötelező a nyers `HttpClient` maradnia signal appban is. Ennek az az oka, hogy a `httpResource` csak GET kéréseket támogat, POST-hoz kötelező a nyers `HttpClient` maradnia signal appban is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkro.

**Hamis válasz 2:**  
Az `rxResource` és a `resource` ugyanaz az API, csak az egyik Observable-t, a másik Promise-t vár — választás tisztán stíluskérdés. A „Mikor használd a `resource`, az `rxResource` és az `httpResource` API-t" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `rxResource` és a `resource` ugyanaz az API, csak az.

**Hamis válasz 3:**  
Resource API-t csak zoneless appban szabad használni; Zone.js mellett automatikusan memory leak-et okoz, mert nem unsubscribe-ol. Ha architektúra review-n indokolod, a kiinduló tétel: Resource API-t csak zoneless appban szabad használni; Zone.js mellett automatikusan memory leak-et okoz, mert nem unsubscribe-ol. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 7: Mikor maradjon RxJS, és mikor válassz signalokat (interop döntés)?

**Hamis válasz 1:**  
Signal-first appban RxJS-t teljesen ki kell iktatni; a `toObservable` deprecated v22-től, mert a signalok lefedik az összes use case-t. Ennek az az oka, hogy signal-first appban RxJS-t teljesen ki kell iktatni; a `toObservable` deprecated v22-től, mert a signalok lefedik az összes use case-t — ezt rögtön mechanizmu.

**Hamis válasz 2:**  
RxJS maradjon minden állapotkezelésre, signal csak a sablonban olvasásra — a kettő soha ne keveredjen ugyanabban a service-ben. A „Mikor maradjon RxJS, és mikor válassz signalokat (interop döntés)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy rxJS maradjon minden állapotkezelésre, signal csak a sablonban olvasásra — a kettő soha ne kev.

**Hamis válasz 3:**  
Interop döntés: ha van `debounceTime`, automatikusan signal; ha van `switchMap`, automatikusan RxJS — ezt az Angular CLI dönti el buildkor. Ha architektúra review-n indokolod, a kiinduló tétel: Interop döntés: ha van `debounceTime`, automatikusan signal; ha van `switchMap`, automatikusan RxJS — ezt az Angular CLI dönti el buildkor.

### Kérdés 8: Hogyan építesz fel egy production typeahead streamet higher-order mappinggel (cancel + error)?

**Hamis válasz 1:**  
Production typeahead-nél `mergeMap`-et használunk, hogy minden korábbi kérés is lefusson, így garantált a teljes találati lista. Ennek az az oka, hogy production typeahead-nél `mergeMap`-et használunk, hogy minden korábbi kérés is lefusson, így garantált a teljes találati lista — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
A typeahead streamben `exhaustMap` a helyes választás, mert így a legutolsó kérés mindig felülírja az összes előzőt anélkül, hogy cancel történne. A „Hogyan építesz fel egy production typeahead streamet higher-order mappinggel (cancel + error)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a typeahead streamben `exhaustMap` a helyes választás, mert így a legutolsó kérés mindig felülírja az összes előzőt anélkül, hogy cancel történne. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalm.

**Hamis válasz 3:**  
Hibakezeléshez a `catchError`-t a `subscribe`-ban kell hagyni nested módon; a stream szintű `catchError` megszakítja a teljes typeahead-et. Ha architektúra review-n indokolod, a kiinduló tétel: Hibakezeléshez a `catchError`-t a `subscribe`-ban kell hagyni nested módon; a stream szintű `catchError` megszakítja a teljes typeahead-et. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 9: Mi a `linkedSignal` (v19/v20), és milyen use case-re való?

**Hamis válasz 1:**  
A `linkedSignal` két független signal szinkron összekapcsolására való, és automatikusan kétirányú adatkötést hoz létre parent-child között. Ennek az az oka, hogy a `linkedSignal` két független signal szinkron összekapcsolására való, és automatikusan kétirányú adatkötést hoz létre parent-child között — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `linkedSignal` fő use case-e, hogy Observable streamet helyettesítsen — belsőleg Subject-ként működik RxJS wrapper nélkül. A „Mi a `linkedSignal` (v19/v20), és milyen use case-re való" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `linkedSignal` fő use case-e, hogy Observable streamet helyettesítsen — belsőleg Subject.

**Hamis válasz 3:**  
LinkedSignal csak forms-ban használható: a form control értékét köti a backend response signalhoz, és minden blur-nál POST-ol. Ha architektúra review-n indokolod, a kiinduló tétel: LinkedSignal csak forms-ban használható: a form control értékét köti a backend response signalhoz, és minden blur-nál POST-ol. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 10: Mikor válassz NgRx Signal Store-t a classic NgRx Store helyett?

**Hamis válasz 1:**  
NgRx Signal Store-t csak akkor válaszd, ha már van classic NgRx Store — a Signal Store csak wrapper a meglévő reducer köré. Ennek az az oka, hogy ngRx Signal Store-t csak akkor válaszd, ha már van classic NgRx Store — a Signal Store csak wrapper a meglévő reducer köré — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
Classic NgRx mindig jobb nagy appban, mert a Signal Store nem támogat entity adapter-t és devtools integrációt. A „Mikor válassz NgRx Signal Store-t a classic NgRx Store helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy classic NgRx mindig jobb nagy appban, mert a Signal Store nem támogat entity adapter-t és devtools integrációt.

**Hamis válasz 3:**  
Signal Store-t válaszd, ha Redux DevTools nélkül akarsz dolgozni és minden side effectet közvetlenül a komponensben kezelsz. Ha architektúra review-n indokolod, a kiinduló tétel: Signal Store-t válaszd, ha Redux DevTools nélkül akarsz dolgozni és minden side effectet közvetlenül a komponensben kezelsz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 11: Mi az `rxMethod` a Signal Store-ban, és miért jobb a nyers subscribe-nál?

**Hamis válasz 1:**  
Az `rxMethod` a Signal Store-ban szinkron metódus, ami belsőleg `setTimeout`-ot használ async műveletekhez — subscribe nem kell. Ennek az az oka, hogy az `rxMethod` a Signal Store-ban szinkron metódus, ami belsőleg `setTimeout`-ot használ async műveletekhez — subscribe nem kell.

**Hamis válasz 2:**  
Az `rxMethod` rosszabb a nyers subscribe-nál, mert nem tudja kezelni a stream cancellation-t route váltáskor. A „Mi az `rxMethod` a Signal Store-ban, és miért jobb a nyers subscribe-nál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `rxMethod` rosszabb a nyers subscribe-nál, mert nem tudja kezelni a.

**Hamis válasz 3:**  
RxMethod helyett mindig `effect`-et használj HTTP hívásokra a store-ban, mert az effect automatikusan unsubscribe-ol destroy-kor. Ha architektúra review-n indokolod, a kiinduló tétel: RxMethod helyett mindig `effect`-et használj HTTP hívásokra a store-ban, mert az effect automatikusan unsubscribe-ol destroy-kor.

### Kérdés 12: Miért érdemes entity managementet / normalizálást használni Signal Store-ban?

**Hamis válasz 1:**  
Entity management Signal Store-ban felesleges, mert a signalok immutable-k, így duplikált ID nem okozhat problémát a listában. Ennek az az oka, hogy entity management Signal Store-ban felesleges, mert a signalok immutable-k, így duplikált ID nem okozhat problémát a listában — ezt rögtön.

**Hamis válasz 2:**  
Normalizálást csak classic NgRx-ban érdemes csinálni; Signal Store-ban minden entitást külön fájlban tárolunk duplicate state-tel. A „Miért érdemes entity managementet / normalizálást használni Signal Store-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a m.

**Hamis válasz 3:**  
Entity adapter helyett `@for`-nál elég a `track $index`, mert a Signal Store automatikusan deduplikál ID alapján. Ha architektúra review-n indokolod, a kiinduló tétel: Entity adapter helyett `@for`-nál elég a `track $index`, mert a Signal Store automatikusan deduplikál ID alapján.

### Kérdés 13: Mi az incremental hydration SSR mellett, és miért jobb a teljes hydratációnál?

**Hamis válasz 1:**  
Az incremental hydration lassabb, mint a teljes hydratáció, mert minden szekciót külön bundle-ben tölt le a kliens. Ennek az az oka, hogy az incremental hydration lassabb, mint a teljes hydratáció, mert minden szekciót külön bundle-ben tölt le a kliens — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne.

**Hamis válasz 2:**  
Incremental hydration azt jelenti, hogy az egész HTML egyszerre hydratálódik, de a CSS fokozatosan töltődik be lazy módon. A „Mi az incremental hydration SSR mellett, és miért jobb a teljes hydratációnál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy incremental hydration azt jelenti, hogy az egész HTML e.

**Hamis válasz 3:**  
Teljes hydratáció mindig jobb UX-et ad, mert az incremental csak akkor működik, ha a user nem kattint az oldal betöltése előtt. Ha architektúra review-n indokolod, a kiinduló tétel: Teljes hydratáció mindig jobb UX-et ad, mert az incremental csak akkor működik, ha a user nem kattint a.

### Kérdés 14: Mi az Event Replay a hydratációnál, és milyen UX problémát old meg?

**Hamis válasz 1:**  
Event Replay az SSR során generált eseményeket a szerveren futtatja újra, mielőtt a HTML kimegy a hálózatra. Ennek az az oka, hogy event Replay az SSR során generált eseményeket a szerveren futtatja újra, mielőtt a HTML kimegy a hálózatra — ezt rögtön mechanizmus-szinten is meg szokás v.

**Hamis válasz 2:**  
Event Replay kikapcsolja a hydration-t, és helyette teljes CSR-re vált, ha a user a hydratáció előtt kattintott. A „Mi az Event Replay a hydratációnál, és milyen UX problémát old meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az,.

**Hamis válasz 3:**  
Event Replay csak touch eseményekre vonatkozik; click és keyboard események elvesznek hydratáció közben, ez known limitation. Ha architektúra review-n indokolod, a kiinduló tétel: Event Replay csak touch eseményekre vonatkozik; click és keyboard események elvesznek hydratáció közben, ez known limitation.

### Kérdés 15: Hybrid rendering mellett mikor válassz SSR-t, SSG/prerender-t vagy CSR-t?

**Hamis válasz 1:**  
Hybrid renderingnél CSR mindig jobb SEO-ra, mert a Google bot nem futtat JavaScriptet, így az SSR felesleges overhead. Ennek az az oka, hogy hybrid renderingnél CSR mindig jobb SEO-ra, mert a Google bot nem futtat JavaScriptet, így az SSR felesleges overhead — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
SSG/prerender csak marketing oldalakra való; B2B appban mindig CSR, mert a prerender nem tud autentikált tartalmat generálni. A „Hybrid rendering mellett mikor válassz SSR-t, SSG/prerender-t vagy CSR-t" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy sSG/pre.

**Hamis válasz 3:**  
SSR-t csak akkor válaszd, ha nincs backend API — különben a dupla adatlekérés (server + client) mindig rosszabb teljesítmény. Ha architektúra review-n indokolod, a kiinduló tétel: SSR-t csak akkor válaszd, ha nincs backend API — különben a dupla adatlekérés (server + client).

### Kérdés 16: Hogyan csökkented a main chunk méretét Angular alkalmazásban?

**Hamis válasz 1:**  
A main chunk méretét úgy csökkented, hogy minden lazy route-ot visszateszel a main bundle-be, így kevesebb HTTP kérés lesz. Ennek az az oka, hogy a main chunk méretét úgy csökkented, hogy minden lazy route-ot visszateszel a main bundle-be, így kevesebb HTTP kérés lesz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `providedIn: 'root'` service-ek mind tree-shake-elhetők automatikusan, ezért a service méret nem számít a bundle-be. A „Hogyan csökkented a main chunk méretét Angular alkalmazásban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `providedIn: 'root'` service-ek mind tree-shake-elhetők automatikusan, ezért a servi.

**Hamis válasz 3:**  
CommonJS modulok kisebb bundle-t adnak ESM-nél, ezért érdemes visszaváltani CJS-re a build optimalizálásához. Ha architektúra review-n indokolod, a kiinduló tétel: CommonJS modulok kisebb bundle-t adnak ESM-nél, ezért érdemes visszaváltani CJS-re a build optimalizálásához. Interjúban érdemes a döntést trade-o.

### Kérdés 17: Hogyan keresel performance bottlenecket Angularban a gyakorlatban?

**Hamis válasz 1:**  
Performance bottlenecket úgy keresed, hogy `console.time`-ot teszel minden lifecycle hook-ba, és a leghosszabbat optimalizálod. Ennek az az oka, hogy performance bottlenecket úgy keresed, hogy `console.time`-ot teszel minden lifecycle hook-ba, és a leghosszabbat optimalizálod — ezt rögtön mechanizmus-szinten is meg szokás.

**Hamis válasz 2:**  
Az Angular DevTools Performance tab csak production buildben működik; development módban mindig hamis lassúságot mutat. A „Hogyan keresel performance bottlenecket Angularban a gyakorlatban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az Angular.

**Hamis válasz 3:**  
Change detection problémát úgy találod meg, hogy minden komponenst Default stratégára állítasz — ha gyorsabb lesz, OnPush volt a gond. Ha architektúra review-n indokolod, a kiinduló tétel: Change detection problémát úgy találod meg, hogy minden komponenst Defa.

### Kérdés 18: Hogyan diagnosztizálsz memory leaket Angular frontendben?

**Hamis válasz 1:**  
Memory leak diagnosztikánál elég a `ngOnDestroy`-ban `console.log` — ha lefut, nincs leak. Ennek az az oka, hogy memory leak diagnosztikánál elég a `ngOnDestroy`-ban `console.log` — ha lefut, nincs leak — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is a.

**Hamis válasz 2:**  
Az async pipe mindig leak-et okoz zoneless appban, mert nem unsubscribe-ol automatikusan. A „Hogyan diagnosztizálsz memory leaket Angular frontendben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az async pipe mindig leak-et okoz zoneless appban, mert nem unsubscribe-ol automatikusan.

**Hamis válasz 3:**  
Memory leaket csak E2E tesztekkel lehet megbízhatóan találni; Chrome DevTools heap snapshot frontendben használhatatlan. Ha architektúra review-n indokolod, a kiinduló tétel: Memory leaket csak E2E tesztekkel lehet megbízhatóan találni; Chrome DevTools heap snapshot frontendben használhatatlan. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 19: Milyen frontend biztonsági rétegeket alkalmazol XSS ellen (CSP, Trusted Types, sanitization)?

**Hamis válasz 1:**  
XSS ellen elég az Angular built-in sanitization — CSP és Trusted Types felesleges overhead production-ben. Ennek az az oka, hogy xSS ellen elég az Angular built-in sanitization — CSP és Trusted Types felesleges overhead production-ben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
CSP `unsafe-inline` script-src mellett is teljes védelmet ad, ha Angular AOT-ot használsz. A „Milyen frontend biztonsági rétegeket alkalmazol XSS ellen (CSP, Trusted Types, sanitization)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cSP `unsafe-inline` script-src mell.

**Hamis válasz 3:**  
Trusted Types kikapcsolható `DomSanitizer.bypassSecurityTrustHtml` globális wrapperrel minden template-ben. Ha architektúra review-n indokolod, a kiinduló tétel: Trusted Types kikapcsolható `DomSanitizer.bypassSecurityTrustHtml` globális wrapperrel minden template-ben. Ebből vezethető le a hibakezelés, a tesztelés és a production check.

### Kérdés 20: Hogyan építesz modern auth mintát guard + interceptor + RedirectCommand kombinációval?

**Hamis válasz 1:**  
Modern auth minta: a guard csak a token létezését ellenőrzi, az interceptor pedig minden 401-et automatikusan redirectel loginra `window.location`-nel. Ennek az az oka, hogy modern auth minta: a guard csak a token létezését ellenőrzi, az interceptor pedig minden 401-et automatikusan redirectel loginra `window.location`-nel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
A `RedirectCommand`-ot csak SSR-ben használhatod; kliens oldalon helyette `Router.navigate` a standard. A „Hogyan építesz modern auth mintát guard + interceptor + RedirectCommand kombinációval" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `RedirectCommand`-ot csak SSR-ben használhatod; k.

**Hamis válasz 3:**  
Auth flow-ban a guard és interceptor ugyanazt a service-t hívja párhuzamosan minden navigációnál — így garantált a friss token. Ha architektúra review-n indokolod, a kiinduló tétel: Auth flow-ban a guard és interceptor ugyanazt a service-t hívja párhuzamosan minden navigációnál — így garantált a friss token.

### Kérdés 21: Mikor használd az `afterRender` / `afterNextRender` API-t `ngAfterViewInit` helyett?

**Hamis válasz 1:**  
Az `afterRender` szinkron, még mielőtt a böngésző paintelne — DOM méretezéshez ez gyorsabb, mint `ngAfterViewInit`. Ennek az az oka, hogy az `afterRender` szinkron, még mielőtt a böngésző paintelne — DOM méretezéshez ez gyorsabb, mint `ngAfterViewInit` — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
`ngAfterViewInit` mindig preferred v22-től, mert az `afterRender` deprecated SSR hydration miatt. A „Mikor használd az `afterRender` / `afterNextRender` API-t `ngAfterViewInit` helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `ngAfterViewInit` mindig preferred v22-től, mert az `afterRender` deprecated SSR hydration miatt.

**Hamis válasz 3:**  
AfterNextRender csak zoneless appban érhető el; Zone.js mellett automatikusan `ngAfterViewInit`-re esik vissza. Ha architektúra review-n indokolod, a kiinduló tétel: AfterNextRender csak zoneless appban érhető el; Zone.js mellett automatikusan `ngAfterViewInit`-re esik vissza. Interjúban érdemes a dön.

### Kérdés 22: Miért érdemes route-szintű `providers`-t használni feature service-ekhez?

**Hamis válasz 1:**  
Route-szintű `providers` mindig singleton root scope-ot ad — ugyanaz a service instance az egész appban marad. Ennek az az oka, hogy route-szintű `providers` mindig singleton root scope-ot ad — ugyanaz a service instance az egész appban marad — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Feature service-eket soha ne tedd route providers-be, mert lazy load mellett a service nem destroy-olódik route leave-kor. A „Miért érdemes route-szintű `providers`-t használni feature service-ekhez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy feature service-eket so.

**Hamis válasz 3:**  
Route providers csak akkor működik, ha NgModule-ot használsz — standalone route-oknál kötelező `providedIn: 'root'`. Ha architektúra review-n indokolod, a kiinduló tétel: Route providers csak akkor működik, ha NgModule-ot használsz — standalone route-oknál kötelező `provided.

### Kérdés 23: Mit jelent a vertical slicing / modulith architektúra Angularban?

**Hamis válasz 1:**  
Vertical slicing azt jelenti, hogy minden feature külön repository-ban él — monorepo ellentéte. Ennek az az oka, hogy vertical slicing azt jelenti, hogy minden feature külön repository-ban él — monorepo ellentéte — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Modulith architektúrában minden feature ugyanabba a shared `CoreModule`-ba importál, így egy helyen van az összes dependency. A „Mit jelent a vertical slicing / modulith architektúra Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy modulith architektúrában minden feature ugyanab.

**Hamis válasz 3:**  
Vertical slice = horizontal layer (components, services, models külön mappák) — ez az Angular hivatalos ajánlása. Ha architektúra review-n indokolod, a kiinduló tétel: Vertical slice = horizontal layer (components, services, models külön mappák) — ez az Angular hivatalos ajánlása.

### Kérdés 24: Hogyan jelenik meg a SOLID elv a napi Angular kódban, és milyen példákat mondanál?

**Hamis válasz 1:**  
SOLID-ből Angularban csak az S releváns: egy komponens = egy HTML fájl, több felelősség tilos. Ennek az az oka, hogy sOLID-ből Angularban csak az S releváns: egy komponens = egy HTML fájl, több felelősség tilos — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Dependency Inversion azt jelenti, hogy minden service `@Injectable({ providedIn: 'root' })` legyen — interface injection felesleges. A „Hogyan jelenik meg a SOLID elv a napi Angular kódban, és milyen példákat mondanál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont.

**Hamis válasz 3:**  
Open/Closed elv: soha ne módosíts meglévő komponenst, mindig copy-paste-eld az új feature-höz. Ha architektúra review-n indokolod, a kiinduló tétel: Open/Closed elv: soha ne módosíts meglévő komponenst, mindig copy-paste-eld az új feature-höz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 25: Hogyan alkalmazod az Adapter, Strategy és Facade mintákat Angularban?

**Hamis válasz 1:**  
Adapter minta Angularban: minden HTTP response-t közvetlenül a komponensben map-elj, külön adapter layer felesleges. Ennek az az oka, hogy adapter minta Angularban: minden HTTP response-t közvetlenül a komponensben map-elj, külön adapter layer felesleges — ez.

**Hamis válasz 2:**  
Strategy minta = `@switch` a template-ben — service szintű strategy pattern overengineering Angularban. A „Hogyan alkalmazod az Adapter, Strategy és Facade mintákat Angularban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy strategy minta = `@sw.

**Hamis válasz 3:**  
Facade service mindig anti-pattern, mert duplikálja a store logikát; közvetlen store injektálás a helyes út minden komponensben. Ha architektúra review-n indokolod, a kiinduló tétel: Facade service mindig anti-pattern, mert duplikálja a store lo.

### Kérdés 26: Mi a különbség a CDK a11y primitívek és az Angular Aria (v21+) között?

**Hamis válasz 1:**  
Az Angular Aria (v21+) lecseréli a CDK a11y primitíveket — a CDK `@angular/cdk/a11y` deprecated v22-től. Ennek az az oka, hogy az Angular Aria (v21+) lecseréli a CDK a11y primitíveket — a CDK `@angular/cdk/a11y` deprecated v22-től — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmon.

**Hamis válasz 2:**  
CDK a11y és Angular Aria ugyanaz a package, csak más import path — funkcionálisan identikusak. A „Mi a különbség a CDK a11y primitívek és az Angular Aria (v21+) között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cDK a11y és Angular Aria ugyanaz a package, csak más import path — funkcionálisan identikusak.

**Hamis válasz 3:**  
Angular Aria csak SSR appban működik; CSR-ben maradjon a natív HTML ARIA attribútumok manuális kezelése. Ha architektúra review-n indokolod, a kiinduló tétel: Angular Aria csak SSR appban működik; CSR-ben maradjon a natív HTML ARIA attribútumok manuális kezelése. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 27: Milyen i18n stratégiákat ismersz Angularban, és mik a trade-offok?

**Hamis válasz 1:**  
i18n-nél a runtime fordítás mindig jobb, mert build-time `$localize` nem támogatja a pluralization-t. Ennek az az oka, hogy i18n-nél a runtime fordítás mindig jobb, mert build-time `$localize` nem támogatja a pluralization-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elm.

**Hamis válasz 2:**  
Egy locale = egy külön deploy; shared bundle több nyelvvel nem tree-shake-elhető, ezért tilos monorepóban. A „Milyen i18n stratégiákat ismersz Angularban, és mik a trade-offok" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy locale = egy.

**Hamis válasz 3:**  
ngx-translate a hivatalos Angular i18n megoldás v22-től — a `$localize` csak legacy támogatás. Ha architektúra review-n indokolod, a kiinduló tétel: ngx-translate a hivatalos Angular i18n megoldás v22-től — a `$localize` csak legacy támogatás. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 28: Milyen döntési szempontok vannak PWA / Service Worker bevezetésénél?

**Hamis válasz 1:**  
PWA Service Worker minden B2B appban kötelező, mert offline mód nélkül nem deployolható production-be. Ennek az az oka, hogy pWA Service Worker minden B2B appban kötelező, mert offline mód nélkül nem deployolható production-be — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióké.

**Hamis válasz 2:**  
Service Worker automatikusan cache-eli az összes API response-t — stale data nem probléma, mert a SW frissít háttérben. A „Milyen döntési szempontok vannak PWA / Service Worker bevezetésénél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont a.

**Hamis válasz 3:**  
PWA bevezetésnél elég a `ng add @angular/pwa` — utána nincs szükség cache stratégia döntésre vagy verziózásra. Ha architektúra review-n indokolod, a kiinduló tétel: PWA bevezetésnél elég a `ng add @angular/pwa` — utána nincs szükség cache stratégia döntésre vagy verziózásra. Ebből vezethető le a hibakezelés, a tesztelés és a production ch.

### Kérdés 29: Mikor indokolt Web Worker használata Angular alkalmazásban?

**Hamis válasz 1:**  
Web Worker minden HTTP hívást át kell helyezni workerbe — különben a main thread blokkolódik. Ennek az az oka, hogy web Worker minden HTTP hívást át kell helyezni workerbe — különben a main thread blokkolódik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Angular nem támogat Web Worker-t hivatalosan; `@angular/web-worker` package nem létezik, custom webpack kell. A „Mikor indokolt Web Worker használata Angular alkalmazásban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy angular nem támogat Web Worker-t hivatalosan; `@angular/web-worker`.

**Hamis válasz 3:**  
Web Worker csak akkor indokolt, ha a komponens több mint 500 sor — különben a bootstrap overhead nagyobb, mint a nyereség. Ha architektúra review-n indokolod, a kiinduló tétel: Web Worker csak akkor indokolt, ha a komponens több mint 500 sor — különben a bootstrap overhead nagyobb.

### Kérdés 30: Mit ad a HttpClient `withFetch` és a keepalive opció?

**Hamis válasz 1:**  
A `withFetch` kikapcsolja az interceptor chain-t, mert a Fetch API nem kompatibilis az Angular HTTP interceptors-szal. Ennek az az oka, hogy a `withFetch` kikapcsolja az interceptor chain-t, mert a Fetch API nem kompatibilis az Angular HTTP interceptors-szal — ezt rögtön mec.

**Hamis válasz 2:**  
Keepalive opció azt jelenti, hogy a HTTP kapcsolat soha nem záródik be — minden kérés ugyanazt a socketet használja örökre. A „Mit ad a HttpClient `withFetch` és a keepalive opció" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabizt.

**Hamis válasz 3:**  
HttpClient alapból Fetch-et használ v18-tól — a `withFetch()` csak visszavált XHR-re legacy libek miatt. Ha architektúra review-n indokolod, a kiinduló tétel: HttpClient alapból Fetch-et használ v18-tól — a `withFetch()` csak visszavált XHR-re legacy libek miatt.

### Kérdés 31: Hogyan tervezel globális hibakezelést correlation ID-val?

**Hamis válasz 1:**  
Globális hibakezelésnél a correlation ID-t a frontend generálja és soha nem küldi el a backendnek — így marad client-only trace. Ennek az az oka, hogy globális hibakezelésnél a correlation ID-t a frontend generálja és soha nem küldi el a backendnek — így marad client-only trace — ezt rögtön mechanizmus-szinten is meg szoká.

**Hamis válasz 2:**  
Correlation ID-t localStorage-ban tároljuk évekig, hogy ugyanaz az ID legyen minden session-ben ugyanannál a usernél. A „Hogyan tervezel globális hibakezelést correlation ID-val" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy correlation ID-t localStor.

**Hamis válasz 3:**  
Error handler-ben elég `console.error` — production monitoring (Sentry, etc.) automatikusan összekapcsol correlation ID nélkül is. Ha architektúra review-n indokolod, a kiinduló tétel: Error handler-ben elég `console.error` — production monitoring (Sentry, etc.).

### Kérdés 32: Mi a különbség az ElementInjector és az EnvironmentInjector között?

**Hamis válasz 1:**  
ElementInjector és EnvironmentInjector ugyanaz — a különbség csak naming, v19 óta merge-elték őket. Ennek az az oka, hogy elementInjector és EnvironmentInjector ugyanaz — a különbség csak naming, v19 óta merge-elték őket — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
EnvironmentInjector csak SSR-ben létezik; kliens oldalon minden injektálás ElementInjector-on megy. A „Mi a különbség az ElementInjector és az EnvironmentInjector között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy environmentInjector csak SSR-ben létezik; kliens oldalon minden.

**Hamis válasz 3:**  
Route-level provider az EnvironmentInjector-ba kerül, de `providedIn: 'root'` az ElementInjector rootjára — ezért ütköznek lazy route-oknál. Ha architektúra review-n indokolod, a kiinduló tétel: Route-level provider az EnvironmentInjector-ba kerül, de `providedIn: 'root'` az ElementInjector rootjára — ezért ütköznek lazy route-oknál.

### Kérdés 33: Hogyan hozol létre dinamikus komponenst a modern Angular API-val?

**Hamis válasz 1:**  
Dinamikus komponens modern API: `ComponentFactoryResolver` marad az egyetlen támogatott út v22-ig is. Ennek az az oka, hogy dinamikus komponens modern API: `ComponentFactoryResolver` marad az egyetlen támogatott út v22-ig is — ezt rögtön mechanizmus-szinten i.

**Hamis válasz 2:**  
`ViewContainerRef.createComponent` nem működik standalone komponensekkel — NgModule kell hozzá. A „Hogyan hozol létre dinamikus komponenst a modern Angular API-val" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `ViewContainerRef.createComponent` nem műkö.

**Hamis válasz 3:**  
Dinamikus komponenshez mindig `@ViewChild` template reference kell; programmatikus létrehozás deprecated. Ha architektúra review-n indokolod, a kiinduló tétel: Dinamikus komponenshez mindig `@ViewChild` template reference kell; programmatikus létrehozás deprecated. Ebből vezethető le a hibakezelés, a tesztelés és a production chec.

### Kérdés 34: Mit változtatnak a Signal Forms (v21+/v22) a reactive forms-hoz képest?

**Hamis válasz 1:**  
Signal Forms teljesen lecseréli a reactive forms-ot — `FormGroup` deprecated v22 official release-től. Ennek az az oka, hogy signal Forms teljesen lecseréli a reactive forms-ot — `FormGroup` deprecated v22 official release-től — ezt rögtön mechanizmus-szinten is meg szok.

**Hamis válasz 2:**  
Signal Forms csak template-driven forms wrapper; a validáció továbbra is `Validators` array a komponensben. A „Mit változtatnak a Signal Forms (v21+/v22) a reactive forms-hoz képest" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy signal Forms csak template-.

**Hamis válasz 3:**  
Signal Forms és reactive forms nem használható ugyanabban az appban — migrációkor big-bang kötelező egy éjszaka alatt. Ha architektúra review-n indokolod, a kiinduló tétel: Signal Forms és reactive forms nem használható ugyanabban az appban — migrációkor big-bang kötelező egy éjszaka alatt.

### Kérdés 35: Mit jelent a csapatnak, hogy a Vitest lett az alapértelmezett tesztkeretrendszer (v21)?

**Hamis válasz 1:**  
Vitest alapértelmezés azt jelenti, hogy Karma automatikusan fut minden `ng test`-nél is — párhuzamos futás. Ennek az az oka, hogy vitest alapértelmezés azt jelenti, hogy Karma automatikusan fut minden `ng test`-nél is — párhuzamos futás — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Vitest nem támogatja az Angular TestBed-et, ezért unit tesztekhez továbbra is Karma a hivatalos út. A „Mit jelent a csapatnak, hogy a Vitest lett az alapértelmezett tesztkeretrendszer (v21)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy vitest nem támogatja az Ang.

**Hamis válasz 3:**  
Vitest csak E2E-hez való; component tesztekhez Jest maradt az ajánlott v21-ben is. Ha architektúra review-n indokolod, a kiinduló tétel: Vitest csak E2E-hez való; component tesztekhez Jest maradt az ajánlott v21-ben is. Ebből vezethető le a hibakezelés, a tesztelés és a pr.

### Kérdés 36: Mit tegyél E2E (Playwright) tesztbe, és mit hagyj unit/component szinten?

**Hamis válasz 1:**  
E2E-be minden unit tesztet is át kell írni Playwright-ba — duplikált coverage jobb, mint hiányzó. Ennek az az oka, hogy e2E-be minden unit tesztet is át kell írni Playwright-ba — duplikált coverage jobb, mint hiányzó — ezt rögtön mechanizmus-szinten.

**Hamis válasz 2:**  
Unit tesztben tesztelj routing guard logikát is teljes RouterModule importtal — gyorsabb, mint E2E. A „Mit tegyél E2E (Playwright) tesztbe, és mit hagyj unit/component szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy unit t.

**Hamis válasz 3:**  
E2E teszt felesleges, ha van 100% unit coverage — a Playwright csak visual regression-re való. Ha architektúra review-n indokolod, a kiinduló tétel: E2E teszt felesleges, ha van 100% unit coverage — a Playwright csak visual regression-re való.

### Kérdés 37: Mire való a `provideAppInitializer` és az environment initializer?

**Hamis válasz 1:**  
`provideAppInitializer` helyettesíti az `APP_INITIALIZER`-t, de csak zoneless appban működik — Zone.js mellett crash-el. Ennek az az oka, hogy `provideAppInitializer` helyettesíti az `APP_INITIALIZER`-t, de csak zoneless appban működik — Zone.js mellett crash-el — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defi.

**Hamis válasz 2:**  
Environment initializer csak `environment.ts`-ben hívható — runtime-ban nem injektálható. A „Mire való a `provideAppInitializer` és az environment initializer" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy environ.

**Hamis válasz 3:**  
App initializer-ben HTTP hívás tilos, mert bootstrap előtt nincs HttpClient — mindig hardcoded config kell. Ha architektúra review-n indokolod, a kiinduló tétel: App initializer-ben HTTP hívás tilos, mert bootstrap előtt nincs HttpClient — mindig hardcoded config kell.

### Kérdés 38: Hogyan kerülöd el a property drillinget DI tokennel, CSS változóval vagy content projectionnel?

**Hamis válasz 1:**  
Property drilling elkerülésére mindig global singleton service a megoldás — CSS változó és content projection overkill. Ennek az az oka, hogy property drilling elkerülésére mindig global singleton service a megoldás — CSS változó és content projection overkill — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíciókén.

**Hamis válasz 2:**  
CSS custom property nem örökölődik shadow DOM-on — content projectionnel mindig `@Input()` chain kell 5+ szinten. A „Hogyan kerülöd el a property drillinget DI tokennel, CSS változóval vagy content projectionnel" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány.

**Hamis válasz 3:**  
DI token property drillingre: `@Host()` decoratorral minden child automatikusan megkapja a parent service-t injection nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: DI token property drillingre: `@Host()` decoratorral minden child automatikusan megkapja a parent service-t injection nélkül.

### Kérdés 39: Hogyan építesz vegyes SCSS + design token + Tailwind stratégiát?

**Hamis válasz 1:**  
SCSS + Tailwind + token: Tailwind utility class minden design token felett — token csak dokumentáció, runtime-ban nem kell. Ennek az az oka, hogy sCSS + Tailwind + token: Tailwind utility class minden design token felett — token csak dokumentáció, runtime-ban nem kell — ez.

**Hamis válasz 2:**  
Design tokeneket SCSS `$variable`-ként tároljuk, mert CSS custom property nem működik `:host`-ban. A „Hogyan építesz vegyes SCSS + design token + Tailwind stratégiát" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy design tokeneket SCSS `$variable`-ként tároljuk, mert CSS cus.

**Hamis válasz 3:**  
Tailwind és SCSS együtt tilos ugyanabban a komponensben — view encapsulation miatt conflict garantált. Ha architektúra review-n indokolod, a kiinduló tétel: Tailwind és SCSS együtt tilos ugyanabban a komponensben — view encapsulation miatt conflict garantált.

### Kérdés 40: Mikor válassz `@container` query-t media query helyett?

**Hamis válasz 1:**  
`@container` query mindig helyettesíti a media query-t — viewport breakpointok már deprecated CSS-ben. Ennek az az oka, hogy `@container` query mindig helyettesíti a media query-t — viewport breakpointok már deprecated CSS-ben — ezt rögtön mechanizmus-szinten.

**Hamis válasz 2:**  
Container query csak Grid layouttal működik; Flexbox container nem támogatott `@container`-t. A „Mikor válassz `@container` query-t media query helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy container query csak Grid layouttal működik; Flexb.

**Hamis válasz 3:**  
Media query jobb komponens-szintű responsivitásra, mert a `@container` csak root elemre vonatkozik. Ha architektúra review-n indokolod, a kiinduló tétel: Media query jobb komponens-szintű responsivitásra, mert a `@container` csak root elemre vonatkozik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 41: Miért vezessük ki a CommonJS (CJS) függőségeket az Angular buildből?

**Hamis válasz 1:**  
CommonJS függőségek kisebb bundle-t adnak ESM-nél tree-shaking miatt — ezért érdemes CJS-re maradni. Ennek az az oka, hogy commonJS függőségek kisebb bundle-t adnak ESM-nél tree-shaking miatt — ezért érdemes CJS-re maradni — ezt rögtön mechanizmus-szinten is meg szokás.

**Hamis válasz 2:**  
Az Angular build automatikusan CJS-re konvertál minden ESM importot — a `allowedCommonJsDependencies` felesleges config. A „Miért vezessük ki a CommonJS (CJS) függőségeket az Angular buildből" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az Angular build automatikusan CJS-re konv.

**Hamis válasz 3:**  
CJS kivezetés csak Node.js backendre vonatkozik; browser bundle-ben a require() gyorsabb, mint import. Ha architektúra review-n indokolod, a kiinduló tétel: CJS kivezetés csak Node.js backendre vonatkozik; browser bundle-ben a require() gyorsabb, mint import.

### Kérdés 42: Hogyan debuggolsz Angular runtime error kódokat (NG0xxx)?

**Hamis válasz 1:**  
NG0xxx hibakódok csak development buildben jelennek meg — production-ben generic „Application error" van. Ennek az az oka, hogy nG0xxx hibakódok csak development buildben jelennek meg — production-ben generic „Application error" van — ezt rögtön mechanizmus-szinten is meg szok.

**Hamis válasz 2:**  
NG01203 azt jelenti, hogy hiányzik a `standalone: true` — minden NG0xxx hiba ugyanerre redukálható. A „Hogyan debuggolsz Angular runtime error kódokat (NG0xxx)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nG01203 azt jelenti, hogy hiányzik a `standalone: true` — minden NG0xxx hiba ugyanerre.

**Hamis válasz 3:**  
Runtime error debug: `ng build --verbose` megmutatja a pontos template sort production bundle-ben is. Ha architektúra review-n indokolod, a kiinduló tétel: Runtime error debug: `ng build --verbose` megmutatja a pontos template sort production bundle-ben is.

### Kérdés 43: Mit tud az új `animate.enter` / `animate.leave` animációs API?

**Hamis válasz 1:**  
`animate.enter` / `animate.leave` csak CSS `@keyframes`-re épül — JavaScript animation controller deprecated. Ennek az az oka, hogy `animate.enter` / `animate.leave` csak CSS `@keyframes`-re épül — JavaScript animation controller deprecated — ezt rögtön mechanizmus-szinten is meg.

**Hamis válasz 2:**  
Az új animációs API csak `@if` / `@for` mellett működik; `*ngIf`-nél a régi `@angular/animations` marad kötelező. A „Mit tud az új `animate.enter` / `animate.leave` animációs API" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az új animációs API csak `@if` / `@for` mellett működik; `*ngIf`-nél a.

**Hamis válasz 3:**  
Animate.enter automatikusan hozzáad `prefers-reduced-motion: no-preference` override-ot — accessibility skip. Ha architektúra review-n indokolod, a kiinduló tétel: Animate.enter automatikusan hozzáad `prefers-reduced-motion: no-preference` override-ot — accessibility skip.

### Kérdés 44: Hogyan kapcsolod be a Router view transition animációkat, és mire való?

**Hamis válasz 1:**  
Router view transitions csak Chrome-ban működnek — más böngészőben automatikusan kikapcsolódnak és hibát dobnak. Ennek az az oka, hogy router view transitions csak Chrome-ban működnek — más böngészőben automatikusan kikapcsolódnak és hibát dobnak.

**Hamis válasz 2:**  
View transition animációhoz `@angular/animations` package kötelező parallelben — a Router API önmagában nem elég. A „Hogyan kapcsolod be a Router view transition animációkat, és mire való" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az.

**Hamis válasz 3:**  
View transitions mindig lassítják a navigációt — csak marketing oldalakon érdemes, B2B appban tilos. Ha architektúra review-n indokolod, a kiinduló tétel: View transitions mindig lassítják a navigációt — csak marketing oldalakon érdemes, B2B appban tilos.

### Kérdés 45: Hogyan állítasz fel korszerű code quality toolingt (ESLint flat config, Prettier, Husky)?

**Hamis válasz 1:**  
ESLint flat config nem kompatibilis Angular projekttel — maradjon `.eslintrc.json` v22-ig is. Ennek az az oka, hogy eSLint flat config nem kompatibilis Angular projekttel — maradjon `.eslintrc.json` v22-ig is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Prettier és ESLint ugyanazt csinálja — elég az egyik, dupla formázás CI időpocsékolás. A „Hogyan állítasz fel korszerű code quality toolingt (ESLint flat config, Prettier, Husky)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy prettier é.

**Hamis válasz 3:**  
Husky pre-commit hook production buildet futtat minden commitnál — így garantált, hogy nem megy ki broken kód. Ha architektúra review-n indokolod, a kiinduló tétel: Husky pre-commit hook production buildet futtat minden commitnál — így garantált, hogy nem m.

### Kérdés 46: Mikor használd a `detectChanges()`-t és mikor a `markForCheck()`-et?

**Hamis válasz 1:**  
`detectChanges()` csak Default stratégia mellett működik — OnPush-nál mindig `markForCheck()` kell helyette. Ennek az az oka, hogy `detectChanges()` csak Default stratégia mellett működik — OnPush-nál mindig `markForCheck()` kell helyette — ezt rögtön mechanizmus-szinten is meg sz.

**Hamis válasz 2:**  
MarkForCheck azonnal futtat CD-t; detectChanges csak jelzi a következő Zone tick-et — ez a fő különbség. A „Mikor használd a `detectChanges()`-t és mikor a `markForCheck()`-et" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy markForCheck azonnal futtat CD-t.

**Hamis válasz 3:**  
Zoneless appban mindkettő deprecated — helyette `ApplicationRef.tick()` manuálisan minden signal write után. Ha architektúra review-n indokolod, a kiinduló tétel: Zoneless appban mindkettő deprecated — helyette `ApplicationRef.tick()` manuálisan minden signal write után. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 47: Mikor szabad a `DomSanitizer.bypassSecurityTrust*` metódusokat használni?

**Hamis válasz 1:**  
DomSanitizer bypass mindig biztonságos, ha a backend megbízható — Angular dokumentáció is ezt ajánlja first choice-ként. Ennek az az oka, hogy domSanitizer bypass mindig biztonságos, ha a backend megbízható — Angular dokumentáció is ezt ajánlja first choice-ként.

**Hamis válasz 2:**  
BypassSecurityTrustHtml csak unit tesztben használható — production template-ben compile error. A „Mikor szabad a `DomSanitizer.bypassSecurityTrust*` metódusokat használni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy bypassSecurityTrustHtml csak unit tesztben.

**Hamis válasz 3:**  
Trusted HTML-hez elég innerHTML binding `[innerHTML]` nélkül sanitizer — Angular automatikusan bypass-ol megbízható forrást. Ha architektúra review-n indokolod, a kiinduló tétel: Trusted HTML-hez elég innerHTML binding `[innerHTML]` nélkül s.

### Kérdés 48: Miért érdemes feature flaget `canMatch`-csel és lazy load-dal kombinálni?

**Hamis válasz 1:**  
Feature flag + canMatch: a canMatch csak akkor fut, ha a route már betöltődött — lazy load után ellenőriz. Ennek az az oka, hogy feature flag + canMatch: a canMatch csak akkor fut, ha a route már betöltődött — lazy load után ellenőriz — ezt rögtön mechanizmu.

**Hamis válasz 2:**  
Feature flag-et URL query paramban tároljuk — canMatch nélkül is elég, mert a router automatikusan cache-eli. A „Miért érdemes feature flaget `canMatch`-csel és lazy load-dal kombinálni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a.

**Hamis válasz 3:**  
Lazy load és feature flag ellentétes — flag off esetén is be kell tölteni a chunkot, csak ne rendereljük a komponenst. Ha architektúra review-n indokolod, a kiinduló tétel: Lazy load és feature flag ellentétes — flag off esetén is be kell tölteni a chunkot, csak ne rendereljük a komponenst.

### Kérdés 49: Mikor legyen az URL a source of truth a UI állapotra (filter, pagination)?

**Hamis válasz 1:**  
URL soha ne legyen source of truth — filter és pagination mindig component state-ben, mert query param lassítja a routert. Ennek az az oka, hogy uRL soha ne legyen source of truth — filter és pagination mindig component state-ben, mert query param lassítja a routert — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióké.

**Hamis válasz 2:**  
Pagination URL-ben csak SEO miatt kell — B2B appban sessionStorage a helyes tároló UI állapotra. A „Mikor legyen az URL a source of truth a UI állapotra (filter, pagination)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy pagination URL-ben csak SEO miatt kell — B2B appban sessionStorage a helyes tároló UI állapotra.

**Hamis válasz 3:**  
Router state és URL sync automatikus minden Angular appban — kézi `queryParams` kezelés anti-pattern v15-től. Ha architektúra review-n indokolod, a kiinduló tétel: Router state és URL sync automatikus minden Angular appban — kézi `queryParams` kezelés anti-pattern v15-től. Interjúban érdemes.

### Kérdés 50: Hogyan terveznél Angular upgrade stratégiát v14-ről v20+/v22 felé?

**Hamis válasz 1:**  
Upgrade v14-ről v20+: big-bang egy hétvégén, lépésenkénti migráció nem támogatott Angular CLI által. Ennek az az oka, hogy upgrade v14-ről v20+: big-bang egy hétvégén, lépésenkénti migráció nem támogatott Angular CLI által — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Először RxJS 8, aztán Angular — fordítva mindig dependency conflict. A „Hogyan terveznél Angular upgrade stratégiát v14-ről v20+/v22 felé" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy először RxJS 8, aztán Angular — fordítva mindig dependency conflict.

**Hamis válasz 3:**  
v14-ről v20+ upgrade: skip v15-v19, közvetlenül v20 CLI `ng update` egy parancs — intermediate verziók feleslegesek. Ha architektúra review-n indokolod, a kiinduló tétel: v14-ről v20+ upgrade: skip v15-v19, közvetlenül v20 CLI `ng update` egy parancs — intermediate verziók feleslegesek.

## Staff

### Kérdés 1: Hogyan döntesz micro-frontend mellett vagy ellen egy szervezetben?

**Hamis válasz 1:**  
Micro-frontend mindig jobb nagy szervezetben — a modulith csak kis csapatoknak való, 5+ teamnél kötelező az MFE. Ennek az az oka, hogy micro-frontend mindig jobb nagy szervezetben — a modulith csak kis csapatoknak való, 5+ teamnél kötelező az MFE — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
MFE döntés purely technikai: ha Angular 17+, automatikusan Native Federation — szervezeti tényező irreleváns. A „Hogyan döntesz micro-frontend mellett vagy ellen egy szervezetben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mFE döntés purely technikai: ha Angular 17+, automatikusan Native Federation — szervezeti tényező irreleváns.

**Hamis válasz 3:**  
Ellene szól az MFE csak bundle size — deploy függetlenség és ownership nem valós előny runtime-ban. Ha architektúra review-n indokolod, a kiinduló tétel: Ellene szól az MFE csak bundle size — deploy függetlenség és ownership nem valós előny runtime-ban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátáma.

### Kérdés 2: Milyen fő kockázatai vannak a Native Federation shell/remote felállásnak?

**Hamis válasz 1:**  
Native Federation fő kockázata a webpack 4 vs 5 — Angular verzió skew másodlagos, mert shared singleton automatikus. Ennek az az oka, hogy native Federation fő kockázata a webpack 4 vs 5 — Angular verzió skew másodlagos, mert shared singleton automatikus — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Shell/remote felállásnál a legnagyobb probléma a CSS class name ütközés — RxJS duplikáció nem fordul elő shared mappinggel. A „Milyen fő kockázatai vannak a Native Federation shell/remote felállásnak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy shell/remote felállásnál a legnagyobb probléma a CSS class name ütk.

**Hamis válasz 3:**  
Native Federation-ben a remote-ok nem függnek a shell verziójától — semver csak dokumentációs, runtime compat mindig garantált. Ha architektúra review-n indokolod, a kiinduló tétel: Native Federation-ben a remote-ok nem függnek a shell verziójától — semver csak dokumentációs, runtime compat mindig garantált. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 3: Milyen kommunikációs mintákat ajánlasz micro-frontendek között, és melyeket kerülnéd?

**Hamis válasz 1:**  
Ajánlott kommunikáció MFE-k között: shared mutable global NgRx store minden remote-ban — egyszerű, gyors. Ennek az az oka, hogy ajánlott kommunikáció MFE-k között: shared mutable global NgRx store minden remote-ban — egyszerű, gyors — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Custom events helyett window.postMessage minden irányba broadcast — explicit contract felesleges overhead. A „Milyen kommunikációs mintákat ajánlasz micro-frontendek között, és melyeket kerülnéd" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy custom events helyett window.postMessage minden irányba b.

**Hamis válasz 3:**  
URL state megosztás anti-pattern MFE-ben — minden remote saját router instance-t használ teljesen izoláltan. Ha architektúra review-n indokolod, a kiinduló tétel: URL state megosztás anti-pattern MFE-ben — minden remote saját router instance-t használ teljesen izoláltan. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 4: Mikor érdemes Web Components / Angular Elements absztrakciót használni MFE helyett vagy mellett?

**Hamis válasz 1:**  
Angular Elements minden MFE feature-hez kötelező wrapper — Native Federation nélkül nem deployolható remote. Ennek az az oka, hogy angular Elements minden MFE feature-hez kötelező wrapper — Native Federation nélkül nem deployolható remote — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Web Components csak React hosthoz való — Angular hostba beágyazott custom element nem kap DI-t, ezért useless. A „Mikor érdemes Web Components / Angular Elements absztrakciót használni MFE helyett vagy mellett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy web Components csak React hosthoz való — Angular hostba beágyazott custom.

**Hamis válasz 3:**  
CreateCustomElement zero bootstrap cost — ugyanolyan gyors, mint natív HTML elem, overhead mítosz. Ha architektúra review-n indokolod, a kiinduló tétel: CreateCustomElement zero bootstrap cost — ugyanolyan gyors, mint natív HTML elem, overhead mítosz. Interjúban érdemes a döntést trade-.

### Kérdés 5: Hogyan kényszeríted ki az Nx monorepo library határait, hogy ne csak dokumentáció legyen az architektúra?

**Hamis válasz 1:**  
Nx library határok kikényszerítése: README-ben dokumentált szabályok elég — enforce-module-boundaries túl szigorú CI-n. Ennek az az oka, hogy nx library határok kikényszerítése: README-ben dokumentált szabályok elég — enforce-module-boundaries túl szigorú CI-n.

**Hamis válasz 2:**  
Deep import engedélyezése gyorsabb fejlesztés — public API `index.ts` csak open source library-khoz való. A „Hogyan kényszeríted ki az Nx monorepo library határait, hogy ne csak dokumentáció legyen az architektúra" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány.

**Hamis válasz 3:**  
Project tag-ek dekoratívak Nx-ben — a dependency graph nem használja őket boundary check-hez. Ha architektúra review-n indokolod, a kiinduló tétel: Project tag-ek dekoratívak Nx-ben — a dependency graph nem használja őket boundary check-hez. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 6: Mit jelent az „affected” elv CI/CD-ben Angular monorepónál, és miért kritikus?

**Hamis válasz 1:**  
Affected elv: minden PR-nél teljes monorepo build — így garantált, hogy semmi nem tör el rejtett dependency-ben. Ennek az az oka, hogy affected elv: minden PR-nél teljes monorepo build — így garantált, hogy semmi nem tör el rejtett dependency-ben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak def.

**Hamis válasz 2:**  
Nx affected csak local dev feature — CI-ben mindig `run-many --target=build --all` a best practice. A „Mit jelent az „affected” elv CI/CD-ben Angular monorepónál, és miért kritikus" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nx affecte.

**Hamis válasz 3:**  
Remote cache ellentétes az affected elvvel — cache miatt nem fut le a valódi affected graph. Ha architektúra review-n indokolod, a kiinduló tétel: Remote cache ellentétes az affected elvvel — cache miatt nem fut le a valódi affected graph. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 7: Hogyan vezetnél be zoneless change detectiont egy nagy legacy Angular appban?

**Hamis válasz 1:**  
Zoneless legacy bevezetés: első lépés `zone.js` azonnali eltávolítása package.json-ból — utána fixeljük a bugokat. Ennek az az oka, hogy zoneless legacy bevezetés: első lépés `zone.js` azonnali eltávolítása package.json-ból — utána fixeljük a bugokat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
Legacy appban zoneless csak SSR route-okon — CSR marad Zone.js-en örökre, hybrid a hivatalos migrációs path. A „Hogyan vezetnél be zoneless change detectiont egy nagy legacy Angular appban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy legacy appban zoneless csak SSR route-okon — CSR marad Zone.js-en örökre, hybrid a hivatalos migrációs path. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. A kapacitástervezésnél a fenti modell kiszámítható költséggörbét sugall, ezért vezetői beszélgetésben is könnyű megvéden.

**Hamis válasz 3:**  
Harmadik féltől származó libek automatikusan zoneless-kompatibilisek v18+ — audit felesleges. Ha architektúra review-n indokolod, a kiinduló tétel: Harmadik féltől származó libek automatikusan zoneless-kompatibilisek v18+ — audit felesleges. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának.

### Kérdés 8: Kötelező-e az SSR minden B2B Angular alkalmazásra, és hogyan indokolnád a platform döntést?

**Hamis válasz 1:**  
SSR kötelező minden B2B Angular appban — Google B2B keresés is JavaScript nélkül indexel. Ennek az az oka, hogy sSR kötelező minden B2B Angular appban — Google B2B keresés is JavaScript nélkül indexel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
B2B platform döntés: CSR mindig olcsóbb infra — SSR csak marketing miatt, product appban soha. A „Kötelező-e az SSR minden B2B Angular alkalmazásra, és hogyan indokolnád a platform döntést" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy b2B platform döntés: CSR mindig olcsóbb infra — SSR csak marketin.

**Hamis válasz 3:**  
SSR és B2B: autentikált tartalom prerender-elhető build időben statikus HTML-ként — runtime SSR felesleges. Ha architektúra review-n indokolod, a kiinduló tétel: SSR és B2B: autentikált tartalom prerender-elhető build időben statikus HTML-ként — runtime SSR felesleges.

### Kérdés 9: Hogyan governance-elnéd a design system tokeneket, SCSS-t és komponens API-t több termékcsapatnál?

**Hamis válasz 1:**  
Design system governance: minden csapat saját SCSS fork — central token repo lassítja a delivery-t. Ennek az az oka, hogy design system governance: minden csapat saját SCSS fork — central token repo lassítja a delivery-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Komponens API változtatás semver nélkül OK, ha internal monorepo — csak npm publish-nál kell semver. A „Hogyan governance-elnéd a design system tokeneket, SCSS-t és komponens API-t több termékcsapatnál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy komponens API változtatás semver nélkül OK, ha internal monorepo — csak npm publish-nál kell semver. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabá.

**Hamis válasz 3:**  
Figma token sync manuális copy-paste quarterly — automatizálás túl drága kis szervezetnek is. Ha architektúra review-n indokolod, a kiinduló tétel: Figma token sync manuális copy-paste quarterly — automatizálás túl drága kis szervezetnek is. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 10: Hogyan mérnéd és javítanád a Core Web Vitals-t egy Angular appban?

**Hamis válasz 1:**  
Core Web Vitals javítás: minden metrikát unit tesztben assert-elj — Lighthouse CI felesleges. Ennek az az oka, hogy core Web Vitals javítás: minden metrikát unit tesztben assert-elj — Lighthouse CI felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
LCP javítás: minden képet inline base64-ként a main bundle-be — kevesebb request = jobb LCP. A „Hogyan mérnéd és javítanád a Core Web Vitals-t egy Angular appban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy lCP javítás: minden képet inline base64-ként a main bundle-be.

**Hamis válasz 3:**  
INP csak backend latency — frontend optimalizálás nem befolyásolja, mert server response time a bottleneck. Ha architektúra review-n indokolod, a kiinduló tétel: INP csak backend latency — frontend optimalizálás nem befolyásolja, mert server response time a bottleneck. Ebből vezethető le a hibakezelés, a tesztelés és a production chec.

### Kérdés 11: Forensic architecture analysis során mit nézel meg először egy ismeretlen Angular monorepóban?

**Hamis válasz 1:**  
Forensic analysis első lépés: `git log --oneline` — architecture-t commit history-ból rekonstruáljuk. Ennek az az oka, hogy forensic analysis első lépés: `git log --oneline` — architecture-t commit history-ból rekonstruáljuk — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak.

**Hamis válasz 2:**  
Ismeretlen monorepónál először a README — ha nincs, nincs értelme a kódot nézni. A „Forensic architecture analysis során mit nézel meg először egy ismeretlen Angular monorepóban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ismeretlen monorepónál először a README — ha n.

**Hamis válasz 3:**  
Dependency graph helyett node_modules méret alapján döntünk — nagyobb folder = rosszabb architecture. Ha architektúra review-n indokolod, a kiinduló tétel: Dependency graph helyett node_modules méret alapján döntünk — nagyobb folder = rosszabb architecture. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 12: Hogyan csökkented a backend API törő változtatásainak hatását a frontendeken?

**Hamis válasz 1:**  
Backend API breaking change hatása: frontend semver lock a backend minor verzióra — automatikus compat. Ennek az az oka, hogy backend API breaking change hatása: frontend semver lock a backend minor verzióra — automatikus compat — ezt rögtön mechanizmus-szinten is meg szok.

**Hamis válasz 2:**  
OpenAPI diff CI-ben felesleges — TypeScript strict mode elkap minden breaking change-et compile time-ban. A „Hogyan csökkented a backend API törő változtatásainak hatását a frontendeken" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy openAPI diff CI-ben felesleges — TypeSc.

**Hamis válasz 3:**  
API változásnál mindig big-bang frontend deploy ugyanarra az időpontra — feature flag API versioning helyett. Ha architektúra review-n indokolod, a kiinduló tétel: API változásnál mindig big-bang frontend deploy ugyanarra az időpontra — feature flag API versioning helyett.

### Kérdés 13: Hogyan alakítasz ki multi-team code ownershipot Angular monorepóban?

**Hamis válasz 1:**  
Multi-team ownership: minden library shared, mindenki commitolhat bármit — code review elég boundary. Ennek az az oka, hogy multi-team ownership: minden library shared, mindenki commitolhat bármit — code review elég boundary — ezt rögtön mechanizmus-szinten is meg szokás v.

**Hamis válasz 2:**  
CODEOWNERS fájl anti-pattern monorepóban — csak GitHub Enterprise feature, Nx-ben nincs equivalent. A „Hogyan alakítasz ki multi-team code ownershipot Angular monorepóban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy.

**Hamis válasz 3:**  
Team boundary = folder név — `libs/team-a` és `libs/team-b` között import szabad, ha ugyanaz a sprint. Ha architektúra review-n indokolod, a kiinduló tétel: Team boundary = folder név — `libs/team-a` és `libs/team-b` között import szabad, ha ugyanaz a s.

### Kérdés 14: Mikor választanád szervezetileg a classic NgRx Store-t a Signal Store helyett?

**Hamis válasz 1:**  
Org-szinten classic NgRx mindig jobb Signal Store-nál — DevTools és middleware ecosystem miatt. Ennek az az oka, hogy org-szinten classic NgRx mindig jobb Signal Store-nál — DevTools és middleware ecosystem miatt — ezt rögtön mechanizmus-szinten.

**Hamis válasz 2:**  
Signal Store csak POC-hoz — production state 100+ action-nél classic NgRx kötelező. A „Mikor választanád szervezetileg a classic NgRx Store-t a Signal Store helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy signal Store csak.

**Hamis válasz 3:**  
Classic NgRx választás akkor is, ha nincs async side effect — reducer overhead elhanyagolható. Ha architektúra review-n indokolod, a kiinduló tétel: Classic NgRx választás akkor is, ha nincs async side effect — reducer overhead elhanyagolható. Ebből vezethető le a hibakezelés, a tesztelés és a producti.

### Kérdés 15: Hogyan kodifikálnád a RxJS higher-order mapping sztenderdet a csapatban?

**Hamis válasz 1:**  
Higher-order mapping sztenderd: minden async művelet `mergeMap` — egyszerű, predictable, cancel nem kell. Ennek az az oka, hogy higher-order mapping sztenderd: minden async művelet `mergeMap` — egyszerű, predictable, cancel nem kell — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigv.

**Hamis válasz 2:**  
switchMap tilos csapatban — elveszti a párhuzamos requesteket, mindig data loss. A „Hogyan kodifikálnád a RxJS higher-order mapping sztenderdet a csapatban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy switchMap tilos csapatban — elveszti a párhuzamos requesteket, mindig data loss. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
RxJS mapping döntés: junior `mergeMap`, senior `concatMap`, staff `exhaustMap` — rang alapján fix operátor. Ha architektúra review-n indokolod, a kiinduló tétel: RxJS mapping döntés: junior `mergeMap`, senior `concatMap`, staff `exhaustMap` — rang alapján fix operátor. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal .

### Kérdés 16: Mit jelent az error budget / reliability a frontend oldalon, és milyen metrikákat követsz?

**Hamis válasz 1:**  
Frontend error budget = 0 failed unit test release előtt — SLO és RUM metrika irreleváns frontendre. Ennek az az oka, hogy frontend error budget = 0 failed unit test release előtt — SLO és RUM metrika irreleváns frontendre — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Reliability frontenden: 100% uptime a CDN-en — app bundle hiba nem számít error budget-be. A „Mit jelent az error budget / reliability a frontend oldalon, és milyen metrikákat követsz" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy reliability frontenden: 100% uptime a CDN-en — a.

**Hamis válasz 3:**  
Error budget csak backend SRE domain — frontend csak „best effort" deploy, metrika nincs. Ha architektúra review-n indokolod, a kiinduló tétel: Error budget csak backend SRE domain — frontend csak „best effort" deploy, metrika nincs. Ebből vezethető le a hibakezelés, a tesztelés és a productio.

### Kérdés 17: Mit tartalmaznál egy SPA security review checklistben release előtt?

**Hamis válasz 1:**  
SPA security checklist: elég a `npm audit` clean — XSS és CSP külön review felesleges Angular mellett. Ennek az az oka, hogy sPA security checklist: elég a `npm audit` clean — XSS és CSP külön review felesleges Angular mellett — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Release előtt manual penetration test minden PR-en — automatizált security scan nem talál XSS-et. A „Mit tartalmaznál egy SPA security review checklistben release előtt" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy release.

**Hamis válasz 3:**  
Security review: localStorage-ban token OK, ha HTTPS — httpOnly cookie csak legacy backend miatt kell. Ha architektúra review-n indokolod, a kiinduló tétel: Security review: localStorage-ban token OK, ha HTTPS — httpOnly cookie csak legacy backend miatt kell.

### Kérdés 18: Hogyan skálázod az i18n folyamatot 10+ locale esetén?

**Hamis válasz 1:**  
10+ locale: egy bundle minden nyelvvel — lazy locale chunk anti-pattern, több request rosszabb UX. Ennek az az oka, hogy 10+ locale: egy bundle minden nyelvvel — lazy locale chunk anti-pattern, több request rosszabb UX — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
i18n skálán: fordítást runtime JSON fetch-sel — build-time `$localize` nem skálázódik 5+ locale fölött. A „Hogyan skálázod az i18n folyamatot 10+ locale esetén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy i18n skálán: fordítást runt.

**Hamis válasz 3:**  
Locale fallback chain: ha hiányzik fordítás, üres string — angol fallback automatikus Angular-ban nincs, ne implementáld. Ha architektúra review-n indokolod, a kiinduló tétel: Locale fallback chain: ha hiányzik fordítás, üres string — angol fallback automatikus Angular-ban nincs, ne implementáld.

### Kérdés 19: Milyen akadálymentességi (a11y) acceptance criteria-t tennél a termék Definition of Done-jába, és hogyan ellenőriznéd őket?

**Hamis válasz 1:**  
A11y DoD: manual „tab through once" elég — axe-core CI felesleges, false positive sok. Ennek az az oka, hogy a11y DoD: manual „tab through once" elég — axe-core CI felesleges, false positive sok — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
WCAG AA kötelező csak public sector — B2B SaaS-nál nincs legal requirement, skip acceptable. A „Milyen akadálymentességi (a11y) acceptance criteria-t tennél a termék Definition of Done-jába, és hogyan ellenőriznéd őket" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy wCAG AA kötelező csak public sector — B2B SaaS-nál nincs legal requirement, skip acceptable. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Acceptance criteria: színkontraszt 3:1 minimum — WCAG 4.5:1 túl szigorú design-hoz. Ha architektúra review-n indokolod, a kiinduló tétel: Acceptance criteria: színkontraszt 3:1 minimum — WCAG 4.5:1 túl szigorú design-hoz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 20: Hogyan kényszeríted ki a bundle size budgetet a CI-ben, hogy performance regresszió ne csússzon be?

**Hamis válasz 1:**  
Bundle budget CI: csak warning, soha ne fail — performance regressió post-release hotfix gyorsabb. Ennek az az oka, hogy bundle budget CI: csak warning, soha ne fail — performance regressió post-release hotfix gyorsabb — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Budget-et main bundle initial size-ra állítjuk 5 MB-ra — lazy chunk nem számít. A „Hogyan kényszeríted ki a bundle size budgetet a CI-ben, hogy performance regresszió ne csússzon be" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy budget.

**Hamis válasz 3:**  
Webpack bundle analyzer helyett `du -sh dist/` — ha nem nőtt a folder, nincs regressió. Ha architektúra review-n indokolod, a kiinduló tétel: Webpack bundle analyzer helyett `du -sh dist/` — ha nem nőtt a folder, nincs regressió. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 21: Hogyan vezetnél szervezeti migrációs programot NgModule-ról standalone-re?

**Hamis válasz 1:**  
NgModule → standalone migráció: egy éjszakai script minden fájlt konvertál — manuális review felesleges. Ennek az az oka, hogy ngModule → standalone migráció: egy éjszakai script minden fájlt konvertál — manuális review felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Standalone után NgModule import még yearsig supported — fokozatos migráció nem kell, várható breaking change nincs. A „Hogyan vezetnél szervezeti migrációs programot NgModule-ról standalone-re" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy standalone után NgM.

**Hamis válasz 3:**  
Migrációs program: először minden feature module-ot lazy NgModule-ként tartunk — standalone csak leaf component. Ha architektúra review-n indokolod, a kiinduló tétel: Migrációs program: először minden feature module-ot lazy NgModule-ként tartunk — standalone csak leaf component. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 22: Hogyan vezetnél be signal-first architektúrát legacy RxJS-heavy appba?

**Hamis válasz 1:**  
Signal-first legacy: azonnali rewrite minden service signalra — RxJS delete package.json-ból day one. Ennek az az oka, hogy signal-first legacy: azonnali rewrite minden service signalra — RxJS delete package.json-ból day one — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Legacy RxJS-heavy appban signal csak UI binding — service layer RxJS marad örökre, hybrid végállapot. A „Hogyan vezetnél be signal-first architektúrát legacy RxJS-heavy appba" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy legacy RxJS-heavy appban signal csa.

**Hamis válasz 3:**  
Migráció: `BehaviorSubject` → `signal` 1:1 rename — API ugyanaz, csak import path változik. Ha architektúra review-n indokolod, a kiinduló tétel: Migráció: `BehaviorSubject` → `signal` 1:1 rename — API ugyanaz, csak import path változik. Interjúban érdemes a döntés.

### Kérdés 23: Hogyan döntesz `@defer`, lazy route és micro-frontend között (döntési mátrix)?

**Hamis válasz 1:**  
Döntési mátrix: MFE > lazy route > @defer mindig ebben a sorrendben — defer csak animation delay. Ennek az az oka, hogy döntési mátrix: MFE > lazy route > @defer mindig ebben a sorrendben — defer csak animation delay — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defi.

**Hamis válasz 2:**  
@defer helyettesíti a lazy route-ot — routing chunk split felesleges v17+ defer mellett. A „Hogyan döntesz `@defer`, lazy route és micro-frontend között (döntési mátrix)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy @defer helyettesíti a lazy route-ot — routing chunk split felesl.

**Hamis válasz 3:**  
Micro-frontend akkor kell, ha egy feature > 1000 sor — különben @defer trigger viewport elég. Ha architektúra review-n indokolod, a kiinduló tétel: Micro-frontend akkor kell, ha egy feature > 1000 sor — különben @defer trigger viewport elég.

### Kérdés 24: Milyen shared library versioning stratégiákat ismersz monorepóban, és mik a trade-offok?

**Hamis válasz 1:**  
Shared library versioning monorepóban: minden lib independent semver npm publish — internal is külön verzió. Ennek az az oka, hogy shared library versioning monorepóban: minden lib independent semver npm publish — internal is külön verzió — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Single version policy anti-pattern — team autonomy fontosabb, divergent Angular minor OK library-nként. A „Milyen shared library versioning stratégiákat ismersz monorepóban, és mik a trade-offok" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy single version polic.

**Hamis válasz 3:**  
Breaking change shared libben: silent update — consumers fixeljenek következő sprintben, comm nem kell. Ha architektúra review-n indokolod, a kiinduló tétel: Breaking change shared libben: silent update — consumers fixeljenek következő sprintben, comm nem kell.

### Kérdés 25: Milyen elemekből állna egy frontend observability stack, és miért kell a backend trace-hez kötni?

**Hamis válasz 1:**  
Frontend observability: console.log aggregation elég — backend trace link felesleges, külön silók. Ennek az az oka, hogy frontend observability: console.log aggregation elég — backend trace link felesleges, külön silók — ezt rögtön mechanizmus-szinten is meg szokás véden.

**Hamis válasz 2:**  
RUM csak marketing site — B2B appban user tracking GDPR miatt tilos, nincs observability stack. A „Milyen elemekből állna egy frontend observability stack, és miért kell a backend trace-hez kötni" kérdésnél a leggyakoribb tévút az ellenkező sz.

**Hamis válasz 3:**  
OpenTelemetry frontend bundle-ben zero overhead — minden click span backend trace-be megy automatikus correlation nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: OpenTelemetry frontend bundle-ben zero overhead — minden click span backend trace-be megy automatikus correlation nélkül.

### Kérdés 26: Hogyan kezelnéd a „framework churn”-t (gyors Angular feature hullám v17–v22 között)?

**Hamis válasz 1:**  
Framework churn v17-v22: skip minden minor, csak LTS-re upgrade évente egyszer — feature hullám irrelevant. Ennek az az oka, hogy framework churn v17-v22: skip minden minor, csak LTS-re upgrade évente egyszer — feature hullám irrelevant — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Angular hivatalos roadmap kötelező adopt minden release week 1 — különben security patch nem jön. A „Hogyan kezelnéd a „framework churn”-t (gyors Angular feature hullám v17–v22 között)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy.

**Hamis válasz 3:**  
v17-v22 churn: signals és zoneless optional forever — official roadmap csak experimental feature-öket listáz. Ha architektúra review-n indokolod, a kiinduló tétel: v17-v22 churn: signals és zoneless optional forever — official roadmap csak experimental feature-öket.

### Kérdés 27: Milyen governance szabályokat vezetnél be AI-assisted Angular fejlesztéshez (MCP, agent skills)?

**Hamis válasz 1:**  
AI-assisted dev governance: minden AI generált kód commit without review — speed > quality. Ennek az az oka, hogy aI-assisted dev governance: minden AI generált kód commit without review — speed > quality — ezt rögtön mechaniz.

**Hamis válasz 2:**  
MCP/agent skills tiltva enterprise-ben — supply chain risk miatt csak manuális kód allowed. A „Milyen governance szabályokat vezetnél be AI-assisted Angular fejlesztéshez (MCP, agent skills)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszon.

**Hamis válasz 3:**  
AI code ugyanazt az architektúrát követi automatikusan — lint rule AI-specifikus felesleges. Ha architektúra review-n indokolod, a kiinduló tétel: AI code ugyanazt az architektúrát követi automatikusan — lint rule AI-specifikus felesleges.

### Kérdés 28: Hogyan osztanád meg a felelősséget platform team és product team között Angular ökoszisztémában?

**Hamis válasz 1:**  
Platform vs product team: product team felelős Angular upgrade-ért — platform csak CI template. Ennek az az oka, hogy platform vs product team: product team felelős Angular upgrade-ért — platform csak CI template — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Platform team minden feature kódot is review-ol — product team csak ticket-et húz. A „Hogyan osztanád meg a felelősséget platform team és product team között Angular ökoszisztémában" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszon.

**Hamis válasz 3:**  
Felelősségmegosztás: shared libs ownership nélkül — whoever commits first owns forever. Ha architektúra review-n indokolod, a kiinduló tétel: Felelősségmegosztás: shared libs ownership nélkül — whoever commits first owns forever. Interjúban érdemes a dönt.

### Kérdés 29: Milyen szervezeti és technikai hatása van a hydration mismatch-nek, és hogyan előzöd meg?

**Hamis válasz 1:**  
Hydration mismatch org impact: csak console warning — user nem lát semmit, business impact zero. Ennek az az oka, hogy hydration mismatch org impact: csak console warning — user nem lát semmit, business impact zero — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Mismatch megelőzés: CSR-only minden SSR appban — hydration kikapcsolás `ngSkipHydration` rooton elég. A „Milyen szervezeti és technikai hatása van a hydration mismatch-nek, és hogyan előzöd meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az.

**Hamis válasz 3:**  
Org-szintű mismatch: SEO ranking drop — Google penalizálja a teljes domain-t egy mismatch miatt permanently. Ha architektúra review-n indokolod, a kiinduló tétel: Org-szintű mismatch: SEO ranking drop — Google penalizálja a teljes domain-t egy mismatch miatt permanently.

### Kérdés 30: Mikor vezetnél be BFF-et (Backend for Frontend) az Angular kliens elé?

**Hamis válasz 1:**  
BFF minden Angular app elé kötelező — direct backend hívás security violation enterprise-ben. Ennek az az oka, hogy bFF minden Angular app elé kötelező — direct backend hívás security violation enterprise-ben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
BFF csak mobile app-hoz való — SPA közvetlenül API gateway-re mehet, BFF dupla hop. A „Mikor vezetnél be BFF-et (Backend for Frontend) az Angular kliens elé" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy bFF csak mobile app-ho.

**Hamis válasz 3:**  
BFF bevezetés akkor, ha a backend GraphQL — REST esetén BFF anti-pattern, felesleges layer. Ha architektúra review-n indokolod, a kiinduló tétel: BFF bevezetés akkor, ha a backend GraphQL — REST esetén BFF anti-pattern, felesleges layer.

### Kérdés 31: Hogyan nézne ki a tesztpiramis nagy szervezet Angular monorepójában?

**Hamis válasz 1:**  
Tesztpiramis nagy org: 90% E2E, 10% unit — user journey a fontos, component teszt waste. Ennek az az oka, hogy tesztpiramis nagy org: 90% E2E, 10% unit — user journey a fontos, component teszt waste — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defi.

**Hamis válasz 2:**  
Monorepo teszt: egy globális E2E suite az egész repora — per-project teszt duplikáció. A „Hogyan nézne ki a tesztpiramis nagy szervezet Angular monorepójában" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont.

**Hamis válasz 3:**  
Unit teszt csak util függvényekre — komponens teszt mindig E2E Playwright, TestBed deprecated. Ha architektúra review-n indokolod, a kiinduló tétel: Unit teszt csak util függvényekre — komponens teszt mindig E2E Playwright, TestBed deprecated. Ebből vezethető le a hibakezelés, a tesztelés és a producti.

### Kérdés 32: Milyen frontend „architecture fitness functions” példákat automatizálnál?

**Hamis válasz 1:**  
Architecture fitness functions: manual arch review quarterly — automatizálás nem lehetséges frontend boundary-kre. Ennek az az oka, hogy architecture fitness functions: manual arch review quarterly — automatizálás nem lehetséges frontend boundary-kre — ezt rögtön mec.

**Hamis válasz 2:**  
Nx enforce-module-boundaries optional — fitness function = team lead email approval merge előtt. A „Milyen frontend „architecture fitness functions” példákat automatizálnál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nx enforce-modul.

**Hamis válasz 3:**  
Fitness function példa: max 500 sor komponens — CI fail, kivétel nincs, refactor kötelező azonnal. Ha architektúra review-n indokolod, a kiinduló tétel: Fitness function példa: max 500 sor komponens — CI fail, kivétel nincs, refactor.

### Kérdés 33: Hogyan terveznéd az SCSS/token architektúrát dark mode és white-label mellett skálán?

**Hamis válasz 1:**  
Dark mode token architektúra: külön build per theme — runtime CSS var switch lassítja a first paint-et. Ennek az az oka, hogy dark mode token architektúra: külön build per theme — runtime CSS var switch lassítja a first paint-et — ezt rögtön mechanizmus-szinten is meg szok.

**Hamis válasz 2:**  
White-label: minden brand külön repository — monorepo token shared impossible multi-brand-nél. A „Hogyan terveznéd az SCSS/token architektúrát dark mode és white-label mellett skálán" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy white-label: minden brand külön repository — mo.

**Hamis válasz 3:**  
SCSS `@mixin theme` elég dark mode-hoz — design token JSON csak Figma export dekoráció. Ha architektúra review-n indokolod, a kiinduló tétel: SCSS `@mixin theme` elég dark mode-hoz — design token JSON csak Figma export dekoráció. Interjúban érde.

### Kérdés 34: Hogyan szerveznél dependency upgrade train-t (Angular + TypeScript + RxJS + Node)?

**Hamis válasz 1:**  
Dependency upgrade train: Angular és TypeScript külön hónapokban — párhuzamos upgrade dependency hell. Ennek az az oka, hogy dependency upgrade train: Angular és TypeScript külön hónapokban — párhuzamos upgrade dependency hell — ezt rögtön mechanizmus-s.

**Hamis válasz 2:**  
Upgrade train: automatikus Dependabot merge production Friday — hétvégi hotfix culture. A „Hogyan szerveznél dependency upgrade train-t (Angular + TypeScript + RxJS + Node)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy upgrad.

**Hamis válasz 3:**  
RxJS upgrade optional — Angular major bindel fixed RxJS verziót, külön upgrade nem kell 10 évig. Ha architektúra review-n indokolod, a kiinduló tétel: RxJS upgrade optional — Angular major bindel fixed RxJS verziót, külön upgrade nem kell 10 évig. Ebből vezethető le a hibakezelés, a tesztelés és a production ch.

### Kérdés 35: Hogyan dokumentálod a frontend architektúra döntéseket ADR-ben?

**Hamis válasz 1:**  
ADR felesleges monorepóban — a kód maga a dokumentáció, wiki elég architektúra döntésekhez. Ennek az az oka, hogy aDR felesleges monorepóban — a kód maga a dokumentáció, wiki elég architektúra döntésekhez — ezt rögtön mechanizmus-szinten is m.

**Hamis válasz 2:**  
ADR csak backendhez — frontend döntések ephemeral, nem kell rögzíteni. A „Hogyan dokumentálod a frontend architektúra döntéseket ADR-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aDR csak backendhez — frontend döntések ephemeral, nem kell rögzí.

**Hamis válasz 3:**  
ADR template: egy mondat „we use X" — trade-off és rejected alternatives dokumentálása time waste. Ha architektúra review-n indokolod, a kiinduló tétel: ADR template: egy mondat „we use X" — trade-off és rejected alternatives dokumentálása time waste.

### Kérdés 36: Hogyan kezelnéd a shell micro-frontend single point of failure kockázatát?

**Hamis válasz 1:**  
Shell SPOF: multiple shell instance deploy — load balancer round-robin, nincs single point. Ennek az az oka, hogy shell SPOF: multiple shell instance deploy — load balancer round-robin, nincs single point — ezt rögtön mechanizmus-szinten is meg szokás.

**Hamis válasz 2:**  
Remote failure esetén shell white screen — graceful fallback nem implementálható Native Federation-ben. A „Hogyan kezelnéd a shell micro-frontend single point of failure kockázatát" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, ho.

**Hamis válasz 3:**  
Shell minimalizálás rossz — minél több logic shellben, annál stabilabb a MFE ecosystem. Ha architektúra review-n indokolod, a kiinduló tétel: Shell minimalizálás rossz — minél több logic shellben, annál stabilabb a MFE ecosystem. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 37: Milyen adatvédelmi (PII) szabályokat vezetnél be a frontend logokra és a RUM-ra?

**Hamis válasz 1:**  
PII frontend log: email és user ID logolható RUM-ban — GDPR consent banner elég védelem. Ennek az az oka, hogy pII frontend log: email és user ID logolható RUM-ban — GDPR consent banner elég védelem — ezt rögtön mechanizmus-szinten is meg szokás vé.

**Hamis válasz 2:**  
Frontend log soha ne menjen backendre — client-only console, production monitoring PII-free automatikusan. A „Milyen adatvédelmi (PII) szabályokat vezetnél be a frontend logokra és a RUM-ra" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont.

**Hamis válasz 3:**  
RUM PII: hash user ID SHA1-gyel — reversible, de compliance-nak elég „technikai anonimizálás". Ha architektúra review-n indokolod, a kiinduló tétel: RUM PII: hash user ID SHA1-gyel — reversible, de compliance-nak elég „tech.

### Kérdés 38: Hogyan egyezteted a design tokeneket a Figma/design és a kód között hosszú távon?

**Hamis válasz 1:**  
Figma-token sync: designer exportál SCSS-t manuálisan — Style Dictionary overkill kis csapatnak. Ennek az az oka, hogy figma-token sync: designer exportál SCSS-t manuálisan — Style Dictionary overkill kis csapatnak — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Token drift elfogadható — quarterly sync meeting elég, CI diff Figma vs code felesleges. A „Hogyan egyezteted a design tokeneket a Figma/design és a kód között hosszú távon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy token drift elfogadh.

**Hamis válasz 3:**  
Design token forrás of truth: Figma — kódban hardcoded fallback OK, ha Figma késik. Ha architektúra review-n indokolod, a kiinduló tétel: Design token forrás of truth: Figma — kódban hardcoded fallback OK, ha Figma késik. Interjúban érdemes .

### Kérdés 39: Milyen migrációs elveket követnél Signal Forms + Resource API hosszú távú bevezetésénél?

**Hamis válasz 1:**  
Signal Forms + Resource migráció: big-bang egy release — partial migration state inconsistency guaranteed. Ennek az az oka, hogy signal Forms + Resource migráció: big-bang egy release — partial migration state inconsistency guaranteed — ezt rögtön mechanizmus-szi.

**Hamis válasz 2:**  
Resource API csak greenfield — legacy HTTP service wrap Resource-ral automatikusan minden edge case-et lefed. A „Milyen migrációs elveket követnél Signal Forms + Resource API hosszú távú bevezetésénél" kérdésnél a leggyakoribb tévút.

**Hamis válasz 3:**  
Migrációs elv: keep reactive forms, add signal read only — Signal Forms optional forever official stance. Ha architektúra review-n indokolod, a kiinduló tétel: Migrációs elv: keep reactive forms, add signal read only — Signal Forms optional forever official stance.

### Kérdés 40: Miért kezeled a developer experience-t first-class product metrikaként a frontend platformon?

**Hamis válasz 1:**  
DX metrika second-class — business KPI (velocity story point) fontosabb platform teamnek. Ennek az az oka, hogy dX metrika second-class — business KPI (velocity story point) fontosabb platform teamnek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Developer experience = eszközök száma — minél több CLI plugin, annál jobb a DX, metrika nem kell. A „Miért kezeled a developer experience-t first-class product metrikaként a frontend platformon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiz.

**Hamis válasz 3:**  
DX mérés: annual survey only — build time és PR feedback loop irreleváns quantifiable metric. Ha architektúra review-n indokolod, a kiinduló tétel: DX mérés: annual survey only — build time és PR feedback loop irreleváns quantifiable metric.

### Kérdés 41: Hogyan kezelnéd a csapatok közötti RxJS vs Signals skill gapet?

**Hamis válasz 1:**  
RxJS vs Signals skill gap: mindenkit kényszeríts signal-only trainingre — RxJS knowledge deprecated v22. Ennek az az oka, hogy rxJS vs Signals skill gap: mindenkit kényszeríts signal-only trainingre — RxJS knowledge deprecated v22 — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csa.

**Hamis válasz 2:**  
Skill gap kezelés: shared mutable service minden csapatnak — egy pattern, nincs gap. A „Hogyan kezelnéd a csapatok közötti RxJS vs Signals skill gapet" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, ho.

**Hamis válasz 3:**  
Signals training elég — RxJS marad production critical path-on, gap nem org probléma ha junior hire. Ha architektúra review-n indokolod, a kiinduló tétel: Signals training elég — RxJS marad production critical path-on, gap nem org probléma ha junior hire.

### Kérdés 42: Mikor tennéd org-szinten kötelezővé a Zone.js teljes kikapcsolását?

**Hamis válasz 1:**  
Zone.js org-wide kikapcsolás day one mandatory v20 adopt-kor — partial zoneless unsupported. Ennek az az oka, hogy zone.js org-wide kikapcsolás day one mandatory v20 adopt-kor — partial zoneless un.

**Hamis válasz 2:**  
Zone.js kikapcsolás soha — third party libs require Zone forever, official Angular stance. A „Mikor tennéd org-szinten kötelezővé a Zone.js teljes kikapcsolását" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, ho.

**Hamis válasz 3:**  
Zone off csak new apps — legacy forever on Zone, két stack parallel org policy bad. Ha architektúra review-n indokolod, a kiinduló tétel: Zone off csak new apps — legacy forever on Zone, két stack parallel org policy bad.

### Kérdés 43: Hogyan igazítanád a belső frontend platform roadmapet az Angular hivatalos roadmaphez?

**Hamis válasz 1:**  
Platform roadmap független Angular official-tól — adopt experimental features production week zero. Ennek az az oka, hogy platform roadmap független Angular official-tól — adopt experimental features production week zero — ezt rögtön mechanizmus-szinten is.

**Hamis válasz 2:**  
Official roadmap csak marketing — platform team dönt semver-től függetlenül mit használ. A „Hogyan igazítanád a belső frontend platform roadmapet az Angular hivatalos roadmaphez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy official roadmap csak marketing — platform team dö.

**Hamis válasz 3:**  
Roadmap align: copy angular.dev blog címeket quarterly — implementálás optional. Ha architektúra review-n indokolod, a kiinduló tétel: Roadmap align: copy angular.dev blog címeket quarterly — implementálás optional. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 44: Mi a frontend incident response lépéssor production UI outage esetén?

**Hamis válasz 1:**  
Frontend incident response: első lépés git revert last commit — root cause analysis post-mortem optional. Ennek az az oka, hogy frontend incident response: első lépés git revert last commit — root cause analysis post-mortem optional — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Production UI outage: user cache clear broadcast — deploy rollback felesleges ha SW cache a gond. A „Mi a frontend incident response lépéssor production UI outage esetén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy production UI outage: user cache.

**Hamis válasz 3:**  
Incident: frontend team vár backend fixre — UI outage mindig API dependency, frontend nem autonóm. Ha architektúra review-n indokolod, a kiinduló tétel: Incident: frontend team vár backend fixre — UI outage mindig API dependency, frontend nem autonóm.

### Kérdés 45: Hogyan csökkented a vendor lock-in kockázatát state/UI library körül?

**Hamis válasz 1:**  
Vendor lock-in elkerülés: minden évben cserélj state library-t — NgRx → Signal Store → újabb. Ennek az az oka, hogy vendor lock-in elkerülés: minden évben cserélj state library-t — NgRx → Signal Store → újabb — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíc.

**Hamis válasz 2:**  
UI library lock-in acceptable — Angular Material forever, abstraction layer waste. A „Hogyan csökkented a vendor lock-in kockázatát state/UI library körül" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy uI library.

**Hamis válasz 3:**  
State library: build your own each project — zero dependency a legjobb anti lock-in. Ha architektúra review-n indokolod, a kiinduló tétel: State library: build your own each project — zero dependency a legjobb anti lock-in. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 46: Milyen architektúra döntéseket hoznál óriási listák (10k+ sor) megjelenítésénél?

**Hamis válasz 1:**  
10k+ sor lista: `@for` default track elég — virtual scroll csak 100k+ felett kell. Ennek az az oka, hogy 10k+ sor lista: `@for` default track elég — virtual scroll csak 100k+ felett kell — ezt rögtön mechanizmus-szinten is meg szokás védeni,.

**Hamis válasz 2:**  
Nagy lista: pagination backend nélkül client-side slice — 10k DOM elem modern browser OK. A „Milyen architektúra döntéseket hoznál óriási listák (10k+ sor) megjelenítésénél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nagy lista: pagination backend nélkül client-si.

**Hamis válasz 3:**  
Virtual scroll anti-pattern signal appban — signal list render minden elem instant, nincs perf issue. Ha architektúra review-n indokolod, a kiinduló tétel: Virtual scroll anti-pattern signal appban — signal list render minden elem instant, nincs perf issue.

### Kérdés 47: Mikor válassz runtime theme-et (CSS vars) és mikor compile-time white-label buildet multi-brand esetén?

**Hamis válasz 1:**  
Multi-brand: compile-time white-label build mindig jobb — runtime theme CSS var FOUC miatt tilos. Ennek az az oka, hogy multi-brand: compile-time white-label build mindig jobb — runtime theme CSS var FOUC miatt tilos — ezt rögtön mechani.

**Hamis válasz 2:**  
Runtime theme: külön deploy per brand — CSS custom property switch nem skálázódik 3+ brandre. A „Mikor válassz runtime theme-et (CSS vars) és mikor compile-time white-label buildet multi-brand esetén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a mag.

**Hamis válasz 3:**  
White-label decision: JWT claim decide theme — server render theme HTML, client never switch. Ha architektúra review-n indokolod, a kiinduló tétel: White-label decision: JWT claim decide theme — server render theme HTML, client never switch.

### Kérdés 48: Hogyan építenéd be az a11y és security compliance-t a Definition of Done-ba?

**Hamis válasz 1:**  
A11y + security DoD: checkbox „considered a11y" elég — automated scan optional. Ennek az az oka, hogy a11y + security DoD: checkbox „considered a11y" elég — automated scan optional — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Security compliance DoD: npm audit moderate allowed ship — csak critical block. A „Hogyan építenéd be az a11y és security compliance-t a Definition of Done-ba" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy security compliance DoD: npm audit moderate allo.

**Hamis válasz 3:**  
DoD merge: a11y és security külön team — product DoD csak functional acceptance, non-functional post-release. Ha architektúra review-n indokolod, a kiinduló tétel: DoD merge: a11y és security külön team — product DoD csak functional acceptance,.

### Kérdés 49: Milyen szempontok alapján értékelnél egy Senior → Staff promotiont frontend oldalon?

**Hamis válasz 1:**  
Senior → Staff promotion: LOC per sprint primary metric — architektúra impact nem mérhető. Ennek az az oka, hogy senior → Staff promotion: LOC per sprint primary metric — architektúra impact nem mérhető — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Staff = 10 év Angular tapasztalat — skill breadth irrelevant, tenure only. A „Milyen szempontok alapján értékelnél egy Senior → Staff promotiont frontend oldalon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy staff = 10 év Angular tapasztalat —.

**Hamis válasz 3:**  
Promotion criteria: legtöbb PR merge a quarterben — leadership = commit count. Ha architektúra review-n indokolod, a kiinduló tétel: Promotion criteria: legtöbb PR merge a quarterben — leadership = commit count. Ebből vezethető le a hibakezelés, a tesztelés és a.

### Kérdés 50: Hogyan állítanál fel egy 90 napos tervet egy legacy Angular 14 alkalmazás modern (v20+) platformmá alakítására?

**Hamis válasz 1:**  
90 napos legacy v14→v20+ terv: day 1 delete all tests, day 90 rewrite app — nincs köztes állapot. Ennek az az oka, hogy 90 napos legacy v14→v20+ terv: day 1 delete all tests, day 90 rewrite app — nincs köztes állapot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat, noha.

**Hamis válasz 2:**  
Modern platform: upgrade CLI only, kód változatlan maradhat v14 pattern — v20 runtime backward compatible minden API. A „Hogyan állítanál fel egy 90 napos tervet egy legacy Angular 14 alkalmazás modern (v20+) platformmá alakítására" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy modern platform: upgrade CLI only, kód változatlan maradhat v14 pattern — v20 runtime backward compatible minden API. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
90 nap: skip v15-v19, stay v14 until day 89, day 90 ng update v22 — zero intermediate validation. Ha architektúra review-n indokolod, a kiinduló tétel: 90 nap: skip v15-v19, stay v14 until day 89, day 90 ng update v22 — zero intermediate validation. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.
