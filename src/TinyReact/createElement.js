export default function createElement(type, prop, ...childrens) {
  const eleChildren = [].concat(...childrens).reduce((result, child)=> {
    if(child !== true && child !== false && child !== null) {
      if( child instanceof Object ) {
        result.push(child) 
      }else{
        result.push(createElement('text', {textContent: child})) 
      }
    }
    return result
  }, [])
  return {
    type,
    prop: Object.assign({children: eleChildren}, prop),
    children: eleChildren
  }
}