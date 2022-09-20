
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import { Photos } from './Components/Photos'
import { Create } from './Components/Create'
import { Edit } from './Components/Edit'
import { Delete } from './Components/Delete'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
