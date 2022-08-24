import { Component } from "react";

export class Class4 extends Component {
    constructor() {
        super()
        this.state = {
            users4: [],
        }
    }
        
    ArrayValues=()=>{
        this.setState({users4:["anil","bala","cathy"]})
    }

    render() {
        return <p><h3>Assigning values to array</h3>
            <button onClick={this.ArrayValues}>Array values</button>
            {this.state.users4.map((user)=>{
             return   <li>{user}</li>
            })}
        </p>
    }
}