import { Component } from "react";

export class ChildClassOne extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component</h2>
            <button onClick={this.props.changeMessageOne}>Change Message</button>
            <p>Message from parent Component : {this.props.msg}</p>
            <hr/>
            
            <button onClick={this.props.changeUserOne}>Change User Details</button>
            {Object.keys(this.props.userDetails).map((val,i)=>{
                return <p key={i}>{this.props.userDetails[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changeStudentOne}>Change students</button>
            <ul>
                {this.props.allStudents.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>


        </div>
    }
}