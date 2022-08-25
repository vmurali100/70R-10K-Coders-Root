import { Component } from "react";

export class DataChildClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return<div>
            <h2>Hello I'm From DataChildComponent</h2>
            <button onClick={this.props.changemsg}>Change Message</button>
            <hr/>
            <p>Message:{this.props.msg}</p>
            {Object.keys(this.props.persondetails).map((val,i)=>{
                return <p key={i}>{this.props.persondetails[val]}</p>
            })}
            <ul>
                {this.props.userdetails.map((user,i)=>{
                    return<li key={i}>{user}</li>
                })}
            </ul>

        </div>
    }
}