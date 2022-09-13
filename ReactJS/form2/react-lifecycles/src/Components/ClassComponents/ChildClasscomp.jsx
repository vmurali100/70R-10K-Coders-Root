import React, { Component } from 'react'

export default class ChildClasscomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("constructor LC trigerred");
    }
  render() {
    console.log("render LC trigerred");
    return (
      <div>
        <p>Message from parent component : {this.props.msg}</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount LC trigerred in child class")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate life cycle rendered in child component");
    return true;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate life cycle rendered in child component")
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate life cycle rendered in child component");
    return null;
  }
  componentWillUnmount(){
    console.log("componentWillUnmount life cycle triggered");
  }
}
