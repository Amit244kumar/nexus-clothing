import Header from './components/header/Header'
import { useEffect, useState } from 'react'
import Footer from './components/footer/Footer'
import './App.css'
import authService from './appwriteConfig/auth'
import { Outlet } from 'react-router-dom'
import { login,logout } from './store/authslice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import service from './appwriteConfig/addToCartConfig'
import orders from './appwriteConfig/orderedItem'
function App() {
  const dispatch=useDispatch()
  const status=useSelector(state=>state.auth.status)
  const user=useSelector(state=>state.auth.userData)

  const [value,setValue]=useState(false)
  let a=[]
  useEffect(()=>{
        authService.getCurrentUser().then((userData)=>{
          if(userData){
            dispatch(login({cartData:null,userData:userData}))
          }
          else{
            dispatch(logout())
          }
      })
  },[])
  const f1=async(s)=>{
    if(status && user){
    
        const r=await service.get_items(user.$id)
        const items=await orders.get_orders(user.$id)

        dispatch(login({cartData:r.documents,userData:user,orderItems:items.documents}))
        for (const element of r.documents) {
          a.push(element.quantity)
        }
        setValue(s)
    }
  }
  f1(false)
 
    return (
      <>
        
       <Header value={value} qunt={a} name={name} />
       <Outlet context={f1} />
       <Footer />
      </>
    )
  
}

export default App
