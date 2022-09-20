import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import {CommentsData} from './Components/CommentsData'
import {Edit} from './Components/Edit'
import {Delete} from "./Components/Delete"
import {Create} from './Components/Create'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CommentsData />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Delete/:id" element={<Delete />} />
      </Routes>

    </div>
  );
}

export default App;
