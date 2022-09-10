import React, { Component } from 'react'
import Childcomp from './Childcomp'

export default class Parent extends Component {
constructor(props) {
  super(props)

  this.state = {
    message:"welcome to the reactjs lifecycle hooks from parentjsx",
    isParent:true
     
  }
  console.log("constructor lifecycle triggered")
}
  render() {
    console.log("render lifcycle triggered")
    return (
      <div>
       <h1> Parent</h1>
       <button type='button' onClick={()=>{this.setState({isParent:false})}}>removeparent</button>
       <button type='button' onClick={()=>{this.setState({message:"changed in parent"})}}>changemsg</button>
        {this.state.isParent && <Childcomp msg={this.state.message}/>}
       </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount lifecycle triggered")
  }

//   1.Component mounting phase
//      a.constructor
//      b.render
//      c.componentdidmount
//   2.Component updating phase
//   3.Component unmounting phase
}
