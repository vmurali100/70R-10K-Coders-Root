// import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
// import { Slider } from './Components/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Students } from './Components/Students';
import { Subjects } from './Components/Subjects';
import { Teachers } from './Components/Teachers';
import { StudentDetails } from './Components/StudentDetails';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students/>} />
          <Route path='/:id' element={<StudentDetails/>} />

          <Route path='/subjects' element={<Subjects/>} />
          <Route path='/teachers' element={<Teachers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;