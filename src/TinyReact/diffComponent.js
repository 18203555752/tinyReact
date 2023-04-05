import mountElement from "./mountElement"

export default function diffComponent(virtualDom, oldComponent, oldDom, container){
  console.log(oldComponent === oldDom._virtualDom.component)
  if(sameComponent(virtualDom, oldComponent)){
    console.log('是同一个组件')
  }else{
    console.log('不是同一个组件')
    mountElement(virtualDom, container, oldDom)
  }
}

function sameComponent(virtualDom, oldComponent) {
  return oldComponent && virtualDom.type === oldComponent.constructor
}