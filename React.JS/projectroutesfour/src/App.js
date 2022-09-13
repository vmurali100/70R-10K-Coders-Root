
import './App.css';
import { Home } from './Components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { CreateCart } from './Components/Create';
import { ReadCart } from './Components/Read';
import { EditCart } from './Components/Edit';
import { DeleteCart } from './Components/Delete';
import { CartDetail } from './Components/Details';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Home />

            <Routes>
               <Route path="/" element={<ReadCart/>} />
               <Route path="/CreateCart" element={<CreateCart/>} />
               <Route path="/EditCart/:id" element={<EditCart/>} />
               <Route path="/DeleteCart/:id" element={<DeleteCart/>} />
               <Route path="/CartDetail/:id" element={<CartDetail/>} />
            </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
