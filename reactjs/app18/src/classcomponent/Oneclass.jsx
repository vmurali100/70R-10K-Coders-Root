import React, { Component } from 'react'

export default class Oneclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         vijay:{
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailid: "",
            mobilenumber: "",
         }
      }
    }
    
     handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name
        var newvijay = { ...this.state.vijay }
        newvijay[inputname] = e.target.value
        this.setState({vijay:newvijay});
    }
      handlesubmit=()=>{
        console.log(this.state.vijay)
     }

      handlereset=()=>{
       this.setState({
        vijay:{
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
    }
       })
     }
  render() {
    return (
      <div>
        <p><h1>HTML FORM</h1></p>
        <form >
                <label htmlFor="firstname">first name:</label>
                <input type="text" name="firstname" value={this.state.vijay.firstname} onChange={(e) => { this.handlefunction(e) }} /> <br />

                <label htmlFor="lastname">last name:</label>
                <input type="text" name="lastname" value={this.state.vijay.lastname} onChange={(e) => { this.handlefunction(e) }} /> <br />

                <label htmlFor="dateofbirth">Date of birth:</label>
                <input type="text" name="dateofbirth" value={this.state.vijay.dateofbirth} onChange={(e) => { this.handlefunction(e) }} /> <br />

                <label htmlFor="emailid">email id:</label>
                <input type="text" name="emailid" value={this.state.vijay.emailid} onChange={(e) => { this.handlefunction(e) }} /> <br />
                
                <label htmlFor="mobilenumber">mobilenumber:</label>
                <input type="text" name="mobilenumber" value={this.state.vijay.mobilenumber} onChange={(e) => { this.handlefunction(e) }} /> <br />


                <button onClick={this.handlesubmit} type="button">Submit</button>
                <button onClick={this.handlereset} type="button">Reset</button>
            </form>
      </div>
    )
  }
}
