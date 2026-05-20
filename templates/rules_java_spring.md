# Java / Spring Boot — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Java/Spring Boot project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Java 17+ / Kotlin
- Framework: Spring Boot 3.x
- Build Tool: [Maven (pom.xml) / Gradle (build.gradle) — detect from root files]
- ORM: [Spring Data JPA + Hibernate — detect from pom.xml/build.gradle]
- Database: [PostgreSQL / MySQL / H2 — detect from application.properties]
- Security: [Spring Security — detect from dependencies]

## Architecture
Layered architecture (standard Spring Boot):
```
src/main/java/<package>/
├── controller/     # REST controllers (@RestController)
├── service/        # Business logic (@Service)
├── repository/     # Data access (@Repository, JPA interfaces)
├── entity/         # JPA entities (@Entity)
├── dto/            # Data Transfer Objects (request/response bodies)
├── config/         # Spring configuration classes (@Configuration)
├── exception/      # Custom exceptions + global exception handler
└── util/           # Utility/helper classes
```

## Naming Conventions
- Classes: `PascalCase`
- Methods/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Packages: `lowercase.dot.separated`
- Controllers: `FeatureNameController`
- Services: `FeatureNameService` + `FeatureNameServiceImpl`
- Repositories: `FeatureNameRepository`
- DTOs: `FeatureNameRequest`, `FeatureNameResponse`

## Code Conventions
- Use constructor injection (never field injection with `@Autowired`)
- Use `@Slf4j` (Lombok) for logging — never `System.out.println`
- Use `@Valid` + Bean Validation annotations on DTOs
- Use `ResponseEntity<T>` for REST controller return types
- Handle exceptions globally with `@ControllerAdvice`
- Use Lombok (`@Data`, `@Builder`, `@RequiredArgsConstructor`) to reduce boilerplate

## What NOT To Do
- Do NOT use field injection (`@Autowired` on fields)
- Do NOT put business logic in controllers
- Do NOT expose JPA entities directly as API response — use DTOs
- Do NOT use `Optional.get()` without checking `isPresent()` — use `orElseThrow()`
