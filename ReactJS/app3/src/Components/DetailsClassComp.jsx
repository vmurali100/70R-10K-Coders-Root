import { Component } from "react";

export class DetailsClassComp extends Component {
    constructor() {
        super()
        this.state = {
            // users:["Ram","Ravi","Sam","Sundar"]
            
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