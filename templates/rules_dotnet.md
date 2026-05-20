# .NET / C# — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a .NET/C# project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: C# 12 / .NET 8+
- Framework: [ASP.NET Core Web API / Blazor / MAUI — detect from .csproj]
- ORM: [Entity Framework Core / Dapper — detect from .csproj]
- Architecture: [Clean Architecture / Minimal API / MVC — detect from folder structure]
- DI: Built-in Microsoft.Extensions.DependencyInjection

## Folder Structure (Clean Architecture)
```
src/
├── <AppName>.API/          # ASP.NET Core project (controllers, middleware, DI setup)
├── <AppName>.Application/  # Use cases, commands/queries (MediatR), DTOs, interfaces
├── <AppName>.Domain/       # Entities, value objects, domain events, interfaces
└── <AppName>.Infrastructure/ # EF Core, repositories (impl), external services
tests/
├── <AppName>.UnitTests/
└── <AppName>.IntegrationTests/
```

## Naming Conventions
- Classes/Interfaces/Records: `PascalCase`
- Interfaces: `IPascalCase` (e.g., `IUserRepository`)
- Methods/Properties: `PascalCase`
- Private fields: `_camelCase` (underscore prefix)
- Local variables/parameters: `camelCase`
- Constants: `PascalCase` (C# convention, not UPPER_SNAKE_CASE)
- Async methods: suffix with `Async` (e.g., `GetUserByIdAsync`)

## Code Conventions
- Use `record` for immutable DTOs and value objects
- Use MediatR pattern (Commands/Queries/Handlers) for application layer
- Use `ILogger<T>` for logging — never `Console.WriteLine`
- Use `async/await` throughout — never `.Result` or `.Wait()` on tasks
- Use `CancellationToken` as last parameter in all async methods
- Use primary constructors (C# 12) for cleaner dependency injection
- Use `FluentValidation` for command/query validation

## What NOT To Do
- Do NOT use `.Result` or `.Wait()` on Tasks — causes deadlocks in ASP.NET Core
- Do NOT use `static` mutable state — use DI with appropriate lifetimes
- Do NOT expose EF Core entities directly in API responses — use DTOs/records
- Do NOT catch `Exception` broadly — catch specific exception types
