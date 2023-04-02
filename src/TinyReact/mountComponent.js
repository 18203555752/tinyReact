import isFunction from './isFunction'
import isFunctionComponent from './isFunctionComponent'  
import mountElement from './mountElement'
import mountNativeElement from './mountNativeElement'

export default function mountComponent(virtualDom, container) {
  let nextVirtualDom = null
  if( isFunctionComponent(virtualDom) ) {
    nextVirtualDom = buildComponent(virtualDom)
  }
  if(isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, container)
  }else {
    mountNativeElement(nextVirtualDom, container)
  }  
}

function buildComponent(virtualDom) {
  // console.log(virtualDom.prop)
  return virtualDom.type(virtualDom.prop)
}