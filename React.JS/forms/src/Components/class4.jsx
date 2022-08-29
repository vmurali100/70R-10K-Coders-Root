import React, { Component } from 'react'

export default class Class4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dating: {
                userName: "",
                password: "",
                email: "",

            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        var inputname = event.target.name
        var newDating = { ...this.state.dating }
        newDating[inputname] = event.target.value
        this.setState({ dating: newDating })
    }

    handleSubmit = () => {
        console.log(this.state.dating)
    }

    handleReset = () => {
        this.setState({
            dating: {
                userName: "",
                password: "",
                email: ""
            }
        })
    }


    render() {
        return (
            <div>

                <form>
                    <label htmlFor="userName">Username</label> <br />
                    <input type="text" name="userName" value={this.state.dating.userName} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="text" name="password" value={this.state.dating.password} onChange={(event) => { this.handleChange(event) }} /> <br />
                    <label htmlFor="email">Email Address</label> <br />
                    <input type="text" name="email" value={this.state.dating.email} onChange={(event) => { this.handleChange(event) }} /> <br />

                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button type="button" onClick={this.handleReset}>Reset</button>
                </form>

            </div>
        )
    }
}
