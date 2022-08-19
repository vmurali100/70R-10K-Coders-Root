import { Component } from "react";

export class ClassFive extends Component{
    constructor(){
        super()
        this.state = {
            company : {
                "name" : "Google",
                "CEO" : "Sundar Pichai",
                "established" : 1998,
                "employees" : 150028
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.company).map((val,i)=>{
                return <p key={i}>{val} : {this.state.company[val]}</p>
            })}
        </div>
    }
}