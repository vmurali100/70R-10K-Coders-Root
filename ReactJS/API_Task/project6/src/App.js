import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { User } from './Components/User';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { UserDetails } from './Components/UserDetails';
import { Edit } from './Components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<UserDetails/>}/> 

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
