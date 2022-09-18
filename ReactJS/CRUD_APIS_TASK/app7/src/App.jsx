import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Read } from './Components/Read';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Details } from './Components/Details';
import { Edit } from './Components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Read/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>




      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
