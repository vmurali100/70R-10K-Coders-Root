import React, { Component } from 'react'
import NormalComp from './NormalComp'
import PureComp from './PureComp'
import  PureCompFunc  from './PureCompFunc'

export default class MainComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myName:"Seelam Meena",
         count:5,
      }
    }
    componentDidMount(){
        setInterval(()=>{
          // this.setState({myName:"Seelam Meena",count:this.state.count+5})
            this.setState({myName:"Seelam Meena"})
        },2000)
    }
  render() {
    return (
      <div>
        
        MainComp
        <hr/>
        <NormalComp user={this.state.myName} count={this.state.count}/>
        {/* <hr/>
        <PureComp user={this.state.myName} count={this.state.count}/> */}
        <hr/>
        <PureCompFunc user={this.state.myName} />
        </div>
    )
  }
}
