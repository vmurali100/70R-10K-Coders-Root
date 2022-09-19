import { Component } from "react";

export class ChildClassFive extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> Hello from Child Class Component</h2>
            <hr />
            <button onClick={this.props.changestate}>change State</button>
            <p>State : {this.props.state}</p>
            <hr />

            <button onClick={this.props.changecapital}>Change Capital </button>
            {Object.keys(this.props.capital).map((val,i)=>{
                return <p key={i}>{val} : {this.props.capital[val]}</p>
            })}
            <hr />
            
            <button onClick={this.props.changenext_capital}>Change Future Capital</button>
            {this.props.next_capital.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}