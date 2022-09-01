import React, { Component } from 'react'

export default class PropertyClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data:{username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""}
         
      }
    }
    handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newdata ={...this.state.data}//creating an copy of object
        newdata[inputname]=e.target.value
        this.setState({data:newdata})


     }
     handleSubmit=()=>{
        console.log(this.state.data)
    }
  render() {
    return (
      <div>
        <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={this.state.data.username} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={this.state.data.password} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="email"value={this.state.data.emailaddress} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={this.state.data.dateofbirth} onChange={(e)=>{this.handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={this.state.data.height} onChange={(e)=>{this.handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={this.state.data.weight} onChange={(e)=>{this.handleChange(e)}} /><br/>
           
           <button onClick={this.handleSubmit} type="button">SUBMIT</button>

       </form>
      </div>
    )
  }
}
