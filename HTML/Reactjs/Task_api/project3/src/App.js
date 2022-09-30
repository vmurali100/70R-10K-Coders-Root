
import './App.css';
// import { Mobile } from './FunctionComponets/Mobile';
import { Header } from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Collage } from './Components/Collage';
import { CollageDetails } from './Components/CollageDetails';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Create } from './Components/Create';

function App() {
  return (
    <div className="App">
    {/* <Mobile/> */}
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Collage/>}/>
      <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<CollageDetails/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
