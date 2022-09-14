import logo from './logo.svg';
import './App.css';
import MainComp from './Components/MainComp';
import RefsComp from './Components/RefsComp';
import { PortalDemo } from './Components/PortalDemo';

function App() {
  return (
    <div className="App">
      <hr/>
     {/* <MainComp/> */}
     {/* <RefsComp/> */}
     <PortalDemo/>
    </div>
  );
}

export default App;
