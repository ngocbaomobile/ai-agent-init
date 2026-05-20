# Swift / iOS — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a Swift/iOS project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: Swift 5.9+
- Platform: iOS 16+ / macOS 13+
- UI Framework: [SwiftUI / UIKit / Both — detect from source files]
- Architecture: [MVVM / MVC / TCA (The Composable Architecture) / VIPER — detect from folder structure]
- Package Manager: [Swift Package Manager (SPM) / CocoaPods — detect from Package.swift or Podfile]
- Networking: [URLSession / Alamofire / Moya — detect from Package.swift or Podfile]
- Async: [async/await / Combine / Completion handlers — detect from code style]

## Architecture
[Detect and describe. Common patterns:]
- **MVVM + SwiftUI**: Views observe ViewModels via @StateObject / @ObservedObject / @Observable
- **TCA**: Store, Reducer, Action, State pattern from pointfreeco/swift-composable-architecture
- **VIPER**: View, Interactor, Presenter, Entity, Router — common in older UIKit projects

## Folder Structure (SwiftUI MVVM example)
```
<AppName>/
├── App/              # App entry point, main scene
├── Features/         # One folder per feature
│   └── <Feature>/
│       ├── Views/
│       ├── ViewModels/
│       └── Models/
├── Core/             # Shared utilities, extensions, services
│   ├── Network/
│   ├── Storage/
│   └── Extensions/
└── Resources/        # Assets, fonts, localization strings
```

## Naming Conventions
- Files: `PascalCase.swift`
- Types/Classes/Structs/Enums: `PascalCase`
- Functions/variables/properties: `camelCase`
- Constants: `camelCase` (Swift style, not UPPER_SNAKE_CASE)
- Protocols: `PascalCase`, often suffixed with `-able`, `-ing`, or `-Delegate`
- View files: `FeatureNameView.swift`
- ViewModel files: `FeatureNameViewModel.swift`

## Code Conventions
- Prefer `struct` over `class` for value semantics (models, view models where possible)
- Use `@Observable` macro (iOS 17+) or `ObservableObject` for view models
- Use Swift Concurrency (`async/await`, `Task`, `Actor`) over Combine for new code
- Keep Views "dumb" — no business logic inside View body
- Use `private` access control by default; only expose what's necessary
- Prefer `let` over `var` wherever possible
- Handle errors explicitly — never use `try!` or `as!` in production code
- Use `#Preview` macro for SwiftUI previews

## What NOT To Do
- Do NOT use force unwrap (`!`) or force cast (`as!`) — use `guard let` or `if let`
- Do NOT put network calls or business logic directly in Views
- Do NOT use global singletons unless absolutely necessary (prefer dependency injection)
- Do NOT ignore `@MainActor` requirements for UI updates
