import logo from './logo.svg';
import './App.css';
import HoverCounter  from './Components/HoverCounter';
import ClickCounter  from './Components/ClickCounter';

function App() {
  return (
    <div className="App">
      <HoverCounter/>
      <hr/>
      <ClickCounter/>
     
    </div>
  );
}

export default App;
