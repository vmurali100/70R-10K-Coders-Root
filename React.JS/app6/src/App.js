import logo from './logo.svg';

import { ParentClassComp } from './Components/ClassComp';
import { Message } from './Components/functionParent';

function App() {
  return (
    <div className="App">
      <ParentClassComp />
      <Message />
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
    </div>
  );
}

export default App;
