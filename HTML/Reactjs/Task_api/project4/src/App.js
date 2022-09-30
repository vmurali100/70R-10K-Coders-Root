
import './App.css';
// import { Users } from './Components/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { User } from './Components/User';
import { Create } from './Components/Create';
import { Edit } from './Components/Edit';
import { Delete } from './Components/Delete';
import { UserDetails } from './Components/UserDetails';


function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
          <Route path="/Header/:id" element={<Header />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
