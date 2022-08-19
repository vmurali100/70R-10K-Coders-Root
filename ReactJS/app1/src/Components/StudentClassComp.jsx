import { Component } from "react";

export default class StudentClassComp extends Component{
    constructor(){
        super()
        this.state={
            // users : ["Sathish","Anil","Lavan","Mukesh","Srikanth","Naveen"]
            person:{
                "fname":"Srikanth",
                "lname":"Chokkalla",
                "tel":"8790921989",
                "address":"4-2 Karimnagar",
                "city":"Hyderabad",
                "state":"Telangana",
                "zip": 505415
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