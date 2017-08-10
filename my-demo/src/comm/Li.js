import React,{Component} from 'react';
import '../css/style.css';
class Li extends Component {
    render(){
        return(
            <li>
                <input 
                type="text"
                value={this.state.val}
                onKeyUp={this.keyup}
                onChange={this.chage}
                /> 
                <p>{this.props.txt}</p>
            </li>
        )
    }
}
export default Li;
