import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Products/>}/>
      <Route path="/Create" element ={<Create/>}/>
      <Route path="/delete/:id" element ={<Delete/>}/>
      <Route path="/edit/:id" element ={<Edit/>}/>



      </Routes>
    </div>
  );
}

export default App;
