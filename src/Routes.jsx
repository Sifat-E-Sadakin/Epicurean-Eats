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
import Login from './Components/Login';
import SignUp from './Pages/SignUp';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from './Layout/Dashboard';
import MyCart from './DComponents/MyCart';


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
                  element: <PrivateRoutes><OrderPage></OrderPage></PrivateRoutes>,
                },
                {
                  path: "/login",
                  element: <Login></Login>,
                },
                {
                  path: "/signUp",
                  element: <SignUp></SignUp>,
                },
              ],
            },
            {
              path: 'dashboard',
              element: <Dashboard></Dashboard>,
              children: [
                {
                  path: 'myCart',
                  element: <MyCart></MyCart>
                }

              ]
              
            }
          ]);


