import { Component } from "react";

export class NameOneClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            fname: "Mansa",
            person:{
                email: "Mansa@yahoo.com",
                state: "Telangana"
            },
            users:["Ajay","Pavan","Raj"]
        }
    }
    
    render(){
        return <h2>Hello from class component - {this.state.fname}</h2>
    }
}