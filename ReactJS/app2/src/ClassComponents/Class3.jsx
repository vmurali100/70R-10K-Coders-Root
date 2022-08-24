import { Component } from "react";

export class Class3 extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            Address:{
                Doorno:345,
                add:"GandhiNagar",
                City:"Secunderabad"
            },
            Frnds:["Ram","Sam","Anil"]
        }
    }
    displayName=()=>{
        this.setState({name:"Srinivas"})
    }

    render(){
        return <div>
            <button onClick={this.displayName}>Click For User name</button>
            <h2>The UserName is:{this.state.name}</h2>
        </div>
    }
    
}