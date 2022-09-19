import { Component } from "react";
import { ChildClassThree } from "./ChildClassThree";





export class ParentClassThree extends Component {
    constructor() {
        super()
        this.state = {
            string: "Hospital One Detail",
            object: { name:"Star Hospitals", location: "Banjara Hills" },
            array: ["Nephrologit : Dr.Rajashekhar Chakravarthy"]
        }
    }

    changeString = () => {
        this.setState({ string: "Hospital Two Detail" })
    }

    changeObject = () => {
        this.setState({ object: { name: "Apollo Hospitals", location: "Jubliee Hills"} })
    }

    changeArray = () => {
        this.setState({ array: ["Nephrologist : Dr. Sanjay Sinha"] })
    }

    render() {
        return <div>
           <ChildClassThree
            string = {this.state.string}
            object = {this.state.object}
            array = {this.state.array}
            changeString = {this.changeString}
            changeObject = {this.changeObject}
            changeArray = {this.changeArray}
           />
           
        </div>
    }
}