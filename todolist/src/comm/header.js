import React,{Component} from "react";
class HeadModel extends Component{
  
  changeVal = (ev) => {
    this.props.changeVal(ev.target.value);
  }
  
  keyup = (ev) => {
    if(ev.keyCode === 13&&ev.target.value!==''){
      let json = {
        txt:ev.target.value,
        id: +new Date,
        checked:false
      }
      this.props.changeData(json);
      // console.log(ev.target.value)
    }
  }
  
  render(){
      // console.log(this.props.val);
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.changeVal}
            onKeyUp = {this.keyup}
          />
      </header>
    )
  }
}
export default HeadModel;
