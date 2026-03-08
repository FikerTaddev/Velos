# Velos 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)  
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-username/velos)

**Velos** is a **lightweight, reactive UI framework and JSX compiler** for the browser.  
It provides minimal DOM primitives, reactive state, and JSX support, designed to be fast, simple, and scalable.

---

## Features

- Tiny runtime with **`h()` element creator** and **`render()` mount function**  
- Reactive state management (using `signal`)  
- JSX support via a lightweight compiler transform  
- Browser-first design for instant DOM updates  
- Fully modular: runtime, reactivity, JSX, and CLI separated  
- Simple project structure, ready for extension into a full framework  

---

## Folder Structure

```text
velos/
├─ src/
│  ├─ runtime/
│  │  ├─ h.ts           # Element creator
│  │  └─ render.ts      # Mount function
│  ├─ reactivity/
│  │  └─ signal.ts      # Reactive state primitives
│  ├─ jsx/
│  │  └─ jsx-runtime.ts # JSX helpers
│  └─ index.ts          # Entry point
├─ examples/            # Demo apps
├─ tests/               # Unit and integration tests
├─ docs/                # Documentation
├─ cli/
│  └─ velos.ts          # CLI tools
├─ package.json
└─ tsconfig.json
```
# Prerequisites
- Node.js v18+
- NPM or PNPM
- Browser for runtime testing

# Installation
git clone https://github.com/your-username/velos.git
cd velos
npm install

# Development
```javascript 
npm run dev
```
# Compile TypeScript
```
npm run build
```
# Serve project with local HTTP server
```
npx serve .
```
# Open in browser
```
http://localhost:5000/index.html
```
# Expected output
Hello Velos 🚀
```typescript
// src/index.ts
import { h } from "./runtime/h.js"
import { render } from "./runtime/render.js"

const app = h("div", null, "Hello Velos 🚀")

render(app, document.body)
```
          +--------+
          |  h()   |  <-- create virtual DOM node
          +--------+
               |
               v
         +-----------+
         | render()  |  <-- mount node to container
         +-----------+
               |
               v
        +----------------+
        | Browser DOM    |  <-- updates page
        +----------------+```
# Future Plans
- Reactive signals that update the DOM automatically
- Component system with props and state
- JSX compiler for transforming Velos JSX into h() calls
- Bundler + CLI for building full apps
- SSR support and router

# Contributing
## Fork the repository
## Create a new branch
```
git checkout -b feat/your-feature
```
# Make your changes, then commit
```
git commit -m "feat: add reactive signal primitive"
```
# Push and create a pull request
```
git push origin feat/your-feature
```
# Serve Velos project
```
npx serve .
```
# Open in browser
```
http://localhost:5000/index.html
```