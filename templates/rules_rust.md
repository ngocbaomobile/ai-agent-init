# Rust — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Rust project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Rust (stable toolchain)
- Build Tool: Cargo
- Async Runtime: [Tokio / async-std / None — detect from Cargo.toml]
- Web Framework: [Axum / Actix-web / Warp — detect from Cargo.toml]
- ORM/DB: [SQLx / Diesel / SeaORM — detect from Cargo.toml]
- Error Handling: [thiserror / anyhow — detect from Cargo.toml]

## Workspace Structure
```
src/
├── main.rs         # Binary entry point
├── lib.rs          # Library entry point (if dual crate)
├── domain/         # Business logic, domain models
├── infrastructure/ # DB, external services, adapters
├── api/            # HTTP handlers, routes
└── config.rs       # Configuration structs
tests/              # Integration tests
benches/            # Benchmarks (if any)
```

## Naming Conventions
- Files/modules: `snake_case.rs`
- Types/Structs/Enums/Traits: `PascalCase`
- Functions/variables/fields: `snake_case`
- Constants: `UPPER_SNAKE_CASE`
- Lifetimes: short, lowercase (`'a`, `'buf`)
- Macros: `snake_case!`

## Code Conventions
- Use `thiserror` for library errors, `anyhow` for application errors
- Prefer `?` operator for error propagation over `.unwrap()`
- Use `clippy` and `rustfmt` — run `cargo clippy` and `cargo fmt` before committing
- Prefer owned types in public APIs; use references internally where possible
- Use `#[derive(Debug, Clone, PartialEq)]` on all domain structs/enums
- Write doc comments (`///`) for all public items
- Use `mod.rs` sparingly — prefer inline `mod` declarations in parent files

## What NOT To Do
- Do NOT use `.unwrap()` or `.expect()` in production code paths (only in tests/examples)
- Do NOT use `unsafe` without a detailed safety comment explaining why it's sound
- Do NOT use `std::sync::Mutex` in async code — use `tokio::sync::Mutex`
- Do NOT clone excessively to avoid borrow checker issues — redesign the ownership instead
- Do NOT use global mutable state (`static mut`)
