/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Class_Comp from './Class_Comp'

export default class User extends Component {
    constructor(props) {//component generate phase:egg stage/under construction:we don't write anything related to server or api in constructor as it is in generating phase
      super(props)
    
      this.state = {
        message:"Welcome to ReactJS life Cycle Hooks from User Component-Parent",
        isUser:true
         
      }
      console.log("Constructor lifecycle trigerred-Parent")
    }
  render() {//component render phase:it return html:no api related
    console.log("render lifecycle trigerred-Parent")

    return (
      <div>
        <button onClick={()=>{this.setState({isUser:false})}}>Remove User</button>
        <button type="text"onClick={()=>{this.setState({message:"Changed in Parent"})}}>Change Message</button>
        {this.state.isUser && <Class_Comp msg={this.state.message}/>}
       
      </div>
    )
  }
  componentDidMount(){//component is ready:we can write api
  console.log("Componentdidmount lifecycle trigerred-Parent")
  }



//Component crosses 3  phases:
//   1. Component Mounting Phase.//every component during rendering it undergoes 3 lifecycles.
//   a.constructor,b.render,c.componentdidmount[mounting lifecycles]

//   2. Component Updating Phase.
//   3. Component unmounting Phase.


}