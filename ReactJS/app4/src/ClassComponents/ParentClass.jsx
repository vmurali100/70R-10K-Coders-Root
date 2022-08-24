import { Component } from "react";
import { ChildClass } from "./ChildClass";

export class ParentClass extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello from parent component",
            user:{fname:"anil",lname:"kumar"},
            students:["ram","mani","vishnu","vamshi"]
        }
    }
    changemsg=()=>{
        this.setState({message:"Hello again from parent class component"})
    }

    render(){
        return <div><h2>{this.state.message}</h2>
        
        <hr />
        {/* <ChildClass {...this.state}/> */}
        <ChildClass msg={this.state.message}
        userdetails={this.state.user}
        studentdetails = {this.state.students}
        changestrng = {this.changemsg}/>
        </div>
    }
}