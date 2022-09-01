import React, { Component } from 'react'

export default class Form4class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
            university:"",
            institute:"",
            branch:"",
            degree:"",
            avgcgp:"",
            yourwebsite:""
        }
      }
    }
      handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...this.state.person}
        newPerson[inputname]=e.target.value 
        this.setState({person:newPerson})
        
    }
    handleSubmit=()=>{
        console.log(this.state.person)
    }
    
    styles={
        fontsyle:"bold",
        color:"skyblue"
      }
  render() {
    return (
      <div>
        <h1 style={this.styles}>Registration Details</h1>
        <form >
            <label htmlFor="university">University</label>
            <input type="text" name='university' value={this.state.person.university} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="institute">Institute</label>
            <input type="text" name='institute' value={this.state.person.institute} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="branch">Branch</label>
            <input type="text" name='branch' value={this.state.person.branch} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="degree">Degree</label>
            <input type="text" name='degree' value={this.state.person.degree} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="avgcgp">Avg CGPA</label>
            <input type="text" name='avgcgp' value={this.state.person.avgcgp} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="experience">Experience</label>
            <input type="text" name='experience' value={this.state.person.exeperience} onChange={(e)=>{this.handleChange(e)}}/>
<br />
<label htmlFor="yourwebsite">Your Website Or Blog</label>
            <input type="text" name='yourwebsite' value={this.state.person.yourwebsite} onChange={(e)=>{this.handleChange(e)}}/>
<br />
            <button onClick={this.handleSubmit} type="button">Sign Up</button>
        </form>
      </div>
    )
  }
}
