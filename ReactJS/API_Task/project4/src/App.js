import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Database } from './Components/Database';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Database />} />
          <Route path="/Create" element={<Create/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
