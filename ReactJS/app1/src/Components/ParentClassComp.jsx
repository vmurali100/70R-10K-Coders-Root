import { Component } from "react";
import { ChildClassComp } from "./ChildClassComp";

export  class ParentClassComp extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        this.state={//state can be modified
            welcomemessage :"Hello I am from ReactJS.Hope your doing good",
            user:{
                fname:"Sai",
                lname:"Prasanna"
            },
            students:["Hofman","Lupo","Serah","Jordon"]
        }
    }
      handleChange=()=>{
         this.setState({welcomemessage:"I'm going to trip"})
     }
    render(){
        return <div>
            <h2>Hello I'm from Parent Component</h2>
            <hr/>
            {/* <ChildClassComp  {...this.state}/> spread operator: sending total infor to child component  */}
            {/* <button onClick={this.handleChange}>Change Message</button> */}
            <ChildClassComp
             msg={this.state.welcomemessage} 
             userdetails={this.state.user}
             allstudents={this.state.students}
             changemessage={this.handleChange}/>
        </div> 
    }
}