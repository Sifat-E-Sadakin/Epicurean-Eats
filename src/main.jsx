import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UserProvider from './Providers/UserProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <div className='bg-slate-50'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </UserProvider>

  </React.StrictMode>,
)
