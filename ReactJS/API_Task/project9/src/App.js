import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { Product } from './Components/Product';
import { ProductDetails } from './Components/ProductDetails';
import { Header } from './Components/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<ProductDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
