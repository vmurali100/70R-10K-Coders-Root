// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Contacts } from './Components/Contacts';
import { NotFound } from './Components/NotFound';
import { About } from './Components/About';
import { Layout } from './Components/Layout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  index element={<Home />} />
          <Route path='/srikanth' element={<h2>Welcome To Srikanth </h2>} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
