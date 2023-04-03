import mountElement from './mountElement.js'
import updadeTextNodes from './updadeTextNodes'
import updadeNodeElement from './updadeNodeElement'
import createDomElement from './createDomElement'
export default function diff(virtualDom, container, oldDom = container.firstChild) {
  const oldVirtualDom = oldDom && oldDom._virtualDom
  if(!oldDom) {
    // 首次渲染
    mountElement(virtualDom, container)
  }else if(virtualDom.type !== oldVirtualDom.type && typeof oldVirtualDom.type !== 'function'){
    const newElement = createDomElement(virtualDom)
    const parent = oldDom.parentNode
    parent.replaceChild(newElement, oldDom)
  }else if(oldVirtualDom && virtualDom.type === oldVirtualDom.type) {
    // 更新
    if(virtualDom.type === 'text') {
      // 更新文本节点
      updadeTextNodes(virtualDom, oldVirtualDom, oldDom)
    }else{
      // 更新元素属性
      updadeNodeElement(oldDom, virtualDom, oldVirtualDom)
    }

    virtualDom.children.forEach((child, idx)=> {
      diff(child, oldDom, oldDom.childNodes[idx])
    })
  }



}