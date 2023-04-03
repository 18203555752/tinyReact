
export default function updadeNodeElement(virtualDom, oldVirtualDom, oldDom) {
  if( virtualDom.prop.textContent !== oldVirtualDom.prop.textContent ) {
    oldDom.textContent = virtualDom.prop.textContent
  }
}