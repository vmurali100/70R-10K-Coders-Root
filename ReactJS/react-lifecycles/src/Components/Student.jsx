import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class Student extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"Welcome to ReactJS life Cycle Hooks from Student Component-Parent",
        isStudent:true
         
      }
      console.log("Constructor lifecycle trigerred-Parent")
    }
  render() {//component render phase:it return html:no api related
    console.log("render lifecycle trigerred-Parent")

    return (
      <div>
        <button onClick={()=>{this.setState({isStudent:false})}}>Remove Student</button>
        <button type="text"onClick={()=>{this.setState({message:"Changed in Parent"})}}>Change Message</button>
        {this.state.isStudent && <ChildComp msg={this.state.message}/>}
       
      </div>
    )
  }
  componentDidMount(){//component is ready:we can write api
  console.log("Componentdidmount lifecycle trigerred-Parent")
  }



  //Component crosses 3  phases:
//   1. Component Mounting Phase.//every component during rendering it undergoes 3 lifecycles.
// a.constructor,b.render,c.componentdidmount[mounting lifecycles]

//   2. Component Updating Phase.
//   3. Component unmounting Phase.


}