export function State<T>(initial: T) {
    let value = initial
    const listeners = new Set<(v:T)=>void>()
  
    function get() {
      return value
    }
  
    function set(v:T) {
      value = v
      listeners.forEach(fn => fn(value))
    }
  
    function subscribe(fn:(v:T)=>void) {
      listeners.add(fn)
    }
  
    return { get, set, subscribe }
  }