export default function isFunction(virtualDom) {
  if(virtualDom.type && typeof virtualDom.type === 'function') {
    return true
  }

}