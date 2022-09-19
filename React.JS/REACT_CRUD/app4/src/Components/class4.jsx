import { Component } from "react";

export class ClassFour extends Component{
    constructor(){
        super()
        this.state = {
            cars : {
                "Hyundai" : "Creta",
                "Maruthi" : "Brezza",
                "Kia" : "Seltos"
            }
        }
    }

    render(){
        return <div>
            {Object.keys(this.state.cars).map((val,i)=>{
                return <p key={i}>{val} : {this.state.cars[val]}</p>
            })}
            <hr />
        </div>
    }
}