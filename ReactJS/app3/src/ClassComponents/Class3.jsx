import { Component } from "react";

export class Class3 extends Component{
    constructor(){
        super()
        this.state={
            obj:{},
        }
    }
    Objectvalues=()=>{
        this.setState({obj:{fname:"seetha",lname:"laxmi"}})
    }

    render(){
        return <p>Assigning values to Object <br />
            <button onClick={this.Objectvalues}>Object Values</button>
            <li> {this.state.obj.fname} </li>
            <li> {this.state.obj.lname} </li>
        </p>

    }
}