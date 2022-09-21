import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todolist from './Components/Todolist'
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';
const App=()=> {
  const [input,setInput]=useState("")
  const[todos,setTodos]=useState([])
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}/>
        </div>
        <div>
          <Todolist
          todos={todos}
          setTodos={setTodos}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
