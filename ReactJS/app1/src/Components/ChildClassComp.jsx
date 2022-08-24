/* eslint-disable no-useless-constructor */
import { Component } from "react";

export class ChildClassComp extends Component{
    constructor(props){//prop cannot be modified
        super()
        console.log(props)
    }
    

    render(){
        return <div>
            <h2>Hello I'm from Child Class Component </h2>
            <button onClick={this.props.changemessage}>Change Message</button>

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
