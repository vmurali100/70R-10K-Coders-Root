import { Component } from "react";

export class ClassTwo extends Component {
    constructor() {
        super()
        this.state = {
            two: {
                "id": 8,
                "fname": "Ken",
                "lname": "Suchland",
                "tel": "(447)552-9209",
                "address": "8214 Non Ave",
                "city": "Brunswick",
                "state": "KY",
                "zip": 10478

            }
        }
    }

    render() {
        return <div>
            {Object.keys(this.state.two).map((val, i) => {
                return <p key={i}>{val} : {this.state.two[val]}</p>
            })}
            <hr />
        </div>
    }
}