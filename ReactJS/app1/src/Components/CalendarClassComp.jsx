import { Component } from "react";

export class CalendarClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            Month: "August",
            Details:{
                Day: "Monday",
                Week: "Fourth"
            },
            users:["Sunday","Wednesday","Friday"]
        }
    }
    
    render(){
        return <h2>Hello from class component - {this.state.Month}</h2>
    }
}