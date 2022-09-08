import React from 'react'

export const HOCcomp = (OriginalComponent) => {
   
    
     class WrapperComponent extends Component {
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
        return <OriginalComponent  count={this.state.count} handlecount={this.handlecount}/>;

      }
    }
    
  return <WrapperComponent/>
}
