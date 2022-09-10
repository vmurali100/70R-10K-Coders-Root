import React, { Component } from 'react'

export default class Childcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
      console.log("from contsr-childcomp")
    }
  render() {
    console.log("from render-childcomp")
    return (
      <div>
        <p>message from parent Component : {this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("from componentdidmount -childcomp")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate-childcomp")
    return true;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate-child")
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate-childcomp")
    return null;
  }

  componentWillUnmount(){
    console.log("componentWillUnmount ")
  }
}
