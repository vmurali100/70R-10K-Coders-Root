import { Component } from "react";

export class Zakclass extends Component {

    constructor() {
        super()
        this.state = {
            message: "",
            person: {
               
            },
            users: []
        }
    }


    changemessage = () => {
        this.setState({
            message: "hello from eventhandler"
        })
    }

    changeperson = () => {
        this.setState({ person: { fname: "vijay", lname: "kumar" } })
    }

    changeusers = () => {
        this.setState({ users: ["vijay", "murali", "krishna", "sam", "kalyan", "chandu"] })
    }

    handledelete = (i) => {
        console.log(i)
        let allusers =[...this.state.users]
        allusers.splice(i,1)
        this.setState({users:allusers})
    }

   

    render() {
        return <div>
            <h3>iam from class Firstclass</h3>

            <h1>string</h1>
            <button onClick={this.changemessage}>setmessage</button>
            <p>message is .......{this.state.message}</p>

            <hr />
            <h1>object</h1>
            <button onClick={this.changeperson}>change person</button>
            <p>firstname: {this.state.person.fname}</p>
            <p>lastname: {this.state.person.lname}</p>

            <hr />
            <h1>array</h1>
            <button onClick={this.changeusers}>changeusers</button>
            {this.state.users.map((users,i) => {
                return <p onClick={() => { this.handledelete(i) }} key={i}>{users}</p>
            })}

      
        </div>
    }
} 