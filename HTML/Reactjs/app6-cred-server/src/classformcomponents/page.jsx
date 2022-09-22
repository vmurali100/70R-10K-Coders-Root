import React, { Component } from 'react'

export default class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                firstName: "",
                lastName: "",
                email: "",
            }
        }
    }
handleChange = (e) => {
        console.log(e.target.value);
        var inputname = e.target.name;
        var newPerson = { ...this.state.person };
        newPerson[inputname] = e.target.value;
        this.setState({ person: newPerson })

        // setfirstName(e.target.value)

    }


    handleSubmit = () => {
        console.log(this.state.person)
    }

    render() {
        return (
            <div>
                <form >
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={this.state.person.firstName} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={this.state.person.lastName} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={this.state.person.email} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <button onClick={this.handleSubmit} type="button">submit</button>
                </form>
            </div>
        )
    }
}
