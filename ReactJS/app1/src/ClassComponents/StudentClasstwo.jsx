import { Component } from "react";

export class StudenTwo extends Component{
    constructor(){
        super()
        this.state={
            students:["apple",'orange','mango','banana']
        }
    }
    render(){
        return <div>
            <ol>{this.state.students.map((value,i)=>{
                return <h2 key={i}>{value}</h2>
            })}</ol>
        </div>
    }
}