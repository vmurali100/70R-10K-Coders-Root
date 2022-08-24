import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){
        super()
        console.log(props)

    }
    render(){
        return <div>
            <h2>Hello iam from Child Class Component</h2>

            <button onClick={this.props.changeMessage}>Change Message</button>
            
            <p>message from parent component :{this.props.msg}</p>

            {Object.keys(this.props.userdetails).map((val,i)=>{
                return <p key={i}>{this.props.userdetails[val]}</p>
            })}
           <ul>
            {this.props.allstudents.map((students,i)=>{
                return <li key={i}>{students}</li>
            })}
           </ul>
        </div>
    }
}