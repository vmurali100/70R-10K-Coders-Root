import logo from './logo.svg';
import './App.css';
import { CreateStudent } from './Components/createstudent';
import { DropDown } from './Components/createdropdowns';
import { DropDownTwo } from './Components/createdegreedropdown';

function App() {
  return (
    <div className="App">
       <CreateStudent />
       {/* <DropDown />
       <DropDownTwo /> */}
    </div>
  );
}

export default App;
