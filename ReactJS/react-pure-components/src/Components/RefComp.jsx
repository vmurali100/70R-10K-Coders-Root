import React, { Component } from 'react'

export default class RefComp extends Component {
    constructor(props) {
      super(props)
    
      this.inputRefs = React.createRef();
    }
    componentDidMount(){
        console.log(this.inputRefs)
        this.inputRefs.current.focus()
        this.inputRefs.current.value ="Some"
    }
  render() {
    return (
      <div>
        <input type="text" name="" id="" ref={this.inputRefs}/>
      </div>
    )
  }
}
