import { Component } from "react";
import { ChildElementClass } from "./ChildElementClassComp";

export class ElementParentClasscomp extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to IT World",
            person:{
                fname:"Yogita",
                lname:"Palla"

            },
            user:["Yamini", "Yuvi","Yuong"],
        }
    }
    handleChange=()=>{
        this.setState({message:"Welcome to NewYork"})
      }
    
    render(){
        return<div>
            <h2>Hello From Element Parent Class Component</h2>
            {/* <ChildElementClass {...this.state}/> */}
            <ChildElementClass 
            msg={this.state.message}
            persondetails={this.state.person}
            userdetails={this.state.user}
            changemsg={this.handleChange}/>
        </div>
    }
 
}
   