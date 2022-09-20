import logo from './logo.svg';
import './App.css';
import { Users } from './Components/Users';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Create } from './Components/Create';
import { Navbar } from './Components/Navbar';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';

function App() {
  return (

    <div  >
            <Navbar/>
      <Routes>

     <Route path='/' element={<Users/>}></Route>
     <Route path='/create' element={<Create/>}></Route>
     <Route path='/edit/:id' element={<Edit/>}></Route>
     <Route path='/delete/:id' element={<Delete/>}></Route>


      </Routes>

    </div>
  );
}

export default App;
