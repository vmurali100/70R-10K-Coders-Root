import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { Create } from './Components/Create';
import { AllInfo } from './Components/AllInfo';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<AllInfo />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/delete/:id' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
