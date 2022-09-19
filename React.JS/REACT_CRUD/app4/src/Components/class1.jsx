import { Component } from "react";
import { ClassThree } from "./calss3";
import { ClassTwo } from "./class2";
import { ClassFour } from "./class4";
import { ClassFive } from "./class5";

export class ClassOne extends Component{
    constructor(){
        super()
        this.state = {
            fname : "Prudhvidhar"
        }
    }

    render(){
        return <div> 
        <h2>{this.state.fname} -- This is a string declared in this.state</h2>
        <hr />
        <ClassTwo />
        <ClassThree />
        <ClassFour />
        <ClassFive />
        </div>
    }
}