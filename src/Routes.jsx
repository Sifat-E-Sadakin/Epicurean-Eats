import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Layout/Home';
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';


export const router = createBrowserRouter([
            {
              path: "/",
              element: <Home></Home>,
              children: [
                {
                  path: "/",
                  element: <HomePage></HomePage>,
                },
                {
                  path: "menu",
                  element: <MenuPage></MenuPage>,
                },
                {
                  path: "order/:category",
                  element: <OrderPage></OrderPage>,
                },
              ],
            },
          ]);


