import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Layout/Home';
import HomePage from './Pages/HomePage';


export const router = createBrowserRouter([
            {
              path: "/",
              element: <Home></Home>,
              children: [
                {
                  path: "/",
                  element: <HomePage></HomePage>,
                },
              ],
            },
          ]);


