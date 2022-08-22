import { Component } from "react";

export class ClassFive extends Component {
    constructor() {
        super()
        this.state = {
            message: "",
            company: {},
            users: []
        }
    }

    changeMessage = () => {
        this.setState({
            message: "Hello From set message event handler"
        })
    }

    displayArray = () => {
        this.setState({
            users: ["Prudhvi", "Uday", "Vineeth", "Srujay"]
        })
    }

    changeObject = () => {
        this.setState({
            company: { "id": 1, "name": "Google" }
        })
    }

    handleDelete = (i) => {
        let allUsers = [...this.state.users]
        allUsers.splice(i, 1)
        this.setState({ users: allUsers })
    }

    render() {
        return <div>
            <h2>Message</h2>
            <button onClick={this.changeMessage}>set Message</button>
            <p>User Message is : {this.state.message}</p>
            <hr />

            <h2>Object</h2>
            <button onClick={this.changeObject}>Set Object propertiea</button>
            <p> ID : {this.state.company.id}</p>
            <p> NAME : {this.state.company.name}</p>
            <hr />

            <h2>Array</h2>
            <button onClick={this.displayArray}>Display array</button>
            {this.state.users.map((user, i) => {
                return <p key={i} onClick={() => { this.handleDelete(i) }}>{user}</p>
            })}



        </div>
    }
}