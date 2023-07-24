

import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
