import logo from './logo.svg';
import './App.css';
import { Clickcounter } from './components/Clickcounter';
import { Hover } from './components/Hover';
import { Sample } from './components/Sample';
import { Count } from './components/Count';

function App() {

  const returnmessage = (val) => {
    return val ? "welcome to ajay" : "welcome to sri "
  }
  return (
    <div className="App">

      <Count render ={(count, handlecount) => <Clickcounter count={count} handlecount={handlecount} />} />
    <Count render ={(count, handlecount) => <Hover  count={count} handlecount={handlecount} />} />
      {/* <Clickcounter/>
      <hr/>
      <Hover/> */}
      {/* <Sample message={returnmessage} /> */}
    </div>
  );
}

export default App;
