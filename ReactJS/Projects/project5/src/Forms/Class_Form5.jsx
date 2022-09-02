import React, { Component } from 'react'

export default class Class_Form5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        person:{userName:"",password:"",emailAddress:"",dateOfBirth:"",height:"",weight:""}
         
      }
    }
    handleChange=(e)=>{
        var inputname =e.target.name
        var newPerson ={...this.state.person}
        newPerson[inputname]=e.target.value
        this.setState({person:newPerson})


     }
     handleSubmit=()=>{
        console.log(this.state.person)
    }
  render() {
    return (
      <div>
        <h2>Class</h2>
        <form>
           
           <label htmlFor="userName">Username :</label>
           <input type="text" name="userName" placeholder='Username' value={this.state.person.userName} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password" placeholder='Password' value={this.state.person.password} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="emailAddress">Email Address :</label>
           <input type="text" name="emailAddress" placeholder='Email Address' value={this.state.person.emailAddress} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="dateOfBirth">Date of Birth:</label> 
           <input type="text" name="dateOfBirth" placeholder='Date of Birth' value={this.state.person.dateOfBirth} onChange={(e)=>{this.handleChange(e)}} />
           <br/>
           <br/>
           <label htmlFor="height">Height :</label> 
           <input type="text" name="height" placeholder='Height' value={this.state.person.height} onChange={(e)=>{this.handleChange(e)}} />
           <br/>
           <br/>
           <label htmlFor="weight">Weight:</label> 
           <input type="text" name="weight" placeholder='Weight' value={this.state.person.weight} onChange={(e)=>{this.handleChange(e)}} />
           <br/>
           <br/>
           
           <button onClick={this.handleSubmit} type="button">SUBMIT</button>

       </form>
      </div>
    )
  }
}