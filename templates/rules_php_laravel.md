# PHP / Laravel — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Laravel project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: PHP 8.2+
- Framework: Laravel 11.x
- ORM: Eloquent
- Frontend: [Blade / Inertia.js (Vue/React) / Livewire — detect from composer.json and resources/]
- Queue: [Laravel Queues with Redis/Database — detect from .env or config/queue.php]
- Auth: [Laravel Sanctum / Passport / Breeze / Jetstream — detect from composer.json]

## Folder Structure (Laravel convention)
```
app/
├── Http/
│   ├── Controllers/    # Request handling
│   ├── Requests/       # Form Request validation classes
│   ├── Resources/      # API Resources (JSON transformers)
│   └── Middleware/
├── Models/             # Eloquent models
├── Services/           # Business logic (custom, not Laravel default)
├── Repositories/       # Data access abstraction (if used)
├── Jobs/               # Queue jobs
├── Events/ & Listeners/
└── Providers/
database/
├── migrations/
├── seeders/
└── factories/
```

## Naming Conventions
- Controllers: `PascalCase` + `Controller` suffix (e.g., `UserController`)
- Models: Singular `PascalCase` (e.g., `User`, `OrderItem`)
- Migrations: `snake_case` with timestamp prefix
- Form Requests: `StoreFeatureNameRequest`, `UpdateFeatureNameRequest`
- Jobs: `PascalCase` + verb (e.g., `SendWelcomeEmail`, `ProcessOrder`)
- Variables/methods: `camelCase`
- DB columns/table names: `snake_case`

## Code Conventions
- Use Form Request classes for all validation — never validate in controllers directly
- Use API Resources for all JSON responses — never return raw Eloquent models
- Use Services for business logic that spans multiple models
- Use Eloquent relationships instead of manual joins where possible
- Use Laravel's built-in helpers (`cache()`, `queue()`, `event()`) over manual instantiation
- Always use database migrations — never modify the DB schema directly

## What NOT To Do
- Do NOT put business logic in controllers — use Services
- Do NOT use `DB::raw()` without parameterized bindings (SQL injection risk)
- Do NOT use `env()` outside of config files — use `config()` helper instead
- Do NOT disable CSRF protection on routes that modify data
