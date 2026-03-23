import { H, Render, State } from "../src/index.js"

// Simple state initialization
const [getCount, setCount] = State(0)

function f() {
  setCount(getCount() + 1)
}

function App() {
  return H(
    "main",
    null,
    H(
      "h1",
      null,
      H(
        "button",
        { onclick: f },
        `Click me ${getCount()}`
      )
    )
  )
}

// Render the app
Render(App, document.body)