import mountElement from './mountElement.js'

export default function diff(virtualDom, container, oldDom) {
  if(!oldDom) {
    mountElement(virtualDom, container)
  }
}