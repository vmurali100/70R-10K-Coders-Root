import React, { Component } from "react";
import BELL1 from "./BELL1.png";
import BELL2 from "./BELL2.png";

class Newcomp extends Component {
  constructor() {
    super()

    this.state = {
      message: "subscribe to my page",
      sub: "Subscribe",
      imageURL: BELL1,
    }
  }
  styles = {
    fontstyle: "italic",
    color: "purple",
  }
  Buttonchange = () => {
    this.setState({
      message: "Hit the Bell Icon To Subscribe",
      sub: "SUBSCRIBED",
    })
  }
    Imagechange = () => {
      this.setState({
        imageURL: BELL2,
        message: "THANK YOU!",
      })
    }
  
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p />
        <img
          src={this.state.imageURL}
          onClick={this.Imagechange}
          alt=""
          width={30}
          height={30}
        />
      </div>
    )
  }
}

export default Newcomp;
