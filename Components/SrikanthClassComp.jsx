import { Component } from "react";

export class SrikanthClass extends Component{
    constructor(){
        super()
        this.state = {
            fname:"Srikanth",
            lname:"Chokkalla",
            person:{
                email:"srikanthchokkalla@gmail.com",
                state:"Telangana"
            },
            users:["Navi", "Lav", "Muki"]
        }
        console.log(this)
    }
    render(){
        return <h4>Hello From Class Components - {this.state.fname}</h4>
    }
}