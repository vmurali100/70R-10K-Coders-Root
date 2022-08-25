import { Component } from "react";
import { DataChildClassComp } from "./DataChildClassComp";

export class DataParentClassComp extends Component{
    constructor(){
        super()
        this.state={
            Datamessage:"ReactJS is grooming Framework",
            Person:{fname:"Manideep",lname:"Varma"},
            user:["Mani","Ramya","Neethu"]
        }


    }
    handleChange=()=>{
        this.setState({Datamessage:"I'm interested in practicing ReactJS"})
    }
    
    render(){
        return<div><h2>Hello From DataParentClassComponent</h2>
        {/* <DataChildClassComp {...this.state}/> */}
        <hr/>
        <DataChildClassComp 
        msg={this.state.Datamessage}
        persondetails={this.state.Person}
        userdetails={this.state.user}
        changemsg={this.handleChange}/>
        </div>

    }
}