export default function isFunctionComponent(virtualDom) {
  if(virtualDom.type && typeof virtualDom.type === 'function' && !(virtualDom.type.prototype && virtualDom.type.prototype.render)) {
    return true
  }

}