import logo from './logo.svg';
import './App.css';
import { Posts } from './Components/Posts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Form} from './Components/Form';
import Nav from './Components/Nav';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';

function App() {
 
  return (
    <div >
      <Routes>
      <Route path='/' element={<Nav/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/delete/:id' element={<Delete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
