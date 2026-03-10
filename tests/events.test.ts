// @vitest-environment jsdom

import { describe, it, expect } from "vitest"
import { H } from "../src"

describe("events", () => {

  it("handles click events", () => {

    let clicked = false

    const btn = H("button", {
      onclick: () => {
        clicked = true
      }
    }, "Click")

    btn.click()

    expect(clicked).toBe(true)

  })

})