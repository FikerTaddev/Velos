import { describe, it, expect } from "vitest"
import { render } from "../src"
import { H } from "../src"

describe("render()", () => {

  it("mounts element to container", () => {

    const container = document.createElement("div")

    render(
      H("p", {}, "hello"),
      container
    )

    expect(container.children.length).toBe(1)
  })

})