import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Shopping from './pages/Shopping.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'

import CheckOut from './pages/CheckOut.jsx'
const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:"/",
                element:<Home />    
            },
            {
                path:'/womens',
                element:<Shopping cate='womens' />
            },
            {
                path:'/mens',
                element:<Shopping cate="mens" />,
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },
    {
        path:'/checkout',
        element:<CheckOut /> 
    },
    {
        path:'/single-checkout',
        element:<CheckOut single="yes" /> 
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
