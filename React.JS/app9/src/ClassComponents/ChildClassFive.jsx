import { Component } from "react";

export class ChildClassFive extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p> Team Name  : {this.props.message}</p>
            <hr />

            <button onClick={this.props.changeUsers}>Change User</button>
            {Object.keys(this.props.users).map((val,i)=>{
                return <p key={i}>{val} : {this.props.users[val]}</p>
            })}
            <hr />

            <button onClick={this.props.changeUser}>Change Array</button>
            <ul>
                {this.props.user.map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <hr />
        </div>
    }
}