/**
 * 
 * @param vnode Child Node
 * @param container  Parrent container
 */
export function render(vnode: Node, container: HTMLElement) {
    container.appendChild(vnode)
}