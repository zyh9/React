import React,{Component} from 'react';
import Li from './Li';
import '../css/style.css';
class Ul extends Component {
    constructor(){
        super();
        this.state = {
            arr:['其实','真的','很难']
        }
    }
    Click = () =>{
        let {arr} = this.state;
        let arr2 = Object.assign(arr)
        arr2.push('呵呵')
        this.setState({
            arr:arr2
        })
    }
    render(){
        let {arr} = this.state;
        let list = arr.map((e,i)=>{
            let data = {
                txt:e,
                num:i,
                key:i
            }
            return <Li {...data}/>
        })
        return(
            <div>
                <button onClick={this.Click}>按钮</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
export default Ul;
