import React from 'react';

//定义一个React组件
class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputvalue:'',
      index: 0,
      finish: 0
    }
  }

  inputchange(e){
    this.setState({
      inputvalue: e.target.value
    })
  }

  add(){
    const {inputvalue, index} = this.state
    this.setState({
      list: [...this.state.list, {id: index, value: inputvalue, checked: false}],
      inputvalue: '',
      index: index + 1
    })
  }
  keyup(e){
    if(e.keyCode === 13) {
      this.add()
    }
  }
  deleteItem(index){
    const {list} = this.state
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  itemvaluechange(item, index, e){
    const {list} = this.state
    list.splice(index, 1, {id: item.id, value: e.target.value, checked: item.checked})
    this.setState({
      list: list
    })
  }
  changechecked(item){
    const {list, finish} = this.state
    item.checked = !item.checked
    this.setState({
      list: list,
      finish: finish + 1
    })
  }
  deletecompleted(){
    const {list} = this.state
    var i
    for(i = 0; i < list.length; i++){
      if(list[i].checked === true){
        list.splice(list.indexOf(list[i]), 1)
        i = -1
      }
    }
    this.setState({
      list: list
    })
  }
  chooseall(){
    const {list} = this.state
    list.map(item =>{
      item.checked = true
    })
    this.setState({
      list : list
    })
  }

  unchooseall(){
    const {list} = this.state
    list.map(item =>{
      item.checked = false
    })
    this.setState({
      list : list
    })
  }
  clear(){
    this.setState({
      list: []
    })
  }

  render (){
    const {inputvalue, finish, list} = this.state
    return(
    <div>
      <div>
        <input onChange={this.inputchange.bind(this)} value={inputvalue} onKeyUp={this.keyup.bind(this)}/>
        <button onClick={this.add.bind(this)}>
          add
        </button>
      </div>
      <ul>
        {
          this.state.list.map((item, index) =>
            <li key={item.id}>
            <input type="checkbox" onChange={this.changechecked.bind(this, item)} checked={item.checked}/>
            <input value={item.value} onChange={this.itemvaluechange.bind(this, item, index)}/>
            <button onClick={this.deleteItem.bind(this, index)}>delete</button>
            </li>  
          )
        }
      </ul>
      <button onClick={this.deletecompleted.bind(this)}>delete all completed</button>
      <button onClick={this.chooseall.bind(this)}>choose all</button>
      <button onClick={this.unchooseall.bind(this)}>unchoose all</button>
      <button onClick={this.clear.bind(this)}>clear</button>
      <div>已完成{finish}项</div>
      <div>未完成{list.length - finish}项</div>
    </div>

    )
  }
} 

export default TodoList;
