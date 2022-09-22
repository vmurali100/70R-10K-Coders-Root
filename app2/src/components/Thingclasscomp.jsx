import { Component } from "react";

export class Place extends Component {
    constructor() {
        super()
        this.state = {
            message: ""
        }

    }
    message=()=>{
        this.setState({
            message:"agra"
        })
    }


    render() {
        return <div><h2>where is tajmahal</h2>
            <button onClick={this.message}>answer</button>
            <p>correct answer is :{this.state.message}</p>
        </div>
    }
}