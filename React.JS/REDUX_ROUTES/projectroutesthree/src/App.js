
import './App.css';
import { Home } from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { DisplayPhotos } from './Components/Photos';
import { CreatePhotos } from './Components/Create.';
import { EditPhotos } from './Components/Edit';
import { DeletePhotos } from './Components/Delete';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
      <Home />
        <Routes>
          <Route path="/" element={<DisplayPhotos/>} />
          <Route path="/CreatePhotos" element={<CreatePhotos/>} />
          <Route path="/EditPhoto/:id" element={<EditPhotos/>} />
          <Route path="/DeletePhoto/:id" element={<DeletePhotos/>} />
          <Route path="/Details/:id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
