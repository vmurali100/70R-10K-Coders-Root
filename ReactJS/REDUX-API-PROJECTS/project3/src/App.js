import logo from './logo.svg';
import './App.css';

import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Details/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/delete/:id' element={<Delete/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>



      </Routes>
    </div>
  );
}

export default App;