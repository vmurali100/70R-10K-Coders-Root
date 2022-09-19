import { Component } from "react";
import { ChildClassFour } from "./ChildClassCompfour";

export class ParentClassFour extends Component{
    constructor(){
        super()
        this.state = {
            name : "Virat Kohli",
            perDetils : {
                age : 33,
                wife : "Anushka Sharma"
            },
            type : ["ODI","Test","T20"]
        }
    }

    changeName=()=>{
        this.setState({name : "Viart Singh Kohli"})
    }

    changePerDetails=()=>{
        this.setState({perDetils : {hometown : "Delhi", height : "5.8"}})
    }

    changeType=()=>{
        this.setState({type : ["Batsmen","Captain"]})
    }

    render(){
        return <div>
            <h2> I am from Parent Class Four</h2>
            <hr />
            <ChildClassFour
            name = {this.state.name}
            perDetails = {this.state.perDetils}
            type = {this.state.type}
            changeName = {this.changeName}
            changePerDetails = {this.changePerDetails}
            changeType = {this.changeType} />
        </div>
    }
}