
import createDomElement from './createDomElement'
export default function mountNativeElement(virtualDom, container) {
  let newElement = createDomElement(virtualDom)
  
  container.appendChild(newElement)
}