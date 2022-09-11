import logo from './logo.svg';
import './App.css';
import HoverCounter  from './components/HoverCounter';
import  ClickCounter  from './components/ClickCounter';


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
