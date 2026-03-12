
# Velos 🚀

<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://raw.githubusercontent.com/FikerTaddev/Velos/refs/heads/main/docs/logo.svg" alt="Velos Logo" width="50" />
  <a href="https://www.apache.org/licenses/LICENSE-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License">
  </a>
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
</div>

**Velos** is a **lightweight, reactive UI framework** for the browser.  
v0.1.0 ships a **fully working core runtime** with:

- Hyperscript-based DOM (`H()`)  
- Render engine (`render()`)  
- Reactive state (`State()`)  
- Nested elements  
- Array children (for loops)  
- Event Handling (`onclick`)  
- All core features **fully tested**

> JSX support is planned but **not implemented yet**. Velos v0.1.0 focuses on **runtime primitives and reactivity**.

---

## Features v0.1.0

| Feature                       | Status                |
|--------------------------------|---------------------|
| `H()` element creation         | ✅ Implemented       |
| `render()` mounting            | ✅ Implemented       |
| `State()` reactivity     | ✅ Implemented       |
| Nested elements                | ✅ Implemented       |
| Array children support         | ✅ Implemented       |
| Event Handling (`onclick`)     | ✅ Implemented       |
| Tests                          | ✅ All passing       |
| JSX compiler                   | ⚠️ Planned           |

---

## Quick Start

```basH
git clone Https://github.com/FikerTaddev/velos.git
cd velos
npm install
npm run dev
```
## Create Html file
```bash 
mkdir dist 
cd dist
touch index.html
```
>> Then Add This In
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module" src="Counter.js">
</body>
</html>
```
Open your browser:

```
Http://localhost:3000/
```

Or, after building:

```bash
npm run build
```

- The build also **serves the project** locally at:

```
http://localhost:3000
```

---

## Example Usage

```typescript
import {H , render , State} from "./Velos"

// Reactive counter
const count = State(0)

function Counter() {
  return H("button", { onclick: () => count.set(count.get() + 1) }, `Count: ${count.get()}`)
}

// Nested elements + array cHildren
const app = H("div", {},
  H("H1", {}, "Hello Velos v0.1.0 🚀"),
  H(Counter, {}),
  H("ul", {}, ["A","B","C"].map(i => H("li", {}, i)))
)

render(app, document.body)
```

**Flow:**

```
H()        → creates virtual DOM node or functional component
  |
  v
render()   → mounts node to container
  |
  v
Browser DOM → updates automatically wHen state cHanges
```

---

## Folder Structure

```text
src/
├─ runtime/       # H() + render()
├─ reactivity/    # createState()
└─ index.ts       # Exports all runtime functions

tests/            # Unit and integration tests (all passing)
examples/         # Demo apps
docs/             # Images, diagrams, notes
```

---

## Roadmap

- Component system with props and state  
- JSX compiler (planned)  
- Bundler + CLI for full apps  
- SSR support and routing  

---

## License

Apache License 2.0 © 2026 Velos Team

![Velos Diagram](https://raw.githubusercontent.com/FikerTaddev/Velos/refs/heads/main/docs/logo.svg)


---
