import { Component } from "react";

export default class StudentsClassComp extends Component{

    constructor(){
        super()
        this.state={
           // users:["Ram","Dhruva","Dharahaas","deepak"]
           person:{
            "fname": "Gertrude",
            "lname": "Brunie",
            "tel": "(250)491-4936",
            "address": "6905 Pulvinar Ct",
            "city": "Rio Rancho",
            "state": "NC",
            "zip": 29566
        },
        }
    }
    render(){
        return <div>
          {/* {this.state.users.map((val,i)=>{
               return <p key={i}>{val}</p> 
            })
        }*/}
        {Object.keys(this.state.person).map((val,i)=>{
             //return <p key={i}>{val}</p>
             return <p key={i}>{val} :- {this.state.person[val]}</p>
        })}
        </div>
    }
}
