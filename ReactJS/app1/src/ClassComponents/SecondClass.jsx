import { Component } from "react";

export class Second extends Component{
    constructor(){
        super()
            this.state ={
                fname:"meena",
                details:{
                    state:"Telangana",
                    city:"Hyd"
                },
                users:["meena","veena",'ankitha']
            }
        
    }
    render(){
        return  <div>
            <h2>Second Class Component</h2>
            {this.state.users.map((val,i)=>{
                return <p key={i}>{val}</p>
            })}</div>
    }
}