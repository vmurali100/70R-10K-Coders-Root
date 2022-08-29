import React, { Component } from 'react'

export default class Class2 extends Component {
    constructor(props){
        super(props)
        this.state = { student : {
            university : "",
            institute : "",
            website : ""
        }
      }
    }

    handleChange = (event) =>{
            console.log(event.target.value)
            var inputname = event.target.name
            var newStudent = {...this.state.student}
            newStudent[inputname] = event.target.value
            this.setState({student : newStudent})
    }

    handleSubmit = () =>{
        console.log(this.state.student)
    }
  render() {
    return (
      <div>
        <h2>Registration Details</h2>
                <label htmlFor="university"> University : </label>
                <input type="text" name="university" value={this.state.student.university} onChange={(event)=>{this.handleChange(event)}} /> <br />
                <label htmlFor="university"> Institute : </label>
                <input type="text" name="institute" value={this.state.student.institute} onChange={(event)=>{this.handleChange(event)}} /> <br />
                <label htmlFor="university"> Website or Blog : </label>
                <input type="text" name="website" value={this.state.student.website} onChange={(event)=>{this.handleChange(event)}} /> <br />
                <button type="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
