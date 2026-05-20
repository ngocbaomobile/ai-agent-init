# Python — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Python project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Python 3.11+
- Framework: [FastAPI / Django / Flask / None — detect from requirements.txt or pyproject.toml]
- Package Manager: [pip / Poetry / PDM — detect from pyproject.toml or requirements.txt]
- Testing: [pytest — standard]
- Linter/Formatter: [ruff / black / flake8 — detect from config files]

## Architecture
[Detect and describe. Common patterns:]
- **Layered**: routes → services → repositories → models
- **Domain-Driven**: domain/, application/, infrastructure/, interfaces/

## Folder Structure (FastAPI example)
```
app/
├── api/          # Route handlers (controllers)
├── core/         # Config, dependencies, security
├── models/       # SQLAlchemy / Pydantic models
├── schemas/      # Pydantic request/response schemas
├── services/     # Business logic
└── repositories/ # DB access layer
tests/
main.py
```

## Naming Conventions
- Files/modules: `snake_case.py`
- Classes: `PascalCase`
- Functions/variables: `snake_case`
- Constants: `UPPER_SNAKE_CASE`
- Private: `_prefixed_with_underscore`

## Code Conventions
- Use type hints on all function signatures
- Use Pydantic for data validation and serialization
- All business logic lives in services/, not in route handlers
- Use dependency injection via FastAPI's `Depends()` system
- Follow PEP 8 style guide

## What NOT To Do
- Do NOT put DB queries directly in route handlers
- Do NOT use mutable default arguments
- Do NOT ignore exceptions silently — always log or re-raise
