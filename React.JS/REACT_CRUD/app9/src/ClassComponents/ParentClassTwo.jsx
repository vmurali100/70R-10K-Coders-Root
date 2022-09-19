import { Component } from "react";
import { ChildClassTwo } from "./ChildClassTwo";




export class ParentClassTwo extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hi React from parent Class Two",
            user: { name: "Jishitha Singh", location: "Bangalore" },
            array: ["height : 165cm","weight : 65kg"]
        }
    }

    changeMessage = () => {
        this.setState({ message: "Hi React from Child Class Two" })
    }

    changeUser = () => {
        this.setState({ user: { name: "Tejaswi", location: "Karimnagar"} })
    }

    changeArray = () => {
        this.setState({ array: ["height : 150cm","weight : 55kg"] })
    }

    render() {
        return <div>
           <ChildClassTwo
            message = {this.state.message}
            user = {this.state.user}
            array = {this.state.array}
            changeMessage = {this.changeMessage}
            changeUser = {this.changeUser}
            changeArray = {this.changeArray}
           />
           
        </div>
    }
}