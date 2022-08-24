import { Component } from "react";

export class Class5 extends Component{
    constructor(){
        super()
        this.state={
            frnds:[],
        }
    }
    frndsArray=()=>{
        this.setState({frnds:["siri","mini","nini"]})
    }

    render(){
        return <div>
            <h2>Assigning array values to frnds:</h2>
            <button onClick={this.frndsArray}>Frnds Array</button>
            {this.state.frnds.map((frnd)=>{
                return <li>{frnd}</li>
            })}
        </div>
    }
}