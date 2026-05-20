# React Native — Rules & Conventions Template

> AI Agent: Use this file as reference to fill in `docs/ai/rules.md` for a React Native project.
> Adapt every section to match what you actually observe in the codebase.

## Tech Stack
- Language: TypeScript (strict mode)
- Framework: React Native [with Expo / bare workflow — detect from app.json or package.json]
- Navigation: [React Navigation v6 / Expo Router — detect from package.json]
- State Management: [Zustand / Redux Toolkit / Jotai / Context API — detect from package.json]
- Styling: [StyleSheet / NativeWind / Tamagui — detect from package.json]
- Networking: [Axios / React Query / SWR — detect from package.json]

## Folder Structure
```
src/
├── app/              # Screens / Expo Router routes
├── components/       # Reusable UI components
│   ├── common/       # Generic (Button, Text, Input, etc.)
│   └── <feature>/    # Feature-specific components
├── hooks/            # Custom React hooks
├── stores/           # State management (Zustand/Redux)
├── services/         # API calls, external services
├── utils/            # Pure utility functions
├── types/            # Shared TypeScript types/interfaces
├── constants/        # App-wide constants, theme tokens
└── assets/           # Images, fonts, icons
```

## Naming Conventions
- Files: `PascalCase.tsx` for components, `camelCase.ts` for hooks/utils
- Components: `PascalCase` (e.g., `UserProfileCard`)
- Hooks: `useFeatureName` (e.g., `useAuthState`)
- Screens: `FeatureNameScreen.tsx`
- Types/Interfaces: `PascalCase` (e.g., `UserProfile`, `ApiResponse<T>`)
- Constants: `UPPER_SNAKE_CASE`

## Code Conventions
- Enable `strict: true` in `tsconfig.json`
- Components must be functional — no class components
- Extract business logic into custom hooks or services, not inside components
- Use `React.memo()` for components that receive stable props but render frequently
- Always type component props with an explicit interface (`interface Props {}`)
- Use `const` arrow functions for components: `const MyComponent = () => {}`
- Use `StyleSheet.create()` for styles — avoid inline style objects in render

## What NOT To Do
- Do NOT use `any` type — use `unknown` with type guards
- Do NOT mix navigation logic inside UI components — use navigation hooks
- Do NOT use `useEffect` for data fetching — use React Query / SWR instead
- Do NOT hardcode colors/spacing — use theme tokens from constants/
- Do NOT use platform-specific code without `Platform.OS` checks
