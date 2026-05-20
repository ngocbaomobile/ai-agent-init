# 🤖 ai-agent-init

> Bootstrap any project with AI-agent-ready documentation in seconds.

Stop wasting time explaining your project structure to every new AI Agent. Run one command, point your agent to one file, and get a fully documented, standardized project.

## The Problem

Every time you start a new AI coding session, you waste tokens and time re-explaining:
- What tech stack you're using
- What architecture patterns to follow
- What naming conventions to use
- Where files should go

## The Solution

`ai-agent-init` drops a smart bootstrap file into your project. You point your AI Agent to it, and the agent does the rest — generating tailored documentation for your specific codebase, then cleaning up after itself.

## Usage

```bash
# 1. cd into any project (new or existing)
cd my-project

# 2. Run the initializer
npx ai-agent-init init

# 3. Tell your AI Agent (Cursor, Copilot, Cline, Gemini, etc.):
# "Read docs/ai/ai_bootstrap.md and set up this project."
```

**That's it.** The agent will:
- 🔍 Analyze your codebase and detect the tech stack
- 📝 Generate `docs/ai/rules.md` — conventions tailored to your project
- 🗺️ Generate `docs/ai/project_map.md` — a map of your folder structure
- 📄 Create or update `README.md` with real project info
- ⚙️ Create `.cursorrules` and `.clinerules` at the root
- 🧹 Delete all template files automatically

## Supported Tech Stacks

The bootstrap templates cover conventions for:

| Stack | Detected By |
|---|---|
| Flutter / Dart | `pubspec.yaml` |
| Python | `requirements.txt`, `pyproject.toml` |
| Node.js / TypeScript | `package.json` |
| Go | `go.mod` |
| Generic | Fallback for any other project |

## What Gets Generated

```
your-project/
├── docs/
│   └── ai/
│       ├── rules.md          ← Code conventions & architecture for this project
│       └── project_map.md    ← Folder structure map with descriptions
├── README.md                 ← Updated with real project info
├── .cursorrules              ← For Cursor IDE
└── .clinerules               ← For Cline / Roo-Code
```

## Why This Works

The key insight is: **AI Agents are great at reading context and adapting**. Instead of writing complex detection logic in the CLI, we give the agent a clear instruction file (`ai_bootstrap.md`) and let it figure out the specifics. This makes the tool:

- ✅ **Adaptive** — works with any language or framework
- ✅ **Accurate** — agent reads actual code, not just file names
- ✅ **Lightweight** — CLI has zero dependencies
- ✅ **Self-cleaning** — no template clutter after setup

## Contributing

Contributions welcome! To add a new tech stack template:
1. Add a `templates/rules_<tech>.md` file
2. Reference it in `templates/ai_bootstrap.md`'s detection table

## License

MIT © [ngocbaomobile](https://github.com/ngocbaomobile)
