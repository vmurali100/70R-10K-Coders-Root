import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class Student extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to ReactJS lufe Cycle Hooks from Student Component - Parent ",
         isStudent:true

      }

      console.log("Constructor lifecycle triggered - Parent")
    }
  render() {
    console.log("render lifecycle triggered Parent")

    return (
      <div>
          <button onClick={()=>{this.setState({isStudent:false})}} >Remove Student</button>
          <button onClick={()=>{this.setState({message:"Changed In Parent "})}} type="button">Change Message</button>
          {this.state.isStudent && <ChildComp msg={this.state.message}/> }
          
      </div>
    )
  }

  componentDidMount(){
    console.log("componentDidMount lifecycle triggered - Parent")

  }

//   1. Component Mounting Phase 
//  a. Constructor 
//  b. render 
//  c. comoinentdidmount
//   2. Component Updating Phase 
//   3. Component Unmounting Phase 

}
