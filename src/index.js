
import TinyReact from './TinyReact/index'

const ele = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2>(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
  </div>
)

const ele2 = (
  <div className="container">
    <h1 className='h1'>你好 Tiny Reactupdated</h1>
    <h2>(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段被修改的内容</span>
    <button onClick={() => alert("新的你好！")}>点击我</button>
    <h6 className='h6'>替换原来的h3</h6>
    2, 3
  </div>
)


const container = document.getElementById('root')
// TinyReact.render(ele, container)

const Head = (props)=> {
  return <div id='main'>
    &heart;
    {props.title}
    <Demo></Demo>
  </div>
  
}

const Demo = ()=> {
  return <div>hello</div>
}

// TinyReact.render(<Head title='你好props'></Head>, container)

// TinyReact.render(ele, container)

// setTimeout(()=> {
//   TinyReact.render(ele2, container)
// }, 2000)
// TinyReact.render(<Head title='你好props'></Head>, container)

// 类组件
class Alert extends TinyReact.Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'default title'
    }

    this.handleClick = ()=>{
      this.setState({
        title: 'changeTitle'
      })
    }
  }
  

  render() {
    return (<div className='类组件'> 
      我是类组件
      <div>{this.props.title}</div>
      <div>{this.state.title}</div>
      <button onClick={this.handleClick}>改变title</button>
    </div>)
  }
}

TinyReact.render(<Head title='你好props' />, container)
setTimeout(()=> {
  TinyReact.render(<Alert title='你好props' />, container)
}, 3000)



