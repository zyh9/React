import React,{Component} from 'react';
import Li from './Li';
class Todo extends Component {
    constructor(){
        super();
        this.state = {
            val:'',
            arr:['这是第一条数据']
        }
    }
    chage = (ev) =>{
        this.setState({
            val:ev.target.value
        })
        console.log(ev.target.value)
    }
    keyup = (ev) =>{
        if(ev.keyCode===13){
            let {arr} = this.state;
            let arr2 = Object.assign(arr);
            arr2.push(ev.target.value);
            this.setState({
                arr:arr2,
                val:''
            })

            console.log(arr)
        }
        //console.log(ev.target.value)
    }
    
    render(){
        let {arr} = this.state;
        let arr3 = arr.map((e,i)=>{
            let data = {
                txt:e,
                num:i,
                key:i
            }
            return <Li {...data}/>
        })
        return(
            <div>
                <input 
                type="text"
                value={this.state.val}
                onKeyUp={this.keyup}
                onChange={this.chage}
                /> 
                <ul>
                    {arr3}
                </ul>
            </div>
        )
    }
}
export default Todo;
