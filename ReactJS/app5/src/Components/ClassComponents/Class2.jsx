import { Component } from "react";

export  class Class2 extends Component{
    constructor(){
        super()
        this.state={
            string:"",
            object:{},
            nestedObject:{fname:"",lname:"",address:{}},
            array:[],
        }
    }
    
    handleString=()=>{
        this.setState({ string:"Hello World"})
    }

    render(){
        return <div>
            {/* <button onClick={this.handleString}>StringMessage</button> */}
         <h2 onDoubleClick={this.handleString}> Name: {this.state.string}</h2> 
         
        </div>
    }
}
