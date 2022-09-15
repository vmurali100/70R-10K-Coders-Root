import React, { Component } from "react";
import FuncPureComp from "./FuncPureComp";
import NormalComp from "./NormalComp";
// import PureComp from './PureComp'

export default class MainComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Srikanth Chokkalla",
      count: 10,
    };
  }
  componentDidMount() {
    setInterval(() => {
      // this.setState({myName:"Srikanth Chokkalla", count:this.state.count+5})
      this.setState({ myName: "Srikanth Chokkalla" });
    }, 2000);
  }
  render() {
    return (
      <>
        <p>MainComp</p>
        <hr />
        <NormalComp user={this.state.myName} count={this.state.count} />
        <hr />
        <FuncPureComp user={this.state.myName} count={this.state.count} />
        {/* <PureComp user={this.state.myName} count={this.state.count}/> */}
      </>
    );
  }
}
