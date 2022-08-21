import { Component } from "react";

export class Vijayclass extends Component {
    constructor() {
        super()
        this.state = {
            zip:["ajay","prudvi","srikanth","keerti"],
            mission: {
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
    render() {
        return <div>
{this.state.zip.map((val)=>{
    return <p>{val}</p>
})}

            {Object.keys(this.state.mission).map((val,i)=>{
                // return <p key={i}>{val}</p>
                // return <p key={i}>{this.state.mission[val]}</p>
                return <p key={i}>{val}: {this.state.mission[val]}</p>
            })}
        </div>

    }
}


