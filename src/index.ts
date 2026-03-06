import { H } from "./Runtime/H.js"
import { render } from "./Runtime/render.js"

const app = H(
  "div",
  null,
  "Hello Velos 🚀"
)

render(app, document.body)