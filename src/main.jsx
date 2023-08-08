import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserRoutes from './routes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserRoutes/>
  </BrowserRouter>
)
