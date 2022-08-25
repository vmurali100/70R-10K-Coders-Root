import { Component } from "react";

export class Fourthclass extends Component{
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
<h1>iam from Fourthclass component</h1>

        </div>
    }
}