import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Home';
import {Edit} from './Components/Edit'
import {Create} from './Components/Create'
import {Delete} from './Components/Delete'
import { Filletext1 } from './Components/Filletext1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Filltext1' element={<Filletext1/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
