import { Component } from "react";

export class OneClassComp extends Component{
    constructor(){
        super()
        this.state={
            
            person:
            {
                "email": "RFraley@aliquam.org",
                "username": "WLogue",
                "password": "DnNcX"
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