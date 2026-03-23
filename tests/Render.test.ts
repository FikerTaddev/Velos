import { describe, it, expect } from "vitest"
import { Render } from "../src"
import { H } from "../src"

describe("Render()", () => {

  it("mounts element to container", () => {

    const container = document.createElement("div")

    Render(
      H("p", {}, "hello"),
      container
    )

    expect(container.children.length).toBe(1)
  })

})