import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Posts } from './Components/Posts';
import  Header  from './Components/Header';
import { Slider } from './Components/Slider';
import { PostsDetails } from './Components/PostsDetails';
import { CreatePosts } from './Components/CreatePosts';
import { EditPost } from './Components/EditPost';
import { DeletePost } from './Components/DeletePost';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     
     <Routes>
     <Route path='/' element={<Slider/>}/>
     <Route path="/posts" element={<Posts/>}/>
      <Route path="/postdetails/:id" element={<PostsDetails/>}/>
      <Route path="/createposts" element={<CreatePosts/>}/>
      <Route path="/editpost/:id" element={<EditPost/>}/>
      <Route path="/deletepost/:id" element={<DeletePost/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
