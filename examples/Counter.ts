import { H, Render, State } from "../src/index.js"

const Counter = State(0)

function f() {
  Counter.set(Counter.get() + 1)
}

function App() {
  return H(
    "main",
    null,
    H(
      "h1",
      null,
      H("button", { onclick: f }, `Click me ${Counter.get()}`)
    )
  )
}

// Initial render
Render(App, document.body)

// Re-render whenever state changes
Counter.subscribe(() => {
  // Remove old content
  document.body.innerHTML = ""
  Render(App, document.body)
})