import diff from "./diff"


export default class Component{
  constructor(props) {
    this.props = props    
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取到最新的virtualDom对象
    const virtualDom = this.render()
    // 获取真实dom节点
    const oldDom = this.getDom()
    // 获取到父容器
    const container = oldDom.parentNode
    // 实现比对
    diff(virtualDom, container, oldDom)
  }

  setDom(dom) {
    this.dom = dom
  }

  getDom() {
    return this.dom
  }
}