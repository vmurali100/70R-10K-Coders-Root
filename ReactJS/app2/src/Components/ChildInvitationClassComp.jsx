import { Component } from "react";

export  class ChildInvitationClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
    return<div>
        <h2>Hello from ChildInvitationClass component</h2>
        <button onClick={this.props.changemessage}>Change Message</button>

        <p>Message from Parent Component:{this.props.msg}</p>
        {Object.keys(this.props.personaldetails).map((val,i)=>{
            return<p key={i}>{this.props.personaldetails[val]}</p>
        })}
        <ul>
        {this.props.userdetails.map((users,i)=>{
            return <li key={i}>{users}</li>
       })}
        </ul>
    </div>
    }
}
