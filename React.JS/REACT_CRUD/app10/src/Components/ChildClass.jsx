import { Component } from "react";

export class ChildClass extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> Hello from the child class</h2>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p>Message is : {this.props.message}</p>
            <hr />
            <button onClick={this.props.changeObject}>Change Object</button>
            {Object.keys(this.props.object).map((val,i)=>{
                return <p key={i}>{val} : {this.props.object[val]}</p>
            })}
            <hr />
            <button onClick={this.props.changeArray}>Change Array</button>
            {this.props.array.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}