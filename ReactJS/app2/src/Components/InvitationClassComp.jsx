/* eslint-disable no-useless-constructor */
import { Component } from "react";
import { ChildInvitationClassComp } from "./ChildInvitationClassComp";

export  class InvitationClassComp extends Component{
    constructor(){
        super()
        this.state={
            message: "Welcome to new Adventures Trip",
            person:{
                fname:"Ker",
                lname:"pra"
            },
            users:["Ramsey","Stephen","Micheal","Alexander"]
        }
    }
    handleChange=()=>{
        this.setState({message:"I'm going to trip"})
    }
render(){
return<div>
    <h2>Hello from InvitationParent Component</h2>
    {/* <ChildInvitationClassComp {...this.state}/> */}
<ChildInvitationClassComp 
    msg= {this.state.message}
    personaldetails= {this.state.person}
    userdetails={this.state.users}
    changemessage={this.handleChange}/>
    
</div>
}
}

      