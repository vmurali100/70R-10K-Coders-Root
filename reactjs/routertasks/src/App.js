
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Create } from './components/Create';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Create/> */}
      <Routes>
        <Route path='/Home'  element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
