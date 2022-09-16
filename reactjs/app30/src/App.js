import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Create } from './components/Create';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Create/>
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
