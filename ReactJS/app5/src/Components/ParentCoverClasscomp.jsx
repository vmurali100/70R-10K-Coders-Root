import { Component } from "react";
import { ChildCoverClass } from "./ChildCoverClassComp";

export class ParentCoverClass extends Component{
    constructor(){
        super()
        this.state={
            message:"I'm from India",
            person:{
                fname:"Mandy",
                lname:"Ramya"
            },
            user:["Manu","Rocky","Brodny"]
        }
    }
    handleChange=()=>{
        this.setState({message:"Hey...Everyone!!!!"})
    }
    render(){
        return<div>
            <h2>Hello from Parent Cover Class Component</h2>
            {/* <ChildCoverClass {...this.state}/> */}
            <ChildCoverClass 
            msg={this.state.message}
            persondetails={this.state.person}
            userdetails={this.state.user}
            changemsg={this.handleChange}/>

        </div>
    }
}