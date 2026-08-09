# Backend hamis válaszok (interjú gyakorlat)

A kérdésszámok a [backend-interview-questions-w-answers.md](./backend-interview-questions-w-answers.md) fájlra hivatkoznak.
Minden **Hamis válasz** magabiztosnak hangzik, de szándékosan téves — a helyes válasz a forrásfájlban van.
Szintek: Junior · Medior · Senior · Staff

---

## Junior

### Kérdés 1: Mi a Minimal API, és miben különbözik az MVC controlleres megközelítéstől?

**Hamis válasz 1:**  
A Minimal API a .NET Framework 4.8-ban bevezetett, teljes MVC stack helyettesítője: minden Razor view és filter automatikusan elérhető benne, csak kevesebb kóddal. Nagy monolithokhoz és komplex UI-hoz ez az ajánlott megoldás.

**Hamis válasz 2:**  
A Minimal API és az MVC controller teljesen külön hostolási modellt használ — a Minimal API csak Kestrel nélkül, IIS-ben fut, ezért nem támogat dependency injection-t.

**Hamis válasz 3:**  
A fő különbség az, hogy Minimal API-ban minden végpont kötelezően `[ApiController]` attribútumot igényel, míg MVC-ben ez opcionális és csak a POST műveletekre vonatkozik.

### Kérdés 2: Hogyan valósítanál meg CRUD végpontokat Minimal API-val?

**Hamis válasz 1:**  
CRUD-hoz minden művelethez külön `ControllerBase`-ből származó osztályt kell regisztrálni a `Program.cs`-ben, majd `app.MapControllers()` hívással kötjük be a Minimal API pipeline-ba.

**Hamis válasz 2:**  
A `MapDelete` mindig 200 OK-val tér vissza és a törölt entitás teljes body-ját adja vissza; a `MapPost` pedig alapértelmezetten 204 No Content státuszt küld új erőforrás létrehozásakor.

**Hamis válasz 3:**  
Minimal API-ban az útvonalparaméterek csak string típusúak lehetnek; numerikus azonosítókhoz mindig query stringet (`?id=5`) kell használni a REST konvenció helyett.

### Kérdés 3: Mit jelent a REST API, és milyen HTTP igék tartoznak a tipikus CRUD műveletekhez?

**Hamis válasz 1:**  
REST azt jelenti, hogy minden műveletet GET-tel kell megvalósítani, és a művelet típusát a query string határozza meg (`?action=delete`). A POST, PUT és DELETE igék csak SOAP migrációhoz használatosak.

**Hamis válasz 2:**  
CRUD-ban a létrehozás PUT-tal, a frissítés POST-tal, az olvasás DELETE-tel, a törlés pedig PATCH-csel történik — ez a HTTP/1.1 hivatalos szabványa.

**Hamis válasz 3:**  
REST API-nál az erőforrások azonosítása kötelezően GUID-alapú query paraméterrel történik; az URL path csak verziózásra szolgál, nem erőforrás-azonosításra.

### Kérdés 4: Milyen HTTP státuszkódokat vársz GET, POST, PUT és DELETE esetén?

**Hamis válasz 1:**  
Sikeres GET mindig 201 Created, sikeres POST 200 OK, sikeres PUT 404 Not Found (mert felülírás), sikeres DELETE pedig 500 Internal Server Error, mert a szerver „eldobja” az erőforrást.

**Hamis válasz 2:**  
GET esetén hiányzó erőforrásnál 204 No Content a helyes válasz, mert nincs body. POST-nál mindig 200 OK elegendő; a 201 csak fájlletöltésnél használatos.

**Hamis válasz 3:**  
PUT és DELETE siker esetén kötelezően 200 OK body-val kell válaszolni; a 204 No Content csak hibás kéréseknél (400-as család) megengedett.

### Kérdés 5: Melyik HTTP státuszkódot (result type) mikor használjuk API-kban?

**Hamis válasz 1:**  
401 Unauthorized azt jelenti, hogy a felhasználó autentikált, de nincs joga; 403 Forbidden pedig azt, hogy nincs érvényes token — a kettő felcserélhető.

**Hamis válasz 2:**  
429 Too Many Requests csak akkor használható, ha a kliens HTTP/2-t használ; HTTP/1.1 esetén helyette mindig 503 Service Unavailable a helyes.

**Hamis válasz 3:**  
202 Accepted azt jelenti, hogy a kérés azonnal sikeresen lefutott és az erőforrás már elérhető GET-tel; ez a szinkron POST szinonimája.

### Kérdés 6: Mit ad vissza egy controller action `IActionResult`-ként GET esetén, ha van és ha nincs adat?

**Hamis válasz 1:**  
Ha nincs adat, mindig `Ok(null)` vagy `Ok(new List<>())` a helyes válasz 200-zal — a 404 csak akkor jár, ha maga a route nem létezik, nem az erőforrás.

**Hamis válasz 2:**  
`IActionResult` helyett GET-nél kötelező `string`-et visszaadni, mert az MVC automatikusan JSON-ná alakítja; `NotFound()` csak POST-nál használható.

**Hamis válasz 3:**  
Ha van adat, `CreatedAtAction`-t kell használni GET-nél is, mert így a kliens megkapja a `Location` fejlécet az erőforrás jövőbeli URL-jére.

### Kérdés 7: Miért érdemes POST-nál `CreatedAtAction`-t használni `Ok` helyett?

**Hamis válasz 1:**  
A `CreatedAtAction` azért jobb, mert 200 OK helyett automatikusan 204 No Content-et ad, így kisebb a válasz mérete és gyorsabb a hálózat.

**Hamis válasz 2:**  
POST-nál `Ok` a REST szabvány szerinti válasz; a `CreatedAtAction` csak akkor kell, ha az adatbázis tranzakció rollback történt, jelezve hogy az erőforrás nem jött létre.

**Hamis válasz 3:**  
A `CreatedAtAction` fő előnye, hogy a létrehozott erőforrást nem adja vissza body-ban, csak egy redirect URL-t 302 Found státusszal.

### Kérdés 8: Mik a Dependency Injection lifetime-ok ASP.NET Core-ban?

**Hamis válasz 1:**  
Négy fő lifetime van: Transient, Scoped, Singleton és PerRequest — a PerRequest ugyanaz mint a Singleton, csak IIS alatt.

**Hamis válasz 2:**  
Singleton azt jelenti, hogy minden HTTP kérés új példányt kap; Scoped pedig az alkalmazás teljes életére egy példányt tart.

**Hamis válasz 3:**  
Transient szolgáltatások automatikusan Singletonná „upgrade-elődnek”, ha a konstruktorukban DbContext van — a DI ezt optimalizálásként végzi.

### Kérdés 9: Mi a különbség Transient, Scoped és Singleton között gyakorlati példával?

**Hamis válasz 1:**  
A `DbContext`-et mindig Singletonként kell regisztrálni, mert így egyetlen change tracker van az egész alkalmazásban, és konzisztensebb a cache.

**Hamis válasz 2:**  
Scoped szolgáltatás minden injektáláskor új példány, Transient pedig kérésenként ugyanaz — ezért a repository-kat Transientként szokás regisztrálni.

**Hamis válasz 3:**  
Singleton szolgáltatásban nyugodtan injektálható Scoped függőség, mert az ASP.NET Core automatikusan klónozza a Scoped példányt minden Singleton híváskor.

### Kérdés 10: Mi a captive dependency probléma?

**Hamis válasz 1:**  
Captive dependency akkor van, ha Transient szolgáltatást Singletonba regisztrálunk — a Transient példány „fogságban” marad és nem frissül kérésenként.

**Hamis válasz 2:**  
A captive dependency csak Autofac-ban létezik; a beépített MS DI automatikusan feloldja úgy, hogy minden Singleton kérés új scope-ot nyit a teljes app életére.

**Hamis válasz 3:**  
Captive dependency megoldása: a Scoped függőséget static mezőben tároljuk a Singleton osztályban, így minden szál ugyanazt a példányt látja biztonságosan.

### Kérdés 11: Mikor használnál `IEnumerable<T>`-et `List<T>` helyett?

**Hamis válasz 1:**  
`IEnumerable<T>` mindig gyorsabb, mert a `List<T>` minden elem hozzáadásakor újraallokálja a teljes tömböt memóriában, míg az IEnumerable heap-en kívül tárol.

**Hamis válasz 2:**  
Ha többször kell bejárni ugyanazt az adathalmazt, mindig `IEnumerable<T>` a jobb választás, mert az eredmény cache-elődik az első iteráció után automatikusan.

**Hamis válasz 3:**  
Metódus paraméterként soha ne használj `IEnumerable<T>`-et, csak `List<T>`-et — az absztrakció miatt a LINQ lusta kiértékelése nem működik interface-en keresztül.

### Kérdés 12: Mi a különbség a `get`/`set`, az `init` és a `private set` között?

**Hamis válasz 1:**  
Az `init` property bármikor módosítható az osztály bármely metódusából, míg a `private set` csak objektum-inicializáló blokkban állítható.

**Hamis válasz 2:**  
A `get; set;` property-k compile time-ban readonly-k, míg az `init` futásidőben enged írást is reflection-nel — ezért az `init` kevésbé biztonságos.

**Hamis válasz 3:**  
`private set` azt jelenti, hogy a property csak statikus konstruktorban inicializálható; utána még az osztály belsejéből sem módosítható.

### Kérdés 13: Mi a különbség a `class`, `record` és `struct` között?

**Hamis válasz 1:**  
A `record` mindig értéktípus (stacken él), a `struct` referenciatípus, a `class` pedig csak akkor használható, ha van paraméter nélküli konstruktora.

**Hamis válasz 2:**  
A `class` alapértelmezetten érték szerinti egyenlőséget implementál, a `record` referencia szerintit, a `struct` pedig soha nem másolódik — minden hozzárendelés alias.

**Hamis válasz 3:**  
A `record struct` kötelezően mutable és mindig heapre kerül boxing miatt; a sima `struct` immutable és csak natív interopban használható.

### Kérdés 14: Mikor célszerű `class`-t, `struct`-ot vagy `record`-ot használni?

**Hamis válasz 1:**  
Minden DTO legyen `class`, minden EF entitás legyen `record`, mert a record generált `Equals` miatt az EF gyorsabban trackel.

**Hamis válasz 2:**  
Nagy (>1 KB) adathordozókhoz mindig `struct`, mert a stacken való tárolás mindig gyorsabb, függetlenül a másolási költségtől.

**Hamis válasz 3:**  
Ha az objektumnak van `Id` mezője, mindig `record`-ot válassz; ha nincs, akkor `struct`-ot — a `class` csak abstract factory-khoz való.

### Kérdés 15: Mikor választanál `record`-ot DTO-hoz a `class` helyett?

**Hamis válasz 1:**  
EF Core entitásoknál mindig `record` a best practice, mert a `with` kifejezés helyettesíti a change trackert és nem kell `SaveChanges`.

**Hamis válasz 2:**  
DTO-hoz soha ne használj `record`-ot, mert a JSON deserializáció nem támogatja a primary constructort — csak sima `class` működik System.Text.Json-nal.

**Hamis válasz 3:**  
A `record` előnye DTO-nál, hogy automatikusan mutable lesz minden property, így nem kell `init`-et használni és kevesebb kódot írunk.

### Kérdés 16: Mi az async/await lényege, és mikor használjuk API-kban?

**Hamis válasz 1:**  
Az `async`/`await` külön szálat hoz létre minden await-nél, ezért CPU-kötött műveleteknél mindig gyorsabb, mint a szinkron kód — API-ban minden metódust async-ra kell tenni.

**Hamis válasz 2:**  
Async API-ban csak akkor hasznos, ha `Task.Run`-t hívunk benne; az EF Core `ToListAsync` valójában szinkron módon fut a háttérben.

**Hamis válasz 3:**  
Az await felfüggeszti az egész folyamatot (process), nem csak a szálat — ezért egy await alatt más HTTP kérések sem futnak ugyanazon a Kestrel példányon.

### Kérdés 17: Miért kerüljük a `.Result` és `.Wait()` használatát async kódban?

**Hamis válasz 1:**  
A `.Result` és `.Wait()` teljesen biztonságos ASP.NET Core-ban, mert nincs SynchronizationContext — a Microsoft hivatalosan is ezt ajánlja sync-over-async helyett.

**Hamis válasz 2:**  
A `.Wait()` gyorsabb, mint az `await`, mert nem hoz létre state machine-t; deadlock csak .NET Framework 2.0 alatt fordult elő.

**Hamis válasz 3:**  
`.Result` használata akkor kötelező, ha a hívó metódus sync és async API-t hív — az await ilyenkor compile error-t dob a fordítóban.

### Kérdés 18: Mi a `CancellationToken`, és miért fontos API-kban?

**Hamis válasz 1:**  
A `CancellationToken` automatikusan leállítja a futó szálat `Thread.Abort`-tal, ha a kliens bezárja a böngészőt — ezért nem kell továbbadni a service rétegnek.

**Hamis válasz 2:**  
CancellationToken csak `Task.Run`-nál hasznos; EF Core és HttpClient nem támogatja, ott timeout-ot appsettings-ből kell olvasni külön.

**Hamis válasz 3:**  
Ha nem adsz át tokent, az ASP.NET Core alapértelmezetten azonnal 499 státuszt küld a kliensnek és exception-t dob a controllerben minden I/O-nál.

### Kérdés 19: Hogyan adod át a `CancellationToken`-t Minimal API-ban és controllerben?

**Hamis válasz 1:**  
Minimal API-ban a tokent `[FromHeader]` attribútummal kell felvenni a `X-Cancel-Token` fejlécből; a framework nem injektál automatikusan tokent.

**Hamis válasz 2:**  
Controllerben a `CancellationToken` csak akkor működik, ha az action `[HttpGet]` és a metódus neve `Get`-re végződik — egyébként manuálisan kell `HttpContext.Abort()`-ot hívni.

**Hamis válasz 3:**  
A token továbbadása opcionális junior szinten; elég a controller szinten `throw new OperationCanceledException()` ha timeout van appsettings-ben.

### Kérdés 20: Mi a különbség az EF Core `Add`, `Attach` és `Update` között?

**Hamis válasz 1:**  
Az `Add` meglévő entitást `Modified`-dé tesz, az `Attach` új entitást `Added`-dé, az `Update` pedig `Detached`-dé állítja az entitást mentés előtt.

**Hamis válasz 2:**  
Mindhárom ugyanazt csinálja, csak az `Update` gyorsabb, mert nem indít change trackinget — mentéskor mindig teljes táblacsere történik.

**Hamis válasz 3:**  
`Attach` csak navigation property-kkel működik; entitás csatolásához kötelező előbb `AsNoTracking()`-et hívni, különben dupla INSERT keletkezik.

### Kérdés 21: Melyek az EF Core Entity State-ek?

**Hamis válasz 1:**  
Három állapot van: Active, Passive és Archived — az EF Core 8 ezekre redukálta a korábbi öt állapotot teljesítmény okokból.

**Hamis válasz 2:**  
A `Detached` állapot azt jelenti, hogy az entitás éppen INSERT-re vár; `Added` pedig hogy már az adatbázisban van és nem módosítható.

**Hamis válasz 3:**  
`Unchanged` és `Modified` között nincs különbség mentéskor — mindkettő UPDATE-et generál minden oszlopra, függetlenül a változástól.

### Kérdés 22: Melyek a legfontosabb EF Core migrációs parancsok?

**Hamis válasz 1:**  
`dotnet ef migrations remove` automatikusan visszavonja az adatbázisban is a legutóbbi migrációt és törli az adatokat — ez a rollback parancs productionben is.

**Hamis válasz 2:**  
Migrációt csak Visual Studio Package Manager Console-ból lehet futtatni; a `dotnet ef` CLI nem támogatja a .NET 6+ projekteket.

**Hamis válasz 3:**  
`dotnet ef database update` csak a kódot generálja, az adatbázist nem módosítja — tényleges séma alkalmazáshoz `dotnet ef migrations apply` kell.

### Kérdés 23: Mi a különbség az INNER JOIN és a LEFT JOIN között SQL-ben?

**Hamis válasz 1:**  
INNER JOIN a bal oldali tábla minden sorát visszaadja NULL kitöltéssel; LEFT JOIN csak ahol mindkét oldalon van egyezés — pont fordítva, mint ahogy a nevek sugallják.

**Hamis válasz 2:**  
LEFT JOIN gyorsabb, mert nem szűr sorokat; INNER JOIN mindig temp táblát hoz létre a szerveren, ezért nagy adatnál kerülendő.

**Hamis válasz 3:**  
A kettő között nincs eredménybeli különbség, ha a join kulcs primary key — ilyenkor a query optimizer automatikusan INNER-t LEFT-re cserél.

### Kérdés 24: Hogyan írsz LEFT JOIN-t EF Core LINQ-ban?

**Hamis válasz 1:**  
LEFT JOIN-hoz elég a sima `join ... on ... equals` szintaxis — az EF Core automatikusan LEFT OUTER JOIN-ná alakítja, ha a jobb oldali entitás nullable.

**Hamis válasz 2:**  
EF Core LINQ-ban natív `RightJoin()` extension van; LEFT JOIN-hoz a táblákat fordítva kell joinolni `RightJoin`-nal.

**Hamis válasz 3:**  
LEFT JOIN csak raw SQL-ből (`FromSqlRaw`) érhető el; LINQ mindig INNER JOIN-t generál, a `DefaultIfEmpty()` deprecated EF Core 5 óta.

### Kérdés 25: Mi a soft delete (logikai törlés) lényege EF Core-ban?

**Hamis válasz 1:**  
Soft delete azt jelenti, hogy a rekord fizikailag törlődik, de backup táblába másolódik triggerrel — az EF `Remove()` ezt automatikusan kezeli SQL Serveren.

**Hamis válasz 2:**  
Soft delete-nél a `IsDeleted` flag-et csak manuálisan kell minden query-be írni; global query filter nem használható, mert az EF nem támogatja.

**Hamis válasz 3:**  
Soft delete esetén a `Remove()` továbbra is DELETE SQL-t küld; az interceptor csak audit logot ír, a flag-et a kliensnek kell PUT-tal állítani.

### Kérdés 26: Mi az ASP.NET Core middleware, és miért számít a sorrend?

**Hamis válasz 1:**  
A middleware-ek párhuzamosan futnak minden kérésnél — a regisztráció sorrendje csak a NuGet package betöltési sorrendjét határozza meg, nem a pipeline-t.

**Hamis válasz 2:**  
Autentikációnak mindig az autorizáció után kell jönnie, mert előbb ellenőrizni kell a jogosultságot, utána azonosítani a felhasználót.

**Hamis válasz 3:**  
Middleware csak MVC controller action-ökben használható attribute-ként; a pipeline-ba `MapGet`-tel lehet őket regisztrálni Minimal API-nál.

### Kérdés 27: Mi a különbség a JWT, az OAuth és az OpenID Connect között?

**Hamis válasz 1:**  
JWT egy authorization protokoll (OAuth konkurens), OAuth pedig token formátum — a „Bearer” header csak JWT-nél használható, OAuth-nál cookie kötelező.

**Hamis válasz 2:**  
OpenID Connect csak JWT-tel működik SOAP envelope-ban; OAuth 2.0 a hitelesítésre, OIDC az authorization delegálásra való külön szabvány.

**Hamis válasz 3:**  
JWT-ben tárolt claim-ek titkosítottak (JWE mindig kötelező); OAuth access token mindig session ID az adatbázisban, nem állítható alá JWT formátumban.

### Kérdés 28: Mit jelent a SOLID SRP (Single Responsibility Principle)?

**Hamis válasz 1:**  
SRP azt jelenti, hogy egy osztálynak csak egy metódusa lehet — több public metódus már SRP sértés, függetlenül a felelősségi köröktől.

**Hamis válasz 2:**  
SRP szerint minden osztály pontosan egy adatbázis táblát reprezentálhat; ha két entitást kezel, külön microservice kell.

**Hamis válasz 3:**  
Single Responsibility azt követeli, hogy egy osztály ne használjon interfészt — minden függőség konkrét implementáció legyen a átláthatóság miatt.

### Kérdés 29: Mit jelent a Dependency Inversion Principle (DIP)?

**Hamis válasz 1:**  
DIP azt mondja, hogy az alacsony szintű modulok (pl. repository) ne függjenek a magas szintűektől (service) — a függőség mindig lefelé mutasson a rétegekben.

**Hamis válasz 2:**  
Dependency Inversion azt jelenti, hogy minden osztály konstruktorában kötelező `new`-olni a függőségeket, ne használjunk DI konténert — így explicit a gráf.

**Hamis válasz 3:**  
DIP csak akkor érvényes, ha Singleton lifetime-ot használunk mindenhol — Scoped és Transient sérti az inverzió elvét, mert túl sok példány van.

### Kérdés 30: Mi a különbség az xUnit `[Fact]` és `[Theory]` között?

**Hamis válasz 1:**  
`[Fact]` több bemeneti adattal fut `[InlineData]` nélkül is; `[Theory]` csak egyetlen paraméter nélküli teszteset, amit nem lehet paraméterezni.

**Hamis válasz 2:**  
xUnit-ban minden teszt osztályból csak egy példány készül az egész teszt assembly futása alatt — a konstruktor egyszer fut, ezért `[Fact]` és `[Theory]` ugyanazt a setupot osztja stateful módon.

**Hamis válasz 3:**  
`[Theory]` csak integrációs tesztekhez használható; unit teszthez kötelező `[Fact]`, különben a teszt nem jelenik meg a Test Explorerben.

### Kérdés 31: Mi az Arrange–Act–Assert (AAA) minta tesztekben?

**Hamis válasz 1:**  
AAA sorrendje kötelezően Assert → Arrange → Act, mert így a teszt runner előbb ellenőrzi az elvárt értéket, utána futtatja a kódot — gyorsabb hibajelzés.

**Hamis válasz 2:**  
Egy tesztben több Act blokk is kell különböző forgatókönyvekhez; az Arrange csak egyszer a teszt osztály static konstruktorában történhet.

**Hamis válasz 3:**  
Az Assert rész opcionális, ha a metódus void — ilyenkor elég, ha nem dob exception-t; külön assert nélkül is sikeres a teszt.

### Kérdés 32: Hogyan használod a Moq-ot unit tesztben?

**Hamis válasz 1:**  
Moq-ban a `Setup` csak void metódusokra működik; visszatérési érték mockolásához `ReturnsAsync` helyett reflection kell.

**Hamis válasz 2:**  
A mock objektumot közvetlenül a SUT helyett kell tesztelni — a `Verify` megadja a helyes implementációt, amit a production kódnak másolni kell.

**Hamis válasz 3:**  
Moq csak sealed osztályokkal működik; interfészekhez NSubstitute kötelező, különben a Setup compile error-t ad.

### Kérdés 33: Mi a különbség Mock, Stub és Fake között?

**Hamis válasz 1:**  
Stub ellenőrzi a hívások számát (`Verify`), Mock előre definiált választ ad ellenőrzés nélkül, Fake pedig mindig adatbázis mock.

**Hamis válasz 2:**  
Fake és Mock ugyanaz Moq terminológiában; Stub csak integration testben létezik — unit tesztnél tilos stubot használni a szabvány szerint.

**Hamis válasz 3:**  
Mock valódi implementáció rövidítése (pl. in-memory EF), Stub pedig csak interface, aminek minden metódusa `NotImplementedException`-t dob.

### Kérdés 34: Mi az extension method, és mikor hasznos?

**Hamis válasz 1:**  
Extension method csak interface-en definiálható, és automatikusan override-olja az eredeti típus virtual metódusait — ezért veszélyes third-party típusokon.

**Hamis válasz 2:**  
Extension method privát mezőkhöz is hozzáfér, ha ugyanabban az assembly-ben van — kívülről nem hívható, de belső state-et módosíthat.

**Hamis válasz 3:**  
Az extension method instance metódust hív a háttérben reflection-nel minden alkalommal — teljesítmény miatt production API-ban kerülendő, csak tesztben hasznos.

### Kérdés 35: Mik a Nullable Reference Types (NRT), és mire jók?

**Hamis válasz 1:**  
NRT futásidőben dob `NullReferenceException`-t a fordító helyett, ha null érték kerül nem-nullable változóba — ez a C# 8 runtime checkje.

**Hamis válasz 2:**  
`<Nullable>enable</Nullable>` után minden value type nullable lesz automatikusan; referencia típusok nem változnak — csak `int?` jelölés szükséges.

**Hamis válasz 3:**  
A `string?` azt jelenti, hogy a string nem lehet null, a sima `string` pedig nullable — a kérdőjel a szigorítást jelzi.

### Kérdés 36: Mire való a Swagger / OpenAPI ASP.NET Core-ban?

**Hamis válasz 1:**  
Swagger productionben kötelező biztonsági okokból — nélküle az API nem fogad JWT tokent, mert a middleware pipeline nem inicializálódik.

**Hamis válasz 2:**  
OpenAPI csak SOAP szolgáltatások dokumentálására való; REST API-nál WSDL fájlt kell publikálni Swagger helyett.

**Hamis válasz 3:**  
A Swagger UI automatikusan generálja a controller kódot a spec alapján — ha módosítod a YAML-t, a C# forrás újraíródik buildkor.

### Kérdés 37: Mely gyűjtemények hash alapúak, és miért fontos az `Equals`/`GetHashCode`?

**Hamis válasz 1:**  
A `List<T>` hash alapú belső tárolású, ezért `Contains` O(1); a `Dictionary` pedig linked list, ezért lassú nagy adatnál.

**Hamis válasz 2:**  
`GetHashCode`-nak mindig egyedi értéket kell visszaadnia minden objektumra — ha két objektum egyenlő, a hash-üknek különböznie kell a teljesítmény miatt.

**Hamis válasz 3:**  
Hash alapú gyűjteményeknél elég csak `Equals`-t override-olni; a `GetHashCode` automatikusan generálódik az object alapból és sosem kell módosítani.

### Kérdés 38: Mit érdemes implementálni egy új, érték-szemantikájú C# típusban?

**Hamis válasz 1:**  
Érték-szemantikához elég a `ToString` override — az `Equals` és `GetHashCode` automatikusan a reflection alapján egyezik minden property-re.

**Hamis válasz 2:**  
Mindig implementálj `ICloneable`-t és deep copy-t minden mezőre; `IEquatable` használata tilos record mellett, mert ütközik a fordító generált kódjával.

**Hamis válasz 3:**  
Ha két példány hash-e különbözik, az `Equals` még mindig true lehet — a hash csak optimalizáció, nem kell konzisztens lennie az egyenlőséggel.

### Kérdés 39: Mi a file-scoped namespace, és mi az előnye?

**Hamis válasz 1:**  
File-scoped namespace (`namespace X;`) csak egy fájlban egy osztályt enged — több típus esetén compile error keletkezik.

**Hamis válasz 2:**  
A file-scoped namespace C# 12 újdonság, és csak .NET 8 exe projektekben működik; library projektekben továbbra is blokkos namespace kell.

**Hamis válasz 3:**  
File-scoped namespace lassabb fordítást ad, mert a fordító fájlonként külön assembly-t generál — előnye csak az, hogy kevesebb RAM kell IDE-nek.

### Kérdés 40: Mire való a `yield return`, és mikor hasznos?

**Hamis válasz 1:**  
A `yield return` azonnal anyagiasítja a teljes sorozatot memóriában List-ként — lusta kiértékelés nem létezik C#-ban, csak marketing kifejezés.

**Hamis válasz 2:**  
`yield return` csak async metódusban használható `await yield`-del; szinkron metódusban compile error a szabály.

**Hamis válasz 3:**  
Yield return után a generátor metódus többszöri bejárása ugyanazt a cache-elt listát adja vissza — nem fut le újra a kód, ezért side effect veszélyes.

### Kérdés 41: Mik az ASP.NET Core Health Check-ek, és mi a liveness vs readiness?

**Hamis válasz 1:**  
Liveness azt méri, hogy az adatbázis elérhető-e; readiness azt, hogy az app process fut-e — ha readiness bukik, Kubernetes mindig újraindítja a podot.

**Hamis válasz 2:**  
Health check végpont kötelezően anonymous és mindig 500-at ad, ha bármi nem optimális — 200 csak akkor jár, ha minden dependency sub-milliszekundós.

**Hamis válasz 3:**  
Readiness és liveness ugyanaz Kubernetesben — a különbséget csak a path neve adja (`/health` vs `/healthz`), a viselkedés identikus.

### Kérdés 42: Mi az Options Pattern, és miben különbözik az `IOptions`, `IOptionsSnapshot` és `IOptionsMonitor`?

**Hamis válasz 1:**  
`IOptions<T>` minden kérésenként újraolvassa az appsettings-et; `IOptionsSnapshot` singleton és sosem frissül; `IOptionsMonitor` scoped és nincs `OnChange` eseménye.

**Hamis válasz 2:**  
Options Pattern helyett mindig `IConfiguration` indexelőt kell használni string kulccsal — az `IOptions` csak Blazor-hoz van, ASP.NET Core API-ban deprecated.

**Hamis válasz 3:**  
Három interface között nincs viselkedésbeli különbség .NET 6 óta — a Microsoft egyesítette őket, a külön típusok csak backward compatibility aliasok.

### Kérdés 43: Mit csinál a RIGHT JOIN és a FULL OUTER JOIN?

**Hamis válasz 1:**  
RIGHT JOIN csak a bal oldali tábla sorait adja vissza NULL jobb oldallal; FULL OUTER JOIN pedig csak az egyező sorokat, mint az INNER JOIN.

**Hamis válasz 2:**  
FULL OUTER JOIN mindig gyorsabb LEFT+RIGHT JOIN uniójánál, mert SQL Server egyetlen index scan-nel oldja meg — LINQ-ban natív `FullJoin()` operátor van.

**Hamis válasz 3:**  
RIGHT JOIN és LEFT JOIN eredménye mindig azonos, ha a táblák neve felcserélhető — a SQL szabvány szerint kötelezően ugyanazt a sort adja vissza.

### Kérdés 44: Mi a Cross Join, és miért kerüljük általában?

**Hamis válasz 1:**  
Cross Join két táblát join kulcs nélkül kapcsol össze, de csak az egyező primary key-eket tartja meg — gyakorlatilag INNER JOIN alias.

**Hamis válasz 2:**  
Cross Join eredményhalmaza mindig kisebb, mint bármelyik input tábla, mert a szerver automatikusan distinct-et alkalmaz — ezért teljesítménybarát.

**Hamis válasz 3:**  
EF Core alapértelmezetten minden `from`-`from` lekérdezést INNER JOIN-ná alakít; cross join csak raw SQL-ben létezik, LINQ-ban nem.

### Kérdés 45: Mi a különbség az `Include` és az `AsNoTracking` között EF Core lekérdezéseknél?

**Hamis válasz 1:**  
Az `Include` kikapcsolja a change trackert, az `AsNoTracking` pedig eager load-olja a navigation property-ket — a kettő funkciója felcserélődött EF Core 7-ben.

**Hamis válasz 2:**  
`AsNoTracking` után az entitás automatikusan `Added` állapotú lesz mentéskor, mert a context nem ismeri — ezért olvasó API-ban kerülendő.

**Hamis válasz 3:**  
Include és AsNoTracking ugyanazt a SQL-t generálja; a különbség csak a C# oldali property nevekben van, az adatbázis lekérdezés identikus tracking-gel is.

### Kérdés 46: Hogyan kapcsolódik a global query filter a soft delete-hez?

**Hamis válasz 1:**  
Global query filter csak INSERT-nél fut le, és automatikusan `IsDeleted = false`-t állít — SELECT query-ket nem módosít.

**Hamis válasz 2:**  
Soft delete-hez nem kell filter: elég az `IsDeleted` property default értéke az entitáson — az EF minden query-be automatikusan hozzáadja a WHERE feltételt convention alapján.

**Hamis válasz 3:**  
`IgnoreQueryFilters()` minden query-n alapértelmezetten aktív, és csak admin role esetén kapcsolható ki middleware-ből — a filter alapból nem érvényesül.

### Kérdés 47: Mikor használjunk sync, és mikor async API metódust?

**Hamis válasz 1:**  
EF Core hívásoknál mindig sync API a best practice (`ToList`, `SaveChanges`), mert az async csak UI thread-en blokkol deadlock nélkül — szerveren felesleges.

**Hamis válasz 2:**  
HTTP kérés feldolgozásánál minden metódust sync-re kell írni, és a párhuzamosságot `Task.Run`-nal a controllerben kell megoldani — így skálázódik a Kestrel.

**Hamis válasz 3:**  
Async csak akkor hasznos, ha `ConfigureAwait(false)` nincs megadva — await nélkül az I/O automatikusan non-blocking a .NET runtime-ban.

### Kérdés 48: Hogyan segíti a `Task.WhenAll` a párhuzamos I/O-t?

**Hamis válasz 1:**  
`Task.WhenAll` szekvenciálisan futtatja a taskokat, de egyetlen await-ként adja vissza az eredményt — a teljes idő az összes task idejének összege marad.

**Hamis válasz 2:**  
Ugyanazon DbContext-en párhuzamos `WhenAll` a hivatalos EF pattern read-only lekérdezéseknél — a context thread-safe olvasásra.

**Hamis válasz 3:**  
WhenAll csak CPU-bound `Task.Run` taskokhoz való; I/O async műveleteknél mindig egymás után await-elj, különben race condition lesz a thread pool-ban.

### Kérdés 49: Mi történik xUnit-ban a teszt osztály konstruktorában és az `IDisposable.Dispose`-ban?

**Hamis válasz 1:**  
xUnit-ban egy teszt osztály példány az egész test class életére él — a konstruktor egyszer fut, a Dispose csak az assembly unload-nál.

**Hamis válasz 2:**  
A konstruktor teardown-nak szolgál, a Dispose pedig setupnak — xUnit felcseréli a NUnit `[SetUp]`/`[TearDown]` szerepét.

**Hamis válasz 3:**  
Dispose csak akkor hívódik, ha a teszt `[Fact(Skip = "...")]` attribútumot kap — sikeres teszteknél a teardown automatikusan garbage collection.

### Kérdés 50: Mit jelent az immutabilitás C#-ban, és milyen eszközökkel érhető el?

**Hamis válasz 1:**  
Immutable objektum állapota szabadon módosítható property setterrel, ha az osztály `sealed` — a sealed kulcsszó garantálja a szálbiztonságot.

**Hamis válasz 2:**  
A `record with` kifejezés in-place módosítja az eredeti példányt, nem hoz létre másolatot — ezért immutable collection-nel nem használható.

**Hamis válasz 3:**  
Immutabilitás csak `const` mezőkkel érhető el; `readonly` és `init` nem véd a mutálástól, mert reflection mindig írhat.

## Medior

### Kérdés 1: Mi a Clean Architecture lényege, és mit jelent a Dependency Rule?

**Hamis válasz 1:**  
A Clean Architecture lényege, hogy a függőségek mindig kifelé mutassanak: a Domain réteg hivatkozhat az Infrastructure-ra, mert így közvetlenül elérheti az adatbázist és a külső szolgáltatásokat. A Dependency Rule csak azt mondja meg, hogy a UI ne függjön egymástól.

**Hamis válasz 2:**  
A Clean Architecture fő célja a rétegek szigorú fizikai elkülönítése ugyanabban a projektben; a Dependency Rule szerint minden osztály csak az alatta lévő mappából importálhat. A `Program.cs` nem része az architektúrának, mert az csak bootstrap kód.

**Hamis válasz 3:**  
A Clean Architecture azt jelenti, hogy minden use case külön microservice legyen, és a domain entitások mindig EF Core entitások is legyenek. A Dependency Rule csak teszteléskor érvényes, élesben a gyorsaság miatt felül lehet bontani.

### Kérdés 2: Miben hasonlít és miben tér el a Hexagonal, az Onion és a Clean Architecture?

**Hamis válasz 1:**  
Mindhárom architektúra ugyanaz: csak a diagram színei különböznek. A Hexagonal kifejezetten tiltja az interfészeket, az Onion pedig kötelezően microservice-alapú.

**Hamis válasz 2:**  
A Hexagonal Architecture-ben a portok mindig HTTP controllerek, az adapterek pedig adatbázis-táblák. Az Onion és a Clean Architecture ellentétben a domainet a legkülső rétegbe helyezi, hogy könnyebb legyen a UI-t cserélni.

**Hamis válasz 3:**  
A Clean Architecture kizárólag .NET-re vonatkozik, míg a Hexagonal csak Java-ban használható. Az Onion Architecture nem ismeri a Dependency Rule-t, helyette event sourcingot követel meg minden projektnél.

### Kérdés 3: Mi a Vertical Slice Architecture, és mikor előnyösebb a klasszikus rétegezésnél?

**Hamis válasz 1:**  
Vertical Slice azt jelenti, hogy minden rétegben ugyanaz a fájlnév szerepel, de a kód továbbra is Controllers/Services/Repositories mappákba van rendezve. Akkor előnyös, ha a csapat nem akar feature-alapú fejlesztést.

**Hamis válasz 2:**  
Vertical Slice Architecture-nál minden endpoint külön adatbázist kap, így automatikusan megvalósul a CQRS külön read/write store-ral. Klasszikus rétegezés csak 10 fő alatti projekteknél működik.

**Hamis válasz 3:**  
A Vertical Slice lényege, hogy egy feature összes kódját egyetlen 5000 soros service osztályba tesszük, így nem kell mappák között navigálni. Előnyösebb minden esetben, mert megszünteti a cross-cutting concern-öket teljesen.

### Kérdés 4: Mi a CQRS alapgondolata, és mi a különbség a Command és a Query között?

**Hamis válasz 1:**  
CQRS azt jelenti, hogy minden GET kérés Event Sourcing store-ból olvas, minden POST pedig Kafka topicba ír. A Command és a Query között nincs különbség, csak elnevezési konvenció.

**Hamis válasz 2:**  
A Command csak olvas, a Query módosít adatot, mert a query-k gyorsabbak és kevesebb validációt igényelnek. CQRS kötelező minden EF Core projektnél, különben nem skálázható az alkalmazás.

**Hamis válasz 3:**  
CQRS lényege, hogy a Controller és a Repository közé egy plusz Service réteget teszünk. A Command HTTP DELETE, a Query pedig HTTP GET; a PUT mindkettő egyszerre, ezért azt külön Saga kezeli.

### Kérdés 5: Hogyan segíti a MediatR a CQRS megvalósítását .NET-ben?

**Hamis válasz 1:**  
A MediatR automatikusan szétválasztja az adatbázist read és write példányra, és EF migrációt is generál hozzá. A handler regisztráció manuális, minden `IRequestHandler`-t külön sorban kell felvenni a `Program.cs`-ben.

**Hamis válasz 2:**  
MediatR lényege, hogy a controller közvetlenül a `DbContext`-et kapja meg handlerként, így nem kell repository. A pipeline behavior-ök csak loggingra valók, validációt nem lehet beléjük tenni.

**Hamis válasz 3:**  
A MediatR egy teljes Clean Architecture implementáció: ha hozzáadjuk a projekthez, automatikusan létrejönnek a Domain, Application és Infrastructure rétegek. CQRS nélkül a MediatR nem használható.

### Kérdés 6: Mi a Repository pattern szerepe, és milyen hibákat érdemes elkerülni?

**Hamis válasz 1:**  
A Repository célja, hogy minden SQL lekérdezést a controllerben tarthassunk, csak tranzakciókezelés miatt van interfész. Ajánlott minden entitáshoz külön repository, és minden repository adjon vissza `IQueryable`-t a rugalmasságért.

**Hamis válasz 2:**  
Repository pattern azt jelenti, hogy a `DbContext`-et singleton-ként regisztráljuk, így egyetlen change tracker van az egész alkalmazásban. Üzleti logika a repositoryban a helyes megoldás, mert ott van az adatelérés.

**Hamis válasz 3:**  
A Repository pattern felesleges EF Core mellett, mert a `DbSet<T>` már repository. Ha mégis használjuk, minden metódus neve `GetAllIncludingEverything`, és minden hívás `Include`-oljon legalább öt navigációs property-t.

### Kérdés 7: Mit jelent a Unit of Work mintázat EF Core mellett?

**Hamis válasz 1:**  
Unit of Work azt jelenti, hogy minden repository külön `SaveChanges`-et hív, így részleges commit is lehetséges. EF Core-ban a `DbContext` nem Unit of Work, csak Dapperrel működik ez a minta.

**Hamis válasz 2:**  
A Unit of Work minden kérésnél új adatbázis-kapcsolatot nyit, és request végén automatikusan rollbackel, ha nem hívtuk explicit a `Commit`-et. `BeginTransactionAsync` csak distributed tranzakciókhoz kell, lokális DB-n tilos.

**Hamis válasz 3:**  
EF Core mellett mindig külön `IUnitOfWork` wrapper osztályt kell írni, még akkor is, ha csak egy repository van, mert a `DbContext` scoped lifetime-ja nem garantál tranzakciót. A `SaveChanges` helyett mindig nyers SQL commit parancsot futtatunk.

### Kérdés 8: Mi a Specification pattern, és mikor éri meg használni?

**Hamis válasz 1:**  
A Specification pattern egy Swagger annotáció, amivel az API szerződést írjuk le. Akkor éri meg, ha minden endpointnál külön DTO-t akarunk generálni, különben felesleges overhead.

**Hamis válasz 2:**  
Specification azt jelenti, hogy minden lekérdezéshez külön stored procedure-t írunk, és az EF ezt hívja. Kombinálni nem lehet, minden specifikáció fix SQL string legyen a service-ben.

**Hamis válasz 3:**  
Specification pattern csak unit tesztekben használható, éles kódban tilos, mert lassítja az EF fordítást. Akkor éri meg, ha ugyanazt a `Where(x => true)` feltételt legalább húsz helyen ismételjük.

### Kérdés 9: Mi a Result pattern (Railway-Oriented Programming), és mikor használjuk exception helyett?

**Hamis válasz 1:**  
A Result pattern azt jelenti, hogy minden exception-t elnyelünk, és `null`-t adunk vissza, így a kliens nem kap hibát. Várható üzleti hibákra mindig exception a helyes, a Result csak infrastruktúra hibákra való.

**Hamis válasz 2:**  
Result pattern kötelező minden API metódusnál, még a `void` handlereknél is, különben a Railway-Oriented Programming nem működik. A `Result<T>` mindig HTTP 200-at jelent, a Failure ág csak logolásra szolgál.

**Hamis válasz 3:**  
A Result pattern lényege, hogy a sikeres és sikertelen ágakat külön adatbázis-táblákba mentjük. Exception-t csak akkor dobunk, ha a Result már sikeres volt, de utólag kiderül, hogy mégsem jó az adat.

### Kérdés 10: Miben különbözik az Autofac a beépített MS DI-től medior szinten?

**Hamis válasz 1:**  
Az Autofac a beépített DI lassabb wrapper-e, funkcióban teljesen azonos, csak régebbi projektekben maradt meg. A .NET 8 óta az Autofac már nem támogat modulokat, ezért minden regisztrációt a `Program.cs`-be kell írni.

**Hamis válasz 2:**  
A beépített MS DI tud keyed service-t, az Autofac nem; ezért minden új projektnél Autofac helyett csak MS DI használható keyed regisztráció nélkül. Az Autofac egyetlen előnye a property injection, ami ASP.NET Core-ban ajánlott elsődleges injektálási mód.

**Hamis válasz 3:**  
Autofac és MS DI nem használható együtt; ha Autofacot választunk, ki kell kapcsolni a beépített hostot, és Kestrel helyett IIS Express-t kell indítani. Medior szinten mindkettő ugyanazt a service locator mintát kényszeríti ki.

### Kérdés 11: Mi a különbség az IOptions, IOptionsSnapshot és IOptionsMonitor között?

**Hamis válasz 1:**  
Mindhárom ugyanaz: singleton élettartam, és futás közben sem frissül a konfiguráció. A különbség csak az, hogy az `IOptionsMonitor` régebbi API, `.NET Framework`-ből maradt meg.

**Hamis válasz 2:**  
Az `IOptionsSnapshot` singleton, az `IOptionsMonitor` scoped, az `IOptions` pedig transient, ezért minden injektáláskor új appsettings.json-t olvas be. `reloadOnChange` csak az `IOptions`-nál működik.

**Hamis válasz 3:**  
Az Options pattern helyett mindig a nyers `IConfiguration["ConnectionStrings:Default"]` string olvasás a best practice, mert gyorsabb. Az `IOptionsMonitor` `OnChange` callback-je csak akkor fut le, ha újraindítjuk az alkalmazást.

### Kérdés 12: Hogyan modellezünk kapcsolatokat EF Core Fluent API-val?

**Hamis válasz 1:**  
Fluent API helyett mindig data annotation a javasolt, mert az EF csak attribútumokból generál migrációt. Az N:N kapcsolatot EF Core nem támogatja, join táblát mindig kézzel kell kezelni raw SQL-lel.

**Hamis válasz 2:**  
Kapcsolat modellezésnél minden navigációs property kötelezően virtual legyen, különben a Fluent API nem érvényesül. A cascade delete alapértelmezett minden 1:N kapcsolatnál, és ezt nem lehet felülírni.

**Hamis válasz 3:**  
Fluent API-val csak 1:1 kapcsolatot lehet definiálni; 1:N és N:N esetén automatikusan convention alapján minden FK a primary key lesz. A `HasMany().WithOne()` fordítva is ugyanazt az adatbázis-sémát eredményezi, a sorrend mindegy.

### Kérdés 13: Mi az IEntityTypeConfiguration, és miért jobb, mint mindent az OnModelCreatingbe írni?

**Hamis válasz 1:**  
Az `IEntityTypeConfiguration` csak tesztprojektekben használható, éles kódban minden konfigurációt az `OnModelCreating`-be kell írni, mert csak ott fut le az EF. A `ApplyConfigurationsFromAssembly` deprecated .NET 8-ban.

**Hamis válasz 2:**  
Egy `IEntityTypeConfiguration` fájlban több entitást is konfigurálunk, így kevesebb fájl kell. Jobb, mint az `OnModelCreating`, mert ott nem lehet Fluent API-t használni, csak attribútumokat.

**Hamis válasz 3:**  
Az `IEntityTypeConfiguration` automatikusan generálja a migrációkat is, külön `dotnet ef migrations add` parancs nem kell. Az `OnModelCreating` előnye, hogy runtime-ban dinamikusan módosítható a séma minden kérésnél.

### Kérdés 14: Mit tudnak az EF Core global query filterek?

**Hamis válasz 1:**  
Global query filter minden entitásra automatikusan `TOP 100`-at rak, így véletlenül sem lehet nagy lekérdezést futtatni. Soft delete-hez nem használható, mert a filter csak SELECT-re vonatkozik, DELETE-re nem.

**Hamis válasz 2:**  
A global filter minden SQL utasításra vonatkozik, beleértve a raw SQL-t és a stored procedure hívásokat is, és nem lehet kikapcsolni. Multi-tenancy esetén minden tenant ugyanabba a táblába kerül, a filter csak logol.

**Hamis válasz 3:**  
Global query filter helyett minden repository metódusban kézzel kell írni a `Where(!IsDeleted)` feltételt, mert az EF filter csak debug buildben aktív. Az `IgnoreQueryFilters()` minden lekérdezésnél automatikusan meghívódik admin felhasználóknál.

### Kérdés 15: Mire valók az EF Core interceptorok?

**Hamis válasz 1:**  
Interceptorokkal lecserélhető a teljes EF Core provider, pl. SQL Server helyett MongoDB-re. A `SaveChangesInterceptor` a tranzakció commit előtt automatikusan rollbackel, ha bármely entitáson nincs `[Key]` attribútum.

**Hamis válasz 2:**  
EF Core interceptor csak SQL logolásra való, audit mezőket és soft delete-et nem lehet vele megoldani. Domain event-et a mentés előtt, a rollback határán belül kell publikálni interceptorban, így biztosan kimegy az üzenet.

**Hamis válasz 3:**  
Interceptor regisztráció nélkül is működik, ha az osztály neve `*Interceptor` végződésű. Minden interceptor singleton kell legyen, és közvetlenül injektálható scoped `DbContext` a konstruktorába captive dependency nélkül.

### Kérdés 16: Hogyan működik az optimista konkurenciakezelés EF Core-ban?

**Hamis válasz 1:**  
Optimista konkurencia azt jelenti, hogy az EF minden UPDATE előtt `UPDLOCK`-ot tesz a sorra, így más tranzakció nem módosíthatja, amíg az első fut. Concurrency token nélkül is működik, elég a primary key.

**Hamis válasz 2:**  
Ha `DbUpdateConcurrencyException` keletkezik, az EF automatikusan merge-eli a kliens és szerver adatot, a fejlesztőnek nem kell kezelni. A `rowversion` oszlop csak SQL Serveren működik, PostgreSQL-en tilos optimista stratégiát használni.

**Hamis válasz 3:**  
Optimista helyett mindig pesszimista zárolás a best practice webes API-knál, mert így nem kell exception handling. Az optimista token minden navigációs property-n kötelező `[ConcurrencyCheck]` attribútummal.

### Kérdés 17: Mi a különbség a TPH, TPT és TPC öröklési stratégiák között?

**Hamis válasz 1:**  
TPH, TPT és TPC ugyanaz: mindhárom külön adatbázist használ entitásonként. A különbség csak a migráció fájl kiterjesztésében van (.tp h, .tpt, .tpc).

**Hamis válasz 2:**  
TPC a leggyakoribb, mert egy táblában discriminator oszlop van; TPH-nál minden konkrét típus külön teljes tábla. TPT csak .NET Framework EF6-ban létezett, EF Core-ban nincs támogatva.

**Hamis válasz 3:**  
Öröklésnél mindig TPT a legjobb teljesítmény, mert nem kell join. TPH-t csak akkor választunk, ha az összes leszármazott teljesen eltérő oszlopokkal rendelkezik, így nincs nullable mező.

### Kérdés 18: Melyek az alapvető EF Core teljesítmény-technikák (AsNoTracking, Include, projekció)?

**Hamis válasz 1:**  
Minden lekérdezésnél kötelező az `Include` minden navigációra, különben az EF lazy loading nélkül nem működik. Az `AsNoTracking` lassítja a read műveleteket, mert újra kell építeni az entitásokat memóriában.

**Hamis válasz 2:**  
A legjobb teljesítményhez mindig `ToList()` majd LINQ to Objects a memóriában, így az adatbázis csak egyszer fut le. Projekció helyett AutoMapperrel mapeljünk teljes entitást, mert a `Select` DTO-ra nem fordít SQL-t.

**Hamis válasz 3:**  
Az `AsNoTracking` csak write műveleteknél használható, olvasásnál a change tracker nélkül nem lehet kapcsolódó adatot betölteni. N+1 probléma csak Dapperrel fordul elő, EF Core automatikusan batch-el minden Include-t egyetlen join nélkül.

### Kérdés 19: Miért használjunk IHttpClientFactory-t, és hogyan jön képbe a Polly?

**Hamis válasz 1:**  
Az `IHttpClientFactory` azért kell, mert a `HttpClient` nem thread-safe, ezért minden kérésnél új példányt kell `new HttpClient()`-tel létrehozni factory nélkül. A Polly automatikusan cseréli a DNS-t és bezárja a socketeket.

**Hamis válasz 2:**  
Polly nélkül az `IHttpClientFactory` nem tud typed clientet regisztrálni. A retry policy-t mindig végtelen újrapróbálkozásra állítjuk, timeout nélkül, mert így biztosan sikerül a hívás.

**Hamis válasz 3:**  
A Polly circuit breaker célja, hogy minden sikertelen hívást azonnal újrapróbáljon Open állapotban is. Az `IHttpClientFactory` singleton `HttpClient`-et ad, handler pool nélkül, .NET 8-tól felesleges a használata.

### Kérdés 20: Hogyan működik a Circuit Breaker minta, és miért fontos?

**Hamis válasz 1:**  
Circuit Breaker azt jelenti, hogy minden HTTP hívás előtt ellenőrizzük az adatbázis kapcsolatot, és ha lassú, leállítjuk az appot. Open állapotban a hívások továbbra is mennek, csak lassabban, Half-Open pedig permanent shutdown.

**Hamis válasz 2:**  
A Circuit Breaker és a Retry ugyanaz: mindkettő ugyanazt a kérést ismétli exponenciális backoff nélkül. Open állapot célja, hogy minél több forgalmat küldjünk a hibás szolgáltatásra, amíg helyre nem áll.

**Hamis válasz 3:**  
Circuit Breaker-t csak adatbázis kapcsolatokra használunk, HTTP kliensnél felesleges. A fallback mindig az, hogy `null`-t adunk vissza exception nélkül, és nem logolunk, hogy ne riasszuk a monitoringot.

### Kérdés 21: Milyen caching stratégiákat ismersz ASP.NET Core-ban?

**Hamis válasz 1:**  
ASP.NET Core-ban csak in-memory cache létezik, distributed cache nincs beépítve. Cache-aside azt jelenti, hogy minden írás előtt törlünk minden cache kulcsot az egész clusterből manuálisan.

**Hamis válasz 2:**  
Minden API választ cache-elni kell legalább 24 órára, függetlenül attól, hogy user-specifikus-e. A TTL nélküli cache a best practice, mert így nem kell invalidációt tervezni.

**Hamis válasz 3:**  
Response cache és output cache ugyanaz, mindkettő a böngészőben tárol. Cache stampede elkerülésére minden miss esetén lock nélkül indítunk párhuzamosan 50 azonos számítást, és az első eredményt vesszük.

### Kérdés 22: Mi a HybridCache, és milyen problémát old meg?

**Hamis válasz 1:**  
HybridCache csak .NET Framework 4.8 plugin, ASP.NET Core-ban nincs natív támogatás. Egyetlen L3 distributed cache réteget ad, in-memory része nincs, így minden olvasás hálózati round-trip.

**Hamis válasz 2:**  
HybridCache célja, hogy teljesen helyettesítse az adatbázist read-heavy rendszereknél. A `GetOrCreateAsync` szándékosan nem véd stampede ellen: minden szál külön számol, így friss adat garantált.

**Hamis válasz 3:**  
HybridCache tag alapú invalidációja globálisan törli az összes Redis instance-t reboot nélkül nem lehetséges. L1 és L2 szinkronjához mindig hard-coded 24 órás TTL kell, pub/sub nem támogatott.

### Kérdés 23: Miért fontos a middleware pipeline sorrendje ASP.NET Core-ban?

**Hamis válasz 1:**  
A middleware sorrendje mindegy, mert az ASP.NET Core automatikusan topológiai rendezést végez dependency graph alapján. Az exception handler mindig a pipeline legvégére kerül, az endpoints után.

**Hamis válasz 2:**  
Autentikációt mindig az endpoints után regisztráljuk, így gyorsabb a routing. CORS-nak csak akkor van hatása, ha a response már elküldésre került, ezért CORS a pipeline legvégén helyes.

**Hamis válasz 3:**  
Middleware csak request bejövetelekor fut, response közben nem. A `UseRouting` és `UseEndpoints` .NET 8-ban deprecated, helyette minden middleware-t a `MapGet` delegate-ben kell láncolni.

### Kérdés 24: Mi a ProblemDetails, és hogyan illeszkedik a globális kivételkezeléshez?

**Hamis válasz 1:**  
ProblemDetails egy XML formátum hibákhoz, JSON API-kban nem használható. A globális exception handler célja, hogy minden hibát 200 OK-kal adjon vissza biztonsági okokból, a `detail` mezőben legyen a stack trace élesben is.

**Hamis válasz 2:**  
ProblemDetails helyettesíti a FluentValidation-t: ha bekapcsoljuk, nem kell input validáció. Az `IExceptionHandler` .NET 8 előtt volt az egyetlen mód, mostantól tilos használni.

**Hamis válasz 3:**  
Domain validációs hiba mindig HTTP 500, váratlan infrastruktúra hiba HTTP 400. A ProblemDetails `type` mezője mindig a teljes exception stack trace URL-je legyen a GitHub repo-ra.

### Kérdés 25: Mit jelent a strukturált logolás ILogger/Serilog esetén?

**Hamis válasz 1:**  
Strukturált logolás azt jelenti, hogy minden log üzenet JSON fájlba kerül interpolációval: `$"Order {orderId}"`. Így a Seq-ben külön mezőként indexelődik az OrderId anélkül, hogy template lenne.

**Hamis válasz 2:**  
Az `ILogger` és a Serilog nem használható együtt; ha Serilog van, ki kell kapcsolni az `ILogger<T>`-et. Élesben Debug szintet használunk minden környezetben, hogy ne maradjon ki információ.

**Hamis válasz 3:**  
Strukturált logolásnál a PII-t mindig plain textben logoljuk, mert így gyorsabb a keresés. A `LogInformation` template paraméterei csak string típusúak lehetnek, számot előbb stringgé kell castolni.

### Kérdés 26: Mi a Correlation ID szerepe, és hogyan valósítjuk meg?

**Hamis válasz 1:**  
Correlation ID csak frontend fejlesztéshez kell, backend logokban felesleges. Middleware generálja a GUID-ot, de nem kell továbbadni HTTP headerben, elég session cookie-ban tárolni.

**Hamis válasz 2:**  
Correlation ID és Trace ID különböző fogalmak, soha nem lehet ugyanaz. OpenTelemetry `Activity` használata nélkül is elég a `Console.WriteLine` minden sor elején, manuálisan beírva az ID-t.

**Hamis válasz 3:**  
Kimenő HTTP hívásoknál tilos továbbadni a correlation headert, mert az biztonsági rés. A Correlation ID csak akkor kell, ha Kafka van a rendszerben, REST API-nál nincs értelme.

### Kérdés 27: Miért kell API versioning, és milyen stratégiák vannak?

**Hamis válasz 1:**  
API versioning csak akkor kell, ha GraphQL-t használunk; REST esetén minden breaking change azonnal deployolható, a kliensek automatikusan alkalmazkodnak. Verziót csak a NuGet package version szám adja, URL-ben nem kell.

**Hamis válasz 2:**  
Minden új mező hozzáadása breaking change, ezért minden PR új major verzió. Header alapú verziózás azért rossz, mert a HTTP spec tiltja a custom headereket verzióhoz.

**Hamis válasz 3:**  
Az Asp.Versioning csomag helyett mindig külön teljes másolat hostot indítunk v1 és v2 domainen. Deprecálási politika felesleges, a régi verziót azonnal le lehet kapcsolni deploy után.

### Kérdés 28: Hogyan működnek az authorization policy-k és a claim-ek ASP.NET Core-ban?

**Hamis válasz 1:**  
Autentikáció és autorizáció ugyanaz: ha bejelentkezett a user, minden művelet engedélyezett. Claim-ek csak JWT-ben léteznek, cookie auth esetén nincs claim, csak role string a sessionben.

**Hamis válasz 2:**  
Policy helyett mindig `[Authorize(Roles="Admin")]` elég, összetett szabályhoz nem kell requirement handler. A claims principal a middleware pipeline végén, response küldése után épül fel.

**Hamis válasz 3:**  
Autorizációt a controllerben `if (user.IsAdmin)` checkkel oldjuk, policy csak Blazorban működik. Minimal API-nál nincs `[Authorize]`, csak Basic auth middleware használható.

### Kérdés 29: Mi a különbség az IHostedService és a BackgroundService között?

**Hamis válasz 1:**  
Az `IHostedService` és a `BackgroundService` teljesen külön host process-ben fut, nem az ASP.NET Core app része. A `BackgroundService` csak rövid, egyszeri feladatra való, loop tilos benne.

**Hamis válasz 2:**  
Hosted service mindig transient lifetime, ezért biztonságos scoped `DbContext`-et injektálni közvetlenül a konstruktorba. A `CancellationToken` a `StopAsync`-ben mindig `CancellationToken.None`, mert graceful shutdown nem támogatott.

**Hamis válasz 3:**  
`IHostedService`-t csak console appban használható, web API-ban tilos háttérfolyamat. A `BackgroundService` `ExecuteAsync` szinkron metódus, async/await használata exceptiont dob indításkor.

### Kérdés 30: Mire való a Quartz.NET a BackgroundService mellett?

**Hamis válasz 1:**  
Quartz.NET csak Windows Task Scheduler wrapper, cron kifejezéseket nem ért. BackgroundService minden esetben jobb, mert Quartz nem támogat DI-t és nem lehet clusterben futtatni.

**Hamis válasz 2:**  
Quartz akkor kell, ha egyszeri indításkor futó feladatot akarunk, cron csak dekoráció. Több app instance esetén minden node ugyanabban az időben lefuttatja a jobot, locking nem létezik Quartzban.

**Hamis válasz 3:**  
Quartz.NET és BackgroundService ugyanaz az API, a Quartz csak NuGet alias. Misfire kezelés azt jelenti, hogy a kimaradt jobok örökre elvesznek, újra nem futnak le.

### Kérdés 31: Mikor használjunk SignalR-t, és mi a lényege?

**Hamis válasz 1:**  
SignalR microservice-ek közötti üzenetküldésre való, Kafka helyettesítője belső hálózaton. WebSocket az egyetlen transport, fallback nincs, ezért minden kliensnek WebSocketet kell kényszeríteni.

**Hamis válasz 2:**  
SignalR-t minden REST endpoint helyett kell használni, mert gyorsabb. Több szerver instance-nál backplane nélkül is szinkronban maradnak a hub kapcsolatok automatikusan SQL Server tempdb-n keresztül.

**Hamis válasz 3:**  
SignalR hubok singleton regisztrációval futnak, és thread-safe állapotot tárolnak static mezőben. Request-response helyett mindig SignalR, még fájl feltöltésnél és CRUD listázásnál is.

### Kérdés 32: Mik a gRPC alapjai .NET-ben a REST-hez képest?

**Hamis válasz 1:**  
gRPC HTTP/1.1-en JSON-t használ, Protobuf opcionális. Böngészőből natívan jobban támogatott, mint REST, ezért publikus API-khoz mindig gRPC a best practice.

**Hamis válasz 2:**  
gRPC és REST ugyanaz a protokoll, csak a port szám különbözik. A `.proto` fájl futásidőben töltődik, fordításkor nem generálódik kód, manuálisan írjuk a client stubot.

**Hamis válasz 3:**  
gRPC hibáit mindig ProblemDetails JSON-nel adjuk vissza HTTP 200 mellett. Streaming csak server-side létezik, client streaming és duplex nem támogatott .NET-ben.

### Kérdés 33: Hogyan illeszkedik a FluentValidation egy MediatR pipeline-ba?

**Hamis válasz 1:**  
FluentValidation csak DataAnnotations helyettesítője a controllerben, MediatR-rel nem kombinálható. A pipeline behavior a handler után fut, így a validáció csak sikeres üzleti logika után ellenőriz.

**Hamis válasz 2:**  
Minden validációs szabályt a domain entitás property setterébe kell írni, FluentValidation tilos MediatR mellett. DB-t érintő async validátor mindig biztonságos race condition nélkül, mert SQL serializable isolation alapértelmezett.

**Hamis válasz 3:**  
A `IPipelineBehavior` regisztráció nélkül is lefut, ha a validator osztály neve `*Validator`. Input validáció és domain invariáns ugyanaz: elég a FluentValidation a DTO-n, a domain modellben nem kell ellenőrzés.

### Kérdés 34: Miben jobb a Mapperly az AutoMapperhez képest, és mikor ne mapeljünk?

**Hamis válasz 1:**  
AutoMapper mindig gyorsabb, mert futásidőben optimalizál reflexió nélkül. Mapperly csak .NET Frameworkre elérhető. Mapelni mindig kell, EF projekció helyett is teljes entitást töltsünk be, aztán mapeljünk.

**Hamis válasz 2:**  
Mapperly runtime-ban generálja a mapping kódot első híváskor, ezért hideg start lassú. AutoMapper source generator, Mapperly pedig reflection alapú. Írási oldalon DTO-ból domain entitást AutoMapperrel hozunk létre setterekkel, factory felesleges.

**Hamis válasz 3:**  
Mapelés nélkül nem lehet Clean Architecturet csinálni, a handler mindig két DTO között mapel. Mapperly nem jelez fordítási idejű hibát hiányzó property mappingnél, csak runtime NullReferenceException-t dob.

### Kérdés 35: Mi a Test Data Builder és az Object Mother különbsége?

**Hamis válasz 1:**  
Object Mother és Test Data Builder ugyanaz, mindkettő Moq-ot használ mockolásra. A Builder csak integrációs tesztben használható, unit tesztben tilos fluent API.

**Hamis válasz 2:**  
Object Mother rugalmasabb, mert minden mezőt külön paraméterként lehet megadni; a Builder fix példányokat ad vissza. Mindkettő célja, hogy a teszt ne függjön az adatszerkezettől, random adat generálás kötelező.

**Hamis válasz 3:**  
Test Data Builder és Object Mother helyett mindig éles adatbázisból másolunk rekordot teszteléshez. A kettő különbsége csak elnevezés, .NET-ben nincs bevett pattern, mindkettő anti-patternnek számít.

### Kérdés 36: Mire való a WebApplicationFactory integrációs teszteknél?

**Hamis válasz 1:**  
WebApplicationFactory valódi hálózati porton indít Kestrel-t, és külső URL-en kell hívni a teszteket. Nem cserélhető a DI regisztráció tesztben, mindig éles DB-t használ.

**Hamis válasz 2:**  
WebApplicationFactory csak unit tesztekhez való, integrációs teszthez Postman collection a helyes eszköz. A pipeline nem fut le benne, csak a controller action hívódik meg közvetlenül reflectionnel.

**Hamis válasz 3:**  
Integrációs teszthez minden endpointot külön microservice-ként kell deployolni Dockerben, WebApplicationFactory deprecated .NET 9-ben. A `ConfigureWebHost` csak log levelt állít, mock DB nem injektálható.

### Kérdés 37: Mi a REPR pattern, és hogyan kapcsolódik a Minimal API-hoz?

**Hamis válasz 1:**  
REPR a Repository-Entity-Provider-Repository név rövidítése, lényege a dupla repository réteg. Minimal API-val nem használható, csak MVC controllerrel, mert endpoint delegate nem lehet külön fájl.

**Hamis válasz 2:**  
REPR azt jelenti, hogy minden HTTP metódus egy 200 soros controller action, benne validáció, SQL és mapping. Minimal API csak health checkre való, üzleti végpontokhoz mindig MVC kell.

**Hamis válasz 3:**  
REPR pattern ellentéte a Vertical Slice: REPR-nél feature mappák helyett technikai rétegek szerint rendezünk. Az endpoint tartalmazza az üzleti logikát, a MediatR handler csak továbbít a DbContext-nek.

### Kérdés 38: Mi a Service Collection Extension pattern, és miért hasznos?

**Hamis válasz 1:**  
Service Collection Extension anti-pattern, mert elrejti a függőségeket; minden regisztrációt egyetlen 3000 soros `Program.cs`-be kell írni. Extension method regisztráció közben szabad adatbázist migrálni és fájlt olvasni.

**Hamis válasz 2:**  
Extension pattern csak NuGet csomagokban használható, saját app kódban tilos. Az `AddEverything()` egy metódus a best practice, így egy helyen látszik az összes service. A visszatérési típus mindig `void` legyen.

**Hamis válasz 3:**  
Service Collection Extension nem láncolható, minden `Add*` külön statement. Rétegenkénti bontás csak Clean Architecture senior projekteknél engedélyezett, medior szinten egy `AddServices()` elég.

### Kérdés 39: Mikor válasszunk Kafka-t, és mikor RabbitMQ-t?

**Hamis válasz 1:**  
Kafka és RabbitMQ ugyanaz, mindkettő csak .NET-ben működik, Java broker nem kell. RabbitMQ a nagy throughputú event stream, Kafka pedig kis work queue üzenetekhez ideális.

**Hamis válasz 2:**  
Kafka minden üzenetet azonnal töröl ack után, retention nincs. RabbitMQ nem támogat routingot, minden consumer ugyanazt a queue-t olvassa broadcast nélkül. Választás teljesen mindegy, broker interchangeable.

**Hamis válasz 3:**  
Kafka-t csak akkor választunk, ha nincs szükség sorrendre és replay-re. RabbitMQ kötelező analytics és audit trail esetén, mert perzisztens logot tárol hosszú retentionnel partíciók nélkül.

### Kérdés 40: Mit ad a MassTransit az üzenetküldéshez .NET-ben?

**Hamis válasz 1:**  
MassTransit csak Azure Service Bus-ra működik, RabbitMQ nem támogatott. Consumer regisztráció manuális minden üzenettípusra, assembly scan nincs. Outbox és saga nincs benne, azt külön kell implementálni.

**Hamis válasz 2:**  
MassTransit lényege, hogy közvetlenül a broker API-t expose-olja, nincs absztrakció. Retry helyett minden hiba esetén azonnal discardolja az üzenetet, error queue nem létezik. EF integráció csak read-only lekérdezésre való.

**Hamis válasz 3:**  
MassTransit nélkül .NET-ben nem lehet üzenetet küldeni, a beépített `Channel<T>` helyettesíti a brokert. A consumer pipeline csak szinkron metódust támogat, async `Consume` tilos.

### Kérdés 41: Mit jelent az idempotency API-kban, és miért fontos?

**Hamis válasz 1:**  
Idempotencia azt jelenti, hogy minden GET kérés módosít adatot, de ugyanazt az eredményt adja. POST sosem lehet idempotens, ez HTTP spec szerint tiltott. Idempotency-Key fejléc csak GraphQL mutationhöz használható.

**Hamis válasz 2:**  
Idempotency elég, ha a kliens nem küld retry-t; szerver oldalon nem kell kulcsot tárolni. Dupla rendelés csak akkor fordul elő, ha a user kétszer kattint, hálózati újrapróbálkozás nem okoz duplikációt.

**Hamis válasz 3:**  
Idempotency megvalósítása: minden kérésnél új GUID primary key generálás request body nélkül. Ugyanazzal a kulccsal érkező második POST mindig HTTP 500-at kap, mert conflict, nem ad vissza cache-elt választ.

### Kérdés 42: Mi az Outbox pattern lényege?

**Hamis válasz 1:**  
Outbox pattern azt jelenti, hogy az üzenetet először a brokerre küldjük, és csak sikeres publish után commitoljuk az adatbázis tranzakciót. Így garantált, hogy sosem marad el üzenet, még ha a DB rollback is van.

**Hamis válasz 2:**  
Az Outbox egy Redis cache réteg neve, amely ideiglenesen tárolja a DTO-kat mapping előtt. Célja a dupla HTTP hívás elkerülése Polly retry mellett, adatbázissal nincs kapcsolata.

**Hamis válasz 3:**  
Outbox táblába csak sikertelen üzenetek kerülnek, sikeres publish után törlődnek a tranzakción kívül. A háttérfolyamat polling helyett mindig azonnal pushol WebSocketen a kliensnek, broker opcionális.

### Kérdés 43: Mik a soft delete best practice-ek EF Core-ban?

**Hamis válasz 1:**  
Soft delete esetén a rekord fizikailag is törlődik, csak egy audit log táblába másoljuk a sort előtte. Global query filter nem használható soft delete-hez, minden lekérdezésben kézi `WHERE IsDeleted = 0` elég egyszer beírva a repository base classban.

**Hamis válasz 2:**  
Soft delete-nél az `IsDeleted` flag true marad, de az EF `Remove()` továbbra is DELETE SQL-t generál, interceptor nem írhatja felül. Egyedi indexeknél nem kell figyelni a törölt sorokra, az `Email` unique constraint elég sima oszlopon.

**Hamis válasz 3:**  
Soft delete best practice: soha ne használjunk `IgnoreQueryFilters`-t admin felületen, mert az biztonsági rés. Kapcsolódó entitások cascade soft delete automatikus minden FK-nál, konfiguráció nélkül.

### Kérdés 44: Mikor érdemes Dapperrel hibrid perzisztenciát használni EF Core mellett?

**Hamis válasz 1:**  
Dapper és EF Core ugyanarra a use case-re mindig együtt kell, különben nem működik a change tracking. Write oldalon Dapper a best practice, EF csak migráció generálásra való. SQL injection elkerülésére string concatenation a elfogadott Dapper minta.

**Hamis válasz 2:**  
Hibrid perzisztencia azt jelenti, hogy ugyanazt a lekérdezést egyszerre futtatjuk EF-fel és Dapperrel, és az első választ adjuk vissza. Dapper csak MongoDB-hez használható, relációs DB-n tilos.

**Hamis válasz 3:**  
Dapperrel csak CRUD egyszerű tábláknál éri meg, összetett riportnál mindig EF LINQ, mert gyorsabb. Tranzakció megosztás EF és Dapper között lehetetlen, külön connection kötelező minden hívásra.

### Kérdés 45: Hogyan működik a rate limiting és az output caching .NET-ben?

**Hamis válasz 1:**  
Rate limiting és output caching ugyanaz: mindkettő a Redis-ben tárolja a JWT tokeneket. .NET 7 előtt built-in rate limiter van, .NET 8-tól csak third-party middleware használható. 429 helyett mindig 200-at adjunk vissza, a body-ban jelezve a limitet.

**Hamis válasz 2:**  
Output cache a kliens böngésző cache-e, szerver oldali nem létezik .NET-ben. Rate limiting csak statikus fájlokra vonatkozik, API endpointokra nem alkalmazható. Token bucket az egyetlen algoritmus, fixed window deprecated.

**Hamis válasz 3:**  
Autentikált user-specifikus választ output cache-elni a best practice `VaryBy` nélkül, így gyorsabb mindenkinek. Rate limit particionálás felesleges, globális egy számláló elég clusterben is.

### Kérdés 46: Mik a keyed services .NET 8-ban, és milyen problémát oldanak meg?

**Hamis válasz 1:**  
Keyed services azt jelenti, hogy minden service-nek külön connection string jön appsettings-ből automatikusan. Csak singleton lifetime támogatott, scoped keyed service nem létezik .NET 8-ban.

**Hamis válasz 2:**  
Keyed services helyett mindig service locator (`IServiceProvider.GetService`) a best practice üzleti kódban. Ugyanahhoz az interfészhez csak egy implementáció regisztrálható, kulcs csak logging category-hoz használható.

**Hamis válasz 3:**  
Keyed services .NET 8-ban deprecated, helyette Autofac kötelező. A `[FromKeyedServices]` csak minimal API-ban működik, controller constructor injection nem támogatja.

### Kérdés 47: Hogyan kapcsolódik egymáshoz a Vertical Slice, a CQRS és a REPR egy medior szintű architektúrában?

**Hamis válasz 1:**  
Vertical Slice, CQRS és REPR egymás kizáró alternatívái: csak egyet szabad választani projektenként. Tipikus felállás: MVC controller + service + repository, mindhárom minta nélkül, mert kombinálniuk tilos a Clean Architecture szerint.

**Hamis válasz 2:**  
REPR a perzisztencia réteg neve, Vertical Slice a tesztelési stratégia, CQRS pedig csak frontend state management. Együtt használva minden feature külön microservice lesz automatikusan, külön read/write DB-vel kötelezően.

**Hamis válasz 3:**  
Medior architektúrában először CQRS, utána REPR, végül Vertical Slice vezetése kötelező sorrend, különben nem fordít le a projekt. A MediatR handler tartalmazza a HTTP routingot is, külön endpoint fájl felesleges.

### Kérdés 48: Milyen sorrendben gondolkodnál egy új .NET API medior szintű „alapvázán”?

**Hamis válasz 1:**  
Első lépés a MassTransit és Kafka beállítása, utána jön az API verziózás, végül ha marad idő, a use case-ek. Teszteket a projekt végén, éles deploy után írjuk meg, addig mock production elég.

**Hamis válasz 2:**  
Alapváz: először minden entitásra repository + UoW wrapper, majd AutoMapper profile minden property-re, végül controller minden művelethez. ProblemDetails, correlation ID és Options pattern csak senior projektnél kell, mediornál felesleges.

**Hamis válasz 3:**  
Új API-nál elsődleges a UI framework kiválasztása, mert az határozza meg a backend architektúrát. EF migráció élesben manuális SQL script app indítás nélkül, HttpClientFactory helyett statikus `HttpClient` singleton, resilience későbbi tech debt.

## Senior

### Kérdés 1: Mi a Saga minta, és miért nem elég a 2PC mikroszolgáltatások között?

**Hamis válasz 1:**  
A Saga lényegében ugyanaz, mint a 2PC, csak aszinkron üzenetekkel: minden szolgáltatás XA tranzakcióban vesz részt, és a koordinátor commitol, amikor az utolsó ACK megérkezik. Mikroszolgáltatásoknál a 2PC azért nem elég, mert túl lassú, de Saga-val ugyanazt az ACID garanciát kapod.

**Hamis válasz 2:**  
A Saga minta azt jelenti, hogy egy központi SQL Server koordinátor tartja az összes szolgáltatás tranzakcióját nyitva, amíg a teljes folyamat le nem fut. A 2PC-t azért kerüljük, mert csak monolitokban működik, Saga esetén viszont globális lock nem kell.

**Hamis válasz 3:**  
Saga = sorban hívott REST hívások ugyanabban az HTTP sessionben; ha az egyik elbukik, az előzőek automatikusan rollbackelődnek az EF Core ChangeTracker segítségével. A 2PC felesleges, mert HTTP/2 már garantálja a tranzakciós sorrendet.

### Kérdés 2: Mi a különbség a Saga orchestration és choreography között?

**Hamis válasz 1:**  
Orchestrationnál minden szolgáltatás saját maga dönti el a következő lépést események alapján; choreographynál viszont egy dedikált orchestrator küldi a parancsokat. A kettő gyakorlatilag szinonima, csak a nevek különböznek.

**Hamis válasz 2:**  
Choreography csak Kafka-val működik, orchestration pedig kizárólag RabbitMQ direct exchange-szel. Orchestration mindig gyorsabb, mert nincs szükség esemény publikálásra.

**Hamis válasz 3:**  
Orchestration = frontend koordinálja a lépéseket GraphQL subscriptionnel; choreography = backend cron jobok futnak fix időközönként. Komplex folyamatnál mindig choreography-t választunk, mert kevesebb kód kell.

### Kérdés 3: Hogyan valósítod meg a choreography-alapú Sagát MassTransittal?

**Hamis válasz 1:**  
MassTransitban a choreography-hoz `Send`-et használsz minden lépésnél ugyanarra a queue-ra; a saga state machine automatikusan követi a routing key-t. Outbox nem kell, mert a MassTransit EF integrációja XA tranzakciót nyit a brokerrel.

**Hamis válasz 2:**  
Choreography = egy `IConsumer`-ben implementálsz minden lépést switch-case-sel, és `Publish`-olsz a saját magadnak. Idempotencia felesleges, mert a RabbitMQ exactly-once delivery-t garantál alapból.

**Hamis válasz 3:**  
A choreography Sagát MassTransit Automatonymous state machine-ként kell megírni központi orchestratorral minden szolgáltatásban. Kompenzáció = automatikus `Rollback()` az EF Core-on minden consumerben.

### Kérdés 4: Mi az Outbox pattern, és milyen hibát előz meg?

**Hamis válasz 1:**  
Az Outbox egy külön RabbitMQ exchange, ahova először minden üzenetet küldesz; a consumer onnan olvas, majd írja az adatbázist. Megelőzi azt, ha a broker gyorsabb lenne, mint az adatbázis.

**Hamis válasz 2:**  
Outbox = az üzeneteket Redis cache-ben tárolod 5 percig, és csak utána mented SQL-be. Így elkerülöd a „broker elküldte, de a DB még nem commitolt” helyzetet, mert mindig a cache az igazság forrása.

**Hamis válasz 3:**  
Az Outbox pattern azt jelenti, hogy a Publish hívást a tranzakció előtt futtatod, és ha a SaveChanges elbukik, a MassTransit automatikusan visszavonja az üzenetet a brokeren. Exactly-once delivery-t ad broker szinten.

### Kérdés 5: Mi az Inbox pattern, és hogyan ad „effectively-once” szemantikát?

**Hamis válasz 1:**  
Az Inbox a producer oldalon van: minden kimenő üzenet ID-ját Redis SET-ben tárolod, és csak egyszer küldheted ki. A fogyasztó így garantáltan egyszer kapja meg az üzenetet.

**Hamis válasz 2:**  
Inbox = Kafka consumer group automatikusan deduplikál offset alapján; ha ugyanaz az offset kétszer jön, a broker eldobja. Nincs szükség külön táblára vagy tranzakcióra.

**Hamis válasz 3:**  
Az Inbox pattern azt jelenti, hogy minden bejövő üzenetet először dead-letter queue-ba teszel, és csak sikeres feldolgozás után kerül az inbox táblába. Effectively-once = at-most-once + retry.

### Kérdés 6: Mit jelent az eventual consistency, és hogyan kezeld a UI-n?

**Hamis válasz 1:**  
Eventual consistency azt jelenti, hogy az adat azonnal konzisztens minden szolgáltatásban, csak a UI cache késik 1-2 másodpercet. A frontenden elég egy spinner 500 ms-ig, utána biztosan látszik a végleges állapot.

**Hamis válasz 2:**  
Eventual consistency = minden olvasás közvetlenül a forrás adatbázisból megy sync HTTP-vel, így a UI mindig friss. Aszinkron folyamatnál `200 OK`-t adsz vissza azonnal, mert a háttér max. 50 ms alatt kész.

**Hamis válasz 3:**  
A UI-n eventual consistency-t úgy kezeled, hogy minden POST után teljes oldal reloadot csinálsz F5-tel; így garantáltan látod az összes szolgáltatás frissített állapotát azonnal.

### Kérdés 7: Magyarázd el a CAP-tételt és a PACELC kiegészítést a gyakorlatban!

**Hamis válasz 1:**  
CAP szerint mindhárom (Consistency, Availability, Partition tolerance) egyszerre elérhető, ha Kafka-t használsz és több replikát indítasz. PACELC csak akkor számít, ha nincs hálózat: ilyenkor mindig a konzisztenciát válaszd a latency helyett.

**Hamis válasz 2:**  
A CAP azt mondja, particionáláskor mindig az Availability-t kell választani, a konzisztencia automatikusan helyreáll 1 ms alatt. PACELC = Partition + ACID + Elastic + Latency + Consistency, és minden rendszer CP alapértelmezetten.

**Hamis válasz 3:**  
CAP csak relációs adatbázisokra vonatkozik; NoSQL-nél mindhárom tulajdonság garantált. PACELC kiegészítés: ha nincs partíció, akkor is mindig C-t választunk, mert a felhasználó inkább vár, mint stale adatot kap.

### Kérdés 8: Mi az Event Sourcing, és mikor használd Martent?

**Hamis válasz 1:**  
Event Sourcing = minden entitást JSON-ként tárolsz egy NoSQL-ben, és Marten csak PostgreSQL wrapper EF Core-hoz. Akkor használd, ha minden táblát auditálni akarsz, mert így minden CRUD automatikusan esemény lesz.

**Hamis válasz 2:**  
Event Sourcingnál az aktuális állapot az elsődleges, az események csak naplózásra kellenek. Martent akkor érdemes, ha MongoDB-t akarsz PostgreSQL helyett anélkül, hogy kódot írnál.

**Hamis válasz 3:**  
Marten akkor kell, ha az egész monolitot Event Sourcingra állítod át egyszerre; különben nem működik a snapshot. Az események szabadon módosíthatók utólag SQL UPDATE-tel, ha hibás volt a payload.

### Kérdés 9: Mi a különbség a domain event és az integration event között?

**Hamis válasz 1:**  
Domain event és integration event ugyanaz; mindkettőt közvetlenül a brokerre Publish-olod a domain entitásból. A különbség csak a névkonvenció: domain = present tense, integration = past tense.

**Hamis válasz 2:**  
Integration event csak in-process megy MediatR-rel; domain event megy ki Kafka-ra. A domain event tartalmazhat EF navigation property-ket, hogy a fogyasztó ne kelljen visszahívjon.

**Hamis válasz 3:**  
Domain event = HTTP webhook a frontendnek; integration event = SignalR broadcast. Mindkettőt a SaveChanges előtt publikáld, hogy gyorsabb legyen a válaszidő.

### Kérdés 10: Melyek az event-driven integrációs stílusok (Fowler), és mikor melyik?

**Hamis válasz 1:**  
Fowler szerint csak két stílus van: CRUD sync REST és Event Sourcing. Event Notification = mindig Event Sourcing; ECST = mindig sync REST nagy payload-dal.

**Hamis válasz 2:**  
Event-Carried State Transfer azt jelenti, hogy az esemény csak egy ID-t tartalmaz, a fogyasztó mindig visszahív REST-tel. Event Notification-nál viszont a teljes aggregate megy az üzenetben.

**Hamis válasz 3:**  
Mikroszolgáltatásnál mindig Event Notification a legjobb, mert a legkisebb üzenet; ECST csak monolitban működik. CQRS-integráció = ugyanaz, mint a klasszikus CRUD controller.

### Kérdés 11: Hogyan verziózd az üzenet-szerződéseket törés nélkül?

**Hamis válasz 1:**  
Üzenet verziózás = minden breaking change-nél új topic nevet adsz, és azonnal törlöd a régit. A fogyasztóknak nincs szükségük párhuzamos futásra, mert a broker automatikusan migrálja az üzeneteket.

**Hamis válasz 2:**  
Törő változásnál elég a mezőt átnevezni ugyanabban a contractban; a JSON deserializer automatikusan kezeli a régi és új nevet. Schema Registry csak Avro-hoz kell, JSON-nál felesleges.

**Hamis válasz 3:**  
Verzió = a message headerben egy `Version: 1` mező; ha a consumer régi, egyszerűen ignorálja az egész üzenetet. Expand-contract helyett mindig big-bang deploy minden szolgáltatással éjszaka.

### Kérdés 12: Kafka: mi a topic, partition, offset, consumer group szerepe?

**Hamis válasz 1:**  
Topic = egy consumer; partition = egy producer; offset = a broker memóriájában tárolt GUID. Consumer group = minden fogyasztó ugyanazt az offsetet olvassa párhuzamosan ugyanabból a partícióból.

**Hamis válasz 2:**  
Kafka sorrendet globálisan garantál topic szinten, partíció csak skálázás miatt van. Offsetet a broker automatikusan commitol minden poll-nál; a fogyasztónak ezzel nem kell foglalkoznia.

**Hamis válasz 3:**  
Consumer group = egy fogyasztó több példánya ugyanazt az üzenetet kapja broadcast módon, mint RabbitMQ fanout. Key nélkül is garantált a sorrend minden partíción keresztül.

### Kérdés 13: Mit okoz a Kafka rebalance, és hogyan kerüld el a dupla feldolgozást?

**Hamis válasz 1:**  
Rebalance = a broker törli az összes üzenetet a partícióból, amikor új consumer csatlakozik. Dupla feldolgozás elkerülése: `EnableAutoCommit = true` és minél rövidebb `MaxPollIntervalMs`.

**Hamis válasz 2:**  
Rebalance csak akkor történik, ha kevesebb consumer van, mint partíció; ilyenkor a felesleges partíciók üzenetei elvesznek. Idempotencia felesleges, mert rebalance alatt a feldolgozás szünetel.

**Hamis válasz 3:**  
Dupla feldolgozást a CooperativeSticky stratégia okozza; classic rebalance-szal sosem jön vissza ugyanaz az üzenet. Offset commit a poll elején a legbiztonságosabb.

### Kérdés 14: Hogyan kezeled a poison message-et Kafkán (DLQ, retry topic)?

**Hamis válasz 1:**  
Poison message = azonnal töröld az üzenetet offset commit nélkül; a Kafka retention miatt úgyis visszajön. DLQ helyett elég a consumer logjába írni ERROR szinten.

**Hamis válasz 2:**  
Retry topic = ugyanaz a topic, csak lassabb consumerrel olvasod. Poison üzenetnél növeld a partíció számát, hogy más consumer kapja meg.

**Hamis válasz 3:**  
DLQ = dead letter queue RabbitMQ-ban; Kafkán nincs ilyen, ezért a poison message blokkolja a partíciót, amíg manuálisan nem törlöd a broker fájlrendszeréből.

### Kérdés 15: RabbitMQ: exchange, binding, routing key – mikor melyik exchange típus?

**Hamis válasz 1:**  
Minden esetben fanout exchange a legjobb, mert minden queue megkapja az üzenetet; routing key és binding felesleges. Direct exchange csak legacy rendszerekhez való.

**Hamis válasz 2:**  
Producer közvetlenül a queue-ba küld, exchange csak dekoráció. Topic exchange = pontos routing key egyezés, wildcard nem létezik RabbitMQ-ban.

**Hamis válasz 3:**  
Headers exchange a leggyakoribb pub/sub megoldás; direct exchange csak RPC-hoz. `autoAck: true` ajánlott, mert gyorsabb, és a RabbitMQ úgyis persistent minden üzenetet memóriában tart.

### Kérdés 16: Mikor válassz Kafkát és mikor RabbitMQ-t?

**Hamis válasz 1:**  
Kafka = kis üzenetmennyiség, RPC-szerű request-reply; RabbitMQ = nagy event stream, több független fogyasztó, replay. .NET-ben mindig RabbitMQ, mert a MassTransit csak azt támogatja.

**Hamis válasz 2:**  
Ha audit kell, RabbitMQ, mert az üzenet ack után is megmarad a logban. Kafka-t csak akkor válaszd, ha nem kell sorrend és retention.

**Hamis válasz 3:**  
A választást az application rétegben hardcode-olt `KafkaProducer` osztályok döntik el szolgáltatásonként; absztrakció felesleges, mert a két broker API-ja azonos.

### Kérdés 17: MassTransit: mi a különbség a Publish és a Send között?

**Hamis válasz 1:**  
`Publish` egy konkrét queue-ra küld parancsot; `Send` broadcast minden subscribernek. Esemény = imperative ige (`PlaceOrder`), parancs = múlt idő (`OrderPlaced`).

**Hamis válasz 2:**  
Send és Publish ugyanaz MassTransit 8-ban; a különbség csak a NuGet package verzió. Mindkettő guaranteed exactly-once a broker oldalon.

**Hamis válasz 3:**  
Publish-ot használd, ha egyetlen consumer dolgozza fel; Send-et, ha több érdeklődő van. A domain entitást közvetlenül küldd üzenetként, hogy ne kelljen mapping.

### Kérdés 18: Hogyan működik a MassTransit saga state machine?

**Hamis válasz 1:**  
A saga state machine in-memory állapot, nincs perzisztencia; minden restart után a folyamat elölről indul. Korreláció = random GUID minden üzenetben, nem kell egyeznie.

**Hamis válasz 2:**  
Automatonymous = minden lépés automatikusan kompenzálódik EF `SaveChanges` rollback-kel. Timeout nem kell, mert a broker garantálja a kézbesítést 30 mp-en belül.

**Hamis válasz 3:**  
A state machine tárolja a teljes aggregate gráfot JSON-ban a saga táblában, hogy ne kelljen újrahívni a szolgáltatásokat. Párhuzamos üzeneteknél utolsó nyer (`LastWriteWins`), RowVersion felesleges.

### Kérdés 19: MassTransit hibakezelés: retry vs. redelivery vs. error queue?

**Hamis válasz 1:**  
Retry = üzenet törlése és újraküldése másik topicba manuálisan. Redelivery = consumerben `catch { }` üresen, így sikeresnek látszik. Error queue csak developmentben kell.

**Hamis válasz 2:**  
Validációs hibánál mindig 10 retry azonnal, mert lehet, hogy a második próbára jó lesz az adat. Circuit breaker = consumer leállítása örökre első hiba után.

**Hamis válasz 3:**  
Delayed redelivery = azonnali újrapróbálkozás ugyanabban a szálban; error queue = `_skipped` topic, ahonnan az üzenetek automatikusan visszakerülnek 1 perc múlva.

### Kérdés 20: Hogyan oldod meg, hogy háttérjob ne fusson le többször több példányon?

**Hamis válasz 1:**  
Elég egy `static bool _isRunning` flag az alkalmazásban; minden pod ugyanazt a memóriát látja Kubernetesben. BackgroundService alapból cluster-aware.

**Hamis válasz 2:**  
Quartz.NET minden példányon ugyanabban az időpontban fut, de az adatbázis unique constraint megakadályozza a duplikált sort — lock nem kell. K8s CronJob mindig minden replikán lefut párhuzamosan szándékosan.

**Hamis válasz 3:**  
Redis RedLock helyett elég a `Thread.Sleep` random 0-5 mp a job elején; statisztikusan csak egy példány nyer. Idempotencia felesleges, ha van lock.

### Kérdés 21: Mit ad az OpenTelemetry .NET-ben, és hogyan tartsd össze a trace-t brokeren át?

**Hamis válasz 1:**  
OpenTelemetry csak logokat gyűjt; trace = Serilog enricher. Brokeren át a trace automatikusan utazik, ha ugyanazt a connection stringet használod SQL-ben és Kafkán.

**Hamis válasz 2:**  
Trace összekötés = ugyanaz a `CorrelationId` string a logban elég, `traceparent` header felesleges HTTP-n. Kafka-nál az offset a span ID.

**Hamis válasz 3:**  
Minden span attribútumba tedd a userId-t és orderId-t is, hogy könnyen szűrj productionben. Sampling = minden kérést 100%-ban mintázz, különben elvesznek a trace-ek.

### Kérdés 22: Mi az SLI, SLO és error budget, és hogyan riassz?

**Hamis válasz 1:**  
SLI = a marketing által várt uptime százalék; SLO = tényleges mérés Grafana-ban; error budget = ha elfogy, leállítod a deploy-t örökre. Riasztás = email minden 404-es kérésnél.

**Hamis válasz 2:**  
SLO-t csak backend fejlesztő írja egy Excelben évente; SLI automatikusan 99.99%, ha K8s-et használsz. Error budget = nincs ilyen, ha van retry policy.

**Hamis válasz 3:**  
Riasztást a CPU > 50%-nál indítod burn rate helyett; multi-window felesleges. SLI mindig latency p99; availability nem mérhető mikroszolgáltatásnál.

### Kérdés 23: Hogyan vidd végig a Correlation ID-t API → üzenet → worker úton?

**Hamis válasz 1:**  
Correlation ID = új GUID minden szolgáltatásban generálva, hogy ne keveredjen össze. HTTP header nem kell, elég a log fájl nevében tárolni.

**Hamis válasz 2:**  
Az API generálja, a worker nem kapja meg; helyette timestamp alapján keresed össze a logokat. MassTransit automatikusan cseréli új ID-ra minden Publish-nál.

**Hamis válasz 3:**  
Correlation ID csak frontend session cookie; backend és worker külön trace rendszert használ. Üzenet headerbe elég a machine name.

### Kérdés 24: Polly v8 / Microsoft.Extensions.Resilience: mi a standard pipeline sorrendje?

**Hamis válasz 1:**  
Standard sorrend: Circuit Breaker → Retry → Timeout → Hedging. Retry mindig végtelen számú, timeout opcionális.

**Hamis válasz 2:**  
Polly v8-ban nincs pipeline, minden policy külön `HttpClient`-en van. Hedging = ugyanaz a kérés egyszer megy, dupla nem engedélyezett.

**Hamis válasz 3:**  
Timeout → Retry → Circuit Breaker a helyes sorrend, mert előbb várunk, aztán próbálkozunk. Rate limiter a pipeline végén, fallback a elején.

### Kérdés 25: Milyen rugalmassági minták kellenek a circuit breakeren túl?

**Hamis válasz 1:**  
Circuit breakeren túl csak retry kell; bulkhead, timeout, hedging ugyanaz. Chaos engineering = productionben random pod kill minden deploy után kötelező.

**Hamis válasz 2:**  
Fallback mindig = cache-ből stale adat usernek értesítés nélkül. Rate limiting és circuit breaker ellentmondás, csak egyet használj.

**Hamis válasz 3:**  
Rugalmasság = több replica ugyanazt a sync hívást indítja párhuzamosan (race); nyertes választ adja vissza. Idempotencia nem tartozik a resilience-hez.

### Kérdés 26: Mi a BFF és az API Gateway különbsége? Hol jön be a YARP?

**Hamis válasz 1:**  
BFF = backend for frontend, azaz ugyanaz, mint az API Gateway, csak más név. YARP = YAML-alapú API Gateway AWS-en; .NET-ben nem használható.

**Hamis válasz 2:**  
API Gateway aggregálja a mobil UI-hoz szükséges adatokat; BFF csak TLS terminál. YARP helyett mindig nginx config a podban.

**Hamis válasz 3:**  
BFF minden klienshez külön microservice a domain logikával; Gateway csak statikus fájlokat szolgál. YARP = reverse proxy, nem támogat auth middleware-t.

### Kérdés 27: Mi az Aggregator pattern, és miben különbözik a BFF-től / Gateway-től?

**Hamis válasz 1:**  
Aggregator = GraphQL resolver egy monolitban; BFF = REST controller. Gateway mindig aggregál, BFF soha.

**Hamis válasz 2:**  
Aggregator pattern = frontend fetch hívások összefűzése JavaScriptben; backend pattern nem. Különbség a BFF-től: nincs, ugyanaz a szerep.

**Hamis válasz 3:**  
Aggregator a domain rétegben fut minden microservice-ben külön; BFF csak CDN. Gateway = service mesh sidecar automatikusan aggregál minden kérést.

### Kérdés 28: Mi az Anti-Corruption Layer, és hol helyezed el?

**Hamis válasz 1:**  
ACL = firewall a K8s NetworkPolicy neve; a domain rétegbe kerül, hogy blokkolja a SQL injectiont. Legacy rendszerrel közvetlenül oszd meg az entitás osztályokat, gyorsabb.

**Hamis válasz 2:**  
Anti-Corruption Layer = AutoMapper profile a controllerben; elég a DTO-k között mapelni. Legacy API-t hívd közvetlenül a domain service-ből, ACL felesleges wrapper.

**Hamis válasz 3:**  
ACL csak frontendben van (adapter pattern Reactben); backend nem izolálja a legacy modellt. Helye: infrastructure, de ugyanazokat a NuGet entitásokat használja, mint a legacy.

### Kérdés 29: Hogyan működik a Strangler Fig migráció?

**Hamis válasz 1:**  
Strangler Fig = egy éjszaka big-bang cutover: leállítod a legacy-t, bekapcsolod az újat. Nincs routing szintű fokozatos átállás.

**Hamis válasz 2:**  
Minden funkciót egyszerre migrálsz, mert a routing réteg nem tud részleges trafficet irányítani. YARP és API Gateway nem alkalmas stranglerhez.

**Hamis válasz 3:**  
Strangler = új microservice hívja a legacy-t sync-ben minden kérésnél örökre; a legacy sosem kerül kivonásra. Feature flag helyett mindig 100% az új útvonal.

### Kérdés 30: Modular monolith vs. mikroszolgáltatás – mikor melyik?

**Hamis válasz 1:**  
Modular monolith csak proof-of-concept; élesben mindig microservice, különben nem skálázódik. Monolith = egy fájl, nincs modulhatár.

**Hamis válasz 2:**  
Microservice mindig olcsóbb operációban kevesebb csapattal. Modular monolith akkor jó, ha 50+ független deploy csapat van.

**Hamis válasz 3:**  
Döntés = ha van Kubernetes, microservice; ha nincs, monolith. Domain komplexitás nem számít, csak a container count.

### Kérdés 31: Milyen adatbázis-stratégiákat ismersz mikroszolgáltatásoknál?

**Hamis válasz 1:**  
Database per service = minden szolgáltatás ugyanazt a shared PostgreSQL schema-t használja külön connection stringgel. CQRS olvasás mindig ugyanabból a táblából sync-ben.

**Hamis válasz 2:**  
Shared database a best practice, mert JOIN-olhatsz szolgáltatások között SQL-ben. Eventual consistency = minden olvasás master DB-ről tranzakcióval.

**Hamis válasz 3:**  
Database per service csak akkor kell, ha MongoDB-t használsz; SQL-nél egy central DB olcsóbb és gyorsabb minden esetben.

### Kérdés 32: Hogyan tervezel multi-tenancy-t .NET-ben?

**Hamis válasz 1:**  
Multi-tenancy = minden tenant külön Kubernetes cluster; shared schema sosem biztonságos. Tenant ID-t soha ne tedd query filterbe, csak logba.

**Hamis válasz 2:**  
Egy adatbázis, nincs tenant oszlop; a tenantot a JWT issuer URL-ből találod ki runtime-ban memóriában. Row-level security felesleges SQL-ben.

**Hamis válasz 3:**  
Database-per-tenant helyett mindig egy globális admin connection minden tenant adatához; EF global filter automatikusan kikapcsol productionben teljesítmény miatt.

### Kérdés 33: Mire jók a feature flagek, és milyen csapdáik vannak?

**Hamis válasz 1:**  
Feature flag = appsettings.json-ben hardcoded bool, deploy kell váltáshoz. Csapda: túl sok flag javítja a kód olvashatóságát, nincs más hátrány.

**Hamis válasz 2:**  
Flag-ek helyett mindig külön branch élesben; merge után automatikusan minden usernek bekapcsol minden. Kill switch = pod restart.

**Hamis válasz 3:**  
Feature flag csak frontendre való; backend nem támogatja a LaunchDarkly-t .NET-ben. Csapda: flag-et sosem takarítsd ki, maradjon örökre a kódban dokumentációként.

### Kérdés 34: Hogyan validálod a konfigurációt és kezeled a titkokat élesben?

**Hamis válasz 1:**  
Titkok = appsettings.Production.json a git repo-ban, mert privát. Validáció = futásidőben derül ki, ha null a connection string.

**Hamis válasz 2:**  
`IOptions` elég, `ValidateOnStart` lassítja az indulást feleslegesen. Azure Key Vault helyett environment variable minden titokhoz plain textben a Dockerfile-ban.

**Hamis válasz 3:**  
Konfiguráció validálás = Swagger ellenőrzi a endpointokat. Secret rotation = évente egyszer manuális commit.

### Kérdés 35: Optimista vs. pesszimista konkurencia – mikor melyik, és hogyan throttle-ölj?

**Hamis válasz 1:**  
Pesszimista = mindig gyorsabb web API-n; optimista csak batch jobokhoz. Throttle = `lock()` az egész controlleren.

**Hamis válasz 2:**  
Optimista konkurencia = SQL `SELECT FOR UPDATE` minden olvasásnál; pesszimista = RowVersion nélkül LastWriteWins. Throttle felesleges, ha van lock.

**Hamis válasz 3:**  
Pénzügyi műveletnél mindig optimista, mert kevesebb DB roundtrip. Throttle = unlimited parallel request, a DB majd visszautasít.

### Kérdés 36: ValueTask, thread pool starvation, fire-and-forget – mik a senior szintű csapdák?

**Hamis válasz 1:**  
ValueTask mindig sync-ben fut, nincs allocation — minden async metódust ValueTask-re cserélj. Fire-and-forget = `_ = Task.Run()` controllerben, GC megoldja a hibákat.

**Hamis válasz 2:**  
Thread pool starvation csak Linuxon van; Windows IIS nem használ thread poolt. `.GetAwaiter().GetResult()` biztonságos middleware-ben.

**Hamis válasz 3:**  
Fire-and-forget background work = `async void` event handler a singleton service-ben; nincs szükség scope-ra vagy cancellation tokenre.

### Kérdés 37: Mit ad a Testcontainers, a contract testing és az architektúra teszt a piramisban?

**Hamis válasz 1:**  
Testcontainers = Docker nélkül mock SQL in-memory; contract test = unit test Moq-kal; architektúra teszt felesleges, ha van code review.

**Hamis válasz 2:**  
A piramis helyett minden E2E Selenium a production URL-en; Testcontainers túl lassú. Pact consumer-driven = csak frontend és backend között, microservice-ekre nem.

**Hamis válasz 3:**  
Architektúra teszt = `[Fact]` ami ellenőrzi, hogy van-e README. Contract testing helyett shared NuGet DTO elég, verzió nélkül.

### Kérdés 38: Docker multi-stage és K8s probe-ok – mi a .NET szempontból kritikus?

**Hamis válasz 1:**  
Multi-stage = egy stage, benne SDK és runtime egyszerre, kisebb image. Liveness probe = `/swagger`, readiness = `/`, mindkettő ugyanaz.

**Hamis válasz 2:**  
.NET konténerben mindig root user kell EF migrációhoz. Startup probe felesleges, mert .NET 8 instant start. Readiness fail = pod törlése azonnal minden hiba esetén.

**Hamis válasz 3:**  
Health check endpoint ne függjön DB-től, mert lassú; readiness mindig 200 OK fixed stringgel. Multi-stage buildben ne használj `dotnet publish -c Release`-t.

### Kérdés 39: Hogyan futtatsz EF migrációt éles CI/CD-ben nulla leállással?

**Hamis válasz 1:**  
Migráció = `EnsureCreated()` app startkor minden podon párhuzamosan; nulla downtime, mert K8s rolling update. Breaking schema change = drop column élesben azonnal.

**Hamis válasz 2:**  
Migrációt manuálisan SSMS-ből futtatod deploy előtt; CI/CD nem ismer migrációt. Expand-contract felesleges, big-bang ALTER mindig működik online.

**Hamis válasz 3:**  
Nulla leállás = migráció csak maintenance window-ban, app leállítással; ez a zero downtime .NET-ben. Backward compatible deploy = ugyanaz a migration mindkét verzióval incompatible.

### Kérdés 40: Mi szerepel egy senior API biztonsági checklisten (PII, zero trust, mTLS)?

**Hamis válasz 1:**  
PII = logold minden request body-t debug szinten productionben. Zero trust = mindenki VPN-en belül megbízható, mTLS felesleges internal hálózaton.

**Hamis válasz 2:**  
mTLS = csak public internet felé kliens tanúsítvány; service-to-service elég shared API key query stringben. PII maszkolás = ne csináld, nehezebb debug.

**Hamis válasz 3:**  
Checklist: JWT secret a README-ben, CORS `*`, rate limit nincs internal API-n. Zero trust = firewall rule egyszer beállítva örökre.

### Kérdés 41: Rich vs. anemic domain, aggregátumhatárok – mit vár el a DDD?

**Hamis válasz 1:**  
Anemic domain a DDD ajánlott stílusa: logika a service rétegben, entitás csak property. Aggregátum = egy SQL tábla = egy aggregátum, határ nincs.

**Hamis válasz 2:**  
Rich domain = minden property public set; invariant csak FluentValidation a controllerben. Aggregátumok között mindig közvetlen EF Include a másik rootra.

**Hamis válasz 3:**  
Bounded context = egy microservice = egy controller fájl. Domain event = entitás SaveChanges előtt küldi ki magától a Kafka-t.

### Kérdés 42: Native AOT, trimming, benchmark – mit kell tudni senior szinten?

**Hamis válasz 1:**  
Native AOT = minden ASP.NET Core app alapértelmezett .NET 8-ban, reflection mindig működik. Trimming = opcionális, csak console appokhoz.

**Hamis válasz 2:**  
Benchmark = `[Fact]` stopwatch Console.WriteLine-nel elég; BenchmarkDotNet production overhead. AOT helyett mindig JIT, mert gyorsabb cold start mindig.

**Hamis válasz 3:**  
Trimming biztonságos EF Core + Swagger + MassTransit stackkel együtt, nincs annotáció szükség. Native AOT API-nál minden middleware támogatott out of the box.

### Kérdés 43: Channels és IAsyncEnumerable – mikor melyiket, és mi a csapda?

**Hamis válasz 1:**  
Channels = IAsyncEnumerable alias .NET 8-ban; ugyanaz a API. Csapda: mindkettő blocking sync enumerálással a legjobb teljesítmény.

**Hamis válasz 2:**  
IAsyncEnumerable mindig backpressure-t ad automatikusan; Channel nem. Producer-consumer-hez mindig List<T> + lock.

**Hamis válasz 3:**  
Channel unbounded mindig jobb, mert sosem blokkol; IAsyncEnumerable csak fájl olvasáshoz, streamelés API-hoz REST polling kell.

### Kérdés 44: Duende IdentityServer / saját IdP – hogyan hitelesítesz szolgáltatások között?

**Hamis válasz 1:**  
Service-to-service = ugyanaz a user JWT megy tovább minden hopnál módosítás nélkül; audience check felesleges. Duende csak human loginhoz, M2M-hez shared password.

**Hamis válasz 2:**  
Saját IdP = minden microservice kiadja a saját JWT-jét HS256 secret-tel appsettings-ből. Client credentials flow = frontend SPA-ból hívható public clienttel.

**Hamis válasz 3:**  
M2M auth = IP whitelist a load balanceren, token nem kell internal hálózaton. Duende IdentityServer helyett Basic auth minden service között elég.

### Kérdés 45: MassTransit EF Outbox – miért kapcsold be adatbázis-írással együtt?

**Hamis válasz 1:**  
EF Outbox = külön tranzakció a brokerrel XA-val; az adatbázis commit és a Publish külön fut párhuzamosan gyorsabb throughputért. Be kapcsolni csak olvasási műveleteknél kell.

**Hamis válasz 2:**  
Outbox nélkül is atomi a SaveChanges + Publish, mert MassTransit transactional session minden brokerrel. Outbox csak RabbitMQ-hoz kell, Kafka-nál felesleges.

**Hamis válasz 3:**  
EF Outbox = üzeneteket DELETE-el a outbox táblából commit előtt; poller nem kell, azonnali push a brokernek HTTP webhookkal.

### Kérdés 46: Mi a különbség az at-most-once, at-least-once és exactly-once között?

**Hamis válasz 1:**  
Exactly-once = Kafka alapbeállítás consumer group-pal; at-most-once = RabbitMQ default; at-least-once = csak manuális ack nélkül.

**Hamis válasz 2:**  
At-least-once = üzenet sosem ismétlődik; at-most-once = mindig kétszer jön; exactly-once = Outbox nélkül is elérhető HTTP retry-val.

**Hamis válasz 3:**  
Különbség csak elnevezés; mindhárom ugyanazt jelenti distributed rendszerben. Effectively-once = exactly-once broker szinten garantált.

### Kérdés 47: Hogyan kezeled a PII-t a naplókban és span attribútumokban?

**Hamis válasz 1:**  
PII = logold teljes email és TAJ számot trace-ben, hogy support gyorsan azonosítson. GDPR = csak EU-s szerver, log tartalom mindegy.

**Hamis válasz 2:**  
Span attribútum = minden request header másolása automatikusan OTel-be. PII maszkolás = regex helyett base64 encode elég „titkosításnak”.

**Hamis válasz 3:**  
Structured loggingnál a Serilog `{@User}` mindent kiír; retention örök, mert olcsó a storage. PII csak PDF exportnál számít, nem API logban.

### Kérdés 48: Zero trust mikroszolgáltatásoknál: mTLS, token-propagáció, NetworkPolicy – hogyan rakod össze?

**Hamis válasz 1:**  
Zero trust = mindenki megbízható a VPC-ben; mTLS csak extranet. NetworkPolicy = deny all default felesleges, mert service mesh lassú.

**Hamis válasz 2:**  
Token-propagáció = user JWT minden internal hívásban; service saját identity nem kell. mTLS helyett API key header elég pod-to-pod; NetworkPolicy wildcard allow all.

**Hamis válasz 3:**  
Zero trust összerakása: public ingress TLS + backend HTTP plain; token exchange sosem kell M2M-hez. Istio/service mesh kötelező zero trust nélkül is működik a modell.

## Staff

### Kérdés 1: Mi az architektúra eróziója, és miért veszélyesebb, mint egy egyszeri „rossz döntés”?

**Hamis válasz 1:**  
Architektúra erózió = amikor a NuGet package-ek elavulnak és security patch kell. Egy rossz döntés mindig látványosabb outage-ot okoz, az erózió pedig csak kozmetikai code smell.

**Hamis válasz 2:**  
Erózió csak frontendre vonatkozik (CSS spaghetti); backend architektúra nem változik idővel, ha egyszer jól megtervezted. Staff szinten elég évente egyszer architektúra diagram frissítés.

**Hamis válasz 3:**  
Az erózió = microservice-ek számának növekedése automatikusan; veszélyesebb a rossz döntés, mert azonnali rollback impossible. Megoldás: SOHA ne engedj kivételeket az architektúra szabályok alól, még POC-nál sem.

### Kérdés 2: Mi az ADR szerepe egy nagyobb szervezetben, és mikor kell újraírni?

**Hamis válasz 1:**  
ADR = Architecture Decision Record, de csak audit célra kell; a fejlesztők nem olvassák. Újraírás = minden sprint végén automatikusan, mert minden döntés megváltozik.

**Hamis válasz 2:**  
ADR helyett elég Slack thread pin; formális rekord lassítja a delivery-t. Újraírni soha, mert az eredeti döntés szent; ha rossz volt, új ADR helyett töröld a régit.

**Hamis válasz 3:**  
ADR szerepe = Jira ticket leírásában egy mondat. Újraírás akkor kell, ha új manager jön, függetlenül a technikai valóságtól.

### Kérdés 3: Milyen heurisztikákkal döntesz szolgáltatás-határról staff szinten?

**Hamis válasz 1:**  
Szolgáltatáshatár = minden controller egy microservice; bounded context = folder a solution explorerben. Conway törvénye: ignore, a manager struktúra nem számít.

**Hamis válasz 2:**  
Határ = ahol a legtöbb merge conflict van, ott vágd szét azonnal. DDD aggregate = mindig egy REST endpoint. Közös adatbázis = jó jel, hogy egy szolgáltatás elég.

**Hamis válasz 3:**  
Staff heurisztika: microservice count = developer headcount; 1 dev = 1 service minimum. Event storming felesleges, elég a tech lead intuíciója.

### Kérdés 4: Honnan ismered fel a distributed monolithot?

**Hamis válasz 1:**  
Distributed monolith = amikor csak egy microservice van; több service = automatikusan nem monolith. Felismerés: nincs ilyen, mert a microservice label garantálja a függetlenséget.

**Hamis válasz 2:**  
Jelei: minden szolgáltatás külön adatbázissal és aszinkron üzenettel kommunikál; ha van Outbox, biztosan nem monolith. Sync REST hívás sosem jel distributed monolithot.

**Hamis válasz 3:**  
Distributed monolith = monolith Dockerben; felismerés: ha ugyanaz a git repo, az distributed monolith. Megoldás: több repo ugyanazzal a shared DB-vel.

### Kérdés 5: Mikor NE válassz mikroszolgáltatásokat, és miért Modular Monolith?

**Hamis válasz 1:**  
Microservice mindig jobb 10+ fejlesztőnél; modular monolith csak hobby projektekhez. NE válaszd a microservice-t, ha van Kubernetes — túl egyszerű lenne.

**Hamis válasz 2:**  
Modular monolith akkor rossz, ha stabil domain és kis csapat; ilyenkor microservice. NE microservice, ha gyorsan kell skálázni egyetlen endpointot — monolith nem skálázódik horizontálisan.

**Hamis válasz 3:**  
Döntés: startup = 50 microservice day one, később monolithra konszolidálás. Modular monolith = nincs modulhatár enforcement, csak naming convention.

### Kérdés 6: Hogyan kényszeríted ki a modulhatárokat modular monolithban?

**Hamis válasz 1:**  
Modulhatár = `[Internal]` keyword elég; architektúra teszt felesleges. Modulok között szabad a közvetlen EF DbContext injektálás másik modul entitására.

**Hamis válasz 2:**  
Enforcement = code review checklist papíron; NetArchTest csak unit teszt projektben opcionális. Public API = minden osztály public a modulban.

**Hamis válasz 3:**  
Kényszerítés: külön solution file modulonként ugyanabban a repo-ban, de shared projekt reference mindenre. Vertical slice = horizontális rétegek modul helyett.

### Kérdés 7: Magyarázd el a CAP-tételt úgy, ahogy éles rendszerben döntést hozol!

**Hamis válasz 1:**  
Éles döntés: mindig C+A+P egyszerre, cloud provider garantálja. Partíció = sosem történik Azure-on; CAP csak elméleti interview kérdés.

**Hamis válasz 2:**  
Partíció alatt mindig availability, mert a user nem várhat; pénzügyi rendszer is stale balance-t mutat inkább, mint error page-et. CP rendszert sosem építünk.

**Hamis válasz 3:**  
Staff döntés: egy globális CAP választás az egész platformra; minden service AP vagy mind CP. PACELC = marketing kifejezés, nem befolyásolja a design-t.

### Kérdés 8: Milyen konzisztencia-modelleket vár el staff szinten egy .NET platformtól?

**Hamis válasz 1:**  
Platform = mindenhol strong consistency sync REST-tel és shared DB-vel; eventual consistency tiltott. .NET platform nem támogat event-driven konzisztenciát natívan.

**Hamis válasz 2:**  
Egy konzisztencia modell elég: read uncommitted mindenhol gyorsaságért. Staff elvárás = LINQ `AsNoTracking` = distributed transaction.

**Hamis válasz 3:**  
Konzisztencia = csak adatbázis szintű ACID; üzenetközi modell nem platform concern. CQRS read model mindig sync frissül a write DB triggerrel real-time.

### Kérdés 9: Miért kerülendő a 2PC mikroszolgáltatások között, és mi a gyakorlati recept?

**Hamis válasz 1:**  
2PC a legjobb microservice tranzakció, mert ACID; kerülendő csak, mert .NET nem támogatja XA-t. Recept = MSDTC minden Windows podon K8s-ben.

**Hamis válasz 2:**  
2PC helyett sync REST chain ugyanabban a request threadben timeout nélkül; ha egy elbukik, a többi automatikusan rollback HTTP status alapján.

**Hamis válasz 3:**  
Gyakorlati recept: Saga = 2PC két fázissal átnevezve; Outbox/Inbox felesleges, ha RabbitMQ persistent. Kerülendő, mert lassú — de kis volumen mellett mindig 2PC.

### Kérdés 10: Hogyan tervezel event store sémát és snapshot stratégiát?

**Hamis válasz 1:**  
Event store séma = egy JSON blob oszlop, verzió nélkül; snapshot = sosem, mindig full replay minden olvasásnál. Séma változás = UPDATE a régi eseményeken.

**Hamis válasz 2:**  
Snapshot minden eseménynél kötelező, különben Marten nem működik. Event type = .NET class full name, breaking change = rename class.

**Hamis válasz 3:**  
Event store = ugyanaz a CRUD tábla `IsEvent` flaggel; snapshot stratégia = SQL backup hetente. Aggregate ID = auto increment int.

### Kérdés 11: Mikor NE kezdd event sourcinggal a domaint?

**Hamis válasz 1:**  
Event sourcing mindig az első lépés greenfield projektnél; NE kezdd csak akkor, ha nincs budget Martenre. CRUD sosem jobb.

**Hamis válasz 2:**  
NE ES, ha audit kell — CRUD jobb audit trail. NE ES, ha több olvasási modell kell — ES csak egy modellt támogat.

**Hamis válasz 3:**  
Event sourcing kötelező staff platformon minden bounded contextre; kivétel nincs. NE kezdd, ha a csapat ismeri a DDD-t — túl egyszerű lenne.

### Kérdés 12: Hogyan kezeled a szolgáltatásközi üzenetsorrendet nagy skálán?

**Hamis válasz 1:**  
Globális sorrend minden üzenetre Kafka single partition-nel; skálázás = több topic ugyanazzal a névvel. Key = random GUID minden üzenethez.

**Hamis válasz 2:**  
Sorrend nem fontos nagy skálán; minden consumer parallel offset commit előtt. RabbitMQ fanout garantálja a sorrendet cross-queue.

**Hamis válasz 3:**  
Megoldás: sync REST hívás minden lépésnél, így nincs üzenet sorrend probléma. Kafka partition count = 1 elég 1M msg/s-hez.

### Kérdés 13: Hogyan oldod meg a duplikált kézbesítést skálán („effectively once”)?

**Hamis válasz 1:**  
Effectively once = Kafka exactly-once semantics bekapcsolása, Inbox pattern felesleges. Duplikátum = broker bug, application nem kezeli.

**Hamis válasz 2:**  
Megoldás: message dedup Redis TTL 1 sec; hosszabb retry-nál elég. Outbox csak producer oldalon, consumer nem deduplikál.

**Hamis válasz 3:**  
Skálán effectively once = at-most-once ack előtt feldolgozás nélkül; ha elveszik, user újra kattint. Idempotency key = csak POST API-n, nem üzenet fogyasztón.

### Kérdés 14: Sidecar, Ambassador és Service Mesh — mikor melyik, és hol a Dapr helye?

**Hamis válasz 1:**  
Sidecar = minden podban külön nginx config fájl; Ambassador = frontend React komponens; Service Mesh = load balancer alias. Dapr = Docker Compose only, K8s-ben nincs.

**Hamis válasz 2:**  
Service mesh mindig kötelező 3 pod alatt is; sidecar felesleges, ha van Istio. Dapr helyettesíti a teljes .NET runtime-ot.

**Hamis válasz 3:**  
Ambassador pattern = API Gateway neve Envoy-ban; sidecar = log collector csak. Dapr = csak state store, pub/sub-ot MassTransit helyettesíti teljesen platform szinten.

### Kérdés 15: Mikor választasz serverless mikroszolgáltatásokat, és mi a trade-off?

**Hamis válasz 1:**  
Serverless = minden ASP.NET Core app Azure Functions-ben long-running HTTP-val; trade-off nincs, mindig olcsóbb. Cold start = 0 ms .NET 8 isolated workerrel.

**Hamis válasz 2:**  
Válaszd, ha stateful saga kell és perzisztens connection a DB-hez. Trade-off: serverless nem skálázódik, fix cost magasabb mindig.

**Hamis válasz 3:**  
Serverless microservice = Lambda minden endpoint egy külön function, shared monolith DB. Trade-off: nincs observability, de gyorsabb fejlesztés.

### Kérdés 16: Hogyan építesz observability stratégiát SLO/SLI és error budget mentén?

**Hamis válasz 1:**  
Observability = Application Insights alapértelmezett mindenre, SLO = 100% uptime cél. Error budget = nincs, deploy minden commitnál productionbe.

**Hamis válasz 2:**  
SLI csak CPU és memória; SLO = infra team felelőssége, app team nem. Burn rate alert felesleges, elég weekly report.

**Hamis válasz 3:**  
Stratégia: log minden request body productionben PII-vel; trace sampling 0%. Error budget elfogyása = több feature deploy gyorsítása.

### Kérdés 17: Hogyan gondolkodsz production incidentnél staff/principal szinten?

**Hamis válasz 1:**  
Incident = azonnali root cause fix productionben debug módban; postmortem opcionális, ha nincs idő. Kommunikáció = csak dev channel, ügyfél nem kell értesítés.

**Hamis válasz 2:**  
Staff gondolkodás: blame the last deployer; rollback mindig impossible microservice-nél. SLO breach = ignore, ha reggelre magától javul.

**Hamis válasz 3:**  
Incident response = mindenki parallel hotfix branch productionbe; change advisory board skip. Blameless = nincs dokumentáció, csak verbal retro.

### Kérdés 18: Mi az Aspire szerepe a platformvízióban, és mi nem az?

**Hamis válasz 1:**  
Aspire = production orchestrator K8s helyett minden enterprise workloadhoz; nem az = csak local dev. Platform vízió: Aspire replaces Terraform és CI/CD.

**Hamis válasz 2:**  
Aspire szerepe = NuGet package centralizálás; nem az = observability. .NET Aspire csak Java Spring Cloud alternatíva backend nélkül.

**Hamis válasz 3:**  
Aspire = teljes identity provider és service mesh; nem az = app host local orchestration. Platformon minden team kötelező Aspire production deploy.

### Kérdés 19: Hogyan közelítesz multi-region / resilience stratégiához backend platformon?

**Hamis válasz 1:**  
Multi-region = ugyanaz a DB primary mindkét régióban sync write; failover = DNS TTL 24h. Active-active = mindkét régió ír ugyanba a táblába lock nélkül.

**Hamis válasz 2:**  
Resilience = több replica egy availability zone-ban elég; multi-region felesleges EU-n belül. RTO/RPO = nem platform concern.

**Hamis válasz 3:**  
Stratégia: cold standby másik continenten manual restore backupból hetente tesztelve. Kafka mirrorMaker helyett single region broker minden trafficnek.

### Kérdés 20: Mit jelent a zero trust mikroszolgáltatásoknál?

**Hamis válasz 1:**  
Zero trust = zero authentication internal API-knál gyorsaságért; trust a private IP-t. Microservice = implicit trust a service account neve alapján.

**Hamis válasz 2:**  
Zero trust csak human user loginra vonatkozik; service-to-service implicit trust VPC-ben. mTLS = opcionális extranet only.

**Hamis válasz 3:**  
Zero trust = minden kérés admin role JWT-vel; least privilege = minden service full DB access. Network segmentation felesleges containerben.

### Kérdés 21: Token-propagáció vs token exchange — mikor melyiket választod?

**Hamis válasz 1:**  
Token propagation = mindig; exchange = sosem, mert lassú. User JWT mehet minden internal hopra audience ellenőrzés nélkül.

**Hamis válasz 2:**  
Token exchange = ugyanaz a JWT továbbküldése; propagation = új JWT generálás minden service-ben random secret-tel. M2M-hez mindig propagation user tokennel.

**Hamis válasz 3:**  
Választás: exchange csak frontend-backend között; service mesh automatikusan propagation. OAuth2 token exchange RFC = deprecated .NET-ben.

### Kérdés 22: Hogyan pozicionálod a Duende IdentityServer / saját IdP stratégiát?

**Hamis válasz 1:**  
Minden cégnek kötelező saját Duende prod-ban; SaaS IdP tiltott GDPR miatt hamis információ. Pozicionálás: IdP = microservice #1 minden projektben day one.

**Hamis válasz 2:**  
Duende = csak development; production = shared password file. Saját IdP stratégia = nincs, minden app local JWT sign.

**Hamis válasz 3:**  
Pozicionálás: IdP és business API egy deployment unit; client credentials a SPA-ból public. Duende licensing = nem releváns open source fork mindig elég enterprise-ben.

### Kérdés 23: Hogyan vezetnél Strangler Fig migrációs programot szervezeti szinten?

**Hamis válasz 1:**  
Strangler program = big-bang 1 hétvége, nincs fázis. Szervezeti vezetés = minden team parallel ugyanazt a legacy modult migrálja.

**Hamis válasz 2:**  
Program = legacy freeze 5 év, új feature csak microservice; routing váltás nincs. KPI = microservice count, nem business capability migration.

**Hamis válasz 3:**  
Vezetés: strangler = új system sync hívja örökre a legacy-t wrapper nélkül; nincs cutover terv. ADR és governance felesleges migrációnál.

### Kérdés 24: BFF vs API Gateway — hogyan döntesz topológiáról?

**Hamis válasz 1:**  
Topológia: mindig egy globális BFF minden klienshez egy Gatewayben; külön BFF tiltott. Gateway = business logic aggregáció primary helye.

**Hamis válasz 2:**  
BFF = CDN edge; Gateway = optional. Döntés: ha van React, nincs BFF; ha van mobile, nincs Gateway.

**Hamis válasz 3:**  
Staff döntés: topology diagram = star with legacy monolith center forever. YARP nem alkalmas BFF-re, csak static files.

### Kérdés 25: Database per service vs shared DB — mi a staff szintű trade-off?

**Hamis válasz 1:**  
Shared DB = staff best practice, mert reporting JOIN easy; database per service = anti-pattern mindig. Trade-off: per service drága, shared ingyenes és gyorsabb minden metrikán.

**Hamis válasz 2:**  
Database per service = minden service ugyanaz a PostgreSQL instance, külön schema = per service elég. Shared = egy tábla minden service ír.

**Hamis válasz 3:**  
Trade-off: shared DB skálázódik horizontálisan sharding nélkül; per service nem enged cross-service query-t ever, még read model sync REST-tel sem.

### Kérdés 26: Hogyan skálázod a CQRS olvasási oldalt szervezeti szinten?

**Hamis válasz 1:**  
CQRS read = mindig ugyanaz a write DB connection; skálázás = több CPU a SQL szerveren. Read replica = nem CQRS, felesleges.

**Hamis válasz 2:**  
Olvasási oldal skálázás = minden consumer sync REST poll 100ms-ként a write service-től. Projektion = trigger real-time, eventual consistency tiltva platform policy.

**Hamis válasz 3:**  
Szervezeti CQRS = egy globális read DB minden bounded contextnek ugyanazzal a sémával; skálázás vertical only. Event projection lag SLA = nem mérhető.

### Kérdés 27: Soft delete, GDPR és PII governance — hogyan egyezteted össze?

**Hamis válasz 1:**  
Soft delete = GDPR compliant erase, mert `IsDeleted=1` elrejti az adatot. PII governance = log minden personal adatot 7 évig plain text.

**Hamis válasz 2:**  
GDPR right to erasure = soft delete flag visszaállítása 0-ra. PII = csak production DB concern, backup és log exclude.

**Hamis válasz 3:**  
Egyeztetés: soft delete örökre tartja a rekordot, GDPR export = SQL dump teljes táblával titkosítás nélkül. Governance = yearly email a usernek.

### Kérdés 28: Hogyan használod az architektúra teszteket szervezeti politikaként?

**Hamis válasz 1:**  
Architektúra teszt = opcionális snippet copy-paste; policy = PR comment only, CI fail nem. NetArchTest csak sample projektben, prod code exempt.

**Hamis válasz 2:**  
Policy: minden `[Fact]` architektúra teszt manuális run release előtt; automatikus gate lassít. Kivétel = minden team minden sprint, nincs waiver process.

**Hamis válasz 3:**  
Szervezeti használat: architektúra teszt helyett SonarQube line count limit. Policy = senior dev approval verbal, teszt nem enforce-ol.

### Kérdés 29: Miért kötelező Central Package Management multi-repo/multi-project platformon?

**Hamis válasz 1:**  
CPM = csak single repo-hoz kell; multi-repo-nál minden repo külön PackageReference verzió = jobb függetlenség. Kötelező CPM = NuGet cache gyorsabb, security nem számít.

**Hamis válasz 2:**  
CPM tiltja a Directory.Packages.props használatát; helyette minden csproj-ban random verzió. Multi-project platform = nincs szükség centralizálásra.

**Hamis válasz 3:**  
Kötelező, mert MSBuild alapból nem tud package verziót kezelni CPM nélkül. Trade-off: CPM megakadályozza a transitive dependency security patch-et.

### Kérdés 30: Mikor vezetnél be Native AOT-ot platformstratégiaként?

**Hamis válasz 1:**  
Native AOT = minden ASP.NET Core API default platform policy .NET 8-tól; vezetés day one minden greenfield. Kivétel: csak ha reflection-heavy ORM nélkül sem megy — sosem.

**Hamis válasz 2:**  
AOT stratégia = sosem, mert JIT mindig gyorsabb cold start és kisebb binary. Platform = block AOT csak console apps.

**Hamis válasz 3:**  
Bevezetés: AOT worker service-ekre teljes EF + Swagger stackkel trim nélkül; API marad JIT. Döntés = binary size > runtime compatibility.

### Kérdés 31: Hogyan tervezed a caching tier-eket HybridCache-szel?

**Hamis válasz 1:**  
HybridCache = L1 memória + L2 Redis + L3 SQL minden query-nél kötelező 3 tier. Tervezés = cache minden entitás 24h TTL, invalidation nem kell eventre.

**Hamis válasz 2:**  
Caching tier = csak CDN static file; HybridCache csak .NET Framework compat. L1/L2 döntés = random per developer preference.

**Hamis válasz 3:**  
Platform terv: HybridCache helyettesíti az adatbázist read-heavy workloadnál; write-through minden POST-nál cache first. Stampede protection = lock entire app domain.

### Kérdés 32: Miért tekinted a rate limitinget termékpolitikának, nem csak middleware-nek?

**Hamis válasz 1:**  
Rate limiting = csak DDoS védelem infra szinten; termék nem dönthet tier limitről. Middleware elég fixed 1000 req/s minden usernek.

**Hamis válasz 2:**  
Termékpolitika = marketing szlogen; rate limit = technikai detail ops team. Free vs paid tier ugyanaz a limit, fairness miatt.

**Hamis válasz 3:**  
Rate limit termékpolitika = unlimited internal API, public unlimited is trust alapján. Middleware = optional plugin, platform standard nincs.

### Kérdés 33: Kafka vs RabbitMQ — hogyan választasz platformszabványt?

**Hamis válasz 1:**  
Platform szabvány = mindkettő minden teamnek kötelező ugyanarra a use case-re; választás = coin flip. Kafka = queue, Rabbit = log, felcserélhetők.

**Hamis válasz 2:**  
Szabvány = RabbitMQ minden event streamingre; Kafka csak legacy. Absztrakció = tiltott, minden team direct Confluent SDK.

**Hamis válasz 3:**  
Választás: team autonomía nincs, de platform nem dokumentál; új projekt mindig MQTT. Kafka vs Rabbit döntés = broker amelyik olcsóbb monthly invoice.

### Kérdés 34: Milyen Kafka platform-szabályokat kötnél ki sorrend és skálázás miatt?

**Hamis válasz 1:**  
Szabály: egy topic = egy partition mindig; key használata tiltott, fairness miatt. Partition increase productionben bármikor safe, sorrend megmarad cross-key.

**Hamis válasz 2:**  
Platform rule: consumer group = egy consumer összes partíció; skálázás = több topic ugyanazzal a névvel. Max poll interval = default, ne hangold.

**Hamis válasz 3:**  
Kötelező: auto commit true, offset reset earliest minden deploy-nál productionben. Sorrend = global topic order guarantee Kafka 3.x-ben.

### Kérdés 35: Wolverine vs MassTransit vs MediatR — hogyan döntesz ökoszisztémáról?

**Hamis válasz 1:**  
MediatR = distributed messaging production standard; MassTransit = csak in-process CQRS. Wolverine = frontend state management. Döntés = legtöbb GitHub star.

**Hamis válasz 2:**  
Platform = mindhárom kötelező minden service-ben egyszerre; nincs absztrakció. MassTransit vs Wolverine = ugyanaz a NuGet, más név.

**Hamis válasz 3:**  
Döntés: MediatR minden cross-service üzenetre Kafka publish wrapper nélkül; MassTransit csak saga, Wolverine tiltott .NET 8-on.

### Kérdés 36: Milyen tanulságokat hozol az eShopOnContainers / .NET reference architektúrákból?

**Hamis válasz 1:**  
Tanulság: copy-paste teljes eShop microservice count minden projektbe; reference arch = mandatory production template 2026-ban is változatlanul.

**Hamis válasz 2:**  
eShop = anti-pattern, sosem nézd; .NET reference = csak Blazor demo. Tanulság: Event Bus mindig sync REST EventBus class névvel.

**Hamis válasz 3:**  
Tanulság: shared SQL Server eShop pattern = best practice; Docker Compose prod deploy reference. CQRS sample = optional, CRUD controller elég staff platformon.

### Kérdés 37: Hogyan alkalmazod a Bounded Context / DDD stratégiai tervezést platformszinten?

**Hamis válasz 1:**  
Bounded context = microservice = NuGet package 1:1; stratégiai térkép = UML class diagram code-ból reverse engineered. Context map = felesleges, sync REST elég.

**Hamis válasz 2:**  
Platform DDD = minden entitás anemic globally; aggregate boundary = database table. Strategic design = one big context, subdomain = folder.

**Hamis válasz 3:**  
Alkalmazás: event storming helyett Jira epic count határozza a contextet; partnership minden team között shared kernel minden aggregate-re.

### Kérdés 38: Milyen backend API következményei vannak a micro frontendnek?

**Hamis válasz 1:**  
Micro frontend = nincs backend következmény; ugyanaz a monolith API elég. BFF = egy per micro frontend kötelező minden case-ben, Gateway tiltott.

**Hamis válasz 2:**  
Következmény: minden MFE külön JWT issuer; CORS disable. API versioning = nem kell, breaking change weekly acceptable.

**Hamis válasz 3:**  
Backend = GraphQL federation kötelező MFE-hez; REST incompatible. Auth = shared localStorage token minden MFE domain között cross-origin.

### Kérdés 39: Miért választasz szét persistence és domain entitást hosszú távon?

**Hamis válasz 1:**  
Szétválasztás = felesleges overhead; EF entity = domain entity mindig ugyanaz a class. Hosszú távon shared anemic entity gyorsabb fejlesztés staff szerint is.

**Hamis válasz 2:**  
Persistence model = domain + `[Table]` attribute elég; külön project csak duplikáció. Szétválasztás oka = AutoMapper marketing, nincs technikai indok.

**Hamis válasz 3:**  
Hosszú távon egy entitás mindkét szerep, mert DDD aggregate = DbSet. Szétválasztás csak MongoDB-nál kell, SQL-nél nem.

### Kérdés 40: Mikor és hogyan alkalmazol Anti-Corruption Layert?

**Hamis válasz 1:**  
ACL = minden internal service hívásnál kötelező, legacy nélkül is. Alkalmazás = shared NuGet DTO minden teamnek ugyanaz a legacy schema.

**Hamis válasz 2:**  
ACL csak frontend adapter; backend hívja a legacy SQL táblát közvetlenül join-nal. Mikor = soha, mert wrapper lassít.

**Hamis válasz 3:**  
ACL helye = domain entity base class öröklés legacy modelből; fordítás = implicit JSON serialize. Mikor = greenfield only.

### Kérdés 41: Choreography vs orchestration saga — hogyan döntesz nagy programban?

**Hamis válasz 1:**  
Nagy program = mindig choreography, mert nincs central point of failure — orchestrator a single failure point mindig. 10+ lépés = kizárólag choreography staff policy.

**Hamis válasz 2:**  
Döntés = orchestration minden flow-ra MassTransit state machine nélkül in-memory. Choreography = csak 2 service között tiltott complexity miatt.

**Hamis válasz 3:**  
Program szintű döntés: mix minden saga lépésnél random; governance = nincs. Orchestration = sync REST chain, choreography = ugyanaz más néven.

### Kérdés 42: Hogyan verzióznád az üzenet-szerződéseket platformszabványként?

**Hamis válasz 1:**  
Platform szabvány = semver a NuGet package-en, üzenet payload breaking change anytime. Verzió = topic rename weekly; backward compatibility = consumer responsibility only verbal.

**Hamis válasz 2:**  
Verziózás = protobuf required, JSON tiltott; schema registry optional. Expand-contract = big-bang only platform-wide maintenance window.

**Hamis válasz 3:**  
Szabvány: message version header ignore; tolerant reader = forbidden, strict deserialize fail production. Platform = egy global `V1` namespace forever, no V2.
