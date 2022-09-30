import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header';
import { List } from './Components/List';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { ListData } from './Components/ListData';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Create/" element={<Create />} />
          <Route path="/Delete/:id" element={<Delete />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/ListData/:id" element={<ListData />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;