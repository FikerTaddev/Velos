import { describe, it, expect } from "vitest"
import { H  } from "../src"

describe("h()", () => {

  it("creates element", () => {
    const el = H("div", {})

    expect(el.tagName).toBe("DIV")
  })

  it("adds children", () => {
    const el = H("div", {},
      H("span", {}, "hello")
    )

    expect(el.children.length).toBe(1)
  })

})