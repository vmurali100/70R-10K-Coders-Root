import { Component } from "react";

export class DataClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            fname: "Ammu",
            person:{
                email: "ammu@yahoo.com",
                state: "Telangana"
            },
            users:["Ramya","Nikku","Rasi"]
        }
    }
    
    render(){
        return <h2>Hello from class component - {this.state.fname}</h2>
    }
}