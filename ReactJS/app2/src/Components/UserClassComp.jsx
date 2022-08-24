import { Component } from "react";

export  default class UserClass extends Component{
    constructor(){
        super()
        this.state={
            message :"",
            person:{
                address:{} 
            },
            users:[]

        }
    }
    changeMessage=()=>{
        this.setState({//to change state value
            message:" Hello from Event Handler"
        })
    }
    changePerson=()=>{
        this.setState({person:{fname:"Keerthi",lname:"Prasanna",address:{}}

        })
    }
    displayUsers=()=>{
        this.setState({users:["Ker","Pra","Manasa"]})

    }
    handleDelete=(i)=>{
        console.log(i)
        let allUsers =[...this.state.users]
        allUsers.splice(i,1)
        this.setState({users:allUsers})
        
    }
    changeAddress=()=>{
        let newAddress={...this.state.person.address}
        newAddress={
            name:"Keerthi",
            doorNo:"23/89",
            city:"Hyderabad",
            state:"TS"
        }
        this.setState({
            person:{
            address:newAddress

            }})
  
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
    <hr/>
    <button onClick={this.changeAddress}>Change Address</button>
    <h2>Display Address:</h2>
    <p> Name: {this.state.person.address.name}</p>
    <p> Door Number: {this.state.person.address.doorNo}</p>
    <p> City: {this.state.person.address.city}</p>
    <p> State: {this.state.person.address.state}</p>

</div>
  }
}
