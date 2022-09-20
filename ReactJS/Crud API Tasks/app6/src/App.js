import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import { AllInfo } from './Components/AllInfo';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<AllInfo />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/delete/:id' element={<Delete/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
