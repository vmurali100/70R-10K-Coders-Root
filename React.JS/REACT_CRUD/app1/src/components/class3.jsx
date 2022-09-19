import { Component } from "react";

export class ClassThree extends Component{
    constructor(){
        super()
        this.state = {
            course : {
                "name" : "JavaScript",
                "lecturer" : "Murali",
                "days" : "90days",
                "fee" : 42000
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.course).map((val,i)=>{
                return <p key={i}>{val} : {this.state.course[val]}</p>
            })}
            <hr />
        </div>
    }
}