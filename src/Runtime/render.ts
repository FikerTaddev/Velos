let currentRenderer: (() => void) | null = null

export function getGlobalRenderer() {
  return currentRenderer
}

/**
 * 
 * @param vnode Child Node or component function
 * @param container Parent container
 */
export function Render(vnode: Node | (() => Node), container: HTMLElement) {

  const refresh = () => {
    container.innerHTML = ""
    let node = typeof vnode === "function" ? vnode() : vnode
    if (!(node instanceof Node)) {
      throw new Error("Render: vnode must return a DOM Node")
    }
    container.appendChild(node)
  }

  currentRenderer = refresh
  refresh()
  return refresh
}