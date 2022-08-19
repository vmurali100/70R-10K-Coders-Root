import { Component } from "react";

export class StudentsClassComp extends Component{
    constructor(){
        super()
        this.state={
            // users:["Ram","Ravi","Sam","Sundar"]
            person:{
                "fname": "Shannon",
                "lname": "Nicholson",
                "tel": "(291)289-3849",
                "address": "5502 Odio Rd",
                "city": "Mesa",
                "state": "VA",
                "zip": 57118
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