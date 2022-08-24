import { Component } from "react";

export class Class1 extends Component{
    constructor(){
        super()
        this.state={
            fname:"Meena",
            lname:"Seelam",
            age:27
        }
    }
    render(){
        return <p>{this.state.fname} {this.state.lname}</p>
    }
}