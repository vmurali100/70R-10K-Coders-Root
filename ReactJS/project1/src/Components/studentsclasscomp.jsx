import { Component } from "react";

export default class StudentClassComp extends Component{
    constructor(){
        super()
        this.state={
            users :["Vishnu","Vardhan","Vihari"]
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

  