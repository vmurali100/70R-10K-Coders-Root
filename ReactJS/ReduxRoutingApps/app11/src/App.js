import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import { Filltext2 } from './Components/Filltext2';
import {Edit} from './Components/Edit'
import { Create } from './Components/Create';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Filltext2' element={<Filltext2/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
