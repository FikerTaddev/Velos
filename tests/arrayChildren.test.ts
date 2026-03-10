
import { describe, it, expect } from "vitest"
import { H} from "../src"

describe("array children", () => {

  it("renders array of children", () => {

    const items = ["A","B","C"]

    const el = H("ul", {},
      items.map(i => H("li", {}, i))
    )

    expect(el.children.length).toBe(3)

  })

})