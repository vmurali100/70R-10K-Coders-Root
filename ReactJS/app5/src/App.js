import logo from './logo.svg';
import './App.css';
import { Class1 } from './Components/ClassComponents/Class1';
import { Function1 } from './Components/FunctionalComponents/Function1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Class1/>
        <Function1/>
      </header>
    </div>
  );
}

export default App;
