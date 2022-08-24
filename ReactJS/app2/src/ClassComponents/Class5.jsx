import { Component } from "react";

export class Class5 extends Component{
    constructor(){
        super()
        this.state={
            name5:"",        }
    }
    displayName5=()=>{
        this.setState({name5:"Srikanth"})
    }

    render(){
        return <div>
            <button onClick={this.displayName5}>Name Button</button>
            <h2>Name: {this.state.name5} </h2>
        </div>
    }
}