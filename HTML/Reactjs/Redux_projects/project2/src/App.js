import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Navbar } from './Components/Navbar';
import { Users } from './Components/Users';

function App() {
 
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element ={<Users/>}/>
        <Route path="/Create" element ={<Create/>}/>
        <Route path="/edit/:id" element ={<Edit/>}/>
        <Route path="/delete/:id" element ={<Delete/>}/>

       
       
      </Routes>
      
    </div>
  );
}

export default App;