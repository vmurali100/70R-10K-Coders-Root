import { Component } from "react";

export class ChildClassCompFour extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component two</h2>
            <button onClick={this.props.changeState}>Change State</button>
            <p>state Name : {this.props.state}</p>
            <hr/>
            
            <button onClick={this.props.changeCabinet}>Change cabinet Details</button>
            {Object.keys(this.props.cabinet).map((val,i)=>{
                return <p key={i}>{val} : {this.props.cabinet[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changeOthers}>Change other names</button>
            <ul>
                {this.props.others.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>

            <hr />


        </div>
    }
}