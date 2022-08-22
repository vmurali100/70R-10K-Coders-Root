import { Component } from "react";

export class User extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      person1:{},
      person: {
        address: {},
      },
      users: [],
    };
  }

  // for display the display
  changeMessage = () => {
    this.setState({
      message: "Hello Guys Welcome to ReactJs Training",
    });
  };
  // for display the objects
  changePerson1 = () => {
    this.setState({ person1: { fname: "Srikanth", lname: "Chokkalla" } });
  };

  // for display the array
  changeUsers = () => {
    this.setState({ users: ["Sathish", "Anil", "Lavan", "Mukesh", "Naveen"] });
  };

  handleDelete = (i) => {
    // console.log(i);
    let allUsers = [...this.state.users];
    allUsers.splice(i, 1);
    this.setState({ users: allUsers });
  };

  changeAddress = () => {
    let newAddress = { ...this.state.person.address };
    newAddress = {
      name: "Srikanth",
      doorNo: "4-2",
      city: "Karimnagar",
      state: "Telangana",
    };
    this.setState({ person: { address: newAddress } });
  };
  render() {
    return (
      <div>
        <h2>Hello From User Class Components</h2>
        <hr />

        {/* for string */}
        <h3>1.String</h3>
        <button onClick={this.changeMessage}>Display Message</button>
        <p>User Message is : {this.state.message}</p>
        <hr />

        {/* for Object */}
        <h3>2.Objects</h3>
        <button onClick={this.changePerson1}>Display Persons</button>
        <p>First Name : {this.state.person1.fname}</p>
        <p>Last Name: {this.state.person1.lname}</p>
        <hr />

        {/* for Nested Objects */}
        <h3>3.Nested Objects</h3>
        <button onClick={this.changeAddress}>Display Address</button>
        <p>Name:{this.state.person.address.name}</p>
        <p>doorNo:{this.state.person.address.doorNo}</p>
        <p>city:{this.state.person.address.city}</p>
        <p>state:{this.state.person.address.state}</p>

        <hr />

        {/* for array */}
        <h3>4.Arrays</h3>
        <button onClick={this.changeUsers}>Display Users</button>
        {this.state.users.map((users, i) => {
          return (
            <p
              onClick={() => {
                this.handleDelete(i);
              }}
              key={i}
            >
              {users}
            </p>
          );
        })}
      </div>
    );
  }
}
