import logo from './logo.svg';
import './App.css';
import { UserGender } from './Components/UserGender';
import { DropDown } from './Components/DropDown';
import { CheckBoxes } from './Components/CheckBoxes';

function App() {
  return (
    <div className="App">
     {/* <UserGender/>
     <DropDown/> */}
     <CheckBoxes/>
    </div>
  );
}

export default App;
