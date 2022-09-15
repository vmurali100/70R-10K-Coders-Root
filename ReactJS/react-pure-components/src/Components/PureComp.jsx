/* eslint-disable no-useless-constructor */
import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("$$$$$$ PureComponent $$$$$");
    return (
      <>
        <p>PureComp</p>
        <p>{this.props.user}</p>

        <p>{this.props.count}</p>
      </>
    );
  }
}
