import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){
        super()
        
        console.log(props)
    }
    render(){
        return <div>
            <h2>
                Hello.I am from child component
            </h2>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p>Message from parent component : {this.props.msg}</p>
            {Object.keys(this.props.userDetails).map((val,i)=>{
                return <p key={i} >{this.props.userDetails[val]}</p>
            })}
           <ul>
                 {this.props.allStudents.map((student,i)=>{
                    return <li key={i}>{student}</li>
                 })}
                </ul>

           
        </div>
    }
}