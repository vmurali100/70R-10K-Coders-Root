
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Users } from './Components/Users';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
