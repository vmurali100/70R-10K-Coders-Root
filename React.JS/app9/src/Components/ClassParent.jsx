import { Component } from "react";
import { ChildClassFour } from "./ClassChild";
import { ParFunc } from "./ParentFunc";

export class ParClassFour extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hi React",
            user: { name: "Prudhvidhar", location: "Warangal" },
            array: [1, 2, 3, 4, 5]
        }
    }

    changeMessage = () => {
        this.setState({ message: "Hi React from Parent Class" })
    }

    changeUser = () => {
        this.setState({ user: { name: "Prudhvidhar", location: "Warangal", company: "Google" } })
    }

    changeArray = () => {
        this.setState({ array: [9, 19, 29, 39, 49] })
    }

    render() {
        return <div>
           <ChildClassFour
            message = {this.state.message}
            user = {this.state.user}
            array = {this.state.array}
            changeMessage = {this.changeMessage}
            changeUser = {this.changeUser}
            changeArray = {this.changeArray}
           />
           <ParFunc />
        </div>
    }
}