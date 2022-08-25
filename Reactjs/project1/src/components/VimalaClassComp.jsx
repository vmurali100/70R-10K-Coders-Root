import { Component } from "react";

export class VimalaClass extends Component {
    constructor() {
        super()
        this.state = {
            fname: "vimala Devi",

            users: ['Ram', 'sundar', 'Dhar', 'Dhruv'],
            person: {
                "fname": "Gertrude",
                "lname": "Brunie",
                "tel": "(250)491-4936",
                "address": "6905 Pulvinar Ct",
                "city": "Rio Rancho",
                "state": "NC",
                "zip": 29566
            },
        }
    }
    changefname=()=>{
        this.setState({
            fname :"devi"
        });
    }
    changePerson=()=>{
        this.setState({person:{fname:"Dharahaas",lname:"boppana",tel:"8989899998",address:"vijayawada",city:"guntur",state:"Ap",zip:209999}

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
              <p>Tel: {this.state.person.tel}</p>
              <p>Address: {this.state.person.address}</p>
              <p>City: {this.state.person.city}</p>
              <p>State: {this.state.person.state}</p>
              <p>Zip: {this.state.person.zip}</p>
              <hr/>
              <h2>Users</h2>
              <button onClick={this. displayUsers}>Display Users</button>
              {this.state.users.map((user,i)=>{
                return <p onClick={()=>{this.handleDelete(i)}} key={i}>{user}</p>
              })}
        </div>
    }
}