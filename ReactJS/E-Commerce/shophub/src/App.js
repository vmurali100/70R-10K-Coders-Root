import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import SigleProduct from './components/SigleProduct';
import { Login } from './components/Login';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SigleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
