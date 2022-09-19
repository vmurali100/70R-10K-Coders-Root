import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Header } from './Components/Header';
import { Read } from './Components/Read';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Edit/:id" element={<Edit/>} />
        <Route path="/Delete/:id" element={<Delete/>} />
        <Route path="/Details/:id" element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
