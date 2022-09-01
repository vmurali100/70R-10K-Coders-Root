import React, { Component } from 'react'

export default class Formwithclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Person: {
                firstname: "",
                lastname: "",
                DOB: "",
                emailId: "",
                mobileno: "",
            }
        }
        
    }
    handlechange = (e) => {
        var input = e.target.name;
        var newPerson = { ...this.state.Person };
        newPerson[input] = e.target.value;
        this.setState({Person:newPerson});
    }
     handleSubmit = () => {
        console.log(this.state.Person);
    }
    
        handleReset = ()=>{
            this.setState({
                Person:{
                    firstname: "",
                    lastname: "",
                    DOB: "",
                    emailId: "",
                    mobileno: "",
                }
            })
        }
    
    render() {
        return (
            <div>
                <h2>HTML Form</h2>
                <form>
                    <label >First Name:</label>
                    <input type="text" name="firstname" value={this.state.Person.firstname} onChange={(e) => { this.handlechange(e) }} /> <br />
                    <label >Last Name:</label>
                    <input type="text" name="lastname" value={this.state.Person.lastname} onChange={(e) => { this.handlechange(e) }} /> <br />
                    <label >DOB:</label>
                    <input type="text" name="DOB" value={this.state.Person.DOB} onChange={(e) => { this.handlechange(e) }} /> <br />
                    <label >EmailId:</label>
                    <input type="text" name="emailId" value={this.state.Person.emailId} onChange={(e) => { this.handlechange(e) }} /> <br />
                    <label >Mobile NO:</label>
                    <input type="text" name="mobileno" value={this.state.Person.mobileno} onChange={(e) => { this.handlechange(e) }} /> <br />
                    <button type="button" onClick={this.handleSubmit}>SUBMIT</button>
                    <button type="button" onClick={this.handleReset}>RESET</button>
                </form>
            </div>
        )
    }
}
