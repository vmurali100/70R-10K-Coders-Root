import { Component } from "react";
import { ChildClassComp } from "./ChildClassComp";

export class ParentClassComp extends Component{
    constructor(){
        super()
        this.state={
            welcomeMsg : "Hello im from Reactjs.hw r u",
            user:{
                fname:"Dhruva",
                lname:"Raam"
            },
            students:["Dhruva","dhar","raam","kumar"]
        }
    }
    handleChange=()=>{
     this.setState({welcomeMsg:"Hello i am from handle change method"})
    }
    render(){
        return <div> 
            <h2>Hello,I am from parent component</h2>
            <hr/>
            
           {/* <ChildClassComp {...this.state}/>*/}
            <ChildClassComp msg={this.state.welcomeMsg}
                            userDetails={this.state.user} 
                            allStudents={this.state.students}
                            changeMessage={this.handleChange}/>
            </div>
    }
}