import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Inputs } from './Components/Inputs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Inputs/>}/>
      <Route path="/Create" element ={<Create/>}/>
      <Route path="/delete/:id" element ={<Delete/>}/>
      <Route path="/edit/:id" element ={<Edit/>}/>



      </Routes>
    </div>
  );
}

export default App;
