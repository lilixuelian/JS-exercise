import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:'',
      checklist: false,
    }
  }
  
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  handleChooseAll(){
    this.state.checklist = true
  }

  render () {
    return (
      <div>
        <div>to do list</div>
        <input value = {this.state.inputValue} onChange = {this.handleInputChange.bind(this)}/>
        <button onClick = {this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li>
              <input type = "checkbox" checked = {this.state.checklist}></input>
              <input value={item}/>
              <button key = {index}>delete</button>
              </li>
            })
          } 
          <button onClick = {this.handleChooseAll.bind(this)}>choose all</button>
        </ul>
       
      </div>
    )
  }
}

