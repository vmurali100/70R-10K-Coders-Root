import { Component } from "react";
import { Childram } from "./Childram";

export class Ramclass extends Component{
constructor(){
    super()
    this.state={
        kiran:"its about zoo",

        kalyan:{
            fname:"zoo",
            lname:"animals",

        },

        kishore:["zebanas","ziraffe","zebra"]
    }
}


    render(){
        return <div>
<h1>hlo from ram class</h1>

<Childram rani={this.state.kiran} raju={this.state.kalyan} ramu={this.state.kishore}/>
        </div>
    }
}