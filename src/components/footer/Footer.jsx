import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex flex-wrap justify-evenly p-6 bg-color'>
        <div>
            <div className='p-2'>
                <h1 className='text-white'>CONTACT US</h1>
            </div>
            <div className='flex'>
                <div className='m-2 '>
                    <div className=' pointer p-2 m-1 rounded-full border-white border'>
                        <i class="fa-solid fa-location-dot p-1 text-2xl text-white"></i>
                    </div>
                    <div className='pointer p-2 m-1 rounded-full border-white border'>
                        <i class="fa-solid fa-phone  p-1 text-2xl text-white"></i> 
                    </div>
                    <div className='pointer p-2 m-1 rounded-full border-white border'>
                        <i class="fa-solid fa-envelope  p-1 text-2xl text-white"></i>
                    </div>
                </div>
                <div className='m-2'>
                     <h1 className='p-3 color pointer' >Example@gmail.com</h1>
                     <h1 className='p-3 sm:mt-2 color pointer'>Shadipur Metro station, Delhi</h1>
                     <h1 className='p-3 sm:mt-3 color pointer'>(+92)32547-63585</h1>
                </div>
            </div>
        </div>
        <div>
            <div className='p-2'>
                <h1 className='text-white'>OUR OFFER</h1>
            </div>
            <div >
                <ul >
                    <li className='color p-1 pointer'>New Collection</li>
                    <li className='color p-1 pointer'>Best sellers</li>
                    <li className='color p-1 pointer pointer'>Manufacturers</li>
                    <li className='color p-1 pointer pointer'>New Products</li>
                    <li className='color p-1 pointer pointer'>Suplliers</li>
                    <li className='color p-1 pointer pointer'>Delivery & return</li>
                </ul>
            </div>
        </div>
        <div>
            <div className='p-2'>
                <h1 className='text-white'>OUR POLICY </h1>
            </div>
            <div>
                <ul>
                    <li className='color p-1 pointer'>Help & Contact</li>
                    <li className='color p-1 pointer'>Shipping & taxes</li>
                    <li className='color p-1 pointer'>Return Policy</li>
                    <li className='color p-1 pointer'>Careens</li>
                    <li className='color p-1 pointer'>Affiliates</li>
                    <li className='color p-1 pointer'>Legal Notice</li>
                </ul>
            </div>
        </div>
        <div>
            <div className='p-2'>
                <h1 className='text-white'>GET IN TOUCH</h1>
            </div>
            <div className='flex'>
                <input type="text" placeholder='Email' className=' w-32 sm:w-52 p-1 pl-2 text-white outline-none   bg-slate-900 rounded-l-2xl' />
                <p className='
                text-white 
                duration-300 
                bg-gray-950 
                hover:bg-gray-800 
                cursor-pointer 
                rounded-r-2xl 
                text-base
                p-2'>SUBSCRIBE</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer