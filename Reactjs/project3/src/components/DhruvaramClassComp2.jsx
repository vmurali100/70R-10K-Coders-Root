import { Component } from "react";

export class DhruvaramClass2 extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Dhruvaram",

            users: ['Ram', 'sundar', 'Dhar', 'Dhruv'],
            person:  {
                "fname": "Gabriel",
                "lname": "Poole"
            },
        }
    }
    changefname=()=>{
        this.setState({
            fname :"Dharahaas"
        });
    }
    changePerson=()=>{
        this.setState({person:{"fname": "Dhruva",
        "lname": "raam"}

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
              <p>First Name: {this.state.person.fname}</p>
              <p>Last Name: {this.state.person.lname}</p>
              <hr/>
              <h2>Users</h2>
              <button onClick={this. displayUsers}>Display Users</button>
              {this.state.users.map((user,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}} key={i}>{user}</p>
              })}
        </div>
    }
}
