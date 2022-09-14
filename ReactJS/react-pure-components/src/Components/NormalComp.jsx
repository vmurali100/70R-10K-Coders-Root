import React, { Component } from 'react'

export default class NormalComp extends Component {
    constructor(props) {
      super(props)
    
    
    }
  render() {
      console.log("*******NormalComp**********")
    return (
      <>NormalComp

          <>
          <p>{this.props.user}</p>

          <p>{this.props.count}</p>
          </>
      </>
    )
  }
}
