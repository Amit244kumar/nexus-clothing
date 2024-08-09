import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Cart() {
    const status=useSelector(state=>state.auth.status)
    const userData=useSelector(state=>state.auth.userData)
    const cartData=useSelector(state=>state.auth.cartData)
    const [total,setTotal]=useState(0)
    
    useEffect(()=>{
        let t=0
        if(cartData){
            cartData.map((c)=>{
                t+=Number(c.price)   
            })
        }
       setTotal(t)
    },[])
    const incremet=(id)=>{
         console.log(cartData[id])
        if(cartData[id].quantity>=1 && cartData[id].quantity<8){
            cartData[id].quantity+=1
            setTotal(total+cartData[i].price)
        }
    }
    const decrement=(id)=>{
        if(cartData[id].quantity>1 && cartData[id].quantity<=8){
            cartData[id].quantity-=1
            setTotal(total-cartData[i].price)
            
        }
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
    <section className='p-5 sm:p-10 lg:mt-48 mt-24'>
        {
            cartData && cartData.length==0?(<div className='w-fit m-auto mb-14'>
                <h1 className='text-xl text-center sm:text-2xl lg:text-4xl text-white font-semibold'>YOUR CART IS EMPTY</h1>
                <Link to='/womens'>
                    <div className='group duration-500 border1 hover:bg-black mt-2 p-2 rounded-lg  text-center font-semibold text-xl sm:text-2xl bg-white'>
                        <a href="#" className='group-hover:text-white duration-500'>CONTINUE SHOPPING</a>
                    </div>
                </Link>
            </div>):
           (cartData?(<div className='flex text-white flex-wrap justify-center'>
            <div className='text-white overflow-auto scrollable-div hei'>
                <div className='wi'>
                    <div className='flex mb-3 justify-evenly sm:px-10 pl-2 py-3 bg-slate-500'>
                        <div className='w-9/12 '>
                            <p className='font-semibold'>PRODUCT</p>
                        </div>
                        <div className='flex w-full justify-evenly sm:mr-4 mr-12  sm:justify-evenly'>
                            <div>
                                <p className='font-semibold'>PRICE</p>
                            </div>
                            <div>
                                <p className='font-semibold'>QUANTITY</p>
                            </div>
                            <div>
                                <p className='font-semibold'>TOTAL</p>
                            </div>
                        </div>
                    </div>
                    {
                        cartData.map((cart,index)=>(
                            <div key={index} className=' flex border1 items-center p-2 sm:p-5 justify-between '>
                                <div className=' rounded-lg  items-center  '>
                                    <img src={cart.imageUrl} className='rounded-lg' width={70} alt="" />
                                </div>
                                <div className='p-4 '>
                                    <p className=' text-base sm:text-xl font-semibold'>{cart.title}</p>
                                    <p className='flex text-base sm:text-xl'>{renderStars(cart.rating)}</p>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-semibold'>Rs {cart.price}</p>
                                </div>
                                <div className='flex p-1 px-4 border1 mx-2'>
                                    <p className='text-base sm:text-2xl p-1 sm:p-2 cursor-pointer' onClick={()=>{decrement(index)}}>-</p>
                                    <p className='text-base sm:text-2xl p-1 px-2 sm:p-2'>{cart.quantity}</p>
                                    <p className='text-base sm:text-2xl p-1 sm:p-2 cursor-pointer' onClick={()=>{incremet(index)}}>+</p>
                                </div>
                                <div className='p-4 '>
                                    <p className='font-semibold'>Rs {cart.price}</p>
                                </div>
                                <div className='p-4 invisible cursor-pointer '>
                                    <X strokeWidth={1.5} />
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className='mt-3 lg:mt-0  pt-0 sm:mx-4 w-96'>
                     <div className='  border-b-2'>
                        <h1 className='font-semibold text-xl sm:text-2xl lg:text-3xl'>ORDER SUMMERY</h1>
                     </div>
                     <div className='pb-2 flex justify-between mt-5 border-b '>
                        <h2 className='text-xl font-semibold'>Total</h2>
                        <h2 className='text-xl font-semibold'>Rs {total}</h2>
                     </div>
                     <div className='mt-4 '>
                        <Link to='/checkout' state={{cartData,total,status,userData}}>
                            <div className=' group mb-3 p-3 border1 bg-white hover:bg-black duration-500 '>
                                <p className='text-center lg:text-xl font-semibold text-black group-hover:text-white duration-500 '>PROCEED TO CHECKOUT</p>
                            </div> 
                        </Link>
                        <Link to='/mens'>
                            <div className=' p-3 group  border1 bg-black hover:bg-white duration-500 cursor-pointer'>
                                <p className='text-center lg:text-xl font-semibold text-white group-hover:text-black duration-500 '>CONTINUE SHOPPING</p>
                            </div>
                        </Link>
                     </div>

            </div>
        </div>):(<div className='w-fit m-auto mb-14'>
                <h1 className='text-xl text-center sm:text-2xl lg:text-4xl text-white font-semibold'>YOUR CART IS EMPTY</h1>
                <Link to='/womens'>
                    <div className='group duration-500 border1 hover:bg-black mt-2 p-2 rounded-lg  text-center font-semibold text-xl sm:text-2xl bg-white'>
                        <a href="#" className='group-hover:text-white duration-500'>CONTINUE SHOPPING</a>
                    </div>
                </Link>
            </div>) )
        }
    </section>
  )
}

export default Cart