import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  }
  handleChane = (e) => {
    console.log(e.target.value);
    var inputname = e.target.name;
    var newPerson = { ...this.state.person };
    newPerson[inputname] = e.target.value;
    this.setState({ person: newPerson });
    // setperson(newPerson);
    // setfirstName(e.target.value)
  };
  handleSubmit = () => {
    console.log(this.state.person);
  };
  handleReset = () => {
    this.setState({
      person: {
        firstName: "",
        lastName: "",
        email: "",
      },
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            value={this.state.person.firstName}
            onChange={(e) => {
              this.handleChane(e);
            }}
          />{" "}
          <br />
          <label htmlFor="lastName"> Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={this.state.person.lastName}
            onChange={(e) => {
              this.handleChane(e);
            }}
          />{" "}
          <br />
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChane(e);
            }}
          />{" "}
          <br />
          <button onClick={this.handleSubmit} type="button">
            Add User
          </button>
          <button onClick={this.handleReset} type="button">
            Reset
          </button>
        </form>
      </div>
    );
  }
}
