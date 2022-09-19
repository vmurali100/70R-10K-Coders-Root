import { Component } from "react";

export class ChildClassFour extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> Hello from Child Class Component</h2>
            <hr />
            <button onClick={this.props.changemessage}>change Message</button>
            <p> Message : {this.props.message}</p>
            <hr />

            <button onClick={this.props.changeobject}>Change Greeting </button>
            {Object.keys(this.props.object).map((val,i)=>{
                return <p key={i}>{val} : {this.props.object[val]}</p>
            })}
            <hr />
            
            <button onClick={this.props.changearray}>Change Numbers</button>
            {this.props.array.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}