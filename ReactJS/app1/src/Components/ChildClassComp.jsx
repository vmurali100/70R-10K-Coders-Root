/* eslint-disable no-useless-constructor */
import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }

    render(){
        return <div>
            <h2>Hello I'm from Child Class Component </h2>
            <p>Message from Parent component: {this.props.msg}</p>
            {Object.keys(this.props.userdetails).map((val,i)=>{
                return <p key={i}>{this.props.userdetails[val]}</p>
            })}
     <ul>
        {this.props.allstudents.map((student,i)=>{
            return <li key={i}>{student}</li>
        })}
    
    
    
    </ul>        



</div>
    }
}
