# Backend interjúkérdések válaszokkal

Forrás: [backend-knowledge-base.md](./backend-knowledge-base.md) — László Kővári  
Nyelv: magyar  
Szintek: Junior · Medior · Senior · Staff

A kérdések a knowledge base témáira épülnek, kiegészítve a .NET / ASP.NET Core backend interjúkban gyakran előforduló kérdésekkel. A **Dokumentáció** sorok a hivatalos Microsoft Learn / Azure Architecture Center / egyéb primer forrásokra mutatnak.

---

## Junior

### Kérdés 1: Mi a Minimal API, és miben különbözik az MVC controlleres megközelítéstől?

**Válasz:**  
A Minimal API a .NET 6-tól elérhető, könnyűsúlyú módja webes API-k készítésének: kevesebb sablonkóddal, egyszerűbb konfigurációval lehet végpontokat definiálni (pl. `MapGet`, `MapPost`). Kis vagy közepes projektekhez, mikroszolgáltatásokhoz, egyszerű CRUD-hoz és gyors prototípusokhoz ideális. Előnye a gyors fejlesztés és a kisebb overhead; hátránya a korlátozottabb MVC/Razor funkciók és a komplexebb alkalmazások nehezebb karbantartása. Ha nincs szükség a teljes ASP.NET Core MVC eszköztárra, a Minimal API gyakran elegendő és átláthatóbb.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis

### Kérdés 2: Hogyan valósítanál meg CRUD végpontokat Minimal API-val?

**Válasz:**  
A `WebApplication.CreateBuilder` után `MapGet`/`MapPost`/`MapPut`/`MapDelete` metódusokkal kötöd az útvonalakat a handlerekhez. Például `GET /products` listáz, `GET /products/{id}` egy elemet ad vissza (`Ok` vagy `NotFound`), `POST` új elemet hoz létre (`Created`), `PUT` frissít, `DELETE` töröl (gyakran `NoContent`). Az útvonalparaméterek típuskorlátozhatók (pl. `{id:int}`). A válaszokhoz a `Results` segédosztályt használjuk. Ez a minta jól illeszkedik egyszerű REST CRUD API-khoz.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis

### Kérdés 3: Mit jelent a REST API, és milyen HTTP igék tartoznak a tipikus CRUD műveletekhez?

**Válasz:**  
A REST erőforrás-orientált API stílus: az erőforrásokat URL-ek azonosítják, a műveleteket pedig HTTP igék. Tipikusan: GET olvasás (lista vagy egyedi), POST létrehozás, PUT (vagy PATCH) frissítés, DELETE törlés. A válaszok HTTP státuszkódokkal jelzik a sikerességet vagy a hibát. ASP.NET Core-ban ezt controllerrel vagy Minimal API-val is megvalósíthatjuk. A konzisztens ige- és státuszkód-használat segíti a klienseket és a dokumentációt (Swagger/OpenAPI).

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/

### Kérdés 4: Milyen HTTP státuszkódokat vársz GET, POST, PUT és DELETE esetén?

**Válasz:**  
GET sikeres esetben általában 200 OK; ha az erőforrás nincs meg, 404 Not Found. POST új erőforrásnál tipikusan 201 Created (gyakran `CreatedAtAction`-nel), érvénytelen adatnál 400 Bad Request. PUT sikeres frissítésnél gyakran 204 No Content (vagy 200 OK body-val); hiányzó erőforrás esetén 404. DELETE sikeres törlésnél szintén gyakran 204 No Content, hiánynál 404. PATCH részleges frissítésnél tipikusan 200 vagy 204. Ezek a konvenciók interjúban és éles API-kban is elvárhatók.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/action-return-types

### Kérdés 5: Melyik HTTP státuszkódot (result type) mikor használjuk API-kban?

**Válasz:**  
A státuszkód a válasz „típusa”: a kliens ebből tudja, sikerült-e a kérés, és mi a következő lépés. Gyakori esetek:

**2xx – siker:**  
- **200 OK** – sikeres olvasás vagy általános siker body-val (lista, DTO).  
- **201 Created** – új erőforrás létrejött (POST); gyakran `Location` fejléccel.  
- **202 Accepted** – a kérést elfogadtuk, de a feldolgozás aszinkron (háttérjob, üzenetsor); tipikusan státusz-URL-lel.  
- **203 Non-Authoritative Information** – ritka: a válasz sikeres, de a tartalom nem a origin szervertől származik (proxy/átalakított / más forrásból származó metaadat). Klasszikus REST CRUD API-kban ritkán használjuk; ha cache/proxy módosította a választ, elméletileg ide tartozik.  
- **204 No Content** – siker body nélkül (PUT/PATCH/DELETE után gyakori).

**4xx – kliens hiba:**  
- **400 Bad Request** – érvénytelen kérés / validációs hiba (rossz JSON, hiányzó mező).  
- **401 Unauthorized** – nincs (érvényes) autentikáció; „ki vagy?”.  
- **403 Forbidden** – autentikált, de nincs jogosultsága; „tudjuk ki vagy, de nem szabad”.  
- **404 Not Found** – az erőforrás (vagy a végpont) nem létezik.  
- **409 Conflict** – ütközés (pl. concurrency token, egyedi email, állapotütközés).  
- **422 Unprocessable Entity** – szintaktikailag OK, de üzleti/szemantikai szabály sérül (sok API a 400-at használja helyette).  
- **429 Too Many Requests** – rate limit; gyakran `Retry-After` fejléccel.

**5xx – szerver hiba:**  
- **500 Internal Server Error** – váratlan szerverhiba.  
- **503 Service Unavailable** – átmenetileg nem elérhető (karbantartás, túlterhelés, függőség kiesés).

ASP.NET Core-ban: `Ok`, `Created`, `Accepted`, `NoContent`, `BadRequest`, `Unauthorized`, `Forbid`, `NotFound`, `Conflict`, `StatusCode(429)`, `ProblemDetails`. Ökölszabály: 2xx = siker, 4xx = a kliens javíthatja, 5xx = a szerver oldal oldja meg.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/action-return-types

### Kérdés 6: Mit ad vissza egy controller action `IActionResult`-ként GET esetén, ha van és ha nincs adat?

**Válasz:**  
Ha megtaláljuk az erőforrást, `Ok(resource)` (200) a tipikus válasz; ha nincs, `NotFound()` (404). Gyakori minta: `FindAsync` vagy `FirstOrDefaultAsync` után null-ellenőrzés. Az `IActionResult` (vagy `ActionResult<T>`) lehetővé teszi, hogy ugyanabból a metódusból többféle státuszkódot adjunk vissza. Ez tisztább, mint mindig 200-zal és „üres” body-val válaszolni. A kliens így egyértelműen látja, hogy hiányzik-e az erőforrás.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/action-return-types

### Kérdés 7: Miért érdemes POST-nál `CreatedAtAction`-t használni `Ok` helyett?

**Válasz:**  
Új erőforrás létrehozásakor a REST konvenció 201 Created státuszt vár, és gyakran egy `Location` fejlécet a létrehozott erőforrás URL-jére. A `CreatedAtAction` ezt automatizálja: megadod a GET action nevét és az azonosítót, így a kliens tudja, hol kérdezheti le az új elemet. Emellett a válasz body-ban visszaadhatod a létrehozott objektumot. Érvénytelen modell esetén előtte `BadRequest(ModelState)` adható. Ez professzionálisabb API-szerződés, mint egyszerű 200 OK.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/action-return-types

### Kérdés 8: Mik a Dependency Injection lifetime-ok ASP.NET Core-ban?

**Válasz:**  
Három fő élettartam van: Transient, Scoped és Singleton. Transientnél minden feloldáskor új példány jön létre — állapotmentes, könnyű szolgáltatásokhoz jó. Scopednál HTTP kérésenként egy példány — tipikus a `DbContext` és a kérésen belüli üzleti szolgáltatások. Singletonnál az alkalmazás teljes életében egy példány — cache, konfigurációs segédek. A rossz választás captive dependency-hez, memóriaszivárgáshoz vagy szálbiztonsági hibákhoz vezethet. Ökölszabály: Singleton ne fogjon be Scoped függőséget közvetlenül.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection

### Kérdés 9: Mi a különbség Transient, Scoped és Singleton között gyakorlati példával?

**Válasz:**  
`AddTransient<IEmailSender, EmailSender>()` minden injektáláskor új `EmailSender`-t ad — ha a szolgáltatás olcsó és állapotmentes. `AddScoped<IOrderService, OrderService>()` ugyanazon HTTP kérésen belül ugyanazt a példányt adja, így a change tracker és a tranzakciós kontextus konzisztens marad. `AddSingleton<ICacheService, MemoryCacheService>()` egy közös példányt tart az egész appra. A `DbContext` scoped, mert nem szálbiztos. Singleton szolgáltatásban scoped függőséget `IServiceScopeFactory`-val, külön scope-ban kell feloldani.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection

### Kérdés 10: Mi a captive dependency probléma?

**Válasz:**  
Captive dependency akkor keletkezik, ha egy hosszabb életű szolgáltatás (pl. Singleton) konstruktorában rövidebb életű (pl. Scoped `DbContext`) függőséget kér. A DI konténer „befogja” a scoped példányt, és az az app végéig élhet — elavult adatok, race condition. Developmentben a `ValidateScopes` ezt gyakran kivétellel jelzi. Megoldás: ne injektálj Scoped-et Singletonba közvetlenül; használj `IServiceScopeFactory`-t és rövid életű scope-ot a munka idejére. Ökölszabály: Singleton csak Singletont vagy teljesen állapotmentes szolgáltatást fogadjon biztonságosan.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection

### Kérdés 11: Mikor használnál `IEnumerable<T>`-et `List<T>` helyett?

**Válasz:**  
Az `IEnumerable<T>` absztrakció: lusta kiértékelést, kisebb kötöttséget és gyakran jobb memóriahasználatot ad, mert nem kell előre betölteni az összes elemet. LINQ műveletek (pl. `Where`) csak iteráláskor futnak le. A `List<T>` akkor előnyös, ha indexelés, azonnali anyagiasítás vagy többszöri bejárás kell ugyanazon az adathalmazon. Metódus visszatérési típusaként gyakran jobb az `IEnumerable<T>` (vagy `IReadOnlyList<T>`), hogy ne kötelezzük a hívót konkrét kollekcióra. Nagy adathalmazoknál a lusta megközelítés teljesítményelőnyt adhat.

**Dokumentáció:** https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1

### Kérdés 12: Mi a különbség a `get`/`set`, az `init` és a `private set` között?

**Válasz:**  
A `get; set;` klasszikus, bármikor írható-olvasható property. Az `init` (C# 9+) csak objektum-inicializáláskor vagy konstruktorban állítható be, utána immutable a property szempontjából. A `private set` kívülről csak olvasható, de az osztály belsejéből módosítható — jó encapsulációhoz (pl. `CreatedAt`). Readonly mezők csak deklarációnál vagy konstruktorban állíthatók. Interjúban fontos: az `init` az immutabilitás felé visz anélkül, hogy teljesen readonly mezőket kellene használni.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/init

### Kérdés 13: Mi a különbség a `class`, `record` és `struct` között?

**Válasz:**  
A `class` referenciatípus, alapból mutable, egyenlősége tipikusan referencia (identitás) alapú — entitásokhoz, service-ekhez ideális. A `record` (record class) szintén referencia, de a fordító érték szerinti `Equals`/`GetHashCode`/`ToString`/`with` támogatást generál; primary constructorral gyakran immutable DTO/value object. A `struct` értéktípus (másolat), kis, rövid életű értékekhez; alapból mutable, immutable-hez `readonly struct` ajánlott. A `record struct` az érték-szemantikát ötvözi a record generált egyenlőségével. Rövid ökölszabály: identitás → `class`; tartalom-egyenlőség / DTO → `record`; kis, stackre illő érték → `struct`.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record

### Kérdés 14: Mikor célszerű `class`-t, `struct`-ot vagy `record`-ot használni?

**Válasz:**  
`class`: ha az objektumnak identitása van (Id), állapota időben változik, vagy öröklés/polimorfizmus kell — tipikusan EF Core entitás, aggregátum, domain service, DI-vel injektált szolgáltatás. Kerüld a nagy, gyakran másolt `struct`-ot, és a „minden DTO legyen class” reflexet, ha a tartalom számít.  
`record` (record class): ha a tartalom alapján egyenlő, gyakran immutable adat kell — DTO, API request/response, CQRS command/query, domain event, value object (`Money`, `Address`). Előny: generált `Equals`/`GetHashCode`/`ToString`/`with`. Entity-hez általában ne: két ugyanolyan mezőjű `Order` nem ugyanaz, ha más az Id.  
`struct` / `readonly struct` / `record struct`: kis (<~16 byte körüli ökölszabály, nem merev), rövid életű értékekhez (`Guid`, koordináta, `DateOnly`-szerű saját típus), ahol a másolás olcsó, és nincs szükség referenciára. Nagy vagy gyakran boxolódó típusnál a `struct` lassabb lehet, mint a `class`/`record`. Mutable `struct` kerülendő; preferáld a `readonly struct`-ot vagy `record struct`-ot.  
Gyakorlati döntési fa: (1) van Id / életciklus / változó állapot? → `class`; (2) adatátvitel vagy érték-szemantika? → `record`; (3) nagyon kicsi, gyakran stacken élő érték? → `struct`/`record struct`; különben `record` vagy `class`.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record

### Kérdés 15: Mikor választanál `record`-ot DTO-hoz a `class` helyett?

**Válasz:**  
DTO-knál, CQRS command/query objektumoknál és value object-eknél a `record` praktikus: automatikus érték szerinti egyenlőség, olvasható `ToString`, és a `with` kifejezéssel nem mutálunk, hanem módosított másolatot készítünk. Primary constructoros formában a property-k `init`-tel jönnek, tehát létrehozás után nem változnak. Entity-knél (EF Core) viszont általában `class` marad, mert az identitás (Id) számít, nem a mezők tartalma. A record tehát adatátvitelhez és érték-szemantikához illik jobban.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record

### Kérdés 16: Mi az async/await lényege, és mikor használjuk API-kban?

**Válasz:**  
Az `async`/`await` aszinkron, nem blokkoló I/O-t tesz lehetővé: várakozás közben a szál visszakerül a thread poolba, és más kéréseket szolgálhat. Web API-ban ez az alapértelmezett I/O-kötött műveleteknél: EF Core (`ToListAsync`, `SaveChangesAsync`), `HttpClient`, fájl, üzenetsor. CPU-kötött, rövid memóriabeli számításoknál a sync gyakran elegendő, sőt kevesebb overhead. Kerülendő: `.Result`/`.Wait()`, `async void` (kivéve event handlerek), és „fake async” `Task.Run`-nal blokkoló hívásra. Ökölszabály: I/O → async a teljes hívási láncon.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/

### Kérdés 17: Miért kerüljük a `.Result` és `.Wait()` használatát async kódban?

**Válasz:**  
A `.Result` és `.Wait()` szinkron módon blokkolja a hívó szálat egy async műveleten, elveszítve az async előnyeit. Klasszikus ASP.NET SynchronizationContext mellett deadlock veszélyes; ASP.NET Core-ban ritkább, de továbbra is anti-pattern. Emellett a kivételkezelés is csúnyább (`AggregateException`). A helyes megközelítés: végig `await`, „async all the way”. Ha egy könyvtár csak sync API-t ad, ne „aszinkronizáld” mesterségesen `Task.Run`-nal szerveroldalon. Interjúban ez gyakori „red flag” kérdés.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/

### Kérdés 18: Mi a `CancellationToken`, és miért fontos API-kban?

**Válasz:**  
A `CancellationToken` kooperatív megszakítást tesz lehetővé: ha a kliens lecsatlakozik vagy timeout van, a futó I/O abbahagyható. ASP.NET Core automatikusan ad kéréshez kötött tokent, ha paraméterként felvesszük. A tokent végig kell vinni a service → repository → EF Core/`HttpClient` láncon, különben a megszakíthatóság megszakad. Így nem pazarolunk DB- és CPU-erőforrást olyan válaszra, amit már senki nem vár. Timeout és kliens-abort összekapcsolására `CreateLinkedTokenSource` használható.

**Dokumentáció:** https://learn.microsoft.com/dotnet/standard/threading/cancellation-in-managed-threads

### Kérdés 19: Hogyan adod át a `CancellationToken`-t Minimal API-ban és controllerben?

**Válasz:**  
Mindkét helyen elég paraméterként felvenni: a framework a `HttpContext.RequestAborted`-hez kötött tokent injektálja. Minimal API: `async (int id, AppDbContext db, CancellationToken cancellationToken) => ...`. Controller: `GetOrder(int id, CancellationToken cancellationToken)`. A service metódusok szignatúrájában is szerepeljen, és tovább kell adni pl. `FirstOrDefaultAsync(..., cancellationToken)` hívásnak. Ha a lánc közepén elfelejtjük, a megszakítás ott megáll. Ez junior szinten is elvárt jó szokás.

**Dokumentáció:** https://learn.microsoft.com/dotnet/standard/threading/cancellation-in-managed-threads

### Kérdés 20: Mi a különbség az EF Core `Add`, `Attach` és `Update` között?

**Válasz:**  
Az `Add` az entitást `Added` állapotba teszi — következő `SaveChanges` beszúrja. Az `Attach` `Unchanged` állapotba teszi: követi a context, de nem módosít, amíg mi nem változtatunk mezőket. Az `Update` `Modified` állapotba teszi, és mentéskor frissít — akár akkor is, ha nem minden mező változott ténylegesen. Új entitáshoz `Add`, meglévő „csatlakoztatásához” módosítás nélkül `Attach`, teljes frissítéshez (pl. disconnected scenario) `Update`. A helyes választás felesleges UPDATE-eket és hibás INSERT-eket előz meg.

**Dokumentáció:** https://learn.microsoft.com/ef/core/change-tracking/explicit-tracking

### Kérdés 21: Melyek az EF Core Entity State-ek?

**Válasz:**  
Öt fő állapot van: `Unchanged` (követve, nem változott), `Added` (új, beszúrásra vár), `Modified` (változott, frissítésre vár), `Deleted` (törlésre vár), `Detached` (nincs követve az aktuális `DbContext` által). A change tracker ezek alapján generálja az INSERT/UPDATE/DELETE utasításokat. Az állapotok megértése segít optimalizálni a mentést és elkerülni a meglepetéseket disconnected entitásoknál. Interjúban gyakran kérdezik az `Add`/`Attach`/`Update` és az állapotok kapcsolatát.

**Dokumentáció:** https://learn.microsoft.com/ef/core/change-tracking/

### Kérdés 22: Melyek a legfontosabb EF Core migrációs parancsok?

**Válasz:**  
`dotnet ef migrations add <név>` új migrációt hoz létre. `dotnet ef database update` alkalmazza a migrációkat az adatbázisra. `dotnet ef migrations remove` a legutóbbi migrációt törli a projektből (az adatbázist nem vonja vissza magától). `dotnet ef migrations list` listáz. `dotnet ef database update <név>` adott migráció állapotára állít. `dotnet ef dbcontext scaffold` meglévő DB-ből generál modelleket. Ezeket tipikusan a `.csproj` gyökerében futtatjuk; a Migrations mappában `Up`/`Down` metódusok keletkeznek.

**Dokumentáció:** https://learn.microsoft.com/ef/core/managing-schemas/migrations/

### Kérdés 23: Mi a különbség az INNER JOIN és a LEFT JOIN között SQL-ben?

**Válasz:**  
Az INNER JOIN csak azokat a sorokat adja vissza, ahol mindkét táblában van egyezés a join feltétel alapján. A LEFT JOIN (LEFT OUTER JOIN) a bal oldali tábla minden sorát visszaadja; ha a jobb oldalon nincs egyezés, a jobb oldali oszlopok NULL-ok. INNER JOIN-t akkor használunk, ha csak a kapcsolódó párok kellenek; LEFT JOIN-t, ha a bal oldali elemek akkor is kellenek, ha nincs kapcsolódó rekord (pl. termék kategória nélkül). Ez az egyik leggyakoribb SQL interjútéma.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/complex-query-operators

### Kérdés 24: Hogyan írsz LEFT JOIN-t EF Core LINQ-ban?

**Válasz:**  
Klasszikus minta: `join ... into` csoportosítás, majd `from x in group.DefaultIfEmpty()`, és null-ellenőrzés a jobb oldali entitáson. Így kapunk left outer join viselkedést. Az INNER JOIN egyszerű `join ... on ... equals` formával megy. RIGHT JOIN-nak nincs natív LINQ megfelelője — táblák megfordításával LEFT JOIN-ként oldható meg. Full outer joinhoz gyakran két left join uniója kell. Olvasásnál figyelj a korai `ToList()` hívásokra és a felesleges `Include`-okra.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/complex-query-operators

### Kérdés 25: Mi a soft delete (logikai törlés) lényege EF Core-ban?

**Válasz:**  
Soft delete esetén a rekord nem kerül fizikailag törlésre, hanem megjelöljük töröltként (pl. `IsDeleted`, `DeletedAt`). Global query filter (`HasQueryFilter`) automatikusan kiszűri a törölt sorokat, így nem kell minden lekérdezésbe kézzel írni. A `Remove()` hívást interceptorral (`SavingChanges`) `Modified` állapotra és flag állításra lehet fordítani. Előnye a visszaállíthatóság és audit; hátránya a növekvő adat, bonyolultabb egyedi indexek és a szűrés kötelező volta. Nem minden domainhez kell — tudatos döntés.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/filters

### Kérdés 26: Mi az ASP.NET Core middleware, és miért számít a sorrend?

**Válasz:**  
A middleware olyan komponens, amely az HTTP kérés és válasz feldolgozási pipeline-jában fut (hitelesítés, naplózás, kivételkezelés, CORS, cache stb.). A middleware-ek sorrendben hívódnak; a regisztráció sorrendje határozza meg a végrehajtást. Rossz sorrend például azt eredményezheti, hogy az autorizáció előtt még nincs autentikáció, vagy a kivételkezelő nem fogja a hibákat. Inline `app.Use(async (ctx, next) => { ... await next(); })` formában is írható. A pipeline megértése junior szinten is alapelvárás.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/middleware/

### Kérdés 27: Mi a különbség a JWT, az OAuth és az OpenID Connect között?

**Válasz:**  
A JWT (JSON Web Token) aláírt, információt (claim-eket) hordozó token-formátum — API-k hitelesítésére/autorizációjára gyakori. Az OAuth hozzáférés-kezelési protokoll: harmadik fél erőforrásaihoz ad delegált hozzáférést (authorization). Az OpenID Connect az OAuth-ra épülő hitelesítési (authentication) réteg, felhasználó-azonosítással, SSO-hoz ideális. Gyakorlatban: API Bearer token → gyakran JWT; „jelentkezz be Google-lel / saját IdP-vel” → OIDC; csak erőforrás-hozzáférés delegálása → OAuth. ASP.NET Core-ban `AddJwtBearer` / `AddOpenIdConnect` a tipikus integráció.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/authentication/

### Kérdés 28: Mit jelent a SOLID SRP (Single Responsibility Principle)?

**Válasz:**  
Az SRP szerint egy osztálynak egyetlen felelőssége / változási oka legyen. Ha egy `UserService` regisztrál, e-mailt küld és fájlba logol, több okból is változhat — ez SRP sérülés. Jobb: a regisztráció a service-ben marad, az e-mail és a log külön absztrakciókon (`IEmailService`, `ILogger`) keresztül történik. Az SRP javítja a karbantarthatóságot és a tesztelhetőséget. Interjúban gyakran kérnek „rossz vs jó” példát. A DIP-pel együtt különösen erős modularitást ad.

**Dokumentáció:** backend-knowledge-base.md – SOLID

### Kérdés 29: Mit jelent a Dependency Inversion Principle (DIP)?

**Válasz:**  
A DIP szerint a magas szintű modulok ne konkrét implementációktól, hanem absztrakcióktól (interfészektől) függjenek. Példa: `UserService` `ILogger`-t kap, nem közvetlenül `FileLogger`-t — így a logolás cserélhető és mockolható. Ez illeszkedik az ASP.NET Core DI-hez: interfészt regisztrálunk, implementációt injektálunk. A DIP nélkül a kód merev és nehezen tesztelhető. Junior szinten elég az elv + egyszerű DI példa; a Clean Architecture részletek későbbi szint.

**Dokumentáció:** backend-knowledge-base.md – SOLID

### Kérdés 30: Mi a különbség az xUnit `[Fact]` és `[Theory]` között?

**Válasz:**  
A `[Fact]` egyetlen, paraméter nélküli teszteset. A `[Theory]` paraméterezett teszt: több bemeneti adatkészlettel fut, pl. `[InlineData(...)]` attribútumokkal — elkerüli a hasonló Fact-ek másolgatását. Összetettebb adatokhoz `[MemberData]` vagy `[ClassData]` használható. Mindkettőnél ajánlott az Arrange–Act–Assert szerkezet és a `Metódus_Szcenárió_VártEredmény` elnevezés. xUnit-ban minden teszthez új osztálypéldány jön létre, így a konstruktor a setup.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-csharp-with-xunit

### Kérdés 31: Mi az Arrange–Act–Assert (AAA) minta tesztekben?

**Válasz:**  
Az AAA három részre osztja a tesztet: Arrange (SUT és függőségek, bemenet előkészítése), Act (a tesztelt művelet egy hívása), Assert (eredmény/viselkedés ellenőrzése). Egy teszt lehetőleg egy logikai viselkedést ellenőrizzen; több assert ugyanarra a kimenetre elfogadható, de ne keverj több forgatókönyvet. Az elnevezés (`CalculateDiscount_ValidCode_AppliesCorrectDiscount`) bukáskor azonnal érthető. Ez olvashatóbbá és karbantarthatóbbá teszi a tesztkészletet. xUnit/Moq példákban is ezt a szerkezetet követjük.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-csharp-with-xunit

### Kérdés 32: Hogyan használod a Moq-ot unit tesztben?

**Válasz:**  
A Moq-gal a SUT függőségeit izoláljuk: `new Mock<IOrderRepository>()`, majd `Setup` megadja, mit adjon vissza egy hívás, `Verify` pedig ellenőrzi, hogy a metódus meghívódott-e (pl. `Times.Once`). Az `It.IsAny<T>()` és `It.Is<T>(predikátum)` rugalmas paraméterillesztést ad. A mock objektumot `.Object`-ként adjuk a SUT konstruktorának. Cél: gyors, determinisztikus teszt DB/HTTP nélkül. Ha túl sok mock kell egy teszthez, gyakran SRP problémára utal.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-dotnet-test

### Kérdés 33: Mi a különbség Mock, Stub és Fake között?

**Válasz:**  
A Stub előre definiált választ ad, de nem ellenőrzi a hívásokat. A Mock a hívások tényét/számát is ellenőrzi (`Verify`) — viselkedés-alapú tesztelés. A Fake egyszerűsített, de működő implementáció (pl. in-memory repository). Moq-pal stub és mock szerepet is betölthetünk Setup/Verify kombinációval. Interjúban a lényeg: ne ellenőrizzünk feleslegesen minden hívást; azt Verify-oljuk, ami az üzleti szerződés része. Túlzott mockolás törékeny teszteket szül.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-dotnet-test

### Kérdés 34: Mi az extension method, és mikor hasznos?

**Válasz:**  
Az extension method meglévő típushoz ad metódust anélkül, hogy módosítanánk a forrását vagy örökölnénk belőle. Statikus osztályban, első paraméter `this T` formával definiáljuk. A LINQ (`Where`, `Select`) is erre épül. Gyakorlatban pl. `IQueryable<Image>` szűrését `ApplyFilter(this IQueryable<Image> query, ImageFilter? filter)` kiterjesztéssel tisztábban írhatjuk. Előny: olvashatóság, újrafelhasználás; hátrány: túlzott használat elrejtheti a függőségeket. C# 3.0 óta létezik.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods

### Kérdés 35: Mik a Nullable Reference Types (NRT), és mire jók?

**Válasz:**  
C# 8-tól a Nullable Reference Types fordítási idejű (statikus) figyelmeztetéseket ad potenciális `NullReferenceException`-ökre — nem futásidejű null-check. Projektben `<Nullable>enable</Nullable>` után a referencia típusok alapból non-nullable; a nullázhatóságot `string?` jelöli. Hasznos eszközök: null-check, pattern matching (`is null`), `!` (null-forgiving, óvatosan), `ArgumentNullException.ThrowIfNull`, `required` property. Nagy legacy kódbázison fokozatosan érdemes bevezetni. Cél: kevesebb null-hiba már compile time-ban.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/nullable-references

### Kérdés 36: Mire való a Swagger / OpenAPI ASP.NET Core-ban?

**Válasz:**  
A Swagger (OpenAPI) automatikus API dokumentációt és interaktív tesztfelületet (Swagger UI) ad. Fejlesztés közben gyorsan kipróbálhatók a végpontok, és közös szerződést ad más csapatoknak/klienseknek. Tipikus setup: `AddEndpointsApiExplorer`, `AddSwaggerGen`, majd `UseSwagger` / `UseSwaggerUI` (gyakran csak Developmentben). A `.NET 9` sablonokban a beépített `Microsoft.AspNetCore.OpenApi` is előtérbe kerül. A Kiota OpenAPI-ból típusos klienst generálhat.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/tutorials/web-api-help-pages-using-swagger

### Kérdés 37: Mely gyűjtemények hash alapúak, és miért fontos az `Equals`/`GetHashCode`?

**Válasz:**  
Hash alapú például a `Dictionary<TKey,TValue>`, a `HashSet<T>` és a `ConcurrentDictionary`. Átlagosan O(1) Add/Contains/Remove a `GetHashCode` bucket-indexén és az `Equals` ütközéskezelésén múlik. Ha egy osztály nem implementálja helyesen az egyenlőséget, tartalmilag azonos elemek nem találnak egymásra. Mutable kulcs hash-ének változása „elveszett” elemet okozhat — ezért ajánlott immutable kulcs (`record`, `readonly struct`). Egyedi összehasonlításhoz `IEqualityComparer<T>` adható.

**Dokumentáció:** https://learn.microsoft.com/dotnet/standard/collections/

### Kérdés 38: Mit érdemes implementálni egy új, érték-szemantikájú C# típusban?

**Válasz:**  
Érték-objektumnál tipikusan: `Equals` / `IEquatable<T>`, vele együtt `GetHashCode` (`HashCode.Combine`), hasznos `ToString`, és konzisztens `==`/`!=`. Ha rendezhető, `IComparable<T>` is jöhet. Record esetén a fordító sok mindent generál — ezért DTO/value object-nél record előnyös. Entity (EF) osztályoknál gyakran szándékosan nem írunk érték szerinti Equals-t, mert az Id az azonosság. A szabály: ha `Equals` igaz, a hash-eknek is egyezniük kell.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-define-value-equality-for-a-type

### Kérdés 39: Mi a file-scoped namespace, és mi az előnye?

**Válasz:**  
C# 10 / .NET 6 óta a `namespace MyNamespace;` szintaxis a teljes fájlra érvényes névteret ad kapcsos zárójelek nélkül. Kevesebb behúzás, tisztább, olvashatóbb fájlok — különösen nagyobb projektekben. Egy fájlban egy file-scoped namespace a szokás. Funkcionálisan ugyanaz, mint a blokkos `namespace { }`, csak a szintaxis modernebb. Interjúban rövid „mi ez / mióta van” válasz elég.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/namespace

### Kérdés 40: Mire való a `yield return`, és mikor hasznos?

**Válasz:**  
A `yield return` lazy iterátort épít: az elemek egyesével jönnek, nem kell előre teljes listát anyagiasítani. Nagy sorozatoknál, generátoroknál, lépésenkénti bejárásnál memóriahatékony. `yield break` megszakítja az iterációt. Az eredmény jellemzően `IEnumerable<T>`, és csak foreach/iteráláskor fut a logika. Előny: egyszerű szintaxis + lusta kiértékelés; figyelnünk kell, hogy többszöri bejárás újra lefuttathatja a generátort.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/statements/yield

### Kérdés 41: Mik az ASP.NET Core Health Check-ek, és mi a liveness vs readiness?

**Válasz:**  
A Health Check végpontok jelzik, hogy az app üzemképes-e, illetve fogadhat-e forgalmat — orchestratorok (Kubernetes) és load balancerek használják. Regisztrálhatók DB, SQL, Redis, külső URL ellenőrzések, és egyedi `IHealthCheck` implementációk. Liveness: ha bukik, a podot újraindíthatják (beragadt app). Readiness: ha bukik, kiveszik a forgalomból, de nem feltétlenül indítják újra (pl. függőség még nem kész). Gyakori útvonalak: `/health/live`, `/health/ready`.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/host-and-deploy/health-checks

### Kérdés 42: Mi az Options Pattern, és miben különbözik az `IOptions`, `IOptionsSnapshot` és `IOptionsMonitor`?

**Válasz:**  
Az Options Pattern erősen típusos konfigurációt ad `appsettings` szekciókból, DI-n keresztül — jobb, mint nyers `IConfiguration["Key"]` stringek. `IOptions<T>`: singleton, induláskor beolvasott, futás közben nem frissül. `IOptionsSnapshot<T>`: scoped, kérésenként újraolvashat (reloadOnChange esetén hasznos). `IOptionsMonitor<T>`: singleton, de `OnChange`-dzsel élő frissítést támogat — singleton service-ekben is követhető a változás. Validációhoz `ValidateDataAnnotations` / `ValidateOnStart` ajánlott.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/options

### Kérdés 43: Mit csinál a RIGHT JOIN és a FULL OUTER JOIN?

**Válasz:**  
A RIGHT JOIN a jobb oldali tábla minden sorát visszaadja; bal oldali hiány esetén NULL-ok jelennek meg. A FULL OUTER JOIN mindkét tábla összes sorát adja, egyezés nélkül is. EF Core LINQ-ban a RIGHT JOIN nincs natívan; LEFT JOIN megfordított táblasorrenddel helyettesíthető. FULL OUTER JOIN gyakran két oldali left join uniójával oldható meg. SQL-ben közvetlenül írhatók; a választás attól függ, melyik oldal „kötelező” az eredményben.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/complex-query-operators

### Kérdés 44: Mi a Cross Join, és miért kerüljük általában?

**Válasz:**  
A Cross Join Descartes-szorzat: minden bal oldali sor párosul minden jobb oldalival, join feltétel nélkül. EF/LINQ-ban tipikusan két `from` klauzula (`from a in A from b in B`) eredményezi. Az eredményhalmaz robbanásszerűen nőhet, ezért teljesítmény szempontból veszélyes. Ritka, tudatos esetekben (pl. minden kombináció generálása) lehet indokolt. Interjúban a „mi ez / mikor rossz” megkülönböztetés a lényeg az inner/left join mellett.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/complex-query-operators

### Kérdés 45: Mi a különbség az `Include` és az `AsNoTracking` között EF Core lekérdezéseknél?

**Válasz:**  
Az `Include` (és `ThenInclude`) eager loading: a kapcsolódó entitásokat is betölti egy lekérdezésben. Az `AsNoTracking` kikapcsolja a change trackert — csak olvasáshoz ideális, gyorsabb és kevesebb memóriát használ. Gyakori hibák: túl sok `Include` (túltöltés), korai `ToList()` a query közepén, és tracking hagyása tisztán olvasó végpontokon. Projekció (`Select`) is csökkenti a betöltött adatmennyiséget. Junior szinten: olvasás → gyakran `AsNoTracking`; kapcsolódó adat kell → tudatos `Include`.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/complex-query-operators

### Kérdés 46: Hogyan kapcsolódik a global query filter a soft delete-hez?

**Válasz:**  
A `HasQueryFilter` automatikus LINQ szűrőt tesz az entitásra, pl. `e => !e.IsDeleted` vagy `DeletedAt == null`. Így a törölt rekordok alapból nem jelennek meg, és nem kell minden query-be kézzel szűrni — egy felejtés különben „visszahozná” a törölt adatot. Soft delete-nél ez a legfontosabb biztonsági háló az interceptor mellett. Speciális esetben (admin, restore) a filter kikapcsolható (`IgnoreQueryFilters`). A filter és a soft delete flag együtt adja a gyakorlatias megoldást.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/filters

### Kérdés 47: Mikor használjunk sync, és mikor async API metódust?

**Válasz:**  
**Async-ot használd**, ha a művelet I/O-kötött és várakozik: adatbázis (EF Core `ToListAsync` / `SaveChangesAsync`), HTTP (`HttpClient`), fájl, üzenetsor (Kafka/RabbitMQ), gRPC, külső API. Web API végpontokban ez az alapértelmezett: a szál várakozás közben visszakerül a thread poolba, így több kérést szolgálhat ki a szerver. Az async-ot a teljes hívási láncon vidd végig (controller/endpoint → service → repository) — „async all the way”.  
**Sync-et használd**, ha nincs I/O-várakozás: rövid, CPU-kötött, memóriabeli számítás (pl. egyszerű validáció, mapping, matematikai művelet). Ilyenkor az `async`/`await` csak state machine overheadet ad, előnyt nem.  
**Kerülendő:** sync-over-async (`.Result` / `.Wait()`), `async void` (kivéve event handlerek), „fake async” (`Task.Run`-nal blokkoló hívás becsomagolása webkérésben), és az, hogy sync metódusból blokkolva hívsz async API-t.  
**Ökölszabály:** van I/O → async; tiszta számítás → sync. Könyvtáraknál gyakran mindkét változat elérhető (`SaveChanges` / `SaveChangesAsync`) — ASP.NET Core-ban a sync változatot általában ne hívd. Ha a metódus sync, ne tedd `async`-csá csak azért, mert „úgy szokás”.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/best-practices

### Kérdés 48: Hogyan segíti a `Task.WhenAll` a párhuzamos I/O-t?

**Válasz:**  
Ha két vagy több független async I/O műveletünk van (pl. user és orders lekérése), ne egymás után `await`-eljük őket szekvenciálisan. Indítsuk el mindet, majd `await Task.WhenAll(...)` — az összesített várakozási idő közel a lassabb művelet ideje lesz, nem az összegek. Csak akkor párhuzamosítsunk, ha tényleg függetlenek, és a DbContext szálbiztonságát tiszteletben tartjuk (egy `DbContext` nem biztonságos párhuzamos használatra). Ez gyakori junior/mid teljesítménykérdés.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/

### Kérdés 49: Mi történik xUnit-ban a teszt osztály konstruktorában és az `IDisposable.Dispose`-ban?

**Válasz:**  
xUnit-ban nincs NUnit-szerű `[SetUp]`/`[TearDown]`: minden tesztmetódushoz új példány készül a teszt osztályból. A konstruktor a setup (pl. in-memory `DbContext`, SUT létrehozása, mockok), az `IDisposable.Dispose` a teardown (kapcsolat zárás, temp fájl törlés). Aszinkron cleanuphez `IAsyncLifetime` / `IAsyncLifetimeLifetime` használható. Költséges, megosztható erőforráshoz (pl. Testcontainers, `WebApplicationFactory`) `IClassFixture<T>` vagy `ICollectionFixture<T>` kell. A tesztek izoláltak legyenek: egy teszt ne függjön másik sorrendjétől vagy megosztott mutable állapottól. Ez a napi xUnit alapminta.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-csharp-with-xunit

### Kérdés 50: Mit jelent az immutabilitás C#-ban, és milyen eszközökkel érhető el?

**Válasz:**  
Immutabilitás: az objektum állapota létrehozás után nem változik. Előnyei: egyszerűbb gondolkodás a kódról, jobb szálbiztonság lock nélkül, biztonságosabb megosztás, stabil hash kulcsként. Eszközök: `readonly` mező, `init` property, `record` + `with`, `readonly struct`, immutable gyűjtemények. A `with` új példányt készít, az eredetit nem mutatja. Entity-k gyakran mutable class-ok (állapot változik, Id állandó); value object-ek inkább immutable recordok.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record

## Medior

### Kérdés 1: Mi a Clean Architecture lényege, és mit jelent a Dependency Rule?

**Válasz:**  
A Clean Architecture Robert C. Martin megközelítése: a rendszer középpontjában a domain és a use case-ek állnak, a külső rétegek (UI, adatbázis, keretrendszerek) pedig cserélhetők. A Dependency Rule szerint a függőségek mindig befelé mutatnak: a belső rétegek nem ismerhetik a külsőket. Így az üzleti logika technológiától függetlenül tesztelhető és karbantartható. A composition root (pl. `Program.cs`) köti össze a rétegeket DI-vel. Medior szinten elvárás, hogy ezt tudatosan alkalmazzuk, ne csak „réteges mappastruktúrát” másoljunk.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/

### Kérdés 2: Miben hasonlít és miben tér el a Hexagonal, az Onion és a Clean Architecture?

**Válasz:**  
Mindhárom a domain középre helyezését és az infrastruktúrától való függetlenséget célozza. A Hexagonal (Ports & Adapters) portokkal írja le a határokat, adapterekkel pedig a technikai implementációkat. Az Onion rétegeket használ, ahol a külső csak a belsőre támaszkodhat. A Clean Architecture a use case-eket és a Dependency Rule-t hangsúlyozza. Gyakorlatban gyakran keverednek: Clean Architecture Hexagonal portokkal, Onion-szerű rétegezéssel. A választás a projekt méretétől és a csapat tapasztalatától függ; kisebb rendszernél a túl sok absztrakció árt.

**Dokumentáció:** https://alistair.cockburn.us/hexagonal-architecture

### Kérdés 3: Mi a Vertical Slice Architecture, és mikor előnyösebb a klasszikus rétegezésnél?

**Válasz:**  
Vertical Slice-nál nem Controllers/Services/Repositories szerint szervezünk, hanem funkciók szerint (pl. `Orders/Create`, `Orders/GetById`). Egy feature összes kódja – endpoint, validáció, handler, perzisztencia – egy helyen van. Ez csökkenti a rétegek közötti ugrálást, és könnyebbé teszi a feature-alapú fejlesztést. Jól illeszkedik MediatR-hez és REPR-hez. Hátránya: a közös infrastruktúra és a cross-cutting szabályok fegyelmet igényelnek. Medior szinten fontos tudni, mikor elég a slice, és mikor kell közös domain/infrastruktúra réteg.

**Dokumentáció:** https://www.jimmybogard.com/vertical-slice-architecture/

### Kérdés 4: Mi a CQRS alapgondolata, és mi a különbség a Command és a Query között?

**Válasz:**  
A CQRS (Greg Young) a felelősségek szétválasztása: a Command állapotot módosít, a Query csak olvas. A command oldalon gyakran gazdag domain modell fut, a query oldalon pedig olvasásra optimalizált DTO/projekció. Fejlett esetben külön adatforrás is lehet (write store + read model). Előnyei: tisztább modellek, skálázható olvasás, egyszerűbb felelősségek. Nem kötelező mindig külön adatbázis; sok .NET rendszerben ugyanaz a DB, de külön handler-ek és modellek vannak. Medior interjún elvárás, hogy ne keverjük a CQRS-t automatikusan Event Sourcinggel.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/cqrs

### Kérdés 5: Hogyan segíti a MediatR a CQRS megvalósítását .NET-ben?

**Válasz:**  
A MediatR a mediator mintát valósítja meg: a kérés (`IRequest<T>`) és a handler (`IRequestHandler`) között közvetít, így az endpoint/controller nem függ közvetlenül a use case implementációtól. Commandok és queryk külön request/handler párokká válnak, ami támogatja a Single Responsibility elvet. Pipeline behaviorökkel (validáció, logging, tranzakció) cross-cutting concernök adhatók a folyamat elé/mögé. Regisztráció tipikusan `AddMediatR`-rel, assembly scanninggel történik. Fontos: a MediatR önmagában nem „architektúra”, hanem eszköz a laza csatoláshoz.

**Dokumentáció:** https://github.com/jbogard/MediatR

### Kérdés 6: Mi a Repository pattern szerepe, és milyen hibákat érdemes elkerülni?

**Válasz:**  
A Repository az adatelérést interfész mögé rejti, így a domain/alkalmazás réteg nem függ közvetlenül az EF Core-tól vagy más ORM-től. Ez javítja a tesztelhetőséget (mock) és lehetővé teszi az adatforrás cseréjét. DDD-ben jellemzően aggregátum-gyökönként van repository, nem táblánként. Kerülendő az `IQueryable` kiszivárogtatása, mert elmosódik az absztrakció határa. Üzleti logika ne kerüljön a repositoryba; csak adatelérés. Több repository közös tranzakciójához Unit of Work vagy a `DbContext` mint UoW használatos.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design

### Kérdés 7: Mit jelent a Unit of Work mintázat EF Core mellett?

**Válasz:**  
A Unit of Work több változtatást egyetlen atomi egységként kezel: vagy mind sikeres, vagy egyik sem. EF Core-ban a `DbContext` maga is Unit of Work: a change tracker gyűjti a változásokat, a `SaveChanges` pedig együtt menti őket. Explicit UoW osztály akkor hasznos, ha több repositoryt közös tranzakcióban akarunk koordinálni. `BeginTransactionAsync` + commit/rollback szükséges, ha több `SaveChanges` vagy külső erőforrás is van. Medior szinten fontos tudni: ne építsünk felesleges UoW wrapper-t, ha a `DbContext` scoped élettartama már megoldja a problémát.

**Dokumentáció:** https://learn.microsoft.com/ef/core/saving/transactions

### Kérdés 8: Mi a Specification pattern, és mikor éri meg használni?

**Válasz:**  
A Specification egy újrahasználható, elnevezett lekérdezési/üzleti feltétel (pl. `PendingHighValueOrdersSpecification`), jellemzően `Expression<Func<T,bool>>` formában. Így a szűrési logika nem szóródik szét service-ek és repositoryk között. Kombinálható (`And`/`Or`), és in-memory is ellenőrizhető. Akkor éri meg, ha a feltétel ismétlődik vagy domain fogalom. Egyszeri, triviális `Where` feltételekre felesleges. Jó gyakorlat: beszédes név, I/O nélkül; lapozás/rendezés maradjon külön paraméter.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-specification-pattern

### Kérdés 9: Mi a Result pattern (Railway-Oriented Programming), és mikor használjuk exception helyett?

**Válasz:**  
A Result mintában a művelet sikerét/hibáját a visszatérési típus (`Result<T>`) fejezi ki, nem kivétel. Várható üzleti hibáknál (validáció, nincs készlet) ez tisztább és olcsóbb, mint a stack unwinding. A hívót a fordító „emlékezteti”, hogy kezelnie kell a Failure ágat. Váratlan hibákra (DB leállás, null ref) továbbra is exception + globális handler a helyes. Fontos a csapatkonvenció: ne keverjük következetlenül a Result-et és az exception-t ugyanarra a hibatípusra. Gyakori libek: FluentResults, ErrorOr.

**Dokumentáció:** https://learn.microsoft.com/dotnet/standard/exceptions/best-practices-for-exceptions

### Kérdés 10: Miben különbözik az Autofac a beépített MS DI-től medior szinten?

**Válasz:**  
A beépített MS DI a legtöbb ASP.NET Core alkalmazáshoz elegendő (constructor injection, lifetime-ok). Az Autofac gazdagabb: modulok, assembly scanning, property injection, natív interceptor/AOP, fejlettebb lifetime scope. Korábban a keyed services miatt is Autofacot választottak; .NET 8 óta a beépített DI is tud keyed regisztrációt. Clean Architecture nagyobb projekteknél Autofac modulokkal átláthatóbb lehet a composition. Egyszerűbb szolgáltatásoknál az Autofac overhead és függőség felesleges lehet. A döntés a szükséges funkciókon múlik, nem „divaton”.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection

### Kérdés 11: Mi a különbség az IOptions, IOptionsSnapshot és IOptionsMonitor között?

**Válasz:**  
Mindhárom típusos konfigurációhoz (Options pattern) kell. `IOptions<T>` singleton: induláskor olvassa be az értéket, futás közben nem frissül. `IOptionsSnapshot<T>` scoped: minden kérésnél friss konfigurációt ad, ha `reloadOnChange` aktív. `IOptionsMonitor<T>` singleton, de `CurrentValue` + `OnChange` callbackkel élő frissítést támogat, ezért singleton szolgáltatásokban is biztonságos. Élesben érdemes `ValidateDataAnnotations` + `ValidateOnStart` használata. Kerülendő a nyers `IConfiguration["Key"]` stringes olvasás üzleti kódban.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/options

### Kérdés 12: Hogyan modellezünk kapcsolatokat EF Core Fluent API-val?

**Válasz:**  
A Fluent API expliciten leírja az 1:1, 1:N és N:N kapcsolatokat, FK-kat és törlési viselkedést. Példa: `HasOne(...).WithOne(...).HasForeignKey<Profile>(...)`, `HasMany(...).WithOne(...)`, `HasMany(...).WithMany(...)`. Előnye az attribútumokkal szemben: komplex szabályok egy helyen, entitás „tisztább” marad. Kapcsolódik az `IEntityTypeConfiguration<T>` használatához. Medior szinten elvárás a cascade delete tudatos beállítása és a required/optional navigációk helyes modellezése. Hibás konfiguráció futásidőben vagy migrációnál derül ki.

**Dokumentáció:** https://learn.microsoft.com/ef/core/modeling/relationships

### Kérdés 13: Mi az IEntityTypeConfiguration, és miért jobb, mint mindent az OnModelCreatingbe írni?

**Válasz:**  
Az `IEntityTypeConfiguration<T>` entitásonként külön konfigurációs osztályba szervezi a Fluent API szabályokat. Az `OnModelCreating` így rövid marad: `modelBuilder.ApplyConfigurationsFromAssembly(...)`. Ez növeli az olvashatóságot és a csapatmunkát, mert a konfigurációk nem egy óriás metódusban torlódnak. Jól illeszkedik Clean Architecture Infrastructure rétegéhez. Ugyanott kezelhetők indexek, konverziók, kapcsolatok, global filterek. Medior elvárás: konzisztens elnevezés és egy konfiguráció = egy aggregátum/entitás.

**Dokumentáció:** https://learn.microsoft.com/ef/core/modeling/

### Kérdés 14: Mit tudnak az EF Core global query filterek?

**Válasz:**  
A global filter automatikusan hozzáad egy `WHERE` feltételt minden lekérdezéshez az adott entitáson (pl. `!IsDeleted`, `TenantId == currentTenant`). Soft delete és multi-tenancy tipikus használati eset. Előny: nem felejtjük el a szűrést minden querynél. Figyelem: a filter kikapcsolható (`IgnoreQueryFilters`), és a szükséges helyeken tudatosan kell bypassolni (admin, restore). Kapcsolódó entitásoknál is érvényesülhet, ami joinokat befolyásol. Medior szinten fontos a teljesítmény és a „láthatatlan” szűrés tudatosítása.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/filters

### Kérdés 15: Mire valók az EF Core interceptorok?

**Válasz:**  
Az interceptorok a SaveChanges, command végrehajtás vagy connection események köré akasztható cross-cutting logikát adnak (audit mezők, soft delete átírás, domain event dispatch, SQL logging). EF Core 5+ óta első osztályú API (`SaveChangesInterceptor`, `IDbCommandInterceptor`). Előnyük, hogy nem kell minden repositoryban ismételni a logikát. Vigyázat: túl sok/nehéz interceptor nehezíti a debuggolást és lassíthat. Domain event publikálást érdemes mentés után végezni, ne rollback előtt. Medior szinten gyakori példa: `CreatedAt`/`UpdatedAt` automatikus kitöltése.

**Dokumentáció:** https://learn.microsoft.com/ef/core/logging-events-diagnostics/interceptors

### Kérdés 16: Hogyan működik az optimista konkurenciakezelés EF Core-ban?

**Válasz:**  
Optimista stratégiánál feltételezzük, hogy ritka az ütközés: betöltéskor elmentjük a concurrency token eredeti értékét (pl. `rowversion` / `IsConcurrencyToken`). Az `UPDATE` `WHERE` feltétele tartalmazza ezt a tokent; ha 0 sor érintett, `DbUpdateConcurrencyException` keletkezik. Feloldási stratégiák: store wins, client wins, merge. Webes API-knál ez az alapértelmezett, mert nincs hosszú zárolás. Pesszimista zárolás (`UPDLOCK` / `FOR UPDATE`) csak gyakori ütközésnél indokolt. Medior elvárás: exception kezelés és token konfiguráció ismerete.

**Dokumentáció:** https://learn.microsoft.com/ef/core/saving/concurrency

### Kérdés 17: Mi a különbség a TPH, TPT és TPC öröklési stratégiák között?

**Válasz:**  
TPH (Table Per Hierarchy): egy tábla, discriminator oszlop; egyszerű és gyakran leggyorsabb, de nullable oszlopok lehetnek. TPT (Table Per Type, EF Core 5+): típusonként tábla + join; tisztább séma, lassabb lekérdezések. TPC (Table Per Concrete Type, EF Core 7+): minden konkrét típus saját teljes tábla, nincs közös ős-tábla/discriminator. Választás: hasonló mezőknél TPH, erősen eltérő sémánál TPT/TPC. Medior szinten elég az intro szint: trade-offök és mikor melyik. Migrációváltás öröklési stratégiák között költséges lehet.

**Dokumentáció:** https://learn.microsoft.com/ef/core/modeling/inheritance

### Kérdés 18: Melyek az alapvető EF Core teljesítmény-technikák (AsNoTracking, Include, projekció)?

**Válasz:**  
Olvasásnál `AsNoTracking` kikapcsolja a change trackinget, így kevesebb memória és CPU. Kapcsolódó adatokhoz tudatos eager loading (`Include`/`ThenInclude`) kell, N+1 elkerülésére; nagy gráfnál `AsSplitQuery` segíthet. A legjobb gyakran a projekció: `Select` közvetlenül DTO-ra, csak szükséges oszlopokkal. Kerülendő a túlzott `Include` „minden esetre”. További eszközök: indexek, compiled query, `ExecuteUpdate`/`ExecuteDelete` tömeges műveletekre. Medior interjún elvárás: mérni (SQL log, EF logging), ne tippelni.

**Dokumentáció:** https://learn.microsoft.com/ef/core/performance/

### Kérdés 19: Miért használjunk IHttpClientFactory-t, és hogyan jön képbe a Polly?

**Válasz:**  
A `new HttpClient()` socket exhaustionhoz és elavult DNS-hez vezethet. Az `IHttpClientFactory` kezeli a handler poolt és az életciklust, named/typed clientekkel. Polly (és .NET 8+ `Microsoft.Extensions.Http.Resilience`) retry, timeout és circuit breaker pipeline-t ad a HTTP hívásokhoz. Tipikus felállás: typed client + `AddResilienceHandler` exponenciális retryvel és circuit breakerrel. Cél: átmeneti hibák tűrése és kaszkád hibák elkerülése. Fontos a timeoutok helyes rétegezése (HTTP timeout vs. resilience timeout).

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/httpclient-factory

### Kérdés 20: Hogyan működik a Circuit Breaker minta, és miért fontos?

**Válasz:**  
A Circuit Breaker megakadályozza, hogy egy tartósan hibás függőség kimerítse a rendszert. Állapotok: Closed (normál), Open (hívások azonnal fail-fast), Half-Open (próbahívás). Open állapotban fallback adható (cache, default, hibaválasz). Retryvel együtt hasznos, de nem ugyanaz: a retry egy hívást ismétel, a breaker összesített hibatrendet néz. Küszöböket mérés alapján kell hangolni. Túl agresszív nyitás „flappinghez” vezet. Medior szinten elvárás az állapotgép és a cascading failure fogalma.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/circuit-breaker

### Kérdés 21: Milyen caching stratégiákat ismersz ASP.NET Core-ban?

**Válasz:**  
Gyakori szintek: in-memory (`IMemoryCache`), elosztott (`IDistributedCache`, pl. Redis), response/output cache. Stratégiák: cache-aside (olvasáskor tölt, íráskor invalidál), write-through, read-through, refresh-ahead. Cache-elni érdemes ritkán változó, drágán előállítható adatot; user-specifikus/gyorsan változó adatot óvatosan. Kulcsba kerüljön tenant/user, ha releváns (adatszivárgás elkerülése). A rendszer cache nélkül is működjön. Medior elvárás: TTL, invalidáció és stampede tudatosság.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/performance/caching/overview

### Kérdés 22: Mi a HybridCache, és milyen problémát old meg?

**Válasz:**  
A .NET 9 HybridCache egyesíti az L1 (in-memory) és L2 (elosztott, pl. Redis) cache-t. A `GetOrCreateAsync` csökkenti a stampede-et (több szál ne számolja ugyanazt miss esetén), és kezeli a szerializációt. Tag alapú invalidációval célzottan törölhető cache. Elosztott környezetben az L1-ek szinkronja rövid TTL-lel vagy pub/sub invalidációval oldható. Nem helyettesíti az adatbázist: miss/hiba esetén a forrásból kell tudni szolgálni. Medior szinten elég az awareness: mikor érdemes HybridCache-re váltani sima `IDistributedCache` helyett.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/performance/caching/hybrid

### Kérdés 23: Miért fontos a middleware pipeline sorrendje ASP.NET Core-ban?

**Válasz:**  
A middleware lánc sorrendje meghatározza, hogy exception handling, routing, CORS, autentikáció, autorizáció, rate limiting stb. mikor fut. Rossz sorrend tipikus hibákat okoz: pl. auth előtt futó endpoint, vagy exception handler a pipeline végén. Általános minta: exception handling korán, majd HTTPS/routing, CORS, authN/authZ, saját middleware, endpoints. Saját middleware-nél tudni kell a `next` hívás előtti/utáni logikát. Medior szinten elvárás a „miért ez a sorrend?” indoklás, nem csak bemagolás.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/middleware/

### Kérdés 24: Mi a ProblemDetails, és hogyan illeszkedik a globális kivételkezeléshez?

**Válasz:**  
A ProblemDetails (RFC 7807) géppel feldolgozható, egységes HTTP hibaválasz formátum (`type`, `title`, `status`, `detail`, `instance`). ASP.NET Core natívan támogatja; .NET 8-tól `IExceptionHandler` + `AddProblemDetails()` a modern út. A globális handler az utolsó védvonal: naplózza a hibát, státuszkódot választ, és nem szivárogtat stack trace-et produkcióban. Nem helyettesíti a FluentValidation/domain validációt. Medior elvárás: domain hibák → 4xx, váratlan → 500, konzisztens API szerződés.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/error-handling

### Kérdés 25: Mit jelent a strukturált logolás ILogger/Serilog esetén?

**Válasz:**  
Strukturált logolásnál template + named propertyket használunk (`LogInformation("Order {OrderId}", id)`), nem string interpolációt. Így a mezők kereshetők/filterezhetők Seq, ELK, Application Insights rendszerekben. Az `ILogger<T>` absztrakció, a Serilog gyakori sink-gazdag implementáció. Szintek: Trace…Critical; élesben tipikusan Information+. Enricherek (machine name, LogContext) kontextust adnak. Kerülendő a `Console.WriteLine` és a PII nyers logolása. Medior szinten elvárás a helyes sablonhasználat.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/logging

### Kérdés 26: Mi a Correlation ID szerepe, és hogyan valósítjuk meg?

**Válasz:**  
A Correlation ID (vagy trace id) egy kérést végigkövethetővé tesz szolgáltatások és logsorok között. Tipikusan middleware olvassa/generálja az `X-Correlation-Id` fejlécet, és LogContext/Activity propertyként továbbadja. Elosztott tracingnél az OpenTelemetry `Activity`/`traceparent` a modern standard. Kimenő HTTP hívásoknál a fejlécet/propagációt tovább kell vinni. Nélküle incidensnél nehéz összerakni a request útját. Medior elvárás: legalább header + log enrichment awareness.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/distributed-tracing

### Kérdés 27: Miért kell API versioning, és milyen stratégiák vannak?

**Válasz:**  
Az API versioning lehetővé teszi breaking change bevezetését anélkül, hogy meglévő kliensek azonnal eltörnének. Gyakori stratégiák: URL path (`/v1/orders`), query string, header. .NET-ben az Asp.Versioning csomag a bevett megoldás. Fontos a deprecálási politika és a dokumentáció (Swagger/OpenAPI verziónként). Ne verziózzunk feleslegesen minden apró bővítésnél; preferáljuk a backward compatible változásokat. Medior szinten elvárás a trade-offök ismerete (URL egyértelmű, header „tisztább” URL).

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/web-api/advanced/versioning

### Kérdés 28: Hogyan működnek az authorization policy-k és a claim-ek ASP.NET Core-ban?

**Válasz:**  
Az autentikáció azonosít, az autorizáció jogosultságot ellenőriz. Claim-ek a user identity részei (pl. `role`, `permission`, `tenant_id`). Policy-k követelményeket (`IAuthorizationRequirement`) és handlereket csoportosítanak, pl. „AdminOnly”, „MustOwnResource”. Attribútum/Minimal API: `[Authorize(Policy="...")]` / `.RequireAuthorization("...")`. Role-alapú ellenőrzés egyszerű, policy-alapú rugalmasabb összetett szabályokhoz. Medior elvárás: ne keverjük az authN/authZ fogalmát, és tudjuk a claims-principal szerepét.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/authorization/introduction

### Kérdés 29: Mi a különbség az IHostedService és a BackgroundService között?

**Válasz:**  
Az `IHostedService` az alkalmazás életciklusához kötött háttérszolgáltatás interfésze (`StartAsync`/`StopAsync`). A `BackgroundService` absztrakt osztály, amely hosszú futású loophoz ad `ExecuteAsync` sablont. Tipikus használat: queue processor, cache warm-up, polling. Scoped függőségeket `IServiceScopeFactory`-val kell feloldani, mert a hosted service gyakran singleton. Graceful shutdown: figyelni a `CancellationToken`-t. Medior szinten gyakori hibák: DbContext captive dependency és fire-and-forget kivételnyelés.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/hosted-services

### Kérdés 30: Mire való a Quartz.NET a BackgroundService mellett?

**Válasz:**  
A Quartz.NET ütemező keretrendszer: cron/időzített jobok, kalendárik, retry, clustering támogatással. A sima `BackgroundService` + `PeriodicTimer` egyszerű loopokra elég; összetett ütemezéshez (cron, misfire kezelés, több példány koordinációja) Quartz előnyösebb. Jobok DI-vel regisztrálhatók, perzisztens store-ral túlélik az újraindítást. Figyelem: több instance esetén locking/clustering kell, hogy ne fusson kétszer ugyanaz a job. Medior szinten intro: mikor váltsunk timer-loopról Quartzra.

**Dokumentáció:** https://www.quartz-scheduler.net/documentation/

### Kérdés 31: Mikor használjunk SignalR-t, és mi a lényege?

**Válasz:**  
A SignalR valós idejű, kétirányú kommunikációt ad webes kliensek felé (WebSocket, fallback transportokkal). Hubokon keresztül a szerver pusholhat eseményeket (értesítés, live dashboard, chat). Csoportok/kapcsolatok kezelésével célzott üzenetek küldhetők. Nem helyettesíti a message brokert microservice-ek között; inkább kliens–szerver realtime csatorna. Skálázáshoz backplane (Redis) kell több szerverpéldánynál. Medior elvárás: use-case felismerés és a HTTP request-response korlátainak ismerete.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/signalr/introduction

### Kérdés 32: Mik a gRPC alapjai .NET-ben a REST-hez képest?

**Válasz:**  
A gRPC HTTP/2 + Protobuf alapú, erősen típusos RPC: kis payload, jó teljesítmény, streaming támogatással. Szerződés `.proto` fájlban van, belőle generálódik a kód. Belső szolgáltatás–szolgáltatás kommunikációra ideális; böngészős publikus API-kra REST/JSON gyakran praktikusabb. .NET-ben `Grpc.AspNetCore` server és typed client gyakori. Hibakezelés status codeokkal történik, nem feltétlenül ProblemDetails-szel. Medior szinten: protobuf szerződés, unary vs streaming, és mikor válasszunk gRPC-t.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/grpc/

### Kérdés 33: Hogyan illeszkedik a FluentValidation egy MediatR pipeline-ba?

**Válasz:**  
A FluentValidation deklaratív szabályokat ad `AbstractValidator<T>` osztályokban (kötelezőség, formátum, feltételes szabályok). MediatR `IPipelineBehavior` lefuttatja a request validátorait a handler előtt, így nem kell minden handlerben kézi validáció. Hibákból ValidationProblem/ProblemDetails válasz készíthető. Az input validáció a határon van; a domain invariánsok maradjanak a domain modellben. Aszinkron, DB-t érintő szabályoknál vigyázni kell race conditionre. Medior elvárás: pipeline behavior és a rétegek szétválasztása.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/mvc/models/validation

### Kérdés 34: Miben jobb a Mapperly az AutoMapperhez képest, és mikor ne mapeljünk?

**Válasz:**  
Az AutoMapper reflexió/futásidejű konfiguráció alapú; a Mapperly source generator, fordításkor generál hozzárendelő kódot, így gyorsabb és fordítási idejű hibát ad hiányzó mappingnél. Olvasási oldalon gyakran jobb mapping nélkül: EF Core közvetlen DTO projekció. Írásnál a domain létrehozás legyen factory/konstruktor, ne mechanikus map, hogy az invariánsok megmaradjanak. Medior szinten elvárás a „mikor ne használjunk mappert” válasz. AutoMapper licencváltozása után sok csapat Mapperlyre vált.

**Dokumentáció:** https://learn.microsoft.com/dotnet/csharp/roslyn-sdk/source-generators-overview

### Kérdés 35: Mi a Test Data Builder és az Object Mother különbsége?

**Válasz:**  
Az Object Mother kész, elnevezett példányokat ad (`OrderMother.PaidOrder()`), gyors és olvasható happy-path tesztekhez. A Test Data Builder fluent API-val épít objektumot (`new OrderBuilder().WithCustomer(...).Build()`), így könnyű egy-egy mezőt variálni. Builder rugalmasabb edge case-ekhez; Mother kevesebb boilerplate a tipikus esetekhez. Gyakran együtt használják: Mother belül Buildert hív. Cél: ne ismételjünk 15 soros objektum-setupot minden tesztben. Medior elvárás: teszt olvashatóság és intention-revealing adatok.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/unit-testing-best-practices

### Kérdés 36: Mire való a WebApplicationFactory integrációs teszteknél?

**Válasz:**  
A `WebApplicationFactory<TEntryPoint>` in-memory tesztkiszolgálót indít az ASP.NET Core appból, valós pipeline-nal (middleware, DI, endpointok). `HttpClient`-tel hívhatók a végpontok anélkül, hogy hálózati portot nyitnánk. `ConfigureWebHost`-tal cserélhető DB (pl. Testcontainers/SQL) és mockolhatók külső függőségek. Ez a testing pyramid „integration” szintje: többet fed, mint unit, de lassabb. Medior szinten intro: smoke tesztek authra, validációra, happy path API-ra. Kerülendő az egész rendszer E2E-zése minden unit helyett.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/test/integration-tests

### Kérdés 37: Mi a REPR pattern, és hogyan kapcsolódik a Minimal API-hoz?

**Válasz:**  
A REPR (Request–Endpoint–Response) minden HTTP végpontot önálló egységként kezel: bemeneti DTO, endpoint, kimeneti DTO. Elkerüli a „God Controller” antipatternt, és jól illeszkedik Vertical Slice-hoz. Minimal API + MediatR gyakori megvalósítás; FastEndpoints is ezt a stílust támogatja. Az endpoint csak leképezi a HTTP-t use case hívásra, üzleti logikát ne tartalmazzon. Medior elvárás: különbség MVC controller vs. feature endpoint között. Következetesség fontos: ne keverjük random módon a két stílust.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis

### Kérdés 38: Mi a Service Collection Extension pattern, és miért hasznos?

**Válasz:**  
Extension methodökkel (`AddApplicationServices`, `AddInfrastructureServices`) modulokra bontjuk a DI regisztrációt, így a `Program.cs` rövid és olvasható marad. Rétegenként/feature-önként a csapat saját regisztrációt birtokol. Fluent visszatérés (`IServiceCollection`) lehetővé teszi a láncolást. Libraryknél `services.AddMyLibrary()` kényelmes fogyasztói API. Kerülendő az I/O a regisztráció közben, és az óriás „AddEverything” metódus. Medior szinten ez a Structured Service Composition alapja.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection

### Kérdés 39: Mikor válasszunk Kafka-t, és mikor RabbitMQ-t?

**Válasz:**  
A Kafka elosztott, perzisztens log: magas átbocsátás, partíción belüli sorrend, újrajátszható event stream (analitika, audit, event-driven integráció). A RabbitMQ klasszikus üzenetbroker: gazdag routing (exchange/binding), work queue, késleltetés/prioritás jellegű feladatok. Kafka retention alapján megőrzi az üzenetet; RabbitMQ tipikusan ack után eltávolítja. Nagy rendszerekben mindkettő előfordulhat eltérő szerepben. Az alkalmazásréteg ne függjön közvetlenül a brokertől: absztrakció vagy MassTransit javasolt.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/technology-choices/messaging

### Kérdés 40: Mit ad a MassTransit az üzenetküldéshez .NET-ben?

**Válasz:**  
A MassTransit broker-absztrakció (RabbitMQ, Azure Service Bus stb.): szerializáció, consumer pipeline, retry/redelivery, outbox, sagák, telemetria. Consumer `IConsumer<T>` implementáció; regisztráció `AddMassTransit`-tel. Csökkenti a boilerplate-et és egységesíti a hibakezelést. EF Core transactional outbox integrációval atomi DB + üzenet publish közelíthető. Figyelem: licencmodell-változások miatt új projektnél ellenőrizni kell a verziót. Medior intro: consumer, bus config, retry – nem feltétlenül full saga mastery.

**Dokumentáció:** https://masstransit.io/documentation/configuration

### Kérdés 41: Mit jelent az idempotency API-kban, és miért fontos?

**Válasz:**  
Idempotens művelet többszöri végrehajtása ugyanazt az üzleti eredményt adja (pl. ugyanazzal az `Idempotency-Key` fejléccel ismételt POST nem hoz létre dupla rendelést). Hálózatban az at-least-once kézbesítés és kliens retry miatt a duplikátum természetes. Megvalósítás: kulcs tárolása + válasz cache / egyedi constraint. Főleg fizetés, rendelés, webhook fogadásnál kritikus. Nem minden GET „automatikusan megoldott” write oldalon. Medior szinten elvárás a problémafelismerés és egy egyszerű kulcsalapú stratégia.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer

### Kérdés 42: Mi az Outbox pattern lényege?

**Válasz:**  
Az Outbox biztosítja, hogy az üzleti adat mentése és az esemény kiküldése atomi legyen. Az üzenetet nem közvetlenül a brokerre küldjük a tranzakción kívül, hanem outbox táblába írjuk ugyanabban a DB tranzakcióban. Háttérfolyamat (polling vagy CDC) olvassa és továbbítja a brokernek. Így elkerülhető a „DB commitolt, de üzenet elveszett” inkonszisztencia. A fogyasztók legyenek idempotensek, mert at-least-once előfordul. Medior intro: mikor kell, és miért jobb, mint a „SaveChanges után Publish”.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/subscribe-events

### Kérdés 43: Mik a soft delete best practice-ek EF Core-ban?

**Válasz:**  
Soft delete esetén a rekord `IsDeleted` (vagy `DeletedAt`) flaggel jelölt, fizikailag nem törlődik. Global query filter automatikusan elrejti a törölteket. Interceptor/`SaveChanges` override átírhatja a `Delete` állapotot update-re. Előny: visszaállíthatóság, audit; hátrány: egyedi indexek (`Email` + nem törölt), FK/cascade komplexitás, nagyobb táblák. Admin lekérdezéshez `IgnoreQueryFilters` tudatosan. Medior elvárás: ne felejtsük el az egyedi constraint és a kapcsolódó entitások kezelését.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/filters

### Kérdés 44: Mikor érdemes Dapperrel hibrid perzisztenciát használni EF Core mellett?

**Válasz:**  
EF Core erős a write oldalon (tracking, UoW, domain modell). Összetett riportoknál, aggregációknál Dapper + kézzel írt SQL gyakran egyszerűbb és gyorsabb. Hibrid megközelítés: command/write EF-fel, query/report Dapperrel. Ugyanaz a kapcsolat/tranzakció megosztható, ha szükséges. Kerülendő a két ORM kaotikus keverése ugyanarra a use case-re. Medior awareness: nem „vagy EF vagy Dapper”, hanem felelősség szerinti választás. A SQL injekció elkerülése parameterized querykkel kötelező.

**Dokumentáció:** https://learn.microsoft.com/ef/core/performance/

### Kérdés 45: Hogyan működik a rate limiting és az output caching .NET-ben?

**Válasz:**  
A .NET 7+ beépített rate limiting middleware védi az API-t túlterhelés/visszaélés ellen (fixed window, sliding window, token bucket, concurrency). Particionálás user/IP/API-kulcs szerint ajánlott; 429 + `Retry-After` jó gyakorlat. Az output caching a szerveroldali válasz cache-elése, tag alapú invalidálással (.NET 8+). Autentikált, user-specifikus tartalmat `VaryBy` nélkül ne cache-eljünk. Medior szinten: mikor melyik limiter, és output cache vs. adat-cache különbsége.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/performance/rate-limit

### Kérdés 46: Mik a keyed services .NET 8-ban, és milyen problémát oldanak meg?

**Válasz:**  
Keyed service-nél ugyanahhoz az interfészhez több implementációt kulccsal regisztrálunk (`AddKeyedScoped<IPaymentProvider, StripePaymentProvider>("stripe")`). Feloldás: `[FromKeyedServices("stripe")]` vagy `GetRequiredKeyedService`. Ez korábban Autofac-erősség volt; most a beépített DI is tudja. Tipikus eset: több payment/email provider, strategy választás. Kerülendő a service locator túlhasználata üzleti kódban. Figyeljünk a captive dependencyre (`ValidateScopes` / `ValidateOnBuild`). Medior elvárás: keyed vs. `IEnumerable<T>` különbsége.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/dependency-injection#keyed-services

### Kérdés 47: Hogyan kapcsolódik egymáshoz a Vertical Slice, a CQRS és a REPR egy medior szintű architektúrában?

**Válasz:**  
Gyakori modern felállás: feature mappa (Vertical Slice) → REPR endpoint → MediatR command/query (CQRS) → handler + validáció + perzisztencia. Ez olvasható, feature-centrikus struktúrát ad, miközben a felelősségek szétválnak. A közös infrastruktúra (EF, messaging, auth) továbbra is megosztható. Nem kell minden projektre full Clean Architecture + külön read DB; a minták fokozatosan vezethetők be. Medior szinten az érték a tudatos kompozíció: a minták szolgálják a problémát, nem fordítva. A túlabsztrahálás ugyanolyan veszélyes, mint a spagetti kód.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/cqrs

### Kérdés 48: Milyen sorrendben gondolkodnál egy új .NET API medior szintű „alapvázán”?

**Válasz:**  
Először a use case határok és API szerződés (verziózás, auth policyk, ProblemDetails). Aztán composition: Service Collection Extensionök, Options pattern, strukturált log + correlation. Perzisztencia: EF konfigurációk, global filter/soft delete, teljesítményalapok (`AsNoTracking`, projekció). Resilience: HttpClientFactory + retry/circuit breaker. Szükség szerint cache (HybridCache awareness), háttérjob (BackgroundService/Quartz), messaging (MassTransit/outbox/idempotency). Végül tesztek: unit builder/mother + `WebApplicationFactory` smoke. Medior elvárás: ezt a „gerincet” indokolni tudni, nem keretrendszer-divatot követni.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/

## Senior

### Kérdés 1: Mi a Saga minta, és miért nem elég a 2PC mikroszolgáltatások között?

**Válasz:**  
A Saga hosszú lefutású, több szolgáltatást érintő üzleti folyamatot old meg sorozatos lokális tranzakciókkal és szükség esetén kompenzáló műveletekkel. Klasszikus ACID / 2PC (XA) technikailag létezik, de szinkron blokkolást, rendelkezésre állási csatolást és rossz skálázhatóságot okoz. A CAP szempontjából a konzisztenciáért a rendelkezésre állással fizetsz. A gyakorlatban szolgáltatásonként lokális ACID, Outbox, Saga és idempotens fogyasztó a recept. A kompenzáció nem feltétlenül „törlés”, hanem üzleti ellenlépés (visszatérítés, lemondás).

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/saga

### Kérdés 2: Mi a különbség a Saga orchestration és choreography között?

**Válasz:**  
Orchestrationnál dedikált koordinátor (state machine) ismeri az állapotot, és parancsokat küld a résztvevőknek. Choreographyban nincs központi orchestrator: minden szolgáltatás eseményre reagál, és maga dönt a következő lépésről. Orchestration átláthatóbb komplex elágazásoknál; choreography lazább csatolást ad, de a folyamat sehol nincs egy helyen leírva. Rövid, 2–4 lépéses folyamatnál a koreográfia elég lehet; 5+ lépésnél vagy elágazásnál az orchestration követhetőbb. Ugyanabban a folyamatban ne keverd a két megközelítést.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/saga

### Kérdés 3: Hogyan valósítod meg a choreography-alapú Sagát MassTransittal?

**Válasz:**  
Közös, vékony contracts projektben múlt idejű események élnek, mindegyikben `CorrelationId`-val. Minden consumer elvégzi a saját munkáját, majd új eseményt publikál. Sikertelen lépésnél más szolgáltatás kompenzáló consumere reagál (pl. foglalás lemondása). Elengedhetetlen: idempotens consumer, Outbox az írás+publikálás atomitásához, retry + DLQ, valamint watchdog a „beragadt” folyamatokra. A kompenzáció is elbukhat; tervezz manuális/emberi feldolgozási sort SLA után.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/saga

### Kérdés 4: Mi az Outbox pattern, és milyen hibát előz meg?

**Válasz:**  
Az Outbox garantálja, hogy az adatbázis-írás és az üzenetküldés atomikusan történjen: az üzenetet ugyanabban a tranzakcióban mentjük outbox táblába, nem közvetlenül a brokerre. Háttérfolyamat (poller vagy CDC) továbbítja a broker felé. Előzi a „DB commitolt, de a Publish elbukott” inkonzisztenciát. A fogyasztók legyenek idempotensek (at-least-once). Nagy volumennél Debezium/CDC hatékonyabb lehet, mint agresszív polling.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/subscribe-events

### Kérdés 5: Mi az Inbox pattern, és hogyan ad „effectively-once” szemantikát?

**Válasz:**  
Az Inbox a fogyasztó oldali pár: a már feldolgozott `MessageId`-kat táblában rögzíted ugyanabban a tranzakcióban, mint az üzleti hatást. Ha az üzenet újra jön, csendben eldobod. Az egyedi index a párhuzamos duplikátum elleni védelem. A gyakorlatban at-least-once a valóság; exactly-once broker+DB kombinációban gyakorlatilag elérhetetlen. Outbox + Inbox együtt ad end-to-end effectively-once garanciát.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer

### Kérdés 6: Mit jelent az eventual consistency, és hogyan kezeld a UI-n?

**Válasz:**  
Mikroszolgáltatásoknál nincs közös ACID tranzakció; az állapot előbb-utóbb konvergál eseményeken keresztül. A UI-nak ezt kommunikálnia kell: tipikusan `202 Accepted` + státusz-végpont / polling / SignalR, nem azonnali „kész” `200`. Read-your-own-writes problémánál: optimista UI frissítés, a parancs válaszában visszaadott adat, vagy verzió-token a projekcióhoz. Mutasd a „feldolgozás alatt” állapotot; ne ígérj azonnali konzisztenciát aszinkron háttérfolyamat mellett. SLA-ban mérhető legyen a projection lag.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven

### Kérdés 7: Magyarázd el a CAP-tételt és a PACELC kiegészítést a gyakorlatban!

**Válasz:**  
CAP: Consistency, Availability, Partition tolerance közül particionálás alatt legfeljebb kettő garantálható; a P élesben előbb-utóbb bekövetkezik. A döntés: particionálás alatt C vagy A. CP: inkább hiba, mint elavult adat (pénzügy, készlet). AP: válaszol, akár stale adattal (katalógus, ajánlás). PACELC: ha nincs partíció, latencia vs. konzisztencia a kompromisszum. A konzisztenciaigényt műveletenként döntsd el, ne rendszerszinten.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven

### Kérdés 8: Mi az Event Sourcing, és mikor használd Martent?

**Válasz:**  
Event Sourcingnál nem az aktuális állapotot tárolod elsődlegesen, hanem az állapotváltozást okozó eseményeket; az állapot replay/fold eredménye. Előny: teljes audit, új olvasási modellek utólag. Marten PostgreSQL fölött streamet, snapshotot és async projekciókat ad. Ne alkalmazd az egész rendszerre – jellemzően 1–2 aggregátum indokolja. Az események immutable-ek; változásnál upcaster kell. Az async projekció eventual consistency.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/event-sourcing

### Kérdés 9: Mi a különbség a domain event és az integration event között?

**Válasz:**  
Domain event a bounded contexten belül, in-process, a domain nyelvén keletkezik (pl. `OrderPlaced`). Integration event a contexten kívülre, brokerre megy: publikus, verziózott szerződés, primitívekkel. A kettő között az application réteg fordít; a domain event ne szivárogjon ki a brokerre. Domain eventet csak sikeres `SaveChanges` után publikálj, különben fantom esemény keletkezik.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation

### Kérdés 10: Melyek az event-driven integrációs stílusok (Fowler), és mikor melyik?

**Válasz:**  
Event Notification: minimális jelzés, a fogyasztó visszahív a forrásra – laza modell, de futásidejű csatolás. Event-Carried State Transfer (ECST): az esemény hordozza a szükséges állapotot – autonóm fogyasztó, nagyobb szerződés. Event Sourcing: az esemény az igazság forrása. CQRS-integráció: esemény frissít távoli olvasási modellt. Mikroszolgáltatásnál ECST a leggyakoribb jó választás. Kerüld a CRUD eseményeket (`CustomerUpdated`); nevezz üzleti eseményt.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture

### Kérdés 11: Hogyan verziózd az üzenet-szerződéseket törés nélkül?

**Válasz:**  
Producer és consumer külön deployol – a contract publikus API. Biztonságos: új opcionális mező. Törő: törlés, átnevezés, típusváltás, kötelezővé tétel. Törő változásnál expand–contract: párhuzamos V1/V2, fogyasztók átállnak, majd V1 kivezetése. Kafka topic névbe (`orders.placed.v2`) vagy message type névtérbe tedd a verziót. Schema Registry kikényszerítheti a BACKWARD/FORWARD/FULL kompatibilitást. Tolerant reader: ismeretlen mezőket hagyd figyelmen kívül.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture

### Kérdés 12: Kafka: mi a topic, partition, offset, consumer group szerepe?

**Válasz:**  
A Kafka perzisztens commit log, nem klasszikus sor: retention ideig megmarad, több csoport újraolvashatja. Topic: nevesített stream. Partition: fizikai felosztás; sorrend csak partíción belül garantált. Key: meghatározza a partíciót (`hash(key) % n`). Offset: pozíció a partíción; a fogyasztó commitolja. Consumer group: partíciónként egy fogyasztó – a párhuzamosság felső korlátja a partíciószám.

**Dokumentáció:** https://docs.confluent.io/kafka-clients/dotnet/current/overview.html

### Kérdés 13: Mit okoz a Kafka rebalance, és hogyan kerüld el a dupla feldolgozást?

**Válasz:**  
Fogyasztó csatlakozásakor/kiesésekor a csoport újraosztja a partíciókat; classic rebalance alatt a feldolgozás szünetelhet. Ha a feldolgozás hosszabb, mint a `MaxPollIntervalMs`, a broker kidobja a fogyasztót, és más újra megkapja az üzenetet – gyakori „kétszer dolgozta fel” ok. Használj CooperativeSticky stratégiát, hangold a session/poll intervallumokat, és legyen idempotens a fogyasztó. Offsetet csak sikeres feldolgozás után commitolj (`EnableAutoCommit = false`).

**Dokumentáció:** https://docs.confluent.io/kafka-clients/dotnet/current/overview.html

### Kérdés 14: Hogyan kezeled a poison message-et Kafkán (DLQ, retry topic)?

**Válasz:**  
A nem feldolgozható üzenet ne blokkolja a partíciót: írd DLQ topicba a hibainfóval a headerben, majd commitold az eredetit. Átmeneti hibánál inkább késleltetett retry topic (`retry-5m`, `retry-1h`), ne azonnali DLQ. A kulcs legyen az aggregátum ID; túl kevés kulcs forró partíciót, random GUID sorrendvesztést okoz. Partíciószám növelése megváltoztatja a key→partition leképezést – kapacitástervezd előre.

**Dokumentáció:** https://docs.confluent.io/kafka-clients/dotnet/current/overview.html

### Kérdés 15: RabbitMQ: exchange, binding, routing key – mikor melyik exchange típus?

**Válasz:**  
Producer → Exchange → (binding + routing key) → Queue → Consumer. Direct: pontos kulcs. Topic: wildcard (`order.*`, `order.#`). Fanout: broadcast minden bekötött sorba. Headers: header alapú. Ack után az üzenet eltűnik; nack `requeue: false` DLX-be viszi. Állíts prefetch-et; a channel nem szálbiztos. Durable exchange/queue + persistent üzenet, ha a tartósság számít. Ne `autoAck: true`, ha a veszteség nem elfogadható.

**Dokumentáció:** https://www.rabbitmq.com/tutorials/tutorial-four-dotnet

### Kérdés 16: Mikor válassz Kafkát és mikor RabbitMQ-t?

**Válasz:**  
Kafka: nagy átbocsátású event streaming, több független fogyasztó ugyanarra a folyamra, replay/retention, audit, event sourcing, analitika. RabbitMQ: feladatelosztás (work queue), gazdag routing (direct/topic/fanout), késleltetés/prioritás, RPC-szerű request–reply. Kafka partíción belüli sorrendet és újrajátszást ad; RabbitMQ tipikusan ack után eltávolítja az üzenetet. Nagy rendszerekben gyakran mindkettő jelen van eltérő szerepben. A broker választása ne szivárogjon az application rétegbe – MassTransit/Wolverine vagy `IEventPublisher` absztrakció mögé tedd.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture

### Kérdés 17: MassTransit: mi a különbség a Publish és a Send között?

**Válasz:**  
`Publish` eseményt szór (pub/sub): minden érdeklődő consumer megkapja; a küldő nem ismeri a fogyasztókat. `Send` parancsot küld konkrét végpontnak (queue/URI): egy fogyasztó dolgozza fel. Névkonvenció: esemény múlt idő (`OrderPlaced`), parancs felszólító (`ReserveInventory`). Ne Publish-olj parancsot (senki sem felelős egyértelműen) és ne Send-elj eseményt (elveszik a több fogyasztó előnye). Az üzenetek legyenek immutable recordok külön contracts csomagban, ne domain entitások; tartalmazzanak `CorrelationId`-t.

**Dokumentáció:** https://masstransit.io/documentation/concepts/messages

### Kérdés 18: Hogyan működik a MassTransit saga state machine?

**Válasz:**  
Automatonymous state machine perzisztens állapottal (EF/Mongo/Redis), deklaratív korrelációval (`CorrelateById`). Minden várakozó állapothoz tartozzon timeout (scheduled message), különben örökre beragadhat. Minden előrehaladó lépéshez tervezz kompenzációt. Optimista konkurencia (`RowVersion`) kell, mert több üzenet érkezhet egyszerre. A state machine csak koordinál; a munkát a consumerek végzik. Ne tárolj nagy objektumot a saga állapotában.

**Dokumentáció:** https://masstransit.io/documentation/patterns/saga

### Kérdés 19: MassTransit hibakezelés: retry vs. redelivery vs. error queue?

**Válasz:**  
Retry: azonnali, memóriában – rövid átmeneti hibákra. Delayed redelivery: visszakerül a brokerhez késleltetve – hosszabb kiesésre. Error queue (`_error`): ha elfogytak a próbák, manuálisan visszajátszható. Validációs/végleges hibát `Ignore<T>`-vel engedd azonnal error queue-ba. Circuit breaker / kill switch védi a sort tartós magas hibaaránynál. Ne nyeld el a kivételt a consumerben – akkor sikeresnek látszik a feldolgozás.

**Dokumentáció:** https://masstransit.io/documentation/configuration/middleware/retry

### Kérdés 20: Hogyan oldod meg, hogy háttérjob ne fusson le többször több példányon?

**Válasz:**  
Több K8s/replica példánynál minden `BackgroundService` elindul – a memóriabeli `lock` nem elég. Megoldások: DB lock (`sp_getapplock`, `pg_try_advisory_lock`), Redis RedLock TTL-lel, vagy platform: Quartz cluster, Hangfire, K8s CronJob / single-replica worker. A lock TTL lehet rövidebb a munkánál – lease renewal vagy idempotens művelet kell. Mindig legyen lejárat; lejárat nélküli lock örökre beragadhat. A lock nem helyettesíti az idempotenciát.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/hosted-services

### Kérdés 21: Mit ad az OpenTelemetry .NET-ben, és hogyan tartsd össze a trace-t brokeren át?

**Válasz:**  
OTel egységesíti a trace, metric és log jeleket; .NET-ben `Activity` = span, `Meter` = metrika. Instrumentáld ASP.NET Core-t, HttpClientet, EF-et, MassTransitet, és exportálj OTLP-vel. HTTP-n a W3C `traceparent` automatikusan utazik; Kafka/nyers brokernél manuálisan Inject/Extract kell a headerbe, különben a trace elszakad. Metrika-tagek legyenek alacsony kardinalitásúak (ne userId/orderId). Sampling: hibás/lassú kéréseket mindig mintázz.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/observability-with-otel

### Kérdés 22: Mi az SLI, SLO és error budget, és hogyan riassz?

**Válasz:**  
SLI: felhasználói élményt tükröző mérőszám (pl. `/orders` 500 ms alatti sikeres arány). SLO: célérték (pl. 99,5% / 30 nap). Error budget: a 100%–SLO különbség; ha elfogy, stabilitás > új feature. Riassz tünetre (hibaarány, burn rate), ne nyers CPU-ra. Minden riasztás legyen actionable + runbookos. Üzenetrendszernél kritikus: consumer lag és DLQ/error queue méret. A négy aranyjel: latency, traffic, errors, saturation.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/observability-app-health-monitoring

### Kérdés 23: Hogyan vidd végig a Correlation ID-t API → üzenet → worker úton?

**Válasz:**  
.NET-ben az `Activity.Current.TraceId` a W3C alap; saját `X-Correlation-ID` legacy/partner miatt indokolt. Tedd a logokba (OpenTelemetry/Serilog enrichment + LogContext), és add vissza a válasz headerben. MassTransit/Wolverine propagálja; nyers Kafkánál propagator Inject/Extract. BackgroundService-ben nincs bejövő kérés: indíts saját root Activity-t. Ne generálj új ID-t minden szolgáltatásban; ne tegyél PII-t/tokent a baggage-be.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/distributed-tracing

### Kérdés 24: Polly v8 / Microsoft.Extensions.Resilience: mi a standard pipeline sorrendje?

**Válasz:**  
A standard HTTP resilience handler sorrendje: rate limiter → total timeout → retry → circuit breaker → attempt timeout. A retry a CB fölött van, hogy nyitott áramkör ne generáljon felesleges próbákat. Használj exponenciális backoffot jitterrel (thundering herd ellen). Timeout nélkül a retry csak sokszorozza a beragadást. Ne retry-olj 4xx üzleti hibát és nem idempotens POST-ot kulcs nélkül. Kerüld a nested retry-t kliens+gateway+service láncban (szorzódik).

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/resilience/

### Kérdés 25: Milyen rugalmassági minták kellenek a circuit breakeren túl?

**Válasz:**  
Timeout (attempt + total), bulkhead/concurrency limiter függőségenként, fallback/graceful degradation, load shedding (429/503 + Retry-After), hedging csak idempotens hívásra, káosz-teszt (Simmy). Függőségenként külön tipizált HttpClient + pipeline. Retry storm: egy láncban egy helyen legyen retry. Az idempotencia a resilience feltétele. Jelezd, ha csökkentett módban futsz – ne adj csendben hibás adatot.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/resilience/http-resilience

### Kérdés 26: Mi a BFF és az API Gateway különbsége? Hol jön be a YARP?

**Válasz:**  
API Gateway: közös belépési pont – routing, auth, rate limit, TLS, cross-cutting. BFF: kliens-típusonként (web/mobil/partner) szabott vékony backend – aggregáció, formázás, de üzleti logika nélkül. YARP: .NET reverse proxy middleware ASP.NET Core appban; konfigurálható route/cluster, transform, health check, policy. A gateway ne tartalmazzon üzleti logikát vagy DB-hozzáférést. Zero trust: a szolgáltatás ne bízzon vakon abban, hogy a gateway már ellenőrzött.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp

### Kérdés 27: Mi az Aggregator pattern, és miben különbözik a BFF-től / Gateway-től?

**Válasz:**  
Az Aggregator egy hívásra több szolgáltatás adatát fésüli össze egy válasszá – a kliens ne ismerje a belső topológiát. Hívások menjenek `Task.WhenAll`-lal; nem kritikus forrás fallbackeljen (graceful degradation). Timeout + CB minden downstreamre. Gateway: routing/auth; BFF: kliens-specifikus felület; Aggregator: adatösszefésülés. Ne módosíts több szolgáltatást aggregátorban (arra Saga való). Sokszor BFF + aggregátor egyben él, de a felelősség legyen tiszta.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/gateway-aggregation

### Kérdés 28: Mi az Anti-Corruption Layer, és hol helyezed el?

**Válasz:**  
Az ACL védőréteg, amely a saját domain modellünket elszigeteli legacy/harmadik fél/más bounded context „szennyező” modelljétől. Feladata a fordítás/mapping (DTO → saját típus, státuszok, hibák). Tedd az Infrastructure rétegbe; a Domain ne tudjon a külső rendszerről. Ne engedd, hogy külső DTO/enum megjelenjen a domainben. Ha a külső rendszer gyakran változik, az ACL abszorbeálja a változékonyságot. Teszteld a fordítást, különösen hiányos/hibás külső válaszokra.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/anti-corruption-layer

### Kérdés 29: Hogyan működik a Strangler Fig migráció?

**Válasz:**  
Fokozatosan „körbenövi” az új rendszer a legacy-t: reverse proxy/gateway mögött funkciónként / bounded contextenként átirányítod a forgalmat. Kerüld a big bang rewrite-ot. Használj canary/shadow trafficet, mérhető SLO-t és visszaállítási tervet minden szeletre. Anti-corruption layer védi az új domaint a legacy modelltől. A strangler átmeneti állapot – ne hagyjad évekig terv és véghatáridő nélkül párhuzamosan. Ne migrálj tisztázatlan adat-/tranzakcióhatárú szeletet.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/strangler-fig

### Kérdés 30: Modular monolith vs. mikroszolgáltatás – mikor melyik?

**Válasz:**  
A microservice költséggel jár: elosztott tranzakció, hálózat, contract verziózás, observability, deploy komplexitás. Modular monolith ugyanazt a moduláris gondolkodást adja egy deploy egységben: `*.Public` / `*.Internal`, séma per modul, in-process üzenet, architektúra tesztek. Indokolt microservice: külön skálázás, stack, csapat/release, megfelelőség. Kerüld az elosztott monolitot (szinkron lánc + együtt deploy). Greenfieldben, ha a határok tisztázatlanok, kezdj modular monolithtal.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/

### Kérdés 31: Milyen adatbázis-stratégiákat ismersz mikroszolgáltatásoknál?

**Válasz:**  
Alapértelmezés: database per service – laza csatolás, független deploy. Shared DB csak átmenet (strangler), és egy táblát egy service írhat. Modular monolithnál séma per modul. Polyglot persistence indokolt esetben; ökölszabály: relációs alap, PostgreSQL jsonb sok második DB-t kivált. Szinkron helyett gyakran ECST vagy CDC. Sharding előtt: index, partíció, read replica, archiválás. Soha ne írj közvetlenül másik service DB-jébe.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/data-considerations

### Kérdés 32: Hogyan tervezel multi-tenancy-t .NET-ben?

**Válasz:**  
Három modell: közös DB + `TenantId`, séma/DB per tenant, vagy teljes izolált infra. Tenant felismerés: JWT claim, header, subdomain – middlewareben. EF global query filter + `SaveChanges`-ben automatikus `TenantId` kitöltés. Cache kulcsba mindig menjen a tenant. Worker/consumer HTTP nélkül: tenant az üzenetből. Cross-tenant admin csak auditált `IgnoreQueryFilters` úton. Tenantonkénti rate limit a „zajos szomszéd” ellen.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/authorization/introduction

### Kérdés 33: Mire jók a feature flagek, és milyen csapdáik vannak?

**Válasz:**  
Elválasztják a deployt a release-től: canary, A/B, gyors kill switch deploy nélkül. `Microsoft.FeatureManagement`: százalék, időablak, `FeatureGate`, custom filter. Minden flagnek legyen gazdája és lejárata; ne legyen hosszú távú konfiguráció (arra Options való). Teszteld mindkét ágat; logold/span tagezd a flag állapotát. Kerüld a flag-temetőt és a domain mélyén való elágazást — a flag a határon (API/BFF/feature entry) éljen.

**Dokumentáció:** https://learn.microsoft.com/azure/azure-app-configuration/use-feature-flags-dotnet-core

### Kérdés 34: Hogyan validálod a konfigurációt és kezeled a titkokat élesben?

**Válasz:**  
Options pattern + DataAnnotations/`IValidateOptions` + `ValidateOnStart`: hibás konfiggal ne induljon az app. Titkok: Key Vault / managed identity / workload identity – ne image, ne plain env a manifestben, ne log. Több példánynál a Data Protection kulcsgyűrű legyen közös tárolóban. CI-ban `dotnet list package --vulnerable`. Kapcsolati stringek és client secretök rotálhatók legyenek.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/fundamentals/configuration/

### Kérdés 35: Optimista vs. pesszimista konkurencia – mikor melyik, és hogyan throttle-ölj?

**Válasz:**  
Optimista (`RowVersion`): ütközés ritka; kapj `DbUpdateConcurrencyException`-t, majd client/database wins vagy merge; API-nál gyakran `409`. Pesszimista (`UPDLOCK` / `FOR UPDATE`): ütközés gyakori, újrapróbálás drága. Atomi feltételes `ExecuteUpdate` sokszor a legolcsóbb. Throttling: `Parallel.ForEachAsync` MaxDOP vagy `SemaphoreSlim`. `DbContext` nem szálbiztos – párhuzamos DB-munkához factory/scope. Deadlock: retry (1205), execution strategy-n keresztül a manuális tranzakció.

**Dokumentáció:** https://learn.microsoft.com/ef/core/saving/concurrency

### Kérdés 36: ValueTask, thread pool starvation, fire-and-forget – mik a senior szintű csapdák?

**Válasz:**  
Async skálázhatóságot ad, nem gyorsítja az egyes kérést. `.Result`/`.Wait()` thread pool starvationhez vezet (alacsony CPU, magas latency). `ValueTask` csak akkor, ha gyakran sync complete (cache hit); egyszer awaitelhető. Fire-and-forget (`_ = DoAsync()`) elnyeli a kivételt – Channel+BackgroundService vagy Outbox kell. Háttérmunkához ne add tovább a request `CancellationToken`-jét. CPU-kötött munkát ne `Task.Run`-nal „asynccé” a webkérésben.

**Dokumentáció:** https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask

### Kérdés 37: Mit ad a Testcontainers, a contract testing és az architektúra teszt a piramisban?

**Válasz:**  
Piramis: sok gyors unit, kevesebb integráció, kevés E2E. Testcontainers valódi SQL/Kafka/Redis konténert indít – az In-Memory EF hamis biztonság. Contract testing (Pact): consumer elvárást rögzít, provider ellenőrzi – olcsóbb, mint törékeny E2E. Architektúra teszt (NetArchTest): Domain ne függjön EF/ASP.NET-től, modulok ne hivatkozzanak egymás Internaljára – a build bukjon szabálysértéskor. Integrációs teszteknél Respawn/izoláció; image verzió rögzítve.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/testing/

### Kérdés 38: Docker multi-stage és K8s probe-ok – mi a .NET szempontból kritikus?

**Válasz:**  
Multi-stage: SDK build → kicsi `aspnet`/`chiseled` runtime; nem-root `USER $APP_UID`; felesleges toolok ne legyenek a runtime image-ben. K8s: startup/liveness/readiness külön; readiness a függőségeket (DB, cache) nézi, liveness az app beragadását. Graceful shutdown: `SIGTERM` → `ApplicationStopping`, elegendő `ShutdownTimeout` / `terminationGracePeriodSeconds`, inflight kérések és consumer-ek leállítása. Image tag legyen SHA/verzió, ne `:latest`. Migrációt ne indíts több replica indulásakor – külön Job/init. Titkok Secretből / külső vaultból.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/docker/build-container

### Kérdés 39: Hogyan futtatsz EF migrációt éles CI/CD-ben nulla leállással?

**Válasz:**  
Ne `Database.Migrate()` több replica indulásakor. Generálj idempotens SQL-t (`dotnet ef migrations script --idempotent`), futtasd külön pipeline stage / K8s Jobban, DBA review-val. Expand–contract: először nullable új oszlop, majd kód mindkettőbe ír, végül régi oszlop törlése – mert rolling közben régi és új kód együtt fut. Blue-green/canary feltétele: visszafelé kompatibilis API+séma. Egy artefaktum menjen végig a környezeteken.

**Dokumentáció:** https://learn.microsoft.com/ef/core/managing-schemas/migrations/applying

### Kérdés 40: Mi szerepel egy senior API biztonsági checklisten (PII, zero trust, mTLS)?

**Válasz:**  
Paraméterezett query, request DTO (ne entitás), HTTPS/HSTS, szűk CORS, rövid access token + refresh rotáció, ProblemDetails stack trace nélkül élesben. Soha ne logolj jelszót, tokent, kártyát, nyers PII-t – maszkolás/destructuring. Zero trust: belső hívás is hitelesített; mTLS jellemzően mesh/platform. Token forwarding vs. token exchange (szűkebb scope). Broker TLS + korlátozott ACL; üzenetben aláírt/megbízható user kontextus. CI vulnerability scan.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/

### Kérdés 41: Rich vs. anemic domain, aggregátumhatárok – mit vár el a DDD?

**Válasz:**  
Rich domain: invariánsok és viselkedés az entitáson/aggregátumon; anemic: getter/setter + minden logika service-ben (tranzakciós szkript). Aggregátum = konzisztenciahatár; aggregate root az egyetlen belépő. Egy tranzakcióban egy aggregátumot módosíts; más aggregátumra csak ID-val hivatkozz. Tartsd kicsinek az aggregátumot. Value object (`Money`, `Address`) immutable, eltünteti a primitive obsessiont. Guard a domain invariánshoz; bemeneti validáció a határon külön.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/

### Kérdés 42: Native AOT, trimming, benchmark – mit kell tudni senior szinten?

**Válasz:**  
Native AOT: gyors indulás, kisebb memória, natív bináris – K8s/serverless hidegindításnál hasznos. Korlát: reflexió/EF/AutoMapper/MediatR reflection-scanning problémás; source generator kell (`JsonSerializerContext`, compiled models, explicit DI). Minimal API AOT-barátabb, mint teljes MVC. Mérj BenchmarkDotNet-tel Release-ben; előbb DB/N+1/hálózat/cache/async, csak utána mikro-opt vagy AOT. Ne válts AOT-ra divatból – a hosszú életű, ritkán skálázódó szolgáltatás kevésbé profitál belőle.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/deploying/native-aot/

### Kérdés 43: Channels és IAsyncEnumerable – mikor melyiket, és mi a csapda?

**Válasz:**  
`Channel`: processzen belüli async producer-consumer, backpressure bounded queue-val. `IAsyncEnumerable`: lusta async stream (DB kurzor, nagy válasz). Broker kell, ha a munka túléli a processzt. Bounded channel nélkül memóriaszivárgás terhelés alatt. `[EnumeratorCancellation]` nélkül a token nem jut el a metódusba. Channel tartalma leálláskor elveszik – tartós munkára Outbox+broker. Ne tarts nyitva tranzakciót HTTP stream közben.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/channels

### Kérdés 44: Duende IdentityServer / saját IdP – hogyan hitelesítesz szolgáltatások között?

**Válasz:**  
Egy központi IdP állít ki tokent; a service-ek csak validálnak (JWKS), felhasználót nem kezelnek. Felhasználói kliens: authorization code + PKCE. Gépi/service-to-service: client credentials + token management cache. Scope-ok üzleti műveletenként, rövid access token. Gateway validál, de zero trust miatt a downstream is újra validál. Alternatívák: Keycloak, Entra ID/Auth0 – saját IdP akkor, ha a modell szorosan doménhez kötött vagy adat nem hagyhatja el a rendszert.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/authentication/identity

### Kérdés 45: MassTransit EF Outbox – miért kapcsold be adatbázis-írással együtt?

**Válasz:**  
Ha a handler ment és üzenetet publikál, a bus outbox ugyanabban a tranzakcióban rögzíti a kimenő üzenetet, majd a bus később küldi. Elkerüli a dual-write hibát EF + broker között. MassTransitban `AddEntityFrameworkOutbox` + `UseBusOutbox` tipikus. A fogyasztó oldalán Inbox/idempotencia továbbra is kell. QueryDelay hangolható; monitorozd a beragadt outbox rekordokat.

**Dokumentáció:** https://masstransit.io/documentation/configuration/middleware/outbox

### Kérdés 46: Mi a különbség az at-most-once, at-least-once és exactly-once között?

**Válasz:**  
At-most-once: lehet veszteség (pl. auto-commit feldolgozás előtt) — ritkán elfogadható. At-least-once: lehet duplikáció – ez a gyakorlati alap retry, crash és redelivery miatt. Exactly-once broker szinten korlátozott (Kafka tranzakció főleg Kafka→Kafka); DB/API/külső oldal mellett gyakorlatilag unavailable. Cél: at-least-once + idempotens fogyasztó (Inbox / egyedi kulcs / természetes idempotencia) = effectively-once. Ne a tartalom hash-ével deduplikálj; stabil producer `MessageId` kell.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer

### Kérdés 47: Hogyan kezeled a PII-t a naplókban és span attribútumokban?

**Válasz:**  
A log-aggregátor gyakran szélesebb hozzáférésű, és hosszabb ideig őriz adatot, mint a DB. Soha: jelszó, token, connection string, teljes kártya, egészségügyi adat. Maszkolva: e-mail, telefon, név. Szabadon: `UserId`, `OrderId`, `CorrelationId`. Serilog sensitive enricher / explicit destructuring policy; kerüld a `{@Object}` vak naplózást. Span tagbe / baggage-be se tegyél titkot/PII-t. Élesben ne kapcsold be átgondolatlanul a teljes SQL statement rögzítést. A GDPR törlési igény a logokra is vonatkozhat.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/extensions/logging

### Kérdés 48: Zero trust mikroszolgáltatásoknál: mTLS, token-propagáció, NetworkPolicy – hogyan rakod össze?

**Válasz:**  
Ne feltételezd, hogy a fürt belseje biztonságos. Transzport: mTLS (gyakran mesh). Alkalmazás: token minden belső híváson is. Hálózat: K8s NetworkPolicy. Token forwarding egyszerű, de széles jogú token mindenhol látszik; token exchange/client credentials szűkebb scope-ot ad. Workernek nincs user context – client credentials + audit mezők az üzenetben. Titok: managed identity, vault, rotáció; soha image-ben.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/cloud-native/security

## Staff

### Kérdés 1: Mi az architektúra eróziója, és miért veszélyesebb, mint egy egyszeri „rossz döntés”?

**Válasz:**  
Az architektúra ritkán omlik össze egyszerre: elhalványul. Tipikus jelek: a controller megkerüli a use case-t, a domain logger- vagy SDK-függőséget vesz fel, a query handler képernyőre szabott DTO-t ad vissza, amit aztán máshol is újrahasználnak. Külön-külön ártalmatlannak tűnnek; együtt elmossák a határokat, amelyek védelmére az architektúra épült. A következmény szervezeti: ugyanarra a szabályra más úton más viselkedés jön, a hibakeresés és a betanulás drágábbá válik. Staff szinten a cél nem a „tisztaság”, hanem a változtathatóság megőrzése. A következetlenség lassít, nem a struktúra maga. Ezért az erózió korai jeleit politikává kell tenni: ADR, architektúra tesztek, és közös nyelv a határokról.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures

### Kérdés 2: Mi az ADR szerepe egy nagyobb szervezetben, és mikor kell újraírni?

**Válasz:**  
Az ADR (Architecture Decision Record) rövid, verziózott döntésnapló: kontextus, döntés, alternatívák, következmények. Nem ötvenoldalas architektúra-dokumentum, hanem felülvizsgálható törzsi tudás a repóban. Szervezeti hatása, hogy a határok nem egy senior fejében élnek, hanem láthatóak és vitathatók. Ha valaki határt átlépő változást javasol, az ADR alapján kérdezhető: sérti a szándékot, vagy itt az ideje felülvizsgálni a határt? Újraírni akkor kell, amikor a szabály folyamatosan súrlódást okoz, vagy megváltozott a kényszer (csapatméret, skálázás, megfelelőség). „Csak most az egyszer” kivétel ADR és architektúra teszt nélkül az erózió kapuja.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/design-principles/

### Kérdés 3: Milyen heurisztikákkal döntesz szolgáltatás-határról staff szinten?

**Válasz:**  
A vágás alapja az üzleti képesség és a bounded context, nem a technikai réteg. Gyakorlati ellenőrzők: egy tipikus felhasználói írás hány szolgáltatást érint (ideálisan egyet); együtt változnak-e a jegyek; külön skálázódnak-e és külön hibaprofiljuk van-e; elbírja-e egy csapat (jellemzően 1–3 szolgáltatás); megérti-e egy új fejlesztő egy nap alatt. A rossz határ a legdrágábban visszavonható döntések egyike. Az összevonás legitim korrekció, nem kudarc. ADR-ben dokumentáld a vágás okát, és rendeld hozzá a csapat tulajdonjogát is.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/identify-microservice-boundaries

### Kérdés 4: Honnan ismered fel a distributed monolithot?

**Válasz:**  
Jelei: közös adatbázis vagy közös séma; üzleti logikát hordozó Shared.Domain minden szolgáltatásban; szinkron hívási lánc A→B→C egy kérésen belül; release, ahol több szolgáltatást egyszerre kell kiadni. Ilyenkor a rendszer a mikroszolgáltatás minden költségét fizeti, de egyik előnyét sem kapja meg. Szervezeti következmény: a „független csapatok” illúziója, miközben a koordinációs adó nő. A helyes irány gyakran moduláris monolit, majd kiemelés konkrét kényszerre (skálázás, release-ciklus, megfelelőség). A vékony Shared contracts (eseménytípusok) rendben van; a megosztott domain modell nem.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/

### Kérdés 5: Mikor NE válassz mikroszolgáltatásokat, és miért Modular Monolith?

**Válasz:**  
A mikroszolgáltatás eszköz, nem cél: ára az elosztott tranzakció, a hálózati hibamód, a verziózott szerződés, az observability és a deploy komplexitás. A modular monolith ugyanezt a moduláris gondolkodást adja egy deployolható egységben: külön assembly, séma per modul, csak Public szerződés, in-process üzenet, architektúra teszt a határokra. Előny: lokális ACID, egyszerű debug és refaktor, későbbi kiemelhetőség. Mikroszolgáltatás akkor indokolt, ha külön skálázás, stack, független release, eltérő megfelelőség vagy Conway-kényszer van. Greenfieldben, tisztázatlan domainnel a rossz határok monolitban olcsóbbak.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/

### Kérdés 6: Hogyan kényszeríted ki a modulhatárokat modular monolithban?

**Válasz:**  
Projektstruktúra: `Module.Public` látható, `Module.Internal` nem. Adatbázisban séma per modul, tiltott a kereszt-JOIN és a másik modul táblájának írása. Kommunikáció csak publikus interfészen vagy in-process üzeneten (MediatR/Wolverine). Architektúra tesztek bukjanak CI-ban, ha Internal-ra hivatkozás vagy rétegsértés történik. Enélkül csak jól mappázott gombóc lesz. Szervezetileg ez azt jelenti, hogy a határ nem review-szándék, hanem build-policy. A modulhatár később a szolgáltatás-kiemelés vágósíkja is.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures

### Kérdés 7: Magyarázd el a CAP-tételt úgy, ahogy éles rendszerben döntést hozol!

**Válasz:**  
Particionálás élesben előbb-utóbb bekövetkezik, ezért a P nem választás. A valódi döntés: particionálás alatt konzisztenciát (CP) vagy rendelkezésre állást (AP) áldozunk-e. CP tipikus: pénzügyi elszámolás, készletfoglalás, jogosultság. AP tipikus: katalógus, ajánlás, aktivitási hírfolyam, cache. A PACELC kiegészítés a napi munkában hasznosabb: normál üzemben is latencia vs. konzisztencia a kompromisszum. Mikroszolgáltatásoknál gyakran nem partíció, hanem latencia miatt választunk gyengébb konzisztenciát. A döntést műveletenként hozd meg, ne „a rendszer AP/CP” szinten.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven

### Kérdés 8: Milyen konzisztencia-modelleket vár el staff szinten egy .NET platformtól?

**Válasz:**  
Strong/linearizable: egy szolgáltatás saját SQL-je, egy tranzakció. Read-your-writes: a felhasználó saját írását azonnal lássa (session sticky primaryra, vagy válaszban visszaadott adat). Monotonic reads: ne menjünk vissza az időben sticky replikával. Eventual: read replica, elosztott cache, ECST-ből épült read model. Írás után ne az aszinkron projekcióból olvass vissza vakon. Az elavulás mértékét (pl. max 5 mp) írd a szerződésbe és mérd. A felületen jelezd a feldolgozás alatti állapotot, ne színlelj azonnali konzisztenciát.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven

### Kérdés 9: Miért kerülendő a 2PC mikroszolgáltatások között, és mi a gyakorlati recept?

**Válasz:**  
A 2PC/XA szinkron blokkolást, rendelkezésre állási csatolást és rossz skálázhatóságot okoz. Gyakorlati recept: szolgáltatásonként lokális ACID; Outbox az adatírás és üzenet atomikus összekötésére; Saga a több szolgáltatásos folyamatra kompenzációval; Inbox/idempotens consumer a duplikátumokra; eventual consistency tudatos kezelése a UI-n is (202 Accepted + státusz). Az aggregátum a tranzakciós határ: egy tranzakcióban egy aggregátum. Ha rendszeresen két aggregátumot kell atomikusan módosítani, a határ vagy a folyamatmodell rossz.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/saga

### Kérdés 10: Hogyan tervezel event store sémát és snapshot stratégiát?

**Válasz:**  
Minimális séma: AggregateId, Version, EventType, Payload, OccurredOn; egyedi index (AggregateId, Version) az optimista konkurenciához. Az állapot visszajátszásból jön; ezernyi eseménynél a betöltés szűk keresztmetszet lesz. Snapshot: szerializált állapot + utolsó alkalmazott verzió, tipikusan N eseményenként; visszaállításkor snapshot + csak az azóta keletkezett események. Kompromisszum: sűrű snapshot gyorsít, de tárhelyet és takarítást igényel. Tároló: PostgreSQL+JSONB, Marten, vagy EventStoreDB. Ne módosíts/törölj eseményt; hibát kompenzáló eseménnyel javíts. Az event store nem lekérdező API — arra a projekció való.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/event-sourcing

### Kérdés 11: Mikor NE kezdd event sourcinggal a domaint?

**Válasz:**  
Ha a domain lényegében CRUD, az event sourcing komplexitása (séma-evolúció, projekciók, replay, GDPR-törlés az append-only naplóban) nem térül meg. Akkor éri meg, ha az auditálhatóság, időbeli lekérdezés, komplex állapotátmenetek vagy több read model üzleti értéke magas. Staff döntés: először mérd, hogy a történetiség valódi követelmény-e, vagy elegendő temporal table / audit napló. A rossz választás évekig adóztatja a csapatot. Ha mégis ES, tervezd előre a snapshotot, a projekció újraépítést és a személyes adatok kezelését.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/event-sourcing

### Kérdés 12: Hogyan kezeled a szolgáltatásközi üzenetsorrendet nagy skálán?

**Válasz:**  
Élesben a sorrend felborul — ez normál működés. Ne építs globális topic-sorrendre. Az üzenet hordozza a saját monoton verzióját vagy megbízható sorszámát; a consumer eldobja/tárolja a régebbit, perzisztens last-processed állapottal. Kafka: sorrend partíción belül, kulcs = aggregátum azonosító. MassTransit partitioner ugyanezt adja entitásonként. Az egész rendszer `PrefetchCount=1` állítása egy sorrendérzékeny típus miatt átbocsátás-gyilkos. Cél: csak az egy entitáshoz tartozó üzenetek sorosodjanak, a rendszer egésze párhuzamos maradjon.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer

### Kérdés 13: Hogyan oldod meg a duplikált kézbesítést skálán („effectively once”)?

**Válasz:**  
A gyakorlat alapja at-least-once; az exactly-once broker+DB+külső API kombinációban praktikusan elérhetetlen. Megoldás: Outbox a producer oldalon + Inbox/idempotens consumer a fogyasztón: MessageId egyedi indexszel, üzleti hatás és inbox bejegyzés egy tranzakcióban. Természetes idempotencia (`SET status='Paid'`) és verzióellenőrzés is működik. A MessageId legyen üzletileg stabil, ne broker delivery id. Inbox takarítás (pl. 30 nap) kötelező. Szervezetileg: minden consumer szerződés része az idempotencia — nem „majd a junior megoldja”.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer

### Kérdés 14: Sidecar, Ambassador és Service Mesh — mikor melyik, és hol a Dapr helye?

**Válasz:**  
Sidecar: podban futó mellékfolyamat keresztirányú feladatokra (mTLS, retry, telemetria, secrets) — nyelvfüggetlen, de plusz hopp és erőforrás. Ambassador: kifelé irányuló proxy legacy mellé. Service mesh (Istio/Linkerd): sok szolgáltatásnál egységes mTLS, forgalomirányítás, házirend — kevés szolgáltatásnál túl drága. Dapr: alkalmazás-központú sidecar (state, pub/sub, invocation), cserélhető komponensekkel; .NET-only stackben MassTransit/Wolverine gyakran gazdagabb. Ne rétegezd a retry-t meshben és alkalmazásban egyszerre. Előbb nevezd meg a problémát, utána a technológiát.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/cloud-native/service-to-service-communication

### Kérdés 15: Mikor választasz serverless mikroszolgáltatásokat, és mi a trade-off?

**Válasz:**  
Jó: szakaszos, eseményvezérelt terhelés, webhook, ütemezett job, gyors prototípus, platform-kötések. Figyelni: hidegindítás (AOT/ReadyToRun, Always-on), állapotmentesség, végrehajtási időkorlát, kapcsolatkészlet-kimerülés sok példánynál, költség egyenletes nagy terhelésnél. A Function legyen presentation réteg a use case felett, ne üzleti logika-tároló. Durable Functions = platform-natív saga hosszú folyamatokra. Alternatíva: Container Apps/Fargate scale-to-zero sima ASP.NET Core-ral. Staff döntés: költségmodell + latency SLO + csapat üzemeltetési érettség.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/serverless/

### Kérdés 16: Hogyan építesz observability stratégiát SLO/SLI és error budget mentén?

**Válasz:**  
Három jel: metrika, trace, log — OpenTelemetryvel egységesen. Először a négy aranyjel: latency p95/p99, traffic, errors, saturation; üzenetnél consumer lag és DLQ méret. SLI = felhasználói élményt tükröző mérőszám; SLO = cél (pl. 99,5%/30 nap); error budget = ami hiányzik. Riassz burn rate / tünet alapján, ne minden CPU-csúcsra; minden riasztáshoz runbook. Health check orchestrátor-vezérlés, nem monitoring. Költségkontroll: sampling, alacsony kardinalitású címkék, üzleti metrikák (leadott rendelés/perc). Ha elfogy az error budget, a feature munka hátrébb lép — ez szervezeti szerződés.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/observability-app-health-monitoring

### Kérdés 17: Hogyan gondolkodsz production incidentnél staff/principal szinten?

**Válasz:**  
Először stabilizálj (mitigate), aztán diagnosztizálj: SLI/SLO sérülés, error budget égése, felhasználói hatás. TraceId és dashboard link kötelező a riasztásban. Üzenetvezérelt rendszernél nézd a lagot, DLQ-t, outbox backlogot, nem csak a HTTP 5xx-et. Kerüld a „mindenkit behívjuk és tippelünk” kultúrát: hipotézis → bizonyíték (metrika/trace/log) → változtatás. Utána blameless postmortem, ADR vagy runbook frissítés, és ha kell, feature freeze amíg az error budget helyreáll. A cél nem a hibás ember megtalálása, hanem a visszatérés idejének és a megismétlődés esélyének csökkentése.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/diagnostics/observability-app-health-monitoring

### Kérdés 18: Mi az Aspire szerepe a platformvízióban, és mi nem az?

**Válasz:**  
Az Aspire kódban leírt helyi orchestration, service discovery, OpenTelemetry, health, resilience és dashboard — az onboarding és a topológia láthatóságának eszköze. AppHost a stack, ServiceDefaults a közös keresztirányú beállítások. Nem teljes értékű éles orchestrátor: produkcióban továbbra is Kubernetes/Container Apps. Üzleti logika ne kerüljön az AppHostba; a domain ne függjön Aspire-től. Ökölszabály: új .NET-only stackhez Aspire; vegyes/Compose-ra épült CI-hez Compose (vagy generált manifest). Platformcél: F5-re fut a rendszer, egységes telemetria-alap minden szolgáltatásban.

**Dokumentáció:** https://learn.microsoft.com/dotnet/aspire/get-started/aspire-overview

### Kérdés 19: Hogyan közelítesz multi-region / resilience stratégiához backend platformon?

**Válasz:**  
Resilience rétegek: timeout, retry (csak idempotens műveletekre), circuit breaker, bulkhead — .NET-ben `Microsoft.Extensions.Http.Resilience` / Polly, lehetőleg központi ServiceDefaultsben. Multi-regionnél döntsd el: active-passive vs active-active; hol az írási forrás (single writer); hogyan replikálódik az adat és a broker; mi az RPO/RTO. Az eventual consistency és a CAP itt üzleti SLA-vá válik. Kerüld a szinkron 4–5 szolgáltatásos láncot: a rendelkezésre állások szorzódnak. Health/ready alapján az orchestrátor vegye ki a forgalomból a beteg példányt. A stratégia ADR + mért drill nélkül csak powerpoint.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/resilience/

### Kérdés 20: Mit jelent a zero trust mikroszolgáltatásoknál?

**Válasz:**  
A belső hálózat nem biztonságos: kompromittált szolgáltatás után a támadó ne mozoghasson szabadon. Három szint: mTLS a transzporton (mesh/platform); token-alapú authz minden belső híváson is; NetworkPolicy a forgalom korlátozására. A gateway mögötti hívás sem „trusted by default”. Titkok: managed identity, Key Vault, rotáció — soha image-ben vagy plain manifest env-ben. Audit: ki, mit, mikor, eredmény, TraceId — append-only, az app-logtól elválasztva. Szervezeti hatás: biztonság platformképesség, nem egyszeri checklist a peremen.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/cloud-native/security

### Kérdés 21: Token-propagáció vs token exchange — mikor melyiket választod?

**Válasz:**  
Token forwarding: egyszerű, a user kontextus mindenhol megvan, de a teljes jogú token sok helyen látszik, és a lejárat a lánc közepén gond. Token exchange / szűkebb scope: a downstream csak azt kapja, amire kell — biztonságosabb, több IdP-komplexitás. Gépi hívásokra client credentials + token cache (pl. Duende AccessTokenManagement). Üzenetsornál nincs HttpContext: userId/tenant aláírt fejlécben, broker TLS+ACL. Zero trust: a gateway validál, a szolgáltatás is újra validál. Ne adj `api.full` scope-ot hosszú élettartammal szolgáltatások között.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/cloud-native/security

### Kérdés 22: Hogyan pozicionálod a Duende IdentityServer / saját IdP stratégiát?

**Válasz:**  
Mikroszolgáltatásoknál egy IdP állít ki tokent; a szolgáltatások csak validálnak (JWKS), felhasználótáblát nem kezelnek. Saját hosztolás (IdentityServer) akkor indokolt, ha az identitásmodell szorosan a doménhez kötött, vagy a PII nem hagyhatja el a rendszert; egyébként Keycloak vagy Entra/Auth0. Kliens: auth code + PKCE (BFF/SPA); szolgáltatásközi: client credentials. Scope-ok üzleti műveletenként. Rövid access token, refresh, kulcsrotáció. Ne írj saját JWT-kiállítót. A BFF + HttpOnly süti jobb, mint access token a böngészőben.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/security/authentication/identity

### Kérdés 23: Hogyan vezetnél Strangler Fig migrációs programot szervezeti szinten?

**Válasz:**  
Nem big bang rewrite: gateway/proxy mögött fokozatosan irányítod a forgalmat új szeletekre bounded context mentén. Routing legyen konfigurálható (canary, shadow traffic). Minden migrált szeletnek legyen mérhető SLO-ja és visszaállítási terve. A strangler átmeneti állapot — véghatáridő és tulajdonos nélkül évekig párhuzamos adó lesz. Ne migrálj tisztázatlan adat-/tranzakcióhatárú szeletet. Anti-corruption layer védi az új domaint a legacy modelltől. A siker mércéje: üzleti képesség kiadása kisebb kockázattal, nem „minden mikroszolgáltatás”.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/strangler-fig

### Kérdés 24: BFF vs API Gateway — hogyan döntesz topológiáról?

**Válasz:**  
API Gateway: egy belépési pont, routing, auth, rate limit, topológia elrejtése. BFF: kliensenkénti vékony backend (web/mobil/partner), aggregáció és payload-optimalizálás üzleti logika nélkül. Érdemes, ha a kliensigények jelentősen eltérnek; ha nem, egy gateway elég. YARP .NET-ben middlewareként illeszkedik Aspire/service discoveryhöz. Kerüld az üzleti szabályok BFF-be csúszását — az inkonzisztenciát szül. Szervezetileg a BFF felelőssége igazodjon a fogyasztó csapathoz (Conway).

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/gateway-routing

### Kérdés 25: Database per service vs shared DB — mi a staff szintű trade-off?

**Válasz:**  
Database per service: laza csatolás, polyglot lehetőség, független deploy — cserébe nincs kereszt-tranzakció, riport nehéz, Saga/CQRS kell. Shared DB: egyszerű JOIN és ACID, de séma-változás mindenkit érint, alacsony autonómia. Alapértelmezés: database per service. Shared DB csak strangler átmenetként, szigorú szabállyal: egy táblát egy szolgáltatás ír. Modular monolith köztes út: séma per modul + tiltott keresztírás. Ne írj másik szolgáltatás DB-jébe — ez a legerősebb csatolás.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/data-considerations

### Kérdés 26: Hogyan skálázod a CQRS olvasási oldalt szervezeti szinten?

**Válasz:**  
A gyorsulás nem a handler-szétválasztásból jön, hanem más adatszerkezetből. Fokozatok: AsNoTracking projekció → Dapper nehéz riportokra → materializált nézet → külön read store eseményekből. A 4. fokozat ára: eventual consistency, idempotens upsert projekció, replay képesség, mért projection lag. Read-your-writes: válaszban add vissza az entitást, vagy ideiglenesen az írási oldalról olvass; ne „várj 200 ms-ot”. A read model a képernyőhöz igazodjon, ne a doménhez. Ne ugorj dedikált read store-ra mérés nélkül.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/cqrs

### Kérdés 27: Soft delete, GDPR és PII governance — hogyan egyezteted össze?

**Válasz:**  
A soft delete nem alapértelmezés: szűrési költség, indexkomplexitás, adatnövekedés. Visszaállításhoz jó; audithoz temporal/audit jobb; megőrzéshez archiválás; GDPR „törlés joga” viszont nem teljesül `IsDeleted=true`-val — tényleges törlés vagy anonimizálás kell. Napló a leggyakoribb PII-szivárgás: jelszó/token soha, e-mail maszkolva, technikai ID szabadon; fehérlistás mezők, nem `{@Object}` vak destrukturálás. A törlési igény a log-aggregátorra is vonatkozik. Platformpolicy: maszkolás default, teszttel ellenőrzött, megőrzési időkkel.

**Dokumentáció:** https://learn.microsoft.com/ef/core/querying/filters

### Kérdés 28: Hogyan használod az architektúra teszteket szervezeti politikaként?

**Válasz:**  
NetArchTest-szerű tesztek a CI-ban buknak, ha a Domain EF/ASP.NET-re hivatkozik, az Application Infrastructure-re, a modul Internal-ját más modul látja, vagy a controller DbContextet hív. Kevesebb, közösen elfogadott szabály jobb, mint tucatnyi elnémított. A hibaüzenet mondja meg a miértet. Ez váltja ki a „egy ember őrzi az architektúrát” anti-patternt. ADR + architektúra teszt együtt: a szándék dokumentált, a betartás automatikus. Triviális naming-szabályok zajt keltenek és aláássák a bizalmat.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures

### Kérdés 29: Miért kötelező Central Package Management multi-repo/multi-project platformon?

**Válasz:**  
A `Directory.Packages.props` egy helyen tartja a NuGet verziókat; a projektek csak nevet hivatkoznak. Elkerüli a „véletlen” eltérő major verziókat ugyanarra a csomagra — ez dependency hell és security patch késlekedés forrása. 3+ projektnél alap. Szervezeti hatás: patch ablak (pl. havi) központilag tervezhető; floating preview verzió óvatosan. A core-ba engedett csomag tudatos döntés legyen (lásd erózió: MediatR licencváltás). CPM a platform konzisztencia eszköze, nem kozmetika.

**Dokumentáció:** https://learn.microsoft.com/nuget/consume-packages/central-package-management

### Kérdés 30: Mikor vezetnél be Native AOT-ot platformstratégiaként?

**Válasz:**  
AOT: gyors indulás, kisebb memória, natív bináris — serverless/K8s gyakori skálázásnál értékes. Korlát: reflexió, EF Core, AutoMapper, MediatR felderítés, MVC stack — source generatoros út kell. Hosszan futó, ritkán skálázódó szolgáltatásnál a nyereség kicsi lehet. Előbb DB/hálózat/cache optimalizálás, utána AOT. Mérj BenchmarkDotNetnel Release-ben. Platformdöntés: mely szolgáltatás-típusok AOT-kötelezőek (edge, function), melyek JIT-en maradnak.

**Dokumentáció:** https://learn.microsoft.com/dotnet/core/deploying/native-aot/

### Kérdés 31: Hogyan tervezed a caching tier-eket HybridCache-szel?

**Válasz:**  
HybridCache L1 (memória) + L2 (Redis): stampede-védelem és egyszerűbb API. Cache-aside az általános; write-through/read-through/refresh-ahead ritkább. Elosztott invalidáció: rövid L1 TTL vagy pub/sub. Cache-elj ritkán változó, drága, gyakran olvasott adatot; ne user-specifikus gyorsan változót tenant kulcs nélkül. A rendszer működjön cache nélkül is. Szervezetileg a cache kulcsnév-konvenció és TTL policy platformszabvány legyen, különben adatszivárgás és ghost read lesz belőle.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/performance/caching/hybrid

### Kérdés 32: Miért tekinted a rate limitinget termékpolitikának, nem csak middleware-nek?

**Válasz:**  
A limit védi a platformot és differenciálja a termékcsomagokat (anonymous vs authenticated vs partner). Algoritmusok: fixed window, sliding, token bucket (burst), concurrency (drága végpont). Partícionálás user/API-kulcs szerint; 429 + Retry-After. Gateway/BFF szinten egységesen, szolgáltatásban is védendő a drága művelet. Üzleti döntés: kit mennyivel engedünk, mi a fair use, hogyan kommunikáljuk. Ha csak „rakjunk rá 100/percet”, az vagy blokkolja a legitim forgalmat, vagy nem véd.

**Dokumentáció:** https://learn.microsoft.com/aspnet/core/performance/rate-limit

### Kérdés 33: Kafka vs RabbitMQ — hogyan választasz platformszabványt?

**Válasz:**  
Kafka: perzisztens log, újrajátszás, magas átbocsátás, partíción belüli sorrend — event streaming, audit, analitika, sok fogyasztó ugyanarra a folyamra. RabbitMQ: munkasor, gazdag routing, késleltetés/prioritás — task distribution, RPC-szerű integráció. Nagy szervezetben gyakran mindkettő, eltérő szerepben. A választás ne szivárogjon a domainbe: `IEventPublisher` vagy MassTransit/Wolverine absztrakció. Platformszabvány = üzemeltetési tudás, megfigyelhetőség, szerződéses minták egységesítése — nem vallásháború.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture

### Kérdés 34: Milyen Kafka platform-szabályokat kötnél ki sorrend és skálázás miatt?

**Válasz:**  
Kulcs = aggregátum ID a sorrendhez; kerüld a forró partíciót kevés kulccsal és a sorrendvesztést random GUID kulccsal. Partíciószámot kapacitástervezéssel előre; utólagos növelés megtöri a kulcs→partíció leképezést. Idempotens producer, commit feldolgozás után, DLQ poison message-re, retry topic átmeneti hibára. Cooperative sticky rebalance. Consumer mindig idempotens. Schema Registry kompatibilitási szabállyal. Ezek nélkül a „Kafka a szabványunk” csak zajos üzemzavar.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/subscribe-events

### Kérdés 35: Wolverine vs MassTransit vs MediatR — hogyan döntesz ökoszisztémáról?

**Válasz:**  
MediatR: in-process mediátor/CQRS; licencváltozás óta sokan keresnek alternatívát. MassTransit: érett broker absztrakció, saga, outbox, retry — erős választás több brokerhez; v9 licenc figyelem. Wolverine: mediátor + messaging konvencióval, generált pipeline, erős Marten/EF outbox; kevesebb boilerplate. Ne keverd Wolverine-t és MediatR-t egy szolgáltatásban. Platformdöntés kritériumai: licenc, csapat tapasztalat, saga/outbox igény, AOT/forráskód-generálás, PostgreSQL/Marten illeszkedés. A cél egységes messaging-operációs modell, nem három párhuzamos stílus.

**Dokumentáció:** https://wolverinefx.net/

### Kérdés 36: Milyen tanulságokat hozol az eShopOnContainers / .NET reference architektúrákból?

**Válasz:**  
Az eShop bemutatja: bounded contextenként szolgáltatás és DB, event-driven integráció, Identity, konténerizáció, API-k vertikális szeletei — de referencia, nem kötelező célarchitektúra. Ardalis/Milan Clean Architecture monolit referenciák: rétegek, MediatR, tesztelhetőség kisebb komplexitással. Tanulság: másold a döntési elveket (határok, adatgazdálkodás, async integráció), ne a szolgáltatás-számot. Greenfieldben moduláris monolit + tiszta határok gyakran közelebb áll a referencia szelleméhez, mint tíz üres microservice. Használd tananyagként és ADR-indokláshoz.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/

### Kérdés 37: Hogyan alkalmazod a Bounded Context / DDD stratégiai tervezést platformszinten?

**Válasz:**  
A bounded context explicit nyelvhatár: ugyanaz a „Customer” mást jelent Ordersben és Supportban. Integráció ACL-lel, ne közös modelllel. A szolgáltatás-határ ideálisan egybeesik a contexttel; az aggregátum nem eshet két szolgáltatás közé. Stratégiai minták: partnership, customer-supplier, conformist, ACL, shared kernel óvatosan. Szervezetileg a context tulajdonosa a csapat — nélküle a DDD csak osztálydiagram. A cél a nyelvi és tranzakciós integritás, nem a mindenütt repository+aggregate ceremónia.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/

### Kérdés 38: Milyen backend API következményei vannak a micro frontendnek?

**Válasz:**  
Ha a UI csapatonként bomlik, a backendnek is támogatnia kell a független szállítást: BFF/gateway route-ok (`/orders/*`, `/billing/*`), SSO/session a BFF-nél, verziózott szerződések a shell és a darabok között. Ne másold vakon a szolgáltatás-határokat a UI-ra, ha az UX-et tördeli. Aggregáció és payload-szabás a BFF dolga; üzleti invariáns a domain szolgáltatásban marad. Auth token és tenant kontextus egységes propagációja kötelező. Egy csapat/egy termék esetén a micro frontend + sok BFF csak overhead.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/gateway-routing

### Kérdés 39: Miért választasz szét persistence és domain entitást hosszú távon?

**Válasz:**  
A domain viselkedést és invariánst modellez; a persistence az adat tárolását (FK, navigáció, publikus setter, EF igények). Ha a domain EF-hez igazodik, az adatelérés vezeti a tervezést. A mapping a határon review-zandó és tesztelendő — nem validáció. Kis anémikus CRUD-nál a szétválasztás ceremónia; rich modellnél megéri. Ne szivárogtass `IQueryable`-t a prezentációba. Mikroszolgáltatásonként eltérő döntés megengedett — ez az egyik haszna a dekompozíciónak.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implemenation-entity-framework-core

### Kérdés 40: Mikor és hogyan alkalmazol Anti-Corruption Layert?

**Válasz:**  
ACL fordít a saját tiszta modell és a legacy/harmadik fél/más bounded context modellje között, hogy a külső world-view ne szennyezze a domaint. Infrastructure-ben él; a Domain nem tud a külső DTO-ról. Strangler és multi-context integrációnál stratégiai eszköz. Ha az ACL „elvékonyodik” és a legacy típusok szétterjednek, visszakapod az eredeti csatolást. Teszteld a fordítást, különösen a státuszkódok és hiányos adatok kezelését. Szervezetileg az ACL a változékonyság sokkját elnyelő határréteg.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/anti-corruption-layer

### Kérdés 41: Choreography vs orchestration saga — hogyan döntesz nagy programban?

**Válasz:**  
Choreography: laza csatolás, állapot az eseményláncban; 2–4 stabil lépésnél jó; kell CorrelationId, idempotens kompenzáció, Outbox, DLQ, watchdog a beragadt sagákra. Orchestration: átlátható állapotgép (MassTransit saga); elágazó/hosszabb folyamatnál jobb. Ne keverd ugyanabban a folyamatban. A kompenzáció üzleti ellenlépés, nem DELETE; maga is elbukhat. Szervezeti hatás: koreográfiánál senki sem „látja” a teljes folyamatot, hacsak nem építesz megfigyelhető állapotot — ez incidensnél drága.

**Dokumentáció:** https://learn.microsoft.com/azure/architecture/patterns/saga

### Kérdés 42: Hogyan verzióznád az üzenet-szerződéseket platformszabványként?

**Válasz:**  
Az üzenet publikus API: producer és consumer külön deployol. Biztonságos: opcionális mező. Törő: törlés, átnevezés, típusváltás — expand/contract párhuzamos verziókkal. Szerződések vékony, verziózott NuGetben; tolerant reader. Kafka Schema Registry kompatibilitási szabállyal. Ne szerializálj domain entitást közvetlenül üzenetbe. Deprecation policy: meddig él a régi verzió. Ez a független release előfeltétele; nélküle a „microservice autonómia” fikció.

**Dokumentáció:** https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture
