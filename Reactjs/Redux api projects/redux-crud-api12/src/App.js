import logo from './logo.svg';
import './App.css';
import {Users} from "./components/Users"
import {Routes,Route} from "react-router-dom";
import { Create } from './components/Create';
import { NavBar } from './components/NavBar';
import { Edit } from './components/Edit';
import { Delete } from './components/Delete';
function App() {
  return (
    <div >
        <NavBar/>

       
<Routes>
  <Route path="/" element={<Users/>}/>
  <Route path="/create" element={<Create/>}/> 
  <Route path="/edit/:id" element={<Edit/>}/>
  <Route path="/delete/:id" element={<Delete/>}/>
</Routes>
    </div>
  );
}

export default App;
