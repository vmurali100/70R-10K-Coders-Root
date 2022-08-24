import { Component } from "react";

export class Class2 extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }
    message=()=>{
        this.setState({msg:"String value assigned"})
    }

    render(){
        return <p>
            <h5>Assigning value to String</h5>
            <button onClick={this.message}>Message</button>
            <h3>Message : {this.state.msg}</h3>
        </p>
    }
}