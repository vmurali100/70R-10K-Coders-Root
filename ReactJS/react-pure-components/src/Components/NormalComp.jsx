import React, { Component } from 'react'

export default class NormalComp extends Component {
    constructor(props) {
      super(props)
    
    }
  render() {
    console.log("******Normal Component ********")
    return (
      <div>NormalComp
        <p>{this.props.user}</p>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
