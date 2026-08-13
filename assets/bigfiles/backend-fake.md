# Backend hamis válaszok (interjú gyakorlat)

A kérdésszámok a [backend-interview-questions-w-answers.md](./backend-interview-questions-w-answers.md) fájlra hivatkoznak.
Minden **Hamis válasz** magabiztosnak hangzik, de szándékosan téves — a helyes válasz a forrásfájlban van.
Szintek: Junior · Medior · Senior · Staff

---

## Junior

### Kérdés 1: Mi a Minimal API, és miben különbözik az MVC controlleres megközelítéstől?

**Hamis válasz 1:**  
A Minimal API a .NET Framework 4.8-ban bevezetett, teljes MVC stack helyettesítője: minden Razor view és filter automatikusan elérhető benne, csak kevesebb kóddal. Nagy monolithokhoz és komplex UI-hoz ez az ajánlott megoldás. Ennek az az oka, hogy a Minimal API a .NET Framework 4.8-ban bevezetett, teljes MVC stack helyettesítője: minden Razor view és filter automatikusan elérhető benne, csak kevesebb kóddal — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
A Minimal API és az MVC controller teljesen külön hostolási modellt használ — a Minimal API csak Kestrel nélkül, IIS-ben fut, ezért nem támogat dependency injection-t. A „Mi a Minimal API, és miben különbözik az MVC controlleres megközelítéstől" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Minimal API és az MVC controller teljesen külön hostolási modellt használ — a Minimal API csak Kestrel nélkül, IIS-ben fut, ezért nem támogat dependency injection-t.

**Hamis válasz 3:**  
A fő különbség az, hogy Minimal API-ban minden végpont kötelezően `[ApiController]` attribútumot igényel, míg MVC-ben ez opcionális és csak a POST műveletekre vonatkozik. Ha architektúra review-n indokolod, a kiinduló tétel: A fő különbség az, hogy Minimal API-ban minden végpont kötelezően `[ApiController]` attribútumot igényel, míg MVC-ben ez opcionális és csak a POST műveletekre vonatkozik.

### Kérdés 2: Hogyan valósítanál meg CRUD végpontokat Minimal API-val?

**Hamis válasz 1:**  
CRUD-hoz minden művelethez külön `ControllerBase`-ből származó osztályt kell regisztrálni a `Program.cs`-ben, majd `app.MapControllers()` hívással kötjük be a Minimal API pipeline-ba. Ennek az az oka, hogy cRUD-hoz minden művelethez külön `ControllerBase`-ből származó osztályt kell regisztrálni a `Program.cs`-ben, majd `app.MapControllers()` hívással kötjük be a Minimal API pipeline-ba — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A `MapDelete` mindig 200 OK-val tér vissza és a törölt entitás teljes body-ját adja vissza; a `MapPost` pedig alapértelmezetten 204 No Content státuszt küld új erőforrás létrehozásakor. A „Hogyan valósítanál meg CRUD végpontokat Minimal API-val" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `MapDelete` mindig 200 OK-val tér vissza és a törölt entitás teljes body-ját adja vissza; a `MapPost` pedig alapértelmezetten 204 No Content státuszt küld új erőforrás létrehozásakor.

**Hamis válasz 3:**  
Minimal API-ban az útvonalparaméterek csak string típusúak lehetnek; numerikus azonosítókhoz mindig query stringet (`?id=5`) kell használni a REST konvenció helyett. Ha architektúra review-n indokolod, a kiinduló tétel: Minimal API-ban az útvonalparaméterek csak string típusúak lehetnek; numerikus azonosítókhoz mindig query stringet (`?id=5`) kell használni a REST konvenció helyett. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 3: Mit jelent a REST API, és milyen HTTP igék tartoznak a tipikus CRUD műveletekhez?

**Hamis válasz 1:**  
REST azt jelenti, hogy minden műveletet GET-tel kell megvalósítani, és a művelet típusát a query string határozza meg (`?action=delete`). A POST, PUT és DELETE igék csak SOAP migrációhoz használatosak. Ennek az az oka, hogy rEST azt jelenti, hogy minden műveletet GET-tel kell megvalósítani, és a művelet típusát a query string határozza meg (`?action=delete`) — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
CRUD-ban a létrehozás PUT-tal, a frissítés POST-tal, az olvasás DELETE-tel, a törlés pedig PATCH-csel történik — ez a HTTP/1.1 hivatalos szabványa. A „Mit jelent a REST API, és milyen HTTP igék tartoznak a tipikus CRUD műveletekhez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cRUD-ban a létrehozás PUT-tal, a frissítés POST-tal, az olvasás DELETE-tel, a törlés pedig PATCH-csel történik — ez a HTTP/1.1 hivatalos szabványa.

**Hamis válasz 3:**  
REST API-nál az erőforrások azonosítása kötelezően GUID-alapú query paraméterrel történik; az URL path csak verziózásra szolgál, nem erőforrás-azonosításra. Ha architektúra review-n indokolod, a kiinduló tétel: REST API-nál az erőforrások azonosítása kötelezően GUID-alapú query paraméterrel történik; az URL path csak verziózásra szolgál, nem erőforrás-azonosításra. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 4: Milyen HTTP státuszkódokat vársz GET, POST, PUT és DELETE esetén?

**Hamis válasz 1:**  
Sikeres GET mindig 201 Created, sikeres POST 200 OK, sikeres PUT 404 Not Found (mert felülírás), sikeres DELETE pedig 500 Internal Server Error, mert a szerver „eldobja” az erőforrást. Ennek az az oka, hogy sikeres GET mindig 201 Created, sikeres POST 200 OK, sikeres PUT 404 Not Found (mert felülírás), sikeres DELETE pedig 500 Internal Server Error, mert a szerver „eldobja” az erőforrást — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
GET esetén hiányzó erőforrásnál 204 No Content a helyes válasz, mert nincs body. POST-nál mindig 200 OK elegendő; a 201 csak fájlletöltésnél használatos. A „Milyen HTTP státuszkódokat vársz GET, POST, PUT és DELETE esetén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy gET esetén hiányzó erőforrásnál 204 No Content a helyes válasz, mert nincs body. Interjúban érdemes a döntést trade-offokkal is alátámasztani.

**Hamis válasz 3:**  
PUT és DELETE siker esetén kötelezően 200 OK body-val kell válaszolni; a 204 No Content csak hibás kéréseknél (400-as család) megengedett. Ha architektúra review-n indokolod, a kiinduló tétel: PUT és DELETE siker esetén kötelezően 200 OK body-val kell válaszolni; a 204 No Content csak hibás kéréseknél (400-as család) megengedett. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még.

### Kérdés 5: Melyik HTTP státuszkódot (result type) mikor használjuk API-kban?

**Hamis válasz 1:**  
401 Unauthorized azt jelenti, hogy a felhasználó autentikált, de nincs joga; 403 Forbidden pedig azt, hogy nincs érvényes token — a kettő felcserélhető. Ennek az az oka, hogy 401 Unauthorized azt jelenti, hogy a felhasználó autentikált, de nincs joga; 403 Forbidden pedig azt, hogy nincs érvényes token — a kettő felcserélhető — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan. A rövid, magabiztos válasz gyakran azért gyenge, mert hiányzik belőle a mechanizmus; a fenti kifejtés ezt a hiányt pótolja nagyobb részletességgel. Ehhez a témához igazítva: 401 Unauthorized azt jelenti, hogy a felhasználó autentikált, de nincs joga; 403 Forbidden pedig azt, hogy nincs érvé.... Érdemes kitérni a rollback stratégiára is: ha a választott minta mégsem válik be, milyen jelzésre és milyen lépésekkel állnál vissza.

**Hamis válasz 2:**  
429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig 503 Service Unavailable a helyes. A „Melyik HTTP státuszkódot (result type) mikor használjuk API-kban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy 429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig 503 Service Unavailable a helyes. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Ne a buzzwordök számát maximalizáld, hanem a döntési fa átláthatóságát — még akkor is, ha a fa gyökere egyszerű feltevés. Ehhez a témához igazítva: 429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig 503 Servi.... A gyors fix helyett a hosszú távú karbantarthatóságot hangsúlyozd: a félreértett alapfogalom később egész feature-láncot mérgezhet meg. Ha két megoldás közül választasz, azt vedd, amelyik kevesebb implicit állapotot vezet be — ez jól hangzó döntési elv interjúban. Ehhez a témához igazítva: 429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig 503 Servi.... Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat. A konvenció akkor tűnik erősnek, ha linttel, template-tel és codeownerrel is támogatott, nem csak wiki bekezdés. Ehhez a témához igazítva: 429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig.

**Hamis válasz 3:**  
202 Accepted azt jelenti, hogy a kérés azonnal sikeresen lefutott és az erőforrás már elérhető GET-tel; ez a szinkron POST szinonimája. Ha architektúra review-n indokolod, a kiinduló tétel: 202 Accepted azt jelenti, hogy a kérés azonnal sikeresen lefutott és az erőforrás már elérhető GET-tel; ez a szinkron POST szinonimája. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A kapacitástervezésnél a fenti modell kiszámítható költséggörbét sugall, ezért vezetői beszélgetésben is könnyű megvédeni. Ehhez a témához igazítva: 202 Accepted azt jelenti, hogy a kérés azonnal sikeresen lefutott és az erőforrás már elérhető GET-tel; ez a szinkron.... Security review-n is ez a narratív szokott jól működni: kevesebb speciális ág, kevesebb meglepetés az authz és validáció határán. A megfigyelhetőség akkor értékes, ha ugyanazokat a fogalmakat használod a dashboardon, a runbookban és a kódban. Ehhez a témához igazítva: 202 Accepted azt jelenti, hogy a kérés azonnal sikeresen lefutott és az erőforrás már elérhető GET-tel; ez a szinkron.... Ne a buzzwordök számát maximalizáld, hanem a döntési fa átláthatóságát — még akkor is, ha a fa gyökere h.

### Kérdés 6: Mit ad vissza egy controller action `IActionResult`-ként GET esetén, ha van és ha nincs adat?

**Hamis válasz 1:**  
Ha nincs adat, mindig `Ok(null)` vagy `Ok(new List<>())` a helyes válasz 200-zal — a 404 csak akkor jár, ha maga a route nem létezik, nem az erőforrás. Ennek az az oka, hogy ha nincs adat, mindig `Ok(null)` vagy `Ok(new List<>())` a helyes válasz 200-zal — a 404 csak akkor jár, ha maga a route nem létezik, nem az erőforrás — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
`IActionResult` helyett GET-nél kötelező `string`-et visszaadni, mert az MVC automatikusan JSON-ná alakítja; `NotFound()` csak POST-nál használható. A „Mit ad vissza egy controller action `IActionResult`-ként GET esetén, ha van és ha nincs adat" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `IActionResult` helyett GET-nél kötelező `string`-et visszaadni, mert az MVC automatikusan JSON-ná alakítja; `N.

**Hamis válasz 3:**  
Ha van adat, `CreatedAtAction`-t kell használni GET-nél is, mert így a kliens megkapja a `Location` fejlécet az erőforrás jövőbeli URL-jére. Ha architektúra review-n indokolod, a kiinduló tétel: Ha van adat, `CreatedAtAction`-t kell használni GET-nél is, mert így a kliens megkapja a `Location` fejlécet az erőforrás jövőbeli URL-jére. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding.

### Kérdés 7: Miért érdemes POST-nál `CreatedAtAction`-t használni `Ok` helyett?

**Hamis válasz 1:**  
A `CreatedAtAction` azért jobb, mert 200 OK helyett automatikusan 204 No Content-et ad, így kisebb a válasz mérete és gyorsabb a hálózat. Ennek az az oka, hogy a `CreatedAtAction` azért jobb, mert 200 OK helyett automatikusan 204 No Content-et ad, így kisebb a válasz mérete és gyorsabb a hálózat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még.

**Hamis válasz 2:**  
POST-nál `Ok` a REST szabvány szerinti válasz; a `CreatedAtAction` csak akkor kell, ha az adatbázis tranzakció rollback történt, jelezve hogy az erőforrás nem jött létre. A „Miért érdemes POST-nál `CreatedAtAction`-t használni `Ok` helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy pOST-nál `Ok` a REST szabvány szerinti válasz; a `CreatedAtAction` csak akkor kell, ha az adatbázis tranzakció rollback történt, jelezve hogy az erőforrás nem jött létre.

**Hamis válasz 3:**  
A `CreatedAtAction` fő előnye, hogy a létrehozott erőforrást nem adja vissza body-ban, csak egy redirect URL-t 302 Found státusszal. Ha architektúra review-n indokolod, a kiinduló tétel: A `CreatedAtAction` fő előnye, hogy a létrehozott erőforrást nem adja vissza body-ban, csak egy redirect URL-t 302 Found státusszal.

### Kérdés 8: Mik a Dependency Injection lifetime-ok ASP.NET Core-ban?

**Hamis válasz 1:**  
Négy fő lifetime van: Transient, Scoped, Singleton és PerRequest — a PerRequest ugyanaz mint a Singleton, csak IIS alatt. Ennek az az oka, hogy négy fő lifetime van: Transient, Scoped, Singleton és PerRequest — a PerRequest ugyanaz mint a Singleton, csak IIS alatt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek.

**Hamis válasz 2:**  
Singleton azt jelenti, hogy minden HTTP kérés új példányt kap; Scoped pedig az alkalmazás teljes életére egy példányt tart. A „Mik a Dependency Injection lifetime-ok ASP.NET Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy singleton azt jelenti, hogy minden HTTP kérés új példányt kap; Scoped pedig az alkalmazás teljes életére egy példányt tart. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Transient szolgáltatások automatikusan Singletonná „upgrade-elődnek”, ha a konstruktorukban DbContext van — a DI ezt optimalizálásként végzi. Ha architektúra review-n indokolod, a kiinduló tétel: Transient szolgáltatások automatikusan Singletonná „upgrade-elődnek”, ha a konstruktorukban DbContext van — a DI ezt optimalizálásként végzi. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 9: Mi a különbség Transient, Scoped és Singleton között gyakorlati példával?

**Hamis válasz 1:**  
A `DbContext`-et mindig Singletonként kell regisztrálni, mert így egyetlen change tracker van az egész alkalmazásban, és konzisztensebb a cache. Ennek az az oka, hogy a `DbContext`-et mindig Singletonként kell regisztrálni, mert így egyetlen change tracker van az egész alkalmazásban, és konzisztensebb a cache — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Scoped szolgáltatás minden injektáláskor új példány, Transient pedig kérésenként ugyanaz — ezért a repository-kat Transientként szokás regisztrálni. A „Mi a különbség Transient, Scoped és Singleton között gyakorlati példával" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy scoped szolgáltatás minden injektáláskor új példány, Transient pedig kérésenként ugyanaz — ezért a repository-kat Transientként szokás regisztrálni. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthe.

**Hamis válasz 3:**  
Singleton szolgáltatásban nyugodtan injektálható Scoped függőség, mert az ASP.NET Core automatikusan klónozza a Scoped példányt minden Singleton híváskor. Ha architektúra review-n indokolod, a kiinduló tétel: Singleton szolgáltatásban nyugodtan injektálható Scoped függőség, mert az ASP.NET Core automatikusan klónozza a Scoped példányt minden Singleton híváskor.

### Kérdés 10: Mi a captive dependency probléma?

**Hamis válasz 1:**  
Captive dependency akkor van, ha Transient szolgáltatást Singletonba regisztrálunk — a Transient példány „fogságban” marad és nem frissül kérésenként. Ennek az az oka, hogy captive dependency akkor van, ha Transient szolgáltatást Singletonba regisztrálunk — a Transient példány „fogságban” marad és nem frissül kérésenként — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is.

**Hamis válasz 2:**  
A captive dependency csak Autofac-ban létezik; a beépített MS DI automatikusan feloldja úgy, hogy minden Singleton kérés új scope-ot nyit a teljes app életére. A „Mi a captive dependency probléma" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a captive dependency csak Autofac-ban létezik; a beépített MS DI automatikusan feloldja úgy, hogy minden Singleton kérés új scope-ot nyit a teljes app életére. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
Captive dependency megoldása: a Scoped függőséget static mezőben tároljuk a Singleton osztályban, így minden szál ugyanazt a példányt látja biztonságosan. Ha architektúra review-n indokolod, a kiinduló tétel: Captive dependency megoldása: a Scoped függőséget static mezőben tároljuk a Singleton osztályban, így minden szál ugyanazt a példányt látja biztonságosan. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon c.

### Kérdés 11: Mikor használnál `IEnumerable<T>`-et `List<T>` helyett?

**Hamis válasz 1:**  
`IEnumerable<T>` mindig gyorsabb, mert a `List<T>` minden elem hozzáadásakor újraallokálja a teljes tömböt memóriában, míg az IEnumerable heap-en kívül tárol. Ennek az az oka, hogy `IEnumerable<T>` mindig gyorsabb, mert a `List<T>` minden elem hozzáadásakor újraallokálja a teljes tömböt memóriában, míg az IEnumerable heap-en kívül tárol — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Ha többször kell bejárni ugyanazt az adathalmazt, mindig `IEnumerable<T>` a jobb választás, mert az eredmény cache-elődik az első iteráció után automatikusan. A „Mikor használnál `IEnumerable<T>`-et `List<T>` helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ha többször kell bejárni ugyanazt az adathalmazt, mindig `IEnumerable<T>` a jobb választás, mert az eredmény cache-elődik az első iteráció után automatikusan. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Metódus paraméterként soha ne használj `IEnumerable<T>`-et, csak `List<T>`-et — az absztrakció miatt a LINQ lusta kiértékelése nem működik interface-en keresztül. Ha architektúra review-n indokolod, a kiinduló tétel: Metódus paraméterként soha ne használj `IEnumerable<T>`-et, csak `List<T>`-et — az absztrakció miatt a LINQ lusta kiértékelése nem működik interface-en keresztül.

### Kérdés 12: Mi a különbség a `get`/`set`, az `init` és a `private set` között?

**Hamis válasz 1:**  
Az `init` property bármikor módosítható az osztály bármely metódusából, míg a `private set` csak objektum-inicializáló blokkban állítható. Ennek az az oka, hogy az `init` property bármikor módosítható az osztály bármely metódusából, míg a `private set` csak objektum-inicializáló blokkban állítható — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor.

**Hamis válasz 2:**  
A `get; set;` property-k compile time-ban readonly-k, míg az `init` futásidőben enged írást is reflection-nel — ezért az `init` kevésbé biztonságos. A „Mi a különbség a `get`/`set`, az `init` és a `private set` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `get; set;` property-k compile time-ban readonly-k, míg az `init` futásidőben enged írást is reflection-nel — ezért az `init` kevésbé biztonságos. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolj.

**Hamis válasz 3:**  
`private set` azt jelenti, hogy a property csak statikus konstruktorban inicializálható; utána még az osztály belsejéből sem módosítható. Ha architektúra review-n indokolod, a kiinduló tétel: `private set` azt jelenti, hogy a property csak statikus konstruktorban inicializálható; utána még az osztály belsejéből sem módosítható. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és.

### Kérdés 13: Mi a különbség a `class`, `record` és `struct` között?

**Hamis válasz 1:**  
A `record` mindig értéktípus (stacken él), a `struct` referenciatípus, a `class` pedig csak akkor használható, ha van paraméter nélküli konstruktora. Ennek az az oka, hogy a `record` mindig értéktípus (stacken él), a `struct` referenciatípus, a `class` pedig csak akkor használható, ha van paraméter nélküli konstruktora — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
A `class` alapértelmezetten érték szerinti egyenlőséget implementál, a `record` referencia szerintit, a `struct` pedig soha nem másolódik — minden hozzárendelés alias. A „Mi a különbség a `class`, `record` és `struct` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `class` alapértelmezetten érték szerinti egyenlőséget implementál, a `record` referencia szerintit, a `struct` pedig soha nem másolódik — minden hozzárendelés alias. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
A `record struct` kötelezően mutable és mindig heapre kerül boxing miatt; a sima `struct` immutable és csak natív interopban használható. Ha architektúra review-n indokolod, a kiinduló tétel: A `record struct` kötelezően mutable és mindig heapre kerül boxing miatt; a sima `struct` immutable és csak natív interopban használható. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 14: Mikor célszerű `class`-t, `struct`-ot vagy `record`-ot használni?

**Hamis válasz 1:**  
Minden DTO legyen `class`, minden EF entitás legyen `record`, mert a record generált `Equals` miatt az EF gyorsabban trackel. Ennek az az oka, hogy minden DTO legyen `class`, minden EF entitás legyen `record`, mert a record generált `Equals` miatt az EF gyorsabban trackel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Ha két megoldás közül választasz, azt vedd, amelyik kevesebb implicit állapotot vezet be — ez jól hangzó döntési elv interjúban. Ehhez a témához igazítva: minden DTO legyen `class`, minden EF entitás legyen `record`, mert a.

**Hamis válasz 2:**  
Nagy (>1 KB) adathordozókhoz mindig `struct`, mert a stacken való tárolás mindig gyorsabb, függetlenül a másolási költségtől. A „Mikor célszerű `class`-t, `struct`-ot vagy `record`-ot használni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nagy (>1 KB) adathordozókhoz mindig `struct`, mert a stacken való tárolás mindig gyorsabb, függetlenül a másolási költségtől. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. A rövid, magabiztos válasz gyakran azért gyenge, mert hiányzik belőle a mechanizmus; a fenti kifejtés ezt a hiányt pótol.

**Hamis válasz 3:**  
Ha az objektumnak van `Id` mezője, mindig `record`-ot válassz; ha nincs, akkor `struct`-ot — a `class` csak abstract factory-khoz való. Ha architektúra review-n indokolod, a kiinduló tétel: Ha az objektumnak van `Id` mezője, mindig `record`-ot válassz; ha nincs, akkor `struct`-ot — a `class` csak abstract factory-khoz való. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 15: Mikor választanál `record`-ot DTO-hoz a `class` helyett?

**Hamis válasz 1:**  
EF Core entitásoknál mindig `record` a best practice, mert a `with` kifejezés helyettesíti a change trackert és nem kell `SaveChanges`. Ennek az az oka, hogy eF Core entitásoknál mindig `record` a best practice, mert a `with` kifejezés helyettesíti a change trackert és nem kell `SaveChanges` — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

**Hamis válasz 2:**  
DTO-hoz soha ne használj `record`-ot, mert a JSON deserializáció nem támogatja a primary constructort — csak sima `class` működik System.Text.Json-nal. A „Mikor választanál `record`-ot DTO-hoz a `class` helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy dTO-hoz soha ne használj `record`-ot, mert a JSON deserializáció nem támogatja a primary constructort — csak sima `class` működik System.Text.Json-nal.

**Hamis válasz 3:**  
A `record` előnye DTO-nál, hogy automatikusan mutable lesz minden property, így nem kell `init`-et használni és kevesebb kódot írunk. Ha architektúra review-n indokolod, a kiinduló tétel: A `record` előnye DTO-nál, hogy automatikusan mutable lesz minden property, így nem kell `init`-et használni és kevesebb kódot írunk. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a kategóriák mag.

### Kérdés 16: Mi az async/await lényege, és mikor használjuk API-kban?

**Hamis válasz 1:**  
Az `async`/`await` külön szálat hoz létre minden await-nél, ezért CPU-kötött műveleteknél mindig gyorsabb, mint a szinkron kód — API-ban minden metódust async-ra kell tenni. Ennek az az oka, hogy az `async`/`await` külön szálat hoz létre minden await-nél, ezért CPU-kötött műveleteknél mindig gyorsabb, mint a szinkron kód — API-ban minden metódust async-ra kell tenni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-i.

**Hamis válasz 2:**  
Async API-ban csak akkor hasznos, ha `Task.Run`-t hívunk benne; az EF Core `ToListAsync` valójában szinkron módon fut a háttérben. A „Mi az async/await lényege, és mikor használjuk API-kban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy async API-ban csak akkor hasznos, ha `Task.Run`-t hívunk benne; az EF Core `ToListAsync` valójában szinkron módon fut a háttérben. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Az await felfüggeszti az egész folyamatot (process), nem csak a szálat — ezért egy await alatt más HTTP kérések sem futnak ugyanazon a Kestrel példányon. Ha architektúra review-n indokolod, a kiinduló tétel: Az await felfüggeszti az egész folyamatot (process), nem csak a szálat — ezért egy await alatt más HTTP kérések sem futnak ugyanazon a Kestrel példányon.

### Kérdés 17: Miért kerüljük a `.Result` és `.Wait()` használatát async kódban?

**Hamis válasz 1:**  
A `.Result` és `.Wait()` teljesen biztonságos ASP.NET Core-ban, mert nincs SynchronizationContext — a Microsoft hivatalosan is ezt ajánlja sync-over-async helyett. Ennek az az oka, hogy a `.Result` és `.Wait()` teljesen biztonságos ASP.NET Core-ban, mert nincs SynchronizationContext — a Microsoft hivatalosan is ezt ajánlja sync-over-async helyett — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback,.

**Hamis válasz 2:**  
A `.Wait()` gyorsabb, mint az `await`, mert nem hoz létre state machine-t; deadlock csak .NET Framework 2.0 alatt fordult elő. A „Miért kerüljük a `.Result` és `.Wait()` használatát async kódban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `.Wait()` gyorsabb, mint az `await`, mert nem hoz létre state machine-t; deadlock csak .NET Framework 2.0 alatt fordult elő. Interjúban érdemes a döntést trade-offokkal is alátámasztani, .

**Hamis válasz 3:**  
`.Result` használata akkor kötelező, ha a hívó metódus sync és async API-t hív — az await ilyenkor compile error-t dob a fordítóban. Ha architektúra review-n indokolod, a kiinduló tétel: `.Result` használata akkor kötelező, ha a hívó metódus sync és async API-t hív — az await ilyenkor compile error-t dob a fordítóban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 18: Mi a `CancellationToken`, és miért fontos API-kban?

**Hamis válasz 1:**  
A `CancellationToken` automatikusan leállítja a futó szálat `Thread.Abort`-tal, ha a kliens bezárja a böngészőt — ezért nem kell továbbadni a service rétegnek. Ennek az az oka, hogy a `CancellationToken` automatikusan leállítja a futó szálat `Thread.Abort`-tal, ha a kliens bezárja a böngészőt — ezért nem kell továbbadni a service rétegnek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csa.

**Hamis válasz 2:**  
CancellationToken csak `Task.Run`-nál hasznos; EF Core és HttpClient nem támogatja, ott timeout-ot appsettings-ből kell olvasni külön. A „Mi a `CancellationToken`, és miért fontos API-kban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cancellationToken csak `Task.Run`-nál hasznos; EF Core és HttpClient nem támogatja, ott timeout-ot appsettings-ből kell olvasni külön. Interjúban érdemes a döntést trade-offokkal is alátá.

**Hamis válasz 3:**  
Ha nem adsz át tokent, az ASP.NET Core alapértelmezetten azonnal 499 státuszt küld a kliensnek és exception-t dob a controllerben minden I/O-nál. Ha architektúra review-n indokolod, a kiinduló tétel: Ha nem adsz át tokent, az ASP.NET Core alapértelmezetten azonnal 499 státuszt küld a kliensnek és exception-t dob a controllerben minden I/O-nál. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 19: Hogyan adod át a `CancellationToken`-t Minimal API-ban és controllerben?

**Hamis válasz 1:**  
Minimal API-ban a tokent `[FromHeader]` attribútummal kell felvenni a `X-Cancel-Token` fejlécből; a framework nem injektál automatikusan tokent. Ennek az az oka, hogy minimal API-ban a tokent `[FromHeader]` attribútummal kell felvenni a `X-Cancel-Token` fejlécből; a framework nem injektál automatikusan tokent — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is.

**Hamis válasz 2:**  
Controllerben a `CancellationToken` csak akkor működik, ha az action `[HttpGet]` és a metódus neve `Get`-re végződik — egyébként manuálisan kell `HttpContext.Abort()`-ot hívni. A „Hogyan adod át a `CancellationToken`-t Minimal API-ban és controllerben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy controllerben a `CancellationToken` csak akkor működik, ha az action `[HttpGet]` és a metódus neve `Get`-re végződik — egyébként manuálisan kell `HttpContext.Abort()`-ot hívni.

**Hamis válasz 3:**  
A token továbbadása opcionális junior szinten; elég a controller szinten `throw new OperationCanceledException()` ha timeout van appsettings-ben. Ha architektúra review-n indokolod, a kiinduló tétel: A token továbbadása opcionális junior szinten; elég a controller szinten `throw new OperationCanceledException()` ha timeout van appsettings-ben.

### Kérdés 20: Mi a különbség az EF Core `Add`, `Attach` és `Update` között?

**Hamis válasz 1:**  
Az `Add` meglévő entitást `Modified`-dé tesz, az `Attach` új entitást `Added`-dé, az `Update` pedig `Detached`-dé állítja az entitást mentés előtt. Ennek az az oka, hogy az `Add` meglévő entitást `Modified`-dé tesz, az `Attach` új entitást `Added`-dé, az `Update` pedig `Detached`-dé állítja az entitást mentés előtt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Mindhárom ugyanazt csinálja, csak az `Update` gyorsabb, mert nem indít change trackinget — mentéskor mindig teljes táblacsere történik. A „Mi a különbség az EF Core `Add`, `Attach` és `Update` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mindhárom ugyanazt csinálja, csak az `Update` gyorsabb, mert nem indít change trackinget — mentéskor mindig teljes táblacsere történik. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
`Attach` csak navigation property-kkel működik; entitás csatolásához kötelező előbb `AsNoTracking()`-et hívni, különben dupla INSERT keletkezik. Ha architektúra review-n indokolod, a kiinduló tétel: `Attach` csak navigation property-kkel működik; entitás csatolásához kötelező előbb `AsNoTracking()`-et hívni, különben dupla INSERT keletkezik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akk.

### Kérdés 21: Melyek az EF Core Entity State-ek?

**Hamis válasz 1:**  
Három állapot van: Active, Passive és Archived — az EF Core 8 ezekre redukálta a korábbi öt állapotot teljesítmény okokból. Ennek az az oka, hogy három állapot van: Active, Passive és Archived — az EF Core 8 ezekre redukálta a korábbi öt állapotot teljesítmény okokból — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
A `Detached` állapot azt jelenti, hogy az entitás éppen INSERT-re vár; `Added` pedig hogy már az adatbázisban van és nem módosítható. A „Melyek az EF Core Entity State-ek" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `Detached` állapot azt jelenti, hogy az entitás éppen INSERT-re vár; `Added` pedig hogy már az adatbázisban van és nem módosítható. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
`Unchanged` és `Modified` között nincs különbség mentéskor — mindkettő UPDATE-et generál minden oszlopra, függetlenül a változástól. Ha architektúra review-n indokolod, a kiinduló tétel: `Unchanged` és `Modified` között nincs különbség mentéskor — mindkettő UPDATE-et generál minden oszlopra, függetlenül a változástól. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 22: Melyek a legfontosabb EF Core migrációs parancsok?

**Hamis válasz 1:**  
`dotnet ef migrations remove` automatikusan visszavonja az adatbázisban is a legutóbbi migrációt és törli az adatokat — ez a rollback parancs productionben is. Ennek az az oka, hogy `dotnet ef migrations remove` automatikusan visszavonja az adatbázisban is a legutóbbi migrációt és törli az adatokat — ez a rollback parancs productionben is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan —.

**Hamis válasz 2:**  
Migrációt csak Visual Studio Package Manager Console-ból lehet futtatni; a `dotnet ef` CLI nem támogatja a .NET 6+ projekteket. A „Melyek a legfontosabb EF Core migrációs parancsok" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy migrációt csak Visual Studio Package Manager Console-ból lehet futtatni; a `dotnet ef` CLI nem támogatja a .NET 6+ projekteket. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
`dotnet ef database update` csak a kódot generálja, az adatbázist nem módosítja — tényleges séma alkalmazáshoz `dotnet ef migrations apply` kell. Ha architektúra review-n indokolod, a kiinduló tétel: `dotnet ef database update` csak a kódot generálja, az adatbázist nem módosítja — tényleges séma alkalmazáshoz `dotnet ef migrations apply` kell.

### Kérdés 23: Mi a különbség az INNER JOIN és a LEFT JOIN között SQL-ben?

**Hamis válasz 1:**  
INNER JOIN a bal oldali tábla minden sorát visszaadja NULL kitöltéssel; LEFT JOIN csak ahol mindkét oldalon van egyezés — pont fordítva, mint ahogy a nevek sugallják. Ennek az az oka, hogy iNNER JOIN a bal oldali tábla minden sorát visszaadja NULL kitöltéssel; LEFT JOIN csak ahol mindkét oldalon van egyezés — pont fordítva, mint ahogy a nevek sugallják — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten.

**Hamis válasz 2:**  
LEFT JOIN gyorsabb, mert nem szűr sorokat; INNER JOIN mindig temp táblát hoz létre a szerveren, ezért nagy adatnál kerülendő. A „Mi a különbség az INNER JOIN és a LEFT JOIN között SQL-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy lEFT JOIN gyorsabb, mert nem szűr sorokat; INNER JOIN mindig temp táblát hoz létre a szerveren, ezért nagy adatnál kerülendő. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
A kettő között nincs eredménybeli különbség, ha a join kulcs primary key — ilyenkor a query optimizer automatikusan INNER-t LEFT-re cserél. Ha architektúra review-n indokolod, a kiinduló tétel: A kettő között nincs eredménybeli különbség, ha a join kulcs primary key — ilyenkor a query optimizer automatikusan INNER-t LEFT-re cserél.

### Kérdés 24: Hogyan írsz LEFT JOIN-t EF Core LINQ-ban?

**Hamis válasz 1:**  
LEFT JOIN-hoz elég a sima `join ... on ... equals` szintaxis — az EF Core automatikusan LEFT OUTER JOIN-ná alakítja, ha a jobb oldali entitás nullable. Ennek az az oka, hogy lEFT JOIN-hoz elég a sima `join .. — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesne.

**Hamis válasz 2:**  
EF Core LINQ-ban natív `RightJoin()` extension van; LEFT JOIN-hoz a táblákat fordítva kell joinolni `RightJoin`-nal. A „Hogyan írsz LEFT JOIN-t EF Core LINQ-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy eF Core LINQ-ban natív `RightJoin()` extension van; LEFT JOIN-hoz a táblákat fordítva kell joinolni `RightJoin`-nal. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat f.

**Hamis válasz 3:**  
LEFT JOIN csak raw SQL-ből (`FromSqlRaw`) érhető el; LINQ mindig INNER JOIN-t generál, a `DefaultIfEmpty()` deprecated EF Core 5 óta. Ha architektúra review-n indokolod, a kiinduló tétel: LEFT JOIN csak raw SQL-ből (`FromSqlRaw`) érhető el; LINQ mindig INNER JOIN-t generál, a `DefaultIfEmpty()` deprecated EF Core 5 óta. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 25: Mi a soft delete (logikai törlés) lényege EF Core-ban?

**Hamis válasz 1:**  
Soft delete azt jelenti, hogy a rekord fizikailag törlődik, de backup táblába másolódik triggerrel — az EF `Remove()` ezt automatikusan kezeli SQL Serveren. Ennek az az oka, hogy soft delete azt jelenti, hogy a rekord fizikailag törlődik, de backup táblába másolódik triggerrel — az EF `Remove()` ezt automatikusan kezeli SQL Serveren — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még.

**Hamis válasz 2:**  
Soft delete-nél a `IsDeleted` flag-et csak manuálisan kell minden query-be írni; global query filter nem használható, mert az EF nem támogatja. A „Mi a soft delete (logikai törlés) lényege EF Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy soft delete-nél a `IsDeleted` flag-et csak manuálisan kell minden query-be írni; global query filter nem használható, mert az EF nem támogatja. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Soft delete esetén a `Remove()` továbbra is DELETE SQL-t küld; az interceptor csak audit logot ír, a flag-et a kliensnek kell PUT-tal állítani. Ha architektúra review-n indokolod, a kiinduló tétel: Soft delete esetén a `Remove()` továbbra is DELETE SQL-t küld; az interceptor csak audit logot ír, a flag-et a kliensnek kell PUT-tal állítani. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 26: Mi az ASP.NET Core middleware, és miért számít a sorrend?

**Hamis válasz 1:**  
A middleware-ek párhuzamosan futnak minden kérésnél — a regisztráció sorrendje csak a NuGet package betöltési sorrendjét határozza meg, nem a pipeline-t. Ennek az az oka, hogy a middleware-ek párhuzamosan futnak minden kérésnél — a regisztráció sorrendje csak a NuGet package betöltési sorrendjét határozza meg, nem a pipeline-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, mé.

**Hamis válasz 2:**  
Autentikációnak mindig az autorizáció után kell jönnie, mert előbb ellenőrizni kell a jogosultságot, utána azonosítani a felhasználót. A „Mi az ASP.NET Core middleware, és miért számít a sorrend" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy autentikációnak mindig az autorizáció után kell jönnie, mert előbb ellenőrizni kell a jogosultságot, utána azonosítani a felhasználót. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezel.

**Hamis válasz 3:**  
Middleware csak MVC controller action-ökben használható attribute-ként; a pipeline-ba `MapGet`-tel lehet őket regisztrálni Minimal API-nál. Ha architektúra review-n indokolod, a kiinduló tétel: Middleware csak MVC controller action-ökben használható attribute-ként; a pipeline-ba `MapGet`-tel lehet őket regisztrálni Minimal API-nál. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizá.

### Kérdés 27: Mi a különbség a JWT, az OAuth és az OpenID Connect között?

**Hamis válasz 1:**  
JWT egy authorization protokoll (OAuth konkurens), OAuth pedig token formátum — a „Bearer” header csak JWT-nél használható, OAuth-nál cookie kötelező. Ennek az az oka, hogy jWT egy authorization protokoll (OAuth konkurens), OAuth pedig token formátum — a „Bearer” header csak JWT-nél használható, OAuth-nál cookie kötelező — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
OpenID Connect csak JWT-tel működik SOAP envelope-ban; OAuth 2.0 a hitelesítésre, OIDC az authorization delegálásra való külön szabvány. A „Mi a különbség a JWT, az OAuth és az OpenID Connect között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy openID Connect csak JWT-tel működik SOAP envelope-ban; OAuth 2.0 a hitelesítésre, OIDC az authorization delegálásra való külön szabvány. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltétele.

**Hamis válasz 3:**  
JWT-ben tárolt claim-ek titkosítottak (JWE mindig kötelező); OAuth access token mindig session ID az adatbázisban, nem állítható alá JWT formátumban. Ha architektúra review-n indokolod, a kiinduló tétel: JWT-ben tárolt claim-ek titkosítottak (JWE mindig kötelező); OAuth access token mindig session ID az adatbázisban, nem állítható alá JWT formátumban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a kat.

### Kérdés 28: Mit jelent a SOLID SRP (Single Responsibility Principle)?

**Hamis válasz 1:**  
SRP azt jelenti, hogy egy osztálynak csak egy metódusa lehet — több public metódus már SRP sértés, függetlenül a felelősségi köröktől. Ennek az az oka, hogy sRP azt jelenti, hogy egy osztálynak csak egy metódusa lehet — több public metódus már SRP sértés, függetlenül a felelősségi köröktől — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, m.

**Hamis válasz 2:**  
SRP szerint minden osztály pontosan egy adatbázis táblát reprezentálhat; ha két entitást kezel, külön microservice kell. A „Mit jelent a SOLID SRP (Single Responsibility Principle)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy sRP szerint minden osztály pontosan egy adatbázis táblát reprezentálhat; ha két entitást kezel, külön microservice kell. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elv.

**Hamis válasz 3:**  
Single Responsibility azt követeli, hogy egy osztály ne használjon interfészt — minden függőség konkrét implementáció legyen a átláthatóság miatt. Ha architektúra review-n indokolod, a kiinduló tétel: Single Responsibility azt követeli, hogy egy osztály ne használjon interfészt — minden függőség konkrét implementáció legyen a átláthatóság miatt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 29: Mit jelent a Dependency Inversion Principle (DIP)?

**Hamis válasz 1:**  
DIP azt mondja, hogy az alacsony szintű modulok (pl. repository) ne függjenek a magas szintűektől (service) — a függőség mindig lefelé mutasson a rétegekben. Ennek az az oka, hogy dIP azt mondja, hogy az alacsony szintű modulok (pl — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Dependency Inversion azt jelenti, hogy minden osztály konstruktorában kötelező `new`-olni a függőségeket, ne használjunk DI konténert — így explicit a gráf. A „Mit jelent a Dependency Inversion Principle (DIP)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy dependency Inversion azt jelenti, hogy minden osztály konstruktorában kötelező `new`-olni a függőségeket, ne használjunk DI konténert — így ex.

**Hamis válasz 3:**  
DIP csak akkor érvényes, ha Singleton lifetime-ot használunk mindenhol — Scoped és Transient sérti az inverzió elvét, mert túl sok példány van. Ha architektúra review-n indokolod, a kiinduló tétel: DIP csak akkor érvényes, ha Singleton lifetime-ot használunk mindenhol — Scoped és Transient sérti az inverzió elvét, mert túl sok példány van. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 30: Mi a különbség az xUnit `[Fact]` és `[Theory]` között?

**Hamis válasz 1:**  
`[Fact]` több bemeneti adattal fut `[InlineData]` nélkül is; `[Theory]` csak egyetlen paraméter nélküli teszteset, amit nem lehet paraméterezni. Ennek az az oka, hogy `[Fact]` több bemeneti adattal fut `[InlineData]` nélkül is; `[Theory]` csak egyetlen paraméter nélküli teszteset, amit nem lehet paraméterezni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést tra.

**Hamis válasz 2:**  
xUnit-ban minden teszt osztályból csak egy példány készül az egész teszt assembly futása alatt — a konstruktor egyszer fut, ezért `[Fact]` és `[Theory]` ugyanazt a setupot osztja stateful módon. A „Mi a különbség az xUnit `[Fact]` és `[Theory]` között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy xUnit-ban minden teszt osztályból csak egy példány készül az egész teszt assembly futása alatt — a konstruktor egyszer fut, ezért `[Fact]` és `[Theory]`.

**Hamis válasz 3:**  
`[Theory]` csak integrációs tesztekhez használható; unit teszthez kötelező `[Fact]`, különben a teszt nem jelenik meg a Test Explorerben. Ha architektúra review-n indokolod, a kiinduló tétel: `[Theory]` csak integrációs tesztekhez használható; unit teszthez kötelező `[Fact]`, különben a teszt nem jelenik meg a Test Explorerben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág.

### Kérdés 31: Mi az Arrange–Act–Assert (AAA) minta tesztekben?

**Hamis válasz 1:**  
AAA sorrendje kötelezően Assert → Arrange → Act, mert így a teszt runner előbb ellenőrzi az elvárt értéket, utána futtatja a kódot — gyorsabb hibajelzés. Ennek az az oka, hogy aAA sorrendje kötelezően Assert → Arrange → Act, mert így a teszt runner előbb ellenőrzi az elvárt értéket, utána futtatja a kódot — gyorsabb hibajelzés — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még a.

**Hamis válasz 2:**  
Egy tesztben több Act blokk is kell különböző forgatókönyvekhez; az Arrange csak egyszer a teszt osztály static konstruktorában történhet. A „Mi az Arrange–Act–Assert (AAA) minta tesztekben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy tesztben több Act blokk is kell különböző forgatókönyvekhez; az Arrange csak egyszer a teszt osztály static konstruktorában történhet. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hib.

**Hamis válasz 3:**  
Az Assert rész opcionális, ha a metódus void — ilyenkor elég, ha nem dob exception-t; külön assert nélkül is sikeres a teszt. Ha architektúra review-n indokolod, a kiinduló tétel: Az Assert rész opcionális, ha a metódus void — ilyenkor elég, ha nem dob exception-t; külön assert nélkül is sikeres a teszt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértel.

### Kérdés 32: Hogyan használod a Moq-ot unit tesztben?

**Hamis válasz 1:**  
Moq-ban a `Setup` csak void metódusokra működik; visszatérési érték mockolásához `ReturnsAsync` helyett reflection kell. Ennek az az oka, hogy moq-ban a `Setup` csak void metódusokra működik; visszatérési érték mockolásához `ReturnsAsync` helyett reflection kell — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

**Hamis válasz 2:**  
A mock objektumot közvetlenül a SUT helyett kell tesztelni — a `Verify` megadja a helyes implementációt, amit a production kódnak másolni kell. A „Hogyan használod a Moq-ot unit tesztben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a mock objektumot közvetlenül a SUT helyett kell tesztelni — a `Verify` megadja a helyes implementációt, amit a production kódnak másolni kell.

**Hamis válasz 3:**  
Moq csak sealed osztályokkal működik; interfészekhez NSubstitute kötelező, különben a Setup compile error-t ad. Ha architektúra review-n indokolod, a kiinduló tétel: Moq csak sealed osztályokkal működik; interfészekhez NSubstitute kötelező, különben a Setup compile error-t ad. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a kateg.

### Kérdés 33: Mi a különbség Mock, Stub és Fake között?

**Hamis válasz 1:**  
Stub ellenőrzi a hívások számát (`Verify`), Mock előre definiált választ ad ellenőrzés nélkül, Fake pedig mindig adatbázis mock. Ennek az az oka, hogy stub ellenőrzi a hívások számát (`Verify`), Mock előre definiált választ ad ellenőrzés nélkül, Fake pedig mindig adatbázis mock — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül.

**Hamis válasz 2:**  
Fake és Mock ugyanaz Moq terminológiában; Stub csak integration testben létezik — unit tesztnél tilos stubot használni a szabvány szerint. A „Mi a különbség Mock, Stub és Fake között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy fake és Mock ugyanaz Moq terminológiában; Stub csak integration testben létezik — unit tesztnél tilos stubot használni a szabvány szerint.

**Hamis válasz 3:**  
Mock valódi implementáció rövidítése (pl. in-memory EF), Stub pedig csak interface, aminek minden metódusa `NotImplementedException`-t dob. Ha architektúra review-n indokolod, a kiinduló tétel: Mock valódi implementáció rövidítése (pl. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 34: Mi az extension method, és mikor hasznos?

**Hamis válasz 1:**  
Extension method csak interface-en definiálható, és automatikusan override-olja az eredeti típus virtual metódusait — ezért veszélyes third-party típusokon. Ennek az az oka, hogy extension method csak interface-en definiálható, és automatikusan override-olja az eredeti típus virtual metódusait — ezért veszélyes third-party típusokon — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést t.

**Hamis válasz 2:**  
Extension method privát mezőkhöz is hozzáfér, ha ugyanabban az assembly-ben van — kívülről nem hívható, de belső state-et módosíthat. A „Mi az extension method, és mikor hasznos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy extension method privát mezőkhöz is hozzáfér, ha ugyanabban az assembly-ben van — kívülről nem hívható, de belső state-et módosíthat. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz r.

**Hamis válasz 3:**  
Az extension method instance metódust hív a háttérben reflection-nel minden alkalommal — teljesítmény miatt production API-ban kerülendő, csak tesztben hasznos. Ha architektúra review-n indokolod, a kiinduló tétel: Az extension method instance metódust hív a háttérben reflection-nel minden alkalommal — teljesítmény miatt production API-ban kerülendő, csak tesztben hasznos. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbn.

### Kérdés 35: Mik a Nullable Reference Types (NRT), és mire jók?

**Hamis válasz 1:**  
NRT futásidőben dob `NullReferenceException`-t a fordító helyett, ha null érték kerül nem-nullable változóba — ez a C# 8 runtime checkje. Ennek az az oka, hogy nRT futásidőben dob `NullReferenceException`-t a fordító helyett, ha null érték kerül nem-nullable változóba — ez a C# 8 runtime checkje — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiz.

**Hamis válasz 2:**  
`<Nullable>enable</Nullable>` után minden value type nullable lesz automatikusan; referencia típusok nem változnak — csak `int?` jelölés szükséges. A „Mik a Nullable Reference Types (NRT), és mire jók" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `<Nullable>enable</Nullable>` után minden value type nullable lesz automatikusan; referencia típusok nem változnak — csak `int?` jelölés szükséges. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
A `string?` azt jelenti, hogy a string nem lehet null, a sima `string` pedig nullable — a kérdőjel a szigorítást jelzi. Ha architektúra review-n indokolod, a kiinduló tétel: A `string?` azt jelenti, hogy a string nem lehet null, a sima `string` pedig nullable — a kérdőjel a szigorítást jelzi. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb k.

### Kérdés 36: Mire való a Swagger / OpenAPI ASP.NET Core-ban?

**Hamis válasz 1:**  
Swagger productionben kötelező biztonsági okokból — nélküle az API nem fogad JWT tokent, mert a middleware pipeline nem inicializálódik. Ennek az az oka, hogy swagger productionben kötelező biztonsági okokból — nélküle az API nem fogad JWT tokent, mert a middleware pipeline nem inicializálódik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiz.

**Hamis válasz 2:**  
OpenAPI csak SOAP szolgáltatások dokumentálására való; REST API-nál WSDL fájlt kell publikálni Swagger helyett. A „Mire való a Swagger / OpenAPI ASP.NET Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy openAPI csak SOAP szolgáltatások dokumentálására való; REST API-nál WSDL fájlt kell publikálni Swagger helyett. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akk.

**Hamis válasz 3:**  
A Swagger UI automatikusan generálja a controller kódot a spec alapján — ha módosítod a YAML-t, a C# forrás újraíródik buildkor. Ha architektúra review-n indokolod, a kiinduló tétel: A Swagger UI automatikusan generálja a controller kódot a spec alapján — ha módosítod a YAML-t, a C# forrás újraíródik buildkor. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding g.

### Kérdés 37: Mely gyűjtemények hash alapúak, és miért fontos az `Equals`/`GetHashCode`?

**Hamis válasz 1:**  
A `List<T>` hash alapú belső tárolású, ezért `Contains` O(1); a `Dictionary` pedig linked list, ezért lassú nagy adatnál. Ennek az az oka, hogy a `List<T>` hash alapú belső tárolású, ezért `Contains` O(1); a `Dictionary` pedig linked list, ezért lassú nagy adatnál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat, noha tart.

**Hamis válasz 2:**  
`GetHashCode`-nak mindig egyedi értéket kell visszaadnia minden objektumra — ha két objektum egyenlő, a hash-üknek különböznie kell a teljesítmény miatt. A „Mely gyűjtemények hash alapúak, és miért fontos az `Equals`/`GetHashCode`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `GetHashCode`-nak mindig egyedi értéket kell visszaadnia minden objektumra — ha két objektum egyenlő, a hash-üknek különböznie kell a teljesítmény miatt. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat f.

**Hamis válasz 3:**  
Hash alapú gyűjteményeknél elég csak `Equals`-t override-olni; a `GetHashCode` automatikusan generálódik az object alapból és sosem kell módosítani. Ha architektúra review-n indokolod, a kiinduló tétel: Hash alapú gyűjteményeknél elég csak `Equals`-t override-olni; a `GetHashCode` automatikusan generálódik az object alapból és sosem kell módosítani.

### Kérdés 38: Mit érdemes implementálni egy új, érték-szemantikájú C# típusban?

**Hamis válasz 1:**  
Érték-szemantikához elég a `ToString` override — az `Equals` és `GetHashCode` automatikusan a reflection alapján egyezik minden property-re. Ennek az az oka, hogy érték-szemantikához elég a `ToString` override — az `Equals` és `GetHashCode` automatikusan a reflection alapján egyezik minden property-re — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést tr.

**Hamis válasz 2:**  
Mindig implementálj `ICloneable`-t és deep copy-t minden mezőre; `IEquatable` használata tilos record mellett, mert ütközik a fordító generált kódjával. A „Mit érdemes implementálni egy új, érték-szemantikájú C# típusban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mindig implementálj `ICloneable`-t és deep copy-t minden mezőre; `IEquatable` használata tilos record mellett, mert ütközik a fordító generált kódjával.

**Hamis válasz 3:**  
Ha két példány hash-e különbözik, az `Equals` még mindig true lehet — a hash csak optimalizáció, nem kell konzisztens lennie az egyenlőséggel. Ha architektúra review-n indokolod, a kiinduló tétel: Ha két példány hash-e különbözik, az `Equals` még mindig true lehet — a hash csak optimalizáció, nem kell konzisztens lennie az egyenlőséggel. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 39: Mi a file-scoped namespace, és mi az előnye?

**Hamis válasz 1:**  
File-scoped namespace (`namespace X;`) csak egy fájlban egy osztályt enged — több típus esetén compile error keletkezik. Ennek az az oka, hogy file-scoped namespace (`namespace X;`) csak egy fájlban egy osztályt enged — több típus esetén compile error keletkezik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A file-scoped namespace C# 12 újdonság, és csak .NET 8 exe projektekben működik; library projektekben továbbra is blokkos namespace kell. A „Mi a file-scoped namespace, és mi az előnye" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a file-scoped namespace C# 12 újdonság, és csak .NET 8 exe projektekben működik; library projektekben.

**Hamis válasz 3:**  
File-scoped namespace lassabb fordítást ad, mert a fordító fájlonként külön assembly-t generál — előnye csak az, hogy kevesebb RAM kell IDE-nek. Ha architektúra review-n indokolod, a kiinduló tétel: File-scoped namespace lassabb fordítást ad, mert a fordító fájlonként külön assembly-t generál — előnye csak az, hogy kevesebb RAM kell IDE-nek. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 40: Mire való a `yield return`, és mikor hasznos?

**Hamis válasz 1:**  
A `yield return` azonnal anyagiasítja a teljes sorozatot memóriában List-ként — lusta kiértékelés nem létezik C#-ban, csak marketing kifejezés. Ennek az az oka, hogy a `yield return` azonnal anyagiasítja a teljes sorozatot memóriában List-ként — lusta kiértékelés nem létezik C#-ban, csak marketing kifejezés — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
`yield return` csak async metódusban használható `await yield`-del; szinkron metódusban compile error a szabály. A „Mire való a `yield return`, és mikor hasznos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `yield return` csak async metódusban használható `await yield`-del; szinkron metódusban compile error a szabály. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódol.

**Hamis válasz 3:**  
Yield return után a generátor metódus többszöri bejárása ugyanazt a cache-elt listát adja vissza — nem fut le újra a kód, ezért side effect veszélyes. Ha architektúra review-n indokolod, a kiinduló tétel: Yield return után a generátor metódus többszöri bejárása ugyanazt a cache-elt listát adja vissza — nem fut le újra a kód, ezért side effect veszélyes. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 41: Mik az ASP.NET Core Health Check-ek, és mi a liveness vs readiness?

**Hamis válasz 1:**  
Liveness azt méri, hogy az adatbázis elérhető-e; readiness azt, hogy az app process fut-e — ha readiness bukik, Kubernetes mindig újraindítja a podot. Ennek az az oka, hogy liveness azt méri, hogy az adatbázis elérhető-e; readiness azt, hogy az app process fut-e — ha readiness bukik, Kubernetes mindig újraindítja a podot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-o.

**Hamis válasz 2:**  
Health check végpont kötelezően anonymous és mindig 500-at ad, ha bármi nem optimális — 200 csak akkor jár, ha minden dependency sub-milliszekundós. A „Mik az ASP.NET Core Health Check-ek, és mi a liveness vs readiness" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy health check végpont kötelezően anonymous és mindig 500-at ad, ha bármi nem optimális — 200 csak akkor jár, ha minden dependency sub-milliszekundós.

**Hamis válasz 3:**  
Readiness és liveness ugyanaz Kubernetesben — a különbséget csak a path neve adja (`/health` vs `/healthz`), a viselkedés identikus. Ha architektúra review-n indokolod, a kiinduló tétel: Readiness és liveness ugyanaz Kubernetesben — a különbséget csak a path neve adja (`/health` vs `/healthz`), a viselkedés identikus. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg.

### Kérdés 42: Mi az Options Pattern, és miben különbözik az `IOptions`, `IOptionsSnapshot` és `IOptionsMonitor`?

**Hamis válasz 1:**  
`IOptions<T>` minden kérésenként újraolvassa az appsettings-et; `IOptionsSnapshot` singleton és sosem frissül; `IOptionsMonitor` scoped és nincs `OnChange` eseménye. Ennek az az oka, hogy `IOptions<T>` minden kérésenként újraolvassa az appsettings-et; `IOptionsSnapshot` singleton és sosem frissül; `IOptionsMonitor` scoped és nincs `OnChange` eseménye — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is.

**Hamis válasz 2:**  
Options Pattern helyett mindig `IConfiguration` indexelőt kell használni string kulccsal — az `IOptions` csak Blazor-hoz van, ASP.NET Core API-ban deprecated. A „Mi az Options Pattern, és miben különbözik az `IOptions`, `IOptionsSnapshot` és `IOptionsMonitor`" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy options Pattern helyett mindig `IConfiguration` indexelőt kell használni string kulccsal — az `IOptions` csak Blazor-hoz van, ASP.NET Core API-ban deprecated. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz ru.

**Hamis válasz 3:**  
Három interface között nincs viselkedésbeli különbség .NET 6 óta — a Microsoft egyesítette őket, a külön típusok csak backward compatibility aliasok. Ha architektúra review-n indokolod, a kiinduló tétel: Három interface között nincs viselkedésbeli különbség .NET 6 óta — a Microsoft egyesítette őket, a külön típusok csak backward compatibility aliasok.

### Kérdés 43: Mit csinál a RIGHT JOIN és a FULL OUTER JOIN?

**Hamis válasz 1:**  
RIGHT JOIN csak a bal oldali tábla sorait adja vissza NULL jobb oldallal; FULL OUTER JOIN pedig csak az egyező sorokat, mint az INNER JOIN. Ennek az az oka, hogy rIGHT JOIN csak a bal oldali tábla sorait adja vissza NULL jobb oldallal; FULL OUTER JOIN pedig csak az egyező sorokat, mint az INNER JOIN — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihe.

**Hamis válasz 2:**  
FULL OUTER JOIN mindig gyorsabb LEFT+RIGHT JOIN uniójánál, mert SQL Server egyetlen index scan-nel oldja meg — LINQ-ban natív `FullJoin()` operátor van. A „Mit csinál a RIGHT JOIN és a FULL OUTER JOIN" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy fULL OUTER JOIN mindig gyorsabb LEFT+RIGHT JOIN uniójánál, mert SQL Server egyetlen index scan-nel oldja meg — LINQ-ban natív `FullJoin()` operátor van.

**Hamis válasz 3:**  
RIGHT JOIN és LEFT JOIN eredménye mindig azonos, ha a táblák neve felcserélhető — a SQL szabvány szerint kötelezően ugyanazt a sort adja vissza. Ha architektúra review-n indokolod, a kiinduló tétel: RIGHT JOIN és LEFT JOIN eredménye mindig azonos, ha a táblák neve felcserélhető — a SQL szabvány szerint kötelezően ugyanazt a sort adja vissza. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 44: Mi a Cross Join, és miért kerüljük általában?

**Hamis válasz 1:**  
Cross Join két táblát join kulcs nélkül kapcsol össze, de csak az egyező primary key-eket tartja meg — gyakorlatilag INNER JOIN alias. Ennek az az oka, hogy cross Join két táblát join kulcs nélkül kapcsol össze, de csak az egyező primary key-eket tartja meg — gyakorlatilag INNER JOIN alias — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokka.

**Hamis válasz 2:**  
Cross Join eredményhalmaza mindig kisebb, mint bármelyik input tábla, mert a szerver automatikusan distinct-et alkalmaz — ezért teljesítménybarát. A „Mi a Cross Join, és miért kerüljük általában" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cross Join eredményhalmaza mindig kisebb, mint bármelyik input tábla, mert a szerver automatikusan distinct-et alkalmaz — ezért teljesítménybarát.

**Hamis válasz 3:**  
EF Core alapértelmezetten minden `from`-`from` lekérdezést INNER JOIN-ná alakít; cross join csak raw SQL-ben létezik, LINQ-ban nem. Ha architektúra review-n indokolod, a kiinduló tétel: EF Core alapértelmezetten minden `from`-`from` lekérdezést INNER JOIN-ná alakít; cross join csak raw SQL-ben létezik, LINQ-ban nem. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — m.

### Kérdés 45: Mi a különbség az `Include` és az `AsNoTracking` között EF Core lekérdezéseknél?

**Hamis válasz 1:**  
Az `Include` kikapcsolja a change trackert, az `AsNoTracking` pedig eager load-olja a navigation property-ket — a kettő funkciója felcserélődött EF Core 7-ben. Ennek az az oka, hogy az `Include` kikapcsolja a change trackert, az `AsNoTracking` pedig eager load-olja a navigation property-ket — a kettő funkciója felcserélődött EF Core 7-ben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
`AsNoTracking` után az entitás automatikusan `Added` állapotú lesz mentéskor, mert a context nem ismeri — ezért olvasó API-ban kerülendő. A „Mi a különbség az `Include` és az `AsNoTracking` között EF Core lekérdezéseknél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `AsNoTracking` után az entitás automatikusan `Added` állapotú lesz mentéskor, mert a context nem ismeri — ezért olvasó API-ban kerülendő.

**Hamis válasz 3:**  
Include és AsNoTracking ugyanazt a SQL-t generálja; a különbség csak a C# oldali property nevekben van, az adatbázis lekérdezés identikus tracking-gel is. Ha architektúra review-n indokolod, a kiinduló tétel: Include és AsNoTracking ugyanazt a SQL-t generálja; a különbség csak a C# oldali property nevekben van, az adatbázis lekérdezés identikus tracking-gel is.

### Kérdés 46: Hogyan kapcsolódik a global query filter a soft delete-hez?

**Hamis válasz 1:**  
Global query filter csak INSERT-nél fut le, és automatikusan `IsDeleted = false`-t állít — SELECT query-ket nem módosít. Ennek az az oka, hogy global query filter csak INSERT-nél fut le, és automatikusan `IsDeleted = false`-t állít — SELECT query-ket nem módosít — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókö.

**Hamis válasz 2:**  
Soft delete-hez nem kell filter: elég az `IsDeleted` property default értéke az entitáson — az EF minden query-be automatikusan hozzáadja a WHERE feltételt convention alapján. A „Hogyan kapcsolódik a global query filter a soft delete-hez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy soft delete-hez nem kell filter: elég az `IsDeleted` property default értéke az entitáson — az EF minden query-be automatikusan hozzáadja a WHERE felt.

**Hamis válasz 3:**  
`IgnoreQueryFilters()` minden query-n alapértelmezetten aktív, és csak admin role esetén kapcsolható ki middleware-ből — a filter alapból nem érvényesül. Ha architektúra review-n indokolod, a kiinduló tétel: `IgnoreQueryFilters()` minden query-n alapértelmezetten aktív, és csak admin role esetén kapcsolható ki middleware-ből — a filter alapból nem érvényesül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még ak.

### Kérdés 47: Mikor használjunk sync, és mikor async API metódust?

**Hamis válasz 1:**  
EF Core hívásoknál mindig sync API a best practice (`ToList`, `SaveChanges`), mert az async csak UI thread-en blokkol deadlock nélkül — szerveren felesleges. Ennek az az oka, hogy eF Core hívásoknál mindig sync API a best practice (`ToList`, `SaveChanges`), mert az async csak UI thread-en blokkol deadlock nélkül — szerveren felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
HTTP kérés feldolgozásánál minden metódust sync-re kell írni, és a párhuzamosságot `Task.Run`-nal a controllerben kell megoldani — így skálázódik a Kestrel. A „Mikor használjunk sync, és mikor async API metódust" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hTTP kérés feldolgozásánál minden metódust sync-re kell írni, és a párhuzamosságot `Task.Run`-nal a controllerben kell megoldani — így skálázódik a Kestrel. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelé.

**Hamis válasz 3:**  
Async csak akkor hasznos, ha `ConfigureAwait(false)` nincs megadva — await nélkül az I/O automatikusan non-blocking a .NET runtime-ban. Ha architektúra review-n indokolod, a kiinduló tétel: Async csak akkor hasznos, ha `ConfigureAwait(false)` nincs megadva — await nélkül az I/O automatikusan non-blocking a .NET runtime-ban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. A megfigyelhetőség akkor értékes, ha ugyanazokat a fogalmakat használod a dashboardon, a runbookban és a kódban.

### Kérdés 48: Hogyan segíti a `Task.WhenAll` a párhuzamos I/O-t?

**Hamis válasz 1:**  
`Task.WhenAll` szekvenciálisan futtatja a taskokat, de egyetlen await-ként adja vissza az eredményt — a teljes idő az összes task idejének összege marad. Ennek az az oka, hogy `Task.WhenAll` szekvenciálisan futtatja a taskokat, de egyetlen await-ként adja vissza az eredményt — a teljes idő az összes task idejének összege marad — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Ugyanazon DbContext-en párhuzamos `WhenAll` a hivatalos EF pattern read-only lekérdezéseknél — a context thread-safe olvasásra. A „Hogyan segíti a `Task.WhenAll` a párhuzamos I/O-t" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ugyanazon DbContext-en párhuzamos `WhenAll` a hivatalos EF pattern read-only lekérdezéseknél — a context thread-safe olvasásra. Interjúban érdemes a döntést trade-offokkal is alátámaszta.

**Hamis válasz 3:**  
WhenAll csak CPU-bound `Task.Run` taskokhoz való; I/O async műveleteknél mindig egymás után await-elj, különben race condition lesz a thread pool-ban. Ha architektúra review-n indokolod, a kiinduló tétel: WhenAll csak CPU-bound `Task.Run` taskokhoz való; I/O async műveleteknél mindig egymás után await-elj, különben race condition lesz a thread pool-ban. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 49: Mi történik xUnit-ban a teszt osztály konstruktorában és az `IDisposable.Dispose`-ban?
**Hamis válasz 1:**  
xUnit-ban egy teszt osztály példány az egész test class életére él — a konstruktor egyszer fut, a Dispose csak az assembly unload-nál. Ennek az az oka, hogy xUnit-ban egy teszt osztály példány az egész test class életére él — a konstruktor egyszer fut, a Dispose csak az assembly unload-nál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
A konstruktor teardown-nak szolgál, a Dispose pedig setupnak — xUnit felcseréli a NUnit `[SetUp]`/`[TearDown]` szerepét. A „Mi történik xUnit-ban a teszt osztály konstruktorában és az `IDisposable.Dispose`-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a konstruktor teardown-nak szolgál, a Dispose pedig setupnak — xUnit felcseréli a NUnit `[SetUp]`/`[TearDown]` szerepét. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása. A döntést érdemes explicit guideline-ban és review checklistben is rögzíteni, hogy a csapat konzisztensen ugyanezt a magyarázatot kövesse productionben is.

**Hamis válasz 3:**  
Dispose csak akkor hívódik, ha a teszt `[Fact(Skip = "...")]` attribútumot kap — sikeres teszteknél a teardown automatikusan garbage collection. Ha architektúra review-n indokolod, a kiinduló tétel: Dispose csak akkor hívódik, ha a teszt `[Fact(Skip = "...")]` attribútumot kap — sikeres teszteknél a teardown automatikusan garbage collection. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 50: Mit jelent az immutabilitás C#-ban, és milyen eszközökkel érhető el?

**Hamis válasz 1:**  
Immutable objektum állapota szabadon módosítható property setterrel, ha az osztály `sealed` — a sealed kulcsszó garantálja a szálbiztonságot. Ennek az az oka, hogy immutable objektum állapota szabadon módosítható property setterrel, ha az osztály `sealed` — a sealed kulcsszó garantálja a szálbiztonságot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger,.

**Hamis válasz 2:**  
A `record with` kifejezés in-place módosítja az eredeti példányt, nem hoz létre másolatot — ezért immutable collection-nel nem használható. A „Mit jelent az immutabilitás C#-ban, és milyen eszközökkel érhető el" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a `record with` kifejezés in-place módosítja az eredeti példányt, nem hoz létre másolatot — ezért immutable collection-nel nem használható.

**Hamis válasz 3:**  
Immutabilitás csak `const` mezőkkel érhető el; `readonly` és `init` nem véd a mutálástól, mert reflection mindig írhat. Ha architektúra review-n indokolod, a kiinduló tétel: Immutabilitás csak `const` mezőkkel érhető el; `readonly` és `init` nem véd a mutálástól, mert reflection mindig írhat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor.

## Medior

### Kérdés 1: Mi a Clean Architecture lényege, és mit jelent a Dependency Rule?

**Hamis válasz 1:**  
A Clean Architecture lényege, hogy a függőségek mindig kifelé mutassanak: a Domain réteg hivatkozhat az Infrastructure-ra, mert így közvetlenül elérheti az adatbázist és a külső szolgáltatásokat. A Dependency Rule csak azt mondja meg, hogy a UI ne függjön egymástól. Ennek az az oka, hogy a Clean Architecture lényege, hogy a függőségek mindig kifelé mutassanak: a Domain réteg hivatkozhat az Infrastructure-ra, mert így közvetlenül elérheti az adatbázist és a külső szolgáltatásokat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defin.

**Hamis válasz 2:**  
A Clean Architecture fő célja a rétegek szigorú fizikai elkülönítése ugyanabban a projektben; a Dependency Rule szerint minden osztály csak az alatta lévő mappából importálhat. A `Program.cs` nem része az architektúrának, mert az csak bootstrap kód. A „Mi a Clean Architecture lényege, és mit jelent a Dependency Rule" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Clean Architecture fő célja a rétegek szigorú fizikai elkülönítése ugyanabban a projektben; a Dependency Rule szerint min.

**Hamis válasz 3:**  
A Clean Architecture azt jelenti, hogy minden use case külön microservice legyen, és a domain entitások mindig EF Core entitások is legyenek. A Dependency Rule csak teszteléskor érvényes, élesben a gyorsaság miatt felül lehet bontani. Ha architektúra review-n indokolod, a kiinduló tétel: A Clean Architecture azt jelenti, hogy minden use case külön microservice legyen, és a domain entitások mindig EF Core entitások is legyenek. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a run.

### Kérdés 2: Miben hasonlít és miben tér el a Hexagonal, az Onion és a Clean Architecture?

**Hamis válasz 1:**  
Mindhárom architektúra ugyanaz: csak a diagram színei különböznek. A Hexagonal kifejezetten tiltja az interfészeket, az Onion pedig kötelezően microservice-alapú. Ennek az az oka, hogy mindhárom architektúra ugyanaz: csak a diagram színei különböznek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
A Hexagonal Architecture-ben a portok mindig HTTP controllerek, az adapterek pedig adatbázis-táblák. Az Onion és a Clean Architecture ellentétben a domainet a legkülső rétegbe helyezi, hogy könnyebb legyen a UI-t cserélni. A „Miben hasonlít és miben tér el a Hexagonal, az Onion és a Clean Architecture" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Hexagonal Architecture-ben a portok mindig HTTP controllerek, az adapterek pedig adatbázis-táblák. Interjúban érdemes a döntést trade-offokkal.

**Hamis válasz 3:**  
A Clean Architecture kizárólag .NET-re vonatkozik, míg a Hexagonal csak Java-ban használható. Az Onion Architecture nem ismeri a Dependency Rule-t, helyette event sourcingot követel meg minden projektnél. Ha architektúra review-n indokolod, a kiinduló tétel: A Clean Architecture kizárólag .NET-re vonatkozik, míg a Hexagonal csak Java-ban használható. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 3: Mi a Vertical Slice Architecture, és mikor előnyösebb a klasszikus rétegezésnél?

**Hamis válasz 1:**  
Vertical Slice azt jelenti, hogy minden rétegben ugyanaz a fájlnév szerepel, de a kód továbbra is Controllers/Services/Repositories mappákba van rendezve. Akkor előnyös, ha a csapat nem akar feature-alapú fejlesztést. Ennek az az oka, hogy vertical Slice azt jelenti, hogy minden rétegben ugyanaz a fájlnév szerepel, de a kód továbbra is Controllers/Services/Repositories mappákba van rendezve — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Vertical Slice Architecture-nál minden endpoint külön adatbázist kap, így automatikusan megvalósul a CQRS külön read/write store-ral. Klasszikus rétegezés csak 10 fő alatti projekteknél működik. A „Mi a Vertical Slice Architecture, és mikor előnyösebb a klasszikus rétegezésnél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy vertical Slice Architecture-nál minden endpoint külön adatbázist kap, így automatikusan megvalósul a CQRS külön read/write store-ral. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ág.

**Hamis válasz 3:**  
A Vertical Slice lényege, hogy egy feature összes kódját egyetlen 5000 soros service osztályba tesszük, így nem kell mappák között navigálni. Előnyösebb minden esetben, mert megszünteti a cross-cutting concern-öket teljesen. Ha architektúra review-n indokolod, a kiinduló tétel: A Vertical Slice lényege, hogy egy feature összes kódját egyetlen 5000 soros service osztályba tesszük, így nem kell mappák között navigálni. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 4: Mi a CQRS alapgondolata, és mi a különbség a Command és a Query között?

**Hamis válasz 1:**  
CQRS azt jelenti, hogy minden GET kérés Event Sourcing store-ból olvas, minden POST pedig Kafka topicba ír. A Command és a Query között nincs különbség, csak elnevezési konvenció. Ennek az az oka, hogy cQRS azt jelenti, hogy minden GET kérés Event Sourcing store-ból olvas, minden POST pedig Kafka topicba ír — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi.

**Hamis válasz 2:**  
A Command csak olvas, a Query módosít adatot, mert a query-k gyorsabbak és kevesebb validációt igényelnek. CQRS kötelező minden EF Core projektnél, különben nem skálázható az alkalmazás. A „Mi a CQRS alapgondolata, és mi a különbség a Command és a Query között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Command csak olvas, a Query módosít adatot, mert a query-k gyorsabbak és kevesebb validációt igényelnek. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tű.

**Hamis válasz 3:**  
CQRS lényege, hogy a Controller és a Repository közé egy plusz Service réteget teszünk. A Command HTTP DELETE, a Query pedig HTTP GET; a PUT mindkettő egyszerre, ezért azt külön Saga kezeli. Ha architektúra review-n indokolod, a kiinduló tétel: CQRS lényege, hogy a Controller és a Repository közé egy plusz Service réteget teszünk. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 5: Hogyan segíti a MediatR a CQRS megvalósítását .NET-ben?

**Hamis válasz 1:**  
A MediatR automatikusan szétválasztja az adatbázist read és write példányra, és EF migrációt is generál hozzá. A handler regisztráció manuális, minden `IRequestHandler`-t külön sorban kell felvenni a `Program.cs`-ben. Ennek az az oka, hogy a MediatR automatikusan szétválasztja az adatbázist read és write példányra, és EF migrációt is generál hozzá — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
MediatR lényege, hogy a controller közvetlenül a `DbContext`-et kapja meg handlerként, így nem kell repository. A pipeline behavior-ök csak loggingra valók, validációt nem lehet beléjük tenni. A „Hogyan segíti a MediatR a CQRS megvalósítását .NET-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mediatR lényege, hogy a controller közvetlenül a `DbContext`-et kapja meg handlerként, így nem kell repository. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is,.

**Hamis válasz 3:**  
A MediatR egy teljes Clean Architecture implementáció: ha hozzáadjuk a projekthez, automatikusan létrejönnek a Domain, Application és Infrastructure rétegek. CQRS nélkül a MediatR nem használható. Ha architektúra review-n indokolod, a kiinduló tétel: A MediatR egy teljes Clean Architecture implementáció: ha hozzáadjuk a projekthez, automatikusan létrejönnek a Domain, Application és Infrastructure rétegek. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runboo.

### Kérdés 6: Mi a Repository pattern szerepe, és milyen hibákat érdemes elkerülni?

**Hamis válasz 1:**  
A Repository célja, hogy minden SQL lekérdezést a controllerben tarthassunk, csak tranzakciókezelés miatt van interfész. Ajánlott minden entitáshoz külön repository, és minden repository adjon vissza `IQueryable`-t a rugalmasságért. Ennek az az oka, hogy a Repository célja, hogy minden SQL lekérdezést a controllerben tarthassunk, csak tranzakciókezelés miatt van interfész — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntés.

**Hamis válasz 2:**  
Repository pattern azt jelenti, hogy a `DbContext`-et singleton-ként regisztráljuk, így egyetlen change tracker van az egész alkalmazásban. Üzleti logika a repositoryban a helyes megoldás, mert ott van az adatelérés. A „Mi a Repository pattern szerepe, és milyen hibákat érdemes elkerülni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy repository pattern azt jelenti, hogy a `DbContext`-et singleton-ként regisztráljuk, így egyetlen change tracker van az egész alkalmazásban.

**Hamis válasz 3:**  
A Repository pattern felesleges EF Core mellett, mert a `DbSet<T>` már repository. Ha mégis használjuk, minden metódus neve `GetAllIncludingEverything`, és minden hívás `Include`-oljon legalább öt navigációs property-t. Ha architektúra review-n indokolod, a kiinduló tétel: A Repository pattern felesleges EF Core mellett, mert a `DbSet<T>` már repository. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek.

### Kérdés 7: Mit jelent a Unit of Work mintázat EF Core mellett?

**Hamis válasz 1:**  
Unit of Work azt jelenti, hogy minden repository külön `SaveChanges`-et hív, így részleges commit is lehetséges. EF Core-ban a `DbContext` nem Unit of Work, csak Dapperrel működik ez a minta. Ennek az az oka, hogy unit of Work azt jelenti, hogy minden repository külön `SaveChanges`-et hív, így részleges commit is lehetséges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszink.

**Hamis válasz 2:**  
A Unit of Work minden kérésnél új adatbázis-kapcsolatot nyit, és request végén automatikusan rollbackel, ha nem hívtuk explicit a `Commit`-et. `BeginTransactionAsync` csak distributed tranzakciókhoz kell, lokális DB-n tilos. A „Mit jelent a Unit of Work mintázat EF Core mellett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Unit of Work minden kérésnél új adatbázis-kapcsolatot nyit, és request végén automatikusan rollbackel, ha nem hívtuk explicit a `Commit`-et. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
EF Core mellett mindig külön `IUnitOfWork` wrapper osztályt kell írni, még akkor is, ha csak egy repository van, mert a `DbContext` scoped lifetime-ja nem garantál tranzakciót. A `SaveChanges` helyett mindig nyers SQL commit parancsot futtatunk. Ha architektúra review-n indokolod, a kiinduló tétel: EF Core mellett mindig külön `IUnitOfWork` wrapper osztályt kell írni, még akkor is, ha csak egy repository van, mert a `DbContext` scoped lifetime-ja nem garantál tranzakciót. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 8: Mi a Specification pattern, és mikor éri meg használni?

**Hamis válasz 1:**  
A Specification pattern egy Swagger annotáció, amivel az API szerződést írjuk le. Akkor éri meg, ha minden endpointnál külön DTO-t akarunk generálni, különben felesleges overhead. Ennek az az oka, hogy a Specification pattern egy Swagger annotáció, amivel az API szerződést írjuk le — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Specification azt jelenti, hogy minden lekérdezéshez külön stored procedure-t írunk, és az EF ezt hívja. Kombinálni nem lehet, minden specifikáció fix SQL string legyen a service-ben. A „Mi a Specification pattern, és mikor éri meg használni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy specification azt jelenti, hogy minden lekérdezéshez külön stored procedure-t írunk, és az EF ezt hívja. Interjúban érdemes a döntést tra.

**Hamis válasz 3:**  
Specification pattern csak unit tesztekben használható, éles kódban tilos, mert lassítja az EF fordítást. Akkor éri meg, ha ugyanazt a `Where(x => true)` feltételt legalább húsz helyen ismételjük. Ha architektúra review-n indokolod, a kiinduló tétel: Specification pattern csak unit tesztekben használható, éles kódban tilos, mert lassítja az EF fordítást. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook.

### Kérdés 9: Mi a Result pattern (Railway-Oriented Programming), és mikor használjuk exception helyett?

**Hamis válasz 1:**  
A Result pattern azt jelenti, hogy minden exception-t elnyelünk, és `null`-t adunk vissza, így a kliens nem kap hibát. Várható üzleti hibákra mindig exception a helyes, a Result csak infrastruktúra hibákra való. Ennek az az oka, hogy a Result pattern azt jelenti, hogy minden exception-t elnyelünk, és `null`-t adunk vissza, így a kliens nem kap hibát — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Result pattern kötelező minden API metódusnál, még a `void` handlereknél is, különben a Railway-Oriented Programming nem működik. A `Result<T>` mindig HTTP 200-at jelent, a Failure ág csak logolásra szolgál. A „Mi a Result pattern (Railway-Oriented Programming), és mikor használjuk exception helyett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy result pattern kötelező minden API metódusnál, még a `void` handlereknél is, különben a Railway-Oriented Programming nem működik.

**Hamis válasz 3:**  
A Result pattern lényege, hogy a sikeres és sikertelen ágakat külön adatbázis-táblákba mentjük. Exception-t csak akkor dobunk, ha a Result már sikeres volt, de utólag kiderül, hogy mégsem jó az adat. Ha architektúra review-n indokolod, a kiinduló tétel: A Result pattern lényege, hogy a sikeres és sikertelen ágakat külön adatbázis-táblákba mentjük.

### Kérdés 10: Miben különbözik az Autofac a beépített MS DI-től medior szinten?

**Hamis válasz 1:**  
Az Autofac a beépített DI lassabb wrapper-e, funkcióban teljesen azonos, csak régebbi projektekben maradt meg. A .NET 8 óta az Autofac már nem támogat modulokat, ezért minden regisztrációt a `Program.cs`-be kell írni. Ennek az az oka, hogy az Autofac a beépített DI lassabb wrapper-e, funkcióban teljesen azonos, csak régebbi projektekben maradt meg — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
A beépített MS DI tud keyed service-t, az Autofac nem; ezért minden új projektnél Autofac helyett csak MS DI használható keyed regisztráció nélkül. Az Autofac egyetlen előnye a property injection, ami ASP.NET Core-ban ajánlott elsődleges injektálási mód. A „Miben különbözik az Autofac a beépített MS DI-től medior szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a beépített MS DI tud keyed service-t, az Autofac nem; ezért minden új projektnél Autofac helyett csak MS DI használható keyed regisztráció nélkül. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Autofac és MS DI nem használható együtt; ha Autofacot választunk, ki kell kapcsolni a beépített hostot, és Kestrel helyett IIS Express-t kell indítani. Medior szinten mindkettő ugyanazt a service locator mintát kényszeríti ki. Ha architektúra review-n indokolod, a kiinduló tétel: Autofac és MS DI nem használható együtt; ha Autofacot választunk, ki kell kapcsolni a beépített hostot, és Kestrel helyett IIS Express-t kell indítani. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 11: Mi a különbség az IOptions, IOptionsSnapshot és IOptionsMonitor között?

**Hamis válasz 1:**  
Mindhárom ugyanaz: singleton élettartam, és futás közben sem frissül a konfiguráció. A különbség csak az, hogy az `IOptionsMonitor` régebbi API, `.NET Framework`-ből maradt meg. Ennek az az oka, hogy mindhárom ugyanaz: singleton élettartam, és futás közben sem frissül a konfiguráció — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Az `IOptionsSnapshot` singleton, az `IOptionsMonitor` scoped, az `IOptions` pedig transient, ezért minden injektáláskor új appsettings.json-t olvas be. `reloadOnChange` csak az `IOptions`-nál működik. A „Mi a különbség az IOptions, IOptionsSnapshot és IOptionsMonitor között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `IOptionsSnapshot` singleton, az `IOptionsMonitor` scoped, az `IOptions` pedig transient, ezért minden injektáláskor új appsettings.json-t olvas be.

**Hamis válasz 3:**  
Az Options pattern helyett mindig a nyers `IConfiguration["ConnectionStrings:Default"]` string olvasás a best practice, mert gyorsabb. Az `IOptionsMonitor` `OnChange` callback-je csak akkor fut le, ha újraindítjuk az alkalmazást. Ha architektúra review-n indokolod, a kiinduló tétel: Az Options pattern helyett mindig a nyers `IConfiguration["ConnectionStrings:Default"]` string olvasás a best practice, mert gyorsabb. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 12: Hogyan modellezünk kapcsolatokat EF Core Fluent API-val?

**Hamis válasz 1:**  
Fluent API helyett mindig data annotation a javasolt, mert az EF csak attribútumokból generál migrációt. Az N:N kapcsolatot EF Core nem támogatja, join táblát mindig kézzel kell kezelni raw SQL-lel. Ennek az az oka, hogy fluent API helyett mindig data annotation a javasolt, mert az EF csak attribútumokból generál migrációt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Kapcsolat modellezésnél minden navigációs property kötelezően virtual legyen, különben a Fluent API nem érvényesül. A cascade delete alapértelmezett minden 1:N kapcsolatnál, és ezt nem lehet felülírni. A „Hogyan modellezünk kapcsolatokat EF Core Fluent API-val" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy kapcsolat modellezésnél minden navigációs property kötelezően virtual legyen, különben a Fluent API nem érvényesül. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Fluent API-val csak 1:1 kapcsolatot lehet definiálni; 1:N és N:N esetén automatikusan convention alapján minden FK a primary key lesz. A `HasMany().WithOne()` fordítva is ugyanazt az adatbázis-sémát eredményezi, a sorrend mindegy. Ha architektúra review-n indokolod, a kiinduló tétel: Fluent API-val csak 1:1 kapcsolatot lehet definiálni; 1:N és N:N esetén automatikusan convention alapján minden FK a primary key lesz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 13: Mi az IEntityTypeConfiguration, és miért jobb, mint mindent az OnModelCreatingbe írni?

**Hamis válasz 1:**  
Az `IEntityTypeConfiguration` csak tesztprojektekben használható, éles kódban minden konfigurációt az `OnModelCreating`-be kell írni, mert csak ott fut le az EF. A `ApplyConfigurationsFromAssembly` deprecated .NET 8-ban. Ennek az az oka, hogy az `IEntityTypeConfiguration` csak tesztprojektekben használható, éles kódban minden konfigurációt az `OnModelCreating`-be kell írni, mert csak ott fut le az EF — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Egy `IEntityTypeConfiguration` fájlban több entitást is konfigurálunk, így kevesebb fájl kell. Jobb, mint az `OnModelCreating`, mert ott nem lehet Fluent API-t használni, csak attribútumokat. A „Mi az IEntityTypeConfiguration, és miért jobb, mint mindent az OnModelCreatingbe írni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy `IEntityTypeConfiguration` fájlban több entitást is konfigurálunk, így kevesebb fájl kell. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Az `IEntityTypeConfiguration` automatikusan generálja a migrációkat is, külön `dotnet ef migrations add` parancs nem kell. Az `OnModelCreating` előnye, hogy runtime-ban dinamikusan módosítható a séma minden kérésnél. Ha architektúra review-n indokolod, a kiinduló tétel: Az `IEntityTypeConfiguration` automatikusan generálja a migrációkat is, külön `dotnet ef migrations add` parancs nem kell. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 14: Mit tudnak az EF Core global query filterek?

**Hamis válasz 1:**  
Global query filter minden entitásra automatikusan `TOP 100`-at rak, így véletlenül sem lehet nagy lekérdezést futtatni. Soft delete-hez nem használható, mert a filter csak SELECT-re vonatkozik, DELETE-re nem. Ennek az az oka, hogy global query filter minden entitásra automatikusan `TOP 100`-at rak, így véletlenül sem lehet nagy lekérdezést futtatni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, mé.

**Hamis válasz 2:**  
A global filter minden SQL utasításra vonatkozik, beleértve a raw SQL-t és a stored procedure hívásokat is, és nem lehet kikapcsolni. Multi-tenancy esetén minden tenant ugyanabba a táblába kerül, a filter csak logol. A „Mit tudnak az EF Core global query filterek" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a global filter minden SQL utasításra vonatkozik, beleértve a raw SQL-t és a stored procedure hívásokat is, és nem lehet kikapcsolni.

**Hamis válasz 3:**  
Global query filter helyett minden repository metódusban kézzel kell írni a `Where(!IsDeleted)` feltételt, mert az EF filter csak debug buildben aktív. Az `IgnoreQueryFilters()` minden lekérdezésnél automatikusan meghívódik admin felhasználóknál. Ha architektúra review-n indokolod, a kiinduló tétel: Global query filter helyett minden repository metódusban kézzel kell írni a `Where(!IsDeleted)` feltételt, mert az EF filter csak debug buildben aktív. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 15: Mire valók az EF Core interceptorok?

**Hamis válasz 1:**  
Interceptorokkal lecserélhető a teljes EF Core provider, pl. SQL Server helyett MongoDB-re. A `SaveChangesInterceptor` a tranzakció commit előtt automatikusan rollbackel, ha bármely entitáson nincs `[Key]` attribútum. Ennek az az oka, hogy interceptorokkal lecserélhető a teljes EF Core provider, pl — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvbe.

**Hamis válasz 2:**  
EF Core interceptor csak SQL logolásra való, audit mezőket és soft delete-et nem lehet vele megoldani. Domain event-et a mentés előtt, a rollback határán belül kell publikálni interceptorban, így biztosan kimegy az üzenet. A „Mire valók az EF Core interceptorok" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy eF Core interceptor csak SQL logolásra való, audit mezőket és soft delete-et nem lehet vele megoldani. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Interceptor regisztráció nélkül is működik, ha az osztály neve `*Interceptor` végződésű. Minden interceptor singleton kell legyen, és közvetlenül injektálható scoped `DbContext` a konstruktorába captive dependency nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Interceptor regisztráció nélkül is működik, ha az osztály neve `*Interceptor` végződésű. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 16: Hogyan működik az optimista konkurenciakezelés EF Core-ban?

**Hamis válasz 1:**  
Optimista konkurencia azt jelenti, hogy az EF minden UPDATE előtt `UPDLOCK`-ot tesz a sorra, így más tranzakció nem módosíthatja, amíg az első fut. Concurrency token nélkül is működik, elég a primary key. Ennek az az oka, hogy optimista konkurencia azt jelenti, hogy az EF minden UPDATE előtt `UPDLOCK`-ot tesz a sorra, így más tranzakció nem módosíthatja, amíg az első fut — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátám.

**Hamis válasz 2:**  
Ha `DbUpdateConcurrencyException` keletkezik, az EF automatikusan merge-eli a kliens és szerver adatot, a fejlesztőnek nem kell kezelni. A `rowversion` oszlop csak SQL Serveren működik, PostgreSQL-en tilos optimista stratégiát használni. A „Hogyan működik az optimista konkurenciakezelés EF Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ha `DbUpdateConcurrencyException` keletkezik, az EF automatikusan merge-eli a kliens és szerver adatot, a fejlesztőnek nem kell kezelni. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmassá.

**Hamis válasz 3:**  
Optimista helyett mindig pesszimista zárolás a best practice webes API-knál, mert így nem kell exception handling. Az optimista token minden navigációs property-n kötelező `[ConcurrencyCheck]` attribútummal. Ha architektúra review-n indokolod, a kiinduló tétel: Optimista helyett mindig pesszimista zárolás a best practice webes API-knál, mert így nem kell exception handling. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni.

### Kérdés 17: Mi a különbség a TPH, TPT és TPC öröklési stratégiák között?

**Hamis válasz 1:**  
TPH, TPT és TPC ugyanaz: mindhárom külön adatbázist használ entitásonként. A különbség csak a migráció fájl kiterjesztésében van (.tp h, .tpt, .tpc). Ennek az az oka, hogy tPH, TPT és TPC ugyanaz: mindhárom külön adatbázist használ entitásonként — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
TPC a leggyakoribb, mert egy táblában discriminator oszlop van; TPH-nál minden konkrét típus külön teljes tábla. TPT csak .NET Framework EF6-ban létezett, EF Core-ban nincs támogatva. A „Mi a különbség a TPH, TPT és TPC öröklési stratégiák között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy tPC a leggyakoribb, mert egy táblában discriminator oszlop van; TPH-nál minden konkrét típus külön teljes tábla. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mel.

**Hamis válasz 3:**  
Öröklésnél mindig TPT a legjobb teljesítmény, mert nem kell join. TPH-t csak akkor választunk, ha az összes leszármazott teljesen eltérő oszlopokkal rendelkezik, így nincs nullable mező. Ha architektúra review-n indokolod, a kiinduló tétel: Öröklésnél mindig TPT a legjobb teljesítmény, mert nem kell join. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emeln.

### Kérdés 18: Melyek az alapvető EF Core teljesítmény-technikák (AsNoTracking, Include, projekció)?

**Hamis válasz 1:**  
Minden lekérdezésnél kötelező az `Include` minden navigációra, különben az EF lazy loading nélkül nem működik. Az `AsNoTracking` lassítja a read műveleteket, mert újra kell építeni az entitásokat memóriában. Ennek az az oka, hogy minden lekérdezésnél kötelező az `Include` minden navigációra, különben az EF lazy loading nélkül nem működik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik.

**Hamis válasz 2:**  
A legjobb teljesítményhez mindig `ToList()` majd LINQ to Objects a memóriában, így az adatbázis csak egyszer fut le. Projekció helyett AutoMapperrel mapeljünk teljes entitást, mert a `Select` DTO-ra nem fordít SQL-t. A „Melyek az alapvető EF Core teljesítmény-technikák (AsNoTracking, Include, projekció)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a legjobb teljesítményhez mindig `ToList()` majd LINQ to Objects a memóriában, így az adatbázis csak egyszer fut le.

**Hamis válasz 3:**  
Az `AsNoTracking` csak write műveleteknél használható, olvasásnál a change tracker nélkül nem lehet kapcsolódó adatot betölteni. N+1 probléma csak Dapperrel fordul elő, EF Core automatikusan batch-el minden Include-t egyetlen join nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Az `AsNoTracking` csak write műveleteknél használható, olvasásnál a change tracker nélkül nem lehet kapcsolódó adatot betölteni. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 19: Miért használjunk IHttpClientFactory-t, és hogyan jön képbe a Polly?

**Hamis válasz 1:**  
Az `IHttpClientFactory` azért kell, mert a `HttpClient` nem thread-safe, ezért minden kérésnél új példányt kell `new HttpClient()`-tel létrehozni factory nélkül. A Polly automatikusan cseréli a DNS-t és bezárja a socketeket. Ennek az az oka, hogy az `IHttpClientFactory` azért kell, mert a `HttpClient` nem thread-safe, ezért minden kérésnél új példányt kell `new HttpClient()`-tel létrehozni factory nélkül — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Polly nélkül az `IHttpClientFactory` nem tud typed clientet regisztrálni. A retry policy-t mindig végtelen újrapróbálkozásra állítjuk, timeout nélkül, mert így biztosan sikerül a hívás. A „Miért használjunk IHttpClientFactory-t, és hogyan jön képbe a Polly" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy polly nélkül az `IHttpClientFactory` nem tud typed clientet regisztrálni. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
A Polly circuit breaker célja, hogy minden sikertelen hívást azonnal újrapróbáljon Open állapotban is. Az `IHttpClientFactory` singleton `HttpClient`-et ad, handler pool nélkül, .NET 8-tól felesleges a használata. Ha architektúra review-n indokolod, a kiinduló tétel: A Polly circuit breaker célja, hogy minden sikertelen hívást azonnal újrapróbáljon Open állapotban is. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon codin.

### Kérdés 20: Hogyan működik a Circuit Breaker minta, és miért fontos?

**Hamis válasz 1:**  
Circuit Breaker azt jelenti, hogy minden HTTP hívás előtt ellenőrizzük az adatbázis kapcsolatot, és ha lassú, leállítjuk az appot. Open állapotban a hívások továbbra is mennek, csak lassabban, Half-Open pedig permanent shutdown. Ennek az az oka, hogy circuit Breaker azt jelenti, hogy minden HTTP hívás előtt ellenőrizzük az adatbázis kapcsolatot, és ha lassú, leállítjuk az appot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A Circuit Breaker és a Retry ugyanaz: mindkettő ugyanazt a kérést ismétli exponenciális backoff nélkül. Open állapot célja, hogy minél több forgalmat küldjünk a hibás szolgáltatásra, amíg helyre nem áll. A „Hogyan működik a Circuit Breaker minta, és miért fontos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Circuit Breaker és a Retry ugyanaz: mindkettő ugyanazt a kérést ismétli exponenciális backoff nélkül. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb s.

**Hamis válasz 3:**  
Circuit Breaker-t csak adatbázis kapcsolatokra használunk, HTTP kliensnél felesleges. A fallback mindig az, hogy `null`-t adunk vissza exception nélkül, és nem logolunk, hogy ne riasszuk a monitoringot. Ha architektúra review-n indokolod, a kiinduló tétel: Circuit Breaker-t csak adatbázis kapcsolatokra használunk, HTTP kliensnél felesleges.

### Kérdés 21: Milyen caching stratégiákat ismersz ASP.NET Core-ban?

**Hamis válasz 1:**  
ASP.NET Core-ban csak in-memory cache létezik, distributed cache nincs beépítve. Cache-aside azt jelenti, hogy minden írás előtt törlünk minden cache kulcsot az egész clusterből manuálisan. Ennek az az oka, hogy aSP.NET Core-ban csak in-memory cache létezik, distributed cache nincs beépítve — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Minden API választ cache-elni kell legalább 24 órára, függetlenül attól, hogy user-specifikus-e. A TTL nélküli cache a best practice, mert így nem kell invalidációt tervezni. A „Milyen caching stratégiákat ismersz ASP.NET Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy minden API választ cache-elni kell legalább 24 órára, függetlenül attól, hogy user-specifikus-e. Interjúban érdemes a döntést trade-offokkal is a.

**Hamis válasz 3:**  
Response cache és output cache ugyanaz, mindkettő a böngészőben tárol. Cache stampede elkerülésére minden miss esetén lock nélkül indítunk párhuzamosan 50 azonos számítást, és az első eredményt vesszük. Ha architektúra review-n indokolod, a kiinduló tétel: Response cache és output cache ugyanaz, mindkettő a böngészőben tárol. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbn.

### Kérdés 22: Mi a HybridCache, és milyen problémát old meg?

**Hamis válasz 1:**  
HybridCache csak .NET Framework 4.8 plugin, ASP.NET Core-ban nincs natív támogatás. Egyetlen L3 distributed cache réteget ad, in-memory része nincs, így minden olvasás hálózati round-trip. Ennek az az oka, hogy hybridCache csak .NET Framework 4.8 plugin, ASP.NET Core-ban nincs natív támogatás — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
HybridCache célja, hogy teljesen helyettesítse az adatbázist read-heavy rendszereknél. A `GetOrCreateAsync` szándékosan nem véd stampede ellen: minden szál külön számol, így friss adat garantált. A „Mi a HybridCache, és milyen problémát old meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hybridCache célja, hogy teljesen helyettesítse az adatbázist read-heavy rendszereknél. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

**Hamis válasz 3:**  
HybridCache tag alapú invalidációja globálisan törli az összes Redis instance-t reboot nélkül nem lehetséges. L1 és L2 szinkronjához mindig hard-coded 24 órás TTL kell, pub/sub nem támogatott. Ha architektúra review-n indokolod, a kiinduló tétel: HybridCache tag alapú invalidációja globálisan törli az összes Redis instance-t reboot nélkül nem lehetséges. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivét.

### Kérdés 23: Miért fontos a middleware pipeline sorrendje ASP.NET Core-ban?

**Hamis válasz 1:**  
A middleware sorrendje mindegy, mert az ASP.NET Core automatikusan topológiai rendezést végez dependency graph alapján. Az exception handler mindig a pipeline legvégére kerül, az endpoints után. Ennek az az oka, hogy a middleware sorrendje mindegy, mert az ASP.NET Core automatikusan topológiai rendezést végez dependency graph alapján — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance for.

**Hamis válasz 2:**  
Autentikációt mindig az endpoints után regisztráljuk, így gyorsabb a routing. CORS-nak csak akkor van hatása, ha a response már elküldésre került, ezért CORS a pipeline legvégén helyes. A „Miért fontos a middleware pipeline sorrendje ASP.NET Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy autentikációt mindig az endpoints után regisztráljuk, így gyorsabb a routing. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még.

**Hamis válasz 3:**  
Middleware csak request bejövetelekor fut, response közben nem. A `UseRouting` és `UseEndpoints` .NET 8-ban deprecated, helyette minden middleware-t a `MapGet` delegate-ben kell láncolni. Ha architektúra review-n indokolod, a kiinduló tétel: Middleware csak request bejövetelekor fut, response közben nem. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 24: Mi a ProblemDetails, és hogyan illeszkedik a globális kivételkezeléshez?

**Hamis válasz 1:**  
ProblemDetails egy XML formátum hibákhoz, JSON API-kban nem használható. A globális exception handler célja, hogy minden hibát 200 OK-kal adjon vissza biztonsági okokból, a `detail` mezőben legyen a stack trace élesben is. Ennek az az oka, hogy problemDetails egy XML formátum hibákhoz, JSON API-kban nem használható — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban i.

**Hamis válasz 2:**  
ProblemDetails helyettesíti a FluentValidation-t: ha bekapcsoljuk, nem kell input validáció. Az `IExceptionHandler` .NET 8 előtt volt az egyetlen mód, mostantól tilos használni. A „Mi a ProblemDetails, és hogyan illeszkedik a globális kivételkezeléshez" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy problemDetails helyettesíti a FluentValidation-t: ha bekapcsoljuk, nem kell input validáció. Interjúban érdemes a döntést tra.

**Hamis válasz 3:**  
Domain validációs hiba mindig HTTP 500, váratlan infrastruktúra hiba HTTP 400. A ProblemDetails `type` mezője mindig a teljes exception stack trace URL-je legyen a GitHub repo-ra. Ha architektúra review-n indokolod, a kiinduló tétel: Domain validációs hiba mindig HTTP 500, váratlan infrastruktúra hiba HTTP 400. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — mé.

### Kérdés 25: Mit jelent a strukturált logolás ILogger/Serilog esetén?

**Hamis válasz 1:**  
Strukturált logolás azt jelenti, hogy minden log üzenet JSON fájlba kerül interpolációval: `$"Order {orderId}"`. Így a Seq-ben külön mezőként indexelődik az OrderId anélkül, hogy template lenne. Ennek az az oka, hogy strukturált logolás azt jelenti, hogy minden log üzenet JSON fájlba kerül interpolációval: `$"Order {orderId}"` — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Az `ILogger` és a Serilog nem használható együtt; ha Serilog van, ki kell kapcsolni az `ILogger<T>`-et. Élesben Debug szintet használunk minden környezetben, hogy ne maradjon ki információ. A „Mit jelent a strukturált logolás ILogger/Serilog esetén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az `ILogger` és a Serilog nem használható együtt; ha Serilog van, ki kell kapcsolni az `ILogger<T>`-et. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciál.

**Hamis válasz 3:**  
Strukturált logolásnál a PII-t mindig plain textben logoljuk, mert így gyorsabb a keresés. A `LogInformation` template paraméterei csak string típusúak lehetnek, számot előbb stringgé kell castolni. Ha architektúra review-n indokolod, a kiinduló tétel: Strukturált logolásnál a PII-t mindig plain textben logoljuk, mert így gyorsabb a keresés.

### Kérdés 26: Mi a Correlation ID szerepe, és hogyan valósítjuk meg?

**Hamis válasz 1:**  
Correlation ID csak frontend fejlesztéshez kell, backend logokban felesleges. Middleware generálja a GUID-ot, de nem kell továbbadni HTTP headerben, elég session cookie-ban tárolni. Ennek az az oka, hogy correlation ID csak frontend fejlesztéshez kell, backend logokban felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger,.

**Hamis válasz 2:**  
Correlation ID és Trace ID különböző fogalmak, soha nem lehet ugyanaz. OpenTelemetry `Activity` használata nélkül is elég a `Console.WriteLine` minden sor elején, manuálisan beírva az ID-t. A „Mi a Correlation ID szerepe, és hogyan valósítjuk meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy correlation ID és Trace ID különböző fogalmak, soha nem lehet ugyanaz. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Kimenő HTTP hívásoknál tilos továbbadni a correlation headert, mert az biztonsági rés. A Correlation ID csak akkor kell, ha Kafka van a rendszerben, REST API-nál nincs értelme. Ha architektúra review-n indokolod, a kiinduló tétel: Kimenő HTTP hívásoknál tilos továbbadni a correlation headert, mert az biztonsági rés. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 27: Miért kell API versioning, és milyen stratégiák vannak?

**Hamis válasz 1:**  
API versioning csak akkor kell, ha GraphQL-t használunk; REST esetén minden breaking change azonnal deployolható, a kliensek automatikusan alkalmazkodnak. Verziót csak a NuGet package version szám adja, URL-ben nem kell. Ennek az az oka, hogy aPI versioning csak akkor kell, ha GraphQL-t használunk; REST esetén minden breaking change azonnal deployolható, a kliensek automatikusan alkalmazkodnak — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Minden új mező hozzáadása breaking change, ezért minden PR új major verzió. Header alapú verziózás azért rossz, mert a HTTP spec tiltja a custom headereket verzióhoz. A „Miért kell API versioning, és milyen stratégiák vannak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy minden új mező hozzáadása breaking change, ezért minden PR új major verzió. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Az Asp.Versioning csomag helyett mindig külön teljes másolat hostot indítunk v1 és v2 domainen. Deprecálási politika felesleges, a régi verziót azonnal le lehet kapcsolni deploy után. Ha architektúra review-n indokolod, a kiinduló tétel: Az Asp.Versioning csomag helyett mindig külön teljes másolat hostot indítunk v1 és v2 domainen. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakeze.

### Kérdés 28: Hogyan működnek az authorization policy-k és a claim-ek ASP.NET Core-ban?

**Hamis válasz 1:**  
Autentikáció és autorizáció ugyanaz: ha bejelentkezett a user, minden művelet engedélyezett. Claim-ek csak JWT-ben léteznek, cookie auth esetén nincs claim, csak role string a sessionben. Ennek az az oka, hogy autentikáció és autorizáció ugyanaz: ha bejelentkezett a user, minden művelet engedélyezett — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Policy helyett mindig `[Authorize(Roles="Admin")]` elég, összetett szabályhoz nem kell requirement handler. A claims principal a middleware pipeline végén, response küldése után épül fel. A „Hogyan működnek az authorization policy-k és a claim-ek ASP.NET Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy policy helyett mindig `[Authorize(Roles="Admin")]` elég, összetett szabályhoz nem kell requirement handler. Interjúban érdemes a döntést t.

**Hamis válasz 3:**  
Autorizációt a controllerben `if (user.IsAdmin)` checkkel oldjuk, policy csak Blazorban működik. Minimal API-nál nincs `[Authorize]`, csak Basic auth middleware használható. Ha architektúra review-n indokolod, a kiinduló tétel: Autorizációt a controllerben `if (user.IsAdmin)` checkkel oldjuk, policy csak Blazorban működik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még ak.

### Kérdés 29: Mi a különbség az IHostedService és a BackgroundService között?

**Hamis válasz 1:**  
Az `IHostedService` és a `BackgroundService` teljesen külön host process-ben fut, nem az ASP.NET Core app része. A `BackgroundService` csak rövid, egyszeri feladatra való, loop tilos benne. Ennek az az oka, hogy az `IHostedService` és a `BackgroundService` teljesen külön host process-ben fut, nem az ASP.NET Core app része — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron va.

**Hamis válasz 2:**  
Hosted service mindig transient lifetime, ezért biztonságos scoped `DbContext`-et injektálni közvetlenül a konstruktorba. A `CancellationToken` a `StopAsync`-ben mindig `CancellationToken.None`, mert graceful shutdown nem támogatott. A „Mi a különbség az IHostedService és a BackgroundService között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hosted service mindig transient lifetime, ezért biztonságos scoped `DbContext`-et injektálni közvetlenül a kon.

**Hamis válasz 3:**  
`IHostedService`-t csak console appban használható, web API-ban tilos háttérfolyamat. A `BackgroundService` `ExecuteAsync` szinkron metódus, async/await használata exceptiont dob indításkor. Ha architektúra review-n indokolod, a kiinduló tétel: `IHostedService`-t csak console appban használható, web API-ban tilos háttérfolyamat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 30: Mire való a Quartz.NET a BackgroundService mellett?

**Hamis válasz 1:**  
Quartz.NET csak Windows Task Scheduler wrapper, cron kifejezéseket nem ért. BackgroundService minden esetben jobb, mert Quartz nem támogat DI-t és nem lehet clusterben futtatni. Ennek az az oka, hogy quartz.NET csak Windows Task Scheduler wrapper, cron kifejezéseket nem ért — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszi.

**Hamis válasz 2:**  
Quartz akkor kell, ha egyszeri indításkor futó feladatot akarunk, cron csak dekoráció. Több app instance esetén minden node ugyanabban az időben lefuttatja a jobot, locking nem létezik Quartzban. A „Mire való a Quartz.NET a BackgroundService mellett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy quartz akkor kell, ha egyszeri indításkor futó feladatot akarunk, cron csak dekoráció. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibak.

**Hamis válasz 3:**  
Quartz.NET és BackgroundService ugyanaz az API, a Quartz csak NuGet alias. Misfire kezelés azt jelenti, hogy a kimaradt jobok örökre elvesznek, újra nem futnak le. Ha architektúra review-n indokolod, a kiinduló tétel: Quartz.NET és BackgroundService ugyanaz az API, a Quartz csak NuGet alias. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding.

### Kérdés 31: Mikor használjunk SignalR-t, és mi a lényege?

**Hamis válasz 1:**  
SignalR microservice-ek közötti üzenetküldésre való, Kafka helyettesítője belső hálózaton. WebSocket az egyetlen transport, fallback nincs, ezért minden kliensnek WebSocketet kell kényszeríteni. Ennek az az oka, hogy signalR microservice-ek közötti üzenetküldésre való, Kafka helyettesítője belső hálózaton — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat, noha tartalmil.

**Hamis válasz 2:**  
SignalR-t minden REST endpoint helyett kell használni, mert gyorsabb. Több szerver instance-nál backplane nélkül is szinkronban maradnak a hub kapcsolatok automatikusan SQL Server tempdb-n keresztül. A „Mikor használjunk SignalR-t, és mi a lényege" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy signalR-t minden REST endpoint helyett kell használni, mert gyorsabb. Interjúban érdemes a döntést trade-offokkal is alátámasztani, m.

**Hamis válasz 3:**  
SignalR hubok singleton regisztrációval futnak, és thread-safe állapotot tárolnak static mezőben. Request-response helyett mindig SignalR, még fájl feltöltésnél és CRUD listázásnál is. Ha architektúra review-n indokolod, a kiinduló tétel: SignalR hubok singleton regisztrációval futnak, és thread-safe állapotot tárolnak static mezőben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbo.

### Kérdés 32: Mik a gRPC alapjai .NET-ben a REST-hez képest?

**Hamis válasz 1:**  
gRPC HTTP/1.1-en JSON-t használ, Protobuf opcionális. Böngészőből natívan jobban támogatott, mint REST, ezért publikus API-khoz mindig gRPC a best practice. Ennek az az oka, hogy gRPC HTTP/1.1-en JSON-t használ, Protobuf opcionális — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül.

**Hamis válasz 2:**  
gRPC és REST ugyanaz a protokoll, csak a port szám különbözik. A `.proto` fájl futásidőben töltődik, fordításkor nem generálódik kód, manuálisan írjuk a client stubot. A „Mik a gRPC alapjai .NET-ben a REST-hez képest" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy gRPC és REST ugyanaz a protokoll, csak a port szám különbözik. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
gRPC hibáit mindig ProblemDetails JSON-nel adjuk vissza HTTP 200 mellett. Streaming csak server-side létezik, client streaming és duplex nem támogatott .NET-ben. Ha architektúra review-n indokolod, a kiinduló tétel: gRPC hibáit mindig ProblemDetails JSON-nel adjuk vissza HTTP 200 mellett. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egy.

### Kérdés 33: Hogyan illeszkedik a FluentValidation egy MediatR pipeline-ba?

**Hamis válasz 1:**  
FluentValidation csak DataAnnotations helyettesítője a controllerben, MediatR-rel nem kombinálható. A pipeline behavior a handler után fut, így a validáció csak sikeres üzleti logika után ellenőriz. Ennek az az oka, hogy fluentValidation csak DataAnnotations helyettesítője a controllerben, MediatR-rel nem kombinálható — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljes.

**Hamis válasz 2:**  
Minden validációs szabályt a domain entitás property setterébe kell írni, FluentValidation tilos MediatR mellett. DB-t érintő async validátor mindig biztonságos race condition nélkül, mert SQL serializable isolation alapértelmezett. A „Hogyan illeszkedik a FluentValidation egy MediatR pipeline-ba" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy minden validációs szabályt a domain entitás property setterébe kell írni, FluentValidation tilos MediatR mellett. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
A `IPipelineBehavior` regisztráció nélkül is lefut, ha a validator osztály neve `*Validator`. Input validáció és domain invariáns ugyanaz: elég a FluentValidation a DTO-n, a domain modellben nem kell ellenőrzés. Ha architektúra review-n indokolod, a kiinduló tétel: A `IPipelineBehavior` regisztráció nélkül is lefut, ha a validator osztály neve `*Validator`.

### Kérdés 34: Miben jobb a Mapperly az AutoMapperhez képest, és mikor ne mapeljünk?

**Hamis válasz 1:**  
AutoMapper mindig gyorsabb, mert futásidőben optimalizál reflexió nélkül. Mapperly csak .NET Frameworkre elérhető. Mapelni mindig kell, EF projekció helyett is teljes entitást töltsünk be, aztán mapeljünk. Ennek az az oka, hogy autoMapper mindig gyorsabb, mert futásidőben optimalizál reflexió nélkül — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezé.

**Hamis válasz 2:**  
Mapperly runtime-ban generálja a mapping kódot első híváskor, ezért hideg start lassú. AutoMapper source generator, Mapperly pedig reflection alapú. Írási oldalon DTO-ból domain entitást AutoMapperrel hozunk létre setterekkel, factory felesleges. A „Miben jobb a Mapperly az AutoMapperhez képest, és mikor ne mapeljünk" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mapperly runtime-ban generálja a mapping kódot első híváskor, ezért hideg.

**Hamis válasz 3:**  
Mapelés nélkül nem lehet Clean Architecturet csinálni, a handler mindig két DTO között mapel. Mapperly nem jelez fordítási idejű hibát hiányzó property mappingnél, csak runtime NullReferenceException-t dob. Ha architektúra review-n indokolod, a kiinduló tétel: Mapelés nélkül nem lehet Clean Architecturet csinálni, a handler mindig két DTO között mapel. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevese.

### Kérdés 35: Mi a Test Data Builder és az Object Mother különbsége?

**Hamis válasz 1:**  
Object Mother és Test Data Builder ugyanaz, mindkettő Moq-ot használ mockolásra. A Builder csak integrációs tesztben használható, unit tesztben tilos fluent API. Ennek az az oka, hogy object Mother és Test Data Builder ugyanaz, mindkettő Moq-ot használ mockolásra — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
Object Mother rugalmasabb, mert minden mezőt külön paraméterként lehet megadni; a Builder fix példányokat ad vissza. Mindkettő célja, hogy a teszt ne függjön az adatszerkezettől, random adat generálás kötelező. A „Mi a Test Data Builder és az Object Mother különbsége" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy object Mother rugalmasabb, mert minden mezőt külön paraméterként lehet megadni; a Builder fix példányokat ad vissza. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek.

**Hamis válasz 3:**  
Test Data Builder és Object Mother helyett mindig éles adatbázisból másolunk rekordot teszteléshez. A kettő különbsége csak elnevezés, .NET-ben nincs bevett pattern, mindkettő anti-patternnek számít. Ha architektúra review-n indokolod, a kiinduló tétel: Test Data Builder és Object Mother helyett mindig éles adatbázisból másolunk rekordot teszteléshez. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — mé.

### Kérdés 36: Mire való a WebApplicationFactory integrációs teszteknél?

**Hamis válasz 1:**  
WebApplicationFactory valódi hálózati porton indít Kestrel-t, és külső URL-en kell hívni a teszteket. Nem cserélhető a DI regisztráció tesztben, mindig éles DB-t használ. Ennek az az oka, hogy webApplicationFactory valódi hálózati porton indít Kestrel-t, és külső URL-en kell hívni a teszteket — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
WebApplicationFactory csak unit tesztekhez való, integrációs teszthez Postman collection a helyes eszköz. A pipeline nem fut le benne, csak a controller action hívódik meg közvetlenül reflectionnel. A „Mire való a WebApplicationFactory integrációs teszteknél" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy webApplicationFactory csak unit tesztekhez való, integrációs teszthez Postman collection a helyes eszköz. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális.

**Hamis válasz 3:**  
Integrációs teszthez minden endpointot külön microservice-ként kell deployolni Dockerben, WebApplicationFactory deprecated .NET 9-ben. A `ConfigureWebHost` csak log levelt állít, mock DB nem injektálható. Ha architektúra review-n indokolod, a kiinduló tétel: Integrációs teszthez minden endpointot külön microservice-ként kell deployolni Dockerben, WebApplicationFactory deprecated .NET 9-ben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mér.

### Kérdés 37: Mi a REPR pattern, és hogyan kapcsolódik a Minimal API-hoz?

**Hamis válasz 1:**  
REPR a Repository-Entity-Provider-Repository név rövidítése, lényege a dupla repository réteg. Minimal API-val nem használható, csak MVC controllerrel, mert endpoint delegate nem lehet külön fájl. Ennek az az oka, hogy rEPR a Repository-Entity-Provider-Repository név rövidítése, lényege a dupla repository réteg — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

**Hamis válasz 2:**  
REPR azt jelenti, hogy minden HTTP metódus egy 200 soros controller action, benne validáció, SQL és mapping. Minimal API csak health checkre való, üzleti végpontokhoz mindig MVC kell. A „Mi a REPR pattern, és hogyan kapcsolódik a Minimal API-hoz" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy rEPR azt jelenti, hogy minden HTTP metódus egy 200 soros controller action, benne validáció, SQL és mapping. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett.

**Hamis válasz 3:**  
REPR pattern ellentéte a Vertical Slice: REPR-nél feature mappák helyett technikai rétegek szerint rendezünk. Az endpoint tartalmazza az üzleti logikát, a MediatR handler csak továbbít a DbContext-nek. Ha architektúra review-n indokolod, a kiinduló tétel: REPR pattern ellentéte a Vertical Slice: REPR-nél feature mappák helyett technikai rétegek szerint rendezünk.

### Kérdés 38: Mi a Service Collection Extension pattern, és miért hasznos?

**Hamis válasz 1:**  
Service Collection Extension anti-pattern, mert elrejti a függőségeket; minden regisztrációt egyetlen 3000 soros `Program.cs`-be kell írni. Extension method regisztráció közben szabad adatbázist migrálni és fájlt olvasni. Ennek az az oka, hogy service Collection Extension anti-pattern, mert elrejti a függőségeket; minden regisztrációt egyetlen 3000 soros `Program.cs`-be kell írni — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Extension pattern csak NuGet csomagokban használható, saját app kódban tilos. Az `AddEverything()` egy metódus a best practice, így egy helyen látszik az összes service. A visszatérési típus mindig `void` legyen. A „Mi a Service Collection Extension pattern, és miért hasznos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy extension pattern csak NuGet csomagokban használható, saját app kódban tilos. Interjúban érdemes a döntést trade-.

**Hamis válasz 3:**  
Service Collection Extension nem láncolható, minden `Add*` külön statement. Rétegenkénti bontás csak Clean Architecture senior projekteknél engedélyezett, medior szinten egy `AddServices()` elég. Ha architektúra review-n indokolod, a kiinduló tétel: Service Collection Extension nem láncolható, minden `Add*` külön statement. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában.

### Kérdés 39: Mikor válasszunk Kafka-t, és mikor RabbitMQ-t?

**Hamis válasz 1:**  
Kafka és RabbitMQ ugyanaz, mindkettő csak .NET-ben működik, Java broker nem kell. RabbitMQ a nagy throughputú event stream, Kafka pedig kis work queue üzenetekhez ideális. Ennek az az oka, hogy kafka és RabbitMQ ugyanaz, mindkettő csak .NET-ben működik, Java broker nem kell — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt inter.

**Hamis válasz 2:**  
Kafka minden üzenetet azonnal töröl ack után, retention nincs. RabbitMQ nem támogat routingot, minden consumer ugyanazt a queue-t olvassa broadcast nélkül. Választás teljesen mindegy, broker interchangeable. A „Mikor válasszunk Kafka-t, és mikor RabbitMQ-t" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy kafka minden üzenetet azonnal töröl ack után, retention nincs. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, h.

**Hamis válasz 3:**  
Kafka-t csak akkor választunk, ha nincs szükség sorrendre és replay-re. RabbitMQ kötelező analytics és audit trail esetén, mert perzisztens logot tárol hosszú retentionnel partíciók nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Kafka-t csak akkor választunk, ha nincs szükség sorrendre és replay-re. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a kategóriák ma.

### Kérdés 40: Mit ad a MassTransit az üzenetküldéshez .NET-ben?

**Hamis válasz 1:**  
MassTransit csak Azure Service Bus-ra működik, RabbitMQ nem támogatott. Consumer regisztráció manuális minden üzenettípusra, assembly scan nincs. Outbox és saga nincs benne, azt külön kell implementálni. Ennek az az oka, hogy massTransit csak Azure Service Bus-ra működik, RabbitMQ nem támogatott — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionb.

**Hamis válasz 2:**  
MassTransit lényege, hogy közvetlenül a broker API-t expose-olja, nincs absztrakció. Retry helyett minden hiba esetén azonnal discardolja az üzenetet, error queue nem létezik. EF integráció csak read-only lekérdezésre való. A „Mit ad a MassTransit az üzenetküldéshez .NET-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy massTransit lényege, hogy közvetlenül a broker API-t expose-olja, nincs absztrakció. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat.

**Hamis válasz 3:**  
MassTransit nélkül .NET-ben nem lehet üzenetet küldeni, a beépített `Channel<T>` helyettesíti a brokert. A consumer pipeline csak szinkron metódust támogat, async `Consume` tilos. Ha architektúra review-n indokolod, a kiinduló tétel: MassTransit nélkül .NET-ben nem lehet üzenetet küldeni, a beépített `Channel<T>` helyettesíti a brokert. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beáll.

### Kérdés 41: Mit jelent az idempotency API-kban, és miért fontos?

**Hamis válasz 1:**  
Idempotencia azt jelenti, hogy minden GET kérés módosít adatot, de ugyanazt az eredményt adja. POST sosem lehet idempotens, ez HTTP spec szerint tiltott. Idempotency-Key fejléc csak GraphQL mutationhöz használható. Ennek az az oka, hogy idempotencia azt jelenti, hogy minden GET kérés módosít adatot, de ugyanazt az eredményt adja — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-in.

**Hamis válasz 2:**  
Idempotency elég, ha a kliens nem küld retry-t; szerver oldalon nem kell kulcsot tárolni. Dupla rendelés csak akkor fordul elő, ha a user kétszer kattint, hálózati újrapróbálkozás nem okoz duplikációt. A „Mit jelent az idempotency API-kban, és miért fontos" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy idempotency elég, ha a kliens nem küld retry-t; szerver oldalon nem kell kulcsot tárolni. Interjúban érdemes a döntést trade-offokkal is .

**Hamis válasz 3:**  
Idempotency megvalósítása: minden kérésnél új GUID primary key generálás request body nélkül. Ugyanazzal a kulccsal érkező második POST mindig HTTP 500-at kap, mert conflict, nem ad vissza cache-elt választ. Ha architektúra review-n indokolod, a kiinduló tétel: Idempotency megvalósítása: minden kérésnél új GUID primary key generálás request body nélkül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is.

### Kérdés 42: Mi az Outbox pattern lényege?

**Hamis válasz 1:**  
Outbox pattern azt jelenti, hogy az üzenetet először a brokerre küldjük, és csak sikeres publish után commitoljuk az adatbázis tranzakciót. Így garantált, hogy sosem marad el üzenet, még ha a DB rollback is van. Ennek az az oka, hogy outbox pattern azt jelenti, hogy az üzenetet először a brokerre küldjük, és csak sikeres publish után commitoljuk az adatbázis tranzakciót — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Az Outbox egy Redis cache réteg neve, amely ideiglenesen tárolja a DTO-kat mapping előtt. Célja a dupla HTTP hívás elkerülése Polly retry mellett, adatbázissal nincs kapcsolata. A „Mi az Outbox pattern lényege" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az Outbox egy Redis cache réteg neve, amely ideiglenesen tárolja a DTO-kat mapping előtt. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Outbox táblába csak sikertelen üzenetek kerülnek, sikeres publish után törlődnek a tranzakción kívül. A háttérfolyamat polling helyett mindig azonnal pushol WebSocketen a kliensnek, broker opcionális. Ha architektúra review-n indokolod, a kiinduló tétel: Outbox táblába csak sikertelen üzenetek kerülnek, sikeres publish után törlődnek a tranzakción kívül.

### Kérdés 43: Mik a soft delete best practice-ek EF Core-ban?

**Hamis válasz 1:**  
Soft delete esetén a rekord fizikailag is törlődik, csak egy audit log táblába másoljuk a sort előtte. Global query filter nem használható soft delete-hez, minden lekérdezésben kézi `WHERE IsDeleted = 0` elég egyszer beírva a repository base classban. Ennek az az oka, hogy soft delete esetén a rekord fizikailag is törlődik, csak egy audit log táblába másoljuk a sort előtte — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Soft delete-nél az `IsDeleted` flag true marad, de az EF `Remove()` továbbra is DELETE SQL-t generál, interceptor nem írhatja felül. Egyedi indexeknél nem kell figyelni a törölt sorokra, az `Email` unique constraint elég sima oszlopon. A „Mik a soft delete best practice-ek EF Core-ban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy soft delete-nél az `IsDeleted` flag true marad, de az EF `Remove()` továbbra is DELETE SQL-t generál, interceptor nem írhatja felül. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb.

**Hamis válasz 3:**  
Soft delete best practice: soha ne használjunk `IgnoreQueryFilters`-t admin felületen, mert az biztonsági rés. Kapcsolódó entitások cascade soft delete automatikus minden FK-nál, konfiguráció nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Soft delete best practice: soha ne használjunk `IgnoreQueryFilters`-t admin felületen, mert az biztonsági rés.

### Kérdés 44: Mikor érdemes Dapperrel hibrid perzisztenciát használni EF Core mellett?

**Hamis válasz 1:**  
Dapper és EF Core ugyanarra a use case-re mindig együtt kell, különben nem működik a change tracking. Write oldalon Dapper a best practice, EF csak migráció generálásra való. SQL injection elkerülésére string concatenation a elfogadott Dapper minta. Ennek az az oka, hogy dapper és EF Core ugyanarra a use case-re mindig együtt kell, különben nem működik a change tracking — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Hibrid perzisztencia azt jelenti, hogy ugyanazt a lekérdezést egyszerre futtatjuk EF-fel és Dapperrel, és az első választ adjuk vissza. Dapper csak MongoDB-hez használható, relációs DB-n tilos. A „Mikor érdemes Dapperrel hibrid perzisztenciát használni EF Core mellett" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy hibrid perzisztencia azt jelenti, hogy ugyanazt a lekérdezést egyszerre futtatjuk EF-fel és Dapperrel, és az első választ adjuk vissza.

**Hamis válasz 3:**  
Dapperrel csak CRUD egyszerű tábláknál éri meg, összetett riportnál mindig EF LINQ, mert gyorsabb. Tranzakció megosztás EF és Dapper között lehetetlen, külön connection kötelező minden hívásra. Ha architektúra review-n indokolod, a kiinduló tétel: Dapperrel csak CRUD egyszerű tábláknál éri meg, összetett riportnál mindig EF LINQ, mert gyorsabb.

### Kérdés 45: Hogyan működik a rate limiting és az output caching .NET-ben?

**Hamis válasz 1:**  
Rate limiting és output caching ugyanaz: mindkettő a Redis-ben tárolja a JWT tokeneket. .NET 7 előtt built-in rate limiter van, .NET 8-tól csak third-party middleware használható. 429 helyett mindig 200-at adjunk vissza, a body-ban jelezve a limitet. Ennek az az oka, hogy rate limiting és output caching ugyanaz: mindkettő a Redis-ben tárolja a JWT tokeneket — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Output cache a kliens böngésző cache-e, szerver oldali nem létezik .NET-ben. Rate limiting csak statikus fájlokra vonatkozik, API endpointokra nem alkalmazható. Token bucket az egyetlen algoritmus, fixed window deprecated. A „Hogyan működik a rate limiting és az output caching .NET-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy output cache a kliens böngésző cache-e, szerver oldali nem létezik .NET-ben. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek,.

**Hamis válasz 3:**  
Autentikált user-specifikus választ output cache-elni a best practice `VaryBy` nélkül, így gyorsabb mindenkinek. Rate limit particionálás felesleges, globális egy számláló elég clusterben is. Ha architektúra review-n indokolod, a kiinduló tétel: Autentikált user-specifikus választ output cache-elni a best practice `VaryBy` nélkül, így gyorsabb mindenkinek. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 46: Mik a keyed services .NET 8-ban, és milyen problémát oldanak meg?

**Hamis válasz 1:**  
Keyed services azt jelenti, hogy minden service-nek külön connection string jön appsettings-ből automatikusan. Csak singleton lifetime támogatott, scoped keyed service nem létezik .NET 8-ban. Ennek az az oka, hogy keyed services azt jelenti, hogy minden service-nek külön connection string jön appsettings-ből automatikusan — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Keyed services helyett mindig service locator (`IServiceProvider.GetService`) a best practice üzleti kódban. Ugyanahhoz az interfészhez csak egy implementáció regisztrálható, kulcs csak logging category-hoz használható. A „Mik a keyed services .NET 8-ban, és milyen problémát oldanak meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy keyed services helyett mindig service locator (`IServiceProvider.GetService`) a best practice üzleti kódban. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérné.

**Hamis válasz 3:**  
Keyed services .NET 8-ban deprecated, helyette Autofac kötelező. A `[FromKeyedServices]` csak minimal API-ban működik, controller constructor injection nem támogatja. Ha architektúra review-n indokolod, a kiinduló tétel: Keyed services .NET 8-ban deprecated, helyette Autofac kötelező. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 47: Hogyan kapcsolódik egymáshoz a Vertical Slice, a CQRS és a REPR egy medior szintű architektúrában?

**Hamis válasz 1:**  
Vertical Slice, CQRS és REPR egymás kizáró alternatívái: csak egyet szabad választani projektenként. Tipikus felállás: MVC controller + service + repository, mindhárom minta nélkül, mert kombinálniuk tilos a Clean Architecture szerint. Ennek az az oka, hogy vertical Slice, CQRS és REPR egymás kizáró alternatívái: csak egyet szabad választani projektenként — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

**Hamis válasz 2:**  
REPR a perzisztencia réteg neve, Vertical Slice a tesztelési stratégia, CQRS pedig csak frontend state management. Együtt használva minden feature külön microservice lesz automatikusan, külön read/write DB-vel kötelezően. A „Hogyan kapcsolódik egymáshoz a Vertical Slice, a CQRS és a REPR egy medior szintű architektúrában" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy rEPR a perzisztencia réteg neve, Vertical Slice a tesztelési stratégia, CQRS pedig csak frontend state management.

**Hamis válasz 3:**  
Medior architektúrában először CQRS, utána REPR, végül Vertical Slice vezetése kötelező sorrend, különben nem fordít le a projekt. A MediatR handler tartalmazza a HTTP routingot is, külön endpoint fájl felesleges. Ha architektúra review-n indokolod, a kiinduló tétel: Medior architektúrában először CQRS, utána REPR, végül Vertical Slice vezetése kötelező sorrend, különben nem fordít le a projekt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág.

### Kérdés 48: Milyen sorrendben gondolkodnál egy új .NET API medior szintű „alapvázán”?

**Hamis válasz 1:**  
Első lépés a MassTransit és Kafka beállítása, utána jön az API verziózás, végül ha marad idő, a use case-ek. Teszteket a projekt végén, éles deploy után írjuk meg, addig mock production elég. Ennek az az oka, hogy első lépés a MassTransit és Kafka beállítása, utána jön az API verziózás, végül ha marad idő, a use case-ek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Alapváz: először minden entitásra repository + UoW wrapper, majd AutoMapper profile minden property-re, végül controller minden művelethez. ProblemDetails, correlation ID és Options pattern csak senior projektnél kell, mediornál felesleges. A „Milyen sorrendben gondolkodnál egy új .NET API medior szintű „alapvázán”" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy alapváz: először minden entitásra repository + UoW wrapper, majd AutoMapper profile minden property-re, végül controller minden művelethez. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális á.

**Hamis válasz 3:**  
Új API-nál elsődleges a UI framework kiválasztása, mert az határozza meg a backend architektúrát. EF migráció élesben manuális SQL script app indítás nélkül, HttpClientFactory helyett statikus `HttpClient` singleton, resilience későbbi tech debt. Ha architektúra review-n indokolod, a kiinduló tétel: Új API-nál elsődleges a UI framework kiválasztása, mert az határozza meg a backend architektúrát. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emeln.

## Senior

### Kérdés 1: Mi a Saga minta, és miért nem elég a 2PC mikroszolgáltatások között?

**Hamis válasz 1:**  
A Saga lényegében ugyanaz, mint a 2PC, csak aszinkron üzenetekkel: minden szolgáltatás XA tranzakcióban vesz részt, és a koordinátor commitol, amikor az utolsó ACK megérkezik. Mikroszolgáltatásoknál a 2PC azért nem elég, mert túl lassú, de Saga-val ugyanazt az ACID garanciát kapod. Ennek az az oka, hogy a Saga lényegében ugyanaz, mint a 2PC, csak aszinkron üzenetekkel: minden szolgáltatás XA tranzakcióban vesz részt, és a koordinátor commitol, amikor az utolsó ACK megérkezik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
A Saga minta azt jelenti, hogy egy központi SQL Server koordinátor tartja az összes szolgáltatás tranzakcióját nyitva, amíg a teljes folyamat le nem fut. A 2PC-t azért kerüljük, mert csak monolitokban működik, Saga esetén viszont globális lock nem kell. A „Mi a Saga minta, és miért nem elég a 2PC mikroszolgáltatások között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a Saga minta azt jelenti, hogy egy központi SQL Server koordinátor tartja az összes szolgáltatás tranzakciójá.

**Hamis válasz 3:**  
Saga = sorban hívott REST hívások ugyanabban az HTTP sessionben; ha az egyik elbukik, az előzőek automatikusan rollbackelődnek az EF Core ChangeTracker segítségével. A 2PC felesleges, mert HTTP/2 már garantálja a tranzakciós sorrendet. Ha architektúra review-n indokolod, a kiinduló tétel: Saga = sorban hívott REST hívások ugyanabban az HTTP sessionben; ha az egyik elbukik, az előzőek automatikusan rollbackelődnek az EF Core ChangeTracker segítségével. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 2: Mi a különbség a Saga orchestration és choreography között?

**Hamis válasz 1:**  
Orchestrationnál minden szolgáltatás saját maga dönti el a következő lépést események alapján; choreographynál viszont egy dedikált orchestrator küldi a parancsokat. A kettő gyakorlatilag szinonima, csak a nevek különböznek. Ennek az az oka, hogy orchestrationnál minden szolgáltatás saját maga dönti el a következő lépést események alapján; choreographynál viszont egy dedikált orchestrator küldi a parancsokat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Choreography csak Kafka-val működik, orchestration pedig kizárólag RabbitMQ direct exchange-szel. Orchestration mindig gyorsabb, mert nincs szükség esemény publikálásra. A „Mi a különbség a Saga orchestration és choreography között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy choreography csak Kafka-val működik, orchestration pedig kizárólag RabbitMQ direct exchange-szel. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelés.

**Hamis válasz 3:**  
Orchestration = frontend koordinálja a lépéseket GraphQL subscriptionnel; choreography = backend cron jobok futnak fix időközönként. Komplex folyamatnál mindig choreography-t választunk, mert kevesebb kód kell. Ha architektúra review-n indokolod, a kiinduló tétel: Orchestration = frontend koordinálja a lépéseket GraphQL subscriptionnel; choreography = backend cron jobok futnak fix időközönként.

### Kérdés 3: Hogyan valósítod meg a choreography-alapú Sagát MassTransittal?

**Hamis válasz 1:**  
MassTransitban a choreography-hoz `Send`-et használsz minden lépésnél ugyanarra a queue-ra; a saga state machine automatikusan követi a routing key-t. Outbox nem kell, mert a MassTransit EF integrációja XA tranzakciót nyit a brokerrel. Ennek az az oka, hogy massTransitban a choreography-hoz `Send`-et használsz minden lépésnél ugyanarra a queue-ra; a saga state machine automatikusan követi a routing key-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Choreography = egy `IConsumer`-ben implementálsz minden lépést switch-case-sel, és `Publish`-olsz a saját magadnak. Idempotencia felesleges, mert a RabbitMQ exactly-once delivery-t garantál alapból. A „Hogyan valósítod meg a choreography-alapú Sagát MassTransittal" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy choreography = egy `IConsumer`-ben implementálsz minden lépést switch-case-sel, és `Publish`-olsz a saját magadnak.

**Hamis válasz 3:**  
A choreography Sagát MassTransit Automatonymous state machine-ként kell megírni központi orchestratorral minden szolgáltatásban. Kompenzáció = automatikus `Rollback()` az EF Core-on minden consumerben. Ha architektúra review-n indokolod, a kiinduló tétel: A choreography Sagát MassTransit Automatonymous state machine-ként kell megírni központi orchestratorral minden szolgáltatásban. Ebből vezethető le a hibakezelés, a tesztelés és a production checkli.

### Kérdés 4: Mi az Outbox pattern, és milyen hibát előz meg?

**Hamis válasz 1:**  
Az Outbox egy külön RabbitMQ exchange, ahova először minden üzenetet küldesz; a consumer onnan olvas, majd írja az adatbázist. Megelőzi azt, ha a broker gyorsabb lenne, mint az adatbázis. Ennek az az oka, hogy az Outbox egy külön RabbitMQ exchange, ahova először minden üzenetet küldesz; a consumer onnan olvas, majd írja az adatbázist — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Outbox = az üzeneteket Redis cache-ben tárolod 5 percig, és csak utána mented SQL-be. Így elkerülöd a „broker elküldte, de a DB még nem commitolt” helyzetet, mert mindig a cache az igazság forrása. A „Mi az Outbox pattern, és milyen hibát előz meg" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy outbox = az üzeneteket Redis cache-ben tárolod 5 percig, és csak utána mented S.

**Hamis válasz 3:**  
Az Outbox pattern azt jelenti, hogy a Publish hívást a tranzakció előtt futtatod, és ha a SaveChanges elbukik, a MassTransit automatikusan visszavonja az üzenetet a brokeren. Exactly-once delivery-t ad broker szinten. Ha architektúra review-n indokolod, a kiinduló tétel: Az Outbox pattern azt jelenti, hogy a Publish hívást a tranzakció előtt futtatod, és ha a SaveChanges elbukik, a MassTransit automatikusan visszavonja az üzenetet a brokeren. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 5: Mi az Inbox pattern, és hogyan ad „effectively-once” szemantikát?

**Hamis válasz 1:**  
Az Inbox a producer oldalon van: minden kimenő üzenet ID-ját Redis SET-ben tárolod, és csak egyszer küldheted ki. A fogyasztó így garantáltan egyszer kapja meg az üzenetet. Ennek az az oka, hogy az Inbox a producer oldalon van: minden kimenő üzenet ID-ját Redis SET-ben tárolod, és csak egyszer küldheted ki — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Inbox = Kafka consumer group automatikusan deduplikál offset alapján; ha ugyanaz az offset kétszer jön, a broker eldobja. Nincs szükség külön táblára vagy tranzakcióra. A „Mi az Inbox pattern, és hogyan ad „effectively-once” szemantikát" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy inbox = Kafka consumer group automatikusan deduplikál offset alapján; ha ugyanaz az offset kétszer jön, a broker eldobja.

**Hamis válasz 3:**  
Az Inbox pattern azt jelenti, hogy minden bejövő üzenetet először dead-letter queue-ba teszel, és csak sikeres feldolgozás után kerül az inbox táblába. Effectively-once = at-most-once + retry. Ha architektúra review-n indokolod, a kiinduló tétel: Az Inbox pattern azt jelenti, hogy minden bejövő üzenetet először dead-letter queue-ba teszel, és csak sikeres feldolgozás után kerül az inbox táblába.

### Kérdés 6: Mit jelent az eventual consistency, és hogyan kezeld a UI-n?

**Hamis válasz 1:**  
Eventual consistency azt jelenti, hogy az adat azonnal konzisztens minden szolgáltatásban, csak a UI cache késik 1-2 másodpercet. A frontenden elég egy spinner 500 ms-ig, utána biztosan látszik a végleges állapot. Ennek az az oka, hogy eventual consistency azt jelenti, hogy az adat azonnal konzisztens minden szolgáltatásban, csak a UI cache késik 1-2 másodpercet — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
Eventual consistency = minden olvasás közvetlenül a forrás adatbázisból megy sync HTTP-vel, így a UI mindig friss. Aszinkron folyamatnál `200 OK`-t adsz vissza azonnal, mert a háttér max. 50 ms alatt kész. A „Mit jelent az eventual consistency, és hogyan kezeld a UI-n" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy eventual consistency = minden olvasás közvetlenül a forrás adatbázisból megy sync HTTP-vel, így a UI mindig friss.

**Hamis válasz 3:**  
A UI-n eventual consistency-t úgy kezeled, hogy minden POST után teljes oldal reloadot csinálsz F5-tel; így garantáltan látod az összes szolgáltatás frissített állapotát azonnal. Ha architektúra review-n indokolod, a kiinduló tétel: A UI-n eventual consistency-t úgy kezeled, hogy minden POST után teljes oldal reloadot csinálsz F5-tel; így garantáltan látod az összes szolgáltatás frissített állapotát azonnal. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 7: Magyarázd el a CAP-tételt és a PACELC kiegészítést a gyakorlatban!

**Hamis válasz 1:**  
CAP szerint mindhárom (Consistency, Availability, Partition tolerance) egyszerre elérhető, ha Kafka-t használsz és több replikát indítasz. PACELC csak akkor számít, ha nincs hálózat: ilyenkor mindig a konzisztenciát válaszd a latency helyett. Ennek az az oka, hogy cAP szerint mindhárom (Consistency, Availability, Partition tolerance) egyszerre elérhető, ha Kafka-t használsz és több replikát indítasz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak d.

**Hamis válasz 2:**  
A CAP azt mondja, particionáláskor mindig az Availability-t kell választani, a konzisztencia automatikusan helyreáll 1 ms alatt. PACELC = Partition + ACID + Elastic + Latency + Consistency, és minden rendszer CP alapértelmezetten. A „Magyarázd el a CAP-tételt és a PACELC kiegészítést a gyakorlatban!" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a CAP azt mondja, particionálásk.

**Hamis válasz 3:**  
CAP csak relációs adatbázisokra vonatkozik; NoSQL-nél mindhárom tulajdonság garantált. PACELC kiegészítés: ha nincs partíció, akkor is mindig C-t választunk, mert a felhasználó inkább vár, mint stale adatot kap. Ha architektúra review-n indokolod, a kiinduló tétel: CAP csak relációs adatbázisokra vonatkozik; NoSQL-nél mindhárom tulajdonság garantált. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 8: Mi az Event Sourcing, és mikor használd Martent?

**Hamis válasz 1:**  
Event Sourcing = minden entitást JSON-ként tárolsz egy NoSQL-ben, és Marten csak PostgreSQL wrapper EF Core-hoz. Akkor használd, ha minden táblát auditálni akarsz, mert így minden CRUD automatikusan esemény lesz. Ennek az az oka, hogy event Sourcing = minden entitást JSON-ként tárolsz egy NoSQL-ben, és Marten csak PostgreSQL wrapper EF Core-hoz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak defi.

**Hamis válasz 2:**  
Event Sourcingnál az aktuális állapot az elsődleges, az események csak naplózásra kellenek. Martent akkor érdemes, ha MongoDB-t akarsz PostgreSQL helyett anélkül, hogy kódot írnál. A „Mi az Event Sourcing, és mikor használd Martent" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy event Sourcingnál az aktuális állapot az elsődleges, az események csak naplózásra kellenek.

**Hamis válasz 3:**  
Marten akkor kell, ha az egész monolitot Event Sourcingra állítod át egyszerre; különben nem működik a snapshot. Az események szabadon módosíthatók utólag SQL UPDATE-tel, ha hibás volt a payload. Ha architektúra review-n indokolod, a kiinduló tétel: Marten akkor kell, ha az egész monolitot Event Sourcingra állítod át egyszerre; különben nem működik a snapshot. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 9: Mi a különbség a domain event és az integration event között?

**Hamis válasz 1:**  
Domain event és integration event ugyanaz; mindkettőt közvetlenül a brokerre Publish-olod a domain entitásból. A különbség csak a névkonvenció: domain = present tense, integration = past tense. Ennek az az oka, hogy domain event és integration event ugyanaz; mindkettőt közvetlenül a brokerre Publish-olod a domain entitásból — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Integration event csak in-process megy MediatR-rel; domain event megy ki Kafka-ra. A domain event tartalmazhat EF navigation property-ket, hogy a fogyasztó ne kelljen visszahívjon. A „Mi a különbség a domain event és az integration event között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy integration event csak in-process megy MediatR-rel; domain event megy k.

**Hamis válasz 3:**  
Domain event = HTTP webhook a frontendnek; integration event = SignalR broadcast. Mindkettőt a SaveChanges előtt publikáld, hogy gyorsabb legyen a válaszidő. Ha architektúra review-n indokolod, a kiinduló tétel: Domain event = HTTP webhook a frontendnek; integration event = SignalR broadcast. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 10: Melyek az event-driven integrációs stílusok (Fowler), és mikor melyik?

**Hamis válasz 1:**  
Fowler szerint csak két stílus van: CRUD sync REST és Event Sourcing. Event Notification = mindig Event Sourcing; ECST = mindig sync REST nagy payload-dal. Ennek az az oka, hogy fowler szerint csak két stílus van: CRUD sync REST és Event Sourcing — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Event-Carried State Transfer azt jelenti, hogy az esemény csak egy ID-t tartalmaz, a fogyasztó mindig visszahív REST-tel. Event Notification-nál viszont a teljes aggregate megy az üzenetben. A „Melyek az event-driven integrációs stílusok (Fowler), és mikor melyik" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy event-Carried State Transfer azt jelenti, hogy az esemény csak egy ID-t tartalmaz, a fogyasztó mindig.

**Hamis válasz 3:**  
Mikroszolgáltatásnál mindig Event Notification a legjobb, mert a legkisebb üzenet; ECST csak monolitban működik. CQRS-integráció = ugyanaz, mint a klasszikus CRUD controller. Ha architektúra review-n indokolod, a kiinduló tétel: Mikroszolgáltatásnál mindig Event Notification a legjobb, mert a legkisebb üzenet; ECST csak monolitban működik. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálás.

### Kérdés 11: Hogyan verziózd az üzenet-szerződéseket törés nélkül?

**Hamis válasz 1:**  
Üzenet verziózás = minden breaking change-nél új topic nevet adsz, és azonnal törlöd a régit. A fogyasztóknak nincs szükségük párhuzamos futásra, mert a broker automatikusan migrálja az üzeneteket. Ennek az az oka, hogy üzenet verziózás = minden breaking change-nél új topic nevet adsz, és azonnal törlöd a régit — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
Törő változásnál elég a mezőt átnevezni ugyanabban a contractban; a JSON deserializer automatikusan kezeli a régi és új nevet. Schema Registry csak Avro-hoz kell, JSON-nál felesleges. A „Hogyan verziózd az üzenet-szerződéseket törés nélkül" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy törő változásnál elég a mezőt átnevezni ugyanabban a contractban; a JSON deserializer automatikusan kezeli a régi és új nevet.

**Hamis válasz 3:**  
Verzió = a message headerben egy `Version: 1` mező; ha a consumer régi, egyszerűen ignorálja az egész üzenetet. Expand-contract helyett mindig big-bang deploy minden szolgáltatással éjszaka. Ha architektúra review-n indokolod, a kiinduló tétel: Verzió = a message headerben egy `Version: 1` mező; ha a consumer régi, egyszerűen ignorálja az egész üzenetet. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 12: Kafka: mi a topic, partition, offset, consumer group szerepe?

**Hamis válasz 1:**  
Topic = egy consumer; partition = egy producer; offset = a broker memóriájában tárolt GUID. Consumer group = minden fogyasztó ugyanazt az offsetet olvassa párhuzamosan ugyanabból a partícióból. Ennek az az oka, hogy topic = egy consumer; partition = egy producer; offset = a broker memóriájában tárolt GUID — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Kafka sorrendet globálisan garantál topic szinten, partíció csak skálázás miatt van. Offsetet a broker automatikusan commitol minden poll-nál; a fogyasztónak ezzel nem kell foglalkoznia. A „Kafka: mi a topic, partition, offset, consumer group szerepe" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy kafka sorrendet globálisan garantál topic szinten, part.

**Hamis válasz 3:**  
Consumer group = egy fogyasztó több példánya ugyanazt az üzenetet kapja broadcast módon, mint RabbitMQ fanout. Key nélkül is garantált a sorrend minden partíción keresztül. Ha architektúra review-n indokolod, a kiinduló tétel: Consumer group = egy fogyasztó több példánya ugyanazt az üzenetet kapja broadcast módon, mint RabbitMQ fanout. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 13: Mit okoz a Kafka rebalance, és hogyan kerüld el a dupla feldolgozást?

**Hamis válasz 1:**  
Rebalance = a broker törli az összes üzenetet a partícióból, amikor új consumer csatlakozik. Dupla feldolgozás elkerülése: `EnableAutoCommit = true` és minél rövidebb `MaxPollIntervalMs`. Ennek az az oka, hogy rebalance = a broker törli az összes üzenetet a partícióból, amikor új consumer csatlakozik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámas.

**Hamis válasz 2:**  
Rebalance csak akkor történik, ha kevesebb consumer van, mint partíció; ilyenkor a felesleges partíciók üzenetei elvesznek. Idempotencia felesleges, mert rebalance alatt a feldolgozás szünetel. A „Mit okoz a Kafka rebalance, és hogyan kerüld el a dupla feldolgozást" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy rebalance csak akkor történik, ha kevesebb consumer van, mint partíció; ilyenkor a felesleges partíciók üzenetei elvesznek.

**Hamis válasz 3:**  
Dupla feldolgozást a CooperativeSticky stratégia okozza; classic rebalance-szal sosem jön vissza ugyanaz az üzenet. Offset commit a poll elején a legbiztonságosabb. Ha architektúra review-n indokolod, a kiinduló tétel: Dupla feldolgozást a CooperativeSticky stratégia okozza; classic rebalance-szal sosem jön vissza ugyanaz az üzenet. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra,.

### Kérdés 14: Hogyan kezeled a poison message-et Kafkán (DLQ, retry topic)?

**Hamis válasz 1:**  
Poison message = azonnal töröld az üzenetet offset commit nélkül; a Kafka retention miatt úgyis visszajön. DLQ helyett elég a consumer logjába írni ERROR szinten. Ennek az az oka, hogy poison message = azonnal töröld az üzenetet offset commit nélkül; a Kafka retention miatt úgyis visszajön — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. A gyors fix helyett a hosszú távú karbantarthatóságot hangsúlyozd: a félreértett alapfogalom később egész feature-láncot mérgezhet meg.

**Hamis válasz 2:**  
Retry topic = ugyanaz a topic, csak lassabb consumerrel olvasod. Poison üzenetnél növeld a partíció számát, hogy más consumer kapja meg. A „Hogyan kezeled a poison message-et Kafkán (DLQ, retry topic)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy retry topic = ugyanaz a topic, csak lassabb consumerrel olvasod. Interjúban érdemes a döntést trade.

**Hamis válasz 3:**  
DLQ = dead letter queue RabbitMQ-ban; Kafkán nincs ilyen, ezért a poison message blokkolja a partíciót, amíg manuálisan nem törlöd a broker fájlrendszeréből. Ha architektúra review-n indokolod, a kiinduló tétel: DLQ = dead letter queue RabbitMQ-ban; Kafkán nincs ilyen, ezért a poison message blokkolja a partíciót, amíg manuálisan nem törlöd a broker fájlrendszeréből.

### Kérdés 15: RabbitMQ: exchange, binding, routing key – mikor melyik exchange típus?

**Hamis válasz 1:**  
Minden esetben fanout exchange a legjobb, mert minden queue megkapja az üzenetet; routing key és binding felesleges. Direct exchange csak legacy rendszerekhez való. Ennek az az oka, hogy minden esetben fanout exchange a legjobb, mert minden queue megkapja az üzenetet; routing key és binding felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Producer közvetlenül a queue-ba küld, exchange csak dekoráció. Topic exchange = pontos routing key egyezés, wildcard nem létezik RabbitMQ-ban. A „RabbitMQ: exchange, binding, routing key – mikor melyik exchange típus" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy producer közvetlenül a queue-ba küld, exchange csak dekoráció. Interjúban érdemes a döntést trade-.

**Hamis válasz 3:**  
Headers exchange a leggyakoribb pub/sub megoldás; direct exchange csak RPC-hoz. `autoAck: true` ajánlott, mert gyorsabb, és a RabbitMQ úgyis persistent minden üzenetet memóriában tart. Ha architektúra review-n indokolod, a kiinduló tétel: Headers exchange a leggyakoribb pub/sub megoldás; direct exchange csak RPC-hoz. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a run.

### Kérdés 16: Mikor válassz Kafkát és mikor RabbitMQ-t?

**Hamis válasz 1:**  
Kafka = kis üzenetmennyiség, RPC-szerű request-reply; RabbitMQ = nagy event stream, több független fogyasztó, replay. .NET-ben mindig RabbitMQ, mert a MassTransit csak azt támogatja. Ennek az az oka, hogy kafka = kis üzenetmennyiség, RPC-szerű request-reply; RabbitMQ = nagy event stream, több független fogyasztó, replay — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Ha audit kell, RabbitMQ, mert az üzenet ack után is megmarad a logban. Kafka-t csak akkor válaszd, ha nem kell sorrend és retention. A „Mikor válassz Kafkát és mikor RabbitMQ-t" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy ha audit kell, RabbitMQ, mert az üzenet ack után is megmarad a logban. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja.

**Hamis válasz 3:**  
A választást az application rétegben hardcode-olt `KafkaProducer` osztályok döntik el szolgáltatásonként; absztrakció felesleges, mert a két broker API-ja azonos. Ha architektúra review-n indokolod, a kiinduló tétel: A választást az application rétegben hardcode-olt `KafkaProducer` osztályok döntik el szolgáltatásonként; absztrakció felesleges, mert a két broker API-ja azonos. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens.

### Kérdés 17: MassTransit: mi a különbség a Publish és a Send között?

**Hamis válasz 1:**  
`Publish` egy konkrét queue-ra küld parancsot; `Send` broadcast minden subscribernek. Esemény = imperative ige (`PlaceOrder`), parancs = múlt idő (`OrderPlaced`). Ennek az az oka, hogy `Publish` egy konkrét queue-ra küld parancsot; `Send` broadcast minden subscribernek — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretn.

**Hamis válasz 2:**  
Send és Publish ugyanaz MassTransit 8-ban; a különbség csak a NuGet package verzió. Mindkettő guaranteed exactly-once a broker oldalon. A „MassTransit: mi a különbség a Publish és a Send között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy send és Publish ugyanaz MassTransit 8-ban; a különbség csak a NuGet package verzió. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Publish-ot használd, ha egyetlen consumer dolgozza fel; Send-et, ha több érdeklődő van. A domain entitást közvetlenül küldd üzenetként, hogy ne kelljen mapping. Ha architektúra review-n indokolod, a kiinduló tétel: Publish-ot használd, ha egyetlen consumer dolgozza fel; Send-et, ha több érdeklődő van. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szok.

### Kérdés 18: Hogyan működik a MassTransit saga state machine?

**Hamis válasz 1:**  
A saga state machine in-memory állapot, nincs perzisztencia; minden restart után a folyamat elölről indul. Korreláció = random GUID minden üzenetben, nem kell egyeznie. Ennek az az oka, hogy a saga state machine in-memory állapot, nincs perzisztencia; minden restart után a folyamat elölről indul — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal .

**Hamis válasz 2:**  
Automatonymous = minden lépés automatikusan kompenzálódik EF `SaveChanges` rollback-kel. Timeout nem kell, mert a broker garantálja a kézbesítést 30 mp-en belül. A „Hogyan működik a MassTransit saga state machine" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy automatonymous = minden lépés automatikusan kompenzálódik EF `SaveChanges` rollback-kel. Interjúban érdemes a döntést trade-of.

**Hamis válasz 3:**  
A state machine tárolja a teljes aggregate gráfot JSON-ban a saga táblában, hogy ne kelljen újrahívni a szolgáltatásokat. Párhuzamos üzeneteknél utolsó nyer (`LastWriteWins`), RowVersion felesleges. Ha architektúra review-n indokolod, a kiinduló tétel: A state machine tárolja a teljes aggregate gráfot JSON-ban a saga táblában, hogy ne kelljen újrahívni a szolgáltatásokat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 19: MassTransit hibakezelés: retry vs. redelivery vs. error queue?

**Hamis válasz 1:**  
Retry = üzenet törlése és újraküldése másik topicba manuálisan. Redelivery = consumerben `catch { }` üresen, így sikeresnek látszik. Error queue csak developmentben kell. Ennek az az oka, hogy retry = üzenet törlése és újraküldése másik topicba manuálisan — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még a.

**Hamis válasz 2:**  
Validációs hibánál mindig 10 retry azonnal, mert lehet, hogy a második próbára jó lesz az adat. Circuit breaker = consumer leállítása örökre első hiba után. A „MassTransit hibakezelés: retry vs. redelivery vs. error queue" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy validációs hibánál mindig 10 retry azonnal, mert lehet, hogy a második próbára jó lesz az adat.

**Hamis válasz 3:**  
Delayed redelivery = azonnali újrapróbálkozás ugyanabban a szálban; error queue = `_skipped` topic, ahonnan az üzenetek automatikusan visszakerülnek 1 perc múlva. Ha architektúra review-n indokolod, a kiinduló tétel: Delayed redelivery = azonnali újrapróbálkozás ugyanabban a szálban; error queue = `_skipped` topic, ahonnan az üzenetek automatikusan visszakerülnek 1 perc múlva. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 20: Hogyan oldod meg, hogy háttérjob ne fusson le többször több példányon?

**Hamis válasz 1:**  
Elég egy `static bool _isRunning` flag az alkalmazásban; minden pod ugyanazt a memóriát látja Kubernetesben. BackgroundService alapból cluster-aware. Ennek az az oka, hogy elég egy `static bool _isRunning` flag az alkalmazásban; minden pod ugyanazt a memóriát látja Kubernetesben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Quartz.NET minden példányon ugyanabban az időpontban fut, de az adatbázis unique constraint megakadályozza a duplikált sort — lock nem kell. K8s CronJob mindig minden replikán lefut párhuzamosan szándékosan. A „Hogyan oldod meg, hogy háttérjob ne fusson le többször több példányon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy quartz.NET minden példányon ugyanabban az időpontban fut, de.

**Hamis válasz 3:**  
Redis RedLock helyett elég a `Thread.Sleep` random 0-5 mp a job elején; statisztikusan csak egy példány nyer. Idempotencia felesleges, ha van lock. Ha architektúra review-n indokolod, a kiinduló tétel: Redis RedLock helyett elég a `Thread.Sleep` random 0-5 mp a job elején; statisztikusan csak egy példány nyer.

### Kérdés 21: Mit ad az OpenTelemetry .NET-ben, és hogyan tartsd össze a trace-t brokeren át?

**Hamis válasz 1:**  
OpenTelemetry csak logokat gyűjt; trace = Serilog enricher. Brokeren át a trace automatikusan utazik, ha ugyanazt a connection stringet használod SQL-ben és Kafkán. Ennek az az oka, hogy openTelemetry csak logokat gyűjt; trace = Serilog enricher — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Trace összekötés = ugyanaz a `CorrelationId` string a logban elég, `traceparent` header felesleges HTTP-n. Kafka-nál az offset a span ID. A „Mit ad az OpenTelemetry .NET-ben, és hogyan tartsd össze a trace-t brokeren át" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy trace összekötés = ugyanaz a `CorrelationId` string a logban elég, `traceparent` header felesleges HTTP-n.

**Hamis válasz 3:**  
Minden span attribútumba tedd a userId-t és orderId-t is, hogy könnyen szűrj productionben. Sampling = minden kérést 100%-ban mintázz, különben elvesznek a trace-ek. Ha architektúra review-n indokolod, a kiinduló tétel: Minden span attribútumba tedd a userId-t és orderId-t is, hogy könnyen szűrj productionben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűni.

### Kérdés 22: Mi az SLI, SLO és error budget, és hogyan riassz?

**Hamis válasz 1:**  
SLI = a marketing által várt uptime százalék; SLO = tényleges mérés Grafana-ban; error budget = ha elfogy, leállítod a deploy-t örökre. Riasztás = email minden 404-es kérésnél. Ennek az az oka, hogy sLI = a marketing által várt uptime százalék; SLO = tényleges mérés Grafana-ban; error budget = ha elfogy, leállítod a deploy-t örökre — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként.

**Hamis válasz 2:**  
SLO-t csak backend fejlesztő írja egy Excelben évente; SLI automatikusan 99.99%, ha K8s-et használsz. Error budget = nincs ilyen, ha van retry policy. A „Mi az SLI, SLO és error budget, és hogyan riassz" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy sLO-t csak backend fejlesztő írja egy Excelben évente; SLI automatikusan 99.99%, ha K8s-et használsz.

**Hamis válasz 3:**  
Riasztást a CPU > 50%-nál indítod burn rate helyett; multi-window felesleges. SLI mindig latency p99; availability nem mérhető mikroszolgáltatásnál. Ha architektúra review-n indokolod, a kiinduló tétel: Riasztást a CPU > 50%-nál indítod burn rate helyett; multi-window felesleges. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalako.

### Kérdés 23: Hogyan vidd végig a Correlation ID-t API → üzenet → worker úton?

**Hamis válasz 1:**  
Correlation ID = új GUID minden szolgáltatásban generálva, hogy ne keveredjen össze. HTTP header nem kell, elég a log fájl nevében tárolni. Ennek az az oka, hogy correlation ID = új GUID minden szolgáltatásban generálva, hogy ne keveredjen össze — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionbe.

**Hamis válasz 2:**  
Az API generálja, a worker nem kapja meg; helyette timestamp alapján keresed össze a logokat. MassTransit automatikusan cseréli új ID-ra minden Publish-nál. A „Hogyan vidd végig a Correlation ID-t API → üzenet → worker úton" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy az API generálja, a worker nem kapja meg; helyette timestamp alapján keresed össze a logokat.

**Hamis válasz 3:**  
Correlation ID csak frontend session cookie; backend és worker külön trace rendszert használ. Üzenet headerbe elég a machine name. Ha architektúra review-n indokolod, a kiinduló tétel: Correlation ID csak frontend session cookie; backend és worker külön trace rendszert használ. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 24: Polly v8 / Microsoft.Extensions.Resilience: mi a standard pipeline sorrendje?

**Hamis válasz 1:**  
Standard sorrend: Circuit Breaker → Retry → Timeout → Hedging. Retry mindig végtelen számú, timeout opcionális. Ennek az az oka, hogy standard sorrend: Circuit Breaker → Retry → Timeout → Hedging — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Polly v8-ban nincs pipeline, minden policy külön `HttpClient`-en van. Hedging = ugyanaz a kérés egyszer megy, dupla nem engedélyezett. A „Polly v8 / Microsoft.Extensions.Resilience: mi a standard pipeline sorrendje" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy polly v8-ban nincs pipeline, minden policy külön `HttpClient`-en van. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elv.

**Hamis válasz 3:**  
Timeout → Retry → Circuit Breaker a helyes sorrend, mert előbb várunk, aztán próbálkozunk. Rate limiter a pipeline végén, fallback a elején. Ha architektúra review-n indokolod, a kiinduló tétel: Timeout → Retry → Circuit Breaker a helyes sorrend, mert előbb várunk, aztán próbálkozunk. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor i.

### Kérdés 25: Milyen rugalmassági minták kellenek a circuit breakeren túl?

**Hamis válasz 1:**  
Circuit breakeren túl csak retry kell; bulkhead, timeout, hedging ugyanaz. Chaos engineering = productionben random pod kill minden deploy után kötelező. Ennek az az oka, hogy circuit breakeren túl csak retry kell; bulkhead, timeout, hedging ugyanaz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátám.

**Hamis válasz 2:**  
Fallback mindig = cache-ből stale adat usernek értesítés nélkül. Rate limiting és circuit breaker ellentmondás, csak egyet használj. A „Milyen rugalmassági minták kellenek a circuit breakeren túl" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy fallback mindig = cache-ből stale adat usernek értesítés nélkül. Interjúban érdemes a döntést trade-offok.

**Hamis válasz 3:**  
Rugalmasság = több replica ugyanazt a sync hívást indítja párhuzamosan (race); nyertes választ adja vissza. Idempotencia nem tartozik a resilience-hez. Ha architektúra review-n indokolod, a kiinduló tétel: Rugalmasság = több replica ugyanazt a sync hívást indítja párhuzamosan (race); nyertes választ adja vissza. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 26: Mi a BFF és az API Gateway különbsége? Hol jön be a YARP?

**Hamis válasz 1:**  
BFF = backend for frontend, azaz ugyanaz, mint az API Gateway, csak más név. YARP = YAML-alapú API Gateway AWS-en; .NET-ben nem használható. Ennek az az oka, hogy bFF = backend for frontend, azaz ugyanaz, mint az API Gateway, csak más név — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
API Gateway aggregálja a mobil UI-hoz szükséges adatokat; BFF csak TLS terminál. YARP helyett mindig nginx config a podban. A „Mi a BFF és az API Gateway különbsége? Hol jön be a YARP" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aPI Gateway aggregálja a mobil UI-hoz szükséges adatokat; BFF csak TLS terminál. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály a.

**Hamis válasz 3:**  
BFF minden klienshez külön microservice a domain logikával; Gateway csak statikus fájlokat szolgál. YARP = reverse proxy, nem támogat auth middleware-t. Ha architektúra review-n indokolod, a kiinduló tétel: BFF minden klienshez külön microservice a domain logikával; Gateway csak statikus fájlokat szolgál. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon co.

### Kérdés 27: Mi az Aggregator pattern, és miben különbözik a BFF-től / Gateway-től?

**Hamis válasz 1:**  
Aggregator = GraphQL resolver egy monolitban; BFF = REST controller. Gateway mindig aggregál, BFF soha. Ennek az az oka, hogy aggregator = GraphQL resolver egy monolitban; BFF = REST controller — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Aggregator pattern = frontend fetch hívások összefűzése JavaScriptben; backend pattern nem. Különbség a BFF-től: nincs, ugyanaz a szerep. A „Mi az Aggregator pattern, és miben különbözik a BFF-től / Gateway-től" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aggregator pattern = frontend fetch hívások összefűzése JavaScriptben; backend pattern nem. Interjúban érdemes a döntést trade-offokkal.

**Hamis válasz 3:**  
Aggregator a domain rétegben fut minden microservice-ben külön; BFF csak CDN. Gateway = service mesh sidecar automatikusan aggregál minden kérést. Ha architektúra review-n indokolod, a kiinduló tétel: Aggregator a domain rétegben fut minden microservice-ben külön; BFF csak CDN. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még ak.

### Kérdés 28: Mi az Anti-Corruption Layer, és hol helyezed el?

**Hamis válasz 1:**  
ACL = firewall a K8s NetworkPolicy neve; a domain rétegbe kerül, hogy blokkolja a SQL injectiont. Legacy rendszerrel közvetlenül oszd meg az entitás osztályokat, gyorsabb. Ennek az az oka, hogy aCL = firewall a K8s NetworkPolicy neve; a domain rétegbe kerül, hogy blokkolja a SQL injectiont — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztan.

**Hamis válasz 2:**  
Anti-Corruption Layer = AutoMapper profile a controllerben; elég a DTO-k között mapelni. Legacy API-t hívd közvetlenül a domain service-ből, ACL felesleges wrapper. A „Mi az Anti-Corruption Layer, és hol helyezed el" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy anti-Corruption Layer = AutoMapper profile a controllerben; elég a DTO-k között mapelni. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
ACL csak frontendben van (adapter pattern Reactben); backend nem izolálja a legacy modellt. Helye: infrastructure, de ugyanazokat a NuGet entitásokat használja, mint a legacy. Ha architektúra review-n indokolod, a kiinduló tétel: ACL csak frontendben van (adapter pattern Reactben); backend nem izolálja a legacy modellt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding gu.

### Kérdés 29: Hogyan működik a Strangler Fig migráció?

**Hamis válasz 1:**  
Strangler Fig = egy éjszaka big-bang cutover: leállítod a legacy-t, bekapcsolod az újat. Nincs routing szintű fokozatos átállás. Ennek az az oka, hogy strangler Fig = egy éjszaka big-bang cutover: leállítod a legacy-t, bekapcsolod az újat — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
Minden funkciót egyszerre migrálsz, mert a routing réteg nem tud részleges trafficet irányítani. YARP és API Gateway nem alkalmas stranglerhez. A „Hogyan működik a Strangler Fig migráció" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy minden funkciót egyszerre migrálsz, mert a routing réteg nem tud részleges trafficet irányítani. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűn.

**Hamis válasz 3:**  
Strangler = új microservice hívja a legacy-t sync-ben minden kérésnél örökre; a legacy sosem kerül kivonásra. Feature flag helyett mindig 100% az új útvonal. Ha architektúra review-n indokolod, a kiinduló tétel: Strangler = új microservice hívja a legacy-t sync-ben minden kérésnél örökre; a legacy sosem kerül kivonásra.

### Kérdés 30: Modular monolith vs. mikroszolgáltatás – mikor melyik?

**Hamis válasz 1:**  
Modular monolith csak proof-of-concept; élesben mindig microservice, különben nem skálázódik. Monolith = egy fájl, nincs modulhatár. Ennek az az oka, hogy modular monolith csak proof-of-concept; élesben mindig microservice, különben nem skálázódik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance fo.

**Hamis válasz 2:**  
Microservice mindig olcsóbb operációban kevesebb csapattal. Modular monolith akkor jó, ha 50+ független deploy csapat van. A „Modular monolith vs. mikroszolgáltatás – mikor melyik" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy microservice mindig olcsóbb operációban kevesebb csapattal. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Döntés = ha van Kubernetes, microservice; ha nincs, monolith. Domain komplexitás nem számít, csak a container count. Ha architektúra review-n indokolod, a kiinduló tétel: Döntés = ha van Kubernetes, microservice; ha nincs, monolith. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 31: Milyen adatbázis-stratégiákat ismersz mikroszolgáltatásoknál?

**Hamis válasz 1:**  
Database per service = minden szolgáltatás ugyanazt a shared PostgreSQL schema-t használja külön connection stringgel. CQRS olvasás mindig ugyanabból a táblából sync-ben. Ennek az az oka, hogy database per service = minden szolgáltatás ugyanazt a shared PostgreSQL schema-t használja külön connection stringgel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani.

**Hamis válasz 2:**  
Shared database a best practice, mert JOIN-olhatsz szolgáltatások között SQL-ben. Eventual consistency = minden olvasás master DB-ről tranzakcióval. A „Milyen adatbázis-stratégiákat ismersz mikroszolgáltatásoknál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy shared database a best practice, mert JOIN-olhatsz szolgáltatások között SQL-ben. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Database per service csak akkor kell, ha MongoDB-t használsz; SQL-nél egy central DB olcsóbb és gyorsabb minden esetben. Ha architektúra review-n indokolod, a kiinduló tétel: Database per service csak akkor kell, ha MongoDB-t használsz; SQL-nél egy central DB olcsóbb és gyorsabb minden esetben.

### Kérdés 32: Hogyan tervezel multi-tenancy-t .NET-ben?

**Hamis válasz 1:**  
Multi-tenancy = minden tenant külön Kubernetes cluster; shared schema sosem biztonságos. Tenant ID-t soha ne tedd query filterbe, csak logba. Ennek az az oka, hogy multi-tenancy = minden tenant külön Kubernetes cluster; shared schema sosem biztonságos — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még ak.

**Hamis válasz 2:**  
Egy adatbázis, nincs tenant oszlop; a tenantot a JWT issuer URL-ből találod ki runtime-ban memóriában. Row-level security felesleges SQL-ben. A „Hogyan tervezel multi-tenancy-t .NET-ben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy adatbázis, nincs tenant oszlop; a tenantot a JWT issuer URL-ből találod ki runtime-ban memóriában. Interjúban érdemes a döntést .

**Hamis válasz 3:**  
Database-per-tenant helyett mindig egy globális admin connection minden tenant adatához; EF global filter automatikusan kikapcsol productionben teljesítmény miatt. Ha architektúra review-n indokolod, a kiinduló tétel: Database-per-tenant helyett mindig egy globális admin connection minden tenant adatához; EF global filter automatikusan kikapcsol productionben teljesítmény miatt. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 33: Mire jók a feature flagek, és milyen csapdáik vannak?

**Hamis válasz 1:**  
Feature flag = appsettings.json-ben hardcoded bool, deploy kell váltáshoz. Csapda: túl sok flag javítja a kód olvashatóságát, nincs más hátrány. Ennek az az oka, hogy feature flag = appsettings.json-ben hardcoded bool, deploy kell váltáshoz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Flag-ek helyett mindig külön branch élesben; merge után automatikusan minden usernek bekapcsol minden. Kill switch = pod restart. A „Mire jók a feature flagek, és milyen csapdáik vannak" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy flag-ek helyett mindig külön branch élesben; merge után automatikusan minden usernek bekapcsol minden. Interjúban érdemes a döntést trade-.

**Hamis válasz 3:**  
Feature flag csak frontendre való; backend nem támogatja a LaunchDarkly-t .NET-ben. Csapda: flag-et sosem takarítsd ki, maradjon örökre a kódban dokumentációként. Ha architektúra review-n indokolod, a kiinduló tétel: Feature flag csak frontendre való; backend nem támogatja a LaunchDarkly-t .NET-ben.

### Kérdés 34: Hogyan validálod a konfigurációt és kezeled a titkokat élesben?

**Hamis válasz 1:**  
Titkok = appsettings.Production.json a git repo-ban, mert privát. Validáció = futásidőben derül ki, ha null a connection string. Ennek az az oka, hogy titkok = appsettings.Production.json a git repo-ban, mert privát — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
`IOptions` elég, `ValidateOnStart` lassítja az indulást feleslegesen. Azure Key Vault helyett environment variable minden titokhoz plain textben a Dockerfile-ban. A „Hogyan validálod a konfigurációt és kezeled a titkokat élesben" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy `IOptions` elég, `ValidateOnStart` lassítja az indulást feleslegesen.

**Hamis válasz 3:**  
Konfiguráció validálás = Swagger ellenőrzi a endpointokat. Secret rotation = évente egyszer manuális commit. Ha architektúra review-n indokolod, a kiinduló tétel: Konfiguráció validálás = Swagger ellenőrzi a endpointokat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még .

### Kérdés 35: Optimista vs. pesszimista konkurencia – mikor melyik, és hogyan throttle-ölj?

**Hamis válasz 1:**  
Pesszimista = mindig gyorsabb web API-n; optimista csak batch jobokhoz. Throttle = `lock()` az egész controlleren. Ennek az az oka, hogy pesszimista = mindig gyorsabb web API-n; optimista csak batch jobokhoz — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiz.

**Hamis válasz 2:**  
Optimista konkurencia = SQL `SELECT FOR UPDATE` minden olvasásnál; pesszimista = RowVersion nélkül LastWriteWins. Throttle felesleges, ha van lock. A „Optimista vs. pesszimista konkurencia – mikor melyik, és hogyan throttle-ölj" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy optimista konkurencia = SQL `SELECT FOR UPDATE` minden olvasásnál; pesszimista = RowVersion nélkül LastWriteWins. Interjúban érdemes a döntést trad.

**Hamis válasz 3:**  
Pénzügyi műveletnél mindig optimista, mert kevesebb DB roundtrip. Throttle = unlimited parallel request, a DB majd visszautasít. Ha architektúra review-n indokolod, a kiinduló tétel: Pénzügyi műveletnél mindig optimista, mert kevesebb DB roundtrip. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 36: ValueTask, thread pool starvation, fire-and-forget – mik a senior szintű csapdák?

**Hamis válasz 1:**  
ValueTask mindig sync-ben fut, nincs allocation — minden async metódust ValueTask-re cserélj. Fire-and-forget = `_ = Task.Run()` controllerben, GC megoldja a hibákat. Ennek az az oka, hogy valueTask mindig sync-ben fut, nincs allocation — minden async metódust ValueTask-re cserélj — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Thread pool starvation csak Linuxon van; Windows IIS nem használ thread poolt. `.GetAwaiter().GetResult()` biztonságos middleware-ben. A „ValueTask, thread pool starvation, fire-and-forget – mik a senior szintű csapdák" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy thread pool starvation csak Linuxon van; Windows IIS nem használ thread poolt. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Fire-and-forget background work = `async void` event handler a singleton service-ben; nincs szükség scope-ra vagy cancellation tokenre. Ha architektúra review-n indokolod, a kiinduló tétel: Fire-and-forget background work = `async void` event handler a singleton service-ben; nincs szükség scope-ra vagy cancellation tokenre. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

### Kérdés 37: Mit ad a Testcontainers, a contract testing és az architektúra teszt a piramisban?

**Hamis válasz 1:**  
Testcontainers = Docker nélkül mock SQL in-memory; contract test = unit test Moq-kal; architektúra teszt felesleges, ha van code review. Ennek az az oka, hogy testcontainers = Docker nélkül mock SQL in-memory; contract test = unit test Moq-kal; architektúra teszt felesleges, ha van code review — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámaszta.

**Hamis válasz 2:**  
A piramis helyett minden E2E Selenium a production URL-en; Testcontainers túl lassú. Pact consumer-driven = csak frontend és backend között, microservice-ekre nem. A „Mit ad a Testcontainers, a contract testing és az architektúra teszt a piramisban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy a piramis helyett minden E2E Selenium a production URL-en; Testcontainers túl lassú. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály a.

**Hamis válasz 3:**  
Architektúra teszt = `[Fact]` ami ellenőrzi, hogy van-e README. Contract testing helyett shared NuGet DTO elég, verzió nélkül. Ha architektúra review-n indokolod, a kiinduló tétel: Architektúra teszt = `[Fact]` ami ellenőrzi, hogy van-e README. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 38: Docker multi-stage és K8s probe-ok – mi a .NET szempontból kritikus?

**Hamis válasz 1:**  
Multi-stage = egy stage, benne SDK és runtime egyszerre, kisebb image. Liveness probe = `/swagger`, readiness = `/`, mindkettő ugyanaz. Ennek az az oka, hogy multi-stage = egy stage, benne SDK és runtime egyszerre, kisebb image — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
.NET konténerben mindig root user kell EF migrációhoz. Startup probe felesleges, mert .NET 8 instant start. Readiness fail = pod törlése azonnal minden hiba esetén. A „Docker multi-stage és K8s probe-ok – mi a .NET szempontból kritikus" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy .NET konténerben mindig root user kell EF migrációhoz. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Health check endpoint ne függjön DB-től, mert lassú; readiness mindig 200 OK fixed stringgel. Multi-stage buildben ne használj `dotnet publish -c Release`-t. Ha architektúra review-n indokolod, a kiinduló tétel: Health check endpoint ne függjön DB-től, mert lassú; readiness mindig 200 OK fixed stringgel. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik.

### Kérdés 39: Hogyan futtatsz EF migrációt éles CI/CD-ben nulla leállással?

**Hamis válasz 1:**  
Migráció = `EnsureCreated()` app startkor minden podon párhuzamosan; nulla downtime, mert K8s rolling update. Breaking schema change = drop column élesben azonnal. Ennek az az oka, hogy migráció = `EnsureCreated()` app startkor minden podon párhuzamosan; nulla downtime, mert K8s rolling update — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-.

**Hamis válasz 2:**  
Migrációt manuálisan SSMS-ből futtatod deploy előtt; CI/CD nem ismer migrációt. Expand-contract felesleges, big-bang ALTER mindig működik online. A „Hogyan futtatsz EF migrációt éles CI/CD-ben nulla leállással" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy migrációt manuálisan SSMS-ből futtatod deploy előtt; CI/CD nem ismer migrációt. Interjúban érdemes a döntést trade-off.

**Hamis válasz 3:**  
Nulla leállás = migráció csak maintenance window-ban, app leállítással; ez a zero downtime .NET-ben. Backward compatible deploy = ugyanaz a migration mindkét verzióval incompatible. Ha architektúra review-n indokolod, a kiinduló tétel: Nulla leállás = migráció csak maintenance window-ban, app leállítással; ez a zero downtime .NET-ben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra,.

### Kérdés 40: Mi szerepel egy senior API biztonsági checklisten (PII, zero trust, mTLS)?

**Hamis válasz 1:**  
PII = logold minden request body-t debug szinten productionben. Zero trust = mindenki VPN-en belül megbízható, mTLS felesleges internal hálózaton. Ennek az az oka, hogy pII = logold minden request body-t debug szinten productionben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus produc.

**Hamis válasz 2:**  
mTLS = csak public internet felé kliens tanúsítvány; service-to-service elég shared API key query stringben. PII maszkolás = ne csináld, nehezebb debug. A „Mi szerepel egy senior API biztonsági checklisten (PII, zero trust, mTLS)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy mTLS = csak public internet felé kliens tanúsítvány; service-to-service elég shared API key query stringben. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály a.

**Hamis válasz 3:**  
Checklist: JWT secret a README-ben, CORS `*`, rate limit nincs internal API-n. Zero trust = firewall rule egyszer beállítva örökre. Ha architektúra review-n indokolod, a kiinduló tétel: Checklist: JWT secret a README-ben, CORS `*`, rate limit nincs internal API-n. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág j.

### Kérdés 41: Rich vs. anemic domain, aggregátumhatárok – mit vár el a DDD?

**Hamis válasz 1:**  
Anemic domain a DDD ajánlott stílusa: logika a service rétegben, entitás csak property. Aggregátum = egy SQL tábla = egy aggregátum, határ nincs. Ennek az az oka, hogy anemic domain a DDD ajánlott stílusa: logika a service rétegben, entitás csak property — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Rich domain = minden property public set; invariant csak FluentValidation a controllerben. Aggregátumok között mindig közvetlen EF Include a másik rootra. A „Rich vs. anemic domain, aggregátumhatárok – mit vár el a DDD" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy rich domain = minden property public set; invariant csak FluentValidation a controllerben. Interjúban érdemes a döntést trade-offokka.

**Hamis válasz 3:**  
Bounded context = egy microservice = egy controller fájl. Domain event = entitás SaveChanges előtt küldi ki magától a Kafka-t. Ha architektúra review-n indokolod, a kiinduló tétel: Bounded context = egy microservice = egy controller fájl. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 42: Native AOT, trimming, benchmark – mit kell tudni senior szinten?

**Hamis válasz 1:**  
Native AOT = minden ASP.NET Core app alapértelmezett .NET 8-ban, reflection mindig működik. Trimming = opcionális, csak console appokhoz. Ennek az az oka, hogy native AOT = minden ASP.NET Core app alapértelmezett .NET 8-ban, reflection mindig működik — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat, noha tartalmi.

**Hamis válasz 2:**  
Benchmark = `[Fact]` stopwatch Console.WriteLine-nel elég; BenchmarkDotNet production overhead. AOT helyett mindig JIT, mert gyorsabb cold start mindig. A „Native AOT, trimming, benchmark – mit kell tudni senior szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy benchmark = `[Fact]` stopwatch Console.WriteLine-nel elég; BenchmarkDotNet production overhead. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Trimming biztonságos EF Core + Swagger + MassTransit stackkel együtt, nincs annotáció szükség. Native AOT API-nál minden middleware támogatott out of the box. Ha architektúra review-n indokolod, a kiinduló tétel: Trimming biztonságos EF Core + Swagger + MassTransit stackkel együtt, nincs annotáció szükség. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a.

### Kérdés 43: Channels és IAsyncEnumerable – mikor melyiket, és mi a csapda?

**Hamis válasz 1:**  
Channels = IAsyncEnumerable alias .NET 8-ban; ugyanaz a API. Csapda: mindkettő blocking sync enumerálással a legjobb teljesítmény. Ennek az az oka, hogy channels = IAsyncEnumerable alias .NET 8-ban; ugyanaz a API — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy.

**Hamis válasz 2:**  
IAsyncEnumerable mindig backpressure-t ad automatikusan; Channel nem. Producer-consumer-hez mindig List<T> + lock. A „Channels és IAsyncEnumerable – mikor melyiket, és mi a csapda" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy iAsyncEnumerable mindig backpressure-t ad automatikusan; Channel nem. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Channel unbounded mindig jobb, mert sosem blokkol; IAsyncEnumerable csak fájl olvasáshoz, streamelés API-hoz REST polling kell. Ha architektúra review-n indokolod, a kiinduló tétel: Channel unbounded mindig jobb, mert sosem blokkol; IAsyncEnumerable csak fájl olvasáshoz, streamelés API-hoz REST polling kell.

### Kérdés 44: Duende IdentityServer / saját IdP – hogyan hitelesítesz szolgáltatások között?

**Hamis válasz 1:**  
Service-to-service = ugyanaz a user JWT megy tovább minden hopnál módosítás nélkül; audience check felesleges. Duende csak human loginhoz, M2M-hez shared password. Ennek az az oka, hogy service-to-service = ugyanaz a user JWT megy tovább minden hopnál módosítás nélkül; audience check felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is alátámaszta.

**Hamis válasz 2:**  
Saját IdP = minden microservice kiadja a saját JWT-jét HS256 secret-tel appsettings-ből. Client credentials flow = frontend SPA-ból hívható public clienttel. A „Duende IdentityServer / saját IdP – hogyan hitelesítesz szolgáltatások között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy saját IdP = minden microservice kiadja a saját JWT-jét HS256 secret-tel appsettings-ből. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API.

**Hamis válasz 3:**  
M2M auth = IP whitelist a load balanceren, token nem kell internal hálózaton. Duende IdentityServer helyett Basic auth minden service között elég. Ha architektúra review-n indokolod, a kiinduló tétel: M2M auth = IP whitelist a load balanceren, token nem kell internal hálózaton. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert.

### Kérdés 45: MassTransit EF Outbox – miért kapcsold be adatbázis-írással együtt?

**Hamis válasz 1:**  
EF Outbox = külön tranzakció a brokerrel XA-val; az adatbázis commit és a Publish külön fut párhuzamosan gyorsabb throughputért. Be kapcsolni csak olvasási műveleteknél kell. Ennek az az oka, hogy eF Outbox = külön tranzakció a brokerrel XA-val; az adatbázis commit és a Publish külön fut párhuzamosan gyorsabb throughputért — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definíciókén.

**Hamis válasz 2:**  
Outbox nélkül is atomi a SaveChanges + Publish, mert MassTransit transactional session minden brokerrel. Outbox csak RabbitMQ-hoz kell, Kafka-nál felesleges. A „MassTransit EF Outbox – miért kapcsold be adatbázis-írással együtt" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy outbox nélkül is atomi a SaveChanges + Publish, mert MassTransit transactional session minden brokerrel.

**Hamis válasz 3:**  
EF Outbox = üzeneteket DELETE-el a outbox táblából commit előtt; poller nem kell, azonnali push a brokernek HTTP webhookkal. Ha architektúra review-n indokolod, a kiinduló tétel: EF Outbox = üzeneteket DELETE-el a outbox táblából commit előtt; poller nem kell, azonnali push a brokernek HTTP webhookkal. Interjúban érdemes a döntést trade-offokkal.

### Kérdés 46: Mi a különbség az at-most-once, at-least-once és exactly-once között?

**Hamis válasz 1:**  
Exactly-once = Kafka alapbeállítás consumer group-pal; at-most-once = RabbitMQ default; at-least-once = csak manuális ack nélkül. Ennek az az oka, hogy exactly-once = Kafka alapbeállítás consumer group-pal; at-most-once = RabbitMQ default; at-least-once = csak manuális ack nélkül — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran cs.

**Hamis válasz 2:**  
At-least-once = üzenet sosem ismétlődik; at-most-once = mindig kétszer jön; exactly-once = Outbox nélkül is elérhető HTTP retry-val. A „Mi a különbség az at-most-once, at-least-once és exactly-once között" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy at-least-once = üzenet sosem ismétlődik; at-most-once = mindig kétszer jön; exactly-once = Outbox nélkül is elérhető HTTP retry-val. Interjúban érdemes a döntést trade-offokkal is.

**Hamis válasz 3:**  
Különbség csak elnevezés; mindhárom ugyanazt jelenti distributed rendszerben. Effectively-once = exactly-once broker szinten garantált. Ha architektúra review-n indokolod, a kiinduló tétel: Különbség csak elnevezés; mindhárom ugyanazt jelenti distributed rendszerben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 47: Hogyan kezeled a PII-t a naplókban és span attribútumokban?

**Hamis válasz 1:**  
PII = logold teljes email és TAJ számot trace-ben, hogy support gyorsan azonosítson. GDPR = csak EU-s szerver, log tartalom mindegy. Ennek az az oka, hogy pII = logold teljes email és TAJ számot trace-ben, hogy support gyorsan azonosítson — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Span attribútum = minden request header másolása automatikusan OTel-be. PII maszkolás = regex helyett base64 encode elég „titkosításnak”. A „Hogyan kezeled a PII-t a naplókban és span attribútumokban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy span attribútum = minden request header másolása automatikusan OTel-be. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Structured loggingnál a Serilog `{@User}` mindent kiír; retention örök, mert olcsó a storage. PII csak PDF exportnál számít, nem API logban. Ha architektúra review-n indokolod, a kiinduló tétel: Structured loggingnál a Serilog `{@User}` mindent kiír; retention örök, mert olcsó a storage. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásána.

### Kérdés 48: Zero trust mikroszolgáltatásoknál: mTLS, token-propagáció, NetworkPolicy – hogyan rakod össze?

**Hamis válasz 1:**  
Zero trust = mindenki megbízható a VPC-ben; mTLS csak extranet. NetworkPolicy = deny all default felesleges, mert service mesh lassú. Ennek az az oka, hogy zero trust = mindenki megbízható a VPC-ben; mTLS csak extranet — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt inte.

**Hamis válasz 2:**  
Token-propagáció = user JWT minden internal hívásban; service saját identity nem kell. mTLS helyett API key header elég pod-to-pod; NetworkPolicy wildcard allow all. A „Zero trust mikroszolgáltatásoknál: mTLS, token-propagáció, NetworkPolicy – hogyan rakod össze" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy token-propagáció = user JWT minden internal hívásb.

**Hamis válasz 3:**  
Zero trust összerakása: public ingress TLS + backend HTTP plain; token exchange sosem kell M2M-hez. Istio/service mesh kötelező zero trust nélkül is működik a modell. Ha architektúra review-n indokolod, a kiinduló tétel: Zero trust összerakása: public ingress TLS + backend HTTP plain; token exchange sosem kell M2M-hez. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is.

## Staff

### Kérdés 1: Mi az architektúra eróziója, és miért veszélyesebb, mint egy egyszeri „rossz döntés”?

**Hamis válasz 1:**  
Architektúra erózió = amikor a NuGet package-ek elavulnak és security patch kell. Egy rossz döntés mindig látványosabb outage-ot okoz, az erózió pedig csak kozmetikai code smell. Ennek az az oka, hogy architektúra erózió = amikor a NuGet package-ek elavulnak és security patch kell — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Erózió csak frontendre vonatkozik (CSS spaghetti); backend architektúra nem változik idővel, ha egyszer jól megtervezted. Staff szinten elég évente egyszer architektúra diagram frissítés. A „Mi az architektúra eróziója, és miért veszélyesebb, mint egy egyszeri „rossz döntés”" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy erózió csak frontendre vonatkozik (CSS spaghetti); backend architektúra nem változik idővel, ha egyszer jól megtervezted. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Az erózió = microservice-ek számának növekedése automatikusan; veszélyesebb a rossz döntés, mert azonnali rollback impossible. Megoldás: SOHA ne engedj kivételeket az architektúra szabályok alól, még POC-nál sem. Ha architektúra review-n indokolod, a kiinduló tétel: Az erózió = microservice-ek számának növekedése automatikusan; veszélyesebb a rossz döntés, mert azonnali rollback impossible. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásr.

### Kérdés 2: Mi az ADR szerepe egy nagyobb szervezetben, és mikor kell újraírni?

**Hamis válasz 1:**  
ADR = Architecture Decision Record, de csak audit célra kell; a fejlesztők nem olvassák. Újraírás = minden sprint végén automatikusan, mert minden döntés megváltozik. Ennek az az oka, hogy aDR = Architecture Decision Record, de csak audit célra kell; a fejlesztők nem olvassák — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
ADR helyett elég Slack thread pin; formális rekord lassítja a delivery-t. Újraírni soha, mert az eredeti döntés szent; ha rossz volt, új ADR helyett töröld a régit. A „Mi az ADR szerepe egy nagyobb szervezetben, és mikor kell újraírni" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aDR helyett elég Slack thread pin; formális rekord lassítja a delivery-t. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
ADR szerepe = Jira ticket leírásában egy mondat. Újraírás akkor kell, ha új manager jön, függetlenül a technikai valóságtól. Ha architektúra review-n indokolod, a kiinduló tétel: ADR szerepe = Jira ticket leírásában egy mondat. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 3: Milyen heurisztikákkal döntesz szolgáltatás-határról staff szinten?

**Hamis válasz 1:**  
Szolgáltatáshatár = minden controller egy microservice; bounded context = folder a solution explorerben. Conway törvénye: ignore, a manager struktúra nem számít. Ennek az az oka, hogy szolgáltatáshatár = minden controller egy microservice; bounded context = folder a solution explorerben — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Határ = ahol a legtöbb merge conflict van, ott vágd szét azonnal. DDD aggregate = mindig egy REST endpoint. Közös adatbázis = jó jel, hogy egy szolgáltatás elég. A „Milyen heurisztikákkal döntesz szolgáltatás-határról staff szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy határ = ahol a legtöbb merge conflict van, ott vágd szét azonnal. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Staff heurisztika: microservice count = developer headcount; 1 dev = 1 service minimum. Event storming felesleges, elég a tech lead intuíciója. Ha architektúra review-n indokolod, a kiinduló tétel: Staff heurisztika: microservice count = developer headcount; 1 dev = 1 service minimum. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág.

### Kérdés 4: Honnan ismered fel a distributed monolithot?

**Hamis válasz 1:**  
Distributed monolith = amikor csak egy microservice van; több service = automatikusan nem monolith. Felismerés: nincs ilyen, mert a microservice label garantálja a függetlenséget. Ennek az az oka, hogy distributed monolith = amikor csak egy microservice van; több service = automatikusan nem monolith — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Jelei: minden szolgáltatás külön adatbázissal és aszinkron üzenettel kommunikál; ha van Outbox, biztosan nem monolith. Sync REST hívás sosem jel distributed monolithot. A „Honnan ismered fel a distributed monolithot" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy jelei: minden szolgáltatás külön adatbázissal és aszinkron üzenettel kommunikál; ha van Outbox, biztosan nem monolith. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Distributed monolith = monolith Dockerben; felismerés: ha ugyanaz a git repo, az distributed monolith. Megoldás: több repo ugyanazzal a shared DB-vel. Ha architektúra review-n indokolod, a kiinduló tétel: Distributed monolith = monolith Dockerben; felismerés: ha ugyanaz a git repo, az distributed monolith. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 5: Mikor NE válassz mikroszolgáltatásokat, és miért Modular Monolith?

**Hamis válasz 1:**  
Microservice mindig jobb 10+ fejlesztőnél; modular monolith csak hobby projektekhez. NE válaszd a microservice-t, ha van Kubernetes — túl egyszerű lenne. Ennek az az oka, hogy microservice mindig jobb 10+ fejlesztőnél; modular monolith csak hobby projektekhez — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off.

**Hamis válasz 2:**  
Modular monolith akkor rossz, ha stabil domain és kis csapat; ilyenkor microservice. NE microservice, ha gyorsan kell skálázni egyetlen endpointot — monolith nem skálázódik horizontálisan. A „Mikor NE válassz mikroszolgáltatásokat, és miért Modular Monolith" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy modular monolith akkor rossz, ha stabil domain és kis csapat; ilyenkor microservice. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Döntés: startup = 50 microservice day one, később monolithra konszolidálás. Modular monolith = nincs modulhatár enforcement, csak naming convention. Ha architektúra review-n indokolod, a kiinduló tétel: Döntés: startup = 50 microservice day one, később monolithra konszolidálás. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és.

### Kérdés 6: Hogyan kényszeríted ki a modulhatárokat modular monolithban?

**Hamis válasz 1:**  
Modulhatár = `[Internal]` keyword elég; architektúra teszt felesleges. Modulok között szabad a közvetlen EF DbContext injektálás másik modul entitására. Ennek az az oka, hogy modulhatár = `[Internal]` keyword elég; architektúra teszt felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Enforcement = code review checklist papíron; NetArchTest csak unit teszt projektben opcionális. Public API = minden osztály public a modulban. A „Hogyan kényszeríted ki a modulhatárokat modular monolithban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy enforcement = code review checklist papíron; NetArchTest csak unit teszt projektben opcionális. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Kényszerítés: külön solution file modulonként ugyanabban a repo-ban, de shared projekt reference mindenre. Vertical slice = horizontális rétegek modul helyett. Ha architektúra review-n indokolod, a kiinduló tétel: Kényszerítés: külön solution file modulonként ugyanabban a repo-ban, de shared projekt reference mindenre. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is, ha a trade-off nem triviális.

### Kérdés 7: Magyarázd el a CAP-tételt úgy, ahogy éles rendszerben döntést hozol!

**Hamis válasz 1:**  
Éles döntés: mindig C+A+P egyszerre, cloud provider garantálja. Partíció = sosem történik Azure-on; CAP csak elméleti interview kérdés. Ennek az az oka, hogy éles döntés: mindig C+A+P egyszerre, cloud provider garantálja — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Partíció alatt mindig availability, mert a user nem várhat; pénzügyi rendszer is stale balance-t mutat inkább, mint error page-et. CP rendszert sosem építünk. A „Magyarázd el a CAP-tételt úgy, ahogy éles rendszerben döntést hozol!" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy partíció alatt mindig availability, mert a user nem várhat; pénzügyi rendszer is stale balance-t mutat inkább, mint error page-et. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Staff döntés: egy globális CAP választás az egész platformra; minden service AP vagy mind CP. PACELC = marketing kifejezés, nem befolyásolja a design-t. Ha architektúra review-n indokolod, a kiinduló tétel: Staff döntés: egy globális CAP választás az egész platformra; minden service AP vagy mind CP. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 8: Milyen konzisztencia-modelleket vár el staff szinten egy .NET platformtól?

**Hamis válasz 1:**  
Platform = mindenhol strong consistency sync REST-tel és shared DB-vel; eventual consistency tiltott. .NET platform nem támogat event-driven konzisztenciát natívan. Ennek az az oka, hogy platform = mindenhol strong consistency sync REST-tel és shared DB-vel; eventual consistency tiltott — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Egy konzisztencia modell elég: read uncommitted mindenhol gyorsaságért. Staff elvárás = LINQ `AsNoTracking` = distributed transaction. A „Milyen konzisztencia-modelleket vár el staff szinten egy .NET platformtól" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy egy konzisztencia modell elég: read uncommitted mindenhol gyorsaságért. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Konzisztencia = csak adatbázis szintű ACID; üzenetközi modell nem platform concern. CQRS read model mindig sync frissül a write DB triggerrel real-time. Ha architektúra review-n indokolod, a kiinduló tétel: Konzisztencia = csak adatbázis szintű ACID; üzenetközi modell nem platform concern. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivé.

### Kérdés 9: Miért kerülendő a 2PC mikroszolgáltatások között, és mi a gyakorlati recept?

**Hamis válasz 1:**  
2PC a legjobb microservice tranzakció, mert ACID; kerülendő csak, mert .NET nem támogatja XA-t. Recept = MSDTC minden Windows podon K8s-ben. Ennek az az oka, hogy 2PC a legjobb microservice tranzakció, mert ACID; kerülendő csak, mert .NET nem támogatja XA-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé v.

**Hamis válasz 2:**  
2PC helyett sync REST chain ugyanabban a request threadben timeout nélkül; ha egy elbukik, a többi automatikusan rollback HTTP status alapján. A „Miért kerülendő a 2PC mikroszolgáltatások között, és mi a gyakorlati recept" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy 2PC helyett sync REST chain ugyanabban a request threadben timeout nélkül; ha egy elbukik, a többi automatikusan rollback HTTP status alapján. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Gyakorlati recept: Saga = 2PC két fázissal átnevezve; Outbox/Inbox felesleges, ha RabbitMQ persistent. Kerülendő, mert lassú — de kis volumen mellett mindig 2PC. Ha architektúra review-n indokolod, a kiinduló tétel: Gyakorlati recept: Saga = 2PC két fázissal átnevezve; Outbox/Inbox felesleges, ha RabbitMQ persistent. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 10: Hogyan tervezel event store sémát és snapshot stratégiát?

**Hamis válasz 1:**  
Event store séma = egy JSON blob oszlop, verzió nélkül; snapshot = sosem, mindig full replay minden olvasásnál. Séma változás = UPDATE a régi eseményeken. Ennek az az oka, hogy event store séma = egy JSON blob oszlop, verzió nélkül; snapshot = sosem, mindig full replay minden olvasásnál — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
Snapshot minden eseménynél kötelező, különben Marten nem működik. Event type = .NET class full name, breaking change = rename class. A „Hogyan tervezel event store sémát és snapshot stratégiát" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy snapshot minden eseménynél kötelező, különben Marten nem működik. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Event store = ugyanaz a CRUD tábla `IsEvent` flaggel; snapshot stratégia = SQL backup hetente. Aggregate ID = auto increment int. Ha architektúra review-n indokolod, a kiinduló tétel: Event store = ugyanaz a CRUD tábla `IsEvent` flaggel; snapshot stratégia = SQL backup hetente. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 11: Mikor NE kezdd event sourcinggal a domaint?
**Hamis válasz 1:**  
Event sourcing mindig az első lépés greenfield projektnél; NE kezdd csak akkor, ha nincs budget Martenre. CRUD sosem jobb. Ennek az az oka, hogy event sourcing mindig az első lépés greenfield projektnél; NE kezdd csak akkor, ha nincs budget Martenre — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
NE ES, ha audit kell — CRUD jobb audit trail. NE ES, ha több olvasási modell kell — ES csak egy modellt támogat. A „Mikor NE kezdd event sourcinggal a domaint" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy nE ES, ha audit kell — CRUD jobb audit trail. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Event sourcing kötelező staff platformon minden bounded contextre; kivétel nincs. NE kezdd, ha a csapat ismeri a DDD-t — túl egyszerű lenne. Ha architektúra review-n indokolod, a kiinduló tétel: Event sourcing kötelező staff platformon minden bounded contextre; kivétel nincs. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. A döntést érdemes explicit guideline-ban és review checklistben is rögzíteni, hogy a csapat konzisztensen ugyanezt a magyarázatot kövesse productionben is.

### Kérdés 12: Hogyan kezeled a szolgáltatásközi üzenetsorrendet nagy skálán?

**Hamis válasz 1:**  
Globális sorrend minden üzenetre Kafka single partition-nel; skálázás = több topic ugyanazzal a névvel. Key = random GUID minden üzenethez. Ennek az az oka, hogy globális sorrend minden üzenetre Kafka single partition-nel; skálázás = több topic ugyanazzal a névvel — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Sorrend nem fontos nagy skálán; minden consumer parallel offset commit előtt. RabbitMQ fanout garantálja a sorrendet cross-queue. A „Hogyan kezeled a szolgáltatásközi üzenetsorrendet nagy skálán" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy sorrend nem fontos nagy skálán; minden consumer parallel offset commit előtt. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Megoldás: sync REST hívás minden lépésnél, így nincs üzenet sorrend probléma. Kafka partition count = 1 elég 1M msg/s-hez. Ha architektúra review-n indokolod, a kiinduló tétel: Megoldás: sync REST hívás minden lépésnél, így nincs üzenet sorrend probléma. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 13: Hogyan oldod meg a duplikált kézbesítést skálán („effectively once”)?

**Hamis válasz 1:**  
Effectively once = Kafka exactly-once semantics bekapcsolása, Inbox pattern felesleges. Duplikátum = broker bug, application nem kezeli. Ennek az az oka, hogy effectively once = Kafka exactly-once semantics bekapcsolása, Inbox pattern felesleges — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan — téve.

**Hamis válasz 2:**  
Megoldás: message dedup Redis TTL 1 sec; hosszabb retry-nál elég. Outbox csak producer oldalon, consumer nem deduplikál. A „Hogyan oldod meg a duplikált kézbesítést skálán („effectively once”)" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy megoldás: message dedup Redis TTL 1 sec; hosszabb retry-nál elég. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Skálán effectively once = at-most-once ack előtt feldolgozás nélkül; ha elveszik, user újra kattint. Idempotency key = csak POST API-n, nem üzenet fogyasztón. Ha architektúra review-n indokolod, a kiinduló tétel: Skálán effectively once = at-most-once ack előtt feldolgozás nélkül; ha elveszik, user újra kattint. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 14: Sidecar, Ambassador és Service Mesh — mikor melyik, és hol a Dapr helye?
**Hamis válasz 1:**  
Sidecar = minden podban külön nginx config fájl; Ambassador = frontend React komponens; Service Mesh = load balancer alias. Dapr = Docker Compose only, K8s-ben nincs. Ennek az az oka, hogy sidecar = minden podban külön nginx config fájl; Ambassador = frontend React komponens; Service Mesh = load balancer alias — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. A döntést érdemes explicit guideline-ban és review checklistben is rögzíteni, hogy a csapat konzisztensen ugyanezt a magyarázatot kövesse productionben is.

**Hamis válasz 2:**  
Service mesh mindig kötelező 3 pod alatt is; sidecar felesleges, ha van Istio. Dapr helyettesíti a teljes .NET runtime-ot. A „Sidecar, Ambassador és Service Mesh — mikor melyik, és hol a Dapr helye" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy service mesh mindig kötelező 3 pod alatt is; sidecar felesleges, ha van Istio. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
Ambassador pattern = API Gateway neve Envoy-ban; sidecar = log collector csak. Dapr = csak state store, pub/sub-ot MassTransit helyettesíti teljesen platform szinten. Ha architektúra review-n indokolod, a kiinduló tétel: Ambassador pattern = API Gateway neve Envoy-ban; sidecar = log collector csak. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 15: Mikor választasz serverless mikroszolgáltatásokat, és mi a trade-off?

**Hamis válasz 1:**  
Serverless = minden ASP.NET Core app Azure Functions-ben long-running HTTP-val; trade-off nincs, mindig olcsóbb. Cold start = 0 ms .NET 8 isolated workerrel. Ennek az az oka, hogy serverless = minden ASP.NET Core app Azure Functions-ben long-running HTTP-val; trade-off nincs, mindig olcsóbb — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki.

**Hamis válasz 2:**  
Válaszd, ha stateful saga kell és perzisztens connection a DB-hez. Trade-off: serverless nem skálázódik, fix cost magasabb mindig. A „Mikor választasz serverless mikroszolgáltatásokat, és mi a trade-off" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy válaszd, ha stateful saga kell és perzisztens connection a DB-hez. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Serverless microservice = Lambda minden endpoint egy külön function, shared monolith DB. Trade-off: nincs observability, de gyorsabb fejlesztés. Ha architektúra review-n indokolod, a kiinduló tétel: Serverless microservice = Lambda minden endpoint egy külön function, shared monolith DB. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runboo.

### Kérdés 16: Hogyan építesz observability stratégiát SLO/SLI és error budget mentén?

**Hamis válasz 1:**  
Observability = Application Insights alapértelmezett mindenre, SLO = 100% uptime cél. Error budget = nincs, deploy minden commitnál productionbe. Ennek az az oka, hogy observability = Application Insights alapértelmezett mindenre, SLO = 100% uptime cél — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni s.

**Hamis válasz 2:**  
SLI csak CPU és memória; SLO = infra team felelőssége, app team nem. Burn rate alert felesleges, elég weekly report. A „Hogyan építesz observability stratégiát SLO/SLI és error budget mentén" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy sLI csak CPU és memória; SLO = infra team felelőssége, app team nem. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Stratégia: log minden request body productionben PII-vel; trace sampling 0%. Error budget elfogyása = több feature deploy gyorsítása. Ha architektúra review-n indokolod, a kiinduló tétel: Stratégia: log minden request body productionben PII-vel; trace sampling 0%. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 17: Hogyan gondolkodsz production incidentnél staff/principal szinten?

**Hamis válasz 1:**  
Incident = azonnali root cause fix productionben debug módban; postmortem opcionális, ha nincs idő. Kommunikáció = csak dev channel, ügyfél nem kell értesítés. Ennek az az oka, hogy incident = azonnali root cause fix productionben debug módban; postmortem opcionális, ha nincs idő — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Staff gondolkodás: blame the last deployer; rollback mindig impossible microservice-nél. SLO breach = ignore, ha reggelre magától javul. A „Hogyan gondolkodsz production incidentnél staff/principal szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy staff gondolkodás: blame the last deployer; rollback mindig impossible microservice-nél. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Ha két megoldás közül választasz, azt vedd, amelyik kevesebb implicit állapotot vezet be — ez jól hangzó döntési elv interjúban.

**Hamis válasz 3:**  
Incident response = mindenki parallel hotfix branch productionbe; change advisory board skip. Blameless = nincs dokumentáció, csak verbal retro. Ha architektúra review-n indokolod, a kiinduló tétel: Incident response = mindenki parallel hotfix branch productionbe; change advisory board skip. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre. Az ad hoc kivételeket szokás az incidentek fő forrásának beállítani.

### Kérdés 18: Mi az Aspire szerepe a platformvízióban, és mi nem az?

**Hamis válasz 1:**  
Aspire = production orchestrator K8s helyett minden enterprise workloadhoz; nem az = csak local dev. Platform vízió: Aspire replaces Terraform és CI/CD. Ennek az az oka, hogy aspire = production orchestrator K8s helyett minden enterprise workloadhoz; nem az = csak local dev — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Aspire szerepe = NuGet package centralizálás; nem az = observability. .NET Aspire csak Java Spring Cloud alternatíva backend nélkül. A „Mi az Aspire szerepe a platformvízióban, és mi nem az" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aspire szerepe = NuGet package centralizálás; nem az = observability. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Aspire = teljes identity provider és service mesh; nem az = app host local orchestration. Platformon minden team kötelező Aspire production deploy. Ha architektúra review-n indokolod, a kiinduló tétel: Aspire = teljes identity provider és service mesh; nem az = app host local orchestration. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik. Mondd ki a határokat is: hol érvényes a szabály, és milyen skálán kezd fájni a naiv változat.

### Kérdés 19: Hogyan közelítesz multi-region / resilience stratégiához backend platformon?

**Hamis válasz 1:**  
Multi-region = ugyanaz a DB primary mindkét régióban sync write; failover = DNS TTL 24h. Active-active = mindkét régió ír ugyanba a táblába lock nélkül. Ennek az az oka, hogy multi-region = ugyanaz a DB primary mindkét régióban sync write; failover = DNS TTL 24h — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Resilience = több replica egy availability zone-ban elég; multi-region felesleges EU-n belül. RTO/RPO = nem platform concern. A „Hogyan közelítesz multi-region / resilience stratégiához backend platformon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy resilience = több replica egy availability zone-ban elég; multi-region felesleges EU-n belül. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez.

**Hamis válasz 3:**  
Stratégia: cold standby másik continenten manual restore backupból hetente tesztelve. Kafka mirrorMaker helyett single region broker minden trafficnek. Ha architektúra review-n indokolod, a kiinduló tétel: Stratégia: cold standby másik continenten manual restore backupból hetente tesztelve. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is e.

### Kérdés 20: Mit jelent a zero trust mikroszolgáltatásoknál?

**Hamis válasz 1:**  
Zero trust = zero authentication internal API-knál gyorsaságért; trust a private IP-t. Microservice = implicit trust a service account neve alapján. Ennek az az oka, hogy zero trust = zero authentication internal API-knál gyorsaságért; trust a private IP-t — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
Zero trust csak human user loginra vonatkozik; service-to-service implicit trust VPC-ben. mTLS = opcionális extranet only. A „Mit jelent a zero trust mikroszolgáltatásoknál" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy zero trust csak human user loginra vonatkozik; service-to-service implicit trust VPC-ben. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Zero trust = minden kérés admin role JWT-vel; least privilege = minden service full DB access. Network segmentation felesleges containerben. Ha architektúra review-n indokolod, a kiinduló tétel: Zero trust = minden kérés admin role JWT-vel; least privilege = minden service full DB access. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 21: Token-propagáció vs token exchange — mikor melyiket választod?

**Hamis válasz 1:**  
Token propagation = mindig; exchange = sosem, mert lassú. User JWT mehet minden internal hopra audience ellenőrzés nélkül. Ennek az az oka, hogy token propagation = mindig; exchange = sosem, mert lassú — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
Token exchange = ugyanaz a JWT továbbküldése; propagation = új JWT generálás minden service-ben random secret-tel. M2M-hez mindig propagation user tokennel. A „Token-propagáció vs token exchange — mikor melyiket választod" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy token exchange = ugyanaz a JWT továbbküldése; propagation = új JWT generálás minden service-ben random secret-tel. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Választás: exchange csak frontend-backend között; service mesh automatikusan propagation. OAuth2 token exchange RFC = deprecated .NET-ben. Ha architektúra review-n indokolod, a kiinduló tétel: Választás: exchange csak frontend-backend között; service mesh automatikusan propagation. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés.

### Kérdés 22: Hogyan pozicionálod a Duende IdentityServer / saját IdP stratégiát?

**Hamis válasz 1:**  
Minden cégnek kötelező saját Duende prod-ban; SaaS IdP tiltott GDPR miatt hamis információ. Pozicionálás: IdP = microservice #1 minden projektben day one. Ennek az az oka, hogy minden cégnek kötelező saját Duende prod-ban; SaaS IdP tiltott GDPR miatt hamis információ — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Duende = csak development; production = shared password file. Saját IdP stratégia = nincs, minden app local JWT sign. A „Hogyan pozicionálod a Duende IdentityServer / saját IdP stratégiát" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy duende = csak development; production = shared password file. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. Interjúban érdemes a döntést tra.

**Hamis válasz 3:**  
Pozicionálás: IdP és business API egy deployment unit; client credentials a SPA-ból public. Duende licensing = nem releváns open source fork mindig elég enterprise-ben. Ha architektúra review-n indokolod, a kiinduló tétel: Pozicionálás: IdP és business API egy deployment unit; client credentials a SPA-ból public. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a.

### Kérdés 23: Hogyan vezetnél Strangler Fig migrációs programot szervezeti szinten?

**Hamis válasz 1:**  
Strangler program = big-bang 1 hétvége, nincs fázis. Szervezeti vezetés = minden team parallel ugyanazt a legacy modult migrálja. Ennek az az oka, hogy strangler program = big-bang 1 hétvége, nincs fázis — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interj.

**Hamis válasz 2:**  
Program = legacy freeze 5 év, új feature csak microservice; routing váltás nincs. KPI = microservice count, nem business capability migration. A „Hogyan vezetnél Strangler Fig migrációs programot szervezeti szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy program = legacy freeze 5 év, új feature csak microservice; routing váltás nincs. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szok.

**Hamis válasz 3:**  
Vezetés: strangler = új system sync hívja örökre a legacy-t wrapper nélkül; nincs cutover terv. ADR és governance felesleges migrációnál. Ha architektúra review-n indokolod, a kiinduló tétel: Vezetés: strangler = új system sync hívja örökre a legacy-t wrapper nélkül; nincs cutover terv. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés v.

### Kérdés 24: BFF vs API Gateway — hogyan döntesz topológiáról?

**Hamis válasz 1:**  
Topológia: mindig egy globális BFF minden klienshez egy Gatewayben; külön BFF tiltott. Gateway = business logic aggregáció primary helye. Ennek az az oka, hogy topológia: mindig egy globális BFF minden klienshez egy Gatewayben; külön BFF tiltott — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
BFF = CDN edge; Gateway = optional. Döntés: ha van React, nincs BFF; ha van mobile, nincs Gateway. A „BFF vs API Gateway — hogyan döntesz topológiáról" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy bFF = CDN edge; Gateway = optional. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
Staff döntés: topology diagram = star with legacy monolith center forever. YARP nem alkalmas BFF-re, csak static files. Ha architektúra review-n indokolod, a kiinduló tétel: Staff döntés: topology diagram = star with legacy monolith center forever. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 25: Database per service vs shared DB — mi a staff szintű trade-off?

**Hamis válasz 1:**  
Shared DB = staff best practice, mert reporting JOIN easy; database per service = anti-pattern mindig. Trade-off: per service drága, shared ingyenes és gyorsabb minden metrikán. Ennek az az oka, hogy shared DB = staff best practice, mert reporting JOIN easy; database per service = anti-pattern mindig — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika.

**Hamis válasz 2:**  
Database per service = minden service ugyanaz a PostgreSQL instance, külön schema = per service elég. Shared = egy tábla minden service ír. A „Database per service vs shared DB — mi a staff szintű trade-off" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy database per service = minden service ugyanaz a PostgreSQL instance, külön schema = per service elég. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
Trade-off: shared DB skálázódik horizontálisan sharding nélkül; per service nem enged cross-service query-t ever, még read model sync REST-tel sem. Ha architektúra review-n indokolod, a kiinduló tétel: Trade-off: shared DB skálázódik horizontálisan sharding nélkül; per service nem enged cross-service query-t ever, még read model sync REST-tel sem.

### Kérdés 26: Hogyan skálázod a CQRS olvasási oldalt szervezeti szinten?

**Hamis válasz 1:**  
CQRS read = mindig ugyanaz a write DB connection; skálázás = több CPU a SQL szerveren. Read replica = nem CQRS, felesleges. Ennek az az oka, hogy cQRS read = mindig ugyanaz a write DB connection; skálázás = több CPU a SQL szerveren — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat, noha.

**Hamis válasz 2:**  
Olvasási oldal skálázás = minden consumer sync REST poll 100ms-ként a write service-től. Projektion = trigger real-time, eventual consistency tiltva platform policy. A „Hogyan skálázod a CQRS olvasási oldalt szervezeti szinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy olvasási oldal skálázás = minden consumer sync REST poll 100ms-ként a write service-től. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build melle.

**Hamis válasz 3:**  
Szervezeti CQRS = egy globális read DB minden bounded contextnek ugyanazzal a sémával; skálázás vertical only. Event projection lag SLA = nem mérhető. Ha architektúra review-n indokolod, a kiinduló tétel: Szervezeti CQRS = egy globális read DB minden bounded contextnek ugyanazzal a sémával; skálázás vertical only. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik, még ha a kategóriák maguk.

### Kérdés 27: Soft delete, GDPR és PII governance — hogyan egyezteted össze?

**Hamis válasz 1:**  
Soft delete = GDPR compliant erase, mert `IsDeleted=1` elrejti az adatot. PII governance = log minden personal adatot 7 évig plain text. Ennek az az oka, hogy soft delete = GDPR compliant erase, mert `IsDeleted=1` elrejti az adatot — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
GDPR right to erasure = soft delete flag visszaállítása 0-ra. PII = csak production DB concern, backup és log exclude. A „Soft delete, GDPR és PII governance — hogyan egyezteted össze" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy gDPR right to erasure = soft delete flag visszaállítása 0-ra. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük. Ha a CI a fordított feltételezést kódolja, zöld build mellett is elcsúszhat a kliens elvárása.

**Hamis válasz 3:**  
Egyeztetés: soft delete örökre tartja a rekordot, GDPR export = SQL dump teljes táblával titkosítás nélkül. Governance = yearly email a usernek. Ha architektúra review-n indokolod, a kiinduló tétel: Egyeztetés: soft delete örökre tartja a rekordot, GDPR export = SQL dump teljes táblával titkosítás nélkül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbbnek hangzik.

### Kérdés 28: Hogyan használod az architektúra teszteket szervezeti politikaként?

**Hamis válasz 1:**  
Architektúra teszt = opcionális snippet copy-paste; policy = PR comment only, CI fail nem. NetArchTest csak sample projektben, prod code exempt. Ennek az az oka, hogy architektúra teszt = opcionális snippet copy-paste; policy = PR comment only, CI fail nem — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió. Interjúban a mechanizmust is végig kell vezetni, nem elég a definíció.

**Hamis válasz 2:**  
Policy: minden `[Fact]` architektúra teszt manuális run release előtt; automatikus gate lassít. Kivétel = minden team minden sprint, nincs waiver process. A „Hogyan használod az architektúra teszteket szervezeti politikaként" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy policy: minden `[Fact]` architektúra teszt manuális run release előtt; automatikus gate lassít. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Szervezeti használat: architektúra teszt helyett SonarQube line count limit. Policy = senior dev approval verbal, teszt nem enforce-ol. Ha architektúra review-n indokolod, a kiinduló tétel: Szervezeti használat: architektúra teszt helyett SonarQube line count limit. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálás.

### Kérdés 29: Miért kötelező Central Package Management multi-repo/multi-project platformon?

**Hamis válasz 1:**  
CPM = csak single repo-hoz kell; multi-repo-nál minden repo külön PackageReference verzió = jobb függetlenség. Kötelező CPM = NuGet cache gyorsabb, security nem számít. Ennek az az oka, hogy cPM = csak single repo-hoz kell; multi-repo-nál minden repo külön PackageReference verzió = jobb függetlenség — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
CPM tiltja a Directory.Packages.props használatát; helyette minden csproj-ban random verzió. Multi-project platform = nincs szükség centralizálásra. A „Miért kötelező Central Package Management multi-repo/multi-project platformon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy cPM tiltja a Directory.Packages.props használatát; helyette minden csproj-ban random verzió. Interjúban érdemes a döntést trade-offokkal.

**Hamis válasz 3:**  
Kötelező, mert MSBuild alapból nem tud package verziót kezelni CPM nélkül. Trade-off: CPM megakadályozza a transitive dependency security patch-et. Ha architektúra review-n indokolod, a kiinduló tétel: Kötelező, mert MSBuild alapból nem tud package verziót kezelni CPM nélkül. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 30: Mikor vezetnél be Native AOT-ot platformstratégiaként?

**Hamis válasz 1:**  
Native AOT = minden ASP.NET Core API default platform policy .NET 8-tól; vezetés day one minden greenfield. Kivétel: csak ha reflection-heavy ORM nélkül sem megy — sosem. Ennek az az oka, hogy native AOT = minden ASP.NET Core API default platform policy .NET 8-tól; vezetés day one minden greenfield — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Interjúban érdemes a döntést trade-offokkal is.

**Hamis válasz 2:**  
AOT stratégia = sosem, mert JIT mindig gyorsabb cold start és kisebb binary. Platform = block AOT csak console apps. A „Mikor vezetnél be Native AOT-ot platformstratégiaként" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aOT stratégia = sosem, mert JIT mindig gyorsabb cold start és kisebb binary. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek sz.

**Hamis válasz 3:**  
Bevezetés: AOT worker service-ekre teljes EF + Swagger stackkel trim nélkül; API marad JIT. Döntés = binary size > runtime compatibility. Ha architektúra review-n indokolod, a kiinduló tétel: Bevezetés: AOT worker service-ekre teljes EF + Swagger stackkel trim nélkül; API marad JIT. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is.

### Kérdés 31: Hogyan tervezed a caching tier-eket HybridCache-szel?

**Hamis válasz 1:**  
HybridCache = L1 memória + L2 Redis + L3 SQL minden query-nél kötelező 3 tier. Tervezés = cache minden entitás 24h TTL, invalidation nem kell eventre. Ennek az az oka, hogy hybridCache = L1 memória + L2 Redis + L3 SQL minden query-nél kötelező 3 tier — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiz.

**Hamis válasz 2:**  
Caching tier = csak CDN static file; HybridCache csak .NET Framework compat. L1/L2 döntés = random per developer preference. A „Hogyan tervezed a caching tier-eket HybridCache-szel" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy caching tier = csak CDN static file; HybridCache csak .NET Framework compat. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Platform terv: HybridCache helyettesíti az adatbázist read-heavy workloadnál; write-through minden POST-nál cache first. Stampede protection = lock entire app domain. Ha architektúra review-n indokolod, a kiinduló tétel: Platform terv: HybridCache helyettesíti az adatbázist read-heavy workloadnál; write-through minden POST-nál cache first.

### Kérdés 32: Miért tekinted a rate limitinget termékpolitikának, nem csak middleware-nek?

**Hamis válasz 1:**  
Rate limiting = csak DDoS védelem infra szinten; termék nem dönthet tier limitről. Middleware elég fixed 1000 req/s minden usernek. Ennek az az oka, hogy rate limiting = csak DDoS védelem infra szinten; termék nem dönthet tier limitről — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjúban is teljesnek hat.

**Hamis válasz 2:**  
Termékpolitika = marketing szlogen; rate limit = technikai detail ops team. Free vs paid tier ugyanaz a limit, fairness miatt. A „Miért tekinted a rate limitinget termékpolitikának, nem csak middleware-nek" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy termékpolitika = marketing szlogen; rate limit = technikai detail ops team. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, mert egyértelmű API-szerződést és kiszámítható hibakezelést sugall.

**Hamis válasz 3:**  
Rate limit termékpolitika = unlimited internal API, public unlimited is trust alapján. Middleware = optional plugin, platform standard nincs. Ha architektúra review-n indokolod, a kiinduló tétel: Rate limit termékpolitika = unlimited internal API, public unlimited is trust alapján. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik,.

### Kérdés 33: Kafka vs RabbitMQ — hogyan választasz platformszabványt?

**Hamis válasz 1:**  
Platform szabvány = mindkettő minden teamnek kötelező ugyanarra a use case-re; választás = coin flip. Kafka = queue, Rabbit = log, felcserélhetők. Ennek az az oka, hogy platform szabvány = mindkettő minden teamnek kötelező ugyanarra a use case-re; választás = coin flip — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Összefoglalva a magabiztos válasz sémája: tétel, mechanizmus, példa és trade-off. A fenti állítás mindhárom szinten végigvihető, ezért interjú.

**Hamis válasz 2:**  
Szabvány = RabbitMQ minden event streamingre; Kafka csak legacy. Absztrakció = tiltott, minden team direct Confluent SDK. A „Kafka vs RabbitMQ — hogyan választasz platformszabványt" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy szabvány = RabbitMQ minden event streamingre; Kafka csak legacy. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez. Code review-n az ellenkező javaslatot gyakran legacy beidegződésnek szokás beállítani.

**Hamis válasz 3:**  
Választás: team autonomía nincs, de platform nem dokumentál; új projekt mindig MQTT. Kafka vs Rabbit döntés = broker amelyik olcsóbb monthly invoice. Ha architektúra review-n indokolod, a kiinduló tétel: Választás: team autonomía nincs, de platform nem dokumentál; új projekt mindig MQTT. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés va.

### Kérdés 34: Milyen Kafka platform-szabályokat kötnél ki sorrend és skálázás miatt?

**Hamis válasz 1:**  
Szabály: egy topic = egy partition mindig; key használata tiltott, fairness miatt. Partition increase productionben bármikor safe, sorrend megmarad cross-key. Ennek az az oka, hogy szabály: egy topic = egy partition mindig; key használata tiltott, fairness miatt — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Platform rule: consumer group = egy consumer összes partíció; skálázás = több topic ugyanazzal a névvel. Max poll interval = default, ne hangold. A „Milyen Kafka platform-szabályokat kötnél ki sorrend és skálázás miatt" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy platform rule: consumer group = egy consumer összes partíció; skálázás = több topic ugyanazzal a névvel. Interjúban érdemes a döntést trad.

**Hamis válasz 3:**  
Kötelező: auto commit true, offset reset earliest minden deploy-nál productionben. Sorrend = global topic order guarantee Kafka 3.x-ben. Ha architektúra review-n indokolod, a kiinduló tétel: Kötelező: auto commit true, offset reset earliest minden deploy-nál productionben. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Architektúra review-n a konzisztencia a legerősebb hangzó érv: ugyanazt a mintát alkalmazod listázásra, írásra és hibakezelésre.

### Kérdés 35: Wolverine vs MassTransit vs MediatR — hogyan döntesz ökoszisztémáról?

**Hamis válasz 1:**  
MediatR = distributed messaging production standard; MassTransit = csak in-process CQRS. Wolverine = frontend state management. Döntés = legtöbb GitHub star. Ennek az az oka, hogy mediatR = distributed messaging production standard; MassTransit = csak in-process CQRS — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollback, metrika. Enélkül a kivétel lassan új alapértelmezéssé válik — ezt interjúban is szeretni szokták hallani.

**Hamis válasz 2:**  
Platform = mindhárom kötelező minden service-ben egyszerre; nincs absztrakció. MassTransit vs Wolverine = ugyanaz a NuGet, más név. A „Wolverine vs MassTransit vs MediatR — hogyan döntesz ökoszisztémáról" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy platform = mindhárom kötelező minden service-ben egyszerre; nincs absztrakció. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd.

**Hamis válasz 3:**  
Döntés: MediatR minden cross-service üzenetre Kafka publish wrapper nélkül; MassTransit csak saga, Wolverine tiltott .NET 8-on. Ha architektúra review-n indokolod, a kiinduló tétel: Döntés: MediatR minden cross-service üzenetre Kafka publish wrapper nélkül; MassTransit csak saga, Wolverine tiltott .NET 8-on. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 36: Milyen tanulságokat hozol az eShopOnContainers / .NET reference architektúrákból?

**Hamis válasz 1:**  
Tanulság: copy-paste teljes eShop microservice count minden projektbe; reference arch = mandatory production template 2026-ban is változatlanul. Ennek az az oka, hogy tanulság: copy-paste teljes eShop microservice count minden projektbe; reference arch = mandatory production template 2026-ban is változatlanul — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
eShop = anti-pattern, sosem nézd; .NET reference = csak Blazor demo. Tanulság: Event Bus mindig sync REST EventBus class névvel. A „Milyen tanulságokat hozol az eShopOnContainers / .NET reference architektúrákból" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy eShop = anti-pattern, sosem nézd; .NET reference = csak Blazor demo. Senior vagy Staff szinten elvárás a trade-off beszéd is: mit nyersz olvashatóságban, mit veszíthetsz rugalmasságban, hogyan mérnéd. A fenti modell tiszta mérőszámokat kínál ehhez. Ha két megoldás közül választasz, azt vedd, amelyik kevesebb implicit állapotot vezet be — ez jól hangzó döntési elv interjúban.

**Hamis válasz 3:**  
Tanulság: shared SQL Server eShop pattern = best practice; Docker Compose prod deploy reference. CQRS sample = optional, CRUD controller elég staff platformon. Ha architektúra review-n indokolod, a kiinduló tétel: Tanulság: shared SQL Server eShop pattern = best practice; Docker Compose prod deploy reference. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 37: Hogyan alkalmazod a Bounded Context / DDD stratégiai tervezést platformszinten?

**Hamis válasz 1:**  
Bounded context = microservice = NuGet package 1:1; stratégiai térkép = UML class diagram code-ból reverse engineered. Context map = felesleges, sync REST elég. Ennek az az oka, hogy bounded context = microservice = NuGet package 1:1; stratégiai térkép = UML class diagram code-ból reverse engineered — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, rollba.

**Hamis válasz 2:**  
Platform DDD = minden entitás anemic globally; aggregate boundary = database table. Strategic design = one big context, subdomain = folder. A „Hogyan alkalmazod a Bounded Context / DDD stratégiai tervezést platformszinten" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy platform DDD = minden entitás anemic globally; aggregate boundary = database table. Egy tipikus ellenérv a rövidség: így kevesebb a kód. A rövidség önmagában nem döntő; a fenti szabály azért tűnik erősebbnek, me.

**Hamis válasz 3:**  
Alkalmazás: event storming helyett Jira epic count határozza a contextet; partnership minden team között shared kernel minden aggregate-re. Ha architektúra review-n indokolod, a kiinduló tétel: Alkalmazás: event storming helyett Jira epic count határozza a contextet; partnership minden team között shared kernel minden aggregate-re. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. A dokumentálhatóság is jól hangzó zárás: ha a csapat ezt a szabályt követi, az onboarding és a runbook egyszerűbbnek tűnik, mert kevesebb kivételág jelenik meg a leírásban.

### Kérdés 38: Milyen backend API következményei vannak a micro frontendnek?

**Hamis válasz 1:**  
Micro frontend = nincs backend következmény; ugyanaz a monolith API elég. BFF = egy per micro frontend kötelező minden case-ben, Gateway tiltott. Ennek az az oka, hogy micro frontend = nincs backend következmény; ugyanaz a monolith API elég — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Gyakorlati szempontból ezt érdemes alapértelmezett csapatkonvencióként kezelni: ha eltérünk tőle, gyakran csak aszinkron vagy multi-instance forgatókönyvben derül ki a regresszió.

**Hamis válasz 2:**  
Következmény: minden MFE külön JWT issuer; CORS disable. API versioning = nem kell, breaking change weekly acceptable. A „Milyen backend API következményei vannak a micro frontendnek" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy következmény: minden MFE külön JWT issuer; CORS disable. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
Backend = GraphQL federation kötelező MFE-hez; REST incompatible. Auth = shared localStorage token minden MFE domain között cross-origin. Ha architektúra review-n indokolod, a kiinduló tétel: Backend = GraphQL federation kötelező MFE-hez; REST incompatible. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 39: Miért választasz szét persistence és domain entitást hosszú távon?

**Hamis válasz 1:**  
Szétválasztás = felesleges overhead; EF entity = domain entity mindig ugyanaz a class. Hosszú távon shared anemic entity gyorsabb fejlesztés staff szerint is. Ennek az az oka, hogy szétválasztás = felesleges overhead; EF entity = domain entity mindig ugyanaz a class — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Részletszabályként a kivételeket ne érzésre, hanem explicit policy alapján kezeld: ADR, trigger, roll.

**Hamis válasz 2:**  
Persistence model = domain + `[Table]` attribute elég; külön project csak duplikáció. Szétválasztás oka = AutoMapper marketing, nincs technikai indok. A „Miért választasz szét persistence és domain entitást hosszú távon" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy persistence model = domain + `[Table]` attribute elég; külön project csak duplikáció. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Hosszú távon egy entitás mindkét szerep, mert DDD aggregate = DbSet. Szétválasztás csak MongoDB-nál kell, SQL-nél nem. Ha architektúra review-n indokolod, a kiinduló tétel: Hosszú távon egy entitás mindkét szerep, mert DDD aggregate = DbSet. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba is szokás emelni — még akkor is, ha a mérés valójában mást mutatna.

### Kérdés 40: Mikor és hogyan alkalmazol Anti-Corruption Layert?

**Hamis válasz 1:**  
ACL = minden internal service hívásnál kötelező, legacy nélkül is. Alkalmazás = shared NuGet DTO minden teamnek ugyanaz a legacy schema. Ennek az az oka, hogy aCL = minden internal service hívásnál kötelező, legacy nélkül is — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan.

**Hamis válasz 2:**  
ACL csak frontend adapter; backend hívja a legacy SQL táblát közvetlenül join-nal. Mikor = soha, mert wrapper lassít. A „Mikor és hogyan alkalmazol Anti-Corruption Layert" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy aCL csak frontend adapter; backend hívja a legacy SQL táblát közvetlenül join-nal. Éles környezetben ez a magyarázat azért hangzik stabilnak, mert kevesebb implicit state-et és kevesebb speciális ágat feltételez.

**Hamis válasz 3:**  
ACL helye = domain entity base class öröklés legacy modelből; fordítás = implicit JSON serialize. Mikor = greenfield only. Ha architektúra review-n indokolod, a kiinduló tétel: ACL helye = domain entity base class öröklés legacy modelből; fordítás = implicit JSON serialize. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Operációs szempontból a log, trace és metrika akkor tűnik magabiztosnak, ha a modell konzisztens. A fenti állítás mellett a hibák kategorizálása is egyértelműbb.

### Kérdés 41: Choreography vs orchestration saga — hogyan döntesz nagy programban?

**Hamis válasz 1:**  
Nagy program = mindig choreography, mert nincs central point of failure — orchestrator a single failure point mindig. 10+ lépés = kizárólag choreography staff policy. Ennek az az oka, hogy nagy program = mindig choreography, mert nincs central point of failure — orchestrator a single failure point mindig — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül. A fenti indoklás épp azt a csapdát zárja ki magabiztosan — téve.

**Hamis válasz 2:**  
Döntés = orchestration minden flow-ra MassTransit state machine nélkül in-memory. Choreography = csak 2 service között tiltott complexity miatt. A „Choreography vs orchestration saga — hogyan döntesz nagy programban" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy döntés = orchestration minden flow-ra MassTransit state machine nélkül in-memory. Tesztoldalon a unit és integration teszteknek ugyanarra a kontraktusra kellene épülniük.

**Hamis válasz 3:**  
Program szintű döntés: mix minden saga lépésnél random; governance = nincs. Orchestration = sync REST chain, choreography = ugyanaz más néven. Ha architektúra review-n indokolod, a kiinduló tétel: Program szintű döntés: mix minden saga lépésnél random; governance = nincs. Ebből vezethető le a hibakezelés, a tesztelés és a production checklist is. Teljesítményoldalon a fenti modell kevesebb felesleges munkát ígér, ezért nagy forgalmú útvonalakon coding guideline-ba i.

### Kérdés 42: Hogyan verzióznád az üzenet-szerződéseket platformszabványként?

**Hamis válasz 1:**  
Platform szabvány = semver a NuGet package-en, üzenet payload breaking change anytime. Verzió = topic rename weekly; backward compatibility = consumer responsibility only verbal. Ennek az az oka, hogy platform szabvány = semver a NuGet package-en, üzenet payload breaking change anytime — ezt rögtön mechanizmus-szinten is meg szokás védeni, ne csak definícióként elmondani. Példával: ha a fordított szabályt követed, a tesztek lokálisan zöldek maradhatnak, miközben a kontraktus productionben sérül.

**Hamis válasz 2:**  
Verziózás = protobuf required, JSON tiltott; schema registry optional. Expand-contract = big-bang only platform-wide maintenance window. A „Hogyan verzióznád az üzenet-szerződéseket platformszabványként" kérdésnél a leggyakoribb tévút az ellenkező szabály; a magabiztos irány viszont az, hogy verziózás = protobuf required, JSON tiltott; schema registry optional. Interjúban érdemes a döntést trade-offokkal is alátámasztani, még akkor is,.

**Hamis válasz 3:**  
Szabvány: message version header ignore; tolerant reader = forbidden, strict deserialize fail production. Platform = egy global `V1` namespace forever, no V2. Ha architektúra review-n indokolod, a kiinduló tétel: Szabvány: message version header ignore; tolerant reader = forbidden, strict deserialize fail production.
