import React, { Component } from 'react'


export default class ChildComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
      console.log("Constructor life cycle in child component")
    }
  render() {
    console.log("render life cycle in child component")

    return (
      <div>
        <p>Message from Parent Component:{this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("Componentdidmount life cycle in child component")

  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate life cycle called in child component")
    return true;
  }
  componentDidUpdate(){
    console.log("ComponentdidUpdate life cycle called in child component")
  
  }
  getSnapshotBeforeUpdate(){
    console.log("getsnapshotbeforupdate life cycle called in child component")
    return null;
  }
  componentWillUnmount(){
    console.log("componentwillunmount life cycle called in child component")


  }
}