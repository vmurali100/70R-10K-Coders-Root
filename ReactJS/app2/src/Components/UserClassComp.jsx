import { Component } from "react";

export class User extends Component {
    constructor() {
        super()
        this.state = {
            message: "",
            person: {},
            users: []
        }

    }
    changeMessage = () => {
        this.setState({
            message: "Hello from Event Handler"
        })

    }

    changePerson = () => {
        this.setState({ person: { fname: "Manasa", lname: "Ammu" } })
    }

    displayUsers = () => {
        this.setState({ users: ["ram", "rahim", "raj", "roy"] })
    }

    handleDelete = (i) => {
        console.log(i)
        let allUsers = [...this.state.users]
        allUsers.splice(i,1)
        this.setState({users: allUsers})
    }

    render() {
        return <div>
            <button onClick={this.changeMessage}>Set Message</button>
            <h2>Hello from User Class Componenet</h2>
            <p>User Message is : {this.state.message}</p>

            <hr />

            <button onClick={this.changePerson}> Change Person</button>
            <p>First Name: {this.state.person.fname}</p>
            <p>Last Name: {this.state.person.lname}</p>

            <hr />

            <h2>Users</h2>
            <button onClick={this.displayUsers}>Display Users</button>
            {this.state.users.map((user, i) => {
                return <p onClick={() => { this.handleDelete(i) }} key={i}>{user}</p>
            })}
        </div>
    }

}