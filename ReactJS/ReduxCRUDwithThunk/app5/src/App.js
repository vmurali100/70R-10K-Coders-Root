import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Photos } from './Components/Photos';
import {Create} from '../src/Components/Create';
import {Delete} from '../src/Components/Delete';
import {Edit} from '../src/Components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Photos/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
