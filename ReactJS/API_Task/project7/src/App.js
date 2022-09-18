import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Personal } from './Components/Personal';
import { PersonalDetails } from './Components/PersonalDetails';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Create } from './Components/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Personal/>}/>
      <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<PersonalDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
