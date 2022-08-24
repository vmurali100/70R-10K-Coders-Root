import { Component } from "react";
import { ChildClassComp } from "./childclasscomp";

export class ParentClassComp extends Component{
    constructor(){
        super()
        this.state={
            welcomeMsg:"Hello iam from ReactJS",
            user:{
                fname:"hari",
                lname:"krishna"
            },
            students:["nikhil","akhil","komal"]
        }
    }
    handleChange=()=>{
        this.setState({welcomeMsg:"iam going to change by handleChange"})
    }

    render(){
        return <div>
            <h2>Hello from Parent Class Component</h2>

            <hr />
            {/* <ChildClassComp {...this.state}/> */}
           
            <ChildClassComp msg={this.state.welcomeMsg} 
            userdetails={this.state.user} 
            allstudents={this.state.students}
            changeMessage={this.handleChange}/>
        </div>
    }
}