import './App.css';
import { Users } from './Components/Users';
import {Routes,Route} from 'react-router-dom'
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Navbar } from './Components/Navbar';



function App() {
  return (
    <div >
      <Navbar/>
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
