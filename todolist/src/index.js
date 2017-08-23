import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './comm/header';
import LiModel from './comm/Li';
import Footer from './comm/footer';

class App extends Component{
  constructor(){
    super();
    this.state = {
      val:'',
      data:[
        {txt:'111',checked:true,id:1},
        {txt:'222',checked:false,id:2}
      ],
      view:'#/all'
    }
  }
  //切换checked
  PchangeChecked = (id) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    this.setState({
      data:data2
    });
    
  }
  //修改输入框的内容
  changeVal = (newVal) => {
    this.setState({
      val:newVal
    })
  }
  //添加数据
  changeData = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.unshift(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  //全选
  allChange = (ev) =>{
    let {checked} = this.all;
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.forEach((e,i)=>e.checked = checked)
    this.setState({
      data:data2
    })
    //console.log(ev.target)
  }
  //删除数据
  remove = (id) =>{
    let {data} = this.state;
    let list = data.filter(e=>{
      return e.id!==id
    })
    this.setState({
      data:list
    })
    console.log(list)
  }
  //替换数据
  changeText = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.forEach((e,i)=>{
      if(e.id === newData.id){
        data2.splice(i,1,newData)
      }
    });
    
    this.setState({
      data:data2
    });
    //console.log(data2);
    
  }
  //清除已选中
  clearFinish = ()=>{
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2 = data2.filter(e=>!e.checked)
    this.setState({
      data:data2
    })
  }
  changeView = (newView)=>{
    this.setState({
      view:newView
    })
  }
  render(){
   
    let {data} = this.state;
    let list = null;
    let all = false;

    let changeAll = null;
    let footer = null;
    let len = data.length;
    let filterView = Object.assign(data)
    
    filterView = filterView.filter(e=>{
      if(e.checked)len--;
      switch(this.state.view){
        case '#/active':
          return !e.checked;
        break;
        case '#/completed':
          return e.checked;
        break;
        default:
          return Object.assign(data);
        break;
      }
    });
    
    list = filterView.map((e,i)=>{
      let data = {
        key:i,
        id:e.id,
        txt:e.txt,
        checked:e.checked,
        remove:this.remove,
        changeText:this.changeText,
        PchangeChecked:this.PchangeChecked
      }
      return <LiModel {...data} />
    });
    if(data.length){
      all = data.every(e=>e.checked)
      changeAll = (
        <input
        className="toggle-all"
        type="checkbox"
        checked={all}
        onChange = {this.allChange}
        ref = {(elem) => {this.all = elem}}
      />
      )
      let footerData = {
        num:len,
        clearFinish:this.clearFinish,
        changeView:this.changeView,
        view:this.state.view
      }
      footer = (<Footer {...footerData}/>)
    }
    
   
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
        />
        <section className="main">
            {changeAll}
            <ul className="todo-list">
              {list}
            </ul>
        </section>
       {footer}
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
