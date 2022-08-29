import React, { Component } from 'react'

export default class Class5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fifth: {
                name: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
                message: ""
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        var inputname = event.target.name
        var newFifth = { ...this.state.fifth }
        newFifth[inputname] = event.target.value
        this.setState({ fifth: newFifth })
    }

    handleSubmit = () => {
        console.log(this.state.fifth)
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name="name" value={this.state.fifth.name} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="userName">Username</label> <br />
                    <input type="text" name="userName" value={this.state.fifth.userName} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name="email" value={this.state.fifth.email} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="text" name="password" value={this.state.fifth.password} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="confirmPassword">Confirm Password</label> <br />
                    <input type="text" name="confirmPassword" value={this.state.fifth.confirmPassword} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="message">Message</label> <br />
                    <textarea name="message" value={this.state.fifth.message} onChange={(event) => { this.handleChange(event) }}></textarea> <br />

                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
