import React,{Component} from 'react'

export  const Hocp = (OriginalComponentPrac) => {   
    
   class WrapperPractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleCountPrac = ()=>{
      this.setState({count:this.state.count+1});
   }
      render() {
        return <OriginalComponentPrac count ={this.state.count} handleCountPrac={this.handleCountPrac}/>
      }
    }
    

  return WrapperPractice;
}

