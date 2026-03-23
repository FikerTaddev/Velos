import { getGlobalRenderer } from "../Runtime/Render.js"

export type Subscriber<T = any> = (value: T) => void

export function State<T>(initial: T, notify?: () => void) {

  let value = initial
  const listeners = new Set<Subscriber<T>>()

  function get(): T {
    return value
  }

  function set(v: T | ((prev: T) => T)) {

    if (typeof v === "function") {
      value = (v as (p: T) => T)(value)
    } else {
      value = v
    }

    listeners.forEach(fn => fn(value))
    
    // Use provided notify or the global renderer
    const update = notify || getGlobalRenderer()
    if (update) update()
  }

  function subscribe(fn: Subscriber<T>) {
    listeners.add(fn)
    return () => listeners.delete(fn)
  }

  const res = { get, set, subscribe }
  // Support both object and tuple destructuring
  return Object.assign([get, set] as [() => T, (v: T | ((p: T) => T)) => void], res) as any
}