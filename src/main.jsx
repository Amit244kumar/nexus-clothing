import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Womens from './pages/Womens.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import CheckOut from './pages/CheckOut.jsx'
import MyProfile from './pages/Myprofile.jsx'
import Mens from './pages/Mens.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
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
                element:<Womens cate='womens' />
            },
            {
                path:'/mens',
                element:<Mens cate="mens" />,
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
            },
            {
                path:'/myprofile',
                element:<MyProfile />
            },
            {
                path:'/product',
                element:<Product />
            },
            {
                path:'/cart',
                element:<Cart />
            }
        ]
    },
    {
        path:'/checkout',
        element:<CheckOut />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
