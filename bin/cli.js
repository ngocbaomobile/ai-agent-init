#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

const CYAN = '\x1b[36m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

function log(msg) { console.log(`${CYAN}[ai-agent-init]${RESET} ${msg}`); }
function success(msg) { console.log(`${GREEN}✔${RESET} ${msg}`); }
function warn(msg) { console.log(`${YELLOW}⚠${RESET} ${msg}`); }

function printHelp() {
  console.log(`
${BOLD}ai-agent-init${RESET} — Bootstrap any project with AI-agent-ready documentation.

${BOLD}Usage:${RESET}
  npx ai-agent-init init     Copy AI bootstrap templates to current directory
  npx ai-agent-init help     Show this help message

${BOLD}Workflow:${RESET}
  1. cd into your project directory
  2. Run: npx ai-agent-init init
  3. Tell your AI agent: "Read docs/ai/ai_bootstrap.md and set up the project"
  4. The AI agent will generate all docs and clean up the template files

${BOLD}Supports:${RESET}
  Flutter • Python • Node.js / TypeScript • Go • Generic
`);
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      if (fs.existsSync(destPath)) {
        warn(`Skipped (already exists): ${destPath}`);
      } else {
        fs.copyFileSync(srcPath, destPath);
        success(`Created: ${path.relative(process.cwd(), destPath)}`);
      }
    }
  }
}

function init() {
  const cwd = process.cwd();
  const templatesDir = path.join(__dirname, '..', 'templates');
  const destDir = path.join(cwd, 'docs', 'ai');

  console.log(`\n${BOLD}🚀 ai-agent-init${RESET}\n`);
  log(`Copying AI bootstrap templates to: ${destDir}\n`);

  if (!fs.existsSync(templatesDir)) {
    console.error('Error: templates directory not found. Please reinstall ai-agent-init.');
    process.exit(1);
  }

  copyDirRecursive(templatesDir, destDir);

  console.log(`
${GREEN}${BOLD}✅ Done!${RESET}

${BOLD}Next step — tell your AI Agent:${RESET}
${CYAN}"Read the file docs/ai/ai_bootstrap.md and follow the instructions to set up this project."${RESET}

The agent will:
  • Analyze the codebase and detect the tech stack
  • Generate docs/ai/rules.md, docs/ai/project_map.md, README.md
  • Create .cursorrules / .clinerules at the root
  • Clean up all template files automatically
`);
}

if (!command || command === 'help' || command === '--help' || command === '-h') {
  printHelp();
} else if (command === 'init') {
  init();
} else {
  console.error(`Unknown command: "${command}". Run "npx ai-agent-init help" for usage.`);
  process.exit(1);
}
