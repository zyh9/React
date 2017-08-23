import React,{Component} from "react";
import PropTypes from 'prop-types';
class LiModel extends Component{
  constructor(props){
    super(props);
    this.state = {
      db:false,
      val:this.props.txt
    }
  }
  changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
    //console.log(this.props.id);
  }
  click = () =>{
      this.props.remove(this.props.id);
  }
  dbclick = () => {
    this.setState({
      db:true,
      val:this.props.txt
    },()=>{
      this.db.focus();
    });
  }
  blur = () => {
    console.log(this.db.value)
    let {id,checked} = this.props;
    let newData = {
      id:id,
      checked:checked,
      txt:this.db.value
    }
    this.props.changeText(newData);

    this.setState({
      db:false
    });
  }
  keyup = (ev) =>{
    if(ev.keyCode===13){
      this.blur();
    }else if(ev.keyCode===27){
      this.setState({
        db:false
      },()=>{
        //回调
        this.db.value = this.props.txt; 
      });
    }
  }
  change = (ev) =>{
    this.setState({
      val:this.db.value
    })
  }
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    if(this.state.db){
      sClass += ' editing';
    }
    
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange = {this.changeChecked}
                checked={checked}
              />
              <label
              onDoubleClick = {this.dbclick}
              >{txt}</label>
              <button className="destroy" 
              onClick={this.click}
              ></button>
          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className ="edit"
            onBlur = {this.blur}
            onKeyUp = {this.keyup}
            value = {this.state.val}
            onChange = {this.change}
          />
      </li>
    )
  }
}
LiModel.propTypes = {
  checked:PropTypes.bool,
  txt:PropTypes.string
}
export default LiModel;
