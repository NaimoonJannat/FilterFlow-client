import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
import Home from './components/Home';
import Root from './Root';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';

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
      element:<Products></Products>
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
