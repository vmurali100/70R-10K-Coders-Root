import React from 'react'
import './App.css';
import Newcomp from './Components/Newcomp';
class App extends React.Component{
  styles={
    fontsyle:"bold",
    color:"blue"
  }
  render(){
    return <div className='App'>
      <h1 style={this.styles}>Welcome to my page</h1>
      <Newcomp/>
    </div>
  }
}

export default App;
