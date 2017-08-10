import React,{Component} from 'react';
import '../css/Ctop.css';
class Ctop extends Component{
    constructor(){
        super();
        this.state = {
            arr:[
                {text:"第1条数据",checked:false,id:1},
                {text:"第2条数据",checked:false,id:2},
                {text:"第3条数据",checked:false,id:3},
                {text:"第4条数据",checked:true,id:4}
            ]
        }
    }
    changeChild = (id) => {
        let {arr} = this.state;
        let arr2 = Object.assign(arr);
        arr2.forEach((e,i) =>{
            if(e.id===id){
                e.checked = !e.checked;
                console.log(e)
            }
        })
        this.setState({
            arr:arr2
        })
        console.log(arr2)
    }
    render(){
        let {arr} = this.state;
        let list = arr.map((e,i)=>{
            let data = {
                text:e.text,
                key:i,
                id:e.id,
                checked:e.checked,
                child:this.changeChild
            }
            return <Li {...data}/>
        })
        return(
            <ul>
                {list}
            </ul>
        )
    }
}
class Li extends Component{
    change = (id)=> {
        this.props.child(this.props.id)
    }
     render(){
        return(
            <li>
                <input 
                type="checkbox"
                checked={this.props.checked}
                onChange={this.change}
                /> 
                <p>{this.props.text}</p>
            </li>
        )
    }
}
export default Ctop;
