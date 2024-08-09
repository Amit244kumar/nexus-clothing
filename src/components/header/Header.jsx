import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import authService from '../../appwriteConfig/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logout } from '../../store/authslice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { Trash2} from 'lucide-react'

import service from '../../appwriteConfig/addToCartConfig'

function Header({value,qunt}) {
    const [progress, setProgress] = useState(0)
    const dispatch=useDispatch()
    const status=useSelector(state=>state.auth.status)
    var carts=useSelector(state=>state.auth.cartData)
    const cart=useRef(null)
    const element=useRef(null)
    const header=useRef(null)
    const user=useSelector(state=>state.auth.userData)
    const [subTotal,setSubTotal]=useState(0)
    const [cartData,setCartData]=useState(false)
    const [userData,setUserData]=useState(user) 
    useEffect(()=>{
        Total()
        setUserData(user)
        setCartData(Array.isArray(carts)?carts:false)
    },[carts])
    // const quntity=async(cart,e,index)=>{
    //     var updatedCart={
    //         title:cart.title,
    //         description: cart.description?cart.description:"Lorem ipsum dolor sit.",
    //         rating:cart.rating,
    //         price:String(cart.price),
    //         imageUrl:cart.imageUrl,
    //         quantity:Number(e.target.value),
    //         userId:userData.$id,
    //     }
    //     await service.update_item(cart.$id,updatedCart)
    //     quantities[index]=e.target.value
    //     setQuantities(quantities)
    //     Total()
    // }
    const deleteItem=async (id,price)=>{
            setProgress(50)
            const s=await service.detele_item(id) 
            if(s!=false){
                // toast.success("item delete successfully")
                setProgress(100)
                const r=await service.get_items(userData.$id)
                if(r) {
                    setCartData(r.documents)
                } else{
                    setCartData(false)
                }
                setSubTotal(subTotal-Number(price))
            }
    }
    const Total=()=>{
        let total=0
        if(cartData){
            for(const el of cartData){
                total+=(Number(el.price)*Number(el.quantity))
            }
        }
        setSubTotal(total)
    }
    const logOut = () => {
        setProgress(40);
        authService.logout().then(() => {
            setProgress(100);
            dispatch(logout());
            // status=false
            // Navigate('/')
            // toast.success("You have successfully logged out");
        })
    }
    
    var preScrollpos=window.scrollY
    window.onscroll=function(){
        Total()
        var curScrollpos=window.scrollY
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
        preScrollpos=curScrollpos
    }
    const opneCloseCart=async()=>{   
        cart.current.style.right="0px"
    }
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(
              <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 sm:w-5 h-5 text-yellow-400">
                <path d="M12 .587l3.668 7.568L23.5 9.748l-5.732 5.704L19.335 24 12 20.347 4.665 24l1.568-8.548L.5 9.748l7.832-1.593L12 .587z"/>
              </svg>
            );
          } else {
            stars.push(
              <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 sm:w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27l-4.15 2.18 1.04-4.81-3.64-3.38 4.91-.43L12 7.25l1.84 3.82 4.91.43-3.64 3.38 1.04 4.81z"/>
              </svg>
            );
          }
        }
        return stars;
    };
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
    <LoadingBar color='#f11946' progress={progress}  />
    <ToastContainer />
        <div className='w-full bg-black'>
            <div className=' sm:flex  sm:justify-between max-w-5xl m-auto text-white border-b border-black'>
                <div className='mt-3 pl-2 hidden sm:block'>
                    <p>Welcome to Nexus store</p>
                </div>
                <div className='flex float-right'>
                    {
                        status &&  <div className=' p-1 sm:p-2 m-1'>
                            <p className='border-white border-b-2 '>{userData?userData.name:name}</p>
                        </div>
                    }
                    {status && 
                    <div className='p-1 sm:p-2 m-1'>
                        <Link to='/myprofile' >My account</Link>
                    </div> 
                    }
                    <div className='p-1 sm:p-2 m-1'>
                       {status? <p onClick={logOut} className='cursor-pointer'>logout</p> : <Link to='/login'  >Login</Link> }
                    </div>
                </div>
            </div>
        </div>
        <div ref={header} className='  w-full sm:hidden flex flex-col items-center text-white bft absolute z-30 -top-64'>
                <div className='absolute w-full mr-6 mt-4 -z-10'>
                     <h1 onClick={()=>header.current.style.top="-248px"} className='float-right'><i class="fa-solid fa-x text-2xl " ></i></h1>
                </div>
                <div className='flex flex-col'>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2 ' onClick={()=>header.current.style.top="-248px"}  to='/' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}>Home</NavLink>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  onClick={()=>header.current.style.top="-248px"} to='/mens'  style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}  >Mens</NavLink>
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2 '  onClick={()=>header.current.style.top="-248px"} to='/womens' style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined} >Womens</NavLink>
                    {/* <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  >About</NavLink> */}
                    <NavLink className='md:p-3 lg:p-4 p-2 m-1 text-center rounded-xl border-b-2'  onClick={()=>header.current.style.top="-248px"} to='/contact'style={({ isActive }) => isActive ? { background:"rgba(255, 255, 255, 0.1) none repeat scroll 0 0" } : undefined}  >Contact</NavLink>
                </div>
        </div>
        <div className='flex justify-between sm:justify-around w-full m-auto text-center   p-3 sm:h-28 h-20 pb-2  items-center'>
            <div className='overflow-hidden rounded-lg'>
                <Link to="/">
                    <img src='logo/nexus1.png'  className='sm:w-32 w-14 ml-2' alt="logo" />
                </Link>
            </div>
            <div  className=' relative flex flex-row-reverse items-center gap-1 sm:hidden'>
                <div onClick={()=>header.current.style.top="0px"}>
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
                <div onClick={()=>cart.current.style.right="-382px"}>
                   <i className="fa-solid cursor-pointer fa-x text-2xl font-bold mt-2 text-white" />
                </div>
            </div>
            {status?(<div className='sd p-2 flex justify-center'>
                {cartData?(<div className=' scrollable-div overflow-auto  '>
                   {cartData.map((item,index)=>(
                    <div key={index} className='flex flex-row justify-between border-t-2 p-1 px-3'>
                        <div className='flex overflow-auto '>
                            <div className='w-28 overflow-hidden'> 
                                <img src={item.imageUrl} alt="" className='rounded-lg'/>   
                            </div> 
                            <div className='m-1 sm:m-2'>
                                <h1 className=' text-sm font-semibold sm:p-1 text-white'>{item.title}</h1>
                                <p className=' text-sm  sm:p-1 text-white'>{item.description}</p>
                                <div className="sm:p-1 flex sm:mb-1 ">{renderStars(item.rating)}</div>
                            </div>
                        </div>
                        <div className=' flex flex-col justify-evenly'>
                             <h1 className='font-semibold  text-sm text-white '>Rs {item.price}</h1>
                             <p className='text-white cursor-pointer hover:text-red-600' onClick={()=>{deleteItem(item.$id,Number(item.price)*Number(item.quantity))}}><Trash2 /></p>
                             <select name=""   /*onChange={(e)=>{quntity(item,e,index)}}*/ className='quntity w-12 p-1 text-white outline-none rounded-md bg-slate-600'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                             </select>
                        </div>
                    </div>
                    ))}   
                </div>):(<div className='sd p-2 flex items-center justify-center'>
                    <div>
                    <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>your cart is empty</h1>
                    </div> 
            </div>)}
            </div>):(<div className='sd p-2 flex items-center justify-center'>
                    <div>
                    <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>login to add item</h1>
                    </div> 
            </div>)}
            {
                status && <div className='flex justify-between px-3 mx-1'>
                <p className='text-white font-semibold sm:text-xl '>SubTotal</p>
                <p className='text-white font-semibold sm:text-xl'>Rs {subTotal}</p>
            </div>
            }
            <div className='flex flex-col gap-2 p-3 '>
                <Link to='/mens' onClick={()=>cart.current.style.right="-382px"}>
                 <div className='group hover:bg-black duration-500 border w-full p-2 text-center bg-white '>
                    <button  className='group-hover:text-white duration-500 w-fit m-auto font-bold text-xl text-black ' >Shop Now</button> 
                 </div>
                </Link>
                <Link to="/cart" onClick={()=>cart.current.style.right="-382px"} >
                    <div className='group hover:bg-white  border w-full p-2 text-center duration-500'>
                      <button  className='w-fit m-auto font-bold text-white group-hover:text-black duration-500 text-xl'>View cart</button>
                    </div>
                </Link>
              
            </div>
        </div>
    </div>
    )
}

export default Header
