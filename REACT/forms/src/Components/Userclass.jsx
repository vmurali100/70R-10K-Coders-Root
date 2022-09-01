import React, { Component } from 'react'

export default class Userclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
          firstname:"",
          lastname:"",
          dateofbirth:"",
          email:"",
          mobilenumber:""
        }
      }
    }
      handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...this.state.person}
        newPerson[inputname]=e.target.value 
        this.setState({person:newPerson})
        // setperson(newPerson)
        // setfirstname(e.target.value)
    }
    handleSubmit=()=>{
        console.log(this.state.person)
    }
    handleClear=()=>{
      this.setperson({
         
          firstname:"",
          lastname:"",
          dateofbirth:"",
          email:"",
          mobilenumber:""
  })
  }

  render() {
    return (
      <div>
        <h1>HTML Form</h1>
        <hr />
        <form >
            <label htmlFor="firstname">First Name</label>
            <br />
            <input type="text" name='firstname' value={this.state.person.firstname} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input type="text" name='lastname' value={this.state.person.lastname} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="dateofbirth">Date Of Birth</label>
            <br />
            <input type="text" name='dateofbirth' value={this.state.person.dateofbirth} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="emailid">Email Id</label>
            <br />
            <input type="text" name='emailid' value={this.state.person.emailid} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="mobilenumber">Mobile Number</label>
            <br />
            <input type="text" name='mobilenumber' value={this.state.person.mobilenumber} onChange={(e)=>{this.handleChange(e)}}/>
<br />
            <button onClick={this.handleSubmit} type="button">Submit</button>
            <button onClick={this.handleClear} type="button">RESET</button>
        </form>
      </div>
    )
  }
}
