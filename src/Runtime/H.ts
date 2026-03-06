/**
 * 
 * @param tag 
 * @param props 
 * @param children 
 * @returns 
 */
export function H(tag: string, props: any, ...children: any[]) {
    
    const element = document.createElement(tag)
  
    if (props) {
      for (const key in props) {
        element.setAttribute(key, props[key])
      }
    }
  
    children.forEach(child => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child))
      } else if (child instanceof Node) {
        element.appendChild(child)
      }
    })
  
    return element
  }