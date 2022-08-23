import { Component } from "react";

export class ChildClassComponetThree extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2> Hello from Child Class Component</h2>
            <hr />
            <button onClick={this.props.changeName}>change Name</button>
            <p>Changed Name is : {this.props.name}</p>
            <hr />

            <button onClick={this.props.changeRole}>Change Role Details</button>
            {Object.keys(this.props.role).map((val,i)=>{
                return <p key={i}>{this.props.role[val]}</p>
            })}
            <hr />
            
            <button onClick={this.props.changePlayers}>Change Players Details</button>
            {this.props.players.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}