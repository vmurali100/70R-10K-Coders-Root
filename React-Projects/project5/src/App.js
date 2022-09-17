import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Users } from "./Components/Users";
import { View } from "./Components/View";
import { Find } from "./Components/Find";
import { AddUser } from "./Components/AddUser";
import { EditUser } from "./Components/EditUser";
import { DeleteUser } from "./Components/DeleteUser";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/About" element={<About />} />
          <Route path="Users/View/:id" element={<View />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="Users/EditUser/:id" element={<EditUser />} />
          <Route path="Users/DeleteUser/:id" element={<DeleteUser />} />
          <Route path="/Find" element={<Find />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
