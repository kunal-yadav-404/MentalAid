import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from './components/navbar'
import {BrowserRouter , Routes, Route , Link} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
