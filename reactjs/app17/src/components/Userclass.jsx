import React, { Component } from 'react'

export default class Userclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ajay: {
                firstname: "",
                lastname: "",
                email: ""
            }
        }
    }

    handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name
        var newperson = { ...this.state.ajay };
        newperson[inputname] = e.target.value
        this.setState({ ajay: newperson })
        // setajay(newperson);
    }
    handlesubmit = () => {
        console.log(this.state.ajay)
    };
    handlereset = () => {
        this.setState({
            ajay: {
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
                    <input type="text" name="firstname" value={this.state.ajay.firstname} onChange={(e) => { this.handlefunction(e) }} /><br />
                    <label htmlFor="lastname">lastname :</label>
                    <input type="text" name="lastname" value={this.state.ajay.lastname} onChange={(e) => { this.handlefunction(e) }} /><br />
                    <label htmlFor="email" >email:</label>
                    <input type="text" name="email" value={this.state.ajay.email} onChange={(e) => { this.handlefunction(e) }} />
                    <button onClick={this.handlesubmit} type="button">add user</button>
                    <button onClick={this.handlereset} type="button">reset</button>
                </form>
            </div>
        )
    }
}
