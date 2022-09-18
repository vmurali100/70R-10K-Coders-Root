import logo from "./logo.svg";
import "./App.css";
import { Users } from "./Components/Users";
import { Route, Routes } from "react-router-dom";
import { Create } from "./Components/Create";
import { Edit } from "./Components/Edit";
import { Delete } from "./Components/Delete";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { View } from "./Components/View";
import {Search} from "./Components/Search";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
        <Route path="/Delete/:id" element={<Delete/>}></Route>
        <Route path="/View/:id" element={<View/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
