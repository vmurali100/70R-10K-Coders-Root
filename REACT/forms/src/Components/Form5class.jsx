import React, { Component } from "react";

export default class Form5class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      },
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    var inputname = e.target.name;
    var newPerson = { ...this.state.person };
    newPerson[inputname] = e.target.value;
    this.setState({ person: newPerson });
  };
  handleSubmit = () => {
    console.log(this.state.person);
  };

  styles = {
    fontsyle: "bold",
    color: "orange",
  };
  render() {
    return (
      <div>
        <h1 style={this.styles}>Form Validation Demo</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.person.name}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            value={this.state.person.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={this.state.person.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="text"
            name="confirmpassword"
            value={this.state.person.confirmpassword}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            value={this.state.person.message}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />

          <button onClick={this.handleSubmit} type="button">
            Send
          </button>
        </form>
      </div>
    );
  }
}
