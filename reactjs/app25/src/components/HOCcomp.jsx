import React from 'react'
import { Component } from 'react'

export const HOCcomp = (Originalcomponent) => {
   class wrappercomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handlecount=()=>{
       this.setState({count:this.state.count+1}) 
    }
      render() {
        return  <Originalcomponent count={this.state.count} handlecount={this.handlecount}/>
      }
    }
    
  return wrappercomponent

}
