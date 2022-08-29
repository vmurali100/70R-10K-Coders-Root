import React, { Component } from "react";

export default class Class_Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  }
  handleChange=(Event)=>{
    var inputname = Event.target.name;
        var newPerson = {...this.state.person}
        newPerson[inputname] = Event.target.value;
        this.setState({person:newPerson})
  }
  handleSubmitt=()=>{ 
    console.log(this.state.person)
  }
  handleReset=()=>{
    this.setState({person:{
        firstName: "",
        lastName: "",
        email: ""
    }})
  }
  render() {
    return <div>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" value={this.state.person.firstName} onChange={(Event)=>{this.handleChange(Event)}}/> <br />
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" value={this.state.person.lastName} onChange={(Event)=>{this.handleChange(Event)}}/> <br />
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" value={this.state.person.email} onChange={(Event)=>{this.handleChange(Event)}}/> <br />
            <button onClick={this.handleSubmitt} type="button">Add User</button>
            <button onClick={this.handleReset}>Reset</button>
        </form>
    </div>;
  }
}
