
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Kart } from './Components/Kart';
import { KartDetails } from './Components/KartDetails';
import { Header } from './Components/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Kart/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<KartDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;