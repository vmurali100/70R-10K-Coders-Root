import React, { Component } from 'react'
import NormalComp from './NormalComp'
import PureCom from './PureCom'
import PureCompFunc  from './PureCompFunc'

export default class MainComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myName:"Ram Krishna",
         count:10
      }
    }
    componentDidMount(){
        setInterval(()=>{
            // this.setState({myName:"Ram Krishna",count:this.state.count+5})
            this.setState({myName:"Ram Krishna"})
        },2000)
    }
  render() {
    return (
      <>
          MainComp
          <hr />
          <NormalComp user={this.state.myName} count={this.state.count}/>
          <hr />
          <PureCompFunc user={this.state.myName} count={this.state.count}/>
          {/* <PureCom user={this.state.myName} count={this.state.count}/> */}
      </>
    )
  }
}
