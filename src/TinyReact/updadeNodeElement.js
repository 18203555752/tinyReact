
export default function updadeNodeElement(newElement, virtualDom, oldVirtualDom = {}) {
  const newProps = virtualDom.prop
  const oldProps = oldVirtualDom.prop || {}
  Object.keys(newProps).forEach((propName)=> {
    const oldPropValue = oldProps[propName]
    const propValue = newProps[propName]
    
    if(propValue !== oldPropValue) {
      if(propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2)
        newElement.addEventListener(eventName, propValue)
        newElement.removeEventListener(eventName, oldPropValue)
      }else if(propName === 'value' || propName === 'checked') {
        newElement[propName] = propValue
      }else if( propName !== 'children' ) {
        if(propName === 'className') {
          newElement.setAttribute('class', propValue)
        }else{
          newElement.setAttribute(propName, propValue)
        }
      }
    }

  })

  // 如果有属性被删除
  Object.keys(oldProps).forEach((propName)=> {
    const oldPropValue = oldProps[propName]
    const propValue = newProps[propName]
    if(!propValue) return 
    if(propName.slice(0, 2) === 'on') {
      const eventName = propName.slice(2).toLowerCase()
      newElement.removeEventListener(eventName, oldPropValue)
    }else if(propName !== 'children'){
      newElement.removeAttribute(propName)
    }

  })
}