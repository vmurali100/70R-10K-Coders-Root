import { Component } from "react";

export class ChildClassCompTwo extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component two</h2>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p>Message from Child Component : {this.props.msg}</p>
            <hr/>
            
            <button onClick={this.props.changecycle}>Change cycle Details</button>
            {Object.keys(this.props.cycle).map((val,i)=>{
                return <p key={i}>{this.props.cycle[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changecycle_make}>Change cycle brand</button>
            <ul>
                {this.props.cycle_make.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>

            <hr />


        </div>
    }
}