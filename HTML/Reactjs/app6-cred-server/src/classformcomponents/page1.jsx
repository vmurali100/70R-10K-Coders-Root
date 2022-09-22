
import React, { Component } from 'react'

export default class page1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                street: "",
                city: "",
                zip: "",
                country: "",
            }
        }
    }


 handleChange = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name;
        var newPerson = { ...this.state.person };
        newPerson[inputname] = e.target.value
        this.setState({person:newPerson})
        // setperson(newPerson)

        // setfirstName(e.target.value)

    }

    handleOk = () => {
        console.log(this.state.person)
    };
    handleCancle = () => {
        this.setState({person: {
            street: "",
            city: "",
            zip: "",
            country: "",
        }})
           
    }
    render(){
    return(
    <div>
    <form >
        <label htmlFor="street">Street</label>
        <input type="text" name="street" value={this.state.person.street} onChange={(e) => {this.handleChange(e) }} /> <br />

        <label htmlFor="city">city</label>
        <input type="text" name="city" value={this.state.person.city} onChange={(e) => { this.handleChange(e) }} /> <br />

        <label htmlFor="zip">zip </label>
        <input type="text" name="zip " value={this.state.person.zip} onChange={(e) => { this.handleChange(e) }} /> <br />

        <label htmlFor="country">country </label>
        <input type="text" name="country " value={this.state.person.country} onChange={(e) => { this.handleChange(e) }} /> <br />

        <button onClick={this.handleOk} type="button">ok</button>
        <button onClick={this.handleCancle} type="button">cancle</button>
    </form>
    </div > )}

}
