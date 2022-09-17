import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Subscribers } from "./Components/Subscribers";
import { Details } from "./Components/Details";
import { Find } from "./Components/Find";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { DeleteUser } from "./Components/DeleteUser";
import { About } from "./Components/About";
import { Nav } from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Subscribers" element={<Subscribers />} />
          <Route path="/About" element={<About />} />
          <Route path="Subscribers/Details/:id" element={<Details />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="Subscribers/EditUser/:id" element={<EditUser />} />
          <Route path="Subscribers/DeleteUser/:id" element={<DeleteUser />} />
          <Route path="/Find" element={<Find />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
