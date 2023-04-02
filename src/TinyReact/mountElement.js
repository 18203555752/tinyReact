import mountNativeElement from './mountNativeElement.js'
import isFunction from './isFunction'
import mountComponent from './mountComponent'
export default function mountElement(virtualDom, container) {
  if(isFunction(virtualDom)) {
    mountComponent(virtualDom, container)
  }else {
    mountNativeElement(virtualDom, container)
  }
}