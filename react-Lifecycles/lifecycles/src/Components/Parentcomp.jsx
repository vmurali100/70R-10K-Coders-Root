import React, { Component } from 'react'

export default class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to Reactjs Lifecycle"
      }
    }
  render() {
    return (
      <div>Parentcomp</div>
    )
  }
}
