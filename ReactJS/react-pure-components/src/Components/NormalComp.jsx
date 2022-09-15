/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export default class NormalComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("*****Normal Compo******");
    return (
      <>
        <p>NormalComp</p>
        <p>{this.props.user}</p>

        <p>{this.props.count}</p>
      </>
    );
  }
}
