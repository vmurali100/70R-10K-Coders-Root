import { Component } from "react";
import { ChildClass } from "./ChildClass";

export class ParentClass extends Component{
    constructor(){
        super()
        this.state = {
            message : "Hi Prudhvidhar",
            object : {
                fname : "Virat",
                lname : "Kohli"
            },
            array : ["one","two","three","four","five"]
        }
    }

    changeMessage=()=>{
             this.setState({message : "Bye Prudhvidhar"})
    }

    changeObject=()=>{
        this.setState({object : {
            fname : "Rohith",
            lname : "Sharma"
        }})
    }

    changeArray=()=>{
        this.setState({array : ["six","seven","eight","nine","ten"]})
    }

    render(){
        return <div>
            <h2> Hello from the parent class</h2>
            <ChildClass 
            message = {this.state.message}
            object = {this.state.object}
            array = {this.state.array}
            changeMessage = {this.changeMessage}
            changeObject = {this.changeObject}
            changeArray = {this.changeArray}
            />
        </div>
    }
}