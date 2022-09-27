import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Carts} from './Components/Carts'
import {Edit} from './Components/Edit'
import {Delete} from './Components/Delete'
import {Create} from './Components/Create'
import { Details } from './Components/Details';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Carts/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
