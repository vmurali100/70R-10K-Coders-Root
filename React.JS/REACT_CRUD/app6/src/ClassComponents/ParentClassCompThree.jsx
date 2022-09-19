import { Component } from "react";
import { ChildClassThree } from "./ChildClassCompThree";


export class ParentClassThree extends Component{
    constructor(){
        super()
        this.state = {
            message : "Good Morning",
            details : {
                location : "Warangal",
                pin      :  506009
            },
            city : ["Warangal","Hanamkonda"]
        }
    }

    changeMessage=()=>{
        this.setState({message : "Good Afternoon"})
    }

    changeDetails=()=>{
        this.setState({details : {
            location : "Nakkalagutta",
            pin : 506001
        }})
    }

    changeCity=()=>{
        this.setState({city : ["Warangal","Hanamkonda","Kazipet"]})
    }

    render(){
        return <div>
            <ChildClassThree 
            message = {this.state.message}
            details = {this.state.details}
            city = {this.state.city}
            changeMessage = {this.changeMessage}
            changeDetails = {this.changeDetails}
            changeCity = {this.changeCity} />
        </div>
    }
}