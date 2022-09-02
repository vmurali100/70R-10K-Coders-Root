

import React, { Component } from 'react'

export default class Class_Form3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      person:  {university:"",institute:"",branch:"",degree:"",experience:"",yourwebsiteorblog:""}

         
      }
    }
       handlechange=(Event)=>{
        // console.log(Event.target.value)
        var inputname =Event.target.name
        var newPerson ={...this.state.person}
        newPerson[inputname]=Event.target.value
        this.setState({person:newPerson})


     }

      handleSubmit=()=>{
        console.log(this.state.person)
    }
  render() {
    return (
        <div>
        <h2>CLASS REGISTRATION DETAILS</h2>
       <form>
           <label htmlFor='university'>University :</label>
           <input type="text" name="university" value={this.state.person.university} onChange={(Event)=>{this.handlechange(Event)}} /> <br/>
           <label htmlFor="institute">Institute :</label>
           <input type="text" name="institute"value={this.state.person.institute} onChange={(Event)=>{this.handlechange(Event)}}/> <br/>
           <label htmlFor="branch">Branch :</label>
           <input type="text" name="branch"value={this.state.person.branch} onChange={(Event)=>{this.handlechange(Event)}}/> <br/>
           <label htmlFor="degree">Degree :</label>
           <input type="text" name="degree"value={this.state.person.degree} onChange={(Event)=>{this.handlechange(Event)}}/> <br/>
           <label htmlFor="experience">Experience :</label>
           <input type="text" name="experience"value={this.state.person.experience} onChange={(Event)=>{this.handlechange(Event)}}/> <br/>
           <label htmlFor="yourwebsiteorblog">Your Website Or Blog :</label>
           <input type="text" name="yourwebsiteorblog"value={this.state.person.yourwebsiteorblog} onChange={(Event)=>{this.handlechange(Event)}}/> <br/>

           <button onClick={this.handleSubmit} type="button">SUBMIT</button>

       </form>
      </div>
    )
  }
}