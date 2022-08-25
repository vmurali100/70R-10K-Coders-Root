import { Component } from "react";
import { ChildClassTwo } from "./ChildClassCompTwo";

export class ParentClassTwo extends Component {
    constructor() {
        super()
        this.state = {
            string: "Hi I am a String",
            object: {
                name: "Manvii Reddy",
                age: "3 years"

            },
            array : ["Mom","Dad"]
        }
    }

    changeString=()=>{
        this.setState({string : "Hi I am changed String"})
    }

    changeObject=()=>{
        this.setState({object : {
            name : "Manvii Reddy Sunkara",
            age : "3 and half years"
        }})
    }

    changeArray=()=>{
        this.setState({array : ["Mommy","Daddy"]})
    }

    render(){
    return <div>
        <ChildClassTwo 
        string = {this.state.string}
        object = {this.state.object}
        array  = {this.state.array}
        changeString = {this.changeString}
        changeObject = {this.changeObject}
        changeArray = {this.changeArray}
        />
    </div>
    }
} 