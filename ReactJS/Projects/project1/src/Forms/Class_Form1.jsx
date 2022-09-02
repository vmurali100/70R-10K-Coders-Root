import React, { Component } from 'react'

export default class Class_Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
         }
      }
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
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
        }})
      }
  render() {
    return (
        
      <div>
       
       <h2 >ADDRESS</h2>
       <form>

        <label htmlFor="street">Street : </label>
        <input type="text" name="street" value={this.state.person.street} onChange={(Event)=>{this.handleChange(Event)}} /> 
        
        <br />
        <br />

        <label htmlFor="city">City : </label>
        <input type="text" name="city" value={this.state.person.city} onChange={(Event)=>{this.handleChange(Event)}} /> 
        <br />
        <br />

        <label htmlFor="state">State : </label>
        <input type="text" name="state" value={this.state.person.state} onChange={(Event)=>{this.handleChange(Event)}} /> 
        <br />
        <br />

        <label htmlFor="zipcode">Zipcode : </label>
        <input type="text" name="zipcode" value={this.state.person.zipcode} onChange={(Event)=>{this.handleChange(Event)}} />
         <br />
         <br />

        <label htmlFor="country">Country : </label>
        <input type="text" name="country" value={this.state.person.country} onChange={(Event)=>{this.handleChange(Event)}} />  
        <br />
        <br />

        <button onClick={this.handleSubmitt} type="button">Ok</button>
        <button onClick={this.handleReset}>CANCEL</button>

       </form>


      </div>
    )
  }
}
