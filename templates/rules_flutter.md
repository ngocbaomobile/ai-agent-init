# Flutter / Dart — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Flutter project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Dart 3.x
- Framework: Flutter 3.x
- State Management: [BLoC / Riverpod / GetX / Provider — detect from pubspec.yaml]
- Navigation: [GoRouter / AutoRoute / Navigator 2.0 — detect from pubspec.yaml]
- DI: [GetIt / Injectable — detect from pubspec.yaml]
- Networking: [Dio / http]
- Local DB: [Hive / Isar / sqflite — if present]

## Architecture
This project uses **Clean Architecture** with the following layers:
- **Data**: API clients, repositories (implementation), DTOs, local data sources
- **Domain**: Entities, repository interfaces, use cases
- **Presentation**: BLoC/Cubit, Pages, Widgets

## Folder Structure
```
lib/
├── core/           # Shared utilities, base classes, theme, router
├── features/       # One folder per feature
│   └── <feature>/
│       ├── data/
│       ├── domain/
│       └── presentation/
│           ├── bloc/
│           ├── pages/
│           └── widgets/
└── main.dart
```

## Naming Conventions
- Files: `snake_case.dart`
- Classes: `PascalCase`
- BLoC classes: `FeatureNameBloc`, `FeatureNameState`, `FeatureNameEvent`
- Variables/methods: `camelCase`
- Constants: `kConstantName`
- Widgets: `FeatureNameWidget` or `FeatureNamePage`

## Code Conventions
- Never put business logic inside Widget build() methods
- Use dependency injection (GetIt) for all use cases and repositories
- All Widgets that depend on BLoC must use BlocBuilder / BlocListener / BlocConsumer
- Use `freezed` for immutable state and data classes if available
- Prefer `const` constructors wherever possible
- Each feature must be self-contained; cross-feature access only through core/

## Approved Libraries
Only use libraries already declared in `pubspec.yaml`. Do NOT add new packages without user approval.

## What NOT To Do
- Do NOT use setState in pages that have a BLoC
- Do NOT hardcode strings — use the localization/l10n system
- Do NOT import across features directly; use core abstractions
- Do NOT put API calls inside Widgets or Pages
