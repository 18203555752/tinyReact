import mountNativeElement from './mountNativeElement.js'
import isFunction from './isFunction'
import mountComponent from './mountComponent'
export default function mountElement(virtualDom, container, oldDom) {
  if(isFunction(virtualDom)) {
    mountComponent(virtualDom, container, oldDom)
  }else {
    mountNativeElement(virtualDom, container, oldDom)
  }
}