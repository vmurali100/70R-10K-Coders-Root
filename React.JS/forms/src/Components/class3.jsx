import React, { Component } from 'react'

export default class Class3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            third: {
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                phone: ""
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        var inputname = event.target.name
        var newThird = { ...this.state.third }
        newThird[inputname] = event.target.value
        this.setState({ third: newThird })
    }

    handleSubmit = () => {
        console.log(this.state.third)
    }

    handleReset = () => {
        this.setState({
            third: {
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                phone: ""

            }
        })
    }
    render() {
        return (
            <div>

                <h2>HTML Form</h2>
                <label htmlFor="firstName"> First Name : </label>
                <input type="text" name="firstName" value={this.state.third.firstName} onChange={(event) => { this.handleChange(event) }} /> <br />
                <label htmlFor="lastName"> Last Name : </label>
                <input type="text" name="lastName" value={this.state.third.lastName} onChange={(event) => {this.handleChange(event) }} /> <br />
                <label htmlFor="dob"> Date Of Birth : </label>
                <input type="text" name="dob" value={this.state.third.dob} onChange={(event) => { this.handleChange(event) }} /> <br />
                <label htmlFor="email"> Email Id : </label>
                <input type="text" name="email" value={this.state.third.email} onChange={(event) => { this.handleChange(event) }} /> <br />
                <label htmlFor="phone"> Mobile Number : </label>
                <input type="text" name="phone" value={this.state.third.phone} onChange={(event) => { this.handleChange(event) }} /> <br />

                <button type="button" onClick={this.handleSubmit}>Submit</button>
                <button type="button" onClick={this.handleReset}>Reset</button>

            </div>
        )
    }
}
