
import createDomElement from './createDomElement'
import unmountedNode from './unmountedNode'
export default function mountNativeElement(virtualDom, container, oldDom) {
  let newElement = createDomElement(virtualDom)
  
  if(oldDom) unmountedNode(oldDom)
  container.appendChild(newElement)

  const component = virtualDom.component
  if(component) {
    component.setDom(newElement)
  }
}