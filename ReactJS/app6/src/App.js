import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { User1 } from './Components/User1';
import { User2 } from './Components/User2';
import { User3 } from './Components/User3';

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
      {/* <User/> */}
      {/* <User1/>
      */}
      {/* <User2/> */}
      <User3/>
    </div>
  );
}

export default App;
