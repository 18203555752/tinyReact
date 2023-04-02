
export default function updadeDomElement(newElement, virtualDom) {
  const props = virtualDom.prop
  Object.keys(props).forEach((propName)=> {
    const propValue = props[propName]
    if(propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(2)
      newElement.addEventListener(eventName, propValue)
    }else if(propName === 'value' || propName === 'checked') {
      newElement[propName] = propValue
    }else if( propName !== 'children' ) {
      if(propName === 'className') {
        newElement.setAttribute('class', propValue)
      }else{
        newElement.setAttribute(propName, propValue)
      }
    }
  })
}