import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("constructor life cycle in child component")
    }
  render() {
    console.log("render life cycle in child component")
    return (
      <div>
        <p>Message from parent component :{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount life cycle in child component")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate life cycle called in child component")
    return true;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate life cycle called in child component" )
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate life cycle called in child component" )
    return null;
  }
  componentWillUnmount(){
    console.log("componentWillUnmount life cycle triggered")
  }
}

