import { Component } from "react";

export class ChildClassThree extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p>{this.props.message}</p>
            <hr />

            <button onClick={this.props.changeDetails}>Change Details</button>
            {Object.keys(this.props.details).map((val,i)=>{
                return <p key={i}>{val} : {this.props.details[val]}</p>

            })}
            <hr />

            <button onClick={this.props.changeCity}>Change City</button>
            {this.props.city.map((val,i)=>{
                return <p key={i}>{val}</p>

            })}
            <hr />
        </div>
    }
}