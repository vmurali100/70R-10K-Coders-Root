    import React, { Component } from 'react'
 

export const HOCcomp2 = (OriginalComponent2) => { 
    
    class Wrapper2 extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0 
          }
        }
        handleCount=()=>{
            this.setState({count:this.state.count+1});
        }
      render() {

        return <OriginalComponent2 count={this.state.count} handleCount={this.handleCount}/>

        
      }
    }
    
  return  Wrapper2;
  
};
