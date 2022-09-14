import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      console.log("constructor life cycle in ChildComp ")
    }
  render() {
    console.log("render life cycle in ChildComp ")

    return (
      <div>
          
          <p>Message from Parent Component : {this.props.msg}</p>
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount life cycle in ChildComp ")
  }
  shouldComponentUpdate(){
      
      console.log("shouldComponentUpdate life cycle Called in Child Component");
      return true;
  }

  componentDidUpdate(){
      console.log("componentDidUpdate life cycle called in Child  Component")
  }
  getSnapshotBeforeUpdate(){
      console.log("getSnapshotBeforeUpdate life cycle Before Update");
      return null
  }

  componentWillUnmount(){
      console.log("componentWillUnmount life cycle triggered")
  }
}
