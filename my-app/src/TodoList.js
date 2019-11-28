import React,{ Component , Fragment} from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'

//定义一个组件
class TodoList extends Component {
  
  //es6语法 创建时就会被执行的
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputVal:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChildClick = this.handleChildClick.bind(this);
  }
  
  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputVal],
      inputVal:''
    })
    // this.state.list.push()
  }
  
  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      inputVal:e.target.value
    })
  }
  
  handleChildClick(index){
    console.log(index,"=====TodoList")
    let list = [...this.state.list];
    list.splice(index,1)
    this.setState({list})
  }
  
  render(){
    return (
      //jsx语法,{}内可写 js 表达式,被编译成 React.createElement()，ReactElement 对象
      //相当于包裹内容的空标签 对比vue <template>
      <Fragment>
        <div >
          <input value={this.state.inputVal} onChange={this.handleInputChange} type="text"/>
          <button className={'btn'} style={{background:'blue'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              //父组件与子组件通信之==>父组件向子组件传递参数 content，子组件通过this.props.content 接收
              return <TodoItem
                        deleteChild={this.handleChildClick}
                        key={index}
                        content={item}
                        index={index}
                      />
              // return <li key={index} onClick={this.handleChildClick.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
