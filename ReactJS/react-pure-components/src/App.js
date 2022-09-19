import logo from './logo.svg';
import './App.css';
import MainComp from './Components/MainComp';
import RefComp from './Components/RefComp';
import { PortalDemo } from './Components/PortalDemo';

function App() {
  return (
    <div className="App">
      {/* <hr/>
      <MainComp/> */}
      <RefComp/>
      <PortalDemo/>
    </div>
  );
}

export default App;
