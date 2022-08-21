import { Component } from "react";

export class Pupilclass extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                "fname": "Carlo",
                "lname": "Neville",
                "tel": "(283)872-6964",
                "address": "2926 Sed Dr",
                "city": "Spokane",
                "state": "AL",
                "zip": 74762
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.person).map((val,i)=>{
                return <p key={i}>{val}:{this.state.person[val]}</p>
            })}
        
        </div>
    }
}