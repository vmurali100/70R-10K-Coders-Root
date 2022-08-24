// import logo from './logo.svg';
import './App.css';
import { FirstClass } from './ClassComponents/FirstClass';
import { StudenTwo } from './ClassComponents/StudentClasstwo';
import { Orange } from './FunctionalComponents/Orange';
import Meena from './Meena';

function App() {
  return (
    <div className="App">
      <h2>Hello from react </h2>
      <Meena/>
      <Orange/>
      <FirstClass/>
      <StudenTwo/>
    </div>
  );
}

export default App;
