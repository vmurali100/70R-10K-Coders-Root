import { Component } from "react";

export class ChildClass extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super()      
        
        console.log(props)
        
    }
    render(){
        return <div>
            <h2> Hello from child component</h2>
            <button onClick={this.props.changestrng}>ChangeMessage</button>
            <p>Message from parent class : {this.props.msg}</p>
           {Object.keys(this.props.userdetails).map((name,i)=>{
             return <p key={i}> {name}: {this.props.userdetails[name]} </p>
           })}
            <p>students from parent class : {this.props.studentdetails.map((val,i)=>{
                return <li key={i}>{val} </li>
            })}</p>
            </div>
    }
}