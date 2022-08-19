import { Component } from "react";

export class Studentclass extends Component {
    constructor() {
        super()
        this.state = {
            // users:["ajay","prudvi","srikanth","keerti"]
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

    render() {
        return <div>
            {/* {this.state.users.map((val)=>{
    return <p>{val}</p>
})} */}

{Object.keys(this.state.person).map((val,i)=>{
// return <p key={i}>{val}</p>                                         //for key only
// return <p key={i}>{this.state.person[val]}</p>                      //for value
return <p key={i}>{val} :  {this.state.person[val]}</p> 
})}
        </div>
    }
}