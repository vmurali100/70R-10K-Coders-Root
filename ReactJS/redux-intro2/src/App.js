import logo from './logo.svg';
import './App.css';
import { Medicines } from './Components/Medicines';
import { Garments } from './Components/Garments';
import { Snacks } from './Components/Snacks';
import { Groceries } from './Components/Groceries';

function App() {
  return (
    <div className="App">
      <Medicines/>
      <Garments/>
      <Snacks/>
      <Groceries/>  
    </div>
  );
}

export default App;
