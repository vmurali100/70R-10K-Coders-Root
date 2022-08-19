import { Component } from "react";

export class KeerthiClass extends Component{

    constructor(){
        super()
        console.log(this.state)
        this.state={
            fname:"Keerthi",
            person:{
                email:"keerthi@gmail.com",
                state:"AP"
            },
            users: ["Manasa","Keerthi","Sam"]
        }
    }

    //var myName ="keerthi" :in reactjs var cannot directly defined will use this.state in reactjs.
    render(){
        return <h2>Hello from Class Component - {this.state.fname}</h2>//class can return in this wayif we want to declare string,object,array.
   
    }
}

