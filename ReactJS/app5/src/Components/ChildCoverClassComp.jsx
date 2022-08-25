import { Component } from "react";

export class ChildCoverClass extends Component{
    constructor(props){
        super()
    
    console.log(props)
    }
    render(){
        return<div>
            <h2>Hello from Child Cover Class Component</h2>
            <button onClick={this.props.changemsg}>Change Message</button>

        <p>Message:{this.props.msg}</p>
        {Object.keys(this.props.persondetails).map((val,i)=>{
            return<p key={i}>{this.props.persondetails[val]}</p>
        }) }
        <ul>
        {this.props.userdetails.map((user,i)=>{
            return<li key={i}>{user}</li>
        })}
         </ul>

        </div>
    }

}