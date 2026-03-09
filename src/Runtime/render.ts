/**
 * 
 * @param vnode Child Node
 * @param container  Parrent container
 */
export function render(vnode: Node, container: HTMLElement) {
    // remove old content
    container.innerHTML = ""
    container.appendChild(vnode)
}