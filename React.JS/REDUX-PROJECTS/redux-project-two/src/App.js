
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Todos } from './Components/Todos';
import { Create } from './Components/Create';
import { Delete } from "./Components/Delete";
import { Edit } from "./Components/Edit"
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos/>} />
        <Route path="/Create" element={<Create/>} />
        <Route path="/Delete/:id" element={<Delete />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
