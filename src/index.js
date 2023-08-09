import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <React.StrictMode>
    <App />
    <ToastContainer></ToastContainer>
  </React.StrictMode>
 </BrowserRouter>
);
reportWebVitals();
