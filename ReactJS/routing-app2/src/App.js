// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import  Home  from './Components/Home';
import { Comments } from './Components/Comments';
import { CommentDetails } from './Components/CommentDetails';
import { CreateComments } from './Components/CreateComments';
import {EditComments} from './Components/EditComments'
import {DeleteComments} from './Components/DeleteComments'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/comments/:id' element={<CommentDetails/>}/>
        <Route path='/createcomments' element={<CreateComments/>}/>
        <Route path='/editcomments/:id' element={<EditComments/>}/>
        <Route path="/deletecomments/:id" element={<DeleteComments/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
