import { Component } from "react";

export class ClassThree extends Component{
    constructor(){
        super()
        this.state = {
            details : {
                "id": 7,
                "fname": "Rajesh",
                "lname": "Welld",
                "tel": "(635)787-7539",
                "address": "9068 Nullam Ln",
                "city": "Maricopa",
                "state": "IN",
                "zip": 45623
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.details).map((val,i)=>{
                return <p key={i}>{val} : {this.state.details[val]}</p>
            })}
            <hr />
        </div>
    }
}