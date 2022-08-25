import { Component } from "react";

export class Class3 extends Component{
    constructor(){
        super()
        this.state={
            students:[],
        }
    }
    dispalyarray=()=>{
        this.setState({students:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]})
    }
    handlearray=(i)=>{
       let newarray=[...this.state.students];
       newarray.splice(i,1);
       this.setState({students:newarray})
    }

    render(){
        return <div>
            <button onClick={this.dispalyarray}>Days</button>
            <ul>{this.state.students.map((day,i)=>{
               return <li key={i} onClick={this.handlearray}>{day}</li>
            })}
                
            </ul>
        </div>
    }
}