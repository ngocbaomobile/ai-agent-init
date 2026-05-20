# Android / Kotlin — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for an Android/Kotlin project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Kotlin
- UI Framework: [Jetpack Compose / XML Views — detect from build.gradle and source files]
- Architecture: MVVM with Android Architecture Components
- DI: [Hilt / Koin — detect from build.gradle]
- Async: Kotlin Coroutines + Flow
- Networking: [Retrofit + OkHttp — detect from build.gradle]
- Local DB: [Room — detect from build.gradle]

## Folder Structure (Feature-based)
```
app/src/main/
├── java/<package>/
│   ├── core/           # Shared base classes, utils, DI setup
│   ├── data/           # Repositories (impl), DTOs, data sources, Room DAOs
│   ├── domain/         # Use cases, repository interfaces, domain models
│   ├── presentation/   # ViewModels, Composables/Fragments, UI state
│   │   └── <feature>/
│   │       ├── <Feature>ViewModel.kt
│   │       ├── <Feature>Screen.kt   (Compose) or <Feature>Fragment.kt
│   │       └── <Feature>UiState.kt
│   └── di/             # Hilt modules
└── res/                # Layouts (XML), drawables, strings
```

## Naming Conventions
- Files/Classes: `PascalCase`
- Functions/variables/properties: `camelCase`
- Constants: `UPPER_SNAKE_CASE` (companion object) or `camelCase` (top-level val)
- Composable functions: `PascalCase` (treated as components)
- ViewModels: `FeatureNameViewModel`
- UI State: `FeatureNameUiState` (sealed class or data class)

## Code Conventions
- Use `StateFlow` / `SharedFlow` for ViewModel → UI communication
- Use `sealed class` for UiState (Loading, Success, Error)
- Inject dependencies via constructor (with Hilt `@Inject`)
- Use `viewModelScope` for coroutines in ViewModels
- Never access Android context inside ViewModels — pass data only
- Use `data class` for all model/DTO types

## What NOT To Do
- Do NOT do network calls or DB access on the main thread
- Do NOT put business logic in Activities/Fragments/Composables
- Do NOT use `GlobalScope` for coroutines
- Do NOT use `LiveData` for new code — prefer `StateFlow`
