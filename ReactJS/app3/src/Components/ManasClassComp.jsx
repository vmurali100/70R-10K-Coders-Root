import { Component } from "react";

export class ManasClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            fname: "Rocky",
            person:{
                email: "Rocky@hotmail.com",
                state: "Andhra"
            },
            users:["Lilly","Sahar","Mitania"]
        }
    }
    
    render(){
        return <h2>Hello from class component - {this.state.fname}</h2>
    }
}