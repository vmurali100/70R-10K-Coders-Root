import { Component } from "react";
import { ChildClassComponetThree } from "./ChildClass";

export class ParentClassThree extends Component {
    constructor() {
        super()
        this.state = {
            name: "Indian Cricket",
            role: {
                captain: "Virat Kohli",
                vicecaptain: "Rohit Sharma",
                wicketkeeper: "Pant"
            },
            players: ["Bumrah", "Rahul"]
        }
    }

    changeName = () => {
        this.setState({ name: "ICT" })
    }

    changeRole = () => {
        this.setState({
            role: { bowler: "Bumrah" }
        })
    }

    changePlayers=()=>{
        this.setState({players : ["Pandya","Chahal"]})
    }

    render(){
        return <div>
            <h2>Hello from parent class component</h2>
            <hr />
            <ChildClassComponetThree
              name = {this.state.name}
              role = {this.state.role}
              players = {this.state.players}
              changeName = {this.changeName}
              changeRole = {this.changeRole}
              changePlayers = {this.changePlayers}  
                />
        </div>
    }

}
