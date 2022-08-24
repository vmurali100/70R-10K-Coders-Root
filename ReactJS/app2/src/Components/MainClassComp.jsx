import { Component } from "react";
import { SubClassComp } from "./SubClassComp";

export class MainClassComp extends Component{
    constructor(){
        super()
        this.state={
            welcomemsg : "Hello from ReactJS, this is new method in class component app2",
            user :{
                fname :"Mahi",
                lname: "Dhoni"
            },
            students : ["Mourya","Kaushil","Rathod","Yeshhwanth"]
        }
    }
    handleChange=()=>{
        this.setState({welcomemsg:"Hello I am going to change by HandleChange Method"})
    }
    render(){
        return <div>
            <h2>Hello from Parent Component</h2>
            <hr/>
            {/* <ChildClassComp {...this.state}/> */}
            {/* we can send props using two ways one is using spread operator as above statement */}
            {/* Or you can send it individual with seperate name */}
            <SubClassComp msg={this.state.welcomemsg} 
            userDetails ={this.state.user}
            allStudents={this.state.students}
            changeMessage ={this.handleChange}/>
            
        </div>
    }
}

