
import React, { Component } from 'react'

export const HOCcomp = (OriginalComponent) => {
  class WrapperComp extends Component {

    constructor(props) {

      super(props)

      this.state = {
        count: 0
      }
    }


     handleCount = ()=>{
           this.setState({count:this.state.count+1});
        }
    render() {
      return <OriginalComponent count={this.state.count} handleCount={this.handleCount} />
    }
  }

  return WrapperComp;
};
