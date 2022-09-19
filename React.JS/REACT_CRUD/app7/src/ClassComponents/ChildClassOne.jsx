import { Component } from "react";

export class ChildClassCompOne extends Component{
    constructor(props){
        super()
    }

    render(){
        return <div>
            <h2>Hello from Child class component</h2>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <p>Message from parent Component : {this.props.msg}</p>
            <hr/>
            
            <button onClick={this.props.changeCar}>Change User Details</button>
            {Object.keys(this.props.car).map((val,i)=>{
                return <p key={i}>{this.props.car[val]}</p>
            })}
            <hr/>

            <button onClick={this.props.changeCar_make}>Change students</button>
            <ul>
                {this.props.car_make.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>

            <hr />


        </div>
    }
}