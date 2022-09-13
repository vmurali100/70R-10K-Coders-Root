import logo from './logo.svg';
import './App.css';
import { CheckBoxes } from './Components/CheckBoxes';
import { RadioButton } from './Components/RadioButton';
import { DropDown } from './Components/DropDown';
import { DropDown2 } from './Components/DropDown2';
import { FormReg } from './Components/FormReg';

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
      {/* <CheckBoxes/> */}
      {/* <RadioButton/> */}
      {/* <DropDown/> */}
      {/* <DropDown2/> */}
      <FormReg/>
      
    </div>
  );
}

export default App;
