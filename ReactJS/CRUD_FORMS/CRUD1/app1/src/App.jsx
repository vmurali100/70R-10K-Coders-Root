import logo from './logo.svg';
import './App.css';
import { ProductsTable } from './Components/ProductsTable';
import { CreateProduct } from './Components/CreateProduct';

function App() {
  return (
    <div className="App">
      {/* <ProductsTable/> */}
      <CreateProduct/>
    </div>
  );
}

export default App;
