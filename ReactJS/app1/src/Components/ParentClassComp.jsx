import { Component } from "react";
import { ChildClass } from "./ChildClassComp";

export class ParentClass extends Component{
    constructor(){
        super()
        this.state={
            welcomeMsg:"Hello World",
            user:{
                fname:"Srikanth",
                lname:"Chokkalla"
            },
            students:["Sai","Pavan","Chandu"]
        }
    }
    
    handleMessage=()=>{
        this.setState({welcomeMsg:"Hello Iam Good"})
    }

    handleUser=()=>{
        this.setState({user:{fname:"Naveen",lname:"Chokkalla"}})
    }

    handleStudents=()=>{
        this.setState({students:["Chandu","Pavan","Sai"]})
    }

    render(){
        return <div>
            <h2>Hello From Parent Class Components</h2>
            <hr />

            {/* for total state */}
            {/* <ChildClass {...this.state}/> */}

            {/*  for individual objects */}
            
            <ChildClass 
                Msg={this.state.welcomeMsg}
                newUser={this.state.user}
                newStudents={this.state.students}

                changeMessage = {this.handleMessage}
                changeUser = {this.handleUser}
                changeStudents = {this.handleStudents}
            /> 

        </div>
    }
}