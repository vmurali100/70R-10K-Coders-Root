import { Component } from "react";

export class ChildClassFour extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> I am from Child Class Four</h2>
            <button onClick={this.props.changeName}>Change Name</button>
            <p>{this.props.name}</p>
            <hr />

            <button onClick={this.props.changePerDetails}>Change Personal Details</button>
            {Object.keys(this.props.perDetails).map((val,i)=>{
                return <p key={i}>{val} : {this.props.perDetails[val]}</p>
            })}
            <hr />

            <button onClick={this.props.changeType}>Change Type</button>
            {this.props.type.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}