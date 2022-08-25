
import React, { Component } from 'react'

class Newcomp extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Subscribe to my page"
        }
        
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}

export default Newcomp