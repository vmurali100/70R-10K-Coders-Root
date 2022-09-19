import { Component } from "react";

export class ChildClassCompFive extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component two</h2>
            <button onClick={this.props.changeMessage}>Change Name</button>
            <p>Name : {this.props.msg}</p>
            <hr/>
            
            <button onClick={this.props.changepersonal}>Change Personal Details</button>
            {Object.keys(this.props.personal).map((val,i)=>{
                return <p key={i}>{val} : {this.props.personal[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changelocation}>Change Location</button>
            <ul>
                {this.props.location.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>

            <hr />


        </div>
    }
}