import { Component } from "react";

export class Class2 extends Component{
    constructor(){
        super()
        this.state={
            name:"meena",
            address:{
                Apt:"Krishna kutir",
                FlatNo:302,
                City:"HYD"
            }
        }
    }
    render(){
        return <div>
            {Object.keys(this.state.address).map((adrs,i)=>{
                return <p key={i}>{adrs}:-{this.state.address[adrs]}</p>
            })}
        </div>
    }
}