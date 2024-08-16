import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
import Home from './components/Home';
import Root from './Root';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './PrivateRoute';

 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/all-products",
      element:<PrivateRoute><Products></Products></PrivateRoute>,
      loader: () => fetch("http://localhost:3000/all-products")
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
  ]
  }, 
 ]); 

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </AuthProvider>
  </React.StrictMode>,
)
