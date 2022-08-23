import { Component } from "react";

export class VardhanClass extends Component{
    constructor(){
        super()
        this.state={
            fname:"Vishnu Vardhan",
            person:{
                email:"vardhanyella@gmail.com",
                state:"ts"
            },
            users:["Vardhan","Vihari"]
        }
    }
    render(){
        return <h2>Hello from Vardhan Class Component  - {this.state.fname}</h2>
    }
}