import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { Contacts } from './Components/Contacts';
import { NotFound } from './Components/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> /it indicates what element needs to be displayed
      <Route path="/Manasa" element={<h2>Welcome to Manasa</h2>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
