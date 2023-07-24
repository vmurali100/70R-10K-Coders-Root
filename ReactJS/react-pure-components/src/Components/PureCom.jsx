import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
    constructor(props) {
      super(props)
    
      
    }
  render() {
      console.log("&&&&&&&&& PureComponent &&&&&&&&&&")
    return (
      <>PureCom
          <p>{this.props.user}</p>

          <p>{this.props.count}</p>

      </>
    )
  }
}
