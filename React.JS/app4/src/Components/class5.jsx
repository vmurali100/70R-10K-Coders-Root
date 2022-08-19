import { Component } from "react";

export class ClassFive extends Component{
    constructor(){
        super()
        this.state = {
            family : {
                "Father" : "Thirupathi Reddy",
                "Mother" : "Padma",
                "Sister" : "Manasa Reddy"
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.family).map((val,i)=>{
                return <p key={i}>{val} : {this.state.family[val]}</p>
            })}
            <hr />
        </div>
    }
}