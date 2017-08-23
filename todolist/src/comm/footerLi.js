import React,{Component} from "react";
class FooterLi extends Component{
    changeView = ()=>{
        this.props.changeView(this.props.hash)
        //console.log(this.props.changeView)
    }
    
    render(){
        return (
            <li>
              <a
                href={this.props.hash}
                className={(this.props.view === this.props.hash)?'selected':''}
                onClick = {this.changeView}
              >{this.props.name}</a>
            </li>
          )
    }
}
export default FooterLi;
