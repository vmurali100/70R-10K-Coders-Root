import { Component } from "react";

export class ClassFour extends Component{
    constructor(){
        super()
        this.state = {
            four : {
                "company" : "Honda",
                "model" : "Grazia",
                "engine" : "125cc",
                "price" : 82000
                
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.four).map((val,i)=>{
                return <p key={i}>{val} : {this.state.four[val]}</p>
            })}
            <hr />
        </div>
    }
}