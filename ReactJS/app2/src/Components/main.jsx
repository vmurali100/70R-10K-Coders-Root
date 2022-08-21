import { Component } from "react";

export class Srikanth extends Component{
    constructor(){
        super()
        this.state={
           person:{
            fname:"Srikanth",
            lname:"Chokkalla",
           }
        }
    }
   render(){
    return <div>
        {Object.keys(this.state.person).map((val,i)=>{
            return <p key={i}>{val}:{this.state.person[val]}</p>
        })}
    </div>
   }
}