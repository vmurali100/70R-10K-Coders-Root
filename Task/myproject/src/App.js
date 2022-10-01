import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Main } from "./Components/Main";
import { Verifyemail } from "./Components/Verifyemail";
import { Freeexamlist } from "./Components/Freeexamlist";
import { GetExam } from "./Components/GetExam";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/verifyemail" element={<Verifyemail/>}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/Freeexamlist" element={<Freeexamlist />}></Route>
        <Route path="/GetExam" element={<GetExam />}></Route>
    
    </Routes>
    </div>
  );
}

export default App;
