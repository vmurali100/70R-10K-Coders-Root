import React, { Component } from 'react'

export default class Userclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                firstname: "",
                lastname: "",
                email: ""
            }
        }
    }

    handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name
        var newperson = { ...this.state.person };
        newperson[inputname] = e.target.value
        this.setState({ person: newperson })
        // setperson(newperson);
    }
    handlesubmit = () => {
        console.log(this.state.person)
    };
    handlereset = () => {
        this.setState({
            person: {
                firstname: "",
                lastname: "",
                email: ""
            }
        })
    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="firstname">firstname :</label>
                    <input type="text" name="firstname" value={this.state.person.firstname} onChange={(e) => { this.handlefunction(e) }} /><br />
                    <label htmlFor="lastname">lastname :</label>
                    <input type="text" name="lastname" value={this.state.person.lastname} onChange={(e) => { this.handlefunction(e) }} /><br />
                    <label htmlFor="email" >email:</label>
                    <input type="text" name="email" value={this.state.person.email} onChange={(e) => { this.handlefunction(e) }} />
                    <button onClick={this.handlesubmit} type="button">add user</button>
                    <button onClick={this.handlereset} type="button">reset</button>
                </form>
            </div>
        )
    }
}
