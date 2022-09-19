import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Components/About';
import { Contacts } from './Components/Contacts';
import { Home } from './Components/Home';
import { Layout } from './Components/Layout';
import { NotFound } from './Components/NotFound';
import {Layout1} from './Components/Sample1/Layout1'
import {Home1} from './Components/Sample1/Home1';
import { Contacts1 } from './Components/Sample1/Contacts1';
import { NotFound1 } from './Components/Sample1/NotFound1';

function App() {
  return (
      // <BrowserRouter>
      //   <Routes>
      //     <Route>
      //       <Route path='/' element={<Layout/>}/>
      //     <Route index element={<Home/>} />
      //     <Route path='/meena' element={<h3>Welcome to Meena</h3>} />
      //     <Route path='/contacts' element={<Contacts/>} />
      //     <Route path='/about' element={<About/>}/>
      //     <Route path='*' element={<NotFound/>}/>
      //     </Route>
      //   </Routes>
      // </BrowserRouter>

      <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Layout1/>}/>
          <Route path='/home' element={<Home1/>}/>        
        <Route path='/contacts' element={<Contacts1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound1/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
