import { Component } from "react";
import { ChildClassFive } from "./ChildClassFive";


export class ParentClassFive extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello From React JS",
            users: { fname :"Sneha", lname: "Kunduri" },
            user: ["Sam","Ram"]
        }
    }

    changeMessage = () => {
        this.setState({ message: "I am changed when clicked the button" })
    }

    changeUsers = () => {
        this.setState({ users: { fname : "Sharath", lname: "Veesam"} })
    }

    changeUser = () => {
        this.setState({ user: ["Sam","Ram","Sita"] })
    }

    render() {
        return <div>
           <ChildClassFive
            message = {this.state.message}
            users = {this.state.users}
            user = {this.state.user}
            changeMessage = {this.changeMessage}
            changeUsers = {this.changeUsers}
            changeUser = {this.changeUser}
           />
           
        </div>
    }
}