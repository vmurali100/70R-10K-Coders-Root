import { Component } from "react";

export class NameClassComp extends Component{
    constructor(){
        super()
        this.state={
            // users:["Ram","Ravi","Sam","Sundar"]
            person:{
                "fname": "Suriya",
                "lname": "Kumar",
                "tel": "(291)289-3849",
                "address": "5502 Odio Rd",
                "city": "Crook",
                "state": "NSW",
                "zip": 58102
            }
        }
    }
    render(){
        return <div>
            {/* {this.state.users.map((val,i)=>{
                return <p key={i}>{val}</p>
            })} */}
            {Object.keys(this.state.person).map((val,i)=>{
                // return <p key={i}>{val}</p>
                return <p key={i}>{val}:-{this.state.person[val]}</p>
            })}
        </div>
    }
}