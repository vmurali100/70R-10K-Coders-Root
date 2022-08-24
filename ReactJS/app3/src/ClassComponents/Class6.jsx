import { Component } from "react";

export class Class6 extends Component{
    constructor(){
        super()
        this.state={
            persons:[],
            user:{
                address:{}
            },
        }
    }
    PersonsValues=()=>{
        this.setState({persons:["ram","sam","siri","hari","ben"]})
    }

    handleDelete=(i)=>{
        let allPersons=[...this.state.user]
        console.log(i)
        allPersons.splice(i,1)
        this.setState({user:allPersons})
    }

    changeAddress=()=>{
        let newAddress = {...this.state.user.address}
        newAddress={
            doorno:678,
            city:"hyd",
            state:"Telangana",
        }
        this.setState({user:{
            address:newAddress
        }})
    }
    
    render() {
        return <div>
            <h2>Array of Persons</h2>
            <button onClick={this.PersonsValues}>Persons</button>
            {this.state.persons.map((person,i)=>{
                return <p key={i} onClick={()=>{this.handleDelete(i)}}>{person}</p>
            })}
            <hr />

            <h4>Nested Objects</h4>
            <button onClick={this.changeAddress}>Address of person</button>
            <p>{this.state.user.address.doorno}</p>
            <p>{this.state.user.address.city}</p>
            <p>{this.state.user.address.state}</p>
            
        </div>
    }
}