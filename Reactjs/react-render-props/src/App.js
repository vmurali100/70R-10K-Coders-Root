import logo from './logo.svg';
import './App.css';
import {ClickCounter} from './components/ClickCounter';
import {HoverCounter} from './components/HoverCounter';
import { Sample } from './components/Sample';
import { Count } from './components/Count';
function App() {
  const returnMessage=(val)=>{
    return val ? "welcome to dharahaas":"welcome to dhruvaraam"
  }
  return (
    <div className="App">
      <Count render={(count,handleCount)=> <ClickCounter count={count} handleCount={handleCount}/>}/>
      <Count render={(count,handleCount)=> <HoverCounter count={count} handleCount={handleCount}/>}/>
      {/*<ClickCounter/>
      <hr/>
  <HoverCounter/>
    <Sample message={returnMessage}/>*/}
    </div>
  );
}

export default App;
