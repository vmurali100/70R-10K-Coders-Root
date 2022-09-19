import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePhotos from './Components/HomePhotos'
import { Slider } from './Components/Slider';
import {Photos} from './Components/Photos'
import {CreatePhotos} from './Components/CreatePhotos'
import {EditPhotos} from './Components/EditPhotos'
import {DeletePhotos} from './Components/DeletePhotos'
import {PhotoDetails} from './Components/PhotoDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes> 
        <Route path='/carousel' element={<Slider/>}/>
      <Route path='/' element={<HomePhotos/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/createphotos' element={<CreatePhotos/>}/>
        <Route path='/editphotos/:id' element={<EditPhotos/>}/>
        <Route path='/deletephotos/:id' element={<DeletePhotos/>}/>
        <Route path='/photodetails/:id' element={<PhotoDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
