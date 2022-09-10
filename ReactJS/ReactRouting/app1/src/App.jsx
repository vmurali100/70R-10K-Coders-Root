import logo from './logo.svg';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import './App.css';
import { Home } from './Components/Home';
import { Contacts } from './Components/Contacts';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element ={<Home/>}/>
    {/* <Route path='/'element ={<h2>Welcome to React Routing</h2> }/> */}
   <Route path='/Keerthi'element ={<h2>Welcome to Keerthi</h2> }/>
   <Route path='/Contacts'element ={<Contacts/> }/>
   <Route path='*'element ={<NotFound/>}/>*:except the above mentioned.





    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
