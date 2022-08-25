import { Component } from "react";

export class VimalaClass extends Component{
    constructor(){
        super()
        console.log(this)
        this.state={
            fname:"vimala",
            person:{
                email:"malneedivimala@gmail.com",
                state:"ap"
            },
            users:['Ram','sundar','Dhar','Dhruv']
        }
    }
render(){
    return <h2>Hello from class component-{this.state.fname}</h2>
}
    
}