import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Main } from "./Components/Main";
import { Verifyemail } from "./Components/Verifyemail";
import { Freeexamlist } from "./Components/Freeexamlist";
import { GetExam } from "./Components/GetExam";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Verifyemail" element={<Verifyemail/>}/>
        <Route path="/Main" element={<Main />}/>
        <Route path="/Freeexamlist" element={<Freeexamlist />}/>
        <Route path="/GetExam" element={<GetExam />}/>
    
    </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
