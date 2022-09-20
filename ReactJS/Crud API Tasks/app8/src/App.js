import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { AllInfo } from './Components/AllInfo';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Details } from './Components/Details';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<AllInfo/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/delete/:id' element={<Delete/>} />
          <Route path='/details/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
