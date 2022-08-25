import { Component } from "react";
import { Childclasscomp } from "./Childclasscomp";

export class Parentclasscomp extends Component{
    constructor(){
        super()

        this.state={
            welcomemsg:"hlooo.....everyone,hope everyone doing well in reactjs training",

            user:{
                fname:"ajay",
                lname:"kumar"
            },

            student:["mallesh","mahesh","mounika","mamata"]
        }

    }

          handlemessage=()=>{
            this.setState({welcomemsg:"iam going to changed by the handlemessage eventhandler"})
          }

    render(){
        return <div>
            <h2>hlo....from parentclasscomponent</h2>

            <hr />
            {/* <Childclasscomp {...this.state}/> */}
            {/* <Childclasscomp msg= {this.state.welcomemsg}/> */}
             
            <Childclasscomp msg= {this.state.welcomemsg} userdetails= {this.state.user} allstudents={this.state.student} changemessage={this.handlemessage}/>
        </div>
    }
}