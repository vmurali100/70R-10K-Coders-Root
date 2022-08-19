import { Component } from "react";

export class ClassOne extends Component{
    constructor(){
        super()
        this.state = {
            car : {
                "company" : "Hyundai",
                "model" : "Santro New",
                "engine" : "1.1L",
                "price" : 600000
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.car).map((val,i)=>{
                return <p key={i}>{val} : {this.state.car[val]}</p>
            })}
            <hr />
        </div>
    }
}