import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         second:{
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: ""
         }
      }
    }

     handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newsecond = { ...this.state.second }
        newsecond[inputname] = e.target.value
        this.setState({second:newsecond})
        // setsecond(newsecond)
    }

     handlesend = () => {
        console.log(this.state.second)
    }
  render() {
    return (
      <div>
         <p>Bootstrap 4 Form Validation Demo</p>
            <form >
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={this.state.second.name} onChange={(e) => { this.handlefunction(e) }} /><br />

                <label htmlFor="username">userName:</label>
                <input type="text" name='username' value={this.state.second.username} onChange={(e) => { this.handlefunction(e) }} /><br />

                <label htmlFor="email">email:</label>
                <input type="text" name='email' value={this.state.second.email} onChange={(e) => {this.handlefunction(e) }} /><br />

                <label htmlFor="password">password:</label>
                <input type="text" name='password' value={this.state.second.password} onChange={(e) => { this.handlefunction(e) }} /><br />

                <label htmlFor="confirmpassword">confirmpassword:</label>
                <input type="text" name='confirmpassword' value={this.state.second.confirmpassword} onChange={(e) => { this.handlefunction(e) }} /><br />

                <label htmlFor="message">message:</label>
                <input type="text" name='message' value={this.state.second.message} onChange={(e) => { this.handlefunction(e) }} /><br />

                <button onClick={this.handlesend} type="button">SEND</button>
            </form>
      </div>
    )
  }
}
