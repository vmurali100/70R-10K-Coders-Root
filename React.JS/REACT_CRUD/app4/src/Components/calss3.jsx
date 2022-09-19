import { Component } from "react";


export class ClassThree extends Component{
    constructor(){
        super()
        this.state = {
            fruits : {
                "Summer" : "Mango",
                "Winter" : "Custard Apple",
                "All seasons" : "Banana"
            }
        }
    }

    render(){
        return <div> 
        {Object.keys(this.state.fruits).map((val,i)=>{
            return <p key={i}>{val} : {this.state.fruits[val]}</p>
        })}
        <hr />
        
        </div>
    }
}