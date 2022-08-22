import { Component } from "react";

export class Content extends Component {
    constructor() {
        super()
        this.state = {
            sentence: "",
            list: {},
            users: []
        }

    }
    changeSentence = () => {
        this.setState({
            sentence: "Hello from Event Handler app3"
        })

    }

    changeList = () => {
        this.setState({ list: { fname: "Vice Roy", lname: "John", email: "roy@gmail.com", age : 25, state: "UttarPradesh" } })
    }

    // displayUsers = () => {
    //     this.setState({ users: ["ram", "rahim", "raj", "roy"] })
    // }

    // handleDelete = (i) => {
    //     console.log(i)
    //     let allUsers = [...this.state.users]
    //     allUsers.splice(i,1)
    //     this.setState({users: allUsers})
    // }

    render() {
        return <div>
            <button onClick={this.changeSentence}>Set Message</button>
            <h2>Hello from Sentence Class Componenet</h2>
            <p>Content Message is : {this.state.sentence}</p>

            <hr />

            <button onClick={this.changeList}> Change Person</button>
            <p>First Name: {this.state.list.fname}</p>
            <p>Last Name: {this.state.list.lname}</p>
            <p>Email Address: {this.state.list.email}</p>
            <p>Age: {this.state.list.age}</p>
            <p>State: {this.state.list.state}</p>

            <hr />

            {/* <h2>Users</h2>
            <button onClick={this.displayUsers}>Display Users</button>
            {this.state.users.map((user, i) => {
                return <p onClick={() => { this.handleDelete(i) }} key={i}>{user}</p>
            })} */}
        </div>
    }

}