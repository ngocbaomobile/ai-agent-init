# Node.js / TypeScript — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Node.js/TypeScript project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: TypeScript (strict mode preferred)
- Runtime: Node.js 18+
- Framework: [Next.js / Express / NestJS / Fastify — detect from package.json]
- Package Manager: [npm / yarn / pnpm — detect from lockfile]
- Testing: [Jest / Vitest — detect from package.json]

## Architecture
[Detect and describe. Common patterns:]
- **Next.js App Router**: app/, components/, lib/, hooks/
- **NestJS**: modules/, controllers/, services/, entities/
- **Express Layered**: routes/, controllers/, services/, repositories/

## Naming Conventions
- Files: `kebab-case.ts` (Next.js) or `camelCase.ts` (libraries)
- Classes: `PascalCase`
- Interfaces: `IPascalCase` or `PascalCase` (without I prefix — depends on project)
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE` or `camelCase`
- React components: `PascalCase.tsx`

## Code Conventions
- Enable `strict: true` in tsconfig.json
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer named exports over default exports (except for Next.js pages)
- All async functions must have proper error handling (try/catch or Result pattern)
- Use index.ts barrel files for clean imports within modules
- Never use `any` — use `unknown` and type guards instead

## What NOT To Do
- Do NOT use `var` — always use `const` or `let`
- Do NOT use `any` type
- Do NOT mutate function arguments
- Do NOT mix CommonJS and ESM imports in the same project
