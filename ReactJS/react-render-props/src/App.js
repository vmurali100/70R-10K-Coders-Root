import logo from './logo.svg';
import './App.css';
import { ClickCounter } from './Components/ClickCounter';
import { HoverCounter } from './Components/HoverCounter';
import { Sample } from './Components/Sample';
import { Count } from './Components/Count';

function App() {

  const returnMessage = (val)=>{
    return val ? "Welcome to Ajay" : "Welcome to Sri";
  }
  return (
    <div className="App">
      <Count render={(count,handleCount)=> <ClickCounter count={count} handleCount={handleCount}/> }/>
      <Count render={(count,handleCount)=> <HoverCounter count={count} handleCount={handleCount}/> }/>
      {/* <ClickCounter/>
      <hr/>
      <HoverCounter/> */}
      
      {/* <Sample render = {returnMessage} /> */}
    </div>
  );
}

export default App;
