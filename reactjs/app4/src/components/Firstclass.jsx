import { Component } from "react";

export class Firstclass extends Component {

    constructor() {
        super()
        this.state = {
            message: "",
            person: {
                address:{}
            },
            users: []
        }
    }


    changemessage = () => {
        this.setState({
            message: "hello from event handler"
        })
    }

    changeperson = () => {
        this.setState({ person: { fname: "ajay", lname: "kumar",address:{} } })
    }

    changeusers = () => {
        this.setState({ users: ["ajay", "murali", "prudvi", "srikanth", "keerti", "chandu"] })
    }

    handledelete = (i) => {
        console.log(i)
        let allusers =[...this.state.users]
        allusers.splice(i,1)
        this.setState({users:allusers})
    }

    changeaddress=()=>{
        let newaddress={...this.state.person.address}
        newaddress={
            name:"ajaykumar",
            dno:"21/21",
            city:"sdpt",
            state:"ts"
        }
        this.setState({person:{
            address:newaddress 
        }})
    }

    render() {
        return <div>
            <h3>iam from class Firstclass</h3>

            <h1>string</h1>
            <button onClick={this.changemessage}>setmessage</button>
            <p>message is .......{this.state.message}</p>

            <hr />
            <h1>object</h1>
            <button onClick={this.changeperson}>change person</button>
            <p>firstname: {this.state.person.fname}</p>
            <p>lastname: {this.state.person.lname}</p>

            <hr />
            <h1>array</h1>
            <button onClick={this.changeusers}>changeusers</button>
            {this.state.users.map((users,i) => {
                return <p onClick={() => { this.handledelete(i) }} key={i}>{users}</p>
            })}

        <hr />
        <button onClick={this.changeaddress}>changeaddress</button>
        <h2>dispaly address :</h2>

        <p>Name :{this.state.person.address.name}</p>
         <p>Dno :{this.state.person.address.dno}</p>
         <p>City :{this.state.person.address.city}</p>
         <p>State :{this.state.person.address.state}</p>
        </div>
    }
} 