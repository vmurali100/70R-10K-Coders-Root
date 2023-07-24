import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD

import App from './App';
import { Vardhan } from './Components/vardhan';
=======
import './index.css';
import App from './App';
>>>>>>> 14810712f725c5a74466e199766df9140d1c2022
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
 
    <App/>
  
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 14810712f725c5a74466e199766df9140d1c2022
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
