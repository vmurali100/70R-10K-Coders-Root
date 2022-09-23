import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';
import { Delete } from './components/Delete';
import { Create } from './components/Create';
import { Edit } from './components/Edit';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
