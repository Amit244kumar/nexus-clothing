import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Header() {
    const [open,setOpen]=useState(true)
    const cart=useRef(null)
    const [up,setUp]=useState(true)
    const  element=useRef(null)
    const  header=useRef(null)
    const [preScrollpos,setPreScrollpos]=useState(window.pageYOffset)
    window.onscroll=function(){
    var curScrollpos=window.pageYOffset
    if(preScrollpos > curScrollpos)
    {
        element.current.style.top="0px"
    }
    else
    {
        if(screen.width<=640){
         element.current.style.top="-248px"
        }
        else{
           element.current.style.top="-160px"
        }
    }
    setPreScrollpos(curScrollpos)
   }
    const popup=()=>{
        if(up == true)
        {
            header.current.style.top="0px"
            setUp(false)
        }
        else{
            header.current.style.top="-248px"
            setUp(true)
        }
    }
    const opneCloseCart=()=>{
        
        if(open == true)
        {
            cart.current.style.right="0px"
            
            setOpen(false)
        }
        else{
            cart.current.style.right="-382px"
            setOpen(true)
        }
    }
  return (
    <div ref={element} id='scrolling-header' className='w-full absolute z-10'
     style={
        {
            top:'0px',
            position:'fixed',
            background: 'rgba(0, 0, 0, 0.3) none repeat scroll 0 0',
            transition: '0.5s ease'
        }
     }
    >
        <div className='w-full bg-black'>
            <div className=' sm:flex  sm:justify-between max-w-5xl m-auto text-white border-b border-black'>
                <div className='mt-3 pl-2 hidden sm:block'>
                    <p>Welcome to Nexus store</p>
                </div>
                <div className='flex float-right'>
                    <div className=' p-1 sm:p-2 m-1'>
                        <a href="" className=''>My account</a>
                    </div>
                    <div className='p-1 sm:p-2 m-1'>
                        <a href="">wishlist</a>     
                    </div>
                    <div className='p-1 sm:p-2 m-1'>
                        <Link to='/login'  >Login</Link>
                    </div>
                </div>
            </div>
        </div>
        <div ref={header} className='  w-full sm:hidden flex flex-col items-center text-white bft absolute z-30 -top-64'>
                <div className='absolute w-full mr-6 mt-4 -z-10'>
                     <h1 onClick={popup} className='float-right'><i class="fa-solid fa-x text-2xl " ></i></h1>
                </div>
                <div className='flex flex-col'>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2 ' onClick={popup}  to='/' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}>Home</NavLink>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  onClick={popup} to='/mens'  style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}  >Mens</NavLink>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2 '  onClick={popup} to='/womens' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined} >Womens</NavLink>
                    {/* <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  >About</NavLink> */}
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  onClick={popup} to='/contact'style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}  >Contact</NavLink>
                </div>
        </div>
        <div className='flex justify-between sm:justify-around w-full m-auto text-center   p-3 sm:h-28 h-20 pb-2  items-center'>
            <div className='overflow-hidden rounded-lg'>
                <a href="#">
                <img src='logo/nexus1.png'  className='sm:w-32 w-14 ml-2' alt="logo" />
                </a>
            </div>
            <div  className=' relative flex flex-row-reverse items-center gap-1 sm:hidden'>
                <div onClick={popup}>
                    <div className='border-2 w-7 mb-1'></div>
                    <div className='border-2 w-7 mb-1'></div>
                    <div className='border-2 w-7 mb-1'></div>    
                </div>
                <div className='mb-2 text-white lg:p-4 p-2 m-1 rounded-xl cursor-pointer'>
                <ShoppingCart size={28} strokeWidth={1.25} onClick={opneCloseCart} />
                </div>
            </div>
            <div className='sm:flex max-w-md hidden text-white fcs'>
                <NavLink className='md:p-3 lg:p-4 p-2 m-1 rounded-xl' to='/' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}>Home</NavLink>
                <NavLink className='md:p-3 lg:p-4 p-2 m-1 rounded-xl ' to='/mens' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined} >Mens</NavLink>
                <NavLink className='md:p-3 lg:p-4 p-2 m-1 rounded-xl' to='/womens' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}>Womens</NavLink>
                {/* <NavLink className='md:p-3 lg:p-4 p-2 m-1 rounded-xl' to='/'>About</NavLink> */}
                <NavLink className='md:p-3 lg:p-4 p-2 m-1 rounded-xl' to='/contact' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}>Contact</NavLink>
                <div className='md:p-3 lg:p-4 p-2 m-1 rounded-xl cursor-pointer'>
                <ShoppingCart size={28} strokeWidth={1.25} onClick={opneCloseCart} />
                </div>
            </div>
        </div>
        <div ref={cart} className='bg-black height w-64 sm:w-96  max-w-96 fixed top-0 -right-96 duration-700 '>
            <div className='flex justify-between m-3 border-b-2 border-black'>
                <div>
                    <h1 className=' text-2xl sm:text-3xl font-bold text-white'>Add To Cart</h1>
                </div>
                <div onClick={opneCloseCart}  >
                   <i className="fa-solid cursor-pointer fa-x text-2xl font-bold mt-2 text-white" />
                </div>
            </div>
            <div className='sd p-2 flex items-center justify-center'>
                <div >
                <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>your cart is empty</h1>
                </div> 
            </div>
            <div className='flex flex-col gap-2 p-3 '>
               <a href="#">
               <div className='border w-full p-2 text-center bg-white '>
                  <Link to='/mens' onClick={opneCloseCart}><button  className='w-fit m-auto font-bold text-xl' >Shop Now</button> </Link>
               </div>
               </a>
              <a href="#">
                <div className='border w-full p-2 text-center'>
                    <Link to="/checkout" ><button  className='w-fit m-auto font-bold text-white text-xl'>Check out</button></Link>
                </div>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header