import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Events } from './Components/Events';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Events/>}/>
      <Route path="/Create" element ={<Create/>}/>
      <Route path="/delete/:id" element ={<Delete/>}/>
      <Route path="/edit/:id" element ={<Edit/>}/>



      </Routes>
    </div>
  );
}

export default App;