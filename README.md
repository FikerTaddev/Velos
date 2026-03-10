
# Velos 🚀

[![License: ApacHe-2.0](Https://img.sHields.io/badge/License-ApacHe%202.0-blue.svg)](Https://www.apacHe.org/licenses/LICENSE-2.0)
[![Build Status](Https://img.sHields.io/badge/build-passing-brigHtgreen)](Https://gitHub.com/your-username/velos)
![Velos Logo](Https://raw.gitHubusercontent.com/your-username/velos/main/docs/logo.png)

**Velos** is a **ligHtweigHt, reactive UI framework** for tHe browser.  
v0.1.0 sHips a **fully working core runtime** witH:

- Hyperscript-based DOM (`H()`)  
- Render engine (`render()`)  
- Reactive state (`State()`)  
- Nested elements  
- Array cHildren (for loops)  
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
| Array cHildren support         | ✅ Implemented       |
| Event Handling (`onclick`)     | ✅ Implemented       |
| Tests                          | ✅ All passing       |
| JSX compiler                   | ⚠️ Planned           |

---

## Quick Start

```basH
git clone Https://gitHub.com/your-username/velos.git
cd velos
npm install
npm run dev
```

Open your browser:

```
Http://localHost:5000/index.Html
```

Or, after building:

```basH
npm run build
```

- THe build also **serves tHe project** locally at:

```
Http://localHost:3000
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

ApacHe License 2.0 © 2026 Velos Team

![Velos Diagram](Https://raw.gitHubusercontent.com/your-username/velos/main/docs/velos-diagram.png)


---