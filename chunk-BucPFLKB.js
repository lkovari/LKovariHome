var a=`# Back-end knowledge base

Collected by L\xE1szl\xF3 K\u0151v\xE1ri

## Tartalomjegyz\xE9k {#tartalomjegyzek}

1. [Minimal API (.NET 6+)](#minimal-api)
2. [EF Core Transaction Handling (EF Core 1.0+ / .NET Core 1.0+)](#ef-core-transaction-handling)
3. [Autofac Implementation](#autofac-implementation)
4. [.Net 8 Clean Architecture (.NET 8)](#net-8-clean-architecture)
5. [.Net Core Clean Architecture Infra Web stb (.NET Core 1.0+)](#net-core-clean-architecture-infra-web-stb)
6. [Autofac Benefits](#autofac-benefits)
7. [.Net Clean Architecture Essence](#net-clean-architecture-essence)
8. [Bounded Context](#bounded-context)
9. [Hexagonal Onion Clean Architectures](#hexagonal-onion-clean-architectures)
10. [Vertical sliced code Organisation pattern](#vertical-sliced-code-organisation-pattern)
11. [Microsoft eShopOnContainers](#microsoft-eshoponcontainers)
12. [.Net Reference Application Comparison](#net-reference-application-comparison)
13. [CQRS Command and Query responsibility Segregation by Greg Young 2010](#cqrs-command-and-query-responsibility-segregation-by-greg-young-2010)
14. [MediatR](#mediatr)
15. [SOLID](#solid)
16. [Design Patterns](#design-patterns)
17. [UnitOfWork](#unitofwork)
18. [Yield (C# 2.0+)](#yield)
19. [Covariance Contravariance (C# 4.0+)](#covariance-contravariance)
20. [IEnumerable vs. List (.NET 1.0+ / C# 1.0+)](#ienumerable-vs-list)
21. [Swagger \xE9s Kiota (ASP.NET Core 2.0+ \xB7 Kiota)](#swagger-es-kiota)
22. [EF Core Interceptors (EF Core 5.0+ / .NET 5+)](#ef-core-interceptors)
23. [EF Core Migration Parancsok (EF Core 1.0+)](#ef-core-migration-parancsok)
24. [Keycloak](#keykloak)
25. [REST API haszn\xE1lata .NET (ASP.NET Core 1.0+)](#rest-api-hasznalata-net)
26. [JOIN left right inner outer in SQL and EF Core LINQ (EF Core 1.0+)](#join-left-right-inner-outer-in-sql-and-ef-core-linq)
27. [gRPC service \u2013 gRPC Service l\xE9trehoz\xE1sa .NET 8-ban (.NET Core 3.0+ / .NET 8)](#grpc-service-grpc-service-letrehozasa-net-8-ban)
28. [xUnit Tesztesetek P\xE9lda](#xunit-tesztesetek-pelda)
29. [IEntityTypeConfiguration (EF Core 1.0+)](#ientitytypeconfiguration)
30. [EF Core Global Filter (EF Core 2.0+)](#ef-core-global-filter)
31. [File-scoped namespace (C# 10 / .NET 6+)](#file-scoped-namespace)
32. [EF Core Joins (EF Core 1.0+)](#ef-core-joins)
33. [Controller return values \u2013 HTTP 2xx/3xx/4xx/5xx (ASP.NET Core 1.0+)](#controller-return-values)
34. [Get Set Init (C# 9.0+ (init) / C# 1.0+ (get/set))](#get-set-init)
35. [Record vs Struct vs Class (C# 9.0+ (record) / C# 1.0+)](#record-vs-struct-vs-class)
36. [Immutability C#-ban (C# 9.0+)](#immutability-c-ban)
37. [Collection Framework \u2013 hash alap\xFA gy\u0171jtem\xE9nyek (.NET 2.0+)](#collection-framework-hash-alapu-gyujtemenyek)
38. [Mit implement\xE1ljunk egy \xFAj C# class-ban (Equals, GetHashCode, ToString stb.) (C# 1.0+)](#mit-implementaljunk-egy-uj-c-class-ban-equals-gethashcode-tostring-stb)
39. [EF Core relationship with Fluent API (EF Core 1.0+)](#ef-core-relationship-with-fluent-api)
40. [EF Core enable Lazy Loading (EF Core 2.1+)](#ef-core-enable-lazy-loading)
41. [Entity States (EF Core 1.0+)](#entity-states)
42. [Add Attach Update (EF Core 1.0+)](#add-attach-update)
43. [EF Core composite key (EF Core 1.0+)](#ef-core-composite-key)
44. [EF Core Concurrency control (EF Core 1.0+)](#ef-core-concurrency-control)
45. [EF Core TPH, TPT, TPC (TPH: EF Core 1.0+ \xB7 TPT: EF Core 5.0+ \xB7 TPC: EF Core 7.0+)](#ef-core-tph-tpt-tpc)
46. [EF Core transaction handling (Unit of Work vari\xE1ci\xF3) (EF Core 1.0+)](#ef-core-transaction-handling-unit-of-work-variacio)
47. [EF Core performance optimization strategies (EF Core 1.0+)](#ef-core-performance-optimization-strategies)
48. [EF Core In-Memory database (EF Core 1.0+)](#ef-core-in-memory-database)
49. [Middleware (ASP.NET Core 1.0+)](#middleware)
50. [JWT, OAuth, OpenId Connect (ASP.NET Core 1.0+)](#jwt-oauth-openid-connect)
51. [ASP.NET core Caching strategies (ASP.NET Core 1.0+)](#asp-net-core-caching-strategies)
52. [Extension method \u2013 klasszikus alap (C# 3.0+)](#extension-method-klasszikus-alap)
53. [.NET 7 \xDAjdons\xE1gai C# 11 (.NET 7 / C# 11)](#net-7-ujdonsagai-c-11)
54. [Extension method \u2013 minden, amit tudni \xE9rdemes (C# 3.0+)](#extension-method-minden-amit-tudni-erdemes)
55. [Mikor haszn\xE1ljunk sync \xE9s mikor async API met\xF3dusokat (C# 5.0+ / .NET 4.5+)](#mikor-hasznaljunk-sync-es-mikor-async-api-metodusokat)
56. [SQL lass\xFA query \u2013 mit kell ellen\u0151rizni](#sql-lassu-query-mit-kell-ellenorizni)
57. [.NET 8 \xDAjdons\xE1gai C# 12 (.NET 8 / C# 12)](#net-8-ujdonsagai-c-12)
58. [.NET 9 \xDAjdons\xE1gai C# 13 (.NET 9 / C# 13)](#net-9-ujdonsagai-c-13)
59. [.NET 10 \xDAjdons\xE1gai C# 14 (.NET 10 / C# 14)](#net-10-ujdonsagai-c-14)
60. [Dependency Injection Lifetime-ok (Transient, Scoped, Singleton) (ASP.NET Core 1.0+ / .NET Core 1.0+)](#dependency-injection-lifetime-ok-transient-scoped-singleton)
61. [Options Pattern (IOptions, IOptionsSnapshot, IOptionsMonitor) (ASP.NET Core 1.0+ / .NET Core 1.0+)](#options-pattern-ioptions-ioptionssnapshot-ioptionsmonitor)
62. [Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails (ASP.NET Core 2.1+ \xB7 IExceptionHandler .NET 8+)](#globalis-kivetelkezeles-es-problemdetails)
63. [Struktur\xE1lt logol\xE1s \u2013 ILogger \xE9s Serilog (ILogger: .NET Core 1.0+)](#strukturalt-logolas-ilogger-es-serilog)
64. [HttpClientFactory \xE9s Polly (resilience) (HttpClientFactory: .NET Core 2.1+)](#httpclientfactory-es-polly-resilience)
65. [H\xE1tt\xE9rfolyamatok \u2013 IHostedService \xE9s BackgroundService (IHostedService: .NET Core 2.0+ \xB7 BackgroundService: .NET Core 2.1+)](#hatterfolyamatok-ihostedservice-es-backgroundservice)
66. [Nullable Reference Types (C# 8.0+)](#nullable-reference-types)
67. [Async/await Best Practices \xE9s CancellationToken (C# 5.0+ / .NET 4.5+)](#async-await-best-practices-es-cancellationtoken)
68. [Health Checks (ASP.NET Core 2.2+)](#health-checks)
69. [API Versioning (ASP.NET Core 2.0+ (Asp.Versioning))](#api-versioning)
70. [Unit Testing \u2013 Mocking Moq-kal](#unit-testing-mocking-moq-kal)
71. [Alkalmaz\xE1sszint\u0171 (in-memory) Concurrency Handling \u2013 sz\xE1lbiztos programoz\xE1s (C# 1.0+ \xB7 System.Threading.Lock: C# 13 / .NET 9+)](#alkalmazasszintu-in-memory-concurrency-handling-szalbiztos-programozas)
72. [xUnit Tesztel\xE9s Alapjai \u2013 napi szinten sz\xFCks\xE9ges patternek](#xunit-teszteles-alapjai-napi-szinten-szukseges-patternek)
73. [Teszt adat-el\u0151\xE1ll\xEDt\xE1si patternek \u2013 Object Mother, Test Data Builder](#teszt-adat-eloallitasi-patternek-object-mother-test-data-builder)
74. [CancellationToken haszn\xE1lata API-kban \u2013 gyakorlati p\xE9lda (.NET 4.0+ / C# 5.0+)](#cancellationtoken-hasznalata-api-kban-gyakorlati-pelda)
75. [Saga Orchestration](#saga-orchestration)
76. [Outbox Pattern](#outbox-pattern)
77. [Circuit Breaker Pattern](#circuit-breaker-pattern)
78. [Repository Pattern](#repository-pattern)
79. [Service Collection Extension Pattern (ASP.NET Core 1.0+)](#service-collection-extension-pattern)
80. [REPR Pattern \u2013 Request-Endpoint-Response (.NET 6+ (Minimal API))](#repr-pattern-request-endpoint-response)
81. [Domain Events](#domain-events)
82. [Decorator Pattern (Pipeline)](#decorator-pattern-pipeline)
83. [Specification Pattern](#specification-pattern)
84. [Result Pattern / Railway-Oriented Programming](#result-pattern-railway-oriented-programming)
85. [Strangler Fig Pattern](#strangler-fig-pattern)
86. [Backend for Frontend (BFF) \xE9s API Gateway](#backend-for-frontend-bff-es-api-gateway)
87. [Anti-Corruption Layer](#anti-corruption-layer)
88. [Idempotency Pattern API-kban](#idempotency-pattern-api-kban)
89. [SignalR (ASP.NET Core 2.1+)](#signalr)
90. [Quartz.NET \u2013 H\xE1tt\xE9rfolyamat \xFCtemez\xE9s](#quartz-net-hatterfolyamat-utemezes)
91. [Apache Kafka .NET-ben \u2013 alapfogalmak \xE9s els\u0151 producer/consumer](#apache-kafka-net-ben-alapfogalmak-es-elso-producer-consumer)
92. [Kafka gyakorlati mint\xE1k \u2013 rebalance, offset, DLQ, kulcsv\xE1laszt\xE1s](#kafka-gyakorlati-mintak-rebalance-offset-dlq-kulcsvalasztas)
93. [RabbitMQ alapfogalmak \u2013 exchange, queue, binding, routing](#rabbitmq-alapfogalmak-exchange-queue-binding-routing)
94. [Kafka vs. RabbitMQ \u2013 mikor melyiket](#kafka-vs-rabbitmq-mikor-melyiket)
95. [MassTransit \u2013 alapok, konfigur\xE1ci\xF3, consumer](#masstransit-alapok-konfiguracio-consumer)
96. [MassTransit Saga State Machine](#masstransit-saga-state-machine)
97. [MassTransit hibakezel\xE9s \u2013 retry, redelivery, error queue, circuit breaker](#masstransit-hibakezeles-retry-redelivery-error-queue-circuit-breaker)
98. [Wolverine \u2013 k\xF3dk\xF6zpont\xFA messaging \xE9s medi\xE1tor](#wolverine-kodkozpontu-messaging-es-mediator)
99. [K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer (Inbox Pattern)](#kezbesitesi-szemantika-es-idempotens-consumer-inbox-pattern)
100. [\xDCzenet-szerz\u0151d\xE9sek verzi\xF3z\xE1sa \xE9s s\xE9ma-evol\xFAci\xF3](#uzenet-szerzodesek-verziozasa-es-sema-evolucio)
101. [Event-Driven integr\xE1ci\xF3s st\xEDlusok](#event-driven-integracios-stilusok)
102. [Event Sourcing .NET-ben (Marten)](#event-sourcing-net-ben-marten)
103. [Eventual consistency \xE9s az elosztott tranzakci\xF3k val\xF3s\xE1ga](#eventual-consistency-es-az-elosztott-tranzakciok-valosaga)
104. [Vertical Slice Architecture a gyakorlatban](#vertical-slice-architecture-a-gyakorlatban)
105. [Modular Monolith \u2013 mikor NE microservice](#modular-monolith-mikor-ne-microservice)
106. [.NET Aspire \u2013 helyi orchestration, service discovery, telemetria (.NET Aspire 8.0+ / .NET 8+)](#net-aspire-helyi-orchestration-service-discovery-telemetria)
107. [OpenTelemetry \u2013 distributed tracing, metrik\xE1k, korrel\xE1ci\xF3 (.NET 6+ (OpenTelemetry))](#opentelemetry-distributed-tracing-metrikak-korrelacio)
108. [Polly v8 \xE9s Microsoft.Extensions.Resilience (Microsoft.Extensions.Resilience: .NET 8+)](#polly-v8-es-microsoft-extensions-resilience)
109. [HybridCache \xE9s elosztott gyors\xEDt\xF3t\xE1r (HybridCache: .NET 9+)](#hybridcache-es-elosztott-gyorsitotar)
110. [Rate limiting \xE9s Output Caching (Rate limiting: .NET 7+ \xB7 Output caching: .NET 7+)](#rate-limiting-es-output-caching)
111. [Keyed Services \xE9s halad\xF3 DI (.NET 8+)](#keyed-services-es-halado-di-net-8)
112. [FluentValidation \xE9s valid\xE1ci\xF3 a pipeline-ban](#fluentvalidation-es-validacio-a-pipeline-ban)
113. [Objektum-mapping: Mapperly vs. AutoMapper](#objektum-mapping-mapperly-vs-automapper)
114. [Dapper \xE9s hibrid perzisztencia](#dapper-es-hibrid-perzisztencia)
115. [Testcontainers \u2013 integr\xE1ci\xF3s tesztek val\xF3s infrastrukt\xFAr\xE1val](#testcontainers-integracios-tesztek-valos-infrastrukturaval)
116. [WebApplicationFactory \u2013 API-szint\u0171 integr\xE1ci\xF3s tesztek (ASP.NET Core 2.1+)](#webapplicationfactory-api-szintu-integracios-tesztek)
117. [Architekt\xFAra tesztek \u2013 a szab\xE1lyok kik\xE9nyszer\xEDt\xE9se](#architektura-tesztek-a-szabalyok-kikenyszeritese)
118. [Contract testing \u2013 szerz\u0151d\xE9ses tesztek szolg\xE1ltat\xE1sok k\xF6z\xF6tt](#contract-testing-szerzodeses-tesztek-szolgaltatasok-kozott)
119. [System.Text.Json halad\xF3 szint (.NET Core 3.0+)](#system-text-json-halado-szint)
120. [Minimal API halad\xF3 szint \u2013 TypedResults, endpoint filter, route group (TypedResults/Endpoint filters/Route groups: .NET 7+)](#minimal-api-halado-szint-typedresults-endpoint-filter-route-group)
121. [Authorization \u2013 policy, requirement, claim, multi-tenant hozz\xE1f\xE9r\xE9s (ASP.NET Core 1.0+)](#authorization-policy-requirement-claim-multi-tenant-hozzaferes)
122. [Konfigur\xE1ci\xF3, titokkezel\xE9s \xE9s Options-valid\xE1ci\xF3 (ASP.NET Core 1.0+ \xB7 Options validation: .NET Core 2.2+)](#konfiguracio-titokkezeles-es-options-validacio)
123. [Feature flags \u2013 funkci\xF3kapcsol\xF3k (Microsoft.FeatureManagement)](#feature-flags-funkciokapcsolok)
124. [Multi-tenancy .NET-ben](#multi-tenancy-net-ben)
125. [Elosztott lock \xE9s h\xE1tt\xE9rfolyamatok t\xF6bb p\xE9ld\xE1nyban](#elosztott-lock-es-hatterfolyamatok-tobb-peldanyban)
126. [Channels \xE9s IAsyncEnumerable \u2013 streaming \xE9s bels\u0151 producer-consumer (Channels: .NET Core 2.1+ \xB7 IAsyncEnumerable: C# 8.0+)](#channels-es-iasyncenumerable-streaming-es-belso-producer-consumer)
127. [Teljes\xEDtm\xE9ny: Native AOT, trimming, benchmarkol\xE1s (Native AOT: .NET 7+ k\xEDs\xE9rleti \xB7 .NET 8+ produkci\xF3)](#teljesitmeny-native-aot-trimming-benchmarkolas)
128. [Docker multi-stage build \xE9s Kubernetes-alapok](#docker-multi-stage-build-es-kubernetes-alapok)
129. [CI/CD \xE9s adatb\xE1zis-migr\xE1ci\xF3 \xE9les k\xF6rnyezetben (EF Core 1.0+)](#ci-cd-es-adatbazis-migracio-eles-kornyezetben)
130. [Biztons\xE1gi alapok API-kn\xE1l \u2013 gyakorlati ellen\u0151rz\u0151lista (ASP.NET Core 1.0+)](#biztonsagi-alapok-api-knal-gyakorlati-ellenorzolista)
131. [Konkurenciakezel\xE9s halad\xF3 szinten \u2013 adatb\xE1zis, throttling, \xFCtk\xF6z\xE9sfelold\xE1s (EF Core 1.0+)](#konkurenciakezeles-halado-szinten-adatbazis-throttling-utkozesfeloldas)
132. [Async/await halad\xF3 szint \u2013 ValueTask, thread pool, timeout, fire-and-forget (ValueTask: .NET Core 2.0+ / C# 7.0+)](#async-await-halado-szint-valuetask-thread-pool-timeout-fire-and-forget)
133. [System.Text.Json vs. Newtonsoft.Json \u2013 melyiket mikor (System.Text.Json: .NET Core 3.0+)](#system-text-json-vs-newtonsoft-json-melyiket-mikor)
134. [Enterprise szint\u0171 glob\xE1lis hibakezel\xE9s \u2013 teljes fel\xE1ll\xE1s (IExceptionHandler: .NET 8+)](#enterprise-szintu-globalis-hibakezeles-teljes-felallas)
135. [Correlation ID \u2013 k\xE9r\xE9s-k\xF6vet\xE9s v\xE9gpontt\xF3l v\xE9gpontig (.NET 6+ (Activity/OpenTelemetry))](#correlation-id-keres-kovetes-vegpontol-vegpontig)
136. [Object Mother \xE9s Test Data Builder \u2013 halad\xF3, kett\u0151s c\xE9l\xFA megval\xF3s\xEDt\xE1s](#object-mother-es-test-data-builder-halado-kettos-celu-megvalositas)
137. [Testing pyramid fel\xE1ll\xEDt\xE1sa \xE9s eldobhat\xF3 adatb\xE1zis tesztenk\xE9nt](#testing-pyramid-felallitasa-es-eldobhato-adatbazis-tesztenkent)
138. [Middleware r\xE9szletesen \u2013 pipeline, sorrend, saj\xE1t middleware (ASP.NET Core 1.0+)](#middleware-reszletesen-pipeline-sorrend-sajat-middleware)
139. [Azonos\xEDt\xF3-gener\xE1l\xE1si strat\xE9gi\xE1k .NET-ben \u2013 melyiket mikor (Guid: .NET 1.0+ \xB7 Guid.CreateVersion7: .NET 9+)](#azonosito-generalasi-strategiak-net-ben-melyiket-mikor)
140. [.NET 11 \xFAjdons\xE1gai (el\u0151zetes)](#net-11-ujdonsagai-elozetes)
141. [C# 15 \xFAjdons\xE1gai (C# 15)](#csharp-15-ujdonsagai)
142. [DDD taktikai \xE9p\xEDt\u0151elemek \u2013 aggreg\xE1tum, value object, guard clause](#ddd-taktikai-epitoelemek-aggregatum-value-object-guard-clause)
143. [Structured Service Composition \u2013 a DI-regisztr\xE1ci\xF3 rendszerez\xE9se (ASP.NET Core 1.0+)](#structured-service-composition-a-di-regisztracio-rendszerezese)
144. [Boilerplate cs\xF6kkent\xE9se Clean Architecture-ben](#boilerplate-csokkentese-clean-architecture-ben)
145. [Aggregator Pattern](#aggregator-pattern)
146. [Adatb\xE1zis-strat\xE9gi\xE1k mikroszolg\xE1ltat\xE1sokn\xE1l](#adatbazis-strategiak-mikroszolgaltatasoknal)
147. [API Gateway YARP-pal (YARP)](#api-gateway-yarp-pal)
148. [Rugalmass\xE1gi mint\xE1k a circuit breakeren t\xFAl (.NET 8+ (Microsoft.Extensions.Resilience))](#rugalmassagi-mintak-a-circuit-breakeren-tul)
149. [Sidecar, Ambassador \xE9s Service Mesh (Dapr)](#sidecar-ambassador-es-service-mesh-dapr)
150. [Micro frontends](#micro-frontends)
151. [Serverless mikroszolg\xE1ltat\xE1sok](#serverless-mikroszolgaltatasok)
152. [Observability a gyakorlatban \u2013 dashboard, riaszt\xE1s, SLO (.NET 6+)](#observability-a-gyakorlatban-dashboard-riasztas-slo)
153. [Mikroszolg\xE1ltat\xE1sok biztons\xE1ga \u2013 zero trust, mTLS, token-propag\xE1ci\xF3](#mikroszolgaltatasok-biztonsaga-zero-trust-mtls-token-propagacio)
154. [Logikai t\xF6rl\xE9s (soft delete) EF Core-ban \u2013 best practice (EF Core 2.0+ (global filters))](#logikai-torles-soft-delete-ef-core-ban-best-practice)
155. [Rich vs. an\xE9mikus domain modell \u2013 melyiket mikor](#rich-vs-anemikus-domain-modell-melyiket-mikor)
156. [Aggreg\xE1tum-hat\xE1rok \xE9s aggreg\xE1tumok k\xF6z\xF6tti kapcsolatok](#aggregatum-hatarok-es-aggregatumok-kozotti-kapcsolatok)
157. [Refit \u2013 deklarat\xEDv, t\xEDpusos HTTP kliens](#refit-deklarativ-tipusos-http-kliens)
158. [Perzisztencia entit\xE1s vs. domain entit\xE1s \u2013 lek\xE9pez\xE9s a hat\xE1ron](#perzisztencia-entitas-vs-domain-entitas-lekepezes-a-hataron)
159. [\xDCzenetsorrend \xE9s duplik\xE1tumok kezel\xE9se a gyakorlatban](#uzenetsorrend-es-duplikatumok-kezelese-a-gyakorlatban)
160. [Event store tervez\xE9se \xE9s snapshot strat\xE9gia](#event-store-tervezese-es-snapshot-strategia)
161. [Docker Compose \xE9s a .NET nat\xEDv kont\xE9ner-t\xE1mogat\xE1s (.NET 7+ (SDK container publish))](#docker-compose-es-a-net-nativ-kontener-tamogatas)
162. [Az architekt\xFAra er\xF3zi\xF3ja \u2013 korai jelek \xE9s ADR-ek](#az-architektura-erozioja-korai-jelek-es-adr-ek)
163. [Szolg\xE1ltat\xE1s-dekompoz\xEDci\xF3 \u2013 a szolg\xE1ltat\xE1s helyes m\xE9rete](#szolgaltatas-dekompozicio-a-szolgaltatas-helyes-merete)
164. [Choreography-alap\xFA Saga MassTransittal \u2013 kompenz\xE1ci\xF3 esem\xE9nyl\xE1ncban](#choreography-alapu-saga-masstransittal-kompenzacio-esemenylancban)
165. [CAP-t\xE9tel \xE9s konzisztencia-modellek a gyakorlatban](#cap-tetel-es-konzisztencia-modellek-a-gyakorlatban)
166. [Duende IdentityServer \u2013 saj\xE1t token-szolg\xE1ltat\xF3 \xE9s szolg\xE1ltat\xE1sk\xF6zi hiteles\xEDt\xE9s](#duende-identityserver-sajat-token-szolgaltato-es-szolgaltataskozi-hitelesites)
167. [\xC9rz\xE9keny adatok a napl\xF3ban \u2013 maszkol\xE1s \xE9s PII-kezel\xE9s](#erzekeny-adatok-a-naploban-maszkolas-es-pii-kezeles)
168. [NSubstitute, FluentAssertions \xE9s AutoFixture \u2013 teszt-eszk\xF6zk\xE9szlet a Moq mellett](#nsubstitute-fluentassertions-es-autofixture-teszt-eszkozkeszlet-a-moq-mellett)
169. [CQRS olvas\xE1si oldal \u2013 dedik\xE1lt olvas\xE1si modell \xE9s materializ\xE1lt n\xE9zet](#cqrs-olvasasi-oldal-dedikalt-olvasasi-modell-es-materializalt-nezet)
170. [File-based apps \u2013 projekt n\xE9lk\xFCli C# futtat\xE1s (.NET 10 / C# 14)](#file-based-apps-projekt-nelkuli-c-futtatas)
171. [Null-conditional assignment \u2013 \`?.=\` (C# 14)](#null-conditional-assignment)
172. [A \`field\` kulcssz\xF3 property-kben (C# 14)](#a-field-kulcsszo-property-kben)
173. [Guard clauses \u2013 \`ThrowIf*\` met\xF3dusok (.NET 6+ / .NET 8+)](#guard-clauses-throwif-metodusok)
174. [LINQ LeftJoin/RightJoin \xE9s CountBy/AggregateBy (.NET 9\u201310)](#linq-leftjoin-rightjoin-es-countby-aggregateby)
175. [SearchValues \u2013 gyors karakter- \xE9s r\xE9szstring-keres\xE9s (.NET 8+ / .NET 9+)](#searchvalues-gyors-karakter-es-reszstring-kereses)
176. [Frozen collections \u2013 FrozenDictionary \xE9s FrozenSet (.NET 8+)](#frozen-collections-frozendictionary-es-frozenset)
177. [Numerikus string-\xF6sszehasonl\xEDt\xE1s \u2013 CompareOptions.NumericOrdering (.NET 10)](#numerikus-string-osszehasonlitas-compareoptions-numericordering)
178. [Central Package Management \u2013 Directory.Packages.props](#central-package-management-directory-packages-props)
179. [Microsoft.AspNetCore.OpenApi \xE9s Scalar (.NET 9+ / .NET 10)](#microsoft-aspnetcore-openapi-es-scalar)
180. [JSON Patch System.Text.Json-nel (.NET 10)](#json-patch-system-text-json-nel)
181. [\`nameof\` unbound generic t\xEDpusokkal (C# 14)](#nameof-unbound-generic-tipusokkal)



## Minimal API (.NET 6+) https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis {#minimal-api}

*Verzi\xF3: .NET 6-t\xF3l (Minimal API); \`TypedResults\`, endpoint filter, route group: .NET 7-t\u0151l.*

A .NET Minimal API egy k\xF6nny\u0171s\xFAly\xFA megk\xF6zel\xEDt\xE9se a webes API-k l\xE9trehoz\xE1s\xE1nak, amely a .NET 6-tal deb\xFCt\xE1lt, \xE9s tov\xE1bbfejl\u0151d\xF6tt a .NET 8-ban. A minimal API-k egyszer\u0171 \xE9s gyors megold\xE1st ny\xFAjtanak kisebb, kev\xE9sb\xE9 bonyolult alkalmaz\xE1sok fejleszt\xE9s\xE9hez, ahol nincs sz\xFCks\xE9g az \xF6sszes ASP.NET Core MVC funkci\xF3ra.

El\u0151nyei:
1. Egyszer\u0171s\xE9g: A Minimal API-k kevesebb sablonk\xF3dot ig\xE9nyelnek, \xE9s egyszer\u0171bb konfigur\xE1ci\xF3val rendelkeznek.
2. Gyors fejleszt\xE9s: Mivel kevesebb k\xF3ddal \xE9s konfigur\xE1ci\xF3val rendelkezik, k\xF6nnyen \xE9s gyorsan l\xE9trehozhat\xF3k API-k.
3. Jobb teljes\xEDtm\xE9ny: kevesebb szolg\xE1ltat\xE1s \xE9s overhead sz\xFCks\xE9ges kisebb projektek eset\xE9n.
4. Kis er\u0151forr\xE1sig\xE9ny: alkalmas mikroservice architekt\xFAr\xE1khoz.
5. Egyszer\u0171bb bevezet\xE9s tanul\xE1shoz.

H\xE1tr\xE1nyai:
1. Korl\xE1tozott funkcionalit\xE1s: MVC/Razor Pages funkci\xF3k csak minim\xE1lisan t\xE1mogatottak.
2. Neh\xE9z karbantart\xE1s komplex projektekben.
3. Kev\xE9sb\xE9 modul\xE1ris.
4. Limit\xE1lt testreszab\xE1si lehet\u0151s\xE9gek (pl. komplex routing).

Mikor haszn\xE1ljuk a Minimal API-t?
- Kis vagy k\xF6zepes m\xE9ret\u0171 projektek, mikroservice-ek, egyszer\u0171 REST API-k.
- Egyszer\u0171 CRUD m\u0171veletek eset\xE9n.
- Gyors protot\xEDpusok vagy teszt API-k fejleszt\xE9s\xE9re.
- Amikor a kisebb er\u0151forr\xE1sig\xE9ny \xE9s a gyorsabb v\xE1laszid\u0151 fontos szempont.

Minimal API Implement\xE1ci\xF3 p\xE9ld\xE1k (GET, POST, PUT, DELETE)

Projekt l\xE9trehoz\xE1sa:
\`\`\`bash
dotnet new web -n MinimalApiExample
cd MinimalApiExample
\`\`\`

Model l\xE9trehoz\xE1sa:
\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}
\`\`\`

In-memory adatok t\xE1rol\xE1sa:
\`\`\`csharp
var products = new List<Product>
{
    new Product { Id = 1, Name = "Product 1", Price = 10.00M },
    new Product { Id = 2, Name = "Product 2", Price = 20.00M },
};
\`\`\`

Program.cs \u2013 teljes CRUD implement\xE1ci\xF3:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var products = new List<Product>
{
    new Product { Id = 1, Name = "Product 1", Price = 10.00M },
    new Product { Id = 2, Name = "Product 2", Price = 20.00M },
};

app.MapGet("/products", () => Results.Ok(products));

app.MapGet("/products/{id:int}", (int id) =>
{
    var product = products.FirstOrDefault(p => p.Id == id);
    return product != null ? Results.Ok(product) : Results.NotFound();
});

app.MapPost("/products", (Product newProduct) =>
{
    newProduct.Id = products.Max(p => p.Id) + 1;
    products.Add(newProduct);
    return Results.Created($"/products/{newProduct.Id}", newProduct);
});

app.MapPut("/products/{id:int}", (int id, Product updatedProduct) =>
{
    var product = products.FirstOrDefault(p => p.Id == id);
    if (product == null) return Results.NotFound();
    product.Name = updatedProduct.Name;
    product.Price = updatedProduct.Price;
    return Results.NoContent();
});

app.MapDelete("/products/{id:int}", (int id) =>
{
    var product = products.FirstOrDefault(p => p.Id == id);
    if (product == null) return Results.NotFound();
    products.Remove(product);
    return Results.NoContent();
});

app.Run();
\`\`\`

REST API CRUD m\u0171veletek bemutat\xE1sa
- GET /products \u2013 Az \xF6sszes term\xE9ket visszaadja.
- GET /products/{id} \u2013 Egy adott term\xE9ket ad vissza az id alapj\xE1n.
- POST /products \u2013 \xDAj term\xE9k hozz\xE1ad\xE1sa.
- PUT /products/{id} \u2013 Egy megl\xE9v\u0151 term\xE9k friss\xEDt\xE9se.
- DELETE /products/{id} \u2013 Egy term\xE9k t\xF6rl\xE9se.

Futtat\xE1s:
\`\`\`bash
dotnet run
\`\`\`

\xD6sszefoglal\xE1s
A Minimal API egy k\xF6nny\u0171 megk\xF6zel\xEDt\xE9s a .NET-ben, amely gyors fejleszt\xE9st tesz lehet\u0151v\xE9 kevesebb konfigur\xE1ci\xF3val. El\u0151nye az egyszer\u0171s\xE9g, gyors fejleszt\xE9s \xE9s jobb teljes\xEDtm\xE9ny kisebb projektekn\xE9l; h\xE1tr\xE1nya a korl\xE1tozott funkcionalit\xE1s \xE9s a nagyobb projektek nehezebb karbantart\xE1sa. K\xFCl\xF6n\xF6sen hasznos egyszer\u0171 webes szolg\xE1ltat\xE1sokhoz vagy mikroservice-ekhez.

## EF Core Transaction Handling (EF Core 1.0+ / .NET Core 1.0+) https://learn.microsoft.com/ef/core/saving/transactions {#ef-core-transaction-handling}

Hat\xE9kony tranzakci\xF3kezel\xE9sre akkor van sz\xFCks\xE9g, amikor t\xF6bb m\u0171veletet kell atomikusan v\xE9grehajtani: vagy minden m\u0171velet sikeresen v\xE9grehajt\xF3dik, vagy hiba eset\xE9n minden visszag\xF6rget\xE9sre ker\xFCl. Ez k\xFCl\xF6n\xF6sen fontos, ha t\xF6bb adatb\xE1zis-m\u0171velet egym\xE1st\xF3l f\xFCgg.

Mikor van sz\xFCks\xE9g tranzakci\xF3kezel\xE9sre?
- T\xF6bb m\u0171velet atomikus v\xE9grehajt\xE1sa (pl. rendel\xE9s lead\xE1sa + k\xE9szlet friss\xEDt\xE9se).
- \xD6sszetett \xFCzleti m\u0171veletek t\xF6bb entit\xE1son/aggreg\xE1tumon.
- K\xFCls\u0151 rendszerekkel t\xF6rt\xE9n\u0151 integr\xE1ci\xF3.

P\xE9lda: rendel\xE9si use case tranzakci\xF3kezel\xE9ssel (.NET 8, Clean Architecture, EF Core):

\`\`\`csharp
using Microsoft.EntityFrameworkCore;
using MyApp.Domain.Entities;
using MyApp.Domain.Repositories;
using MyApp.Application.Interfaces;

namespace MyApp.Application.UseCases
{
    public class PlaceOrderUseCase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IProductRepository _productRepository;
        private readonly IAppDbContext _dbContext;

        public PlaceOrderUseCase(IOrderRepository orderRepository, IProductRepository productRepository, IAppDbContext dbContext)
        {
            _orderRepository = orderRepository;
            _productRepository = productRepository;
            _dbContext = dbContext;
        }

        public async Task ExecuteAsync(Order order)
        {
            using (var transaction = await _dbContext.BeginTransactionAsync())
            {
                try
                {
                    await _orderRepository.AddAsync(order);

                    foreach (var item in order.Items)
                    {
                        var product = await _productRepository.GetByIdAsync(item.ProductId);
                        product.DecreaseStock(item.Quantity);
                        await _productRepository.UpdateAsync(product);
                    }

                    await _dbContext.CommitTransactionAsync();
                }
                catch (Exception)
                {
                    await _dbContext.RollbackTransactionAsync();
                    throw;
                }
            }
        }
    }
}
\`\`\`

IAppDbContext.cs:
\`\`\`csharp
using Microsoft.EntityFrameworkCore.Storage;

namespace MyApp.Application.Interfaces
{
    public interface IAppDbContext
    {
        Task<IDbContextTransaction> BeginTransactionAsync();
        Task CommitTransactionAsync();
        Task RollbackTransactionAsync();
    }
}
\`\`\`

AppDbContext.cs (EF Core implement\xE1ci\xF3):
\`\`\`csharp
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using MyApp.Application.Interfaces;

namespace MyApp.Infrastructure.Persistence
{
    public class AppDbContext : DbContext, IAppDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public async Task<IDbContextTransaction> BeginTransactionAsync() => await Database.BeginTransactionAsync();
        public async Task CommitTransactionAsync() => await Database.CommitTransactionAsync();
        public async Task RollbackTransactionAsync() => await Database.RollbackTransactionAsync();
    }
}
\`\`\`

Hogyan m\u0171k\xF6dik a tranzakci\xF3?
A PlaceOrderUseCase egy tranzakci\xF3 kezdem\xE9nyez\xE9s\xE9vel kezdi az \xFCzleti m\u0171veletet, elmenti a rendel\xE9st, majd friss\xEDti a k\xE9szletet minden t\xE9telhez. Ha minden sikeres, commit t\xF6rt\xE9nik; hiba eset\xE9n rollback biztos\xEDtja az adatb\xE1zis konzisztenci\xE1j\xE1t.

Mikor van sz\xFCks\xE9g tranzakci\xF3kezel\xE9sre?
- T\xF6bb adatb\xE1zism\u0171velet egy \xFCzleti logik\xE1n bel\xFCl.
- K\xFCls\u0151 rendszerek h\xEDv\xE1sa eset\xE9n (pl. fizet\xE9s feldolgoz\xE1sa).
- T\xF6bbsz\xF6r\xF6s \xEDr\xE1si m\u0171veletek elker\xFCl\xE9se, inkonzisztencia megel\u0151z\xE9se.

\xD6sszefoglal\xE1s
Az EF Core tranzakci\xF3kezel\xE9s fontos szerepet j\xE1tszik a .NET 8 Clean Architecture \xFCzleti logik\xE1j\xE1nak megfelel\u0151 m\u0171k\xF6d\xE9s\xE9ben, biztos\xEDtva hogy minden adatb\xE1zism\u0171veletet egy "csomagk\xE9nt" kezelj\xFCnk.

## Autofac Implementation {#autofac-implementation}

A .NET 8 Clean Architecture Core r\xE9teg\xE9ben tal\xE1lhat\xF3 elemek (Aggregates, ValueObjects, Entities, Domain Services, Domain Exceptions, Domain Events, Event Handlers) k\xF6zponti szerepet j\xE1tszanak az \xFCzleti logika fel\xE9p\xEDt\xE9s\xE9ben, \xE9s f\xFCggetlenek minden technol\xF3giai r\xE9szlett\u0151l.

Core r\xE9teg elemeinek szerepe:

1. Aggregates (Aggreg\xE1tumok) \u2013 Egy \xF6sszetett \xFCzleti objektum, amely egy vagy t\xF6bb entit\xE1st tartalmaz \xE9s egys\xE9gk\xE9nt viselkedik. Felel\u0151s az \xFCzleti szab\xE1lyok \xE9rv\xE9nyes\xEDt\xE9s\xE9\xE9rt \xE9s az \xE1llapot konzisztenci\xE1\xE9rt. Pl.: Order aggreg\xE1tum t\xF6bb OrderItem-et tartalmaz.

2. ValueObjects (\xC9rt\xE9kobjektumok) \u2013 Az \xE9rt\xE9keik alapj\xE1n egyenl\u0151 t\xEDpusok, egyedi azonos\xEDt\xF3 n\xE9lk\xFCl (pl. Money).

3. Entities (Entit\xE1sok) \u2013 Egyedi azonos\xEDt\xF3val rendelkez\u0151 objektumok, \xE1llapotuk id\u0151vel v\xE1ltozik (pl. Customer).

4. Domain Services (Domain Szolg\xE1ltat\xE1sok) \u2013 \xDCzleti logik\xE1t val\xF3s\xEDtanak meg, amely nem tartozik egy konkr\xE9t entit\xE1shoz vagy aggreg\xE1tumhoz.

5. Domain Exceptions (Domain Kiv\xE9telek) \u2013 \xDCzleti szab\xE1lyok megs\xE9rt\xE9sekor fell\xE9p\u0151 hib\xE1k kezel\xE9s\xE9re szolg\xE1lnak.

6. Domain Events (Domain Esem\xE9nyek) \u2013 A rendszerben t\xF6rt\xE9n\u0151 fontos \xFCzleti v\xE1ltoz\xE1sokat k\xE9pviselik.

7. Event Handlers (Esem\xE9nykezel\u0151k) \u2013 Reag\xE1lnak a domain esem\xE9nyekre \xE9s v\xE9grehajtj\xE1k a megfelel\u0151 m\u0171veleteket.

Az Autofac haszn\xE1lata a Clean Architecture-ben

Az Autofac egy fejlett Dependency Injection (DI) kont\xE9ner, amely rugalmass\xE1got \xE9s gazdag funkcionalit\xE1st biztos\xEDt.

Telep\xEDt\xE9s:
\`\`\`bash
dotnet add package Autofac
dotnet add package Autofac.Extensions.DependencyInjection
\`\`\`

Integr\xE1ci\xF3 a .NET DI-vel (Program.cs):
\`\`\`csharp
using Autofac;
using Autofac.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    containerBuilder.RegisterModule(new ApplicationModule());
    containerBuilder.RegisterModule(new InfrastructureModule());
});

var app = builder.Build();
app.MapControllers();
app.Run();
\`\`\`

Autofac modulok:

ApplicationModule.cs:
\`\`\`csharp
public class ApplicationModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProcessOrderUseCase>().As<IProcessOrderUseCase>();

        builder.RegisterAssemblyTypes(typeof(OrderPlacedEventHandler).Assembly)
               .AsClosedTypesOf(typeof(INotificationHandler<>))
               .InstancePerLifetimeScope();
    }
}
\`\`\`

InfrastructureModule.cs:
\`\`\`csharp
public class InfrastructureModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<OrderRepository>().As<IOrderRepository>().InstancePerLifetimeScope();
        builder.RegisterType<EmailService>().As<IEmailService>().InstancePerLifetimeScope();
    }
}
\`\`\`

Domain Events \xE9s Event Handlers regisztr\xE1l\xE1sa:
\`\`\`csharp
builder.RegisterAssemblyTypes(typeof(OrderPlacedEventHandler).Assembly)
       .AsClosedTypesOf(typeof(INotificationHandler<>))
       .InstancePerLifetimeScope();
\`\`\`

\xD6sszegz\xE9s
Az Autofac haszn\xE1lata a Clean Architecture-ben nagy rugalmass\xE1got biztos\xEDt a f\xFCgg\u0151s\xE9gek kezel\xE9s\xE9ben, k\xFCl\xF6n\xF6sen t\xF6bb aggreg\xE1tummal, domain szolg\xE1ltat\xE1ssal, esem\xE9nnyel \xE9s esem\xE9nykezel\u0151vel dolgozva. J\xF3l struktur\xE1lhat\xF3k \xE9s modul\xE1risan kezelhet\u0151k a k\xFCl\xF6nb\xF6z\u0151 r\xE9tegek, ami seg\xEDti az alkalmaz\xE1s sk\xE1l\xE1zhat\xF3s\xE1g\xE1t \xE9s karbantarthat\xF3s\xE1g\xE1t.

## .Net 8 Clean Architecture (.NET 8) {#net-8-clean-architecture}

A Clean Architecture Core r\xE9teg\xE9ben tal\xE1lhat\xF3 elemek (Aggregates, ValueObjects, Entities, Domain Services, Domain Exceptions, Domain Events, Event Handlers) mindegyike fontos szerepet j\xE1tszik a rendszer \xFCzleti logik\xE1j\xE1nak szervez\xE9s\xE9ben, k\xFCl\xF6n\xF6sen vertik\xE1lis szeletek haszn\xE1latakor.

1. Aggregates
\`\`\`csharp
public class Order : AggregateRoot
{
    public int Id { get; private set; }
    public Customer Customer { get; private set; }
    public List<OrderItem> Items { get; private set; }

    public void AddItem(OrderItem item) => Items.Add(item);
}
\`\`\`

2. ValueObjects
\`\`\`csharp
public class Address : ValueObject
{
    public string Street { get; private set; }
    public string City { get; private set; }
    public string PostalCode { get; private set; }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        yield return Street;
        yield return City;
        yield return PostalCode;
    }
}
\`\`\`

3. Entities
\`\`\`csharp
public class OrderItem : Entity
{
    public string ProductName { get; private set; }
    public decimal Price { get; private set; }
    public int Quantity { get; private set; }
}
\`\`\`

4. Domain Services
\`\`\`csharp
public class OrderPricingService
{
    public decimal CalculateTotal(Order order)
    {
        return order.Items.Sum(item => item.Price * item.Quantity);
    }
}
\`\`\`

5. Domain Exceptions
\`\`\`csharp
public class OrderNotFoundException : DomainException
{
    public OrderNotFoundException(int orderId)
        : base($"Order with ID {orderId} was not found.") { }
}
\`\`\`

6. Domain Events
\`\`\`csharp
public class OrderPlacedEvent : IDomainEvent
{
    public int OrderId { get; }
    public OrderPlacedEvent(int orderId) => OrderId = orderId;
}
\`\`\`

7. Event Handlers
\`\`\`csharp
public class OrderPlacedEventHandler : INotificationHandler<OrderPlacedEvent>
{
    public Task Handle(OrderPlacedEvent notification, CancellationToken cancellationToken)
    {
        Console.WriteLine($"Order {notification.OrderId} has been placed.");
        return Task.CompletedTask;
    }
}
\`\`\`

T\xF6bb vertik\xE1lis szelet eset\xE9n a domain r\xE9tegek strukt\xFAr\xE1ja

Egy e-kereskedelmi rendszerben k\xE9t f\u0151 modul: Orders \xE9s Products, saj\xE1t domain r\xE9szstrukt\xFAr\xE1kkal:
\`\`\`
- src/
  - Core/
    - Orders/
      - Aggregates/Order.cs
      - ValueObjects/Address.cs
      - Entities/OrderItem.cs
      - Events/OrderPlacedEvent.cs
      - Services/OrderPricingService.cs
      - Exceptions/OrderNotFoundException.cs
    - Products/
      - Aggregates/Product.cs
      - ValueObjects/Price.cs
      - Entities/ProductCategory.cs
      - Events/ProductAddedEvent.cs
      - Services/ProductService.cs
      - Exceptions/ProductNotFoundException.cs
\`\`\`

Strukt\xFAra jellemz\u0151i
1. Szepar\xE1ci\xF3: minden vertik\xE1lis szelet saj\xE1t domain logik\xE1val rendelkezik.
2. Aggreg\xE1tumok k\xFCl\xF6nv\xE1laszt\xE1sa modulonk\xE9nt.
3. Modul-specifikus domain esem\xE9nyek.
4. F\xFCggetlen domain szolg\xE1ltat\xE1sok, amelyek csak a saj\xE1t moduljukkal kapcsolatos logik\xE1t kezelnek.

## .Net Core Clean Architecture Infra Web stb (.NET Core 1.0+) {#net-core-clean-architecture-infra-web-stb}

A .NET 8 Clean Architecture egy j\xF3l struktur\xE1lt r\xE9tegezett architekt\xFAra, amely k\xFCl\xF6nv\xE1lasztja az \xFCzleti logik\xE1t a technikai r\xE9szletekt\u0151l \xE9s az input/output fel\xFClett\u0151l.

Core r\xE9teg elemei \xE9s szerep\xFCk
Aggregates, ValueObjects, Entities, Domain Services, Domain Exceptions, Domain Events, Event Handlers \u2013 ugyanazok a fogalmak, mint fentebb: az adatkonzisztencia, az \xFCzleti szab\xE1lyok \xE9s a domain-esem\xE9nykezel\xE9s biztos\xEDt\xE1s\xE1ra szolg\xE1lnak.

T\xF6bbi r\xE9teg \xE9s azok elemei

1. Application Layer (Use Cases) \u2013 Az \xFCzleti logika operat\xEDv, Use Case szint\u0171 megval\xF3s\xEDt\xE1sa; interf\xE9szeket biztos\xEDt a domain szolg\xE1ltat\xE1sok \xE9s az infrastrukt\xFAra k\xF6z\xF6tt.

2. Infrastructure Layer \u2013 Technikai r\xE9szletek: adatb\xE1zis-kezel\xE9s, k\xFCls\u0151 szolg\xE1ltat\xE1sok, t\xE1rol\xE1si mechanizmusok. Repositories, Service Implementations, Database Context.

3. API (Web Layer) \u2013 K\xFCls\u0151 kommunik\xE1ci\xF3s fel\xFClet (REST, gRPC). Controllers, Middlewares.

L\xE1that\xF3s\xE1gi viszonyok
- Core r\xE9teg: nem f\xFCgghet m\xE1s r\xE9tegt\u0151l; mindenki haszn\xE1lhatja.
- Application r\xE9teg: f\xFCgg a Core-t\xF3l, nem ismeri az Infrastructure-t.
- Infrastructure r\xE9teg: implement\xE1lja a Core \xE9s Application interf\xE9szeit.
- API r\xE9teg: az Application r\xE9teget haszn\xE1lja, f\xFCgghet minden m\xE1s r\xE9tegt\u0151l.

T\xF6bb vertik\xE1lis szelet strukt\xFAr\xE1l\xE1sa
\`\`\`
- src/
  - Core/Orders/... , Core/Products/...
  - Application/Orders/UseCases/PlaceOrderUseCase.cs, Interfaces/IOrderRepository.cs
  - Application/Products/UseCases/AddProductUseCase.cs, Interfaces/IProductRepository.cs
  - Infrastructure/Persistence/Orders/OrderRepository.cs, Products/ProductRepository.cs
  - Infrastructure/Services/EmailService.cs
  - API/Controllers/OrdersController.cs, ProductsController.cs
\`\`\`

\xD6sszegz\xE9s
A Core r\xE9teg elemei k\xF6zponti szerepet j\xE1tszanak az \xFCzleti logika megval\xF3s\xEDt\xE1s\xE1ban; az Application, Infrastructure \xE9s API r\xE9tegek k\xFCl\xF6n funkci\xF3kat l\xE1tnak el, biztos\xEDtva a j\xF3l struktur\xE1lt, sk\xE1l\xE1zhat\xF3, karbantarthat\xF3 alkalmaz\xE1st. T\xF6bb vertik\xE1lis szelet eset\xE9n az alkalmaz\xE1s elk\xFCl\xF6n\xEDtett modulokra bonthat\xF3.

## Autofac Benefits {#autofac-benefits}

Mi\xE9rt jobb az Autofac a .NET be\xE9p\xEDtett DI keretrendszer\xE9n\xE9l Clean Architecture eset\xE9n?

1. Gazdagabb funkci\xF3k\xE9szlet: lifetime scope, property injection is t\xE1mogatott (a be\xE9p\xEDtett DI csak constructor injection-t t\xE1mogat).

2. Specifikus komponens felold\xE1s (Keyed Services):
\`\`\`csharp
builder.RegisterType<SqlOrderRepository>().Keyed<IOrderRepository>("sql");
builder.RegisterType<NoSqlOrderRepository>().Keyed<IOrderRepository>("nosql");

var container = builder.Build();
var sqlRepository = container.ResolveKeyed<IOrderRepository>("sql");
\`\`\`

3. Interceptors \xE9s AOP t\xE1mogat\xE1s nat\xEDvan (logol\xE1s, tranzakci\xF3kezel\xE9s, cache-el\xE9s).

4. Modularit\xE1s \xE9s b\u0151v\xEDthet\u0151s\xE9g:
\`\`\`csharp
public class ApplicationModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        builder.RegisterType<ProcessOrderUseCase>().As<IProcessOrderUseCase>();
        builder.RegisterType<OrderRepository>().As<IOrderRepository>();
    }
}
\`\`\`

5. Dynamic Assembly Scanning:
\`\`\`csharp
builder.RegisterAssemblyTypes(typeof(ProcessOrderUseCase).Assembly)
       .AsImplementedInterfaces();
\`\`\`

6. K\xFCl\xF6nb\xF6z\u0151 \xE9letciklusok pontos kezel\xE9se (pl. per-lifetime-scope).

7. Integr\xE1ci\xF3 m\xE1s eszk\xF6z\xF6kkel (MediatR, Quartz stb.).

\xD6sszegz\xE9s
Rugalmass\xE1g (Keyed Services, interceptorok, fejlett \xE9letcikluskezel\xE9s), modularit\xE1s (modulalap\xFA regisztr\xE1ci\xF3) \xE9s cross-cutting concerns kezel\xE9se (AOP) teszi az Autofacot vonz\xF3v\xE1 nagyobb Clean Architecture projektekhez, m\xEDg egyszer\u0171bb alkalmaz\xE1sokhoz a be\xE9p\xEDtett DI is elegend\u0151 lehet.

## .Net Clean Architecture Essence {#net-clean-architecture-essence}

A Clean Architecture Robert C. Martin (Uncle Bob) \xE1ltal bevezetett architekt\xFAra, amelynek c\xE9lja modul\xE1ris, karbantarthat\xF3, tesztelhet\u0151 szoftver fel\xE9p\xEDt\xE9se. K\xF6veti a Dependency Rule-t: a k\xFCls\u0151 r\xE9tegek soha nem f\xFCgghetnek a bels\u0151 r\xE9tegekt\u0151l.

1. Domain Layer (\xDCzleti logika)
\`\`\`csharp
namespace MyApp.Domain.Entities
{
    public class Order
    {
        public int OrderId { get; private set; }
        public Customer Customer { get; private set; }
        public List<OrderItem> Items { get; private set; }
        public decimal TotalAmount => Items.Sum(item => item.Price * item.Quantity);

        public Order(int orderId, Customer customer)
        {
            OrderId = orderId;
            Customer = customer;
            Items = new List<OrderItem>();
        }

        public void AddItem(OrderItem item) => Items.Add(item);
    }

    public class OrderItem
    {
        public string ProductName { get; private set; }
        public decimal Price { get; private set; }
        public int Quantity { get; private set; }

        public OrderItem(string productName, decimal price, int quantity)
        {
            ProductName = productName;
            Price = price;
            Quantity = quantity;
        }
    }

    public class Customer
    {
        public string Name { get; private set; }
        public string Email { get; private set; }

        public Customer(string name, string email)
        {
            Name = name;
            Email = email;
        }
    }
}
\`\`\`

2. Application Layer (Use Case-ek)
\`\`\`csharp
namespace MyApp.Application.UseCases
{
    public class ProcessOrderUseCase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IEmailService _emailService;

        public ProcessOrderUseCase(IOrderRepository orderRepository, IEmailService emailService)
        {
            _orderRepository = orderRepository;
            _emailService = emailService;
        }

        public void Execute(int orderId)
        {
            var order = _orderRepository.GetOrderById(orderId);
            if (order == null) throw new Exception("Order not found");

            if (order.TotalAmount > 0)
            {
                _emailService.SendOrderConfirmation(order.Customer.Email);
                _orderRepository.MarkAsProcessed(order);
            }
        }
    }
}
\`\`\`

3. Infrastructure Layer
\`\`\`csharp
using MyApp.Domain.Entities;
using MyApp.Domain.Repositories;

namespace MyApp.Infrastructure.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public OrderRepository(ApplicationDbContext dbContext) => _dbContext = dbContext;

        public Order GetOrderById(int orderId) =>
            _dbContext.Orders.Include(o => o.Items).FirstOrDefault(o => o.OrderId == orderId);

        public void MarkAsProcessed(Order order)
        {
            order.MarkAsProcessed();
            _dbContext.SaveChanges();
        }
    }
}
\`\`\`
\`\`\`csharp
namespace MyApp.Infrastructure.Services
{
    public class EmailService : IEmailService
    {
        public void SendOrderConfirmation(string email) { /* SMTP k\xFCld\xE9s */ }
    }
}
\`\`\`

4. API Layer
\`\`\`csharp
using Microsoft.AspNetCore.Mvc;
using MyApp.Application.UseCases;

namespace MyApp.API.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        private readonly ProcessOrderUseCase _processOrderUseCase;
        public OrderController(ProcessOrderUseCase processOrderUseCase) => _processOrderUseCase = processOrderUseCase;

        [HttpPost("{orderId}/process")]
        public IActionResult ProcessOrder(int orderId)
        {
            try
            {
                _processOrderUseCase.Execute(orderId);
                return Ok("Order processed successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
\`\`\`

## Bounded Context {#bounded-context}

*A taktikai \xE9p\xEDt\u0151elemek (aggreg\xE1tum, value object, guard clause, domain service) a "DDD taktikai \xE9p\xEDt\u0151elemek" fejezetben.*

A Bounded Context (Domain-Driven Design alapelv) eset\xE9n minden context egy k\xFCl\xF6n\xE1ll\xF3 \xFCzleti logik\xE1t vagy folyamatot k\xE9pvisel, explicit hat\xE1rokkal.

1. ACL (Anti-Corruption Layer) \u2013 biztos\xEDtja, hogy a k\xFCls\u0151 rendszerek/m\xE1s bounded context-ek modelljei ne "szennyezz\xE9k be" a bels\u0151 domaint; a konverzi\xF3s logika az Infrastructure r\xE9tegben tal\xE1lhat\xF3.

2. API \u2013 k\xFCls\u0151 interf\xE9sz (REST/GraphQL); csak az Application Services r\xE9teget l\xE1tja.

3. Infrastructure \u2013 technikai megval\xF3s\xEDt\xE1sok (adatb\xE1zis, k\xFCls\u0151 szolg\xE1ltat\xE1sok); a Domain/Application interf\xE9szeit implement\xE1lja.

4. Entities \u2013 csak a Domain \xE9s Application Services r\xE9tegek l\xE1thatj\xE1k.

5. Value Objects \u2013 csak a Domain r\xE9tegen bel\xFCl \xE9rhet\u0151k el.

6. Aggregates \u2013 csak a Domain \xE9s Application Services r\xE9tegek l\xE1thatj\xE1k.

7. Repositories \u2013 interf\xE9szeik a Domain r\xE9tegben, implement\xE1ci\xF3juk az Infrastructure r\xE9tegben.

8. Factories \u2013 \xF6sszetett aggreg\xE1tumok/entit\xE1sok l\xE9trehoz\xE1si logik\xE1ja; a Domain r\xE9sze, de az Infrastructure is haszn\xE1lhatja.

9. Application Services \u2013 domain logik\xE1t tesz el\xE9rhet\u0151v\xE9 szolg\xE1ltat\xE1sok form\xE1j\xE1ban; hozz\xE1f\xE9r a Domain-hez, de nem l\xE1tja k\xF6zvetlen\xFCl az Infrastructure-t.

10. Interfaces Adapters \u2013 DTO-t alak\xEDtanak domain entit\xE1ss\xE1; API \xE9s Application Services r\xE9tegek haszn\xE1lj\xE1k.

L\xE1that\xF3s\xE1gi viszonyok \xF6sszefoglal\xE1sa
1. API: l\xE1tja az Application Services-t; nem l\xE1tja k\xF6zvetlen\xFCl a Domain-t, Infrastructure-t.
2. Application Services: l\xE1tja a Domain-t, Repositories interf\xE9szeket; nem l\xE1tja k\xF6zvetlen\xFCl az Infrastructure implement\xE1ci\xF3t.
3. Domain: l\xE1tja az Entities, Value Objects, Aggregates, Repositories interf\xE9szeket, Factories-t; nem l\xE1tja az Infrastructure implement\xE1ci\xF3t.
4. Infrastructure: l\xE1tja a Repositories/Factories interf\xE9szeket; nem l\xE1tja k\xF6zvetlen\xFCl a Domain-t vagy Application Services-t.
5. ACL: l\xE1tja az Infrastructure-t, konvert\xE1lja a k\xFCls\u0151 adatokat.

A c\xE9l, hogy az \xFCzleti logika (Domain) \xE9s a technikai megval\xF3s\xEDt\xE1s (Infrastructure) teljesen elk\xFCl\xF6n\xFClj\xF6n, minden r\xE9teg csak azokkal kommunik\xE1ljon, amelyekre t\xE9nylegesen sz\xFCks\xE9ge van.

## Hexagonal Onion Clean Architectures {#hexagonal-onion-clean-architectures}

Mindh\xE1rom megk\xF6zel\xEDt\xE9s a dom\xE9n logika \xE9s a technikai r\xE9szletek k\xFCl\xF6nv\xE1laszt\xE1s\xE1ra, a k\xFCls\u0151 infrastrukt\xFAr\xE1t\xF3l val\xF3 f\xFCggetlens\xE9gre \xE9s r\xE9tegez\xE9sre \xE9p\xEDt.

1. Hexagonal Architecture (Ports and Adapters) \u2013 Dr. Alistair Cockburn ([hivatkoz\xE1s](https://alistair.cockburn.us/hexagonal-architecture))
Fel\xE9p\xEDt\xE9s: a dom\xE9n logika k\xF6z\xE9pen, "portok" defini\xE1lj\xE1k az interf\xE9szeket, "adapterek" implement\xE1lj\xE1k \u0151ket.
El\u0151ny\xF6k: kiv\xE1l\xF3 tesztelhet\u0151s\xE9g, technol\xF3giai f\xFCggetlens\xE9g, rugalmass\xE1g.
H\xE1tr\xE1nyok: t\xFAlkomplik\xE1lt lehet kisebb projektekn\xE9l, sok interf\xE9sz/adapter.

2. Onion Architecture \u2013 Jeffrey Palermo ([hivatkoz\xE1s](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/))
Fel\xE9p\xEDt\xE9s: t\xF6bb r\xE9teg\u0171, legbel\xFCl a dom\xE9n modellek, kifel\xE9 haladva repository-k, UI, alkalmaz\xE1si szolg\xE1ltat\xE1sok; a k\xFCls\u0151 r\xE9tegek csak a bels\u0151kre t\xE1maszkodhatnak.
El\u0151ny\xF6k: f\xF3kusz a dom\xE9n logik\xE1n, SOLID elvek, k\xF6nnyen tesztelhet\u0151.
H\xE1tr\xE1nyok: bonyolultabb lehet sok r\xE9teggel.

3. Clean Architecture
Fel\xE9p\xEDt\xE9s: dom\xE9n, use case-ek, felhaszn\xE1l\xF3i interf\xE9sz, adatb\xE1zis; a bels\u0151 r\xE9tegek teljesen f\xFCggetlenek a k\xFCls\u0151kt\u0151l; a f\xFCgg\u0151s\xE9gek csak a composition rootn\xE1l ker\xFClnek befecskendez\xE9sre.
El\u0151ny\xF6k: rugalmass\xE1g, tesztelhet\u0151s\xE9g, k\xF6nnyen cser\xE9lhet\u0151 infrastrukt\xFAra.
H\xE1tr\xE1nyok: hosszabb fejleszt\xE9si id\u0151, t\xFAlzottan bonyolult lehet kisebb projektekn\xE9l.

\xD6sszefoglal\xE1s
A Hexagonal Architecture adapterekkel dolgozik, az Onion Architecture r\xE9tegeket alkalmaz, a Clean Architecture a r\xE9tegez\xE9st \xE9s az use case-eket hangs\xFAlyozza. Mindegyik j\xF3l haszn\xE1lhat\xF3 modern alkalmaz\xE1sokban, ha a karbantarthat\xF3s\xE1g \xE9s technol\xF3giai f\xFCggetlens\xE9g fontos.

## Vertical sliced code Organisation pattern {#vertical-sliced-code-organisation-pattern}

Eredeti forr\xE1s: [Jimmy Bogard \u2013 Vertical Slice Architecture](https://www.jimmybogard.com/vertical-slice-architecture/)

A vertik\xE1lisan szeletelt k\xF3d szervez\xE9si minta (Vertical Slice Architecture) l\xE9nyege: ne r\xE9tegek szerint (Controllers, Services, Repositories) rendezd a k\xF3dot, hanem funkci\xF3k szerint (Account/Create, Account/Delete, Order/GetDetails). \xCDgy egy adott funkci\xF3hoz tartoz\xF3 minden k\xF3dr\xE9szlet (API, valid\xE1ci\xF3, handler, domain logika) egy helyen van.

## Microsoft eShopOnContainers https://learn.microsoft.com/dotnet/architecture/microservices/ {#microsoft-eshoponcontainers}

1. Milyen architekt\xFAr\xE1t val\xF3s\xEDt meg?
T\xF6bbf\xE9le architekt\xFAra-elvet kombin\xE1l: els\u0151sorban Clean Architecture (r\xE9szben Onion Architecture) elveit k\xF6veti, mik\xF6zben a mikroszolg\xE1ltat\xE1sok miatt a Bounded Context / DDD koncepci\xF3 is hangs\xFAlyos.

2. R\xE9szei \xE9s funkcionalit\xE1suk
- Catalog API: term\xE9kkatal\xF3gus kezel\xE9se, keres\xE9s, kategoriz\xE1l\xE1s.
- Basket API: felhaszn\xE1l\xF3i kos\xE1r kezel\xE9se.
- Ordering API: v\xE1s\xE1rl\xE1si folyamat \xE9s rendel\xE9sek kezel\xE9se.
- Identity API: hiteles\xEDt\xE9s \xE9s jogosults\xE1gkezel\xE9s (a r\xE9gi referenciaapp **IdentityServer 4**-et haszn\xE1lt; IS4 EOL \u2014 mai stack: Duende IdentityServer, Keycloak vagy Entra ID, l\xE1sd a vonatkoz\xF3 fejezeteket).
- Payment API: fizet\xE9si tranzakci\xF3k feldolgoz\xE1sa.
- Shipping API: sz\xE1ll\xEDt\xE1si folyamatok, nyomon k\xF6vet\xE9s.
- Notification API: \xFCgyf\xE9l \xE9rtes\xEDt\xE9sek (email/push).

3. Technol\xF3gi\xE1k
.NET 6/7, Docker, Kubernetes, RabbitMQ, gRPC, SQL Server \xE9s MongoDB, Azure Service Bus, Swagger/OpenAPI.

4. Egyes r\xE9szek m\u0171k\xF6d\xE9se
Minden API a saj\xE1t domainj\xE9hez tartoz\xF3 funkci\xF3kat kezeli, saj\xE1t adatb\xE1zissal.

5. DDD / Bounded Context
Minden mikroszolg\xE1ltat\xE1s egy-egy bounded contexthez kapcsol\xF3dik, saj\xE1t adatb\xE1zissal, elker\xFClve a k\xF6zvetlen adatb\xE1zisk\xF6zi kommunik\xE1ci\xF3t.

6. Szepar\xE1l\xE1si m\xF3dszer
Vertik\xE1lis szepar\xE1ci\xF3: minden mikroszolg\xE1ltat\xE1s \xF6n\xE1ll\xF3, teljes felel\u0151ss\xE9g\u0171 vertik\xE1lis szelet.

7. L\xE9p\xE9sek az eShopOnContainers elk\xE9sz\xEDt\xE9s\xE9hez
1. Projekt l\xE9trehoz\xE1sa \xE9s architekt\xFAra megtervez\xE9se (Bounded Context-ek).
2. Mikroszolg\xE1ltat\xE1sok l\xE9trehoz\xE1sa (Catalog, Basket, Ordering stb.).
3. Kont\xE9neriz\xE1l\xE1s Dockerrel (Dockerfile + docker-compose.yml).
4. Esem\xE9nyalap\xFA kommunik\xE1ci\xF3 (RabbitMQ / Azure Service Bus).
5. Adatb\xE1zis kezel\xE9se (k\xFCl\xF6n adatb\xE1zis szolg\xE1ltat\xE1sonk\xE9nt, EF Core migr\xE1ci\xF3k).
6. Biztons\xE1g \xE9s hiteles\xEDt\xE9s (historikusan IdentityServer 4; ma Duende / Keycloak / Entra, OAuth2, OpenID Connect).
7. Kont\xE9ner menedzsment Kubernetes-szel.
8. CI/CD be\xE1ll\xEDt\xE1sa (GitHub Actions, Azure DevOps).
9. Monitoring \xE9s logol\xE1s (Prometheus, Grafana, ELK stack).

## .Net Reference Application Comparison https://learn.microsoft.com/dotnet/architecture/ {#net-reference-application-comparison}

Steve Smith Clean Architecture (ardalis/CleanArchitecture)
- Architekt\xFAra: szorosan Clean Architecture, monolitikus, r\xE9tegek interf\xE9szeken/DI-n kereszt\xFCl.
- Technol\xF3gi\xE1k: ASP.NET Core, EF Core, MediatR, XUnit, Moq.
- Szepar\xE1l\xE1s: vertik\xE1lis, de monolitikus fut\xE1s.
- Bounded Context: DDD elemek jelen vannak, de nincsenek elk\xFCl\xF6n\xEDtett bounded context-ek.

Milan Jovanovic Clean Architecture
- Architekt\xFAra: Clean Architecture finom\xEDt\xE1ssal, use case-alap\xFA Application r\xE9teg.
- Technol\xF3gi\xE1k: ASP.NET Core, EF Core, FluentValidation, Serilog, AutoMapper, MediatR (CQRS).
- Szepar\xE1l\xE1s: vertik\xE1lis.
- Bounded Context: DDD elemek jelen, de nem teljesen elk\xFCl\xF6n\xEDtett kontextusok.

**Microsoft eShopOnContainers**
- Architekt\xFAra: mikroszolg\xE1ltat\xE1s-alap\xFA, elosztott, event-driven.
- Technol\xF3gi\xE1k: .NET Core, Docker, Kubernetes, RabbitMQ, gRPC, SQL Server/MongoDB, Azure Service Bus, IdentityServer 4 (historikus; ma Duende/Keycloak/Entra).
- Szepar\xE1l\xE1s: vertik\xE1lis, teljesen elk\xFCl\xF6n\xEDtett szolg\xE1ltat\xE1sok.
- Bounded Context: minden mikroszolg\xE1ltat\xE1s egy bounded context, szorosan DDD-alap\xFA.

M\u0171k\xF6d\xE9s
Az els\u0151 k\xE9t referenciaalkalmaz\xE1s monolitikusan fut, r\xE9tegek interf\xE9szeken kommunik\xE1lnak; az eShopOnContainers k\xFCl\xF6n\xE1ll\xF3 mikroszolg\xE1ltat\xE1sokb\xF3l \xE1ll, amelyek \xFCzenetk\xF6zvet\xEDt\u0151k\xF6n \xE9s HTTP/gRPC-n kommunik\xE1lnak.

## CQRS Command and Query responsibility Segregation by Greg Young 2010 https://learn.microsoft.com/azure/architecture/patterns/cqrs {#cqrs-command-and-query-responsibility-segregation-by-greg-young-2010}

Eredeti forr\xE1s: [Greg Young \u2013 CQRS Documents (PDF)](https://cqrs.wordpress.com/wp-content/uploads/2010/11/cqrs_documents.pdf)

Command \u2260 Query
- Command: \xE1llapotot m\xF3dos\xEDt\xF3 m\u0171velet, nem ad vissza adatot (legfeljebb st\xE1tuszt/azonos\xEDt\xF3t). Pl. CreateOrder, UpdateUserEmail, DeleteAccount.
- Query: csak olvas, visszaadja a k\xE9rt adatokat.

K\xFCl\xF6n modellek a commandhoz \xE9s a queryhez
A parancs oldalon gazdag domain modell (DDD), a lek\xE9rdez\xE9si oldalon egyszer\u0171bb, olvas\xE1sra optimaliz\xE1lt modell (DTO, projection).

Fejlett esetben k\xFCl\xF6n adatforr\xE1sok is lehetnek (pl. Event Sourcing + Read Model Projection).

El\u0151ny\xF6k: egyszer\u0171bb modellek, jobb sk\xE1l\xE1zhat\xF3s\xE1g (olvas\xE1si oldal k\xFCl\xF6n optimaliz\xE1lhat\xF3, pl. cache, NoSQL), tiszt\xE1bb felel\u0151ss\xE9g (command: gazdag domain modell, query: DTO/LINQ/SQL View).

## MediatR {#mediatr}

*Verzi\xF3: MediatR: .NET Standard 2.0+; a **13.0** \xF3ta v\xE1ltozott licencmodell (12.x \xE9s kor\xE1bbi: Apache 2.0, Lucky Penny dual license) \u2013 alternat\xEDva a Wolverine (l\xE1sd a vonatkoz\xF3 fejezetet).*

A MediatR a mediator pattern implement\xE1ci\xF3ja .NET-ben, elker\xFClve az er\u0151s f\xFCgg\u0151s\xE9geket a komponensek k\xF6z\xF6tt, k\xF6zvet\xEDt\u0151k\xE9nt a k\xE9r\xE9sek (requests) \xE9s kezel\u0151ik (handlers) k\xF6z\xF6tt. K\xFCl\xF6n\xF6sen hasznos CQRS implement\xE1l\xE1s\xE1hoz.

El\u0151nyei: laza csatol\xE1s, Single Responsibility Principle, egyszer\u0171s\xE9g.

Telep\xEDt\xE9s:
\`\`\`bash
dotnet add package MediatR
# A MediatR.Extensions.Microsoft.DependencyInjection csomag a MediatR 12 \xF3ta megsz\u0171nt,
# a DI regisztr\xE1ci\xF3 a f\u0151 csomag r\xE9sze.
\`\`\`

Regisztr\xE1ci\xF3 (Program.cs):
\`\`\`csharp
using MediatR;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
// MediatR 12+ szintaxis (a r\xE9gi AddMediatR(Assembly) t\xFAlterhel\xE9s megsz\u0171nt):
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Program>());

var app = builder.Build();
app.UseAuthorization();
app.MapControllers();
app.Run();
\`\`\`

Query \xE9s handler:
\`\`\`csharp
public class GetUserByIdQuery : IRequest<User>
{
    public int Id { get; }
    public GetUserByIdQuery(int id) => Id = id;
}

public class GetUserByIdQueryHandler : IRequestHandler<GetUserByIdQuery, User>
{
    private readonly IUserRepository _userRepository;
    public GetUserByIdQueryHandler(IUserRepository userRepository) => _userRepository = userRepository;

    public async Task<User> Handle(GetUserByIdQuery request, CancellationToken cancellationToken) =>
        await _userRepository.GetByIdAsync(request.Id);
}
\`\`\`

Command \xE9s handler:
\`\`\`csharp
public class CreateUserCommand : IRequest<int>
{
    public string Name { get; }
    public string Email { get; }
    public CreateUserCommand(string name, string email) { Name = name; Email = email; }
}

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, int>
{
    private readonly IUserRepository _userRepository;
    public CreateUserCommandHandler(IUserRepository userRepository) => _userRepository = userRepository;

    public async Task<int> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = new User { Name = request.Name, Email = request.Email };
        await _userRepository.AddAsync(user);
        return user.Id;
    }
}
\`\`\`

Best Practices
1. Egyszer\u0171en tartani a Handlereket \u2013 egy feladatra koncentr\xE1ljanak.
2. Request-ek kis m\xE9ret\u0171 oszt\xE1lyok legyenek, \xFCzleti logika n\xE9lk\xFCl.
3. Separation of Concerns \u2013 illeszkedik a vertik\xE1lis szeletel\xE9shez \xE9s a CQRS-hez.
4. Middleware haszn\xE1lata keresztir\xE1ny\xFA agg\xE1lyokhoz (logging, tranzakci\xF3kezel\xE9s).

Tranzakci\xF3kezel\xE9s middleware a MediatR pipeline-ban (csak **command**-okra k\xF6sd; query-ket ne csomagold DB-tranzakci\xF3ba):
\`\`\`csharp
public class TransactionBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : ICommand
{
    private readonly DbContext _dbContext;
    public TransactionBehavior(DbContext dbContext) => _dbContext = dbContext;

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);
        try
        {
            var response = await next();
            await _dbContext.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);
            return response;
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }
}
\`\`\`

\`ICommand\` itt egy saj\xE1t marker interf\xE9sz a m\xF3dos\xEDt\xF3 k\xE9r\xE9sekhez (pl. \`IRequest<T>\` mellett). Alternat\xEDva: a behaviorben t\xEDpusellen\u0151rz\xE9s / attrib\xFAtum, hogy a query-k kimaradjanak.

Regisztr\xE1ci\xF3:
\`\`\`csharp
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(TransactionBehavior<,>));
\`\`\`

## SOLID {#solid}

A SOLID elvek (Robert C. Martin) a k\xF3d olvashat\xF3s\xE1g\xE1t, karbantarthat\xF3s\xE1g\xE1t, rugalmass\xE1g\xE1t c\xE9lozz\xE1k.

1. Single Responsibility Principle (SRP) \u2013 egy oszt\xE1lynak egyetlen feladata legyen.
\`\`\`csharp
// SRP megs\xE9rt\xE9se
public class UserService
{
    public void RegisterUser(string email, string password)
    {
        SendEmail(email);
        LogToFile("User registered: " + email);
    }
    private void SendEmail(string email) { }
    private void LogToFile(string message) { }
}

// SRP alkalmaz\xE1sa
public class UserService
{
    private readonly IEmailService _emailService;
    private readonly ILogger _logger;

    public UserService(IEmailService emailService, ILogger logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    public void RegisterUser(string email, string password)
    {
        _emailService.SendEmail(email);
        _logger.Log("User registered: " + email);
    }
}
\`\`\`

2. Open/Closed Principle (OCP) \u2013 nyitott b\u0151v\xEDt\xE9sre, z\xE1rt m\xF3dos\xEDt\xE1sra.
\`\`\`csharp
public interface IDiscountStrategy { double GetDiscount(); }

public class RegularCustomerDiscount : IDiscountStrategy { public double GetDiscount() => 0.1; }
public class VIPCustomerDiscount : IDiscountStrategy { public double GetDiscount() => 0.2; }

public class DiscountService
{
    private readonly IDiscountStrategy _discountStrategy;
    public DiscountService(IDiscountStrategy discountStrategy) => _discountStrategy = discountStrategy;
    public double GetDiscount() => _discountStrategy.GetDiscount();
}
\`\`\`

3. Liskov Substitution Principle (LSP) \u2013 lesz\xE1rmazottal helyettes\xEDthet\u0151 az \u0151soszt\xE1ly a viselked\xE9s megv\xE1ltoz\xE1sa n\xE9lk\xFCl.
\`\`\`csharp
public abstract class Shape { public abstract int GetArea(); }

public class Rectangle : Shape
{
    public int Width { get; set; }
    public int Height { get; set; }
    public override int GetArea() => Width * Height;
}

public class Square : Shape
{
    public int Side { get; set; }
    public override int GetArea() => Side * Side;
}
\`\`\`

4. Interface Segregation Principle (ISP) \u2013 kisebb, specializ\xE1lt interf\xE9szek nagy helyett.
\`\`\`csharp
public interface IWorkable { void Work(); }
public interface IFeedable { void Eat(); }

public class Robot : IWorkable { public void Work() { } }
public class Human : IWorkable, IFeedable { public void Work() { } public void Eat() { } }
\`\`\`

5. Dependency Inversion Principle (DIP) \u2013 magas szint\u0171 modulok absztrakci\xF3kt\xF3l f\xFCggjenek, ne konkr\xE9t implement\xE1ci\xF3kt\xF3l.
\`\`\`csharp
public interface ILogger { void Log(string message); }
public class FileLogger : ILogger { public void Log(string message) { } }

public class UserService
{
    private readonly ILogger _logger;
    public UserService(ILogger logger) => _logger = logger;
    public void RegisterUser(string email, string password) => _logger.Log("User registered: " + email);
}
\`\`\`

\xD6sszefoglal\xF3 el\u0151ny\xF6k
Karbantarthat\xF3s\xE1g, modularit\xE1s, tesztelhet\u0151s\xE9g \u2014 k\xFCl\xF6n\xF6sen a DIP \xE9s SRP alkalmaz\xE1s\xE1val.

## Design Patterns {#design-patterns}

A design pattern-ek bev\xE1lt tervez\xE9si megold\xE1sok ism\xE9tl\u0151d\u0151 probl\xE9m\xE1kra. H\xE1rom f\u0151 kateg\xF3ria: Kre\xE1ci\xF3s, Szerkezeti, Viselked\xE9si.

Kre\xE1ci\xF3s mint\xE1k

1. Singleton
\`\`\`csharp
// FIGYELEM: a "_instance ??= new Singleton()" NEM sz\xE1lbiztos \u2013 k\xE9t sz\xE1l egyszerre is
// bel\xE9phet. Sz\xE1lbiztos, lusta megval\xF3s\xEDt\xE1s Lazy<T>-vel:
public sealed class Singleton
{
    private static readonly Lazy<Singleton> _instance =
        new(() => new Singleton(), LazyThreadSafetyMode.ExecutionAndPublication);

    private Singleton() { }
    public static Singleton Instance => _instance.Value;
}

// .NET-ben a leggyakoribb helyes megold\xE1s azonban nem is ez a minta, hanem a DI kont\xE9ner:
// builder.Services.AddSingleton<IMyService, MyService>();
\`\`\`

2. Factory Method
\`\`\`csharp
public interface IProduct { void Operate(); }
public class ConcreteProductA : IProduct { public void Operate() => Console.WriteLine("Product A operation"); }
public class ConcreteProductB : IProduct { public void Operate() => Console.WriteLine("Product B operation"); }

public abstract class Creator { public abstract IProduct FactoryMethod(); }
public class ConcreteCreatorA : Creator { public override IProduct FactoryMethod() => new ConcreteProductA(); }
public class ConcreteCreatorB : Creator { public override IProduct FactoryMethod() => new ConcreteProductB(); }
\`\`\`

3. Abstract Factory
\`\`\`csharp
public interface IGUIFactory { IButton CreateButton(); ICheckbox CreateCheckbox(); }
public class MacOSFactory : IGUIFactory { public IButton CreateButton() => new MacButton(); public ICheckbox CreateCheckbox() => new MacCheckbox(); }
public class WindowsFactory : IGUIFactory { public IButton CreateButton() => new WindowsButton(); public ICheckbox CreateCheckbox() => new WindowsCheckbox(); }
\`\`\`

4. Builder
\`\`\`csharp
public class Car { public string Engine { get; set; } public int Seats { get; set; } }

public interface ICarBuilder { ICarBuilder SetEngine(string engine); ICarBuilder SetSeats(int seats); Car Build(); }

public class CarBuilder : ICarBuilder
{
    private Car _car = new Car();
    public ICarBuilder SetEngine(string engine) { _car.Engine = engine; return this; }
    public ICarBuilder SetSeats(int seats) { _car.Seats = seats; return this; }
    public Car Build() => _car;
}
\`\`\`

5. Prototype
\`\`\`csharp
public class Prototype : ICloneable
{
    public string Name { get; set; }
    public object Clone() => MemberwiseClone();
}
\`\`\`

Szerkezeti mint\xE1k

6. Adapter
\`\`\`csharp
public interface ITarget { void Request(); }
public class Adaptee { public void SpecificRequest() => Console.WriteLine("Specific request"); }
public class Adapter : ITarget
{
    private readonly Adaptee _adaptee;
    public Adapter(Adaptee adaptee) => _adaptee = adaptee;
    public void Request() => _adaptee.SpecificRequest();
}
\`\`\`

7. Bridge
\`\`\`csharp
public interface IImplementation { void Operation(); }
public class ConcreteImplementationA : IImplementation { public void Operation() => Console.WriteLine("Implementation A"); }

public class Abstraction
{
    protected IImplementation _implementation;
    public Abstraction(IImplementation implementation) => _implementation = implementation;
    public virtual void Operation() => _implementation.Operation();
}

public class RefinedAbstraction : Abstraction
{
    public RefinedAbstraction(IImplementation implementation) : base(implementation) { }
    public override void Operation()
    {
        _implementation.Operation();
        Console.WriteLine("Refined abstraction");
    }
}
\`\`\`

8. Composite
\`\`\`csharp
public interface IComponent { void Operation(); }
public class Leaf : IComponent { public void Operation() => Console.WriteLine("Leaf"); }

public class Composite : IComponent
{
    private List<IComponent> _children = new List<IComponent>();
    public void Add(IComponent component) => _children.Add(component);
    public void Operation() { foreach (var child in _children) child.Operation(); }
}
\`\`\`

9. Decorator
\`\`\`csharp
public interface IComponent { void Operation(); }
public class ConcreteComponent : IComponent { public void Operation() => Console.WriteLine("Concrete Component"); }

public class Decorator : IComponent
{
    protected IComponent _component;
    public Decorator(IComponent component) => _component = component;
    public virtual void Operation() => _component.Operation();
}

public class ConcreteDecorator : Decorator
{
    public ConcreteDecorator(IComponent component) : base(component) { }
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("Decorator Added Functionality");
    }
}
\`\`\`

10. Facade
\`\`\`csharp
public class SubsystemA { public void OperationA() => Console.WriteLine("Subsystem A"); }
public class SubsystemB { public void OperationB() => Console.WriteLine("Subsystem B"); }

public class Facade
{
    private SubsystemA _subsystemA = new SubsystemA();
    private SubsystemB _subsystemB = new SubsystemB();
    public void Operation() { _subsystemA.OperationA(); _subsystemB.OperationB(); }
}
\`\`\`

11. Flyweight
\`\`\`csharp
public class Flyweight
{
    public string SharedState { get; }
    public Flyweight(string sharedState) => SharedState = sharedState;
    public void Operation(string uniqueState) => Console.WriteLine($"SharedState: {SharedState}, UniqueState: {uniqueState}");
}

public class FlyweightFactory
{
    private Dictionary<string, Flyweight> _flyweights = new Dictionary<string, Flyweight>();
    public Flyweight GetFlyweight(string sharedState)
    {
        if (!_flyweights.ContainsKey(sharedState)) _flyweights[sharedState] = new Flyweight(sharedState);
        return _flyweights[sharedState];
    }
}
\`\`\`

Viselked\xE9si mint\xE1k

12. Chain of Responsibility
\`\`\`csharp
public abstract class Handler
{
    protected Handler _nextHandler;
    public void SetNext(Handler handler) => _nextHandler = handler;
    public virtual void Handle(string request) => _nextHandler?.Handle(request);
}

public class ConcreteHandlerA : Handler
{
    public override void Handle(string request)
    {
        if (request == "A") Console.WriteLine("Handled by A");
        else base.Handle(request);
    }
}
\`\`\`

13. Command
\`\`\`csharp
public interface ICommand { void Execute(); }
public class Light { public void TurnOn() => Console.WriteLine("Light is ON"); public void TurnOff() => Console.WriteLine("Light is OFF"); }

public class TurnOnCommand : ICommand
{
    private Light _light;
    public TurnOnCommand(Light light) => _light = light;
    public void Execute() => _light.TurnOn();
}

public class RemoteControl
{
    private ICommand _command;
    public void SetCommand(ICommand command) => _command = command;
    public void PressButton() => _command.Execute();
}
\`\`\`

14. Interpreter
\`\`\`csharp
public interface IExpression { bool Interpret(string context); }

public class TerminalExpression : IExpression
{
    private string _data;
    public TerminalExpression(string data) => _data = data;
    public bool Interpret(string context) => context.Contains(_data);
}

public class OrExpression : IExpression
{
    private IExpression _expr1, _expr2;
    public OrExpression(IExpression expr1, IExpression expr2) { _expr1 = expr1; _expr2 = expr2; }
    public bool Interpret(string context) => _expr1.Interpret(context) || _expr2.Interpret(context);
}
\`\`\`

15. Iterator
\`\`\`csharp
public interface IIterator { bool HasNext(); object Next(); }

public class ConcreteIterator : IIterator
{
    private List<object> _collection;
    private int _position = 0;
    public ConcreteIterator(List<object> collection) => _collection = collection;
    public bool HasNext() => _position < _collection.Count;
    public object Next() => _collection[_position++];
}
\`\`\`

16. Mediator
\`\`\`csharp
public interface IMediator { void Notify(object sender, string ev); }

public class ConcreteMediator : IMediator
{
    private Component1 _component1;
    private Component2 _component2;
    public ConcreteMediator(Component1 component1, Component2 component2) { _component1 = component1; _component2 = component2; }

    public void Notify(object sender, string ev)
    {
        if (ev == "A") _component2.DoC();
        if (ev == "B") _component1.DoB();
    }
}

public class Component1
{
    private IMediator _mediator;
    public void SetMediator(IMediator mediator) => _mediator = mediator;
    public void DoA() { _mediator.Notify(this, "A"); }
    public void DoB() { }
}

public class Component2
{
    private IMediator _mediator;
    public void SetMediator(IMediator mediator) => _mediator = mediator;
    public void DoC() { }
}
\`\`\`

17. Memento
\`\`\`csharp
public class Memento
{
    public string State { get; }
    public Memento(string state) => State = state;
}

public class Originator
{
    public string State { get; set; }
    public Memento SaveState() => new Memento(State);
    public void RestoreState(Memento memento) => State = memento.State;
}

public class Caretaker
{
    private List<Memento> _mementos = new List<Memento>();
    public void SaveMemento(Memento memento) => _mementos.Add(memento);
    public Memento GetMemento(int index) => _mementos[index];
}
\`\`\`

18. Observer
\`\`\`csharp
public interface IObserver { void Update(string message); }
public class ConcreteObserver : IObserver { public void Update(string message) => Console.WriteLine("Observer notified: " + message); }

public class Subject
{
    private List<IObserver> _observers = new List<IObserver>();
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Detach(IObserver observer) => _observers.Remove(observer);
    public void Notify(string message) { foreach (var observer in _observers) observer.Update(message); }
}
\`\`\`

19. State
\`\`\`csharp
public interface IState { void Handle(Context context); }

public class ConcreteStateA : IState
{
    public void Handle(Context context)
    {
        Console.WriteLine("Handling State A");
        context.SetState(new ConcreteStateB());
    }
}

public class ConcreteStateB : IState { public void Handle(Context context) => Console.WriteLine("Handling State B"); }

public class Context
{
    private IState _state;
    public Context(IState state) => _state = state;
    public void SetState(IState state) => _state = state;
    public void Request() => _state.Handle(this);
}
\`\`\`

20. Strategy
\`\`\`csharp
public interface IStrategy { void Execute(); }
public class ConcreteStrategyA : IStrategy { public void Execute() => Console.WriteLine("Strategy A"); }
public class ConcreteStrategyB : IStrategy { public void Execute() => Console.WriteLine("Strategy B"); }

public class Context
{
    private IStrategy _strategy;
    public void SetStrategy(IStrategy strategy) => _strategy = strategy;
    public void ExecuteStrategy() => _strategy.Execute();
}
\`\`\`

21. Template Method
\`\`\`csharp
public abstract class AbstractClass
{
    public void TemplateMethod() { Step1(); Step2(); }
    protected abstract void Step1();
    protected abstract void Step2();
}

public class ConcreteClassA : AbstractClass
{
    protected override void Step1() => Console.WriteLine("Class A Step1");
    protected override void Step2() => Console.WriteLine("Class A Step2");
}
\`\`\`

22. Visitor
\`\`\`csharp
public interface IElement { void Accept(IVisitor visitor); }
public class ConcreteElementA : IElement { public void Accept(IVisitor visitor) => visitor.VisitConcreteElementA(this); }
public class ConcreteElementB : IElement { public void Accept(IVisitor visitor) => visitor.VisitConcreteElementB(this); }

public interface IVisitor
{
    void VisitConcreteElementA(ConcreteElementA elementA);
    void VisitConcreteElementB(ConcreteElementB elementB);
}

public class ConcreteVisitor : IVisitor
{
    public void VisitConcreteElementA(ConcreteElementA elementA) => Console.WriteLine("Visitor visits Element A");
    public void VisitConcreteElementB(ConcreteElementB elementB) => Console.WriteLine("Visitor visits Element B");
}
\`\`\`

Ezek a mint\xE1k sz\xE9les k\xF6rben alkalmazhat\xF3k a .NET 8 projektekben, \xE9s seg\xEDtenek a k\xF3d struktur\xE1ltabb\xE1, rugalmasabb\xE1 \xE9s \xFAjrafelhaszn\xE1lhat\xF3bb\xE1 t\xE9tel\xE9ben.

## UnitOfWork https://learn.microsoft.com/aspnet/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application {#unitofwork}

A Unit of Work (UoW) mint\xE1zat egy tranzakci\xF3s menedzsment minta, amely biztos\xEDtja, hogy egy munkafolyamat sor\xE1n v\xE9grehajtott \xF6sszes m\u0171velet egy tranzakci\xF3ban legyen kezelve.

Mikor haszn\xE1ljuk?
- T\xF6bb adatb\xE1zism\u0171veletet kell egyszerre, egy tranzakci\xF3ban kezelni.
- T\xF6bb repository haszn\xE1latakor biztos\xEDtani kell az egys\xE9ges tranzakci\xF3t.
- Az adatb\xE1zis-kapcsolat optim\xE1lis kezel\xE9se (minimaliz\xE1lt tranzakci\xF3k \xE9s h\xEDv\xE1sok).

1. IUnitOfWork interf\xE9sz:
\`\`\`csharp
public interface IUnitOfWork : IDisposable
{
    IUserRepository Users { get; }
    IProductRepository Products { get; }
    Task<int> SaveChangesAsync();
}
\`\`\`

2. Repository interf\xE9szek:
\`\`\`csharp
public interface IUserRepository { Task<User> GetByIdAsync(int id); Task AddAsync(User user); }
public interface IProductRepository { Task<Product> GetByIdAsync(int id); Task AddAsync(Product product); }
\`\`\`

3. EF Core alap\xFA implement\xE1ci\xF3:
\`\`\`csharp
public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Product> Products { get; set; }
}

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;
    private IUserRepository _userRepository;
    private IProductRepository _productRepository;

    public UnitOfWork(ApplicationDbContext context) => _context = context;

    public IUserRepository Users => _userRepository ??= new UserRepository(_context);
    public IProductRepository Products => _productRepository ??= new ProductRepository(_context);

    public async Task<int> SaveChangesAsync() => await _context.SaveChangesAsync();
    public void Dispose() => _context.Dispose();
}
\`\`\`

4. Repository-k implement\xE1l\xE1sa:
\`\`\`csharp
public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;
    public UserRepository(ApplicationDbContext context) => _context = context;
    public async Task<User> GetByIdAsync(int id) => await _context.Users.FindAsync(id);
    public async Task AddAsync(User user) => await _context.Users.AddAsync(user);
}

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;
    public ProductRepository(ApplicationDbContext context) => _context = context;
    public async Task<Product> GetByIdAsync(int id) => await _context.Products.FindAsync(id);
    public async Task AddAsync(Product product) => await _context.Products.AddAsync(product);
}
\`\`\`

5. Haszn\xE1lat egy szolg\xE1ltat\xE1sban:
\`\`\`csharp
public class UserService
{
    private readonly IUnitOfWork _unitOfWork;
    public UserService(IUnitOfWork unitOfWork) => _unitOfWork = unitOfWork;

    public async Task RegisterUserAsync(User user, Product product)
    {
        await _unitOfWork.Users.AddAsync(user);
        await _unitOfWork.Products.AddAsync(product);
        await _unitOfWork.SaveChangesAsync();
    }
}
\`\`\`

El\u0151ny\xF6k
1. Tranzakci\xF3s integrit\xE1s \u2013 minden adatb\xE1zism\u0171velet egyetlen tranzakci\xF3ban.
2. K\xF6nnyebb menedzsment \u2013 egy helyen kezelhet\u0151k a repository m\u0171veletek.
3. Tesztelhet\u0151s\xE9g \u2013 k\xF6nnyen mockolhat\xF3.

## Yield (C# 2.0+) https://learn.microsoft.com/dotnet/csharp/language-reference/statements/yield {#yield}

*Verzi\xF3: C# 2.0-t\xF3l (\`yield return\` / \`yield break\`).*

A yield return egy speci\xE1lis kulcssz\xF3, amellyel lusta ki\xE9rt\xE9kel\xE9s\u0171 (lazy evaluation) iter\xE1torokat hozhatunk l\xE9tre. Az elemek egyes\xE9vel ker\xFClnek visszaad\xE1sra a teljes kollekci\xF3 egyszerre t\xF6rt\xE9n\u0151 visszaad\xE1sa helyett, mem\xF3ri\xE1t sp\xF3rolva.

Mikor haszn\xE1ljuk?
1. Lusta ki\xE9rt\xE9kel\xE9s (Lazy Evaluation) \u2013 nagy kollekci\xF3k, adatb\xE1zis-lek\xE9rdez\xE9sek eset\xE9n.
2. T\xF6bb elem egyes\xE9vel val\xF3 visszaad\xE1sa el\u0151re l\xE9trehozott lista n\xE9lk\xFCl.
3. Mem\xF3riahat\xE9konys\xE1g nagy kollekci\xF3kn\xE1l.
4. V\xE9gtelen sorozatok kezel\xE9se (gener\xE1torok).

Egyszer\u0171 iter\xE1tor:
\`\`\`csharp
public static IEnumerable<int> GetNumbers()
{
    yield return 1;
    yield return 2;
    yield return 3;
}
\`\`\`

V\xE9gtelen gener\xE1tor:
\`\`\`csharp
public static IEnumerable<int> GenerateNumbers()
{
    int number = 0;
    while (true) yield return number++;
}
\`\`\`

\xD6sszetett iter\xE1ci\xF3 (bin\xE1ris fa bej\xE1r\xE1s):
\`\`\`csharp
public class TreeNode
{
    public int Value { get; set; }
    public TreeNode Left { get; set; }
    public TreeNode Right { get; set; }
}

public static IEnumerable<int> Traverse(TreeNode node)
{
    if (node == null) yield break;
    foreach (var val in Traverse(node.Left)) yield return val;
    yield return node.Value;
    foreach (var val in Traverse(node.Right)) yield return val;
}
\`\`\`

El\u0151ny\xF6k: mem\xF3riahat\xE9konys\xE1g, egyszer\u0171s\xE9g, lusta ki\xE9rt\xE9kel\xE9s, ami jav\xEDtja a teljes\xEDtm\xE9nyt nagy adathalmazokn\xE1l vagy v\xE9gtelen sorozatokn\xE1l.

## Covariance Contravariance (C# 4.0+) https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/covariance-contravariance/ {#covariance-contravariance}

*Verzi\xF3: C# 4.0-t\xF3l (generikus \`in\`/\`out\` variancia).*

A covariance \xE9s contravariance a t\xEDpusparam\xE9terek rugalmas kezel\xE9s\xE9t teszik lehet\u0151v\xE9 generikus interf\xE9szek \xE9s deleg\xE1ltak eset\xE9n \xF6r\xF6kl\xE9si hierarchi\xE1ban.

1. Covariance \u2013 lehet\u0151v\xE9 teszi, hogy egy \xE1ltal\xE1nos t\xEDpusb\xF3l sz\xE1rmaz\xF3 t\xEDpusparam\xE9tert egy sz\xE1rmaztatott t\xEDpus\xFA objektummal helyettes\xEDts\xFCnk (kimeneti t\xEDpusok, out kulcssz\xF3).

\`\`\`csharp
public class Animal { public string Name { get; set; } }
public class Dog : Animal { public string Breed { get; set; } }

IEnumerable<Dog> dogs = new List<Dog> { new Dog { Name = "Rex" } };
IEnumerable<Animal> animals = dogs; // Covariance
\`\`\`

2. Contravariance \u2013 bemeneti t\xEDpusok (in kulcssz\xF3); egy \xE1ltal\xE1nosabb t\xEDpus helyett speci\xE1lisabb t\xEDpust fogadhatunk el bemenetk\xE9nt.

\`\`\`csharp
Action<Animal> action = DoSomethingWithAnimal;
Action<Dog> dogAction = action; // Contravariance

void DoSomethingWithAnimal(Animal animal) => Console.WriteLine("Animal: " + animal.Name);
\`\`\`

Covariant interf\xE9sz (out):
\`\`\`csharp
public interface ICovariant<out T> { T GetItem(); }
\`\`\`

Contravariant interf\xE9sz (in):
\`\`\`csharp
public interface IContravariant<in T> { void SetItem(T item); }
\`\`\`

\xD6sszefoglal\xE1s
Covariance kimeneti t\xEDpusokra (pl. IEnumerable<out T>), contravariance bemeneti t\xEDpusokra (pl. Action<in T>, IComparer<in T>) haszn\xE1lhat\xF3, nagy rugalmass\xE1got biztos\xEDtva \xF6r\xF6kl\xE9si hierarchi\xE1ban.

## IEnumerable vs. List (.NET 1.0+ / C# 1.0+) https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1 {#ienumerable-vs-list}

Az IEnumerable<T> gyakran el\u0151ny\xF6sebb a List<T>-hez k\xE9pest: lusta ki\xE9rt\xE9kel\xE9s, teljes\xEDtm\xE9nyoptimaliz\xE1l\xE1s, rugalmass\xE1g, mem\xF3riahaszn\xE1lat.

1. Lusta ki\xE9rt\xE9kel\xE9s \u2013 az IEnumerable m\u0171veletei nem futnak azonnal, csak amikor t\xE9nylegesen iter\xE1lunk.
\`\`\`csharp
public static IEnumerable<int> GetNumbers()
{
    for (int i = 1; i <= 5; i++) yield return i;
}
\`\`\`

2. Mem\xF3riahat\xE9konys\xE1g \u2013 nagy adathalmazokn\xE1l az IEnumerable nem t\xF6lti be egyszerre az \xF6sszes elemet, ellent\xE9tben a List<T>-vel.

3. Teljes\xEDtm\xE9nyoptimaliz\xE1l\xE1s \u2013 sz\u0171r\xE9s (Where) csak akkor fut, amikor iter\xE1lunk rajta:
\`\`\`csharp
var numbers = Enumerable.Range(1, 1000).Where(x => x % 2 == 0); // IEnumerable, lusta
var numbers2 = Enumerable.Range(1, 1000).ToList().Where(x => x % 2 == 0); // List, azonnali
\`\`\`

4. Rugalmass\xE1g \xE9s absztrakci\xF3 \u2013 nem k\xF6t\u0151dik konkr\xE9t kollekci\xF3s t\xEDpushoz, adatb\xE1zisb\xF3l, f\xE1jlb\xF3l, b\xE1rmilyen forr\xE1sb\xF3l sz\xE1rmazhat.

5. Amikor nem sz\xFCks\xE9ges azonnali hozz\xE1f\xE9r\xE9s \u2013 a List<T> indexel\xE9st biztos\xEDt, az IEnumerable nem.

Mikor \xE9rdemes List<T>-t haszn\xE1lni?
- K\xF6zvetlen indexel\xE9sre van sz\xFCks\xE9g.
- Azonnali m\u0171veletekre van sz\xFCks\xE9g.
- T\xF6bbsz\xF6ri bej\xE1r\xE1s sz\xFCks\xE9ges (List<T>-t egyszer t\xF6ltj\xFCk fel, majd \xFAjrahaszn\xE1ljuk).

\xD6sszefoglal\xE1s
Az IEnumerable<T> el\u0151ny\xF6sebb lusta ki\xE9rt\xE9kel\xE9shez \xE9s mem\xF3riahat\xE9konys\xE1ghoz; a List<T> el\u0151ny\xF6sebb, ha indexel\xE9s vagy t\xF6bbsz\xF6ri bej\xE1r\xE1s sz\xFCks\xE9ges.

## Swagger \xE9s Kiota (ASP.NET Core 2.0+ \xB7 Kiota) https://learn.microsoft.com/aspnet/core/tutorials/web-api-help-pages-using-swagger {#swagger-es-kiota}

*Verzi\xF3: Swashbuckle: ASP.NET Core 1.0-t\xF3l; a .NET 9 sablonokban be\xE9p\xEDtett \`Microsoft.AspNetCore.OpenApi\` v\xE1ltja.*

Swagger \u2013 API dokument\xE1ci\xF3, tesztel\xE9s, OpenAPI specifik\xE1ci\xF3 automatikus gener\xE1l\xE1sa.

Kiota \u2013 OpenAPI specifik\xE1ci\xF3b\xF3l automatikusan gener\xE1l kliens k\xF3dot (t\xEDpusbiztos SDK-t) az API-val val\xF3 kommunik\xE1ci\xF3hoz.

Mikor c\xE9lszer\u0171 haszn\xE1lni?

Swagger:
1. API dokument\xE1ci\xF3.
2. Interakt\xEDv API tesztel\xE9s (Swagger UI).
3. Kommunik\xE1ci\xF3 m\xE1s fejleszt\u0151kkel egy univerz\xE1lis OpenAPI specifik\xE1ci\xF3n kereszt\xFCl.

Kiota:
1. Automatikus kliensgener\xE1l\xE1s OpenAPI le\xEDr\xE1sb\xF3l.
2. K\xF3d \xFAjrafelhaszn\xE1l\xE1s t\xF6bb projektben.
3. Gyors fejleszt\xE9s, t\xEDpusbiztos, automatikusan gener\xE1lt k\xF3d.

Swagger telep\xEDt\xE9se \xE9s konfigur\xE1l\xE1sa:
\`\`\`bash
dotnet add package Swashbuckle.AspNetCore
\`\`\`
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1"));
}
app.UseAuthorization();
app.MapControllers();
app.Run();
\`\`\`
El\xE9r\xE9s: http://localhost:5000/swagger

Kiota haszn\xE1lata:
\`\`\`bash
dotnet tool install --global Kiota
kiota generate -d https://example.com/swagger/v1/swagger.json -c MyApiClient -n MyNamespace
\`\`\`
\`\`\`csharp
var apiClient = new MyApiClient(new HttpClient());
var response = await apiClient.SomeEndpoint.GetAsync();
\`\`\`

\xD6sszefoglal\xE1s
Swagger: automatiz\xE1lt API dokument\xE1ci\xF3 \xE9s interakt\xEDv tesztel\xE9s. Kiota: automatikusan gener\xE1lt kliens SDK-k OpenAPI specifik\xE1ci\xF3b\xF3l, amelyek egyszer\u0171s\xEDtik \xE9s gyors\xEDtj\xE1k az API-h\xEDv\xE1sok implement\xE1ci\xF3j\xE1t.

## EF Core Interceptors (EF Core 5.0+ / .NET 5+) https://learn.microsoft.com/ef/core/logging-events-diagnostics/interceptors {#ef-core-interceptors}

*A soft delete interceptor teljes, kaszk\xE1dot is kezel\u0151 v\xE1ltozata a "Logikai t\xF6rl\xE9s (soft delete) EF Core-ban" fejezetben.*

*Verzi\xF3: EF Core 3.0-t\xF3l (\`DbCommandInterceptor\`); \`SaveChangesInterceptor\`: EF Core 5.0-t\xF3l.*

Az EF Core Interceptor lehet\u0151v\xE9 teszi, hogy k\xF6zvetlen\xFCl beavatkozzunk az EF Core folyamataiba (SQL parancsok, tranzakci\xF3k, kapcsolatnyit\xE1s/z\xE1r\xE1s, hibafigyel\xE9s).

Mikor c\xE9lszer\u0171 haszn\xE1lni?
1. SQL parancsok logol\xE1sa/m\xF3dos\xEDt\xE1sa.
2. Glob\xE1lis audit\xE1l\xE1s.
3. Tranzakci\xF3k monitoroz\xE1sa.
4. Glob\xE1lis szab\xE1lyok betartat\xE1sa (pl. soft delete, multi-tenant).
5. Hibakezel\xE9s.
6. Query teljes\xEDtm\xE9ny m\xE9r\xE9s.

El\u0151ny\xF6k: k\xF6zponti vez\xE9rl\xE9s, hat\xE9kony audit\xE1l\xE1s, elv\xE1laszt\xE1s az \xFCzleti logik\xE1t\xF3l, automatikus m\u0171veletek.
H\xE1tr\xE1nyok: teljes\xEDtm\xE9ny overhead, komplexit\xE1s, potenci\xE1lis vissza\xE9l\xE9sek.

1. SQL parancsok logol\xE1sa:
\`\`\`csharp
public class CommandInterceptor : DbCommandInterceptor
{
    public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)
    {
        Console.WriteLine($"Executing command: {command.CommandText}");
        return base.NonQueryExecuting(command, eventData, result);
    }
}
\`\`\`

2. Glob\xE1lis audit\xE1l\xE1s (Soft Delete):
\`\`\`csharp
// FONTOS: a soft delete-et a ment\xE9s EL\u0150TT (SavingChanges) kell elv\xE9gezni \u2013 a SavedChanges
// m\xE1r a t\xF6rl\xE9s v\xE9grehajt\xE1sa ut\xE1n fut, ott az \xE1llapot \xE1t\xEDr\xE1sa hat\xE1stalan.
public class SoftDeleteInterceptor : SaveChangesInterceptor
{
    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
    {
        if (eventData.Context is null) return base.SavingChangesAsync(eventData, result, cancellationToken);

        foreach (var entry in eventData.Context.ChangeTracker.Entries<ISoftDelete>()
                     .Where(e => e.State == EntityState.Deleted))
        {
            entry.State = EntityState.Modified;
            entry.Entity.IsDeleted = true;
        }

        return base.SavingChangesAsync(eventData, result, cancellationToken);
    }
}
\`\`\`

3. Tranzakci\xF3 napl\xF3z\xE1s:
\`\`\`csharp
public class TransactionInterceptor : DbTransactionInterceptor
{
    public override InterceptionResult TransactionStarting(DbTransaction transaction, TransactionEventData eventData, InterceptionResult result)
    {
        Console.WriteLine($"Transaction started: {eventData.TransactionId}");
        return base.TransactionStarting(transaction, eventData, result);
    }
}
\`\`\`

Regisztr\xE1l\xE1s:
\`\`\`csharp
public class MyDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder
            .UseSqlServer("your_connection_string")
            .AddInterceptors(new CommandInterceptor(), new SoftDeleteInterceptor(), new TransactionInterceptor());
    }
}
\`\`\`

Amire figyelni kell: teljes\xEDtm\xE9ny, tranzakci\xF3s probl\xE9m\xE1k, versenyhelyzetek t\xF6bb interceptor eset\xE9n.

## EF Core Migration Parancsok (EF Core 1.0+) https://learn.microsoft.com/ef/core/managing-schemas/migrations/ {#ef-core-migration-parancsok}

1. dotnet ef migrations add <migration_name> \u2013 \xFAj migr\xE1ci\xF3 l\xE9trehoz\xE1sa.
2. dotnet ef database update \u2013 migr\xE1ci\xF3k alkalmaz\xE1sa az adatb\xE1zisra.
3. dotnet ef migrations remove \u2013 legut\xF3bbi migr\xE1ci\xF3 t\xF6rl\xE9se (csak projektb\u0151l, adatb\xE1zison nem vonja vissza).
4. dotnet ef migrations list \u2013 migr\xE1ci\xF3k list\xE1z\xE1sa.
5. dotnet ef database update <migration_name> \u2013 adatb\xE1zis egy adott migr\xE1ci\xF3 \xE1llapot\xE1ra friss\xEDt\xE9se.
6. dotnet ef database drop --force \u2013 adatb\xE1zis elt\xE1vol\xEDt\xE1sa.
7. dotnet ef dbcontext scaffold "connection_string" Microsoft.EntityFrameworkCore.SqlServer \u2013 DbContext \xE9s entit\xE1sok gener\xE1l\xE1sa megl\xE9v\u0151 adatb\xE1zisb\xF3l.

Folder strukt\xFAra: a Migrations mapp\xE1ban j\xF6nnek l\xE9tre a \`YYYYMMDDHHMMSS_<migration_name>.cs\` (Up/Down met\xF3dusok) \xE9s a \`.Designer.cs\` f\xE1jlok.

P\xE9lda:
\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}
\`\`\`
\`\`\`bash
dotnet ef migrations add AddProductTable
dotnet ef database update
\`\`\`

\xD6sszefoglal\xE1s: a legfontosabb parancsok a projekt gy\xF6k\xE9rk\xF6nyvt\xE1r\xE1ban futtatand\xF3k, ahol a .csproj f\xE1jl tal\xE1lhat\xF3.

## Keycloak {#keykloak}

Keycloak \u2013 ny\xEDlt forr\xE1sk\xF3d\xFA identit\xE1s- \xE9s hozz\xE1f\xE9r\xE9s-kezel\xE9si rendszer (hiteles\xEDt\xE9s, enged\xE9lyez\xE9s, SSO, felhaszn\xE1l\xF3- \xE9s csoportkezel\xE9s).

1. Keycloak futtat\xE1sa Dockerben \u2013 docker-compose.yml Keycloak + PostgreSQL szolg\xE1ltat\xE1sokkal:
\`\`\`yaml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    environment:
      # Keycloak 26-t\xF3l: KC_BOOTSTRAP_ADMIN_USERNAME / KC_BOOTSTRAP_ADMIN_PASSWORD
      - KC_BOOTSTRAP_ADMIN_USERNAME=admin
      - KC_BOOTSTRAP_ADMIN_PASSWORD=admin
      - KC_DB=postgres
      - KC_DB_URL=jdbc:postgresql://postgres:5432/keycloak
      - KC_DB_USERNAME=keycloak
      - KC_DB_PASSWORD=password
      - KC_HOSTNAME=localhost
    ports:
      - 8080:8080
    command: start-dev
    depends_on:
      - postgres
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
\`\`\`
\`\`\`bash
docker-compose up -d
\`\`\`

2. Keycloak be\xE1ll\xEDt\xE1sa \u2013 Admin Console (http://localhost:8080), Realm \xE9s Client l\xE9trehoz\xE1sa (confidential t\xEDpus), Redirect URI be\xE1ll\xEDt\xE1sa.

3. .NET 8 projekt be\xE1ll\xEDt\xE1sa
\`\`\`bash
dotnet add package Microsoft.AspNetCore.Authentication.OpenIdConnect
dotnet add package Microsoft.IdentityModel.Protocols.OpenIdConnect
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
\`\`\`

appsettings.json:
\`\`\`json
{
  "Authentication": {
    "Keycloak": {
      "Authority": "http://localhost:8080/realms/MyAppRealm",
      "ClientId": "my-dotnet-client",
      "ClientSecret": "your-client-secret",
      "CallbackPath": "/signin-oidc",
      "ResponseType": "code",
      "SaveTokens": true,
      "UsePkce": true
    }
  }
}
\`\`\`

Program.cs:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.Authority = builder.Configuration["Authentication:Keycloak:Authority"];
    // Az \`aud\` gyakran NEM a SPA/BFF confidential client id (\`azp\`), hanem az API resource /
    // audience mapper \xE1ltal be\xE1ll\xEDtott \xE9rt\xE9k. ClientId-re \xE1ll\xEDtott Audience gyakori 401 forr\xE1s.
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudiences = new[] { builder.Configuration["Authentication:Keycloak:Audience"] ?? "my-api" },
        ValidateLifetime = true
    };
    options.RequireHttpsMetadata = !builder.Environment.IsDevelopment();
});

builder.Services.AddAuthorization();

var app = builder.Build();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
\`\`\`

V\xE9dett API v\xE9gpont:
\`\`\`csharp
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class SecureController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { message = "This is a secured endpoint!" });
}
\`\`\`

\xD6sszefoglal\xE1s: Keycloak Docker futtat\xE1s \u2192 Realm/Client konfigur\xE1l\xE1s \u2192 .NET projekt hiteles\xEDt\xE9s be\xE1ll\xEDt\xE1sa (OpenID Connect / JWT) \u2192 v\xE9dett API v\xE9gpontok.

## REST API haszn\xE1lata .NET (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/web-api/ {#rest-api-hasznalata-net}

A REST API verzi\xF3z\xE1sa kritikus a stabilit\xE1s \xE9s a kompatibilit\xE1s fenntart\xE1s\xE1hoz.

Projekt l\xE9trehoz\xE1sa:
\`\`\`bash
dotnet new webapi -n MyVersionedApi
cd MyVersionedApi
\`\`\`

API verzi\xF3z\xE1si be\xE1ll\xEDt\xE1sok (Program.cs) \u2014 csomagok: \`Asp.Versioning.Http\`, \`Asp.Versioning.Mvc\`, \`Asp.Versioning.Mvc.ApiExplorer\`:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
})
.AddMvc()
.AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

var app = builder.Build();
app.UseAuthorization();
app.MapControllers();
app.Run();
\`\`\`

Controller v1:
\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("1.0")]
public class ProductsController : ControllerBase
{
    private static List<Product> _products = new List<Product>
    {
        new Product { Id = 1, Name = "Product 1", Price = 10.0M },
        new Product { Id = 2, Name = "Product 2", Price = 20.0M },
    };

    [HttpGet]
    public IActionResult GetAll() => Ok(_products);

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        return product == null ? NotFound() : Ok(product);
    }

    [HttpPost]
    public IActionResult Create(Product product)
    {
        product.Id = _products.Max(p => p.Id) + 1;
        _products.Add(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product product)
    {
        var existingProduct = _products.FirstOrDefault(p => p.Id == id);
        if (existingProduct == null) return NotFound();
        existingProduct.Name = product.Name;
        existingProduct.Price = product.Price;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        if (product == null) return NotFound();
        _products.Remove(product);
        return NoContent();
    }
}
\`\`\`

Controller v2 (\xFAj mez\u0151vel):
\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/products")]
[ApiVersion("2.0")]
public class ProductsV2Controller : ControllerBase
{
    private static List<Product> _products = new List<Product>
    {
        new Product { Id = 1, Name = "Product 1", Price = 10.0M },
    };

    [HttpGet]
    public IActionResult GetAll() => Ok(_products.Select(p => new { p.Id, p.Name, PriceInUSD = p.Price }));
}
\`\`\`

Swagger integr\xE1ci\xF3 verzi\xF3z\xE1ssal (verzi\xF3nk\xE9nt k\xFCl\xF6n dokumentum kell a \`/swagger/v1\` \xE9s \`/v2\` v\xE9gpontokhoz):
\`\`\`bash
dotnet add package Swashbuckle.AspNetCore
dotnet add package Asp.Versioning.Mvc.ApiExplorer
\`\`\`
\`\`\`csharp
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureOptions<ConfigureSwaggerOptions>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        foreach (var description in app.DescribeApiVersions())
        {
            options.SwaggerEndpoint(
                $"/swagger/{description.GroupName}/swagger.json",
                description.GroupName.ToUpperInvariant());
        }
    });
}
\`\`\`
A \`ConfigureSwaggerOptions\` tipikusan \`IApiVersionDescriptionProvider\` alapj\xE1n h\xEDv \`options.SwaggerDoc(...)\`-ot minden API verzi\xF3hoz.

\xD6sszefoglal\xE1s: a verzi\xF3z\xE1s biztos\xEDtja, hogy az API v\xE1ltoztat\xE1sai ne t\xF6rj\xE9k meg a r\xE9gebbi kliensalkalmaz\xE1sokat; a Swagger integr\xE1ci\xF3 megk\xF6nny\xEDti a verzi\xF3k dokument\xE1l\xE1s\xE1t \xE9s tesztel\xE9s\xE9t.

## JOIN left right inner outer in SQL and EF Core LINQ (EF Core 1.0+) https://learn.microsoft.com/ef/core/querying/complex-query-operators {#join-left-right-inner-outer-in-sql-and-ef-core-linq}

1. INNER JOIN \u2013 csak a mindk\xE9t t\xE1bl\xE1ban megtal\xE1lhat\xF3 rekordokat adja vissza.
\`\`\`sql
SELECT p.Name, c.Name
FROM Products p
INNER JOIN Categories c ON p.CategoryId = c.Id;
\`\`\`
\`\`\`csharp
var result = from p in context.Products
             join c in context.Categories on p.CategoryId equals c.Id
             select new { ProductName = p.Name, CategoryName = c.Name };
\`\`\`

2. LEFT JOIN (LEFT OUTER JOIN) \u2013 az \xF6sszes bal oldali sort visszaadja, a jobb oldali hi\xE1nyz\xF3 egyez\xE9seket NULL-lal.
\`\`\`sql
SELECT p.Name, c.Name
FROM Products p
LEFT JOIN Categories c ON p.CategoryId = c.Id;
\`\`\`
\`\`\`csharp
var result = from p in context.Products
             join c in context.Categories on p.CategoryId equals c.Id into productCategories
             from pc in productCategories.DefaultIfEmpty()
             select new { ProductName = p.Name, CategoryName = pc != null ? pc.Name : "No Category" };
\`\`\`

3. RIGHT JOIN (RIGHT OUTER JOIN) \u2013 az \xF6sszes jobb oldali sort visszaadja.
\`\`\`sql
SELECT p.Name, c.Name
FROM Products p
RIGHT JOIN Categories c ON p.CategoryId = c.Id;
\`\`\`
.NET 10 el\u0151tt nincs nat\xEDv \`RightJoin\`; LEFT JOIN-nal, megford\xEDtott t\xE1blasorrenddel \xE9rhet\u0151 el. .NET 10+ / EF Core 10: \`Queryable.RightJoin\` / \`LeftJoin\` (l\xE1sd "LINQ LeftJoin/RightJoin" fejezet).
\`\`\`csharp
var result = from c in context.Categories
             join p in context.Products on c.Id equals p.CategoryId into categoryProducts
             from cp in categoryProducts.DefaultIfEmpty()
             select new { ProductName = cp != null ? cp.Name : "No Product", CategoryName = c.Name };
\`\`\`

4. FULL OUTER JOIN \u2013 mindk\xE9t t\xE1bla \xF6sszes sor\xE1t visszaadja.
\`\`\`sql
SELECT p.Name, c.Name
FROM Products p
FULL OUTER JOIN Categories c ON p.CategoryId = c.Id;
\`\`\`
EF Core-ban tov\xE1bbra sincs nat\xEDv full outer join. Egyszer\u0171 \`left.Union(right)\` **duplik\xE1lja** az egyez\u0151 sorokat; a jobb oldalb\xF3l csak a nem egyez\u0151ket kell uni\xF3zni:
\`\`\`csharp
var leftJoin = from p in context.Products
               join c in context.Categories on p.CategoryId equals c.Id into productCategories
               from pc in productCategories.DefaultIfEmpty()
               select new { ProductName = p.Name, CategoryName = pc != null ? pc.Name : null };

var rightOnly = from c in context.Categories
                join p in context.Products on c.Id equals p.CategoryId into categoryProducts
                from cp in categoryProducts.DefaultIfEmpty()
                where cp == null
                select new { ProductName = (string?)null, CategoryName = c.Name };

var fullOuterJoin = leftJoin.Concat(rightOnly);
\`\`\`

Mikor melyik JOIN t\xEDpus haszn\xE1latos?
- INNER JOIN: csak azok az adatok \xE9rdekesek, amelyek mindk\xE9t t\xE1bl\xE1ban megtal\xE1lhat\xF3k.
- LEFT JOIN: minden sor kell a bal oldali t\xE1bl\xE1b\xF3l, akkor is, ha nincs egyez\xE9s.
- RIGHT JOIN: minden sor kell a jobb oldali t\xE1bl\xE1b\xF3l.
- FULL OUTER JOIN: minden sor kell mindk\xE9t t\xE1bl\xE1b\xF3l, f\xFCggetlen\xFCl az egyez\xE9st\u0151l.

## gRPC service \u2013 gRPC Service l\xE9trehoz\xE1sa .NET 8-ban (.NET Core 3.0+ / .NET 8) https://learn.microsoft.com/aspnet/core/grpc/ {#grpc-service-grpc-service-letrehozasa-net-8-ban}

*Verzi\xF3: gRPC for .NET: .NET Core 3.0-t\xF3l; gRPC JSON transcoding: .NET 7-t\u0151l.*

A gRPC egy nagy teljes\xEDtm\xE9ny\u0171 RPC keretrendszer (Google), nat\xEDv .NET 8 t\xE1mogat\xE1ssal, mikroservice architekt\xFAr\xE1khoz \xE9s nagy teljes\xEDtm\xE9ny\u0171 h\xE1l\xF3zati kommunik\xE1ci\xF3hoz.

El\u0151nyei: nagy teljes\xEDtm\xE9ny (Protobuf), k\xF3dgener\xE1l\xE1s, streaming t\xE1mogat\xE1s, platformf\xFCggetlens\xE9g.
H\xE1tr\xE1nyai: nem t\xE1mogatja nat\xEDvan a b\xF6ng\xE9sz\u0151ket (gRPC-Web sz\xFCks\xE9ges), komplexit\xE1s, kezdeti tanul\xE1si g\xF6rbe.

1. Protobuf f\xE1jl (greet.proto):
\`\`\`proto
syntax = "proto3";
option csharp_namespace = "GrpcDemo";

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest { string name = 1; }
message HelloReply { string message = 1; }
\`\`\`

2. Szerver implement\xE1ci\xF3:
\`\`\`csharp
public class GreeterService : Greeter.GreeterBase
{
    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context) =>
        Task.FromResult(new HelloReply { Message = $"Hello, {request.Name}" });
}
\`\`\`

Program.cs:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddGrpc();
var app = builder.Build();
app.MapGrpcService<GreeterService>();
app.MapGet("/", () => "gRPC endpoint is available");
app.Run();
\`\`\`

3. Kliens l\xE9trehoz\xE1sa:
\`\`\`bash
dotnet add package Grpc.Net.Client
dotnet add package Google.Protobuf
dotnet add package Grpc.Tools
\`\`\`
\`\`\`csharp
var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new Greeter.GreeterClient(channel);
var reply = await client.SayHelloAsync(new HelloRequest { Name = "World" });
Console.WriteLine(reply.Message);
\`\`\`

4. Docker deploy:
\`\`\`dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["GrpcDemo/GrpcDemo.csproj", "GrpcDemo/"]
RUN dotnet restore "GrpcDemo/GrpcDemo.csproj"
COPY . .
WORKDIR "/src/GrpcDemo"
RUN dotnet build "GrpcDemo.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GrpcDemo.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GrpcDemo.dll"]
\`\`\`
\`\`\`bash
docker build -t grpcdemo .
docker run -d -p 5000:8080 grpcdemo
\`\`\`

\xD6sszefoglal\xE1s: projekt l\xE9trehoz\xE1sa \u2192 .proto defin\xEDci\xF3 \u2192 szerver implement\xE1ci\xF3 \u2192 kliens tesztel\xE9s \u2192 Docker release \xE9s deploy.

## xUnit Tesztesetek P\xE9lda {#xunit-tesztesetek-pelda}

L\xE9p\xE9sr\u0151l l\xE9p\xE9sre \xFAtmutat\xF3 xUnit negat\xEDv \xE9s pozit\xEDv tesztek l\xE9trehoz\xE1s\xE1hoz FluentValidation-nal, egy User rekordhoz (Age: 1\u2013150, Name: 4\u2013255 karakter, Gender: Male/Female).

1. Model:
\`\`\`csharp
public record User(int Age, string Name, string Gender);
\`\`\`

2. FluentValidation:
\`\`\`bash
dotnet add package FluentValidation
\`\`\`
\`\`\`csharp
using FluentValidation;

public class UserValidator : AbstractValidator<User>
{
    public UserValidator()
    {
        RuleFor(user => user.Age).InclusiveBetween(1, 150).WithMessage("Age must be between 1 and 150.");
        RuleFor(user => user.Name).NotEmpty().WithMessage("Name is required.")
            .Length(4, 255).WithMessage("Name must be between 4 and 255 characters.");
        RuleFor(user => user.Gender).NotEmpty().WithMessage("Gender is required.")
            .Must(gender => gender == "Male" || gender == "Female").WithMessage("Gender must be 'Male' or 'Female'.");
    }
}
\`\`\`

3. xUnit + FluentValidation.TestHelper:
\`\`\`bash
dotnet add package xunit
dotnet add package FluentValidation.TestHelper
\`\`\`

4. Pozit\xEDv teszt:
\`\`\`csharp
using Xunit;
using FluentValidation.TestHelper;

public class UserValidatorTests
{
    private readonly UserValidator _validator = new();

    [Fact]
    public void Should_Validate_Valid_User()
    {
        var user = new User(30, "John Doe", "Male");
        var result = _validator.TestValidate(user);
        result.ShouldNotHaveAnyValidationErrors();
    }
}
\`\`\`

Negat\xEDv tesztek:
\`\`\`csharp
[Fact]
public void Should_Have_Error_When_Age_Is_Too_Low()
{
    var user = new User(0, "John Doe", "Male");
    var result = _validator.TestValidate(user);
    result.ShouldHaveValidationErrorFor(u => u.Age).WithErrorMessage("Age must be between 1 and 150.");
}

[Fact]
public void Should_Have_Error_When_Name_Is_Empty()
{
    var user = new User(30, "", "Male");
    var result = _validator.TestValidate(user);
    result.ShouldHaveValidationErrorFor(u => u.Name).WithErrorMessage("Name is required.");
}

[Fact]
public void Should_Have_Error_When_Gender_Is_Invalid()
{
    var user = new User(30, "John Doe", "Unknown");
    var result = _validator.TestValidate(user);
    result.ShouldHaveValidationErrorFor(u => u.Gender).WithErrorMessage("Gender must be 'Male' or 'Female'.");
}
\`\`\`

Futtat\xE1s:
\`\`\`bash
dotnet test
\`\`\`

\xD6sszefoglal\xE1s: FluentValidation-t haszn\xE1ltunk a User rekord valid\xE1l\xE1s\xE1ra, xUnit-tal pozit\xEDv \xE9s negat\xEDv teszteket \xEDrtunk, biztos\xEDtva a hib\xE1s bemenetek megfelel\u0151 kezel\xE9s\xE9t.

## IEntityTypeConfiguration (EF Core 1.0+) https://learn.microsoft.com/ef/core/modeling/ {#ientitytypeconfiguration}

Az IEntityTypeConfiguration<TEntity> lehet\u0151v\xE9 teszi az entit\xE1sok konfigur\xE1l\xE1s\xE1t k\xFCl\xF6n oszt\xE1lyban, ahelyett hogy a DbContext-ben adn\xE1nk meg a konfigur\xE1ci\xF3kat \u2014 jav\xEDtja a k\xF3d tisztas\xE1g\xE1t nagyobb projektekben.

\`\`\`csharp
public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");
        builder.HasKey(u => u.Id);
    }
}
\`\`\`

Alkalmaz\xE1s a DbContext-ben:
\`\`\`csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.ApplyConfiguration(new UserConfiguration());
}
\`\`\`

## EF Core Global Filter (EF Core 2.0+) https://learn.microsoft.com/ef/core/querying/filters {#ef-core-global-filter}

*A logikai t\xF6rl\xE9s (soft delete) teljes, \xE9les haszn\xE1latra sz\xE1nt megval\xF3s\xEDt\xE1sa a "Logikai t\xF6rl\xE9s (soft delete) EF Core-ban" fejezetben.*

*Verzi\xF3: EF Core 2.0-t\xF3l (\`HasQueryFilter\`).*

Glob\xE1lis sz\u0171r\u0151vel biztos\xEDthat\xF3, hogy az ILogicalDelete interf\xE9szt implement\xE1l\xF3 entit\xE1sok lek\xE9rdez\xE9sekor csak a DeletedAt == null entit\xE1sok jelenjenek meg.

\`\`\`csharp
public interface ILogicalDelete { DateTime? DeletedAt { get; set; } }

public class Resource : IEntity, ILogicalDelete
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime? DeletedAt { get; set; }
    public ICollection<Person> PersonResources { get; set; } = new List<Person>();
}
\`\`\`

DbContext:
\`\`\`csharp
public class ApplicationDbContext : DbContext
{
    public DbSet<Resource> Resources { get; set; }
    public DbSet<Person> Persons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Resource>().HasQueryFilter(r => !r.DeletedAt.HasValue);
        modelBuilder.Entity<Person>()
            .HasMany(p => p.Resources)
            .WithOne()
            .OnDelete(DeleteBehavior.ClientCascade);
    }
}
\`\`\`

## File-scoped namespace (C# 10 / .NET 6+) https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/namespace {#file-scoped-namespace}

*Verzi\xF3: C# 10-t\u0151l.*

A file-scoped namespace (.NET 6) egyszer\u0171s\xEDtett szintaxist ad: egy namespace utas\xEDt\xE1ssal a teljes f\xE1jlra \xE9rv\xE9nyes n\xE9vt\xE9r defini\xE1lhat\xF3, kevesebb beh\xFAz\xE1ssal.

\`\`\`csharp
namespace MyNamespace;

public class MyClass { }
\`\`\`

El\u0151ny\xF6k: egyszer\u0171bb szintaxis, cs\xF6kkentett k\xF3dm\xE9lys\xE9g, jobb olvashat\xF3s\xE1g \xE9s karbantarthat\xF3s\xE1g nagyobb, modul\xE1ris projektekn\xE9l.

## EF Core Joins (EF Core 1.0+) https://learn.microsoft.com/ef/core/querying/complex-query-operators {#ef-core-joins}

Join t\xEDpusok, p\xE9ld\xE1k \xE9s teljes\xEDtm\xE9nybeli buktat\xF3k EF Core 8-ban.

1. Inner Join:
\`\`\`csharp
var query = from a in context.TableA
            join b in context.TableB on a.Id equals b.TableAId
            select new { a, b };
\`\`\`
\`\`\`sql
SELECT * FROM TableA a INNER JOIN TableB b ON a.Id = b.TableAId;
\`\`\`

2. Left Join:
\`\`\`csharp
var query = from a in context.TableA
            join b in context.TableB on a.Id equals b.TableAId into ab
            from b in ab.DefaultIfEmpty()
            select new { a, b };
\`\`\`
\`\`\`sql
SELECT * FROM TableA a LEFT JOIN TableB b ON a.Id = b.TableAId;
\`\`\`

3. Cross Join \u2013 Cartesian product, \xE1ltal\xE1ban elker\xFClend\u0151:
\`\`\`csharp
var query = from a in context.TableA
            from b in context.TableB
            select new { a, b };
\`\`\`
\`\`\`sql
SELECT * FROM TableA, TableB;
\`\`\`

4. Right Join / Full Outer Join \u2013 .NET 10 el\u0151tt nincs nat\xEDv LINQ \`RightJoin\`/\`LeftJoin\` (LEFT JOIN group join + \`DefaultIfEmpty\` mint\xE1val helyettes\xEDthet\u0151). .NET 10+: \`Queryable.LeftJoin\` / \`RightJoin\` (EF Core is ford\xEDthatja). Full outer join tov\xE1bbra is manu\xE1lis (l\xE1sd JOIN fejezet).

Gyakori teljes\xEDtm\xE9nybeli hib\xE1k
1. T\xF6bb \`.ToList()\` h\xEDv\xE1s a lek\xE9rdez\xE9sben \u2013 id\u0151 el\u0151tti mem\xF3ri\xE1ba t\xF6lt\xE9s.
2. T\xFAlzott \`.Include()\` haszn\xE1lat \u2013 felesleges adatbet\xF6lt\xE9s.
3. \`AsNoTracking\` elker\xFCl\xE9se olvas\xE1s-csak lek\xE9rdez\xE9sekn\xE9l.
4. Felesleges be\xE1gyazott join-ok \u2013 n\xF6velik a lek\xE9rdez\xE9s komplexit\xE1s\xE1t.

LINQ kulcsszavak
- Include \u2013 kapcsol\xF3d\xF3 adatok eager loading-ja.
- ThenInclude \u2013 be\xE1gyazott kapcsol\xF3d\xF3 adatok eager loading-ja.
- AsNoTracking \u2013 csak olvas\xE1s, nem m\xF3dos\xEDt\xF3 lek\xE9rdez\xE9sekhez.
- Select \u2013 projekci\xF3k a bet\xF6lt\xF6tt adatmennyis\xE9g cs\xF6kkent\xE9s\xE9re.

## Controller return values (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/web-api/action-return-types {#controller-return-values}

*Referenci\xE1k: [RFC 9110 \u2013 HTTP Semantics (status codes)](https://www.rfc-editor.org/rfc/rfc9110#name-status-codes) \xB7 [MDN HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) \xB7 [ASP.NET Core action return types](https://learn.microsoft.com/aspnet/core/web-api/action-return-types) \xB7 [ControllerBase](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.mvc.controllerbase) \xB7 [Results / TypedResults (Minimal API)](https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis/responses) \xB7 [RFC 9457 Problem Details](https://www.rfc-editor.org/rfc/rfc9457)*

HTTP st\xE1tuszk\xF3dok oszt\xE1lyai (RFC 9110): **2xx** siker \xB7 **3xx** \xE1tir\xE1ny\xEDt\xE1s \xB7 **4xx** klienshiba \xB7 **5xx** szerverhiba. ASP.NET Core-ban controllerben \`ControllerBase\` helper\xF6k (\`Ok()\`, \`NotFound()\` \u2026), Minimal API-ban \`Results.*\` / \`TypedResults.*\`, tetsz\u0151leges k\xF3dra \`StatusCode(int)\` / \`Results.StatusCode(int)\`.

### CRUD mint\xE1k (gyakorlati alap)

1. GET \u2013 200 OK ha van eredm\xE9ny, 404 Not Found ha nincs.
\`\`\`csharp
[HttpGet("{id}")]
public async Task<IActionResult> GetResource(int id)
{
    var resource = await _context.Resources.FindAsync(id);
    return resource == null ? NotFound() : Ok(resource);
}
\`\`\`

2. POST \u2013 201 Created \xFAj er\u0151forr\xE1s l\xE9trehoz\xE1sakor, 400 Bad Request \xE9rv\xE9nytelen adatn\xE1l.
\`\`\`csharp
[HttpPost]
public async Task<IActionResult> CreateResource([FromBody] Resource resource)
{
    if (!ModelState.IsValid) return BadRequest(ModelState);
    _context.Resources.Add(resource);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetResource), new { id = resource.Id }, resource);
}
\`\`\`

3. PUT \u2013 204 No Content sikeres friss\xEDt\xE9sn\xE9l, 404 Not Found ha nem l\xE9tezik.
\`\`\`csharp
[HttpPut("{id}")]
public async Task<IActionResult> UpdateResource(int id, [FromBody] Resource resource)
{
    if (id != resource.Id) return BadRequest();
    var existing = await _context.Resources.FindAsync(id);
    if (existing == null) return NotFound();
    existing.Name = resource.Name;
    await _context.SaveChangesAsync();
    return NoContent();
}
\`\`\`

4. DELETE \u2013 204 No Content sikeres t\xF6rl\xE9sn\xE9l, 404 Not Found ha nem l\xE9tezik.
\`\`\`csharp
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteResource(int id)
{
    var resource = await _context.Resources.FindAsync(id);
    if (resource == null) return NotFound();
    _context.Resources.Remove(resource);
    await _context.SaveChangesAsync();
    return NoContent();
}
\`\`\`

### 2xx \u2013 Successful

| K\xF3d | N\xE9v | Jelent\xE9s | \`ControllerBase\` / \`Results\` |
|---|---|---|---|
| **200** | OK | Sikeres k\xE9r\xE9s; v\xE1lasz t\xF6rzs tipikus (GET, friss\xEDt\xE9s body-val). | \`Ok()\` / \`Ok(value)\` \xB7 \`Results.Ok()\` |
| **201** | Created | \xDAj er\u0151forr\xE1s l\xE9trej\xF6tt; \`Location\` fejl\xE9c aj\xE1nlott. | \`Created(uri, value)\` \xB7 \`CreatedAtAction\` \xB7 \`Results.Created\` |
| **202** | Accepted | Elfogadva, feldolgoz\xE1s k\xE9s\u0151bb (async job, queue). | \`Accepted()\` \xB7 \`Accepted(uri)\` \xB7 \`Results.Accepted\` |
| **203** | Non-Authoritative Information | A payload \xE1talak\xEDtott / proxy-t\xF3l sz\xE1rmaz\xF3 metaadat. | \`StatusCode(203)\` |
| **204** | No Content | Siker, \xFCres t\xF6rzs (PUT/PATCH/DELETE ut\xE1n gyakori). | \`NoContent()\` \xB7 \`Results.NoContent()\` |
| **205** | Reset Content | Siker; a kliens resetelje a dokumentumn\xE9zetet (\u0171rlap). | \`StatusCode(205)\` |
| **206** | Partial Content | R\xE9szleges tartalom (\`Range\` k\xE9r\xE9sre, pl. f\xE1jlstream). | \`StatusCode(206)\` / f\xE1jl API-k |

\`\`\`csharp
return Accepted($"/orders/{id}/status", new { id, status = "Processing" });
return NoContent();
return CreatedAtAction(nameof(GetResource), new { id }, resource);
\`\`\`

### 3xx \u2013 Redirection

| K\xF3d | N\xE9v | Jelent\xE9s | \`ControllerBase\` / \`Results\` |
|---|---|---|---|
| **300** | Multiple Choices | T\xF6bb reprezent\xE1ci\xF3; a kliens v\xE1laszt. | \`StatusCode(300)\` |
| **301** | Moved Permanently | \xC1lland\xF3 \xFAj URI (\`Location\`). | \`RedirectPermanent(url)\` \xB7 \`Results.Redirect(url, permanent: true)\` |
| **302** | Found | Ideiglenes \xE1tir\xE1ny\xEDt\xE1s (historikus \u201EFound\u201D). | \`Redirect(url)\` \xB7 \`Results.Redirect(url)\` |
| **303** | See Other | GET-tel k\xF6vesd a \`Location\`-t (POST ut\xE1n PRG). | \`Redirect(url)\` + megfelel\u0151 haszn\xE1lat / \`StatusCode(303)\` |
| **304** | Not Modified | Cache \xE9rv\xE9nyes; nincs t\xF6rzs (\`If-None-Match\` / \`If-Modified-Since\`). | keretrendszer / \`StatusCode(304)\` |
| **307** | Temporary Redirect | Ideiglenes; **ugyanaz a HTTP met\xF3dus** megmarad. | \`Redirect(url, permanent: false, preserveMethod: true)\` |
| **308** | Permanent Redirect | \xC1lland\xF3; met\xF3dus megmarad. | \`RedirectPermanentPreserveMethod(url)\` |

API-kban a 3xx ritk\xE1bb, mint b\xF6ng\xE9sz\u0151s appokban; verzi\xF3-/host-\xE1tir\xE1ny\xEDt\xE1sn\xE1l \xE9s tartalom CDN-n\xE9l fordul el\u0151.

### 4xx \u2013 Client Error

| K\xF3d | N\xE9v | Jelent\xE9s | \`ControllerBase\` / \`Results\` |
|---|---|---|---|
| **400** | Bad Request | \xC9rv\xE9nytelen szintaxis / valid\xE1ci\xF3 / rossz k\xE9r\xE9s. \`[ApiController]\` automatikus 400 model hib\xE1ra. | \`BadRequest()\` \xB7 \`BadRequest(modelState)\` \xB7 \`Results.BadRequest\` \xB7 \`Results.ValidationProblem\` |
| **401** | Unauthorized | Nincs / \xE9rv\xE9nytelen autentik\xE1ci\xF3 (nem bel\xE9pve). | \`Unauthorized()\` \xB7 \`Results.Unauthorized()\` \xB7 auth middleware |
| **402** | Payment Required | Fenntartott; ritk\xE1n fizet\xE9shez. | \`StatusCode(402)\` |
| **403** | Forbidden | Autentik\xE1lt, de nincs jogosults\xE1g. | \`Forbid()\` \xB7 \`Results.Forbid()\` |
| **404** | Not Found | Az er\u0151forr\xE1s / \xFAtvonal nem l\xE9tezik. | \`NotFound()\` \xB7 \`NotFound(value)\` \xB7 \`Results.NotFound()\` |
| **405** | Method Not Allowed | Az \xFAtvonal l\xE9tezik, a HTTP met\xF3dus nem. | routing / \`StatusCode(405)\` |
| **406** | Not Acceptable | Nincs a \`Accept\` fejl\xE9ccel egyeztethet\u0151 reprezent\xE1ci\xF3. | content negotiation / \`StatusCode(406)\` |
| **407** | Proxy Authentication Required | Proxy autentik\xE1ci\xF3 kell. | \`StatusCode(407)\` |
| **408** | Request Timeout | A szerver v\xE1rt a k\xE9r\xE9sre, id\u0151t\xFAll\xE9p\xE9s. | \`StatusCode(408)\` |
| **409** | Conflict | \xC1llapot\xFCtk\xF6z\xE9s (pl. konkurens friss\xEDt\xE9s, egyedi kulcs). | \`Conflict()\` \xB7 \`Conflict(value)\` \xB7 \`Results.Conflict\` |
| **410** | Gone | Az er\u0151forr\xE1s v\xE9glegesen t\xF6r\xF6lve / megsz\u0171nt. | \`StatusCode(410)\` |
| **411** | Length Required | Hi\xE1nyz\xF3 \`Content-Length\`. | \`StatusCode(411)\` |
| **412** | Precondition Failed | \`If-Match\` / el\u0151felt\xE9tel nem teljes\xFClt. | \`StatusCode(412)\` |
| **413** | Content Too Large | T\xFAl nagy t\xF6rzs (kor\xE1bban Payload Too Large). | Kestrel/limit / \`StatusCode(413)\` |
| **414** | URI Too Long | T\xFAl hossz\xFA URL. | \`StatusCode(414)\` |
| **415** | Unsupported Media Type | Nem t\xE1mogatott \`Content-Type\`. | \`StatusCode(415)\` \xB7 \`[Consumes]\` |
| **416** | Range Not Satisfiable | \xC9rv\xE9nytelen \`Range\`. | \`StatusCode(416)\` |
| **417** | Expectation Failed | \`Expect\` fejl\xE9c nem teljes\xEDthet\u0151. | \`StatusCode(417)\` |
| **418** | I'm a teapot | Vicc (RFC 2324); ne haszn\xE1ld API-szerz\u0151d\xE9sben. | \u2014 |
| **421** | Misdirected Request | Rossz szerverre / SNI-hez ir\xE1ny\xEDtva. | \`StatusCode(421)\` |
| **422** | Unprocessable Content | Szintaktikailag OK, szemantikailag \xE9rv\xE9nytelen (\xFCzleti valid\xE1ci\xF3). | \`UnprocessableEntity()\` \xB7 \`Results.UnprocessableEntity\` |
| **423** | Locked | WebDAV; er\u0151forr\xE1s z\xE1rolva. | \`StatusCode(423)\` |
| **424** | Failed Dependency | WebDAV; f\xFCgg\u0151 m\u0171velet elbukott. | \`StatusCode(424)\` |
| **425** | Too Early | Replay elleni v\xE9delem; korai ism\xE9tl\xE9s. | \`StatusCode(425)\` |
| **426** | Upgrade Required | Protokollv\xE1lt\xE1s kell (pl. TLS/HTTP2). | \`StatusCode(426)\` |
| **428** | Precondition Required | K\xF6telez\u0151 el\u0151felt\xE9tel-fejl\xE9c (pl. \`If-Match\`). | \`StatusCode(428)\` |
| **429** | Too Many Requests | Rate limit; \`Retry-After\` aj\xE1nlott. | rate limiting middleware \xB7 \`StatusCode(429)\` |
| **431** | Request Header Fields Too Large | T\xFAl nagy fejl\xE9cek. | \`StatusCode(431)\` |
| **451** | Unavailable For Legal Reasons | Jogi okb\xF3l nem el\xE9rhet\u0151. | \`StatusCode(451)\` |

\`\`\`csharp
if (User.Identity?.IsAuthenticated != true) return Unauthorized();
if (!User.IsInRole("Admin")) return Forbid();
if (await ExistsConflictAsync(dto)) return Conflict(new { code = "DUPLICATE_SKU" });
if (!TryValidateBusiness(dto, out var errors)) return UnprocessableEntity(errors);
return BadRequest(ModelState);
\`\`\`

\`401\` vs \`403\`: nincs \xE9rv\xE9nyes identit\xE1s \u2192 **401**; van identit\xE1s, de policy/claim nem engedi \u2192 **403**.

### 5xx \u2013 Server Error

| K\xF3d | N\xE9v | Jelent\xE9s | \`ControllerBase\` / \`Results\` |
|---|---|---|---|
| **500** | Internal Server Error | Nem kezelt / v\xE1ratlan szerverhiba. | kiv\xE9telkezel\u0151 \xB7 \`StatusCode(500)\` \xB7 \`Results.Problem\` |
| **501** | Not Implemented | A met\xF3dus / funkci\xF3 nincs implement\xE1lva. | \`StatusCode(501)\` |
| **502** | Bad Gateway | Upstream (proxy/gateway) \xE9rv\xE9nytelen v\xE1laszt kapott. | gateway \xB7 \`StatusCode(502)\` |
| **503** | Service Unavailable | Ideiglenesen nem el\xE9rhet\u0151 (karbantart\xE1s, t\xFAlterhel\xE9s); \`Retry-After\` hasznos. | health / \`StatusCode(503)\` |
| **504** | Gateway Timeout | Upstream nem v\xE1laszolt id\u0151ben. | gateway \xB7 \`StatusCode(504)\` |
| **505** | HTTP Version Not Supported | Nem t\xE1mogatott HTTP verzi\xF3. | \`StatusCode(505)\` |
| **506** | Variant Also Negotiates | Tartalom-egyeztet\xE9s konfigur\xE1ci\xF3s hiba. | \`StatusCode(506)\` |
| **507** | Insufficient Storage | Nincs el\xE9g t\xE1rhely (WebDAV). | \`StatusCode(507)\` |
| **508** | Loop Detected | V\xE9gtelen hurok (WebDAV). | \`StatusCode(508)\` |
| **510** | Not Extended | Tov\xE1bbi kiterjeszt\xE9s kell a k\xE9r\xE9shez. | \`StatusCode(510)\` |
| **511** | Network Authentication Required | H\xE1l\xF3zati autentik\xE1ci\xF3 (captive portal). | \`StatusCode(511)\` |

\xC9les API-n a nem v\xE1rt kiv\xE9teleket glob\xE1lis handler ford\xEDtsa **500** + \`ProblemDetails\`-re (l\xE1sd "Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails" / "Enterprise szint\u0171 glob\xE1lis hibakezel\xE9s"); a kliensnek ne menjen stack trace.

\`\`\`csharp
return Problem(
    title: "Unexpected error",
    statusCode: StatusCodes.Status500InternalServerError,
    detail: "See trace id in logs.");

return StatusCode(StatusCodes.Status503ServiceUnavailable);
\`\`\`

### Gyors d\xF6nt\xE9si m\xE1trix (REST API)

| Sz\xE1nd\xE9k | Tipikus k\xF3d |
|---|---|
| Olvas\xE1s sikerrel | **200** |
| L\xE9trehoz\xE1s | **201** (+ \`Location\`) |
| Elfogadva, k\xE9s\u0151bb k\xE9sz | **202** |
| Siker, nincs t\xF6rzs | **204** |
| Valid\xE1ci\xF3s / rossz k\xE9r\xE9s | **400** vagy **422** |
| Nincs token / rossz token | **401** |
| Nincs jog | **403** |
| Nincs ilyen er\u0151forr\xE1s | **404** |
| \xDCtk\xF6z\xE9s / konkurencia | **409** |
| Rate limit | **429** |
| V\xE1ratlan hiba | **500** |
| Downstream / karbantart\xE1s | **502** / **503** / **504** |

\xD6sszefoglal\xE1s CRUD: GET **200**/**404** \xB7 POST **201**/**400** \xB7 PUT **204**/**404** \xB7 DELETE **204**/**404**. Hibav\xE1lasz form\xE1tum: RFC 9457 \`ProblemDetails\` (ASP.NET Core be\xE9p\xEDtett t\xE1mogat\xE1s).

## Get Set Init (C# 9.0+ (init) / C# 1.0+ (get/set)) https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/init {#get-set-init}

*Verzi\xF3: \`init\` accessor: C# 9-t\u0151l; \`required\` tagok: C# 11-t\u0151l.*

1. get / set \u2013 alap\xE9rtelmezett hozz\xE1f\xE9r\xE9sm\xF3dos\xEDt\xF3k, v\xE1ltoz\xF3 \xE9rt\xE9kekhez.
\`\`\`csharp
public int Age { get; set; }
\`\`\`

2. init \u2013 csak inicializ\xE1l\xE1skor be\xE1ll\xEDthat\xF3, immutable objektumokhoz.
\`\`\`csharp
public string Name { get; init; }
\`\`\`

3. private set \u2013 csak az oszt\xE1lyon bel\xFCl m\xF3dos\xEDthat\xF3.
\`\`\`csharp
public DateTime CreatedAt { get; private set; }
\`\`\`

4. readonly (mez\u0151kh\xF6z) \u2013 csak inicializ\xE1l\xE1skor vagy konstruktorban \xE1ll\xEDthat\xF3 be.

## Record vs Struct vs Class (C# 9.0+ (record) / C# 1.0+) https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record {#record-vs-struct-vs-class}

*Verzi\xF3: \`record\`: C# 9-t\u0151l, \`record struct\`: C# 10-t\u0151l.*

C#-ban n\xE9gy alap "kateg\xF3ria" k\xF6z\xFCl lehet v\xE1lasztani egy t\xEDpus deklar\xE1l\xE1sakor: \`class\`, \`record class\` (r\xF6viden \`record\`), \`struct\`, \`record struct\`. A v\xE1laszt\xE1s k\xE9t f\u0151 tengelyen d\u0151l el: **\xE9rt\xE9k- vagy referenciat\xEDpus**, illetve **mutable vagy immutable**.

| T\xEDpus | Alap\xE9rtelmezett szemantika | T\xE1rol\xE1s | Alap\xE9rtelmezett immutabilit\xE1s | Equals/GetHashCode |
|---|---|---|---|---|
| \`class\` | referencia | heap | **mutable** (kiv\xE9ve ha \`init\`/\`readonly\` tagokkal explicit immutable-re \xE9p\xEDtj\xFCk) | referencia szerinti (identity) |
| \`record\` / \`record class\` | referencia | heap | **immutable by default**, ha a primary constructoros szintaxist \xE9s \`init\` property-ket haszn\xE1ljuk (de sim\xE1n lehet \`set\`-tel mutable-re is \xEDrni) | **\xE9rt\xE9k szerinti** (member-wise), ford\xEDt\xF3 gener\xE1lja |
| \`struct\` | \xE9rt\xE9k | stack / inline (kiv\xE9ve ha boxolj\xE1k, vagy oszt\xE1ly tagja) | **mutable** alapb\xF3l (kiv\xE9ve \`readonly struct\`) | \xE9rt\xE9k szerinti, de alapb\xF3l reflection-alap\xFA (lassabb), \xE9rdemes fel\xFCl\xEDrni |
| \`record struct\` | \xE9rt\xE9k | stack / inline | **mutable** alapb\xF3l (C# 10-ben \`record struct\` nem immutable, csak a \`readonly record struct\` az) | **\xE9rt\xE9k szerinti**, ford\xEDt\xF3 gener\xE1lja, optimaliz\xE1lt |

Kulcs k\xFCl\xF6nbs\xE9gek:
- **class**: referenciat\xEDpus, identit\xE1s alap\xFA egyenl\u0151s\xE9g (\`==\` alapb\xF3l referenci\xE1t hasonl\xEDt, hacsak nincs fel\xFCl\xEDrva), \xF6nmag\xE1ban semmilyen immutabilit\xE1st nem garant\xE1l \u2013 a fejleszt\u0151 felel\u0151ss\xE9ge, hogy \`init\`/\`readonly\` mez\u0151kkel azz\xE1 tegye.
- **record**: referenciat\xEDpus, de a ford\xEDt\xF3 automatikusan gener\xE1l \`Equals\`, \`GetHashCode\`, \`ToString\`, valamint \`with\` kifejez\xE9st t\xE1mogat\xF3 "clone" konstruktort. Els\u0151dleges konstruktoros (\`public record User(int Age, string Name);\`) form\xE1ban a property-k \`init\`-tel j\xF6nnek l\xE9tre, teh\xE1t a p\xE9ld\xE1ny l\xE9trehoz\xE1s ut\xE1n nem m\xF3dos\xEDthat\xF3 \u2013 ez teszi "immutable by default"-t\xE1, de ha explicit \`{ get; set; }\`-et \xEDrunk a record property-ire, az m\xE1r mutable lesz.
- **struct**: \xE9rt\xE9kt\xEDpus, minden hozz\xE1rendel\xE9s/param\xE9ter\xE1tad\xE1s m\xE1solatot k\xE9sz\xEDt (kiv\xE9ve \`ref\`/\`in\`/\`out\` eset\xE9n). Alapb\xF3l mutable, ami hibaforr\xE1s lehet (pl. gy\u0171jtem\xE9nyben t\xE1rolt struct m\xF3dos\xEDt\xE1sa m\xE1solaton t\xF6rt\xE9nik). Ha immutable-nek sz\xE1njuk, c\xE9lszer\u0171 \`readonly struct\`-k\xE9nt deklar\xE1lni, \xE9s minden tagot \`readonly\`/\`get\`-only-ra tenni \u2013 ekkor a ford\xEDt\xF3 ki is k\xE9nyszer\xEDti.
- **record struct**: a \`struct\` \xE9rt\xE9k-szemantik\xE1j\xE1t \xF6tv\xF6zi a \`record\` gener\xE1lt Equals/GetHashCode/ToString/\`with\` funkci\xF3ival. **Fontos**: \xF6nmag\xE1ban NEM immutable (a property-k alapb\xF3l \`{ get; set; }\`), csak akkor immutable, ha \`readonly record struct\`-k\xE9nt \xE9s \`init\` property-kkel deklar\xE1ljuk.

Immutabilit\xE1s \xF6sszefoglalva (ki mikor immutable t\xE9nylegesen):
- \`class\` \u2192 csak akkor immutable, ha minden tag \`readonly\` mez\u0151 vagy \`init\`-only property, \xE9s nincs setter sehol.
- \`record\` (primary constructorral, \`init\` property-kkel) \u2192 **immutable by default**.
- \`struct\` \u2192 **mutable by default**, immutable csak explicit \`readonly struct\`-tal.
- \`record struct\` \u2192 **mutable by default**, immutable csak explicit \`readonly record struct\`-tal.

Mikor melyiket v\xE1lasszuk:
- **class**: viselked\xE9s-k\xF6zpont\xFA, identit\xE1ssal b\xEDr\xF3 entit\xE1sok (pl. EF Core entity-k, service-ek, aggregate root-ok DDD-ben) \u2013 itt az identit\xE1s (adatb\xE1zis kulcs) sz\xE1m\xEDt, nem az \xE9rt\xE9k.
- **record**: adat\xE1tviteli/\xE9rt\xE9k-objektumok (DTO-k, CQRS command/query-k, value object-ek), ahol k\xE9t p\xE9ld\xE1ny akkor egyenl\u0151, ha a tartalmuk egyezik, \xE9s a \`with\` kifejez\xE9ssel k\xE9nyelmesen lehet m\xF3dos\xEDtott m\xE1solatot k\xE9sz\xEDteni (\`var updated = user with { Name = "Kov\xE1cs" };\`).
- **struct**: kis m\xE9ret\u0171 (\xE1ltal\xE1nosan < 16 byte \xF6k\xF6lszab\xE1ly), gyakran m\xE1solt, r\xF6vid \xE9let\u0171 \xE9rt\xE9kek (pl. \`Point\`, \`Money\`), ahol a heap-allok\xE1ci\xF3 elker\xFCl\xE9se teljes\xEDtm\xE9ny szempontb\xF3l sz\xE1m\xEDt.
- **record struct**: amikor struct-szer\u0171 teljes\xEDtm\xE9nyt szeretn\xE9nk, de value-equality-vel \xE9s \`with\` szintaxissal \u2013 tipikusan kis, immutable value object-ekhez (pl. koordin\xE1t\xE1k, p\xE9nz\xF6sszeg + devizanem p\xE1r).

## Immutability C#-ban (C# 9.0+) https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record {#immutability-c-ban}

*Verzi\xF3: \`init\`/\`record\`: C# 9, \`readonly struct\`: C# 7.2, \`required\`: C# 11.*

Az immutabilit\xE1s azt jelenti, hogy egy objektum \xE1llapota a l\xE9trehoz\xE1s ut\xE1n nem v\xE1ltoztathat\xF3 meg. Ennek el\u0151nyei: sz\xE1lbiztons\xE1g (thread-safety) extra lock n\xE9lk\xFCl, egyszer\u0171bb reasoning a k\xF3dr\xF3l (nincs v\xE1ratlan mell\xE9khat\xE1s), biztons\xE1gos megoszt\xE1s t\xF6bb komponens/thread k\xF6z\xF6tt, k\xF6nnyebb cache-elhet\u0151s\xE9g \xE9s equality-kezel\xE9s.

Immutabilit\xE1s el\xE9r\xE9s\xE9nek eszk\xF6zei C#-ban:
1. \`readonly\` mez\u0151 \u2013 csak a deklar\xE1ci\xF3n\xE1l vagy a konstruktorban \xE1ll\xEDthat\xF3 be, ut\xE1na nem.
\`\`\`csharp
public class Money
{
    public readonly decimal Amount;
    public Money(decimal amount) => Amount = amount;
}
\`\`\`
2. \`init\` accessor \u2013 property, ami csak objektum-inicializ\xE1l\xF3ban vagy konstruktorban \xE1ll\xEDthat\xF3.
3. \`record\`/\`with\` kifejez\xE9s \u2013 immutable objektum "m\xF3dos\xEDt\xE1sa" \xFAj p\xE9ld\xE1ny l\xE9trehoz\xE1s\xE1val (nem a r\xE9gi mut\xE1l\xE1s\xE1val):
\`\`\`csharp
public record Address(string City, string ZipCode);
var a1 = new Address("Budapest", "1011");
var a2 = a1 with { ZipCode = "1012" }; // a1 v\xE1ltozatlan marad
\`\`\`
4. \`readonly struct\` \u2013 a ford\xEDt\xF3 kik\xE9nyszer\xEDti, hogy egyetlen tag se legyen m\xF3dos\xEDthat\xF3 a struct l\xE9trehoz\xE1sa ut\xE1n.
5. Immutable gy\u0171jtem\xE9nyek (\`System.Collections.Immutable\` \u2013 \`ImmutableList<T>\`, \`ImmutableDictionary<TKey,TValue>\`, \`ImmutableArray<T>\` stb.) \u2013 minden m\xF3dos\xEDt\xF3 m\u0171velet (\`Add\`, \`Remove\`) \xFAj gy\u0171jtem\xE9nyt ad vissza, az eredeti v\xE1ltozatlan marad. Ez k\xFCl\xF6nb\xF6zik a \`ReadOnlyCollection<T>\`-t\u0151l, ami csak egy "csak olvashat\xF3 n\xE9zet" a m\xF6g\xF6ttes (esetleg tov\xE1bbra is mut\xE1lhat\xF3) gy\u0171jtem\xE9nyre.

Mutable vs immutable \u2013 gyakorlati szempont:
- Mutable objektum megoszt\xE1sa t\xF6bb thread k\xF6z\xF6tt race condition-h\xF6z vezethet, ha nincs szinkroniz\xE1ci\xF3.
- Immutable objektumn\xE1l a \`GetHashCode()\` biztons\xE1gosan cache-elhet\u0151 \xE9s stabil marad, ez\xE9rt ide\xE1lis \`Dictionary\`/\`HashSet\` kulcsk\xE9nt (l\xE1sd k\xF6vetkez\u0151 szekci\xF3) \u2013 mutable objektum hash k\xF3dj\xE1nak v\xE1ltoz\xE1sa "elveszett" bejegyz\xE9shez vezethet a hash alap\xFA gy\u0171jtem\xE9nyekben.
- DDD (Domain-Driven Design) terminol\xF3gi\xE1ban a **Value Object**-eket c\xE9lszer\u0171 immutable-nek tervezni (pl. \`record\`/\`readonly struct\`), az **Entity**-ket viszont gyakran mutable class-k\xE9nt modellezz\xFCk, mert az \xE1llapotuk id\u0151ben v\xE1ltozik, de az identit\xE1suk (pl. Id) \xE1lland\xF3.

## Collection Framework \u2013 hash alap\xFA gy\u0171jtem\xE9nyek (.NET 2.0+) https://learn.microsoft.com/dotnet/standard/collections/ {#collection-framework-hash-alapu-gyujtemenyek}

A .NET gy\u0171jtem\xE9ny-keretrendszer (\`System.Collections.Generic\`) f\u0151 kateg\xF3ri\xE1i \xE9s melyik \xE9p\xFCl hash-el\xE9sre:

| Gy\u0171jtem\xE9ny | Hash alap\xFA? | Bels\u0151 strukt\xFAra | Rendezett-e | Jellemz\u0151 komplexit\xE1s (\xE1tlag) |
|---|---|---|---|---|
| \`Dictionary<TKey,TValue>\` | **igen** | hash t\xE1bla (bucket-ek + \`GetHashCode()\`) | nem (sorrend nem garant\xE1lt) | Add/Contains/Remove: O(1) |
| \`HashSet<T>\` | **igen** | hash t\xE1bla | nem | Add/Contains/Remove: O(1) |
| \`SortedDictionary<TKey,TValue>\` | nem | \xF6nkiegyens\xFAlyoz\xF3 bin\xE1ris fa (piros-fekete fa) | igen (kulcs szerint) | O(log n) |
| \`SortedSet<T>\` | nem | \xF6nkiegyens\xFAlyoz\xF3 bin\xE1ris fa | igen | O(log n) |
| \`SortedList<TKey,TValue>\` | nem | rendezett t\xF6mb (binary search) | igen | keres\xE9s O(log n), besz\xFAr\xE1s/t\xF6rl\xE9s O(n) |
| \`List<T>\` | nem | dinamikus t\xF6mb | besz\xFAr\xE1si sorrend | Contains: O(n), index el\xE9r\xE9s: O(1) |
| \`LinkedList<T>\` | nem | k\xE9tir\xE1ny\xFA l\xE1ncolt lista | besz\xFAr\xE1si sorrend | Contains: O(n), besz\xFAr\xE1s/t\xF6rl\xE9s csom\xF3pontn\xE1l: O(1) |
| \`Queue<T>\` / \`Stack<T>\` | nem | k\xF6rk\xF6r\xF6s t\xF6mb | FIFO / LIFO | Enqueue/Dequeue, Push/Pop: O(1) |
| \`ConcurrentDictionary<TKey,TValue>\` | **igen** | hash t\xE1bla, lock-mentes/finomszemcs\xE9s z\xE1rol\xE1s | nem | Add/Contains/Remove: \xE1tlag O(1) |

Mi\xE9rt fontos, hogy melyik hash alap\xFA:
- A hash alap\xFA gy\u0171jtem\xE9nyek (\`Dictionary\`, \`HashSet\`, \`ConcurrentDictionary\`) az O(1) \xE1tlagos m\u0171veleti idej\xFCket a kulcs/elem \`GetHashCode()\` \xE9rt\xE9k\xE9b\u0151l sz\xE1m\xEDtott bucket-index alapj\xE1n \xE9rik el, majd \`Equals()\`-szel \xFCtk\xF6z\xE9s (collision) eset\xE9n ellen\u0151riznek egyez\xE9st.
- Ha a kulcsk\xE9nt/elemk\xE9nt haszn\xE1lt t\xEDpus **rosszul vagy egy\xE1ltal\xE1n nem implement\xE1lja** a \`GetHashCode()\`/\`Equals()\` p\xE1rost (pl. sima \`class\`, fel\xFCl\xEDr\xE1s n\xE9lk\xFCl), akkor referencia szerinti azonoss\xE1g alapj\xE1n ker\xFCl be a gy\u0171jtem\xE9nybe \u2013 k\xE9t, tartalmilag azonos objektum k\xE9t k\xFCl\xF6nb\xF6z\u0151 bucket-be ker\xFClhet, \xE9s \`Contains\`/\`TryGetValue\` nem fogja megtal\xE1lni a "logikailag egyenl\u0151" elemet.
- Ha egy hash alap\xFA gy\u0171jtem\xE9nyben l\xE9v\u0151 kulcs **mutable**, \xE9s a benne t\xE1rolt objektum olyan mez\u0151je v\xE1ltozik meg, ami a \`GetHashCode()\` sz\xE1m\xEDt\xE1s\xE1ba bel\xE9p, a gy\u0171jtem\xE9ny "elvesz\xEDtheti" az elemet (rossz bucket-ben keresi tov\xE1bb) \u2013 ez\xE9rt aj\xE1nlott immutable t\xEDpusokat (pl. \`record\`, \`readonly struct\`) haszn\xE1lni hash alap\xFA gy\u0171jtem\xE9ny kulcsak\xE9nt (l\xE1sd el\u0151z\u0151 szekci\xF3).
- Egyedi \`IEqualityComparer<T>\` \xE1tadhat\xF3 a \`Dictionary\`/\`HashSet\` konstruktor\xE1nak, ha a t\xEDpus \`Equals\`/\`GetHashCode\` fel\xFCl\xEDr\xE1sa nem lehets\xE9ges vagy nem k\xEDv\xE1nt (pl. harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 t\xEDpus, vagy t\xF6bb k\xFCl\xF6nb\xF6z\u0151 egyenl\u0151s\xE9g-defin\xEDci\xF3ra van sz\xFCks\xE9g kontextusonk\xE9nt).

## Mit implement\xE1ljunk egy \xFAj C# class-ban (Equals, GetHashCode, ToString stb.) (C# 1.0+) https://learn.microsoft.com/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-define-value-equality-for-a-type {#mit-implementaljunk-egy-uj-c-class-ban-equals-gethashcode-tostring-stb}

Amikor egy \xFAj, \xE9rt\xE9k-szemantik\xE1j\xFA (nem entity-jelleg\u0171) \`class\`-t vagy \`struct\`-ot hozunk l\xE9tre, c\xE9lszer\u0171 \xE1tgondolni \xE9s implement\xE1lni az al\xE1bbi tagokat:

1. **\`Equals(object? obj)\` \xE9s \`Equals(T other)\` (\`IEquatable<T>\` implement\xE1l\xE1s\xE1val)** \u2013 \xEDgy elker\xFClhet\u0151 a boxol\xE1s/reflection-alap\xFA alap\xE9rtelmezett \xF6sszehasonl\xEDt\xE1s, \xE9s explicit defini\xE1ljuk, mi sz\xE1m\xEDt "egyenl\u0151nek" (pl. minden mez\u0151 egyezik, vagy csak egy \xFCzleti kulcs).
\`\`\`csharp
public class Money : IEquatable<Money>
{
    public decimal Amount { get; }
    public string Currency { get; }

    public bool Equals(Money? other) =>
        other is not null && Amount == other.Amount && Currency == other.Currency;

    public override bool Equals(object? obj) => Equals(obj as Money);

    public override int GetHashCode() => HashCode.Combine(Amount, Currency);
}
\`\`\`
2. **\`GetHashCode()\`** \u2013 mindig egy\xFCtt \xEDrjuk fel\xFCl az \`Equals\`-szal (ha k\xE9t objektum \`Equals\` szerint egyenl\u0151, a \`GetHashCode()\`-juknak is egyeznie kell, k\xFCl\xF6nben hash alap\xFA gy\u0171jtem\xE9nyekben hib\xE1san viselkednek \u2013 l\xE1sd el\u0151z\u0151 szekci\xF3). A \`System.HashCode.Combine(...)\` a javasolt, be\xE9p\xEDtett m\xF3dja a hash-gener\xE1l\xE1snak (.NET Core 2.1+ / .NET Standard 2.1), elker\xFClve a k\xE9zzel \xEDrt (\xE9s gyakran hib\xE1s) pr\xEDmsz\xE1m-kombin\xE1l\xE1st.
3. **\`ToString()\`** \u2013 fel\xFCl\xEDr\xE1sa jelent\u0151sen seg\xEDti a debuggol\xE1st, logol\xE1st (pl. \`$"{Amount} {Currency}"\`), en\xE9lk\xFCl a t\xEDpus teljes neve jelenik meg (\`Namespace.Money\`).
4. **\`==\` \xE9s \`!=\` oper\xE1torok fel\xFCl\xEDr\xE1sa** \u2013 ha az \`Equals\`-t \xE9rt\xE9k szerintire \xEDrjuk, \xE9rdemes az oper\xE1torokat is konzisztensre \xEDrni, k\xFCl\xF6nben \`a.Equals(b)\` \xE9s \`a == b\` elt\xE9r\u0151 eredm\xE9nyt adhat (ez k\xFCl\xF6n\xF6sen \`class\`-n\xE1l gyakori hiba, mert alapb\xF3l az oper\xE1tor referenci\xE1t hasonl\xEDt).
5. **\`IComparable<T>\` / \`IComparable\`** \u2013 ha a t\xEDpus sorbarendezhet\u0151 (pl. \`Money\`, \`Priority\`), \xE9rdemes implement\xE1lni, hogy \`List<T>.Sort()\`, \`OrderBy\`, \`SortedSet<T>\` stb. nat\xEDvan tudja kezelni kompar\xE1tor n\xE9lk\xFCl is.
6. **\`IEqualityComparer<T>\`** (k\xFCl\xF6n oszt\xE1lyk\xE9nt) \u2013 amikor a t\xEDpus alap\xE9rtelmezett egyenl\u0151s\xE9g\xE9n k\xEDv\xFCl m\xE1s kontextus-f\xFCgg\u0151 egyenl\u0151s\xE9g-defin\xEDci\xF3ra is sz\xFCks\xE9g van (pl. case-insensitive string\xF6sszehasonl\xEDt\xE1s egy adott \`Dictionary\`-ben).

**Megjegyz\xE9s**: mindezt a \`record\`/\`record struct\` a ford\xEDt\xF3 automatikusan legener\xE1lja (member-wise \`Equals\`, \`GetHashCode\`, \`ToString\`, \`==\`/\`!=\` oper\xE1torok) \u2013 ez\xE9rt \xE9rdemes ilyen \xE9rt\xE9k-objektumokn\xE1l \`record\`-ot haszn\xE1lni sima \`class\` helyett, hogy ne kelljen ezt k\xE9zzel karbantartani. \`class\`-n\xE1l (identit\xE1s alap\xFA entit\xE1sokn\xE1l, pl. EF Core entity-k) viszont gyakran **sz\xE1nd\xE9kosan** nem \xEDrjuk fel\xFCl az \`Equals\`/\`GetHashCode\`-ot \xE9rt\xE9k szerintire, mert az entit\xE1s azonoss\xE1g\xE1t az adatb\xE1zis-kulcs (pl. \`Id\`) adja, nem a mez\u0151k tartalma \u2013 ilyenkor, ha m\xE9gis egyenl\u0151s\xE9get defini\xE1lunk, c\xE9lszer\u0171 kiz\xE1r\xF3lag az \`Id\`-ra alapozni, \xE9s figyelni arra, hogy egy m\xE9g nem mentett (Id = 0/default) entit\xE1s \`GetHashCode()\`-ja ne v\xE1ltozzon a ment\xE9s ut\xE1n (ez klasszikus buktat\xF3 EF Core-ban hash alap\xFA gy\u0171jtem\xE9nyben t\xE1rolt \xFAj entit\xE1sokn\xE1l).

## EF Core relationship with Fluent API (EF Core 1.0+) https://learn.microsoft.com/ef/core/modeling/relationships {#ef-core-relationship-with-fluent-api}

1. Egy az egyhez (One-to-One):
\`\`\`csharp
modelBuilder.Entity<User>()
    .HasOne(u => u.Profile)
    .WithOne(p => p.User)
    .HasForeignKey<Profile>(p => p.UserId);
\`\`\`

2. Egy a t\xF6bbh\xF6z (One-to-Many):
\`\`\`csharp
modelBuilder.Entity<User>()
    .HasMany(u => u.Posts)
    .WithOne(p => p.User)
    .HasForeignKey(p => p.UserId);
\`\`\`

3. T\xF6bb a t\xF6bbh\xF6z (Many-to-Many):
\`\`\`csharp
modelBuilder.Entity<Course>()
    .HasMany(c => c.Students)
    .WithMany(s => s.Courses);
\`\`\`

## EF Core enable Lazy Loading (EF Core 2.1+) https://learn.microsoft.com/ef/core/querying/related-data/lazy {#ef-core-enable-lazy-loading}

1. Csomag telep\xEDt\xE9se:
\`\`\`bash
dotnet add package Microsoft.EntityFrameworkCore.Proxies
\`\`\`

2. DbContext konfigur\xE1l\xE1sa:
\`\`\`csharp
optionsBuilder.UseLazyLoadingProxies();
\`\`\`

3. Navig\xE1ci\xF3s tulajdons\xE1gok virtual-k\xE9nt:
\`\`\`csharp
public class Blog
{
    public int Id { get; set; }
    public virtual ICollection<Post> Posts { get; set; }
}
\`\`\`

Ez lehet\u0151v\xE9 teszi a kapcsol\xF3d\xF3 adatok automatikus bet\xF6lt\xE9s\xE9t, amikor sz\xFCks\xE9g van r\xE1juk.

## Entity States (EF Core 1.0+) https://learn.microsoft.com/ef/core/change-tracking/ {#entity-states}

1. Unchanged \u2013 az entit\xE1s m\xE1r az adatb\xE1zisban van, nem m\xF3dosult.
2. Added \u2013 \xFAj entit\xE1s, amely a k\xF6vetkez\u0151 ment\xE9skor ker\xFCl be az adatb\xE1zisba.
3. Modified \u2013 az entit\xE1s \xE9rt\xE9kei m\xF3dosultak, friss\xEDteni kell.
4. Deleted \u2013 az entit\xE1st t\xF6r\xF6lni kell.
5. Detached \u2013 az entit\xE1s nincs nyomon k\xF6vetve az aktu\xE1lis DbContext \xE1ltal.

Ezek az \xE1llapotok seg\xEDtenek az EF Core-nak optimaliz\xE1lni az adatb\xE1zis m\u0171veleteket \xE9s biztos\xEDtani az adatkonzisztenci\xE1t.

## Add Attach Update (EF Core 1.0+) https://learn.microsoft.com/ef/core/change-tracking/explicit-tracking {#add-attach-update}

1. Add() \u2013 Added \xE1llapotba helyezi, a k\xF6vetkez\u0151 ment\xE9sn\xE9l besz\xFArja az adatb\xE1zisba.
\`\`\`csharp
var newEntity = new Entity { Name = "New" };
context.Add(newEntity);
context.SaveChanges();
\`\`\`

2. Attach() \u2013 Unchanged \xE1llapotba helyezi, nem m\xF3dos\xEDtja az adatb\xE1zist, kiv\xE9ve ha manu\xE1lisan \xE1ll\xEDtjuk a mez\u0151ket.
\`\`\`csharp
var existingEntity = new Entity { Id = 1, Name = "Existing" };
context.Attach(existingEntity);
\`\`\`

3. Update() \u2013 Modified \xE1llapotba helyezi, friss\xEDti az adatb\xE1zist ment\xE9skor, m\xE9g v\xE1ltozatlan \xE9rt\xE9kek eset\xE9n is.
\`\`\`csharp
var entityToUpdate = new Entity { Id = 1, Name = "Updated" };
context.Update(entityToUpdate);
context.SaveChanges();
\`\`\`

\xD6sszegz\xE9s: Add() \xFAj besz\xFAr\xE1shoz, Attach() nyomon k\xF6vet\xE9shez m\xF3dos\xEDt\xE1s n\xE9lk\xFCl, Update() m\xF3dos\xEDt\xE1sok \xE9rv\xE9nyes\xEDt\xE9s\xE9hez.

## EF Core composite key (EF Core 1.0+) https://learn.microsoft.com/ef/core/modeling/keys {#ef-core-composite-key}

A kompozit kulcs t\xF6bb oszlop kombin\xE1ci\xF3ja, amelyek egy\xFCtt alkotnak egyedi azonos\xEDt\xF3t.

\`\`\`csharp
public class Order
{
    public int CustomerId { get; set; }
    public int OrderId { get; set; }
    public string ProductName { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Order>().HasKey(o => new { o.CustomerId, o.OrderId });
}
\`\`\`

Haszn\xE1lat: ha nincs egyedi els\u0151dleges kulcs, de k\xE9t vagy t\xF6bb oszlop kombin\xE1ci\xF3ja egyedis\xE9get biztos\xEDt.

## EF Core Concurrency control (EF Core 1.0+) https://learn.microsoft.com/ef/core/saving/concurrency {#ef-core-concurrency-control}

*Verzi\xF3: EF Core 1.0-t\xF3l (\`IsConcurrencyToken\`, \`IsRowVersion\`).*

A konkurenciakezel\xE9s (concurrency control) arra a probl\xE9m\xE1ra ad v\xE1laszt, hogy mi t\xF6rt\xE9njen, ha ugyanazt a sort/rekordot k\xE9t (vagy t\xF6bb) tranzakci\xF3 egyidej\u0171leg pr\xF3b\xE1lja olvasni \xE9s m\xF3dos\xEDtani. K\xE9t alapstrat\xE9gia van: **optimista** (felt\xE9telezz\xFCk, hogy ritka az \xFCtk\xF6z\xE9s, csak commit-kor ellen\u0151rz\xFCnk) \xE9s **pesszimista** (el\u0151re z\xE1rolunk, hogy m\xE1s ne is tudja m\xF3dos\xEDtani, am\xEDg mi dolgozunk rajta).

### Optimista konkurenciakezel\xE9s EF Core-ban

Felt\xE9telezi, hogy nincs konfliktus; egy verzi\xF3sz\xE1m/timestamp jelzi az \xFCtk\xF6z\xE9st. K\xE9t gyakori megold\xE1s:

1. \`[Timestamp]\` attrib\xFAtummal jel\xF6lt \`byte[]\` oszlop (SQL Server \`rowversion\`/\`timestamp\` t\xEDpus), amit a motor automatikusan l\xE9ptet minden UPDATE-n\xE9l:
\`\`\`csharp
public class Resource
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Score { get; set; }
    [Timestamp]
    public byte[] RowVersion { get; set; }
}
\`\`\`
2. Fluent API-val b\xE1rmely mez\u0151 kijel\xF6lhet\u0151 konkurencia-tokenk\xE9nt (\`IsConcurrencyToken()\`), ak\xE1r egy sima \`int Version\`/\`DateTime LastModified\` oszlop is, ami nem SQL Server-specifikus:
\`\`\`csharp
modelBuilder.Entity<Resource>()
    .Property(r => r.Version)
    .IsConcurrencyToken();
// vagy: modelBuilder.Entity<Resource>().UseXminAsConcurrencyToken(); // PostgreSQL xmin oszlop
\`\`\`

Az EF Core a gener\xE1lt \`UPDATE\`/\`DELETE\` utas\xEDt\xE1s \`WHERE\` felt\xE9tel\xE9be beleteszi a konkurencia-token eredeti (bet\xF6lt\xE9skori) \xE9rt\xE9k\xE9t is (\`WHERE Id = @id AND RowVersion = @originalRowVersion\`). Ha k\xF6zben m\xE1s m\xF3dos\xEDtotta a sort, 0 sor \xE9rint\u0151dik, \xE9s az EF Core **\`DbUpdateConcurrencyException\`**-t dob:
\`\`\`csharp
try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    var entry = ex.Entries.Single();
    var databaseValues = await entry.GetDatabaseValuesAsync();

    if (databaseValues == null)
    {
        // a sort k\xF6zben t\xF6r\xF6lt\xE9k
    }
    else
    {
        // \xFCtk\xF6z\xE9s-felold\xE1si strat\xE9gi\xE1k:
        // 1) Store Wins: eldobjuk a saj\xE1t m\xF3dos\xEDt\xE1sunkat, DB \xE9rt\xE9k\xE9t vessz\xFCk \xE1t
        entry.OriginalValues.SetValues(databaseValues);
        entry.CurrentValues.SetValues(databaseValues);
        // 2) Client Wins: fel\xFCl\xEDrjuk a DB-t a saj\xE1t (aktu\xE1lis) \xE9rt\xE9keinkkel
        // csak a concurrency token (OriginalValues) friss\xFCl, a CurrentValues marad a mi\xE9nk
        entry.OriginalValues.SetValues(databaseValues);
        // 3) Merge: mez\u0151nk\xE9nti egyeztet\xE9s, majd \xFAjra SaveChangesAsync() a friss\xEDtett RowVersion-nel
    }
}
\`\`\`
Haszn\xE1lat: webes/API alkalmaz\xE1sokn\xE1l tipikus, ahol a felhaszn\xE1l\xF3 "gondolkodik" a rekord felett (pl. form szerkeszt\xE9se), \xE9s ritka az egyidej\u0171 m\xF3dos\xEDt\xE1s \u2013 \xEDgy elker\xFClhet\u0151 a felesleges z\xE1rol\xE1si overhead.

### Pesszimista konkurenciakezel\xE9s EF Core-ban

Z\xE1rolja az er\u0151forr\xE1st olvas\xE1skor, hogy m\xE1s tranzakci\xF3 ne tudja m\xF3dos\xEDtani/olvasni, am\xEDg a mi\xE9nk le nem z\xE1rul. EF Core-ban ehhez nyers SQL hint vagy explicit tranzakci\xF3s izol\xE1ci\xF3s szint sz\xFCks\xE9ges, nat\xEDv API nincs r\xE1:
\`\`\`csharp
using var transaction = await context.Database.BeginTransactionAsync(IsolationLevel.Serializable);

var resource = await context.Resources
    .FromSqlRaw("SELECT * FROM Resources WITH (UPDLOCK, ROWLOCK) WHERE Id = {0}", id)
    .FirstOrDefaultAsync();

resource.Score += 10;
await context.SaveChangesAsync();
await transaction.CommitAsync();
\`\`\`
Haszn\xE1lat: gyakori p\xE1rhuzamos m\xF3dos\xEDt\xE1si k\xEDs\xE9rletek eset\xE9n (pl. k\xE9szletcs\xF6kkent\xE9s, sz\xE1mlaegyenleg m\xF3dos\xEDt\xE1sa), amikor elengedhetetlen, hogy egy tranzakci\xF3 alatt m\xE1sok ne \xE9rj\xE9k el/m\xF3dos\xEDts\xE1k a rekordot. H\xE1tr\xE1nya: hosszabb z\xE1rol\xE1si id\u0151 \u2192 nagyobb blocking/deadlock kock\xE1zat, rosszabb \xE1tbocs\xE1t\xF3k\xE9pess\xE9g magas konkurrencia mellett.

### Konkurenciakezel\xE9s sima SQL script eset\xE9n

ORM n\xE9lk\xFCl, k\xF6zvetlen SQL-ben ugyanez a k\xE9t strat\xE9gia jelenik meg, csak k\xE9zzel implement\xE1lva:

**1. Optimista \u2013 verzi\xF3sz\xE1m/rowversion + felt\xE9teles UPDATE**
A \`WHERE\` z\xE1rad\xE9kba belefoglaljuk az eredetileg beolvasott verzi\xF3/timestamp \xE9rt\xE9ket, \xE9s az \xE9rintett sorok sz\xE1m\xE1b\xF3l (\`@@ROWCOUNT\` / \`ROW_COUNT()\`) der\xFCl ki, hogy volt-e \xFCtk\xF6z\xE9s:
\`\`\`sql
-- SQL Server
UPDATE Resources
SET Score = @newScore, RowVersion = @newRowVersion
WHERE Id = @id AND RowVersion = @originalRowVersion;

IF @@ROWCOUNT = 0
    THROW 51000, 'Concurrency conflict: a rekordot id\u0151k\xF6zben m\xE1s m\xF3dos\xEDtotta.', 1;
\`\`\`
\`\`\`sql
-- PostgreSQL (k\xE9zi verzi\xF3 oszloppal, mivel nincs be\xE9p\xEDtett rowversion)
UPDATE resources
SET score = :new_score, version = version + 1
WHERE id = :id AND version = :original_version;
-- az alkalmaz\xE1s ellen\u0151rzi a visszaadott/\xE9rintett sorok sz\xE1m\xE1t (pl. RETURNING id, vagy execute ut\xE1ni rowcount)
\`\`\`
Ez l\xE9nyeg\xE9ben ugyanaz, mint amit az EF Core automatikusan gener\xE1l a konkurencia-token m\xF6g\xF6tt \u2013 a h\xEDv\xF3 alkalmaz\xE1s felel\u0151ss\xE9ge az \xFCtk\xF6z\xE9s detekt\xE1l\xE1sa (0 \xE9rintett sor) \xE9s a felold\xE1si strat\xE9gia (retry, store/client wins, hiba\xFCzenet a usernek).

**2. Pesszimista \u2013 explicit sorz\xE1rol\xE1s egy tranzakci\xF3n bel\xFCl**
\`\`\`sql
-- SQL Server: UPDLOCK a rendszeres UPDATE-versenyhelyzet, ROWLOCK finom\xEDtja sor szintre, HOLDLOCK ~ SERIALIZABLE-hez hasonl\xF3 tart\xE1s
BEGIN TRAN;
SELECT Score FROM Resources WITH (UPDLOCK, ROWLOCK) WHERE Id = @id;
UPDATE Resources SET Score = Score + 10 WHERE Id = @id;
COMMIT;
\`\`\`
\`\`\`sql
-- PostgreSQL / Oracle: SELECT ... FOR UPDATE z\xE1rolja a kijel\xF6lt sorokat a tranzakci\xF3 v\xE9g\xE9ig
BEGIN;
SELECT score FROM resources WHERE id = :id FOR UPDATE;
UPDATE resources SET score = score + 10 WHERE id = :id;
COMMIT;
\`\`\`
\`FOR UPDATE NOWAIT\` / \`FOR UPDATE SKIP LOCKED\` vari\xE1nsokkal elker\xFClhet\u0151 a v\xE1rakoz\xE1s: az el\u0151bbi azonnal hib\xE1t dob, ha a sor m\xE1r z\xE1rolt, az ut\xF3bbi egyszer\u0171en kihagyja a z\xE1rolt sorokat (tipikus felhaszn\xE1l\xE1s: worker/queue feldolgoz\xF3 rendszerekben, ahol t\xF6bb worker versenyez ugyanazon feladatsorok\xE9rt).

**3. Izol\xE1ci\xF3s szintek (isolation level) hat\xE1sa**
A tranzakci\xF3s izol\xE1ci\xF3s szint glob\xE1lisan befoly\xE1solja, mennyire "l\xE1tj\xE1k" egym\xE1st a p\xE1rhuzamos tranzakci\xF3k, \xE9s mekkora a z\xE1rol\xE1si/\xFCtk\xF6z\xE9si kock\xE1zat:
- \`READ UNCOMMITTED\` \u2013 nincs z\xE1rol\xE1s olvas\xE1skor, "dirty read" lehets\xE9ges; gyakorlatban ritk\xE1n javasolt.
- \`READ COMMITTED\` \u2013 az alap\xE9rtelmezett a legt\xF6bb motorban; csak commitolt adatot olvasunk, de k\xE9t egym\xE1st k\xF6vet\u0151 olvas\xE1s elt\xE9rhet (non-repeatable read).
- \`REPEATABLE READ\` \u2013 egy tranzakci\xF3n bel\xFCl ugyanaz a lek\xE9rdez\xE9s mindig ugyanazt adja, de "phantom row" (\xFAj sorok megjelen\xE9se) m\xE9g el\u0151fordulhat (MySQL InnoDB-n\xE9l ez m\xE1r phantom-mentes is).
- \`SERIALIZABLE\` \u2013 legszigor\xFAbb, teljes izol\xE1ci\xF3, mintha a tranzakci\xF3k sorban futn\xE1nak; jelent\u0151s z\xE1rol\xE1si/blocking overhead, gyakori deadlock-kock\xE1zat magas konkurrencia mellett.
- \`SNAPSHOT\` (SQL Server) / MVCC alap\xFA \`READ COMMITTED\` (PostgreSQL alapb\xF3l ilyen) \u2013 olvas\xE1skor nem z\xE1rol, egy konzisztens "pillanatk\xE9p" alapj\xE1n dolgozik, \xEDr\xF3 tranzakci\xF3k nem blokkolj\xE1k az olvas\xF3kat; \xFCtk\xF6z\xE9s csak \xEDr\xE1s-\xEDr\xE1s eset\xE9n (\`SNAPSHOT\` eset\xE9n \`update conflict\` hib\xE1val).
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRAN;
-- ...
COMMIT;
\`\`\`
EF Core-ban ugyanez: \`context.Database.BeginTransactionAsync(IsolationLevel.Serializable)\`.

**4. Deadlock kezel\xE9s \xE9s retry**
Pesszimista z\xE1rol\xE1sn\xE1l (\xE9s magasabb izol\xE1ci\xF3s szintekn\xE9l) elker\xFClhetetlen a deadlock lehet\u0151s\xE9ge, ha k\xE9t tranzakci\xF3 ford\xEDtott sorrendben z\xE1rol ugyanazon er\u0151forr\xE1sokra. Az adatb\xE1zismotor az egyik tranzakci\xF3t automatikusan megszak\xEDtja (SQL Server: hiba 1205), a h\xEDv\xF3 oldalon ez\xE9rt \xE9rdemes **retry logik\xE1t** (pl. exponenci\xE1lis backoff-fal, 2-3 \xFAjrapr\xF3b\xE1lkoz\xE1ssal) be\xE9p\xEDteni mind nyers SQL, mind EF Core (\`EnableRetryOnFailure\` execution strategy) eset\xE9n.

**\xD6sszegz\xE9s \u2013 melyiket mikor:**
- Optimista (verzi\xF3/timestamp + felt\xE9teles UPDATE) \u2192 alap\xE9rtelmezett v\xE1laszt\xE1s, ha az \xFCtk\xF6z\xE9s ritka, \xE9s elfogadhat\xF3, hogy n\xE9ha \xFAjra kell pr\xF3b\xE1lni/\xE9rtes\xEDteni a felhaszn\xE1l\xF3t; j\xF3 sk\xE1l\xE1zhat\xF3s\xE1g, nincs hossz\xFA z\xE1rol\xE1s.
- Pesszimista (\`UPDLOCK\`/\`SELECT ... FOR UPDATE\`) \u2192 ha az \xFCtk\xF6z\xE9s gyakori, \xE9s kritikus, hogy egyszerre csak egy tranzakci\xF3 dolgozhasson az adott soron (pl. p\xE9nz\xFCgyi egyenleg, k\xE9szletfoglal\xE1s); \xE1ra a rosszabb konkurrens \xE1tbocs\xE1t\xF3k\xE9pess\xE9g \xE9s a deadlock-kock\xE1zat.
- Magasabb izol\xE1ci\xF3s szint (\`SERIALIZABLE\`) csak akkor indokolt, ha a \`READ COMMITTED\`/optimista megold\xE1s mellett bizony\xEDtottan el\u0151fordulnak konzisztencia-probl\xE9m\xE1k (pl. phantom read \xE9rz\xE9keny riportok, \xF6sszegz\xE9sek) \u2013 alapb\xF3l a legt\xF6bb OLTP rendszer \`READ COMMITTED\`-del (vagy \`SNAPSHOT\`-tal) fut j\xF3l.

## EF Core TPH, TPT, TPC (TPH: EF Core 1.0+ \xB7 TPT: EF Core 5.0+ \xB7 TPC: EF Core 7.0+) https://learn.microsoft.com/ef/core/modeling/inheritance {#ef-core-tph-tpt-tpc}

*Verzi\xF3: TPH: EF Core 1.0, TPT: EF Core 5.0, TPC: EF Core 7.0.*

1. TPH (Table Per Hierarchy) \u2013 minden lesz\xE1rmazott egy t\xE1bl\xE1ban, diszkrimin\xE1tor oszloppal.
\`\`\`csharp
modelBuilder.Entity<Vehicle>().HasDiscriminator<string>("VehicleType");
\`\`\`
Haszn\xE1lat: kevesebb t\xE1bla, hasonl\xF3 tulajdons\xE1g\xFA t\xEDpusok eset\xE9n.

2. TPT (Table Per Type) \u2013 minden entit\xE1s saj\xE1t t\xE1bl\xE1t kap, rel\xE1ci\xF3val.
\`\`\`csharp
modelBuilder.Entity<Car>().ToTable("Cars");
modelBuilder.Entity<Bike>().ToTable("Bikes");
\`\`\`
Haszn\xE1lat: \xF6sszetettebb adatstrukt\xFAr\xE1k, felesleges oszlopok elker\xFCl\xE9se.

3. TPC (Table Per Concrete Type) \u2013 minden konkr\xE9t t\xEDpus saj\xE1t, teljes t\xE1bl\xE1t kap, \xF6r\xF6kl\xE9s n\xE9lk\xFCli rel\xE1ci\xF3val.
Haszn\xE1lat: ha nincs sz\xFCks\xE9g rel\xE1ci\xF3ra a lesz\xE1rmazottak k\xF6z\xF6tt, \xE9s el akarjuk ker\xFClni a diszkrimin\xE1toroszlopot.

\xD6sszegz\xE9s: TPH hat\xE9konyabb hasonl\xF3 mez\u0151kn\xE9l, TPT r\xE9szletesebb sz\xE9tv\xE1lasztott adatokn\xE1l, TPC ha nincs sz\xFCks\xE9g kapcsolatra az entit\xE1sok k\xF6z\xF6tt.

## EF Core transaction handling (Unit of Work vari\xE1ci\xF3) (EF Core 1.0+) https://learn.microsoft.com/ef/core/saving/transactions {#ef-core-transaction-handling-unit-of-work-variacio}

Unit of Work n\xE9lk\xFCl \u2013 k\xF6zvetlen tranzakci\xF3kezel\xE9s a DbContext-en kereszt\xFCl:
\`\`\`csharp
using var transaction = await context.Database.BeginTransactionAsync();
try
{
    var entity = new Entity { Name = "Test" };
    context.Add(entity);
    await context.SaveChangesAsync();

    var otherEntity = new OtherEntity { Name = "Other Test" };
    context.Add(otherEntity);
    await context.SaveChangesAsync();

    await transaction.CommitAsync();
}
catch (Exception ex)
{
    await transaction.RollbackAsync();
}
\`\`\`

Unit of Work mint\xE1val \u2013 tranzakci\xF3k kezel\xE9se egy UnitOfWork oszt\xE1lyon kereszt\xFCl, ha t\xF6bb repository-t kezel\xFCnk egy tranzakci\xF3n bel\xFCl:
\`\`\`csharp
public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _context;
    public UnitOfWork(ApplicationDbContext context) => _context = context;

    public async Task CompleteAsync()
    {
        using var transaction = await _context.Database.BeginTransactionAsync();
        try
        {
            await _context.SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}
\`\`\`

AutoMapper a tranzakci\xF3n bel\xFCl:
\`\`\`csharp
try
{
    var entity = await _context.Entities.FirstOrDefaultAsync(e => e.Id == id);
    await _context.SaveChangesAsync();
    var mappedEntity = _mapper.Map<EntityDto>(entity);
    return mappedEntity;
}
catch (Exception ex)
{
    throw;
}
\`\`\`

Mikor melyik? Unit of Work n\xE9lk\xFCl egyszer\u0171bb tranzakci\xF3khoz elegend\u0151; Unit of Work mint\xE1val nagyobb alkalmaz\xE1sokn\xE1l, t\xF6bb repository-b\xF3l \xE1ll\xF3 tranzakci\xF3khoz.

## EF Core performance optimization strategies (EF Core 1.0+) https://learn.microsoft.com/ef/core/performance/ {#ef-core-performance-optimization-strategies}

*Verzi\xF3: \`AsNoTracking\`: EF Core 1.0, compiled query: EF Core 2.0, \`AsSplitQuery\`: EF Core 5.0, \`ExecuteUpdate\`/\`ExecuteDelete\`: EF Core 7.0, complex types: EF Core 8.0.*

1. Eager Loading \u2013 ha el\u0151re tudjuk, hogy sz\xFCks\xE9g lesz kapcsol\xF3d\xF3 adatokra.
\`\`\`csharp
var orders = context.Orders.Include(o => o.Customer).ToList();
\`\`\`

2. Projection \u2013 csak a sz\xFCks\xE9ges mez\u0151k lek\xE9r\xE9se.
\`\`\`csharp
var customerNames = context.Customers.Select(c => new { c.Name }).ToList();
\`\`\`

3. Batching \u2013 t\xF6bb m\u0171velet egyidej\u0171 v\xE9grehajt\xE1sa.
\`\`\`csharp
context.BulkInsert(entities);
\`\`\`

4. AsNoTracking \u2013 csak olvas\xE1si m\u0171veletekn\xE9l.
\`\`\`csharp
var customers = context.Customers.AsNoTracking().ToList();
\`\`\`

5. Indexing \u2013 gyakran sz\u0171rt oszlopokon.
\`\`\`csharp
modelBuilder.Entity<Customer>().HasIndex(c => c.Email);
\`\`\`

6. Pooling \u2013 nagy terhel\xE9s\u0171 alkalmaz\xE1sokn\xE1l, cs\xF6kkentve a DbContext p\xE9ld\xE1nyos\xEDt\xE1si id\u0151t.
\`\`\`csharp
services.AddDbContextPool<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
\`\`\`

## EF Core In-Memory database (EF Core 1.0+) https://learn.microsoft.com/ef/core/providers/in-memory/ {#ef-core-in-memory-database}

Az In-Memory Database Provider els\u0151sorban tesztel\xE9sre szolg\xE1l, val\xF3di adatb\xE1zis-kapcsolat n\xE9lk\xFCl.

\`\`\`csharp
var options = new DbContextOptionsBuilder<ApplicationDbContext>()
    .UseInMemoryDatabase(databaseName: "TestDb")
    .Options;

using var context = new ApplicationDbContext(options);
context.Add(new User { Name = "Test User" });
context.SaveChanges();

var user = context.Users.FirstOrDefault();
Console.WriteLine(user?.Name); // Test User
\`\`\`

Haszn\xE1lati esetek: egys\xE9gtesztek, gyors tesztek (mem\xF3ri\xE1ban fut, gyorsabb a val\xF3di adatb\xE1zisn\xE1l).

## Middleware (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/fundamentals/middleware/ {#middleware}

*Verzi\xF3: ASP.NET Core 1.0-t\xF3l.*

A middleware olyan komponens, amely az HTTP k\xE9r\xE9sek \xE9s v\xE1laszok feldolgoz\xE1sa k\xF6zben fut.

1. Hiteles\xEDt\xE9s \xE9s Jogosults\xE1gkezel\xE9s:
\`\`\`csharp
app.Use(async (context, next) =>
{
    if (!context.User.Identity.IsAuthenticated)
    {
        context.Response.StatusCode = 401;
        return;
    }
    await next();
});
\`\`\`

2. Kiv\xE9telkezel\xE9s:
\`\`\`csharp
app.UseExceptionHandler("/error");
\`\`\`

3. K\xF6vet\xE9si Napl\xF3z\xE1s:
\`\`\`csharp
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    await next();
});
\`\`\`

4. Caching:
\`\`\`csharp
app.UseResponseCaching();
\`\`\`

5. CORS \u2013 \xE9lesben soha ne \`AllowAnyOrigin()\`; l\xE1sd a biztons\xE1gos policy-t a "Biztons\xE1gi alapok API-kn\xE1l" fejezetben:
\`\`\`csharp
app.UseCors(policy => policy
    .WithOrigins("https://app.example.com")
    .AllowAnyHeader()
    .AllowAnyMethod());
\`\`\`

M\u0171k\xF6d\xE9s: a middleware-ek sorrendben h\xEDv\xF3dnak meg minden k\xE9r\xE9s/v\xE1lasz feldolgoz\xE1sakor; a hozz\xE1ad\xE1s sorrendje hat\xE1rozza meg a v\xE9grehajt\xE1si sorrendet.

A teljes javasolt pipeline-sorrend, a saj\xE1t middleware h\xE1rom megval\xF3s\xEDt\xE1si form\xE1ja, az el\xE1gaz\xE1s (\`UseWhen\`/\`Map\`) \xE9s a middleware/filter/behavior elhat\xE1rol\xE1s a "Middleware r\xE9szletesen" fejezetben.

## JWT, OAuth, OpenId Connect (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/security/authentication/ {#jwt-oauth-openid-connect}

JWT (JSON Web Token) \u2013 **tokenform\xE1tum** (al\xE1\xEDrt, inform\xE1ci\xF3t hordoz\xF3 token). Mag\xE1ban nem autentik\xE1ci\xF3s protokoll: API-k tipikusan Bearer JWT-t valid\xE1lnak (issuer, audience, al\xE1\xEDr\xE1s, lej\xE1rat).

Saj\xE1t token kiad\xE1s\xE1hoz k\xF6telez\u0151 a \`SigningCredentials\` (\xE9s \xE1ltal\xE1ban issuer/audience/\xE9lettartam); al\xE1\xEDr\xE1s n\xE9lk\xFCl a token nem haszn\xE1lhat\xF3 biztons\xE1gosan:
\`\`\`csharp
var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey));
var tokenHandler = new JwtSecurityTokenHandler();
var token = tokenHandler.CreateToken(new SecurityTokenDescriptor
{
    Subject = new ClaimsIdentity(new[] { new Claim("sub", "user1") }),
    Issuer = "https://api.example.com",
    Audience = "my-api",
    Expires = DateTime.UtcNow.AddMinutes(15),
    SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
});
var jwt = tokenHandler.WriteToken(token);
\`\`\`

API oldalon gyakrabban IdP JWKS alapj\xE1n valid\xE1lunk (\`AddJwtBearer\`), saj\xE1t kiad\xE1s helyett \u2014 l\xE1sd Keycloak / Duende fejezetek.

OAuth 2.0 \u2013 **deleg\xE1lt autoriz\xE1ci\xF3s** keretrendszer (hozz\xE1f\xE9r\xE9s harmadik f\xE9l er\u0151forr\xE1saihoz / API-khoz scope-okkal).
\`\`\`csharp
services.AddAuthentication().AddOAuth("provider", options =>
{
    options.ClientId = "id";
    options.ClientSecret = "secret";
    options.CallbackPath = "/signin";
    options.AuthorizationEndpoint = "https://provider.example.com/oauth/authorize";
    options.TokenEndpoint = "https://provider.example.com/oauth/token";
});
\`\`\`

OpenID Connect \u2013 az OAuth 2.0-ra \xE9p\xFCl\u0151 **identit\xE1s**r\xE9teg (ID token, userinfo, SSO).
\`\`\`csharp
services.AddAuthentication().AddOpenIdConnect("provider", options =>
{
    options.Authority = "https://idp.example.com";
    options.ClientId = "id";
    options.ClientSecret = "secret";
    options.ResponseType = "code";
});
\`\`\`

Melyiket mikor? JWT: a token form\xE1tuma (gyakran Bearer az API-n). OAuth 2.0: hozz\xE1f\xE9r\xE9s-deleg\xE1l\xE1s / authorization code, client credentials stb. OpenID Connect: felhaszn\xE1l\xF3-azonos\xEDt\xE1s \xE9s SSO az OAuth f\xF6l\xF6tt.

## ASP.NET core Caching strategies (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/performance/caching/overview {#asp-net-core-caching-strategies}

*Verzi\xF3: \`IMemoryCache\`/\`IDistributedCache\`: ASP.NET Core 1.0-t\xF3l; Output Caching: .NET 7; \`HybridCache\`: .NET 9.*

1. In-Memory Cache \u2013 egy szerveren fut\xF3 alkalmaz\xE1s, gyors lok\xE1lis el\xE9r\xE9s.
\`\`\`csharp
var cacheOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(5));
_cache.Set("key", data, cacheOptions);
var cachedData = _cache.Get("key");
\`\`\`

2. Distributed Cache (Redis, SQL Server) \u2013 t\xF6bb szerveren fut\xF3/sk\xE1l\xE1zott k\xF6rnyezet.
\`\`\`csharp
await _distributedCache.SetStringAsync("key", data);
var cachedData = await _distributedCache.GetStringAsync("key");
\`\`\`

3. Response Caching \u2013 statikus oldalak/API v\xE1laszok gyors\xEDt\xF3t\xE1raz\xE1sa.
\`\`\`csharp
[ResponseCache(Duration = 60)]
public IActionResult GetData() => Ok(data);
\`\`\`

4. Cache Tag Helper \u2013 n\xE9zetkomponens gyors\xEDt\xF3t\xE1raz\xE1sa.
\`\`\`html
<cache expires-after="00:05:00"><p>@DateTime.Now</p></cache>
\`\`\`

\xD6sszefoglal\xE1s: In-Memory gyors lok\xE1lis t\xE1rol\xE1shoz, Distributed t\xF6bb szerveres k\xF6rnyezethez, Response Caching statikus API v\xE1laszokhoz, Cache Tag Helper dinamikus n\xE9zetekhez.

## Extension method \u2013 klasszikus alap (C# 3.0+) https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods {#extension-method-klasszikus-alap}

*Verzi\xF3: C# 3.0-t\xF3l; kiterjesztett tagok (extension members, property/statikus): C# 14 / .NET 10.*

Egy ImageFilter oszt\xE1ly \xE9s egy hozz\xE1 tartoz\xF3 extension method sz\u0171r\xE9shez: az ApplyFilter kiterjeszt\xE9si met\xF3dus opcion\xE1lisan alkalmazza a sz\u0171r\xE9st.

\`\`\`csharp
public class ImageFilter
{
    public Guid PersonId { get; set; }
    public string? ImageType { get; set; }
}

public static class ImageExtensions
{
    public static IQueryable<Image> ApplyFilter(this IQueryable<Image> query, ImageFilter? filter)
    {
        if (filter == null) return query;
        query = query.Where(i => i.PersonId == filter.PersonId);
        if (!string.IsNullOrEmpty(filter.ImageType))
            query = query.Where(i => i.ImageType == filter.ImageType);
        return query;
    }
}

public class ImageRepository
{
    private readonly YourDbContext _context;
    public ImageRepository(YourDbContext context) => _context = context;

    public async Task<List<Image>> GetImagesByPersonId(ImageFilter? filter) =>
        await _context.Images.ApplyFilter(filter).ToListAsync();
}
\`\`\`

## .NET 7 \xDAjdons\xE1gai C# 11 (.NET 7 / C# 11) https://learn.microsoft.com/dotnet/core/whats-new/dotnet-7 {#net-7-ujdonsagai-c-11}

- required property Name \u2192 k\xF6telez\u0151 Name property
- Generic Math \u2192 Add<T>(T a, T b)
- ExecuteUpdateAsync (EF Core) \u2192 m\xF3dos\xEDt\xE1s bet\xF6lt\xE9s n\xE9lk\xFCl
- Route Grouping \u2192 Minimal API /users csoport
- TryGetNonEnumeratedCount() \u2192 hat\xE9kony elemsz\xE1ml\xE1l\xE1s
- Span<char> switch \u2192 switch "hello" span-ra
- await foreach cancellation \u2192 WithCancellation(ct)

## Extension method \u2013 minden, amit tudni \xE9rdemes (C# 3.0+) https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods {#extension-method-minden-amit-tudni-erdemes}

*Verzi\xF3: C# 3.0-t\xF3l; C# 14-ben \`extension\` blokk (extension property, oper\xE1tor, statikus tag).*

Mi az extension method?
Az extension method (kiterjeszt\xE9si met\xF3dus) lehet\u0151v\xE9 teszi, hogy egy megl\xE9v\u0151 t\xEDpushoz (ak\xE1r olyanhoz is, amelynek nincs hozz\xE1f\xE9r\xE9s\xFCnk a forr\xE1sk\xF3dj\xE1hoz, pl. string, int, IEnumerable<T>) \xFAj met\xF3dust adjunk hozz\xE1 an\xE9lk\xFCl, hogy m\xF3dos\xEDtan\xE1nk a t\xEDpus defin\xEDci\xF3j\xE1t, \xF6r\xF6kl\u0151dn\xE9nk bel\u0151le, vagy \xFAjraford\xEDtan\xE1nk. C# 3.0 \xF3ta (2007) l\xE9tezik, \xE9s a LINQ (Where, Select, OrderBy stb.) is extension methodokra \xE9p\xFCl.

Szintaxis \xE9s szab\xE1lyok
- Csak static oszt\xE1lyban, static met\xF3dusk\xE9nt defini\xE1lhat\xF3.
- Az els\u0151 param\xE9ter el\u0151tt a \`this\` kulcssz\xF3 jelzi, hogy melyik t\xEDpust b\u0151v\xEDtj\xFCk.
- A met\xF3dus \xFAgy h\xEDvhat\xF3 meg, mintha a kiterjesztett t\xEDpus tagja lenne (instance method szintaxissal).

\`\`\`csharp
public static class StringExtensions
{
    public static bool IsNullOrEmptyCustom(this string value)
    {
        return string.IsNullOrEmpty(value);
    }

    public static string Truncate(this string value, int maxLength)
    {
        if (string.IsNullOrEmpty(value) || value.Length <= maxLength) return value;
        return value.Substring(0, maxLength) + "...";
    }
}
\`\`\`

Haszn\xE1lat:
\`\`\`csharp
string name = "Hello World";
bool isEmpty = name.IsNullOrEmptyCustom(); // false
string shortName = name.Truncate(5);       // "Hello..."
\`\`\`

Generikus extension method
\`\`\`csharp
public static class EnumerableExtensions
{
    public static bool IsNullOrEmpty<T>(this IEnumerable<T>? source)
    {
        return source == null || !source.Any();
    }

    public static IEnumerable<T> WhereNotNull<T>(this IEnumerable<T?> source) where T : class
    {
        return source.Where(x => x != null)!;
    }
}
\`\`\`

Extension method interf\xE9szen (nagyon gyakori minta)
\`\`\`csharp
public interface IRepository<T> { IQueryable<T> GetAll(); }

public static class RepositoryExtensions
{
    public static IQueryable<T> Paginate<T>(this IQueryable<T> query, int page, int pageSize)
    {
        return query.Skip((page - 1) * pageSize).Take(pageSize);
    }
}
\`\`\`

Method resolution order (fontos szab\xE1ly)
Ha egy t\xEDpusnak van egy azonos szignat\xFAr\xE1j\xFA instance met\xF3dusa, akkor a ford\xEDt\xF3 MINDIG az instance met\xF3dust r\xE9szes\xEDti el\u0151nyben az extension methoddal szemben. Az extension method csak "utols\xF3 lehet\u0151s\xE9gk\xE9nt", overload resolution ut\xE1n ker\xFCl sz\xF3ba, ha nincs jobban illeszked\u0151 instance tag. Emiatt egy extension method soha nem tudja "fel\xFCl\xEDrni" egy t\xEDpus saj\xE1t met\xF3dus\xE1t, csak akkor h\xEDv\xF3dik meg, ha az adott met\xF3dus a t\xEDpuson (vagy az \xF6r\xF6kl\xE9si l\xE1ncban) nem l\xE9tezik.

Namespace \xE9s using
Az extension methodokat tartalmaz\xF3 static oszt\xE1ly namespace-\xE9t be kell import\xE1lni (\`using Namespace;\`), k\xFCl\xF6nben a met\xF3dus nem lesz l\xE1that\xF3 IntelliSense-ben \xE9s ford\xEDt\xE1si hib\xE1t kapunk. Ez az egyik oka annak, hogy nagyobb projektekn\xE9l c\xE9lszer\u0171 az extension methodokat logikusan csoportos\xEDtva, j\xF3l elnevezett namespace-ekbe/mapp\xE1kba (pl. Extensions/StringExtensions.cs) szervezni.

Mikor \xE9rdemes extension methodot haszn\xE1lni?
1. Ha egy k\xFCls\u0151/lez\xE1rt (sealed vagy harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3, pl. string, DateTime, IEnumerable<T>) t\xEDpushoz szeretn\xE9nk seg\xE9dfunkci\xF3t adni.
2. Fluent API kialak\xEDt\xE1s\xE1hoz (pl. IServiceCollection.AddXyz() mint\xE1k ASP.NET Core-ban: \`AddControllers()\`, \`AddSwaggerGen()\`).
3. LINQ-st\xEDlus\xFA, l\xE1ncolhat\xF3 lek\xE9rdez\xE9s-\xE9p\xEDt\u0151 met\xF3dusokhoz (pl. \`query.ApplyFilter(filter).Paginate(page, size)\`).
4. Ha a met\xF3dus logikailag egy t\xEDpushoz kapcsol\xF3dik, de nem indokolt vagy nem lehets\xE9ges azt a t\xEDpus defin\xEDci\xF3j\xE1ba felvenni (pl. DTO-k, gener\xE1lt k\xF3d, harmadik f\xE9lt\u0151l j\xF6v\u0151 NuGet t\xEDpusok).
5. Tesztelhet\u0151s\xE9g \xE9s Separation of Concerns jav\xEDt\xE1s\xE1ra \u2013 a seg\xE9dlogika kiker\xFCl a domain/entit\xE1s oszt\xE1lyb\xF3l.

Mikor NE haszn\xE1ljunk extension methodot?
- Ha a logika szorosan a t\xEDpus bels\u0151 \xE1llapot\xE1hoz (priv\xE1t mez\u0151ihez) kapcsol\xF3dik \u2013 akkor ink\xE1bb instance met\xF3dus vagy a t\xEDpus saj\xE1t tagja legyen.
- Ha a met\xF3dus \xFCzleti/domain logik\xE1t val\xF3s\xEDt meg, amelynek a domain modellen (Rich Domain Model) lenne a helye \u2013 ne "extension methodos\xEDtsunk ki" mindent a tesztelhet\u0151s\xE9g \xFCr\xFCgy\xE9n, mert sz\xE9tesik a domain viselked\xE9se.
- Ha state-et (\xE1llapotot) kellene t\xE1rolnia \u2013 extension method nem t\xE1rolhat \xE1llapotot (mivel static met\xF3dus), csak a param\xE9terk\xE9nt kapott objektumon dolgozhat.
- T\xFAlzott, indokolatlan haszn\xE1lat eset\xE9n nehezebben k\xF6vethet\u0151, "hova lett implement\xE1lva ez a met\xF3dus" jelleg\u0171 k\xF3d keletkezhet.

Extension method vs. statikus seg\xE9dmet\xF3dus (helper class)
Egy hagyom\xE1nyos statikus seg\xE9dmet\xF3dus (pl. \`StringHelper.Truncate(name, 5)\`) funkcion\xE1lisan ekvivalens, de az extension method szintaktikailag olvashat\xF3bb, l\xE1ncolhat\xF3 (fluent), \xE9s jobban illeszkedik az IntelliSense-be (a \`.\` ut\xE1n megjelenik a lehets\xE9ges met\xF3dusok k\xF6z\xF6tt), mik\xF6zben a ford\xEDtott k\xF3d m\xF6g\xF6ttesen ugyanaz: egy static met\xF3dush\xEDv\xE1s.

Extension property, extension static tagok \u2013 C# 14 / .NET 10 \xFAjdons\xE1g
A hagyom\xE1nyos extension method (this param\xE9teres static met\xF3dus) 2007 \xF3ta csak met\xF3dusokat tett lehet\u0151v\xE9 \u2013 property-t, oper\xE1tort vagy static tagot nem lehetett hozz\xE1adni egy t\xEDpushoz. A C# 14 (amely a .NET 10-zel \xE9rkezett, 2025 november) bevezette az "extension block" (extension members) szintaxist, amely mindezt lehet\u0151v\xE9 teszi:

\`\`\`csharp
public static class StringExtensions
{
    extension(string str)
    {
        // Extension property
        public bool IsPalindrome =>
            str.SequenceEqual(str.Reverse());

        // Extension instance method (\xFAj szintaxis)
        public string Shout() => str.ToUpper() + "!";
    }

    extension(string) // t\xEDpusra vonatkoz\xF3 (static) extension tagok
    {
        public static string Empty2 => string.Empty;
    }
}

// Haszn\xE1lat:
bool isPalindrome = "racecar".IsPalindrome;
\`\`\`

Ez a r\xE9gi \`this string str\` szintaxist egy struktur\xE1ltabb, felfedezhet\u0151bb modellre cser\xE9li, \xE9s property-ket, indexereket, oper\xE1torokat \xE9s static tagokat is lehet\u0151v\xE9 tesz \u2014 nem csak met\xF3dusokat.

\xD6sszefoglal\xE1s
Az extension method a C# egyik legfontosabb eszk\xF6ze a megl\xE9v\u0151 t\xEDpusok (f\u0151leg lez\xE1rt/harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 t\xEDpusok) API-j\xE1nak b\u0151v\xEDt\xE9s\xE9re \xFAjraford\xEDt\xE1s vagy \xF6r\xF6kl\xE9s n\xE9lk\xFCl. Alapja a LINQ-nak \xE9s sz\xE1mos ASP.NET Core fluent regisztr\xE1ci\xF3s API-nak. Haszn\xE1latakor figyelni kell a namespace importra, a method resolution sorrendre (instance met\xF3dus mindig el\u0151nyt \xE9lvez), \xE9s arra, hogy ne ker\xFClj\xF6n bele domain-logika, amelynek val\xF3j\xE1ban a t\xEDpus saj\xE1t viselked\xE9sek\xE9nt kellene l\xE9teznie.

## Mikor haszn\xE1ljunk sync \xE9s mikor async API met\xF3dusokat (C# 5.0+ / .NET 4.5+) https://learn.microsoft.com/aspnet/core/fundamentals/best-practices {#mikor-hasznaljunk-sync-es-mikor-async-api-metodusokat}

Az ASP.NET Core (\xE9s \xE1ltal\xE1ban a .NET) API-k tervez\xE9sekor alapvet\u0151 d\xF6nt\xE9s, hogy egy adott v\xE9gpont/met\xF3dus szinkron vagy aszinkron (async/await, Task-alap\xFA) legyen-e. A helyes v\xE1laszt\xE1s jelent\u0151sen befoly\xE1solja a sk\xE1l\xE1zhat\xF3s\xE1got \xE9s a sz\xE1lkezel\xE9s hat\xE9konys\xE1g\xE1t.

Mi\xE9rt fontos ez?
Az ASP.NET Core k\xE9r\xE9sfeldolgoz\xE1s a Thread Pool sz\xE1lait haszn\xE1lja. Ha egy sz\xE1l egy I/O-m\u0171veletre (adatb\xE1zis, h\xE1l\xF3zat, f\xE1jlrendszer) szinkron m\xF3don v\xE1r, az a sz\xE1l blokkolva marad, \xE9s nem tud m\xE1sik bej\xF6v\u0151 k\xE9r\xE9st kiszolg\xE1lni, am\xEDg a m\u0171velet be nem fejez\u0151dik. Async/await eset\xE9n a sz\xE1l a v\xE1rakoz\xE1s idej\xE9re visszaker\xFCl a Thread Poolba, \xE9s m\xE1s k\xE9r\xE9seket szolg\xE1lhat ki, majd a m\u0171velet befejezt\xE9vel egy (esetleg m\xE1sik) sz\xE1l folytatja a v\xE9grehajt\xE1st. Ez nagy terhel\xE9s (sok egyidej\u0171 k\xE9r\xE9s) eset\xE9n drasztikusan jobb \xE1tbocs\xE1t\xF3k\xE9pess\xE9get (throughput) \xE9s sk\xE1l\xE1zhat\xF3s\xE1got eredm\xE9nyez.

Mikor haszn\xE1ljunk async met\xF3dust (ez legyen az alap\xE9rtelmezett)
1. I/O-k\xF6t\xF6tt (I/O-bound) m\u0171veletekn\xE9l mindig: adatb\xE1zis-lek\xE9rdez\xE9s (EF Core: \`ToListAsync()\`, \`SaveChangesAsync()\`, \`FirstOrDefaultAsync()\`), k\xFCls\u0151 API h\xEDv\xE1s (\`HttpClient.GetAsync()\`), f\xE1jl olvas\xE1s/\xEDr\xE1s (\`File.ReadAllTextAsync()\`), \xFCzenetsor (RabbitMQ, Service Bus) kommunik\xE1ci\xF3, gRPC h\xEDv\xE1sok.
2. Webes API kontrollerekben \xE9s minimal API handlerekben szinte mindig, mert a HTTP k\xE9r\xE9s kiszolg\xE1l\xE1sa jellemz\u0151en valamilyen I/O-t (adatb\xE1zis, k\xFCls\u0151 szolg\xE1ltat\xE1s) tartalmaz, \xE9s a szerver sok egyidej\u0171 k\xE9r\xE9st fogad.
3. Sk\xE1l\xE1zand\xF3, nagy terhel\xE9s\u0171 (magas konkurrencia) szolg\xE1ltat\xE1sokn\xE1l, ahol a Thread Pool sz\xE1lak felszabad\xEDt\xE1sa kritikus a v\xE1laszid\u0151 \xE9s a kiszolg\xE1lhat\xF3 k\xE9r\xE9ssz\xE1m szempontj\xE1b\xF3l.
4. Ha egy met\xF3dus t\xF6bb async m\u0171veletet h\xEDv meg \xE9s \xE9sszer\u0171 \u0151ket p\xE1rhuzamosan futtatni (\`Task.WhenAll\`), mert \xEDgy az \xF6sszes\xEDtett v\xE1rakoz\xE1si id\u0151 minimaliz\xE1lhat\xF3.

\`\`\`csharp
// Helyes: I/O-k\xF6t\xF6tt EF Core lek\xE9rdez\xE9s async-k\xE9nt
[HttpGet("{id}")]
public async Task<IActionResult> GetOrder(int id)
{
    var order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == id);
    return order == null ? NotFound() : Ok(order);
}

// T\xF6bb f\xFCggetlen I/O m\u0171velet p\xE1rhuzamos\xEDt\xE1sa
var ordersTask = _context.Orders.ToListAsync();
var customersTask = _context.Customers.ToListAsync();
await Task.WhenAll(ordersTask, customersTask);
\`\`\`

Mikor j\xF3 / elegend\u0151 a sync (szinkron) met\xF3dus
1. Tiszt\xE1n CPU-k\xF6t\xF6tt (CPU-bound), r\xF6vid, mem\xF3ri\xE1ban v\xE9gzett sz\xE1m\xEDt\xE1sokn\xE1l, ahol nincs I/O-v\xE1rakoz\xE1s (pl. egy \xF6sszeg kisz\xE1m\xEDt\xE1sa egy m\xE1r bet\xF6lt\xF6tt list\xE1n, string form\xE1z\xE1s, egyszer\u0171 valid\xE1ci\xF3). Az async/await ilyenkor csak felesleges overheadet (state machine gener\xE1l\xE1s, context switching) ad hozz\xE1, val\xF3s el\u0151nyt nem.
2. R\xF6vid \xE9let\u0171 konzol-/parancssori eszk\xF6z\xF6kn\xE9l vagy egyszer\u0171, alacsony konkurrenci\xE1j\xFA bels\u0151 szkriptekn\xE9l, ahol a sk\xE1l\xE1zhat\xF3s\xE1g nem szempont.
3. Ha egy szinkron API-t (pl. r\xE9gi, csak sync met\xF3dusokat k\xEDn\xE1l\xF3 k\xF6nyvt\xE1r) kell h\xEDvni, \xE9s nincs async megfelel\u0151je \u2013 ilyenkor nem \xE9rdemes mesters\xE9gesen \`Task.Run\`-nal "aszinkroniz\xE1lni", mert az csak egy plusz Thread Pool sz\xE1lat foglal le a blokkol\xF3 h\xEDv\xE1s idej\xE9re, val\xF3di sk\xE1l\xE1z\xE1si el\u0151ny n\xE9lk\xFCl (s\u0151t, szerver oldalon ink\xE1bb \xE1rt).
4. Egyszer\u0171, tiszt\xE1n szinkron property-lek\xE9rdez\xE9sekn\xE9l, konstruktorokban (konstruktor soha nem lehet async).

Amit mindenk\xE9pp ker\xFClni kell
- \`.Result\` vagy \`.Wait()\` h\xEDv\xE1sa egy async met\xF3duson szinkron kontextusb\xF3l \u2013 ez k\xF6nnyen deadlockhoz vezethet (klasszikus ASP.NET-ben a SynchronizationContext miatt, de \xE9rdemes mindenhol elker\xFClni) \xE9s blokkolja a h\xEDv\xF3 sz\xE1lat, elveszve az async minden el\u0151ny\xE9t.
- "async void" met\xF3dusok \xEDr\xE1sa (kiv\xE9ve event handlerek) \u2013 kiv\xE9telkezel\xE9s \xE9s tesztelhet\u0151s\xE9g szempontj\xE1b\xF3l probl\xE9m\xE1s, mivel a h\xEDv\xF3 nem tudja megv\xE1rni a befejez\xE9s\xE9t, \xE9s a kiv\xE9tel nem propag\xE1l\xF3dik norm\xE1l m\xF3don.
- Vegyes (szinkron blokkol\xF3 h\xEDv\xE1s async met\xF3duson bel\xFCl) k\xF3d, amely blokkolja a sz\xE1lat, mik\xF6zben a met\xF3dus "async"-nek van jel\xF6lve.
- Async met\xF3dus \xEDr\xE1sa, ha nincs benne semmilyen val\xF3di await \u2013 ilyenkor felesleges a Task becsomagol\xE1s, el\xE9g a sync verzi\xF3 (vagy ha az interf\xE9sz megk\xF6veteli az async szignat\xFAr\xE1t, \`Task.FromResult(...)\`-tal lehet megoldani await n\xE9lk\xFCl).

\xD6k\xF6lszab\xE1ly
- Adatb\xE1zis-, h\xE1l\xF3zat-, f\xE1jl- vagy egy\xE9b I/O-m\u0171veletet v\xE9gz\u0151 met\xF3dus \u2192 async, v\xE9gig az eg\xE9sz h\xEDv\xE1si l\xE1ncon ("async all the way").
- Tiszta, mem\xF3ri\xE1ban fut\xF3, gyors sz\xE1m\xEDt\xE1s \u2192 sync, kiv\xE9ve ha a h\xEDv\xF3 fel\xFClet (pl. egy m\xE1r megl\xE9v\u0151 async interf\xE9sz) m\xE1st k\xE9nyszer\xEDt ki.
- K\xF6nyvt\xE1r (library) fejleszt\xE9s\xE9n\xE9l c\xE9lszer\u0171 mindk\xE9t verzi\xF3t (sync \xE9s async) felk\xEDn\xE1lni, ha van \xE9rtelme mindkett\u0151nek (ahogy pl. az EF Core is teszi: \`SaveChanges()\` \xE9s \`SaveChangesAsync()\`), hogy a fogyaszt\xF3 eld\xF6nthesse, melyikre van sz\xFCks\xE9ge.

## SQL lass\xFA query \u2013 mit kell ellen\u0151rizni {#sql-lassu-query-mit-kell-ellenorizni}

Ha egy SQL lek\xE9rdez\xE9s (vagy egy EF Core LINQ query m\xF6g\xF6tti gener\xE1lt SQL) lass\xFA, az al\xE1bbi szempontokat \xE9rdemes sorban v\xE9gign\xE9zni.

1. V\xE9grehajt\xE1si terv (Execution Plan) elemz\xE9se
A legels\u0151 l\xE9p\xE9s mindig az execution plan (SQL Server: "Actual Execution Plan", PostgreSQL: \`EXPLAIN ANALYZE\`) megn\xE9z\xE9se. Ez megmutatja, hogy az adatb\xE1zismotor hogyan hajtja v\xE9gre a lek\xE9rdez\xE9st, \xE9s felfedi a sz\u0171k keresztmetszeteket.
\`\`\`sql
-- SQL Server
SET STATISTICS IO ON;
SET STATISTICS TIME ON;
-- majd a lek\xE9rdez\xE9s futtat\xE1sa, vagy Include Actual Execution Plan bekapcsol\xE1sa

-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM Orders WHERE CustomerId = 123;
\`\`\`
Kulcsfontoss\xE1g\xFA jelek a tervben: Table Scan / Seq Scan (index helyett teljes t\xE1blabej\xE1r\xE1s), Key Lookup / Bookmark Lookup nagy sz\xE1mban, magas becs\xFClt vs. t\xE9nyleges sorok k\xF6zti elt\xE9r\xE9s (rossz statisztika jele), Sort vagy Hash Match magas k\xF6lts\xE9ggel.

2. Hi\xE1nyz\xF3 vagy nem megfelel\u0151 indexek
A leggyakoribb ok. Ellen\u0151rizend\u0151: a WHERE, JOIN ON, ORDER BY \xE9s GROUP BY oszlopokon van-e index; \xF6sszetett (composite) index eset\xE9n a sz\u0171r\xE9si sorrend megfelel-e az index oszlopsorrendj\xE9nek; nincs-e az indexelt oszlopon f\xFCggv\xE9nyh\xEDv\xE1s vagy t\xEDpuskonverzi\xF3 a WHERE felt\xE9telben (ez "SARGability"-t t\xF6r, azaz az index nem haszn\xE1lhat\xF3: pl. \`WHERE YEAR(OrderDate) = 2024\` helyett \`WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01'\`); covering index (olyan index, amely tartalmazza a SELECT-ben szerepl\u0151 \xF6sszes oszlopot is, elker\xFClve a Key Lookup-ot) hasznos lehet gyakran fut\xF3 lek\xE9rdez\xE9sekn\xE9l.
\`\`\`sql
CREATE INDEX IX_Orders_CustomerId_OrderDate ON Orders (CustomerId, OrderDate) INCLUDE (TotalAmount);
\`\`\`

3. N+1 lek\xE9rdez\xE9s probl\xE9ma (k\xFCl\xF6n\xF6sen EF Core-n\xE1l)
Ha egy lek\xE9rdez\xE9s helyett ciklusban sok apr\xF3 lek\xE9rdez\xE9s fut (pl. lazy loading miatt minden entit\xE1shoz k\xFCl\xF6n adatb\xE1zis-h\xEDv\xE1s), az drasztikusan lass\xEDtja a rendszert. Ellen\u0151rizz\xFCk: van-e felesleges lazy loading; sz\xFCks\xE9ges-e \`Include()\`/\`ThenInclude()\` a kapcsol\xF3d\xF3 adatokhoz; napl\xF3zzuk-e (pl. EF Core logging vagy SQL Profiler/Extended Events seg\xEDts\xE9g\xE9vel), hogy t\xE9nylegesen h\xE1ny \xE9s milyen SQL parancs fut le egyetlen k\xE9r\xE9s kiszolg\xE1l\xE1sa sor\xE1n.

4. Statisztik\xE1k frissess\xE9ge
Az adatb\xE1zismotor a t\xE1bla statisztik\xE1i (oszlopeloszl\xE1s, sorok sz\xE1ma) alapj\xE1n d\xF6nt a v\xE9grehajt\xE1si tervr\u0151l. Elavult statisztik\xE1k rossz tervet (pl. rossz join sorrendet vagy indexv\xE1laszt\xE1st) eredm\xE9nyezhetnek nagy adatmennyis\xE9g-v\xE1ltoz\xE1s ut\xE1n.
\`\`\`sql
-- SQL Server
UPDATE STATISTICS Orders;
-- PostgreSQL
ANALYZE Orders;
\`\`\`

5. Fragment\xE1lt indexek
Sok \xEDr\xE1si/m\xF3dos\xEDt\xE1si m\u0171velet ut\xE1n az indexek fragment\xE1l\xF3dhatnak, ami lass\xEDtja az olvas\xE1st. Rendszeres index karbantart\xE1s (REBUILD/REORGANIZE) sz\xFCks\xE9ges lehet.

6. T\xFAl sok visszaadott/lek\xE9rt adat (over-fetching)
- \`SELECT *\` helyett csak a t\xE9nylegesen sz\xFCks\xE9ges oszlopok lek\xE9r\xE9se (projekci\xF3).
- Lapoz\xE1s (paging: \`OFFSET\`/\`FETCH\`, illetve EF Core-ban \`Skip().Take()\`) nagy eredm\xE9nyhalmazokn\xE1l.
- EF Core-n\xE1l \`AsNoTracking()\` haszn\xE1lata olvas\xE1s-csak lek\xE9rdez\xE9sekn\xE9l, hogy elker\xFClj\xFCk a felesleges change tracking overheadet.

7. Nem megfelel\u0151 JOIN-ok \xE9s felesleges adatduplik\xE1ci\xF3
- Cartesian product (v\xE9letlen cross join) hi\xE1nyz\xF3 JOIN felt\xE9tel miatt.
- T\xFAl sok egym\xE1sba \xE1gyazott JOIN vagy subquery, amely CTE-vel vagy indexelt n\xE9zettel kiv\xE1lthat\xF3 lenne.
- T\xF6bb egym\xE1st k\xF6vet\u0151 \`Include()\` EF Core-ban, amely "cartesian explosion"-t okozhat (a f\u0151 entit\xE1s duplik\xE1l\xF3dik minden kapcsol\xF3d\xF3 rekordhoz) \u2013 ilyenkor \xE9rdemes split query-t haszn\xE1lni (\`.AsSplitQuery()\`).

8. Param\xE9terez\xE9s \xE9s plan cache (parameter sniffing)
Nem param\xE9terezett (dinamikusan \xF6sszef\u0171z\xF6tt) SQL minden h\xEDv\xE1sn\xE1l \xFAjraford\xEDttatja a tervet (plusz overhead, pl\xE1n cache "szemetel\xE9s"), m\xEDg rosszul param\xE9terezett lek\xE9rdez\xE9sekn\xE9l el\u0151fordulhat, hogy egy nem tipikus param\xE9ter\xE9rt\xE9kre optimaliz\xE1lt (cache-elt) terv fut le minden tov\xE1bbi, elt\xE9r\u0151 eloszl\xE1s\xFA param\xE9terre is (parameter sniffing probl\xE9ma).

9. Z\xE1rol\xE1sok \xE9s blokkol\xE1s (locking, blocking)
Egyidej\u0171 tranzakci\xF3k z\xE1rol\xE1sai (lock, blocking, deadlock) is okozhatnak "lass\xFAs\xE1got", ami val\xF3j\xE1ban v\xE1rakoz\xE1s egy m\xE1sik tranzakci\xF3ra. Ellen\u0151rizend\u0151: hossz\xFA tranzakci\xF3k, t\xFAl magas izol\xE1ci\xF3s szint (pl. Serializable feleslegesen), hi\xE1nyz\xF3 \`READ COMMITTED SNAPSHOT\` / megfelel\u0151 konkurenciakezel\xE9s (l\xE1sd EF Core Concurrency control szekci\xF3).

10. Hardver- \xE9s konfigur\xE1ci\xF3s sz\u0171k keresztmetszetek
- El\xE9gtelen mem\xF3ria (buffer pool / shared_buffers), ami sok lemez I/O-t okoz.
- Lass\xFA lemez alrendszer.
- Rossz connection pool m\xE9retez\xE9s (t\xFAl sok/kev\xE9s kapcsolat az adatb\xE1zis szerver fel\xE9).

11. Alkalmaz\xE1soldali (EF Core) tipikus hib\xE1k ellen\u0151rz\u0151list\xE1ja
- A gener\xE1lt SQL lek\xE9rdezhet\u0151: \`context.Orders.Where(...).ToQueryString()\` (EF Core 5+) vagy logol\xE1ssal (\`.LogTo(Console.WriteLine, LogLevel.Information)\`).
- Kliens oldali ki\xE9rt\xE9kel\xE9s (client-side evaluation) helyett minden sz\u0171r\xE9s/rendez\xE9s ker\xFClj\xF6n az adatb\xE1zis oldal\xE1ra (ne \`ToList()\` ut\xE1n \`Where()\`).
- Split query vs. single query megfelel\u0151 megv\xE1laszt\xE1sa t\xF6bb \`Include()\` eset\xE9n.
- Kompiled query (\`EF.CompileAsyncQuery\`) haszn\xE1lata gyakran ism\xE9tl\u0151d\u0151, statikus lek\xE9rdez\xE9sekn\xE9l extr\xE9m teljes\xEDtm\xE9nykritikus helyeken.

\xD6sszefoglal\xF3 ellen\u0151rz\u0151lista
1. Execution plan megn\xE9z\xE9se.
2. Indexek megl\xE9te \xE9s megfelel\u0151s\xE9ge (SARGable felt\xE9telek, composite index sorrend, covering index).
3. N+1 probl\xE9ma kiz\xE1r\xE1sa.
4. Statisztik\xE1k \xE9s index-fragment\xE1ci\xF3 frissess\xE9ge.
5. Csak a sz\xFCks\xE9ges oszlopok/sorok lek\xE9r\xE9se (projekci\xF3, lapoz\xE1s, AsNoTracking).
6. JOIN-ok \xE9s Include-ok \xE9sszer\u0171s\xE9ge (cartesian explosion elker\xFCl\xE9se, split query).
7. Parameter sniffing \xE9s plan cache viselked\xE9s.
8. Z\xE1rol\xE1sok/blokkol\xE1sok vizsg\xE1lata egyidej\u0171 tranzakci\xF3kn\xE1l.
9. Infrastrukt\xFAra (mem\xF3ria, lemez, connection pool) ellen\u0151rz\xE9se.
10. A gener\xE1lt SQL t\xE9nyleges megtekint\xE9se EF Core eset\xE9n (ToQueryString / logging).

## .NET 8 \xDAjdons\xE1gai C# 12 (.NET 8 / C# 12) https://learn.microsoft.com/dotnet/core/whats-new/dotnet-8 {#net-8-ujdonsagai-c-12}

- Primary constructors oszt\xE1lyokon \xE9s struct-okon \u2192 \`public class Order(int id, Customer customer) { ... }\` \u2013 a konstruktor param\xE9terei k\xF6zvetlen\xFCl el\xE9rhet\u0151k az oszt\xE1ly t\xF6rzs\xE9ben, kevesebb boilerplate (backing mez\u0151 \xE9s k\xFCl\xF6n konstruktor n\xE9lk\xFCl).
- Collection expressions \u2192 egys\xE9ges szintaxis kollekci\xF3k l\xE9trehoz\xE1s\xE1ra: \`int[] numbers = [1, 2, 3];\`, \`List<int> list = [1, 2, 3];\`, spread oper\xE1torral: \`int[] combined = [..array1, ..array2];\`
- Default lambda param\xE9terek \u2192 \`var greet = (string name = "World") => $"Hello, {name}!";\`
- Alias any type \u2192 \`using\` direkt\xEDv\xE1val b\xE1rmilyen t\xEDpusra (tuple-re, array-re, generikusra is) aliast lehet k\xE9sz\xEDteni: \`using Point = (int X, int Y);\`
- ref readonly param\xE9terek met\xF3dusokban.
- Interceptors (el\u0151zetes/experimental funkci\xF3) forr\xE1sk\xF3d-gener\xE1toroknak.
- .NET 8 runtime: Native AOT (Ahead-of-Time) compilation kiterjesztett t\xE1mogat\xE1sa ASP.NET Core-hoz (gyorsabb indul\xE1s, kisebb mem\xF3riaig\xE9ny, kont\xE9neres/serverless workloadokhoz ide\xE1lis).
- Time abstraction: \`TimeProvider\` \xE9s \`ITimer\` \u2013 tesztelhet\u0151, injekt\xE1lhat\xF3 id\u0151-absztrakci\xF3 (nem kell t\xF6bb\xE9 \`DateTime.Now\`-t mockolni).
- \`System.Text.Json\`: jobb teljes\xEDtm\xE9ny, \`JsonSerializerOptions.Web\` preset, forr\xE1s-gener\xE1tor fejleszt\xE9sek.
- Blazor: renderel\xE9si m\xF3dok (Static SSR, Interactive Server, Interactive WebAssembly, Interactive Auto) egy projekten bel\xFCl kombin\xE1lhat\xF3k.
- ASP.NET Core Identity API endpoints (\`MapIdentityApi<TUser>()\`) \u2013 k\xE9sz, azonnal haszn\xE1lhat\xF3 regisztr\xE1ci\xF3/bejelentkez\xE9s v\xE9gpontok.
- Keyed services a be\xE9p\xEDtett DI kont\xE9nerben:
\`\`\`csharp
builder.Services.AddKeyedScoped<IMessageService, EmailMessageService>("email");
builder.Services.AddKeyedScoped<IMessageService, SmsMessageService>("sms");
// felold\xE1s:
public MyService([FromKeyedServices("email")] IMessageService service) { ... }
\`\`\`

## .NET 9 \xDAjdons\xE1gai C# 13 (.NET 9 / C# 13) https://learn.microsoft.com/dotnet/core/whats-new/dotnet-9 {#net-9-ujdonsagai-c-13}

- Params collections \u2192 a \`params\` kulcssz\xF3 eddig csak t\xF6mb\xF6t engedett, C# 13-t\xF3l b\xE1rmilyen gy\u0171jtem\xE9ny t\xEDpus (\`List<T>\`, \`Span<T>\`, \`ReadOnlySpan<T>\`, \`IEnumerable<T>\` stb.) is haszn\xE1lhat\xF3:
\`\`\`csharp
public void PrintNumbers(params IEnumerable<int> numbers) { ... }
\`\`\`
- \`System.Threading.Lock\` \u2192 \xFAj, dedik\xE1lt szinkroniz\xE1ci\xF3s t\xEDpus a hagyom\xE1nyos \`lock (object)\` helyett, gyorsabb \xE9s biztons\xE1gosabb (a ford\xEDt\xF3 figyelmeztet, ha \`Lock\` p\xE9ld\xE1nyt hagyom\xE1nyos objektumk\xE9nt pr\xF3b\xE1lunk z\xE1rolni).
\`\`\`csharp
private readonly Lock _lock = new();
lock (_lock) { /* kritikus szakasz */ }
\`\`\`
- Partial properties \xE9s partial indexerek \u2192 a partial method mint\xE1j\xE1ra property/indexer deklar\xE1ci\xF3ja \xE9s implement\xE1ci\xF3ja sz\xE9tv\xE1laszthat\xF3 (source generatoroknak hasznos, pl. \`[GeneratedRegex]\` attrib\xFAtum property-n).
- \xDAj index a kollekci\xF3 v\xE9g\xE9t\u0151l (\`Index from end\`) objektum-inicializ\xE1l\xF3ban is haszn\xE1lhat\xF3.
- \`ref struct\` t\xEDpusok enged\xE9lyezettek generikus param\xE9terk\xE9nt (\`allows ref struct\` megszor\xEDt\xE1ssal) \u2013 pl. \`Span<T>\` generikusokban is haszn\xE1lhat\xF3 lett.
- Escape sequence \`\\e\` (ESC karakter) stringekben.
- Method group konverzi\xF3k egyszer\u0171s\xEDt\xE9se, natural type inferencia jav\xEDt\xE1s.
- .NET 9 runtime: jelent\u0151s GC- \xE9s JIT-teljes\xEDtm\xE9nyjav\xEDt\xE1sok (Dynamic PGO alap\xE9rtelmezetten bekapcsolva, Adaptive Server GC), t\xF6bb mint 1000 teljes\xEDtm\xE9ny-jelleg\u0171 v\xE1ltoztat\xE1s a runtime-ban \xE9s a k\xF6nyvt\xE1rakban.
- \xDAj LINQ met\xF3dusok: \`CountBy\`, \`AggregateBy\`, \`Index()\`.
- \`Tensor<T>\` t\xEDpus AI/ML integr\xE1ci\xF3hoz (ML.NET, TorchSharp, ONNX Runtime).
- ASP.NET Core 9: be\xE9p\xEDtett OpenAPI dokumentum-gener\xE1l\xE1s (\`AddOpenApi()\`), \`HybridCache\` (in-memory + distributed cache egys\xE9ges API-val), optimaliz\xE1lt statikus asset kiszolg\xE1l\xE1s.
- EF Core 9: \`ExecuteUpdateAsync\`/\`ExecuteDeleteAsync\` finom\xEDt\xE1sok, jobb JSON oszlopt\xE1mogat\xE1s.
- Megjegyz\xE9s: a .NET 9 Standard-Term Support (STS) kiad\xE1s, 18 h\xF3napos t\xE1mogat\xE1ssal; az azt k\xF6vet\u0151 .NET 10 lett a hossz\xFA t\xE1v\xFA (LTS) kiad\xE1s. A \`LeftJoin\` / \`RightJoin\` LINQ met\xF3dusok a .NET 10 fejezetben \xE9s a dedik\xE1lt LINQ LeftJoin/RightJoin szakaszban.

## .NET 10 \xDAjdons\xE1gai C# 14 (.NET 10 / C# 14) https://learn.microsoft.com/dotnet/core/whats-new/dotnet-10 {#net-10-ujdonsagai-c-14}

A .NET 10 2025 november\xE9ben jelent meg, mint LTS (Long-Term Support) kiad\xE1s, 2028 november\xE9ig biztos\xEDtott t\xE1mogat\xE1ssal.

- Extension members (extension block szintaxis) \u2192 a klasszikus \`this\` param\xE9teres extension methodok mellett/helyett C# 14 lehet\u0151v\xE9 teszi extension property-k, indexerek, oper\xE1torok \xE9s static tagok defini\xE1l\xE1s\xE1t is egy t\xEDpushoz \`extension(TypeName) { ... }\` blokkban (l\xE1sd r\xE9szletesen az "Extension method \u2013 minden" fejezetben).
- \`field\` kulcssz\xF3 \u2192 k\xF6zvetlen hozz\xE1f\xE9r\xE9s az auto-implement\xE1lt property m\xF6g\xF6ttes (backing) mez\u0151j\xE9hez, k\xE9zzel \xEDrt backing mez\u0151 n\xE9lk\xFCl, egyedi valid\xE1ci\xF3s/logika hozz\xE1ad\xE1s\xE1hoz:
\`\`\`csharp
public string Name
{
    get => field;
    set => field = value?.Trim() ?? throw new ArgumentNullException(nameof(value));
}
\`\`\`
- Null-conditional assignment \u2192 \`person?.Name = "John";\` (csak akkor t\xF6rt\xE9nik \xE9rt\xE9kad\xE1s, ha \`person\` nem null).
- \`params ReadOnlySpan<T>\` sz\xE9lesebb k\xF6r\u0171 haszn\xE1lata a standard k\xF6nyvt\xE1rban (pl. \`Console.WriteLine\` t\xFAlterhel\xE9sek) \u2013 z\xE9r\xF3-allok\xE1ci\xF3s h\xEDv\xE1sok t\xF6mbfoglal\xE1s n\xE9lk\xFCl.
- Implicit span konverzi\xF3k b\u0151v\xEDt\xE9se (\`Span<T>\` / \`ReadOnlySpan<T>\` \xE9s t\xF6mb\xF6k k\xF6z\xF6tt term\xE9szetesebb konverzi\xF3).
- File-based apps (f\xE1jlalap\xFA, "single-file" C# programok) \u2192 egyetlen \`.cs\` f\xE1jl k\xF6zvetlen\xFCl futtathat\xF3 \`dotnet run app.cs\` paranccsal, projektf\xE1jl (.csproj) n\xE9lk\xFCl; ha a szkript n\xF6vekszik, \`dotnet project convert app.cs\` paranccsal teljes projektt\xE9 alak\xEDthat\xF3. Kifejezetten szkriptekhez, CLI-eszk\xF6z\xF6kh\xF6z hasznos.
- .NET 10 runtime: a JIT ford\xEDt\xF3 jelent\u0151sen kihaszn\xE1lja a modern vektor-utas\xEDt\xE1sk\xE9szleteket (AVX-512, AVX10.2, ARM SVE/SVE2) \u2014 egyes workloadokon m\xE9rhet\u0151 javul\xE1s v\xE1rhat\xF3, a konkr\xE9t ar\xE1ny workload-f\xFCgg\u0151 (m\xE9rj, ne felt\xE9telezz fix %-ot).
- ASP.NET Core 10: Minimal API be\xE9p\xEDtett valid\xE1ci\xF3-t\xE1mogat\xE1s, OpenAPI 3.1 dokumentum-gener\xE1l\xE1s, be\xE9p\xEDtett rate limiting fejleszt\xE9sek.
- EF Core 10: complex types (\xE9rt\xE9kt\xEDpusok) \xE9s JSON-oszlopok kezel\xE9s\xE9nek tov\xE1bbi finom\xEDt\xE1sa; \`LeftJoin\` / \`RightJoin\` LINQ met\xF3dusok (EF Core is felismeri \u0151ket).
- .NET Aspire \xE9s WebAssembly (Blazor WASM) integr\xE1ci\xF3 tov\xE1bbi \xE9r\xE9se a felh\u0151-nat\xEDv/b\xF6ng\xE9sz\u0151-nat\xEDv fejleszt\xE9shez.

\xD6sszefoglal\xF3 t\xE1bl\xE1zat a legfontosabb nyelvi \xFAjdons\xE1gokr\xF3l

| Verzi\xF3 | Legfontosabb C# nyelvi \xFAjdons\xE1gok |
|---|---|
| .NET 6 / C# 10 | file-scoped namespace, global using, record struct |
| .NET 7 / C# 11 | required property, generic math, list pattern, raw string literal |
| .NET 8 / C# 12 | primary constructors, collection expressions, alias any type, default lambda param\xE9terek |
| .NET 9 / C# 13 | params collections, System.Threading.Lock, partial properties/indexerek, ref struct generikusban |
| .NET 10 / C# 14 | extension members (property/operator/static), field keyword, null-conditional assignment, file-based apps |

## Dependency Injection Lifetime-ok (Transient, Scoped, Singleton) (ASP.NET Core 1.0+ / .NET Core 1.0+) https://learn.microsoft.com/dotnet/core/extensions/dependency-injection {#dependency-injection-lifetime-ok-transient-scoped-singleton}

*Verzi\xF3: ASP.NET Core 1.0-t\xF3l; kulcsolt (keyed) szolg\xE1ltat\xE1sok: .NET 8-t\xF3l.*

Az ASP.NET Core be\xE9p\xEDtett DI kont\xE9nere h\xE1rom \xE9lettartamot ismer. A helyes v\xE1laszt\xE1s elmulaszt\xE1sa az egyik leggyakoribb produkci\xF3s hibaforr\xE1s (pl. mem\xF3riasziv\xE1rg\xE1s, "captive dependency", sz\xE1lbiztons\xE1gi probl\xE9m\xE1k).

1. Transient \u2013 minden felold\xE1skor \xFAj p\xE9ld\xE1ny j\xF6n l\xE9tre. K\xF6nny\u0171, \xE1llapotmentes szolg\xE1ltat\xE1sokhoz ide\xE1lis.
\`\`\`csharp
builder.Services.AddTransient<IEmailSender, EmailSender>();
\`\`\`

2. Scoped \u2013 k\xE9r\xE9senk\xE9nt (HTTP request) egy p\xE9ld\xE1ny. EF Core \`DbContext\` tipikusan scoped, mert nem sz\xE1lbiztos, \xE9s egy k\xE9r\xE9sen bel\xFCl konzisztens change tracker sz\xFCks\xE9ges.
\`\`\`csharp
builder.Services.AddScoped<IOrderService, OrderService>();
\`\`\`

3. Singleton \u2013 az alkalmaz\xE1s teljes \xE9lettartama alatt egyetlen p\xE9ld\xE1ny. Konfigur\xE1ci\xF3s, cache-, vagy stateless seg\xE9dszolg\xE1ltat\xE1sokhoz.
\`\`\`csharp
builder.Services.AddSingleton<ICacheService, MemoryCacheService>();
\`\`\`

Captive Dependency probl\xE9ma: ha egy Singleton szolg\xE1ltat\xE1s konstruktor\xE1ban Scoped (pl. \`DbContext\`) f\xFCgg\u0151s\xE9get k\xE9r, az a Scoped szolg\xE1ltat\xE1st "befogja" (captive), \xE9s az az eg\xE9sz alkalmaz\xE1s \xE9lettartama alatt ugyanaz a p\xE9ld\xE1ny marad \u2013 ez race conditiont \xE9s stale adatokat okozhat. A .NET DI kont\xE9ner fejleszt\u0151i m\xF3dban ezt kiv\xE9tellel jelzi (\`ValidateScopes = true\`, alap\xE9rtelmezett Development k\xF6rnyezetben).

Megold\xE1s Singletonban Scoped f\xFCgg\u0151s\xE9g el\xE9r\xE9s\xE9hez: \`IServiceScopeFactory\` injekt\xE1l\xE1sa, \xE9s explicit scope nyit\xE1sa:
\`\`\`csharp
public class MySingletonService
{
    private readonly IServiceScopeFactory _scopeFactory;
    public MySingletonService(IServiceScopeFactory scopeFactory) => _scopeFactory = scopeFactory;

    public async Task DoWorkAsync()
    {
        using var scope = _scopeFactory.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        // ...
    }
}
\`\`\`

\xD6k\xF6lszab\xE1ly: Singleton csak Singletont vagy stateless szolg\xE1ltat\xE1st injekt\xE1lhat biztons\xE1gosan; Scoped injekt\xE1lhat Scoped-et \xE9s Transientet; Transient b\xE1rmit injekt\xE1lhat, de maga r\xF6vid \xE9let\u0171 marad.

## Options Pattern (IOptions, IOptionsSnapshot, IOptionsMonitor) (ASP.NET Core 1.0+ / .NET Core 1.0+) https://learn.microsoft.com/dotnet/core/extensions/options {#options-pattern-ioptions-ioptionssnapshot-ioptionsmonitor}

*Verzi\xF3: ASP.NET Core 1.0-t\xF3l; \`ValidateOnStart()\`: .NET 6-t\xF3l; \`[OptionsValidator]\` forr\xE1sk\xF3d-gener\xE1tor: .NET 8-t\xF3l.*

Konfigur\xE1ci\xF3 (appsettings.json) er\u0151sen t\xEDpusos, injekt\xE1lhat\xF3 el\xE9r\xE9s\xE9hez az Options Pattern a javasolt megold\xE1s a \`IConfiguration["Key"]\` k\xF6zvetlen (string alap\xFA, hibalehet\u0151s\xE9ggel teli) haszn\xE1lata helyett.

\`\`\`csharp
public class SmtpOptions
{
    public const string SectionName = "Smtp";
    public string Host { get; set; } = string.Empty;
    public int Port { get; set; }
}
\`\`\`

Regisztr\xE1ci\xF3, valid\xE1ci\xF3val egy\xFCtt:
\`\`\`csharp
builder.Services
    .AddOptions<SmtpOptions>()
    .Bind(builder.Configuration.GetSection(SmtpOptions.SectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart(); // m\xE1r indul\xE1skor buktassa el a hib\xE1s konfigur\xE1ci\xF3t
\`\`\`

A h\xE1rom interf\xE9sz k\xF6z\xF6tti k\xFCl\xF6nbs\xE9g:
- \`IOptions<T>\` \u2013 Singleton, egyszer olvassa be az \xE9rt\xE9ket az indul\xE1skor, fut\xE1sid\u0151ben nem friss\xFCl.
- \`IOptionsSnapshot<T>\` \u2013 Scoped, minden k\xE9r\xE9sn\xE9l \xFAjraolvassa a konfigur\xE1ci\xF3t (hasznos, ha a konfigur\xE1ci\xF3 f\xE1jl v\xE1ltozhat fut\xE1s k\xF6zben, pl. \`reloadOnChange: true\`).
- \`IOptionsMonitor<T>\` \u2013 Singleton, de tud \xE9l\u0151 v\xE1ltoz\xE1s-\xE9rtes\xEDt\xE9st k\xFCldeni (\`OnChange\` callback), \xEDgy Singleton szolg\xE1ltat\xE1sokban is biztons\xE1gosan k\xF6vethet\u0151 a konfigur\xE1ci\xF3v\xE1ltoz\xE1s.

\`\`\`csharp
public class EmailService
{
    private readonly SmtpOptions _options;
    public EmailService(IOptionsMonitor<SmtpOptions> optionsMonitor)
    {
        _options = optionsMonitor.CurrentValue;
        optionsMonitor.OnChange(newOptions => _options = newOptions);
    }
}
\`\`\`

## Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails (ASP.NET Core 2.1+ \xB7 IExceptionHandler .NET 8+) https://learn.microsoft.com/aspnet/core/fundamentals/error-handling {#globalis-kivetelkezeles-es-problemdetails}

*Verzi\xF3: \`ProblemDetails\`: ASP.NET Core 2.1; \`IExceptionHandler\` \xE9s \`AddProblemDetails()\`: .NET 8-t\xF3l.*

A publikus API-knak konzisztens, g\xE9pileg feldolgozhat\xF3 hibav\xE1laszt kell adniuk. Az RFC 7807 (Problem Details for HTTP APIs) szabv\xE1ny erre ad form\xE1tumot, amit az ASP.NET Core nat\xEDvan t\xE1mogat.

Glob\xE1lis kiv\xE9telkezel\u0151 middleware (\`IExceptionHandler\`, .NET 8-t\xF3l):
\`\`\`csharp
public class GlobalExceptionHandler : IExceptionHandler
{
    private readonly ILogger<GlobalExceptionHandler> _logger;
    public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger) => _logger = logger;

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        _logger.LogError(exception, "Kezeletlen kiv\xE9tel t\xF6rt\xE9nt");

        var (statusCode, title) = exception switch
        {
            NotFoundException => (StatusCodes.Status404NotFound, "Er\u0151forr\xE1s nem tal\xE1lhat\xF3"),
            ValidationException => (StatusCodes.Status400BadRequest, "Valid\xE1ci\xF3s hiba"),
            _ => (StatusCodes.Status500InternalServerError, "V\xE1ratlan szerverhiba")
        };

        httpContext.Response.StatusCode = statusCode;
        await httpContext.Response.WriteAsJsonAsync(new ProblemDetails
        {
            Status = statusCode,
            Title = title,
            Detail = exception.Message,
            Instance = httpContext.Request.Path
        }, cancellationToken);

        return true;
    }
}
\`\`\`

Regisztr\xE1ci\xF3:
\`\`\`csharp
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();
// ...
app.UseExceptionHandler();
\`\`\`

A teljes, \xE9les haszn\xE1latra sz\xE1nt fel\xE1ll\xE1s (kiv\xE9tel-hierarchia hibak\xF3dokkal, l\xE1ncolt kezel\u0151k, \`traceId\`, log-szintek, riaszt\xE1s) az "Enterprise szint\u0171 glob\xE1lis hibakezel\xE9s" fejezetben tal\xE1lhat\xF3.

Fontos: a glob\xE1lis kiv\xE9telkezel\u0151 nem helyettes\xEDti a domain-szint\u0171 valid\xE1ci\xF3t (pl. FluentValidation), hanem az "utols\xF3 v\xE9dvonal" \u2013 minden nem v\xE1rt kiv\xE9telt egys\xE9ges, kliensbar\xE1t form\xE1ba alak\xEDt, \xE9s garant\xE1lja, hogy stack trace ne sziv\xE1rogjon ki produkci\xF3s k\xF6rnyezetben.

## Struktur\xE1lt logol\xE1s \u2013 ILogger \xE9s Serilog (ILogger: .NET Core 1.0+) https://learn.microsoft.com/dotnet/core/extensions/logging {#strukturalt-logolas-ilogger-es-serilog}

A \`Console.WriteLine\` produkci\xF3s logol\xE1sra alkalmatlan: nincs szintez\xE9s, sz\u0171r\xE9s, struktur\xE1lts\xE1g, c\xE9lrendszer (f\xE1jl, Seq, ElasticSearch, Application Insights). A be\xE9p\xEDtett \`ILogger<T>\` absztrakci\xF3 \xE9s a Serilog kombin\xE1ci\xF3ja a de facto standard.

Be\xE9p\xEDtett \`ILogger\` haszn\xE1lata \u2013 mindig struktur\xE1lt (template) param\xE9terekkel, nem string interpol\xE1ci\xF3val:
\`\`\`csharp
public class OrderService
{
    private readonly ILogger<OrderService> _logger;
    public OrderService(ILogger<OrderService> logger) => _logger = logger;

    public void PlaceOrder(int orderId, decimal amount)
    {
        // J\xD3: struktur\xE1lt \u2013 az orderId \xE9s amount kereshet\u0151 property-k\xE9nt ker\xFCl be a logba
        _logger.LogInformation("Rendel\xE9s l\xE9trehozva: {OrderId}, \xF6sszeg: {Amount}", orderId, amount);

        // ROSSZ: string interpol\xE1ci\xF3, elveszik a struktur\xE1lts\xE1g
        // _logger.LogInformation($"Rendel\xE9s l\xE9trehozva: {orderId}, \xF6sszeg: {amount}");
    }
}
\`\`\`

Log szintek (n\xF6vekv\u0151 s\xFAlyoss\xE1g): \`Trace\` < \`Debug\` < \`Information\` < \`Warning\` < \`Error\` < \`Critical\`. \xC9les k\xF6rnyezetben tipikusan \`Information\` vagy magasabb szint akt\xEDv.

Serilog be\xE1ll\xEDt\xE1sa (f\xE1jl + konzol + Seq sink):
\`\`\`csharp
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .Enrich.FromLogContext()
    .Enrich.WithMachineName()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .WriteTo.Seq("http://localhost:5341")
    .CreateLogger();

builder.Host.UseSerilog();
\`\`\`

Korrel\xE1ci\xF3s azonos\xEDt\xF3 (Correlation Id / TraceId): elosztott rendszerekben elengedhetetlen, hogy egy adott k\xE9r\xE9s \xF6sszes logsora egy k\xF6z\xF6s azonos\xEDt\xF3val legyen \xF6sszekapcsolhat\xF3 a szolg\xE1ltat\xE1sok k\xF6z\xF6tt (pl. \`Activity.Current?.Id\`, vagy egyedi middleware, amely a \`X-Correlation-Id\` HTTP fejl\xE9cet olvassa/gener\xE1lja, \xE9s \`LogContext.PushProperty\`-vel minden logsorhoz hozz\xE1adja).

## HttpClientFactory \xE9s Polly (resilience) (HttpClientFactory: .NET Core 2.1+) https://learn.microsoft.com/dotnet/core/extensions/httpclient-factory {#httpclientfactory-es-polly-resilience}

*Verzi\xF3: \`IHttpClientFactory\`: ASP.NET Core 2.1; Polly v8 \`ResiliencePipeline\` \xE9s \`AddStandardResilienceHandler\`: .NET 8-t\xF3l.*

K\xF6zvetlen\xFCl \`new HttpClient()\`-tel dolgozni vesz\xE9lyes: socket exhaustion l\xE9phet fel (a DNS-v\xE1ltoz\xE1sokat nem k\xF6veti le, mert a kapcsolat sok\xE1ig nyitva marad). A megold\xE1s az \`IHttpClientFactory\`, amely kezeli a \`HttpMessageHandler\`-ek \xE9letciklus\xE1t \xE9s pool-oz\xE1s\xE1t.

\`\`\`csharp
builder.Services.AddHttpClient<IWeatherApiClient, WeatherApiClient>(client =>
{
    client.BaseAddress = new Uri("https://api.weather.example.com/");
    client.Timeout = TimeSpan.FromSeconds(10);
});
\`\`\`

Resilience (\xFAjrapr\xF3b\xE1lkoz\xE1s, circuit breaker) hozz\xE1ad\xE1sa Polly-val (.NET 8-t\xF3l a \`Microsoft.Extensions.Http.Resilience\` csomag nat\xEDvan integr\xE1lja):
\`\`\`csharp
builder.Services.AddHttpClient<IWeatherApiClient, WeatherApiClient>(client =>
{
    client.BaseAddress = new Uri("https://api.weather.example.com/");
})
.AddResilienceHandler("weather-pipeline", pipeline =>
{
    pipeline.AddRetry(new HttpRetryStrategyOptions
    {
        MaxRetryAttempts = 3,
        BackoffType = DelayBackoffType.Exponential
    });
    pipeline.AddCircuitBreaker(new HttpCircuitBreakerStrategyOptions());
    pipeline.AddTimeout(TimeSpan.FromSeconds(5));
});
\`\`\`

Mi\xE9rt fontos a Circuit Breaker: ha egy k\xFCls\u0151 szolg\xE1ltat\xE1s tart\xF3san el\xE9rhetetlen, a folyamatos \xFAjrapr\xF3b\xE1lkoz\xE1s csak terheli \xE9s lass\xEDtja a rendszert ("cascading failure"). A circuit breaker r\xF6vid id\u0151re teljesen le\xE1ll\xEDtja a h\xEDv\xE1sokat (Open \xE1llapot), majd \xF3vatosan pr\xF3b\xE1lkozik \xFAjra (Half-Open), miel\u0151tt vissza\xE1ll norm\xE1l (Closed) m\u0171k\xF6d\xE9sre.

## H\xE1tt\xE9rfolyamatok \u2013 IHostedService \xE9s BackgroundService (IHostedService: .NET Core 2.0+ \xB7 BackgroundService: .NET Core 2.1+) https://learn.microsoft.com/dotnet/core/extensions/hosted-services {#hatterfolyamatok-ihostedservice-es-backgroundservice}

*Verzi\xF3: \`IHostedService\`: ASP.NET Core 2.0, \`BackgroundService\`: 2.1; \`PeriodicTimer\`: .NET 6; \`IHostedLifecycleService\`: .NET 8.*

Hosszan fut\xF3, az alkalmaz\xE1s \xE9letciklus\xE1hoz k\xF6t\xF6tt h\xE1tt\xE9rfeladatokhoz (id\u0151z\xEDtett job, \xFCzenetsor feldolgoz\xF3, cache meleg\xEDt\u0151) a \`BackgroundService\` absztrakt oszt\xE1ly a javasolt kiindul\xF3pont.

\`\`\`csharp
public class QueueProcessorService : BackgroundService
{
    private readonly ILogger<QueueProcessorService> _logger;
    private readonly IServiceScopeFactory _scopeFactory;

    public QueueProcessorService(ILogger<QueueProcessorService> logger, IServiceScopeFactory scopeFactory)
    {
        _logger = logger;
        _scopeFactory = scopeFactory;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using var scope = _scopeFactory.CreateScope();
            var queueService = scope.ServiceProvider.GetRequiredService<IQueueService>();
            await queueService.ProcessNextAsync(stoppingToken);

            await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
        }
    }
}

// Regisztr\xE1ci\xF3:
builder.Services.AddHostedService<QueueProcessorService>();
\`\`\`

Fontos szempontok:
- A \`BackgroundService\` maga mindig Singletonk\xE9nt regisztr\xE1l\xF3dik, ez\xE9rt a \`Scoped\` f\xFCgg\u0151s\xE9geket (pl. \`DbContext\`) minden iter\xE1ci\xF3ban k\xFCl\xF6n scope-b\xF3l kell feloldani (l\xE1sd fent, \`IServiceScopeFactory\`).
- A \`stoppingToken\`-t mindig figyelembe kell venni (\`while (!stoppingToken.IsCancellationRequested)\` \xE9s minden async h\xEDv\xE1snak \xE1t kell adni), hogy az alkalmaz\xE1s graceful shutdown-ja (\`IHostApplicationLifetime\`) ne akadjon el.
- Id\u0151z\xEDtett (cron-szer\u0171) feladatokhoz gyakran a \`Quartz.NET\` vagy a \`Hangfire\` k\xF6nyvt\xE1rat \xE9rdemes bevonni a puszta \`Task.Delay\` ciklus helyett, mert azok perzisztens \xFCtemez\xE9st, retry-t \xE9s monitoroz\xF3 fel\xFCletet is adnak.

## Nullable Reference Types (C# 8.0+) https://learn.microsoft.com/dotnet/csharp/nullable-references {#nullable-reference-types}

*Verzi\xF3: C# 8.0-t\xF3l (projekt szinten \`<Nullable>enable</Nullable>\`).*

A C# 8-t\xF3l el\xE9rhet\u0151 Nullable Reference Types (NRT) funkci\xF3 ford\xEDt\xE1si id\u0151ben figyelmeztet a potenci\xE1lis \`NullReferenceException\`-okra \u2013 ez nem fut\xE1sidej\u0171 ellen\u0151rz\xE9s, hanem statikus elemz\xE9s.

Bekapcsol\xE1s projekt szinten (\`.csproj\`):
\`\`\`xml
<PropertyGroup>
  <Nullable>enable</Nullable>
</PropertyGroup>
\`\`\`

Bekapcsol\xE1s ut\xE1n minden referencia t\xEDpus alap\xE9rtelmezetten non-nullable; a null\xE1zhat\xF3s\xE1got explicit \`?\` jel\xF6li:
\`\`\`csharp
public class Customer
{
    public string Name { get; set; } = string.Empty; // soha nem lehet null
    public string? MiddleName { get; set; }           // lehet null
}

public string GetGreeting(Customer customer)
{
    // figyelmeztet\xE9s ford\xEDt\xE1skor, ha customer.MiddleName-t null-check n\xE9lk\xFCl haszn\xE1ljuk
    if (customer.MiddleName is not null)
        return $"{customer.Name} {customer.MiddleName}";
    return customer.Name;
}
\`\`\`

Hasznos oper\xE1torok \xE9s attrib\xFAtumok:
- \`!\` (null-forgiving oper\xE1tor) \u2013 kikapcsolja a figyelmeztet\xE9st egy konkr\xE9t helyen, ha a fejleszt\u0151 biztos benne, hogy az \xE9rt\xE9k nem null (\xF3vatosan haszn\xE1land\xF3, mert fut\xE1sid\u0151ben nem v\xE9d).
- \`[NotNullWhen(true)]\`, \`[MaybeNullWhen(false)]\` \u2013 TryGet mint\xE1j\xFA met\xF3dusok annot\xE1l\xE1s\xE1ra, hogy a statikus elemz\u0151 k\xF6vesse a null-\xE1raml\xE1st.
- \`ArgumentNullException.ThrowIfNull(parameter)\` (.NET 6+) \u2013 t\xF6m\xF6r guard clause met\xF3dus param\xE9terek null-ellen\u0151rz\xE9s\xE9re.

Gyakorlati tan\xE1cs: az NRT bekapcsol\xE1sa egy megl\xE9v\u0151, nagy k\xF3db\xE1zison sok warningot gener\xE1lhat egyszerre \u2013 \xE9rdemes projektenk\xE9nt, fokozatosan bevezetni, \xE9s a CI-ban \`TreatWarningsAsErrors\` opci\xF3val kik\xE9nyszer\xEDteni, hogy \xFAj null\xE1zhat\xF3s\xE1gi hiba ne ker\xFClhessen be.

## Async/await Best Practices \xE9s CancellationToken (C# 5.0+ / .NET 4.5+) https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/ {#async-await-best-practices-es-cancellationtoken}

*Verzi\xF3: \`async\`/\`await\`: C# 5.0; \`IAsyncDisposable\`/\`await foreach\`: C# 8.0.*

N\xE9h\xE1ny gyakori hiba, ami produkci\xF3s deadlockhoz vagy er\u0151forr\xE1s-pazarl\xE1shoz vezet:

1. \`async void\` ker\xFCl\xE9se \u2013 kiv\xE9tel eset\xE9n a h\xEDv\xF3 nem tudja elkapni a kiv\xE9telt (a folyamat \xF6sszeomolhat). Kiv\xE9tel: event handlerek, ahol a szignat\xFAra k\xF6t\xF6tt. Mindenhol m\xE1shol \`async Task\`.

2. \`.Result\` / \`.Wait()\` ker\xFCl\xE9se async met\xF3duson \u2013 ez szinkron blokkol\xE1st okoz egy async h\xEDv\xE1sra, ami UI vagy ASP.NET klasszikus (nem Core) szinkroniz\xE1ci\xF3s kontextusban k\xF6nnyen deadlockhoz vezet. ASP.NET Core-ban nincs \`SynchronizationContext\`, \xEDgy kev\xE9sb\xE9 vesz\xE9lyes, de best practice akkor is a v\xE9gig-async l\xE1nc ("async all the way").
\`\`\`csharp
// KER\xDCLEND\u0150
var result = GetDataAsync().Result;

// HELYES
var result = await GetDataAsync();
\`\`\`

3. \`ConfigureAwait(false)\` \u2013 k\xF6nyvt\xE1rk\xF3dban (nem ASP.NET Core web alkalmaz\xE1s v\xE9gpontjaiban) \xE9rdemes haszn\xE1lni, hogy az \`await\` ut\xE1ni folytat\xE1s ne t\xE9rjen vissza az eredeti szinkroniz\xE1ci\xF3s kontextusra, ha az nem sz\xFCks\xE9ges. ASP.NET Core-ban nincs ilyen kontextus, \xEDgy a hat\xE1sa minim\xE1lis, de class library-kban (NuGet csomagokban) tov\xE1bbra is aj\xE1nlott.

4. \`CancellationToken\` k\xF6vetkezetes tov\xE1bbad\xE1sa \u2013 minden async met\xF3dusnak, amely I/O-t v\xE9gez, el kell fogadnia \xE9s tov\xE1bb kell adnia egy \`CancellationToken\`-t, hogy a h\xEDv\xE1s megszak\xEDthat\xF3 legyen (pl. a kliens lecsatlakozik, vagy timeout t\xF6rt\xE9nik).
\`\`\`csharp
public async Task<Order> GetOrderAsync(int id, CancellationToken cancellationToken)
{
    return await _dbContext.Orders
        .FirstOrDefaultAsync(o => o.Id == id, cancellationToken);
}
\`\`\`
ASP.NET Core kontrollerekben/minimal API v\xE9gpontokban a keretrendszer automatikusan injekt\xE1l egy, a k\xE9r\xE9s \xE9lettartam\xE1hoz k\xF6t\xF6tt \`CancellationToken\`-t, ha azt param\xE9terk\xE9nt felvessz\xFCk.

Halad\xF3 t\xE9m\xE1k (ValueTask, thread pool starvation, timeout, fire-and-forget, kiv\xE9telkezel\xE9s \`Task.WhenAll\` eset\xE9n) az "Async/await halad\xF3 szint" fejezetben.

5. \`Task.WhenAll\` p\xE1rhuzamos I/O m\u0171velethez, ne szekvenci\xE1lis \`await\`-ek egym\xE1s ut\xE1n, ha a m\u0171veletek f\xFCggetlenek:
\`\`\`csharp
// LASSABB \u2013 szekvenci\xE1lis
var user = await GetUserAsync(id);
var orders = await GetOrdersAsync(id);

// GYORSABB \u2013 p\xE1rhuzamos
var userTask = GetUserAsync(id);
var ordersTask = GetOrdersAsync(id);
await Task.WhenAll(userTask, ordersTask);
var user = await userTask;
var orders = await ordersTask;
\`\`\`

## Health Checks (ASP.NET Core 2.2+) https://learn.microsoft.com/aspnet/core/host-and-deploy/health-checks {#health-checks}

*Verzi\xF3: ASP.NET Core 2.2-t\u0151l.*

A Health Check v\xE9gpontok lehet\u0151v\xE9 teszik, hogy egy orchestrator (Kubernetes, Docker Swarm, load balancer) vagy monitoring rendszer meg\xE1llap\xEDtsa, egy alkalmaz\xE1sp\xE9ld\xE1ny \xFCzemk\xE9pes-e (liveness) \xE9s fogadhat-e forgalmat (readiness).

Alap regisztr\xE1ci\xF3:
\`\`\`csharp
builder.Services.AddHealthChecks()
    .AddDbContextCheck<AppDbContext>()
    .AddSqlServer(connectionString, name: "sql-server")
    .AddRedis(redisConnectionString, name: "redis")
    .AddUrlGroup(new Uri("https://external-api.example.com/health"), name: "external-api");

app.MapHealthChecks("/health/live", new HealthCheckOptions
{
    Predicate = check => check.Tags.Contains("live")
});

app.MapHealthChecks("/health/ready", new HealthCheckOptions
{
    Predicate = check => check.Tags.Contains("ready")
});
\`\`\`

Liveness vs. Readiness k\xFCl\xF6nbs\xE9g Kubernetes k\xF6rnyezetben:
- Liveness probe \u2013 ha sikertelen, a Kubernetes \xFAjraind\xEDtja a podot (az alkalmaz\xE1s "beragadt", nem v\xE1laszol).
- Readiness probe \u2013 ha sikertelen, a pod kiker\xFCl a load balancer m\xF6g\xFCl, de nem indul \xFAjra (pl. az adatb\xE1zis-kapcsolat m\xE9g \xE9pp inicializ\xE1l\xF3dik, vagy egy k\xFCls\u0151 f\xFCgg\u0151s\xE9g \xE1tmenetileg nem el\xE9rhet\u0151).

Egyedi health check implement\xE1l\xE1sa:
\`\`\`csharp
public class DiskSpaceHealthCheck : IHealthCheck
{
    public Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken cancellationToken = default)
    {
        var freeSpace = new DriveInfo("C").AvailableFreeSpace;
        return Task.FromResult(freeSpace > 1_000_000_000
            ? HealthCheckResult.Healthy("Elegend\u0151 szabad lemezter\xFClet")
            : HealthCheckResult.Degraded("Kev\xE9s a szabad lemezter\xFClet"));
    }
}
\`\`\`

## API Versioning (ASP.NET Core 2.0+ (Asp.Versioning)) https://learn.microsoft.com/aspnet/core/web-api/advanced/versioning {#api-versioning}

Amint egy publikus vagy t\xF6bb kliens \xE1ltal haszn\xE1lt API-t m\xF3dos\xEDtunk t\xF6r\u0151 m\xF3don (breaking change), verzi\xF3z\xE1sra van sz\xFCks\xE9g, hogy a r\xE9gi kliensek ne t\xF6rjenek el. A \`Asp.Versioning.Http\` (kor\xE1bban \`Microsoft.AspNetCore.Mvc.Versioning\`) csomag ad erre k\xE9sz megold\xE1st.

\`\`\`csharp
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = ApiVersionReader.Combine(
        new UrlSegmentApiVersionReader(),
        new HeaderApiVersionReader("X-Api-Version"));
})
.AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});
\`\`\`

Verzi\xF3z\xE1si strat\xE9gi\xE1k \xF6sszehasonl\xEDt\xE1sa:
1. URL alap\xFA (\`/api/v1/orders\`, \`/api/v2/orders\`) \u2013 legegyszer\u0171bb, j\xF3l cache-elhet\u0151, k\xF6nnyen dokument\xE1lhat\xF3, de "szennyezi" az URL strukt\xFAr\xE1t.
2. Query string alap\xFA (\`/api/orders?api-version=1.0\`) \u2013 nem szennyezi az \xFAtvonalat, de kev\xE9sb\xE9 nyilv\xE1nval\xF3, k\xF6nnyen elfelejthet\u0151.
3. Header alap\xFA (\`X-Api-Version: 1.0\`) \u2013 tiszta URL-eket eredm\xE9nyez, de nehezebben tesztelhet\u0151 b\xF6ng\xE9sz\u0151b\u0151l/linkb\u0151l.
4. Media type alap\xFA (\`Accept: application/json;v=1.0\`) \u2013 RESTful szempontb\xF3l "legtiszt\xE1bb", de a gyakorlatban a legritk\xE1bban haszn\xE1lt, mert bonyolultabb kliensoldali kezel\xE9st ig\xE9nyel.

Minimal API-ban verzi\xF3zott v\xE9gpont csoport:
\`\`\`csharp
var versionSet = app.NewApiVersionSet()
    .HasApiVersion(new ApiVersion(1, 0))
    .HasApiVersion(new ApiVersion(2, 0))
    .ReportApiVersions()
    .Build();

app.MapGroup("/api/v{version:apiVersion}/orders")
    .WithApiVersionSet(versionSet)
    .MapGet("/", GetOrdersV1).HasApiVersion(new ApiVersion(1, 0));
\`\`\`

## Unit Testing \u2013 Mocking Moq-kal https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-dotnet-test {#unit-testing-mocking-moq-kal}

*Verzi\xF3: xUnit v3: 2024-t\u0151l; \`TimeProvider\` (tesztelhet\u0151 id\u0151): .NET 8-t\xF3l.*

Unit tesztekben a tesztelt egys\xE9g (SUT \u2013 System Under Test) f\xFCgg\u0151s\xE9geit izol\xE1lni kell, hogy a teszt gyors, determinisztikus \xE9s a val\xF3s k\xFCls\u0151 rendszerekt\u0151l (adatb\xE1zis, HTTP h\xEDv\xE1s) f\xFCggetlen maradjon. Erre a legelterjedtebb .NET k\xF6nyvt\xE1r a Moq.

\`\`\`csharp
public class OrderServiceTests
{
    [Fact]
    public async Task PlaceOrder_ValidOrder_SavesToRepository()
    {
        // Arrange
        var repositoryMock = new Mock<IOrderRepository>();
        repositoryMock
            .Setup(r => r.AddAsync(It.IsAny<Order>(), It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);

        var loggerMock = new Mock<ILogger<OrderService>>();
        var sut = new OrderService(repositoryMock.Object, loggerMock.Object);

        var order = new Order { Id = 1, Amount = 100M };

        // Act
        await sut.PlaceOrderAsync(order, CancellationToken.None);

        // Assert
        repositoryMock.Verify(
            r => r.AddAsync(It.Is<Order>(o => o.Id == 1), It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
\`\`\`

Fontos fogalmak:
- \`Mock<T>.Setup\` \u2013 meghat\xE1rozza, hogy egy adott h\xEDv\xE1sra mit adjon vissza a mock (stub viselked\xE9s).
- \`Mock<T>.Verify\` \u2013 ellen\u0151rzi, hogy egy adott met\xF3dus megh\xEDv\xE1sra ker\xFClt-e (adott sz\xE1m\xFA alkalommal) \u2013 ez a "viselked\xE9s-alap\xFA" tesztel\xE9s l\xE9nyege.
- \`It.IsAny<T>()\`, \`It.Is<T>(predicate)\` \u2013 rugalmas param\xE9ter-illeszt\u0151k.
- Mock vs. Stub vs. Fake: a Mock a h\xEDv\xE1sokat is ellen\u0151rzi (Verify), a Stub csak visszaad el\u0151re defini\xE1lt adatot, a Fake egy egyszer\u0171s\xEDtett, de m\u0171k\xF6d\u0151 implement\xE1ci\xF3 (pl. in-memory repository).

Gyakorlati tan\xE1cs: ne mockoljunk mindent \u2013 ha egy oszt\xE1lynak sok (5+) mockolt f\xFCgg\u0151s\xE9ge van egy teszthez, az gyakran jelzi, hogy az oszt\xE1ly t\xFAl sok felel\u0151ss\xE9get hordoz (SRP s\xE9r\xFCl\xE9s), \xE9s \xE9rdemesebb lehet felbontani vagy integr\xE1ci\xF3s teszttel (pl. EF Core In-Memory database, l\xE1sd kor\xE1bbi fejezet) lefedni.

## Alkalmaz\xE1sszint\u0171 (in-memory) Concurrency Handling \u2013 sz\xE1lbiztos programoz\xE1s (C# 1.0+ \xB7 System.Threading.Lock: C# 13 / .NET 9+) https://learn.microsoft.com/dotnet/standard/threading/managed-threading-best-practices {#alkalmazasszintu-in-memory-concurrency-handling-szalbiztos-programozas}

*Verzi\xF3: \`lock\`: C# 1.0; \`System.Threading.Lock\` t\xEDpus: .NET 9 / C# 13.*

Fontos elhat\xE1rolni az adatb\xE1zis-szint\u0171 konkurenciakezel\xE9st (l\xE1sd "EF Core Concurrency control" fejezet \u2013 optimista/pesszimista strat\xE9gi\xE1k a perzisztens adatokra) az alkalmaz\xE1son bel\xFCli, mem\xF3ri\xE1ban tartott megosztott \xE1llapot (shared state) sz\xE1lbiztos kezel\xE9s\xE9t\u0151l. Az ut\xF3bbi akkor ker\xFCl el\u0151, amikor egy Singleton szolg\xE1ltat\xE1s, statikus mez\u0151, in-memory cache vagy h\xE1tt\xE9rfolyamat egyszerre t\xF6bb sz\xE1lr\xF3l/k\xE9r\xE9sb\u0151l \xE9rhet\u0151 el.

### A race condition probl\xE9m\xE1ja

\`\`\`csharp
public class CounterService
{
    private int _count = 0;

    public void Increment() => _count++; // NEM sz\xE1lbiztos! a ++ nem atomi m\u0171velet (olvas\xE1s-m\xF3dos\xEDt\xE1s-\xEDr\xE1s)

    public int Count => _count;
}
\`\`\`
Ha ezt a szolg\xE1ltat\xE1st Singletonk\xE9nt regisztr\xE1ljuk, \xE9s sok p\xE1rhuzamos k\xE9r\xE9s h\xEDvja az \`Increment()\`-et, elveszett m\xF3dos\xEDt\xE1sok (lost update) t\xF6rt\xE9nhetnek, mert k\xE9t sz\xE1l egyszerre olvashatja ki ugyanazt a r\xE9gi \xE9rt\xE9ket.

### 1. \`lock\` / \`System.Threading.Lock\` \u2013 kritikus szakasz v\xE9delme

\`\`\`csharp
public class CounterService
{
    private readonly Lock _lock = new(); // .NET 9+, C# 13-t\xF3l; kor\xE1bban: private readonly object _lock = new();
    private int _count = 0;

    public void Increment()
    {
        lock (_lock)
        {
            _count++;
        }
    }
}
\`\`\`
A \`lock\` szinkron blokkol\xE1st v\xE9gez \u2013 **soha ne haszn\xE1ljunk \`await\`-et egy \`lock\` blokkon bel\xFCl**, mert az ford\xEDt\xE1si hib\xE1t ad (a \`lock\` nem tarthat\xF3 meg async folytat\xE1son \xE1t), \xE9s logikailag is hib\xE1s lenne (a sz\xE1l elengedhetn\xE9 a lock-ot a folytat\xE1s el\u0151tt).

### 2. \`SemaphoreSlim\` \u2013 async-kompatibilis z\xE1rol\xE1s

Ha a kritikus szakaszban async h\xEDv\xE1s (pl. adatb\xE1zis vagy HTTP h\xEDv\xE1s) is t\xF6rt\xE9nik, a \`lock\` helyett \`SemaphoreSlim\`-et kell haszn\xE1lni, mert az \`WaitAsync()\`-et biztos\xEDt:
\`\`\`csharp
public class CacheWarmupService
{
    private readonly SemaphoreSlim _semaphore = new(1, 1); // maxCount = 1 -> mutex-szer\u0171 viselked\xE9s
    private List<Product>? _cachedProducts;

    public async Task<List<Product>> GetProductsAsync(CancellationToken cancellationToken)
    {
        if (_cachedProducts is not null)
            return _cachedProducts;

        await _semaphore.WaitAsync(cancellationToken);
        try
        {
            // double-check locking: mire megkaptuk a semaphore-t, lehet, hogy m\xE1r bet\xF6lt\xF6tte egy m\xE1sik sz\xE1l
            _cachedProducts ??= await LoadProductsFromDatabaseAsync(cancellationToken);
            return _cachedProducts;
        }
        finally
        {
            _semaphore.Release();
        }
    }
}
\`\`\`
A \`try/finally\` elengedhetetlen, hogy kiv\xE9tel eset\xE9n se maradjon "beragadva" a semaphore.

### 3. \`Interlocked\` \u2013 lock n\xE9lk\xFCli atomi m\u0171veletek egyszer\u0171 sz\xE1ml\xE1l\xF3khoz

Ha csak egyetlen primit\xEDv \xE9rt\xE9k (int, long) atomi n\xF6vel\xE9se/cser\xE9je a c\xE9l, a \`lock\`-n\xE1l olcs\xF3bb \xE9s egyszer\u0171bb megold\xE1s az \`Interlocked\` oszt\xE1ly:
\`\`\`csharp
private long _requestCount = 0;
public void TrackRequest() => Interlocked.Increment(ref _requestCount);
public long RequestCount => Interlocked.Read(ref _requestCount);
\`\`\`

### 4. Sz\xE1lbiztos gy\u0171jtem\xE9nyek (\`System.Collections.Concurrent\`)

Ahelyett, hogy egy sima \`Dictionary<TKey,TValue>\`-t manu\xE1lisan \`lock\`-kal v\xE9den\xE9nk, a \`System.Collections.Concurrent\` n\xE9vt\xE9r finomszemcs\xE9s z\xE1rol\xE1ssal (vagy lock-mentesen) megval\xF3s\xEDtott, kifejezetten t\xF6bbsz\xE1l\xFA haszn\xE1latra tervezett gy\u0171jtem\xE9nyeket ad: \`ConcurrentDictionary<TKey,TValue>\`, \`ConcurrentQueue<T>\`, \`ConcurrentBag<T>\`, \`BlockingCollection<T>\`.
\`\`\`csharp
private readonly ConcurrentDictionary<string, CachedItem> _cache = new();

public CachedItem GetOrAdd(string key, Func<string, CachedItem> factory)
    => _cache.GetOrAdd(key, factory); // atomi "ha nincs, hozd l\xE9tre" m\u0171velet
\`\`\`

### 5. \`Channel<T>\` \u2013 producer/consumer minta async kontextusban

Ha egy h\xE1tt\xE9rfolyamat (l\xE1sd "H\xE1tt\xE9rfolyamatok \u2013 IHostedService \xE9s BackgroundService" fejezet) aszinkron m\xF3don fogyaszt egy sorba be\xE9rkez\u0151 munk\xE1t, a \`System.Threading.Channels\` a javasolt, lock-mentes, backpressure-t is t\xE1mogat\xF3 megold\xE1s sima \`Queue<T>\` + \`lock\` kombin\xE1ci\xF3 helyett:
\`\`\`csharp
var channel = Channel.CreateBounded<WorkItem>(capacity: 100);

// Producer
await channel.Writer.WriteAsync(workItem, cancellationToken);

// Consumer (pl. egy BackgroundService ExecuteAsync-j\xE1ban)
await foreach (var item in channel.Reader.ReadAllAsync(cancellationToken))
{
    await ProcessAsync(item, cancellationToken);
}
\`\`\`

Adatb\xE1zis-szint\u0171, t\xF6bb p\xE9ld\xE1nyra \xE9s elosztott folyamatokra kiterjed\u0151 konkurenci\xE1r\xF3l l\xE1sd a "Konkurenciakezel\xE9s halad\xF3 szinten" fejezetet.

\xD6k\xF6lszab\xE1ly: egyszer\u0171 sz\xE1ml\xE1l\xF3 \u2192 \`Interlocked\`; \xF6sszetett, de tiszt\xE1n szinkron kritikus szakasz \u2192 \`lock\`; async k\xF3d a kritikus szakaszban \u2192 \`SemaphoreSlim\`; megosztott kulcs-\xE9rt\xE9k t\xE1r \u2192 \`ConcurrentDictionary\`; producer/consumer feldolgoz\xE1si l\xE1nc \u2192 \`Channel<T>\`.

## xUnit Tesztel\xE9s Alapjai \u2013 napi szinten sz\xFCks\xE9ges patternek https://learn.microsoft.com/dotnet/core/testing/unit-testing-csharp-with-xunit {#xunit-teszteles-alapjai-napi-szinten-szukseges-patternek}

### Fact vs. Theory

- \`[Fact]\` \u2013 egyetlen, param\xE9ter n\xE9lk\xFCli tesztesetet jel\xF6l.
- \`[Theory]\` \u2013 param\xE9terezett teszt, amit t\xF6bb bemeneti adatk\xE9szlettel is lefuttat a keretrendszer; ezzel elker\xFClhet\u0151 a szinte azonos \`[Fact]\`-ek m\xE1solgat\xE1sa.

\`\`\`csharp
public class DiscountCalculatorTests
{
    [Fact]
    public void CalculateDiscount_NoDiscountCode_ReturnsFullPrice()
    {
        var sut = new DiscountCalculator();

        var result = sut.Calculate(price: 100M, discountCode: null);

        Assert.Equal(100M, result);
    }

    [Theory]
    [InlineData(100, "SAVE10", 90)]
    [InlineData(100, "SAVE50", 50)]
    [InlineData(0, "SAVE10", 0)]
    public void CalculateDiscount_ValidCode_AppliesCorrectDiscount(decimal price, string code, decimal expected)
    {
        var sut = new DiscountCalculator();

        var result = sut.Calculate(price, code);

        Assert.Equal(expected, result);
    }
}
\`\`\`

Ha az adatok nem primit\xEDvek, vagy m\xE1shonnan (f\xE1jl, adatb\xE1zis) sz\xE1rmaznak, \`[MemberData]\` vagy \`[ClassData]\` haszn\xE1lhat\xF3 \`[InlineData]\` helyett:
\`\`\`csharp
public static IEnumerable<object[]> DiscountCases =>
    new List<object[]>
    {
        new object[] { 100M, "SAVE10", 90M },
        new object[] { 100M, "SAVE50", 50M },
    };

[Theory]
[MemberData(nameof(DiscountCases))]
public void CalculateDiscount_MemberData_AppliesCorrectDiscount(decimal price, string code, decimal expected)
{
    var sut = new DiscountCalculator();
    Assert.Equal(expected, sut.Calculate(price, code));
}
\`\`\`

### Arrange-Act-Assert (AAA) \xE9s elnevez\xE9si konvenci\xF3

Minden teszt h\xE1rom, vizu\xE1lisan is elk\xFCl\xF6n\xEDtett r\xE9szb\u0151l \xE1lljon: **Arrange** (el\u0151k\xE9sz\xEDt\xE9s \u2013 SUT \xE9s f\xFCgg\u0151s\xE9gek l\xE9trehoz\xE1sa, bemeneti adat), **Act** (a tesztelt m\u0171velet megh\xEDv\xE1sa), **Assert** (az eredm\xE9ny ellen\u0151rz\xE9se). Egy tesztben lehet\u0151leg egyetlen logikai \xE1ll\xEDt\xE1st ellen\u0151rizz\xFCnk (nem felt\xE9tlen\xFCl egyetlen \`Assert\` h\xEDv\xE1st, de egyetlen viselked\xE9st).

Elterjedt elnevez\xE9si minta: \`Met\xF3dusN\xE9v_Szcen\xE1ri\xF3_V\xE1rtEredm\xE9ny\`, pl. \`CalculateDiscount_ValidCode_AppliesCorrectDiscount\` \u2013 \xEDgy a teszt neve \xF6nmag\xE1ban dokument\xE1ci\xF3k\xE9nt szolg\xE1l, \xE9s buk\xE1s eset\xE9n azonnal \xE9rthet\u0151, mi romlott el.

### Setup \xE9s teardown \u2013 konstruktor, \`IDisposable\`, fixture-\xF6k

xUnit-ban nincs k\xFCl\xF6n \`[SetUp]\`/\`[TearDown]\` attrib\xFAtum (szemben pl. NUnit-tal): minden \`[Fact]\`/\`[Theory]\` met\xF3dushoz **\xFAj p\xE9ld\xE1ny** j\xF6n l\xE9tre a teszt oszt\xE1lyb\xF3l, \xEDgy maga a konstruktor a setup, az \`IDisposable.Dispose()\` pedig a teardown:
\`\`\`csharp
public class OrderServiceTests : IDisposable
{
    private readonly AppDbContext _dbContext;
    private readonly OrderService _sut;

    public OrderServiceTests() // minden teszt el\u0151tt lefut
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;
        _dbContext = new AppDbContext(options);
        _sut = new OrderService(_dbContext);
    }

    public void Dispose() => _dbContext.Dispose(); // minden teszt ut\xE1n lefut
}
\`\`\`

Ha a setup **k\xF6lts\xE9ges** (pl. adatb\xE1zis-kont\xE9ner ind\xEDt\xE1sa Testcontainers-szel) \xE9s tesztek k\xF6z\xF6tt megoszthat\xF3, \`IClassFixture<T>\` haszn\xE1land\xF3 \u2013 ekkor a fixture egyszer j\xF6n l\xE9tre az adott teszt oszt\xE1ly \xF6sszes tesztje sz\xE1m\xE1ra:
\`\`\`csharp
public class DatabaseFixture : IAsyncLifetime
{
    public AppDbContext DbContext { get; private set; } = null!;

    public async Task InitializeAsync()
    {
        // pl. Testcontainers SQL Server kont\xE9ner ind\xEDt\xE1sa, migr\xE1ci\xF3 futtat\xE1sa
        DbContext = await CreateAndMigrateDbContextAsync();
    }

    public Task DisposeAsync() => DbContext.DisposeAsync().AsTask();
}

public class OrderServiceTests : IClassFixture<DatabaseFixture>
{
    private readonly DatabaseFixture _fixture;
    public OrderServiceTests(DatabaseFixture fixture) => _fixture = fixture;
}
\`\`\`

Ha t\xF6bb teszt oszt\xE1ly k\xF6z\xF6tt kell megosztani egy fixture-t (pl. egyetlen kont\xE9ner az eg\xE9sz tesztfut\xE1shoz), \`ICollectionFixture<T>\` \xE9s \`[Collection("...")]\` sz\xFCks\xE9ges. Fontos: az azonos collection-be tartoz\xF3 teszt oszt\xE1lyok xUnit-ban **nem p\xE1rhuzamosan** futnak egym\xE1ssal, mert megosztott \xE1llapotot haszn\xE1lnak.

### Egy\xE9b napi szinten hasznos elemek

- \`Assert.Throws<TException>(() => ...)\` / \`await Assert.ThrowsAsync<TException>(async () => ...)\` \u2013 kiv\xE9tel-alap\xFA viselked\xE9s tesztel\xE9se.
- \`[Trait("Category", "Integration")]\` \u2013 tesztek kategoriz\xE1l\xE1sa, hogy CI-ban sz\u0171rhet\u0151k legyenek (pl. csak unit tesztek fussanak minden commit-n\xE1l, integr\xE1ci\xF3s tesztek csak nightly buildben).
- FluentAssertions (opcion\xE1lis NuGet csomag) olvashat\xF3bb assert szintaxist ad: \`result.Should().Be(90M);\`, \`action.Should().Throw<ValidationException>();\`
- Tesztizol\xE1ci\xF3: egy teszt sikere/buk\xE1sa soha ne f\xFCggj\xF6n egy m\xE1sik teszt fut\xE1si sorrendj\xE9t\u0151l vagy mell\xE9khat\xE1s\xE1t\xF3l (pl. megosztott statikus mez\u0151) \u2013 ez a leggyakoribb oka a "flaky" (v\xE9letlenszer\u0171en hol sikeres, hol buk\xF3) teszteknek.

## Teszt adat-el\u0151\xE1ll\xEDt\xE1si patternek \u2013 Object Mother, Test Data Builder {#teszt-adat-eloallitasi-patternek-object-mother-test-data-builder}

*\xD6sszetett, unit \xE9s perziszt\xE1lt (integr\xE1ci\xF3s/funkcion\xE1lis) tesztekben egyar\xE1nt haszn\xE1lhat\xF3 megval\xF3s\xEDt\xE1s: l\xE1sd az "Object Mother \xE9s Test Data Builder \u2013 halad\xF3, kett\u0151s c\xE9l\xFA megval\xF3s\xEDt\xE1s" fejezetet.*

Ahogy egy tesztk\xE9szlet n\u0151, a tesztadatok (entit\xE1sok, DTO-k) manu\xE1lis, ism\xE9telt fel\xE9p\xEDt\xE9se minden tesztben sok boilerplate-et \xE9s karbantart\xE1si terhet jelent (ha egy k\xF6telez\u0151 mez\u0151 beker\xFCl az entit\xE1sba, minden teszt t\xF6rik). Erre k\xE9t elterjedt minta ad megold\xE1st.

### Object Mother pattern

Egy statikus (vagy Singleton) "gy\xE1r" oszt\xE1ly, amely el\u0151re elk\xE9sz\xEDtett, n\xE9vvel ell\xE1tott, tipikus tesztp\xE9ld\xE1nyokat ad vissza. El\u0151nye az egyszer\u0171s\xE9g \xE9s az olvashat\xF3s\xE1g, h\xE1tr\xE1nya, hogy sok vari\xE1ci\xF3 eset\xE9n sok met\xF3dus/kombin\xE1ci\xF3 halmoz\xF3dik fel.
\`\`\`csharp
public static class OrderMother
{
    public static Order ValidOrder() => new()
    {
        Id = 1,
        CustomerName = "Teszt Elek",
        Items = [new OrderItem { ProductId = 1, Quantity = 2, UnitPrice = 10M }],
        Status = OrderStatus.Pending
    };

    public static Order EmptyOrder() => new()
    {
        Id = 2,
        CustomerName = "Teszt Elek",
        Items = [],
        Status = OrderStatus.Pending
    };

    public static Order CancelledOrder() => ValidOrder() with { Status = OrderStatus.Cancelled };
}

// Haszn\xE1lat:
var order = OrderMother.ValidOrder();
\`\`\`

### Test Data Builder (Builder) pattern

Fluent, l\xE1ncolhat\xF3 API-val engedi finomhangolni a tesztadatot, alap\xE9rtelmezett ("happy path") \xE9rt\xE9kekkel, amelyeket csak a teszt szempontj\xE1b\xF3l relev\xE1ns mez\u0151kn\xE9l kell fel\xFCl\xEDrni. Jobban sk\xE1l\xE1z\xF3dik sok vari\xE1ci\xF3 eset\xE9n, mint az Object Mother, mert nem kell k\xFCl\xF6n met\xF3dus minden kombin\xE1ci\xF3hoz.
\`\`\`csharp
public class OrderBuilder
{
    private int _id = 1;
    private string _customerName = "Teszt Elek";
    private OrderStatus _status = OrderStatus.Pending;
    private readonly List<OrderItem> _items = [new() { ProductId = 1, Quantity = 1, UnitPrice = 10M }];

    public OrderBuilder WithId(int id) { _id = id; return this; }
    public OrderBuilder WithCustomerName(string name) { _customerName = name; return this; }
    public OrderBuilder WithStatus(OrderStatus status) { _status = status; return this; }
    public OrderBuilder WithNoItems() { _items.Clear(); return this; }

    public Order Build() => new()
    {
        Id = _id,
        CustomerName = _customerName,
        Status = _status,
        Items = _items
    };
}

// Haszn\xE1lat \u2013 csak a tesztben relev\xE1ns elt\xE9r\xE9s ker\xFCl explicit megad\xE1sra:
var cancelledOrder = new OrderBuilder()
    .WithStatus(OrderStatus.Cancelled)
    .Build();

var emptyOrder = new OrderBuilder()
    .WithNoItems()
    .Build();
\`\`\`

### Automatiz\xE1lt adatgener\xE1l\xE1s \u2013 AutoFixture \xE9s Bogus

Nagyobb projektekn\xE9l, ahol a tesztadat konkr\xE9t \xE9rt\xE9ke l\xE9nyegtelen (csak az sz\xE1m\xEDt, hogy "van egy \xE9rv\xE9nyes objektum"), \xE9rdemes megn\xE9zni az \`AutoFixture\` (automatikusan gener\xE1l v\xE9letlenszer\u0171, de \xE9rv\xE9nyes property-\xE9rt\xE9keket b\xE1rmely t\xEDpushoz reflection alapj\xE1n) \xE9s a \`Bogus\` (realisztikus, "fake" adatok gener\xE1l\xE1s\xE1ra: nevek, c\xEDmek, e-mail c\xEDmek) NuGet csomagokat is \u2013 ezek kombin\xE1lhat\xF3k a fenti Builder mint\xE1val (pl. Bogus-szal felt\xF6lt\xF6tt Builder alap\xE9rt\xE9kek).

Mikor melyiket haszn\xE1ljuk: Object Mother kev\xE9s, j\xF3l elnevezhet\u0151, gyakran ism\xE9tl\u0151d\u0151 szcen\xE1ri\xF3hoz (pl. "\xE9rv\xE9nyes rendel\xE9s", "lej\xE1rt el\u0151fizet\xE9s"); Builder sok apr\xF3 vari\xE1ci\xF3hoz, ahol a teszt olvashat\xF3s\xE1g\xE1t az sz\xE1m\xEDt, mi t\xE9r el az alapesett\u0151l; AutoFixture/Bogus t\xF6meges, "b\xE1rmilyen \xE9rv\xE9nyes adat j\xF3" jelleg\u0171 tesztekhez (pl. teljes\xEDtm\xE9nytesztek, property-based tesztel\xE9s).

## CancellationToken haszn\xE1lata API-kban \u2013 gyakorlati p\xE9lda (.NET 4.0+ / C# 5.0+) https://learn.microsoft.com/dotnet/standard/threading/cancellation-in-managed-threads {#cancellationtoken-hasznalata-api-kban-gyakorlati-pelda}

A \`CancellationToken\` c\xE9lja, hogy egy hosszan fut\xF3 (jellemz\u0151en I/O-k\xF6t\xF6tt: adatb\xE1zis-h\xEDv\xE1s, k\xFCls\u0151 HTTP h\xEDv\xE1s) m\u0171veletet kooperat\xEDv m\xF3don meg lehessen szak\xEDtani, miel\u0151tt az term\xE9szetes \xFAton befejez\u0151dne \u2013 ezzel er\u0151forr\xE1st (adatb\xE1zis-kapcsolat, sz\xE1l, mem\xF3ria) szabad\xEDtva fel, ha az eredm\xE9nyre m\xE1r nincs sz\xFCks\xE9g.

### Mi\xE9rt fontos ez kifejezetten API-kn\xE1l?

1. **Kliens lecsatlakoz\xE1sa** \u2013 ha egy HTTP kliens (b\xF6ng\xE9sz\u0151 bez\xE1r\xE1sa, timeout a kliens oldal\xE1n, mobilh\xE1l\xF3zat megszakad\xE1sa) lez\xE1rja a kapcsolatot, miel\u0151tt a szerver v\xE1laszolna, az ASP.NET Core automatikusan jelzi ezt egy \`CancellationToken\`-en kereszt\xFCl. Ha a backend k\xF3d nem figyeli ezt a tokent, a m\u0171velet (pl. egy dr\xE1ga riport lek\xE9rdez\xE9s) feleslegesen tov\xE1bb fut, pazarolva az adatb\xE1zis- \xE9s CPU-er\u0151forr\xE1st egy olyan v\xE1lasz\xE9rt, amit senki nem fog megkapni.
2. **Timeout kik\xE9nyszer\xEDt\xE9se** \u2013 egy k\xFCls\u0151 szolg\xE1ltat\xE1s h\xEDv\xE1s\xE1nak fels\u0151 id\u0151korl\xE1tot lehet szabni, hogy egy lassan v\xE1laszol\xF3 f\xFCgg\u0151s\xE9g ne blokkolja/lass\xEDtsa be a teljes k\xE9r\xE9st a v\xE9gtelens\xE9gig.
3. **Er\u0151forr\xE1s-felszabad\xEDt\xE1s terhel\xE9s alatt** \u2013 magas terhel\xE9sn\xE9l k\xFCl\xF6n\xF6sen fontos, hogy a m\xE1r "\xE9rtelmetlenn\xE9 v\xE1lt" munk\xE1t min\xE9l hamarabb elengedj\xFCk, hogy a szerver kapacit\xE1sa a m\xE9g hasznos k\xE9r\xE9sekre jusson.

### V\xE9gpontt\xF3l az adatb\xE1zis-h\xEDv\xE1sig \u2013 a token tov\xE1bbad\xE1sa ("token propagation")

Minimal API-ban \xE9s kontrollerekben egyar\xE1nt egyszer\u0171en felvehet\u0151 param\xE9terk\xE9nt; a keretrendszer automatikusan a k\xE9r\xE9s \xE9lettartam\xE1hoz (\`HttpContext.RequestAborted\`) k\xF6t\xF6tt tokent adja \xE1t:
\`\`\`csharp
// Minimal API
app.MapGet("/orders/{id:int}", async (int id, AppDbContext db, CancellationToken cancellationToken) =>
{
    var order = await db.Orders
        .FirstOrDefaultAsync(o => o.Id == id, cancellationToken);

    return order is not null ? Results.Ok(order) : Results.NotFound();
});

// Kontroller
[HttpGet("{id:int}")]
public async Task<IActionResult> GetOrder(int id, CancellationToken cancellationToken)
{
    var order = await _orderService.GetByIdAsync(id, cancellationToken);
    return order is not null ? Ok(order) : NotFound();
}
\`\`\`
A kulcsfontoss\xE1g\xFA szab\xE1ly: **a tokent v\xE9gig kell vinni a teljes h\xEDv\xE1si l\xE1ncon** \u2013 minden async met\xF3dusnak, ami I/O-t v\xE9gez (EF Core lek\xE9rdez\xE9s, \`HttpClient\` h\xEDv\xE1s, f\xE1jlm\u0171velet), \xE1t kell vennie \xE9s tov\xE1bb kell adnia a kapott tokent, k\xFCl\xF6nben a l\xE1nc egy pontj\xE1n "megszakad" a megszak\xEDthat\xF3s\xE1g.
\`\`\`csharp
public async Task<Order?> GetByIdAsync(int id, CancellationToken cancellationToken)
{
    // a service r\xE9teg tov\xE1bbadja a repository-nak
    return await _repository.GetByIdAsync(id, cancellationToken);
}
\`\`\`

### Timeout \xE9s k\xFCls\u0151 token \xF6sszekapcsol\xE1sa \u2013 \`CancellationTokenSource.CreateLinkedTokenSource\`

Ha egy k\xFCls\u0151 h\xEDv\xE1sra saj\xE1t timeout-ot is akarunk szabni a kliens megszak\xEDt\xE1sa mellett, egy "linked" tokent kell l\xE9trehozni, amely akkor jelez megszak\xEDt\xE1st, ha **b\xE1rmelyik** forr\xE1s (kliens megszak\xEDt\xE1s VAGY timeout) bek\xF6vetkezik:
\`\`\`csharp
public async Task<WeatherData> GetWeatherAsync(string city, CancellationToken requestAborted)
{
    using var timeoutCts = new CancellationTokenSource(TimeSpan.FromSeconds(3));
    using var linkedCts = CancellationTokenSource.CreateLinkedTokenSource(requestAborted, timeoutCts.Token);

    try
    {
        return await _httpClient.GetFromJsonAsync<WeatherData>($"/weather/{city}", linkedCts.Token)
            ?? throw new WeatherServiceException("\xDCres v\xE1lasz \xE9rkezett.");
    }
    catch (OperationCanceledException) when (timeoutCts.IsCancellationRequested)
    {
        // explicit m\xF3don megk\xFCl\xF6nb\xF6ztethet\u0151: mi okozta a megszak\xEDt\xE1st
        throw new TimeoutException($"A id\u0151j\xE1r\xE1s-szolg\xE1ltat\xE1s nem v\xE1laszolt 3 m\xE1sodpercen bel\xFCl ({city}).");
    }
}
\`\`\`

### Mikor NE szak\xEDtsuk meg a m\u0171veletet a token ellen\xE9re

Vannak esetek, amikor a k\xE9r\xE9s megszakad\xE1sa ut\xE1n is be kell fejezni a munk\xE1t \u2013 pl. egy p\xE9nz\xFCgyi tranzakci\xF3, ami m\xE1r elindult az adatb\xE1zisban, vagy egy audit log bejegyz\xE9s. Ilyenkor tudatosan \`CancellationToken.None\`-t kell \xE1tadni az adott (kritikus) r\xE9sznek, hogy az ne szakadjon meg a kliens lecsatlakoz\xE1sa eset\xE9n sem \u2013 ezt mindig kommentben \xE9rdemes indokolni, mert a k\xF3d olvas\xF3i alapb\xF3l elv\xE1rj\xE1k a token tov\xE1bbad\xE1s\xE1t.
\`\`\`csharp
// A fizet\xE9s state-j\xE9t mindenk\xE9pp friss\xEDtj\xFCk, akkor is, ha a kliens id\u0151k\xF6zben lecsatlakozott
await _paymentRepository.MarkAsProcessedAsync(paymentId, CancellationToken.None);
\`\`\`

\xD6sszefoglalva: a \`CancellationToken\` nem "nice to have", hanem az API-k sk\xE1l\xE1zhat\xF3s\xE1g\xE1nak \xE9s er\u0151forr\xE1s-hat\xE9konys\xE1g\xE1nak alapvet\u0151 eszk\xF6ze \u2013 minden I/O-k\xF6t\xF6tt l\xE1ncszemben tov\xE1bb kell adni, \xE9s tudatosan kell d\xF6nteni arr\xF3l, hol indokolt (vagy \xE9ppen tilos) a megszak\xEDthat\xF3s\xE1g.

## Saga Orchestration https://learn.microsoft.com/azure/architecture/patterns/saga {#saga-orchestration}

A **Saga** minta hossz\xFA lefut\xE1s\xFA, elosztott tranzakci\xF3kat old meg, amelyek t\xF6bb microservice-t \xE9rintenek. Mivel a klasszikus ACID tranzakci\xF3 nem alkalmazhat\xF3 t\xF6bb f\xFCggetlen szolg\xE1ltat\xE1s k\xF6z\xF6tt, a Saga sorozatos lok\xE1lis tranzakci\xF3kat hajt v\xE9gre, \xE9s ha valamelyik l\xE9p\xE9s hib\xE1ra fut, **kompenz\xE1l\xF3 tranzakci\xF3kat** ind\xEDt el a kor\xE1bbi v\xE1ltoz\xE1sok visszavon\xE1s\xE1hoz.

K\xE9t f\u0151 megk\xF6zel\xEDt\xE9s:
- **Choreography (koreogr\xE1fia)** \u2013 minden service esem\xE9nyre reag\xE1l, \xE9s maga d\xF6nti el, mi a k\xF6vetkez\u0151 l\xE9p\xE9s; nincs k\xF6zponti koordin\xE1tor.
- **Orchestration (orchestr\xE1ci\xF3)** \u2013 egy dedik\xE1lt Saga Orchestrator (vagy State Machine) ir\xE1ny\xEDtja a folyamatot, ismeri az \xE1llapot\xE1t, \xE9s parancsokat k\xFCld az egyes service-eknek.

\`\`\`
Kliens \u2500\u2500\u25BA Saga Orchestrator
               \u2502
               \u251C\u2500\u2500\u25BA Service A (Command) \u2500\u2500\u25BA OK \u2500\u2500\u25BA folytat\xE1s
               \u251C\u2500\u2500\u25BA Service B (Command) \u2500\u2500\u25BA HIBA \u2500\u2500\u25BA A kompenz\xE1l\xE1sa
               \u2514\u2500\u2500\u25BA Service C (Command)
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: amikor egy \xFCzleti folyamat (pl. rendel\xE9s lead\xE1sa: k\xE9szlet, fizet\xE9s, sz\xE1ll\xEDt\xE1s) t\xF6bb microservice-t \xE9rint, \xE9s az atomicit\xE1st kell valamilyen szinten garant\xE1lni; ha a folyamat \xE1llapot\xE1t napl\xF3zni/visszak\xF6vetni kell; komplex el\xE1gaz\xE1sok eset\xE9n az orchestration jobban k\xF6vethet\u0151, mint a choreography.

Legjobb gyakorlatok:
- Minden l\xE9p\xE9shez tervezz el\u0151re kompenz\xE1l\xF3 m\u0171veletet (compensating transaction).
- Az orchestrator \xE1llapot\xE1t perzisztensen t\xE1rold (adatb\xE1zisban), hogy \xFAjraind\xEDt\xE1s ut\xE1n is folytathat\xF3 legyen.
- A saga l\xE9p\xE9sei legyenek idempotensek \u2013 ha egy \xFCzenet k\xE9tszer \xE9rkezik, ne hajt\xF3djon v\xE9gre k\xE9tszer.
- State machine k\xF6nyvt\xE1r haszn\xE1lata az \xE1llapotkezel\xE9shez (pl. MassTransit Saga, Temporal).
- Minden k\xFCls\u0151 h\xEDv\xE1shoz timeout \xE9s retry mechanizmus.

Mit ker\xFClj el: ne keverd a Choreography-t \xE9s az Orchestration-t ugyanabban a folyamatban; ne t\xE9telezd fel, hogy a kompenz\xE1ci\xF3 mindig sikeres (tervezz Dead Letter Queue-ra/manu\xE1lis beavatkoz\xE1sra is); ne alkalmazz Saga-t egyszer\u0171, k\xE9tl\xE9p\xE9ses folyamatokra; ker\xFCld a nagyon sok l\xE9p\xE9ses (~10+) saga-kat egyetlen orchestratorban.

## Outbox Pattern https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/subscribe-events {#outbox-pattern}

Az **Outbox (kimen\u0151 levelesl\xE1da) minta** garant\xE1lja, hogy az adatb\xE1zisba \xEDr\xE1s \xE9s az \xFCzenetk\xFCld\xE9s (pl. Kafka, RabbitMQ fel\xE9) atomikusan t\xF6rt\xE9njen. Az \xFCzenetet a tranzakci\xF3 r\xE9sze\xADk\xE9nt nem k\xF6zvetlen\xFCl a brokerre k\xFCldj\xFCk, hanem egy **outbox t\xE1bl\xE1ba** mentj\xFCk; egy h\xE1tt\xE9rfolyamat (poller vagy CDC \u2013 Change Data Capture) olvassa ki \xE9s tov\xE1bb\xEDtja t\xE9nylegesen.

\`\`\`
Alkalmaz\xE1s (egy tranzakci\xF3ban):
  \u251C\u2500\u2500\u25BA \xDCzleti adat \u2500\u2500\u25BA f\u0151 t\xE1bla
  \u2514\u2500\u2500\u25BA \xDCzenet      \u2500\u2500\u25BA outbox t\xE1bla

H\xE1tt\xE9rfolyamat: outbox t\xE1bla \u2500\u2500\u25BA Message Broker \u2500\u2500\u25BA fogyaszt\xF3 service-ek
\`\`\`

\`\`\`csharp
public async Task PlaceOrderAsync(Order order, CancellationToken cancellationToken)
{
    using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);

    _dbContext.Orders.Add(order);
    _dbContext.OutboxMessages.Add(new OutboxMessage
    {
        Id = Guid.NewGuid(),
        Type = nameof(OrderPlacedEvent),
        Payload = JsonSerializer.Serialize(new OrderPlacedEvent(order.Id, order.CustomerId)),
        OccurredAt = DateTimeOffset.UtcNow
    });

    await _dbContext.SaveChangesAsync(cancellationToken); // ugyanaz a tranzakci\xF3 menti mindkett\u0151t
    await transaction.CommitAsync(cancellationToken);
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha garant\xE1lni kell, hogy egy domain event biztosan eljut a t\xF6bbi service-hez akkor is, ha a broker \xE1tmenetileg el\xE9rhetetlen; microservice kommunik\xE1ci\xF3ban, ahol az at-least-once szemantika elfogadhat\xF3/sz\xFCks\xE9ges; CQRS read model friss\xEDt\xE9s\xE9n\xE9l.

Legjobb gyakorlatok: az outbox rekord \xE9s az \xFCzleti adat mindig ugyanabba a DB tranzakci\xF3ba ker\xFClj\xF6n; a fogyaszt\xF3k legyenek idempotensek (egy \xFCzenet t\xF6bbsz\xF6r is meg\xE9rkezhet); a feldolgozott rekordokat jel\xF6ld meg (\`ProcessedAt\`) \xE9s id\u0151nk\xE9nt takar\xEDtsd; nagy volumenn\xE9l CDC eszk\xF6z (pl. Debezium) hat\xE9konyabb, mint a polling; figyelj a feldolgoz\xE1si sorrendre, ha az fontos.

Mit ker\xFClj el: ne k\xFCldj \xFCzenetet k\xF6zvetlen\xFCl a brokernek a tranzakci\xF3n k\xEDv\xFCl; az outbox olvas\xE1sa \xE9s t\xF6rl\xE9se/jel\xF6l\xE9se is legyen atomi; ne pollozz feleslegesen agressz\xEDvan; ne t\xE1rold az outbox t\xE1bl\xE1ban a teljes entit\xE1st, csak a sz\xFCks\xE9ges payloadot.

## Circuit Breaker Pattern https://learn.microsoft.com/azure/architecture/patterns/circuit-breaker {#circuit-breaker-pattern}

*A teljes eszk\xF6zt\xE1r (timeout, bulkhead, fallback, load shedding, retry storm, k\xE1osz-tesztel\xE9s) a "Rugalmass\xE1gi mint\xE1k a circuit breakeren t\xFAl" fejezetben.*

A **Circuit Breaker (megszak\xEDt\xF3)** minta megakad\xE1lyozza, hogy egy hib\xE1s vagy lassan v\xE1laszol\xF3 k\xFCls\u0151 f\xFCgg\u0151s\xE9g (service, API, adatb\xE1zis) kaszk\xE1dszer\u0171 hib\xE1t okozzon az eg\xE9sz rendszerben \u2013 ez a gyakorlati implement\xE1ci\xF3 (Polly, \`AddResilienceHandler\`) m\xE1r szerepel a "HttpClientFactory \xE9s Polly" fejezetben, itt a minta \xF6nmag\xE1ban, technol\xF3giaf\xFCggetlen\xFCl ker\xFCl \xF6sszefoglal\xE1sra.

| \xC1llapot | Le\xEDr\xE1s |
|---|---|
| Closed (z\xE1rt) | Norm\xE1l m\u0171k\xF6d\xE9s, a h\xEDv\xE1sok \xE1tmennek |
| Open (nyitott) | A megszak\xEDt\xF3 nyitva, a h\xEDv\xE1sok azonnal hib\xE1t adnak vissza (a h\xEDvott f\xE9l fel\xE9 el sem indulnak) |
| Half-Open (f\xE9lig nyitott) | Pr\xF3bah\xEDv\xE1s: ha sikeres, visszaz\xE1r (Closed), ha nem, \xFAjra kiny\xEDlik (Open) |

Mikor \xE9rdemes haszn\xE1lni: microservices architekt\xFAr\xE1ban, ahol egy szolg\xE1ltat\xE1s k\xFCls\u0151 service-t h\xEDv (HTTP, gRPC, adatb\xE1zis); ha el akarod ker\xFClni, hogy egy lassul\xF3 f\xFCgg\u0151s\xE9g kimer\xEDtse a thread pool-t; ha gyors fallback v\xE1laszt szeretn\xE9l adni (cache-b\u0151l, default \xE9rt\xE9kb\u0151l); b\xE1rmikor, ha a h\xEDvott f\xE9l nem garant\xE1ltan el\xE9rhet\u0151.

Legjobb gyakorlatok: mindig legyen fallback strat\xE9gia arra az esetre, ha a megszak\xEDt\xF3 nyitva van; kombin\xE1ld Retry mint\xE1val; a k\xFCsz\xF6b\xE9rt\xE9keket (hibasz\xE1m/id\u0151ablak, Half-Open pr\xF3baid\u0151) val\xF3s m\xE9r\xE9sek alapj\xE1n hangold; tedd monitorozhat\xF3v\xE1 az \xE1llapot\xE1tmeneteket (metrika, logol\xE1s); ne csak HTTP h\xEDv\xE1sra alkalmazd, DB/broker h\xEDv\xE1sokra is hasznos lehet.

Mit ker\xFClj el: ne \xE1ll\xEDts be t\xFAl alacsony hibasz\xE1m-k\xFCsz\xF6b\xF6t (1 hiba = nyit\xE1s), mert forgalmas rendszerben \xE1lland\xF3an nyitva lesz; a Half-Open \xE1llapotot ne hagyd konfigur\xE1latlanul, k\xFCl\xF6nben a megszak\xEDt\xF3 sosem z\xE1r vissza; ne keverd \xF6ssze a Retry-jal (a Retry egyedi h\xEDv\xE1sra pr\xF3b\xE1lkozik \xFAjra, a Circuit Breaker az \xF6sszes\xEDtett, id\u0151 szerinti \xE1llapotot figyeli); ne alkalmazd megb\xEDzhat\xF3, bels\u0151 (in-process) h\xEDv\xE1sokra, mert felesleges overhead.

## Repository Pattern https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design {#repository-pattern}

A **Repository (t\xE1rol\xF3) minta** az adatel\xE9r\xE9si logik\xE1t absztrah\xE1lja egy interf\xE9sz m\xF6g\xE9: az \xFCzleti logika nem adatb\xE1zis-specifikus k\xF3dot h\xEDv k\xF6zvetlen\xFCl, hanem egy repository interf\xE9szt, amelynek implement\xE1ci\xF3ja m\xF6g\xF6tt b\xE1rmilyen adatforr\xE1s \xE1llhat (SQL, NoSQL, in-memory, f\xE1jl). Ez el\u0151seg\xEDti a tesztelhet\u0151s\xE9get \xE9s a r\xE9tegek sz\xE9tv\xE1laszt\xE1s\xE1t.

\`\`\`
Alkalmaz\xE1s r\xE9teg
    \u2502
    \u25BC
IProductRepository (interf\xE9sz)
    \u2502
    \u251C\u2500\u2500 ProductRepository (EF Core implement\xE1ci\xF3)
    \u2514\u2500\u2500 InMemoryProductRepository (teszt implement\xE1ci\xF3)
\`\`\`

\`\`\`csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(int id, CancellationToken cancellationToken);
    Task<IReadOnlyList<Order>> GetPendingOrdersAsync(CancellationToken cancellationToken);
    void Add(Order order);
}

public class OrderRepository(AppDbContext dbContext) : IOrderRepository
{
    public Task<Order?> GetByIdAsync(int id, CancellationToken cancellationToken) =>
        dbContext.Orders.FirstOrDefaultAsync(o => o.Id == id, cancellationToken);

    public Task<IReadOnlyList<Order>> GetPendingOrdersAsync(CancellationToken cancellationToken) =>
        dbContext.Orders.Where(o => o.Status == OrderStatus.Pending)
            .ToListAsync(cancellationToken)
            .ContinueWith(t => (IReadOnlyList<Order>)t.Result, cancellationToken);

    public void Add(Order order) => dbContext.Orders.Add(order);
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha a tesztelhet\u0151s\xE9g kiemelt fontoss\xE1g\xFA (a repository mockolhat\xF3, l\xE1sd "Unit Testing \u2013 Mocking Moq-kal" fejezet); ha az adatforr\xE1s elvileg cser\xE9lhet\u0151; Domain-Driven Design alkalmaz\xE1sakor, ahol a repository az aggreg\xE1tum gy\xF6kerek ment\xE9n szervezi az el\xE9r\xE9st; ha az adatel\xE9r\xE9si logik\xE1t egy helyen szeretn\xE9d tartani.

Legjobb gyakorlatok: defini\xE1lj interf\xE9szt minden repository-hoz; szervezd aggreg\xE1tum-gy\xF6k\xF6k szerint (egy aggreg\xE1tumhoz egy repository, nem egy t\xE1bla = egy repository); ne sziv\xE1rogtass ki adatb\xE1zis-specifikus fogalmat (pl. \`IQueryable<T>\` ne legyen publikus visszat\xE9r\xE9si t\xEDpus); kombin\xE1ld Unit of Work mint\xE1val, ha t\xF6bb repository k\xF6z\xF6s tranzakci\xF3t ig\xE9nyel.

Mit ker\xFClj el: ne tegy\xE9l \xFCzleti logik\xE1t a repository-ba, csak adatel\xE9r\xE9st; ne adj vissza \`IQueryable<T>\`-t, mert azzal az \xFCzleti r\xE9teg tov\xE1bb kompon\xE1lhat LINQ kifejez\xE9seket, \xE9s elmos\xF3dik az absztrakci\xF3 hat\xE1ra; ne hozz l\xE9tre repository-t reflexszer\u0171en minden t\xE1bl\xE1hoz, csak aggreg\xE1tum-gy\xF6kerekhez; ha sok helyen ism\xE9tl\u0151dik ugyanaz a lek\xE9rdez\xE9si logika, adj neki nevet (l\xE1sd "Specification Pattern" fejezet), ne duplik\xE1ld.

## Service Collection Extension Pattern (ASP.NET Core 1.0+) https://learn.microsoft.com/dotnet/core/extensions/dependency-injection {#service-collection-extension-pattern}

A .NET DI kont\xE9ner (\`IServiceCollection\`) konfigur\xE1l\xE1s\xE1nak szervezett m\xF3dja: Extension Method-ok seg\xEDts\xE9g\xE9vel a regisztr\xE1ci\xF3s logika modul\xE1risan, r\xE9tegenk\xE9nt/feature-\xF6nk\xE9nt ker\xFCl szervez\xE9sre, ahelyett hogy a \`Program.cs\` egyetlen, t\xF6bb sz\xE1z soros f\xE1jll\xE1 dagadna.

\`\`\`csharp
// Program.cs \u2013 tiszta \xE9s olvashat\xF3
builder.Services.AddApplicationServices();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddPersistenceServices(builder.Configuration);

// K\xFCl\xF6n f\xE1jlban (Application r\xE9teg):
public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ApplicationServiceExtensions).Assembly));
        services.AddValidatorsFromAssembly(typeof(ApplicationServiceExtensions).Assembly);
        return services;
    }
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: minden k\xF6zepes/nagy m\xE9ret\u0171 .NET alkalmaz\xE1sban; ha a DI regisztr\xE1ci\xF3kat r\xE9tegek szerint (Application, Infrastructure, Persistence) szeretn\xE9d szepar\xE1lni; k\xF6nyvt\xE1rfejleszt\xE9sn\xE9l, hogy a fogyaszt\xF3 egyetlen h\xEDv\xE1ssal (\`services.AddMyLibrary()\`) regisztr\xE1lhassa az \xF6sszes sz\xFCks\xE9ges szolg\xE1ltat\xE1st; csapatmunk\xE1n\xE1l, hogy a r\xE9tegek fejleszt\u0151i \xF6n\xE1ll\xF3an kezelhess\xE9k a saj\xE1t regisztr\xE1ci\xF3ikat.

Legjobb gyakorlatok: n\xE9vkonvenci\xF3 \`Add[ModulN\xE9v]\` (pl. \`AddAuthentication\`, \`AddCaching\`); mindig add vissza az \`IServiceCollection\`-t a l\xE1ncolhat\xF3s\xE1g (fluent API) miatt; fogadd el param\xE9terk\xE9nt az \`IConfiguration\`-t, ha konfigur\xE1ci\xF3b\xF3l kell olvasni; helyezd az extension class-t a megfelel\u0151 projektr\xE9tegbe.

Mit ker\xFClj el: ne regisztr\xE1lj mindent egyetlen \xF3ri\xE1si extension method-ban, bontsd logikai egys\xE9gekre; ne v\xE9gezz adatb\xE1zis-kapcsolatot vagy I/O m\u0171veletet a regisztr\xE1ci\xF3 k\xF6zben, az extension csak le\xEDrja, mit kell l\xE9trehozni; ne keverd a r\xE9tegek felel\u0151ss\xE9g\xE9t (pl. Infrastructure extension ne hivatkozzon Application bels\u0151 oszt\xE1lyaira).

## REPR Pattern \u2013 Request-Endpoint-Response (.NET 6+ (Minimal API)) https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis {#repr-pattern-request-endpoint-response}

A **REPR (Request-Endpoint-Response)** minta alternat\xEDva a hagyom\xE1nyos, sok akci\xF3met\xF3dust tartalmaz\xF3 MVC Controller-ekkel szemben. Minden HTTP v\xE9gpont egy \xF6n\xE1ll\xF3 oszt\xE1lyban kap helyet, amely tartalmazza a Request modellt (bemeneti DTO), az Endpoint oszt\xE1lyt (a feldolgoz\xF3 logika, jellemz\u0151en csak deleg\xE1l\xE1s) \xE9s a Response modellt (kimeneti DTO). Steve Smith (Ardalis) n\xE9pszer\u0171s\xEDtette; .NET-ben tipikusan Minimal API-val vagy a FastEndpoints k\xF6nyvt\xE1rral val\xF3sul meg.

\`\`\`
\u{1F4C1} Endpoints/
   \u{1F4C1} Orders/
      CreateOrder/
         CreateOrderRequest.cs
         CreateOrderEndpoint.cs
         CreateOrderResponse.cs
      GetOrderById/
         GetOrderByIdRequest.cs
         GetOrderByIdEndpoint.cs
         GetOrderByIdResponse.cs
\`\`\`

\`\`\`csharp
// Minimal API + MediatR kombin\xE1ci\xF3val megval\xF3s\xEDtott REPR endpoint
public record CreateOrderRequest(int CustomerId, List<OrderItemDto> Items);
public record CreateOrderResponse(int OrderId);

public static class CreateOrderEndpoint
{
    public static void MapCreateOrderEndpoint(this IEndpointRouteBuilder app)
    {
        app.MapPost("/orders", async (CreateOrderRequest request, ISender mediator, CancellationToken ct) =>
        {
            var orderId = await mediator.Send(new CreateOrderCommand(request.CustomerId, request.Items), ct);
            return Results.Ok(new CreateOrderResponse(orderId));
        });
    }
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha a Controller oszt\xE1lyok t\xFAl nagyra n\u0151ttek ("God Controller" antipattern); ha szeretn\xE9d egy helyen tartani az \xF6sszetartoz\xF3 k\xE9r\xE9s/feldolgoz\xE1s/v\xE1lasz k\xF3dot; Vertical Slice Architecture alkalmaz\xE1sakor (l\xE1sd "Vertical sliced code Organisation pattern" fejezet); kis/k\xF6zepes microservice-ekn\xE9l, ahol a Minimal API + REPR \xE1ttekinthet\u0151; ha a csapat feature-k szerint (nem r\xE9tegek szerint) szeretn\xE9 szervezni a k\xF3dot.

Legjobb gyakorlatok: minden endpointnak egy felel\u0151ss\xE9ge legyen; FastEndpoints vagy Minimal API + MediatR kombin\xE1ci\xF3 az implement\xE1ci\xF3hoz; a Request/Response modellek legyenek DTO-k, ne dom\xE9nentit\xE1sok; szervezd az endpointokat feature mapp\xE1k szerint; adj minden endpointnak egy\xE9rtelm\u0171 nevet.

Mit ker\xFClj el: ne tegy\xE9l \xFCzleti logik\xE1t az Endpoint oszt\xE1lyba, deleg\xE1lj handler/use case/service fel\xE9; ne csin\xE1lj k\xF6z\xF6s base endpointb\xF3l \xF6r\xF6kl\xE9si hierarchi\xE1t; ne keverd k\xF6vetkezetlen\xFCl a REPR-t \xE9s a hagyom\xE1nyos Controllert ugyanabban a projektben.

## Domain Events https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation {#domain-events}

*Verzi\xF3: A p\xE9lda C# 12 els\u0151dleges konstruktort \xE9s gy\u0171jtem\xE9ny-kifejez\xE9st (\`[]\`) haszn\xE1l (.NET 8).*

A **Domain Events** minta lehet\u0151v\xE9 teszi, hogy az aggreg\xE1tumok bels\u0151 esem\xE9nyeket defini\xE1ljanak, amelyek az \xFCzleti folyamat sor\xE1n keletkeznek (pl. \`OrderPlaced\`, \`PaymentReceived\`). Ezeket az esem\xE9nyeket az alkalmaz\xE1sr\xE9teg vagy az infrastrukt\xFAra kezeli le, \xEDgy maga az aggreg\xE1tum nem f\xFCgg k\xF6zvetlen\xFCl semmilyen k\xFCls\u0151 rendszert\u0151l (email k\xFCld\xE9s, \xFCzenetsor, audit log).

\`\`\`csharp
public sealed record OrderPlacedDomainEvent(int OrderId, int CustomerId, decimal TotalAmount) : INotification;

public class Order
{
    private readonly List<INotification> _domainEvents = [];
    public IReadOnlyList<INotification> DomainEvents => _domainEvents.AsReadOnly();

    public void Place()
    {
        Status = OrderStatus.Placed;
        _domainEvents.Add(new OrderPlacedDomainEvent(Id, CustomerId, TotalAmount));
    }

    public void ClearDomainEvents() => _domainEvents.Clear();
}

// EF Core SaveChangesAsync interceptorban (l\xE1sd "EF Core Interceptors" fejezet) publik\xE1lva a ment\xE9s ut\xE1n:
public class DomainEventDispatchInterceptor(IPublisher publisher) : SaveChangesInterceptor
{
    public override async ValueTask<int> SavedChangesAsync(
        SaveChangesCompletedEventData eventData, int result, CancellationToken cancellationToken = default)
    {
        var context = eventData.Context!;
        var entitiesWithEvents = context.ChangeTracker.Entries<Order>()
            .Select(e => e.Entity)
            .Where(o => o.DomainEvents.Count != 0)
            .ToList();

        foreach (var entity in entitiesWithEvents)
        {
            var events = entity.DomainEvents.ToList();
            entity.ClearDomainEvents();
            foreach (var domainEvent in events)
                await publisher.Publish(domainEvent, cancellationToken);
        }

        return result;
    }
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha az aggreg\xE1tumon bel\xFCli v\xE1ltoz\xE1sokra m\xE1s r\xE9szeknek is reag\xE1lniuk kell (pl. saga ind\xEDt\xE1sa, outbox felt\xF6lt\xE9se, audit log \xEDr\xE1sa); laza csatol\xE1s\xFA, event-driven architekt\xFAr\xE1ban.

Legjobb gyakorlatok: a domain eventek legyenek immutable record-ok; nevezd \u0151ket mindig m\xFAlt id\u0151ben (\`OrderPlaced\`, nem \`PlaceOrder\`); az esem\xE9nyt csak akkor publik\xE1ld, ha a tranzakci\xF3 (SaveChanges) sikeresen lez\xE1rult, k\xFCl\xF6nben a fogyaszt\xF3k olyan \xE1llapotra reag\xE1lnak, ami esetleg nem is ker\xFClt ment\xE9sre.

Mit ker\xFClj el: ne tegy\xE9l navig\xE1ci\xF3s property-t vagy EF entit\xE1st a domain eventbe, csak primit\xEDv \xE9rt\xE9keket/azonos\xEDt\xF3kat; ne publik\xE1lj domain eventet a \`SaveChanges\` el\u0151tt (rollback eset\xE9n "fantom" esem\xE9nyt kapn\xE1nak a fogyaszt\xF3k).

## Decorator Pattern (Pipeline) {#decorator-pattern-pipeline}

A **Decorator** minta egy megl\xE9v\u0151 objektum k\xF6r\xE9 csomagol egy \xFAjabbat, ezzel hozz\xE1adva vagy m\xF3dos\xEDtva a viselked\xE9st an\xE9lk\xFCl, hogy az eredeti oszt\xE1ly k\xF3dj\xE1t m\xF3dos\xEDtan\xE1nk. ASP.NET Core-ban a Middleware pipeline (l\xE1sd "Middleware" fejezet) ennek rendszer szint\u0171 megval\xF3s\xEDt\xE1sa; MediatR-rel a Pipeline Behavior (l\xE1sd "MediatR" fejezet) az alkalmaz\xE1s szint\u0171 megfelel\u0151je; klasszikus OOP szinten pedig DI-vel regisztr\xE1lhat\xF3 decorator-l\xE1nc:

\`\`\`csharp
public interface IOrderService
{
    Task PlaceOrderAsync(Order order, CancellationToken cancellationToken);
}

public class OrderService : IOrderService
{
    public Task PlaceOrderAsync(Order order, CancellationToken cancellationToken) => Task.CompletedTask;
}

// Decorator: logol\xE1st ad a megl\xE9v\u0151 implement\xE1ci\xF3hoz, an\xE9lk\xFCl hogy azt m\xF3dos\xEDtan\xE1
public class LoggingOrderServiceDecorator(IOrderService inner, ILogger<LoggingOrderServiceDecorator> logger) : IOrderService
{
    public async Task PlaceOrderAsync(Order order, CancellationToken cancellationToken)
    {
        logger.LogInformation("Rendel\xE9s feldolgoz\xE1sa kezd\u0151dik: {OrderId}", order.Id);
        await inner.PlaceOrderAsync(order, cancellationToken);
        logger.LogInformation("Rendel\xE9s feldolgoz\xE1sa befejez\u0151d\xF6tt: {OrderId}", order.Id);
    }
}

// Regisztr\xE1ci\xF3 (pl. Scrutor csomaggal egyszer\u0171s\xEDthet\u0151: services.Decorate<IOrderService, LoggingOrderServiceDecorator>())
builder.Services.AddScoped<OrderService>();
builder.Services.AddScoped<IOrderService>(sp =>
    new LoggingOrderServiceDecorator(sp.GetRequiredService<OrderService>(), sp.GetRequiredService<ILogger<LoggingOrderServiceDecorator>>()));
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: cross-cutting concern-\xF6k kezel\xE9s\xE9re (logging, caching, retry, valid\xE1ci\xF3, tranzakci\xF3); ha \xF6r\xF6kl\xE9s helyett kompoz\xEDci\xF3val szeretn\xE9d b\u0151v\xEDteni a viselked\xE9st.

Legjobb gyakorlatok: tartsd a dekor\xE1tor felel\u0151ss\xE9g\xE9t minim\xE1lisra (Single Responsibility); defini\xE1lj pontos sorrendet a dekor\xE1toroknak/pipeline l\xE9p\xE9seknek; nagyobb projektben a Scrutor NuGet csomag automatiz\xE1lja a decorator regisztr\xE1ci\xF3t.

Mit ker\xFClj el: ker\xFCld a m\xE9lyen egym\xE1sba \xE1gyazott dekor\xE1torok l\xE1nc\xE1t, mert neh\xE9z debuggolni \xE9s k\xF6vetni a v\xE9grehajt\xE1si sorrendet.

## Specification Pattern {#specification-pattern}

A **Specification** minta egy \xFCzleti szab\xE1lyt vagy lek\xE9rdez\xE9si felt\xE9telt \xF6n\xE1ll\xF3, \xFAjrahaszn\xE1lhat\xF3 \xE9s tesztelhet\u0151 objektumba z\xE1r, ahelyett hogy a sz\u0171r\xE9si logika (LINQ \`Where\` kifejez\xE9s) sz\xE9tsz\xF3r\xF3dna a repository-k \xE9s service-ek k\xF6z\xF6tt. K\xFCl\xF6n\xF6sen j\xF3l kombin\xE1lhat\xF3 a "Repository Pattern" fejezetben eml\xEDtett probl\xE9m\xE1val, hogy a repository ne adjon vissza \`IQueryable<T>\`-t, m\xE9gis rugalmasan lek\xE9rdezhet\u0151 maradjon.

\`\`\`csharp
public abstract class Specification<T>
{
    public abstract Expression<Func<T, bool>> ToExpression();
    public bool IsSatisfiedBy(T entity) => ToExpression().Compile()(entity);
}

public class PendingHighValueOrdersSpecification(decimal minimumAmount) : Specification<Order>
{
    public override Expression<Func<Order, bool>> ToExpression() =>
        order => order.Status == OrderStatus.Pending && order.TotalAmount >= minimumAmount;
}

// Repository-ban:
public async Task<IReadOnlyList<Order>> FindAsync(Specification<Order> specification, CancellationToken cancellationToken) =>
    await _dbContext.Orders.Where(specification.ToExpression()).ToListAsync(cancellationToken);

// Haszn\xE1lat:
var orders = await _orderRepository.FindAsync(new PendingHighValueOrdersSpecification(10_000M), cancellationToken);
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha ugyanaz a sz\u0171r\xE9si logika t\xF6bb helyen (repository, valid\xE1ci\xF3, in-memory ellen\u0151rz\xE9s) is el\u0151fordul; ha a lek\xE9rdez\xE9si felt\xE9teleket kombin\xE1lni szeretn\xE9d (\`And\`, \`Or\`, \`Not\` oper\xE1torokkal); komplex domain szab\xE1lyok eset\xE9n, ahol a felt\xE9tel \xF6nmag\xE1ban is dokument\xE1l\xF3 \xE9rt\xE9k\u0171 elnevez\xE9st \xE9rdemel.

Legjobb gyakorlatok: adj a specifik\xE1ci\xF3nak besz\xE9des, \xFCzleti nyelvet t\xFCkr\xF6z\u0151 nevet (\`PendingHighValueOrdersSpecification\`, ne \`OrderFilter1\`); tedd kombin\xE1lhat\xF3v\xE1 (\`AndSpecification\`, \`OrSpecification\` wrapperekkel, vagy NuGet csomaggal, pl. Ardalis.Specification); a specifik\xE1ci\xF3 maradjon deklarat\xEDv, ne tartalmazzon I/O-t.

Mit ker\xFClj el: ne hozz l\xE9tre specifik\xE1ci\xF3t minden apr\xF3, egyszeri lek\xE9rdez\xE9shez \u2013 csak akkor \xE9ri meg, ha a felt\xE9tel ism\xE9tl\u0151dik vagy \xF6nmag\xE1ban is domain fogalom; ne keverd bele a lapoz\xE1si/rendez\xE9si logik\xE1t a specifik\xE1ci\xF3ba, azok k\xFCl\xF6n param\xE9terek maradjanak.

## Result Pattern / Railway-Oriented Programming {#result-pattern-railway-oriented-programming}

A **Result minta** (m\xE1s n\xE9ven Railway-Oriented Programming) a kiv\xE9telek (exception) helyett explicit, a visszat\xE9r\xE9si t\xEDpusban kifejezett hibakezel\xE9st val\xF3s\xEDt meg \u2013 a h\xEDv\xF3 a ford\xEDt\xF3 k\xE9nyszer\xEDt\xE9s\xE9vel (nem elfelejthet\u0151 \`try/catch\`-csel) szembes\xFCl azzal, hogy a m\u0171velet sikertelen is lehet. Ez k\xFCl\xF6n\xF6sen a **v\xE1rhat\xF3** (\xFCzleti) hib\xE1kn\xE1l hasznos (pl. valid\xE1ci\xF3s hiba, "nincs el\xE9g k\xE9szlet"), szemben a **kiv\xE9teles**, val\xF3ban v\xE1ratlan hib\xE1kkal (pl. adatb\xE1zis-kapcsolat megszakad\xE1sa), amelyekre tov\xE1bbra is kiv\xE9tel \xE9s a glob\xE1lis kiv\xE9telkezel\u0151 (l\xE1sd "Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails" fejezet) a megfelel\u0151 eszk\xF6z.

\`\`\`csharp
public class Result<T>
{
    public bool IsSuccess { get; }
    public T? Value { get; }
    public string? Error { get; }

    private Result(bool isSuccess, T? value, string? error) => (IsSuccess, Value, Error) = (isSuccess, value, error);

    public static Result<T> Success(T value) => new(true, value, null);
    public static Result<T> Failure(string error) => new(false, default, error);
}

public async Task<Result<Order>> PlaceOrderAsync(CreateOrderRequest request, CancellationToken cancellationToken)
{
    if (request.Items.Count == 0)
        return Result<Order>.Failure("A rendel\xE9snek legal\xE1bb egy t\xE9telt tartalmaznia kell.");

    var stockAvailable = await _inventoryService.CheckStockAsync(request.Items, cancellationToken);
    if (!stockAvailable)
        return Result<Order>.Failure("Nincs elegend\u0151 k\xE9szlet a k\xE9rt t\xE9telekhez.");

    var order = Order.Create(request);
    return Result<Order>.Success(order);
}

// Minimal API v\xE9gpontban a Result egyszer\u0171en HTTP v\xE1lassz\xE1 alak\xEDthat\xF3:
app.MapPost("/orders", async (CreateOrderRequest request, OrderService service, CancellationToken ct) =>
{
    var result = await service.PlaceOrderAsync(request, ct);
    return result.IsSuccess ? Results.Ok(result.Value) : Results.BadRequest(result.Error);
});
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: gyakran el\u0151fordul\xF3, "elv\xE1rt" \xFCzleti hib\xE1kn\xE1l, ahol a kiv\xE9teldob\xE1s/elkap\xE1s overhead-je \xE9s a stack unwinding felesleges; olyan pipeline-okn\xE1l (pl. valid\xE1ci\xF3 \u2192 \xFCzleti szab\xE1ly \u2192 ment\xE9s), ahol a hib\xE1t a l\xE1nc korai szakasz\xE1ban kell "r\xF6vidre z\xE1rni".

Legjobb gyakorlatok: gyakran haszn\xE1lt k\xF6nyvt\xE1r erre a \`FluentResults\` vagy az \`ErrorOr\` NuGet csomag, amelyek generikus \`Result<T>\`/\`ErrorOr<T>\` t\xEDpust \xE9s kombin\xE1lhat\xF3 (\`Bind\`, \`Map\`) m\u0171veleteket adnak; legyen egy\xE9rtelm\u0171 konvenci\xF3 a csapatban, mikor Result \xE9s mikor exception a helyes eszk\xF6z.

Mit ker\xFClj el: ne keverd \xF6ssze a "v\xE1rhat\xF3" \xFCzleti hib\xE1kat a val\xF3ban kiv\xE9teles, programoz\xE1si hib\xE1t jelz\u0151 esetekkel (pl. \`NullReferenceException\`) \u2013 az ut\xF3bbiakra a Result minta nem helyettes\xEDti a megfelel\u0151 hibakezel\xE9st; ne alkalmazd a mint\xE1t k\xF6vetkezetlen\xFCl (egy r\xE9tegben Result, egy m\xE1sikban exception ugyanarra a hibat\xEDpusra), mert az \xF6sszezavarja a h\xEDv\xF3kat.

## Strangler Fig Pattern https://learn.microsoft.com/azure/architecture/patterns/strangler-fig {#strangler-fig-pattern}

A **Strangler Fig** minta egy monolitikus vagy legacy rendszer fokozatos, kock\xE1zatmentes lecser\xE9l\xE9s\xE9re szolg\xE1l\xF3 migr\xE1ci\xF3s strat\xE9gia: az \xFAj funkci\xF3kat (vagy a r\xE9giek \xFAjra\xEDrt verzi\xF3it) egy k\xF6ztes r\xE9teg (pl. reverse proxy, API Gateway) m\xF6g\xE9 helyezve, fokozatosan "\xE1tir\xE1ny\xEDtjuk" a forgalmat a r\xE9gi rendszerr\u0151l az \xFAjra, am\xEDg a r\xE9gi teljesen feleslegess\xE9 nem v\xE1lik (a n\xE9vad\xF3 "f\xFCge" anal\xF3gia szerint az \xFAj rendszer lassan "k\xF6rben\xF6vi \xE9s kiszor\xEDtja" a r\xE9git).

\`\`\`
Kliens \u2500\u2500\u25BA Reverse Proxy / API Gateway
               \u2502
               \u251C\u2500\u2500\u25BA /orders/*    \u2500\u2500\u25BA \xDAj microservice (m\xE1r migr\xE1lt)
               \u2514\u2500\u2500\u25BA /*           \u2500\u2500\u25BA Legacy monolit (m\xE9g nem migr\xE1lt)
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: nagy, r\xE9g\xF3ta fut\xF3 monolit rendszerek fokozatos, "big bang rewrite" n\xE9lk\xFCli moderniz\xE1l\xE1sakor; ha a teljes rendszer egyszerre t\xF6rt\xE9n\u0151 le\xE1ll\xEDt\xE1sa/cser\xE9je \xFCzletileg elfogadhatatlan kock\xE1zatot jelentene; ha a csapat kapacit\xE1sa csak r\xE9szleges, iterat\xEDv migr\xE1ci\xF3t tesz lehet\u0151v\xE9.

Legjobb gyakorlatok: azonos\xEDts j\xF3l elhat\xE1rolhat\xF3, \xF6n\xE1ll\xF3an migr\xE1lhat\xF3 funkcion\xE1lis szeleteket (bounded context-eket, l\xE1sd "Bounded Context" fejezet); a routing r\xE9teget (proxy/gateway) tedd konfigur\xE1lhat\xF3v\xE1, hogy a forgalom ar\xE1nya/c\xE9lja gyorsan \xE1ll\xEDthat\xF3 legyen; minden migr\xE1lt szeletet alaposan tesztelj \xE9s monitorozz \xE9les forgalom mellett is (pl. shadow traffic vagy canary release form\xE1j\xE1ban), miel\u0151tt a r\xE9gi k\xF3dot t\xF6rl\xF6d.

Mit ker\xFClj el: ne hagyd a legacy \xE9s az \xFAj rendszert \xE9vekig p\xE1rhuzamosan \xE9lni terv \xE9s v\xE9ghat\xE1rid\u0151 n\xE9lk\xFCl \u2013 a strangler fig egy \xE1tmeneti \xE1llapot, nem v\xE9g\xE1llapot; ne migr\xE1lj olyan szeletet, amelynek hat\xE1rai (adatmodell, tranzakci\xF3k) nem tiszt\xE1zottak \u2013 ez inkonzisztens \xE1llapotokhoz vezethet a k\xE9t rendszer k\xF6z\xF6tt.

## Backend for Frontend (BFF) \xE9s API Gateway https://learn.microsoft.com/azure/architecture/patterns/gateway-routing {#backend-for-frontend-bff-es-api-gateway}

*Konkr\xE9t .NET megval\xF3s\xEDt\xE1s YARP-pal: l\xE1sd az "API Gateway YARP-pal" fejezetet; t\xF6bb szolg\xE1ltat\xE1s adat\xE1nak \xF6sszef\xE9s\xFCl\xE9s\xE9hez az "Aggregator Pattern" fejezetet.*

Az **API Gateway** egyetlen bel\xE9p\xE9si pontot biztos\xEDt a kliensek sz\xE1m\xE1ra egy microservices rendszer el\xE9, amely elrejti a bels\u0151 szolg\xE1ltat\xE1sok topol\xF3gi\xE1j\xE1t, \xE9s olyan cross-cutting funkci\xF3kat l\xE1t el, mint az authentik\xE1ci\xF3, rate limiting, routing, aggreg\xE1ci\xF3. A **Backend for Frontend (BFF)** ennek egy specializ\xE1lt v\xE1ltozata: minden kliens-t\xEDpushoz (webes SPA, mobil app, harmadik f\xE9l integr\xE1ci\xF3) **k\xFCl\xF6n, az adott kliens ig\xE9nyeire szabott** gateway/backend r\xE9teg tartozik, ahelyett hogy egyetlen, mindenkinek megfelel\u0151, kompromisszumos API-t tartan\xE1nk fenn.

\`\`\`
Web SPA  \u2500\u2500\u25BA Web BFF   \u2500\u2500\u2510
Mobil app\u2500\u2500\u25BA Mobile BFF \u2500\u2500\u253C\u2500\u2500\u25BA bels\u0151 microservice-ek (Orders, Payments, Inventory, ...)
Partner  \u2500\u2500\u25BA Partner BFF\u2500\u2500\u2518
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha k\xFCl\xF6nb\xF6z\u0151 kliens-t\xEDpusoknak jelent\u0151sen elt\xE9r\u0151 adatform\xE1ra/aggreg\xE1ci\xF3ra van sz\xFCks\xE9g\xFCk (pl. a mobil kliens kevesebb mez\u0151t \xE9s kisebb payloadot ig\xE9nyel, mint a webes admin fel\xFClet); ha egy k\xF6z\xF6s, "univerz\xE1lis" API m\xE1r t\xFAl sok kompromisszumot \xE9s felesleges komplexit\xE1st hordoz; microservices architekt\xFAr\xE1ban, ahol a kliens ne ismerje a bels\u0151 szolg\xE1ltat\xE1sok sz\xE1m\xE1t \xE9s c\xEDm\xE9t.

Legjobb gyakorlatok: a BFF r\xE9teg maradjon v\xE9kony \u2013 aggreg\xE1ci\xF3, adatform\xE1z\xE1s, kliens-specifikus optimaliz\xE1l\xE1s, de \xFCzleti logika n\xE9lk\xFCl (az a m\xF6g\xF6ttes service-ekben \xE9l); az API Gateway/BFF szintj\xE9n val\xF3s\xEDtsd meg a keresztir\xE1ny\xFA agg\xE1lyokat (authentik\xE1ci\xF3, rate limiting, logol\xE1s, circuit breaker a bels\u0151 h\xEDv\xE1sokhoz); k\xFCl\xF6n csapat/felel\u0151s tartozzon minden BFF-hez, igazodva a fogyaszt\xF3 csapathoz.

Mit ker\xFClj el: ne csemp\xE9ssz \xFCzleti logik\xE1t a BFF-be, mert az duplik\xE1ci\xF3hoz \xE9s inkonzisztenci\xE1hoz vezet a m\xF6g\xF6ttes szolg\xE1ltat\xE1sokkal; ne hozz l\xE9tre BFF-et minden egyes klienshez automatikusan \u2013 csak akkor \xE9ri meg, ha az ig\xE9nyek val\xF3ban jelent\u0151sen elt\xE9rnek; egyetlen, minden klienst kiszolg\xE1l\xF3 API Gateway is elegend\u0151 lehet, ha a kliensek ig\xE9nyei hasonl\xF3ak.

## Anti-Corruption Layer https://learn.microsoft.com/azure/architecture/patterns/anti-corruption-layer {#anti-corruption-layer}

Az **Anti-Corruption Layer (ACL)**, Domain-Driven Design fogalom, egy v\xE9d\u0151r\xE9teg, amely elszigeteli a saj\xE1t (tiszta) domain modell\xFCnket egy k\xFCls\u0151 rendszer (legacy alkalmaz\xE1s, harmadik f\xE9l API, m\xE1s bounded context) elt\xE9r\u0151, "szennyez\u0151" modellj\xE9t\u0151l \xE9s fogalmi world-view-j\xE1t\xF3l. A r\xE9teg feladata a ford\xEDt\xE1s (mapping/translation) a k\xE9t modell k\xF6z\xF6tt, hogy a k\xFCls\u0151 rendszer strukt\xFAr\xE1ja, hib\xE1i vagy hi\xE1nyoss\xE1gai ne "sziv\xE1rogjanak be" a saj\xE1t domain modell\xFCnkbe.

\`\`\`csharp
// K\xFCls\u0151, legacy rendszer modellje (amit nem kontroll\xE1lunk, esetleg cs\xFAnya/inkonzisztens)
public class LegacyCustomerRecord
{
    public string CUST_NM { get; set; } = string.Empty;
    public string ADDR_LN1 { get; set; } = string.Empty;
    public int STAT_CD { get; set; } // 0/1/2 k\xF3d, aminek jelent\xE9s\xE9t csak a legacy rendszer dokument\xE1ci\xF3ja ismeri
}

// Anti-Corruption Layer: ford\xEDt\xE1s a saj\xE1t, tiszta domain modell\xFCnkre
public class LegacyCustomerAdapter
{
    public Customer ToDomainCustomer(LegacyCustomerRecord legacy) => new()
    {
        Name = legacy.CUST_NM.Trim(),
        Address = new Address(legacy.ADDR_LN1),
        Status = legacy.STAT_CD switch
        {
            0 => CustomerStatus.Active,
            1 => CustomerStatus.Suspended,
            2 => CustomerStatus.Closed,
            _ => throw new InvalidOperationException($"Ismeretlen legacy st\xE1tuszk\xF3d: {legacy.STAT_CD}")
        }
    };
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha egy legacy rendszerrel vagy harmadik f\xE9l API-val kell integr\xE1l\xF3dni, amelynek modellje elt\xE9r a saj\xE1t domain modell\xFCnkt\u0151l; microservices/DDD k\xF6rnyezetben, ha k\xE9t bounded context k\xF6z\xF6tt a fogalmak (pl. "Customer" jelent\xE9se) elt\xE9rnek, \xE9s nem szabad, hogy az egyik modell k\xF6zvetlen\xFCl "\xE1tsziv\xE1rogjon" a m\xE1sikba; ha a k\xFCls\u0151 rendszer instabil vagy gyakran v\xE1ltozik, \xE9s a saj\xE1t domain modellt v\xE9deni kell ett\u0151l a v\xE1ltoz\xE9konys\xE1gt\xF3l.

Legjobb gyakorlatok: az ACL-t helyezd az Infrastructure r\xE9tegbe (l\xE1sd Clean Architecture fejezetek), a Domain r\xE9teg ne tudjon a k\xFCls\u0151 rendszer l\xE9tez\xE9s\xE9r\u0151l; a ford\xEDt\xE1si logik\xE1t (mapping) egy helyen, j\xF3l tesztelve tartsd; ha a k\xFCls\u0151 rendszer hib\xE1s/hi\xE1nyos adatot ad, az ACL-ben d\xF6ntsd el, hogyan kezeled (alap\xE9rtelmezett \xE9rt\xE9k, kiv\xE9tel, napl\xF3z\xE1s).

Mit ker\xFClj el: ne engedd, hogy a k\xFCls\u0151 rendszer DTO-i vagy enumjai k\xF6zvetlen\xFCl megjelenjenek a domain modellben vagy az alkalmaz\xE1s r\xE9tegben; ne tedd az ACL-t "v\xE9konyabb\xE1" id\u0151vel azzal, hogy egyre t\xF6bb helyen k\xF6zvetlen\xFCl a legacy modellt haszn\xE1lod \u2013 ez visszavezet az eredeti, elker\xFClni k\xEDv\xE1nt csatol\xE1shoz.

## Idempotency Pattern API-kban https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer {#idempotency-pattern-api-kban}

Az **idempotencia** azt jelenti, hogy egy m\u0171velet t\xF6bbsz\xF6ri, azonos bemenettel t\xF6rt\xE9n\u0151 v\xE9grehajt\xE1sa ugyanazt az eredm\xE9nyt adja, mint az egyszeri v\xE9grehajt\xE1s \u2013 ez elosztott rendszerekben (h\xE1l\xF3zati \xFAjrapr\xF3b\xE1lkoz\xE1s, at-least-once \xFCzenetk\xE9zbes\xEDt\xE9s, l\xE1sd "Outbox Pattern" \xE9s "Saga Orchestration" fejezetek) kritikus, hogy elker\xFClj\xFCk a duplik\xE1lt mell\xE9khat\xE1sokat (pl. k\xE9tszeres terhel\xE9s egy bankk\xE1rty\xE1n).

HTTP szemantika szerint a \`GET\`, \`PUT\`, \`DELETE\` met\xF3dusok defin\xEDci\xF3 szerint idempotensek kellene legyenek, a \`POST\` viszont nem \u2013 ez\xE9rt a \`POST\` v\xE9gpontokn\xE1l (pl. fizet\xE9s ind\xEDt\xE1sa, rendel\xE9s l\xE9trehoz\xE1sa) explicit idempotencia-kezel\xE9s sz\xFCks\xE9ges, tipikusan egy kliens \xE1ltal gener\xE1lt **Idempotency Key** HTTP fejl\xE9c seg\xEDts\xE9g\xE9vel:

\`\`\`csharp
app.MapPost("/payments", async (
    [FromHeader(Name = "Idempotency-Key")] string idempotencyKey,
    CreatePaymentRequest request,
    IIdempotencyStore idempotencyStore,
    IPaymentService paymentService,
    CancellationToken cancellationToken) =>
{
    var existingResult = await idempotencyStore.TryGetAsync(idempotencyKey, cancellationToken);
    if (existingResult is not null)
        return Results.Ok(existingResult); // kor\xE1bbi v\xE1lasz visszaad\xE1sa, a m\u0171velet nem fut le \xFAjra

    var result = await paymentService.ProcessPaymentAsync(request, cancellationToken);
    await idempotencyStore.SaveAsync(idempotencyKey, result, cancellationToken);

    return Results.Ok(result);
});
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: p\xE9nz\xFCgyi/tranzakci\xF3s jelleg\u0171 \`POST\`/\`PATCH\` v\xE9gpontokn\xE1l, ahol egy v\xE9letlen duplik\xE1lt k\xE9r\xE9s (kliens \xFAjrapr\xF3b\xE1lkoz\xE1sa timeout ut\xE1n, mobil h\xE1l\xF3zati instabilit\xE1s) s\xFAlyos \xFCzleti k\xF6vetkezm\xE9nnyel j\xE1rna; message consumer-ekn\xE9l, amelyek at-least-once szemantik\xE1j\xFA brokerb\u0151l (pl. az Outbox mint\xE1b\xF3l) olvasnak.

Legjobb gyakorlatok: az Idempotency Key-t a kliens gener\xE1lja (jellemz\u0151en GUID) \xE9s minden \xFAjrapr\xF3b\xE1lkoz\xE1sn\xE1l ugyanazt k\xFCldi; a kulcs\u2013eredm\xE9ny p\xE1rokat egy gyors, megosztott t\xE1rban (Redis, adatb\xE1zis t\xE1bla) t\xE1rold, TTL-lel (nem kell \xF6r\xF6kk\xE9 meg\u0151rizni); a t\xE1rolt v\xE1lasz legyen a **teljes** HTTP v\xE1lasz (st\xE1tuszk\xF3d + body), hogy az ism\xE9telt k\xE9r\xE9s val\xF3ban ugyanazt kapja vissza.

Mit ker\xFClj el: ne csak a "sikeres" eredm\xE9nyt cache-eld \u2013 ha egy hib\xE1s v\xE1lasz idempotencia-kulcs n\xE9lk\xFCl duplik\xE1l\xF3dhat, az \xF6nmag\xE1ban nem probl\xE9ma, de d\xF6nteni kell, hogy a hib\xE1s v\xE1laszokat is idempotensen kezeled-e; ne t\xE9vesszd \xF6ssze az idempotenci\xE1t a HTTP met\xF3dus szemantik\xE1j\xE1val \u2013 \xF6nmag\xE1ban att\xF3l, hogy egy v\xE9gpont \`PUT\`, m\xE9g lehet nem-idempotens a m\xF6g\xF6ttes implement\xE1ci\xF3, ha pl. side effectet (email k\xFCld\xE9s) is kiv\xE1lt minden h\xEDv\xE1sn\xE1l.

## SignalR (ASP.NET Core 2.1+) https://learn.microsoft.com/aspnet/core/signalr/introduction {#signalr}

*Verzi\xF3: ASP.NET Core 2.1-t\u0151l (\`withAutomaticReconnect\`: ASP.NET Core 3.0).*

A **SignalR** az ASP.NET Core be\xE9p\xEDtett val\xF3s idej\u0171 kommunik\xE1ci\xF3s k\xF6nyvt\xE1ra, amely lehet\u0151v\xE9 teszi, hogy a szerver **kezdem\xE9nyezze** az adatk\xFCld\xE9st a klienseknek (b\xF6ng\xE9sz\u0151, mobil app, asztali app), nem csak a hagyom\xE1nyos request-response modell szerint (kliens k\xE9r, szerver v\xE1laszol). A h\xE1tt\xE9rben automatikusan a legjobban el\xE9rhet\u0151 sz\xE1ll\xEDt\xE1si m\xF3dot (transport) v\xE1lasztja: **WebSockets** (ha t\xE1mogatott) \u2192 **Server-Sent Events** \u2192 **Long Polling**, \xEDgy a fejleszt\u0151nek nem kell ezekkel manu\xE1lisan foglalkoznia.

### Mire haszn\xE1ljuk \u2013 tipikus esetek

1. **\xC9l\u0151 \xE9rtes\xEDt\xE9sek, dashboard-ok** \u2013 pl. egy admin fel\xFClet, ahol \xFAj rendel\xE9s \xE9rkez\xE9sekor azonnal friss\xFCl a lista, an\xE9lk\xFCl hogy a felhaszn\xE1l\xF3 friss\xEDten\xE9 az oldalt.
2. **Chat alkalmaz\xE1sok** \u2013 klasszikus, tank\xF6nyvi SignalR use case: t\xF6bb felhaszn\xE1l\xF3 k\xF6z\xF6tti \xFCzenetv\xE1lt\xE1s val\xF3s id\u0151ben.
3. **Kollaborat\xEDv szerkeszt\xE9s** \u2013 pl. egy Trello-szer\u0171 t\xE1bla, ahol t\xF6bb felhaszn\xE1l\xF3 egyszerre l\xE1tja a m\xE1sik m\xF3dos\xEDt\xE1sait (k\xE1rtya mozgat\xE1s, st\xE1tuszv\xE1lt\xE1s).
4. **\xC9l\u0151 folyamat-visszajelz\xE9s (progress reporting)** \u2013 hosszan fut\xF3 h\xE1tt\xE9rfolyamat (f\xE1jl feldolgoz\xE1s, riport gener\xE1l\xE1s) \xE1llapot\xE1nak val\xF3s idej\u0171 visszajelz\xE9se a felhaszn\xE1l\xF3 fel\xE9, ahelyett hogy pollozn\xE1 az API-t.
5. **\xC9l\u0151 adatfolyamok** \u2013 t\u0151zsdei \xE1rfolyamok, IoT szenzoradatok, sportm\xE9rk\u0151z\xE9s \xE9l\u0151 eredm\xE9nyei.
6. **Szerver-oldali push m\xE1s microservice-ek fel\u0151l** \u2013 pl. egy h\xE1tt\xE9rfolyamat (BackgroundService) v\xE9gzett egy m\u0171veletet, \xE9s err\u0151l val\xF3s id\u0151ben \xE9rtes\xEDteni kell a b\xF6ng\xE9sz\u0151ben nyitva l\xE9v\u0151 UI-t.

### Alapfogalmak: Hub, Connection, Group

A SignalR k\xF6z\xE9ppontj\xE1ban a **Hub** \xE1ll \u2013 ez egy magas szint\u0171 absztrakci\xF3, amely met\xF3dusokat expon\xE1l a kliens fel\xE9 (amit a kliens h\xEDvhat), \xE9s a szerver oldalr\xF3l is h\xEDvhat met\xF3dusokat a csatlakozott kliense(ke)n.

\`\`\`csharp
public class NotificationHub : Hub
{
    // Kliens h\xEDvhatja ezt a met\xF3dust
    public async Task JoinOrderGroup(int orderId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, $"order-{orderId}");
    }

    public override async Task OnConnectedAsync()
    {
        // pl. autentik\xE1lt felhaszn\xE1l\xF3 automatikus csoportba sorol\xE1sa
        var userId = Context.UserIdentifier;
        if (userId is not null)
            await Groups.AddToGroupAsync(Context.ConnectionId, $"user-{userId}");

        await base.OnConnectedAsync();
    }
}
\`\`\`

Regisztr\xE1ci\xF3 \xE9s v\xE9gpont kijel\xF6l\xE9s:
\`\`\`csharp
builder.Services.AddSignalR();
// ...
app.MapHub<NotificationHub>("/hubs/notifications");
\`\`\`

Szerver oldalr\xF3l, egy m\xE1sik szolg\xE1ltat\xE1sb\xF3l (pl. egy Command Handlerb\u0151l vagy BackgroundService-b\u0151l) a \`IHubContext<T>\` seg\xEDts\xE9g\xE9vel k\xFCldhet\xFCnk \xFCzenetet a csatlakozott klienseknek, k\xF6zvetlen\xFCl a Hub p\xE9ld\xE1nyos\xEDt\xE1sa n\xE9lk\xFCl:
\`\`\`csharp
public class OrderStatusNotifier(IHubContext<NotificationHub> hubContext)
{
    public async Task NotifyOrderStatusChangedAsync(int orderId, string newStatus, CancellationToken cancellationToken)
    {
        // csak az adott rendel\xE9st figyel\u0151 kliensek kapj\xE1k meg
        await hubContext.Clients.Group($"order-{orderId}")
            .SendAsync("OrderStatusChanged", new { orderId, newStatus }, cancellationToken);
    }
}
\`\`\`

Kliens oldal (JavaScript, \`@microsoft/signalr\` csomaggal):
\`\`\`javascript
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/notifications")
    .withAutomaticReconnect()
    .build();

connection.on("OrderStatusChanged", (data) => {
    console.log(\`Rendel\xE9s \${data.orderId} \xFAj st\xE1tusza: \${data.newStatus}\`);
});

await connection.start();
await connection.invoke("JoinOrderGroup", 42);
\`\`\`

### Fontos gyakorlati szempontok

- **Sk\xE1l\xE1z\xE1s t\xF6bb szerverp\xE9ld\xE1ny k\xF6z\xF6tt** \u2013 ha az alkalmaz\xE1s t\xF6bb p\xE9ld\xE1nyban fut (load balancer m\xF6g\xF6tt), egy SignalR \xFCzenetnek el kell jutnia minden p\xE9ld\xE1nyhoz kapcsol\xF3d\xF3 kliensekhez is. Erre szolg\xE1l a **backplane** (pl. \`AddStackExchangeRedis()\` \u2013 Redis backplane, vagy Azure SignalR Service), amely a szerverp\xE9ld\xE1nyok k\xF6z\xF6tti \xFCzenettov\xE1bb\xEDt\xE1st oldja meg.
\`\`\`csharp
builder.Services.AddSignalR().AddStackExchangeRedis(redisConnectionString);
\`\`\`
- **Autentik\xE1ci\xF3** \u2013 a SignalR Hub v\xE9gpontok is v\xE9dhet\u0151k \`[Authorize]\` attrib\xFAtummal. B\xF6ng\xE9sz\u0151s WebSocket/SSE kliens nem tud \`Authorization\` fejl\xE9cet k\xFCldeni a handshake-n\xE9l, ez\xE9rt a JS kliens a tokent gyakran \`?access_token=\` query param\xE9terben adja \xE1t. A JwtBearer **nem** olvassa ezt automatikusan: \`OnMessageReceived\`-ben kell \xE1tvenni, \xE9s \xE9rdemes a hub \xFAtvonalra korl\xE1tozni (a query string logol\xF3dhat). Nem-b\xF6ng\xE9sz\u0151s .NET kliensek \xE1ltal\xE1ban a fejl\xE9cet haszn\xE1lj\xE1k.
\`\`\`csharp
options.Events = new JwtBearerEvents
{
    OnMessageReceived = context =>
    {
        var accessToken = context.Request.Query["access_token"];
        var path = context.HttpContext.Request.Path;
        if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
            context.Token = accessToken;
        return Task.CompletedTask;
    }
};
\`\`\`
- **Csoportkezel\xE9s** \u2013 ne k\xFCldj minden \xFCzenetet minden kliensnek (\`Clients.All\`), ha csak egy sz\u0171kebb k\xF6r \xE9rintett; a \`Groups\` API-val (\`AddToGroupAsync\`/\`RemoveFromGroupAsync\`) c\xE9lzottan \xE9rdemes k\xFCldeni, ez jelent\u0151sen cs\xF6kkenti a h\xE1l\xF3zati \xE9s szerver terhel\xE9st.
- **Er\u0151forr\xE1s-kezel\xE9s** \u2013 minden nyitott SignalR kapcsolat egy sz\xE1lat/er\u0151forr\xE1st k\xF6t le a szerveren; nagy sz\xE1m\xFA egyidej\u0171 kapcsolatn\xE1l (10 000+) \xE9rdemes megfontolni a felh\u0151-alap\xFA Azure SignalR Service-t, amely a kapcsolatkezel\xE9st kiszervezi a saj\xE1t szerverfolyamatb\xF3l.
- **Mikor NE haszn\xE1ljuk** \u2013 ha csak egyszer\u0171, ritka (percenk\xE9nti/\xF3r\xE1nk\xE9nti) friss\xEDt\xE9sr\u0151l van sz\xF3, egy egyszer\u0171 polloz\xF3 \`GET\` v\xE9gpont (esetleg \`HybridCache\`-el kombin\xE1lva, l\xE1sd "ASP.NET core Caching strategies" fejezet) gyakran egyszer\u0171bb \xE9s olcs\xF3bb megold\xE1s, mint egy \xE1lland\xF3an nyitva tartott kapcsolat fenntart\xE1sa.

## Quartz.NET \u2013 H\xE1tt\xE9rfolyamat \xFCtemez\xE9s {#quartz-net-hatterfolyamat-utemezes}

*Verzi\xF3: Quartz.NET 3.x: .NET Standard 2.0+ / .NET 6+ projektekben.*

A **Quartz.NET** egy ny\xEDlt forr\xE1sk\xF3d\xFA, gazdag funkcionalit\xE1s\xFA job-\xFCtemez\u0151 k\xF6nyvt\xE1r .NET-hez, amely a puszta \`BackgroundService\` + \`Task.Delay\` ciklusn\xE1l (l\xE1sd "H\xE1tt\xE9rfolyamatok \u2013 IHostedService \xE9s BackgroundService" fejezet) j\xF3val kifinomultabb \xFCtemez\xE9st tesz lehet\u0151v\xE9: cron-szer\u0171 id\u0151z\xEDt\xE9s, perzisztens \xE1llapot (t\xFAl\xE9lve az alkalmaz\xE1s \xFAjraind\xEDt\xE1s\xE1t), retry, misfire-kezel\xE9s (mi t\xF6rt\xE9njen, ha a job \xE9ppen nem futhatott le a tervezett id\u0151pontban), \xE9s cluster-t\xE1mogat\xE1s t\xF6bb szerverp\xE9ld\xE1ny eset\xE9n.

### Mikor \xE9rdemes Quartz.NET-et haszn\xE1lni a sima \`BackgroundService\` helyett

- Ha **konkr\xE9t, cron kifejez\xE9ssel le\xEDrhat\xF3** id\u0151pontokban kell futtatni egy feladatot (pl. "minden h\xE9tk\xF6znap 2:00-kor", "minden h\xF3nap els\u0151 napj\xE1n"), nem csak fix id\u0151k\xF6z\xF6nk\xE9nt.
- Ha a job-oknak **t\xFAl kell \xE9lni\xFCk** egy alkalmaz\xE1s-\xFAjraind\xEDt\xE1st, \xE9s tudniuk kell, hogy egy adott futtat\xE1s megt\xF6rt\xE9nt-e m\xE1r (persistent job store).
- Ha **t\xF6bb szerverp\xE9ld\xE1ny** (sk\xE1l\xE1zott, klaszterezett k\xF6rnyezet) fut egyszerre, \xE9s biztos\xEDtani kell, hogy egy adott job-ot **csak egyszer**, csak az egyik p\xE9ld\xE1ny futtassa (elosztott lock).
- Ha a job-oknak **prior\xEDt\xE1st, f\xFCgg\u0151s\xE9geket, vagy misfire szab\xE1lyokat** kell kezelni\xFCk (pl. "ha a szerver 10 percig le volt \xE1llva, a kimaradt futtat\xE1st p\xF3tolja vagy hagyja ki").
- Ha dinamikusan, fut\xE1sid\u0151ben kell job-okat l\xE9trehozni/t\xF6r\xF6lni/m\xF3dos\xEDtani (nem csak statikusan, indul\xE1skor regisztr\xE1lt feladatokr\xF3l van sz\xF3).

Ha ezek egyike sem \xE1ll fenn, \xE9s el\xE9g egy egyszer\u0171, fix id\u0151k\xF6z\xF6nk\xE9nt ism\xE9tl\u0151d\u0151 m\u0171velet, a sima \`BackgroundService\` + \`PeriodicTimer\` kombin\xE1ci\xF3 is el\xE9gs\xE9ges \xE9s egyszer\u0171bb.

### Alapfogalmak: Job, Trigger, Scheduler

- **Job** \u2013 maga a v\xE9grehajtand\xF3 munka (egy oszt\xE1ly, amely az \`IJob\` interf\xE9szt implement\xE1lja).
- **Trigger** \u2013 meghat\xE1rozza, *mikor* fusson a job (pl. cron kifejez\xE9s, egyszeri id\u0151pont, ism\xE9tl\u0151d\u0151 intervallum).
- **Scheduler** \u2013 a Quartz fut\xE1sidej\u0171 motorja, amely a Job-okat a hozz\xE1juk rendelt Trigger-ek szerint futtatja.

### Telep\xEDt\xE9s \xE9s regisztr\xE1ci\xF3 (\`Quartz.Extensions.Hosting\` csomaggal)

\`\`\`bash
dotnet add package Quartz.Extensions.Hosting
\`\`\`

\`\`\`csharp
public class DailyReportJob(ILogger<DailyReportJob> logger, IServiceScopeFactory scopeFactory) : IJob
{
    public async Task Execute(IJobExecutionContext context)
    {
        logger.LogInformation("Napi riport gener\xE1l\xE1s elindult: {Time}", DateTimeOffset.Now);

        using var scope = scopeFactory.CreateScope();
        var reportService = scope.ServiceProvider.GetRequiredService<IReportService>();

        // context.CancellationToken automatikusan el\xE9rhet\u0151, ha a Scheduler le\xE1ll
        await reportService.GenerateDailyReportAsync(context.CancellationToken);
    }
}
\`\`\`

Regisztr\xE1ci\xF3 a \`Program.cs\`-ben:
\`\`\`csharp
builder.Services.AddQuartz(q =>
{
    var jobKey = new JobKey(nameof(DailyReportJob));

    q.AddJob<DailyReportJob>(opts => opts.WithIdentity(jobKey));

    q.AddTrigger(opts => opts
        .ForJob(jobKey)
        .WithIdentity($"{nameof(DailyReportJob)}-trigger")
        .WithCronSchedule("0 0 2 * * ?")); // minden nap hajnali 2:00-kor (Quartz cron form\xE1tum, 6-7 mez\u0151s)
});

// A Scheduler-t hosted service-k\xE9nt futtatja, \xE9s graceful shutdown-n\xE1l megv\xE1rja a fut\xF3 job-okat
builder.Services.AddQuartzHostedService(options =>
{
    options.WaitForJobsToComplete = true;
});
\`\`\`

A Quartz cron form\xE1tuma **h\xE9t mez\u0151s** (a Unix cronnal ellent\xE9tben van egy extra "m\xE1sodperc" mez\u0151 el\xF6l, \xE9s a "nap-h\xF3nap"/"nap-h\xE9t" mez\u0151k k\xF6z\xFCl csak az egyik lehet konkr\xE9t \xE9rt\xE9k, a m\xE1siknak \`?\`-nek kell lennie):
\`\`\`
m\xE1sodperc perc \xF3ra nap(h\xF3nap) h\xF3nap nap(h\xE9t) [\xE9v]
   0       0    2      *       *       ?
\`\`\`

### Egyszer\u0171 id\u0151z\xEDtett (ism\xE9tl\u0151d\u0151 intervallum\xFA) trigger cron helyett

\`\`\`csharp
q.AddTrigger(opts => opts
    .ForJob(jobKey)
    .WithSimpleSchedule(s => s
        .WithIntervalInMinutes(15)
        .RepeatForever()));
\`\`\`

### Dependency Injection job-okon bel\xFCl

A Quartz.Extensions.Hosting csomag automatikusan integr\xE1l\xF3dik az ASP.NET Core DI kont\xE9ner\xE9vel, \xEDgy a \`IJob\` implement\xE1ci\xF3k konstruktor\xE1n kereszt\xFCl kaphatnak f\xFCgg\u0151s\xE9geket (a job maga tipikusan Transient \xE9lettartammal regisztr\xE1l\xF3dik, ez\xE9rt a Scoped f\xFCgg\u0151s\xE9geket \u2013 pl. \`DbContext\` \u2013 a job \`Execute\` met\xF3dus\xE1n bel\xFCl, \`IServiceScopeFactory\`-val kell feloldani, ugyan\xFAgy, mint a sima \`BackgroundService\`-n\xE9l, l\xE1sd a kor\xE1bbi fejezetet).

### Perzisztens Job Store \xE9s klaszterez\xE9s

Alap\xE9rtelmezetten a Quartz a job-okat \xE9s trigger-eket mem\xF3ri\xE1ban t\xE1rolja (\`RAMJobStore\`) \u2013 ez elveszik \xFAjraind\xEDt\xE1skor. Produkci\xF3s, t\xF6bb szerverp\xE9ld\xE1nyos k\xF6rnyezetben \`AdoJobStore\`-t \xE9rdemes be\xE1ll\xEDtani (adatb\xE1zisban, pl. SQL Server-ben t\xE1rolt job-defin\xEDci\xF3k), ezzel a Quartz automatikusan gondoskodik arr\xF3l, hogy egy adott job-ot egyidej\u0171leg csak az egyik klaszter-tag futtassa (elosztott lock a job store-on kereszt\xFCl):
\`\`\`csharp
builder.Services.AddQuartz(q =>
{
    q.UsePersistentStore(s =>
    {
        s.UseProperties = true;
        s.UseSqlServer(connectionString);
        s.UseNewtonsoftJsonSerializer();
        s.UseClustering(); // t\xF6bb szerverp\xE9ld\xE1ny eset\xE9n
    });
});
\`\`\`

### Misfire kezel\xE9s

Ha a szerver nem futott (le\xE1llt, t\xFAlterhelt volt) a tervezett futtat\xE1si id\u0151pontban, a Quartz "misfire"-nek tekinti az elmaradt futtat\xE1st, \xE9s a trigger t\xEDpus\xE1t\xF3l f\xFCgg\u0151 strat\xE9gia szerint d\xF6nt: azonnal p\xF3tolja (\`WithMisfireHandlingInstructionFireNow\`), teljesen kihagyja (\`WithMisfireHandlingInstructionDoNothing\`), vagy az alap\xE9rtelmezett viselked\xE9st alkalmazza. Ezt explicit be kell \xE1ll\xEDtani olyan job-okn\xE1l, ahol fontos, hogy az elmaradt futtat\xE1s p\xF3tl\xF3djon-e vagy sem (pl. egy napi riport p\xF3tl\xE1sa \xE9rtelmes lehet, egy "percenk\xE9nti health check" p\xF3tl\xE1sa viszont felesleges).

### Mit ker\xFClj el

- Ne t\xE1rolj a Job oszt\xE1lyban mutable \xE1llapotot mez\u0151k\xE9nt, ha a job Singleton-k\xE9nt van regisztr\xE1lva \u2013 p\xE1rhuzamos futtat\xE1sokn\xE1l (pl. k\xE9t egym\xE1st \xE1tfed\u0151 trigger) race condition alakulhat ki; alap\xE9rtelmezetten a Quartz minden v\xE9grehajt\xE1shoz \xFAj Job p\xE9ld\xE1nyt hoz l\xE9tre, ezt ne \xEDrd fel\xFCl ok n\xE9lk\xFCl.
- Ne felejtsd el a \`context.CancellationToken\`-t \xE1tadni a job belsej\xE9ben h\xEDvott async met\xF3dusoknak, k\xFCl\xF6nben a Scheduler graceful le\xE1ll\xEDt\xE1sa (\`WaitForJobsToComplete\`) nem tudja id\u0151ben megszak\xEDtani a fut\xF3 munk\xE1t.
- Ne keverd a Quartz-ot \xE9s a sima \`BackgroundService\`-t ugyanarra a feladatra \u2013 v\xE1lassz egyet a feladat jellege alapj\xE1n (l\xE1sd fenti "mikor melyiket" szempontokat), \xE9s legyen konzisztens a csapaton bel\xFCl.
- Ha egyszer\u0171, alacsony komplexit\xE1s\xFA id\u0151z\xEDt\xE9sr\u0151l van sz\xF3, \xE9s a projektben m\xE1r \xFAgyis van Hangfire (webes dashboard-dal rendelkez\u0151 alternat\xEDva), fontold meg, hogy sz\xFCks\xE9g van-e mindk\xE9t k\xF6nyvt\xE1rra egyszerre \u2013 a p\xE1rhuzamos \xFCtemez\u0151 k\xF6nyvt\xE1rak haszn\xE1lata felesleges komplexit\xE1st \xE9s karbantart\xE1si terhet ad.

## Apache Kafka .NET-ben \u2013 alapfogalmak \xE9s els\u0151 producer/consumer {#apache-kafka-net-ben-alapfogalmak-es-elso-producer-consumer}

*Verzi\xF3: Confluent.Kafka 2.x: .NET Standard 2.0+ / .NET 8+ aj\xE1nlott; a p\xE9lda C# 12 gy\u0171jtem\xE9ny-kifejez\xE9st \xE9s UTF-8 liter\xE1lt (\`"..."u8\`, C# 11) haszn\xE1l.*

A **Kafka** egy elosztott, perzisztens **commit log**, nem klasszikus \xFCzenetsor. A legfontosabb k\xFCl\xF6nbs\xE9g a RabbitMQ-hoz k\xE9pest: az \xFCzenet nem t\u0171nik el, amikor egy fogyaszt\xF3 elolvassa \u2013 a broker egy megadott ideig (retention) meg\u0151rzi, \xE9s minden fogyaszt\xF3i csoport saj\xE1t poz\xEDci\xF3t (**offset**) tart nyilv\xE1n benne. Ez teszi lehet\u0151v\xE9 az \xFAjraj\xE1tsz\xE1st (replay), az event sourcing-ot \xE9s azt, hogy t\xF6bb, egym\xE1st\xF3l f\xFCggetlen szolg\xE1ltat\xE1s dolgozza fel ugyanazt az esem\xE9nyfolyamot.

Alapfogalmak:

- **Topic** \u2013 neves\xEDtett esem\xE9nyfolyam (pl. \`orders.placed.v1\`).
- **Partition** \u2013 a topic fizikai feloszt\xE1sa; a sorrend **csak part\xEDci\xF3n bel\xFCl** garant\xE1lt, a topic eg\xE9sz\xE9re nem.
- **Key** \u2013 az \xFCzenet kulcsa d\xF6nti el, melyik part\xEDci\xF3ba ker\xFCl (\`hash(key) % partitionCount\`). Azonos kulcs\xFA \xFCzenetek mindig azonos part\xEDci\xF3ba, teh\xE1t sorrendhelyesen \xE9rkeznek.
- **Offset** \u2013 az \xFCzenet sorsz\xE1ma a part\xEDci\xF3n bel\xFCl; a fogyaszt\xF3 ezt commitolja.
- **Consumer group** \u2013 egy csoporton bel\xFCl minden part\xEDci\xF3t pontosan egy fogyaszt\xF3 kap meg; \xEDgy a p\xE1rhuzamoss\xE1g fels\u0151 korl\xE1tja a part\xEDci\xF3k sz\xE1ma.

Telep\xEDt\xE9s \xE9s producer (Confluent.Kafka):

\`\`\`bash
dotnet add package Confluent.Kafka
\`\`\`

\`\`\`csharp
public sealed class OrderEventProducer : IAsyncDisposable
{
    private readonly IProducer<string, string> _producer;

    public OrderEventProducer(IConfiguration configuration)
    {
        var config = new ProducerConfig
        {
            BootstrapServers = configuration["Kafka:BootstrapServers"],
            Acks = Acks.All,                 // minden in-sync replik\xE1nak meg kell er\u0151s\xEDtenie
            EnableIdempotence = true,        // duplik\xE1tumok elker\xFCl\xE9se \xFAjrak\xFCld\xE9skor
            MessageSendMaxRetries = 5,
            CompressionType = CompressionType.Snappy,
            LingerMs = 20                    // batchel\xE9s: kis k\xE9sleltet\xE9s, nagyobb \xE1tbocs\xE1t\xE1s
        };
        _producer = new ProducerBuilder<string, string>(config).Build();
    }

    public async Task PublishAsync(OrderPlacedIntegrationEvent @event, CancellationToken cancellationToken)
    {
        var message = new Message<string, string>
        {
            Key = @event.OrderId.ToString(),               // part\xEDci\xF3kulcs: rendel\xE9senk\xE9nt sorrendhelyes
            Value = JsonSerializer.Serialize(@event),
            Headers =
            [
                new Header("event-type", "OrderPlaced"u8.ToArray()),
                new Header("correlation-id", Encoding.UTF8.GetBytes(Activity.Current?.TraceId.ToString() ?? ""))
            ]
        };

        var result = await _producer.ProduceAsync("orders.placed.v1", message, cancellationToken);
        // result.Offset, result.Partition \u2013 logol\xE1sra, diagnosztik\xE1ra
    }

    public async ValueTask DisposeAsync()
    {
        _producer.Flush(TimeSpan.FromSeconds(10)); // a bufferelt \xFCzenetek kik\xFCld\xE9se le\xE1ll\xE1s el\u0151tt
        _producer.Dispose();
        await ValueTask.CompletedTask;
    }
}
\`\`\`

Consumer \`BackgroundService\`-k\xE9nt (l\xE1sd "H\xE1tt\xE9rfolyamatok \u2013 IHostedService \xE9s BackgroundService" fejezet):

\`\`\`csharp
public class OrderPlacedConsumer(IServiceScopeFactory scopeFactory, IConfiguration configuration,
    ILogger<OrderPlacedConsumer> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = configuration["Kafka:BootstrapServers"],
            GroupId = "inventory-service",
            AutoOffsetReset = AutoOffsetReset.Earliest,
            EnableAutoCommit = false          // manu\xE1lis commit: csak sikeres feldolgoz\xE1s ut\xE1n
        };

        using var consumer = new ConsumerBuilder<string, string>(config).Build();
        consumer.Subscribe("orders.placed.v1");

        // a blokkol\xF3 Consume miatt saj\xE1t sz\xE1lon futtatjuk, nehogy a host indul\xE1s\xE1t akad\xE1lyozza
        await Task.Run(async () =>
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var result = consumer.Consume(stoppingToken);
                    var @event = JsonSerializer.Deserialize<OrderPlacedIntegrationEvent>(result.Message.Value)!;

                    using var scope = scopeFactory.CreateScope();
                    var handler = scope.ServiceProvider.GetRequiredService<IOrderPlacedHandler>();
                    await handler.HandleAsync(@event, stoppingToken);

                    consumer.Commit(result);  // at-least-once szemantika
                }
                catch (OperationCanceledException) { break; }
                catch (Exception ex)
                {
                    logger.LogError(ex, "Hiba az \xFCzenet feldolgoz\xE1sakor");
                    // poison message kezel\xE9s: DLQ-ba \xEDr\xE1s, majd commit \u2013 l\xE1sd a k\xF6vetkez\u0151 fejezetet
                }
            }
            consumer.Close(); // rendezett kil\xE9p\xE9s a consumer groupb\xF3l, azonnali rebalance
        }, stoppingToken);
    }
}
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: nagy \xE1tbocs\xE1t\xE1s\xFA esem\xE9nyfolyamokn\xE1l (t\xF6bb t\xEDzezer \xFCzenet/m\xE1sodperc), ha az esem\xE9nyeket t\xF6bb, f\xFCggetlen fogyaszt\xF3nak is fel kell dolgoznia, ha az \xFAjraj\xE1tsz\xE1s (replay) vagy az esem\xE9nyt\xF6rt\xE9net meg\u0151rz\xE9se \xFCzleti k\xF6vetelm\xE9ny, illetve stream feldolgoz\xE1sn\xE1l.

Legjobb gyakorlatok: mindig adj meg part\xEDci\xF3kulcsot, ha a sorrend sz\xE1m\xEDt (tipikusan az aggreg\xE1tum azonos\xEDt\xF3ja); kapcsold be az \`EnableIdempotence\`-t; a topic nev\xE9be tedd bele a verzi\xF3t (\`orders.placed.v1\`); a fogyaszt\xF3 mindig legyen idempotens (l\xE1sd "K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer" fejezet).

Mit ker\xFClj el: ne haszn\xE1lj auto-commitot, ha a feldolgoz\xE1s elveszt\xE9se nem megengedett \u2013 az auto-commit a *beolvas\xE1s* \xE9s nem a *sikeres feldolgoz\xE1s* ut\xE1n t\xF6rt\xE9nik; ne hozz l\xE9tre part\xEDci\xF3nk\xE9nt t\xF6bb fogyaszt\xF3t ugyanabban a csoportban (feleslegesen \xFCresj\xE1ratban \xE1ll\xF3 fogyaszt\xF3kat kapsz); ne haszn\xE1ld a Kafk\xE1t klasszikus RPC/k\xE9r\xE9s-v\xE1lasz csatornak\xE9nt.

## Kafka gyakorlati mint\xE1k \u2013 rebalance, offset, DLQ, kulcsv\xE1laszt\xE1s {#kafka-gyakorlati-mintak-rebalance-offset-dlq-kulcsvalasztas}

**Part\xEDci\xF3sz\xE1m \xE9s p\xE1rhuzamoss\xE1g.** A part\xEDci\xF3k sz\xE1ma hat\xE1rozza meg, h\xE1ny fogyaszt\xF3 dolgozhat p\xE1rhuzamosan egy consumer groupban. Ezt el\u0151re, kapacit\xE1stervez\xE9ssel \xE9rdemes megv\xE1lasztani (jellemz\u0151en a v\xE1rhat\xF3 cs\xFAcsterhel\xE9s / egy fogyaszt\xF3 \xE1tbocs\xE1t\xE1sa \xD7 biztons\xE1gi t\xE9nyez\u0151), mert a part\xEDci\xF3sz\xE1m n\xF6vel\xE9se ut\xF3lag **megv\xE1ltoztatja a kulcs \u2192 part\xEDci\xF3 lek\xE9pez\xE9st**, teh\xE1t az addigi sorrendgaranci\xE1t megt\xF6ri.

**Rebalance.** Ha egy fogyaszt\xF3 csatlakozik vagy kiesik, a csoport \xFAjraosztja a part\xEDci\xF3kat. Ez alatt a feldolgoz\xE1s sz\xFCnetel ("stop-the-world"), ez\xE9rt:

\`\`\`csharp
var config = new ConsumerConfig
{
    // ...
    SessionTimeoutMs = 45_000,      // ennyi id\u0151 ut\xE1n tekinti a broker halottnak a fogyaszt\xF3t
    MaxPollIntervalMs = 300_000,    // k\xE9t Consume h\xEDv\xE1s k\xF6z\xF6tt ennyi id\u0151 telhet el
    PartitionAssignmentStrategy = PartitionAssignmentStrategy.CooperativeSticky // fokozatos, nem "stop-the-world" rebalance
};
\`\`\`

Ha a feldolgoz\xE1s hosszabb ideig tart, mint a \`MaxPollIntervalMs\`, a broker kidobja a fogyaszt\xF3t a csoportb\xF3l, \xE9s az \xFCzenetet m\xE1s \xFAjra megkapja \u2013 ez a leggyakoribb oka a "mi\xE9rt dolgozza fel k\xE9tszer" jelleg\u0171 hib\xE1knak.

**Dead Letter Queue (poison message).** A nem feldolgozhat\xF3 \xFCzenet nem blokkolhatja a part\xEDci\xF3t:

\`\`\`csharp
catch (Exception ex) when (ex is not OperationCanceledException)
{
    await _dlqProducer.ProduceAsync("orders.placed.v1.dlq", new Message<string, string>
    {
        Key = result.Message.Key,
        Value = result.Message.Value,
        Headers =
        [
            new Header("x-exception", Encoding.UTF8.GetBytes(ex.Message)),
            new Header("x-original-topic", Encoding.UTF8.GetBytes(result.Topic)),
            new Header("x-failed-at", Encoding.UTF8.GetBytes(DateTimeOffset.UtcNow.ToString("O")))
        ]
    }, cancellationToken);

    consumer.Commit(result); // tov\xE1bbl\xE9p\xFCnk, a part\xEDci\xF3 nem akad meg
}
\`\`\`

**Retry topic minta.** \xC1tmeneti hiba (pl. egy k\xFCls\u0151 szolg\xE1ltat\xE1s nem el\xE9rhet\u0151) eset\xE9n nem \xE9rdemes azonnal DLQ-ba tenni: gyakori megold\xE1s egy vagy t\xF6bb k\xE9sleltetett retry topic (\`orders.placed.v1.retry-5m\`, \`...retry-1h\`), amelyekb\u0151l egy k\xFCl\xF6n fogyaszt\xF3 a k\xE9sleltet\xE9s letelte ut\xE1n visszateszi az \xFCzenetet.

**Kulcsv\xE1laszt\xE1s.** T\xFAl kev\xE9s k\xFCl\xF6nb\xF6z\u0151 kulcs \u2192 "forr\xF3 part\xEDci\xF3" (az egyik part\xEDci\xF3 t\xFAlterhelt, a t\xF6bbi \xFCres). T\xFAl finom szemcs\xE9s kulcs (pl. v\xE9letlen GUID) \u2192 nincs sorrendgarancia semmire. A j\xF3 kulcs jellemz\u0151en az aggreg\xE1tum azonos\xEDt\xF3ja (\`orderId\`, \`customerId\`).

**T\xF6m\xF6r\xEDt\xE9s \xE9s batchel\xE9s.** A \`LingerMs\` + \`CompressionType\` p\xE1ros dr\xE1maian jav\xEDtja az \xE1tbocs\xE1t\xE1st a h\xE1l\xF3zati kihaszn\xE1lts\xE1g rov\xE1s\xE1ra \u2013 \xE9rdemes terhel\xE9s alatt m\xE9rni.

Mit ker\xFClj el: ne commitolj offsetet feldolgoz\xE1s el\u0151tt; ne dolgozz fel \xFCzenetet "t\u0171zz \xE9s felejtsd" m\xF3don, kiv\xE9tel-nyel\xE9ssel; ne felt\xE9telezz glob\xE1lis sorrendet a topicon; ne \xE1ll\xEDtsd a part\xEDci\xF3sz\xE1mot \xE9lesben menet k\xF6zben \xE1tgondol\xE1s n\xE9lk\xFCl.

## RabbitMQ alapfogalmak \u2013 exchange, queue, binding, routing {#rabbitmq-alapfogalmak-exchange-queue-binding-routing}

A **RabbitMQ** klasszikus \xFCzenetsor (broker), amely az AMQP protokollra \xE9p\xFCl. Itt az \xFCzenet **elfogyaszt\xE1s ut\xE1n elt\u0171nik** a sorb\xF3l (nyugt\xE1z\xE1s \u2013 ack \u2013 ut\xE1n), \xE9s a broker feladata az \xFAtv\xE1laszt\xE1s.

F\u0151 elemek:

- **Producer** \u2192 **Exchange** \u2192 (binding + routing key) \u2192 **Queue** \u2192 **Consumer**
- **Exchange t\xEDpusok:**
  - \`direct\` \u2013 pontos routing key egyez\xE9s (pl. \`order.created\`).
  - \`topic\` \u2013 mintailleszt\xE9s wildcarddal (\`order.*\`, \`order.#\`).
  - \`fanout\` \u2013 minden bek\xF6t\xF6tt sorba m\xE1solja (broadcast).
  - \`headers\` \u2013 fejl\xE9cek alapj\xE1n ir\xE1ny\xEDt.
- **Queue** \u2013 t\xE9nylegesen itt t\xE1rol\xF3dnak az \xFCzenetek; lehet durable (\xFAjraind\xEDt\xE1s ut\xE1n is megmarad), exclusive, auto-delete.
- **Ack / Nack** \u2013 a fogyaszt\xF3 nyugt\xE1zza a sikeres feldolgoz\xE1st; nyugt\xE1zatlan \xFCzenetet a broker \xFAjrak\xFCld.
- **Prefetch (QoS)** \u2013 h\xE1ny nyugt\xE1zatlan \xFCzenetet kaphat egy fogyaszt\xF3 egyszerre.

\`\`\`csharp
var factory = new ConnectionFactory { HostName = "localhost", UserName = "guest", Password = "guest" };
await using var connection = await factory.CreateConnectionAsync();
await using var channel = await connection.CreateChannelAsync();

await channel.ExchangeDeclareAsync("orders", ExchangeType.Topic, durable: true);
await channel.QueueDeclareAsync("inventory.order-placed", durable: true, exclusive: false, autoDelete: false,
    arguments: new Dictionary<string, object?>
    {
        ["x-dead-letter-exchange"] = "orders.dlx",  // hib\xE1s \xFCzenetek ide ker\xFClnek
        ["x-message-ttl"] = 86_400_000
    });
await channel.QueueBindAsync("inventory.order-placed", "orders", routingKey: "order.placed");

await channel.BasicQosAsync(prefetchSize: 0, prefetchCount: 10, global: false);

var consumer = new AsyncEventingBasicConsumer(channel);
consumer.ReceivedAsync += async (_, ea) =>
{
    try
    {
        var json = Encoding.UTF8.GetString(ea.Body.ToArray());
        await HandleAsync(json);
        await channel.BasicAckAsync(ea.DeliveryTag, multiple: false);
    }
    catch
    {
        // requeue: false \u2192 a dead-letter exchange-be ker\xFCl, nem p\xF6r\xF6g v\xE9gtelen ciklusban
        await channel.BasicNackAsync(ea.DeliveryTag, multiple: false, requeue: false);
    }
};
await channel.BasicConsumeAsync("inventory.order-placed", autoAck: false, consumer);
\`\`\`

Legjobb gyakorlatok: mindig \`durable\` exchange/queue \xE9s \`persistent\` \xFCzenet, ha a tart\xF3ss\xE1g sz\xE1m\xEDt; \xE1ll\xEDts be dead-letter exchange-et minden fontos sorhoz; a \`prefetchCount\` legyen v\xE9ges (k\xFCl\xF6nben egy fogyaszt\xF3 mag\xE1hoz r\xE1nthatja az \xF6sszes \xFCzenetet); a csatorna (\`IChannel\`) **nem sz\xE1lbiztos**, fogyaszt\xF3nk\xE9nt/sz\xE1lank\xE9nt k\xFCl\xF6n csatorn\xE1t haszn\xE1lj, a kapcsolatot viszont oszd meg.

Mit ker\xFClj el: ne haszn\xE1lj \`autoAck: true\`-t, ha az \xFCzenetveszt\xE9s nem elfogadhat\xF3; ne \`requeue: true\`-val nack-elj v\xE9gtelen ciklusban egy hib\xE1s \xFCzenetet; ne nyiss kapcsolatot \xFCzenetenk\xE9nt.

## Kafka vs. RabbitMQ \u2013 mikor melyiket {#kafka-vs-rabbitmq-mikor-melyiket}

| Szempont | Kafka | RabbitMQ |
|---|---|---|
| Modell | elosztott, perzisztens log | \xFCzenetsor / broker routinggal |
| \xDCzenet \xE9lettartama | retention alapj\xE1n megmarad, \xFAjraj\xE1tszhat\xF3 | ack ut\xE1n elt\u0171nik |
| Sorrend | part\xEDci\xF3n bel\xFCl garant\xE1lt | soron bel\xFCl (egy fogyaszt\xF3val) |
| \xC1tbocs\xE1t\xE1s | nagyon magas (sz\xE1zezres nagys\xE1grend/mp) | magas, de alacsonyabb |
| \xDAtv\xE1laszt\xE1s | egyszer\u0171 (topic + kulcs), a logika a fogyaszt\xF3n\xE1l | gazdag (exchange t\xEDpusok, routing key, header) |
| K\xE9sleltetett / \xFCtemezett \xFCzenet | nat\xEDvan nincs | plugin, TTL + DLX tr\xFCkk |
| Tipikus felhaszn\xE1l\xE1s | event streaming, audit, analitika, event sourcing | feladatsor, munkamegoszt\xE1s, RPC-szer\u0171 integr\xE1ci\xF3 |
| Sk\xE1l\xE1z\xE1s | part\xEDci\xF3k sz\xE1m\xE1val | fogyaszt\xF3k sz\xE1m\xE1val (competing consumers) |

Gyakorlati d\xF6nt\xE9si szempontok: ha **esem\xE9nyfolyamot** publik\xE1lsz, amit t\xF6bb szolg\xE1ltat\xE1s is felhaszn\xE1l, \xE9s/vagy sz\xFCks\xE9g lehet visszamen\u0151leges \xFAjrafeldolgoz\xE1sra \u2192 Kafka. Ha **munk\xE1t osztasz sz\xE9t** fogyaszt\xF3k k\xF6z\xF6tt, \xF6sszetett \xFAtv\xE1laszt\xE1ssal, k\xE9sleltet\xE9ssel, priorit\xE1ssal \u2192 RabbitMQ. Nagy rendszerekben gyakran mindkett\u0151 jelen van, elt\xE9r\u0151 szerepben.

Fontos: a v\xE1laszt\xE1s nem szabad, hogy \xE1tsziv\xE1rogjon az alkalmaz\xE1s r\xE9tegbe. Az \xFCzenetk\xFCld\xE9s m\xF6g\xE9 \xE9rdemes egy v\xE9kony absztrakci\xF3t (\`IEventPublisher\`) vagy egy keretrendszert (MassTransit, Wolverine) tenni, amely elrejti a broker-specifikus r\xE9szleteket.

## MassTransit \u2013 alapok, konfigur\xE1ci\xF3, consumer {#masstransit-alapok-konfiguracio-consumer}

*Verzi\xF3: MassTransit 8.x: .NET 6+; a v9 kereskedelmi licenc al\xE1 ker\xFCl \u2013 ez tervez\xE9si szempont \xFAj projektekn\xE9l.*

A **MassTransit** egy .NET \xFCzenetk\xFCld\xE9si keretrendszer, amely absztrakci\xF3t ad a broker (RabbitMQ, Azure Service Bus, Amazon SQS, Kafka rider) f\xF6l\xE9, \xE9s be\xE9p\xEDtve hozza a szerializ\xE1ci\xF3t, a retry/redelivery logik\xE1t, a sag\xE1kat, az outboxot \xE9s a telemetri\xE1t.

\`\`\`bash
dotnet add package MassTransit
dotnet add package MassTransit.RabbitMQ
\`\`\`

\xDCzenet-szerz\u0151d\xE9sek (jellemz\u0151en k\xFCl\xF6n, megosztott contracts projektben, \`record\`-k\xE9nt):

\`\`\`csharp
public record OrderPlaced(Guid OrderId, Guid CustomerId, decimal TotalAmount, DateTimeOffset PlacedAt);
public record ReserveInventory(Guid OrderId, IReadOnlyList<OrderLine> Lines);
public record InventoryReserved(Guid OrderId);
\`\`\`

Consumer:

\`\`\`csharp
public class OrderPlacedConsumer(IInventoryService inventory, ILogger<OrderPlacedConsumer> logger)
    : IConsumer<OrderPlaced>
{
    public async Task Consume(ConsumeContext<OrderPlaced> context)
    {
        logger.LogInformation("Rendel\xE9s \xE9rkezett: {OrderId}", context.Message.OrderId);

        await inventory.ReserveAsync(context.Message.OrderId, context.CancellationToken);

        // v\xE1lasz vagy tov\xE1bbi esem\xE9ny publik\xE1l\xE1sa ugyanabban a kontextusban (correlation megmarad)
        await context.Publish(new InventoryReserved(context.Message.OrderId));
    }
}
\`\`\`

Regisztr\xE1ci\xF3:

\`\`\`csharp
builder.Services.AddMassTransit(x =>
{
    x.SetKebabCaseEndpointNameFormatter();            // order-placed n\xE9ven j\xF6n l\xE9tre a queue
    x.AddConsumers(typeof(Program).Assembly);

    // Tranzakci\xF3s outbox EF Core-ral: az \xFCzenet \xE9s az adatb\xE1zis-\xEDr\xE1s egy tranzakci\xF3ban
    x.AddEntityFrameworkOutbox<AppDbContext>(o =>
    {
        o.UseSqlServer();
        o.UseBusOutbox();
        o.QueryDelay = TimeSpan.FromSeconds(1);
    });

    x.UsingRabbitMq((context, cfg) =>
    {
        cfg.Host(builder.Configuration["RabbitMq:Host"], h =>
        {
            h.Username(builder.Configuration["RabbitMq:Username"]!);
            h.Password(builder.Configuration["RabbitMq:Password"]!);
        });

        cfg.UseMessageRetry(r => r.Exponential(5,
            TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(30), TimeSpan.FromSeconds(2)));

        cfg.ConfigureEndpoints(context);
    });
});
\`\`\`

Publik\xE1l\xE1s \xE9s k\xFCld\xE9s k\xF6zti k\xFCl\xF6nbs\xE9g: a \`Publish\` **esem\xE9ny**t sz\xF3r sz\xE9t (minden \xE9rdekl\u0151d\u0151 fogyaszt\xF3 megkapja, publish-subscribe), a \`Send\` egy konkr\xE9t v\xE9gpontnak k\xFCld\xF6tt **parancs** (pontosan egy fogyaszt\xF3 dolgozza fel).

\`\`\`csharp
public class PlaceOrderHandler(IPublishEndpoint publishEndpoint, ISendEndpointProvider sendEndpointProvider)
{
    public async Task HandleAsync(Order order, CancellationToken ct)
    {
        await publishEndpoint.Publish(new OrderPlaced(order.Id, order.CustomerId, order.Total, DateTimeOffset.UtcNow), ct);

        var endpoint = await sendEndpointProvider.GetSendEndpoint(new Uri("queue:reserve-inventory"));
        await endpoint.Send(new ReserveInventory(order.Id, order.Lines), ct);
    }
}
\`\`\`

Legjobb gyakorlatok: az \xFCzenet-szerz\u0151d\xE9sek legyenek immutable \`record\`-ok, \xE9s \xE9ljenek k\xFCl\xF6n, verzi\xF3zott csomagban; parancs = felsz\xF3l\xEDt\xF3 m\xF3d (\`ReserveInventory\`), esem\xE9ny = m\xFAlt id\u0151 (\`InventoryReserved\`); mindig kapcsold be a tranzakci\xF3s outboxot, ha az \xFCzenetk\xFCld\xE9s adatb\xE1zis-\xEDr\xE1ssal j\xE1r egy\xFCtt (l\xE1sd "Outbox Pattern" fejezet).

Mit ker\xFClj el: ne tegy\xE9l domain entit\xE1st az \xFCzenetbe \u2013 csak primit\xEDv mez\u0151ket \xE9s azonos\xEDt\xF3kat; ne \`Publish\`-olj parancsot \xE9s ne \`Send\`-elj esem\xE9nyt; ne h\xEDvj szinkron HTTP API-t egy consumerb\u0151l retry/timeout v\xE9delem n\xE9lk\xFCl (l\xE1sd "Polly v8" fejezet).

## MassTransit Saga State Machine {#masstransit-saga-state-machine}

A MassTransit **Automatonymous**-alap\xFA state machine-je a "Saga Orchestration" fejezetben le\xEDrt minta gyakorlati, \xE9les k\xF6rnyezetben is haszn\xE1lhat\xF3 megval\xF3s\xEDt\xE1sa: az \xE1llapot perzisztens (EF Core, MongoDB, Redis), a korrel\xE1ci\xF3 (melyik \xFCzenet melyik saga-p\xE9ld\xE1nyhoz tartozik) pedig deklarat\xEDv.

\`\`\`csharp
public class OrderState : SagaStateMachineInstance
{
    public Guid CorrelationId { get; set; }          // = OrderId
    public string CurrentState { get; set; } = null!;
    public decimal TotalAmount { get; set; }
    public DateTimeOffset PlacedAt { get; set; }
    public Guid? PaymentTimeoutTokenId { get; set; }
    public byte[] RowVersion { get; set; } = [];     // optimista konkurenciakezel\xE9s
}

public class OrderStateMachine : MassTransitStateMachine<OrderState>
{
    public State AwaitingPayment { get; private set; } = null!;
    public State AwaitingShipment { get; private set; } = null!;

    public Event<OrderPlaced> OrderPlaced { get; private set; } = null!;
    public Event<PaymentReceived> PaymentReceived { get; private set; } = null!;
    public Event<PaymentFailed> PaymentFailed { get; private set; } = null!;
    public Schedule<OrderState, PaymentTimeoutExpired> PaymentTimeout { get; private set; } = null!;

    public OrderStateMachine()
    {
        InstanceState(x => x.CurrentState);

        Event(() => OrderPlaced, e => e.CorrelateById(m => m.Message.OrderId));
        Event(() => PaymentReceived, e => e.CorrelateById(m => m.Message.OrderId));
        Event(() => PaymentFailed, e => e.CorrelateById(m => m.Message.OrderId));

        Schedule(() => PaymentTimeout, x => x.PaymentTimeoutTokenId,
            s => s.Delay = TimeSpan.FromMinutes(15));

        Initially(
            When(OrderPlaced)
                .Then(ctx =>
                {
                    ctx.Saga.TotalAmount = ctx.Message.TotalAmount;
                    ctx.Saga.PlacedAt = ctx.Message.PlacedAt;
                })
                .Schedule(PaymentTimeout, ctx => new PaymentTimeoutExpired(ctx.Saga.CorrelationId))
                .Send(new Uri("queue:process-payment"),
                      ctx => new ProcessPayment(ctx.Saga.CorrelationId, ctx.Saga.TotalAmount))
                .TransitionTo(AwaitingPayment));

        During(AwaitingPayment,
            When(PaymentReceived)
                .Unschedule(PaymentTimeout)
                .Send(new Uri("queue:ship-order"), ctx => new ShipOrder(ctx.Saga.CorrelationId))
                .TransitionTo(AwaitingShipment),

            // kompenz\xE1ci\xF3: id\u0151t\xFAll\xE9p\xE9s vagy sikertelen fizet\xE9s eset\xE9n a foglal\xE1s felold\xE1sa
            When(PaymentFailed).Or(When(PaymentTimeout.Received))
                .Send(new Uri("queue:release-inventory"), ctx => new ReleaseInventory(ctx.Saga.CorrelationId))
                .Finalize());

        SetCompletedWhenFinalized(); // a lez\xE1rt saga sora t\xF6rl\u0151dik az adatb\xE1zisb\xF3l
    }
}
\`\`\`

Regisztr\xE1ci\xF3 EF Core perzisztenci\xE1val:

\`\`\`csharp
x.AddSagaStateMachine<OrderStateMachine, OrderState>()
    .EntityFrameworkRepository(r =>
    {
        r.ConcurrencyMode = ConcurrencyMode.Optimistic;
        r.ExistingDbContext<SagaDbContext>();
    });
\`\`\`

Legjobb gyakorlatok: a \`CorrelationId\` legyen az \xFCzleti folyamat term\xE9szetes azonos\xEDt\xF3ja (pl. rendel\xE9sazonos\xEDt\xF3); minden v\xE1rakoz\xF3 \xE1llapothoz tartozzon **timeout** (scheduled message), k\xFCl\xF6nben a saga \xF6r\xF6kre beragadhat; minden el\u0151rehalad\xF3 l\xE9p\xE9shez tervezd meg a **kompenz\xE1l\xF3** l\xE9p\xE9st; haszn\xE1lj optimista konkurenciakezel\xE9st, mert t\xF6bb \xFCzenet \xE9rkezhet egyszerre ugyanahhoz a saga-p\xE9ld\xE1nyhoz.

Mit ker\xFClj el: ne tegy\xE9l \xFCzleti logik\xE1t a state machine-be \u2013 az csak koordin\xE1l, a munk\xE1t a consumerek v\xE9gzik; ne t\xE1rolj nagy adatszerkezetet a saga \xE1llapot\xE1ban (csak azonos\xEDt\xF3kat \xE9s a d\xF6nt\xE9shez sz\xFCks\xE9ges minimumot); ne haszn\xE1lj sag\xE1t ott, ahol egy egyszer\u0171 lok\xE1lis tranzakci\xF3 is el\xE9g lenne.

## MassTransit hibakezel\xE9s \u2013 retry, redelivery, error queue, circuit breaker {#masstransit-hibakezeles-retry-redelivery-error-queue-circuit-breaker}

A MassTransit h\xE1romszint\u0171 hibakezel\xE9st k\xEDn\xE1l, \xE9s fontos \xE9rteni a k\xFCl\xF6nbs\xE9get:

1. **Retry** \u2013 *azonnali*, mem\xF3ri\xE1ban t\xF6rt\xE9n\u0151 \xFAjrapr\xF3b\xE1lkoz\xE1s, a fogyaszt\xF3 nem engedi el az \xFCzenetet. R\xF6vid, \xE1tmeneti hib\xE1kra (deadlock, pillanatnyi h\xE1l\xF3zati hiba).
2. **Redelivery (delayed redelivery)** \u2013 az \xFCzenet visszaker\xFCl a brokerhez, \xE9s k\xE9sleltetve \xE9rkezik \xFAjra. Hosszabb kies\xE9sre (egy k\xFCls\u0151 szolg\xE1ltat\xE1s percekig nem el\xE9rhet\u0151).
3. **Error queue** \u2013 ha minden pr\xF3b\xE1lkoz\xE1s elfogyott, az \xFCzenet a \`<queue>_error\` sorba ker\xFCl, a kiv\xE9tel r\xE9szleteivel a fejl\xE9cekben. Innen manu\xE1lisan vagy eszk\xF6zzel visszaj\xE1tszhat\xF3.

\`\`\`csharp
cfg.ReceiveEndpoint("order-placed", e =>
{
    // 1. azonnali retry \u2013 csak \xE1tmeneti hib\xE1kra
    e.UseMessageRetry(r =>
    {
        r.Exponential(3, TimeSpan.FromMilliseconds(200), TimeSpan.FromSeconds(5), TimeSpan.FromMilliseconds(500));
        r.Ignore<ValidationException>();      // \xE9rtelmetlen \xFAjrapr\xF3b\xE1lni: azonnal error queue-ba
        r.Handle<DbUpdateConcurrencyException>();
    });

    // 2. k\xE9sleltetett \xFAjrak\xE9zbes\xEDt\xE9s \u2013 hosszabb kies\xE9sre
    e.UseDelayedRedelivery(r => r.Intervals(
        TimeSpan.FromMinutes(1), TimeSpan.FromMinutes(5), TimeSpan.FromMinutes(15)));

    // 3. circuit breaker \u2013 ha a hibaar\xE1ny tart\xF3san magas, sz\xFCnetelteti a fogyaszt\xE1st
    e.UseCircuitBreaker(cb =>
    {
        cb.TrackingPeriod = TimeSpan.FromMinutes(1);
        cb.TripThreshold = 15;      // %
        cb.ActiveThreshold = 10;    // legal\xE1bb ennyi \xFCzenet ut\xE1n \xE9rt\xE9kel
        cb.ResetInterval = TimeSpan.FromMinutes(5);
    });

    e.ConfigureConsumer<OrderPlacedConsumer>(context);
});
\`\`\`

**Kill switch** \u2013 tart\xF3s hiba eset\xE9n automatikusan le\xE1ll\xEDtja a v\xE9gpontot, hogy ne p\xF6rgesse v\xE9gig az eg\xE9sz sort hib\xE1s \xFCzenetekk\xE9:

\`\`\`csharp
cfg.UseKillSwitch(k => k.SetActivationThreshold(10).SetTripThreshold(0.15).SetRestartTimeout(m: 1));
\`\`\`

Legjobb gyakorlatok: k\xFCl\xF6nb\xF6ztesd meg az **\xE1tmeneti** (retry-olhat\xF3) \xE9s a **v\xE9gleges** (\xFCzleti/valid\xE1ci\xF3s) hib\xE1t \u2013 az ut\xF3bbit \`r.Ignore<T>()\`-vel azonnal engedd az error queue-ba; figyeld monitoroz\xE1ssal az error queue-k m\xE9ret\xE9t (ez az egyik legfontosabb riaszt\xE1s egy event-driven rendszerben); a fogyaszt\xF3 legyen idempotens, mert a retry duplik\xE1lt feldolgoz\xE1st jelenthet.

Mit ker\xFClj el: ne \xE1ll\xEDts be v\xE9gtelen vagy nagyon sok azonnali retry-t (ez blokkolja a fogyaszt\xF3t \xE9s a sort); ne nyeld el a kiv\xE9telt a consumerben, mert akkor a MassTransit sikeresnek l\xE1tja a feldolgoz\xE1st, \xE9s az \xFCzenet elveszik.

## Wolverine \u2013 k\xF3dk\xF6zpont\xFA messaging \xE9s medi\xE1tor {#wolverine-kodkozpontu-messaging-es-mediator}

*Verzi\xF3: Wolverine 3.x: .NET 8+ (a .NET 9/10 t\xE1mogatott).*

A **Wolverine** (a JasperFx/Marten csal\xE1d tagja) egyszerre t\xF6lti be a MediatR (in-process medi\xE1tor) \xE9s a MassTransit (broker-alap\xFA \xFCzenetk\xFCld\xE9s) szerep\xE9t, de radik\xE1lisan m\xE1s filoz\xF3fi\xE1val: **nincs k\xF6telez\u0151 interf\xE9sz \xE9s attrib\xFAtum**, a handlereket konvenci\xF3 alapj\xE1n tal\xE1lja meg, \xE9s a pipeline-t fut\xE1sid\u0151ben gener\xE1lt k\xF3ddal \xE1ll\xEDtja el\u0151 (nincs runtime reflexi\xF3-overhead, a gener\xE1lt k\xF3d meg is n\xE9zhet\u0151).

\`\`\`bash
dotnet add package WolverineFx
dotnet add package WolverineFx.RabbitMQ      # vagy WolverineFx.Kafka
dotnet add package WolverineFx.EntityFrameworkCore
\`\`\`

Handler \u2013 sima oszt\xE1ly, sima met\xF3dus, interf\xE9sz n\xE9lk\xFCl:

\`\`\`csharp
public record PlaceOrder(Guid CustomerId, IReadOnlyList<OrderLine> Lines);
public record OrderPlaced(Guid OrderId, decimal TotalAmount);

public static class PlaceOrderHandler
{
    // A met\xF3dus param\xE9terei DI-b\u0151l \xE9rkeznek (method injection), a visszat\xE9r\xE9si \xE9rt\xE9k
    // "cascading message": a Wolverine automatikusan publik\xE1lja.
    public static async Task<OrderPlaced> Handle(PlaceOrder command, AppDbContext dbContext, CancellationToken ct)
    {
        var order = Order.Create(command.CustomerId, command.Lines);
        dbContext.Orders.Add(order);
        await dbContext.SaveChangesAsync(ct);

        return new OrderPlaced(order.Id, order.Total);
    }
}
\`\`\`

Konfigur\xE1ci\xF3:

\`\`\`csharp
builder.Host.UseWolverine(opts =>
{
    opts.UseRabbitMq(new Uri(builder.Configuration["RabbitMq:Uri"]!)).AutoProvision();

    opts.PublishMessage<OrderPlaced>().ToRabbitExchange("orders");
    opts.ListenToRabbitQueue("order-commands");

    // Tranzakci\xF3s middleware: automatikus SaveChanges + outbox a handler k\xF6r\xFCl
    opts.Policies.AutoApplyTransactions();
    opts.Policies.UseDurableLocalQueues();
    opts.Policies.UseDurableOutboxOnAllSendingEndpoints();

    // Be\xE9p\xEDtett resilience
    opts.OnException<DbUpdateConcurrencyException>().RetryTimes(3);
    opts.OnException<HttpRequestException>()
        .RetryWithCooldown(TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(5), TimeSpan.FromSeconds(15));
});
\`\`\`

Haszn\xE1lat v\xE9gpontb\xF3l (medi\xE1tor m\xF3dban vagy \xFCzenetk\xFCld\xE9sk\xE9nt):

\`\`\`csharp
app.MapPost("/orders", async (PlaceOrder command, IMessageBus bus) =>
{
    var result = await bus.InvokeAsync<OrderPlaced>(command);   // in-process, mint a MediatR Send
    return Results.Ok(result);
});

app.MapPost("/orders/async", async (PlaceOrder command, IMessageBus bus) =>
{
    await bus.PublishAsync(command);   // sorba t\xE9ve, aszinkron feldolgoz\xE1s
    return Results.Accepted();
});
\`\`\`

A Wolverine \xF6nmag\xE1ban megval\xF3s\xEDtja a **tranzakci\xF3s outboxot** (EF Core vagy Marten mellett), \xE9s a \`MapWolverineEndpoints()\` seg\xEDts\xE9g\xE9vel a handlerekb\u0151l k\xF6zvetlen\xFCl HTTP v\xE9gpontokat is tud gener\xE1lni \u2013 ez a "REPR Pattern" fejezetben le\xEDrt megk\xF6zel\xEDt\xE9s m\xE9g kevesebb boilerplate-tel.

Mikor \xE9rdemes v\xE1lasztani: ha zavar a MediatR + MassTransit kett\u0151ss\xE9ge \xE9s a sok interf\xE9sz/boilerplate; ha fontos a teljes\xEDtm\xE9ny (gener\xE1lt k\xF3d, nincs reflexi\xF3s pipeline); ha Marten/PostgreSQL stackben dolgozol (a kett\u0151 szorosan integr\xE1lt). A MediatR licencmodell-v\xE1ltoz\xE1sa \xF3ta t\xF6bb csapat is emiatt v\xE1lt.

Mit ker\xFClj el: ne keverd a Wolverine-t \xE9s a MediatR-t ugyanabban a szolg\xE1ltat\xE1sban \u2013 a k\xE9t pipeline p\xE1rhuzamos m\u0171k\xF6dtet\xE9se zavar\xF3; a konvenci\xF3-alap\xFA felder\xEDt\xE9s miatt tartsd k\xF6vetkezetesen a handler-elnevez\xE9seket (\`Handle\`/\`Consume\`), k\xFCl\xF6nben neh\xE9z megtal\xE1lni, mi hol fut le; \xE9les bevezet\xE9s el\u0151tt n\xE9zd meg a gener\xE1lt k\xF3dot (\`opts.CodeGeneration.TypeLoadMode\`), \xE9s futtass el\u0151re gener\xE1l\xE1st (\`dotnet run -- codegen write\`) a hidegind\xEDt\xE1s gyors\xEDt\xE1s\xE1ra.

## K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer (Inbox Pattern) https://learn.microsoft.com/azure/architecture/patterns/idempotent-consumer {#kezbesitesi-szemantika-es-idempotens-consumer-inbox-pattern}

Elosztott rendszerben h\xE1rom k\xE9zbes\xEDt\xE9si szemantika l\xE9tezik:

- **At-most-once** \u2013 legfeljebb egyszer; lehet \xFCzenetveszt\xE9s. (Auto-commit feldolgoz\xE1s el\u0151tt.)
- **At-least-once** \u2013 legal\xE1bb egyszer; lehet duplik\xE1ci\xF3. **A gyakorlatban ez az alap\xE9rtelmez\xE9s.**
- **Exactly-once** \u2013 pontosan egyszer; broker szinten csak korl\xE1tozottan l\xE9tezik (Kafka tranzakci\xF3k, csak Kafka\u2192Kafka \xFAtvonalon). Adatb\xE1zissal vagy k\xFCls\u0151 API-val kombin\xE1lva **gyakorlatilag el\xE9rhetetlen** \u2013 helyette at-least-once + idempotens fogyaszt\xF3 a helyes megk\xF6zel\xEDt\xE9s ("effectively-once").

Az **Inbox Pattern** az Outbox p\xE1rja: a fogyaszt\xF3 oldalon egy t\xE1bl\xE1ban r\xF6gz\xEDti a m\xE1r feldolgozott \xFCzenetazonos\xEDt\xF3kat, ugyanabban a tranzakci\xF3ban, mint az \xFCzleti hat\xE1st.

\`\`\`csharp
public class InboxMessage
{
    public Guid MessageId { get; set; }              // els\u0151dleges kulcs
    public string MessageType { get; set; } = null!;
    public DateTimeOffset ProcessedAt { get; set; }
}

public class IdempotentOrderPlacedConsumer(AppDbContext dbContext, IInventoryService inventory)
    : IConsumer<OrderPlaced>
{
    public async Task Consume(ConsumeContext<OrderPlaced> context)
    {
        var messageId = context.MessageId ?? throw new InvalidOperationException("Hi\xE1nyz\xF3 MessageId");

        // 1. m\xE1r feldolgoztuk? -> csendben eldobjuk
        if (await dbContext.InboxMessages.AnyAsync(m => m.MessageId == messageId, context.CancellationToken))
            return;

        // 2. \xFCzleti hat\xE1s \xE9s az inbox bejegyz\xE9s EGY tranzakci\xF3ban
        await using var transaction = await dbContext.Database.BeginTransactionAsync(context.CancellationToken);

        await inventory.ReserveAsync(context.Message.OrderId, context.CancellationToken);

        dbContext.InboxMessages.Add(new InboxMessage
        {
            MessageId = messageId,
            MessageType = nameof(OrderPlaced),
            ProcessedAt = DateTimeOffset.UtcNow
        });

        await dbContext.SaveChangesAsync(context.CancellationToken);
        await transaction.CommitAsync(context.CancellationToken);
    }
}
\`\`\`

Az \`InboxMessage.MessageId\`-n l\xE9v\u0151 **egyedi index** a v\xE9gs\u0151 v\xE9delem: ha k\xE9t p\xE9ld\xE1ny p\xE1rhuzamosan dolgozza fel ugyanazt az \xFCzenetet, a m\xE1sodik \`DbUpdateException\`-t kap, amit duplik\xE1tumk\xE9nt lehet kezelni.

Alternat\xEDv idempotencia-strat\xE9gi\xE1k, amikor nincs saj\xE1t adatb\xE1zis-tranzakci\xF3:

- **Term\xE9szetes idempotencia** \u2013 a m\u0171velet \xF6nmag\xE1ban ism\xE9telhet\u0151 (\`SET status = 'Paid'\` ugyanazzal az \xE9rt\xE9kkel).
- **Verzi\xF3/sorsz\xE1m ellen\u0151rz\xE9s** \u2013 az \xFCzenet hordoz egy verzi\xF3sz\xE1mot, \xE9s csak akkor alkalmazod, ha nagyobb a t\xE1roltn\xE1l (ez a "k\xE9s\u0151n \xE9rkez\u0151, r\xE9gi \xFCzenet" probl\xE9m\xE1ra is megold\xE1s).
- **Elosztott kulcst\xE1r** \u2013 Redis \`SETNX\` TTL-lel (gyors, de nem tranzakcion\xE1lis az \xFCzleti \xEDr\xE1ssal; kis kock\xE1zat marad).

Legjobb gyakorlatok: az inbox t\xE1bl\xE1t rendszeresen takar\xEDtsd (r\xE9gi bejegyz\xE9sek t\xF6rl\xE9se, pl. 30 nap ut\xE1n, \xFCtemezett job-bal \u2013 l\xE1sd "Quartz.NET" fejezet); a \`MessageId\` a producer \xE1ltal gener\xE1lt, stabil azonos\xEDt\xF3 legyen, ne a broker gener\xE1lta k\xE9zbes\xEDt\xE9si azonos\xEDt\xF3; a kett\u0151t (Outbox + Inbox) egy\xFCtt haszn\xE1lva kapod meg az end-to-end "effectively-once" garanci\xE1t.

Mit ker\xFClj el: ne higgy a "exactly-once" marketingnek; ne az \xFCzenet tartalm\xE1nak hash-el\xE9s\xE9vel azonos\xEDts (k\xE9t legitim, azonos tartalm\xFA \xFCzenet is \xE9rkezhet); ne tedd az inbox-ellen\u0151rz\xE9st \xE9s az \xFCzleti \xEDr\xE1st k\xFCl\xF6n tranzakci\xF3ba.

## \xDCzenet-szerz\u0151d\xE9sek verzi\xF3z\xE1sa \xE9s s\xE9ma-evol\xFAci\xF3 {#uzenet-szerzodesek-verziozasa-es-sema-evolucio}

Elosztott rendszerben a producer \xE9s a consumer **k\xFCl\xF6n deployol**, ez\xE9rt soha nem felt\xE9telezheted, hogy egyszerre friss\xFClnek. Az \xFCzenet-szerz\u0151d\xE9s (contract) \xE9ppolyan publikus API, mint egy REST v\xE9gpont \u2013 visszafel\xE9 \xE9s el\u0151re kompatibilis m\xF3don kell fejleszteni.

**Biztons\xE1gos (kompatibilis) v\xE1ltoztat\xE1sok:**
- \xDAj, **opcion\xE1lis** mez\u0151 hozz\xE1ad\xE1sa alap\xE9rtelmezett \xE9rt\xE9kkel.
- Mez\u0151 hozz\xE1ad\xE1sa, amit a r\xE9gi fogyaszt\xF3 egyszer\u0171en figyelmen k\xEDv\xFCl hagy.

**T\xF6r\u0151 (breaking) v\xE1ltoztat\xE1sok:**
- Mez\u0151 t\xF6rl\xE9se vagy \xE1tnevez\xE9se.
- Mez\u0151 t\xEDpus\xE1nak megv\xE1ltoztat\xE1sa.
- Enum \xE9rt\xE9k jelent\xE9s\xE9nek megv\xE1ltoztat\xE1sa.
- K\xF6telez\u0151v\xE9 t\xE9tel.

T\xF6r\u0151 v\xE1ltoz\xE1s eset\xE9n a helyes elj\xE1r\xE1s a **p\xE1rhuzamos verzi\xF3z\xE1s** (expand\u2013contract / parallel change):

\`\`\`csharp
// 1. l\xE9p\xE9s: \xFAj verzi\xF3 bevezet\xE9se, a r\xE9gi is publik\xE1l\xF3dik egy ideig
public record OrderPlacedV1(Guid OrderId, decimal TotalAmount);
public record OrderPlacedV2(Guid OrderId, Money Total, Guid CustomerId);

// 2. l\xE9p\xE9s: minden fogyaszt\xF3 \xE1t\xE1ll a V2-re (a V1-et m\xE9g kezeli)
// 3. l\xE9p\xE9s: a V1 publik\xE1l\xE1sa megsz\u0171nik, majd a V1 handler t\xF6r\xF6lhet\u0151
\`\`\`

Kafk\xE1n\xE1l a topic nev\xE9be (\`orders.placed.v2\`), MassTransitn\xE1l a message type n\xE9vter\xE9be \xE9rdemes verzi\xF3t tenni. Fejl\xE9cben mindig utazzon a szerz\u0151d\xE9s t\xEDpusa \xE9s verzi\xF3ja:

\`\`\`csharp
new Header("content-type", "application/json"u8.ToArray()),
new Header("message-type", "OrderPlaced"u8.ToArray()),
new Header("message-version", "2"u8.ToArray())
\`\`\`

**Schema Registry (Kafka).** Confluent Schema Registry-vel a s\xE9ma (Avro, Protobuf vagy JSON Schema) k\xF6zpontilag regisztr\xE1lt, \xE9s a registry **kik\xE9nyszer\xEDti** a kompatibilit\xE1si szab\xE1lyt (\`BACKWARD\`, \`FORWARD\`, \`FULL\`) \u2013 inkompatibilis s\xE9ma publik\xE1l\xE1sa m\xE1r fejleszt\xE9skor elbukik, nem \xE9les \xFCzemben.

\`\`\`csharp
var schemaRegistry = new CachedSchemaRegistryClient(
    new SchemaRegistryConfig { Url = configuration["Kafka:SchemaRegistryUrl"] });

using var producer = new ProducerBuilder<string, OrderPlaced>(producerConfig)
    .SetValueSerializer(new JsonSerializer<OrderPlaced>(schemaRegistry))
    .Build();
\`\`\`

Legjobb gyakorlatok: a szerz\u0151d\xE9sek k\xFCl\xF6n, verzi\xF3zott NuGet csomagban \xE9ljenek, amit a producer \xE9s a consumer is hivatkoz; **tolerant reader** elv \u2013 a fogyaszt\xF3 hagyja figyelmen k\xEDv\xFCl az ismeretlen mez\u0151ket (a \`System.Text.Json\` alapb\xF3l ezt teszi); dokument\xE1ld, meddig \xE9l egy r\xE9gi verzi\xF3 (deprecation policy).

Mit ker\xFClj el: ne haszn\xE1ld \xFAjra egy mez\u0151 nev\xE9t m\xE1s jelent\xE9ssel; ne felt\xE9telezd, hogy "\xFAgyis mindenki egyszerre friss\xFCl"; ne szerializ\xE1lj domain entit\xE1st k\xF6zvetlen\xFCl \xFCzenetbe \u2013 a domain modell v\xE1ltoz\xE1sa \xEDgy azonnal t\xF6r\u0151 API-v\xE1ltoz\xE1ss\xE1 v\xE1lik.

## Event-Driven integr\xE1ci\xF3s st\xEDlusok https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture {#event-driven-integracios-stilusok}

Nem minden "esem\xE9ny" egyforma. N\xE9gy, gyakran \xF6sszekevert st\xEDlus l\xE9tezik (Martin Fowler taxon\xF3mi\xE1ja alapj\xE1n), \xE9s nagyon fontos, hogy a csapat tudatosan v\xE1lasszon:

**1. Event Notification** \u2013 az esem\xE9ny csak jelz\xE9s, minim\xE1lis adattal ("t\xF6rt\xE9nt valami, k\xE9rdezz r\xE1, ha \xE9rdekel").

\`\`\`csharp
public record OrderPlaced(Guid OrderId);   // a fogyaszt\xF3 visszah\xEDv az Orders API-ra a r\xE9szletek\xE9rt
\`\`\`
El\u0151ny: kicsi \xFCzenet, laza csatol\xE1s a modell szintj\xE9n. H\xE1tr\xE1ny: visszah\xEDv\xE1s (chatty), fut\xE1sidej\u0171 csatol\xE1s \u2013 ha a forr\xE1s szolg\xE1ltat\xE1s nem el\xE9rhet\u0151, a fogyaszt\xF3 sem tud dolgozni.

**2. Event-Carried State Transfer (ECST)** \u2013 az esem\xE9ny hordozza a fogyaszt\xF3hoz sz\xFCks\xE9ges teljes \xE1llapotot.

\`\`\`csharp
public record OrderPlaced(
    Guid OrderId, Guid CustomerId, string CustomerEmail,
    IReadOnlyList<OrderLineDto> Lines, decimal TotalAmount, DateTimeOffset PlacedAt);
\`\`\`
El\u0151ny: a fogyaszt\xF3 auton\xF3m, nincs szinkron h\xEDv\xE1s, saj\xE1t olvas\xE1si modellt \xE9p\xEDthet. H\xE1tr\xE1ny: nagyobb \xFCzenet, adatduplik\xE1ci\xF3, eventual consistency, \xE9s az \xFCzenet-szerz\u0151d\xE9s gazdagabb (nehezebb v\xE1ltoztatni).

**3. Event Sourcing** \u2013 az esem\xE9nyek az igazs\xE1g forr\xE1sa, az \xE1llapot bel\u0151l\xFCk sz\xE1rmaztatott (l\xE1sd a k\xF6vetkez\u0151 fejezetet).

**4. CQRS-integr\xE1ci\xF3** \u2013 az esem\xE9nyek olvas\xE1si modellt (projekci\xF3t) friss\xEDtenek egy m\xE1sik szolg\xE1ltat\xE1sban.

Gyakorlati aj\xE1nl\xE1s mikroszolg\xE1ltat\xE1sokn\xE1l: az **ECST** a leggyakoribb \xE9s \xE1ltal\xE1ban a legjobb v\xE1laszt\xE1s integr\xE1ci\xF3s esem\xE9nyekhez, mert megsz\xFCnteti a fut\xE1sidej\u0171 f\xFCgg\xE9st a forr\xE1s szolg\xE1ltat\xE1st\xF3l. Fontos megk\xFCl\xF6nb\xF6ztetni:

- **Domain event** \u2013 a bounded contexten *bel\xFCl*, in-process, gazdag, a domain nyelv\xE9n ("Domain Events" fejezet).
- **Integration event** \u2013 a contexten *k\xEDv\xFClre*, brokerre, publikus, verzi\xF3zott szerz\u0151d\xE9s, csak primit\xEDvekkel.

A kett\u0151 k\xF6z\xF6tt az alkalmaz\xE1sr\xE9teg ford\xEDt \u2013 a domain event nem sziv\xE1roghat ki a brokerre.

Mit ker\xFClj el: ne publik\xE1lj "CRUD esem\xE9nyeket" (\`CustomerUpdated\` az \xF6sszes mez\u0151vel) \u2013 ezek semmit nem mondanak az \xFCzleti sz\xE1nd\xE9kr\xF3l, \xE9s minden fogyaszt\xF3t arra k\xE9nyszer\xEDtenek, hogy kital\xE1lja, mi is t\xF6rt\xE9nt; nevezd az esem\xE9nyt \xFCzleti esem\xE9nyk\xE9nt (\`CustomerMovedToNewAddress\`, \`SubscriptionCancelled\`).

## Event Sourcing .NET-ben (Marten) https://learn.microsoft.com/azure/architecture/patterns/event-sourcing {#event-sourcing-net-ben-marten}

*Verzi\xF3: Marten 7.x: .NET 8+ \xE9s PostgreSQL 12+.*

**Event Sourcing** eset\xE9n nem az aktu\xE1lis \xE1llapotot t\xE1roljuk, hanem az \xF6sszes \xE1llapotv\xE1ltoz\xE1st okoz\xF3 esem\xE9nyt, id\u0151rendben. Az aktu\xE1lis \xE1llapot ezek visszaj\xE1tsz\xE1s\xE1b\xF3l (fold/replay) \xE1ll el\u0151. El\u0151nye a teljes audit trail, a "hogyan jutottunk ide" k\xE9rd\xE9s megv\xE1laszolhat\xF3s\xE1ga \xE9s a visszamen\u0151leg \xE9p\xEDthet\u0151 \xFAj olvas\xE1si modellek.

A .NET \xF6kosziszt\xE9m\xE1ban a **Marten** (PostgreSQL f\xF6l\xF6tt) \xE9s az **EventStoreDB** a k\xE9t legelterjedtebb megold\xE1s.

\`\`\`bash
dotnet add package Marten
\`\`\`

\`\`\`csharp
// Esem\xE9nyek \u2013 m\xFAlt idej\u0171, immutable record-ok
public record OrderStarted(Guid OrderId, Guid CustomerId);
public record ItemAdded(Guid ProductId, int Quantity, decimal UnitPrice);
public record OrderConfirmed(DateTimeOffset ConfirmedAt);

// Aggreg\xE1tum: az esem\xE9nyek alkalmaz\xE1s\xE1b\xF3l \xE1ll el\u0151 (Apply konvenci\xF3)
public class Order
{
    public Guid Id { get; private set; }
    public OrderStatus Status { get; private set; }
    public decimal Total { get; private set; }

    public void Apply(OrderStarted e) { Id = e.OrderId; Status = OrderStatus.Draft; }
    public void Apply(ItemAdded e) => Total += e.Quantity * e.UnitPrice;
    public void Apply(OrderConfirmed e) => Status = OrderStatus.Confirmed;
}
\`\`\`

\`\`\`csharp
builder.Services.AddMarten(options =>
{
    options.Connection(builder.Configuration.GetConnectionString("Postgres")!);
    options.Projections.Snapshot<Order>(SnapshotLifecycle.Inline);   // aktu\xE1lis \xE1llapot azonnal lek\xE9rdezhet\u0151
    options.Projections.Add<OrderSummaryProjection>(ProjectionLifecycle.Async); // olvas\xE1si modell h\xE1tt\xE9rben
}).UseLightweightSessions().AddAsyncDaemon(DaemonMode.HotCold);
\`\`\`

\`\`\`csharp
// \xDAj stream ind\xEDt\xE1sa
var orderId = Guid.NewGuid();
session.Events.StartStream<Order>(orderId, new OrderStarted(orderId, customerId));
await session.SaveChangesAsync(ct);

// Esem\xE9ny hozz\xE1f\u0171z\xE9se, optimista konkurenciakezel\xE9ssel (v\xE1rt verzi\xF3)
await session.Events.AppendExclusive(orderId, ct);
session.Events.Append(orderId, new ItemAdded(productId, 2, 4990M));
await session.SaveChangesAsync(ct);

// Aktu\xE1lis \xE1llapot
var order = await session.Events.AggregateStreamAsync<Order>(orderId, token: ct);
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: ha az audit trail vagy a jogszab\xE1lyi megfelel\xE9s megk\xF6veteli a teljes v\xE1ltoz\xE1st\xF6rt\xE9netet (p\xE9nz\xFCgy, eg\xE9szs\xE9g\xFCgy, biztos\xEDt\xE1s); ha az \xFCzleti folyamat maga is esem\xE9nyekben gondolkodik; ha ut\xF3lag is szeretn\xE9l \xFAj n\xE9zeteket \xE9p\xEDteni a t\xF6rt\xE9neti adatokb\xF3l.

Mit ker\xFClj el: **ne alkalmazd az eg\xE9sz rendszerre** \u2013 jellemz\u0151en egy-k\xE9t aggreg\xE1tum indokolja, a t\xF6bbi maradhat klasszikus CRUD; ne feledkezz meg az esem\xE9nyek verzi\xF3z\xE1s\xE1r\xF3l (az esem\xE9nyeket soha nem lehet megv\xE1ltoztatni, csak upcaster-rel \xE1talak\xEDtani olvas\xE1skor); ne v\xE1rj azonnali konzisztenci\xE1t az aszinkron projekci\xF3kt\xF3l; ne keverd \xF6ssze a CQRS-t \xE9s az event sourcing-ot \u2013 az egyik nem felt\xE9tele a m\xE1siknak.

## Eventual consistency \xE9s az elosztott tranzakci\xF3k val\xF3s\xE1ga https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven {#eventual-consistency-es-az-elosztott-tranzakciok-valosaga}

Mikroszolg\xE1ltat\xE1sokn\xE1l minden szolg\xE1ltat\xE1snak saj\xE1t adatb\xE1zisa van ("database per service"), \xEDgy egy \xFCzleti folyamat t\xF6bb adatb\xE1zist \xE9rint. A klasszikus, ACID elosztott tranzakci\xF3 (**2PC / XA**) technikailag l\xE9tezik, de a gyakorlatban ker\xFClend\u0151: szinkron blokkol\xE1st, rendelkez\xE9sre \xE1ll\xE1si csatol\xE1st \xE9s rossz sk\xE1l\xE1zhat\xF3s\xE1got okoz (a CAP-t\xE9tel \xE9rtelm\xE9ben a konzisztenci\xE1\xE9rt a rendelkez\xE9sre \xE1ll\xE1ssal fizetsz).

A gyakorlati recept:

1. **Egy lok\xE1lis ACID tranzakci\xF3** szolg\xE1ltat\xE1sonk\xE9nt (EF Core, \`SaveChangesAsync\`).
2. **Outbox** az \xFCzenet \xE9s az adatv\xE1ltoz\xE1s atomikus \xF6sszek\xF6t\xE9s\xE9re (l\xE1sd "Outbox Pattern" fejezet).
3. **Saga** a szolg\xE1ltat\xE1sokon \xE1t\xEDvel\u0151 folyamat koordin\xE1l\xE1s\xE1ra, kompenz\xE1l\xF3 m\u0171veletekkel (l\xE1sd "Saga Orchestration" \xE9s "MassTransit Saga State Machine" fejezetek).
4. **Idempotens fogyaszt\xF3** a duplik\xE1tumok ellen (Inbox).
5. **Eventual consistency** tudatos elfogad\xE1sa \xE9s **kezel\xE9se a felhaszn\xE1l\xF3i fel\xFCleten is**.

Az utols\xF3 pont a leggyakrabban elfelejtett r\xE9sz. Ha egy folyamat aszinkron, a UI-nak ezt kommunik\xE1lnia kell:

\`\`\`csharp
// Nem 200 OK a "k\xE9sz" jelent\xE9ssel, hanem 202 Accepted + st\xE1tusz-v\xE9gpont
app.MapPost("/orders", async (PlaceOrder command, IMessageBus bus) =>
{
    var orderId = Guid.NewGuid();
    await bus.PublishAsync(command with { OrderId = orderId });
    return Results.Accepted($"/orders/{orderId}/status", new { orderId, status = "Processing" });
});

app.MapGet("/orders/{id:guid}/status", async (Guid id, IOrderStatusReader reader, CancellationToken ct) =>
    await reader.GetStatusAsync(id, ct) is { } status ? Results.Ok(status) : Results.NotFound());
\`\`\`

**Konzisztenciahat\xE1r tervez\xE9se.** Az aggreg\xE1tum a tranzakci\xF3s hat\xE1r: *egy tranzakci\xF3ban egy aggreg\xE1tumot m\xF3dos\xEDts*. Ha rendszeresen k\xE9t aggreg\xE1tumot kell egyszerre, konzisztensen m\xF3dos\xEDtani, az jel: vagy rosszul vannak megh\xFAzva a hat\xE1rok, vagy a folyamat val\xF3j\xE1ban eventually consistent lehet.

**Read-your-own-writes probl\xE9ma.** Aszinkron projekci\xF3kn\xE1l a felhaszn\xE1l\xF3 k\xF6zvetlen\xFCl a ment\xE9s ut\xE1n nem l\xE1tja a saj\xE1t m\xF3dos\xEDt\xE1s\xE1t. Megold\xE1sok: a UI optimista friss\xEDt\xE9se, a parancs v\xE1lasz\xE1ban visszaadott friss adat haszn\xE1lata, vagy verzi\xF3-token ("olvasd, am\xEDg a projekci\xF3 el nem \xE9ri ezt a verzi\xF3t").

Mit ker\xFClj el: ne pr\xF3b\xE1lj 2PC-t bevezetni mikroszolg\xE1ltat\xE1sok k\xF6z\xE9; ne h\xEDvj szinkron l\xE1ncban 4-5 szolg\xE1ltat\xE1st egy k\xE9r\xE9s kiszolg\xE1l\xE1s\xE1hoz (a rendelkez\xE9sre \xE1ll\xE1sok szorz\xF3dnak: 5 \xD7 99,9% \u2248 99,5%); ne \xEDg\xE9rj a felhaszn\xE1l\xF3i fel\xFCleten azonnali konzisztenci\xE1t, ha a h\xE1tt\xE9rben aszinkron folyamat fut.

## Vertical Slice Architecture a gyakorlatban {#vertical-slice-architecture-a-gyakorlatban}

A "Vertical sliced code Organisation pattern" fejezet a koncepci\xF3t \xEDrja le; itt a napi gyakorlat k\xF6vetkezik: hogyan n\xE9z ki egy szelet, mi maradjon k\xF6z\xF6s, \xE9s hol a hat\xE1r a Clean Architecture fel\xE9.

**Mappastrukt\xFAra \u2013 feature-enk\xE9nt, nem r\xE9tegenk\xE9nt:**

\`\`\`
src/
  Orders.Api/
    Features/
      PlaceOrder/
        PlaceOrder.cs            // Command + Validator + Handler + Endpoint + Response EGY f\xE1jlban
        PlaceOrderTests.cs
      CancelOrder/
        CancelOrder.cs
      GetOrderDetails/
        GetOrderDetails.cs       // Query + Handler + Endpoint, k\xF6zvetlen SQL/projekci\xF3
    Domain/                      // csak az, ami val\xF3ban t\xF6bb szeletben k\xF6z\xF6s: aggreg\xE1tumok, VO-k
      Order.cs
      OrderStatus.cs
    Infrastructure/
      AppDbContext.cs
      Migrations/
    Common/
      Results/
      Behaviors/
    Program.cs
\`\`\`

**Egy teljes szelet, egyetlen f\xE1jlban:**

\`\`\`csharp
public static class PlaceOrder
{
    public record Command(Guid CustomerId, IReadOnlyList<Line> Lines) : IRequest<Result<Guid>>;
    public record Line(Guid ProductId, int Quantity);
    public record Response(Guid OrderId, decimal Total);

    public class Validator : AbstractValidator<Command>
    {
        public Validator()
        {
            RuleFor(x => x.CustomerId).NotEmpty();
            RuleFor(x => x.Lines).NotEmpty().WithMessage("A rendel\xE9snek legal\xE1bb egy t\xE9telt tartalmaznia kell.");
            RuleForEach(x => x.Lines).ChildRules(l => l.RuleFor(x => x.Quantity).GreaterThan(0));
        }
    }

    public class Handler(AppDbContext db, IPublishEndpoint publisher) : IRequestHandler<Command, Result<Guid>>
    {
        public async Task<Result<Guid>> Handle(Command command, CancellationToken ct)
        {
            var products = await db.Products
                .Where(p => command.Lines.Select(l => l.ProductId).Contains(p.Id))
                .ToDictionaryAsync(p => p.Id, ct);

            var order = Order.Create(command.CustomerId);
            foreach (var line in command.Lines)
            {
                if (!products.TryGetValue(line.ProductId, out var product))
                    return Result<Guid>.Failure($"Ismeretlen term\xE9k: {line.ProductId}");
                order.AddItem(product, line.Quantity);
            }

            db.Orders.Add(order);
            await db.SaveChangesAsync(ct);
            await publisher.Publish(new OrderPlaced(order.Id, order.Total), ct);

            return Result<Guid>.Success(order.Id);
        }
    }

    public class Endpoint : IEndpoint
    {
        public void Map(IEndpointRouteBuilder app) => app
            .MapPost("/orders", async (Command command, ISender sender, CancellationToken ct) =>
            {
                var result = await sender.Send(command, ct);
                return result.IsSuccess
                    ? TypedResults.Created($"/orders/{result.Value}", result.Value)
                    : TypedResults.BadRequest(result.Error);
            })
            .WithTags("Orders")
            .RequireAuthorization("orders:write");
    }
}
\`\`\`

Az \`IEndpoint\` interf\xE9szt egy egyszer\u0171 assembly-scan regisztr\xE1lja, \xEDgy nem kell minden szeletet k\xE9zzel bek\xF6tni a \`Program.cs\`-be:

\`\`\`csharp
public interface IEndpoint { void Map(IEndpointRouteBuilder app); }

public static class EndpointExtensions
{
    public static IServiceCollection AddEndpoints(this IServiceCollection services, Assembly assembly)
    {
        var descriptors = assembly.DefinedTypes
            .Where(t => t is { IsAbstract: false, IsInterface: false } && t.IsAssignableTo(typeof(IEndpoint)))
            .Select(t => ServiceDescriptor.Transient(typeof(IEndpoint), t));
        services.TryAddEnumerable(descriptors);
        return services;
    }

    public static IApplicationBuilder MapEndpoints(this WebApplication app)
    {
        foreach (var endpoint in app.Services.GetRequiredService<IEnumerable<IEndpoint>>())
            endpoint.Map(app);
        return app;
    }
}
\`\`\`

**Vez\xE9relvek:**

- **A csatol\xE1s ir\xE1nya sz\xE1m\xEDt.** Szeleten bel\xFCl nyugodtan lehet "rendetlens\xE9g" (a handler k\xF6zvetlen\xFCl a \`DbContext\`-et haszn\xE1lja); szeletek k\xF6z\xF6tt viszont szigor\xFA a hat\xE1r \u2013 egy szelet ne h\xEDvja k\xF6zvetlen\xFCl egy m\xE1sik szelet handler\xE9t.
- **A megoszt\xE1s legyen sz\xE1nd\xE9kos.** Egy absztrakci\xF3t akkor emelj ki a \`Common\`/\`Domain\` mapp\xE1ba, amikor **harmadszor** ism\xE9tl\u0151dik, nem els\u0151re. A vertical slice tudatosan v\xE1llal n\xE9mi duplik\xE1ci\xF3t a laza csatol\xE1s\xE9rt cser\xE9be.
- **Query \u2260 Command.** A lek\xE9rdez\u0151 szeletekben nem kell repository, aggreg\xE1tum, domain modell \u2013 nyugodtan lehet k\xF6zvetlen EF projekci\xF3 vagy Dapper SQL. A parancs oldalon j\xF6jj\xF6n a gazdag domain modell.
- **Egy\xFCtt \xE9l a Clean Architecture-rel.** Gyakori hibrid: a *domain* r\xE9teg klasszikusan izol\xE1lt, de az *application* r\xE9tegen bel\xFCl feature-mapp\xE1k vannak, use-case-enk\xE9nt.

Mit ker\xFClj el: ne hozz l\xE9tre "Common" szemetesl\xE1d\xE1t, ahov\xE1 minden beker\xFCl; ne tarts fenn \xFCres, mindent \xE1tvezet\u0151 r\xE9teget (\`IOrderService\`, ami csak tov\xE1bbh\xEDv) csak az\xE9rt, mert "\xEDgy szok\xE1s"; ne cs\xFAsszon vissza a strukt\xFAra r\xE9tegekbe (\`Handlers/\`, \`Validators/\`, \`Dtos/\` mapp\xE1k) \u2013 az pontosan az, amit a minta el akart ker\xFClni.

## Modular Monolith \u2013 mikor NE microservice https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/ {#modular-monolith-mikor-ne-microservice}

A mikroszolg\xE1ltat\xE1s nem c\xE9l, hanem eszk\xF6z, aminek jelent\u0151s \xE1ra van: elosztott tranzakci\xF3k, h\xE1l\xF3zati hib\xE1k, verzi\xF3zott szerz\u0151d\xE9sek, observability infrastrukt\xFAra, deployment komplexit\xE1s, nehezebb lok\xE1lis fejleszt\xE9s. A **modular monolith** ugyanazt a modul\xE1ris gondolkod\xE1st (bounded contextek, tiszta hat\xE1rok) adja, de **egy** deployolhat\xF3 egys\xE9gben.

\`\`\`
src/
  App.Host/                 // egyetlen ASP.NET Core alkalmaz\xE1s
  Modules/
    Orders/
      Orders.Public/        // AMIT m\xE1s modul l\xE1that: szerz\u0151d\xE9sek, integration eventek
      Orders.Internal/      // domain, EF Core, handlerek \u2013 m\xE1s modul NEM hivatkozhatja
    Billing/
      Billing.Public/
      Billing.Internal/
  Shared/
    Shared.Kernel/          // val\xF3ban k\xF6z\xF6s primit\xEDvek (Result, Money, Entity \u0151soszt\xE1ly)
\`\`\`

**A modulhat\xE1r kik\xE9nyszer\xEDt\xE9se** a kulcs, k\xFCl\xF6nben csak egy j\xF3l mapp\xE1zott gomb\xF3c lesz bel\u0151le:

- K\xFCl\xF6n projekt (assembly) modulonk\xE9nt, \xE9s csak a \`*.Public\` projektre hivatkozhatnak m\xE1sok.
- K\xFCl\xF6n **s\xE9ma** az adatb\xE1zisban modulonk\xE9nt (\`orders.Orders\`, \`billing.Invoices\`), tiltott a s\xE9ma k\xF6z\xF6tti JOIN \xE9s a m\xE1sik modul t\xE1bl\xE1inak \xEDr\xE1sa.
- Modulok k\xF6z\xF6tti kommunik\xE1ci\xF3 csak in-process \xFCzenetk\xFCld\xE9ssel (MediatR/Wolverine) vagy publikus interf\xE9szen kereszt\xFCl.
- **Architekt\xFAra teszt**, ami elbukik, ha valaki \xE1tl\xE9p egy hat\xE1rt (l\xE1sd "Architekt\xFAra tesztek" fejezet).

El\u0151ny\xF6k: egyetlen tranzakci\xF3, egyszer\u0171 refaktor\xE1l\xE1s, egyszer\u0171 debug \xE9s deploy, nincs h\xE1l\xF3zati hibam\xF3d \u2013 mik\xF6zben a modulhat\xE1rok k\xE9szen \xE1llnak arra, hogy egy modul k\xE9s\u0151bb **kiemelhet\u0151 legyen** k\xFCl\xF6n szolg\xE1ltat\xE1sba (a Strangler Fig fejezet szerint).

Mikor indokolt m\xE9gis mikroszolg\xE1ltat\xE1s: k\xFCl\xF6n sk\xE1l\xE1z\xE1si ig\xE9ny (egy komponens 100\xD7-os terhel\xE9st kap), k\xFCl\xF6n technol\xF3giai stack, k\xFCl\xF6n csapatok f\xFCggetlen release-ciklussal, elt\xE9r\u0151 rendelkez\xE9sre \xE1ll\xE1si/megfelel\u0151s\xE9gi k\xF6vetelm\xE9ny, vagy a szervezet m\xE9rete (Conway-t\xF6rv\xE9ny).

Mit ker\xFClj el: ne kezdj greenfield projektet mikroszolg\xE1ltat\xE1sokkal, ha a domain hat\xE1rai m\xE9g nem tiszt\xE1zottak \u2013 rossz hat\xE1rokat sokkal olcs\xF3bb monolitban jav\xEDtani; ne hozz l\xE9tre "elosztott monolitot" (mikroszolg\xE1ltat\xE1sok, amelyek szinkron l\xE1ncban h\xEDvogatj\xE1k egym\xE1st \xE9s egy\xFCtt kell deployolni \u0151ket) \u2013 ez mindk\xE9t vil\xE1g h\xE1tr\xE1nyait egyes\xEDti.

## .NET Aspire \u2013 helyi orchestration, service discovery, telemetria (.NET Aspire 8.0+ / .NET 8+) https://learn.microsoft.com/dotnet/aspire/get-started/aspire-overview {#net-aspire-helyi-orchestration-service-discovery-telemetria}

*Verzi\xF3: .NET 8-t\xF3l (Aspire 8.0); \xF6n\xE1ll\xF3, .NET verzi\xF3t\xF3l f\xFCggetlen\xEDtett kiad\xE1s: Aspire 9.x.*

A **.NET Aspire** egy opinionated stack t\xF6bb projektb\u0151l \xE1ll\xF3 (jellemz\u0151en microservices) alkalmaz\xE1sok fejleszt\xE9s\xE9hez: k\xF3dban le\xEDrt helyi orchestration, automatikus service discovery, el\u0151re bek\xF6t\xF6tt OpenTelemetry, health check-ek, resilience, valamint egy dashboard, amin a logok, trace-ek \xE9s metrik\xE1k egy helyen l\xE1tszanak. A \`docker-compose.yml\` k\xE9zi karbantart\xE1sa nagyr\xE9szt kiv\xE1lthat\xF3 vele.

**AppHost \u2013 az eg\xE9sz rendszer topol\xF3gi\xE1ja C#-ban:**

\`\`\`csharp
var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres")
    .WithDataVolume()
    .WithPgAdmin()
    .AddDatabase("ordersdb");

var kafka = builder.AddKafka("kafka").WithKafkaUI();
var redis = builder.AddRedis("cache");

var ordersApi = builder.AddProject<Projects.Orders_Api>("orders-api")
    .WithReference(postgres)
    .WithReference(kafka)
    .WithReference(redis)
    .WaitFor(postgres);

var inventoryWorker = builder.AddProject<Projects.Inventory_Worker>("inventory-worker")
    .WithReference(kafka)
    .WaitFor(kafka);

builder.AddNpmApp("frontend", "../frontend", "dev")
    .WithReference(ordersApi)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints();

builder.Build().Run();
\`\`\`

**ServiceDefaults \u2013 minden szolg\xE1ltat\xE1sban k\xF6z\xF6s keresztir\xE1ny\xFA be\xE1ll\xEDt\xE1sok:**

\`\`\`csharp
public static IHostApplicationBuilder AddServiceDefaults(this IHostApplicationBuilder builder)
{
    builder.ConfigureOpenTelemetry();
    builder.AddDefaultHealthChecks();
    builder.Services.AddServiceDiscovery();

    builder.Services.ConfigureHttpClientDefaults(http =>
    {
        http.AddStandardResilienceHandler();   // retry, circuit breaker, timeout \u2013 l\xE1sd Polly fejezet
        http.AddServiceDiscovery();
    });

    return builder;
}
\`\`\`

Ezut\xE1n a szolg\xE1ltat\xE1sok **logikai n\xE9ven** h\xEDvj\xE1k egym\xE1st, nem URL-en:

\`\`\`csharp
builder.Services.AddHttpClient<InventoryClient>(c => c.BaseAddress = new Uri("https+http://inventory-api"));
\`\`\`

A connection stringeket, portokat, k\xF6rnyezeti v\xE1ltoz\xF3kat az AppHost injekt\xE1lja \u2013 lok\xE1lisan a kont\xE9nerekhez, \xE9les k\xF6rnyezetben (Azure Container Apps, Kubernetes az Aspire manifest/\`aspirate\` eszk\xF6zzel) a val\xF3s er\u0151forr\xE1sokhoz.

Mikor \xE9rdemes haszn\xE1lni: 3+ projektb\u0151l \xE1ll\xF3 megold\xE1sokn\xE1l, ahol a lok\xE1lis futtat\xE1shoz t\xF6bb infrastrukt\xFAra-elem (adatb\xE1zis, broker, cache) kell; ha az onboarding ideje ("F5 \xE9s fut az eg\xE9sz rendszer") fontos; ha egys\xE9ges observability alapot szeretn\xE9l mindenhol.

Mit ker\xFClj el: ne tekintsd teljes \xE9rt\xE9k\u0171 \xE9les orchestr\xE1tornak \u2013 a produkci\xF3s futtat\xE1s tov\xE1bbra is Kubernetes/Container Apps; ne tegy\xE9l \xFCzleti logik\xE1t az AppHost projektbe; ne k\xF6sd magad hozz\xE1 szorosan a domain k\xF3db\xF3l (az Aspire infrastrukt\xFAra-szint\u0171 eszk\xF6z).

## OpenTelemetry \u2013 distributed tracing, metrik\xE1k, korrel\xE1ci\xF3 (.NET 6+ (OpenTelemetry)) https://learn.microsoft.com/dotnet/core/diagnostics/observability-with-otel {#opentelemetry-distributed-tracing-metrikak-korrelacio}

Elosztott rendszerben a logf\xE1jl \xF6nmag\xE1ban kev\xE9s: egy felhaszn\xE1l\xF3i k\xE9r\xE9s 5 szolg\xE1ltat\xE1son \xE9s 2 \xFCzenetsoron megy \xE1t. Az **OpenTelemetry** (OTel) egys\xE9ges, gy\xE1rt\xF3f\xFCggetlen szabv\xE1ny a h\xE1rom jelre: **trace**, **metric**, **log**. A .NET nat\xEDvan t\xE1mogatja (\`System.Diagnostics.Activity\` = OTel span, \`System.Diagnostics.Metrics.Meter\` = OTel metrika).

\`\`\`bash
dotnet add package OpenTelemetry.Extensions.Hosting
dotnet add package OpenTelemetry.Instrumentation.AspNetCore
dotnet add package OpenTelemetry.Instrumentation.Http
dotnet add package OpenTelemetry.Instrumentation.EntityFrameworkCore
dotnet add package OpenTelemetry.Exporter.OpenTelemetryProtocol
\`\`\`

\`\`\`csharp
builder.Services.AddOpenTelemetry()
    .ConfigureResource(r => r.AddService(
        serviceName: builder.Environment.ApplicationName,
        serviceVersion: typeof(Program).Assembly.GetName().Version?.ToString()))
    .WithTracing(tracing => tracing
        .AddAspNetCoreInstrumentation(o => o.RecordException = true)
        .AddHttpClientInstrumentation()
        .AddEntityFrameworkCoreInstrumentation(o => o.SetDbStatementForText = true)
        .AddSource("MassTransit")                 // vagy "Confluent.Kafka", saj\xE1t ActivitySource-ok
        .AddSource(DiagnosticsConfig.ActivitySource.Name)
        .AddOtlpExporter())
    .WithMetrics(metrics => metrics
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddRuntimeInstrumentation()               // GC, thread pool, exception r\xE1ta
        .AddMeter(DiagnosticsConfig.Meter.Name)
        .AddOtlpExporter());

builder.Logging.AddOpenTelemetry(o =>
{
    o.IncludeScopes = true;
    o.IncludeFormattedMessage = true;
    o.AddOtlpExporter();
});
\`\`\`

**Saj\xE1t span \xE9s \xFCzleti metrika:**

\`\`\`csharp
public static class DiagnosticsConfig
{
    public const string ServiceName = "orders-api";
    public static readonly ActivitySource ActivitySource = new(ServiceName);
    public static readonly Meter Meter = new(ServiceName);

    public static readonly Counter<long> OrdersPlaced =
        Meter.CreateCounter<long>("orders.placed", unit: "{order}", description: "Leadott rendel\xE9sek sz\xE1ma");

    public static readonly Histogram<double> OrderValue =
        Meter.CreateHistogram<double>("orders.value", unit: "HUF");
}

public async Task<Guid> PlaceOrderAsync(PlaceOrder command, CancellationToken ct)
{
    using var activity = DiagnosticsConfig.ActivitySource.StartActivity("PlaceOrder");
    activity?.SetTag("customer.id", command.CustomerId);
    activity?.SetTag("order.line_count", command.Lines.Count);

    try
    {
        var order = await _handler.HandleAsync(command, ct);

        DiagnosticsConfig.OrdersPlaced.Add(1, new KeyValuePair<string, object?>("channel", command.Channel));
        DiagnosticsConfig.OrderValue.Record((double)order.Total);
        activity?.SetStatus(ActivityStatusCode.Ok);

        return order.Id;
    }
    catch (Exception ex)
    {
        activity?.SetStatus(ActivityStatusCode.Error, ex.Message);
        activity?.AddException(ex);
        throw;
    }
}
\`\`\`

**Korrel\xE1ci\xF3 \xFCzenetsoron \xE1t.** A trace context (W3C \`traceparent\`) HTTP-n automatikusan utazik; brokeren kereszt\xFCl az \xFCzenet **fejl\xE9c\xE9ben** kell \xE1tvinni. A MassTransit \xE9s a Wolverine ezt mag\xE1t\xF3l megteszi; nyers Confluent.Kafka haszn\xE1latakor manu\xE1lisan kell propag\xE1lni (\`Propagators.DefaultTextMapPropagator.Inject/Extract\`), k\xFCl\xF6nben a trace elszakad a fogyaszt\xF3n\xE1l.

**Log \xE9s trace \xF6sszek\xF6t\xE9se.** Serilog eset\xE9n az enricher beemeli a \`TraceId\`/\`SpanId\` mez\u0151ket, \xEDgy a log \xE9s a trace kereshet\u0151en \xF6sszekapcsol\xF3dik:

\`\`\`csharp
.Enrich.WithSpan()
.Enrich.FromLogContext()
\`\`\`

Legjobb gyakorlatok: a metrika-c\xEDmk\xE9k (tag) **kis kardinalit\xE1s\xFAak** legyenek (st\xE1tusz, csatorna, v\xE9gpont neve \u2013 **soha nem** userId vagy orderId, mert az felrobbantja a metrikat\xE1rat); \xE9les k\xF6rnyezetben \xE1ll\xEDts be **sampling**-et (pl. \`ParentBasedSampler\` + ar\xE1nyos mintav\xE9tel), a hib\xE1s k\xE9r\xE9seket viszont mindig mint\xE1zd; a \`RecordException\` \xE9s a struktur\xE1lt log (l\xE1sd "Struktur\xE1lt logol\xE1s" fejezet) egy\xFCtt adja a teljes k\xE9pet.

Mit ker\xFClj el: ne logolj szem\xE9lyes adatot vagy titkot span attrib\xFAtumba; ne \xEDrj saj\xE1t, k\xE9zi korrel\xE1ci\xF3s ID mechanizmust, ha az \`Activity.Current.TraceId\` m\xE1r megvan; ne kapcsold be a teljes SQL statement r\xF6gz\xEDt\xE9st \xE9les k\xF6rnyezetben \xE1tgondol\xE1s n\xE9lk\xFCl (\xE9rz\xE9keny adat + adatmennyis\xE9g).

## Polly v8 \xE9s Microsoft.Extensions.Resilience (Microsoft.Extensions.Resilience: .NET 8+) https://learn.microsoft.com/dotnet/core/resilience/ {#polly-v8-es-microsoft-extensions-resilience}

*Verzi\xF3: Polly v8 / \`Microsoft.Extensions.Http.Resilience\`: .NET 8-t\xF3l.*

A "HttpClientFactory \xE9s Polly (resilience)" fejezet m\xE1r a Polly v8 / \`Microsoft.Extensions.Http.Resilience\` API-t mutatja (\`AddResilienceHandler\`). Ez a fejezet a k\xE9sz **standard** pipeline-t (\`AddStandardResilienceHandler\`) \xE9s a n\xE9vvel ell\xE1tott, nem csak HTTP-hez haszn\xE1lhat\xF3 \`ResiliencePipeline\`-okat r\xE9szletezi.

\`\`\`bash
dotnet add package Microsoft.Extensions.Http.Resilience
\`\`\`

**A "standard" pipeline \u2013 ez az esetek 90%-\xE1ra el\xE9g:**

\`\`\`csharp
builder.Services.AddHttpClient<InventoryClient>(c => c.BaseAddress = new Uri("https://inventory"))
    .AddStandardResilienceHandler(options =>
    {
        options.Retry.MaxRetryAttempts = 3;
        options.Retry.BackoffType = DelayBackoffType.Exponential;
        options.Retry.UseJitter = true;                                   // thundering herd elker\xFCl\xE9se
        options.AttemptTimeout.Timeout = TimeSpan.FromSeconds(5);         // egy pr\xF3b\xE1lkoz\xE1s
        options.TotalRequestTimeout.Timeout = TimeSpan.FromSeconds(30);   // az eg\xE9sz m\u0171velet
        options.CircuitBreaker.FailureRatio = 0.3;
        options.CircuitBreaker.SamplingDuration = TimeSpan.FromSeconds(30);
        options.CircuitBreaker.BreakDuration = TimeSpan.FromSeconds(15);
    });
\`\`\`

A standard handler sorrendje fixen: **rate limiter \u2192 total timeout \u2192 retry \u2192 circuit breaker \u2192 attempt timeout**. A sorrend a Microsoft aj\xE1nl\xE1s\xE1t k\xF6veti: az attempt timeout a legbels\u0151 (egy pr\xF3b\xE1lkoz\xE1s), a total timeout a retry-kat is lefedi; a circuit breaker a retry *alatt* van, ez\xE9rt nyitott \xE1ramk\xF6r eset\xE9n a retry pr\xF3b\xE1lkoz\xE1sok a CB d\xF6nt\xE9s\xE9t kapj\xE1k (nem \u201Eelker\xFClik\u201D a CB-t).

**Saj\xE1t, n\xE9vvel ell\xE1tott pipeline (nem csak HTTP-hez):**

\`\`\`csharp
builder.Services.AddResiliencePipeline("kafka-publish", pipeline =>
{
    pipeline
        .AddRetry(new RetryStrategyOptions
        {
            ShouldHandle = new PredicateBuilder().Handle<KafkaException>(),
            MaxRetryAttempts = 5,
            Delay = TimeSpan.FromMilliseconds(200),
            BackoffType = DelayBackoffType.Exponential,
            UseJitter = true,
            OnRetry = args =>
            {
                args.Context.Properties.TryGetValue(new ResiliencePropertyKey<ILogger>("logger"), out var log);
                log?.LogWarning(args.Outcome.Exception, "\xDAjrapr\xF3b\xE1lkoz\xE1s #{Attempt}", args.AttemptNumber);
                return default;
            }
        })
        .AddTimeout(TimeSpan.FromSeconds(10));
});

// Haszn\xE1lat
public class KafkaPublisher(ResiliencePipelineProvider<string> provider)
{
    public async Task PublishAsync(string topic, string payload, CancellationToken ct)
    {
        var pipeline = provider.GetPipeline("kafka-publish");
        await pipeline.ExecuteAsync(async token => await _producer.ProduceAsync(topic, payload, token), ct);
    }
}
\`\`\`

**Hedging** \u2013 ha egy h\xEDv\xE1s lass\xFA, p\xE1rhuzamosan ind\xEDt egy m\xE1sodikat, \xE9s az els\u0151k\xE9nt meg\xE9rkez\u0151 v\xE1laszt haszn\xE1lja. Farok-latencia (p99) cs\xF6kkent\xE9s\xE9re val\xF3, **kiz\xE1r\xF3lag idempotens** m\u0171veletekn\xE9l:

\`\`\`csharp
.AddHedging(new HttpHedgingStrategyOptions { MaxHedgedAttempts = 2, Delay = TimeSpan.FromSeconds(1) })
\`\`\`

Legjobb gyakorlatok: mindig legyen **timeout** \u2013 retry timeout n\xE9lk\xFCl csak sokszorozza a beragad\xE1st; **jitter** n\xE9lk\xFCl a retry-ok szinkroniz\xE1l\xF3dnak \xE9s lavin\xE1t okoznak; a circuit breaker per-endpoint (nem glob\xE1lisan) figyeljen; a resilience pipeline telemetri\xE1ja automatikusan OTel-be ker\xFCl, haszn\xE1ld riaszt\xE1shoz.

Mit ker\xFClj el: ne retry-olj nem idempotens m\u0171veletet (POST fizet\xE9s) idempotencia-kulcs n\xE9lk\xFCl (l\xE1sd "Idempotency Pattern" fejezet); ne retry-olj 4xx \xFCzleti hib\xE1n (400, 404, 422) \u2013 az nem lesz sikeresebb \xF6t\xF6dj\xE9re sem; ne \xE9p\xEDts t\xF6bb egym\xE1sba \xE1gyazott retry-r\xE9teget (kliens + gateway + service), mert a pr\xF3b\xE1lkoz\xE1sok sz\xE1ma szorz\xF3dik.

## HybridCache \xE9s elosztott gyors\xEDt\xF3t\xE1r (HybridCache: .NET 9+) https://learn.microsoft.com/aspnet/core/performance/caching/hybrid {#hybridcache-es-elosztott-gyorsitotar}

*Verzi\xF3: .NET 9-t\u0151l (\`Microsoft.Extensions.Caching.Hybrid\`).*

A .NET 9-ben megjelent **HybridCache** egyes\xEDti az in-memory (L1) \xE9s az elosztott (L2, tipikusan Redis) cache-t, \xE9s megoldja a klasszikus \`IDistributedCache\` k\xE9t nagy gyenges\xE9g\xE9t: a **stampede** (cache miss eset\xE9n egyszerre t\xF6bb sz\xE1l sz\xE1molja ki ugyanazt) probl\xE9m\xE1t \xE9s a manu\xE1lis szerializ\xE1ci\xF3t.

\`\`\`bash
dotnet add package Microsoft.Extensions.Caching.Hybrid
dotnet add package Microsoft.Extensions.Caching.StackExchangeRedis
\`\`\`

\`\`\`csharp
builder.Services.AddStackExchangeRedisCache(o => o.Configuration = builder.Configuration["Redis:ConnectionString"]);

builder.Services.AddHybridCache(options =>
{
    options.DefaultEntryOptions = new HybridCacheEntryOptions
    {
        Expiration = TimeSpan.FromMinutes(10),       // L2 (elosztott)
        LocalCacheExpiration = TimeSpan.FromMinutes(2) // L1 (mem\xF3ria)
    };
    options.MaximumPayloadBytes = 1024 * 1024;
});
\`\`\`

\`\`\`csharp
public class ProductReader(HybridCache cache, AppDbContext db)
{
    public async Task<ProductDto?> GetAsync(Guid id, CancellationToken ct) =>
        await cache.GetOrCreateAsync(
            $"product:{id}",
            factory: async token => await db.Products
                .Where(p => p.Id == id)
                .Select(p => new ProductDto(p.Id, p.Name, p.Price))
                .FirstOrDefaultAsync(token),
            tags: ["products", $"product:{id}"],
            cancellationToken: ct);

    public async Task InvalidateAsync(Guid id, CancellationToken ct) =>
        await cache.RemoveByTagAsync($"product:{id}", ct);
}
\`\`\`

**Cache-strat\xE9gi\xE1k \xE9s mikor melyik:**

| Strat\xE9gia | Le\xEDr\xE1s | Mikor |
|---|---|---|
| Cache-aside (lazy) | olvas\xE1skor t\xF6lt, \xEDr\xE1skor invalid\xE1l | \xE1ltal\xE1nos eset, HybridCache alap\xE9rtelmez\xE9s |
| Write-through | \xEDr\xE1skor a cache is friss\xFCl | ha a friss adat azonnal kell |
| Read-through | a cache maga t\xF6lt a forr\xE1sb\xF3l | ha a hozz\xE1f\xE9r\xE9s egys\xE9ges\xEDthet\u0151 |
| Refresh-ahead | lej\xE1rat el\u0151tt a h\xE1tt\xE9rben friss\xEDt | dr\xE1ga, gyakran olvasott adat |

**Invalid\xE1ci\xF3 elosztott k\xF6rnyezetben.** T\xF6bb p\xE9ld\xE1ny eset\xE9n a lok\xE1lis L1 cache-ek nem tudnak egym\xE1s invalid\xE1l\xE1s\xE1r\xF3l. Megold\xE1s: r\xF6vid L1 lej\xE1rat (percek), vagy Redis pub/sub alap\xFA invalid\xE1ci\xF3s \xFCzenet, amit minden p\xE9ld\xE1ny feldolgoz.

**Mit \xE9rdemes cache-elni:** ritk\xE1n v\xE1ltoz\xF3, gyakran olvasott, dr\xE1g\xE1n el\u0151\xE1ll\xEDthat\xF3 adatot (t\xF6rzsadatok, konfigur\xE1ci\xF3, jogosults\xE1gi szab\xE1lyok, k\xFCls\u0151 API v\xE1laszai). **Mit nem:** felhaszn\xE1l\xF3-specifikus, gyorsan v\xE1ltoz\xF3, vagy jogi szempontb\xF3l mindig friss adatot ig\xE9nyl\u0151 tartalmat.

Mit ker\xFClj el: ne cache-elj kulcs n\xE9lk\xFCl tenant/felhaszn\xE1l\xF3-specifikus adatot (adatsziv\xE1rg\xE1s m\xE1s tenant fel\xE9 \u2013 a cache kulcsba mindig menjen bele a tenant/user azonos\xEDt\xF3, ha relev\xE1ns); ne tegy\xE9l a cache-be nagy objektumgr\xE1fot; ne feledd, hogy a cache **nem** adatb\xE1zis \u2013 legyen a rendszer m\u0171k\xF6d\u0151k\xE9pes akkor is, ha a cache \xFCres vagy nem el\xE9rhet\u0151.

## Rate limiting \xE9s Output Caching (Rate limiting: .NET 7+ \xB7 Output caching: .NET 7+) https://learn.microsoft.com/aspnet/core/performance/rate-limit {#rate-limiting-es-output-caching}

*Verzi\xF3: Rate limiting middleware: .NET 7; Output Caching: .NET 7 (tag alap\xFA invalid\xE1l\xE1s: .NET 8).*

**Rate limiting** (.NET 7+ be\xE9p\xEDtett middleware) \u2013 v\xE9delem a t\xFAlterhel\xE9s \xE9s a vissza\xE9l\xE9s ellen. N\xE9gy algoritmus k\xF6z\xFCl lehet v\xE1lasztani:

\`\`\`csharp
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

    // Fix ablak: egyszer\u0171, de ablakhat\xE1ron dupl\xE1z\xF3dhat a terhel\xE9s
    options.AddFixedWindowLimiter("fixed", o =>
    {
        o.PermitLimit = 100;
        o.Window = TimeSpan.FromMinutes(1);
        o.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        o.QueueLimit = 10;
    });

    // Token bucket: megengedi a r\xF6vid cs\xFAcsokat (burst)
    options.AddTokenBucketLimiter("burst", o =>
    {
        o.TokenLimit = 100;
        o.TokensPerPeriod = 20;
        o.ReplenishmentPeriod = TimeSpan.FromSeconds(10);
    });

    // Egyidej\u0171 k\xE9r\xE9sek korl\xE1toz\xE1sa (dr\xE1ga v\xE9gpontokra)
    options.AddConcurrencyLimiter("expensive", o => { o.PermitLimit = 5; o.QueueLimit = 20; });

    // Part\xEDcion\xE1l\xE1s felhaszn\xE1l\xF3nk\xE9nt / API kulcsonk\xE9nt
    options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
        RateLimitPartition.GetSlidingWindowLimiter(
            partitionKey: context.User.FindFirst("sub")?.Value
                          ?? context.Connection.RemoteIpAddress?.ToString()
                          ?? "anonymous",
            factory: _ => new SlidingWindowRateLimiterOptions
            {
                PermitLimit = 300, Window = TimeSpan.FromMinutes(1), SegmentsPerWindow = 6
            }));

    options.OnRejected = async (context, ct) =>
    {
        if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var retryAfter))
            context.HttpContext.Response.Headers.RetryAfter = ((int)retryAfter.TotalSeconds).ToString();
        await context.HttpContext.Response.WriteAsync("T\xFAl sok k\xE9r\xE9s. Pr\xF3b\xE1lja \xFAjra k\xE9s\u0151bb.", ct);
    };
});

app.UseRateLimiter();
app.MapGet("/reports/heavy", GenerateReport).RequireRateLimiting("expensive");
\`\`\`

**Output Caching** (.NET 7+) \u2013 a *v\xE1lasz* gyors\xEDt\xF3t\xE1raz\xE1sa szerveroldalon, a \`ResponseCaching\`-gel ellent\xE9tben szerver \xE1ltal vez\xE9relt, taggelhet\u0151 \xE9s programozottan invalid\xE1lhat\xF3:

\`\`\`csharp
builder.Services.AddOutputCache(options =>
{
    options.AddBasePolicy(b => b.Expire(TimeSpan.FromSeconds(30)));
    options.AddPolicy("products", b => b
        .Expire(TimeSpan.FromMinutes(5))
        .SetVaryByQuery("page", "pageSize", "category")
        .Tag("products"));
});

app.UseOutputCache();

app.MapGet("/products", GetProducts).CacheOutput("products");

// C\xE9lzott invalid\xE1l\xE1s \xEDr\xE1skor
app.MapPost("/products", async (CreateProduct cmd, ISender sender, IOutputCacheStore cacheStore, CancellationToken ct) =>
{
    var id = await sender.Send(cmd, ct);
    await cacheStore.EvictByTagAsync("products", ct);
    return TypedResults.Created($"/products/{id}", id);
});
\`\`\`

Legjobb gyakorlatok: a rate limitet felhaszn\xE1l\xF3/API-kulcs szerint particion\xE1ld, ne glob\xE1lisan; k\xFCldj \`Retry-After\` fejl\xE9cet; a limitet a gateway \xE9s az alkalmaz\xE1s szintj\xE9n is \xE9rdemes megfontolni; az output cache **csak** anonim vagy explicit m\xF3don \`VaryBy\`-jal elk\xFCl\xF6n\xEDtett tartalomra val\xF3.

Mit ker\xFClj el: ne cache-elj kimenetet autentik\xE1lt, felhaszn\xE1l\xF3-specifikus v\xE9gponton \`VaryBy\` n\xE9lk\xFCl; ne \xE1ll\xEDts be olyan szigor\xFA limitet, ami a saj\xE1t bels\u0151 szolg\xE1ltat\xE1saidat is kiz\xE1rja (a bels\u0151 h\xEDv\xF3knak k\xFCl\xF6n policy vagy kiz\xE1r\xE1s kell).

## Keyed Services \xE9s halad\xF3 DI (.NET 8+) https://learn.microsoft.com/dotnet/core/extensions/dependency-injection#keyed-services {#keyed-services-es-halado-di-net-8}

*Verzi\xF3: .NET 8-t\xF3l (\`AddKeyedScoped\`, \`[FromKeyedServices]\`).*

A .NET 8 \xF3ta a be\xE9p\xEDtett DI kont\xE9ner is t\xE1mogatja a **kulcsolt regisztr\xE1ci\xF3t** \u2013 az a funkci\xF3, ami\xE9rt kor\xE1bban gyakran Autofacra kellett v\xE1ltani (l\xE1sd "Autofac Benefits" fejezet).

\`\`\`csharp
builder.Services.AddKeyedScoped<IPaymentProvider, StripePaymentProvider>("stripe");
builder.Services.AddKeyedScoped<IPaymentProvider, BarionPaymentProvider>("barion");
builder.Services.AddKeyedSingleton<INotificationSender, EmailSender>("email");

// Konstruktor injekt\xE1l\xE1s attrib\xFAtummal
public class CheckoutService([FromKeyedServices("stripe")] IPaymentProvider payment)
{
    public Task PayAsync(Order order, CancellationToken ct) => payment.ChargeAsync(order, ct);
}

// Fut\xE1sidej\u0171 felold\xE1s (amikor a kulcs csak fut\xE1sid\u0151ben der\xFCl ki)
public class PaymentRouter(IServiceProvider serviceProvider)
{
    public IPaymentProvider Resolve(string providerKey) =>
        serviceProvider.GetRequiredKeyedService<IPaymentProvider>(providerKey);
}

// Minimal API param\xE9terben is m\u0171k\xF6dik
app.MapPost("/pay/{provider}", async (string provider,
    [FromKeyedServices("stripe")] IPaymentProvider stripe, PaymentRequest req) => { /* ... */ });
\`\`\`

**Tov\xE1bbi, napi szinten hasznos DI technik\xE1k:**

\`\`\`csharp
// T\xF6bb implement\xE1ci\xF3 egyszerre (pipeline, plugin, szab\xE1lyl\xE1nc)
builder.Services.AddScoped<IValidationRule, StockRule>();
builder.Services.AddScoped<IValidationRule, CreditLimitRule>();
public class Validator(IEnumerable<IValidationRule> rules) { /* mindegyiket lefuttatja */ }

// TryAdd: csak akkor regisztr\xE1l, ha m\xE9g nincs (k\xF6nyvt\xE1rak alap\xE9rtelmez\xE9seihez)
services.TryAddScoped<IClock, SystemClock>();

// Dekor\xE1l\xE1s Scrutorral (l\xE1sd "Decorator Pattern" fejezet)
services.Decorate<IOrderService, CachingOrderServiceDecorator>();

// Factory delegate, ha fut\xE1sidej\u0171 param\xE9ter kell
services.AddScoped<Func<string, IReportGenerator>>(sp => format => format switch
{
    "pdf" => sp.GetRequiredService<PdfReportGenerator>(),
    "xlsx" => sp.GetRequiredService<ExcelReportGenerator>(),
    _ => throw new NotSupportedException(format)
});
\`\`\`

**\xC9lettartam-hib\xE1k felismer\xE9se.** A leggyakoribb hiba a **captive dependency**: egy Singleton szolg\xE1ltat\xE1s Scoped f\xFCgg\u0151s\xE9get kap, ami \xEDgy \xF6r\xF6kre "bennragad". Fejleszt\xE9skor kapcsold be az \xE9rv\xE9nyes\xEDt\xE9st:

\`\`\`csharp
builder.Host.UseDefaultServiceProvider((context, options) =>
{
    options.ValidateScopes = true;             // fut\xE1sidej\u0171 ellen\u0151rz\xE9s
    options.ValidateOnBuild = context.HostingEnvironment.IsDevelopment(); // indul\xE1skor bukik, nem els\u0151 k\xE9r\xE9sn\xE9l
});
\`\`\`

Mit ker\xFClj el: ne haszn\xE1ld a \`IServiceProvider\`-t service locatork\xE9nt az \xFCzleti k\xF3dban (a konstruktor injekt\xE1l\xE1s olvashat\xF3bb \xE9s tesztelhet\u0151bb); Singletonb\xF3l Scoped f\xFCgg\u0151s\xE9get csak \`IServiceScopeFactory\`-val oldj fel; ne regisztr\xE1lj \`DbContext\`-et Singletonk\xE9nt.

## FluentValidation \xE9s valid\xE1ci\xF3 a pipeline-ban https://learn.microsoft.com/aspnet/core/mvc/models/validation {#fluentvalidation-es-validacio-a-pipeline-ban}

A valid\xE1ci\xF3t \xE9rdemes r\xE9tegenk\xE9nt elk\xFCl\xF6n\xEDteni: **input valid\xE1ci\xF3** (form\xE1tum, k\xF6telez\u0151s\xE9g, tartom\xE1ny) a k\xE9r\xE9s bel\xE9p\xE9sekor, **\xFCzleti szab\xE1ly** (invari\xE1ns) a domainben.

\`\`\`bash
dotnet add package FluentValidation.DependencyInjectionExtensions
\`\`\`

\`\`\`csharp
public class CreateOrderValidator : AbstractValidator<CreateOrderCommand>
{
    public CreateOrderValidator(ICustomerRepository customers)
    {
        RuleFor(x => x.CustomerId)
            .NotEmpty()
            .MustAsync(async (id, ct) => await customers.ExistsAsync(id, ct))
            .WithMessage("A megadott \xFCgyf\xE9l nem l\xE9tezik.");

        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Lines).NotEmpty();
        RuleForEach(x => x.Lines).SetValidator(new OrderLineValidator());

        // Felt\xE9teles szab\xE1ly
        When(x => x.PaymentMethod == PaymentMethod.CreditCard, () =>
            RuleFor(x => x.CardToken).NotEmpty().WithMessage("K\xE1rty\xE1s fizet\xE9shez token sz\xFCks\xE9ges."));
    }
}
\`\`\`

**MediatR pipeline behavior**, hogy ne kelljen minden handlerben k\xE9zzel valid\xE1lni:

\`\`\`csharp
public class ValidationBehavior<TRequest, TResponse>(IEnumerable<IValidator<TRequest>> validators)
    : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        if (!validators.Any()) return await next();

        var context = new ValidationContext<TRequest>(request);
        var results = await Task.WhenAll(validators.Select(v => v.ValidateAsync(context, cancellationToken)));
        var failures = results.SelectMany(r => r.Errors).Where(f => f is not null).ToList();

        if (failures.Count != 0) throw new ValidationException(failures);

        return await next();
    }
}

builder.Services.AddValidatorsFromAssemblyContaining<CreateOrderValidator>();
builder.Services.AddMediatR(c => c.RegisterServicesFromAssemblyContaining<Program>()
    .AddOpenBehavior(typeof(ValidationBehavior<,>)));
\`\`\`

A \`ValidationException\`-t a glob\xE1lis kiv\xE9telkezel\u0151 ford\xEDtja \`ValidationProblemDetails\`-re (l\xE1sd "Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails" fejezet), \xEDgy az API konzisztens, RFC 9457 szerinti hibav\xE1laszt ad:

\`\`\`csharp
public class ValidationExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)
    {
        if (exception is not ValidationException validationException) return false;

        var errors = validationException.Errors
            .GroupBy(e => e.PropertyName)
            .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());

        await Results.ValidationProblem(errors, title: "\xC9rv\xE9nytelen k\xE9r\xE9s").ExecuteAsync(context);
        return true;
    }
}
\`\`\`

Minimal API-n\xE1l a \`MinimalApis.Extensions\` vagy egy egyszer\u0171 endpoint filter (l\xE1sd "Minimal API halad\xF3 szint" fejezet) ugyanezt adja pipeline behavior n\xE9lk\xFCl.

Legjobb gyakorlatok: egy valid\xE1tor egy k\xE9r\xE9shez; az **aszinkron, adatb\xE1zist \xE9rint\u0151** szab\xE1lyokat \xF3vatosan haszn\xE1ld (ez plusz k\xF6r az adatb\xE1zis fel\xE9, \xE9s race conditionre nyitott \u2013 a v\xE9gs\u0151 ellen\u0151rz\xE9s az adatb\xE1zis constraintje); a hiba\xFCzenetek legyenek felhaszn\xE1l\xF3nak sz\xF3l\xF3ak \xE9s lokaliz\xE1lhat\xF3ak.

Mit ker\xFClj el: ne duplik\xE1ld a domain invari\xE1nsokat a valid\xE1torban (a domain \u0151rizze a saj\xE1t szab\xE1lyait, a valid\xE1tor a bemenet form\xE1j\xE1t); ne v\xE9gezz valid\xE1ci\xF3t a controllerben k\xE9zzel, ha van pipeline; ne sziv\xE1rogtass ki bels\u0151 mez\u0151neveket a hibav\xE1laszban.

## Objektum-mapping: Mapperly vs. AutoMapper {#objektum-mapping-mapperly-vs-automapper}

*Verzi\xF3: Mapperly (forr\xE1sk\xF3d-gener\xE1tor): .NET 6+ / C# 9+ projektekben.*

A DTO \u2194 entit\xE1s lek\xE9pez\xE9s napi feladat. Az **AutoMapper** reflexi\xF3-alap\xFA (fut\xE1sidej\u0171 konfigur\xE1ci\xF3, csendben elronthat\xF3), a **Mapperly** ezzel szemben **source generator**: ford\xEDt\xE1skor gener\xE1l sima C# hozz\xE1rendel\u0151 k\xF3dot, teh\xE1t nulla fut\xE1sidej\u0171 overhead, teljes IntelliSense \xE9s **ford\xEDt\xE1si idej\u0171 hibajelz\xE9s**, ha egy mez\u0151 nem k\xE9pezhet\u0151 le. Az AutoMapper licencmodell-v\xE1ltoz\xE1sa \xF3ta a Mapperly a legn\xE9pesebb alternat\xEDva.

\`\`\`bash
dotnet add package Riok.Mapperly
\`\`\`

\`\`\`csharp
[Mapper]
public partial class OrderMapper
{
    public partial OrderDto ToDto(Order order);

    [MapProperty(nameof(Order.Customer.Name), nameof(OrderDto.CustomerName))]
    [MapperIgnoreSource(nameof(Order.DomainEvents))]
    public partial OrderDetailsDto ToDetailsDto(Order order);

    // Egyedi lek\xE9pez\xE9s: a gener\xE1tor automatikusan felhaszn\xE1lja a megfelel\u0151 t\xEDpusokn\xE1l
    private static string MapMoney(Money money) => $"{money.Amount:N0} {money.Currency}";
}
\`\`\`

A gener\xE1lt k\xF3d olvashat\xF3 \xE9s debuggolhat\xF3 (\`obj/generated\` alatt megn\xE9zhet\u0151), l\xE9nyeg\xE9ben az, amit k\xE9zzel \xEDrn\xE1l:

\`\`\`csharp
public partial OrderDto ToDto(Order order)
{
    return new OrderDto
    {
        Id = order.Id,
        Total = order.Total,
        Status = (OrderStatusDto)order.Status
    };
}
\`\`\`

**Mikor ne mappelj egy\xE1ltal\xE1n.** Lek\xE9rdez\xE9sekn\xE9l a leghat\xE9konyabb, ha az EF Core **k\xF6zvetlen\xFCl a DTO-ra projekt\xE1l** \u2013 \xEDgy csak a sz\xFCks\xE9ges oszlopok j\xF6nnek le az adatb\xE1zisb\xF3l, nincs sem entit\xE1s-materializ\xE1ci\xF3, sem mapping:

\`\`\`csharp
var orders = await db.Orders
    .Where(o => o.CustomerId == customerId)
    .Select(o => new OrderListItemDto(o.Id, o.PlacedAt, o.Total, o.Status))  // SQL-be fordul
    .AsNoTracking()
    .ToListAsync(ct);
\`\`\`

Legjobb gyakorlatok: a **command/write** oldalon ink\xE1bb explicit, k\xE9zzel \xEDrt factory met\xF3dus vagy konstruktor (\`Order.Create(...)\`) \u2013 a domain objektum l\xE9trehoz\xE1sa \xFCzleti m\u0171velet, nem mechanikus m\xE1sol\xE1s; a **query/read** oldalon EF projekci\xF3; a marad\xE9k mechanikus lek\xE9pez\xE9sre Mapperly.

Mit ker\xFClj el: ne mappelj entit\xE1st DTO-ra mem\xF3ri\xE1ban, ha projekci\xF3val is megoldhat\xF3 (felesleges oszlopok \xE9s tracking); ne rejts \xFCzleti logik\xE1t mapping-profilba; ne haszn\xE1lj mappert domain modell **l\xE9trehoz\xE1s\xE1ra** k\xFCls\u0151 bemenetb\u0151l (kiker\xFCli az invari\xE1nsokat).

## Dapper \xE9s hibrid perzisztencia {#dapper-es-hibrid-perzisztencia}

Az EF Core kiv\xE1l\xF3 a **write** oldalon (change tracking, unit of work, domain modell), de \xF6sszetett riportlek\xE9rdez\xE9sekn\xE9l gyakran el\u0151ny\xF6sebb a nyers SQL. A **Dapper** egy v\xE9kony micro-ORM: te \xEDrod az SQL-t, \u0151 elv\xE9gzi a materializ\xE1ci\xF3t.

\`\`\`csharp
public class OrderReportReader(IDbConnectionFactory connectionFactory) : IOrderReportReader
{
    public async Task<IReadOnlyList<MonthlyRevenueDto>> GetMonthlyRevenueAsync(
        int year, CancellationToken cancellationToken)
    {
        const string sql = """
            SELECT   DATEPART(MONTH, o.PlacedAt) AS Month,
                     SUM(o.TotalAmount)          AS Revenue,
                     COUNT(*)                    AS OrderCount
            FROM     Orders o
            WHERE    DATEPART(YEAR, o.PlacedAt) = @Year
              AND    o.Status = @Status
            GROUP BY DATEPART(MONTH, o.PlacedAt)
            ORDER BY Month;
            """;

        using var connection = connectionFactory.Create();
        return (await connection.QueryAsync<MonthlyRevenueDto>(
            new CommandDefinition(sql, new { Year = year, Status = (int)OrderStatus.Completed },
                cancellationToken: cancellationToken))).AsList();
    }
}
\`\`\`

**T\xF6bb eredm\xE9nyhalmaz egy k\xF6rben** (N+1 helyett):

\`\`\`csharp
using var multi = await connection.QueryMultipleAsync(
    "SELECT * FROM Orders WHERE Id = @Id; SELECT * FROM OrderItems WHERE OrderId = @Id;", new { Id = orderId });

var order = await multi.ReadSingleAsync<OrderDto>();
order.Items = (await multi.ReadAsync<OrderItemDto>()).AsList();
\`\`\`

**Hibrid megk\xF6zel\xEDt\xE9s CQRS-sel:** a parancs oldal EF Core + domain modell, a lek\xE9rdez\u0151 oldal Dapper + k\xE9zi SQL. Ugyanaz az adatb\xE1zis, k\xE9t k\xFCl\xF6nb\xF6z\u0151 hozz\xE1f\xE9r\xE9si st\xEDlus, mindegyik ott, ahol er\u0151s. Fontos, hogy ugyanabban a tranzakci\xF3ban a k\xE9t technol\xF3gia is egy\xFCtt tudjon m\u0171k\xF6dni \u2013 ehhez ossz meg kapcsolatot \xE9s tranzakci\xF3t:

\`\`\`csharp
var connection = dbContext.Database.GetDbConnection();
var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();
await connection.ExecuteAsync(sql, parameters, transaction);
\`\`\`

Legjobb gyakorlatok: **mindig param\xE9terezett** lek\xE9rdez\xE9s (SQL injection ellen); a hossz\xFA SQL-eket raw string liter\xE1lban (\`"""\`) tartsd olvashat\xF3an; a lek\xE9rdez\xE9seket a szelet (feature) mapp\xE1j\xE1ban t\xE1rold, ne egy k\xF6zponti "Queries" oszt\xE1lyban; a Dapper-es olvas\xF3kat integr\xE1ci\xF3s teszttel fedd le (Testcontainers, l\xE1sd a k\xF6vetkez\u0151 fejezetet), mert a ford\xEDt\xF3 nem ellen\u0151rzi az SQL-t.

Mit ker\xFClj el: ne \xEDrj Dapperrel \xEDr\xE1si m\u0171veleteket, ha a domain invari\xE1nsokat az EF Core-os aggreg\xE1tum \u0151rzi (kiker\xFCl\xF6d a domain logik\xE1t \xE9s a change trackinget); ne f\u0171zz \xF6ssze SQL-t stringkonkaten\xE1ci\xF3val felhaszn\xE1l\xF3i bemenetb\u0151l; ne m\xE1sold ugyanazt a lek\xE9rdez\xE9st \xF6t helyre.

## Testcontainers \u2013 integr\xE1ci\xF3s tesztek val\xF3s infrastrukt\xFAr\xE1val {#testcontainers-integracios-tesztek-valos-infrastrukturaval}

*Verzi\xF3: Testcontainers for .NET: .NET Standard 2.0+ / .NET 6+ projektekben.*

Az EF Core In-Memory provider (l\xE1sd az azonos c\xEDm\u0171 fejezetet) nem rel\xE1ci\xF3s adatb\xE1zis: nem ismer tranzakci\xF3t, constraintet, raw SQL-t, \xE9s m\xE1sk\xE9pp ford\xEDtja a lek\xE9rdez\xE9seket \u2013 ez\xE9rt a vele \xEDrt teszt hamis biztons\xE1g\xE9rzetet ad. A **Testcontainers** val\xF3di adatb\xE1zist, brokert, Redist ind\xEDt Docker kont\xE9nerben a teszt idej\xE9re, majd eldobja.

\`\`\`bash
dotnet add package Testcontainers.MsSql
dotnet add package Testcontainers.Kafka
dotnet add package Testcontainers.Redis
\`\`\`

\`\`\`csharp
public class IntegrationTestFixture : IAsyncLifetime
{
    private readonly MsSqlContainer _sqlContainer = new MsSqlBuilder()
        .WithImage("mcr.microsoft.com/mssql/server:2022-latest")
        .WithPassword("Str0ng!Passw0rd")
        .Build();

    private readonly RedisContainer _redisContainer = new RedisBuilder().Build();

    private readonly KafkaContainer _kafkaContainer = new KafkaBuilder()
        .WithImage("confluentinc/cfk-kafka:latest")
        .Build();

    public string SqlConnectionString => _sqlContainer.GetConnectionString();
    public string RedisConnectionString => _redisContainer.GetConnectionString();
    public string KafkaBootstrapServers => _kafkaContainer.GetBootstrapAddress();

    public async Task InitializeAsync()
    {
        await Task.WhenAll(_sqlContainer.StartAsync(), _redisContainer.StartAsync(), _kafkaContainer.StartAsync());

        // s\xE9ma felh\xFAz\xE1sa a val\xF3di migr\xE1ci\xF3kkal \u2013 ez maga is teszteli a migr\xE1ci\xF3kat
        var options = new DbContextOptionsBuilder<AppDbContext>().UseSqlServer(SqlConnectionString).Options;
        await using var db = new AppDbContext(options);
        await db.Database.MigrateAsync();
    }

    public async Task DisposeAsync() =>
        await Task.WhenAll(_sqlContainer.DisposeAsync().AsTask(),
                           _redisContainer.DisposeAsync().AsTask(),
                           _kafkaContainer.DisposeAsync().AsTask());
}

[CollectionDefinition(nameof(IntegrationTestCollection))]
public class IntegrationTestCollection : ICollectionFixture<IntegrationTestFixture>;
\`\`\`

A \`CollectionDefinition\` biztos\xEDtja, hogy a kont\xE9nerek **egyszer** induljanak el a teljes tesztoszt\xE1ly-csoportra, ne tesztenk\xE9nt.

**Teszt-elszigetel\xE9s.** Minden teszt tiszta \xE1llapotb\xF3l induljon. K\xE9t bev\xE1lt m\xF3dszer:

\`\`\`csharp
// 1. Respawn: a t\xE1bl\xE1k \xFCr\xEDt\xE9se tesztek k\xF6z\xF6tt (gyors, megtartja a s\xE9m\xE1t)
_respawner = await Respawner.CreateAsync(connectionString, new RespawnerOptions
{
    TablesToIgnore = ["__EFMigrationsHistory"]
});
await _respawner.ResetAsync(connectionString);

// 2. Tranzakci\xF3, amit sosem commitolunk (gyors, de nem m\u0171k\xF6dik, ha a k\xF3d maga is tranzakci\xF3t nyit)
\`\`\`

Legjobb gyakorlatok: a CI pipeline-ban is fusson (a GitHub Actions/Azure DevOps ubuntu runner tud Dockert); r\xF6gz\xEDtsd a kont\xE9ner-image verzi\xF3j\xE1t (ne \`latest\`), k\xFCl\xF6nben a build reproduk\xE1lhatatlan; a lass\xFA integr\xE1ci\xF3s teszteket k\xFCl\xF6n kateg\xF3ri\xE1ba tedd (\`[Trait("Category", "Integration")]\`), hogy a gyors unit tesztek k\xFCl\xF6n futhassanak.

Mit ker\xFClj el: ne \xEDrj minden logik\xE1ra integr\xE1ci\xF3s tesztet \u2013 a piramis alja unit teszt legyen; ne oszd meg az \xE1llapotot tesztek k\xF6z\xF6tt (sorrendf\xFCgg\u0151, "n\xE9ha piros" tesztek); ne haszn\xE1ld az In-Memory providert olyan viselked\xE9s tesztel\xE9s\xE9re, ami adatb\xE1zis-specifikus (tranzakci\xF3, konkurencia, constraint, SQL f\xFCggv\xE9nyek).

## WebApplicationFactory \u2013 API-szint\u0171 integr\xE1ci\xF3s tesztek (ASP.NET Core 2.1+) https://learn.microsoft.com/aspnet/core/test/integration-tests {#webapplicationfactory-api-szintu-integracios-tesztek}

*Verzi\xF3: ASP.NET Core 2.1-t\u0151l (\`Microsoft.AspNetCore.Mvc.Testing\`).*

A \`WebApplicationFactory<TEntryPoint>\` a teljes ASP.NET Core alkalmaz\xE1st elind\xEDtja mem\xF3ri\xE1ban (h\xE1l\xF3zati port n\xE9lk\xFCl), \xEDgy a middleware pipeline, a routing, a modellk\xF6t\xE9s, a sz\u0171r\u0151k, az autentik\xE1ci\xF3 \xE9s a DI is a val\xF3s\xE1gnak megfelel\u0151en fut.

\`\`\`bash
dotnet add package Microsoft.AspNetCore.Mvc.Testing
\`\`\`

\`\`\`csharp
public class OrdersApiFactory(IntegrationTestFixture fixture) : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.UseEnvironment("Testing");

        builder.ConfigureTestServices(services =>
        {
            // val\xF3s adatb\xE1zis (Testcontainers) bek\xF6t\xE9se
            services.RemoveAll<DbContextOptions<AppDbContext>>();
            services.AddDbContext<AppDbContext>(o => o.UseSqlServer(fixture.SqlConnectionString));

            // k\xFCls\u0151, harmadik f\xE9l API kicser\xE9l\xE9se teszt dupl\xE1ra
            services.RemoveAll<IPaymentGateway>();
            services.AddSingleton<IPaymentGateway, FakePaymentGateway>();

            // autentik\xE1ci\xF3 megker\xFCl\xE9se teszt s\xE9m\xE1val
            services.AddAuthentication(defaultScheme: "Test")
                .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>("Test", _ => { });
        });
    }
}

public class TestAuthHandler(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger,
    UrlEncoder encoder) : AuthenticationHandler<AuthenticationSchemeOptions>(options, logger, encoder)
{
    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var claims = new[] { new Claim(ClaimTypes.NameIdentifier, "test-user"), new Claim("scope", "orders:write") };
        var identity = new ClaimsIdentity(claims, "Test");
        var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), "Test");
        return Task.FromResult(AuthenticateResult.Success(ticket));
    }
}
\`\`\`

\`\`\`csharp
[Collection(nameof(IntegrationTestCollection))]
public class PlaceOrderEndpointTests(IntegrationTestFixture fixture) : IAsyncLifetime
{
    private HttpClient _client = null!;
    private OrdersApiFactory _factory = null!;

    public Task InitializeAsync()
    {
        _factory = new OrdersApiFactory(fixture);
        _client = _factory.CreateClient();
        return Task.CompletedTask;
    }

    [Fact]
    public async Task PlaceOrder_WithValidRequest_Returns201AndPersistsOrder()
    {
        var request = new { customerId = Guid.NewGuid(), lines = new[] { new { productId = KnownIds.Product, quantity = 2 } } };

        var response = await _client.PostAsJsonAsync("/orders", request);

        response.StatusCode.Should().Be(HttpStatusCode.Created);
        var orderId = await response.Content.ReadFromJsonAsync<Guid>();

        using var scope = _factory.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        (await db.Orders.FindAsync(orderId)).Should().NotBeNull();
    }

    [Fact]
    public async Task PlaceOrder_WithEmptyLines_Returns400WithProblemDetails()
    {
        var response = await _client.PostAsJsonAsync("/orders", new { customerId = Guid.NewGuid(), lines = Array.Empty<object>() });

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        var problem = await response.Content.ReadFromJsonAsync<ValidationProblemDetails>();
        problem!.Errors.Should().ContainKey("Lines");
    }

    public Task DisposeAsync() { _factory.Dispose(); return Task.CompletedTask; }
}
\`\`\`

Ahhoz, hogy a \`WebApplicationFactory<Program>\` m\u0171k\xF6dj\xF6n top-level statementekkel \xEDrt \`Program.cs\` eset\xE9n, a teszt projektnek l\xE1tnia kell a \`Program\` oszt\xE1lyt:

\`\`\`csharp
// a Program.cs v\xE9g\xE9n
public partial class Program;
// vagy a csproj-ban: <InternalsVisibleTo Include="Orders.Api.Tests" />
\`\`\`

Legjobb gyakorlatok: teszteld azt, ami a v\xE9gponton kereszt\xFCl **megfigyelhet\u0151** (st\xE1tuszk\xF3d, v\xE1lasz body, adatb\xE1zis \xE1llapota, kik\xFCld\xF6tt \xFCzenet), ne az implement\xE1ci\xF3t; a k\xFCls\u0151 integr\xE1ci\xF3kat (fizet\xE9s, email) mindig cser\xE9ld le teszt dupl\xE1ra; a kik\xFCld\xF6tt \xFCzeneteket a MassTransit \`ITestHarness\`-\xE9vel ellen\u0151rizheted (\`harness.Published.Any<OrderPlaced>()\`).

Mit ker\xFClj el: ne ind\xEDts \xFAj factoryt minden tesztmet\xF3dushoz (lass\xFA); ne teszteld a keretrendszert (hogy a \`[Required]\` attrib\xFAtum m\u0171k\xF6dik-e); ne hagyj benne val\xF3s k\xFCls\u0151 h\xE1l\xF3zati h\xEDv\xE1st a tesztben.

## Architekt\xFAra tesztek \u2013 a szab\xE1lyok kik\xE9nyszer\xEDt\xE9se {#architektura-tesztek-a-szabalyok-kikenyszeritese}

Egy Clean Architecture vagy modular monolith akkor marad tiszta, ha a szab\xE1lyokat **a build k\xE9nyszer\xEDti ki**, nem a code review j\xF3 sz\xE1nd\xE9ka. Az architekt\xFAra teszt olyan unit teszt, amely az assembly-k \xE9s t\xEDpusok kapcsolatait ellen\u0151rzi.

\`\`\`bash
dotnet add package NetArchTest.Rules
\`\`\`

\`\`\`csharp
public class ArchitectureTests
{
    private const string Domain = "MyApp.Domain";
    private const string Application = "MyApp.Application";
    private const string Infrastructure = "MyApp.Infrastructure";
    private const string Api = "MyApp.Api";

    [Fact]
    public void Domain_Should_Not_DependOn_AnyOtherLayer()
    {
        var result = Types.InAssembly(typeof(Order).Assembly)
            .ShouldNot()
            .HaveDependencyOnAny(Application, Infrastructure, Api, "Microsoft.EntityFrameworkCore")
            .GetResult();

        result.IsSuccessful.Should().BeTrue(
            $"a Domain r\xE9teg nem f\xFCgghet m\xE1st\xF3l. S\xE9rt\u0151 t\xEDpusok: {string.Join(", ", result.FailingTypeNames ?? [])}");
    }

    [Fact]
    public void Application_Should_Not_DependOn_Infrastructure()
        => Types.InAssembly(typeof(PlaceOrderHandler).Assembly)
            .ShouldNot().HaveDependencyOn(Infrastructure)
            .GetResult().IsSuccessful.Should().BeTrue();

    [Fact]
    public void Handlers_Should_Be_Sealed_And_Named_Correctly()
        => Types.InAssembly(typeof(PlaceOrderHandler).Assembly)
            .That().ImplementInterface(typeof(IRequestHandler<,>))
            .Should().BeSealed().And().HaveNameEndingWith("Handler")
            .GetResult().IsSuccessful.Should().BeTrue();

    [Fact]
    public void Modules_Should_Not_Reference_Each_Others_Internals()
        => Types.InAssembly(typeof(OrdersModule).Assembly)
            .ShouldNot().HaveDependencyOn("MyApp.Modules.Billing.Internal")
            .GetResult().IsSuccessful.Should().BeTrue();

    [Fact]
    public void Entities_Should_Have_Private_Parameterless_Constructor_For_EfCore()
        => Types.InAssembly(typeof(Order).Assembly)
            .That().Inherit(typeof(Entity))
            .Should().MeetCustomRule(new HasPrivateParameterlessConstructorRule())
            .GetResult().IsSuccessful.Should().BeTrue();
}
\`\`\`

Tipikus, \xE9rdemben hasznos szab\xE1lyok: a Domain nem hivatkozhat EF Core-ra vagy ASP.NET Core-ra; a Controller/Endpoint nem hivatkozhat k\xF6zvetlen\xFCl \`DbContext\`-re; minden \`record\` \xFCzenet-szerz\u0151d\xE9s a \`Contracts\` n\xE9vt\xE9rben legyen; nincs \`DateTime.Now\` a domainben (helyette injekt\xE1lt \`TimeProvider\`); minden publikus API-met\xF3dus fogadjon \`CancellationToken\`-t.

Legjobb gyakorlatok: az architekt\xFAra teszt legyen r\xE9sze a CI-nak, \xE9s **bukjon a build**, ha s\xE9r\xFCl a szab\xE1ly; az \xFCzenet a hib\xE1ban mondja meg, *mi\xE9rt* van a szab\xE1ly, ne csak azt, hogy s\xE9r\xFClt; kev\xE9s, de val\xF3ban fontos szab\xE1lyt tarts fenn.

Mit ker\xFClj el: ne \xEDrj tucatnyi trivi\xE1lis elnevez\xE9si szab\xE1lyt, amit senki nem tart be \u2013 az eln\xE9m\xEDtott teszt rosszabb, mint a nem l\xE9tez\u0151; ne k\xE9nyszer\xEDts ki olyan szab\xE1lyt, amit a csapat nem fogadott el k\xF6z\xF6sen.

## Contract testing \u2013 szerz\u0151d\xE9ses tesztek szolg\xE1ltat\xE1sok k\xF6z\xF6tt {#contract-testing-szerzodeses-tesztek-szolgaltatasok-kozott}

Mikroszolg\xE1ltat\xE1sokn\xE1l a legdr\xE1g\xE1bb hiba az, amikor A szolg\xE1ltat\xE1s megv\xE1ltoztatja a v\xE1lasza szerkezet\xE9t, \xE9s B csak \xE9lesben der\xFCl ki, hogy elromlott. Az end-to-end teszt dr\xE1ga, lass\xFA \xE9s t\xF6r\xE9keny; a **consumer-driven contract testing** olcs\xF3bb megold\xE1s: a **fogyaszt\xF3** \xEDrja le, mit v\xE1r el, a **szolg\xE1ltat\xF3** pedig ez ellen ellen\u0151rzi mag\xE1t \u2013 k\xFCl\xF6n-k\xFCl\xF6n, a saj\xE1t pipeline-j\xE1ban.

\`\`\`bash
dotnet add package PactNet
\`\`\`

**Fogyaszt\xF3 oldal \u2013 elv\xE1r\xE1s r\xF6gz\xEDt\xE9se:**

\`\`\`csharp
public class InventoryClientPactTests
{
    private readonly IPactBuilderV4 _pact = Pact.V4("orders-api", "inventory-api",
        new PactConfig { PactDir = "../../../pacts" }).WithHttpInteractions();

    [Fact]
    public async Task GetStock_WhenProductExists_ReturnsAvailableQuantity()
    {
        _pact
            .UponReceiving("egy l\xE9tez\u0151 term\xE9k k\xE9szlet\xE9nek lek\xE9rdez\xE9se")
                .Given("a P-123 term\xE9k l\xE9tezik 5 db k\xE9szlettel")
                .WithRequest(HttpMethod.Get, "/stock/P-123")
                .WithHeader("Accept", "application/json")
            .WillRespond()
                .WithStatus(HttpStatusCode.OK)
                .WithJsonBody(new { productId = "P-123", available = 5 });

        await _pact.VerifyAsync(async ctx =>
        {
            var client = new InventoryClient(new HttpClient { BaseAddress = ctx.MockServerUri });
            var stock = await client.GetStockAsync("P-123", CancellationToken.None);
            stock.Available.Should().Be(5);
        });
    }
}
\`\`\`

**Szolg\xE1ltat\xF3 oldal \u2013 a r\xF6gz\xEDtett szerz\u0151d\xE9s ellen\u0151rz\xE9se:**

\`\`\`csharp
[Fact]
public void EnsureOrdersApiExpectationsAreMet()
{
    using var verifier = new PactVerifier("inventory-api", new PactVerifierConfig());
    verifier
        .WithHttpEndpoint(_serverUri)
        .WithFileSource(new FileInfo("../../../pacts/orders-api-inventory-api.json"))
        .WithProviderStateUrl(new Uri(_serverUri, "/provider-states"))  // \xE1llapot be\xE1ll\xEDt\xE1s a "Given"-hez
        .Verify();
}
\`\`\`

**Aszinkron \xFCzenetekre** ugyanez m\u0171k\xF6dik (message pact): a fogyaszt\xF3 le\xEDrja, milyen \xFCzenetstrukt\xFAr\xE1t tud feldolgozni, a publik\xE1l\xF3 pedig ellen\u0151rzi, hogy az \xE1ltala kibocs\xE1tott \xFCzenet ennek megfelel \u2013 ez a Kafka/RabbitMQ integr\xE1ci\xF3kn\xE1l k\xFCl\xF6n\xF6sen \xE9rt\xE9kes (l\xE1sd "\xDCzenet-szerz\u0151d\xE9sek verzi\xF3z\xE1sa" fejezet).

Legjobb gyakorlatok: a pact f\xE1jlokat t\xF6ltsd fel egy Pact Broker-be, \xE9s a **can-i-deploy** ellen\u0151rz\xE9st tedd a deploy pipeline kapuj\xE1v\xE1; a szerz\u0151d\xE9s a *fogyaszt\xF3 t\xE9nyleges ig\xE9ny\xE9t* \xEDrja le, ne a teljes API fel\xFCletet; provider state-eket tarts kev\xE9s sz\xE1mban \xE9s j\xF3l elnevezve.

Mit ker\xFClj el: ne helyettes\xEDtsd vele a funkcion\xE1lis tesztel\xE9st (a contract teszt a *form\xE1t* ellen\u0151rzi, nem az \xFCzleti helyess\xE9get); ne \xEDrj olyan szerz\u0151d\xE9st, ami minden mez\u0151re pontos \xE9rt\xE9ket v\xE1r (haszn\xE1lj t\xEDpus-matchereket), k\xFCl\xF6nben minden apr\xF3 v\xE1ltoz\xE1s elbuktatja.

## System.Text.Json halad\xF3 szint (.NET Core 3.0+) https://learn.microsoft.com/dotnet/standard/serialization/system-text-json/overview {#system-text-json-halado-szint}

*Verzi\xF3: \`System.Text.Json\`: .NET Core 3.0; forr\xE1sk\xF3d-gener\xE1tor: .NET 6; polimorfikus szerializ\xE1ci\xF3: .NET 7.*

A \`System.Text.Json\` (STJ) a .NET alap\xE9rtelmezett szerializ\xE1l\xF3ja \u2013 gyors, allok\xE1ci\xF3takar\xE9kos, de a Newtonsoft.Json-n\xE1l szigor\xFAbb. A napi munk\xE1ban a k\xF6vetkez\u0151k a leggyakoribb k\xE9rd\xE9sek.

**Glob\xE1lis be\xE1ll\xEDt\xE1sok ASP.NET Core-ban:**

\`\`\`csharp
builder.Services.ConfigureHttpJsonOptions(options =>          // Minimal API
{
    options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    options.SerializerOptions.Converters.Add(new JsonStringEnumConverter());
    options.SerializerOptions.NumberHandling = JsonNumberHandling.AllowReadingFromString;
});

builder.Services.AddControllers().AddJsonOptions(o => { /* ugyanez MVC-hez */ });
\`\`\`

**Source generator (\`JsonSerializerContext\`)** \u2013 reflexi\xF3 helyett ford\xEDt\xE1skor gener\xE1lt szerializ\xE1l\xF3: gyorsabb hidegind\xEDt\xE1s, kisebb allok\xE1ci\xF3, \xE9s **Native AOT / trimming kompatibilis**:

\`\`\`csharp
[JsonSourceGenerationOptions(PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase, WriteIndented = false)]
[JsonSerializable(typeof(OrderDto))]
[JsonSerializable(typeof(IReadOnlyList<OrderDto>))]
[JsonSerializable(typeof(ProblemDetails))]
public partial class AppJsonContext : JsonSerializerContext;

// haszn\xE1lat
var json = JsonSerializer.Serialize(order, AppJsonContext.Default.OrderDto);
builder.Services.ConfigureHttpJsonOptions(o => o.SerializerOptions.TypeInfoResolverChain.Insert(0, AppJsonContext.Default));
\`\`\`

**Polimorfikus szerializ\xE1ci\xF3** (.NET 7+) \u2013 \xF6r\xF6kl\u0151d\u0151 t\xEDpusok diszkrimin\xE1torral, ami \xFCzenet-szerz\u0151d\xE9sekn\xE9l \xE9s event sourcingn\xE1l elengedhetetlen:

\`\`\`csharp
[JsonPolymorphic(TypeDiscriminatorPropertyName = "$type")]
[JsonDerivedType(typeof(CardPayment), "card")]
[JsonDerivedType(typeof(TransferPayment), "transfer")]
public abstract record Payment(decimal Amount);

public record CardPayment(decimal Amount, string Last4) : Payment(Amount);
public record TransferPayment(decimal Amount, string Iban) : Payment(Amount);
\`\`\`

**Egyedi converter** (pl. saj\xE1t value object):

\`\`\`csharp
public class MoneyJsonConverter : JsonConverter<Money>
{
    public override Money Read(ref Utf8JsonReader reader, Type type, JsonSerializerOptions options)
        => Money.Parse(reader.GetString()!);

    public override void Write(Utf8JsonWriter writer, Money value, JsonSerializerOptions options)
        => writer.WriteStringValue($"{value.Amount}:{value.Currency}");
}
\`\`\`

**Teljes\xEDtm\xE9ny.** Nagy payloadn\xE1l ne stringen kereszt\xFCl dolgozz: \`JsonSerializer.DeserializeAsync<T>(stream)\` \xE9s \`SerializeAsync(stream, value)\` k\xF6zvetlen\xFCl a HTTP streamre; a \`JsonSerializerOptions\` p\xE9ld\xE1nyt **egyszer hozd l\xE9tre \xE9s cache-eld** (a be\xE1ll\xEDt\xE1sok els\u0151 haszn\xE1latkor "befagynak", \xE9s minden \xFAj p\xE9ld\xE1ny \xFAjra fel\xE9p\xEDti a metaadat-gyors\xEDt\xF3t\xE1rat \u2013 ez az egyik leggyakoribb rejtett teljes\xEDtm\xE9nyhiba).

Mit ker\xFClj el: ne szerializ\xE1lj domain entit\xE1st k\xF6zvetlen\xFCl (k\xF6rk\xF6r\xF6s referenci\xE1k, felesleges mez\u0151k, sziv\xE1rg\xF3 bels\u0151 szerkezet); ne kapcsold be a \`ReferenceHandler.Preserve\`-t publikus API-n (\`$id\`/\`$ref\` mez\u0151k jelennek meg a v\xE1laszban, amit a kliensek nem v\xE1rnak); ne felt\xE9telezd, hogy a \`System.Text.Json\` \xE9s a \`Newtonsoft.Json\` viselked\xE9se azonos (nagybet\u0171-\xE9rz\xE9kenys\xE9g, konstruktor-k\xF6t\xE9s, \`TimeSpan\` kezel\xE9s elt\xE9r).

## Minimal API halad\xF3 szint \u2013 TypedResults, endpoint filter, route group (TypedResults/Endpoint filters/Route groups: .NET 7+) https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis/responses {#minimal-api-halado-szint-typedresults-endpoint-filter-route-group}

*Verzi\xF3: \`TypedResults\`, endpoint filter, route group (\`MapGroup\`), \`[AsParameters]\`: .NET 7-t\u0151l; be\xE9p\xEDtett OpenAPI (\`AddOpenApi\`): .NET 9-t\u0151l.*

A "Minimal API" fejezet az alapokat mutatja; \xE9les projektben a k\xF6vetkez\u0151 eszk\xF6z\xF6k teszik karbantarthat\xF3v\xE1.

**\`TypedResults\` a \`Results\` helyett** \u2013 er\u0151sen t\xEDpusos v\xE1lasz, ami egyszerre dokument\xE1lja is az OpenAPI s\xE9m\xE1t, \xE9s tesztelhet\u0151 visszat\xE9r\xE9si \xE9rt\xE9ket ad:

\`\`\`csharp
static async Task<Results<Ok<OrderDto>, NotFound, ProblemHttpResult>> GetOrder(
    Guid id, IOrderReader reader, CancellationToken ct)
{
    var order = await reader.GetAsync(id, ct);
    return order is null
        ? TypedResults.NotFound()
        : TypedResults.Ok(order);
}
\`\`\`

**Route group** \u2013 k\xF6z\xF6s prefix, autentik\xE1ci\xF3, filter, OpenAPI metaadat egy helyen:

\`\`\`csharp
var orders = app.MapGroup("/api/v1/orders")
    .WithTags("Orders")
    .RequireAuthorization()
    .AddEndpointFilter<ValidationFilter>()
    .WithOpenApi();

orders.MapGet("/{id:guid}", GetOrder).AllowAnonymous();
orders.MapPost("/", PlaceOrder).RequireAuthorization("orders:write");
orders.MapDelete("/{id:guid}", CancelOrder).RequireRateLimiting("expensive");
\`\`\`

**Endpoint filter** \u2013 a Minimal API "action filter" megfelel\u0151je, l\xE1ncolhat\xF3:

\`\`\`csharp
public class ValidationFilter<T>(IValidator<T> validator) : IEndpointFilter where T : class
{
    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        var argument = context.Arguments.OfType<T>().FirstOrDefault();
        if (argument is null) return await next(context);

        var result = await validator.ValidateAsync(argument, context.HttpContext.RequestAborted);
        if (!result.IsValid)
            return TypedResults.ValidationProblem(result.ToDictionary());

        return await next(context);
    }
}

orders.MapPost("/", PlaceOrder).AddEndpointFilter<ValidationFilter<PlaceOrderRequest>>();
\`\`\`

**Param\xE9terk\xF6t\xE9s** \u2013 \xF6sszetett esetekre \`[AsParameters]\` \xE9s \`IParsable\`:

\`\`\`csharp
public record OrderQuery([FromQuery] int Page = 1, [FromQuery] int PageSize = 20,
                         [FromQuery] OrderStatus? Status = null, [FromHeader(Name = "X-Tenant")] string? Tenant = null);

orders.MapGet("/", async ([AsParameters] OrderQuery query, IOrderReader reader, CancellationToken ct)
    => TypedResults.Ok(await reader.SearchAsync(query, ct)));
\`\`\`

**A .NET 9+ be\xE9p\xEDtett OpenAPI t\xE1mogat\xE1sa** kiv\xE1ltja a Swashbuckle-t a s\xE9ma gener\xE1l\xE1sra (\`builder.Services.AddOpenApi()\` + \`app.MapOpenApi()\`); a UI-hoz Scalar vagy Swagger UI k\xF6thet\u0151 be.

Legjobb gyakorlatok: a v\xE9gpont-delegate legyen **v\xE9kony** \u2013 egy statikus met\xF3dus, ami a handler/sender fel\xE9 tov\xE1bb\xEDt (\xEDgy tesztelhet\u0151 \xE9s olvashat\xF3 marad); minden v\xE9gpont kapjon \`CancellationToken\`-t \xE9s \`WithName\`/\`WithSummary\` metaadatot; a v\xE9gpontokat szeletenk\xE9nt regisztr\xE1ld (l\xE1sd "Vertical Slice Architecture" fejezet), ne egyetlen ezersoros \`Program.cs\`-ben.

Mit ker\xFClj el: ne \xEDrj lambda-testbe \xFCzleti logik\xE1t; ne haszn\xE1lj \`Results.Ok(object)\`-et t\xEDpusos v\xE1lasz helyett, ha az OpenAPI dokument\xE1ci\xF3 fontos; ne kapcsold ki a nullable ellen\u0151rz\xE9seket, mert a param\xE9terk\xF6t\xE9s null\xE1zhat\xF3s\xE1ga fontos jelz\xE9s a klienseknek.

## Authorization \u2013 policy, requirement, claim, multi-tenant hozz\xE1f\xE9r\xE9s (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/security/authorization/introduction {#authorization-policy-requirement-claim-multi-tenant-hozzaferes}

*Verzi\xF3: Policy-alap\xFA enged\xE9lyez\xE9s: ASP.NET Core 1.0-t\xF3l; \`FallbackPolicy\`: ASP.NET Core 3.0-t\xF3l.*

A "JWT, OAuth, OpenId Connect" fejezet a **hiteles\xEDt\xE9st** (ki vagy?) \xEDrja le; itt az **enged\xE9lyez\xE9s** (mit tehetsz?) k\xF6vetkezik. A szerep-alap\xFA (\`[Authorize(Roles = "Admin")]\`) megk\xF6zel\xEDt\xE9s gyorsan sk\xE1l\xE1zhatatlann\xE1 v\xE1lik \u2013 helyette **policy-alap\xFA** enged\xE9lyez\xE9s a javasolt.

\`\`\`csharp
builder.Services.AddAuthorization(options =>
{
    // egyszer\u0171 claim-alap\xFA policy
    options.AddPolicy("orders:write", p => p.RequireClaim("scope", "orders:write"));

    // \xF6sszetett felt\xE9tel
    options.AddPolicy("SeniorApprover", p => p
        .RequireAuthenticatedUser()
        .RequireRole("Approver")
        .RequireAssertion(ctx => ctx.User.HasClaim(c =>
            c.Type == "approval_limit" && decimal.Parse(c.Value) >= 1_000_000M)));

    // saj\xE1t requirement
    options.AddPolicy("SameTenant", p => p.AddRequirements(new SameTenantRequirement()));

    options.FallbackPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
});
\`\`\`

**Requirement + handler** \u2013 ott, ahol a d\xF6nt\xE9shez adatb\xE1zis vagy kontextus kell:

\`\`\`csharp
public class SameTenantRequirement : IAuthorizationRequirement;

public class SameTenantHandler(ITenantContext tenantContext)
    : AuthorizationHandler<SameTenantRequirement, IHasTenant>
{
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context,
        SameTenantRequirement requirement, IHasTenant resource)
    {
        var userTenant = context.User.FindFirst("tenant_id")?.Value;
        if (userTenant is not null && userTenant == resource.TenantId)
            context.Succeed(requirement);

        return Task.CompletedTask;
    }
}
\`\`\`

**Er\u0151forr\xE1s-alap\xFA enged\xE9lyez\xE9s** \u2013 amikor a d\xF6nt\xE9s a konkr\xE9t entit\xE1st\xF3l f\xFCgg ("csak a saj\xE1t rendel\xE9s\xE9t m\xF3dos\xEDthatja"):

\`\`\`csharp
app.MapPut("/orders/{id:guid}", async (Guid id, UpdateOrder cmd, IAuthorizationService auth,
    ClaimsPrincipal user, IOrderRepository repo, CancellationToken ct) =>
{
    var order = await repo.GetAsync(id, ct);
    if (order is null) return Results.NotFound();

    var result = await auth.AuthorizeAsync(user, order, "SameTenant");
    if (!result.Succeeded) return Results.Forbid();

    // ...
});
\`\`\`

**R\xE9tegzett v\xE9delem.** Az enged\xE9lyez\xE9s nem csak a v\xE9gponton \xE9l: az adatr\xE9teg szintj\xE9n az EF Core **global query filter** (l\xE1sd az azonos c\xEDm\u0171 fejezetet) automatikusan kisz\u0171ri a m\xE1s tenantokhoz tartoz\xF3 sorokat, teh\xE1t m\xE9g egy elfelejtett \`WHERE\` sem okoz adatsziv\xE1rg\xE1st.

Legjobb gyakorlatok: a policy nevei legyenek konstansok (elg\xE9pel\xE9s elleni v\xE9delem \u2013 az elg\xE9pelt policy n\xE9v fut\xE1sidej\u0171 hib\xE1t ad); a jogosults\xE1gokat finom szemcs\xE9s **permission** claim-ekkel modellezd, a szerepeket csak permission-halmazok nevek\xE9nt haszn\xE1ld; teszteld az enged\xE9lyez\xE9st integr\xE1ci\xF3s teszttel (403 vs. 200), ne csak manu\xE1lisan.

Mit ker\xFClj el: ne b\xEDzd az enged\xE9lyez\xE9st a frontendre; ne tegy\xE9l nagy jogosults\xE1gi list\xE1t a JWT tokenbe (m\xE9rethat\xE1r, \xE9s a visszavon\xE1s lehetetlen lesz) \u2013 helyette permission lek\xE9rdez\xE9s + cache; ne felejtsd el, hogy az \`[Authorize]\` hi\xE1nya alapb\xF3l **nyitva hagyja** a v\xE9gpontot \u2013 ez\xE9rt \xE9rdemes \`FallbackPolicy\`-t be\xE1ll\xEDtani.

## Konfigur\xE1ci\xF3, titokkezel\xE9s \xE9s Options-valid\xE1ci\xF3 (ASP.NET Core 1.0+ \xB7 Options validation: .NET Core 2.2+) https://learn.microsoft.com/aspnet/core/fundamentals/configuration/ {#konfiguracio-titokkezeles-es-options-validacio}

*Verzi\xF3: User Secrets: .NET Core 2.0; \`ValidateOnStart\`: .NET 6; \`[OptionsValidator]\`: .NET 8.*

Az "Options Pattern" fejezet az \`IOptions\` csal\xE1dot mutatja; itt a konfigur\xE1ci\xF3 **forr\xE1sai**, a titkok kezel\xE9se \xE9s a hib\xE1s konfigur\xE1ci\xF3 **korai** felismer\xE9se k\xF6vetkezik.

**Forr\xE1s-hierarchia** (k\xE9s\u0151bb regisztr\xE1lt fel\xFCl\xEDrja a kor\xE1bbit): \`appsettings.json\` \u2192 \`appsettings.{Environment}.json\` \u2192 User Secrets (csak Development) \u2192 k\xF6rnyezeti v\xE1ltoz\xF3k \u2192 parancssori argumentumok.

\`\`\`bash
# lok\xE1lis fejleszt\xE9s \u2013 a titok NEM ker\xFCl a rep\xF3ba
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:Default" "Server=...;Password=..."
\`\`\`

\xC9les k\xF6rnyezetben Azure Key Vault / AWS Secrets Manager / HashiCorp Vault:

\`\`\`csharp
if (!builder.Environment.IsDevelopment())
{
    builder.Configuration.AddAzureKeyVault(
        new Uri($"https://{builder.Configuration["KeyVault:Name"]}.vault.azure.net/"),
        new DefaultAzureCredential());   // managed identity \u2013 nincs jelsz\xF3 a konfigur\xE1ci\xF3ban
}
\`\`\`

**Options-valid\xE1ci\xF3 indul\xE1skor** \u2013 a hib\xE1s konfigur\xE1ci\xF3 ne az els\u0151 k\xE9r\xE9sn\xE9l, hanem ind\xEDt\xE1skor bukjon:

\`\`\`csharp
public class KafkaOptions
{
    public const string SectionName = "Kafka";

    [Required, Url] public string BootstrapServers { get; init; } = null!;
    [Required] public string ConsumerGroup { get; init; } = null!;
    [Range(1, 100)] public int MaxConcurrency { get; init; } = 4;
}

builder.Services.AddOptions<KafkaOptions>()
    .Bind(builder.Configuration.GetSection(KafkaOptions.SectionName))
    .ValidateDataAnnotations()
    .Validate(o => o.MaxConcurrency <= Environment.ProcessorCount * 2,
        "A MaxConcurrency nem lehet nagyobb a processzorsz\xE1m k\xE9tszeres\xE9n\xE9l.")
    .ValidateOnStart();          // fail-fast: az alkalmaz\xE1s el sem indul rossz konfigur\xE1ci\xF3val
\`\`\`

Forr\xE1sk\xF3d-gener\xE1lt, AOT-bar\xE1t valid\xE1ci\xF3:

\`\`\`csharp
[OptionsValidator]
public partial class KafkaOptionsValidator : IValidateOptions<KafkaOptions>;

builder.Services.AddSingleton<IValidateOptions<KafkaOptions>, KafkaOptionsValidator>();
\`\`\`

Legjobb gyakorlatok: **soha ne** ker\xFClj\xF6n titok a forr\xE1sk\xF3dba vagy az \`appsettings.json\`-ba (a \`.gitignore\` nem v\xE9delem \u2013 a repo t\xF6rt\xE9net\xE9ben ott marad); a konfigur\xE1ci\xF3t tipiz\xE1lt Options oszt\xE1lyba k\xF6sd, ne \`IConfiguration["kulcs"]\` sz\xF3rt hivatkoz\xE1sokkal; a titkok rot\xE1lhat\xF3k legyenek (\`IOptionsMonitor\` + Key Vault refresh); a kont\xE9nerben k\xF6rnyezeti v\xE1ltoz\xF3 a szok\xE1sos \xE1tad\xE1si m\xF3d (\`Kafka__BootstrapServers\` \u2013 a dupla al\xE1h\xFAz\xE1s a szintl\xE9p\xE9s).

Mit ker\xFClj el: ne logold ki a teljes konfigur\xE1ci\xF3t ind\xEDt\xE1skor (titkok sziv\xE1rognak a logba); ne haszn\xE1lj \`IOptionsSnapshot\`-ot Singleton szolg\xE1ltat\xE1sban (captive dependency); ne tarts \xE9les connection stringet fejleszt\u0151i g\xE9pen.

## Feature flags \u2013 funkci\xF3kapcsol\xF3k (Microsoft.FeatureManagement) https://learn.microsoft.com/azure/azure-app-configuration/use-feature-flags-dotnet-core {#feature-flags-funkciokapcsolok}

A feature flag elv\xE1lasztja a **deployt** a **release**-t\u0151l: a k\xF3d kiker\xFCl \xE9lesbe, de a funkci\xF3 csak akkor \xE9l, amikor bekapcsolod. Ez teszi lehet\u0151v\xE9 a trunk-based fejleszt\xE9st, a fokozatos kivezet\xE9st (canary), az A/B tesztet \xE9s a gyors vissza\xE1ll\xEDt\xE1st deploy n\xE9lk\xFCl.

\`\`\`bash
dotnet add package Microsoft.FeatureManagement.AspNetCore
\`\`\`

\`\`\`json
{
  "FeatureManagement": {
    "NewCheckoutFlow": false,
    "BetaReporting": {
      "EnabledFor": [
        { "Name": "Percentage", "Parameters": { "Value": 10 } }
      ]
    },
    "MaintenanceMode": {
      "EnabledFor": [
        { "Name": "TimeWindow", "Parameters": { "Start": "2026-08-10T22:00:00Z", "End": "2026-08-11T02:00:00Z" } }
      ]
    }
  }
}
\`\`\`

\`\`\`csharp
builder.Services.AddFeatureManagement().AddFeatureFilter<PercentageFilter>().AddFeatureFilter<TimeWindowFilter>();

// k\xF3dban
public class CheckoutService(IFeatureManager features)
{
    public async Task<CheckoutResult> CheckoutAsync(Cart cart, CancellationToken ct) =>
        await features.IsEnabledAsync("NewCheckoutFlow")
            ? await _newFlow.RunAsync(cart, ct)
            : await _legacyFlow.RunAsync(cart, ct);
}

// v\xE9gponton
app.MapGet("/reports/beta", GetBetaReport).WithMetadata(new FeatureGateAttribute("BetaReporting"));
\`\`\`

K\xF6zponti kezel\xE9shez (t\xF6bb szolg\xE1ltat\xE1s, fut\xE1sidej\u0171 kapcsol\xE1s \xFAjradeploy n\xE9lk\xFCl) Azure App Configuration, LaunchDarkly, Unleash vagy saj\xE1t adatb\xE1zis-alap\xFA provider k\xF6thet\u0151 be \u2013 az \`IFeatureManager\` absztrakci\xF3 v\xE1ltozatlan marad.

Legjobb gyakorlatok: minden flaghez tartozzon **gazda \xE9s lej\xE1rati d\xE1tum** \u2013 a flag ideiglenes; a kapcsol\xF3 legyen bin\xE1ris \xE9s j\xF3l nevezett (\`NewCheckoutFlow\`, nem \`Flag17\`); a flag \xE1llapot\xE1t logold \xE9s tedd r\xE1 span attrib\xFAtumk\xE9nt a trace-re, hogy egy incidensn\xE9l l\xE1tsz\xF3djon, melyik \xE1gon futott a k\xE9r\xE9s; teszteld **mindk\xE9t** \xE1gat.

Mit ker\xFClj el: ne halmozz fel t\xF6bb tucat r\xE9gi flaget (a kombinatorikus robban\xE1s tesztelhetetlen k\xF3dot ad \u2013 a kivezetett flaget \xE9s a hozz\xE1 tartoz\xF3 holt \xE1gat t\xF6r\xF6ld); ne haszn\xE1lj feature flaget hossz\xFA t\xE1v\xFA konfigur\xE1ci\xF3k\xE9nt (arra Options val\xF3); ne \xE1gazz el flagre a domain modell m\xE9ly\xE9n, csak j\xF3l l\xE1that\xF3, magas szint\u0171 d\xF6nt\xE9si pontokon.

## Multi-tenancy .NET-ben {#multi-tenancy-net-ben}

Ha egy alkalmaz\xE1s t\xF6bb \xFCgyfelet (tenantot) szolg\xE1l ki, h\xE1rom f\u0151 izol\xE1ci\xF3s modell k\xF6z\xFCl lehet v\xE1lasztani:

| Modell | Izol\xE1ci\xF3 | K\xF6lts\xE9g | Mikor |
|---|---|---|---|
| K\xF6z\xF6s adatb\xE1zis, \`TenantId\` oszlop | logikai | legolcs\xF3bb | sok, kis tenant, SaaS |
| K\xF6z\xF6s szerver, tenantonk\xE9nt s\xE9ma/adatb\xE1zis | er\u0151sebb | k\xF6zepes | k\xF6zepes sz\xE1m\xFA tenant, megfelel\u0151s\xE9gi ig\xE9ny |
| Tenantonk\xE9nt k\xFCl\xF6n infrastrukt\xFAra | teljes | legdr\xE1g\xE1bb | kev\xE9s, nagy, szab\xE1lyozott \xFCgyf\xE9l |

**Tenant felismer\xE9se** (subdomain, fejl\xE9c, JWT claim) middleware-ben:

\`\`\`csharp
public class TenantResolutionMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext context, ITenantContext tenantContext, ITenantStore store)
    {
        var tenantId = context.User.FindFirst("tenant_id")?.Value
            ?? context.Request.Headers["X-Tenant-Id"].FirstOrDefault()
            ?? context.Request.Host.Host.Split('.')[0];

        var tenant = await store.FindAsync(tenantId, context.RequestAborted);
        if (tenant is null)
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            return;
        }

        tenantContext.SetTenant(tenant);
        using (Serilog.Context.LogContext.PushProperty("TenantId", tenant.Id))   // minden log tartalmazza
            await next(context);
    }
}
\`\`\`

**Automatikus sz\u0171r\xE9s az adatr\xE9tegben** \u2013 a legfontosabb v\xE9delem, mert nem lehet elfelejteni:

\`\`\`csharp
public class AppDbContext(DbContextOptions<AppDbContext> options, ITenantContext tenant) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>().HasQueryFilter(o => o.TenantId == tenant.CurrentTenantId);
        modelBuilder.Entity<Product>().HasQueryFilter(p => p.TenantId == tenant.CurrentTenantId);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entry in ChangeTracker.Entries<ITenantOwned>().Where(e => e.State == EntityState.Added))
            entry.Entity.TenantId = tenant.CurrentTenantId;   // \xEDr\xE1skor automatikus kit\xF6lt\xE9s

        return base.SaveChangesAsync(cancellationToken);
    }
}
\`\`\`

**Tenantonk\xE9nti adatb\xE1zis** eset\xE9n a connection stringet a tenant kontextusb\xF3l kell feloldani:

\`\`\`csharp
builder.Services.AddDbContext<AppDbContext>((sp, options) =>
    options.UseSqlServer(sp.GetRequiredService<ITenantContext>().ConnectionString));
\`\`\`

Figyelend\u0151 pontok: a **cache kulcsba** mindig menjen bele a tenant azonos\xEDt\xF3; a h\xE1tt\xE9rfolyamatok (\`BackgroundService\`, \xFCzenet-fogyaszt\xF3) nem rendelkeznek HTTP kontextussal, ez\xE9rt a tenantot az \xFCzenet fejl\xE9c\xE9b\u0151l/tartalm\xE1b\xF3l kell vissza\xE1ll\xEDtani, miel\u0151tt b\xE1rmit tenn\xE9nek; a migr\xE1ci\xF3kat tenantonk\xE9nt (adatb\xE1zisonk\xE9nt) kell futtatni, \xFCtemezetten \xE9s k\xF6vethet\u0151en; a "zajos szomsz\xE9d" ellen tenantonk\xE9nti rate limit indokolt.

Mit ker\xFClj el: ne hagyatkozz kiz\xE1r\xF3lag a k\xF3dban k\xE9zzel \xEDrt \`WHERE TenantId = ...\` felt\xE9telekre (egyetlen felejt\xE9s adatsziv\xE1rg\xE1s); ne engedd, hogy adminisztr\xE1tori funkci\xF3 (cross-tenant riport) ugyanazon a \`DbContext\`-en fusson sz\u0171r\u0151 n\xE9lk\xFCl, kifejezett, audit\xE1lt \xFAtvonal n\xE9lk\xFCl (\`IgnoreQueryFilters()\` csak szigor\xFAan ellen\u0151rz\xF6tt helyen).

## Elosztott lock \xE9s h\xE1tt\xE9rfolyamatok t\xF6bb p\xE9ld\xE1nyban {#elosztott-lock-es-hatterfolyamatok-tobb-peldanyban}

Ha egy alkalmaz\xE1s t\xF6bb p\xE9ld\xE1nyban fut (Kubernetes replic\xE1k), minden p\xE9ld\xE1nyban elindul az \xF6sszes \`BackgroundService\` \u2013 \xEDgy egy napi feladat h\xE1romszor fut le. A mem\xF3riabeli \`lock\` (l\xE1sd "Alkalmaz\xE1sszint\u0171 Concurrency Handling" fejezet) itt semmit nem \xE9r, mert csak a saj\xE1t processzen bel\xFCl \xE9rv\xE9nyes.

Megold\xE1sok:

**1. Adatb\xE1zis-alap\xFA lock** (nincs \xFAj infrastrukt\xFAra):

\`\`\`csharp
// SQL Server alkalmaz\xE1s-lock: a tranzakci\xF3 v\xE9g\xE9ig tart, automatikusan felszabadul kapcsolatveszt\xE9sn\xE9l
public async Task<bool> TryAcquireAsync(string resource, TimeSpan timeout, CancellationToken ct)
{
    var result = await connection.ExecuteScalarAsync<int>(
        "EXEC @Result = sp_getapplock @Resource, 'Exclusive', 'Transaction', @Timeout",
        new { Resource = resource, Timeout = (int)timeout.TotalMilliseconds }, transaction);
    return result >= 0;
}
\`\`\`

PostgreSQL eset\xE9n ennek megfelel\u0151je a \`pg_try_advisory_lock\`.

**2. Redis alap\xFA lock** (\`RedLock.net\` vagy \`SETNX\` + TTL):

\`\`\`csharp
await using var redLock = await _redLockFactory.CreateLockAsync(
    resource: "daily-report", expiryTime: TimeSpan.FromMinutes(5),
    waitTime: TimeSpan.FromSeconds(3), retryTime: TimeSpan.FromMilliseconds(200));

if (!redLock.IsAcquired) return;   // m\xE1sik p\xE9ld\xE1ny m\xE1r dolgozik rajta
await GenerateReportAsync(ct);
\`\`\`

**3. Be\xE9p\xEDtett megold\xE1s haszn\xE1lata** \u2013 gyakran ez a legjobb: a Quartz.NET klaszter-m\xF3dja (l\xE1sd "Quartz.NET" fejezet), a Hangfire, vagy Kubernetesben egy k\xFCl\xF6n \`CronJob\`, illetve egyetlen replik\xE1ra \xE1ll\xEDtott worker deployment.

**Fontos csapd\xE1k:**

- A lock TTL-je **r\xF6videbb** lehet, mint a munka fut\xE1sideje \u2013 ilyenkor k\xE9t p\xE9ld\xE1ny dolgozhat egyszerre. Vagy hosszabb\xEDtsd meg a lockot periodikusan (lease renewal), vagy tedd a m\u0171veletet idempotenss\xE9.
- A lock **nem** helyettes\xEDti az idempotenci\xE1t: h\xE1l\xF3zati particion\xE1l\xE1s eset\xE9n nincs t\xF6k\xE9letes elosztott k\xF6lcs\xF6n\xF6s kiz\xE1r\xE1s.
- Mindig legyen lej\xE1rat: lej\xE1rat n\xE9lk\xFCli lock egy \xF6sszeoml\xF3 p\xE9ld\xE1nyn\xE1l \xF6r\xF6kre blokkolja a rendszert.

Mit ker\xFClj el: ne \xE9p\xEDts saj\xE1t elosztott lock implement\xE1ci\xF3t, ha van bev\xE1lt k\xF6nyvt\xE1r vagy platformszolg\xE1ltat\xE1s; ne haszn\xE1lj elosztott lockot nagy gyakoris\xE1g\xFA (m\xE1sodpercenk\xE9nti) m\u0171veletre \u2013 az sz\u0171k keresztmetszet lesz; ne tegy\xE9l lockot HTTP k\xE9r\xE9s kritikus \xFAtvonal\xE1ba, ha az k\xE9sleltet\xE9st okoz.

## Channels \xE9s IAsyncEnumerable \u2013 streaming \xE9s bels\u0151 producer-consumer (Channels: .NET Core 2.1+ \xB7 IAsyncEnumerable: C# 8.0+) https://learn.microsoft.com/dotnet/core/extensions/channels {#channels-es-iasyncenumerable-streaming-es-belso-producer-consumer}

*Verzi\xF3: \`System.Threading.Channels\` NuGet: .NET Core 2.1-t\u0151l; a BCL-ben be\xE9p\xEDtve: .NET Core 3.0+; \`IAsyncEnumerable<T>\` \xE9s \`await foreach\`: C# 8.0 / .NET Core 3.0.*

**\`System.Threading.Channels\`** egy magas teljes\xEDtm\xE9ny\u0171, allok\xE1ci\xF3takar\xE9kos, aszinkron producer-consumer sor **processzen bel\xFCl** \u2013 ott hasznos, ahol nem kell broker (pl. bej\xF6v\u0151 k\xE9r\xE9sek h\xE1tt\xE9rfeldolgoz\xE1sba tol\xE1sa, batch-el\xE9s, terhel\xE9s-kiegyenl\xEDt\xE9s).

\`\`\`csharp
public class BackgroundTaskQueue
{
    private readonly Channel<Func<CancellationToken, ValueTask>> _channel =
        Channel.CreateBounded<Func<CancellationToken, ValueTask>>(new BoundedChannelOptions(1000)
        {
            FullMode = BoundedChannelFullMode.Wait,   // backpressure: a termel\u0151 v\xE1r, ha tele van
            SingleReader = false,
            SingleWriter = false
        });

    public ValueTask EnqueueAsync(Func<CancellationToken, ValueTask> workItem, CancellationToken ct) =>
        _channel.Writer.WriteAsync(workItem, ct);

    public IAsyncEnumerable<Func<CancellationToken, ValueTask>> ReadAllAsync(CancellationToken ct) =>
        _channel.Reader.ReadAllAsync(ct);
}

public class QueuedHostedService(BackgroundTaskQueue queue, ILogger<QueuedHostedService> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await Parallel.ForEachAsync(queue.ReadAllAsync(stoppingToken),
            new ParallelOptions { MaxDegreeOfParallelism = 4, CancellationToken = stoppingToken },
            async (workItem, ct) =>
            {
                try { await workItem(ct); }
                catch (Exception ex) { logger.LogError(ex, "H\xE1tt\xE9rmunka hib\xE1ra futott"); }
            });
    }
}
\`\`\`

A **bounded** (korl\xE1tos) channel a l\xE9nyeg: korl\xE1t n\xE9lk\xFCli sor mem\xF3riasziv\xE1rg\xE1shoz vezet terhel\xE9s alatt. A \`FullMode\` d\xF6nti el, mi t\xF6rt\xE9njen tel\xEDtetts\xE9gn\xE9l: v\xE1rakoz\xE1s (backpressure), a legr\xE9gebbi eldob\xE1sa, vagy az \xFAj eldob\xE1sa.

**\`IAsyncEnumerable<T>\` \xE9s streaming API** \u2013 nagy eredm\xE9nyhalmaz \xE1tad\xE1sa an\xE9lk\xFCl, hogy a teljes lista mem\xF3ri\xE1ba ker\xFClne:

\`\`\`csharp
public async IAsyncEnumerable<OrderDto> StreamOrdersAsync(
    [EnumeratorCancellation] CancellationToken ct = default)
{
    await foreach (var order in _db.Orders.AsNoTracking().AsAsyncEnumerable().WithCancellation(ct))
        yield return new OrderDto(order.Id, order.Total);
}

// Minimal API: a v\xE1lasz JSON t\xF6mbk\xE9nt, folyamatosan \xEDr\xF3dik ki
app.MapGet("/orders/stream", (IOrderReader reader, CancellationToken ct) => reader.StreamOrdersAsync(ct));
\`\`\`

Az \`[EnumeratorCancellation]\` attrib\xFAtum elhagy\xE1sa gyakori hiba: n\xE9lk\xFCle a \`WithCancellation()\`-nel \xE1tadott token nem jut el a met\xF3dus t\xF6rzs\xE9be.

Mikor melyiket: **Channel** \u2013 processzen bel\xFCli munka\xE1tad\xE1s, batchel\xE9s, terhel\xE9scsillap\xEDt\xE1s. **IAsyncEnumerable** \u2013 lusta, aszinkron adatfolyam olvas\xE1sa (adatb\xE1zis kurzor, f\xE1jl, h\xE1l\xF3zati stream). **\xDCzenetsor (Kafka/RabbitMQ)** \u2013 ha a munk\xE1nak t\xFAl kell \xE9lnie a processzt, vagy m\xE1s szolg\xE1ltat\xE1snak sz\xF3l.

Mit ker\xFClj el: ne haszn\xE1lj Channelt tart\xF3s munkasork\xE9nt \u2013 **az alkalmaz\xE1s le\xE1ll\xE1sakor a tartalma elveszik** (erre val\xF3 az Outbox + broker); ne felejtsd el a \`Writer.Complete()\`-et, ha a fogyaszt\xF3 a channel lez\xE1r\xE1s\xE1ra v\xE1r; ne streamelj \`IAsyncEnumerable\`-t olyan tranzakci\xF3 f\xF6l\xF6tt, amit a HTTP v\xE1lasz \xEDr\xE1sa k\xF6zben nyitva kell tartani.

## Teljes\xEDtm\xE9ny: Native AOT, trimming, benchmarkol\xE1s (Native AOT: .NET 7+ k\xEDs\xE9rleti \xB7 .NET 8+ produkci\xF3) https://learn.microsoft.com/dotnet/core/deploying/native-aot/ {#teljesitmeny-native-aot-trimming-benchmarkolas}

*Verzi\xF3: Native AOT: .NET 7 (konzol), ASP.NET Core Minimal API AOT t\xE1mogat\xE1s: .NET 8-t\xF3l.*

**Native AOT** \u2013 az alkalmaz\xE1s el\u0151re, g\xE9pi k\xF3dra fordul: n\xE9h\xE1ny milliszekundumos indul\xE1si id\u0151, kisebb mem\xF3ria-l\xE1bnyom, \xF6n\xE1ll\xF3 nat\xEDv bin\xE1ris (nincs JIT, nincs runtime telep\xEDt\xE9s). Kubernetes/serverless k\xF6rnyezetben ahol a sk\xE1l\xE1z\xE1s gyakori \xE9s a hidegind\xEDt\xE1s sz\xE1m\xEDt, jelent\u0151s el\u0151ny.

\`\`\`xml
<PropertyGroup>
  <PublishAot>true</PublishAot>
  <InvariantGlobalization>true</InvariantGlobalization>
  <StripSymbols>true</StripSymbols>
  <TrimMode>full</TrimMode>
</PropertyGroup>
\`\`\`

\`\`\`bash
dotnet publish -c Release -r linux-x64
\`\`\`

Korl\xE1tok, amikkel sz\xE1molni kell: nincs fut\xE1sidej\u0171 k\xF3dgener\xE1l\xE1s \xE9s korl\xE1tozott a reflexi\xF3, ez\xE9rt az EF Core (jelenleg korl\xE1tozottan), az AutoMapper, a MediatR reflexi\xF3s felder\xEDt\xE9se, a \`System.Text.Json\` reflexi\xF3s m\xF3dja probl\xE9m\xE1s \u2013 ezek helyett source generator alap\xFA megold\xE1sokra van sz\xFCks\xE9g (\`JsonSerializerContext\`, Mapperly, EF Core compiled models, Dapper AOT). A Minimal API t\xE1mogatott, az MVC controller alap\xFA stack nem teljesen.

\`\`\`csharp
// AOT-bar\xE1t Minimal API bel\xE9p\xE9si pont
var builder = WebApplication.CreateSlimBuilder(args);
builder.Services.ConfigureHttpJsonOptions(o => o.SerializerOptions.TypeInfoResolverChain.Insert(0, AppJsonContext.Default));
\`\`\`

**M\xE9rj, ne tippelj \u2013 BenchmarkDotNet:**

\`\`\`bash
dotnet add package BenchmarkDotNet
\`\`\`

\`\`\`csharp
[MemoryDiagnoser]                  // allok\xE1ci\xF3 is l\xE1tszik, nem csak id\u0151
[SimpleJob(RuntimeMoniker.Net10_0)]
public class SerializationBenchmarks
{
    private readonly OrderDto _order = TestData.CreateOrder();

    [Benchmark(Baseline = true)]
    public string Reflection() => JsonSerializer.Serialize(_order);

    [Benchmark]
    public string SourceGenerated() => JsonSerializer.Serialize(_order, AppJsonContext.Default.OrderDto);
}

// Program.cs: BenchmarkRunner.Run<SerializationBenchmarks>();  (Release konfigur\xE1ci\xF3ban futtatva!)
\`\`\`

**A gyakorlatban legt\xF6bbet hoz\xF3 optimaliz\xE1ci\xF3k** \u2013 sorrendben, miel\u0151tt b\xE1rki a mikro-optimaliz\xE1l\xE1shoz ny\xFAlna:

1. **Adatb\xE1zis**: hi\xE1nyz\xF3 index, N+1 lek\xE9rdez\xE9s, felesleges tracking, \`SELECT *\` projekci\xF3 helyett (l\xE1sd "EF Core performance optimization strategies" \xE9s "SQL lass\xFA query" fejezetek).
2. **H\xE1l\xF3zat**: felesleges szinkron szolg\xE1ltat\xE1sl\xE1ncok, t\xF6m\xF6r\xEDt\xE9s hi\xE1nya, t\xFAl nagy payload.
3. **Cache**: hi\xE1nyz\xF3 gyors\xEDt\xF3t\xE1raz\xE1s gyakran olvasott adatra.
4. **Aszinkronit\xE1s**: blokkol\xF3 h\xEDv\xE1s (\`.Result\`, \`.Wait()\`) thread pool \xE9heztet\xE9ssel.
5. Csak ezut\xE1n: allok\xE1ci\xF3cs\xF6kkent\xE9s (\`Span<T>\`, \`ArrayPool\`, \`struct\`), source generatorok.

Mit ker\xFClj el: ne optimaliz\xE1lj m\xE9r\xE9s n\xE9lk\xFCl; ne futtass benchmarkot Debug buildben vagy a fejleszt\u0151i g\xE9pen fut\xF3 egy\xE9b terhel\xE9s mellett; ne v\xE1lts Native AOT-ra csak mert \xFAj \u2013 m\xE9rd meg, hogy a te terhel\xE9si profilod (hosszan fut\xF3 szolg\xE1ltat\xE1s vs. gyakran sk\xE1l\xE1z\xF3d\xF3) egy\xE1ltal\xE1n profit\xE1l-e bel\u0151le.

## Docker multi-stage build \xE9s Kubernetes-alapok https://learn.microsoft.com/dotnet/core/docker/build-container {#docker-multi-stage-build-es-kubernetes-alapok}

*Verzi\xF3: Chiseled kont\xE9ner k\xE9pek: .NET 8-t\xF3l; \`$APP_UID\` nem-root felhaszn\xE1l\xF3: .NET 8-t\xF3l.*

**Multi-stage Dockerfile** \u2013 a build eszk\xF6z\xF6k nem ker\xFClnek bele a futtat\xF3k\xF6rnyezetbe, \xEDgy a k\xE9p kicsi \xE9s biztons\xE1gosabb:

\`\`\`dockerfile
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# k\xFCl\xF6n r\xE9teg a csproj-oknak: a restore csak akkor fut \xFAjra, ha a f\xFCgg\u0151s\xE9gek v\xE1ltoztak
COPY ["src/Orders.Api/Orders.Api.csproj", "src/Orders.Api/"]
COPY ["src/Orders.Domain/Orders.Domain.csproj", "src/Orders.Domain/"]
RUN dotnet restore "src/Orders.Api/Orders.Api.csproj"

COPY . .
RUN dotnet publish "src/Orders.Api/Orders.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0-noble-chiseled AS final
WORKDIR /app
COPY --from=build /app/publish .
USER $APP_UID                      # nem root felhaszn\xE1l\xF3
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "Orders.Api.dll"]
\`\`\`

A \`chiseled\` k\xE9pek shell \xE9s csomagkezel\u0151 n\xE9lk\xFCli, minim\xE1lis Ubuntu alapok \u2013 l\xE9nyegesen kisebb t\xE1mad\xE1si fel\xFClet \xE9s k\xE9pm\xE9ret.

**Kubernetes deployment \u2013 a .NET szempontj\xE1b\xF3l fontos r\xE9szek:**

\`\`\`yaml
spec:
  containers:
    - name: orders-api
      image: registry.example.com/orders-api:1.4.2   # soha ne :latest
      ports: [{ containerPort: 8080 }]
      env:
        - name: ConnectionStrings__Default
          valueFrom: { secretKeyRef: { name: orders-secrets, key: connection-string } }
      resources:
        requests: { cpu: "100m", memory: "256Mi" }
        limits:   { memory: "512Mi" }          # CPU limitet gyakran nem \xE9rdemes megadni (throttling)
      startupProbe:                             # lass\xFA indul\xE1shoz (migr\xE1ci\xF3, cache meleg\xEDt\xE9s)
        httpGet: { path: /health/startup, port: 8080 }
        failureThreshold: 30
        periodSeconds: 5
      livenessProbe:                            # "\xE9l-e a folyamat?" \u2013 \xFAjraind\xEDt\xE1st v\xE1lt ki
        httpGet: { path: /health/live, port: 8080 }
      readinessProbe:                           # "fogadhat-e forgalmat?" \u2013 kiveszi a load balancerb\u0151l
        httpGet: { path: /health/ready, port: 8080 }
  terminationGracePeriodSeconds: 60
\`\`\`

A h\xE1rom probe elk\xFCl\xF6n\xEDt\xE9se a health checkek (l\xE1sd "Health Checks" fejezet) c\xEDmk\xE9z\xE9s\xE9vel:

\`\`\`csharp
app.MapHealthChecks("/health/live", new HealthCheckOptions { Predicate = _ => false });   // csak a folyamat
app.MapHealthChecks("/health/ready", new HealthCheckOptions { Predicate = c => c.Tags.Contains("ready") });
\`\`\`

**Graceful shutdown.** Kubernetes \`SIGTERM\`-et k\xFCld, majd a grace period ut\xE1n \`SIGKILL\`-t. A .NET host ezt \`IHostApplicationLifetime.ApplicationStopping\`-k\xE9nt jelzi; \xE1ll\xEDtsd be az elegend\u0151 id\u0151t a folyamatban l\xE9v\u0151 k\xE9r\xE9sek \xE9s \xFCzenetfeldolgoz\xE1sok befejez\xE9s\xE9hez:

\`\`\`csharp
builder.Services.Configure<HostOptions>(o => o.ShutdownTimeout = TimeSpan.FromSeconds(45));
\`\`\`

A .NET a kont\xE9ner mem\xF3rialimitj\xE9t figyelembe veszi a GC be\xE1ll\xEDt\xE1s\xE1n\xE1l; nagy mem\xF3riaig\xE9ny\u0171 szolg\xE1ltat\xE1sokn\xE1l \xE9rdemes a Server GC-t explicit konfigur\xE1lni (\`<ServerGarbageCollection>\`), kis kont\xE9nerekn\xE9l viszont a Workstation GC takar\xE9kosabb.

Mit ker\xFClj el: ne futtass rootk\xE9nt; ne tedd a titkokat a k\xE9pbe vagy k\xF6rnyezeti v\xE1ltoz\xF3k\xE9nt a manifestbe (Secret vagy k\xFCls\u0151 titokkezel\u0151); ne ind\xEDts adatb\xE1zis-migr\xE1ci\xF3t az alkalmaz\xE1s indul\xE1sakor t\xF6bb replik\xE1n\xE1l (versenyhelyzet) \u2013 erre k\xFCl\xF6n init container vagy Job val\xF3.

## CI/CD \xE9s adatb\xE1zis-migr\xE1ci\xF3 \xE9les k\xF6rnyezetben (EF Core 1.0+) https://learn.microsoft.com/ef/core/managing-schemas/migrations/applying {#ci-cd-es-adatbazis-migracio-eles-kornyezetben}

**Egy tipikus .NET pipeline l\xE9p\xE9sei:**

\`\`\`yaml
# GitHub Actions v\xE1zlat
- run: dotnet restore
- run: dotnet build -c Release --no-restore
- run: dotnet format --verify-no-changes            # st\xEDlus ellen\u0151rz\xE9s
- run: dotnet test -c Release --no-build --collect:"XPlat Code Coverage"
- run: dotnet list package --vulnerable --include-transitive   # ismert s\xE9r\xFCl\xE9kenys\xE9gek
- run: dotnet publish -c Release -o out
- run: docker build -t $IMAGE:$GITHUB_SHA .
- run: docker push $IMAGE:$GITHUB_SHA
\`\`\`

Fontos, hogy a build **egyszer** t\xF6rt\xE9njen, \xE9s ugyanaz az artefaktum (image) menjen v\xE9gig minden k\xF6rnyezeten \u2013 a k\xF6rnyezeti k\xFCl\xF6nbs\xE9g csak konfigur\xE1ci\xF3 legyen.

**Adatb\xE1zis-migr\xE1ci\xF3.** Az \`app.Database.Migrate()\` ind\xEDt\xE1skori h\xEDv\xE1sa fejleszt\xE9sre j\xF3, \xE9les k\xF6rnyezetben vesz\xE9lyes (t\xF6bb replika, vissza\xE1ll\xEDthatatlan l\xE9p\xE9s, hossz\xFA lock). \xC9les gyakorlat:

\`\`\`bash
# 1. SQL szkript gener\xE1l\xE1sa k\xF3dfel\xFClvizsg\xE1latra \xE9s DBA j\xF3v\xE1hagy\xE1sra
dotnet ef migrations script --idempotent --output migrations.sql

# 2. Alkalmaz\xE1s a deploy el\u0151tti, k\xFCl\xF6n l\xE9p\xE9sben (Kubernetes Job / pipeline stage)
\`\`\`

**Expand\u2013contract migr\xE1ci\xF3** \u2013 nulla le\xE1ll\xE1s\xFA s\xE9ma-v\xE1ltoztat\xE1s. A s\xE9ma \xE9s a k\xF3d nem v\xE1ltozhat egyszerre, mert a deploy alatt a r\xE9gi \xE9s az \xFAj verzi\xF3 **egyszerre** fut:

1. **Expand**: \xFAj oszlop hozz\xE1ad\xE1sa nullable-k\xE9nt (a r\xE9gi k\xF3d ezt figyelmen k\xEDv\xFCl hagyja).
2. **Migrate**: az \xFAj k\xF3d mindk\xE9t oszlopba \xEDr, olvas\xE1skor az \xFAjat prefer\xE1lja; h\xE1tt\xE9rben adatfelt\xF6lt\xE9s.
3. **Contract**: a r\xE9gi oszlop t\xF6rl\xE9se, miut\xE1n minden p\xE9ld\xE1ny az \xFAj verzi\xF3t futtatja.

Ugyanez oszlop \xE1tnevez\xE9s\xE9n\xE9l \xE9s t\xEDpusv\xE1lt\xE1sn\xE1l is \u2013 a "gyors \xE1tnevez\xE9s" migr\xE1ci\xF3 a legbiztosabb m\xF3dja egy \xE9les le\xE1ll\xE1s el\u0151id\xE9z\xE9s\xE9nek.

**Deployment strat\xE9gi\xE1k:** rolling update (alap\xE9rtelmez\xE9s Kubernetesben), blue-green (k\xE9t teljes k\xF6rnyezet, azonnali v\xE1lt\xE1s \xE9s vissza\xE1ll\xE1s), canary (a forgalom kis sz\xE1zal\xE9ka az \xFAj verzi\xF3ra, metrik\xE1k figyel\xE9se mellett). Mindh\xE1rom felt\xE9telezi, hogy az API \xE9s az adatb\xE1zis **visszafel\xE9 kompatibilis** \u2013 ez\xE9rt elv\xE1laszthatatlan az expand\u2013contract gyakorlatt\xF3l \xE9s a feature flagekt\u0151l.

Mit ker\xFClj el: ne futtass migr\xE1ci\xF3t automatikusan t\xF6bb replik\xE1b\xF3l; ne engedj adatveszt\xE9ssel j\xE1r\xF3 migr\xE1ci\xF3t fel\xFClvizsg\xE1lat n\xE9lk\xFCl \xE9lesbe; ne k\xF6sd \xF6ssze a s\xE9ma- \xE9s k\xF3dv\xE1ltoz\xE1st egyetlen, atomikusnak felt\xE9telezett l\xE9p\xE9sbe; ne tarts k\xF6rnyezetenk\xE9nt elt\xE9r\u0151 buildet.

## Biztons\xE1gi alapok API-kn\xE1l \u2013 gyakorlati ellen\u0151rz\u0151lista (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/security/ {#biztonsagi-alapok-api-knal-gyakorlati-ellenorzolista}

**Bemenet \xE9s adatkezel\xE9s**

- Param\xE9terezett lek\xE9rdez\xE9s mindenhol (EF Core alapb\xF3l, Dapper eset\xE9n figyelj r\xE1); \`FromSqlRaw\` helyett \`FromSqlInterpolated\`.
- T\xFAlk\xF6t\xE9s (mass assignment) elker\xFCl\xE9se: a v\xE9gpont **dedik\xE1lt request DTO-t** fogadjon, soha ne k\xF6zvetlen\xFCl az entit\xE1st.
- F\xE1jlfelt\xF6lt\xE9sn\xE9l: m\xE9retkorl\xE1t (\`RequestSizeLimit\`), MIME/kiterjeszt\xE9s ellen\u0151rz\xE9s tartalom alapj\xE1n, a f\xE1jl t\xE1rol\xE1sa a webgy\xF6k\xE9ren k\xEDv\xFCl, gener\xE1lt f\xE1jln\xE9v.
- V\xE1laszban csak az szerepeljen, amit a h\xEDv\xF3 l\xE1that \u2013 ne szerializ\xE1lj entit\xE1st bels\u0151 mez\u0151kkel.

**Fejl\xE9cek \xE9s transzport**

\`\`\`csharp
app.UseHsts();
app.UseHttpsRedirection();
app.Use(async (context, next) =>
{
    context.Response.Headers.XContentTypeOptions = "nosniff";
    context.Response.Headers.XFrameOptions = "DENY";
    context.Response.Headers["Referrer-Policy"] = "no-referrer";
    context.Response.Headers["Content-Security-Policy"] = "default-src 'none'; frame-ancestors 'none'";
    await next();
});
\`\`\`

**CORS** \u2013 konkr\xE9t originek, soha nem \`AllowAnyOrigin()\` + \`AllowCredentials()\` egy\xFCtt:

\`\`\`csharp
builder.Services.AddCors(o => o.AddPolicy("spa", p => p
    .WithOrigins("https://app.example.com")
    .AllowAnyHeader().AllowAnyMethod().AllowCredentials()));
\`\`\`

**Titkos\xEDt\xE1s \xE9s titkok**

- \`IDataProtectionProvider\` a r\xF6vid \xE9let\u0171, alkalmaz\xE1son bel\xFCli titkos\xEDt\xE1shoz; t\xF6bb p\xE9ld\xE1ny eset\xE9n a kulcsgy\u0171r\u0171t k\xF6z\xF6s t\xE1rol\xF3ba (Redis, blob) kell tenni, k\xFCl\xF6nben a p\xE9ld\xE1nyok nem tudj\xE1k egym\xE1s s\xFCtijeit/tokenjeit feldolgozni.
- Jelsz\xF3 t\xE1rol\xE1sa kiz\xE1r\xF3lag lass\xFA, s\xF3zott KDF-fel (\`PasswordHasher<T>\` = PBKDF2-HMAC-SHA256, Argon2, bcrypt) \u2013 soha nem egyszeri, s\xF3zatlan SHA-256 hash-sel.
- Titkok: Key Vault / managed identity (l\xE1sd "Konfigur\xE1ci\xF3 \xE9s titokkezel\xE9s" fejezet).

**Tokenek \xE9s munkamenet**

- R\xF6vid \xE9lettartam\xFA access token + refresh token rot\xE1ci\xF3val; a refresh token visszavonhat\xF3 legyen.
- Token-valid\xE1ci\xF3: \`ValidateIssuer\`, \`ValidateAudience\`, \`ValidateLifetime\`, \`ClockSkew\` sz\u0171k\xEDt\xE9se.
- Ne tarts jogosults\xE1gi list\xE1t kiz\xE1r\xF3lag a tokenben, ha az azonnali visszavon\xE1s k\xF6vetelm\xE9ny.

**Napl\xF3z\xE1s \xE9s megfigyelhet\u0151s\xE9g**

- Soha ne logolj jelsz\xF3t, tokent, k\xE1rtyasz\xE1mot, szem\xE9lyes adatot \u2013 Serilog destructuring policy vagy explicit maszkol\xE1s.
- Napl\xF3zd a biztons\xE1gi esem\xE9nyeket (sikertelen bejelentkez\xE9s, jogosults\xE1g-megtagad\xE1s, adminisztrat\xEDv m\u0171velet) audit\xE1lhat\xF3an.
- A hibav\xE1lasz ne sziv\xE1rogtasson bels\u0151 r\xE9szletet: \xE9les k\xF6rnyezetben \`ProblemDetails\` stack trace n\xE9lk\xFCl (l\xE1sd "Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails" fejezet).

**F\xFCgg\u0151s\xE9gek \xE9s ell\xE1t\xE1si l\xE1nc**

\`\`\`bash
dotnet list package --vulnerable --include-transitive
dotnet list package --deprecated
\`\`\`

Ezt tedd a CI r\xE9sz\xE9v\xE9, \xE9s kapcsold be a Dependabot/Renovate automatikus friss\xEDt\xE9seket. \xC9les buildhez \xE9rdemes \`Directory.Packages.props\`-szal k\xF6zponti verzi\xF3kezel\xE9st \xE9s NuGet package lockfile-t haszn\xE1lni a reproduk\xE1lhat\xF3 build\xE9rt.

Mit ker\xFClj el: ne \xEDrj saj\xE1t kriptogr\xE1fi\xE1t; ne kapcsold ki a tan\xFAs\xEDtv\xE1ny-ellen\u0151rz\xE9st "mert fejleszt\xE9sben zavar\xF3" (ez a be\xE1ll\xEDt\xE1s el\u0151bb-ut\xF3bb \xE9lesbe ker\xFCl); ne b\xEDzz semmilyen kliensoldali ellen\u0151rz\xE9sben; ne felt\xE9telezd, hogy a bels\u0151 h\xE1l\xF3zat biztons\xE1gos (zero trust: a szolg\xE1ltat\xE1sok k\xF6z\xF6tti h\xEDv\xE1sok is legyenek hiteles\xEDtve).

## Konkurenciakezel\xE9s halad\xF3 szinten \u2013 adatb\xE1zis, throttling, \xFCtk\xF6z\xE9sfelold\xE1s (EF Core 1.0+) https://learn.microsoft.com/ef/core/saving/concurrency {#konkurenciakezeles-halado-szinten-adatbazis-throttling-utkozesfeloldas}

*Verzi\xF3: \`ExecuteUpdate\`: EF Core 7.0; \`Parallel.ForEachAsync\`: .NET 6; \`System.Threading.Lock\`: .NET 9 / C# 13.*

Ez a fejezet a h\xE1rom megl\xE9v\u0151 konkurencia-fejezetet k\xF6ti \xF6ssze \xE9s eg\xE9sz\xEDti ki: "EF Core Concurrency control" (adatb\xE1zis, optimista z\xE1rol\xE1s), "Alkalmaz\xE1sszint\u0171 (in-memory) Concurrency Handling" (mem\xF3riabeli megosztott \xE1llapot) \xE9s "Elosztott lock \xE9s h\xE1tt\xE9rfolyamatok t\xF6bb p\xE9ld\xE1nyban" (t\xF6bb processz).

### A n\xE9gy szint, ahol a konkurencia jelentkezik

| Szint | Probl\xE9ma | Eszk\xF6z |
|---|---|---|
| Egy processz, t\xF6bb sz\xE1l | megosztott mem\xF3ria (\`Singleton\`, statikus mez\u0151, cache) | \`lock\`, \`Interlocked\`, \`SemaphoreSlim\`, \`Concurrent*\` gy\u0171jtem\xE9nyek |
| Egy adatb\xE1zis, t\xF6bb tranzakci\xF3 | lost update, piszkos olvas\xE1s | optimista (\`RowVersion\`) vagy pesszimista z\xE1rol\xE1s, izol\xE1ci\xF3s szint |
| T\xF6bb alkalmaz\xE1sp\xE9ld\xE1ny | egy job k\xE9tszer fut | elosztott lock, \xFCtemez\u0151 klaszter-m\xF3d, egyedi index |
| T\xF6bb szolg\xE1ltat\xE1s | elosztott folyamat konzisztenci\xE1ja | Saga, Outbox/Inbox, idempotencia |

### Optimista \xFCtk\xF6z\xE9s kezel\xE9se \u2013 nem el\xE9g elkapni, meg is kell oldani

\`\`\`csharp
public async Task<Result> UpdatePriceAsync(Guid productId, decimal newPrice, CancellationToken ct)
{
    const int maxAttempts = 3;

    for (var attempt = 1; attempt <= maxAttempts; attempt++)
    {
        var product = await _db.Products.FirstAsync(p => p.Id == productId, ct);
        product.ChangePrice(newPrice);

        try
        {
            await _db.SaveChangesAsync(ct);
            return Result.Success();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            var entry = ex.Entries.Single();
            var databaseValues = await entry.GetDatabaseValuesAsync(ct);

            if (databaseValues is null)
                return Result.Failure("A term\xE9ket id\u0151k\xF6zben t\xF6r\xF6lt\xE9k.");

            // "database wins" \xFAjrat\xF6lt\xE9s, majd \xFAjra megpr\xF3b\xE1ljuk az \xFCzleti m\u0171veletet
            entry.OriginalValues.SetValues(databaseValues);

            if (attempt == maxAttempts)
                return Result.Failure("A rekordot id\u0151k\xF6zben m\xE1s m\xF3dos\xEDtotta, pr\xF3b\xE1lja \xFAjra.");
        }
    }

    return Result.Failure("Sikertelen ment\xE9s.");
}
\`\`\`

H\xE1rom \xFCtk\xF6z\xE9sfelold\xE1si strat\xE9gia l\xE9tezik: **client wins** (a felhaszn\xE1l\xF3 \xE9rt\xE9ke fel\xFCl\xEDrja a m\xE1sik\xE9t \u2013 csak akkor, ha az adat term\xE9szete ezt megengedi), **database wins** (a m\u0171velet eldob\xE1sra ker\xFCl, a felhaszn\xE1l\xF3 \xFAjrat\xF6lt), \xE9s **merge** (mez\u0151nk\xE9nti \xF6sszef\xE9s\xFCl\xE9s, esetleg a felhaszn\xE1l\xF3 bevon\xE1s\xE1val). Egy API-n\xE1l a leggyakoribb helyes v\xE1lasz a \`409 Conflict\` az aktu\xE1lis \xE1llapottal egy\xFCtt, hogy a kliens d\xF6nthessen.

### Atomi friss\xEDt\xE9s olvas\xE1s n\xE9lk\xFCl

Ha nincs sz\xFCks\xE9g a domain logik\xE1ra, a legolcs\xF3bb konkurenciakezel\xE9s az, ha az adatb\xE1zis v\xE9gzi a m\u0171veletet egyetlen utas\xEDt\xE1sban \u2013 \xEDgy nincs is mit \xFCtk\xF6ztetni:

\`\`\`csharp
// EF Core 7+: egyetlen UPDATE utas\xEDt\xE1s, bet\xF6lt\xE9s \xE9s change tracking n\xE9lk\xFCl
var affected = await _db.Products
    .Where(p => p.Id == productId && p.Stock >= quantity)
    .ExecuteUpdateAsync(s => s.SetProperty(p => p.Stock, p => p.Stock - quantity), ct);

if (affected == 0) return Result.Failure("Nincs elegend\u0151 k\xE9szlet.");
\`\`\`

Ez a minta ("felt\xE9teles UPDATE") k\xE9szletkezel\xE9sn\xE9l, egyenleg-levon\xE1sn\xE1l \xE9s sz\xE1ml\xE1l\xF3-n\xF6vel\xE9sn\xE9l a legmegb\xEDzhat\xF3bb megold\xE1s. Figyelem: az \`ExecuteUpdate\`/\`ExecuteDelete\` **megker\xFCli a change trackinget**, az interceptorokat \xE9s a domain esem\xE9nyeket \u2013 csak ott haszn\xE1ld, ahol ez tudatos d\xF6nt\xE9s.

### Pesszimista z\xE1rol\xE1s \u2013 amikor t\xE9nyleg kell

Optimista z\xE1rol\xE1s akkor j\xF3, ha az \xFCtk\xF6z\xE9s **ritka**. Ha viszont gyakori \xE9s az \xFAjrapr\xF3b\xE1lkoz\xE1s dr\xE1ga (pl. hossz\xFA, t\xF6bb l\xE9p\xE9ses foglal\xE1si folyamat), pesszimista z\xE1rol\xE1s a helyes:

\`\`\`csharp
await using var tx = await _db.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted, ct);

// SQL Server: sor szint\u0171 \xEDr\xE1si z\xE1r a tranzakci\xF3 v\xE9g\xE9ig
var seat = await _db.Seats
    .FromSql($"SELECT * FROM Seats WITH (UPDLOCK, ROWLOCK) WHERE Id = {seatId}")
    .SingleAsync(ct);

// PostgreSQL megfelel\u0151je: SELECT ... FOR UPDATE
seat.Reserve(customerId);
await _db.SaveChangesAsync(ct);
await tx.CommitAsync(ct);
\`\`\`

Amire \xFCgyelni kell: **mindig ugyanabban a sorrendben** z\xE1rold az er\u0151forr\xE1sokat (k\xFCl\xF6nben deadlock); tartsd a tranzakci\xF3t a lehet\u0151 legr\xF6videbb ideig; soha ne h\xEDvj k\xFCls\u0151 API-t vagy v\xE1rj felhaszn\xE1l\xF3i bemenetre nyitott tranzakci\xF3 alatt.

### Izol\xE1ci\xF3s szintek \u2013 mit engednek meg

| Szint | Piszkos olvas\xE1s | Nem ism\xE9telhet\u0151 olvas\xE1s | Fantom sor |
|---|---|---|---|
| Read Uncommitted | lehet | lehet | lehet |
| Read Committed (alap\xE9rtelmezett) | nem | lehet | lehet |
| Repeatable Read | nem | nem | lehet |
| Serializable | nem | nem | nem |
| Snapshot | nem | nem | nem (verzi\xF3z\xE1ssal, blokkol\xE1s n\xE9lk\xFCl) |

A magasabb izol\xE1ci\xF3 t\xF6bb z\xE1rat \xE9s t\xF6bb deadlockot jelent. SQL Serveren a \`READ_COMMITTED_SNAPSHOT\` bekapcsol\xE1sa gyakran a legjobb kompromisszum: az olvas\xF3k nem blokkolj\xE1k az \xEDr\xF3kat.

### Deadlock kezel\xE9se

A deadlock nem programoz\xE1si hiba, hanem \xFCzemi jelens\xE9g \u2013 az adatb\xE1zis az egyik tranzakci\xF3t \xE1ldozatk\xE9nt megszak\xEDtja (SQL Server: 1205-\xF6s hiba). A helyes v\xE1lasz **\xFAjrapr\xF3b\xE1lkoz\xE1s**, nem a hiba elnyel\xE9se:

\`\`\`csharp
builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(cs, sql =>
    sql.EnableRetryOnFailure(maxRetryCount: 3, maxRetryDelay: TimeSpan.FromSeconds(5), errorNumbersToAdd: [1205])));
\`\`\`

Fontos: az \`EnableRetryOnFailure\` (execution strategy) **nem kombin\xE1lhat\xF3 automatikusan** k\xE9zzel ind\xEDtott tranzakci\xF3val \u2013 ilyenkor a teljes tranzakci\xF3t az execution strategy-n kereszt\xFCl kell futtatni:

\`\`\`csharp
var strategy = _db.Database.CreateExecutionStrategy();
await strategy.ExecuteAsync(async () =>
{
    await using var tx = await _db.Database.BeginTransactionAsync(ct);
    // ... m\u0171veletek ...
    await tx.CommitAsync(ct);
});
\`\`\`

### P\xE1rhuzamoss\xE1g korl\xE1toz\xE1sa (throttling)

A korl\xE1tlan p\xE1rhuzamoss\xE1g \xF6nmag\xE1ban is konkurenciahiba: kimer\xEDti a kapcsolatk\xE9szletet vagy megfojtja a k\xFCls\u0151 szolg\xE1ltat\xE1st.

\`\`\`csharp
// .NET 6+: be\xE9p\xEDtett p\xE1rhuzamoss\xE1g-korl\xE1t
await Parallel.ForEachAsync(orderIds,
    new ParallelOptions { MaxDegreeOfParallelism = 8, CancellationToken = ct },
    async (orderId, token) => await ProcessOrderAsync(orderId, token));

// vagy SemaphoreSlim-mel, ha Task.WhenAll kell
using var throttle = new SemaphoreSlim(8);
var tasks = orderIds.Select(async id =>
{
    await throttle.WaitAsync(ct);
    try { return await ProcessOrderAsync(id, ct); }
    finally { throttle.Release(); }
});
var results = await Task.WhenAll(tasks);
\`\`\`

**A \`DbContext\` nem sz\xE1lbiztos** \u2013 soha ne ind\xEDts p\xE1rhuzamos m\u0171veleteket ugyanazon a p\xE9ld\xE1nyon (\`Task.WhenAll\` k\xE9t \`DbContext\` lek\xE9rdez\xE9ssel \`InvalidOperationException\`-t dob). P\xE1rhuzamos adatb\xE1zis-munk\xE1hoz scope-onk\xE9nt k\xFCl\xF6n \`DbContext\` kell (\`IDbContextFactory<T>\`).

### Egyedis\xE9g kik\xE9nyszer\xEDt\xE9se versenyhelyzetben

A "megn\xE9zem, l\xE9tezik-e, \xE9s ha nem, l\xE9trehozom" mint\xE1t **nem** lehet ellen\u0151rz\xE9ssel megoldani \u2013 k\xE9t p\xE1rhuzamos k\xE9r\xE9s mindkett\u0151 "nem l\xE9tezik" v\xE1laszt kaphat. Az egyetlen megb\xEDzhat\xF3 megold\xE1s az adatb\xE1zis egyedi indexe, \xE9s a \`DbUpdateException\` elkap\xE1sa:

\`\`\`csharp
try { await _db.SaveChangesAsync(ct); }
catch (DbUpdateException ex) when (ex.InnerException is SqlException { Number: 2601 or 2627 })
{
    return Result.Failure("Ez az e-mail c\xEDm m\xE1r regisztr\xE1lva van.");
}
\`\`\`

Mit ker\xFClj el: ne oldj meg adatb\xE1zis-szint\u0171 konkurenci\xE1t \`lock\`-kal (t\xF6bb p\xE9ld\xE1nyn\xE1l nem m\u0171k\xF6dik); ne emeld az izol\xE1ci\xF3s szintet "biztos, ami biztos" alapon; ne nyelj el \`DbUpdateConcurrencyException\`-t; ne felejtsd el, hogy az \xFAjrapr\xF3b\xE1lkoz\xE1s csak akkor biztons\xE1gos, ha a m\u0171velet idempotens.

## Async/await halad\xF3 szint \u2013 ValueTask, thread pool, timeout, fire-and-forget (ValueTask: .NET Core 2.0+ / C# 7.0+) https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask {#async-await-halado-szint-valuetask-thread-pool-timeout-fire-and-forget}

*Verzi\xF3: \`ValueTask\`: .NET Core 2.1 / C# 7; \`Task.WaitAsync\`: .NET 6; \`CancellationTokenSource.CancelAsync\`: .NET 8.*

Az "Async/await Best Practices \xE9s CancellationToken" \xE9s a "Mikor haszn\xE1ljunk sync \xE9s mikor async API met\xF3dusokat" fejezetek az alapokat fedik; itt a napi munk\xE1ban el\u0151ker\xFCl\u0151 nehezebb esetek k\xF6vetkeznek.

### Mire j\xF3 az async val\xF3j\xE1ban \u2013 \xE9s mire nem

Az \`async\`/\`await\` **nem gyors\xEDtja** az egyes k\xE9r\xE9seket, hanem **sk\xE1l\xE1zhat\xF3s\xE1got** ad: az I/O v\xE1rakoz\xE1s alatt (adatb\xE1zis, HTTP, f\xE1jl) a sz\xE1l visszaker\xFCl a thread poolba, \xE9s m\xE1s k\xE9r\xE9st szolg\xE1lhat ki. Ebb\u0151l k\xF6vetkezik:

- **I/O-k\xF6t\xF6tt** m\u0171velet \u2192 \`async\` (adatb\xE1zis, h\xE1l\xF3zat, f\xE1jl, \xFCzenetsor).
- **CPU-k\xF6t\xF6tt** m\u0171velet \u2192 \xF6nmag\xE1ban nem indokol asyncet; ha egy webk\xE9r\xE9sben hossz\xFA sz\xE1m\xEDt\xE1s van, az \`Task.Run\` **nem** seg\xEDt (ugyanabb\xF3l a thread poolb\xF3l vesz sz\xE1lat, csak egy v\xE1lt\xE1ssal t\xF6bbet) \u2013 ilyet h\xE1tt\xE9rfolyamatba vagy k\xFCl\xF6n workerbe kell tenni.
- Egy kicsi, gyorsan lefut\xF3 szinkron m\u0171velet aszinkronn\xE1 alak\xEDt\xE1sa (\`Task.Run\` k\xF6r\xE9 csomagolva) rontja a teljes\xEDtm\xE9nyt.

### Thread pool starvation \u2013 a leggyakoribb \xE9les teljes\xEDtm\xE9nyprobl\xE9ma

Ha b\xE1rhol a k\xF3dban szinkron blokkol\xE1s t\xF6rt\xE9nik egy async m\u0171velet f\xF6l\xF6tt (\`.Result\`, \`.Wait()\`, \`.GetAwaiter().GetResult()\`, \`Task.WhenAll(...).Wait()\`), a sz\xE1l blokkolva v\xE1rakozik. Terhel\xE9s alatt a thread pool kifogy, a v\xE1laszid\u0151k m\xE1sodpercekre n\u0151nek, a CPU m\xE9gis alacsony marad \u2013 ez a klasszikus t\xFCnetegy\xFCttes.

\`\`\`csharp
// T\xDCNET: alacsony CPU, magas k\xE9sleltet\xE9s, n\xF6vekv\u0151 ThreadPool queue length
// Diagnosztika: dotnet-counters monitor --counters System.Runtime
//   -> threadpool-queue-length, threadpool-thread-count
\`\`\`

A jav\xEDt\xE1s mindig ugyanaz: **async all the way** \u2013 a v\xE9gpont\xF3l a legals\xF3 I/O h\xEDv\xE1sig v\xE9gig \`await\`.

### \`ValueTask\` \u2013 mikor van \xE9rtelme

A \`Task\` egy heap-en allok\xE1lt objektum. Ha egy gyakran h\xEDvott met\xF3dus **az esetek t\xF6bbs\xE9g\xE9ben szinkron m\xF3don, azonnal** tud eredm\xE9nyt adni (pl. cache-tal\xE1lat), a \`ValueTask<T>\` elker\xFCli ezt az allok\xE1ci\xF3t:

\`\`\`csharp
public ValueTask<Product> GetAsync(Guid id, CancellationToken ct)
{
    if (_cache.TryGetValue(id, out var cached))
        return ValueTask.FromResult(cached);        // nincs allok\xE1ci\xF3

    return new ValueTask<Product>(LoadAsync(id, ct)); // ritka \xE1g: val\xF3di async munka
}
\`\`\`

Szigor\xFA szab\xE1lyok: egy \`ValueTask\`-ot **csak egyszer** szabad await-elni, nem szabad t\xF6bbsz\xF6r olvasni a \`.Result\`-j\xE1t, \xE9s nem szabad p\xE1rhuzamosan await-elni (ha t\xF6bbsz\xF6r kell, \`.AsTask()\`-kal alak\xEDtsd \xE1t). Publikus API-n csak akkor v\xE1laszd, ha a m\xE9r\xE9s indokolja \u2013 alap\xE9rtelmez\xE9sben \`Task\` a helyes.

### Timeout \xE9s lemond\xE1s \xF6sszekapcsol\xE1sa

\`\`\`csharp
// .NET 6+: b\xE1rmely Task id\u0151korl\xE1toz\xE1sa
var result = await GetDataAsync(ct).WaitAsync(TimeSpan.FromSeconds(5), ct);

// K\xE9r\xE9s-lemond\xE1s \xE9s saj\xE1t timeout egy\xFCtt
using var timeoutCts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
using var linkedCts = CancellationTokenSource.CreateLinkedTokenSource(ct, timeoutCts.Token);

try
{
    await _client.GetAsync(url, linkedCts.Token);
}
catch (OperationCanceledException) when (timeoutCts.IsCancellationRequested)
{
    // saj\xE1t id\u0151t\xFAll\xE9p\xE9s \u2013 ez m\xE1s eset, mint amikor a kliens szak\xEDtotta meg a k\xE9r\xE9st
    throw new TimeoutException("A k\xFCls\u0151 szolg\xE1ltat\xE1s nem v\xE1laszolt id\u0151ben.");
}
\`\`\`

Az \`OperationCanceledException\` **nem hiba**: ha a kliens lecsatlakozott, ne logold hibak\xE9nt \xE9s ne riasszon r\xE1 a monitoring.

### Kiv\xE9telek \`Task.WhenAll\` eset\xE9n

A \`Task.WhenAll\` await-el\xE9sekor **csak az els\u0151** kiv\xE9tel dob\xF3dik \xFAjra, pedig t\xF6bb task is elbukhatott:

\`\`\`csharp
var tasks = ids.Select(id => ProcessAsync(id, ct)).ToArray();
var all = Task.WhenAll(tasks);

try { await all; }
catch (Exception)
{
    // az \xD6SSZES hiba itt \xE9rhet\u0151 el
    foreach (var inner in all.Exception!.InnerExceptions)
        _logger.LogError(inner, "Feldolgoz\xE1si hiba");
    throw;
}
\`\`\`

### Fire-and-forget \u2013 helyesen

A \`_ = DoSomethingAsync();\` mint\xE1ban a kiv\xE9tel elveszik, \xE9s az alkalmaz\xE1s le\xE1ll\xE1sa megszak\xEDthatja a f\xE9lbehagyott munk\xE1t. Helyette:

- **R\xF6vid, elveszthet\u0151 munka** (pl. audit log): \`Channel<T>\` + \`BackgroundService\` (l\xE1sd "Channels \xE9s IAsyncEnumerable" fejezet).
- **Nem elveszthet\u0151 munka**: Outbox + \xFCzenetsor (l\xE1sd "Outbox Pattern"), vagy \xFCtemez\u0151 (Quartz.NET).
- Ha m\xE9gis elind\xEDtasz h\xE1tt\xE9rmunk\xE1t a k\xE9r\xE9sb\u0151l, **soha ne** add tov\xE1bb a k\xE9r\xE9s \`CancellationToken\`-j\xE9t (a v\xE1lasz elk\xFCld\xE9sekor megszakadna), \xE9s mindig csomagold \`try/catch\`-be.

### Aszinkron inicializ\xE1l\xE1s \xE9s \`IAsyncDisposable\`

Konstruktor nem lehet async. Az egyszeri, dr\xE1ga inicializ\xE1l\xE1sra \`Lazy<Task<T>>\` vagy \`AsyncLazy\` minta val\xF3:

\`\`\`csharp
private readonly Lazy<Task<Config>> _config;
public ConfigProvider(IConfigLoader loader) =>
    _config = new Lazy<Task<Config>>(() => loader.LoadAsync(), LazyThreadSafetyMode.ExecutionAndPublication);

public Task<Config> GetAsync() => _config.Value;   // csak egyszer t\xF6lt be, p\xE1rhuzamos h\xEDv\xE1sn\xE1l is
\`\`\`

Aszinkron er\u0151forr\xE1s felszabad\xEDt\xE1s\xE1hoz \`IAsyncDisposable\` + \`await using\` (a \`Dispose()\`-ban **soha** ne blokkolj async h\xEDv\xE1sra).

### Szinkron API k\xE9nyszere

Ha egy interf\xE9sz (pl. r\xE9gi k\xF6nyvt\xE1r) szinkron met\xF3dust v\xE1r, a legkev\xE9sb\xE9 rossz megold\xE1s nem a \`.Result\`, hanem az, hogy a h\xEDv\xE1si l\xE1nc egy pontj\xE1n, kontroll alatt blokkolsz \u2013 vagy \`AsyncHelper\` mint\xE1val k\xFCl\xF6n thread poolon futtatod. A helyes ir\xE1ny mindig az interf\xE9sz async-es\xEDt\xE9se.

Mit ker\xFClj el: \`async void\` (kiv\xE9ve event handler); \`Task.Run\` webk\xE9r\xE9sen bel\xFCli I/O-hoz; \`.Result\`/\`.Wait()\` b\xE1rhol az alkalmaz\xE1sk\xF3dban; \`CancellationToken\` elhagy\xE1sa I/O met\xF3dusokb\xF3l; \`ValueTask\` t\xF6bbsz\xF6ri await-el\xE9se; h\xE1tt\xE9rmunka ind\xEDt\xE1sa a k\xE9r\xE9s tokenj\xE9vel.

## System.Text.Json vs. Newtonsoft.Json \u2013 melyiket mikor (System.Text.Json: .NET Core 3.0+) https://learn.microsoft.com/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft {#system-text-json-vs-newtonsoft-json-melyiket-mikor}

*Verzi\xF3: \`Newtonsoft.Json\` (Json.NET): 2008-t\xF3l, .NET Framework kora \xF3ta; \`System.Text.Json\`: .NET Core 3.0-t\xF3l, ASP.NET Core alap\xE9rtelmezett szerializ\xE1l\xF3ja .NET Core 3.0 \xF3ta.*

A .NET-ben ma k\xE9t elterjedt JSON k\xF6nyvt\xE1r van. A **\`System.Text.Json\` (STJ)** a be\xE9p\xEDtett, alap\xE9rtelmezett megold\xE1s: gyors, kev\xE9s allok\xE1ci\xF3val dolgozik, \`Span<T>\`/UTF-8 alap\xFA, t\xE1mogatja a forr\xE1sk\xF3d-gener\xE1tort \xE9s a Native AOT-t. A **\`Newtonsoft.Json\` (Json.NET)** a r\xE9gebbi, rendk\xEDv\xFCl rugalmas, funkci\xF3gazdag k\xF6nyvt\xE1r, amely sok olyat tud, amit az STJ sz\xE1nd\xE9kosan nem.

### F\u0151 k\xFCl\xF6nbs\xE9gek

| Szempont | System.Text.Json | Newtonsoft.Json |
|---|---|---|
| Teljes\xEDtm\xE9ny / allok\xE1ci\xF3 | l\xE9nyegesen gyorsabb, kevesebb allok\xE1ci\xF3 | lassabb, t\xF6bb allok\xE1ci\xF3 |
| Alap\xE9rtelmezett kis-/nagybet\u0171 | **\xE9rz\xE9keny** (opci\xF3val kikapcsolhat\xF3) | nem \xE9rz\xE9keny |
| Trailing comma, megjegyz\xE9s a JSON-ban | alapb\xF3l hib\xE1t ad (opci\xF3val engedhet\u0151) | megenged\u0151 |
| \`DateTime\` kezel\xE9s | szigor\xFA ISO 8601 | megenged\u0151bb, sokf\xE9le form\xE1tum |
| Sz\xE1mok stringk\xE9nt (\`"42"\`) | alapb\xF3l hiba (\`NumberHandling\` opci\xF3val) | automatikusan konvert\xE1l |
| Polimorfizmus | \`[JsonDerivedType]\` (.NET 7-t\u0151l) | \`TypeNameHandling\` (biztons\xE1gi kock\xE1zat) |
| K\xF6rk\xF6r\xF6s referencia | \`ReferenceHandler.Preserve\` | \`PreserveReferencesHandling\` |
| Priv\xE1t mez\u0151k / setterek | korl\xE1tozott | teljes k\xF6r\u0171 |
| \`JsonPath\`, \`LINQ to JSON\` | nincs (csak \`JsonNode\`/\`JsonDocument\`) | van (\`JObject\`, \`SelectToken\`) |
| \`DataTable\`, \`dynamic\`, \`ExpandoObject\` | nem/korl\xE1tozott | t\xE1mogatott |
| Forr\xE1sk\xF3d-gener\xE1tor, Native AOT | t\xE1mogatott | nem |
| Egyedi szerz\u0151d\xE9s-manipul\xE1ci\xF3 | \`IJsonTypeInfoResolver\` (.NET 8) | \`ContractResolver\` (\xE9rettebb) |

### Melyiket haszn\xE1ld

**System.Text.Json \u2013 ez az alap\xE9rtelmezett v\xE1laszt\xE1s**, ha: \xFAj projektet \xEDrsz; a teljes\xEDtm\xE9ny \xE9s a mem\xF3riahaszn\xE1lat sz\xE1m\xEDt (nagy forgalm\xFA API, \xFCzenetfeldolgoz\xE1s); Native AOT vagy trimming a c\xE9l; a szerz\u0151d\xE9seket te kontroll\xE1lod (saj\xE1t DTO-k).

**Newtonsoft.Json \u2013 akkor indokolt**, ha: egy megl\xE9v\u0151 rendszer viselked\xE9s\xE9t kell pontosan reproduk\xE1lni (migr\xE1ci\xF3s kock\xE1zat); a bej\xF6v\u0151 JSON "rendetlen" \xE9s megenged\u0151 feldolgoz\xE1s kell; olyan funkci\xF3 kell, amit az STJ nem tud (\`JObject\`-alap\xFA dinamikus feldolgoz\xE1s, \`SelectToken\`, \`DataTable\`, \xF6sszetett \`ContractResolver\`); JSON Patch (\`Microsoft.AspNetCore.JsonPatch\` \u2013 b\xE1r .NET 10-t\u0151l m\xE1r van STJ-alap\xFA v\xE1ltozat is); harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 k\xF6nyvt\xE1r megk\xF6veteli.

### Visszakapcsol\xE1s ASP.NET Core-ban (ha t\xE9nyleg kell)

\`\`\`bash
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
\`\`\`

\`\`\`csharp
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});
\`\`\`

Vegyes haszn\xE1lat is lehets\xE9ges: az API glob\xE1lisan STJ-t haszn\xE1l, \xE9s csak egyetlen, probl\xE9m\xE1s integr\xE1ci\xF3n\xE1l h\xEDvsz k\xE9zzel \`JsonConvert\`-et.

### Migr\xE1ci\xF3 Newtonsoft.Json-r\xF3l \u2013 a leggyakoribb buktat\xF3k

\`\`\`csharp
var options = new JsonSerializerOptions
{
    PropertyNameCaseInsensitive = true,                     // Newtonsoft alap\xE9rtelmezett viselked\xE9se
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    NumberHandling = JsonNumberHandling.AllowReadingFromString,
    ReadCommentHandling = JsonCommentHandling.Skip,
    AllowTrailingCommas = true,
    Converters = { new JsonStringEnumConverter() }          // enum n\xE9v szerint, nem sz\xE1mk\xE9nt
};
\`\`\`

Tov\xE1bbi elt\xE9r\xE9sek, amik csendben megv\xE1ltoztatj\xE1k a viselked\xE9st:

- **Attrib\xFAtumok nem cser\xE9lhet\u0151k fel**: \`[JsonProperty("name")]\` \u2192 \`[JsonPropertyName("name")]\`, \`[JsonIgnore]\` mindkett\u0151ben l\xE9tezik, de **m\xE1s n\xE9vt\xE9rben** (\`Newtonsoft.Json\` vs \`System.Text.Json.Serialization\`) \u2013 ha mindk\xE9t csomag jelen van, k\xF6nny\u0171 rosszat import\xE1lni, \xE9s a jel\xF6l\xE9s n\xE9m\xE1n hat\xE1stalan lesz.
- Az STJ alapb\xF3l **nem szerializ\xE1l mez\u0151ket**, csak property-ket (\`IncludeFields = true\` kell hozz\xE1), \xE9s a \`private set\` accessorokat is m\xE1sk\xE9pp kezeli.
- Az STJ alap\xE9rtelmez\xE9sben **escape-eli** a nem ASCII karaktereket (az \xE9kezetes bet\u0171k \`\\uXXXX\` form\xE1ban jelennek meg); ha ez zavar\xF3: \`Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping\` \u2013 ez csak akkor biztons\xE1gos, ha a kimenet nem ker\xFCl k\xF6zvetlen\xFCl HTML-be.
- \`TypeNameHandling.All\` (Newtonsoft) haszn\xE1lata deszerializ\xE1ci\xF3n\xE1l **ismert biztons\xE1gi kock\xE1zat** (tetsz\u0151leges t\xEDpus p\xE9ld\xE1nyos\xEDt\xE1sa) \u2013 ne vidd \xE1t STJ-be sem, helyette explicit \`[JsonDerivedType]\` diszkrimin\xE1tor.

Mit ker\xFClj el: ne haszn\xE1ld mindk\xE9t k\xF6nyvt\xE1rat ugyanazon a szerz\u0151d\xE9sen (elt\xE9r\u0151 attrib\xFAtumok, elt\xE9r\u0151 eredm\xE9ny); ne migr\xE1lj Newtonsoft-r\xF3l STJ-re szerz\u0151d\xE9ses/j\xF3v\xE1hagy\xF3 tesztek n\xE9lk\xFCl (a k\xFCl\xF6nbs\xE9gek csendesek, nem ford\xEDt\xE1si hib\xE1k); ne hozz l\xE9tre \xFAj \`JsonSerializerOptions\` p\xE9ld\xE1nyt h\xEDv\xE1sonk\xE9nt (l\xE1sd "System.Text.Json halad\xF3 szint" fejezet).

## Enterprise szint\u0171 glob\xE1lis hibakezel\xE9s \u2013 teljes fel\xE1ll\xE1s (IExceptionHandler: .NET 8+) https://learn.microsoft.com/aspnet/core/fundamentals/error-handling {#enterprise-szintu-globalis-hibakezeles-teljes-felallas}

*Verzi\xF3: \`IExceptionHandler\` + \`AddProblemDetails()\`: .NET 8-t\xF3l; RFC 9457 (a 7807 ut\xF3dja): 2023; \`IProblemDetailsService\`: .NET 7-t\u0151l.*

A "Glob\xE1lis kiv\xE9telkezel\xE9s \xE9s ProblemDetails" fejezet az alapokat mutatja. Egy \xE9les, nagyv\xE1llalati rendszerben a hibakezel\xE9s nem egyetlen \`try/catch\`, hanem **n\xE9gy \xF6sszehangolt d\xF6nt\xE9s**: milyen kiv\xE9tel-hierarchi\xE1t haszn\xE1lunk, hol keletkezik a hiba, mit l\xE1t a kliens, \xE9s mit l\xE1t az \xFCzemeltet\xE9s.

### 1. Kiv\xE9tel-hierarchia \u2013 a hibat\xEDpus, nem a sz\xF6veg hordozza a jelent\xE9st

\`\`\`csharp
// Alap: minden sz\xE1nd\xE9kos, kezelt alkalmaz\xE1s-hiba k\xF6z\xF6s \u0151se
public abstract class AppException(string message, Exception? inner = null) : Exception(message, inner)
{
    /// G\xE9pileg feldolgozhat\xF3, stabil hibak\xF3d \u2013 a kliens ERRE \xE1gazik, nem a sz\xF6vegre.
    public abstract string ErrorCode { get; }
    public abstract int StatusCode { get; }
    /// Kliensnek megjelen\xEDthet\u0151-e a Message, vagy csak generikus sz\xF6veg mehet ki
    public virtual bool IsMessageSafeToExpose => true;
    /// Kieg\xE9sz\xEDt\u0151 adatok a ProblemDetails "extensions" mez\u0151j\xE9be
    public IDictionary<string, object?> Extensions { get; } = new Dictionary<string, object?>();
}

public sealed class NotFoundException(string resource, object key)
    : AppException($"A(z) {resource} nem tal\xE1lhat\xF3: {key}")
{
    public override string ErrorCode => "resource_not_found";
    public override int StatusCode => StatusCodes.Status404NotFound;
}

public sealed class BusinessRuleViolationException(string code, string message) : AppException(message)
{
    public override string ErrorCode => code;                       // pl. "insufficient_stock"
    public override int StatusCode => StatusCodes.Status422UnprocessableEntity;
}

public sealed class ConcurrencyConflictException(string message, object? currentState = null) : AppException(message)
{
    public override string ErrorCode => "concurrency_conflict";
    public override int StatusCode => StatusCodes.Status409Conflict;
    public object? CurrentState { get; } = currentState;
}

public sealed class ExternalServiceException(string service, Exception inner)
    : AppException($"A(z) {service} szolg\xE1ltat\xE1s h\xEDv\xE1sa meghi\xFAsult.", inner)
{
    public override string ErrorCode => "upstream_unavailable";
    public override int StatusCode => StatusCodes.Status502BadGateway;
    public override bool IsMessageSafeToExpose => false;            // ne sziv\xE1rogjon bels\u0151 topol\xF3gia
}
\`\`\`

Alapelv: **a domain nem tud a HTTP-r\u0151l**. Ha ez zavar\xF3 (tiszta Clean Architecture), akkor a domain csak \`DomainException\`-t dob \`ErrorCode\`-dal, \xE9s a HTTP-st\xE1tusz lek\xE9pez\xE9se az API r\xE9tegben, egy \`switch\` kifejez\xE9sben t\xF6rt\xE9nik. A Result minta (l\xE1sd "Result Pattern / Railway-Oriented Programming" fejezet) az elv\xE1rt \xFCzleti hib\xE1kra alternat\xEDva; a kiv\xE9tel a val\xF3ban kiv\xE9teles esetekre marad.

### 2. T\xF6bb, l\xE1ncolt exception handler \u2013 felel\u0151ss\xE9genk\xE9nt egy

A .NET 8 \`IExceptionHandler\` l\xE1ncolhat\xF3: a regisztr\xE1ci\xF3 sorrendj\xE9ben h\xEDv\xF3dnak, \xE9s az els\u0151 \`true\`-t visszaad\xF3 kezeli le. \xCDgy nem egy ezersoros \`switch\` lesz bel\u0151le.

\`\`\`csharp
builder.Services.AddProblemDetails(options =>
{
    // minden hibav\xE1laszra automatikusan r\xE1ker\xFCl\u0151 k\xF6z\xF6s mez\u0151k
    options.CustomizeProblemDetails = ctx =>
    {
        ctx.ProblemDetails.Instance = $"{ctx.HttpContext.Request.Method} {ctx.HttpContext.Request.Path}";
        ctx.ProblemDetails.Extensions["traceId"] = Activity.Current?.TraceId.ToString()
            ?? ctx.HttpContext.TraceIdentifier;
        ctx.ProblemDetails.Extensions["requestId"] = ctx.HttpContext.TraceIdentifier;
        ctx.ProblemDetails.Extensions["timestamp"] = DateTimeOffset.UtcNow;
    };
});

builder.Services.AddExceptionHandler<ValidationExceptionHandler>();   // 400 + mez\u0151nk\xE9nti hib\xE1k
builder.Services.AddExceptionHandler<AppExceptionHandler>();          // ismert alkalmaz\xE1s-hib\xE1k
builder.Services.AddExceptionHandler<FallbackExceptionHandler>();     // minden m\xE1s -> 500
\`\`\`

\`\`\`csharp
public sealed class AppExceptionHandler(IProblemDetailsService problemDetailsService,
    IHostEnvironment env, ILogger<AppExceptionHandler> logger) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext context, Exception exception, CancellationToken ct)
    {
        if (exception is not AppException appException) return false;

        // A kezelt \xFCzleti hiba NEM error szint\u0171 log \u2013 k\xFCl\xF6nben el\xE1rasztja a riaszt\xE1sokat
        logger.LogWarning(exception, "Kezelt alkalmaz\xE1s-hiba: {ErrorCode}", appException.ErrorCode);

        context.Response.StatusCode = appException.StatusCode;

        var problem = new ProblemDetails
        {
            Status = appException.StatusCode,
            Title = TitleFor(appException.StatusCode),
            Type = $"https://errors.example.com/{appException.ErrorCode}",   // dokument\xE1ci\xF3s URI
            Detail = appException.IsMessageSafeToExpose
                ? appException.Message
                : "A k\xE9r\xE9s feldolgoz\xE1sa sor\xE1n hiba t\xF6rt\xE9nt."
        };
        problem.Extensions["errorCode"] = appException.ErrorCode;
        foreach (var (key, value) in appException.Extensions) problem.Extensions[key] = value;
        if (env.IsDevelopment()) problem.Extensions["exception"] = exception.ToString();

        return await problemDetailsService.TryWriteAsync(new ProblemDetailsContext
        {
            HttpContext = context, ProblemDetails = problem, Exception = exception
        });
    }

    private static string TitleFor(int status) => status switch
    {
        404 => "Nem tal\xE1lhat\xF3", 409 => "\xDCtk\xF6z\xE9s", 422 => "Feldolgozhatatlan k\xE9r\xE9s",
        502 => "K\xFCls\u0151 szolg\xE1ltat\xE1s hiba", _ => "Hiba"
    };
}
\`\`\`

A \`FallbackExceptionHandler\` a val\xF3ban v\xE1ratlan hib\xE1kat kezeli: **\`LogError\` (ez riaszt\xE1st \xE9rdemel)**, a v\xE1lasz pedig generikus 500-as \`ProblemDetails\`, kiz\xE1r\xF3lag a \`traceId\`-vel \u2013 hogy a felhaszn\xE1l\xF3 ezt bedikt\xE1lva a support meg tudja tal\xE1lni a pontos k\xE9r\xE9st a logban.

### 3. Amit a kliens l\xE1t \u2013 stabil szerz\u0151d\xE9s

\`\`\`json
{
  "type": "https://errors.example.com/insufficient_stock",
  "title": "Feldolgozhatatlan k\xE9r\xE9s",
  "status": 422,
  "detail": "A P-123 term\xE9kb\u0151l csak 3 db van k\xE9szleten.",
  "instance": "POST /api/v1/orders",
  "errorCode": "insufficient_stock",
  "traceId": "0af7651916cd43dd8448eb211c80319c",
  "timestamp": "2026-08-05T10:22:41.881Z",
  "productId": "P-123",
  "available": 3
}
\`\`\`

Szab\xE1lyok, amiket \xE9rdemes csapatszinten kimondani: a \`status\` + \`errorCode\` a **szerz\u0151d\xE9s** (verzi\xF3zni kell, mint egy API-t); a \`detail\` **ember sz\xE1m\xE1ra** sz\xF3l \xE9s lokaliz\xE1lhat\xF3; a mez\u0151nk\xE9nti valid\xE1ci\xF3s hib\xE1k a \`errors\` objektumban mennek (\`ValidationProblemDetails\`); soha nem ker\xFCl ki stack trace, connection string, bels\u0151 hosztn\xE9v, SQL vagy m\xE1s rendszer nyers hiba\xFCzenete.

### 4. Amit az \xFCzemeltet\xE9s l\xE1t

- **Loggol\xE1si szint fegyelme**: v\xE1rt \xFCzleti hiba \u2192 \`Warning\` (vagy \`Information\`); kezeletlen kiv\xE9tel \u2192 \`Error\`; a \`OperationCanceledException\` kliens-lemond\xE1sn\xE1l \u2192 \`Debug\`, nem hiba.
- **Korrel\xE1ci\xF3**: minden hibalogban benne van a \`TraceId\` (l\xE1sd a k\xF6vetkez\u0151 fejezetet), \xEDgy a hibav\xE1lasz \xE9s a log \xF6sszekapcsolhat\xF3.
- **Metrika**: \`errorCode\` dimenzi\xF3val (kis kardinalit\xE1s!) sz\xE1ml\xE1l\xF3, hogy riaszthat\xF3 legyen a "hirtelen megn\u0151tt a \`payment_declined\` ar\xE1nya".
- **A kiv\xE9tel maga is telemetria**: \`activity?.AddException(ex)\` \xE9s \`RecordException = true\` az OTel instrument\xE1ci\xF3ban.

### 5. A pipeline t\xF6bbi hiba\xFAtja

A \`UseExceptionHandler()\` **nem fog el mindent**. Amire k\xFCl\xF6n gondolni kell:

\`\`\`csharp
app.UseExceptionHandler();          // kiv\xE9telek
app.UseStatusCodePages();           // "\xFCres" 401/403/404 v\xE1laszok is kapjanak ProblemDetails-t
\`\`\`

- A kiv\xE9telkezel\u0151t a pipeline **legelej\xE9re** kell tenni (a middleware sorrendr\u0151l l\xE1sd a "Middleware r\xE9szletesen" fejezetet), k\xFCl\xF6nben az alatta l\xE9v\u0151 middleware-ek hib\xE1i kimaradnak.
- A \`Kestrel\` szintj\xE9n keletkez\u0151 hib\xE1k (t\xFAl nagy k\xE9r\xE9s, hib\xE1s protokoll) sosem \xE9rnek el a middleware-ig.
- **H\xE1tt\xE9rfolyamatok \xE9s \xFCzenet-fogyaszt\xF3k** nem r\xE9szei a HTTP pipeline-nak: ott saj\xE1t, explicit hibakezel\xE9s kell (retry, DLQ \u2013 l\xE1sd a MassTransit/Kafka fejezeteket), k\xFCl\xF6nben egy kezeletlen kiv\xE9tel meg\xE1ll\xEDtja a \`BackgroundService\`-t (a .NET 6+ alap\xE9rtelmez\xE9s szerint le is \xE1ll\xEDtja a hostot).
- A \`startup\`-hib\xE1k (rossz konfigur\xE1ci\xF3) \`ValidateOnStart()\`-tal der\xFCljenek ki, ne fut\xE1sid\u0151ben.

Mit ker\xFClj el: ne kapkodj el kiv\xE9telt csak az\xE9rt, hogy \`null\`-t adj vissza; ne haszn\xE1ld a kiv\xE9telt vez\xE9rl\xE9si szerkezetk\xE9nt gyakori \xFCzleti \xFAtvonalon (dr\xE1ga a stack unwinding \u2013 ott a Result minta a helyes); ne ford\xEDts minden hib\xE1t 500-ra (a kliens nem tudja, \xFAjrapr\xF3b\xE1lhat\xF3-e); ne logold ugyanazt a kiv\xE9telt minden r\xE9tegben \xFAjra (egyszer, a legfels\u0151, kontextussal rendelkez\u0151 ponton).

## Correlation ID \u2013 k\xE9r\xE9s-k\xF6vet\xE9s v\xE9gpontt\xF3l v\xE9gpontig (.NET 6+ (Activity/OpenTelemetry)) https://learn.microsoft.com/dotnet/core/diagnostics/distributed-tracing {#correlation-id-keres-kovetes-vegpontol-vegpontig}

*Verzi\xF3: W3C Trace Context (\`traceparent\`) nat\xEDv t\xE1mogat\xE1s: .NET 5-t\u0151l (\`Activity\`, \`DistributedContextPropagator\`).*

### Mi a c\xE9lja

Egy elosztott rendszerben egyetlen felhaszn\xE1l\xF3i m\u0171velet t\xF6bb szolg\xE1ltat\xE1son, \xFCzenetsoron \xE9s h\xE1tt\xE9rfolyamaton megy \xE1t. A **correlation ID** az az azonos\xEDt\xF3, amely ezt az eg\xE9szet **egy logikai egys\xE9gk\xE9nt** azonos\xEDtja, \xEDgy:

1. **Hibakeres\xE9s**: egy hibabejelent\xE9shez tartoz\xF3 \xF6sszes logsor kikeres\xE9se az \xF6sszes szolg\xE1ltat\xE1sb\xF3l, egyetlen sz\u0171r\xE9ssel.
2. **T\xE1mogat\xE1s**: a hibav\xE1laszban visszaadott azonos\xEDt\xF3t a felhaszn\xE1l\xF3 bedikt\xE1lja, \xE9s pontosan az \u0151 k\xE9r\xE9se ker\xFCl el\u0151.
3. **K\xE9sleltet\xE9s-elemz\xE9s**: melyik szolg\xE1ltat\xE1s melyik l\xE9p\xE9se volt a lass\xFA (ez m\xE1r a distributed tracing).
4. **Audit\xE1l\xE1s**: ki, mikor, milyen m\u0171veletet ind\xEDtott, \xE9s annak milyen tov\xE1bbhat\xE1sai lettek (kik\xFCld\xF6tt \xFCzenetek, m\xE1sodlagos \xEDr\xE1sok).
5. **Idempotencia \xE9s duplik\xE1tum-felismer\xE9s** t\xE1mogat\xE1sa (b\xE1r arra dedik\xE1lt kulcs val\xF3, l\xE1sd "Idempotency Pattern API-kban").

### H\xE1rom fogalom, amit nem \xE9rdemes \xF6sszekeverni

| Fogalom | \xC9lettartam | Ki adja |
|---|---|---|
| **TraceId** (W3C) | a teljes elosztott m\u0171velet | az els\u0151 szolg\xE1ltat\xE1s, majd propag\xE1l\xF3dik |
| **SpanId** | egy m\u0171velet-l\xE9p\xE9s (egy szolg\xE1ltat\xE1s, egy h\xEDv\xE1s) | minden szolg\xE1ltat\xE1s maga |
| **Correlation ID** (\xFCzleti) | egy \xFCzleti folyamat, ak\xE1r napokig (pl. rendel\xE9s \xE9let\xFAtja) | az alkalmaz\xE1s, \xFCzleti azonos\xEDt\xF3k\xE9nt |

**A .NET-ben ma nem kell saj\xE1t correlation ID mechanizmust \xEDrni**: a \`System.Diagnostics.Activity\` a W3C Trace Contextet automatikusan kezeli, a \`traceparent\` HTTP fejl\xE9c a \`HttpClient\` h\xEDv\xE1sokon mag\xE1t\xF3l utazik, \xE9s \`Activity.Current.TraceId\` mindenhol el\xE9rhet\u0151. Saj\xE1t \`X-Correlation-ID\` fejl\xE9c akkor indokolt, ha k\xFCls\u0151 partnerek vagy legacy rendszerek nem t\xE1mogatj\xE1k a \`traceparent\`-et.

### Beemel\xE9s a logokba (a legfontosabb l\xE9p\xE9s)

\`\`\`csharp
// Serilog: minden logsor kapjon TraceId/SpanId-t
builder.Host.UseSerilog((ctx, cfg) => cfg
    .ReadFrom.Configuration(ctx.Configuration)
    .Enrich.FromLogContext()
    .Enrich.WithSpan()                       // Serilog.Enrichers.Span
    .WriteTo.Console(new CompactJsonFormatter()));
\`\`\`

\`\`\`csharp
// \xDCzleti kontextus hozz\xE1ad\xE1sa a k\xE9r\xE9s teljes \xE9let\xFAtj\xE1ra (scope)
app.Use(async (context, next) =>
{
    var correlationId = context.Request.Headers["X-Correlation-ID"].FirstOrDefault()
        ?? Activity.Current?.TraceId.ToString()
        ?? context.TraceIdentifier;

    // v\xE1laszban is adjuk vissza \u2013 a kliens/support ezt l\xE1tja
    context.Response.Headers["X-Correlation-ID"] = correlationId;
    Activity.Current?.SetTag("correlation.id", correlationId);

    using (Serilog.Context.LogContext.PushProperty("CorrelationId", correlationId))
    using (Serilog.Context.LogContext.PushProperty("TenantId", context.User.FindFirst("tenant_id")?.Value))
    using (Serilog.Context.LogContext.PushProperty("UserId", context.User.FindFirst("sub")?.Value))
    {
        await next();
    }
});
\`\`\`

Ezt a middleware-t a pipeline **elej\xE9re** kell tenni, hogy minden k\xE9s\u0151bbi log \xE9s hiba is tartalmazza.

### \xC1tvitel \xFCzenetsoron \xE9s h\xE1tt\xE9rfolyamaton

A HTTP-vel ellent\xE9tben a broker nem propag\xE1l automatikusan mindent: a MassTransit \xE9s a Wolverine igen (\`ConversationId\`/\`CorrelationId\` be\xE9p\xEDtett fejl\xE9cek), nyers Confluent.Kafka eset\xE9n k\xE9zzel kell:

\`\`\`csharp
// Producer: a trace context be\xEDr\xE1sa az \xFCzenet fejl\xE9c\xE9be
var propagator = Propagators.DefaultTextMapPropagator;
propagator.Inject(new PropagationContext(Activity.Current!.Context, Baggage.Current), message.Headers,
    (headers, key, value) => headers.Add(key, Encoding.UTF8.GetBytes(value)));

// Consumer: kiolvas\xE1s \xE9s az \xFAj Activity sz\xFCl\u0151j\xE9nek be\xE1ll\xEDt\xE1sa
var parentContext = propagator.Extract(default, result.Message.Headers,
    (headers, key) => headers.TryGetLastBytes(key, out var bytes) ? [Encoding.UTF8.GetString(bytes)] : []);

using var activity = ActivitySource.StartActivity("process order", ActivityKind.Consumer, parentContext.ActivityContext);
\`\`\`

\`BackgroundService\`-ben, \xFCtemezett job-ban nincs bej\xF6v\u0151 k\xE9r\xE9s, ez\xE9rt ott **saj\xE1t** root \`Activity\`-t kell ind\xEDtani \u2013 \xEDgy a job fut\xE1sa is \xF6n\xE1ll\xF3, kereshet\u0151 trace lesz.

### Kliensoldal \xE9s teljes l\xE1nc

A b\xF6ng\xE9sz\u0151/mobil app is gener\xE1lhat azonos\xEDt\xF3t (\`X-Request-ID\`), amit a backend baggage-be tesz, \xEDgy a frontend hibajelent\xE9s \xE9s a backend log \xF6sszekapcsolhat\xF3. Az OpenTelemetry \`Baggage\` API-ja ezt kulcs-\xE9rt\xE9k p\xE1rk\xE9nt propag\xE1lja a teljes l\xE1ncon \u2013 **de** csak nem \xE9rz\xE9keny adatot tegy\xE9l bele, mert minden downstream szolg\xE1ltat\xE1s l\xE1tja.

Mit ker\xFClj el: ne gener\xE1lj \xFAj azonos\xEDt\xF3t minden szolg\xE1ltat\xE1sban (akkor nincs mit korrel\xE1lni \u2013 csak akkor gener\xE1lj, ha nem j\xF6tt be); ne tedd szem\xE9lyes adatot vagy tokent a correlation ID-be vagy a baggage-be; ne b\xEDzz vakon a kliens \xE1ltal k\xFCld\xF6tt azonos\xEDt\xF3ban (valid\xE1ld a form\xE1tumot \xE9s hossz\xE1t \u2013 log injection ellen); ne \xEDrj k\xE9zi propag\xE1l\xE1st oda, ahol az \`Activity\` m\xE1r megteszi.

## Object Mother \xE9s Test Data Builder \u2013 halad\xF3, kett\u0151s c\xE9l\xFA megval\xF3s\xEDt\xE1s {#object-mother-es-test-data-builder-halado-kettos-celu-megvalositas}

*Verzi\xF3: \`Guid.CreateVersion7()\` (rendezett GUID): .NET 9-t\u0151l; kor\xE1bban saj\xE1t sequential GUID vagy \`NewId\` (MassTransit) haszn\xE1lhat\xF3.*

A "Teszt adat-el\u0151\xE1ll\xEDt\xE1si patternek" fejezet az alapokat mutatja. \xC9les projektben a legnagyobb nyeres\xE9g egy **kett\u0151s c\xE9l\xFA** builder: ugyanaz a le\xEDr\xE1s haszn\xE1lhat\xF3 tiszta unit tesztben (mem\xF3ri\xE1ban, adatb\xE1zis n\xE9lk\xFCl) **\xE9s** integr\xE1ci\xF3s/funkcion\xE1lis tesztben (perziszt\xE1lva, val\xF3di adatb\xE1zisba).

### Azonos\xEDt\xF3-strat\xE9gia: melyik illik enterprise alkalmaz\xE1shoz

*R\xE9szletes \xF6sszehasonl\xEDt\xE1s (ULID, Snowflake, HashIds, ShortGuid, index-hat\xE1sok) az "Azonos\xEDt\xF3-gener\xE1l\xE1si strat\xE9gi\xE1k .NET-ben" fejezetben.*

| Megold\xE1s | El\u0151ny | H\xE1tr\xE1ny | Mikor |
|---|---|---|---|
| \`int\`/\`bigint\` identity | legkisebb, klaszterezett indexre ide\xE1lis | nem gener\xE1lhat\xF3 kliensen, kisziv\xE1rogtatja a mennyis\xE9get, migr\xE1ci\xF3/merge neh\xE9z | bels\u0151, egy adatb\xE1zisos rendszer |
| \`Guid\` (v4, random) | kliensen gener\xE1lhat\xF3, glob\xE1lisan egyedi | **v\xE9letlen sorrend \u2192 indexfragment\xE1l\xF3d\xE1s**, lapsz\xE9tv\xE1g\xE1s | ha nincs jobb |
| **\`Guid\` v7 (id\u0151rendezett)** | kliensen gener\xE1lhat\xF3 **\xE9s** rendezett (j\xF3 index-lokalit\xE1s), be\xE9p\xEDtett | 16 b\xE1jt, l\xE9trehoz\xE1si id\u0151t hordoz | **ez az alap\xE9rtelmezett v\xE1laszt\xE1s els\u0151dleges kulcsra** |
| **NanoID / ULID** (string) | r\xF6vid, URL-bar\xE1t, ember \xE1ltal m\xE1solhat\xF3 | string kulcs (nagyobb index), k\xFCl\xF6n k\xF6nyvt\xE1r | **publikus, URL-ben megjelen\u0151 azonos\xEDt\xF3ra** |

Enterprise gyakorlat: **bels\u0151 els\u0151dleges kulcs = \`Guid.CreateVersion7()\`** (kliensoldali gener\xE1l\xE1s miatt a domain objektum m\xE1r azonos\xEDt\xF3val sz\xFCletik, ami az Outbox \xE9s a saga korrel\xE1ci\xF3 miatt is fontos), \xE9s ha kell **publikus, "besz\xE9des" azonos\xEDt\xF3, akkor k\xFCl\xF6n mez\u0151** (NanoID vagy \xFCzleti azonos\xEDt\xF3, pl. \`ORD-2026-000123\`). A kett\u0151 elv\xE1laszt\xE1sa az\xE9rt j\xF3, mert a publikus azonos\xEDt\xF3 form\xE1tuma k\xE9s\u0151bb v\xE1ltoztathat\xF3 a s\xE9ma \xE9s a k\xFCls\u0151 kulcsok \xE9rint\xE9se n\xE9lk\xFCl.

\`\`\`csharp
public static class Ids
{
    /// Rendezett, kliensen gener\xE1lhat\xF3 technikai kulcs (index-bar\xE1t)
    public static Guid NewTechnicalId() => Guid.CreateVersion7();

    /// R\xF6vid, URL-bar\xE1t publikus azonos\xEDt\xF3 (NanoID-szer\u0171, \xFCtk\xF6z\xE9sbiztos hosszal)
    private const string Alphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford base32: nincs I, L, O, U
    public static string NewPublicId(int length = 12)
    {
        var buffer = RandomNumberGenerator.GetBytes(length);
        return string.Create(length, buffer, (span, bytes) =>
        {
            for (var i = 0; i < span.Length; i++) span[i] = Alphabet[bytes[i] % Alphabet.Length];
        });
    }
}
\`\`\`

### Object Mother \u2013 neves\xEDtett, \xFCzleti jelent\xE9s\u0171 forgat\xF3k\xF6nyvek

\`\`\`csharp
/// Object Mother: MIT jelent egy tipikus eset. A "mi\xE9rt ilyen" a n\xE9vben van.
public static class Orders
{
    public static OrderBuilder ANewDraftOrder() => new();

    public static OrderBuilder APaidOrderWithTwoItems() => new OrderBuilder()
        .WithItem(Products.AStandardProduct(), quantity: 2)
        .WithItem(Products.ADiscountedProduct(), quantity: 1)
        .Paid();

    public static OrderBuilder AnOverdueUnpaidOrder() => new OrderBuilder()
        .WithItem(Products.AStandardProduct(), quantity: 1)
        .PlacedAt(DateTimeOffset.UtcNow.AddDays(-45))
        .AwaitingPayment();

    public static OrderBuilder AnOrderForTenant(Guid tenantId) => new OrderBuilder().ForTenant(tenantId);
}
\`\`\`

### Test Data Builder \u2013 kett\u0151s c\xE9l\xFA: mem\xF3ri\xE1ban vagy perziszt\xE1lva

A kulcs\xF6tlet: a \`BuildAsync\` **opcion\xE1lis** \`DbContext\`-et \xE9s \`CancellationToken\`-t fogad. Ha van perzisztencia-kontextus, ment; ha nincs, csak a mem\xF3riabeli objektumot adja vissza. \xCDgy egy tesztadat-le\xEDr\xE1s mindh\xE1rom tesztr\xE9tegben haszn\xE1lhat\xF3.

\`\`\`csharp
public sealed class OrderBuilder
{
    private Guid _id = Ids.NewTechnicalId();
    private string _publicId = Ids.NewPublicId();
    private Guid _tenantId = TestTenants.Default;
    private Guid _customerId = Ids.NewTechnicalId();
    private DateTimeOffset _placedAt = new(2026, 1, 15, 10, 0, 0, TimeSpan.Zero); // determinisztikus alap!
    private OrderStatus _status = OrderStatus.Draft;
    private readonly List<(ProductBuilder Product, int Quantity)> _items = [];
    private byte[]? _rowVersion;

    public OrderBuilder WithId(Guid id) { _id = id; return this; }
    public OrderBuilder ForTenant(Guid tenantId) { _tenantId = tenantId; return this; }
    public OrderBuilder ForCustomer(Guid customerId) { _customerId = customerId; return this; }
    public OrderBuilder PlacedAt(DateTimeOffset at) { _placedAt = at; return this; }
    public OrderBuilder WithItem(ProductBuilder product, int quantity) { _items.Add((product, quantity)); return this; }
    public OrderBuilder Paid() { _status = OrderStatus.Paid; return this; }
    public OrderBuilder AwaitingPayment() { _status = OrderStatus.AwaitingPayment; return this; }
    public OrderBuilder WithConcurrencyToken(byte[] rowVersion) { _rowVersion = rowVersion; return this; }

    /// Sok elem gyorsan, egyedi adatokkal
    public static IReadOnlyList<OrderBuilder> Many(int count, Action<OrderBuilder, int>? customize = null) =>
        Enumerable.Range(0, count).Select(i =>
        {
            var builder = new OrderBuilder().PlacedAt(new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero).AddDays(i));
            customize?.Invoke(builder, i);
            return builder;
        }).ToList();

    /// UNIT teszt: csak mem\xF3riabeli objektum, semmilyen I/O
    public Order Build()
    {
        var order = Order.Rehydrate(_id, _publicId, _tenantId, _customerId, _placedAt, _status);
        foreach (var (product, quantity) in _items)
            order.AddItem(product.Build(), quantity);

        if (_rowVersion is not null) order.SetRowVersionForTest(_rowVersion);
        return order;
    }

    /// INTEGR\xC1CI\xD3S / FUNKCION\xC1LIS teszt: ugyanaz az objektum, de perziszt\xE1lva.
    /// A CancellationToken jelenl\xE9te a jelz\xE9s, hogy val\xF3di I/O t\xF6rt\xE9nik.
    public async Task<Order> BuildAsync(AppDbContext db, CancellationToken cancellationToken)
    {
        // a hivatkozott aggreg\xE1tumok (term\xE9k, \xFCgyf\xE9l) is j\xF6jjenek l\xE9tre, ha m\xE9g nem l\xE9teznek
        foreach (var (product, _) in _items)
            await product.EnsurePersistedAsync(db, cancellationToken);

        var order = Build();
        db.Orders.Add(order);
        await db.SaveChangesAsync(cancellationToken);
        db.ChangeTracker.Clear();   // a teszt ne "l\xE1ssa" a bet\xF6lt\xF6tt entit\xE1st a tracker cache-\xE9b\u0151l
        return order;
    }
}
\`\`\`

Haszn\xE1lat a h\xE1rom tesztr\xE9tegben:

\`\`\`csharp
// 1. UNIT \u2013 nincs adatb\xE1zis, nincs async
[Fact]
public void Overdue_unpaid_order_can_be_cancelled()
{
    var order = Orders.AnOverdueUnpaidOrder().Build();

    var result = order.CancelDueToNonPayment(asOf: new DateTimeOffset(2026, 3, 1, 0, 0, 0, TimeSpan.Zero));

    result.IsSuccess.Should().BeTrue();
    order.Status.Should().Be(OrderStatus.Cancelled);
}

// 2. INTEGR\xC1CI\xD3S \u2013 val\xF3di adatb\xE1zis, egy szelet/handler tesztel\xE9se
[Fact]
public async Task Handler_marks_overdue_orders_as_cancelled()
{
    await using var db = _fixture.CreateDbContext();
    var order = await Orders.AnOverdueUnpaidOrder().BuildAsync(db, TestContext.Current.CancellationToken);

    await _handler.HandleAsync(new CancelOverdueOrders(), TestContext.Current.CancellationToken);

    var reloaded = await db.Orders.FindAsync([order.Id], TestContext.Current.CancellationToken);
    reloaded!.Status.Should().Be(OrderStatus.Cancelled);
}

// 3. FUNKCION\xC1LIS \u2013 a teljes API-n kereszt\xFCl
[Fact]
public async Task Get_order_returns_paid_order_with_items()
{
    await using var db = _fixture.CreateDbContext();
    var order = await Orders.APaidOrderWithTwoItems().BuildAsync(db, TestContext.Current.CancellationToken);

    var response = await _client.GetFromJsonAsync<OrderDto>($"/api/v1/orders/{order.PublicId}");

    response!.Items.Should().HaveCount(2);
}
\`\`\`

### Gyakorlati szempontok

- **Determinisztikus alap\xE9rt\xE9kek**: fix d\xE1tum (\`new DateTimeOffset(2026, 1, 15, ...)\`), ne \`DateTimeOffset.UtcNow\` \u2013 k\xFCl\xF6nben a teszt "n\xE9ha piros" lesz (pl. h\xF3napfordul\xF3n). Ha az alkalmaz\xE1s id\u0151t olvas, injekt\xE1lt \`TimeProvider\`/\`FakeTimeProvider\` (\`Microsoft.Extensions.TimeProvider.Testing\`) legyen m\xF6g\xF6tte.
- **Csak a teszt szempontj\xE1b\xF3l l\xE9nyeges adatot \xE1ll\xEDtsd be** a tesztben; minden m\xE1s maradjon a builder alap\xE9rt\xE9ke. A teszt \xEDgy dokument\xE1lja, mi sz\xE1m\xEDt.
- **Priv\xE1t setterek**: a domain invari\xE1nsokat ne ker\xFCld meg publikus setterekkel csak a teszt\xE9rt. Vagy legyen egy \`internal static Rehydrate(...)\` factory (\`InternalsVisibleTo\` a tesztprojektnek), vagy a builder is a val\xF3di domain m\u0171veleteket h\xEDvja (\`AddItem\`, \`Place\`, \`Pay\`) \u2013 ut\xF3bbi \xE9rt\xE9kesebb, mert mag\xE1t a domain API-t is haszn\xE1latba veszi.
- **Randomiz\xE1l\xE1s \xF3vatosan**: a Bogus/AutoFixture k\xE9nyelmes, de v\xE9letlen adatokkal a buk\xF3 teszt nem reproduk\xE1lhat\xF3 \u2013 ha haszn\xE1lod, **fix seeddel** (\`Randomizer.Seed = new Random(12345)\`), \xE9s a buk\xE1s logolja a seedet.
- **Egyedis\xE9g**: \`Guid\` v7 alap\xE9rtelmezett \xE9rt\xE9k minden builderben \u2013 \xEDgy ugyanaz a mother k\xE9tszer megh\xEDvva sem \xFCt egyedi indexbe.

Mit ker\xFClj el: ne k\xE9sz\xEDts egyetlen, mindenre alkalmas \`TestData.CreateOrder()\` met\xF3dust 15 param\xE9terrel; ne oszd meg ugyanazt a **p\xE9ld\xE1nyt** tesztek k\xF6z\xF6tt (a builder legyen \xFAj p\xE9ld\xE1ny minden h\xEDv\xE1sn\xE1l); ne perziszt\xE1lj tesztadatot unit tesztb\u0151l; ne \xEDrj olyan buildert, ami k\xF6zben az alkalmaz\xE1s API-j\xE1t is h\xEDvja HTTP-n \u2013 a tesztadat fel\xE9p\xEDt\xE9se ne az \xE9ppen tesztelt k\xF3dt\xF3l f\xFCggj\xF6n.

## Testing pyramid fel\xE1ll\xEDt\xE1sa \xE9s eldobhat\xF3 adatb\xE1zis tesztenk\xE9nt https://learn.microsoft.com/dotnet/core/testing/ {#testing-pyramid-felallitasa-es-eldobhato-adatbazis-tesztenkent}

*Verzi\xF3: xUnit v3 \`TestContext.Current.CancellationToken\`: 2024-t\u0151l; Respawn 6.x: .NET 6+; Testcontainers for .NET: .NET 6+.*

### A h\xE1rom r\xE9teg \u2013 mit tesztel, mennyi legyen bel\u0151le

| R\xE9teg | Mit tesztel | Mit cser\xE9l le | Fut\xE1sid\u0151 / teszt | Ar\xE1ny |
|---|---|---|---|---|
| **Unit** | domain logika, sz\xE1m\xEDt\xE1s, szab\xE1ly, egyetlen oszt\xE1ly viselked\xE9se | mindent (nincs I/O) | < 10 ms | ~70% |
| **Integration** | egy-egy technikai hat\xE1r: repository/handler + val\xF3di adatb\xE1zis, \xFCzenet-fogyaszt\xF3 + val\xF3di broker, EF mapping, SQL, migr\xE1ci\xF3 | csak a k\xFCls\u0151, harmadik f\xE9l rendszereket | 50\u2013500 ms | ~20% |
| **Functional (end-to-end az API-n)** | egy teljes use case a HTTP v\xE9gponton \xE1t: routing, modellk\xF6t\xE9s, auth, valid\xE1ci\xF3, tranzakci\xF3, v\xE1laszform\xE1tum | k\xFCls\u0151 fizet\xE9s/email/partner API | 200 ms \u2013 2 s | ~10% |

Egy gyakorlati elhat\xE1rol\xE1s, ami vit\xE1kat el\u0151z meg: **unit = nincs I/O \xE9s nincs \`async\` I/O; integration = val\xF3di infrastrukt\xFAra, de nincs HTTP; functional = a \`HttpClient\`-en kereszt\xFCl.**

Projektstrukt\xFAra:

\`\`\`
tests/
  Orders.UnitTests/           # gyors, p\xE1rhuzamosan fut, minden PR-en
  Orders.IntegrationTests/    # Testcontainers + val\xF3di DB/broker
  Orders.FunctionalTests/     # WebApplicationFactory + val\xF3di DB
  Orders.ArchitectureTests/   # NetArchTest szab\xE1lyok (l\xE1sd a vonatkoz\xF3 fejezetet)
  Orders.TestKit/             # Object Mother-\xF6k, builderek, fixture-\xF6k (mindh\xE1rom r\xE9teg haszn\xE1lja)
\`\`\`

\`\`\`bash
# CI: gyors visszajelz\xE9s el\u0151bb
dotnet test tests/Orders.UnitTests
dotnet test tests/Orders.ArchitectureTests
dotnet test tests/Orders.IntegrationTests
dotnet test tests/Orders.FunctionalTests
\`\`\`

### Adatb\xE1zis-izol\xE1l\xE1s: n\xE9gy technika, n\xF6vekv\u0151 izol\xE1ci\xF3val \xE9s k\xF6lts\xE9ggel

| Technika | Izol\xE1ci\xF3 | Sebess\xE9g | P\xE1rhuzamos\xEDthat\xF3 |
|---|---|---|---|
| Tranzakci\xF3, amit nem commitolunk | j\xF3 | leggyorsabb | igen, de a tesztelt k\xF3d nem nyithat saj\xE1t tranzakci\xF3t |
| Respawn (t\xE1bl\xE1k \xFCr\xEDt\xE9se teszt ut\xE1n) | j\xF3 | gyors | csak ha tesztenk\xE9nt k\xFCl\xF6n adatb\xE1zis van |
| **\xDAj adatb\xE1zis tesztoszt\xE1lyonk\xE9nt/tesztenk\xE9nt, majd eldob\xE1s** | **teljes** | k\xF6zepes | **igen** |
| \xDAj kont\xE9ner tesztenk\xE9nt | teljes | leglassabb | igen |

A harmadik a legjobb kompromisszum enterprise projektben: **egy** adatb\xE1zis-szerver kont\xE9ner indul (Testcontainers), \xE9s azon bel\xFCl **minden tesztoszt\xE1ly (collection) saj\xE1t, egyedi nev\u0171 adatb\xE1zist kap**, amit a v\xE9g\xE9n eldob.

### Egy kont\xE9ner, sablon-adatb\xE1zis, tesztenk\xE9nt friss adatb\xE1zis

A tr\xFCkk, amivel ez gyors is marad: a migr\xE1ci\xF3kat **egyszer** futtatjuk le egy sablon (template) adatb\xE1zison, \xE9s ut\xE1na minden teszt-adatb\xE1zis ennek **m\xE1solata** \u2013 \xEDgy nem kell \xFAjra migr\xE1lni (ami a legdr\xE1g\xE1bb l\xE9p\xE9s).

\`\`\`csharp
/// Egyszer indul a teljes tesztfut\xE1sra (xUnit assembly fixture)
public sealed class DatabaseServerFixture : IAsyncLifetime
{
    private readonly PostgreSqlContainer _container = new PostgreSqlBuilder()
        .WithImage("postgres:16-alpine")
        .WithDatabase("template_db")
        .WithUsername("test").WithPassword("test")
        .WithCleanUp(true)
        .Build();

    public string AdminConnectionString => _container.GetConnectionString();

    public async ValueTask InitializeAsync()
    {
        await _container.StartAsync();

        // a sablon adatb\xE1zis egyszeri fel\xE9p\xEDt\xE9se a VAL\xD3DI migr\xE1ci\xF3kkal
        var options = new DbContextOptionsBuilder<AppDbContext>().UseNpgsql(AdminConnectionString).Options;
        await using var db = new AppDbContext(options);
        await db.Database.MigrateAsync();

        // opcion\xE1lis: ritk\xE1n v\xE1ltoz\xF3 t\xF6rzsadat (lookup t\xE1bl\xE1k) is beker\xFClhet a sablonba
        await SeedReferenceDataAsync(db);
    }

    /// \xDAj, izol\xE1lt adatb\xE1zis a sablon m\xE1sol\xE1s\xE1val \u2013 migr\xE1ci\xF3 n\xE9lk\xFCl, ez\xE9rt gyors
    public async Task<string> CreateDatabaseAsync(string name)
    {
        await using var admin = new NpgsqlConnection(AdminConnectionString);
        await admin.OpenAsync();
        await using var cmd = admin.CreateCommand();
        cmd.CommandText = $"""CREATE DATABASE "{name}" TEMPLATE "template_db";""";
        await cmd.ExecuteNonQueryAsync();

        var csb = new NpgsqlConnectionStringBuilder(AdminConnectionString) { Database = name };
        return csb.ConnectionString;
    }

    public async Task DropDatabaseAsync(string name)
    {
        await using var admin = new NpgsqlConnection(AdminConnectionString);
        await admin.OpenAsync();
        await using var cmd = admin.CreateCommand();
        // FORCE: a nyitva maradt kapcsolatok lez\xE1r\xE1sa, hogy a DROP ne akadjon el
        cmd.CommandText = $"""DROP DATABASE IF EXISTS "{name}" WITH (FORCE);""";
        await cmd.ExecuteNonQueryAsync();
    }

    public async ValueTask DisposeAsync() => await _container.DisposeAsync();
}
\`\`\`

SQL Server eset\xE9n nincs \`TEMPLATE\`, de ugyanez el\xE9rhet\u0151: a sablon adatb\xE1zisr\xF3l k\xE9sz\xEDtett \`BACKUP\`/\`RESTORE\`, vagy a f\xE1jlok lev\xE1laszt\xE1sa \xE9s \`CREATE DATABASE ... FOR ATTACH\` m\xE1solatb\xF3l; egyszer\u0171bb (kicsit lassabb) v\xE1ltozat: \`CREATE DATABASE\` + \`Database.MigrateAsync()\` tesztoszt\xE1lyonk\xE9nt.

### A tesztoszt\xE1ly fel\xE1ll\xE1sa: friss adatb\xE1zis el\u0151tte, eldob\xE1s ut\xE1na

\`\`\`csharp
/// Minden tesztoszt\xE1ly (vagy collection) saj\xE1t adatb\xE1zist kap
public class DatabaseFixture(DatabaseServerFixture server) : IAsyncLifetime
{
    private readonly string _databaseName = $"test_{Guid.CreateVersion7():N}";
    public string ConnectionString { get; private set; } = string.Empty;

    public async ValueTask InitializeAsync() =>
        ConnectionString = await server.CreateDatabaseAsync(_databaseName);

    public AppDbContext CreateDbContext() =>
        new(new DbContextOptionsBuilder<AppDbContext>().UseNpgsql(ConnectionString).Options);

    // a teszt ut\xE1n az adatb\xE1zis TELJESEN elt\u0171nik \u2013 nincs marad\xE9k \xE1llapot, nincs sziv\xE1rg\xE1s teszt k\xF6z\xF6tt
    public async ValueTask DisposeAsync() => await server.DropDatabaseAsync(_databaseName);
}
\`\`\`

\`\`\`csharp
[Collection(nameof(DatabaseServerCollection))]
public class PlaceOrderTests(DatabaseServerFixture server) : IAsyncLifetime
{
    private DatabaseFixture _db = null!;
    private OrdersApiFactory _factory = null!;
    private HttpClient _client = null!;

    public async ValueTask InitializeAsync()
    {
        _db = new DatabaseFixture(server);
        await _db.InitializeAsync();

        _factory = new OrdersApiFactory(_db.ConnectionString);   // l\xE1sd "WebApplicationFactory" fejezet
        _client = _factory.CreateClient();
    }

    [Fact]
    public async Task Placing_an_order_persists_it_and_publishes_an_event()
    {
        var ct = TestContext.Current.CancellationToken;
        await using var db = _db.CreateDbContext();
        var product = await Products.AStandardProduct().BuildAsync(db, ct);

        var response = await _client.PostAsJsonAsync("/api/v1/orders",
            new { customerId = Guid.CreateVersion7(), lines = new[] { new { productId = product.Id, quantity = 2 } } }, ct);

        response.StatusCode.Should().Be(HttpStatusCode.Created);

        var harness = _factory.Services.GetTestHarness();
        (await harness.Published.Any<OrderPlaced>()).Should().BeTrue();
    }

    public async ValueTask DisposeAsync()
    {
        _factory.Dispose();
        await _db.DisposeAsync();     // itt t\xF6rl\u0151dik az adatb\xE1zis
    }
}
\`\`\`

### P\xE1rhuzamos\xEDt\xE1s \xE9s fut\xE1sid\u0151

- K\xFCl\xF6n adatb\xE1zis tesztoszt\xE1lyonk\xE9nt \u2192 a tesztoszt\xE1lyok **p\xE1rhuzamosan** futhatnak (xUnit ezt alapb\xF3l megteszi, ha nem ugyanabban a collectionben vannak). Ez a legnagyobb fut\xE1sid\u0151-nyeres\xE9g.
- A kont\xE9ner \xE9s a migr\xE1ci\xF3 **egyszer** fusson (assembly-szint\u0171 fixture), ne tesztenk\xE9nt.
- Adatb\xE1zis-tuning tesztk\xF6rnyezetre: \`fsync=off\`, \`full_page_writes=off\` (PostgreSQL), illetve tmpfs adatk\xF6nyvt\xE1r \u2013 tesztadatn\xE1l a tart\xF3ss\xE1g nem szempont, a sebess\xE9g igen.
- Ha a teljes k\xE9szlet \xEDgy is lass\xFA: k\xFCl\xF6n CI job a lass\xFA r\xE9tegeknek, \xE9s PR-en csak unit + architekt\xFAra + a m\xF3dos\xEDtott szelet integr\xE1ci\xF3s tesztjei futnak, a teljes k\xE9szlet \xE9jszaka/merge ut\xE1n.

Mit ker\xFClj el: ne osszatok meg egyetlen adatb\xE1zist a tesztek k\xF6z\xF6tt "majd figyel\xFCnk r\xE1" alapon (ez a flaky tesztek els\u0151 sz\xE1m\xFA oka); ne hagyj h\xE1tra adatb\xE1zist a fut\xE1s ut\xE1n (a \`WithCleanUp(true)\` \xE9s a \`DROP ... WITH (FORCE)\` err\u0151l sz\xF3l); ne ind\xEDts kont\xE9nert tesztmet\xF3dusonk\xE9nt; ne tegy\xE9l \xE9les connection stringet tesztkonfigur\xE1ci\xF3ba; ne \xEDrj funkcion\xE1lis tesztet olyan esetre, amit egy unit teszt is le tud fedni (a piramis a fut\xE1sid\u0151r\u0151l sz\xF3l).

## Middleware r\xE9szletesen \u2013 pipeline, sorrend, saj\xE1t middleware (ASP.NET Core 1.0+) https://learn.microsoft.com/aspnet/core/fundamentals/middleware/write {#middleware-reszletesen-pipeline-sorrend-sajat-middleware}

*Verzi\xF3: ASP.NET Core 1.0-t\xF3l; \`IMiddleware\` (factory-alap\xFA): ASP.NET Core 2.0-t\xF3l; endpoint filter (Minimal API): .NET 7-t\u0151l.*

### Mi a middleware szerepe

A middleware a HTTP k\xE9r\xE9s-feldolgoz\xE1s **l\xE1ncszeme**: minden k\xE9r\xE9s v\xE9gigmegy rajta oda- \xE9s vissza\xFAton (ez\xE9rt gyakran "hagyma" vagy "orosz baba" modellk\xE9nt \xEDrj\xE1k le). Egy middleware h\xE1rom dolgot tehet: feldolgozza a k\xE9r\xE9st \xE9s tov\xE1bbadja (\`await next()\`), m\xF3dos\xEDtja a v\xE1laszt a vissza\xFAton, vagy **r\xF6vidre z\xE1rja** a l\xE1ncot (nem h\xEDvja a \`next\`-et, azonnal v\xE1laszol \u2013 pl. 401).

Middleware-be az tartozik, ami **minden (vagy sok) k\xE9r\xE9sre** \xE9rv\xE9nyes, \xE9s **nem egy konkr\xE9t v\xE9gpont \xFCzleti dolga** \u2013 ezek a keresztir\xE1ny\xFA agg\xE1lyok (cross-cutting concerns):

1. Kiv\xE9telkezel\xE9s (\`UseExceptionHandler\`) \xE9s status code oldalak.
2. K\xE9r\xE9s/v\xE1lasz napl\xF3z\xE1s, correlation ID \xE9s log-scope be\xE1ll\xEDt\xE1sa.
3. Autentik\xE1ci\xF3, autoriz\xE1ci\xF3.
4. HTTPS \xE1tir\xE1ny\xEDt\xE1s, HSTS, biztons\xE1gi fejl\xE9cek, CORS.
5. Rate limiting, request size limit, timeouts.
6. T\xF6m\xF6r\xEDt\xE9s (\`UseResponseCompression\`), statikus f\xE1jlok kiszolg\xE1l\xE1sa.
7. Routing \xE9s endpoint v\xE9grehajt\xE1s.
8. Multi-tenant kontextus fel\xE1ll\xEDt\xE1sa (l\xE1sd "Multi-tenancy" fejezet).
9. Output caching, response caching.
10. Health check \xE9s metrika v\xE9gpontok kiszolg\xE1l\xE1sa.

Amit **nem** ide tesz\xFCnk: \xFCzleti szab\xE1lyt, adatb\xE1zis-tranzakci\xF3t egy konkr\xE9t use case-hez, v\xE9gpont-specifikus valid\xE1ci\xF3t (arra endpoint filter / MediatR behavior val\xF3), b\xE1rmit, ami csak egyetlen route-ot \xE9rint.

### A sorrend a legfontosabb \u2013 \xE9s nem szabad tippelni

A sorrend **szigor\xFAan** a regisztr\xE1ci\xF3 sorrendje. A javasolt, gyakorlatban m\u0171k\xF6d\u0151 fel\xE1ll\xE1s:

\`\`\`csharp
app.UseExceptionHandler();          // 1. LEGELS\u0150: minden alatta l\xE9v\u0151 hib\xE1j\xE1t elfogja
app.UseStatusCodePages();
app.UseHsts();                      // csak produkci\xF3ban
app.UseHttpsRedirection();
app.UseResponseCompression();
app.UseStaticFiles();               // routing EL\u0150TT: statikus f\xE1jl ne menjen v\xE9gig a teljes pipeline-on
app.UseRequestLocalization();

app.UseRouting();                   // innent\u0151l ismert az endpoint metaadata
app.UseCors();                      // routing UT\xC1N, auth EL\u0150TT
app.UseRateLimiter();
app.UseAuthentication();            // ki vagy?
app.UseAuthorization();             // szabad-e? (mindig az Authentication UT\xC1N)
app.UseOutputCache();               // auth ut\xE1n: ne szolg\xE1ljunk ki cache-b\u0151l v\xE9dett tartalmat

app.UseMiddleware<CorrelationIdMiddleware>();   // a saj\xE1t, kontextust fel\xE1ll\xEDt\xF3 middleware-ek
app.UseMiddleware<TenantResolutionMiddleware>();

app.MapControllers();               // endpoint v\xE9grehajt\xE1s \u2013 a l\xE1nc v\xE9ge
app.MapHealthChecks("/health/ready");
\`\`\`

Tipikus sorrend-hib\xE1k \xE9s t\xFCnet\xFCk: a kiv\xE9telkezel\u0151 t\xFAl k\xE9s\u0151n \u2192 a kor\xE1bbi middleware hib\xE1i nem alakulnak \`ProblemDetails\`-sz\xE9; \`UseCors\` a \`UseRouting\` el\u0151tt \u2192 a preflight k\xE9r\xE9s nem kapja meg a v\xE9gpont CORS-policyj\xE1t; \`UseAuthorization\` az \`UseAuthentication\` el\u0151tt \u2192 mindig 401/403; \`UseStaticFiles\` a routing ut\xE1n \u2192 felesleges munka minden k\xE9pf\xE1jlra; caching az auth el\u0151tt \u2192 **m\xE1s felhaszn\xE1l\xF3 adata szolg\xE1l\xF3dik ki**.

### Saj\xE1t middleware h\xE1rom form\xE1ban

\`\`\`csharp
// 1. Inline (lambda) \u2013 r\xF6vid, egyszeri logik\xE1ra
app.Use(async (context, next) =>
{
    context.Response.Headers["X-Api-Version"] = "1.0";
    await next(context);
});
\`\`\`

\`\`\`csharp
// 2. Konvenci\xF3-alap\xFA oszt\xE1ly: a konstruktorban SINGLETON \xE9lettartam\xFA (egyszer j\xF6n l\xE9tre!)
//    -> Scoped f\xFCgg\u0151s\xE9get CSAK az InvokeAsync param\xE9terk\xE9nt k\xE9rj
public class RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context, ITenantContext tenantContext) // scoped: param\xE9terk\xE9nt
    {
        var stopwatch = Stopwatch.GetTimestamp();
        try
        {
            await next(context);
        }
        finally
        {
            logger.LogInformation("{Method} {Path} -> {StatusCode} ({Elapsed:0.0} ms)",
                context.Request.Method, context.Request.Path, context.Response.StatusCode,
                Stopwatch.GetElapsedTime(stopwatch).TotalMilliseconds);
        }
    }
}
app.UseMiddleware<RequestLoggingMiddleware>();
\`\`\`

\`\`\`csharp
// 3. Factory-alap\xFA (IMiddleware): scoped \xE9lettartam, DI-b\xF3l old\xF3dik fel k\xE9r\xE9senk\xE9nt
public class AuditMiddleware(IAuditWriter writer) : IMiddleware   // IAuditWriter lehet Scoped
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        await next(context);
        await writer.WriteAsync(context.Request.Path, context.Response.StatusCode, context.RequestAborted);
    }
}
builder.Services.AddScoped<AuditMiddleware>();   // regisztr\xE1lni KELL
app.UseMiddleware<AuditMiddleware>();
\`\`\`

### El\xE1gaz\xE1s \xE9s felt\xE9teles futtat\xE1s

\`\`\`csharp
app.UseWhen(ctx => ctx.Request.Path.StartsWithSegments("/api"),
    branch => branch.UseMiddleware<ApiKeyMiddleware>());     // csak /api alatt, majd visszat\xE9r a f\u0151 l\xE1ncba

app.Map("/admin", admin => admin.UseMiddleware<AdminOnlyMiddleware>()); // \xF6n\xE1ll\xF3 \xE1g, nem t\xE9r vissza

app.MapWhen(ctx => ctx.Request.Headers.ContainsKey("X-Legacy"),
    legacy => legacy.Run(async ctx => await ctx.Response.WriteAsync("Legacy endpoint")));
\`\`\`

### Middleware vs. endpoint filter vs. action filter vs. MediatR behavior

| Eszk\xF6z | Hat\xF3k\xF6r | Ismeri az endpointot | Tipikus felhaszn\xE1l\xE1s |
|---|---|---|---|
| Middleware | minden k\xE9r\xE9s (vagy \xFAtvonal-\xE1g) | csak \`UseRouting\` ut\xE1n | biztons\xE1g, log, hibakezel\xE9s, t\xF6m\xF6r\xEDt\xE9s |
| Endpoint filter (Minimal API) | egy v\xE9gpont / route group | igen, a param\xE9tereket is | valid\xE1ci\xF3, v\xE9gpont-specifikus ellen\u0151rz\xE9s |
| Action filter (MVC) | controller / action | igen | modell-valid\xE1ci\xF3, MVC-specifikus logika |
| MediatR / Wolverine behavior | egy use case (command/query) | nem (HTTP-f\xFCggetlen) | tranzakci\xF3, valid\xE1ci\xF3, retry, audit |

\xD6k\xF6lszab\xE1ly: ha a logika **HTTP-r\u0151l** sz\xF3l \u2192 middleware vagy filter; ha a **use case-r\u0151l** \u2192 pipeline behavior (\xEDgy \xFCzenetsorb\xF3l h\xEDvott handlern\xE9l is lefut).

### Gyakorlati szab\xE1lyok

- A middleware oszt\xE1ly **egyszer** j\xF6n l\xE9tre (konvenci\xF3-alap\xFA esetben): nincs k\xE9r\xE9s\xE1llapot mez\u0151ben, minden per-request adat a \`HttpContext\`-ben vagy scoped szolg\xE1ltat\xE1sban.
- Ha a v\xE1lasz t\xF6rzs\xE9t kell olvasni/m\xF3dos\xEDtani (pl. audit), a \`Response.Body\` streamet ki kell cser\xE9lni \u2013 ez k\xF6lts\xE9ges, csak ott tedd, ahol t\xE9nyleg kell (\xE9s sose logold a teljes v\xE1laszt \xE9rz\xE9keny adattal).
- A k\xE9r\xE9s t\xF6rzs\xE9nek t\xF6bbsz\xF6ri olvas\xE1s\xE1hoz \`context.Request.EnableBuffering()\` sz\xFCks\xE9ges.
- A \`next\` h\xEDv\xE1sa ut\xE1ni k\xF3dban a v\xE1lasz fejl\xE9cei **m\xE1r elk\xFCldve lehetnek** (\`Response.HasStarted\`) \u2013 fejl\xE9c m\xF3dos\xEDt\xE1s el\u0151tt ezt ellen\u0151rizd, vagy haszn\xE1ld az \`OnStarting\` callbacket.
- Minden middleware adjon tov\xE1bb \`context.RequestAborted\` tokent az \xE1ltala ind\xEDtott I/O-nak.

Mit ker\xFClj el: ne tegy\xE9l \xFCzleti logik\xE1t middleware-be; ne blokkolj szinkron m\xF3don (\`.Result\`) middleware-ben (thread pool starvation minden k\xE9r\xE9sre); ne felejtsd el a \`await next()\`-et (a k\xE9r\xE9s csendben "elhal"); ne \xEDrj saj\xE1t autentik\xE1ci\xF3t middleware-k\xE9nt, ha a be\xE9p\xEDtett s\xE9ma-alap\xFA megold\xE1s megteszi.

## Azonos\xEDt\xF3-gener\xE1l\xE1si strat\xE9gi\xE1k .NET-ben \u2013 melyiket mikor (Guid: .NET 1.0+ \xB7 Guid.CreateVersion7: .NET 9+) https://learn.microsoft.com/dotnet/api/system.guid {#azonosito-generalasi-strategiak-net-ben-melyiket-mikor}

*Verzi\xF3: \`Guid.CreateVersion7()\`: .NET 9-t\u0151l; \`Guid.NewGuid()\` (v4): .NET Framework 1.0-t\xF3l; a t\xF6bbi k\xFCls\u0151 NuGet csomag.*

Gyakorlati referencia a \`Guid\`, NanoID, ULID, sequential/COMB GUID, Snowflake-jelleg\u0171 azonos\xEDt\xF3k \xE9s a sima auto-increment eg\xE9sz k\xF6z\xF6tti v\xE1laszt\xE1shoz.

### \xD6sszehasonl\xEDt\xF3 t\xE1bl\xE1zat

| T\xEDpus | Hossz | Id\u0151rendben sorolhat\xF3 | \xDCtk\xF6z\xE9si kock\xE1zat | Index-bar\xE1t | URL/ember-bar\xE1t | Be\xE9p\xEDtett? | Tipikus csomag |
|---|---|---|---|---|---|---|---|
| \`Guid\` (v4, v\xE9letlen) | 128 bit / 36 karakter k\xF6t\u0151jelekkel | nem | elhanyagolhat\xF3 | gyenge (v\xE9letlen besz\xFAr\xE1s = lapsz\xE9tv\xE1g\xE1s) | nem | igen \u2013 \`System.Guid\` | \u2013 |
| \`Guid\` v7 (id\u0151rendezett) | 128 bit / 36 karakter | igen (milliszekundum) | elhanyagolhat\xF3 | j\xF3 | nem | igen, .NET 9+ \u2013 \`Guid.CreateVersion7()\` | \u2013 |
| Sequential/COMB GUID (.NET 9 el\u0151tt) | 128 bit / 36 karakter | igen (k\xF6zel\xEDt\u0151leg) | elhanyagolhat\xF3 | j\xF3 | nem | nem | UUIDNext, EF Core \`NEWSEQUENTIALID()\`, NHibernate \`Guid.Comb\` |
| ULID | 128 bit / 26 karakter (Crockford base32) | igen (milliszekundum) | elhanyagolhat\xF3 | j\xF3 | jobb, mint a \`Guid\` | nem | \`Ulid\` (Cysharp), NUlid |
| NanoID | konfigur\xE1lhat\xF3, alapb\xF3l 21 karakter | nem (csak ha id\u0151b\xE9lyeg-prefixet teszel el\xE9) | nagyon alacsony (\xE1b\xE9c\xE9vel/hosszal \xE1ll\xEDthat\xF3) | gyenge, prefix n\xE9lk\xFCl | igen \u2013 r\xF6vid, URL-biztos | nem | \`Nanoid\` (nanoid-net) |
| Snowflake-jelleg\u0171 (64 bites eg\xE9sz) | 64 bit / ~19 sz\xE1mjegy | igen | nincs, ha a worker ID-k helyesen vannak be\xE1ll\xEDtva | kiv\xE1l\xF3 (numerikus, monoton) | k\xF6zepes | nem | IdGen (RobThree), SnowflakeGenerator |
| Auto-increment \`int\`/\`long\` (adatb\xE1zis identity) | 32/64 bit | igen | nincs (egy adatb\xE1zis eset\xE9n) | kiv\xE1l\xF3 | k\xF6zepes | igen (adatb\xE1zis funkci\xF3) | \u2013 |
| HashIds / obfuszk\xE1lt azonos\xEDt\xF3 | v\xE1ltoz\xF3, r\xF6vid | nem | nem \xE9rtelmezhet\u0151 (k\xF3dol\xE1s, nem gener\xE1tor) | nem \xE9rtelmezhet\u0151 \u2013 csak megjelen\xEDt\xE9sre | igen | nem | HashidsNet |
| ShortGuid (base64-k\xF3dolt \`Guid\`) | 22 karakter | a m\xF6g\xF6tte l\xE9v\u0151 \`Guid\`-t\xF3l f\xFCgg | mint a \`Guid\` | mint a \`Guid\` | jobb, mint a nyers \`Guid\` | nem | saj\xE1t, vagy CSharpVitamins.ShortGuid |

### Mi micsoda, egyszer\u0171en

**\`Guid\` (v4, v\xE9letlen)** \u2013 \`Guid.NewGuid()\`. Glob\xE1lis egyedis\xE9g g\xE9pek k\xF6zti koordin\xE1ci\xF3 n\xE9lk\xFCl; a klasszikus .NET/EF Core alap\xE9rtelmez\xE9s. H\xE1tr\xE1nya: klaszterezett indexbe (SQL Server, MySQL) v\xE9letlen \xE9rt\xE9kk\xE9nt besz\xFArva index-fragment\xE1l\xF3d\xE1st \xE9s lapsz\xE9tv\xE1g\xE1st okoz, mert az \xFAj \xE9rt\xE9kek a B-fa v\xE9letlen poz\xEDci\xF3iba ker\xFClnek, nem a v\xE9g\xE9re.

**\`Guid\` v7 (id\u0151rendezett UUID)** \u2013 .NET 9-t\u0151l \`Guid.CreateVersion7()\`. A fels\u0151 bitekben milliszekundum pontoss\xE1g\xFA Unix id\u0151b\xE9lyeget hordoz, \xEDgy a k\xE9s\u0151bb gener\xE1lt \xE9rt\xE9kek a kor\xE1bbiak ut\xE1n rendez\u0151dnek. Megsz\xFCnteti a v4 index-fragment\xE1l\xF3d\xE1si probl\xE9m\xE1j\xE1t, mik\xF6zben marad sima \`Guid\`/\`uniqueidentifier\` \u2013 nincs s\xE9ma-v\xE1ltoz\xE1s. **\xDAj .NET projektben ez ma a pragmatikus alap\xE9rtelmez\xE9s** GUID-alak\xFA kulcshoz, ha a minimum c\xE9l .NET 9+.

**Sequential/COMB GUID (.NET 9 el\u0151tti megold\xE1s)** \u2013 a \`CreateVersion7\` el\u0151tt ugyanezt a hasznot adta a \`SqlServer.NEWSEQUENTIALID()\`, az NHibernate \`Guid.Comb\` vagy a UUIDNext szekvenci\xE1lis gener\xE1tora. Tov\xE1bbra is \xE9rv\xE9nyes, ha .NET 8-on vagy kor\xE1bbin ragadt\xE1l, vagy kifejezetten az SQL Server b\xE1jt-sorrendj\xE9re van sz\xFCks\xE9g a klaszterezett index miatt.

**ULID** \u2013 128 bit, mint a \`Guid\`, de 26 Crockford-base32 karakterk\xE9nt k\xF3dolva (kis-nagybet\u0171 f\xFCggetlen, padding n\xE9lk\xFCl, stringk\xE9nt is lexikografikusan sorolhat\xF3). Event sourcing / \xFCzenetk\xFCld\u0151 rendszerekben n\xE9pszer\u0171, ahol sorolhat\xF3, kompakt, nem numerikus azonos\xEDt\xF3 kell, ami logban is bar\xE1ts\xE1gosabb, mint egy \`Guid\`. A \`Cysharp/Ulid\` a gyakori .NET implement\xE1ci\xF3.

**NanoID** \u2013 nem UUID: r\xF6vid, URL-biztos v\xE9letlen sztring-gener\xE1tor (alapb\xF3l 21 karakter egy 64 szimb\xF3lumos \xE1b\xE9c\xE9b\u0151l), tipikusan publikus azonos\xEDt\xF3khoz (r\xF6vid linkek, slugok, API kulcsok), mert azonos \xFCtk\xF6z\xE9s-ellen\xE1ll\xE1s mellett j\xF3val r\xF6videbb, mint egy \`Guid\`, \xE9s az \xE1b\xE9c\xE9/hossz konfigur\xE1lhat\xF3. **Nincs be\xE9p\xEDtett id\u0151rendez\xE9s** \u2013 ha sorolhat\xF3s\xE1g kell, magad tesz el\xE9 id\u0151b\xE9lyeget. A standard .NET port a NuGeten \`Nanoid\` (nanoid-net).

**Snowflake-jelleg\u0171 64 bites azonos\xEDt\xF3k** \u2013 id\u0151b\xE9lyeg + worker/shard azonos\xEDt\xF3 + milliszekundumon bel\xFCli sorsz\xE1m egy \`long\`-ba csomagolva. Nagy l\xE9pt\xE9kn\xE9l haszn\xE1latos (eredetileg Twitter), ha kompakt, sorolhat\xF3, k\xF6zel monoton numerikus azonos\xEDt\xF3 kell t\xF6bb g\xE9pen, k\xF6zponti szekvencia/identity oszlop n\xE9lk\xFCl. A standard .NET k\xF6nyvt\xE1r az IdGen; **p\xE9ld\xE1nyonk\xE9nt egyedi worker/gener\xE1tor ID kioszt\xE1s\xE1t ig\xE9nyli** \u2013 ez egy kis koordin\xE1ci\xF3s k\xF6lts\xE9g, ellent\xE9tben a \`Guid\`-dal.

**Auto-increment \`int\`/\`long\` (identity/serial oszlop)** \u2013 a legegyszer\u0171bb megold\xE1s, ha egyetlen \xEDrhat\xF3 adatb\xE1zis van. Legkisebb kulcs, legjobb index-lokalit\xE1s, ember-bar\xE1t URL-ben \xE9s support jegyben; viszont inform\xE1ci\xF3t sziv\xE1rogtat (sorok sz\xE1ma, n\xF6veked\xE9s \xFCteme), \xE9s nem m\u0171k\xF6dik j\xF3l offline/kliensoldali gener\xE1l\xE1sn\xE1l, illetve multi-master vagy shardolt adatb\xE1zisn\xE1l.

**HashIds** \u2013 nem gener\xE1tor, hanem obfuszk\xE1tor. Egy megl\xE9v\u0151 eg\xE9sz/szekvenci\xE1lis azonos\xEDt\xF3t k\xF3dol visszafejthet\u0151en r\xF6vid, opak sztringg\xE9 megjelen\xEDt\xE9shez (hogy a felhaszn\xE1l\xF3 ne \`/orders/1042\`-t l\xE1sson). Ne haszn\xE1ld t\xE1rolt kulcsk\xE9nt \u2013 csak a megjelen\xEDt\xE9si/API hat\xE1ron, ha a szekvenci\xE1lis azonos\xEDt\xF3t el akarod rejteni an\xE9lk\xFCl, hogy v\xE9gig \`Guid\`/NanoID-ra v\xE1ltan\xE1l.

**ShortGuid** \u2013 egy norm\xE1l \`Guid\` 16 b\xE1jtj\xE1t base64-k\xE9nt (22 karakter) k\xF3dolja a k\xF6t\u0151jeles hexa (36 karakter) helyett. Ugyanaz az entr\xF3pia \xE9s ugyanaz a sorolhat\xF3s\xE1g, csak r\xF6videbb megjelen\xEDt\xE9shez/kop\xEDroz\xE1shoz. Akkor hasznos, ha a t\xE1rolt t\xEDpus m\xE1r \`Guid\`, de bar\xE1ts\xE1gosabb sztring-forma kell URL-hez/loghoz.

### Javaslatok forgat\xF3k\xF6nyv szerint

| Forgat\xF3k\xF6nyv | V\xE1laszt\xE1s |
|---|---|
| Els\u0151dleges kulcs \xFAj EF Core / SQL projektben, .NET 9+ | **\`Guid\` v7** (\`Guid.CreateVersion7()\`) \u2013 glob\xE1lis, kliensen gener\xE1lhat\xF3 egyedis\xE9g + j\xF3 klaszterezett-index viselked\xE9s, \xFAj f\xFCgg\u0151s\xE9g \xE9s s\xE9ma-t\xEDpusv\xE1lt\xE1s n\xE9lk\xFCl |
| .NET 8 vagy kor\xE1bbi, de GUID-alak\xFA, index-bar\xE1t kulcs kell | **Sequential/COMB GUID** (UUIDNext szekvenci\xE1lis m\xF3d, \`NEWSEQUENTIALID()\` + \`ValueGeneratedOnAdd()\`, NHibernate \`Guid.Comb\`) |
| Publikus, r\xF6vid azonos\xEDt\xF3 \u2013 r\xF6vid link, megh\xEDv\xF3 k\xF3d, API kulcs, URL slug | **NanoID** \u2013 r\xF6vid, URL-biztos, az \xFCtk\xF6z\xE9si kock\xE1zat hosszal/\xE1b\xE9c\xE9vel szab\xE1lyozhat\xF3, \xE9s nem sziv\xE1rogtat sorrend-inform\xE1ci\xF3t, mint az auto-increment |
| Elosztott / event-sourced rendszer, sorolhat\xF3, kompakt, logban olvashat\xF3 azonos\xEDt\xF3val | **ULID** \u2013 26 karakter, sima sz\xF6vegk\xE9nt rendezhet\u0151, nincs k\xF6t\u0151jel, nincsenek SQL Server b\xE1jt-sorrend furcsas\xE1gok |
| Nagy \xE1tbocs\xE1t\xE1s, sok \xEDr\xF3csom\xF3pont/shard, kompakt 64 bites numerikus azonos\xEDt\xF3 | **Snowflake** (IdGen) \u2013 numerikus, \`int\`-k\xE9nt indexelhet\u0151, k\xF6zel id\u0151rendezett, v\xEDzszintesen sk\xE1l\xE1z\xF3dik, ha minden csom\xF3pont k\xFCl\xF6n worker ID-t kap |
| Egy adatb\xE1zisos CRUD alkalmaz\xE1s, bels\u0151 eszk\xF6z, admin fel\xFClet | **Auto-increment \`int\`/\`long\`** \u2013 legkisebb, leggyorsabban indexelhet\u0151, legegyszer\u0171bb; HashIds-szel kombin\xE1lva, ha a nyers \xE9rt\xE9ket el akarod rejteni a felhaszn\xE1l\xF3 el\u0151l |
| M\xE1r mindenhol \`Guid\` van, de szebb megjelen\xEDt\xE9s kell | **ShortGuid** csak megjelen\xEDt\xE9sre; a t\xE1rolt t\xEDpus maradjon \`Guid\` |

### K\xF3dp\xE9ld\xE1k

\`\`\`csharp
// V\xE9letlen Guid v4 (klasszikus, be\xE9p\xEDtett)
Guid id = Guid.NewGuid();

// Id\u0151rendezett Guid v7 (.NET 9+, be\xE9p\xEDtett)
Guid id7 = Guid.CreateVersion7();
// Guid.CreateVersion7(DateTimeOffset.UtcNow) \u2013 az id\u0151b\xE9lyeg explicit megad\xE1s\xE1hoz

// NanoId (dotnet add package Nanoid)
using Nanoid;
string shortId = Nanoid.Generate();                                  // pl. "V1StGXR8_Z5jdHi6B-myT", 21 karakter
string customId = Nanoid.Generate(alphabet: "0123456789ABCDEF", size: 10);

// ULID (dotnet add package Ulid)
Ulid ulid = Ulid.NewUlid();
string ulidString = ulid.ToString();                                 // pl. "01ARZ3NDEKTSV4RRFFQ69G5FAV"

// Snowflake-jelleg\u0171 (dotnet add package IdGen)
using IdGen;
var generator = new IdGenerator(generatorId: 0);                     // csom\xF3pontonk\xE9nt egyedinek KELL lennie
long snowflakeId = generator.CreateId();

// Sequential/COMB Guid .NET 9 n\xE9lk\xFCl (dotnet add package UUIDNext)
using UUIDNext;
Guid sequentialGuid = Uuid.NewSequential();
\`\`\`

### Vegyes strat\xE9gia \u2013 ami a gyakorlatban a leggyakoribb

Enterprise alkalmaz\xE1sban jellemz\u0151en **nem** egyetlen azonos\xEDt\xF3-t\xEDpus van, hanem szerep szerint kett\u0151: a **technikai kulcs** (\`Guid\` v7) \xE9s a **publikus azonos\xEDt\xF3** (NanoID, ULID vagy \xFCzleti azonos\xEDt\xF3, pl. \`ORD-2026-000123\`). A kett\u0151 sz\xE9tv\xE1laszt\xE1s\xE1nak haszna, hogy a publikus azonos\xEDt\xF3 form\xE1tuma k\xE9s\u0151bb megv\xE1ltoztathat\xF3 a s\xE9ma \xE9s az idegen kulcsok \xE9rint\xE9se n\xE9lk\xFCl \u2013 \xE9s a bels\u0151 kulcs sosem ker\xFCl a felhaszn\xE1l\xF3 szeme el\xE9.

\`\`\`csharp
public class Order
{
    public Guid Id { get; private set; } = Guid.CreateVersion7();     // technikai kulcs, index-bar\xE1t
    public string PublicId { get; private set; } = Nanoid.Generate(size: 12); // URL-ben ez jelenik meg
}
\`\`\`

### Amire figyelni kell

- **SQL Server klaszterezett index**: a \`Guid\` v7 b\xE1jt-sorrendje **nem** azonos a \`NEWSEQUENTIALID()\` SQL Server-specifikus sorrendj\xE9vel, ez\xE9rt a v7 rendezetts\xE9ge az SQL Server \`uniqueidentifier\` \xF6sszehasonl\xEDt\xE1s\xE1ban nem \xE9rv\xE9nyes\xFCl teljesen. Ha az SQL Server klaszterezett index-lokalit\xE1s kritikus, m\xE9rd meg, vagy tartsd meg a \`NEWSEQUENTIALID()\`-t. PostgreSQL-en (\`uuid\`, b\xE1jtsorrend szerinti \xF6sszehasonl\xEDt\xE1s) a v7 rendezetts\xE9ge \xE9rv\xE9nyes\xFCl.
- **Az id\u0151rendezett azonos\xEDt\xF3 inform\xE1ci\xF3t sziv\xE1rogtat**: a \`Guid\` v7 \xE9s a ULID is tartalmazza a l\xE9trehoz\xE1s id\u0151pontj\xE1t, a Snowflake pedig a worker ID-t is. Ha ez \xFCzletileg \xE9rz\xE9keny (pl. l\xE1tszik, mikor j\xF6tt l\xE9tre egy fi\xF3k), publikus azonos\xEDt\xF3k\xE9nt ink\xE1bb NanoID.
- **Kulcst\xEDpus \xE9s index-m\xE9ret**: sztring kulcs (NanoID, ULID sztringk\xE9nt t\xE1rolva) nagyobb indexet \xE9s lassabb join-t jelent. Ha ULID-ot haszn\xE1lsz, \`Guid\`/\`uuid\` oszlopban t\xE1rold a 128 bitet, \xE9s csak megjelen\xEDt\xE9skor konvert\xE1ld sztringg\xE9.
- **\xDCtk\xF6z\xE9s-ellen\xE1ll\xE1s NanoID-n\xE1l a hossz f\xFCggv\xE9nye**: az alap\xE9rtelmezett 21 karakter gyakorlatilag \xFCtk\xF6z\xE9smentes, de ha 8-10 karakterre r\xF6vid\xEDted (hogy dikt\xE1lhat\xF3 legyen), a v\xE1rhat\xF3 rekordsz\xE1mhoz kell m\xE9retezni, \xE9s egyedi indexre + \xFAjragener\xE1l\xE1si logik\xE1ra van sz\xFCks\xE9g.
- **Kliensoldali gener\xE1l\xE1s**: \`Guid\`, ULID, NanoID \xE9s Snowflake mind gener\xE1lhat\xF3 az alkalmaz\xE1sban (ez fontos az Outbox mint\xE1hoz, a saga korrel\xE1ci\xF3hoz \xE9s az idempotencia-kulcsokhoz \u2013 l\xE1sd a vonatkoz\xF3 fejezeteket); az auto-increment nem.

### Egy mondatban

.NET 9+ eset\xE9n az \xE1ltal\xE1nos c\xE9l\xFA alap\xE9rtelmez\xE9s a \`Guid.CreateVersion7()\` (kiv\xE1ltja azt a legt\xF6bb okot, ami\xE9rt kor\xE1bban COMB GUID-hoz vagy \`Guid.NewGuid()\`-hoz ny\xFAltak); NanoID kifejezetten akkor, ha az azonos\xEDt\xF3 URL-ben jelenik meg vagy ember \xEDrja/olvassa; ULID, ha az \xF6kosziszt\xE9ma (event sourcing, message broker) m\xE1r azt prefer\xE1lja; IdGen/Snowflake, ha sok csom\xF3pont gener\xE1l kompakt numerikus azonos\xEDt\xF3t; \xE9s sima adatb\xE1zis auto-increment, ha egyetlen \xEDrhat\xF3 adatb\xE1zis van, \xE9s nincs sz\xFCks\xE9g azon k\xEDv\xFCli azonos\xEDt\xF3-gener\xE1l\xE1sra.

## .NET 11 \xFAjdons\xE1gai (el\u0151zetes) https://learn.microsoft.com/dotnet/core/whats-new/ {#net-11-ujdonsagai-elozetes}

*Verzi\xF3: .NET 11 \u2013 jelenleg preview \xE1llapotban; a v\xE9gleges kiad\xE1s 2026 november\xE9re v\xE1rhat\xF3. Az itt le\xEDrtak a Preview 6 \xE1llapot\xE1t t\xFCkr\xF6zik, v\xE1ltozhatnak.*

A .NET 11 nem hoz akkora architektur\xE1lis t\xF6r\xE9st, mint a .NET Core v\xE1lt\xE1s vagy a Minimal API bevezet\xE9se; a f\xF3kusz a **fut\xE1sidej\u0171 teljes\xEDtm\xE9nyen**, az aszinkron v\xE9grehajt\xE1s m\xE9lyebb \xFAjratervez\xE9s\xE9n \xE9s a mindennapi k\xF6nyvt\xE1r-API-k csiszol\xE1s\xE1n van.

### Runtime

- **Runtime-native async (Runtime Async)** \u2013 a legjelent\u0151sebb v\xE1ltoz\xE1s. Eddig az \`async\`/\`await\` ford\xEDt\xE1si idej\u0171 \xE1llapotg\xE9p-\xE1talak\xEDt\xE1s volt; mostant\xF3l a futtat\xF3k\xF6rnyezet nat\xEDvan kezeli. Ennek gyakorlati haszna a **tiszt\xE1bb stack trace** (a hibakeres\xE9s l\xE9nyegesen egyszer\u0171bb lesz elosztott, m\xE9lyen async k\xF3dban) \xE9s a **kisebb overhead**. \`net11.0\` c\xE9lz\xE1sa eset\xE9n m\xE1r nem kell hozz\xE1 az \`<EnablePreviewFeatures>\` kapcsol\xF3, \xE9s maga a futtat\xF3k\xF6rnyezet k\xF6nyvt\xE1rai is \xEDgy fordulnak. Tov\xE1bbi optimaliz\xE1ci\xF3k: a szinkron, \`Task\`-visszat\xE9r\xE9s\u0171 met\xF3dusokhoz dedik\xE1lt runtime-async v\xE1ltozat JIT-el\xE9se, \xE9s az \`ExecutionContext\` ment\xE9s\xE9nek elhagy\xE1sa, ha nincs ambient \xE1llapot.
- **JIT-fejleszt\xE9sek** \u2013 hat\xE1rellen\u0151rz\xE9s-kiiktat\xE1s, felesleges \`checked\` kontextus elt\xE1vol\xEDt\xE1sa, \`switch\` kifejez\xE9s konstans-behajtogat\xE1sa, \`SequenceEqual\` konstans-ki\xE9rt\xE9kel\xE9s, felesleges el\xE1gaz\xE1sok megsz\xFCntet\xE9se; \xFAj Arm SVE2 intrinsic-ek.
- **Emelt minim\xE1lis hardverk\xF6vetelm\xE9ny** x86/x64 \xE9s Arm64 architekt\xFAr\xE1n (modernebb utas\xEDt\xE1sk\xE9szletek) \u2013 ez migr\xE1ci\xF3n\xE1l ellen\u0151rizend\u0151, ha r\xE9gi szervereken futtatsz.
- **NativeAOT gyorsabb interface dispatch** \u2013 interf\xE9sz-neh\xE9z k\xF3dban kisebb bin\xE1ris \xE9s jobb \xE1tbocs\xE1t\xE1s.

### K\xF6nyvt\xE1rak \u2013 ami backend fejleszt\u0151k\xE9nt sz\xE1m\xEDt

- **System.Text.Json**: \`JsonNamingPolicy.PascalCase\`, tagonk\xE9nti n\xE9vkonvenci\xF3-fel\xFClb\xEDr\xE1l\xE1s, t\xEDpusszint\u0171 ignore-felt\xE9tel, \`SerializeAsyncEnumerable\` t\xFAlterhel\xE9sek \`PipeWriter\` c\xE9lra \xE9s **NDJSON** (soronk\xE9nti JSON) kimenetre, \`Utf8JsonWriter.Reset\`, valamint a C# union t\xEDpusok szerializ\xE1l\xE1sa.
- **Aszinkron valid\xE1ci\xF3** a \`System.ComponentModel.DataAnnotations\`-ben: \`AsyncValidationAttribute\`, \`IAsyncValidatableObject\`, \`Validator.ValidateObjectAsync\` \u2013 eddig ehhez FluentValidation kellett.
- **Be\xE9p\xEDtett OpenTelemetry metrik\xE1k a \`MemoryCache\`-hez** \u2013 tal\xE1lati ar\xE1ny, m\xE9ret, kilakoltat\xE1s m\xE9r\xE9se k\xE9zi instrument\xE1l\xE1s n\xE9lk\xFCl.
- **Activity tracing szab\xE1lyokkal** a \`Microsoft.Extensions.Diagnostics\`-ban: deklarat\xEDv m\xF3don konfigur\xE1lhat\xF3, mely \`Activity\`-k ker\xFCljenek r\xF6gz\xEDt\xE9sre, k\xE9zi \`ActivityListener\` bek\xF6t\xE9se n\xE9lk\xFCl.
- **LINQ join b\u0151v\xEDt\xE9sek**: \`FullJoin\`, valamint tuple-t visszaad\xF3 \`Join\`/\`GroupJoin\` t\xFAlterhel\xE9sek az \`Enumerable\`, \`Queryable\` \xE9s \`AsyncEnumerable\` fel\xFCleteken.
- **N\xE9gy \xFAj \`Stream\` t\xEDpus** (\`ReadOnlyMemoryStream\`, \`WritableMemoryStream\`, \`ReadOnlySequenceStream\`, \`StringStream\`), amelyek m\xE1sol\xE1s n\xE9lk\xFCl csomagolnak mem\xF3riabeli adatot \u2013 hasznos szerializ\xE1ci\xF3n\xE1l \xE9s \xFCzenetfeldolgoz\xE1sn\xE1l.
- **Zstandard t\xF6m\xF6r\xEDt\xE9s** a \`System.IO.Compression\`-ben, jav\xEDtott Base64 API-k, CRC32 ellen\u0151rz\xE9s ZIP olvas\xE1sn\xE1l.
- **\`EqualityComparer<T>.Create\`** kulcskiv\xE1laszt\xF3b\xF3l, generikus \`Random.NextInteger<T>\`/\`NextBinaryFloat<T>\`, \`X25519DiffieHellman\`, \`QuicStream.Priority\` (HTTP/3 priorit\xE1s).
- **Discriminated union alapok** (\`UnionAttribute\`, \`IUnion\`) a \`System.Runtime.CompilerServices\`-ben \u2013 ez a C# 15 union t\xEDpusok fut\xE1sidej\u0171 h\xE1ttere.

### SDK \xE9s eszk\xF6z\xF6k

- **\`dotnet test\` fejleszt\xE9sek**: \`--no-dependencies\`, \`--use-current-runtime\`, \`--test-modules\` kiz\xE1r\xE1si mint\xE1k, assembly-nk\xE9nti tesztsz\xE1m, fut\xF3 tesztek \xE9l\u0151 megjelen\xEDt\xE9se; a be\xE9p\xEDtett sablonok **xUnit v3**-at haszn\xE1lnak (alap\xE9rtelmezetten a Microsoft.Testing.Platform felett).
- **\`dotnet watch\`**: Aspire app-host integr\xE1ci\xF3, automatikus \xF6sszeoml\xE1s ut\xE1ni helyre\xE1ll\xEDt\xE1s.
- **\`dotnet run -e\`** k\xF6rnyezeti v\xE1ltoz\xF3 \xE1tad\xE1s\xE1ra parancssorb\xF3l; f\xE1jlalap\xFA alkalmaz\xE1sokn\xE1l \`#:include\` t\xF6bb f\xE1jlra bont\xE1shoz \xE9s DLL-hivatkoz\xE1shoz.
- **Solution filter (\`.slnf\`)** l\xE9trehoz\xE1sa \xE9s szerkeszt\xE9se a \`dotnet sln\` CLI-b\u0151l \u2013 nagy megold\xE1sokn\xE1l a r\xE9szleges bet\xF6lt\xE9s miatt hasznos.
- **T\xF6bb architekt\xFAr\xE1s kont\xE9ner-image build Podmannel** az SDK kont\xE9ner-publik\xE1l\xE1s\xE1n kereszt\xFCl.
- Kisebb SDK telep\xEDt\u0151k Linuxon \xE9s macOS-en (assembly deduplik\xE1ci\xF3).

Mit \xE9rdemes tenni: preview SDK-val \xE9rdemes m\xE9rni, hogy a Runtime Async a saj\xE1t terhel\xE9si profilodon mit hoz (k\xFCl\xF6n\xF6sen \xFCzenet-fogyaszt\xF3kn\xE1l \xE9s nagy p\xE1rhuzamoss\xE1g\xFA API-kn\xE1l); a minim\xE1lis hardverk\xF6vetelm\xE9ny-v\xE1ltoz\xE1st ellen\u0151rizni kell \xE9les k\xF6rnyezeti migr\xE1ci\xF3 el\u0151tt; \xE9les rendszert **ne** vigy\xE9l preview kiad\xE1sra \u2013 az LTS/STS ciklust \xE9s a t\xE1mogat\xE1si id\u0151t tervezd meg el\u0151re.

## C# 15 \xFAjdons\xE1gai (C# 15) https://learn.microsoft.com/dotnet/csharp/whats-new/csharp-15 {#csharp-15-ujdonsagai}

*Verzi\xF3: C# 15 \u2013 preview; a .NET 11 preview SDK vagy a Visual Studio 2026 insiders v\xE1ltozat t\xE1mogatja. Egyes r\xE9szfunkci\xF3k m\xE9g nem v\xE9glegesek.*

### Union types (uni\xF3 t\xEDpusok)

A legl\xE1tv\xE1nyosabb \xFAjdons\xE1g. Egy \xE9rt\xE9k t\xF6bb lehets\xE9ges **eset-t\xEDpus** valamelyike lehet, \xE9s a ford\xEDt\xF3 **kik\xE9nyszer\xEDti a teljes lefedetts\xE9get** a \`switch\` kifejez\xE9sben:

\`\`\`csharp
public record class Cat(string Name);
public record class Dog(string Name);
public record class Bird(string Name);

public union Pet(Cat, Dog, Bird);

Pet pet = new Dog("Rex");          // implicit konverzi\xF3 minden eset-t\xEDpusb\xF3l

string name = pet switch
{
    Dog d => d.Name,
    Cat c => c.Name,
    Bird b => b.Name,              // ha valamelyiket kihagyn\xE1d, a ford\xEDt\xF3 sz\xF3l
};
\`\`\`

Backend szempontb\xF3l ez a **Result minta** \xE9s a hibakezel\xE9s (l\xE1sd "Result Pattern / Railway-Oriented Programming" fejezet) nat\xEDv nyelvi t\xE1mogat\xE1sa: eddig ehhez saj\xE1t \`OneOf<T1,T2>\` t\xEDpus vagy \`Result<TValue, TError>\` oszt\xE1ly kellett, mostant\xF3l a nyelv \xE9s a ford\xEDt\xF3 garant\xE1lja, hogy minden \xE1gat lekezelsz. A futtat\xF3k\xF6rnyezet a .NET 11 Preview 5-t\u0151l hozza a \`UnionAttribute\` \xE9s \`IUnion\` t\xEDpusokat, a \`System.Text.Json\` pedig m\xE1r tudja szerializ\xE1lni az uni\xF3 t\xEDpusokat.

### Closed hierarchies (z\xE1rt hierarchi\xE1k)

A \`closed\` m\xF3dos\xEDt\xF3val megadhat\xF3, hogy egy oszt\xE1lyb\xF3l **csak a deklar\xE1l\xF3 assembly-ben** lehet sz\xE1rmaztatni \u2013 \xEDgy a ford\xEDt\xF3 ismeri az \xF6sszes k\xF6zvetlen lesz\xE1rmazottat, \xE9s a \`switch\` kifejez\xE9s \`default\` \xE1g n\xE9lk\xFCl is teljesnek sz\xE1m\xEDt:

\`\`\`csharp
public closed record class GateState;
public record class Closed : GateState;
public record class Open(float Percent) : GateState;

string Describe(GateState state) => state switch
{
    Closed => "z\xE1rva",
    Open(var percent) => $"{percent}%-ban nyitva",
    // nincs figyelmeztet\xE9s: minden k\xF6zvetlen lesz\xE1rmazott le van kezelve
};
\`\`\`

A \`closed\` kontextu\xE1lis kulcssz\xF3, az \xEDgy jel\xF6lt oszt\xE1ly implicit \`abstract\`, \xE9s nem kombin\xE1lhat\xF3 a \`sealed\`, \`static\` vagy explicit \`abstract\` m\xF3dos\xEDt\xF3val. A sz\xE1rmaztat\xE1s **nem tranzit\xEDv**: egy nem-\`closed\` lesz\xE1rmazottb\xF3l m\xE1s assembly-ben is lehet sz\xE1rmaztatni \u2013 ha v\xE9gig szeretn\xE9d vinni a teljess\xE9gi ellen\u0151rz\xE9st, a k\xF6ztes szinteket is jel\xF6ld \`closed\`-nak.

Ez a domain modellez\xE9sben hasznos: az \xE1llapotg\xE9pek, a \`PaymentMethod\`, \`OrderStatus\`-szer\u0171 z\xE1rt fogalomk\xE9szletek eddig enumk\xE9nt vagy "smart enum" oszt\xE1lyk\xE9nt \xE9ltek \u2013 most t\xEDpusbiztosan, adattal egy\xFCtt modellezhet\u0151k.

### Collection expression arguments

A gy\u0171jtem\xE9ny-kifejez\xE9s els\u0151 elemek\xE9nt \`with(...)\` \xE1tadhat\xF3 a m\xF6g\xF6ttes gy\u0171jtem\xE9ny konstruktor\xE1nak vagy factory met\xF3dus\xE1nak \u2013 kapacit\xE1s, \xF6sszehasonl\xEDt\xF3 stb.:

\`\`\`csharp
string[] values = ["one", "two", "three"];

List<string> names = [with(capacity: values.Length * 2), .. values];

HashSet<string> set = [with(StringComparer.OrdinalIgnoreCase), "Hello", "HELLO", "hello"];
// egyetlen elemet tartalmaz, mert kis-nagybet\u0171 f\xFCggetlen az \xF6sszehasonl\xEDt\xE1s
\`\`\`

A kapacit\xE1s el\u0151re megad\xE1sa forr\xF3 \xFAtvonalon m\xE9rhet\u0151 allok\xE1ci\xF3-megtakar\xEDt\xE1s.

### Extension indexers

A C# 14-ben bevezetett \`extension\` blokk (l\xE1sd "Extension method \u2013 minden, amit tudni \xE9rdemes" fejezet) mostant\xF3l **indexert** is deklar\xE1lhat:

\`\`\`csharp
public static class SequenceIndexer
{
    extension(IEnumerable<int> sequence)
    {
        public int this[int index] => sequence.ElementAt(index);
    }
}

IEnumerable<int> numbers = Enumerable.Range(1, 10);
int third = numbers[2];
\`\`\`

### C\xEDmk\xE9zett \`break\` \xE9s \`continue\`

Be\xE1gyazott ciklusokb\xF3l eddig logikai jelz\u0151v\xE1ltoz\xF3val vagy \`goto\`-val lehetett kil\xE9pni; mostant\xF3l a \`break\`/\`continue\` megnevezheti a c\xE9lciklust:

\`\`\`csharp
outer: for (int row = 0; row < grid.Height; row++)
{
    for (int column = 0; column < grid.Width; column++)
    {
        if (grid[row, column].IsBlocked) continue outer;
        if (grid[row, column].IsGoal) break outer;
    }
}
\`\`\`

C\xEDmke n\xE9lk\xFCl a viselked\xE9s v\xE1ltozatlan (a legbels\u0151 ciklusra vonatkozik). Az **IDE0410** st\xEDlusszab\xE1ly jelzi azokat a jelz\u0151v\xE1ltoz\xF3s \xE9s \`goto\`-s mint\xE1kat, amelyeket ki lehet v\xE1ltani.

### Memory safety \u2013 az \`unsafe\` \xFAjragondol\xE1sa

T\xF6bb kiad\xE1son \xE1t\xEDvel\u0151 munka kezdete: a c\xE9l, hogy az \`unsafe\` kontextus a **t\xE9nylegesen nem menedzselt mem\xF3ri\xE1t el\xE9r\u0151 m\u0171veletekhez** k\xF6t\u0151dj\xF6n, ne puszt\xE1n a mutat\xF3 t\xEDpusok l\xE9tez\xE9s\xE9hez. Az els\u0151 l\xE9p\xE9sben \`preview\` nyelvi verzi\xF3val m\xE1r **nem ig\xE9nyel \`unsafe\` kontextust**: mutat\xF3 t\xEDpus deklar\xE1l\xE1sa \xE9s a \`&\` oper\xE1tor, a \`fixed\` utas\xEDt\xE1s, a \`stackalloc\` mutat\xF3v\xE1 konvert\xE1l\xE1sa \xE9s a \`sizeof\` b\xE1rmely unmanaged t\xEDpusra. Ami tov\xE1bbra is \`unsafe\`: a mutat\xF3 derefer\xE1l\xE1sa (\`*p\`), a \`p->tag\`, a \`p[i]\` \xE9s a f\xFCggv\xE9nymutat\xF3 h\xEDv\xE1sa.

\`\`\`csharp
int number = 42;
int* pointer = &number;              // m\xE1r nem kell unsafe blokk

int[] numbers = [10, 20, 30];
fixed (int* first = numbers)
{
    // a mutat\xF3 derefer\xE1l\xE1sa viszont tov\xE1bbra is unsafe kontextust ig\xE9nyel
}
\`\`\`

Mit ker\xFClj el: \xE9les k\xF3dba ne vigy\xE9l preview nyelvi funkci\xF3t \`<LangVersion>preview</LangVersion>\` \xE9s tudatos d\xF6nt\xE9s n\xE9lk\xFCl \u2013 a szintaxis a v\xE9gleges kiad\xE1sig v\xE1ltozhat; a union t\xEDpusok eset\xE9n a \`switch\` teljess\xE9g\xE9re t\xE1maszkod\xF3 k\xF3d a szerz\u0151d\xE9s r\xE9sze lesz, teh\xE1t \xFAj eset-t\xEDpus hozz\xE1ad\xE1sa **t\xF6r\u0151 v\xE1ltoz\xE1s** minden fogyaszt\xF3n\xE1l (\xE9rdemes ugyan\xFAgy verzi\xF3zni, mint egy API-t \u2013 l\xE1sd "\xDCzenet-szerz\u0151d\xE9sek verzi\xF3z\xE1sa" fejezet).

## DDD taktikai \xE9p\xEDt\u0151elemek \u2013 aggreg\xE1tum, value object, guard clause https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ {#ddd-taktikai-epitoelemek-aggregatum-value-object-guard-clause}

*Verzi\xF3: \`record\` value objecthez: C# 9+; EF Core complex types: 8.0; owned entity: 2.0.*

A "Bounded Context" fejezet a strat\xE9giai tervez\xE9st \xEDrja le; itt a taktikai \xE9p\xEDt\u0151elemek k\xF6vetkeznek, amelyekb\u0151l a domain r\xE9teg \xF6ssze\xE1ll.

### Entity vs. Value Object

**Entity** \u2013 azonos\xEDt\xF3ja van, \xE9s az azonoss\xE1ga az id\u0151 sor\xE1n fennmarad, akkor is, ha minden attrib\xFAtuma megv\xE1ltozik (egy \`Customer\` ugyanaz marad, ha nevet \xE9s c\xEDmet v\xE1lt). **Value object** \u2013 nincs azonos\xEDt\xF3ja, az \xE9rt\xE9ke *maga* az azonoss\xE1ga; immutable, \xE9s cser\xE9lni kell, nem m\xF3dos\xEDtani (\`Money\`, \`Address\`, \`DateRange\`, \`Email\`).

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }
    public string Currency { get; }

    private Money(decimal amount, string currency) => (Amount, Currency) = (amount, currency);

    public static Money Of(decimal amount, string currency)
    {
        if (amount < 0) throw new ArgumentOutOfRangeException(nameof(amount), "Az \xF6sszeg nem lehet negat\xEDv.");
        if (currency is not { Length: 3 }) throw new ArgumentException("\xC9rv\xE9nytelen p\xE9nznem.", nameof(currency));
        return new Money(amount, currency.ToUpperInvariant());
    }

    public Money Add(Money other) => other.Currency == Currency
        ? new Money(Amount + other.Amount, Currency)
        : throw new InvalidOperationException("Elt\xE9r\u0151 p\xE9nznemek nem adhat\xF3k \xF6ssze.");

    public override string ToString() => $"{Amount:N2} {Currency}";
}
\`\`\`

A value object nem d\xEDsz\xEDt\xE9s: **elt\xFCnteti a primit\xEDv-megsz\xE1llotts\xE1got** (primitive obsession). Ha a \`decimal total\` helyett \`Money total\` van, akkor a p\xE9nznem-kever\xE9s ford\xEDt\xE1si vagy fut\xE1sidej\u0171 hiba lesz, nem n\xE9ma adathiba. EF Core-ban \`ComplexProperty\` (8.0+) vagy \`OwnsOne\` k\xE9pezi le, k\xFCl\xF6n t\xE1bla n\xE9lk\xFCl:

\`\`\`csharp
modelBuilder.Entity<Order>().ComplexProperty(o => o.Total, b =>
{
    b.Property(m => m.Amount).HasColumnName("TotalAmount").HasPrecision(18, 2);
    b.Property(m => m.Currency).HasColumnName("TotalCurrency").HasMaxLength(3);
});
\`\`\`

### Aggreg\xE1tum \xE9s aggregate root

Az **aggreg\xE1tum** entit\xE1sok \xE9s value objectek olyan csoportja, amelyet **egyetlen egys\xE9gk\xE9nt** kezel\xFCnk konzisztencia szempontj\xE1b\xF3l. Az **aggregate root** az egyetlen bel\xE9p\xE9si pont: k\xEDv\xFClr\u0151l csak \u0151t lehet hivatkozni \xE9s rajta kereszt\xFCl lehet m\xF3dos\xEDtani a belsej\xE9t.

\`\`\`csharp
public class Order : AggregateRoot          // AggregateRoot: Id + domain event gy\u0171jtem\xE9ny
{
    private readonly List<OrderLine> _lines = [];
    public IReadOnlyList<OrderLine> Lines => _lines.AsReadOnly();   // kifel\xE9 csak olvashat\xF3

    public Guid Id { get; private set; } = Guid.CreateVersion7();
    public Guid CustomerId { get; private set; }
    public OrderStatus Status { get; private set; } = OrderStatus.Draft;
    public Money Total { get; private set; } = Money.Of(0, "HUF");

    private Order() { }                     // EF Core

    public static Order Place(Guid customerId, IEnumerable<(Product Product, int Quantity)> items)
    {
        var order = new Order { CustomerId = Guard.Against.Default(customerId) };
        foreach (var (product, quantity) in items) order.AddLine(product, quantity);

        if (order._lines.Count == 0)
            throw new BusinessRuleViolationException("empty_order", "A rendel\xE9s nem lehet \xFCres.");

        order.Status = OrderStatus.AwaitingPayment;
        order.Raise(new OrderPlaced(order.Id, order.CustomerId, order.Total.Amount));
        return order;
    }

    public void AddLine(Product product, int quantity)
    {
        Guard.Against.NegativeOrZero(quantity);
        if (Status != OrderStatus.Draft)
            throw new BusinessRuleViolationException("order_locked", "Csak piszkozat rendel\xE9s m\xF3dos\xEDthat\xF3.");

        _lines.Add(new OrderLine(product.Id, quantity, product.Price));
        Total = _lines.Aggregate(Money.Of(0, "HUF"), (sum, l) => sum.Add(l.LineTotal));
    }
}
\`\`\`

Az aggreg\xE1tum-tervez\xE9s n\xE9gy vez\xE9relve:

1. **Az aggreg\xE1tum a tranzakci\xF3s hat\xE1r.** Egy tranzakci\xF3ban egy aggreg\xE1tum-p\xE9ld\xE1nyt m\xF3dos\xEDts (l\xE1sd "Eventual consistency" fejezet).
2. **Kicsi aggreg\xE1tumok.** A nagy aggreg\xE1tum konkurenciahib\xE1t \xE9s teljes\xEDtm\xE9nyprobl\xE9m\xE1t okoz \u2013 ha egy rendel\xE9snek 5000 t\xE9tele van, val\xF3sz\xEDn\u0171leg rossz a hat\xE1r.
3. **M\xE1s aggreg\xE1tumra csak azonos\xEDt\xF3val hivatkozz** (\`CustomerId\`, nem \`Customer\` navig\xE1ci\xF3s property) \u2013 \xEDgy nem lehet v\xE9letlen\xFCl k\xE9t aggreg\xE1tumot m\xF3dos\xEDtani egy tranzakci\xF3ban.
4. **Az invari\xE1ns az aggreg\xE1tumon bel\xFCl \xE9l.** Ha egy szab\xE1ly k\xE9t aggreg\xE1tumot \xE9rint, az eventually consistent lesz (domain event + handler).

### Guard clause \u2013 az invari\xE1nsok kik\xE9nyszer\xEDt\xE9se a bel\xE9p\xE9sn\xE9l

A guard clause egy korai kil\xE9p\xE9s, ami az \xE9rv\xE9nytelen \xE1llapotot m\xE1r a met\xF3dus elej\xE9n elutas\xEDtja. El\u0151nye a m\xE9ly \`if\`-\xE1gakkal szemben, hogy a met\xF3dus f\u0151 \xFAtvonala beh\xFAz\xE1s n\xE9lk\xFCl, line\xE1risan olvashat\xF3.

\`\`\`bash
dotnet add package Ardalis.GuardClauses
\`\`\`

\`\`\`csharp
public void Ship(string trackingNumber, DateTimeOffset shippedAt)
{
    Guard.Against.NullOrWhiteSpace(trackingNumber);
    Guard.Against.OutOfSQLDateRange(shippedAt.UtcDateTime);
    Guard.Against.InvalidInput(Status, nameof(Status), s => s == OrderStatus.Paid,
        "Csak kifizetett rendel\xE9s adhat\xF3 \xE1t sz\xE1ll\xEDt\xE1sra.");

    Status = OrderStatus.Shipped;
    Raise(new OrderShipped(Id, trackingNumber, shippedAt));
}
\`\`\`

Saj\xE1t guard b\u0151v\xEDtm\xE9ny (a k\xF6nyvt\xE1r \`extension\` pontot ad r\xE1):

\`\`\`csharp
public static class OrderGuards
{
    public static void NotClosed(this IGuardClause guard, Order order)
    {
        if (order.Status is OrderStatus.Cancelled or OrderStatus.Completed)
            throw new BusinessRuleViolationException("order_closed", "A rendel\xE9s m\xE1r lez\xE1rult.");
    }
}
// haszn\xE1lat: Guard.Against.NotClosed(order);
\`\`\`

Fontos elhat\xE1rol\xE1s: a **guard clause a domain invari\xE1nst v\xE9di** (soha nem szabad megs\xE9rteni, kiv\xE9tel j\xE1r \xE9rte), a **valid\xE1ci\xF3 a bemenet form\xE1j\xE1t ellen\u0151rzi** a hat\xE1ron (felhaszn\xE1l\xF3i hiba, \`ValidationProblemDetails\` a v\xE1lasz \u2013 l\xE1sd "FluentValidation" fejezet). A kett\u0151 nem helyettes\xEDti egym\xE1st: a valid\xE1ci\xF3 bar\xE1ts\xE1gos hiba\xFCzenetet ad, a guard pedig azt garant\xE1lja, hogy programoz\xE1si hiba eset\xE9n se ker\xFClhessen az objektum \xE9rv\xE9nytelen \xE1llapotba.

### Domain service \xE9s application service

**Domain service** akkor kell, ha egy m\u0171velet nem tartozik term\xE9szetesen egyetlen entit\xE1shoz sem (pl. \`TransferService.Transfer(from, to, amount)\` k\xE9t sz\xE1mla k\xF6z\xF6tt, vagy egy \xE1raz\xE1si szab\xE1ly, ami t\xF6bb aggreg\xE1tum adat\xE1t ig\xE9nyli). \xC1llapotmentes, a domain nyelv\xE9n besz\xE9l, \xE9s a domain r\xE9tegben \xE9l. **Application service** (use case handler) ezzel szemben a folyamatot vez\xE9nyli: bet\xF6lti az aggreg\xE1tumot, megh\xEDvja rajta a domain m\u0171veletet, ment, \xFCzenetet publik\xE1l \u2013 \xFCzleti szab\xE1lyt viszont **nem** tartalmaz.

Mit ker\xFClj el: an\xE9mikus domain modell (csak getter/setter entit\xE1sok, minden logika a service-ekben \u2013 ez nem DDD, hanem tranzakci\xF3s szkript); publikus setter az entit\xE1son; k\xE9tir\xE1ny\xFA navig\xE1ci\xF3s property aggreg\xE1tumok k\xF6z\xF6tt; value object mut\xE1l\xE1sa helyben; a domain r\xE9tegben EF Core, ASP.NET Core vagy b\xE1rmilyen infrastrukt\xFAra-hivatkoz\xE1s (ezt architekt\xFAra teszttel k\xE9nyszer\xEDtsd ki).

## Structured Service Composition \u2013 a DI-regisztr\xE1ci\xF3 rendszerez\xE9se (ASP.NET Core 1.0+) https://learn.microsoft.com/dotnet/core/extensions/dependency-injection {#structured-service-composition-a-di-regisztracio-rendszerezese}

*Verzi\xF3: \`IHostApplicationBuilder\` (k\xF6z\xF6s absztrakci\xF3 web \xE9s worker felett): .NET 8-t\xF3l.*

Ahogy az alkalmaz\xE1s n\u0151, a \`Program.cs\` \xE9s a hozz\xE1 tartoz\xF3 \`AddXyz()\` b\u0151v\xEDtm\xE9nyek elburj\xE1nzanak, \xE9s egy id\u0151 ut\xE1n neh\xE9z megv\xE1laszolni azt az egyszer\u0171 k\xE9rd\xE9st, hogy **mi van regisztr\xE1lva, milyen sorrendben \xE9s mi\xE9rt**. Ez k\xFCl\xF6n\xF6sen f\xE1jdalmas, ha ugyanaz az alkalmaz\xE1smag t\xF6bb hosztban is fut (Web API, worker, Azure Function, teszt).

### Modul-alap\xFA kompoz\xEDci\xF3

Az alap\xF6tlet: minden \xF6sszetartoz\xF3 regisztr\xE1ci\xF3-csoport egy \xF6n\xE1ll\xF3, felfedezhet\u0151 **modul**, k\xF6z\xF6s szerz\u0151d\xE9ssel \u2013 nem sz\xF3rt extension met\xF3dusok halmaza.

\`\`\`csharp
public interface IServiceModule
{
    /// Kisebb sz\xE1m = kor\xE1bbi regisztr\xE1ci\xF3 (ahol a sorrend sz\xE1m\xEDt)
    int Order => 100;
    void Register(IHostApplicationBuilder builder);
}

public sealed class PersistenceModule : IServiceModule
{
    public int Order => 10;

    public void Register(IHostApplicationBuilder builder)
    {
        builder.Services.AddDbContext<AppDbContext>(o => o
            .UseNpgsql(builder.Configuration.GetConnectionString("Default"))
            .UseSnakeCaseNamingConvention());

        builder.Services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<AppDbContext>());
        builder.Services.Scan(s => s.FromAssemblyOf<AppDbContext>()
            .AddClasses(c => c.AssignableTo(typeof(IRepository<>)))
            .AsImplementedInterfaces().WithScopedLifetime());
    }
}

public sealed class MessagingModule : IServiceModule
{
    public int Order => 20;   // a perzisztencia UT\xC1N: az outbox a DbContextre \xE9p\xFCl

    public void Register(IHostApplicationBuilder builder) =>
        builder.Services.AddMassTransit(x => { /* ... */ });
}
\`\`\`

\`\`\`csharp
public static class ServiceModuleExtensions
{
    public static IHostApplicationBuilder AddModules(this IHostApplicationBuilder builder, params Assembly[] assemblies)
    {
        var modules = assemblies
            .SelectMany(a => a.DefinedTypes)
            .Where(t => t is { IsAbstract: false, IsInterface: false } && t.IsAssignableTo(typeof(IServiceModule)))
            .Select(t => (IServiceModule)Activator.CreateInstance(t)!)
            .OrderBy(m => m.Order)
            .ToList();

        foreach (var module in modules) module.Register(builder);

        return builder;
    }
}
\`\`\`

\`\`\`csharp
// Program.cs \u2013 olvashat\xF3 marad akkor is, ha 200 szolg\xE1ltat\xE1s van regisztr\xE1lva
var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();                                 // Aspire: telemetria, health, resilience
builder.AddModules(typeof(PersistenceModule).Assembly, typeof(WebModule).Assembly);

var app = builder.Build();
\`\`\`

### Mi\xE9rt \xE9ri meg

- **Egy hely modulonk\xE9nt**: \xFAj integr\xE1ci\xF3 bevezet\xE9sekor egy\xE9rtelm\u0171, hova ker\xFCl a regisztr\xE1ci\xF3.
- **Sorrend explicit**, nem v\xE9letlenszer\u0171: a \`Order\` tulajdons\xE1g kimondja, ami eddig hallgat\xF3lagos volt.
- **\xDAjrafelhaszn\xE1l\xE1s hosztok k\xF6z\xF6tt**: a worker \xE9s a teszt-host ugyanazokat a modulokat t\xF6lti be, csak m\xE1s halmazt (\`AddModules(coreAssembly)\` a workerben, plusz a web modul az API-ban).
- **Tesztelhet\u0151s\xE9g**: egy modul \xF6nmag\xE1ban is p\xE9ld\xE1nyos\xEDthat\xF3 \xE9s ellen\u0151rizhet\u0151 (\`ServiceCollection\` + \`BuildServiceProvider\` + \`ValidateOnBuild\`).
- **Diagnosztika**: egy egyszer\u0171 ind\xEDt\xE1si log ki tudja \xEDrni a bet\xF6lt\xF6tt modulokat, ami onboardingn\xE1l sokat \xE9r.

### Kompoz\xEDci\xF3s ellen\u0151rz\xE9sek indul\xE1skor

\`\`\`csharp
builder.Host.UseDefaultServiceProvider((context, options) =>
{
    options.ValidateScopes = true;
    options.ValidateOnBuild = true;      // hi\xE1nyz\xF3/hib\xE1s regisztr\xE1ci\xF3 indul\xE1skor bukik
});
\`\`\`

\xC9rdemes egy tesztet is \xEDrni, ami a teljes kont\xE9nert fel\xE9p\xEDti \xE9s minden regisztr\xE1lt szolg\xE1ltat\xE1st feloldat \u2013 \xEDgy a hib\xE1s \xE9lettartam (captive dependency, l\xE1sd "Keyed Services \xE9s halad\xF3 DI" fejezet) nem \xE9lesben der\xFCl ki.

Mit ker\xFClj el: ne rejtsd el a regisztr\xE1ci\xF3kat statikus konstruktorokba vagy assembly-scan "var\xE1zslatba" \xFAgy, hogy ne lehessen kilist\xE1zni; ne f\xFCggj\xF6n a modulok sorrendje kimondatlan felt\xE9telez\xE9seken; ne tegy\xE9l konfigur\xE1ci\xF3-olvas\xE1son k\xEDv\xFCl \xFCzleti logik\xE1t a modulba.

## Boilerplate cs\xF6kkent\xE9se Clean Architecture-ben {#boilerplate-csokkentese-clean-architecture-ben}

*Verzi\xF3: MediatR ny\xEDlt pipeline behavior (\`AddOpenBehavior\`): MediatR 12; forr\xE1sk\xF3d-gener\xE1torok: C# 9+.*

A Clean Architecture legjogosabb kritik\xE1ja, hogy sok az ism\xE9tl\u0151d\u0151 k\xF3d: minden use case-hez command + validator + handler + DTO + mapping + endpoint. A c\xE9l nem a r\xE9tegek elhagy\xE1sa, hanem az **ism\xE9tl\u0151d\xE9s kiemel\xE9se a keresztir\xE1ny\xFA pontokra**.

### 1. Pipeline behavior \u2013 ami minden use case-re igaz, egyszer legyen meg\xEDrva

\`\`\`csharp
// Tranzakci\xF3: minden parancs egy tranzakci\xF3ban fut, a lek\xE9rdez\xE9sek nem
public class TransactionBehavior<TRequest, TResponse>(AppDbContext db)
    : IPipelineBehavior<TRequest, TResponse> where TRequest : ICommand<TResponse>
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        if (db.Database.CurrentTransaction is not null) return await next();   // be\xE1gyazott h\xEDv\xE1s

        var strategy = db.Database.CreateExecutionStrategy();
        return await strategy.ExecuteAsync(async () =>
        {
            await using var transaction = await db.Database.BeginTransactionAsync(ct);
            var response = await next();
            await db.SaveChangesAsync(ct);
            await transaction.CommitAsync(ct);
            return response;
        });
    }
}

builder.Services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssemblyContaining<Program>();
    cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
    cfg.AddOpenBehavior(typeof(ValidationBehavior<,>));
    cfg.AddOpenBehavior(typeof(TransactionBehavior<,>));
    cfg.AddOpenBehavior(typeof(DomainEventDispatchBehavior<,>));
});
\`\`\`

A marker interf\xE9szek (\`ICommand<T>\`, \`IQuery<T>\`) az\xE9rt fontosak, mert \xEDgy a behavior **t\xEDpus alapj\xE1n** d\xF6nti el, mi vonatkozik r\xE1 \u2013 nincs \`if (request is ...)\` sz\xF3rva a k\xF3dban.

### 2. Generikus handler az egyszer\u0171 esetekre

A tiszt\xE1n CRUD jelleg\u0171 use case-ekhez nem kell k\xFCl\xF6n handler oszt\xE1ly:

\`\`\`csharp
public class GetByIdQuery<TEntity, TDto>(Guid id) : IQuery<TDto?> where TEntity : class, IEntity
{
    public Guid Id { get; } = id;
}

public class GetByIdHandler<TEntity, TDto>(AppDbContext db, IConfigurationProvider mapperConfig)
    : IRequestHandler<GetByIdQuery<TEntity, TDto>, TDto?> where TEntity : class, IEntity
{
    public async Task<TDto?> Handle(GetByIdQuery<TEntity, TDto> query, CancellationToken ct) =>
        await db.Set<TEntity>().Where(e => e.Id == query.Id)
            .ProjectTo<TDto>(mapperConfig).FirstOrDefaultAsync(ct);
}

builder.Services.AddTransient(typeof(IRequestHandler<,>), typeof(GetByIdHandler<,>));
\`\`\`

Fontos korl\xE1t: **amint \xFCzleti szab\xE1ly ker\xFCl bele, ki kell emelni** k\xFCl\xF6n handlerbe. A generikus handler a trivi\xE1lis eset\xE9; ha elkezded konfigur\xE1lni, elvesz\xEDted az el\u0151ny\xE9t.

### 3. Endpoint-regisztr\xE1ci\xF3 konvenci\xF3val

L\xE1sd a "Vertical Slice Architecture a gyakorlatban" fejezet \`IEndpoint\` mint\xE1j\xE1t \u2013 az assembly-scan megsz\xFCnteti a \`Program.cs\`-ben a t\xF6bb sz\xE1z \`MapGet\`/\`MapPost\` sort.

### 4. Forr\xE1sk\xF3d-gener\xE1torok reflexi\xF3 helyett

- **Mapperly** a DTO-lek\xE9pez\xE9shez (l\xE1sd a vonatkoz\xF3 fejezetet) \u2013 nincs runtime profil, ford\xEDt\xE1si idej\u0171 hiba.
- **\`[OptionsValidator]\`** a konfigur\xE1ci\xF3-valid\xE1l\xE1shoz.
- **\`JsonSerializerContext\`** a szerializ\xE1ci\xF3hoz.
- **Strongly typed ID gener\xE1torok** (pl. StronglyTypedId, Vogen) \u2013 a \`Guid\` alap\xFA azonos\xEDt\xF3k t\xEDpusbiztoss\xE1 t\xE9tele (\`OrderId\` nem adhat\xF3 \xE1t \`CustomerId\` hely\xE9re), boilerplate n\xE9lk\xFCl.

### 5. Sablonok \xE9s scaffolding

\`\`\`bash
dotnet new install Ardalis.CleanArchitecture.Template
dotnet new clean-arch -o MyApp
\`\`\`

Saj\xE1t \`dotnet new\` sablon a csapat konvenci\xF3ival gyakran t\xF6bbet \xE9r, mint b\xE1rmelyik generikus template: a use case v\xE1za (command + validator + handler + endpoint + teszt) egy paranccsal l\xE9trej\xF6n a helyes n\xE9vt\xE9rben.

Mit ker\xFClj el: ne absztrah\xE1ld el a boilerplate-et olyan m\xE9lyre, hogy senki ne \xE9rtse, mi fut le (a "var\xE1zslat" \xE1ra a hibakeres\xE9s); ne vezess be generikus repository-t + generikus service-t + generikus controllert egyszerre (ez a r\xE9teg-\xFCresj\xE1rat klasszikus receptje); ne cser\xE9ld le a kifejez\u0151, explicit k\xF3dot r\xF6videbb, de nehezebben olvashat\xF3ra puszt\xE1n a sorok sz\xE1ma miatt.

## Aggregator Pattern https://learn.microsoft.com/azure/architecture/patterns/gateway-aggregation {#aggregator-pattern}

*Verzi\xF3: \`HttpClient\` tipiz\xE1lt kliensek: ASP.NET Core 2.1+; \`Task.WhenAll\` p\xE1rhuzamos h\xEDv\xE1sokhoz: .NET Framework 4.5 \xF3ta.*

Mikroszolg\xE1ltat\xE1sokn\xE1l egy k\xE9perny\u0151 adata gyakran t\xF6bb szolg\xE1ltat\xE1sb\xF3l \xE1ll \xF6ssze. Ha ezt a **kliens** v\xE9gzi, \xF6t-hat k\xF6rbefordul\xE1s lesz bel\u0151le mobilh\xE1l\xF3zaton, a kliens ismerni fogja a teljes szolg\xE1ltat\xE1s-topol\xF3gi\xE1t, \xE9s minden v\xE1ltoz\xE1s a backendben kliensoldali friss\xEDt\xE9st ig\xE9nyel.

Az **Aggregator** egy k\xF6ztes szolg\xE1ltat\xE1s, amely egyetlen h\xEDv\xE1sra \xF6sszegy\u0171jti, \xF6sszef\xE9s\xFCli \xE9s egyetlen v\xE1laszk\xE9nt adja vissza az adatot.

\`\`\`csharp
public class PatientDashboardAggregator(
    PatientClient patients, MedicalHistoryClient history,
    AppointmentClient appointments, BillingClient billing,
    HybridCache cache, ILogger<PatientDashboardAggregator> logger)
{
    public async Task<PatientDashboardDto> GetAsync(Guid patientId, CancellationToken ct)
    {
        // a beteg alapadata k\xF6telez\u0151 \u2013 ha ez nincs, nincs mit megjelen\xEDteni
        var patient = await patients.GetAsync(patientId, ct)
            ?? throw new NotFoundException("Patient", patientId);

        // a t\xF6bbi P\xC1RHUZAMOSAN, \xE9s egyenk\xE9nt hibat\u0171r\u0151en
        var historyTask = SafeAsync(() => history.GetAsync(patientId, ct), Array.Empty<HistoryItemDto>(), "history");
        var appointmentsTask = SafeAsync(() => appointments.GetUpcomingAsync(patientId, ct), [], "appointments");
        var billingTask = SafeAsync(() => billing.GetBalanceAsync(patientId, ct), BalanceDto.Unknown, "billing");

        await Task.WhenAll(historyTask, appointmentsTask, billingTask);

        return new PatientDashboardDto(patient, await historyTask, await appointmentsTask, await billingTask);
    }

    /// R\xE9szleges hiba nem d\xF6ntheti el az eg\xE9sz k\xE9perny\u0151t (graceful degradation)
    private async Task<T> SafeAsync<T>(Func<Task<T>> call, T fallback, string source)
    {
        try { return await call(); }
        catch (Exception ex)
        {
            logger.LogWarning(ex, "Az aggreg\xE1tor {Source} forr\xE1sa nem el\xE9rhet\u0151, fallback \xE9rt\xE9k", source);
            return fallback;
        }
    }
}
\`\`\`

### Amire figyelni kell

- **P\xE1rhuzamos\xEDt\xE1s**: a h\xEDv\xE1sok \`Task.WhenAll\`-lal menjenek, k\xFCl\xF6nben az \xF6sszes\xEDtett k\xE9sleltet\xE9s a r\xE9szek **\xF6sszege** lesz, nem a maximuma.
- **R\xE9szleges hiba kezel\xE9se**: d\xF6ntsd el forr\xE1sonk\xE9nt, hogy kritikus-e. A nem kritikus forr\xE1s hib\xE1ja fallback \xE9rt\xE9ket adjon, \xE9s a v\xE1lasz jelezze, mi hi\xE1nyzik (\`"billing": null\` + \`warnings\` mez\u0151), ne az eg\xE9sz k\xE9r\xE9s bukjon.
- **Timeout \xE9s circuit breaker minden downstream h\xEDv\xE1sra** (l\xE1sd "Polly v8" fejezet) \u2013 az aggreg\xE1tor annyira lass\xFA, mint a leglassabb f\xFCgg\u0151s\xE9ge.
- **Cache**: a ritk\xE1n v\xE1ltoz\xF3 r\xE9szek (t\xF6rzsadat) gyors\xEDt\xF3t\xE1raz\xE1sa dr\xE1maian jav\xEDt (l\xE1sd "HybridCache" fejezet).
- **T\xF6m\xF6r\xEDt\xE9s**: az \xF6sszes\xEDtett v\xE1lasz nagy lehet \u2013 \`UseResponseCompression\` (Brotli/Gzip) mobil kliensn\xE9l sokat sz\xE1m\xEDt.
- **Megfigyelhet\u0151s\xE9g**: az aggreg\xE1tor a trace-ben egyetlen sz\xFCl\u0151 span, alatta a downstream h\xEDv\xE1sok \u2013 itt l\xE1tszik meg azonnal, melyik forr\xE1s lass\xEDt (l\xE1sd "OpenTelemetry" fejezet).

### Aggregator vs. BFF vs. API Gateway

| | Feladat | Kliens-specifikus | \xDCzleti logika |
|---|---|---|---|
| API Gateway | \xFAtv\xE1laszt\xE1s, auth, rate limit, TLS | nem | nincs |
| BFF | egy adott kliens (web/mobil) ig\xE9ny\xE9re szabott fel\xFClet | igen | minim\xE1lis, megjelen\xEDt\xE9s-orient\xE1lt |
| Aggregator | t\xF6bb szolg\xE1ltat\xE1s adat\xE1nak \xF6sszef\xE9s\xFCl\xE9se | nem felt\xE9tlen\xFCl | \xF6sszef\xE9s\xFCl\xE9si/kieg\xE9sz\xEDt\xE9si logika |

A h\xE1rom gyakran egy folyamatban \xE9l (a BFF aggreg\xE1tork\xE9nt is m\u0171k\xF6dik), de a **felel\u0151ss\xE9g\xFCk k\xFCl\xF6n** \u2013 ha az aggreg\xE1torba \xFCzleti szab\xE1ly ker\xFCl, az egy elosztott monolit els\u0151 l\xE9p\xE9se.

Mit ker\xFClj el: ne \xEDrj olyan aggreg\xE1tort, ami adatot **m\xF3dos\xEDt** t\xF6bb szolg\xE1ltat\xE1sban (arra Saga val\xF3); ne l\xE1ncolj aggreg\xE1tort aggreg\xE1torba; ne h\xEDvj szinkron l\xE1ncot ott, ahol egy el\u0151re fel\xE9p\xEDtett olvas\xE1si modell (CQRS projekci\xF3, l\xE1sd "Event-Driven integr\xE1ci\xF3s st\xEDlusok") olcs\xF3bb \xE9s gyorsabb.

## Adatb\xE1zis-strat\xE9gi\xE1k mikroszolg\xE1ltat\xE1sokn\xE1l https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/data-considerations {#adatbazis-strategiak-mikroszolgaltatasoknal}

*Verzi\xF3: EF Core s\xE9ma-szepar\xE1ci\xF3 (\`HasDefaultSchema\`): 1.0+; Debezium CDC konnektorok: platformf\xFCggetlen.*

### Database per service vs. shared database

| | Database per service | Shared database |
|---|---|---|
| Csatol\xE1s | laza \u2013 a s\xE9ma a szolg\xE1ltat\xE1s bel\xFCgye | szoros \u2013 minden s\xE9ma-v\xE1ltoz\xE1s mindenkit \xE9rint |
| Technol\xF3gia | szolg\xE1ltat\xE1sonk\xE9nt v\xE1laszthat\xF3 (polyglot) | egys\xE9ges |
| Tranzakci\xF3 szolg\xE1ltat\xE1sok k\xF6z\xF6tt | nincs, Saga kell | lok\xE1lis ACID |
| Riport t\xF6bb adatter\xFCletr\u0151l | neh\xE9z (CQRS, adatt\xE1rh\xE1z) | egyszer\u0171 JOIN |
| Csapat-auton\xF3mia | magas | alacsony |

Az alap\xE9rtelmez\xE9s a **database per service** \u2013 ez teszi lehet\u0151v\xE9 a f\xFCggetlen deployt \xE9s sk\xE1l\xE1z\xE1st. A shared database csak \xE1tmeneti \xE1llapotk\xE9nt v\xE9dhet\u0151 (monolitb\xF3l val\xF3 kiv\xE1g\xE1s k\xF6zben, l\xE1sd "Strangler Fig Pattern"), \xE9s akkor is szigor\xFA szab\xE1llyal: **egy t\xE1bl\xE1t pontosan egy szolg\xE1ltat\xE1s \xEDrhat**, a t\xF6bbi legfeljebb olvashat \u2013 vagy m\xE9g \xFAgy sem.

Modular monolithban a k\xF6ztes megold\xE1s a **s\xE9ma per modul**: egy adatb\xE1zis, modulonk\xE9nt k\xFCl\xF6n s\xE9ma, \xE9s architekt\xFAra teszt vagy adatb\xE1zis-jogosults\xE1g tiltja a keresztir\xE1ny\xFA hozz\xE1f\xE9r\xE9st.

\`\`\`csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.HasDefaultSchema("orders");     // a modul saj\xE1t s\xE9m\xE1ja
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
}
\`\`\`

### Polyglot persistence \u2013 adatt\xEDpushoz ill\u0151 t\xE1rol\xF3

Nem minden adat rel\xE1ci\xF3s. Tipikus feloszt\xE1s egy nagyobb rendszerben: tranzakci\xF3s t\xF6rzs (PostgreSQL/SQL Server), dokumentum-jelleg\u0171, v\xE1ltoz\xF3 szerkezet\u0171 adat (MongoDB, PostgreSQL \`jsonb\`), gyors\xEDt\xF3t\xE1r \xE9s munkamenet (Redis), teljes sz\xF6veg\u0171 keres\xE9s (Elasticsearch/OpenSearch), gr\xE1f-jelleg\u0171 kapcsolatok (Neo4j), esem\xE9nyt\xE1r (EventStoreDB, Marten), id\u0151soros adat (TimescaleDB, InfluxDB).

\xC1ra viszont van: minden \xFAj t\xE1rol\xF3t\xEDpus \xFAj \xFCzemeltet\xE9si tud\xE1st, ment\xE9si strat\xE9gi\xE1t, monitoroz\xE1st \xE9s hibam\xF3dot jelent. \xD6k\xF6lszab\xE1ly: **rel\xE1ci\xF3s alap\xE9rtelmez\xE9s, \xE9s csak indokolt esetben m\xE1sik t\xE1rol\xF3** \u2013 a PostgreSQL \`jsonb\` \xE9s teljes sz\xF6veg\u0171 keres\xE9se sok esetben kiv\xE1ltja a m\xE1sodik adatb\xE1zist.

### Sharding \u2013 v\xEDzszintes particion\xE1l\xE1s

Ha egy szolg\xE1ltat\xE1s adata egy g\xE9pen m\xE1r nem f\xE9r el vagy nem szolg\xE1lhat\xF3 ki, az adat t\xF6bb shardra oszthat\xF3. A **shard kulcs** megv\xE1laszt\xE1sa a legfontosabb \xE9s legnehezebben visszavonhat\xF3 d\xF6nt\xE9s:

- Legyen olyan, ami **minden lek\xE9rdez\xE9sben szerepel** (k\xFCl\xF6nben sz\xF3rt, minden shardot \xE9rint\u0151 lek\xE9rdez\xE9sek lesznek).
- Legyen **egyenletes eloszl\xE1s\xFA** (a \`TenantId\` n\xE9pszer\u0171, de egy \xF3ri\xE1s tenant "forr\xF3 shardot" csin\xE1l).
- Ker\xFCld a monoton n\xF6vekv\u0151 kulcsot shard kulcsk\xE9nt (minden \xFAj \xEDr\xE1s ugyanarra a shardra megy).

\`\`\`csharp
public interface IShardResolver { string GetConnectionString(Guid tenantId); }

builder.Services.AddDbContext<AppDbContext>((sp, options) =>
{
    var tenant = sp.GetRequiredService<ITenantContext>();
    options.UseNpgsql(sp.GetRequiredService<IShardResolver>().GetConnectionString(tenant.CurrentTenantId));
});
\`\`\`

Miel\u0151tt shardolsz, pr\xF3b\xE1ld v\xE9gig: indexel\xE9s, particion\xE1lt t\xE1bla (egy adatb\xE1zison bel\xFCl), read replica olvas\xE1si terhel\xE9sre, archiv\xE1l\xE1s. A sharding a legdr\xE1g\xE1bb l\xE9p\xE9s \u2013 a join, a tranzakci\xF3 \xE9s a migr\xE1ci\xF3 is nehezebb lesz t\u0151le.

### Adatszinkroniz\xE1ci\xF3 szolg\xE1ltat\xE1sok k\xF6z\xF6tt

Ha egy szolg\xE1ltat\xE1snak egy m\xE1sik adat\xE1ra van sz\xFCks\xE9ge, h\xE1rom \xFAt van:

1. **Szinkron lek\xE9rdez\xE9s** (HTTP/gRPC) \u2013 egyszer\u0171, de fut\xE1sidej\u0171 csatol\xE1st \xE9s halmoz\xF3d\xF3 k\xE9sleltet\xE9st hoz.
2. **Event-Carried State Transfer** \u2013 a forr\xE1s publik\xE1lja a v\xE1ltoz\xE1st, a fogyaszt\xF3 saj\xE1t, denormaliz\xE1lt m\xE1solatot tart (l\xE1sd "Event-Driven integr\xE1ci\xF3s st\xEDlusok"). Ez a leggyakoribb helyes v\xE1lasz.
3. **Change Data Capture (CDC)** \u2013 a tranzakci\xF3s napl\xF3 olvas\xE1s\xE1val (Debezium + Kafka Connect) az adatb\xE1zis-v\xE1ltoz\xE1sok esem\xE9nyekk\xE9 alakulnak, az alkalmaz\xE1s m\xF3dos\xEDt\xE1sa n\xE9lk\xFCl. Legacy rendszer integr\xE1l\xE1s\xE1n\xE1l \xE9rt\xE9kes, de a s\xE9ma **bels\u0151** r\xE9szleteit teszi publikuss\xE1 \u2013 \xFAj fejleszt\xE9sn\xE9l ink\xE1bb Outbox + explicit integr\xE1ci\xF3s esem\xE9ny.

Mit ker\xFClj el: ne \xEDrj k\xF6zvetlen\xFCl m\xE1sik szolg\xE1ltat\xE1s adatb\xE1zis\xE1ba (ez a leger\u0151sebb csatol\xE1s, ami l\xE9tezik); ne k\xE9sz\xEDts k\xF6z\xF6s riport-lek\xE9rdez\xE9st t\xF6bb szolg\xE1ltat\xE1s t\xE1bl\xE1in (arra k\xFCl\xF6n olvas\xE1si modell vagy adatt\xE1rh\xE1z val\xF3); ne m\xE1sold \xE1t a teljes adatot minden szolg\xE1ltat\xE1sba "biztos, ami biztos" alapon \u2013 csak azt, amire t\xE9nyleg sz\xFCks\xE9g van.

## API Gateway YARP-pal (YARP) https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp {#api-gateway-yarp-pal}

*Verzi\xF3: YARP (Yet Another Reverse Proxy) 2.x: .NET 8+; kor\xE1bbi alternat\xEDva: Ocelot.*

A "Backend for Frontend (BFF) \xE9s API Gateway" fejezet a mint\xE1t \xEDrja le; itt a .NET-es megval\xF3s\xEDt\xE1s k\xF6vetkezik. A **YARP** nem k\xFCl\xF6n\xE1ll\xF3 szerveralkalmaz\xE1s, hanem **middleware k\xF6nyvt\xE1r**, amely egy sima ASP.NET Core alkalmaz\xE1sba \xE9p\xFCl \u2013 ez\xE9rt a b\u0151v\xEDt\xE9se ugyanazokkal az eszk\xF6z\xF6kkel t\xF6rt\xE9nik, amiket am\xFAgy is ismersz (DI, middleware, policy, telemetria).

\`\`\`bash
dotnet add package Yarp.ReverseProxy
\`\`\`

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"))
    .AddServiceDiscoveryDestinationResolver();   // Aspire/K8s szolg\xE1ltat\xE1snevek felold\xE1sa

builder.Services.AddRateLimiter(/* ... l\xE1sd "Rate limiting" fejezet */);
builder.Services.AddAuthentication().AddJwtBearer();

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.UseRateLimiter();
app.MapReverseProxy();

app.Run();
\`\`\`

\`\`\`json
{
  "ReverseProxy": {
    "Routes": {
      "orders": {
        "ClusterId": "orders-cluster",
        "AuthorizationPolicy": "authenticated",
        "RateLimiterPolicy": "per-user",
        "Match": { "Path": "/api/orders/{**catch-all}" },
        "Transforms": [
          { "PathRemovePrefix": "/api" },
          { "RequestHeader": "X-Gateway", "Set": "public-gw" },
          { "RequestHeadersCopy": "true" }
        ]
      }
    },
    "Clusters": {
      "orders-cluster": {
        "LoadBalancingPolicy": "PowerOfTwoChoices",
        "HealthCheck": {
          "Active": { "Enabled": true, "Interval": "00:00:10", "Path": "/health/ready" }
        },
        "Destinations": {
          "d1": { "Address": "https://orders-api-1:8080/" },
          "d2": { "Address": "https://orders-api-2:8080/" }
        }
      }
    }
  }
}
\`\`\`

### Amit a gateway v\xE9gezzen

\xDAtv\xE1laszt\xE1s \xE9s verzi\xF3kezel\xE9s; TLS-termin\xE1l\xE1s; **hiteles\xEDt\xE9s** (a token egyszeri valid\xE1l\xE1sa a bel\xE9p\xE9sn\xE9l); rate limiting \xE9s kv\xF3ta; k\xE9r\xE9s/v\xE1lasz \xE1talak\xEDt\xE1s (fejl\xE9cek, \xFAtvonal-prefix); t\xF6m\xF6r\xEDt\xE9s; korrel\xE1ci\xF3-azonos\xEDt\xF3 be\xFCltet\xE9se; napl\xF3z\xE1s \xE9s metrika a peremen; k\xE9r\xE9sm\xE9ret-korl\xE1t.

### Amit **ne** v\xE9gezzen

\xDCzleti logik\xE1t, adat\xF6sszef\xE9s\xFCl\xE9st (arra Aggregator/BFF val\xF3), adatb\xE1zis-hozz\xE1f\xE9r\xE9st, hossz\xFA fut\xE1s\xFA munk\xE1t. A gateway a rendszer legkritikusabb egyszeri hibapontja: min\xE9l kevesebb dolga van, ann\xE1l megb\xEDzhat\xF3bb.

### Gyakorlati kieg\xE9sz\xEDt\xE9sek

\`\`\`csharp
// Saj\xE1t transform: a felhaszn\xE1l\xF3 azonos\xEDt\xF3j\xE1nak tov\xE1bbad\xE1sa bels\u0151 fejl\xE9cben
builder.Services.AddReverseProxy().AddTransforms(context =>
{
    context.AddRequestTransform(async transformContext =>
    {
        var userId = transformContext.HttpContext.User.FindFirst("sub")?.Value;
        if (userId is not null) transformContext.ProxyRequest.Headers.Add("X-User-Id", userId);
        await ValueTask.CompletedTask;
    });
});
\`\`\`

**Token-kezel\xE9s BFF m\xF3dban**: a b\xF6ng\xE9sz\u0151ben ne legyen hozz\xE1f\xE9r\xE9si token. A gateway/BFF \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` s\xFCtiben tartja a munkamenetet, \xE9s szerveroldalon cser\xE9li tokenre a bels\u0151 h\xEDv\xE1sokhoz \u2013 \xEDgy az XSS nem tud tokent lopni.

**Ocelot vs. YARP**: az Ocelot r\xE9gebbi, konfigur\xE1ci\xF3-k\xF6zpont\xFA \xE9s sok be\xE9p\xEDtett funkci\xF3ja van (aggreg\xE1ci\xF3, throttling), de a fejleszt\xE9se lassult. \xDAj projektben a YARP a javasolt v\xE1laszt\xE1s; nagy forgalm\xFA, infrastrukt\xFAra-szint\u0171 peremre pedig Envoy, NGINX vagy a felh\u0151szolg\xE1ltat\xF3 saj\xE1t gateway-e is sz\xF3ba j\xF6n \u2013 a YARP el\u0151nye, hogy .NET csapat \xFCzemelteti .NET eszk\xF6z\xF6kkel.

Mit ker\xFClj el: ne tegy\xE9l mindent egyetlen gateway m\xF6g\xE9 kliens-t\xEDpust\xF3l f\xFCggetlen\xFCl (a k\xFCl\xF6nb\xF6z\u0151 kliensek elt\xE9r\u0151 ig\xE9nyeihez BFF val\xF3); ne duplik\xE1ld az autoriz\xE1ci\xF3s szab\xE1lyokat a gatewayben \xE9s a szolg\xE1ltat\xE1sban ellen\u0151rz\xE9s n\xE9lk\xFCl (a szolg\xE1ltat\xE1s **soha ne b\xEDzzon** vakon abban, hogy a gateway m\xE1r ellen\u0151rz\xF6tt \u2013 zero trust); ne hardk\xF3dolj c\xE9lc\xEDmeket, ha van szolg\xE1ltat\xE1s-felder\xEDt\xE9s.

## Rugalmass\xE1gi mint\xE1k a circuit breakeren t\xFAl (.NET 8+ (Microsoft.Extensions.Resilience)) https://learn.microsoft.com/dotnet/core/resilience/http-resilience {#rugalmassagi-mintak-a-circuit-breakeren-tul}

*Verzi\xF3: Polly v8 \`ResiliencePipeline\`: .NET 8+; \`RateLimiter\`-alap\xFA bulkhead: .NET 7+.*

A "Circuit Breaker Pattern" \xE9s a "Polly v8" fejezet mell\xE9 a teljes eszk\xF6zt\xE1r:

### Timeout \u2013 minden t\xE1voli h\xEDv\xE1snak legyen

A leggyakoribb \xE9les hiba nem az, hogy egy szolg\xE1ltat\xE1s hib\xE1t ad, hanem hogy **nem v\xE1laszol**. Timeout n\xE9lk\xFCl a h\xEDv\xF3 sz\xE1lai \xE9s kapcsolatai elfogynak, \xE9s a hiba felfel\xE9 terjed. K\xE9t szintje van: **attempt timeout** (egy pr\xF3b\xE1lkoz\xE1s) \xE9s **total timeout** (a teljes m\u0171velet, retry-okkal egy\xFCtt).

### Bulkhead (rekeszel\xE9s) \u2013 a hiba ne terjedjen \xE1t

A haj\xF3test rekeszeihez hasonl\xF3an: az egyes f\xFCgg\u0151s\xE9gekhez **elk\xFCl\xF6n\xEDtett** er\u0151forr\xE1skeret tartozik, \xEDgy egy lass\xFA downstream nem eszi fel az \xF6sszes sz\xE1lat/kapcsolatot.

\`\`\`csharp
builder.Services.AddResiliencePipeline("reporting", pipeline => pipeline
    .AddConcurrencyLimiter(permitLimit: 10, queueLimit: 20)    // legfeljebb 10 egyidej\u0171 riport-h\xEDv\xE1s
    .AddTimeout(TimeSpan.FromSeconds(30)));
\`\`\`

Ugyanez a gondolat a \`HttpClient\` szintj\xE9n: **f\xFCgg\u0151s\xE9genk\xE9nt k\xFCl\xF6n tipiz\xE1lt kliens** k\xFCl\xF6n kapcsolatk\xE9szlettel \xE9s k\xFCl\xF6n resilience pipeline-nal, ne egy k\xF6z\xF6s kliens mindenre.

### Fallback \xE9s graceful degradation

Ha egy nem kritikus f\xFCgg\u0151s\xE9g kiesik, a rendszer adjon **cs\xF6kkentett, de m\u0171k\xF6d\u0151** v\xE1laszt: gyors\xEDt\xF3t\xE1rb\xF3l kiszolg\xE1lt (elavult) adat, alap\xE9rtelmezett \xE9rt\xE9k, vagy a funkci\xF3 elrejt\xE9se. Az "aj\xE1nlott term\xE9kek" hi\xE1nya nem indokolja, hogy a term\xE9koldal 500-at adjon.

\`\`\`csharp
pipeline.AddFallback(new FallbackStrategyOptions<IReadOnlyList<ProductDto>>
{
    ShouldHandle = new PredicateBuilder<IReadOnlyList<ProductDto>>().Handle<BrokenCircuitException>(),
    FallbackAction = _ => Outcome.FromResultAsValueTask<IReadOnlyList<ProductDto>>([])
});
\`\`\`

### Load shedding \xE9s backpressure

T\xFAlterhel\xE9s eset\xE9n jobb **gyorsan visszautas\xEDtani** (429/503 + \`Retry-After\`), mint mindenkit lassan kiszolg\xE1lni: a sorban \xE1ll\xF3 k\xE9r\xE9sek mem\xF3ri\xE1t fogyasztanak, \xE9s mire sorra ker\xFClnek, a kliens m\xE1r feladta. Ezt szolg\xE1lja a rate limiter \`QueueLimit\`-je \xE9s a \`RequestTimeouts\` middleware. \xDCzenetfeldolgoz\xE1sn\xE1l a bounded \`Channel\` \xE9s a broker prefetch-korl\xE1t ugyanezt a szerepet t\xF6lti be (l\xE1sd "Channels \xE9s IAsyncEnumerable" fejezet).

### Retry storm \xE9s a h\xEDv\xE1si l\xE1nc

Ha a kliens 3-szor, a gateway 3-szor \xE9s a szolg\xE1ltat\xE1s is 3-szor pr\xF3b\xE1lkozik, egy k\xE9r\xE9sb\u0151l 27 lesz \u2013 a lassul\xF3 rendszer \xEDgy kap kegyelemd\xF6f\xE9st. Szab\xE1lyok: **egy l\xE1ncban egy helyen legyen retry** (jellemz\u0151en a h\xEDv\xF3 perem\xE9n), mindig **jitterrel**, \xE9s a retry-t **circuit breaker f\xF6l\xF6tt** kell futtatni.

### Az idempotencia mint a rugalmass\xE1g felt\xE9tele

Retry, redelivery, hedging \u2013 mind duplik\xE1lt v\xE9grehajt\xE1st jelenthet. Ez\xE9rt a rugalmass\xE1gi mint\xE1k bevezet\xE9se el\u0151tt az \xEDr\xE1si m\u0171veleteknek idempotensnek kell lenni\xFCk (l\xE1sd "Idempotency Pattern API-kban" \xE9s "K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer" fejezetek).

### K\xE1osz-tesztel\xE9s

A rugalmass\xE1g csak akkor l\xE9tezik, ha ki is pr\xF3b\xE1ltad. A Polly v8 \`Simmy\` (chaos) strat\xE9gi\xE1i sz\xE1nd\xE9kosan injekt\xE1lnak hib\xE1t, k\xE9sleltet\xE9st vagy hib\xE1s v\xE1laszt \u2013 \xE9rdemes nem-\xE9les k\xF6rnyezetben bekapcsolni:

\`\`\`csharp
pipeline.AddChaosLatency(new ChaosLatencyStrategyOptions
{
    InjectionRate = 0.05, Latency = TimeSpan.FromSeconds(5), Enabled = !env.IsProduction()
});
\`\`\`

Mit ker\xFClj el: ne \xE9p\xEDts retry-t timeout n\xE9lk\xFCl; ne haszn\xE1lj hedginget nem idempotens m\u0171veletre; ne tekintsd a rugalmass\xE1got kiz\xE1r\xF3lag k\xF6nyvt\xE1r-k\xE9rd\xE9snek (a f\u0151 eszk\xF6z az aszinkron, laza csatol\xE1s \u2013 amit \xFCzenetsorral old meg a rendszer, azt nem kell retry-olni); ne \xE1ll\xEDts be olyan fallbacket, ami **csendben** hib\xE1s adatot ad vissza \u2013 jelezni kell, hogy cs\xF6kkentett m\xF3dban fut.

## Sidecar, Ambassador \xE9s Service Mesh (Dapr) https://learn.microsoft.com/dotnet/architecture/cloud-native/service-to-service-communication {#sidecar-ambassador-es-service-mesh-dapr}

*Verzi\xF3: Dapr 1.x: nyelvf\xFCggetlen, .NET SDK-val; Istio/Linkerd: Kubernetes.*

### Sidecar pattern

A **sidecar** egy k\xFCl\xF6n folyamat (kont\xE9ner), amely az alkalmaz\xE1s mellett fut ugyanabban a podban, \xE9s a keresztir\xE1ny\xFA infrastrukt\xFAra-feladatokat veszi \xE1t: szolg\xE1ltat\xE1s-felder\xEDt\xE9s, mTLS, retry, telemetria, titokkezel\xE9s, konfigur\xE1ci\xF3. Az alkalmaz\xE1s localhoston besz\xE9l vele.

El\u0151nye: a funkci\xF3 **nyelvf\xFCggetlen** (a .NET, Java \xE9s Node szolg\xE1ltat\xE1s ugyanazt kapja), \xE9s az alkalmaz\xE1s k\xF3dja nem h\xEDgul infrastrukt\xFAra-k\xF3ddal. H\xE1tr\xE1nya: plusz h\xE1l\xF3zati ugr\xE1s, plusz mem\xF3ria- \xE9s CPU-ig\xE9ny podonk\xE9nt, \xE9s egy \xFAjabb r\xE9teg, amit hibakeres\xE9sn\xE9l \xE9rteni kell.

### Ambassador pattern

A sidecar egy speci\xE1lis esete: kifel\xE9 ir\xE1nyul\xF3 h\xE1l\xF3zati h\xEDv\xE1sokat proxyz (retry, timeout, TLS, connection pooling), tipikusan legacy alkalmaz\xE1s mell\xE9, amelynek a k\xF3dj\xE1t nem akarjuk hozz\xE1ny\xFAlni. Az alkalmaz\xE1s egyszer\u0171 HTTP-t h\xEDv localhoston, az ambassador v\xE9gzi a neh\xE9z munk\xE1t.

### Service mesh

Ha minden podban ott a sidecar proxy, \xE9s ezeket egy k\xF6zponti **control plane** (Istio, Linkerd) vez\xE9rli, akkor service meshr\u0151l besz\xE9l\xFCnk. Amit ad: **mTLS mindenhol** automatikusan, forgalomir\xE1ny\xEDt\xE1s (canary, A/B, t\xFCkr\xF6z\xE9s), retry/timeout/circuit breaker h\xE1zirendb\u0151l, egys\xE9ges metrika \xE9s trace minden szolg\xE1ltat\xE1sra, hozz\xE1f\xE9r\xE9si szab\xE1lyok szolg\xE1ltat\xE1sok k\xF6z\xF6tt.

Mikor \xE9ri meg: sok (10+) szolg\xE1ltat\xE1s, t\xF6bb nyelven, ahol az egys\xE9ges biztons\xE1g \xE9s megfigyelhet\u0151s\xE9g m\xE1sk\xE9pp nem oldhat\xF3 meg. Mikor nem: n\xE9h\xE1ny szolg\xE1ltat\xE1s \u2013 ott a mesh \xFCzemeltet\xE9si komplexit\xE1sa nagyobb, mint a haszon, \xE9s a .NET-en bel\xFCl a Polly + OpenTelemetry + Aspire ugyanezt adja kevesebb mozg\xF3 alkatr\xE9sszel.

### Dapr \u2013 alkalmaz\xE1s-k\xF6zpont\xFA sidecar

A Dapr (Distributed Application Runtime) nem h\xE1l\xF3zati mesh, hanem **\xE9p\xEDt\u0151elem-k\xE9szlet**: state store, pub/sub, service invocation, secrets, bindings, actors \u2013 mind egys\xE9ges API m\xF6g\xF6tt, cser\xE9lhet\u0151 komponensekkel (Redis, Kafka, Azure Service Bus stb.).

\`\`\`csharp
builder.Services.AddDaprClient();

// Szolg\xE1ltat\xE1s-h\xEDv\xE1s: a Dapr int\xE9zi a felder\xEDt\xE9st, mTLS-t, retry-t
var order = await daprClient.InvokeMethodAsync<OrderDto>(
    HttpMethod.Get, "orders-api", $"orders/{orderId}", cancellationToken);

// Pub/sub: a broker t\xEDpusa konfigur\xE1ci\xF3, nem k\xF3d
await daprClient.PublishEventAsync("pubsub", "orders.placed", new OrderPlaced(orderId), cancellationToken);

// Feliratkoz\xE1s
app.MapPost("/orders-placed", [Topic("pubsub", "orders.placed")]
    async (OrderPlaced evt, IOrderHandler handler, CancellationToken ct) =>
    {
        await handler.HandleAsync(evt, ct);
        return Results.Ok();
    });

// State store
await daprClient.SaveStateAsync("statestore", $"order-{orderId}", order, cancellationToken: ct);
\`\`\`

El\u0151ny: a broker- \xE9s t\xE1rol\xF3technol\xF3gia lecser\xE9lhet\u0151 k\xF3dm\xF3dos\xEDt\xE1s n\xE9lk\xFCl, \xE9s t\xF6bb nyelv\u0171 k\xF6rnyezetben egys\xE9ges. H\xE1tr\xE1ny: m\xE9g egy absztrakci\xF3s r\xE9teg, saj\xE1t hibam\xF3dokkal; a .NET-en bel\xFCl a MassTransit/Wolverine gazdagabb, t\xEDpusosabb \xE9lm\xE9nyt ad (saga, outbox, t\xEDpusos szerz\u0151d\xE9sek).

Mit ker\xFClj el: ne vezess be service mesht vagy Dapr-t az\xE9rt, mert korszer\u0171 \u2013 el\u0151sz\xF6r nevezd meg a probl\xE9m\xE1t, amit megold; ne r\xE9tegezd egym\xE1sra a retry-t a meshben \xE9s az alkalmaz\xE1sban (dupla pr\xF3b\xE1lkoz\xE1s); ne feledd, hogy a sidecar er\u0151forr\xE1st fogyaszt \u2013 50 pod eset\xE9n ez \xE9rz\xE9kelhet\u0151 k\xF6lts\xE9g.

## Micro frontends {#micro-frontends}

*Verzi\xF3: Blazor WebAssembly lusta bet\xF6lt\xE9s: .NET 5+; Blazor United/interakt\xEDv render m\xF3dok: .NET 8+.*

A mikroszolg\xE1ltat\xE1sokn\xE1l gyakori, hogy a backend sz\xE9pen fel van osztva, a frontend viszont egyetlen nagy monolit marad \u2013 \xEDgy a csapatok m\xE9gsem tudnak f\xFCggetlen\xFCl sz\xE1ll\xEDtani. A **micro frontend** ugyanazt az elvet viszi a felhaszn\xE1l\xF3i fel\xFCletre: a UI is bounded contextek ment\xE9n, \xF6n\xE1ll\xF3an fejleszthet\u0151 \xE9s deployolhat\xF3 darabokra bomlik.

### Kompoz\xEDci\xF3s strat\xE9gi\xE1k

| Strat\xE9gia | Hogyan | El\u0151ny / h\xE1tr\xE1ny |
|---|---|---|
| Build-time (csomag) | minden darab NuGet/npm csomag, k\xF6z\xF6s buildben | egyszer\u0171, de **nem** f\xFCggetlen deploy |
| Run-time, kliensoldali | shell alkalmaz\xE1s fut\xE1sid\u0151ben t\xF6lti a darabokat (Blazor lazy loading, Module Federation) | val\xF3di f\xFCggetlens\xE9g; nehezebb verzi\xF3kezel\xE9s |
| Run-time, szerveroldali | a szerver vagy a gateway f\xE9s\xFCli \xF6ssze a fragmenteket (SSI, edge-side include) | j\xF3 SEO \xE9s kezdeti bet\xF6lt\xE9s; infrastrukt\xFAra-ig\xE9ny |
| Route-alap\xFA | a gateway \xFAtvonal szerint m\xE1s-m\xE1s frontend alkalmaz\xE1sra ir\xE1ny\xEDt | legegyszer\u0171bb, de teljes oldal\xFAjrat\xF6lt\xE9s a hat\xE1ron |

.NET k\xF6rnyezetben a legkisebb kock\xE1zat\xFA kezd\xE9s a **route-alap\xFA** feloszt\xE1s a gateway-en (\`/orders/*\` \u2192 Orders UI, \`/billing/*\` \u2192 Billing UI), \xE9s csak akkor l\xE9pni tov\xE1bb a fut\xE1sidej\u0171 kompoz\xEDci\xF3ra, ha a felhaszn\xE1l\xF3i \xE9lm\xE9ny ezt megk\xF6veteli.

\`\`\`csharp
// Blazor WebAssembly: modul lusta bet\xF6lt\xE9se \xFAtvonal alapj\xE1n
builder.Services.AddScoped<LazyAssemblyLoader>();

// App.razor
<Router AdditionalAssemblies="@_loadedAssemblies" OnNavigateAsync="OnNavigateAsync">
\`\`\`

\`\`\`csharp
private async Task OnNavigateAsync(NavigationContext context)
{
    if (context.Path.StartsWith("billing"))
    {
        var assemblies = await _assemblyLoader.LoadAssembliesAsync(["Billing.Ui.wasm"]);
        _loadedAssemblies.AddRange(assemblies);
    }
}
\`\`\`

### A neh\xE9z r\xE9szek

- **K\xF6z\xF6s design system**: egys\xE9ges komponensk\xF6nyvt\xE1r \xE9s design tokenek n\xE9lk\xFCl a fel\xFClet sz\xE9ttart\xF3v\xE1 v\xE1lik. Ez legyen az els\u0151 befektet\xE9s, ne az utols\xF3.
- **Megosztott \xE1llapot \xE9s autentik\xE1ci\xF3**: egyetlen bejelentkez\xE9s (SSO), egy helyen t\xE1rolt munkamenet \u2013 jellemz\u0151en a BFF/gateway kezeli s\xFCtiben, \xE9s minden darab onnan kapja a kontextust.
- **Csomagm\xE9ret**: minden darab saj\xE1t f\xFCgg\u0151s\xE9geket hoz. Blazor WASM-n\xE9l az **AOT ford\xEDt\xE1s** \xE9s a lusta bet\xF6lt\xE9s k\xF6telez\u0151 optimaliz\xE1ci\xF3, k\xFCl\xF6nben a kezdeti let\xF6lt\xE9s v\xE1llalhatatlan.
- **Kommunik\xE1ci\xF3 a darabok k\xF6z\xF6tt**: esem\xE9nyalap\xFA (b\xF6ng\xE9sz\u0151 custom event vagy egy v\xE9kony shell-buszon kereszt\xFCl), soha ne k\xF6zvetlen f\xFCgg\u0151s\xE9ggel.
- **Verzi\xF3z\xE1s**: ha a shell \xE9s a darabok k\xFCl\xF6n deployolnak, a k\xF6zt\xFCk l\xE9v\u0151 szerz\u0151d\xE9s (route-ok, esem\xE9nyek, kontextus-objektum) ugyanolyan verzi\xF3zand\xF3 API, mint egy REST v\xE9gpont.

Mikor \xE9ri meg: t\xF6bb, egym\xE1st\xF3l f\xFCggetlen frontend csapat, nagy alkalmaz\xE1s, elt\xE9r\u0151 release-ciklusok. Mikor nem: egy csapat, egy term\xE9k \u2013 ott a micro frontend csak overhead, \xE9s egy j\xF3l modulariz\xE1lt SPA el\xE9g.

Mit ker\xFClj el: ne oszd fel a frontendet technikai r\xE9tegek ment\xE9n (fejl\xE9c-csapat, t\xE1bla-csapat) \u2013 az \xFCzleti k\xE9pess\xE9g ment\xE9n oszd; ne t\xF6lts be t\xF6bb k\xFCl\xF6nb\xF6z\u0151 keretrendszert egy oldalra (mem\xF3ria, \xFCtk\xF6z\xE9sek); ne m\xE1sold a backend szolg\xE1ltat\xE1s-hat\xE1rokat egy az egyben a UI-ra, ha az a felhaszn\xE1l\xF3i \xE9lm\xE9nyt t\xF6rdeli sz\xE9t.

## Serverless mikroszolg\xE1ltat\xE1sok https://learn.microsoft.com/dotnet/architecture/serverless/ {#serverless-mikroszolgaltatasok}

*Verzi\xF3: Azure Functions isolated worker model: .NET 8+ (az in-process modell kivezetve); AWS Lambda .NET 8/10 runtime.*

A serverless nem szolg\xE1ltat\xE1s n\xE9lk\xFClis\xE9get jelent, hanem azt, hogy a szerver **\xFCzemeltet\xE9se \xE9s sk\xE1l\xE1z\xE1sa** a platform dolga, \xE9s jellemz\u0151en a t\xE9nyleges v\xE9grehajt\xE1s ut\xE1n fizetsz.

\`\`\`csharp
public class OrderProcessorFunction(IOrderService orders, ILogger<OrderProcessorFunction> logger)
{
    [Function(nameof(ProcessOrderQueue))]
    public async Task ProcessOrderQueue(
        [ServiceBusTrigger("orders", Connection = "ServiceBus")] OrderPlaced message,
        CancellationToken cancellationToken)
    {
        logger.LogInformation("Rendel\xE9s feldolgoz\xE1sa: {OrderId}", message.OrderId);
        await orders.ProcessAsync(message.OrderId, cancellationToken);
    }

    [Function(nameof(GetOrder))]
    public async Task<HttpResponseData> GetOrder(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = "orders/{id:guid}")] HttpRequestData request,
        Guid id, CancellationToken cancellationToken)
    {
        var order = await orders.GetAsync(id, cancellationToken);
        var response = request.CreateResponse(order is null ? HttpStatusCode.NotFound : HttpStatusCode.OK);
        if (order is not null) await response.WriteAsJsonAsync(order, cancellationToken);
        return response;
    }

    [Function(nameof(NightlyReconciliation))]
    public async Task NightlyReconciliation([TimerTrigger("0 0 2 * * *")] TimerInfo timer, CancellationToken ct)
        => await orders.ReconcileAsync(ct);
}
\`\`\`

### Mikor j\xF3 v\xE1laszt\xE1s

Esem\xE9nyvez\xE9relt, szakaszos terhel\xE9s\u0171 feladatok (f\xE1jlfeldolgoz\xE1s, \xFCtemezett job, webhook-fogad\xE1s, \xFCzenet-fogyaszt\xF3); ritk\xE1n h\xEDvott v\xE9gpontok; gyors protot\xEDpus; olyan integr\xE1ci\xF3k, ahol a platform-k\xF6t\xE9sek (blob, queue, timer) sok k\xF3dot megsp\xF3rolnak.

### Amire figyelni kell

- **Hidegind\xEDt\xE1s**: az els\u0151 h\xEDv\xE1s lass\xFA lehet. Enyh\xEDt\xE9s: Native AOT vagy ReadyToRun publik\xE1l\xE1s, kevesebb f\xFCgg\u0151s\xE9g, Premium/Always-on terv, el\u0151meleg\xEDt\xE9s.
- **\xC1llapotmentess\xE9g**: nincs helyi \xE1llapot, nincs in-memory cache p\xE9ld\xE1nyok k\xF6z\xF6tt \u2013 elosztott cache vagy state store kell.
- **V\xE9grehajt\xE1si id\u0151korl\xE1t** (Consumption terven jellemz\u0151en perces nagys\xE1grend) \u2013 hossz\xFA munk\xE1ra Durable Functions vagy kont\xE9neriz\xE1lt worker val\xF3.
- **Kapcsolatk\xE9szlet-kimer\xFCl\xE9s**: sok p\xE1rhuzamos p\xE9ld\xE1ny sok adatb\xE1zis-kapcsolatot nyit. \`DbContext\` pooling, \`Max Pool Size\` be\xE1ll\xEDt\xE1s, vagy ink\xE1bb serverless-bar\xE1t adatb\xE1zis/proxy.
- **Az \`IHost\` \xE9s a DI ugyan\xFAgy m\u0171k\xF6dik** az isolated modellben, teh\xE1t a Clean Architecture r\xE9tegek v\xE1ltozatlanul haszn\xE1lhat\xF3k: a Function csak egy \xFAjabb **presentation** r\xE9teg a use case-ek felett.
- **K\xF6lts\xE9g**: nagy, egyenletes terhel\xE9sn\xE9l a serverless dr\xE1g\xE1bb lehet, mint egy folyamatosan fut\xF3 kont\xE9ner \u2013 \xE9rdemes a t\xE9nyleges h\xEDv\xE1ssz\xE1mmal sz\xE1molni.

**Durable Functions** hossz\xFA, t\xF6bb l\xE9p\xE9ses folyamatra (orchestrator + activity f\xFCggv\xE9nyek) \u2013 ez a Saga minta platform-nat\xEDv megval\xF3s\xEDt\xE1sa, be\xE9p\xEDtett \xE1llapotkezel\xE9ssel \xE9s \xFAjraj\xE1tsz\xE1ssal.

**Alternat\xEDva**: az Azure Container Apps / AWS Fargate "scale to zero" kont\xE9ner-alap\xFA megk\xF6zel\xEDt\xE9se ugyanazt a k\xF6lts\xE9gel\u0151nyt adja, de sima ASP.NET Core alkalmaz\xE1ssal, platform-k\xF6t\xE9sek n\xE9lk\xFCl \u2013 ez sok csapatnak jobb kompromisszum.

Mit ker\xFClj el: ne tegy\xE9l \xFCzleti logik\xE1t a Function-oszt\xE1lyba (ugyanaz a use case legyen h\xEDvhat\xF3 API-b\xF3l is); ne felt\xE9telezz sorrendet a p\xE1rhuzamosan fut\xF3 p\xE9ld\xE1nyok k\xF6z\xF6tt; ne haszn\xE1lj serverless-t szinkron, alacsony k\xE9sleltet\xE9s\u0171, folyamatos terhel\xE9s\u0171 API-ra hidegind\xEDt\xE1s-kezel\xE9s n\xE9lk\xFCl.

## Observability a gyakorlatban \u2013 dashboard, riaszt\xE1s, SLO (.NET 6+) https://learn.microsoft.com/dotnet/core/diagnostics/observability-app-health-monitoring {#observability-a-gyakorlatban-dashboard-riasztas-slo}

*Verzi\xF3: OpenTelemetry .NET: stabil trace/metric; Aspire dashboard: .NET 8+; Prometheus exporter: OpenTelemetry.Exporter.Prometheus.AspNetCore.*

Az "OpenTelemetry" fejezet az instrument\xE1l\xE1st \xEDrja le; itt az k\xF6vetkezik, mit **kezdj** az adattal.

### A h\xE1rom jel \xE9s a hozz\xE1juk tartoz\xF3 eszk\xF6z\xF6k

| Jel | K\xE9rd\xE9s | Tipikus eszk\xF6z |
|---|---|---|
| **Metrika** | Eg\xE9szs\xE9ges-e a rendszer? Mennyire terhelt? | Prometheus + Grafana, Azure Monitor |
| **Trace** | Hol lassult/hib\xE1zott ez a konkr\xE9t k\xE9r\xE9s? | Jaeger, Tempo, Zipkin, Application Insights |
| **Log** | Pontosan mi t\xF6rt\xE9nt? | Seq, Loki, Elasticsearch, Azure Log Analytics |

Lok\xE1lis fejleszt\xE9shez az **Aspire dashboard** mindh\xE1rmat egy helyen mutatja, k\xFCl\xF6n telep\xEDt\xE9s n\xE9lk\xFCl; **Seq** a struktur\xE1lt .NET logokhoz a legk\xE9nyelmesebb (l\xE1sd "Struktur\xE1lt logol\xE1s" fejezet); \xE9les k\xF6rnyezetben jellemz\u0151en OTLP kollektor gy\u0171jt, \xE9s onnan megy a h\xE1rom backendbe.

\`\`\`csharp
// Prometheus scrape v\xE9gpont
builder.Services.AddOpenTelemetry().WithMetrics(m => m.AddPrometheusExporter());
app.MapPrometheusScrapingEndpoint();     // /metrics
\`\`\`

### A n\xE9gy aranyjel (Google SRE)

B\xE1rmilyen szolg\xE1ltat\xE1sra ezt a n\xE9gyet \xE9rdemes el\u0151sz\xF6r dashboardra tenni: **Latency** (k\xE9sleltet\xE9s, p50/p95/p99 \u2013 az \xE1tlag megt\xE9veszt\u0151), **Traffic** (k\xE9r\xE9s/mp, \xFCzenet/mp), **Errors** (hibaar\xE1ny, st\xE1tuszk\xF3d szerint), **Saturation** (er\u0151forr\xE1s-tel\xEDtetts\xE9g: CPU, mem\xF3ria, thread pool queue, kapcsolatk\xE9szlet, \xFCzenetsor-hossz).

\xDCzenetvez\xE9relt rendszern\xE9l k\xE9t tov\xE1bbi, kritikus jel: **consumer lag** (mennyivel van lemaradva a fogyaszt\xF3 \u2013 Kafk\xE1n\xE1l ez az els\u0151dleges riaszt\xE1s) \xE9s az **error queue / DLQ m\xE9rete**.

### SLI, SLO, error budget

- **SLI** \u2013 m\xE9r\u0151sz\xE1m, ami a felhaszn\xE1l\xF3i \xE9lm\xE9nyt t\xFCkr\xF6zi (pl. "a \`/orders\` v\xE9gpont k\xE9r\xE9seinek h\xE1ny sz\xE1zal\xE9ka v\xE1laszol 500 ms alatt hib\xE1tlanul").
- **SLO** \u2013 a c\xE9l\xE9rt\xE9k (pl. 99,5% egy 30 napos ablakban).
- **Error budget** \u2013 ami a 100%-b\xF3l hi\xE1nyzik (0,5% \u2248 3,6 \xF3ra havonta). Ha elfogy, a csapat a stabilit\xE1sra f\xF3kusz\xE1l \xFAj funkci\xF3k helyett.

Az SLO az\xE9rt fontos, mert **eld\xF6nti, mire kell riasztani**: nem minden hib\xE1ra, hanem arra, ami az error budgetet gyorsan \xE9geti (burn rate alap\xFA riaszt\xE1s). En\xE9lk\xFCl a csapat riaszt\xE1s-f\xE1radts\xE1gba fullad, \xE9s a val\xF3di incidens elv\xE9sz a zajban.

### Riaszt\xE1si elvek

- Riassz **t\xFCnetre**, ne okra: "a rendel\xE9s-v\xE9gpont hibaar\xE1nya 5% f\xF6l\xF6tt" hasznos; "a CPU 80% f\xF6l\xF6tt" jellemz\u0151en nem (lehet, hogy minden rendben van).
- Minden riaszt\xE1s legyen **cselekv\xE9sre k\xF6telez\u0151**, \xE9s legyen hozz\xE1 runbook. Amire nincs teend\u0151, az dashboard, nem riaszt\xE1s.
- A riaszt\xE1s vigye mag\xE1val a \`TraceId\`-t \xE9s a dashboard linkj\xE9t.

### Health check-ek szerepe

A \`/health/live\` \xE9s \`/health/ready\` (l\xE1sd "Docker multi-stage build \xE9s Kubernetes-alapok" fejezet) nem monitoroz\xE1s, hanem **orchestr\xE1tor-vez\xE9rl\xE9s**: az egyik \xFAjraind\xEDt\xE1st, a m\xE1sik forgalomb\xF3l val\xF3 kiv\xE9telt v\xE1lt ki. A monitoroz\xE1s ezen fel\xFCl, k\xEDv\xFClr\u0151l figyeli a szolg\xE1ltat\xE1st.

### K\xF6lts\xE9g \xE9s kardinalit\xE1s

A megfigyelhet\u0151s\xE9g adatmennyis\xE9ge gyorsan dr\xE1g\xE1v\xE1 v\xE1lik. Kord\xE1ban tart\xE1s: **sampling** a trace-ekn\xE9l (a hib\xE1s \xE9s lass\xFA k\xE9r\xE9seket mindig mint\xE1zd), log-szintek k\xF6rnyezetenk\xE9nt, **alacsony kardinalit\xE1s\xFA metrika-c\xEDmk\xE9k** (soha ne userId/orderId), \xE9s r\xF6videbb meg\u0151rz\xE9si id\u0151 a r\xE9szletes adatokra, hosszabb az aggreg\xE1tumokra.

Mit ker\xFClj el: ne logolj mindent \`Information\` szinten \xE9les k\xF6rnyezetben; ne k\xE9sz\xEDts 40 paneles dashboardot, amit senki nem n\xE9z \u2013 kev\xE9s, j\xF3l v\xE1lasztott jel jobb; ne m\xE9rj csak infrastrukt\xFAr\xE1t (CPU, mem\xF3ria) \xFCzleti metrik\xE1k n\xE9lk\xFCl (leadott rendel\xE9s/perc, sikertelen fizet\xE9s ar\xE1ny) \u2013 az ut\xF3bbi mutatja meg leghamarabb, ha baj van.

## Mikroszolg\xE1ltat\xE1sok biztons\xE1ga \u2013 zero trust, mTLS, token-propag\xE1ci\xF3 https://learn.microsoft.com/dotnet/architecture/cloud-native/security {#mikroszolgaltatasok-biztonsaga-zero-trust-mtls-token-propagacio}

*Verzi\xF3: \`AddJwtBearer\`: ASP.NET Core 2.0+; OAuth 2.0 Token Exchange (RFC 8693); .NET Aspire/K8s mTLS: infrastrukt\xFAra-szint.*

A "JWT, OAuth, OpenId Connect", a "Keycloak" \xE9s a "Biztons\xE1gi alapok API-kn\xE1l" fejezet mell\xE9 az elosztott rendszerekre jellemz\u0151 k\xE9rd\xE9sek.

### Zero trust \u2013 a bels\u0151 h\xE1l\xF3zat nem biztons\xE1gos

A klasszikus "kem\xE9ny h\xE9j, puha bels\u0151" modell mikroszolg\xE1ltat\xE1sokn\xE1l nem m\u0171k\xF6dik: ha egy szolg\xE1ltat\xE1s kompromitt\xE1l\xF3dik, a t\xE1mad\xF3 szabadon mozog. A zero trust elve: **minden h\xEDv\xE1s hiteles\xEDtett \xE9s enged\xE9lyezett**, akkor is, ha a f\xFCrt\xF6n bel\xFClr\u0151l j\xF6n.

H\xE1rom szint:
1. **Transzport**: k\xF6lcs\xF6n\xF6s TLS (mTLS) szolg\xE1ltat\xE1sok k\xF6z\xF6tt \u2013 a h\xEDv\xF3 \xE9s a h\xEDvott is tan\xFAs\xEDtv\xE1nnyal azonos\xEDtja mag\xE1t. Jellemz\u0151en a service mesh vagy a platform int\xE9zi, nem az alkalmaz\xE1sk\xF3d.
2. **Alkalmaz\xE1s**: token-alap\xFA hiteles\xEDt\xE9s minden bels\u0151 h\xEDv\xE1sn\xE1l is (nem csak a peremen).
3. **H\xE1l\xF3zat**: Kubernetes \`NetworkPolicy\` \u2013 csak az besz\xE9lhet a szolg\xE1ltat\xE1ssal, akinek t\xE9nyleg kell.

### Token-\xE1raml\xE1s a h\xEDv\xE1si l\xE1ncon

K\xE9t megk\xF6zel\xEDt\xE9s, elt\xE9r\u0151 biztons\xE1gi jellemz\u0151kkel:

**a) Token-tov\xE1bbad\xE1s (token forwarding)** \u2013 a felhaszn\xE1l\xF3 tokenje v\xE9gigmegy a l\xE1ncon. Egyszer\u0171, a felhaszn\xE1l\xF3i kontextus mindenhol el\xE9rhet\u0151; viszont a token minden szolg\xE1ltat\xE1sn\xE1l "l\xE1tszik", \xE9s a lej\xE1rata a l\xE1nc k\xF6zep\xE9n is gondot okozhat.

\`\`\`csharp
builder.Services.AddHttpClient<InventoryClient>()
    .AddHttpMessageHandler<BearerTokenPropagationHandler>();

public class BearerTokenPropagationHandler(IHttpContextAccessor accessor) : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken ct)
    {
        var token = await accessor.HttpContext!.GetTokenAsync("access_token");
        if (token is not null) request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        return await base.SendAsync(request, ct);
    }
}
\`\`\`

**b) Token exchange (RFC 8693) / client credentials** \u2013 a h\xEDv\xF3 szolg\xE1ltat\xE1s **saj\xE1t** tokent k\xE9r a felhaszn\xE1l\xF3 nev\xE9ben (vagy a saj\xE1t nev\xE9ben), sz\u0171kebb hat\xF3k\xF6rrel (\`scope\`) \xE9s r\xF6videbb \xE9lettartammal. Biztons\xE1gosabb: a downstream szolg\xE1ltat\xE1s nem kapja meg a teljes jogosults\xE1g\xFA felhaszn\xE1l\xF3i tokent, csak azt, amire sz\xFCks\xE9ge van.

G\xE9pi kommunik\xE1ci\xF3hoz (h\xE1tt\xE9rfolyamat, \xFCzenet-fogyaszt\xF3, ahol nincs felhaszn\xE1l\xF3) a **client credentials** flow val\xF3, tokencache-el\xE9ssel:

\`\`\`csharp
builder.Services.AddClientCredentialsTokenManagement()
    .AddClient("inventory", client =>
    {
        client.TokenEndpoint = builder.Configuration["Auth:TokenEndpoint"];
        client.ClientId = builder.Configuration["Auth:ClientId"];
        client.ClientSecret = builder.Configuration["Auth:ClientSecret"];
        client.Scope = "inventory:read";
    });

builder.Services.AddClientCredentialsHttpClient("inventory-api", "inventory",
    client => client.BaseAddress = new Uri("https://inventory-api/"));
\`\`\`

### \xDCzenetsor \xE9s biztons\xE1g

A brokeren \xE1tmen\u0151 \xFCzenetn\xE9l nincs HTTP fejl\xE9c \xE9s nincs \`HttpContext\`. Amit tenni kell: a **felhaszn\xE1l\xF3i kontextus** (userId, tenantId, jogosults\xE1gi szint) az \xFCzenet fejl\xE9c\xE9ben utazzon, al\xE1\xEDrtan vagy megb\xEDzhat\xF3 forr\xE1sb\xF3l; a fogyaszt\xF3 **ne b\xEDzzon vakon** az \xFCzenet tartalm\xE1ban (a broker-hozz\xE1f\xE9r\xE9s is korl\xE1tozott legyen); a broker-kapcsolat maga is TLS + hiteles\xEDtett legyen (Kafka SASL/SCRAM vagy mTLS, RabbitMQ TLS + felhaszn\xE1l\xF3 jogosults\xE1gok soronk\xE9nt).

### Titkok elosztott k\xF6rnyezetben

Managed identity / workload identity a jelsz\xF3 n\xE9lk\xFCli hiteles\xEDt\xE9shez (a legjobb megold\xE1s, ha a platform t\xE1mogatja); k\xF6zponti titokt\xE1r (Key Vault, HashiCorp Vault); rot\xE1lhat\xF3 titkok; Kubernetes Secret **titkos\xEDtva** (etcd encryption) \xE9s sealed-secrets/external-secrets a GitOps-hoz. Titok soha nem ker\xFCl image-be, k\xF6rnyezeti v\xE1ltoz\xF3ba a manifestben, vagy logba.

### Audit \xE9s megfelel\u0151s\xE9g

Elosztott rendszerben az audit napl\xF3 is elosztott. Amit \xE9rdemes r\xF6gz\xEDteni k\xF6zpontos\xEDtva: ki (userId, tenantId), mit (m\u0171velet, er\u0151forr\xE1s azonos\xEDt\xF3), mikor, honnan (IP, kliens), eredm\xE9ny (siker/megtagad\xE1s), \xE9s a \`TraceId\` a teljes folyamat visszakeres\xE9s\xE9hez. Az audit napl\xF3 legyen **megv\xE1ltoztathatatlan** (append-only) \xE9s k\xFCl\xF6n t\xE1rolt az alkalmaz\xE1s-logt\xF3l.

Mit ker\xFClj el: ne felt\xE9telezd, hogy a gateway m\xF6g\xF6tt m\xE1r minden h\xEDv\xE1s megb\xEDzhat\xF3; ne adj tov\xE1bb felhaszn\xE1l\xF3i tokent olyan szolg\xE1ltat\xE1snak, amelynek nem kell (token exchange sz\u0171kebb hat\xF3k\xF6rrel); ne t\xE1rolj hossz\xFA \xE9lettartam\xFA tokent; ne \xEDrj saj\xE1t JWT-valid\xE1ci\xF3t (a \`AddJwtBearer\` \xE9s a JWKS-alap\xFA kulcsforgat\xE1s megb\xEDzhat\xF3bb); ne logold a tokent m\xE9g hibakeres\xE9shez sem.

## Logikai t\xF6rl\xE9s (soft delete) EF Core-ban \u2013 best practice (EF Core 2.0+ (global filters)) https://learn.microsoft.com/ef/core/querying/filters {#logikai-torles-soft-delete-ef-core-ban-best-practice}

*Verzi\xF3: \`HasQueryFilter\`: EF Core 2.0; \`SaveChangesInterceptor\`: EF Core 5.0; \`ExecuteUpdate\`: EF Core 7.0; t\xF6bb query filter entit\xE1sonk\xE9nt (\`HasQueryFilter\` n\xE9vvel): EF Core 10.*

### Miel\u0151tt bevezeted: t\xE9nyleg kell?

A logikai t\xF6rl\xE9s nem alap\xE9rtelmez\xE9s, hanem tudatos d\xF6nt\xE9s \u2013 \xE1ra van (minden lek\xE9rdez\xE9s sz\u0171rni k\xE9nyszer\xFCl, az egyedi indexek bonyol\xF3dnak, az adat n\u0151). K\xE9rdezd meg, mi az igazi ig\xE9ny:

| Ig\xE9ny | Megfelel\u0151 megold\xE1s |
|---|---|
| "Vissza kell tudni \xE1ll\xEDtani, ha v\xE9letlen\xFCl t\xF6r\xF6lt\xE9k" | soft delete (ez a fejezet) |
| "Tudni kell, ki mit m\xF3dos\xEDtott \xE9s mikor" | audit napl\xF3 / temporal table |
| "A teljes v\xE1ltoz\xE1st\xF6rt\xE9net kell" | event sourcing vagy temporal table |
| "Jogszab\xE1ly miatt X \xE9vig meg kell \u0151rizni" | archiv\xE1l\xE1s k\xFCl\xF6n t\xE1rol\xF3ba + val\xF3di t\xF6rl\xE9s |
| "A t\xF6r\xF6lt rekordra hivatkoz\xF3 adat ne v\xE1ljon \xE1rv\xE1v\xE1" | idegen kulcs + \`Restrict\`, nem soft delete |

Ha csak a "hupsz" eset ellen v\xE9ded magad, gyakran el\xE9g egy id\u0151korl\xE1tos "kuka" (30 nap), ut\xE1na val\xF3di t\xF6rl\xE9s.

### 1. K\xF6z\xF6s szerz\u0151d\xE9s

\`\`\`csharp
public interface ISoftDeletable
{
    bool IsDeleted { get; set; }
    DateTimeOffset? DeletedAt { get; set; }
    string? DeletedBy { get; set; }
}
\`\`\`

A \`DeletedAt\` \xE9s \`DeletedBy\` nem d\xEDsz\xEDt\xE9s: en\xE9lk\xFCl a soft delete nem audit\xE1lhat\xF3, \xE9s a takar\xEDt\xE1s sem tervezhet\u0151 ("mi az, ami 90 napn\xE1l r\xE9gebben t\xF6rl\u0151d\xF6tt").

### 2. Automatikus sz\u0171r\xE9s \u2013 global query filter

Ez a legfontosabb l\xE9p\xE9s: a sz\u0171r\xE9st **ne** kelljen k\xE9zzel \xEDrni minden lek\xE9rdez\xE9sbe, mert egyetlen felejt\xE9s visszahozza a t\xF6r\xF6lt adatot.

\`\`\`csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    // minden ISoftDeletable entit\xE1sra automatikusan, reflexi\xF3val \u2013 nem lehet elfelejteni
    foreach (var entityType in modelBuilder.Model.GetEntityTypes()
                 .Where(e => typeof(ISoftDeletable).IsAssignableFrom(e.ClrType)))
    {
        var parameter = Expression.Parameter(entityType.ClrType, "e");
        var property = Expression.Property(parameter, nameof(ISoftDeletable.IsDeleted));
        var filter = Expression.Lambda(Expression.Not(property), parameter);

        modelBuilder.Entity(entityType.ClrType).HasQueryFilter(filter);
    }
}
\`\`\`

Ha az entit\xE1s **t\xF6bb** sz\u0171r\u0151t is ig\xE9nyel (pl. multi-tenancy + soft delete), EF Core 10 el\u0151tt a kett\u0151t egy kifejez\xE9sbe kell kombin\xE1lni (\`e => !e.IsDeleted && e.TenantId == tenant.CurrentTenantId\`); EF Core 10-t\u0151l neves\xEDtett sz\u0171r\u0151ket lehet k\xFCl\xF6n megadni \xE9s k\xFCl\xF6n kikapcsolni.

### 3. A t\xF6rl\xE9s elfog\xE1sa \u2013 interceptor a \`SavingChanges\`-ben

A \`Remove()\` h\xEDv\xE1st ford\xEDtjuk \`Modified\` \xE1llapot\xFAra. Fontos: **a ment\xE9s el\u0151tt**, nem ut\xE1na \u2013 a \`SavedChanges\` m\xE1r a v\xE9grehajtott DELETE ut\xE1n fut, ott hat\xE1stalan.

\`\`\`csharp
public sealed class SoftDeleteInterceptor(TimeProvider timeProvider, ICurrentUser currentUser)
    : SaveChangesInterceptor
{
    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
    {
        Apply(eventData.Context);
        return base.SavingChangesAsync(eventData, result, cancellationToken);
    }

    public override InterceptionResult<int> SavingChanges(
        DbContextEventData eventData, InterceptionResult<int> result)
    {
        Apply(eventData.Context);
        return base.SavingChanges(eventData, result);
    }

    private void Apply(DbContext? context)
    {
        if (context is null) return;

        foreach (var entry in context.ChangeTracker.Entries<ISoftDeletable>()
                     .Where(e => e.State == EntityState.Deleted))
        {
            entry.State = EntityState.Modified;
            entry.Entity.IsDeleted = true;
            entry.Entity.DeletedAt = timeProvider.GetUtcNow();
            entry.Entity.DeletedBy = currentUser.UserId;

            // a gyermekek kaszk\xE1dolt t\xF6rl\xE9s\xE9t is logikaiv\xE1 kell tenni (l\xE1sd lentebb)
            SoftDeleteDependents(context, entry);
        }
    }

    private void SoftDeleteDependents(DbContext context, EntityEntry entry)
    {
        foreach (var navigation in entry.Navigations.OfType<CollectionEntry>())
        {
            if (!navigation.IsLoaded) continue;

            foreach (var child in navigation.CurrentValue?.OfType<ISoftDeletable>() ?? [])
            {
                var childEntry = context.Entry(child);
                if (childEntry.State is EntityState.Deleted or EntityState.Unchanged)
                {
                    childEntry.State = EntityState.Modified;
                    child.IsDeleted = true;
                    child.DeletedAt = timeProvider.GetUtcNow();
                    child.DeletedBy = currentUser.UserId;
                }
            }
        }
    }
}

builder.Services.AddSingleton(TimeProvider.System);
builder.Services.AddScoped<SoftDeleteInterceptor>();
builder.Services.AddDbContext<AppDbContext>((sp, options) => options
    .UseSqlServer(connectionString)
    .AddInterceptors(sp.GetRequiredService<SoftDeleteInterceptor>()));
\`\`\`

A \`TimeProvider\` injekt\xE1l\xE1sa (nem \`DateTimeOffset.UtcNow\`) az\xE9rt fontos, hogy a viselked\xE9s tesztelhet\u0151 legyen (\`FakeTimeProvider\`).

### 4. Kaszk\xE1dolt t\xF6rl\xE9s \u2013 a leggyakoribb hibaforr\xE1s

Ha az aggregate root soft delete-el\u0151dik, a gyermekei alapb\xF3l **fizikailag** t\xF6rl\u0151dn\xE9nek (\`ClientCascade\`/\`Cascade\`), ami inkonzisztens \xE1llapotot ad. K\xE9t lehet\u0151s\xE9g:

\`\`\`csharp
// a) A gyermek is ISoftDeletable, \xE9s az interceptor kezeli (fenti k\xF3d) \u2013
//    ehhez a kaszk\xE1dot kliens oldalon kell tartani, hogy az EF ne gener\xE1ljon DELETE-et:
modelBuilder.Entity<Order>()
    .HasMany(o => o.Lines).WithOne()
    .OnDelete(DeleteBehavior.ClientCascade);

// b) A gyermek NEM soft delete-elhet\u0151 k\xFCl\xF6n (az aggreg\xE1tum belseje), \xE9s a sz\u0171r\u0151
//    a sz\xFCl\u0151n kereszt\xFCl \xE9rv\xE9nyes\xFCl \u2013 ilyenkor a gyermeket sosem t\xF6rlik k\xF6zvetlen\xFCl.
\`\`\`

Ugyanez a probl\xE9ma az idegen kulcsokn\xE1l: ha \`B\` hivatkozik \`A\`-ra, \xE9s \`A\`-t logikailag t\xF6r\xF6lj\xFCk, az adatb\xE1zis nem tud r\xF3la \u2013 a hivatkoz\xE1s \xE9rv\xE9nyes marad, de a query filter miatt a navig\xE1ci\xF3 \`null\` lesz. Ez az egyik legalattomosabb soft delete hiba, ez\xE9rt **k\xF6telez\u0151** navig\xE1ci\xF3n\xE1l a sz\u0171r\u0151 bet\xF6lt\xE9sekor \`InvalidOperationException\`-t is okozhat.

### 5. Egyedi index \xE9s a soft delete

Ha az e-mail c\xEDm egyedi, \xE9s egy felhaszn\xE1l\xF3t logikailag t\xF6r\xF6lsz, ugyanaz az e-mail **nem** haszn\xE1lhat\xF3 \xFAjra \u2013 az egyedi index a t\xF6r\xF6lt sort is l\xE1tja. Megold\xE1s a sz\u0171rt (filtered / partial) index:

\`\`\`csharp
modelBuilder.Entity<User>()
    .HasIndex(u => u.Email)
    .IsUnique()
    .HasFilter("[IsDeleted] = 0");          // SQL Server; PostgreSQL: "\\"IsDeleted\\" = false"
\`\`\`

### 6. Hozz\xE1f\xE9r\xE9s a t\xF6r\xF6lt adathoz \u2013 sz\u0171ken \xE9s audit\xE1ltan

\`\`\`csharp
// adminisztrat\xEDv \xFAtvonal: kifejezett, j\xF3l l\xE1that\xF3 kiv\xE9tel
var deleted = await db.Orders.IgnoreQueryFilters()
    .Where(o => o.IsDeleted && o.DeletedAt >= from)
    .ToListAsync(ct);

// vissza\xE1ll\xEDt\xE1s
order.IsDeleted = false;
order.DeletedAt = null;
order.DeletedBy = null;
await db.SaveChangesAsync(ct);
\`\`\`

Az \`IgnoreQueryFilters()\` **minden** sz\u0171r\u0151t kikapcsol \u2013 multi-tenant rendszerben ez tenant-sziv\xE1rg\xE1st okozhat (l\xE1sd "Multi-tenancy .NET-ben" fejezet). EF Core 10-t\u0151l neves\xEDtett sz\u0171r\u0151vel c\xE9lzottan csak a soft delete sz\u0171r\u0151 kapcsolhat\xF3 ki; kor\xE1bbi verzi\xF3ban a tenant-felt\xE9telt k\xE9zzel vissza kell tenni a lek\xE9rdez\xE9sbe.

### 7. T\xF6meges t\xF6rl\xE9s \xE9s a takar\xEDt\xE1s

Az \`ExecuteUpdate\` gyors, de **megker\xFCli az interceptort \xE9s a change trackinget** \u2013 ez\xE9rt itt k\xE9zzel kell be\xE1ll\xEDtani a mez\u0151ket:

\`\`\`csharp
await db.Orders
    .Where(o => o.Status == OrderStatus.Draft && o.CreatedAt < cutoff)
    .ExecuteUpdateAsync(s => s
        .SetProperty(o => o.IsDeleted, true)
        .SetProperty(o => o.DeletedAt, timeProvider.GetUtcNow()), ct);
\`\`\`

A logikailag t\xF6r\xF6lt adat nem maradhat \xF6r\xF6kre. \xDCtemezett job (l\xE1sd "Quartz.NET" fejezet) v\xE9gezze a v\xE9gleges t\xF6rl\xE9st vagy archiv\xE1l\xE1st:

\`\`\`csharp
await db.Orders.IgnoreQueryFilters()
    .Where(o => o.IsDeleted && o.DeletedAt < timeProvider.GetUtcNow().AddDays(-90))
    .ExecuteDeleteAsync(ct);
\`\`\`

GDPR szempontb\xF3l ez l\xE9nyeges: a "t\xF6rl\xE9s joga" **nem** teljes\xFCl logikai t\xF6rl\xE9ssel \u2013 a szem\xE9lyes adatot vagy t\xE9nylegesen t\xF6r\xF6lni, vagy anonimiz\xE1lni kell.

### 8. Teljes\xEDtm\xE9ny

A \`IsDeleted\` sz\u0171r\u0151 minden lek\xE9rdez\xE9sbe beker\xFCl, ez\xE9rt az \xE9rintett t\xE1bl\xE1k indexeinek ezt tartalmazniuk kell \u2013 jellemz\u0151en sz\u0171rt indexszel, ami csak az \xE9l\u0151 sorokat tartalmazza:

\`\`\`sql
CREATE INDEX IX_Orders_CustomerId ON Orders (CustomerId) WHERE IsDeleted = 0;
\`\`\`

Nagy t\xE1bl\xE1n\xE1l, ahol a t\xF6r\xF6lt sorok ar\xE1nya jelent\u0151s, \xE9rdemes megfontolni a **part\xEDcion\xE1l\xE1st** (\xE9l\u0151/t\xF6r\xF6lt) vagy az arch\xEDv t\xE1bl\xE1ba mozgat\xE1st.

### 9. Tesztel\xE9s

\`\`\`csharp
[Fact]
public async Task Deleting_an_order_hides_it_but_keeps_the_row()
{
    var ct = TestContext.Current.CancellationToken;
    await using var db = _fixture.CreateDbContext();
    var order = await Orders.APaidOrderWithTwoItems().BuildAsync(db, ct);

    db.Orders.Remove(order);
    await db.SaveChangesAsync(ct);

    (await db.Orders.FindAsync([order.Id], ct)).Should().BeNull();               // a sz\u0171r\u0151 elrejti
    var raw = await db.Orders.IgnoreQueryFilters().SingleAsync(o => o.Id == order.Id, ct);
    raw.IsDeleted.Should().BeTrue();
    raw.DeletedAt.Should().Be(_time.GetUtcNow());                                 // FakeTimeProvider
}
\`\`\`

Ez a viselked\xE9s **integr\xE1ci\xF3s teszttel** ellen\u0151rizend\u0151 val\xF3di adatb\xE1zison (l\xE1sd "Testcontainers" fejezet) \u2013 az In-Memory provider a query filtereket ugyan alkalmazza, de az indexeket \xE9s a kaszk\xE1d-viselked\xE9st nem.

### Alternat\xEDva: temporal table

SQL Server (\xE9s PostgreSQL kieg\xE9sz\xEDt\xE9ssel) **temporal table**-je adatb\xE1zis-szinten \u0151rzi meg a teljes sort\xF6rt\xE9netet, az alkalmaz\xE1s m\xF3dos\xEDt\xE1sa n\xE9lk\xFCl:

\`\`\`csharp
modelBuilder.Entity<Order>().ToTable("Orders", b => b.IsTemporal());

// lek\xE9rdez\xE9s adott id\u0151pontra
var asOf = await db.Orders.TemporalAsOf(yesterday).ToListAsync(ct);
\`\`\`

Ez a "mi volt az adat tegnap" k\xE9rd\xE9sre jobb v\xE1lasz, mint a soft delete, viszont a "t\xF6r\xF6lt elem vissza\xE1ll\xEDt\xE1sa a fel\xFCleten" forgat\xF3k\xF6nyvre nem alkalmas \xF6nmag\xE1ban. A kett\u0151 nem z\xE1rja ki egym\xE1st.

### \xD6sszefoglal\xF3 ellen\u0151rz\u0151lista

1. Interf\xE9sz (\`ISoftDeletable\`) + \`DeletedAt\`/\`DeletedBy\`, nem csak egy \`bool\`.
2. Global query filter **automatikusan**, reflexi\xF3val minden \xE9rintett entit\xE1sra.
3. \`SavingChanges\` interceptor (nem \`SavedChanges\`), injekt\xE1lt \`TimeProvider\`-rel.
4. Kaszk\xE1d tudatos kezel\xE9se (\`ClientCascade\` + gyermekek logikai t\xF6rl\xE9se).
5. Sz\u0171rt egyedi indexek (\`WHERE IsDeleted = 0\`).
6. \`IgnoreQueryFilters()\` csak sz\u0171k, audit\xE1lt \xFAtvonalon \u2013 multi-tenant eset\xE9n a tenant-sz\u0171r\u0151 visszat\xE9tel\xE9vel.
7. \`ExecuteUpdate\`/\`ExecuteDelete\` eset\xE9n k\xE9zi mez\u0151kit\xF6lt\xE9s (nincs interceptor).
8. \xDCtemezett v\xE9gleges t\xF6rl\xE9s/archiv\xE1l\xE1s meg\u0151rz\xE9si id\u0151 szerint.
9. Sz\u0171rt indexek a teljes\xEDtm\xE9nyhez.
10. Integr\xE1ci\xF3s teszt val\xF3di adatb\xE1zison.

Mit ker\xFClj el: ne tedd **minden** entit\xE1sra a soft delete-et gondolkod\xE1s n\xE9lk\xFCl (a legt\xF6bb napl\xF3szer\u0171, kapcsol\xF3t\xE1bla vagy value object jelleg\u0171 entit\xE1sn\xE1l felesleges); ne \xEDrj k\xE9zi \`Where(x => !x.IsDeleted)\` sz\u0171r\u0151ket a query filter helyett; ne felejtsd el, hogy a logikai t\xF6rl\xE9s **nem** GDPR-t\xF6rl\xE9s; ne hagyd, hogy a t\xF6r\xF6lt sorok ar\xE1nya \xE9vek alatt a t\xE1bla t\xF6bbs\xE9g\xE9v\xE9 v\xE1ljon.

## Rich vs. an\xE9mikus domain modell \u2013 melyiket mikor https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/net-core-microservice-domain-model {#rich-vs-anemikus-domain-modell-melyiket-mikor}

*Forr\xE1s: Clean Architecture with .NET (Crouse\u2013Smith), 3. fejezet. Kapcsol\xF3dik a "DDD taktikai \xE9p\xEDt\u0151elemek" fejezethez.*

A legkor\xE1bbi \xE9s leghosszabb hat\xE1s\xFA tervez\xE9si d\xF6nt\xE9s az, hogy az entit\xE1s **csak adatot hordoz**, vagy **viselked\xE9st is kapszul\xE1z**. Ez hat\xE1rozza meg, hol \xE9lnek az \xFCzleti szab\xE1lyok, ki v\xE9di az invari\xE1nsokat, \xE9s mennyire tud a rendszer egy\xFCtt n\u0151ni a domainnel.

### Rich domain \u2013 adat \xE9s viselked\xE9s egy helyen

Az entit\xE1s maga \u0151rzi a szab\xE1lyt, k\xF6zvetlen\xFCl az adat mellett:

\`\`\`csharp
public class Product
{
    public int StockLevel { get; private set; }

    public void UpdateStockLevel(int stockLevel)
    {
        if (stockLevel < 0)
            throw new ArgumentException("A k\xE9szlet nem lehet negat\xEDv.", nameof(stockLevel));

        StockLevel = stockLevel;
    }
}
\`\`\`

El\u0151nye: a szab\xE1ly nem duplik\xE1l\xF3dik szolg\xE1ltat\xE1sonk\xE9nt; az entit\xE1s nem ker\xFClhet \xE9rv\xE9nytelen \xE1llapotba; a k\xF3d a val\xF3s \xFCzleti m\u0171veleteket t\xFCkr\xF6zi (magas koh\xE9zi\xF3). \xC1ra: az entit\xE1s felh\xEDzhat, ha rosszul van k\xF6r\xFClhat\xE1rolva; a logika nehezebben \xFAjrahasznos\xEDthat\xF3 t\xF6bb kontextus k\xF6z\xF6tt; egyszer\u0171 CRUD-n\xE1l felesleges szerkezet.

### An\xE9mikus domain \u2013 adat \xE9s viselked\xE9s sz\xE9tv\xE1lasztva

\`\`\`csharp
public class Product
{
    public Guid Id { get; set; }
    public decimal Price { get; set; }
    public int StockLevel { get; set; }
}

public class ProductService
{
    public void UpdateStockLevel(Product product, int stockLevel)
    {
        if (stockLevel < 0)
            throw new ArgumentException("A k\xE9szlet nem lehet negat\xEDv.", nameof(stockLevel));

        product.StockLevel = stockLevel;
    }
}
\`\`\`

El\u0151nye: egyszer\u0171, gyorsan \xE9rthet\u0151, CRUD-hoz el\xE9g; a logika service-ekben megoszthat\xF3; teljes entit\xE1s fel\xE9p\xEDt\xE9se n\xE9lk\xFCl tesztelhet\u0151. \xC1ra: a szab\xE1lyok sz\xE9tsz\xF3r\xF3dnak, a viselked\xE9s nehezen k\xF6vethet\u0151; az entit\xE1s nem v\xE9di mag\xE1t \u2013 b\xE1rki \xEDrhatja a settert a service megker\xFCl\xE9s\xE9vel; ugyanaz a szab\xE1ly elt\xE9r\u0151en \xE9rv\xE9nyes\xFCl a k\xFCl\xF6nb\xF6z\u0151 h\xEDv\xE1si \xFAtvonalakon.

### D\xF6nt\xE9si t\xE1bl\xE1zat

| Helyzet | Aj\xE1nlott modell |
|---|---|
| Az alkalmaz\xE1s j\xF3r\xE9szt CRUD, minim\xE1lis logik\xE1val | an\xE9mikus |
| Az \xFCzleti szab\xE1lyok egyszer\u0171ek, nincs \xE9rdemi valid\xE1ci\xF3 | an\xE9mikus |
| A logik\xE1t teljes entit\xE1s fel\xE9p\xEDt\xE9se n\xE9lk\xFCl akarod unit-tesztelni | an\xE9mikus |
| A domain szab\xE1lyokat, d\xF6nt\xE9seket, valid\xE1ci\xF3t tartalmaz | rich |
| A viselked\xE9s az adathoz k\xF6zel tartozzon (magas koh\xE9zi\xF3) | rich |
| A domain \xF6sszetetts\xE9ge v\xE1rhat\xF3an n\u0151ni fog | rich |

Mikroszolg\xE1ltat\xE1sokn\xE1l a gyakorlat \xE1ltal\xE1ban vegyes: a **core domain** szolg\xE1ltat\xE1s (\xE1raz\xE1s, foglal\xE1s, k\xE9szlet, fizet\xE9s) rich modellt kap, a **supporting/generic** szolg\xE1ltat\xE1s (t\xF6rzsadat-karbantart\xE1s, riport-oldal) nyugodtan maradhat an\xE9mikus. Ezt szolg\xE1ltat\xE1sonk\xE9nt kell eld\xF6nteni, nem megold\xE1sszinten.

Mit ker\xFClj el: ne nevezd "DDD-nek" a rich domain n\xE9lk\xFCli r\xE9teges CRUD-ot; ne tegy\xE9l publikus settert olyan mez\u0151re, amelynek invari\xE1nsa van; ne vezess be rich modellt egy tiszt\xE1n CRUD szolg\xE1ltat\xE1sba csak az\xE9rt, mert a szomsz\xE9dos szolg\xE1ltat\xE1s \xEDgy \xE9p\xFClt; ne m\xE1sold ugyanazt a szab\xE1lyt service-be *\xE9s* entit\xE1sba \u2013 akkor kett\u0151 van bel\u0151le, \xE9s el fognak t\xE9rni.

## Aggreg\xE1tum-hat\xE1rok \xE9s aggreg\xE1tumok k\xF6z\xF6tti kapcsolatok https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/net-core-microservice-domain-model {#aggregatum-hatarok-es-aggregatumok-kozotti-kapcsolatok}

*Forr\xE1s: Microservices Design Patterns in .NET (Williams), 2. fejezet. Kapcsol\xF3dik a "DDD taktikai \xE9p\xEDt\u0151elemek", "Bounded Context" \xE9s "Eventual consistency" fejezetekhez.*

Az aggreg\xE1tum a **konzisztencia hat\xE1ra**: azon entit\xE1sok \xE9s value objectek csoportja, amelyek egy\xFCtt, egyetlen tranzakci\xF3ban maradnak \xE9rv\xE9nyesek. A k\xFClvil\xE1g kiz\xE1r\xF3lag az **aggregate rooton** kereszt\xFCl \xE9rheti el a belsej\xE9t.

### A k\xE9t alapszab\xE1ly

1. **Egy tranzakci\xF3 \u2013 egy aggreg\xE1tum.** Ha egy m\u0171velet k\xE9t aggreg\xE1tumot \xEDr egyszerre, az vagy rossz hat\xE1r, vagy eventual consistencyt ig\xE9nyel (domain esem\xE9ny + k\xFCl\xF6n tranzakci\xF3).
2. **Aggreg\xE1tumok k\xF6z\xF6tt csak azonos\xEDt\xF3val hivatkozunk**, nem objektumreferenci\xE1val.

\`\`\`csharp
public class Appointment                          // aggregate root
{
    public Guid Id { get; private set; }
    public Guid PatientId { get; private set; }   // m\xE1sik aggreg\xE1tum \u2013 csak ID
    public TimeSlot Slot { get; private set; }    // value object, bel\xFCl
    private readonly List<AppointmentNote> _notes = [];   // bels\u0151 entit\xE1s

    public IReadOnlyCollection<AppointmentNote> Notes => _notes;
}
\`\`\`

A c\xEDm p\xE9ld\xE1ul a beteg aggreg\xE1tum\xE1n bel\xFCli entit\xE1s vagy value object, mert **csak a betegen kereszt\xFCl** van \xE9rtelme el\xE9rni. A beteget viszont m\xE1s aggreg\xE1tumok (id\u0151pont, dokumentum) is hivatkozz\xE1k \u2013 ez\xE9rt \u0151 maga aggregate root. Ez a legjobb gyakorlati teszt: *"el\xE9rhet\u0151-e ez az adat \xF6n\xE1ll\xF3an, vagy csak a gazd\xE1j\xE1n kereszt\xFCl?"*

### Ha a kapcsolat \xE1tny\xFAlik a hat\xE1ron

- **ID-referencia** \u2013 a m\xE1sik aggreg\xE1tum \xE1llapot\xE1t nem tartjuk a mem\xF3ri\xE1ban, csak az azonos\xEDt\xF3j\xE1t.
- **Domain esem\xE9ny** \u2013 az egyik aggreg\xE1tum v\xE1ltoz\xE1sa esem\xE9nyt v\xE1lt ki, a m\xE1sik erre reag\xE1lva friss\xFCl (l\xE1sd "Domain Events" \xE9s "Outbox Pattern").
- **Application service / use case koordin\xE1ci\xF3** \u2013 a folyamatot az alkalmaz\xE1sr\xE9teg f\u0171zi \xF6ssze, nem az entit\xE1s.
- **Eventual consistency tudatos elfogad\xE1sa** \u2013 a k\xF6ztes \xE1llapotot a fel\xFCleten is kezelni kell ("feldolgoz\xE1s alatt").

### Mi\xE9rt sz\xE1m\xEDt ez mikroszolg\xE1ltat\xE1sn\xE1l

Az aggreg\xE1tum-hat\xE1r a leger\u0151sebb jel\xF6lt a **szolg\xE1ltat\xE1s-hat\xE1rra**. Ha k\xE9t aggreg\xE1tum \xE1lland\xF3an egy\xFCtt m\xF3dosul, val\xF3sz\xEDn\u0171leg egy aggreg\xE1tumnak kellene lenni\xFCk \u2013 vagy legal\xE1bbis egy szolg\xE1ltat\xE1sban maradniuk. Ha viszont csak ID-vel hivatkoznak egym\xE1sra, sz\xE9t lehet \u0151ket v\xE1gni k\xFCl\xF6n szolg\xE1ltat\xE1sra an\xE9lk\xFCl, hogy elosztott tranzakci\xF3ra lenne sz\xFCks\xE9g.

Mit ker\xFClj el: ne navig\xE1lj EF Core navigation propertyvel egy m\xE1sik aggreg\xE1tum belsej\xE9be (a lusta bet\xF6lt\xE9s \xE9szrev\xE9tlen\xFCl aggreg\xE1tum-hat\xE1rt l\xE9p \xE1t); ne \xEDrj k\xE9t aggreg\xE1tumot ugyanabban a ment\xE9si m\u0171veletben, ha k\xFCl\xF6n szolg\xE1ltat\xE1sba k\xE9sz\xFClnek; ne tervezz "mindent tartalmaz\xF3" nagy aggreg\xE1tumot \u2013 a nagy aggreg\xE1tum konkurencia-\xFCtk\xF6z\xE9sek forr\xE1sa (l\xE1sd "EF Core Concurrency control").

## Refit \u2013 deklarat\xEDv, t\xEDpusos HTTP kliens {#refit-deklarativ-tipusos-http-kliens}

*Verzi\xF3: Refit 7.x/8.x, .NET 8+. Forr\xE1s: Clean Architecture with .NET, 6. fejezet. Kapcsol\xF3dik a "HttpClientFactory \xE9s Polly" fejezethez.*

A szolg\xE1ltat\xE1sok k\xF6z\xF6tti szinkron h\xEDv\xE1s k\xF3dj\xE1nak nagy r\xE9sze ism\xE9tl\u0151d\u0151 HttpClient-v\xEDzvezet\xE9k: URL-\xF6sszef\u0171z\xE9s, szerializ\xE1l\xE1s, st\xE1tuszk\xF3d-ellen\u0151rz\xE9s, deszerializ\xE1l\xE1s. A **Refit** ezt interf\xE9sz-deklar\xE1ci\xF3ra cser\xE9li, \xE9s fut\xE1sid\u0151ben gener\xE1lja az implement\xE1ci\xF3t.

\`\`\`csharp
public interface IPaymentGatewayApi
{
    [Post("/payments")]
    Task<ApiResponse<PaymentResult>> ProcessPaymentAsync([Body] PaymentRequest request,
                                                         CancellationToken ct = default);

    [Get("/payments/{paymentId}")]
    Task<ApiResponse<PaymentStatus>> GetPaymentStatusAsync(string paymentId,
                                                           CancellationToken ct = default);
}
\`\`\`

Regisztr\xE1ci\xF3 \u2013 a l\xE9nyeg, hogy a gener\xE1lt kliens **a norm\xE1l HttpClientFactory pipeline-on megy kereszt\xFCl**, teh\xE1t a resilience policy, a handlerek, a fejl\xE9cek \xE9s a telemetria ugyan\xFAgy m\u0171k\xF6dnek:

\`\`\`csharp
builder.Services
    .AddRefitClient<IPaymentGatewayApi>()
    .ConfigureHttpClient(c =>
    {
        c.BaseAddress = new Uri(builder.Configuration["PaymentGateway:BaseUrl"]!);
        c.Timeout = TimeSpan.FromSeconds(10);
    })
    .AddStandardResilienceHandler();          // Microsoft.Extensions.Http.Resilience
\`\`\`

Az \`ApiResponse<T>\` visszat\xE9r\xE9si t\xEDpus a st\xE1tuszk\xF3dot, a fejl\xE9ceket \xE9s a hib\xE1t is el\xE9rhet\u0151v\xE9 teszi kiv\xE9tel n\xE9lk\xFCl \u2013 ez j\xF3l illeszkedik a Result patternhez:

\`\`\`csharp
var response = await _api.ProcessPaymentAsync(request, ct);

return response.IsSuccessStatusCode
    ? Result.Success(response.Content!)
    : Result.Failure($"Fizet\xE9si hiba: {(int)response.StatusCode}");
\`\`\`

Ha nem \`ApiResponse<T>\`-t adsz vissza, hanem k\xF6zvetlen\xFCl \`Task<T>\`-t, a Refit hib\xE1s st\xE1tuszk\xF3dn\xE1l \`ApiException\`-t dob \u2013 ez a kiv\xE9tel-alap\xFA st\xEDlus a glob\xE1lis hibakezel\xE9ssel p\xE1ros\xEDtva szint\xE9n j\xE1rhat\xF3 \xFAt, csak legyen egys\xE9ges a megold\xE1sban.

**Alternat\xEDv\xE1k**: k\xE9zzel \xEDrt typed client (HttpClientFactory + konstruktorba injekt\xE1lt HttpClient) \u2013 t\xF6bb k\xF3d, de nulla m\xE1gia \xE9s jobban debuggolhat\xF3; RestEase; forr\xE1sgener\xE1lt HTTP kliensek (build id\u0151ben gener\xE1lnak, \xEDgy AOT-bar\xE1tabbak). Architektur\xE1lisan mindegy, melyiket v\xE1lasztod: **az alkalmaz\xE1sr\xE9teg csak az absztrakci\xF3t\xF3l f\xFCgg**, a HTTP-r\xE9szlet az infrastrukt\xFAra r\xE9tegben marad.

Mit ker\xFClj el: ne sziv\xE1rogtasd az \`ApiResponse\`/\`ApiException\` t\xEDpust az alkalmaz\xE1sr\xE9tegbe (az a Refit r\xE9szlete \u2013 ford\xEDtsd le saj\xE1t Resultra vagy domain kiv\xE9telre); ne p\xE9ld\xE1nyos\xEDts \`RestService.For<T>(new HttpClient())\`-tel kliensre kliens ut\xE1n (socket exhaustion \u2013 mindig \`AddRefitClient\`); ne felejtsd le a \`CancellationToken\` param\xE9tert az interf\xE9sz met\xF3dusokr\xF3l; Native AOT alatt ellen\u0151rizd a fut\xE1sidej\u0171 k\xF3dgener\xE1l\xE1st (ott a forr\xE1sgener\xE1lt megold\xE1s a biztos v\xE1laszt\xE1s).

## Perzisztencia entit\xE1s vs. domain entit\xE1s \u2013 lek\xE9pez\xE9s a hat\xE1ron https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implemenation-entity-framework-core {#perzisztencia-entitas-vs-domain-entitas-lekepezes-a-hataron}

*Forr\xE1s: Clean Architecture with .NET, 7. fejezet. Kapcsol\xF3dik a "Repository Pattern", "Objektum-mapping" \xE9s "IEntityTypeConfiguration" fejezetekhez.*

A domain entit\xE1s az **\xFCzleti viselked\xE9st** modellezi \xE9s invari\xE1nsokat k\xE9nyszer\xEDt ki. A perzisztencia entit\xE1s azt modellezi, **hogyan t\xE1roljuk** az adatot. A kett\u0151 gyakran hasonl\xEDt, de nem ugyanaz a feladatuk.

### Mi\xE9rt \xE9rdemes sz\xE9tv\xE1lasztani

- Ha a domain modellje elkezd az EF Core ig\xE9nyei szerint alakulni (param\xE9ter n\xE9lk\xFCli konstruktor, publikus setter, k\xE9tir\xE1ny\xFA navig\xE1ci\xF3, surrogate kulcsok), akkor m\xE1r **nem a domain vezeti a tervez\xE9st, hanem az adathozz\xE1f\xE9r\xE9si technol\xF3gia**.
- A domain viselked\xE9st hordoz (p\xE9ld\xE1ul \`price.ApplyDiscount()\`), aminek az adatr\xE9tegben semmi keresnival\xF3ja. A perzisztencia entit\xE1s sz\xE1nd\xE9kosan buta adathordoz\xF3 (DTO).
- A kapcsolatok, idegen kulcsok, navig\xE1ci\xF3s gr\xE1fok **adatb\xE1zis-fogalmak**. Rel\xE1ci\xF3s t\xE1rol\xF3n\xE1l normaliz\xE1lt t\xE1bl\xE1k, dokumentum-adatb\xE1zisn\xE1l be\xE1gyazott strukt\xFAra a term\xE9szetes \u2013 a domainnek err\u0151l nem kell tudnia.

\`\`\`csharp
namespace Infrastructure.Persistence.Entities;

public class Order                      // perzisztencia entit\xE1s
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime CreatedOn { get; set; }
    public OrderStatus Status { get; set; }
    public List<OrderItem> Items { get; set; } = [];
    public User? NavUser { get; set; }   // "Nav" prefix: kapcsolat, nem \xFCzleti fogalom
}
\`\`\`

A \`NavUser\`-szer\u0171 property a **kapcsolatot** \xEDrja le, nem \xFCzleti viselked\xE9st; a n\xE9vkonvenci\xF3 (p\xE9ld\xE1ul \`Nav\` prefix) egy\xE9rtelm\u0171v\xE9 teszi a sz\xE1nd\xE9kot, \xE9s a lek\xE9pez\xE9sn\xE9l is k\xF6nnyen kihagyhat\xF3.

### A lek\xE9pez\xE9s hat\xE1r, nem r\xF6vid\xEDt\xE9s

A repository felel az\xE9rt, hogy a k\xE9t modell k\xF6z\xF6tt mozgassa az adatot, \xE9s **a lek\xE9pez\xE9s az a pont, ahol a domain v\xE9delmei nem \xE9rv\xE9nyes\xFClnek automatikusan**. A mapping transzform\xE1ci\xF3, nem valid\xE1ci\xF3 \u2013 akkor is, ha AutoMapper/Mapperly v\xE9gzi, \xE9s akkor is, ha k\xE9zzel \xEDrt \`ToDomain()\`/\`ToEntity()\`.

Ebb\u0151l k\xF6vetkezik: a mapping-profil ugyanolyan hat\xE1rk\xF3d, mint b\xE1rmelyik m\xE1sik \u2013 **review-zand\xF3 \xE9s tesztelend\u0151**, \xE9s explicit m\xF3don kell megmondani benne, mely mez\u0151k ker\xFClnek \xE1t, \xE9s melyek maradnak sz\xE1nd\xE9kosan \xE9rintetlen\xFCl. Az immutabilit\xE1s itt a leg\xE9rz\xE9kenyebb pont: a domain entit\xE1s konstruktorral vagy met\xF3dussal v\xE9di az \xE9rt\xE9keit, a perzisztencia entit\xE1s viszont szabadon \xEDrhat\xF3 \u2013 hogy melyik \xE9rt\xE9k jut \xE1t \xE9s hogyan, azt a mapping konfigur\xE1ci\xF3 d\xF6nti el, nem az adatb\xE1zis.

\`\`\`csharp
[Fact]
public void Mapping_configuration_is_valid()
    => _mapperConfiguration.AssertConfigurationIsValid();   // minden c\xE9l-property lefedve
\`\`\`

### Mikor NE v\xE1ld sz\xE9t

Kis, CRUD-jelleg\u0171 szolg\xE1ltat\xE1sn\xE1l a k\xE9t modell duplik\xE1l\xE1sa felesleges cerem\xF3nia. \xD6k\xF6lszab\xE1ly: **rich domain modell \u2192 k\xFCl\xF6n perzisztencia entit\xE1s; an\xE9mikus CRUD szolg\xE1ltat\xE1s \u2192 egy modell is el\xE9g**. Mikroszolg\xE1ltat\xE1s-k\xF6rnyezetben ez szolg\xE1ltat\xE1sonk\xE9nt eld\xF6nthet\u0151, \xE9s ez az egyik el\u0151nye a szolg\xE1ltat\xE1sokra bont\xE1snak.

Mit ker\xFClj el: ne add vissza a repositoryb\xF3l az EF entit\xE1st (vagy \`IQueryable\`-t) az alkalmaz\xE1sr\xE9tegnek, ha van k\xFCl\xF6n domain modelled \u2013 az \`IQueryable\` sziv\xE1rg\xE1sa miatt a lek\xE9rdez\xE9s \xF6ssze\xE1ll\xEDt\xE1sa a prezent\xE1ci\xF3s r\xE9tegbe cs\xFAszik; ne tekintsd a mappinget valid\xE1ci\xF3nak; ne sz\xF3rd sz\xE9t a lek\xE9pez\xE9st a repositoryk k\xF6z\xF6tt (egy helyen, profil- vagy mapper-oszt\xE1lyban legyen); ne \xEDrj k\xE9zi mappinget teszt n\xE9lk\xFCl \u2013 az elfelejtett \xFAj mez\u0151 csendben null vagy 0 marad.

## \xDCzenetsorrend \xE9s duplik\xE1tumok kezel\xE9se a gyakorlatban {#uzenetsorrend-es-duplikatumok-kezelese-a-gyakorlatban}

*Forr\xE1s: Microservices Design Patterns in .NET, 4. fejezet. Kapcsol\xF3dik a "K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer (Inbox Pattern)" \xE9s a "Kafka gyakorlati mint\xE1k" fejezetekhez.*

K\xE9t dolog biztosan bek\xF6vetkezik \xE9les \xFCzenetkezel\xE9sn\xE9l: az \xFCzenetek **sorrendje felborul**, \xE9s ugyanaz az \xFCzenet **t\xF6bbsz\xF6r \xE9rkezik meg**. Egyik sem a broker hib\xE1ja \u2013 ez a norm\xE1l m\u0171k\xF6d\xE9s k\xF6vetkezm\xE9nye.

### Sorrend: az \xFCzenet hordozza a saj\xE1t poz\xEDci\xF3j\xE1t

A megb\xEDzhat\xF3 megold\xE1s nem a broker sorrendgaranci\xE1j\xE1ra \xE9p\xEDt, hanem arra, hogy az \xFCzenet mag\xE1val viszi a verzi\xF3j\xE1t vagy id\u0151b\xE9lyeg\xE9t, \xE9s a consumer eldobja (vagy elt\xE1rolja) a r\xE9gebbit:

\`\`\`csharp
public record AppointmentCreated(Guid AppointmentId, Guid MessageId, DateTime Timestamp);

public class AppointmentCreatedConsumer : IConsumer<AppointmentCreated>
{
    public async Task Consume(ConsumeContext<AppointmentCreated> context)
    {
        var msg = context.Message;
        var last = await _store.GetLastProcessedAsync(msg.AppointmentId, context.CancellationToken);

        if (msg.Timestamp <= last)
        {
            _logger.LogWarning("K\xE9sve \xE9rkezett \xFCzenet: {Id} ({Ts})", msg.AppointmentId, msg.Timestamp);
            return;                                   // vagy: elt\xE1rol\xE1s k\xE9s\u0151bbi \xFAjrarendez\xE9sre
        }

        await ProcessAsync(msg, context.CancellationToken);
        await _store.SetLastProcessedAsync(msg.AppointmentId, msg.Timestamp, context.CancellationToken);
    }
}
\`\`\`

Fontos: az utolj\xE1ra feldolgozott \xE1llapotot **perzisztensen** kell t\xE1rolni (adatb\xE1zis, Redis), nem statikus \`ConcurrentDictionary\`-ben \u2013 az \xFAjraind\xEDt\xE1sn\xE1l elveszne, t\xF6bb p\xE9ld\xE1nyn\xE1l pedig p\xE9ld\xE1nyonk\xE9nt k\xFCl\xF6n lenne. Id\u0151b\xE9lyeg helyett **monoton verzi\xF3sz\xE1m** m\xE9g biztosabb, mert a g\xE9pek \xF3r\xE1i nincsenek szinkronban.

Ha a sorrend \xFCzletileg k\xF6telez\u0151, a p\xE1rhuzamoss\xE1g korl\xE1tozhat\xF3 \u2013 de ez az \xE1tbocs\xE1t\xE1s rov\xE1s\xE1ra megy:

\`\`\`csharp
cfg.ReceiveEndpoint("appointment_created_queue", e =>
{
    e.PrefetchCount = 1;          // egyszerre egy \xFCzenet
    e.UseConcurrencyLimit(1);     // egyszerre egy feldolgoz\xE1s
    e.ConfigureConsumer<AppointmentCreatedConsumer>(context);
});
\`\`\`

Jobb megold\xE1s, ha van r\xE1 m\xF3d: **part\xEDci\xF3kulcs** (Kafka) vagy MassTransit partitioner \u2013 \xEDgy csak az *egy entit\xE1shoz* tartoz\xF3 \xFCzenetek sorosodnak, a rendszer eg\xE9sze p\xE1rhuzamos maradhat.

### Duplik\xE1tum: idempotens consumer

A brokerek t\xF6bbs\xE9ge **at-least-once** k\xE9zbes\xEDt\xE9st garant\xE1l: ha az ack elv\xE9sz vagy timeoutol, az \xFCzenet \xFAjra kimegy. A v\xE9delem nem a brokerben van, hanem a consumerben:

\`\`\`csharp
if (await _inbox.AlreadyProcessedAsync(msg.MessageId, ct))
    return;                                   // duplik\xE1tum \u2013 csendben eldobjuk

await using var tx = await _db.Database.BeginTransactionAsync(ct);
await ProcessAsync(msg, ct);
await _inbox.MarkProcessedAsync(msg.MessageId, ct);   // ugyanabban a tranzakci\xF3ban
await tx.CommitAsync(ct);
\`\`\`

A \`MessageId\` legyen **\xFCzleti \xE9rtelemben stabil** (p\xE9ld\xE1ul a rendel\xE9s azonos\xEDt\xF3ja + az esem\xE9ny t\xEDpusa), ne a broker \xE1ltal gener\xE1lt \xE9rt\xE9k \u2013 \xFAjrak\xFCld\xE9sn\xE9l az ut\xF3bbi v\xE1ltozhat. A feldolgozott azonos\xEDt\xF3k t\xE1bl\xE1j\xE1nak legyen meg\u0151rz\xE9si ideje (p\xE9ld\xE1ul 7 nap), k\xFCl\xF6nben korl\xE1tlanul n\u0151.

Mit ker\xFClj el: ne felt\xE9telezz glob\xE1lis sorrendet egy topicon vagy queue-n; ne t\xE1rold a "m\xE1r feldolgozott" \xE1llapotot mem\xF3ri\xE1ban; ne \xE1ll\xEDtsd az eg\xE9sz rendszert \`PrefetchCount = 1\`-re egyetlen sorrend\xE9rz\xE9keny \xFCzenett\xEDpus miatt; ne \xEDrj duplik\xE1tum-ellen\u0151rz\xE9st a t\xE9nyleges feldolgoz\xE1st\xF3l **elt\xE9r\u0151** tranzakci\xF3ban \u2013 a kett\u0151 k\xF6z\xF6tt elhal\xF3 folyamat duplik\xE1lt vagy elveszett feldolgoz\xE1st hagy maga ut\xE1n.

## Event store tervez\xE9se \xE9s snapshot strat\xE9gia https://learn.microsoft.com/azure/architecture/patterns/event-sourcing {#event-store-tervezese-es-snapshot-strategia}

*Forr\xE1s: Microservices Design Patterns in .NET, 7. fejezet. Kapcsol\xF3dik az "Event Sourcing .NET-ben (Marten)" fejezethez.*

Event sourcingn\xE1l az aggreg\xE1tum \xE1llapot\xE1t az esem\xE9nyeinek visszaj\xE1tsz\xE1sa adja. N\xE9h\xE1ny sz\xE1z esem\xE9nyig ez ingyen van; n\xE9h\xE1ny ezern\xE9l m\xE1r a bet\xF6lt\xE9s lesz a sz\u0171k keresztmetszet.

### Az esem\xE9nyt\xE1r minim\xE1lis s\xE9m\xE1ja

| Oszlop | Szerep |
|---|---|
| \`AggregateId\` | melyik stream |
| \`Version\` | sorsz\xE1m a streamen bel\xFCl (egyedi index \`AggregateId\` + \`Version\`) |
| \`EventType\` | a t\xEDpus neve a deszerializ\xE1l\xE1shoz |
| \`Payload\` | az esem\xE9ny adata (JSON/JSONB) |
| \`OccurredOn\` | mikor t\xF6rt\xE9nt |

Az \`(AggregateId, Version)\` egyedi index egyben az **optimista konkurencia** eszk\xF6ze: ha k\xE9t folyamat ugyanarra a verzi\xF3ra pr\xF3b\xE1l \xEDrni, a m\xE1sodik besz\xFAr\xE1s elbukik, \xE9s \xFAjrapr\xF3b\xE1lhat\xF3.

### Snapshot

\`\`\`csharp
public class AggregateSnapshot
{
    public Guid AggregateId { get; set; }
    public int Version { get; set; }          // az utols\xF3 alkalmazott esem\xE9ny verzi\xF3ja
    public string PayloadSnapshot { get; set; } = "";
    public DateTime CreatedAt { get; set; }
}
\`\`\`

A mechanizmus n\xE9gy l\xE9p\xE9se:

1. **S\xE9ma defini\xE1l\xE1sa** \u2013 az aggreg\xE1tum szerializ\xE1lt \xE1llapota \xE9s az utols\xF3 alkalmazott esem\xE9ny verzi\xF3ja.
2. **Gyakoris\xE1g meghat\xE1roz\xE1sa** \u2013 tipikusan N esem\xE9nyenk\xE9nt (p\xE9ld\xE1ul 100).
3. **L\xE9trehoz\xE1s** \u2013 az utols\xF3 snapshot \xF3ta keletkezett esem\xE9nyek sz\xE1ml\xE1l\xE1sa, a k\xFCsz\xF6b el\xE9r\xE9sekor snapshot \xEDr\xE1sa.
4. **Vissza\xE1ll\xEDt\xE1s** \u2013 el\u0151sz\xF6r a legutols\xF3 snapshot bet\xF6lt\xE9se, majd **csak az az\xF3ta keletkezett** esem\xE9nyek visszaj\xE1tsz\xE1sa.

Kompromisszum: a s\u0171r\u0171 snapshot gyors\xEDtja a bet\xF6lt\xE9st, de t\xE1rhelyet fogyaszt, n\xF6veli a ment\xE9s \xE9s a vissza\xE1ll\xEDt\xE1s idej\xE9t, \xE9s takar\xEDt\xE1si strat\xE9gi\xE1t ig\xE9nyel (a r\xE9gi snapshotok t\xF6r\xF6lhet\u0151k). A ritka snapshot sp\xF3rol a t\xE1rhellyel, de hosszabb visszaj\xE1tsz\xE1st hagy.

### T\xE1rol\xF3 v\xE1laszt\xE1sa

- **PostgreSQL + JSONB** \u2013 j\xF3 \xE1ltal\xE1nos v\xE1laszt\xE1s; EF Core-ral viszont a payload tartalm\xE1ra \xEDrt lek\xE9rdez\xE9sek korl\xE1tozottak, \xE9s a stream-kezel\xE9st, a sorrendez\xE9st magadnak kell meg\xEDrnod.
- **Marten** (PostgreSQL felett) \u2013 k\xE9sz event store API, projekci\xF3k, inline vagy async snapshot (l\xE1sd a Marten-fejezetet).
- **EventStoreDB** \u2013 c\xE9lszoftver: stream-szemantika, be\xE9p\xEDtett indexel\xE9s \`AggregateId\`/\`EventType\` szerint, meg\u0151rz\xE9si szab\xE1lyok.

Mit ker\xFClj el: ne m\xF3dos\xEDts vagy t\xF6r\xF6lj esem\xE9nyt ut\xF3lag (a napl\xF3 append-only \u2013 a hib\xE1t kompenz\xE1l\xF3 esem\xE9nnyel jav\xEDtjuk); ne tegy\xE9l az esem\xE9nybe olyan hivatkoz\xE1st, ami csak a mai k\xF3dban \xE9rtelmes (az esem\xE9nyt \xE9vek m\xFAlva is deszerializ\xE1lni kell \u2013 l\xE1sd "\xDCzenet-szerz\u0151d\xE9sek verzi\xF3z\xE1sa"); ne haszn\xE1ld az event store-t lek\xE9rdez\xE9sre (arra a projekci\xF3, a read model val\xF3); ne kezdj event sourcinggal, ha a domain val\xF3j\xE1ban CRUD.

## Docker Compose \xE9s a .NET nat\xEDv kont\xE9ner-t\xE1mogat\xE1s (.NET 7+ (SDK container publish)) https://learn.microsoft.com/dotnet/core/docker/publish-as-container {#docker-compose-es-a-net-nativ-kontener-tamogatas}

*Verzi\xF3: \`Microsoft.NET.Build.Containers\` \u2013 .NET 7-t\u0151l az SDK r\xE9sze (.NET 8+: \`dotnet publish /t:PublishContainer\`). Forr\xE1s: Microservices Design Patterns in .NET, 14. fejezet. Kapcsol\xF3dik a "Docker multi-stage build \xE9s Kubernetes-alapok" \xE9s a ".NET Aspire" fejezetekhez.*

### Kont\xE9nerk\xE9p Dockerfile n\xE9lk\xFCl

A .NET SDK Dockerfile n\xE9lk\xFCl is tud k\xE9pet publik\xE1lni \u2013 ez CI-ban \xE9s lok\xE1lisan is r\xF6vid\xEDti a ciklust:

\`\`\`bash
dotnet publish -c Release --os linux --arch x64 /t:PublishContainer \\
  -p:ContainerRepository=healthcare-appointments-api \\
  -p:ContainerImageTag=1.0.0

docker run -it --rm -p 5010:8080 healthcare-appointments-api:1.0.0
\`\`\`

A gener\xE1lt k\xE9p a hivatalos \`mcr.microsoft.com/dotnet/aspnet\` alapra \xE9p\xFCl, r\xE9teghelyesen. Ha egyedi alaprendszerk\xE9p, nat\xEDv f\xFCgg\u0151s\xE9g vagy t\xF6bb l\xE9pcs\u0151s build kell, marad a Dockerfile.

### Lok\xE1lis stack Compose-zal

T\xF6bb szolg\xE1ltat\xE1sb\xF3l \xE1ll\xF3 rendszert nem praktikus egyes\xE9vel ind\xEDtani. A Compose-f\xE1jl egy paranccsal hozza fel az eg\xE9sz stacket a f\xFCgg\u0151s\xE9geivel (broker, cache, adatb\xE1zis) egy\xFCtt:

\`\`\`yaml
services:
  healthcare.patients.api:
    image: healthcarepatientsapi
    build:
      context: .
      dockerfile: HealthCare.Patients.Api/Dockerfile

  healthcare.appointments.api:
    image: healthcareappointmentsapi
    build:
      context: .
      dockerfile: HealthCare.Appointments.Api/Dockerfile
    depends_on:
      redis:
        condition: service_started
      healthcare.patients.api:
        condition: service_started

  redis:
    image: "redis:alpine"
    volumes:
      - redis-data:/data

volumes:
  redis-data:
\`\`\`

A \`docker-compose.override.yml\` a k\xF6rnyezetf\xFCgg\u0151 be\xE1ll\xEDt\xE1sokat r\xE9tegzi a base f\xE1jl f\xF6l\xE9 (portok, k\xF6rnyezeti v\xE1ltoz\xF3k, fejleszt\u0151i tan\xFAs\xEDtv\xE1nyok \xE9s user secrets bemountol\xE1sa), \xEDgy a base f\xE1jl tiszta marad:

\`\`\`yaml
services:
  healthcare.patients.api:
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ASPNETCORE_URLS=http://+:8080
    ports:
      - "8080"
\`\`\`

**Fontos korl\xE1t**: a \`depends_on\` csak az ind\xEDt\xE1s **sorrendj\xE9t** garant\xE1lja, a k\xE9szenl\xE9tet nem. Ha a szolg\xE1ltat\xE1snak val\xF3ban m\u0171k\xF6d\u0151 f\xFCgg\u0151s\xE9g kell, vagy \`condition: service_healthy\` kell \`healthcheck\` be\xE1ll\xEDt\xE1ssal, vagy \u2013 ami am\xFAgy is helyesebb \u2013 a szolg\xE1ltat\xE1s viselje el a m\xE9g nem el\xE9rhet\u0151 f\xFCgg\u0151s\xE9get (retry, l\xE1sd "Polly v8" \xE9s "Health Checks").

### Compose vagy Aspire?

A .NET Aspire ugyanezt a lok\xE1lis orchestration-feladatot oldja meg C#-ban le\xEDrt app modellel, service discoveryvel \xE9s be\xE9p\xEDtett telemetria-dashboarddal (l\xE1sd a ".NET Aspire" fejezetet). \xD6k\xF6lszab\xE1ly: **\xFAj, .NET-only stackhez Aspire**; vegyes technol\xF3gi\xE1j\xFA stackhez, illetve ahol a CI/CD m\xE1r Compose-ra \xE9p\xFCl, marad a Compose. A kett\u0151 nem z\xE1rja ki egym\xE1st \u2013 az Aspire tud Compose- \xE9s Kubernetes-manifestet is gener\xE1lni.

Mit ker\xFClj el: ne tedd a titkokat a Compose-f\xE1jlba (\`.env\` f\xE1jl vagy user secrets); ne \xE9p\xFClj a \`depends_on\`-ra k\xE9szenl\xE9tk\xE9nt; ne haszn\xE1ld ugyanazt a Compose-f\xE1jlt \xE9lesben orchestrator helyett; ne felejtsd el a \`volumes\` bejegyz\xE9st az adatb\xE1zis- \xE9s broker-kont\xE9nerekn\xE9l, k\xFCl\xF6nben minden \xFAjraind\xEDt\xE1s adatveszt\xE9s.

## Az architekt\xFAra er\xF3zi\xF3ja \u2013 korai jelek \xE9s ADR-ek {#az-architektura-erozioja-korai-jelek-es-adr-ek}

*Forr\xE1s: Clean Architecture with .NET, 14. fejezet. Kapcsol\xF3dik az "Architekt\xFAra tesztek" \xE9s a "Structured Service Composition" fejezetekhez.*

Az architekt\xFAra ritk\xE1n omlik \xF6ssze egyszerre \u2013 **elhalv\xE1nyul**. Egy controller megker\xFCli a use case-t. Egy domain entit\xE1s felvesz egy logger-f\xFCgg\u0151s\xE9get. Egy query handler egy k\xE9perny\u0151re szabott DTO-t ad vissza, amit azt\xE1n m\xE1shol is felhaszn\xE1lnak. K\xFCl\xF6n-k\xFCl\xF6n mindegyik \xE1rtalmatlan; egy\xFCtt elmoss\xE1k a hat\xE1rokat, amelyek v\xE9delm\xE9re az architekt\xFAra \xE9p\xFClt.

### 1. A use case megker\xFCl\xE9se

A prezent\xE1ci\xF3s r\xE9teg (controller, page, Azure Function, h\xE1tt\xE9rjob) k\xF6zvetlen\xFCl a repositoryt vagy a service-t h\xEDvja, mert "ez csak egy egyszer\u0171 olvas\xE1s". A use case azonban nem v\xEDzvezet\xE9k: ott van egy helyen a valid\xE1ci\xF3, a logol\xE1s, a metrika, az autoriz\xE1ci\xF3 \xE9s az \xFCzleti szab\xE1ly.

A tipikus k\xF6vetkezm\xE9ny: az \xFCzlet bevezet egy \xFAj szab\xE1lyt ("a teszt-felhaszn\xE1l\xF3k rendel\xE9sei ne jelenjenek meg a friss aktivit\xE1sban"), a handler friss\xFCl \u2013 de az a h\xEDv\xF3, amelyik megker\xFClte, **csendben kimarad bel\u0151le**. A rendszer viselked\xE9se att\xF3l f\xFCgg, melyik \xFAton \xE9rkezel.

\xD6k\xF6lszab\xE1ly: *ha valami el\xE9g fontos ahhoz, hogy megcsin\xE1ljuk, el\xE9g fontos ahhoz, hogy a use case-en kereszt\xFCl menjen.*

### 2. Sziv\xE1rg\xF3 core

A domaint az \xFCzlet hat\xE1rozza meg \u2013 nem az adatb\xE1zis, nem a fel\xFClet, \xE9s f\u0151leg nem egy k\xFCls\u0151 SDK. Jellegzetes sziv\xE1rg\xE1sok: a repository \`IQueryable\`-t ad vissza, \xE9s a prezent\xE1ci\xF3 \xE1ll\xEDtja \xF6ssze a sz\u0171r\xE9st \xE9s a projekci\xF3t; egy k\xFCls\u0151 k\xF6nyvt\xE1r DTO-j\xE1t adjuk vissza a handlerb\u0151l saj\xE1t modell helyett; egy entit\xE1son megjelenik egy \`List<IFormFile>\` property; a konstruktor \`DateTime.UtcNow\`-ot \xE1ll\xEDt be, amit\u0151l az id\u0151f\xFCgg\u0151 viselked\xE9s tesztelhetetlen (a \`TimeProvider\` a helyes megold\xE1s).

Ide tartozik a **f\xFCgg\u0151s\xE9gek tudatos megv\xE1laszt\xE1sa** is: minden NuGet, amit a core-ba engedsz, az architekt\xFAra r\xE9sz\xE9v\xE9 v\xE1lik. A k\xF6nyvt\xE1r megsz\u0171nhet, t\xF6rhet vagy licencet v\xE1lthat (ahogy az a MediatR-ral meg is t\xF6rt\xE9nt) \u2013 ilyenkor az eg\xE9sz alkalmaz\xE1s \xE9rintett. Nem az a c\xE9l, hogy mindent magad \xEDrj meg, hanem hogy minden core-f\xFCgg\u0151s\xE9g **tudatos d\xF6nt\xE9s** legyen: mihez k\xF6t\u0151dsz, milyen felt\xE9telez\xE9seket s\xFCtsz be, \xE9s le tudod-e cser\xE9lni, ha musz\xE1j.

### 3. Az infrastrukt\xFAra t\xFAl sokat tud

A szerz\u0151d\xE9s egyir\xE1ny\xFA: az infrastrukt\xFAra f\xFCgg a core-t\xF3l, ford\xEDtva soha. Ha az EF Core interceptor kezd \xFCzleti d\xF6nt\xE9st hozni \u2013 nem csak \`CreatedOn\`-t t\xF6lt, hanem st\xE1tuszt is \xE1ll\xEDt \u2013, akkor olyan felel\u0151ss\xE9g cs\xFAszott az adatr\xE9tegbe, ami az alkalmaz\xE1s\xE9.

### Ellenszerek

- **Architekt\xFAra tesztek** a r\xE9tegszab\xE1lyokra (l\xE1sd az "Architekt\xFAra tesztek" fejezetet) \u2013 automatikus visszajelz\xE9s arr\xF3l, amit a code review eln\xE9z.
- **Analiz\xE1torok \xE9s Roslyn-szab\xE1lyok** ford\xEDt\xE1si id\u0151ben; a csatol\xE1si metrik\xE1k k\xF6vet\xE9se a CI-ban.
- **ADR (Architecture Decision Record)** \u2013 n\xE9h\xE1ny markdown f\xE1jl a rep\xF3ban, d\xF6nt\xE9senk\xE9nt egy: a kontextus, a d\xF6nt\xE9s, az alternat\xEDv\xE1k \xE9s a k\xF6vetkezm\xE9nyek. Nem 50 oldalas dokumentum. Ett\u0151l lesz az architektur\xE1lis elv\xE1r\xE1s **l\xE1that\xF3 \xE9s fel\xFClvizsg\xE1lhat\xF3**, nem Slack-sz\xE1lakban \u0151rz\xF6tt t\xF6rzsi tud\xE1s.

\`\`\`markdown
# ADR-012: A prezent\xE1ci\xF3s r\xE9teg csak use case-en kereszt\xFCl h\xEDvhat alkalmaz\xE1slogik\xE1t

St\xE1tusz: elfogadva \u2013 2026-03-04
Kontextus: k\xE9t Azure Function k\xF6zvetlen\xFCl repositoryt h\xEDvott, \xEDgy kimaradtak a
pipeline behavior\xF6k (valid\xE1ci\xF3, logol\xE1s, metrika).
D\xF6nt\xE9s: minden prezent\xE1ci\xF3s bel\xE9p\xE9si pont use case-t (request + handler) h\xEDv.
Alternat\xEDv\xE1k: k\xF6zvetlen service-h\xEDv\xE1s egyszer\u0171 olvas\xE1sra \u2013 elvetve, mert
inkonzisztens viselked\xE9st okoz.
K\xF6vetkezm\xE9nyek: t\xF6bb oszt\xE1ly egyszer\u0171 olvas\xE1sn\xE1l is; cser\xE9be egys\xE9ges
kereszt-metszeti kezel\xE9s. Architekt\xFAra teszt k\xE9nyszer\xEDti ki.
\`\`\`

Ha valaki hat\xE1rt \xE1tl\xE9p\u0151 v\xE1ltoztat\xE1st javasol, az ADR alapj\xE1n fel lehet tenni a helyes k\xE9rd\xE9st: *"ez s\xE9rti az architektur\xE1lis sz\xE1nd\xE9kunkat, vagy itt az ideje fel\xFClvizsg\xE1lni azt a hat\xE1rt?"*

### K\xF6vetkezetesen, de nem mereven

A Clean Architecture eszk\xF6z, nem vall\xE1s. Nem a tisztas\xE1g a c\xE9l, hanem a **v\xE1ltoztathat\xF3s\xE1g meg\u0151rz\xE9se**. A csapatot nem a strukt\xFAra lass\xEDtja, hanem a **k\xF6vetkezetlens\xE9g**: ha minden feature saj\xE1t mint\xE1t k\xF6vet, hosszabb a betanul\xE1s, nehezebb a hibakeres\xE9s, kock\xE1zatosabb a refaktor. Ha viszont egy szab\xE1ly folyamatosan s\xFArl\xF3d\xE1st okoz, azt meg kell besz\xE9lni \xE9s m\xF3dos\xEDtani \u2013 nem megker\xFClni.

Mit ker\xFClj el: ne engedj "csak most az egyszer" kiv\xE9telt a r\xE9tegszab\xE1ly al\xF3l architekt\xFAra teszt \xE9s ADR n\xE9lk\xFCl; ne vezess be absztrakci\xF3t an\xE9lk\xFCl, hogy meg tudn\xE1d mondani, milyen v\xE1ltoz\xE1st rejt el; ne hagyd, hogy a hat\xE1rok betartat\xE1sa egyetlen ember feladata legyen \u2013 ez a szab\xE1ly \xE9s az ember ki\xE9g\xE9s\xE9hez is vezet.


## Szolg\xE1ltat\xE1s-dekompoz\xEDci\xF3 \u2013 a szolg\xE1ltat\xE1s helyes m\xE9rete https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/identify-microservice-boundaries {#szolgaltatas-dekompozicio-a-szolgaltatas-helyes-merete}

*Forr\xE1s: Trevoir Williams \u2013 Microservices Design Patterns in .NET, 2nd ed. (1., 2. \xE9s 8. fejezet).*

A "mikor NE microservice" k\xE9rd\xE9st a "Modular Monolith" fejezet t\xE1rgyalja. Ez a fejezet a k\xF6vetkez\u0151 l\xE9p\xE9sr\u0151l sz\xF3l: ha m\xE1r eld\u0151lt, hogy sz\xE9tbontunk, **hol menjen a v\xE1g\xE1s**. Ez a d\xF6nt\xE9s a legdr\xE1g\xE1bban visszavonhat\xF3 a rendszerben \u2013 egy rosszul megh\xFAzott hat\xE1r minden k\xE9s\u0151bbi fejleszt\xE9st megad\xF3ztat.

**A v\xE1g\xE1s alapja az \xFCzleti k\xE9pess\xE9g, nem a technikai r\xE9teg.** Nem "Adathozz\xE1f\xE9r\xE9s szolg\xE1ltat\xE1s" \xE9s "Valid\xE1ci\xF3s szolg\xE1ltat\xE1s", hanem *Foglal\xE1s*, *Sz\xE1ml\xE1z\xE1s*, *K\xE9szlet*. A DDD bounded context \xE9s a szolg\xE1ltat\xE1s hat\xE1ra a legt\xF6bb esetben egybeesik (l\xE1sd "Bounded Context" fejezet), az aggreg\xE1tum pedig soha nem eshet k\xE9t szolg\xE1ltat\xE1s k\xF6z\xE9 (l\xE1sd "Aggreg\xE1tum-hat\xE1rok" fejezet).

**Gyakorlati heurisztik\xE1k a hat\xE1r helyess\xE9g\xE9nek ellen\u0151rz\xE9s\xE9re:**

1. **Egy tipikus felhaszn\xE1l\xF3i m\u0171velet h\xE1ny szolg\xE1ltat\xE1st \xE9rint \xEDr\xE1sra?** Ha kett\u0151n\xE9l t\xF6bbet rendszeresen, a hat\xE1r rossz. Egy \xEDr\xE1s = egy aggreg\xE1tum = egy szolg\xE1ltat\xE1s lok\xE1lis tranzakci\xF3ja.
2. **Egy\xFCtt v\xE1ltoznak-e?** Ha k\xE9t szolg\xE1ltat\xE1st szinte mindig ugyanaz a jira-ticket m\xF3dos\xEDt, val\xF3j\xE1ban egy szolg\xE1ltat\xE1s. Ez a leger\u0151sebb jel az \xF6sszevon\xE1sra.
3. **K\xFCl\xF6n sk\xE1l\xE1z\xF3dnak-e, k\xFCl\xF6n a hibaprofiljuk?** Ha nem, a sz\xE9tv\xE1laszt\xE1snak nincs \xFCzemeltet\xE9si haszna, csak \xE1ra.
4. **Elb\xEDrja-e egy csapat?** \xD6k\xF6lszab\xE1ly: egy csapat 1\u20133 szolg\xE1ltat\xE1st birtokol v\xE9gpontt\xF3l v\xE9gpontig. Ha egy szolg\xE1ltat\xE1son h\xE1rom csapat dolgozik, nem szolg\xE1ltat\xE1s, hanem k\xF6z\xF6s k\xF3d.
5. **Meg\xE9rti-e egy \xFAj fejleszt\u0151 egy nap alatt?** A "helyes m\xE9ret" fels\u0151 hat\xE1ra a meg\xE9rthet\u0151s\xE9g, nem a sorok sz\xE1ma. A "min\xE9l kisebb, ann\xE1l jobb" t\xE9vhit \u2013 a nanoszolg\xE1ltat\xE1sok h\xE1l\xF3zati h\xEDv\xE1ss\xE1 alak\xEDtj\xE1k azt, ami met\xF3dush\xEDv\xE1s volt.

**A distributed monolith felismer\xE9se** \u2013 a leggyakoribb kudarcminta. Jelei: k\xF6z\xF6s adatb\xE1zis vagy k\xF6z\xF6s s\xE9ma; k\xF6z\xF6s "Shared.Domain" k\xF6nyvt\xE1r, ami minden szolg\xE1ltat\xE1sba be van hivatkozva (a szerz\u0151d\xE9seket tartalmaz\xF3 v\xE9kony \`Shared\` **esem\xE9nyek**-projekt rendben van, az \xFCzleti logik\xE1t tartalmaz\xF3 nem); szinkron h\xEDv\xE1si l\xE1nc, ahol A h\xEDvja B-t, ami h\xEDvja C-t, egy k\xE9r\xE9sen bel\xFCl; olyan release, ahol t\xF6bb szolg\xE1ltat\xE1st egyszerre kell kiadni. Ha ezek fenn\xE1llnak, a rendszer a mikroszolg\xE1ltat\xE1s minden k\xF6lts\xE9g\xE9t fizeti, de egyik el\u0151ny\xE9t sem kapja meg.

**A sz\xE9tbont\xE1s ir\xE1nya**: az aj\xE1nlott \xFAt a modul\xE1ris monolittal indul\xE1s, majd a modulhat\xE1rok ment\xE9n t\xF6rt\xE9n\u0151 kiemel\xE9s \u2013 akkor, amikor egy konkr\xE9t k\xE9nyszer (elt\xE9r\u0151 sk\xE1l\xE1z\xE1si ig\xE9ny, elt\xE9r\u0151 release-ciklus, csapatszervezet, elt\xE9r\u0151 megb\xEDzhat\xF3s\xE1gi k\xF6vetelm\xE9ny) ezt megk\xF6veteli. Legacy rendszern\xE9l ez a Strangler Fig minta (l\xE1sd az adott fejezetet).

**Az \xF6sszevon\xE1s legitim l\xE9p\xE9s.** K\xE9t szolg\xE1ltat\xE1s visszaolvaszt\xE1sa egybe nem kudarc, hanem a hat\xE1r korrekci\xF3ja. Min\xE9l el\u0151bb t\xF6rt\xE9nik, ann\xE1l olcs\xF3bb.

Mikor \xE9rdemes haszn\xE1lni: minden \xFAj szolg\xE1ltat\xE1s l\xE9trehoz\xE1sa el\u0151tt, \xE9s minden olyan alkalommal, amikor egy funkci\xF3 fejleszt\xE9se rendszeresen t\xF6bb szolg\xE1ltat\xE1s \xF6sszehangolt m\xF3dos\xEDt\xE1s\xE1t ig\xE9nyli.

Legjobb gyakorlatok: a hat\xE1rt \xFCzleti k\xE9pess\xE9g \xE9s bounded context ment\xE9n h\xFAzd meg; szolg\xE1ltat\xE1sonk\xE9nt k\xFCl\xF6n adatb\xE1zis (l\xE1sd "Adatb\xE1zis-strat\xE9gi\xE1k mikroszolg\xE1ltat\xE1sokn\xE1l"); szolg\xE1ltat\xE1sok k\xF6z\xF6tt kiz\xE1r\xF3lag publik\xE1lt szerz\u0151d\xE9s (esem\xE9ny vagy API), soha nem k\xF6z\xF6s t\xE1bla; a hat\xE1r mell\xE9 rendeld hozz\xE1 a csapat tulajdonjog\xE1t is; dokument\xE1ld a v\xE1g\xE1s ok\xE1t ADR-ben (l\xE1sd "Az architekt\xFAra er\xF3zi\xF3ja" fejezet).

Mit ker\xFClj el: ne bontsd sz\xE9t a rendszert technikai r\xE9tegek ment\xE9n; ne ind\xEDts z\xF6ldmez\u0151s projektet t\xEDz szolg\xE1ltat\xE1ssal, miel\u0151tt a dom\xE9nt meg\xE9rtetted; ne oszd meg a domain modellt szolg\xE1ltat\xE1sok k\xF6z\xF6tt k\xF6z\xF6s k\xF6nyvt\xE1rban; ne kezeld a szolg\xE1ltat\xE1s-hat\xE1rt v\xE9glegesnek.

\xD6sszefoglal\xE1s: a helyes m\xE9ret az, amit egy csapat birtokolni tud, ami \xF6n\xE1ll\xF3an kiadhat\xF3, \xE9s amiben egy tipikus \xFCzleti m\u0171velet egyetlen lok\xE1lis tranzakci\xF3val elv\xE9gezhet\u0151 \u2013 minden m\xE1s m\xE9ret vagy elosztott monolitot, vagy f\xF6l\xF6sleges h\xE1l\xF3zati forgalmat termel.

## Choreography-alap\xFA Saga MassTransittal \u2013 kompenz\xE1ci\xF3 esem\xE9nyl\xE1ncban https://learn.microsoft.com/azure/architecture/patterns/saga {#choreography-alapu-saga-masstransittal-kompenzacio-esemenylancban}

*Verzi\xF3: MassTransit 8.x: .NET 8+. A "Saga Orchestration" \xE9s a "MassTransit Saga State Machine" fejezetek az orchestr\xE1lt v\xE1ltozatot \xEDrj\xE1k le \u2013 ez a fejezet a koreograf\xE1lt megval\xF3s\xEDt\xE1s.*

Koreogr\xE1fi\xE1n\xE1l nincs k\xF6zponti koordin\xE1tor: minden szolg\xE1ltat\xE1s esem\xE9nyre reag\xE1l, elv\xE9gzi a saj\xE1t munk\xE1j\xE1t, \xE9s publik\xE1l egy \xFAjabb esem\xE9nyt. A folyamat "\xE1llapota" nem egy helyen \xE9l, hanem az esem\xE9nyek l\xE1nc\xE1ban.

**K\xF6z\xF6s szerz\u0151d\xE9s-projekt.** Az esem\xE9nyek t\xEDpusai egy v\xE9kony, \xFCzleti logik\xE1t nem tartalmaz\xF3 \`Shared\` k\xF6nyvt\xE1rban \xE9lnek, amelyre minden r\xE9sztvev\u0151 hivatkozik. Minden esem\xE9nyben ott a \`CorrelationId\`, amely a teljes sag\xE1t \xF6sszef\u0171zi:

\`\`\`csharp
public record AppointmentCreated(Guid CorrelationId, Guid AppointmentId, Guid PatientId, DateTime AppointmentDate);
public record PaymentProcessed(Guid CorrelationId, Guid AppointmentId, decimal Amount, bool Success);
\`\`\`

**Consumer a fizet\xE9si szolg\xE1ltat\xE1sban** \u2013 a foglal\xE1s esem\xE9ny\xE9re reag\xE1l, \xE9s a saj\xE1t eredm\xE9ny\xE9t publik\xE1lja:

\`\`\`csharp
public class AppointmentCreatedConsumer(IPaymentGateway gateway) : IConsumer<AppointmentCreated>
{
    public async Task Consume(ConsumeContext<AppointmentCreated> context)
    {
        var msg = context.Message;
        var result = await gateway.ChargeAsync(msg.PatientId, 100.00m, context.CancellationToken);
        await context.Publish(new PaymentProcessed(msg.CorrelationId, msg.AppointmentId, 100.00m, result.Success));
    }
}
\`\`\`

**Kompenz\xE1ci\xF3 a foglal\xE1si szolg\xE1ltat\xE1sban** \u2013 a sikertelen fizet\xE9s visszag\xF6rgeti a foglal\xE1st:

\`\`\`csharp
public class PaymentProcessedConsumer(AppointmentContext db) : IConsumer<PaymentProcessed>
{
    public async Task Consume(ConsumeContext<PaymentProcessed> context)
    {
        if (context.Message.Success) return;

        var appointment = await db.Appointments.FindAsync(context.Message.AppointmentId);
        if (appointment is null || appointment.IsCanceled) return;   // idempotens

        appointment.IsCanceled = true;                                // kompenz\xE1ci\xF3, nem t\xF6rl\xE9s
        await db.SaveChangesAsync(context.CancellationToken);
    }
}
\`\`\`

\`\`\`csharp
builder.Services.AddMassTransit(mt =>
{
    mt.AddConsumer<AppointmentCreatedConsumer>();
    mt.UsingRabbitMq((ctx, cfg) =>
    {
        cfg.Host("rabbitmq", "/", h => { h.Username(user); h.Password(pass); });
        cfg.ReceiveEndpoint("payment-service-appointment-created", e =>
        {
            e.UseMessageRetry(r => r.Exponential(5, TimeSpan.FromSeconds(1), TimeSpan.FromMinutes(2), TimeSpan.FromSeconds(2)));
            e.ConfigureConsumer<AppointmentCreatedConsumer>(ctx);
        });
    });
});
\`\`\`

**N\xE9gy dolog, ami \xE9les rendszerben elengedhetetlen:**

1. **A kompenz\xE1ci\xF3 nem t\xF6rl\xE9s, hanem \xFCzleti ellenl\xE9p\xE9s.** A fizet\xE9s nem elt\u0171nik, hanem visszat\xE9r\xEDt\xE9sk\xE9nt r\xF6gz\xFCl; a foglal\xE1s nem t\xF6rl\u0151dik, hanem lemondott \xE1llapotba ker\xFCl. A rollback minden szolg\xE1ltat\xE1sban m\xE1shogy n\xE9z ki, \xE9s nem is felt\xE9tlen\xFCl \xE9rint minden szolg\xE1ltat\xE1st (a regisztr\xE1ci\xF3s adatot p\xE9ld\xE1ul sz\xE1nd\xE9kosan megtartjuk).
2. **A kompenz\xE1ci\xF3 maga is elbukhat.** R\xE9tegzett v\xE9delem kell: exponenci\xE1lis backoff-fal \xFAjrapr\xF3b\xE1lkoz\xE1s, ut\xE1na dead letter queue riaszt\xE1ssal, v\xE9g\xFCl egy **watchdog**, amely a nyitott sag\xE1kat figyeli, \xE9s SLA-n t\xFAl (pl. 30 perc p\xE9nz\xFCgyi elsz\xE1mol\xE1sn\xE1l) emberi feldolgoz\xE1si sorba emeli a \`CorrelationId\`-val.
3. **Minden consumer idempotens**, a kompenz\xE1l\xF3k is. A duplik\xE1lt k\xE9zbes\xEDt\xE9s nem hiba, hanem tervez\xE9si premissza: deduplik\xE1ci\xF3s kulcs (\`CorrelationId\` + esem\xE9nyt\xEDpus) az adott szolg\xE1ltat\xE1s adatb\xE1zis\xE1ban, k\xFCls\u0151 fizet\xE9si \xE1tj\xE1r\xF3n\xE1l pedig ezen fel\xFCl gateway-oldali idempotency key (l\xE1sd "K\xE9zbes\xEDt\xE9si szemantika \xE9s idempotens consumer" fejezet).
4. **Az esem\xE9ny publik\xE1l\xE1sa \xE9s az adatb\xE1zis-\xEDr\xE1s egy tranzakci\xF3ban** \u2013 Outbox n\xE9lk\xFCl a folyamat elveszhet \xF6sszeoml\xE1skor (l\xE1sd "Outbox Pattern"). A gyakorlatban az Outbox \xE9s a watchdog egy\xFCtt adja a legal\xE1bb-egyszeri k\xE9zbes\xEDt\xE9st \xE9s az \xE9letk\xE9pess\xE9g-figyel\xE9st.

Mikor \xE9rdemes haszn\xE1lni: r\xF6vid, 2\u20134 l\xE9p\xE9ses folyamatn\xE1l, ahol a l\xE9p\xE9sek sorrendje stabil \xE9s a r\xE9sztvev\u0151k sz\xE1ma kicsi; ahol a szolg\xE1ltat\xE1sok k\xF6z\xF6tti laza csatol\xE1s fontosabb, mint a folyamat egy helyen val\xF3 \xE1tl\xE1that\xF3s\xE1ga.

Legjobb gyakorlatok: a \`CorrelationId\` v\xE9gigmenjen minden esem\xE9nyen \xE9s minden napl\xF3soron (l\xE1sd "Correlation ID" fejezet); az esem\xE9nynevek m\xFAlt idej\u0171ek \xE9s \xFCzleti nyelv\u0171ek legyenek; a saga \xE1llapota legyen lek\xE9rdezhet\u0151 valahonnan (watchdog t\xE1bla), k\xFCl\xF6nben hibakeres\xE9s k\xF6zben vakon \xE1llsz.

Mit ker\xFClj el: ne haszn\xE1lj koreogr\xE1fi\xE1t 5-n\xE9l t\xF6bb l\xE9p\xE9sn\xE9l vagy el\xE1gaz\xF3 folyamatn\xE1l \u2013 ott az orchestr\xE1ci\xF3 \xE1ttekinthet\u0151bb (a l\xE9p\xE9sek sz\xE1m\xE1val a "ki mire v\xE1r" k\xE9rd\xE9s exponenci\xE1lisan nehezedik); ne keverd a k\xE9t megk\xF6zel\xEDt\xE9st ugyanabban a folyamatban; ne felt\xE9telezd, hogy a kompenz\xE1ci\xF3 mindig siker\xFCl.

\xD6sszefoglal\xE1s: a koreogr\xE1fia laza csatol\xE1st ad, cser\xE9be a folyamat eg\xE9sze sehol nincs le\xEDrva \u2013 ezt idempotens consumerekkel, Outboxszal, dead letter kezel\xE9ssel \xE9s egy \xE1llapotfigyel\u0151 watchdoggal kell ellens\xFAlyozni.

## CAP-t\xE9tel \xE9s konzisztencia-modellek a gyakorlatban {#cap-tetel-es-konzisztencia-modellek-a-gyakorlatban}

*Fogalmi h\xE1tt\xE9r az "Eventual consistency \xE9s az elosztott tranzakci\xF3k val\xF3s\xE1ga" fejezethez.*

A **CAP-t\xE9tel** szerint egy elosztott adatt\xE1rol\xF3 a *konzisztencia* (Consistency), *rendelkez\xE9sre \xE1ll\xE1s* (Availability) \xE9s *particion\xE1l\xE1s-t\u0171r\xE9s* (Partition tolerance) k\xF6z\xFCl egyszerre legfeljebb kett\u0151t garant\xE1lhat. H\xE1l\xF3zati particion\xE1l\xE1s (megszakadt kapcsolat k\xE9t csom\xF3pont k\xF6z\xF6tt) \xE9les rendszerben el\u0151bb-ut\xF3bb **biztosan bek\xF6vetkezik**, ez\xE9rt a P nem v\xE1laszt\xE1s k\xE9rd\xE9se. A val\xF3di d\xF6nt\xE9s teh\xE1t mindig ugyanaz: **particion\xE1l\xE1s alatt konzisztenci\xE1t vagy rendelkez\xE9sre \xE1ll\xE1st \xE1ldozunk-e fel.**

- **CP** \u2013 particion\xE1l\xE1s alatt a rendszer ink\xE1bb hib\xE1t ad vissza, mintsem elavult adatot szolg\xE1ljon ki. Ide tartozik a legt\xF6bb rel\xE1ci\xF3s adatb\xE1zis szinkron replik\xE1val, a ZooKeeper, az etcd. P\xE9nz\xFCgyi elsz\xE1mol\xE1s, k\xE9szletfoglal\xE1s, jogosults\xE1g-ellen\u0151rz\xE9s.
- **AP** \u2013 particion\xE1l\xE1s alatt a rendszer v\xE1laszol, ak\xE1r elavult adattal, \xE9s k\xE9s\u0151bb konverg\xE1l. Ide tartozik a Cassandra, a DynamoDB alapbe\xE1ll\xEDt\xE1ssal, a legt\xF6bb cache. Term\xE9kkatal\xF3gus, aj\xE1nl\xE1sok, aktivit\xE1si h\xEDrfolyam, olvas\xE1si modellek.

**A PACELC kieg\xE9sz\xEDt\xE9s a napi munk\xE1ban hasznosabb**: *ha Part\xEDci\xF3 (P), akkor A vagy C; egy\xE9bk\xE9nt (E, Else) latencia (L) vagy konzisztencia (C)*. Vagyis a kompromisszum norm\xE1l m\u0171k\xF6d\xE9s k\xF6zben is fenn\xE1ll: a szinkron replik\xE1ci\xF3 konzisztensebb, de lassabb. A gyakorlatban a mikroszolg\xE1ltat\xE1sok t\xF6bbs\xE9ge nem particion\xE1l\xE1s miatt, hanem **latencia miatt** v\xE1laszt gyeng\xE9bb konzisztenci\xE1t.

**Konzisztencia-modellek, amelyekkel .NET-ben t\xE9nylegesen tal\xE1lkozol:**

| Modell | Mit garant\xE1l | Tipikus el\u0151fordul\xE1s |
|---|---|---|
| Strong / linearizable | minden olvas\xE1s a legutols\xF3 \xEDr\xE1st l\xE1tja | egy szolg\xE1ltat\xE1s saj\xE1t SQL adatb\xE1zisa, egyetlen tranzakci\xF3ban |
| Read-your-writes | a saj\xE1t \xEDr\xE1somat mindig l\xE1tom | ugyanaz a session az els\u0151dleges p\xE9ld\xE1nyra ir\xE1ny\xEDtva |
| Monotonic reads | nem "megyek vissza az id\u0151ben" | sticky session ugyanahhoz a replik\xE1hoz |
| Eventual | el\u0151bb-ut\xF3bb konverg\xE1l | read replica, elosztott cache, ECST-vel \xE9p\xEDtett olvas\xE1si modell |

**Mit jelent ez a k\xF3dban:** ha egy m\u0171velet ut\xE1n a felhaszn\xE1l\xF3 azonnal a saj\xE1t eredm\xE9ny\xE9t keresi (rendel\xE9s lead\xE1sa \u2192 rendel\xE9s lista), a v\xE1laszban add vissza az adatot, vagy a k\xE9r\xE9st ir\xE1ny\xEDtsd az \xEDr\xE1si oldalra \u2013 ne az aszinkron friss\xFCl\u0151 olvas\xE1si modellb\u0151l olvass vissza. A read replik\xE1r\xF3l olvas\xE1s be\xE1ll\xEDt\xE1sa:

\`\`\`csharp
// olvas\xE1sra replika, \xEDr\xE1sra az els\u0151dleges \u2013 csak ott, ahol a k\xE9s\xE9s megengedett
services.AddDbContext<CatalogReadContext>(o => o.UseSqlServer(cfg.GetConnectionString("Replica")));
services.AddDbContext<CatalogWriteContext>(o => o.UseSqlServer(cfg.GetConnectionString("Primary")));
\`\`\`

Mikor \xE9rdemes haszn\xE1lni: minden olyan tervez\xE9si vit\xE1n\xE1l, ahol felmer\xFCl, hogy "de akkor a m\xE1sik szolg\xE1ltat\xE1s elavult adatot l\xE1t" \u2013 a v\xE1lasz nem az elosztott tranzakci\xF3, hanem a tudatosan megv\xE1lasztott konzisztencia-modell m\u0171veletenk\xE9nt.

Legjobb gyakorlatok: a konzisztencia-ig\xE9nyt **\xFCzleti m\u0171veletenk\xE9nt** d\xF6ntsd el, ne rendszerszinten; a p\xE9nzt \xE9s a k\xE9szletet \xE9rint\u0151 invari\xE1nsokat tartsd egy aggreg\xE1tumon bel\xFCl, ahol lok\xE1lis ACID tranzakci\xF3 el\xE9g; az elavul\xE1s m\xE9rt\xE9k\xE9t (pl. "legfeljebb 5 m\xE1sodperc") \xEDrd le a szerz\u0151d\xE9sben \xE9s m\xE9rd is meg; a fel\xFCleten jelezd, ha az adat feldolgoz\xE1s alatt van, ahelyett hogy azonnali konzisztenci\xE1t sz\xEDnleln\xE9l.

Mit ker\xFClj el: ne haszn\xE1lj 2PC-t / elosztott tranzakci\xF3t mikroszolg\xE1ltat\xE1sok k\xF6z\xF6tt (l\xE1sd "Eventual consistency" fejezet); ne olvass vissza aszinkron friss\xFCl\u0151 projekci\xF3b\xF3l k\xF6zvetlen\xFCl \xEDr\xE1s ut\xE1n; ne felt\xE9telezd, hogy az "eventual" milliszekundumot jelent \u2013 terhel\xE9s alatt percek is lehetnek.

\xD6sszefoglal\xE1s: a particion\xE1l\xE1s-t\u0171r\xE9s adott, ez\xE9rt minden elosztott d\xF6nt\xE9s arr\xF3l sz\xF3l, hogy az adott m\u0171veletn\xE9l a frissess\xE9g vagy a v\xE1laszk\xE9szs\xE9g fontosabb \u2013 \xE9s ez m\u0171veletenk\xE9nt m\xE1s lehet ugyanabban a rendszerben.

## Duende IdentityServer \u2013 saj\xE1t token-szolg\xE1ltat\xF3 \xE9s szolg\xE1ltat\xE1sk\xF6zi hiteles\xEDt\xE9s https://learn.microsoft.com/aspnet/core/security/authentication/identity {#duende-identityserver-sajat-token-szolgaltato-es-szolgaltataskozi-hitelesites}

*Verzi\xF3: Duende IdentityServer 7.x: .NET 8+; kereskedelmi licenc (bizonyos bev\xE9teli hat\xE1r alatt ingyenes). A "Keycloak" \xE9s a "JWT, OAuth, OpenId Connect" fejezetek a ny\xEDlt forr\xE1sk\xF3d\xFA, illetve a protokoll-szint\u0171 alternat\xEDv\xE1t \xEDrj\xE1k le.*

Mikroszolg\xE1ltat\xE1sokn\xE1l a hiteles\xEDt\xE9st egyetlen, dedik\xE1lt **identit\xE1sszolg\xE1ltat\xF3 (IdP)** v\xE9gzi; a szolg\xE1ltat\xE1sok csak **valid\xE1lj\xE1k** a tokent, felhaszn\xE1l\xF3t nem kezelnek. A .NET \xF6kosziszt\xE9m\xE1ban a h\xE1rom tipikus v\xE1laszt\xE1s: Duende IdentityServer (saj\xE1t hosztol\xE1s\xFA, .NET-ben, teljesen testreszabhat\xF3), Keycloak (ny\xEDlt forr\xE1sk\xF3d\xFA, kont\xE9nerben), vagy felh\u0151-szolg\xE1ltat\xE1s (Entra ID / Entra External ID, Auth0). Saj\xE1t IdP-t akkor \xE9rdemes hosztolni, ha az identit\xE1s- \xE9s jogosults\xE1gmodell szorosan a dom\xE9nhez k\xF6t\xF6tt, vagy ha adatv\xE9delmi okb\xF3l nem hagyhatja el a felhaszn\xE1l\xF3i adat a rendszert.

**Token-szolg\xE1ltat\xF3 konfigur\xE1ci\xF3ja** \u2013 a kliensek \xE9s az API-er\u0151forr\xE1sok (scope-ok) deklarat\xEDvan:

\`\`\`csharp
builder.Services.AddIdentityServer()
    .AddInMemoryApiScopes([
        new ApiScope("appointments.read"),
        new ApiScope("appointments.write"),
        new ApiScope("payments.write")
    ])
    .AddInMemoryClients([
        // 1) felhaszn\xE1l\xF3i bejelentkez\xE9s (BFF / SPA) \u2013 authorization code + PKCE
        new Client
        {
            ClientId = "web-bff",
            AllowedGrantTypes = GrantTypes.Code,
            RequirePkce = true,
            RedirectUris = { "https://app.example.com/signin-oidc" },
            AllowedScopes = { "openid", "profile", "appointments.read", "appointments.write" }
        },
        // 2) szolg\xE1ltat\xE1sk\xF6zi h\xEDv\xE1s \u2013 client credentials, nincs felhaszn\xE1l\xF3
        new Client
        {
            ClientId = "payments-service",
            AllowedGrantTypes = GrantTypes.ClientCredentials,
            ClientSecrets = { new Secret(secretFromVault.Sha256()) },
            AllowedScopes = { "appointments.read" }
        }
    ])
    .AddAspNetIdentity<ApplicationUser>();
\`\`\`

**Az API oldal\xE1n csak valid\xE1ci\xF3 van** \u2013 a szolg\xE1ltat\xE1s nem tud jelsz\xF3r\xF3l, felhaszn\xE1l\xF3t\xE1bl\xE1t nem l\xE1t:

\`\`\`csharp
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", o =>
    {
        o.Authority = "https://identity.example.com";   // innen t\xF6lti a kulcsokat (JWKS)
        o.TokenValidationParameters = new() { ValidateAudience = true, ValidAudiences = ["appointments-api"] };
    });

builder.Services.AddAuthorization(o =>
    o.AddPolicy("CanWriteAppointments", p => p.RequireClaim("scope", "appointments.write")));
\`\`\`

**Szolg\xE1ltat\xE1sk\xF6zi token beszerz\xE9se** \u2013 k\xE9zzel \xEDrt token-cache helyett a Duende \`AccessTokenManagement\` csomagja kezeli a lej\xE1ratot \xE9s a meg\xFAj\xEDt\xE1st:

\`\`\`csharp
builder.Services.AddClientCredentialsTokenManagement()
    .AddClient("appointments", c =>
    {
        c.TokenEndpoint = "https://identity.example.com/connect/token";
        c.ClientId = "payments-service";
        c.ClientSecret = secretFromVault;
        c.Scope = "appointments.read";
    });

builder.Services.AddClientCredentialsHttpClient("appointments-api", "appointments",
    c => c.BaseAddress = new Uri("https://appointments-api/"));
\`\`\`

**Gateway \xE9s token-propag\xE1ci\xF3**: a gateway (YARP/Ocelot) valid\xE1lja a tokent a peremen, \xE9s **tov\xE1bbadja** a downstream szolg\xE1ltat\xE1snak \u2013 ott \xFAjra valid\xE1lni kell (zero trust: a h\xE1l\xF3zat belseje sem megb\xEDzhat\xF3, l\xE1sd "Mikroszolg\xE1ltat\xE1sok biztons\xE1ga" fejezet). Felhaszn\xE1l\xF3i kontextus tov\xE1bbad\xE1s\xE1hoz vagy a felhaszn\xE1l\xF3i tokent propag\xE1ljuk, vagy **token exchange**-dzsel cser\xE9l\xFCnk sz\u0171kebb hat\xF3k\xF6r\u0171 tokenre; a client credentials token viszont nem hordoz felhaszn\xE1l\xF3t, \xEDgy audit\xE1l\xE1shoz k\xFCl\xF6n kell \xE1tadni az eredeti \`sub\`-ot.

Mikor \xE9rdemes haszn\xE1lni: ha t\xF6bb kliens (web, mobil, partner API) \xE9s t\xF6bb szolg\xE1ltat\xE1s osztozik egy identit\xE1son; ha szolg\xE1ltat\xE1sk\xF6zi h\xEDv\xE1sokat is hiteles\xEDteni kell; ha a felhaszn\xE1l\xF3i adat nem ker\xFClhet k\xFCls\u0151 szolg\xE1ltat\xF3hoz.

Legjobb gyakorlatok: r\xF6vid \xE9lettartam\xFA access token (5\u201315 perc) + refresh token; scope-ok \xFCzleti m\u0171veletenk\xE9nt, ne "api.full"; a titkokat Key Vaultb\xF3l vagy managed identityvel (l\xE1sd "Konfigur\xE1ci\xF3, titokkezel\xE9s"); al\xE1\xEDr\xF3 kulcs rot\xE1l\xE1sa \xE9s a JWKS gyors\xEDt\xF3t\xE1raz\xE1sa; a token valid\xE1l\xE1sa minden szolg\xE1ltat\xE1sban, a gateway ellen\xE9re is.

Mit ker\xFClj el: ne \xEDrj saj\xE1t token-ki\xE1ll\xEDt\xF3t \xE9s ne valid\xE1lj k\xE9zzel JWT-t; ne t\xE1rolj access tokent b\xF6ng\xE9sz\u0151ben el\xE9rhet\u0151 helyen (BFF + HttpOnly s\xFCti val\xF3 erre); ne engedj hossz\xFA \xE9lettartam\xFA, mindenre jogos\xEDt\xF3 tokent szolg\xE1ltat\xE1sok k\xF6z\xF6tt; ne duplik\xE1ld az autoriz\xE1ci\xF3s szab\xE1lyokat a gatewayben \xE9s a szolg\xE1ltat\xE1sban elt\xE9r\u0151 m\xF3don.

\xD6sszefoglal\xE1s: egy k\xF6zponti IdP \xE1ll\xEDtja ki a tokeneket, a szolg\xE1ltat\xE1sok csak valid\xE1lnak; a felhaszn\xE1l\xF3i folyamathoz authorization code + PKCE, a szolg\xE1ltat\xE1sk\xF6zi h\xEDv\xE1shoz client credentials val\xF3, kezelt token-cache-sel.

## \xC9rz\xE9keny adatok a napl\xF3ban \u2013 maszkol\xE1s \xE9s PII-kezel\xE9s https://learn.microsoft.com/dotnet/core/extensions/logging {#erzekeny-adatok-a-naploban-maszkolas-es-pii-kezeles}

*Verzi\xF3: Serilog 4.x; \`Serilog.Enrichers.Sensitive\` a tulajdons\xE1g-szint\u0171 maszkol\xE1shoz. A "Struktur\xE1lt logol\xE1s \u2013 ILogger \xE9s Serilog" fejezet a napl\xF3z\xE1s alapjait t\xE1rgyalja.*

A napl\xF3 a leggyakoribb, \xE9szrev\xE9tlen adatsziv\xE1rg\xE1si csatorna: a log-aggreg\xE1tor (Seq, ELK, Application Insights) sokkal sz\xE9lesebb k\xF6rben el\xE9rhet\u0151, mint az \xE9les adatb\xE1zis, \xE9s a meg\u0151rz\xE9si id\u0151 is hosszabb. Egy kisziv\xE1rgott jelsz\xF3 vagy k\xE1rtyasz\xE1m a napl\xF3ban ugyanolyan incidens, mint az adatb\xE1zisb\xF3l.

**Ami soha nem ker\xFClhet napl\xF3ba**: jelsz\xF3, token, refresh token, API-kulcs, connection string, teljes k\xE1rtyasz\xE1m \xE9s CVV, eg\xE9szs\xE9g\xFCgyi adat, szem\xE9lyi azonos\xEDt\xF3. **Ami maszkolva ker\xFClhet be**: e-mail, telefonsz\xE1m, n\xE9v, c\xEDm, sz\xE1mlasz\xE1m. **Ami szabadon napl\xF3zhat\xF3**: technikai azonos\xEDt\xF3k (\`UserId\`, \`OrderId\`, \`CorrelationId\`) \u2013 ezekkel a hibakeres\xE9s elv\xE9gezhet\u0151, \xE9s \xF6nmagukban nem azonos\xEDtanak szem\xE9lyt.

**Tulajdons\xE1g-alap\xFA maszkol\xE1s be\xE1ll\xEDt\xE1sa:**

\`\`\`csharp
builder.Host.UseSerilog((context, config) =>
{
    config.ReadFrom.Configuration(context.Configuration)
          .Enrich.WithSensitiveDataMasking(options =>
          {
              options.MaskValue = "***MASKED***";
              if (context.HostingEnvironment.IsDevelopment())
                  options.ExcludeProperties.Add("email");        // fejleszt\xE9sben a hibakeres\xE9s fontosabb
              else
                  options.MaskProperties.Add(new MaskProperty { Name = "fullname" });
          });
});
\`\`\`

A csomag be\xE9p\xEDtett szab\xE1lyai a tipikus PII-mez\u0151ket (pl. e-mail) automatikusan felismerik \xE9s kicser\xE9lik; a t\xF6bbit tulajdons\xE1gn\xE9v alapj\xE1n kell felvenni. Az eredm\xE9ny:

\`\`\`text
[Information] User authenticated: 12345, Email: ***MASKED***, Name: ***MASKED***
\`\`\`

**Ami a maszkol\xE1sn\xE1l is fontosabb \u2013 a struktur\xE1lt napl\xF3z\xE1s fegyelme:**

\`\`\`csharp
// ROSSZ: a teljes objektum ki\xEDr\xE1sa, minden mez\u0151j\xE9vel egy\xFCtt
logger.LogInformation("Payment request: {@Request}", request);

// J\xD3: csak az azonos\xEDt\xF3k \xE9s a nem \xE9rz\xE9keny mez\u0151k
logger.LogInformation("Payment {PaymentId} for order {OrderId}, amount {Amount} {Currency}",
    paymentId, orderId, amount, currency);
\`\`\`

A \`{@Object}\` destruktur\xE1l\xE1s a legvesz\xE9lyesebb szerkezet: egy j\xF6v\u0151beli mez\u0151 hozz\xE1ad\xE1sa csendben \xFAj PII-t tesz a napl\xF3ba. Ahol m\xE9gis kell, adj \`Destructure.ByTransforming<T>()\` szab\xE1lyt, amely explicit feh\xE9rlist\xE1t ad meg. Ugyanez vonatkozik a glob\xE1lis kiv\xE9telkezel\u0151re: a kiv\xE9tel \xFCzenete \xE9s a k\xE9r\xE9s t\xF6rzse gyakran tartalmaz \xE9rz\xE9keny adatot \u2013 a v\xE1laszban ProblemDetails megy, a napl\xF3ba pedig a sz\u0171rt v\xE1ltozat (l\xE1sd "Enterprise szint\u0171 glob\xE1lis hibakezel\xE9s").

**Szint \xE9s k\xF6rnyezet.** \xC9les k\xF6rnyezetben \`Default: Error\` vagy \`Warning\` a keretrendszeri n\xE9vterekre, \`Information\` az alkalmaz\xE1s \xE9letciklus-esem\xE9nyeire; fejleszt\xE9sben \`Information\`/\`Verbose\` a saj\xE1t n\xE9vt\xE9rre. Ez a be\xE1ll\xEDt\xE1s \`appsettings.json\`-b\xF3l j\xF6n, ez\xE9rt k\xF3dm\xF3dos\xEDt\xE1s n\xE9lk\xFCl v\xE1ltoztathat\xF3:

\`\`\`json
"Serilog": {
  "MinimumLevel": {
    "Default": "Error",
    "Override": {
      "Microsoft": "Warning",
      "Microsoft.EntityFrameworkCore": "Warning",
      "Microsoft.Hosting.Lifetime": "Information",
      "Orders.Api": "Information"
    }
  }
}
\`\`\`

Az EF Core k\xFCl\xF6n figyelmet \xE9rdemel: a \`EnableSensitiveDataLogging()\` a param\xE9ter\xE9rt\xE9keket is a napl\xF3ba \xEDrja \u2013 kiz\xE1r\xF3lag fejleszt\xE9sben, felt\xE9telesen kapcsolhat\xF3 be.

Mikor \xE9rdemes haszn\xE1lni: minden olyan szolg\xE1ltat\xE1sban, amely szem\xE9lyes, p\xE9nz\xFCgyi vagy eg\xE9szs\xE9g\xFCgyi adatot kezel \u2013 teh\xE1t gyakorlatilag mindenhol, ahol felhaszn\xE1l\xF3 van.

Legjobb gyakorlatok: a maszkol\xE1s legyen alap\xE9rtelmez\xE9s, a l\xE1that\xF3s\xE1g a kiv\xE9tel; a napl\xF3zand\xF3 mez\u0151ket feh\xE9rlist\xE1zd, ne feketelist\xE1zd; a \`CorrelationId\` mindig menjen be, hogy maszkolt napl\xF3b\xF3l is nyomon k\xF6vethet\u0151 legyen a folyamat; a napl\xF3t\xE1rol\xF3ra is legyen hozz\xE1f\xE9r\xE9s-kezel\xE9s \xE9s meg\u0151rz\xE9si id\u0151 (GDPR t\xF6rl\xE9si ig\xE9ny a napl\xF3ra is vonatkozik); a maszkol\xE1st teszttel is ellen\u0151rizd.

Mit ker\xFClj el: ne logold a teljes HTTP k\xE9r\xE9s/v\xE1lasz t\xF6rzset; ne \xEDrj ki teljes konfigur\xE1ci\xF3t indul\xE1skor; ne hagyd bekapcsolva a \`EnableSensitiveDataLogging\`-ot \xE9les k\xF6rnyezetben; ne b\xEDzd a maszkol\xE1st kiz\xE1r\xF3lag a be\xE9p\xEDtett szab\xE1lyokra \u2013 a saj\xE1t domain-mez\u0151idet neked kell felvenned.

\xD6sszefoglal\xE1s: a napl\xF3ba sz\xE1nt adatot ugyanolyan tudatosan kell megv\xE1lasztani, mint az API v\xE1lasz\xE1t \u2013 azonos\xEDt\xF3k igen, szem\xE9lyes adat maszkolva vagy sehogy, \xE9s a d\xF6nt\xE9s konfigur\xE1ci\xF3b\xF3l, k\xF6rnyezetenk\xE9nt \xE1ll\xEDthat\xF3 legyen.

## NSubstitute, FluentAssertions \xE9s AutoFixture \u2013 teszt-eszk\xF6zk\xE9szlet a Moq mellett https://learn.microsoft.com/dotnet/core/testing/unit-testing-best-practices {#nsubstitute-fluentassertions-es-autofixture-teszt-eszkozkeszlet-a-moq-mellett}

*Verzi\xF3: NSubstitute 5.x, AutoFixture 4.x, FluentAssertions 7.x (a 8-as verzi\xF3t\xF3l kereskedelmi licenc \u2013 alternat\xEDva: Shouldly vagy a be\xE9p\xEDtett \`Assert\`). A "Unit Testing \u2013 Mocking Moq-kal" fejezet a Moq-alap\xFA megk\xF6zel\xEDt\xE9st \xEDrja le.*

A Moq mellett az \`ardalis\`/Clean Architecture referenciaprojektek \xE9s a legt\xF6bb \xFAjabb .NET k\xF3db\xE1zis az **NSubstitute**-ot haszn\xE1lja. Nem tud t\xF6bbet, de a szintaxisa lambdamentes \xE9s j\xF3val olvashat\xF3bb, ami hossz\xFA t\xE1von a tesztek karbantarthat\xF3s\xE1g\xE1n l\xE1tszik.

\`\`\`csharp
// NSubstitute
var repo = Substitute.For<IOrderRepository>();
repo.GetByIdAsync(orderId, Arg.Any<CancellationToken>()).Returns(order);

var sut = new ProcessPaymentHandler(repo, gateway);
await sut.Handle(command, CancellationToken.None);

await repo.Received(1).SaveAsync(Arg.Is<Order>(o => o.Status == OrderStatus.Paid), Arg.Any<CancellationToken>());
await gateway.DidNotReceive().RefundAsync(Arg.Any<Guid>(), Arg.Any<CancellationToken>());
\`\`\`

Megfelel\xE9sek Moq-r\xF3l \xE9rkez\u0151knek: \`new Mock<T>()\` \u2192 \`Substitute.For<T>()\`; \`Setup(...).ReturnsAsync(x)\` \u2192 \`.Returns(x)\`; \`It.IsAny<T>()\` \u2192 \`Arg.Any<T>()\`; \`Verify(..., Times.Once)\` \u2192 \`Received(1)\`; \`.Object\` nincs, a substitute maga a p\xE9ld\xE1ny. Kiv\xE9tel dob\xE1sa: \`.Returns(_ => throw new TimeoutException())\`, void met\xF3dusn\xE1l \`repo.When(r => r.Delete(id)).Do(_ => throw new ...)\`.

**FluentAssertions** \u2013 az assert olvashat\xF3 \xE9s a hiba\xFCzenete \xF6nmag\xE1ban elmondja, mi romlott el:

\`\`\`csharp
result.Should().NotBeNull();
result.Status.Should().Be(OrderStatus.Paid);
result.Lines.Should().HaveCount(3).And.OnlyContain(l => l.Quantity > 0);
await act.Should().ThrowAsync<InsufficientStockException>().WithMessage("*SKU-123*");
order.Should().BeEquivalentTo(expected, o => o.Excluding(x => x.UpdatedAt));  // m\xE9ly\xF6sszehasonl\xEDt\xE1s
\`\`\`

A \`BeEquivalentTo\` a leghasznosabb: strukt\xFAra szerint hasonl\xEDt, nem referencia szerint, \xE9s kiz\xE1rhat\xF3 bel\u0151le a nem determinisztikus mez\u0151 (id\u0151b\xE9lyeg, gener\xE1lt azonos\xEDt\xF3).

**AutoFixture** \u2013 a teszt zaj\xE1nak, az "arrange" szakasz fel\xE9nek elt\xFCntet\xE9se. Csak az sz\xE1m\xEDt, ami a teszt szempontj\xE1b\xF3l l\xE9nyeges; a t\xF6bbi mez\u0151t a fixture t\xF6lti ki:

\`\`\`csharp
var fixture = new Fixture();
var order = fixture.Build<Order>()
                   .With(o => o.Status, OrderStatus.Pending)   // ez sz\xE1m\xEDt
                   .Create();                                   // a t\xF6bbi mez\u0151 gener\xE1lt
\`\`\`

Az \`AutoFixture.AutoNSubstitute\` + \`[Theory] [AutoData]\` kombin\xE1ci\xF3val a substitute-ok is automatikusan befecskendezhet\u0151k a teszt param\xE9terlist\xE1j\xE1ba. **\xD3vatosan**: az AutoFixture \xE1ltal gener\xE1lt adat v\xE9letlenszer\u0171 \u2013 ha az \xE9rv\xE9nyess\xE9ge sz\xE1m\xEDt (valid\xE1ci\xF3, \xFCzleti szab\xE1ly), akkor explicit adat kell, vagy a Test Data Builder minta (l\xE1sd "Object Mother \xE9s Test Data Builder" fejezet). A domain-invari\xE1nsokat \u0151rz\u0151 aggreg\xE1tumot ne AutoFixture-rel hozd l\xE9tre, hanem a saj\xE1t factory met\xF3dus\xE1val.

Mikor \xE9rdemes haszn\xE1lni: NSubstitute \xFAj k\xF3db\xE1zisban vagy ahol a csapat m\xE1r ezt haszn\xE1lja; FluentAssertions minden nem trivi\xE1lis asserthez; AutoFixture ott, ahol az objektum sok, a teszt szempontj\xE1b\xF3l l\xE9nyegtelen mez\u0151b\u0151l \xE1ll.

Legjobb gyakorlatok: **egy k\xF3db\xE1zisban egy mockol\xF3 k\xF6nyvt\xE1r** \u2013 a Moq \xE9s az NSubstitute kever\xE9se tesztf\xE1jlonk\xE9nt elt\xE9r\u0151 idi\xF3m\xE1t jelent; csak a viselked\xE9st ellen\u0151rizd (\`Received\`), ne a bels\u0151 implement\xE1ci\xF3t; a domain logika tesztj\xE9ben ne legyen mock (tiszta f\xFCggv\xE9ny, nincs mit izol\xE1lni); a licencfelt\xE9teleket a csapat ellen\u0151rizze, miel\u0151tt egy assert-k\xF6nyvt\xE1rra \xE9p\xEDt.

Mit ker\xFClj el: ne mockolj olyan t\xEDpust, amelyet nem te birtokolsz (\`DbContext\`, \`HttpClient\` helyett in-memory / Testcontainers, illetve \`HttpMessageHandler\`); ne \xE1ll\xEDts be olyan h\xEDv\xE1st, amit a teszt nem ellen\u0151riz (t\xFAl-specifik\xE1lt teszt); ne gener\xE1lj AutoFixture-rel olyan adatot, amelynek \xE9rv\xE9nyess\xE9g\xE9n a teszt eredm\xE9nye m\xFAlik.

\xD6sszefoglal\xE1s: NSubstitute az izol\xE1ci\xF3hoz, FluentAssertions az olvashat\xF3 ellen\u0151rz\xE9shez, AutoFixture a jelent\xE9ktelen adat elt\xFCntet\xE9s\xE9hez \u2013 a h\xE1rmas egy\xFCtt r\xF6vid, sz\xE1nd\xE9kot mutat\xF3 teszteket ad, de a domain-invari\xE1nsokat tov\xE1bbra is val\xF3di factoryval kell fel\xE9p\xEDteni.

## CQRS olvas\xE1si oldal \u2013 dedik\xE1lt olvas\xE1si modell \xE9s materializ\xE1lt n\xE9zet https://learn.microsoft.com/azure/architecture/patterns/cqrs {#cqrs-olvasasi-oldal-dedikalt-olvasasi-modell-es-materializalt-nezet}

*Kieg\xE9sz\xEDt\xE9s a "CQRS" \xE9s a "Aggregator Pattern" fejezetekhez.*

A CQRS bevezet\xE9se ut\xE1n a leggyakoribb csal\xF3d\xE1s, hogy a rendszer nem lett gyorsabb: a query oldal ugyanazon a normaliz\xE1lt s\xE9m\xE1n, ugyanazon az ORM-en, ugyanazokkal a JOIN-okkal dolgozik, mint a command oldal \u2013 csak most t\xF6bb oszt\xE1lyban. A gyorsul\xE1s nem a sz\xE9tv\xE1laszt\xE1sb\xF3l j\xF6n, hanem abb\xF3l, hogy **az olvas\xE1si oldal m\xE1s adatszerkezetet kap**.

**N\xE9gy fokozat, n\xF6vekv\u0151 k\xF6lts\xE9ggel \u2013 ne ugorj a v\xE9g\xE9re:**

1. **Projekci\xF3 a lek\xE9rdez\xE9sben.** A query handler nem entit\xE1st t\xF6lt, hanem k\xF6zvetlen\xFCl DTO-t vet\xEDt ki, k\xF6vet\xE9s n\xE9lk\xFCl. Ez a legolcs\xF3bb \xE9s az esetek nagy r\xE9sz\xE9ben el\xE9g:
   \`\`\`csharp
   var result = await db.Orders.AsNoTracking()
       .Where(o => o.CustomerId == customerId)
       .OrderByDescending(o => o.PlacedAt)
       .Select(o => new OrderListItemDto(o.Id, o.Number, o.Total, o.Status, o.Lines.Count))
       .Take(50)
       .ToListAsync(ct);
   \`\`\`
2. **Dapper a neh\xE9z lek\xE9rdez\xE9sekre.** Riport, \xF6sszes\xEDt\xE9s, t\xF6bb t\xE1bl\xE1s kimutat\xE1s \u2013 k\xE9zzel \xEDrt SQL, m\xE9rhet\u0151 tervvel (l\xE1sd "Dapper \xE9s hibrid perzisztencia").
3. **Adatb\xE1zis-n\xE9zet vagy materializ\xE1lt n\xE9zet.** Az indexelt/materializ\xE1lt n\xE9zet az adatb\xE1zisban tartja karban az \xF6sszes\xEDt\xE9st; SQL Serverben \`WITH SCHEMABINDING\` + klaszterezett index, PostgreSQL-ben \`MATERIALIZED VIEW\` + \xFCtemezett \`REFRESH\`. Az \xEDr\xE1s lassul, az olvas\xE1s nagys\xE1grendet gyorsul.
4. **K\xFCl\xF6n olvas\xE1si adatt\xE1r.** A read model saj\xE1t t\xE1bl\xE1ban vagy saj\xE1t t\xE1rol\xF3ban (Redis, Elasticsearch, MongoDB) \xE9l, \xE9s esem\xE9nyekb\u0151l \xE9p\xFCl fel:
   \`\`\`csharp
   public class OrderPlacedProjection(IReadStore store) : IConsumer<OrderPlaced>
   {
       public Task Consume(ConsumeContext<OrderPlaced> ctx) =>
           store.UpsertAsync(new OrderSummary(ctx.Message.OrderId, ctx.Message.CustomerName,
                                              ctx.Message.Total, ctx.Message.PlacedAt));
   }
   \`\`\`

**Amit a 4. fokozat \xE1ra tartalmaz**: eventual consistency a fel\xFClet fel\xE9; a projekci\xF3 \xFAjra\xE9p\xEDt\xE9s\xE9nek k\xE9pess\xE9ge (verzi\xF3zott projekci\xF3, teljes replay \u2013 l\xE1sd "Event store tervez\xE9se \xE9s snapshot strat\xE9gia"); duplik\xE1lt k\xE9zbes\xEDt\xE9s kezel\xE9se (a projekci\xF3 \xEDr\xE1sa legyen idempotens, upsert, ne insert); \xE9s egy monitorozott **projekci\xF3s lemarad\xE1s** (lag) metrika, mert ha a projekci\xF3 le\xE1ll, a felhaszn\xE1l\xF3 r\xE9gi adatot l\xE1t, hiba\xFCzenet n\xE9lk\xFCl.

**A "read-your-writes" probl\xE9ma.** \xCDr\xE1s ut\xE1n a felhaszn\xE1l\xF3 azonnal a list\xE1t n\xE9zi, de a projekci\xF3 m\xE9g nem futott le. Kezel\xE9s: a parancs v\xE1lasz\xE1ban add vissza a l\xE9trej\xF6tt entit\xE1st, \xE9s abb\xF3l rendereld a k\xE9perny\u0151t; vagy a m\u0171velet ut\xE1n r\xF6vid ideig az \xEDr\xE1si oldalr\xF3l olvass; vagy a fel\xFCleten jelezd a feldolgoz\xE1s alatti \xE1llapotot. Ne "v\xE1rj 200 ms-ot \xE9s k\xE9rdezd le \xFAjra" \u2013 ez terhel\xE9s alatt megb\xEDzhatatlan.

Mikor \xE9rdemes haszn\xE1lni: az 1\u20132. fokozat mindig; a 3. akkor, ha egy konkr\xE9t, m\xE9rt lek\xE9rdez\xE9s dr\xE1ga; a 4. akkor, ha az olvas\xE1si terhel\xE9s nagys\xE1grenddel nagyobb az \xEDr\xE1sn\xE1l, vagy az adat t\xF6bb szolg\xE1ltat\xE1sb\xF3l \xE1ll \xF6ssze (ilyenkor a projekci\xF3 v\xE1ltja ki a szinkron aggreg\xE1tort).

Legjobb gyakorlatok: a read model **a k\xE9perny\u0151h\xF6z** igazodjon, ne a dom\xE9nhez \u2013 egy lek\xE9rdez\xE9s = egy t\xE1bla/dokumentum, JOIN n\xE9lk\xFCl; a denormaliz\xE1lt duplik\xE1ci\xF3 itt nem hiba, hanem a c\xE9l; a projekci\xF3 legyen \xFAjra\xE9p\xEDthet\u0151 null\xE1r\xF3l; m\xE9rd a projekci\xF3s lemarad\xE1st \xE9s riassz r\xE1.

Mit ker\xFClj el: ne vezess be k\xFCl\xF6n olvas\xE1si adatt\xE1rat m\xE9r\xE9s n\xE9lk\xFCl; ne tegy\xE9l \xFCzleti szab\xE1lyt a projekci\xF3ba; ne haszn\xE1ld ugyanazt az entit\xE1st \xEDr\xE1sra \xE9s olvas\xE1sra, ha az olvas\xE1s alakja m\xE1r elt\xE9r; ne \xEDg\xE9rj azonnali konzisztenci\xE1t olyan k\xE9perny\u0151n, amely aszinkron projekci\xF3b\xF3l olvas.

\xD6sszefoglal\xE1s: a CQRS haszna az olvas\xE1si oldal k\xFCl\xF6n optimaliz\xE1l\xE1s\xE1b\xF3l sz\xE1rmazik \u2013 kezdd projekci\xF3s lek\xE9rdez\xE9ssel, \xE9s csak m\xE9rt ig\xE9ny eset\xE9n l\xE9pj a dedik\xE1lt, esem\xE9nyekb\u0151l \xE9p\xFCl\u0151 olvas\xE1si modellre, amelynek \xE1ra az eventual consistency \xE9s a projekci\xF3k \xFCzemeltet\xE9se.

## File-based apps \u2013 projekt n\xE9lk\xFCli C# futtat\xE1s (.NET 10 / C# 14) https://learn.microsoft.com/dotnet/core/sdk/file-based-apps {#file-based-apps-projekt-nelkuli-c-futtatas}

*Forr\xE1s: Mark J. Price \u2013 C# 14 and .NET 10 Fundamentals (10th ed.), Chapter 1. Verzi\xF3: .NET 10 / C# 14.*

Egyetlen \`.cs\` f\xE1jl futtathat\xF3 projektf\xE1jl n\xE9lk\xFCl \u2013 gyors protot\xEDpushoz, egyszeri admin-szkripthez, tanul\xE1shoz. A hivatalos elnevez\xE9s: **file-based app** (szemben a project-based app-pel).

\`\`\`bash
dotnet run hello.cs
\`\`\`

A f\xE1jln\xE9v nem k\xF6telez\u0151en \`Program.cs\`. Jelenleg egy f\xE1jl t\xE1mogatott; t\xF6bb f\xE1jl a .NET 11 ir\xE1ny\xE1ba v\xE1rhat\xF3. Visual Studio nem t\xE1mogatja \u2013 CLI funkci\xF3.

Speci\xE1lis \`#:\` direkt\xEDv\xE1k a f\xE1jl tetej\xE9n:

\`\`\`csharp
#:package Humanizer@2.14.1
#:project ../MyClassLib/MyClassLib.csproj
#:sdk Microsoft.NET.Sdk.Web
#:property LangVersion=preview

using Humanizer;
Console.WriteLine(TimeSpan.FromDays(1).Humanize());
\`\`\`

Linuxon shebang is haszn\xE1lhat\xF3 (\`#!/usr/bin/dotnet run\`), ha a f\xE1jl futtathat\xF3. Ha a szkript kin\xF6vi a single-file keretet: \`dotnet project convert app.cs\`.

Mikor \xE9rdemes: egyszeri adatmigr\xE1ci\xF3-pr\xF3ba, helyi tooling, \u201Emi t\xF6rt\xE9nik ha\u2026\u201D k\xEDs\xE9rlet. Mit ker\xFClj el: ne \xE9p\xEDts r\xE1 hossz\xFA t\xE1v\xFA szolg\xE1ltat\xE1st; ne keverd a megold\xE1s (solution) build pipeline-j\xE1ba.

## Null-conditional assignment \u2013 \`?.=\` (C# 14) https://learn.microsoft.com/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-assignment {#null-conditional-assignment}

*Forr\xE1s: Mark J. Price \u2013 Chapter 3. Verzi\xF3: C# 14.*

A klasszikus null-kezel\u0151 oper\xE1torok (\`?.\`, \`??\`, \`??=\`) mellett C# 14-ben megjelent a **null-conditional assignment**: \xE9rt\xE9kad\xE1s csak akkor t\xF6rt\xE9nik, ha a fogad\xF3 p\xE9ld\xE1ny nem \`null\`.

\`\`\`csharp
public static void UpdateAge(Customer? customer, int newAge)
{
    customer?.Age = newAge;
}
\`\`\`

Ez egyen\xE9rt\xE9k\u0171 a hosszabb \`if (customer is not null) customer.Age = newAge;\` form\xE1val. Ha \`customer\` null, semmi nem t\xF6rt\xE9nik \u2013 nincs \`NullReferenceException\`.

Kapcsol\xF3d\xF3, m\xE1r ismert oper\xE1torok: \`authorName?.Length ?? 30\` (null-conditional + coalescing), \`cache ??= LoadCache()\` (null-coalescing assignment).

Mikor \xE9rdemes: opcion\xE1lis DTO / entity friss\xEDt\xE9se, \u201Eha van p\xE9ld\xE1ny, \xE1ll\xEDtsd\u201D mint\xE1k. Mit ker\xFClj el: ne haszn\xE1ld \xFCzleti szab\xE1ly elrejt\xE9s\xE9re \u2013 ha a null hib\xE1t jelent, ink\xE1bb guard clause / kiv\xE9tel.

## A \`field\` kulcssz\xF3 property-kben (C# 14) https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/field {#a-field-kulcsszo-property-kben}

*Forr\xE1s: Mark J. Price \u2013 Chapter 5. Verzi\xF3: C# 14.*

Auto-property valid\xE1ci\xF3j\xE1hoz eddig k\xE9zzel kellett backing field. C# 14-ben a ford\xEDt\xF3 \xE1ltal gener\xE1lt mez\u0151re a kontextu\xE1lis \`field\` kulcssz\xF3val hivatkozhatsz:

\`\`\`csharp
public string? FavoritePrimaryColor
{
    get => field;
    set
    {
        var normalized = value?.ToLowerInvariant();
        field = normalized is "red" or "green" or "blue"
            ? value
            : throw new ArgumentException($"{value} is not a primary color.");
    }
}
\`\`\`

A \`field\` csak a property accessorokban \xE9rhet\u0151 el. Megmarad a j\xF3 gyakorlat: a get/set ne legyen t\xFAl hossz\xFA \u2013 \xF6sszetett logik\xE1t private met\xF3dusba emelj.

Mikor \xE9rdemes: trim, null-ellen\u0151rz\xE9s, egyszer\u0171 tartom\xE1ny-valid\xE1ci\xF3 property-n. Mit ker\xFClj el: ne helyezz I/O-t vagy neh\xE9z \xFCzleti szab\xE1lyt a setterbe.

## Guard clauses \u2013 \`ThrowIf*\` met\xF3dusok (.NET 6+ / .NET 8+) https://learn.microsoft.com/dotnet/api/system.argumentnullexception.throwifnull {#guard-clauses-throwif-metodusok}

*Forr\xE1s: Mark J. Price \u2013 Chapter 4. Verzi\xF3: .NET 6 (alapok) \xB7 b\u0151v\xEDt\xE9sek .NET 8.*

Haszn\xE1lati hib\xE1t (rossz argumentum) a met\xF3dus elej\xE9n, kiv\xE9tellel jelezd \u2013 ne t\xE9rj vissza \u201Ecsendes\u201D hibak\xF3ddal. A BCL statikus \`ThrowIf*\` met\xF3dusai r\xF6vid\xEDtik a guard clause-okat:

| Kiv\xE9tel | Met\xF3dusok |
|---|---|
| \`ArgumentException\` | \`ThrowIfNullOrEmpty\`, \`ThrowIfNullOrWhiteSpace\` |
| \`ArgumentNullException\` | \`ThrowIfNull\` |
| \`ArgumentOutOfRangeException\` | \`ThrowIfEqual\`, \`ThrowIfNotEqual\`, \`ThrowIfGreaterThan\`, \`ThrowIfGreaterThanOrEqual\`, \`ThrowIfLessThan\`, \`ThrowIfLessThanOrEqual\`, \`ThrowIfNegative\`, \`ThrowIfNegativeOrZero\`, \`ThrowIfZero\` |

\`\`\`csharp
static void Withdraw(string accountName, decimal amount)
{
    ArgumentException.ThrowIfNullOrWhiteSpace(accountName, nameof(accountName));
    ArgumentOutOfRangeException.ThrowIfNegativeOrZero(amount, nameof(amount));
}
\`\`\`

Megk\xFCl\xF6nb\xF6ztet\xE9s: **usage error** (programoz\xF3i hiba \u2013 jav\xEDtsd a h\xEDv\xF3t) vs. **execution error** (h\xE1l\xF3zat, hi\xE1nyz\xF3 f\xE1jl \u2013 kezeld / logold / retry). Csak akkor kapj el kiv\xE9telt, ha van mit tenni vele; k\xFCl\xF6nben engedd fel a call stacken.

Mikor \xE9rdemes: minden publikus / API-hat\xE1r met\xF3dus param\xE9ter-ellen\u0151rz\xE9se. Mit ker\xFClj el: ne nyeljd el a usage error-t \xFCres \`catch\`-csel; ne haszn\xE1ld guardot rendszerhib\xE1k (OOM) \u201Ekezel\xE9s\xE9re\u201D.

## LINQ LeftJoin/RightJoin \xE9s CountBy/AggregateBy (.NET 9\u201310) https://learn.microsoft.com/dotnet/core/whats-new/dotnet-10/libraries#linq {#linq-leftjoin-rightjoin-es-countby-aggregateby}

*Forr\xE1s: Mark J. Price \u2013 Chapter 11. Verzi\xF3: \`CountBy\` / \`AggregateBy\`: .NET 9 \xB7 \`LeftJoin\` / \`RightJoin\`: .NET 10 (EF Core is felismeri).*

Kor\xE1bban a left outer join LINQ-ban \`GroupJoin\` + \`SelectMany\` + \`DefaultIfEmpty\` kombin\xE1ci\xF3 volt. .NET 10-t\u0151l:

\`\`\`csharp
var query = db.Categories
    .LeftJoin(
        db.Products,
        category => category.CategoryId,
        product => product.CategoryId,
        (category, product) => new
        {
            category.CategoryName,
            ProductName = product?.ProductName ?? "[NONE]"
        });
\`\`\`

\`.By\` csal\xE1d (\xF6sszehasonl\xEDt\xE1s kulcs szerint, nem a teljes objektumon): \`DistinctBy\`, \`MinBy\`, \`MaxBy\`, \`ExceptBy\`, \`IntersectBy\`, \`UnionBy\`. .NET 9: \`CountBy\`, \`AggregateBy\`, \`Index\`.

\`\`\`csharp
var counts = products.CountBy(p => p.CategoryId);
var totals = orders.AggregateBy(
    keySelector: o => o.CustomerId,
    seed: 0m,
    func: (sum, o) => sum + o.Total);
\`\`\`

\`AsEnumerable()\` ut\xE1n a feldolgoz\xE1s mem\xF3ri\xE1ban folytat\xF3dik \u2013 hasznos, ha az EF nem tudja SQL-re ford\xEDtani a kifejez\xE9st, de gyakran kev\xE9sb\xE9 hat\xE9kony. \`ToLookup\` \xFAjrafelhaszn\xE1lhat\xF3, kulcs szerinti csoportos\xEDt\xE1shoz mem\xF3ri\xE1ban.

Mikor \xE9rdemes: riportok, left join a UI list\xE1hoz, csoportos sz\xE1ml\xE1l\xE1s kulcs szerint. Mit ker\xFClj el: ne h\xEDvj feleslegesen \`AsEnumerable()\`-t nagy t\xE1bl\xE1n; m\xE9rj SQL-tervet.

## SearchValues \u2013 gyors karakter- \xE9s r\xE9szstring-keres\xE9s (.NET 8+ / .NET 9+) https://learn.microsoft.com/dotnet/api/system.buffers.searchvalues {#searchvalues-gyors-karakter-es-reszstring-kereses}

*Forr\xE1s: Mark J. Price \u2013 Chapter 8. Verzi\xF3: karakterkeres\xE9s .NET 8 \xB7 r\xE9szstring-k\xE9szlet .NET 9+.*

\`SearchValues\` optimaliz\xE1lt keres\xE9st ad \`Span\` / string felett \u2013 t\xF6bbsz\xF6r haszn\xE1lt keres\u0151k\xE9szlethez \xE9rdemes cache-elni (statikus mez\u0151).

\`\`\`csharp
static readonly SearchValues<char> Vowels = SearchValues.Create("AEIOUaeiou");

ReadOnlySpan<char> text = "Fred";
int index = text.IndexOfAny(Vowels);
\`\`\`

.NET 9+: r\xE9szstringek keres\xE9se is:

\`\`\`csharp
SearchValues<string> names = SearchValues.Create(["Alice", "Bob", "Carol"], StringComparison.OrdinalIgnoreCase);
\`\`\`

Mikor \xE9rdemes: tokeniz\xE1l\xE1s, tiltott karakterek sz\u0171r\xE9se, nagy sz\xF6vegben ism\xE9telt keres\xE9s. Mit ker\xFClj el: ne hozd l\xE9tre minden h\xEDv\xE1sban \xFAjra a \`SearchValues\` p\xE9ld\xE1nyt hot path-on.

## Frozen collections \u2013 FrozenDictionary \xE9s FrozenSet (.NET 8+) https://learn.microsoft.com/dotnet/api/system.collections.frozen {#frozen-collections-frozendictionary-es-frozenset}

*Forr\xE1s: Mark J. Price \u2013 Chapter 8. Verzi\xF3: .NET 8 (\`System.Collections.Frozen\`).*

Ha a gy\u0171jtem\xE9ny felt\xF6lt\xE9s ut\xE1n **m\xE1r nem v\xE1ltozik**, a frozen v\xE1ltozat a l\xE9trehoz\xE1skor t\xF6bbet dolgozik, cser\xE9be gyorsabb olvas\xE1st ad (lookup-heavy, sokszor olvasott konfigur\xE1ci\xF3 / sz\xF3t\xE1r).

\`\`\`csharp
using System.Collections.Frozen;

var keywords = new Dictionary<string, string>
{
    ["int"] = "32-bit integer",
    ["long"] = "64-bit integer",
}.ToFrozenDictionary();

string? define = keywords.GetValueOrDefault("long");
\`\`\`

El\xE9rhet\u0151: \`FrozenDictionary<TKey,TValue>\`, \`FrozenSet<T>\`. Nincs mut\xE1ci\xF3 API \u2013 ez a c\xE9l.

Mikor \xE9rdemes: alkalmaz\xE1sind\xEDt\xE1skor bet\xF6lt\xF6tt lookup t\xE1bl\xE1k, feature flag n\xE9vlista, enum\u2194sz\xF6veg map. Mit ker\xFClj el: ne haszn\xE1lj gyakran v\xE1ltoz\xF3 cache-hez; ott maradjon a sima \`ConcurrentDictionary\` / \`Dictionary\`.

## Numerikus string-\xF6sszehasonl\xEDt\xE1s \u2013 CompareOptions.NumericOrdering (.NET 10) https://learn.microsoft.com/dotnet/api/system.globalization.compareoptions {#numerikus-string-osszehasonlitas-compareoptions-numericordering}

*Forr\xE1s: Mark J. Price \u2013 Chapter 8. Verzi\xF3: .NET 10.*

Lexikografikus rendez\xE9sn\xE9l \`"10"\` el\u0151bb van, mint \`"7"\`. Numerikus rendez\xE9sn\xE9l \`"7"\` < \`"10"\`, \xE9s \`"7"\` egyenl\u0151 \`"07"\`-tel.

\`\`\`csharp
var cmp = CultureInfo.InvariantCulture.CompareInfo;
int result = cmp.Compare("7", "10", CompareOptions.NumericOrdering);
\`\`\`

Mikor \xE9rdemes: verzi\xF3n\xE9v, cikksz\xE1m, fejezetc\xEDm (\`"Chapter 2"\` vs \`"Chapter 10"\`), f\xE1jln\xE9v-rendez\xE9s UI-n. Mit ker\xFClj el: ne keverd culture-f\xFCgg\u0151 rendez\xE9ssel an\xE9lk\xFCl, hogy tudn\xE1d, melyik culture-t haszn\xE1lod.

## Central Package Management \u2013 Directory.Packages.props https://learn.microsoft.com/nuget/consume-packages/central-package-management {#central-package-management-directory-packages-props}

*Forr\xE1s: Mark J. Price \u2013 Chapter 12. Verzi\xF3: NuGet CPM (SDK-st\xEDlus\xFA projektek).*

T\xF6bb projektben ugyanazok a csomagverzi\xF3k egy helyen: \`Directory.Packages.props\` a solution / repo gy\xF6ker\xE9ben.

\`\`\`xml
<Project>
  <PropertyGroup>
    <ManagePackageVersionsCentrally>true</ManagePackageVersionsCentrally>
    <Net10>10.0.*</Net10>
  </PropertyGroup>
  <ItemGroup>
    <PackageVersion Include="Microsoft.EntityFrameworkCore.Sqlite" Version="$(Net10)" />
    <PackageVersion Include="Microsoft.AspNetCore.OpenApi" Version="$(Net10)" />
    <PackageVersion Include="Scalar.AspNetCore" Version="2.5.6" />
  </ItemGroup>
</Project>
\`\`\`

A \`.csproj\`-ban m\xE1r csak n\xE9v kell, verzi\xF3 n\xE9lk\xFCl:

\`\`\`xml
<PackageReference Include="Microsoft.AspNetCore.OpenApi" />
\`\`\`

J\xF3 gyakorlat: Patch Tuesday ut\xE1n (havonta) n\xE9zd \xE1t a k\xF6zponti verzi\xF3kat; preview-n\xE1l a \`10.0.*\` / floating verzi\xF3 \xF3vatosan.

Mikor \xE9rdemes: 3+ projekt k\xF6z\xF6s solutionben. Mit ker\xFClj el: ne tarts elt\xE9r\u0151 major verzi\xF3kat \u201Ev\xE9letlen\xFCl\u201D projectenk\xE9nt ugyanarra a csomagra.

## Microsoft.AspNetCore.OpenApi \xE9s Scalar (.NET 9+ / .NET 10) https://learn.microsoft.com/aspnet/core/fundamentals/openapi/overview {#microsoft-aspnetcore-openapi-es-scalar}

*Forr\xE1s: Mark J. Price \u2013 Chapter 15. Verzi\xF3: Microsoft OpenAPI gener\xE1tor .NET 9+ \xB7 Scalar UI aj\xE1nl\xE1s .NET 10 sablonokban / k\xF6nyvben.*

Terminol\xF3gia: **OpenAPI** = specifik\xE1ci\xF3; **Swagger** sz\xF3 ker\xFClend\u0151 a specifik\xE1ci\xF3ra; **Swashbuckle** = harmadik f\xE9lt\u0151l sz\xE1rmaz\xF3 gener\xE1tor + UI (.NET 8 sablonokban). .NET 9-t\u0151l Microsoft saj\xE1t gener\xE1tora: \`Microsoft.AspNetCore.OpenApi\` \u2013 JSON dokumentumot ad, UI-t nem. Interakt\xEDv UI-hoz: **Scalar** (\`Scalar.AspNetCore\`) vagy NSwag.

\`\`\`csharp
builder.Services.AddOpenApi();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}
\`\`\`

Alap\xE9rtelmezett dokumentum: \`/openapi/v1.json\`. .NET 10-t\u0151l az gener\xE1lt dokumentum OpenAPI **3.1.1** kompatibilis. \`ProducesResponseType\` / \`Produces\` kapott opcion\xE1lis \`Description\` param\xE9tert az OpenAPI v\xE1laszle\xEDr\xE1shoz.

\`dotnet new webapi\` .NET 8+ alapb\xF3l Minimal API-t ad; controllerhez \`--use-controllers\` kell.

Mikor \xE9rdemes: minden publikus HTTP API dokument\xE1l\xE1sa; Scalar dev k\xF6rnyezetben. Mit ker\xFClj el: ne tedd ki az OpenAPI/Scalar UI-t v\xE9delem n\xE9lk\xFCl production-ben, ha a szolg\xE1ltat\xE1s nem publikus katal\xF3gus.

## JSON Patch System.Text.Json-nel (.NET 10) https://learn.microsoft.com/aspnet/core/web-api/jsonpatch {#json-patch-system-text-json-nel}

*Forr\xE1s: Mark J. Price \u2013 Chapter 9. Verzi\xF3: .NET 10 \u2013 \`Microsoft.AspNetCore.JsonPatch.SystemTextJson\`.*

A kor\xE1bbi JSON Patch implement\xE1ci\xF3 Newtonsoft.Json-ra \xE9p\xFClt. .NET 10-t\u0151l STJ-alap\xFA csomag: jobb teljes\xEDtm\xE9ny, kisebb mem\xF3ria, egys\xE9ges szerializ\xE1ci\xF3s stack.

\`\`\`xml
<PackageReference Include="Microsoft.AspNetCore.JsonPatch.SystemTextJson" Version="10.0.0" />
\`\`\`

\`\`\`csharp
JsonPatchDocument<Customer> patch = /* deszerializ\xE1lva a k\xE9r\xE9sb\u0151l */;
patch.ApplyTo(customer);
\`\`\`

Mikor \xE9rdemes: r\xE9szleges er\u0151forr\xE1s-friss\xEDt\xE9s (PATCH) REST API-n, ha m\xE1r STJ-t haszn\xE1lsz. Mit ker\xFClj el: ne keverd ugyanabban a projektben a Newtonsoft- \xE9s STJ-alap\xFA JsonPatch stacket.

## \`nameof\` unbound generic t\xEDpusokkal (C# 14) https://learn.microsoft.com/dotnet/csharp/language-reference/operators/nameof {#nameof-unbound-generic-tipusokkal}

*Forr\xE1s: Mark J. Price \u2013 Chapter 2. Verzi\xF3: C# 12 \u2013 instance tag static kontextusb\xF3l \xB7 C# 14 \u2013 unbound generic.*

\`\`\`csharp
nameof(heightInMetres);
nameof(List<>);
nameof(Dictionary<,>);
\`\`\`

\`nameof(List<>)\` \xE9s \`nameof(List<string>)\` is a \`"List"\` stringet adja. Refaktor\xE1l\xE1skor a ford\xEDt\xF3 friss\xEDti a nevet \u2013 jobb, mint hardcode-olt string a logban / kiv\xE9tel \`paramName\`-j\xE9ben.

Mikor \xE9rdemes: guard clause \`paramName\`, logol\xE1s, expression-based API-k. Mit ker\xFClj el: ne v\xE1rd el, hogy a generikus argumentum neve benne legyen az eredm\xE9nyben.
`;export{a as default};