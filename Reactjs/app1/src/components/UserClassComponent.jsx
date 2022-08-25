import { Component } from "react";

export class User extends Component{
    constructor(){
        super()
        this.state={
            Message :"",
            person:{
                address:{}
            },
            users:[]
        }
    }
    changeMessage=()=>{
        this.setState({
            Message :"Hello from Event Handler"
        })

    }
    changePerson=()=>{
        this.setState({person:{fname:"Dhruva",lname:"Raam",address:{}}

        })
    }
    displayUsers=()=>{
        this.setState({users : ["sam","singh","roy","Ram"]})
    }
    handleDelete=(i)=>{
        console.log(i)
        let allUsers= [...this.state.users]
        allUsers.splice(i,1)
        this.setState({users:allUsers})
    }
    changeAddress=()=>{
        let newAddress = {...this.state.person.address}
        newAddress={
            name:"Dharahaas",
            doorNo:12/13,
            city:"vijayawada",
            state:"Ap"
        }
        this.setState({
            person:{
                address: newAddress
            }
           
        })
    }

    render(){
        return <div>
            <button onClick={this.changeMessage}>Set Message</button>
            <h2>Hello from userclass component</h2>
            <p>User message is: {this.state.Message}</p>
            <hr/>
            <button onClick={this.changePerson}>changePerson</button>
              <p>First Name: {this.state.person.fname}</p>
              <p>Last Name: {this.state.person.lname}</p>

              <hr/>
              
              <h2>Users</h2>
              <button onClick={this. displayUsers}>Display Users</button>
              {this.state.users.map((user,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}} key={i}>{user}</p>
              })}
              <hr/>
              <button onClick={this.changeAddress}>Change Address</button>
              <h2>Display Address</h2>
              <p> name : {this.state.person.address.name}</p>
              <p> doorNo : {this.state.person.address.doorNo}</p>
              <p> city : {this.state.person.address.city}</p>
              <p> state: {this.state.person.address.state}</p>
              
            </div>
    }
}