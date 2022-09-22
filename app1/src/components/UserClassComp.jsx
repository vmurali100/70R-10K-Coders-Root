import { Component } from "react";

export class User extends Component {
    constructor() {
        super()
        this.state = {
            attend: ""
        }
    }
  attend=()=>{
        this.setState({
            attend:"  hi to all the students"
        })
    }

    render() {
        return <div>
            <h2>Gd to all the students</h2>
            <button onClick={this.attend}>set message</button>
            <p>user message is:{this.state.attend}</p>
        </div>
    }
}