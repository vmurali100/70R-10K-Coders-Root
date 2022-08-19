import { Component } from "react";

export class ClassFive extends Component{
    constructor(){
        super()
        this.state = {
            five : {
                "fname" : "Pruhvidhar Reddy",
                "lname" : "Rathna"
                
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.five).map((val,i)=>{
                return <p key={i}>{val} : {this.state.five[val]}</p>
            })}
            <hr />
        </div>
    }
}