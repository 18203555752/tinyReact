import mountElement from "./mountElement"
import updadeDomElement from "./updadeDomElement"

export default function createDomElement(virtualDom) {
  let newElement =null
  if(virtualDom.type === 'text') { //如果是文本节点
    newElement = document.createTextNode(virtualDom.prop.textContent)
  }else{
    newElement = document.createElement(virtualDom.type)
    updadeDomElement(newElement, virtualDom)
    virtualDom.children.forEach((child)=> {
      mountElement(child, newElement)
    })
  }
  return newElement
}