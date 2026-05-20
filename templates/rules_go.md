# Go — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Go project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Go 1.21+
- Framework: [Gin / Echo / Fiber / Chi / None — detect from go.mod]
- ORM: [GORM / sqlx / raw sql — detect from go.mod]
- Testing: go test (standard)

## Architecture
Standard Go Project Layout (https://github.com/golang-standards/project-layout):
```
cmd/          # Main applications (entry points)
internal/     # Private application and library code
pkg/          # Library code usable by external apps
api/          # API definitions (OpenAPI, proto)
configs/      # Config files
scripts/      # Build/install scripts
```

## Naming Conventions
- Files: `snake_case.go`
- Packages: `lowercase`, single word preferred
- Types/Functions (exported): `PascalCase`
- Types/Functions (unexported): `camelCase`
- Interfaces: `Verb`-er pattern (e.g. `Reader`, `Writer`, `Handler`)
- Constants: `PascalCase` (exported) or `camelCase` (unexported)

## Code Conventions
- Always handle errors explicitly — never ignore with `_`
- Use `context.Context` as first parameter in functions that do I/O
- Prefer interfaces for dependency injection
- Keep functions small and focused (single responsibility)
- Use `gofmt` and `golangci-lint` for formatting/linting
- Wrap errors with `fmt.Errorf("context: %w", err)`

## What NOT To Do
- Do NOT use `panic` for normal error handling
- Do NOT use global variables for state
- Do NOT return naked errors without context
- Do NOT ignore the `context.Context` parameter
