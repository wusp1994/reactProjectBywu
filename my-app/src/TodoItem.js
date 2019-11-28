import React , { Component} from 'react'

class TodoItem extends Component {
  
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  //父组件与子组件通信之==>子组件向父组件传值，需要子组件调用父组件的函数
  handleDelete(){
    console.log(this.props,"=====props ")
    const { deleteChild ,index} = this.props;
    deleteChild(index)
    // this.props.deleteChild(this.props.index)
  }
  
  render() {
    const { content } = this.props
    return <div className={"child"} onClick={this.handleDelete}>{content}</div>
  }
}

export default TodoItem;