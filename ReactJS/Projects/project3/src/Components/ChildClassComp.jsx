import { Component } from "react";

export class ChildClass extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h2>Hello From Child Class Components</h2>

        <button onClick={this.props.changeMessage }>Change Message</button>
        <p>Message from Child Class : {this.props.Msg}</p>
        <hr />

        <button onClick={this.props.changeUser}>Change User</button>
        <ul>
          {Object.keys(this.props.newUser).map((val, i) => {
            return <li key={i}>{this.props.newUser[val]}</li>;
          })}  
        </ul>
        <hr />

        <button onClick={this.props.changeStudents}>Change Students</button>
        <ul>
          {this.props.newStudents.map((students, i) => {
            return <li key={i}>{students}</li>;
          })}
        </ul>
      </div>
    );
  }
}
