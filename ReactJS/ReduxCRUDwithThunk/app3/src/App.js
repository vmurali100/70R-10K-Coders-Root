import logo from './logo.svg';
import './App.css';
import {Albums} from './Components/Albums';
import {Routes,Route} from 'react-router-dom';
import { Edit } from './Components/Edit';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="conatainer">
      <Routes>
        <Route path='/' element={<Albums/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
