import React, { Component } from 'react';

class Class_Form2 extends Component {
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
            <label htmlFor="fname">First Name:</label> 
            <input type="text" name="fname" value={this.state.person.fname} onChange={(e)=>{this.handleChange(e)}}/>
            <br/>
            <br />
            <label htmlFor="lname">Last Name:</label> 
            <input type="text" name="lname" value={this.state.person.lname} onChange={(e)=>{this.handleChange(e)}}/>
            <br/>
            <br />
            <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={this.state.person.dateofbirth} onChange={(e)=>{this.handleChange(e)}} />
            <br/>
            <br />
            <label htmlFor="emailid">Email id:</label> 
            <input type="text" name="emailid" value={this.state.person.emailid} onChange={(e)=>{this.handleChange(e)}}/>
            <br/>
            <br />
            <label htmlFor="mobileNumber">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={this.state.person.mobileNumber} onChange={(e)=>{this.handleChange(e)}}/>
            <br/>
            <br />
            <button onClick={this.handleSubmit} type="button">SUBMIT</button>
            <button onClick={this.handleReset} type="button">RESET</button>

     
          </form> 
            </div>
        );
    }
}

export default Class_Form2;