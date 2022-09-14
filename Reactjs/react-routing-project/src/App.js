import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
