import React from 'react';
import { Classcomp } from './Components/Classcomp';
import { Click } from './Components/Click';
import Counter from './Components/Counter';
import { Functionalcomp } from './Components/Functionalcomp';
import { Increment } from './Components/Increment';
import logo from './logo.svg';


function App() {
  styles= {
    fontstyle:"bold",
    color:"teal"
  }
  return (
    <div>
      <h1 style={this.styles}>Welcome to my page</h1>
      {/* <Functionalcomp/>
      <Classcomp/>
      <Click/>
      {/* <Counter/> */}
      {/* <Increment/> */} 

    </div>
  );
}

export default App;
