import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Contacts } from './components/Contacts';
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { About } from './components/About';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
       <Route path="*" element={<Notfound/>}/>               {/*    "*" meaning antay akada mention chesinavi kakunda */}
       <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
