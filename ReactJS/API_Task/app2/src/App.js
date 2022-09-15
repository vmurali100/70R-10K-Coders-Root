import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Header } from './Components/Header';
import { Lists } from './Components/Lists';
import { CreateList } from './Components/CreateList';
import { DeleteList } from './Components/DeleteList';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>

            <Routes>
               <Route path="/" element={<Lists/>} />
               <Route path="/CreateList" element={<CreateList/>} />
               <Route path="/DeleteList/:id" element={<DeleteList/>} />



            </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;