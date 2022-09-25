import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Wins } from './components/Wins';
import { Routes, Route } from 'react-router-dom';
import { Create } from './components/Create';
import { Edit } from './components/Edit';
import { Delete } from './components/Delete';

function App() {
  return (
    <div className="App">
      <Navbar />

<Routes>
  <Route path='/' element={<Wins />} />
  <Route path='/create' element={<Create />} />
  <Route path='/edit/:id' element={<Edit />} />
  <Route path='/delete/:id' element={<Delete />} />
</Routes>
    </div>
  );
}

export default App;
