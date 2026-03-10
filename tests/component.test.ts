// @vitest-environment jsdom

import { describe, it, expect } from "vitest"
import { H } from "../src"

describe("components", () => {

  function Hello() {
    return H("h1", {}, "Hello")
  }

  it("renders functional component", () => {

    const el = H(Hello,{})

    expect(el.tagName).toBe("H1")
    expect(el.textContent).toBe("Hello")

  })

})