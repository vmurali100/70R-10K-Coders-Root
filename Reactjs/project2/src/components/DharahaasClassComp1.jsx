import { Component } from "react";

export class DharahaasClass1 extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Dharahaas",

            users: ['Ram', 'sundar', 'Dhar', 'Dhruv'],
            person:  {
                "id": 372,
                "email": "SAllshouse@eget.io",
                "username": "KKennedy",
                "password": "twVbE"
            },
        }
    }
    changefname=()=>{
        this.setState({
            fname :"Dhruvaraam"
        });
    }
    changePerson=()=>{
        this.setState({person:{"id": 400,
        "email": "dhruvaraam&gmail.com","username":"dhruva",
    "password":"raam123"}

        })
    }
    displayUsers=()=>{
        this.setState({users :  ['Dharahaas', 'Dhruva', 'Ram', 'Kumar']})
    }
    handleDelete=(i)=>{
        console.log(i)
        let allUsers= [...this.state.users]
        allUsers.splice(i,1)
        this.setState({users:allUsers})
    }
    render() {
        return <div>
            {/*<h2>{this.state.fname}</h2>
            <hr/>
            {this.state.users.map((val, i) => {
                return <p key={i}>{val}</p>
            })
            }
             {Object.keys(this.state.person).map((val,i)=>{
             //return <p key={i}>{val}</p>
             return <p key={i}>{val} :- {this.state.person[val]}</p>
        })}*/}
 <button onClick={this.changefname}>change fname</button>
           
           <p>User fname is: {this.state.fname}</p>
           <hr/>
           <button onClick={this.changePerson}>changePerson</button>
              <p>Id: {this.state.person.id}</p>
              <p>Email: {this.state.person.email}</p>
              <p>UserName: {this.state.person.username}</p>
              <p>Password: {this.state.person.password}</p>
              <hr/>
              <h2>Users</h2>
              <button onClick={this. displayUsers}>Display Users</button>
              {this.state.users.map((user,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}} key={i}>{user}</p>
              })}
        </div>
    }
}