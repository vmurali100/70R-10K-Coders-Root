
import React, { Component } from 'react'

export default class Page2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                experince:""
            }
        }
    }


    handleChange = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name;
        var newPerson = { ...this.state.person };
        newPerson[inputname] = e.target.value
        this.setState({ person: newPerson })
        // setperson(newPerson)

        // setfirstName(e.target.value)

    }

    handleOk = () => {
        console.log(this.state.person)
    };
    handleCancle = () => {
        this.setState({
            person: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                experince:""
            }
        })

    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor=" university"> university</label>
                    <input type="text" name=" university" value={this.state.person.university} onChange={(e) => { this.handleChange(e) }} /> <br />

                    <label htmlFor=" institute"> institute</label>
                    <input type="text" name=" institute" value={this.state.person.institute} onChange={(e) => { this.handleChange(e) }} /> <br />

                    <label htmlFor="zip">branch </label>
                    <input type="text" name="branch " value={this.state.person.branch} onChange={(e) => { this.handleChange(e) }} /> <br />

                    <label htmlFor="degree">degree </label>
                    <input type="text" name="degree  " value={this.state.person.degree } onChange={(e) => { this.handleChange(e) }} /> <br />

                    <label htmlFor="experince">experince </label>
                    <input type="text" name="experince " value={this.state.person.experince} onChange={(e) => { this.handleChange(e) }} /> <br />

                    <button onClick={this.handleOk} type="button">ok</button>
                    <button onClick={this.handleCancle} type="button">cancle</button>
                </form>
            </div >)
    }

}
