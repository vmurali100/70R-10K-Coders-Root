import { Component } from "react";
import { ChildClassFour } from "./ChildClassFour";

export class ParentClassFour extends Component {
    constructor() {
        super()
        this.state = {
            team: "Royal Challengers Bangalore",
            object: { captain :"Virat Kohli", VicecCaptain: "AB Devilliers" },
            array: ["Siraj","Chahal"]
        }
    }

    changeTeam = () => {
        this.setState({ team: "Sun Risers Hyderabad" })
    }

    changeObject = () => {
        this.setState({ object: { captain : "David Warner", VicecCaptain: "Kane Williamson"} })
    }

    changeArray = () => {
        this.setState({ array: ["Natarajan","Bhuvneshwar"] })
    }

    render() {
        return <div>
           <ChildClassFour
            team = {this.state.team}
            object = {this.state.object}
            array = {this.state.array}
            changeTeam = {this.changeTeam}
            changeObject = {this.changeObject}
            changeArray = {this.changeArray}
           />
           
        </div>
    }
}