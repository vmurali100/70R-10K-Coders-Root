
import './App.css';
import { Create } from './components/Create';
import { Display } from './components/Display';
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import { Header } from './components/Header';
import { Edit } from './components/Edit';
import { Delete } from './components/Delete';
import { Details } from './components/Details';
function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/details/:id' element={<Details/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
