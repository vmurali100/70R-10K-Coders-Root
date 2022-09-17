import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";

import { Products } from "./Components/Products";
import { Nav } from "./Components/Nav";
import { AddProduct } from "./Components/AddProduct";
import { ViewProduct } from "./Components/ViewProduct";
import { EditProduct } from "./Components/EditProduct";
import { DeleteProduct } from "./Components/DeleteProduct";
import { FindProduct } from "./Components/FindProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="Products/EditProduct/:id" element={<EditProduct />} />
          <Route path="Products/ViewProduct/:id" element={<ViewProduct />} />
          <Route
            path="Products/DeleteProduct/:id"
            element={<DeleteProduct />}
          />
          <Route path="FindProduct" element={<FindProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
