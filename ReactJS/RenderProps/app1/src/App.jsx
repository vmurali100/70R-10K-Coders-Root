import logo from './logo.svg';
import './App.css';
import { ClickCounter } from './Components/ClickCounter';
import { HoverCounter } from './Components/HoverCounter';
import { Sample } from './Components/Sample';
import { Count } from './Components/Count';

function App() {
  // const returnmessage=(val)=>{
  //   return val ? "Welcome to ReactJS" : "Welcome to Javascript"
  // }
  return (
    <div className="App">
      {/* <ClickCounter/>
      <hr />
      <HoverCounter/> */}
      {/* <Sample render={returnmessage}/> */}
      <Count render={(count,handleCount)=><ClickCounter count={count} handleCount={handleCount}/>}/>
      <Count render={(count,handleCount)=><HoverCounter count={count} handleCount={handleCount}/>}/>


    </div>
  );
}

export default App;
