import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("Child constructor lc triggered")
    }
  render() {
    console.log("Child render LC trigerred");
    return (
      <div>
        
        ChildComp Message : {this.props.msg}</div>
    )
  }
  componentDidMount(){
    console.log("Child componentDidMount LC trigerred");
  }
  shouldComponentUpdate(){
    console.log("Child shouldComponentUpdate LC trigerred");
    return true;
  }
  componentDidUpdate(){
    console.log("Child componentDidUpdate LC trigerred");

  }
  getSnapshotBeforeUpdate(){
    console.log("Child getSnapshotBeforeUpdate LC trigerred");  
    return null;  
  }
  componentWillUnmount(){
    console.log("Child componentWillUnmount LC trigerred");  
  }
}
