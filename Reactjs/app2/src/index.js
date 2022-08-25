import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dharahaas } from './components/Dharahaas';
import { DharahaasClassComp } from './components/Dharahaas_ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    //<Dharahaas />
    <DharahaasClassComp/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
