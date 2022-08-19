import { Component } from "react";
import { ClassTwo } from "./class2";
import { ClassThree } from "./class3";
import { ClassFour } from "./class4";
import { ClassFive } from "./class5";


export class ClassOne extends Component{
    constructor(){
        super()
        this.state = {
            one : {
                "email" : "rathna@gmail.com",
                "id" : 1
                
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.one).map((val,i)=>{
                return <p key={i}>{val} : {this.state.one[val]}</p>
            })}
            <hr />
            <ClassTwo />
            <ClassThree />
            <ClassFour />
            <ClassFive />
            
        </div>
    }
}