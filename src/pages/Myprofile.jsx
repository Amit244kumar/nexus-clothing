import React from 'react'
import { useSelector } from 'react-redux'


export default function myprofile() {
  const status=useSelector(state=>state.auth.status)
  const userData=useSelector(state=>state.auth.userData)
  const orderItems=useSelector(state=>state.auth.orderItems)
  
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
    <section className='pt-10 lg:p-28 mt-20'>
        <div className='bg-gray-950 p-6'>
          <h1 className='text-3xl text-white font-semibold'>My Acount</h1>
          <div className='p-5'>
            <p className='text-xl text-white font-mono'>{status?userData.name:""}</p>
            <p className='text-xl text-white font-mono'>{status?userData.email:""}</p>
          </div>
          <h1 className='text-3xl text-white font-semibold'>Your Order</h1> 
          {orderItems!=null && orderItems.length!=0?
            (<div className='flex text-white flex-wrap  w-full'>
            <div className='text-white overflow-auto scrollable-div w-full'>
                <div className='wi lg:w-full'>
                    <div className='flex mb-3 justify-between sm:px-10 pl-2 py-3 bg-slate-500'>
                        <div >
                            <p className='font-semibold'>PRODUCT</p>
                        </div>
                        <div className='w-24'>
                            <p className='font-semibold'>Title</p>
                        </div>
                        <div className='w-28'>
                            <p className='font-semibold'>PRICE</p>
                        </div>
                        <div className='w-36'>
                          <p className='font-semibold'>ORDER ID</p>
                        </div>
                        <div className='w-20'>
                          <p className='font-semibold'>DATE</p>
                        </div>
                    </div>
                    {orderItems.map((order,index)=>(
                      <div key={index} className=' flex border1 items-center p-2 sm:p-5 justify-between '>
                        <div className=' rounded-lg  items-center'>
                            <img src={order.image} className='rounded-lg' width={70} alt="" />
                        </div>
                        <div className='p-4 w-36'>
                            <p className=' text-base sm:text-xl font-semibold'>{status?order.title:""}</p>
                            <p className='flex text-base sm:text-xl'>{renderStars(order.rating)}</p>
                        </div>
                        <div className='p-4 '>
                            <p className='font-semibold'>Rs {status?order.price:""}</p>
                        </div>
                        <div className='p-4 '>
                            <p className='font-semibold'>{status?order.order_id:""}</p>
                        </div>
                        <div className='p-4 '>
                            <p className='font-semibold'>{status?order.date:""}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
            </div>):(<div  className=''>
               <p className='text-xl text-white font-semibold p-7'>you haven't place any order</p>
             </div>)
          }  
        </div>
    </section>
  )
}
