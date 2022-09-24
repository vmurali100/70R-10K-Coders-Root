import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UsersHome } from './Components/UsersHome';
import {Edit} from './Components/Edit'
import {Delete} from './Components/Delete'
import {Create} from './Components/Create'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<UsersHome/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/delete/:id' element={<Delete/>}/>
      <Route path='/create' element={<Create/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
