import React, { Component } from 'react'

export default class Class1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                street: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            }
        }
    }

    handleChange = (event) =>{
        console.log(event.target.value)
        var inputname = event.target.name;
        var newPerson = {...this.state.person}
        newPerson[inputname] = event.target.value
        this.setState({person : newPerson})
    }

    handleSubmit = () => {
        console.log(this.state.person)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="street">street : </label>
                    <input type="text" name="street" value={this.state.person.street} onChange={(event)=>{this.handleChange(event)}} /> <br />
                    <label htmlFor="city"> City : </label>
                    <input type="text" name="city" value={this.state.person.city} onChange={(event)=>{this.handleChange(event)}} /> <br />
                    <label htmlFor="state"> State : </label>
                    <input type="text" name="state" value={this.state.person.state} onChange={(event)=>{this.handleChange(event)}} /> <br />
                    <label htmlFor="zip"> zip : </label>
                    <input type="text" name="zip" value={this.state.person.zip} onChange={(event)=>{this.handleChange(event)}} /> <br />
                    <label htmlFor="country"> Country : </label>
                    <input type="text" name="country" value={this.state.person.country} onChange={(event)=>{this.handleChange(event)}} /> <br />

                    <button onClick={this.handleSubmit} type="button">Okay</button>
                    <button type="button"> Cancel</button>

                </form>
            </div>
        )
    }
}
