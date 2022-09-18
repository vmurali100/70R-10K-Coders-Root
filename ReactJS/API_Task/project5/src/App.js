import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Page } from './Components/Page';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { PageDetails } from './Components/PageDetails';
import { Edit } from './Components/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<PageDetails/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
