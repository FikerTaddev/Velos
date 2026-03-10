import { describe, it, expect } from "vitest"
import { State } from "../src/"
describe("State", () => {

    it("should store initial value", () => {
        const count = State(0)
        expect(count.get()).toBe(0)
    })

    it("should update value", () => {
        const count = State(0)

        count.set(5)

        expect(count.get()).toBe(5)
    })

    it("should notify subscribers", () => {
        const count = State(0)

        let result = 0

        count.subscribe(v => {
            result = v
        })

        count.set(10)

        expect(result).toBe(10)
    })

})