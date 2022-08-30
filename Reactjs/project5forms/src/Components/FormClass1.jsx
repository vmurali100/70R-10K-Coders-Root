import React, { Component } from 'react'

export default class FormClass1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                Street: "",
                City: "",
                State: "",
                ZipCode: "",
                country: ""
            }
        }
    }
    
        handleChange =(e)=> {
            console.log(e.target.value)
            var inputname = e.target.name;
            var newPerson = {...this.state.person }
            newPerson[inputname] = e.target.value
            this.setState({ person: newPerson })
        }
        handleSubmit = () => {
            console.log(this.state.person)
        }
        handleCancel = () => {
            this.setState({
                person: {
                    Street: "",
                    City: "",
                    State: "",
                    ZipCode: "",
                    country: ""
                }
            })
        
    }
    render() {
        return (
            <div><h2>Address</h2>
                <hr />
                <form>
                    <label htmlFor="Street">Street : </label>
                    <input type="text" name="Street" value={this.state.person.Street} onChange={(e) => {this.handleChange(e) }} /> <br />
                    <label htmlFor="City">City : </label>
                    <input type="text" name="City" value={this.state.person.City} onChange={(e) => {this.handleChange(e) }} /> <br />
                    <label htmlFor="State">State : </label>
                    <input type="text" name="State" value={this.state.person.State} onChange={(e) => {this.handleChange(e) }} /> <br />
                    <label htmlFor="Zipcode">ZipCode : </label>
                    <input type="text" name="ZipCode" value={this.state.person.ZipCode} onChange={(e) => {this.handleChange(e) }} /> <br />
                    <label htmlFor="country">Country : </label>
                    <input type="text" name="country" value={this.state.person.country} onChange={(e) => {this.handleChange(e) }} /> <br />
                    <button onClick={this.handleSubmit} type="button">OK</button>
                    <button onClick={this.handleCancel} type="button">Cancel</button>
                </form></div>
        )
    }
}
