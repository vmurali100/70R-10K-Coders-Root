import { Component } from "react";
import { BodyClassComp } from "./BodyClassComp";


export class HeadClassComp extends Component{
    constructor(){
        super()
        this.state={
            welcomemsg : "Hello from ReactJS, this is new method in class component app3, Parents is head and Child is Body",
            user :{
                fname :"Murali",
                lname: "Krishna"
            },
            students : ["Rakesh","Deevi","Chai","Yeshhwanth"]
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
            <BodyClassComp msg={this.state.welcomemsg} 
            userDetails ={this.state.user}
            allStudents={this.state.students}
            changeMessage ={this.handleChange}/>
            
        </div>
    }
}

