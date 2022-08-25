import { Component } from "react";
import { Class5 } from "./Class5";

export class Class4 extends Component{
    constructor(){
        super()
        this.state={
            person:{
                name:{fname:"Meena",lname:"Seelam",},
                age:27,
                address:{
                    AptName:"krishna kutir",
                    Flat:302,
                    city:"Hyd",
                    State:"TS"
                }
            }
        }
    }
    changeName=()=>{
        this.setState({person:{name:{fname:"Anil",lname:"Kumar"}}})
    }
    
    render(){
        return <div >
            <h4 >Below are the details of  {this.state.person.name.fname}{this.state.person.name.lname}</h4>
        {/* <Class5 {...this.state}/> */}
            


        <Class5 Name1={this.state.person.name.fname}
        Name2={this.state.person.name.lname}
        ChangedName={this.changeName}/>
        </div>
    }
}