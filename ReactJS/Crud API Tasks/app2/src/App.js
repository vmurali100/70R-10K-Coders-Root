import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { CreateComments } from './Components/CreateComments';
import { EditComments } from './Components/EditComments';
import { DeleteComments } from './Components/DeleteComments';
import { Info } from './Components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Info/>} />
          <Route path='/createcomments' element={<CreateComments />} />
          <Route path='/editcomments/:id' element={<EditComments />} />
          <Route path='/deletecomments/:id' element={<DeleteComments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
