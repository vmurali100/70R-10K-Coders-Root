import logo from './logo.svg';
import './App.css';
import { Createuser } from './Components/create';
import { UserTable } from './Components/displaydata';

function App() {
  return (
    <div className="App">
      <Createuser />
      {/* <hr /> */}
      {/* <UserTable /> */}
    </div>
  );
}

export default App;
