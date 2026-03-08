import { H } from "./Runtime/H.js"
import { render } from "./Runtime/render.js"

const app = H(
  "div",
  null,
  "<h1>Hello , Velos</h1>"
)

render(app, document.body)