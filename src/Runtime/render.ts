/**
 * 
 * @param vnode Child Node
 * @param container  Parrent container
 */
export function Render(vnode: Node | (() => Node), container: HTMLElement) {
    // remove old content
    container.innerHTML = ""
    let node = typeof vnode === "function" ? vnode() : vnode
       // Make sure To check type of node before appending
    if (!(node instanceof Node)) {
        throw new Error("Render: vnode must return a DOM Node")
    }
    container.appendChild(node)
}