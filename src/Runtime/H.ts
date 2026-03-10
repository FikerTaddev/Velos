type Component = (props: any) => HTMLElement

export function H( tag: string | Component, props: any = {}, ...children: any[]): HTMLElement {

  if (typeof tag === "function") {
    return tag({ ...props, children })
  }

  const el = document.createElement(tag)

  for (const key in props) {
    ; (el as any)[key] = props[key]
  }

  function append(child: any) {

    if (child == null) return

    // flatten arrays
    if (Array.isArray(child)) {
      child.forEach(append)
      return
    }

    if (typeof child === "string" || typeof child === "number") {
      el.appendChild(document.createTextNode(String(child)))
      return
    }

    if (child instanceof Node) {
      el.appendChild(child)
      return
    }

  }
  children.forEach(append)

  return el
}