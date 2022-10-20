
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import CheckOut from './components/CheckOut';

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route exact path="/products" component={Products}/> */}
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/checkout' element={<CheckOut/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
