import React, { Component } from 'react'

export default class Form1class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
            street:"",
            city:"",
            state:"",
            zipcode:""
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
    handleClear=()=>{
        this.setState({
           
         person:  { street:"",
            city:"",
            state:"",
            zipcode:""}
    })
    }
    onSubmit = (e) => {
      e.preventDefault();
    };

  render() {
    return (
      <div>
        <h1>Address</h1>
        <hr />
        <form onSubmit={this.onSubmit}>
            <label htmlFor="street">Street</label>
            <input type="text" name='street' value={this.state.person.street} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="city">CITY</label>
            <input type="text" name='city' value={this.state.person.city} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="state">STATE</label>
            <input type="text" name='state' value={this.state.person.state} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="zipcode">Zip code</label>
            <input type="text" name='zipcode' value={this.state.person.zipcode} onChange={(e)=>{this.handleChange(e)}}/>
<br />
            <button onClick={this.handleSubmit} type="submit">OK</button>
            <button onClick={this.handleClear} type="button">CANCEL</button>
        </form>
      </div>
    )
  }
}
