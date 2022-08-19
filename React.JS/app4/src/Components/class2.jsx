import { Component } from "react";

export class ClassTwo extends Component{
    constructor(){
        super()
        this.state = {
            users : ["one","two","three"]
        }
    }

    render(){
        return <div>
        {this.state.users.map((val,i)=>{
            return <p key={i}>{val} </p>
             
        })}
        <hr />
        </div>
    }
}