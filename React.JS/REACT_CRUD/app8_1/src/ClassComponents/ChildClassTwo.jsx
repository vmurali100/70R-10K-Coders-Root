import { Component } from "react";

export class ChildClassTwo extends Component{
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

            <button onClick={this.props.changeDetails}>Change Details</button>
            {Object.keys(this.props.details).map((val,i)=>{
                return <p key={i}>{val} : {this.props.details[val]}</p>
            })}
            <hr />
            
            <button onClick={this.props.changeCity}>Change location</button>
            {this.props.city.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}
            <hr />
        </div>
    }
}