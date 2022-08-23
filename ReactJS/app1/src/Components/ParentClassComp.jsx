import { Component } from "react";
import { ChildClassComp } from "./ChildClassComp";

export class ParentClassComp extends Component{
    constructor(){
        super()
        this.state={
            welcomemsg : "Hello from ReactJS, this is new method in class component",
            user :{
                fname :"Manu",
                lname: "Raj"
            },
            students : ["Manasa","Keerthi","Prudhvi","Ajay"]
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
            <ChildClassComp msg={this.state.welcomemsg} 
            userDetails ={this.state.user}
            allStudents={this.state.students}
            changeMessage ={this.handleChange}/>
            
        </div>
    }
}

