import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Home  from './Components/Home';
import {Albums} from './Components/Albums'
import {AlbumDetails} from './Components/AlbumDetails'
import {EditAlbums} from './Components/EditAlbums'
import { DeleteAlbums } from './Components/DeleteAlbums';
import { CreateAlbums } from './Components/CreateAlbums';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path='/albums/:id' element={<AlbumDetails/>}/>
        <Route path="/editalbum/:id" element={<EditAlbums/>}/>
        <Route path='/deletealbum/:id' element={<DeleteAlbums/>}/>
        <Route path='/createalbum' element={<CreateAlbums/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
