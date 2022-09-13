import logo from './logo.svg';
import './App.css';
import { UserFn } from './Components/UserFn';
import  HoverCounter from './Components/HoverCounter';
import { HOCcomp } from './Components/HOCcomp';
import ClickCounter from './Components/ClickCounter'
import { Click } from './Components/Sample1/Click';
import { Hover } from './Components/Sample1/Hover';
import Click2 from './Components/Sample2/Click2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <UserFn/> */}
      <hr/>
      {/* <HoverCounter/>  */}
      <hr/>
     {/* <ClickCounter/> */}
    {/* <Click/>
    <hr/>
    <Hover/> */}
    <hr/>
    <Click2/>
    </div>
  );
}

export default App;
