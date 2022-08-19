import { Component } from "react";

export class DetailsClassComp extends Component {
    constructor() {
        super()
        this.state = {
            // users:["Ram","Ravi","Sam","Sundar"]
            person:
            {
                "fname": "Shannon",
                "lname": "Nicholson",
                "tel": "(291)289-3849",
                "address": "5502 Odio Rd",
                "city": "Mesa",
                "state": "VA",
                "zip": 57118
            },
            person:
            {
                "fname": "Renita",
                "lname": "Prezzavento",
                "tel": "(788)616-5806",
                "address": "8631 Vestibulum St",
                "city": "Providence",
                "state": "SD",
                "zip": 24524
            }
        }
    }
    render() {
        return <div>
            {/* {this.state.users.map((val,i)=>{
                return <p key={i}>{val}</p>
            })} */}
            {Object.keys(this.state.person).map((val, i) => {
                // return <p key={i}>{val}</p>
                return <p key={i}>{val}:-{this.state.person[val]}</p>

            })}
        </div>
    }
}