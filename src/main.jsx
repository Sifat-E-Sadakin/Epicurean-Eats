import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-50'>
     <RouterProvider router={router} />
    </div>
  
  </React.StrictMode>,
)
