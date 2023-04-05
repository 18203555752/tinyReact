import isFunction from './isFunction'
import isFunctionComponent from './isFunctionComponent'
import mountNativeElement from './mountNativeElement'

export default function mountComponent(virtualDom, container, oldDom) {
  let nextVirtualDom = null
  if( isFunctionComponent(virtualDom) ) {
    nextVirtualDom = buildComponent(virtualDom)
  }else{
    nextVirtualDom = buildClassComponent(virtualDom)
  }
  if(isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, container, oldDom)
  }else {
    mountNativeElement(nextVirtualDom, container, oldDom)
  }  
}

function buildComponent(virtualDom) {
  // console.log(virtualDom.prop)
  return virtualDom.type(virtualDom.prop)
}

function buildClassComponent(virtualDom) {
  // console.log(virtualDom.prop)
  const component = new virtualDom.type(virtualDom.prop)
  const nextVirtualDom = component.render()
  nextVirtualDom.component = component
  return nextVirtualDom
}