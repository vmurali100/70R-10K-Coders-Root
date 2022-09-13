import React, { Component } from 'react'
import ChildClasscomp from './ChildClasscomp';

export default class ClassComp1 extends Component {
    constructor(props) {
        
      super(props)
    
      this.state = {
        message:"Welcome to ReactJS life cycle Hooks from student Component",
        isStudent:true,
         
      }
      console.log("constructor lifecycle triggered");
    }
  render() {
    console.log("render lifecycle triggered");
    return (
      <div>ClassComp1
        <button type="button" onClick={()=>{this.setState({isStudent:false})}}>Remove Message</button>
        <button type="button" onClick={()=>{this.setState({message:"I am from parent component changed in parent."})}}>Change Message</button>
        {this.state.isStudent && <ChildClasscomp msg={this.state.message}/>}
        
      </div>
    )
  }


  componentDidMount(){
    console.log("componentDidMount lifecycle triggered");
  }
 
}
