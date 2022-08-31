import React, { Component } from 'react'

export default class Fourthclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fourth: {
                username: "",
                password: "",
                emailaddress: "",
            }
        }
    }

    handlechange=(e)=>{
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newfourth = { ...this.state.fourth }
        newfourth[inputname] = e.target.value
        this.setState({fourth:newfourth})
    }

    handleok = () => {
        console.log(this.state.fourth)
    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' value={this.state.fourth.username} onChange={(e) => { this.handlechange(e) }} /><br />

                    <label htmlFor="password">password</label>
                    <input type="text" name='password' value={this.state.fourth.password} onChange={(e) => { this.handlechange(e) }} /><br />

                    <label htmlFor="emailaddress">emailaddress</label>
                    <input type="text" name='emailaddress' value={this.state.fourth.emailaddress} onChange={(e) => { this.handlechange(e) }} /><br />

                    <button onClick={this.handleok} type="button">OK</button>
                </form>
            </div>
        )
    }
}
