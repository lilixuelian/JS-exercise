import React from 'react';
import TodoItem from './TodoItem';

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
    //这种写法可以省略后面JSX中的bind(this)
    this.inputchange = this.inputchange.bind(this);
    this.add = this.add.bind(this);
    this.changechecked = this.changechecked.bind(this);
    this.itemvaluechange = this.itemvaluechange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deletecompleted = this.deletecompleted.bind(this);
    this.chooseall = this.chooseall.bind(this);
    this.unchooseall = this.unchooseall.bind(this);
    this.clear = this.clear.bind(this);
  }

  inputchange(e){
    this.setState({
      inputvalue: e.target.value
    })
  }

  add(){
    const {inputvalue, index} = this.state
    if(inputvalue.length === 0){
      alert('请输入待办内容')
    }
    else{
      //　新版中，setState不仅可以接收对象，可以接收函数了，函数需要有一个返回值，return这个对象，因为是对象所以要加{}
      // this.setState(() =>{
      //   return {
      //     list: [...this.state.list, this.state.inputvalue],
      //     inputvalue: ''
      //   }
      // })

      //　ES6语法中return的简写形式：
      // this.setState(() =>　({
      //   list: [...this.state.list, this.state.inputvalue],
      //      inputvalue: ''
      // })

      //　同时setState新增了一个参数prevState,这个参数等同于this.state，表示之前的状态
      // })
      // this.setState((prevState) => ({
      //   list: [...prevState.list, prevState.inputvalue],
      //   inputvalue: ''
      // }))
      this.setState({
        list: [...this.state.list, {id: index, value: inputvalue, checked: false}],
        inputvalue: '',
        index: index + 1
      })
    }
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
    // 可以直接仅仅返回一个list
    // this.setState(() => ({
    //   list
    // }))

    // 也可以写成return的形式，把const放进去(这样比较好看)
    // this.setState(() => {
    //   const {list} = this.state
    //   list.splice(index, 1)
    //   return {list}
    // })
  }
  itemvaluechange(item, index, e){
    const {list} = this.state
    if(e.target.value.length === 0){
      alert('请输入待办内容')
    }
    else{
      list.splice(index, 1, {id: item.id, value: e.target.value, checked: item.checked})
      this.setState({
        list: list
      })
    }
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
    list.map(item => item.checked = true)
    this.setState({
      list : list
    })
  }

  unchooseall(){
    const {list} = this.state
    // item有{}的时候需要return，没有的时候不需要return
    // list.map(item =>{
    //   item.checked = false
    // })
    list.map(item => item.checked = false)
    this.setState({
      list : list
    })
  }
  clear(){
    this.setState({
      list: []
    })
  }
  //这种写法让JSX花括号里只有一个表达式，看起来更简洁
  getTodoItem(){
    return this.state.list.map((item, index) => 
    <TodoItem 
      item={item}
      key={item.id}
      value={item.value}
      checked={item.checked} 
      index={index}
      changechecked={this.changechecked}
      changevalue={this.itemvaluechange}
      deleteitem={this.deleteItem}
    />)
  }
  render (){
    const {inputvalue, finish, list} = this.state
    return(
    <div>
      <div>
        <input onChange={this.inputchange} value={inputvalue} onKeyUp={this.keyup.bind(this)}/>
        <button onClick={this.add}>
          add
        </button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
      <button onClick={this.deletecompleted}>delete all completed</button>
      <button onClick={this.chooseall}>choose all</button>
      <button onClick={this.unchooseall}>unchoose all</button>
      <button onClick={this.clear}>clear</button>
      <div>已完成{finish}项</div>
      <div>未完成{list.length - finish}项</div>
    </div>

    )
  }
} 


export default TodoList;
