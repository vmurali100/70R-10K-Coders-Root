import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { Create } from './Components/Create';
import { Todo } from './Components/Todo';
import { Details } from './Components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Todo/>}/>
      <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/delete/:id" element={<Delete/>}/>
        <Route path="/details/:id" element={<Details/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
