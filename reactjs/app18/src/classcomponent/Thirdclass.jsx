import React, { Component } from 'react'

export default class Thirdclass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       third:{
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
       }
    }
  }
  handlefunction = (e) => {
    console.log(e.target.value)
    var inputname = (e.target.name)
    var newthird = { ...this.state.third }
    newthird[inputname] = e.target.value
    this.setState({third:newthird})
    // setthird(newthird)
}

handleok=()=>{
  console.log(this.state.third)
}

handlecancel=()=>{
  this.setState({
  setthird:{
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "" ,
    } 
  })
}
  render() {
    return (
      <div>
         <p> <h1>Address</h1></p>
            <form >
                <label htmlFor="street">street</label>
                <input type="text" name='street' value={this.state.third.street} onChange={(e) => this.handlefunction(e)} /><br />

                <label htmlFor="city">city , state</label>
                <input type="text" name='city' value={this.state.third.city} onChange={(e) => this.handlefunction(e)} />


                <label htmlFor="state"></label>
                <input type="text" name='state' value={this.state.third.state} onChange={(e) => this.handlefunction(e)} /><br />

                <label htmlFor="zipcode">zipcode</label>
                <input type="text" name='zipcode' value={this.state.third.zipcode} onChange={(e) => this.handlefunction(e)} /><br />

                <label htmlFor="country">country</label>
                <input type="text" name='country' value={this.state.third.country} onChange={(e) => this.handlefunction(e)} /><br />

                <button onClick={this.handleok} type="button">OK</button>
                <button onClick={this.handlecancel} type="button">Cancel</button>
            </form>
      </div>
    )
  }
}
