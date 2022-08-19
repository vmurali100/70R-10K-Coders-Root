import { Component } from "react";

export class ManasClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            fname: "Ammulu",
            person:{
                email: "ammu@yahoo.com",
                state: "Telangana"
            },
            users:["Krishna","Prasanna","Ashok"]
        }
    }
    
    render(){
        return <h2>Hello from class component - {this.state.fname}</h2>
    }
}