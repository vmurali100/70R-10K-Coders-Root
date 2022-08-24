import { Component } from "react";
export class Playersclasscomp extends Component{
    constructor(){
        super()
      this.state={
        game:"Cricket",
        formats:{test:"100Overs",oneday:"50overs",twentytwenty:"20overs"},
        favplayers:["Sachin","Kohli","Dhoni","YuvRaj"]
        
      }
    }
    render(){
        return <div>
            <h3>Famous Players -{this.state.favplayers}</h3>
           
        </div>
    }
}