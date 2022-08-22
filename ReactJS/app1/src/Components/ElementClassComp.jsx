import { Component } from "react";

export class Element extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            data: {},
            users: []
        }

    }
    changeText = () => {
        this.setState({
            text: "Hello from Event Handler, this is an important note."
        })

    }

    changeData = () => {
        this.setState({ data: { fname: "Ramya", lname: "Madhuri" } })
    }

    displayUsers = () => {
        this.setState({ users: ["John Robert", "David Roy", "Anthony Surrace", "Pham Roy"] })
    }

    handleDelete = (i) => {
        console.log(i)
        let allUsers = [...this.state.users]
        allUsers.splice(i,1)
        this.setState({users: allUsers})
    }

    render() {
        return <div>
            <button onClick={this.changeText}>Set Text</button>
            <h2>Hello from Element Class Componenet</h2>
            <h4>When you click button then only data will get displayed below</h4>
            <p>Text Message is : {this.state.text}</p>

            <hr />

            <button onClick={this.changeData}> Change Data</button>
            <h3>Click on to view the names</h3>
            <p>First Name: {this.state.data.fname}</p>
            <p>Last Name: {this.state.data.lname}</p>

            <hr />

            <h2>Elements</h2>
            <h4>here data will get deleted using handleDelete function, Click on each name to delete</h4>
            <button onClick={this.displayUsers}>Display Users</button>
            {this.state.users.map((user, i) => {
                return <p onClick={() => { this.handleDelete(i) }} key={i}>{user}</p>
            })}
        </div>
    }

}