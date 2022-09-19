import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
     
    }
  render() {
    console.log("&&&&&&&&&&&& PureComponent &&&&&&&&&")
    return (
      <div>PureComp
        <p>{this.props.user}</p>
        <p>{this.props.count}</p>
        
      </div>
    )
  }
}
