import { Component } from "react";
import { ClassTwo } from "./class2";

export class ClassOne extends Component{
    constructor(){
        super()
        this.state = {
            india : ["Virat Kohli","Rohith Sharma","KL Rahul","Pandya"]
        }
    }

    render(){
        return <div>
            {this.state.india.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
            <ClassTwo />
        </div>
    }
}