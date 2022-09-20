import { Component } from "react";

export class Sports extends Component {
    constructor() {
        super()
        this.state = {
            game: "HI",
            person: "",
            users: [],
        }
    }



    game = () => {
        this.setState({
            game: "i like cricket"
        })
    }

    changePerson = () => {
        this.setState({ person: { fname: "satish", lname: "sunny" } })
    }

    displayUsers = (i) => {
        this.setState({ users: ["satish", "sai", "sunil", "prudhvi"] })
    }

    render() {
        return <div>
            <h2>which game you like </h2>
            <button onClick={this.game}>answer </button>
            <p>which sport you like the most :{this.state.game}</p>


            <hr />
            <button onClick={this.changePerson}>data</button>
            <p>First name:{this.state.person.fname}</p>
            <p>last name:{this.state.person.lname}</p>

            <hr />
            <h2>Users</h2>
            <button onClick={this.displayUsers}>displayUsers</button>
            {this.state.users.map((user,i) => { return <p key={i}>{user}</p> })}
        </div >
    }
}