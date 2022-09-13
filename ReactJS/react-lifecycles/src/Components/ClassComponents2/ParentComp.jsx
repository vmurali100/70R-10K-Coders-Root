import React, { Component } from 'react'
import ChildComp from './ChildComp';

export default class ParentComp extends Component {
    constructor(props) {
        console.log("Parent constructor LC trigerred");
      super(props)
    
      this.state = {
        message:"Welcome to ReactJS lifecycle hooks from parent class",
         isStudent:true,
      }
    }
  render() {
    console.log("Parent render LC trigerred");
    return (
      <div>
        <button type="button" onClick={()=>{this.setState({isStudent: false})}}>Remove Student</button>
        <button type="button" onClick={()=>{this.setState({message:"I have been updated from parent class"})}}>Click Me</button>
        {this.state.isStudent && <ChildComp   msg={this.state.message}/>}
        
      </div>
    )
  }
  componentDidMount(){
    console.log("Parent componentDidMount LC trigerred");
  }
  
}