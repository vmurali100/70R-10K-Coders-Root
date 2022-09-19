import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import  medicinesSlice  from './medicinesSlice';
import garmentsSlice from './garmentsSlice';
import snacksSlice from './snacksSlice';
import grocerySlice from './grocerySlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    Medicines:medicinesSlice,
    Garments:garmentsSlice,
    Snacks:snacksSlice,
    Groceries:grocerySlice,
  },
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
