import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Header } from './Components/Header';
import { Lists } from './Components/Lists';
import { CreateList } from './Components/CreateList';
import { DeleteList } from './Components/DeleteList';
import { EditList } from './Components/EditList';
import { ListData } from './Components/ListData';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>

            <Routes>
               <Route path="/" element={<Lists/>} />
               <Route path="/CreateList" element={<CreateList/>} />
               <Route path="/DeleteList/:id" element={<DeleteList/>} />
               <Route path="/EditList/:id" element={<EditList/>} />
               <Route path="/ListData/:id" element={<ListData/>} />

            </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;