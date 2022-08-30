import React, { Component } from 'react'

export default class FormClass2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                firstName: "",
                lastName: "",
                DateOfBirth: "",
                emailid: "",
                MobileNumber: "",
            }
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name;
        var newPerson = { ...this.state.person }
        newPerson[inputname] = e.target.value
        this.setState({ person: newPerson }
        )
    }
    handleSubmit = () => {
        console.log(this.state.person)
    }
    handleReset = () => {
        this.setState({
            person: {

                firstName: "",
                lastName: "",
                DateOfBirth: "",
                emailid: "",
                MobileNumber: "",
            }
        })
    }
    render() {
        return (
            <div>
                <hr />
                <h2>HTML Form</h2>
                <form>
                    <label htmlFor="FirstName">First Name :</label>
                    <input type="text" name="firstName" value={this.state.person.firstName} onChange={(e) => {this.handleChange(e) }} /><br />
                    <label htmlFor="Lastname">Last Name :</label>
                    <input type="text" name="lastName" value={this.state.person.lastName} onChange={(e) => {this.handleChange(e) }} /><br />
                    <label htmlFor="DateOfBirth">Date Of Birth :</label>
                    <input type="text" name="DateOfBirth" value={this.state.person.DateOfBirth} onChange={(e) => {this.handleChange(e) }} /><br />
                    <label htmlFor="emailid">Email Id:</label>
                    <input type="text" name="emailid" value={this.state.person.emailid} onChange={(e) => {this.handleChange(e) }} /><br />
                    <label htmlFor="MobileNumber">Mobile Number:</label>
                    <input type="text" name="MobileNumber" value={this.state.person.MobileNumber} onChange={(e) => {this.handleChange(e) }} /><br />
                    <button onClick={this.handleSubmit} type="button">Submit</button>
               
                    <button onClick={this.handleReset} type="button">Reset</button>
                </form>
            </div>
        )
    }
}
