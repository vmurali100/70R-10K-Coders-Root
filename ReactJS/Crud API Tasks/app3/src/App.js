import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { Info } from './Components/Info';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/delete/:id' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
