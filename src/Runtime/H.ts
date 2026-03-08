/**
 * HyperScript
 * @param tag  HTMLTag div , h1  ,nav...
 * @param props HTMLAtrributes class style...
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