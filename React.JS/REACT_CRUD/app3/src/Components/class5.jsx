import { Component } from "react";

export class ClassFive extends Component{
    constructor(){
        super()
        this.state = {
           fullname : "",
           offObj : {},
           employees : []
        }
    }

    changeString=()=>{
        this.setState({
            fullname:"Rathna Prudhvidhar Reddy"})
    }

    changeObject=()=>{
        this.setState({
            offObj : {
                "Name":"Google",
                "Location" : "Hyderabad",
                "NoOfEmployees" : 350
            }
        })
    }

    displayArray=()=>{
        this.setState({
            employees : ["Prudhvi","Ajay","Manasa","Keerthy"]
        })
    }

    handleDelete=(i)=>{
        let newArray = [...this.state.employees]
        newArray.splice(i,1)
        this.setState({employees : newArray})
    }

    render(){
        return <div>
         <h2>String</h2>
         <button onClick={this.changeString}>SET STRING</button>
         <p>My Full Name is : {this.state.fullname}</p>
         <hr />

         <h2>Object</h2>
         <button onClick={this.changeObject}>SET OBJECT PROPERTIES AND DISPLAY</button>
         <p>{this.state.offObj.Name}</p>
         <p>{this.state.offObj.Location}</p>
         <p>{this.state.offObj.NoOfEmployees}</p>
         <hr />

         <h2>Array</h2>
         <button onClick={this.displayArray}>SET ARRAY AND DISPLAY</button>
         {this.state.employees.map((user,i)=>{
            return <p key={i} onClick={()=>{this.handleDelete(i)}}>{user}</p>
         })}
        </div>
    }
}