import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class Student extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"Welcome to Reactjs lifecycles Hooks from student component-parent",
        isStudent:true
      }
      console.log("constructor life cycle triggered-parent")
    }
  render() {
    console.log("render life cycle triggered-parent")
    return (
      <div>
        <button onClick={()=>{this.setState({isStudent:false})}}>Remove Student</button>
        <button onClick={()=>{this.setState({message:"changed in parent"})}} type="button">Change Message</button>
       {this.state.isStudent && <ChildComp msg={this.state.message}/>} 
       </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount life cycle triigered-parent")
  }
}
//1.component mountin phase
  //a.constructor
  //b.render
  //c.componentDidMount
//2.component updating phase
//3.component demounting phase