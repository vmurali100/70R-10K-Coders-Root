import { Component } from "react";

export class Muraliclass extends Component{

  constructor(){
    super()
    this.state={
        fname:"murali",
        person:{
            email:"shift@123gmail.com",
            state:"ts"
        },
        users:["ajay","prudvi","keerti","srikanth"]
    }
    console.log(this)
  }  


    render(){

        return <h1>heloo from class Component -{this.state.fname}</h1>
    }
}