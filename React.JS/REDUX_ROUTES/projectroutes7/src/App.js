
import './App.css';
import { Header } from './Components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Create } from './Components/Create';
import { Read } from './Components/Read';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Details } from './Components/Details';


function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Read/>} />
      <Route path="/Create" element={<Create/>} />
      <Route path="/Edit/:id" element={<Edit/>} />
      <Route path="/Delete/:id" element={<Delete/>} />
      <Route path="/Details/:id" element={<Details/>} />
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
