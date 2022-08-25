import { Component } from "react";

export class ChildClassFive extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> I am from Child Class Five</h2>
            <button onClick={this.props.changeTeam}>Change Team</button>
            <p>{this.props.team}</p>
            <hr />

            <button onClick={this.props.changePlayerDetails}>Change Player Details</button>
            {Object.keys(this.props.playerDetails).map((val,i)=>{
                return <p key={i}>{val} : {this.props.playerDetails[val]}</p>
            })}
            <hr />

            <button onClick={this.props.changeCoach}>Change Coach</button>
            {this.props.coach.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}