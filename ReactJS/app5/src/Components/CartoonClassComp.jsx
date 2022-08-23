import { Component } from "react";

export  default class Cartoon extends Component{
    constructor(){
        super()
        this.state={
            message :"",
            person:{
                
            },
            users:[]

        }
    }
    changeMessage=()=>{
        this.setState({//to change state value
            message:" Hello from Event Handler Keerthi, I'm going to Bangalore"
        })
    }
    changePerson=()=>{
        this.setState({person:{fname:"Krishna",lname:"Sai"}

        })
    }
    displayUsers=()=>{
        this.setState({users:["Jones","Benjamin","Imran"]})

    }
    handleDelete=(i)=>{
        console.log(i)
        let allUsers =[...this.state.users]
        allUsers.splice(i,1)
        this.setState({users:allUsers})
        
    }
    

  render(){
    return <div>
    <button onClick={this.changeMessage}>Set Message</button>
    <h2>Hello from User Class Component</h2>
    <p>User Message is: {this.state.message}</p>

    <hr/>
    <button onClick={this.changePerson}>Change Person</button>
    <p>First Name: {this.state.person.fname}</p>
    <p>Last Name: {this.state.person.lname}</p>
    <hr/>
    <h2>Users</h2>
    <button onClick={this.displayUsers}>Display Users</button>
    {this.state.users.map((user,i)=>{
        return <p onClick={()=>{this.handleDelete(i)}} key={i}>{user}</p>

    })}
    

</div>
  }
}
