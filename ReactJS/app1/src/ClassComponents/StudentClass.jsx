import { Component } from "react";

export default class Student extends Component{
    constructor(){
        super()
        this.state={
            users:["meena","reena","anil","ankith"]
        }
    }
    render(){
        return <div>{this.state.users.map((val,i)=>{
            return <p key={i}>{val}</p>
        })}
        </div>
    }
}