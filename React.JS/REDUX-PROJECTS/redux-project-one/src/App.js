
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Navbar } from './Components/Navbar';
import { Users } from './Components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={  <Users />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit/>} />
        <Route path="/Delete/:id" element={<Delete/>} />
      </Routes>
      
    </div>
  );
}

export default App;
