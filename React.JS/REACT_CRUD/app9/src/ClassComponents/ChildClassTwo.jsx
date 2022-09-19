import { Component } from "react";

export class ChildClassTwo extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p> Message : {this.props.message}</p>
            <hr />

            <button onClick={this.props.changeUser}>Change User</button>
            {Object.keys(this.props.user).map((val,i)=>{
                return <p key={i}>{val} : {this.props.user[val]}</p>
            })}
            <hr />

            <button onClick={this.props.changeArray}>Change Array</button>
            <ul>
                {this.props.array.map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <hr />
        </div>
    }
}