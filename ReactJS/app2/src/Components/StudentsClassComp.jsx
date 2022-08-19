import { Component } from "react";

export class StudentsClassComp extends Component{
    constructor(){
        super()
        this.state={
            users:["Ram","Ravi","Sam","Sundar"]
        }
    }
    render(){
        return <div>
            {this.state.users.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
        </div>
    }
}