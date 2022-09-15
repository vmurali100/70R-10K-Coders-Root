import React, { Component } from 'react'

export default class RefComp extends Component {
    constructor(props) {
      super(props)
    
     this.inputRefs = React.createRef()
    }
    componentDidMount(){
        console.log();
        this.inputRefs.current.focus()
        this.inputRefs.current.value="Srikanth"
    }
  render() {
    return (
      <div>
        <p>RefComp</p>
        <input type="text" name="" ref={this.inputRefs} />
      </div>
    )
  }
}
