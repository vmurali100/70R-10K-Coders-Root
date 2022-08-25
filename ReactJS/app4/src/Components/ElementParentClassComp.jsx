import { Component } from "react";
import { ChildElementClass } from "./ChildElementClassComp";

export class ElementParentClasscomp extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to IT World",
            person:{

            }
        }
    }
    render(){
        return<div>
            <h2>Hello From Element Parent Class Component</h2>
            <ChildElementClass/>
        </div>
    }
 
}