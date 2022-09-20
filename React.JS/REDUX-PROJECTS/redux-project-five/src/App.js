import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Posts } from './Components/Posts';
import {Create} from './Components/Create'
import {Edit} from './Components/Edit'
import {Delete} from './Components/Delete'
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Delete/:id" element={<Delete/>} />
      </Routes>
    </div>
  );
}

export default App;
