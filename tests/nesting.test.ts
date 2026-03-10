// @vitest-environment jsdom
// @vitest-environment jsdom

import { describe, it, expect } from "vitest"
import { H } from "../src"

describe("deep nesting", () => {

  it("renders deeply nested structure", () => {

    const tree = H("div", { id: "root" },

      H("Header", {},
        H("nav", {},
          H("ul", {},
            H("li", {}, "Home"),
            H("li", {}, "Docs"),
            H("li", {}, "About")
          )
        )
      ),

      H("main", {},
        H("section", {},
          H("article", {},
            H("H1", {}, "Velos"),
            H("p", {}, "Reactive UI runtime")
          )
        )
      ),

      H("footer", {},
        H("small", {}, "2026 Velos")
      )

    )

    expect(tree.querySelectorAll("li").length).toBe(3)
    expect(tree.querySelector("article")?.textContent).toContain("Velos")
    expect(tree.querySelector("footer")).not.toBeNull()

  })

})