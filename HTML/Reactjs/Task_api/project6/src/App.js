
import './App.css';
import { Main } from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comment } from './Components/Comment';
import { Create } from './Components/Create';
import { Delete } from './Components/Delete';
import { Edit } from './Components/Edit';
import { CommentDetails } from './Components/CommentDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Comment />} />
          <Route path="/Create" element={<Create/>}/>
          <Route path="/delete/:id" element={<Delete/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/details/:id" element={<CommentDetails/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;