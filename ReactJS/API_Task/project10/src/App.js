import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Photos } from './Components/Photos';
import { PhotoDetails } from './Components/PhotoDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Photos/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/details/:id" element={<PhotoDetails/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
