import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
