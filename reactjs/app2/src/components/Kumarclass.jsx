import { Component } from "react";

export class Kumarclass extends Component{
    constructor(){
        super()
        this.state={
            fname:"ak",
            lname:"47",
            person:{
                email:"123@gmail.com",
                state:"kabul",
            },
            users:["muzafar","ikram","syedabdul","abbas"]
        }
       console.log(this)
    }

    render(){
        return <h2>hloo from Kumarclass -{this.state.fname}{this.state.lname}</h2>
    }
}

