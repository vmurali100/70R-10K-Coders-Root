import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Components/Home'
import { FakeProducts } from './Components/FakeProducts';
import { Edit } from './Components/Edit';
import {Delete} from './Components/Delete'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<FakeProducts/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/delete/:id' element={<Delete/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
