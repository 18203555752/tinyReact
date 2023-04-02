
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

console.log(ele)

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

// console.log(<Head></Head>)
TinyReact.render(<Head title='你好props'></Head>, container)