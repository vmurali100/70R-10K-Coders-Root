
import './App.css';
import { Main } from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Database } from './Components/Database';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Database />} /> 
          <Route path="/Create" element={<Create/>}/>
          <Route path="/delete/:id" element={<Delete/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/details/:id" element={<Details/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;