import React, { Component } from 'react';

class ProductClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       person: {fname:"",lname:"",dateofbirth:"",emailid:"",mobileNumber:""}
         
      }
    }
     handleChange=(e)=>{
        console.log(e.target.value)
        var inputName= e.target.name
        var newperson={...this.state.person}
        newperson[inputName]= e.target.value
        //console.log(inputName)
        this.setState({person:newperson})

      }
       handleSubmit=()=>{
        console.log(this.state.person)
      }
       handleReset=()=>{
        this.setState({
        person: {fname:"",lname:"",dateofbirth:"",emailid:"",mobileNumber:""}})
        }
    render() {
        return (
            <div>
              <h2>HTML FORM</h2>
               <form> 
            <label htmlFor="firstName">First Name:</label> 
            <input type="text" name="firstName" value={this.state.person.firstname} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <label htmlFor="lastName">Last Name:</label> 
            <input type="text" name="lastName" value={this.state.person.lastname} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={this.state.person.dateofbirth} onChange={(e)=>{this.handleChange(e)}} /><br/>
            <label htmlFor="emailid">Email id:</label> 
            <input type="text" name="emailid" value={this.state.person.emailid} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <label htmlFor="mobileNumber">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={this.state.person.mobileNumber} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <button onClick={this.handleSubmit} type="button">SUBMIT</button>
            <button onClick={this.handleReset} type="button">RESET</button>

     
          </form> 
            </div>
        );
    }
}

export default ProductClass;