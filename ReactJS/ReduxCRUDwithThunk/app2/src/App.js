import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Comments } from './Components/Comments';
import {Edit} from './Components/Edit';
import {Delete} from './Components/Delete';
import {Create} from './Components/Create';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Comments/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
