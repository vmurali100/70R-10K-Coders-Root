import { Component } from "react";

export class ClassOne extends Component{
    constructor(){
        super()
        this.state = {
            users : {
                "fname" : "Prudhvidhar",
                "lname" : "Rathna",
                "location" : "Warangal",
                "Age" : 28
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.users).map((val,i)=>{
                return <p key={i}>{val} : {this.state.users[val]}</p>
            }
        )}
        <hr />
        </div>
    }
}