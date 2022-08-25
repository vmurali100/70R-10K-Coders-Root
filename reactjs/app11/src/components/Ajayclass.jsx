import { Component } from "react";
import { Childajayclass } from "./Childajay";

export class Ajayclass extends Component{

    constructor(){
        super()

        this.state={
            varun:"hi am varun from coders",

            vishal:{
                fname:"indian",
                lname:"country",

            },

            vamshi:["rithu","ramya","rohit","rahul"]
        }
      }

    handlevarun=()=>{
        this.setState({varun:"varun going to change as vamika"})
    }

    handlevishal=()=>{
        this.setState({fname:"country",lname:"india"})
    }

    handlevamshi=()=>{
        this.setState(["rizwan","rehman","rahmat"])
    }
    
    render(){
        return <div>
            <Childajayclass arun={this.state.varun} vinay={this.state.vishal} murali={this.state.vamshi} 
            handlearun={this.handlevarun} handlevinay={this.handlevishal} handlemurali={this.handlevamshi}/>
        </div>
    }
}