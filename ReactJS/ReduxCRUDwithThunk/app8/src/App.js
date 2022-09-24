import logo from './logo.svg';
import './App.css';
import { Crts } from './components/Crts';
import {Routes,Route} from 'react-router-dom';
import  { Edit } from './components/Edit';
import  { Delete } from './components/Delete';
import {Create} from './components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Crts/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
