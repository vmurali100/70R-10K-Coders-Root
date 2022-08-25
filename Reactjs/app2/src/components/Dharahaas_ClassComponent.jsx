import { Component } from "react";

export class DharahaasClassComp extends Component {
    constructor() {
        super();
        this.state = {
            fname: "Dhruva Raam",
            person: {
                "fname": "Gertrude",
                "lname": "Brunie",
                "tel": "(250)491-4936",
                "address": "6905 Pulvinar Ct",
                "city": "Rio Rancho",
                 "zip": 29566,
                "email": "Dhruvaraam@gmail.com",
                "state": "Ap"
            },
            users: ['sam', 'singh', 'roy', 'sundar']
        }
    }
    render() {
        return <div>
        <h2>{this.state.fname}</h2>

        {this.state.users.map((val,i)=>{
            //return <p key={i}>{val}</p>
            
        })}
        {Object.keys(this.state.person).map((val,i)=>{
            //return <p key={i}>{value}</p>
            return <p key={i}>{val} :- {this.state.person[val]}</p>
        })}
        </div>
    }

}
