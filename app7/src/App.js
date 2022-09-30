import './App.css';
import Index from './Components/index';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Main } from './Components/Main';
// import { Read } from './Components/Read';
// import { Create } from './Components/Create';
// import { Edit } from './Components/Edit';
// import { Delete } from './Components/Delete';
// import { Details } from './Components/Details';



function App() {
  return (
    <div className="App">
      <Index/>
      {/* <Main/>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Read />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/details/:id" element={<Details />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;