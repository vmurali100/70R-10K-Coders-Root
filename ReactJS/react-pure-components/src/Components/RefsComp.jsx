import React, { Component } from "react";

export default class RefsComp extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }

  componentDidMount() {
    this.inputRefs.current.focus();
    this.inputRefs.current.value = "Some";
  }
  render() {
    return (
      <div>
        <input type="text" name="" ref={this.inputRefs} />
      </div>
    );
  }
}
