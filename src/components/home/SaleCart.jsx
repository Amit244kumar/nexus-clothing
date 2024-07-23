import React from 'react'
import { Link } from 'react-router-dom'
function SaleCart({url,imgUrl,gender}) {
  return (
    <>
        <div className='relative max-w-96 m-6 overflow-hidden'>
            <div className='relative  sm:bg-gray-500 ease-linear duration-500 hover:bg-gray-100 hover:scale-110'>
                <img
                  src={imgUrl}
                  alt={gender}
                  className='ease-in sm:mix-blend-multiply duration-300 '
                />
                <div className='absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-50 text-white'>
                  <div className='max-w-96 text-center py-10 px-16 mb-10 colletion'>
                      <p className='font-light tracking-wide text-lg sm:text-3xl'>{gender}'s fashion</p>
                      <h1 className='font-light tracking-widest text-base sm:text-xl'>mid season sale</h1>
                       <div className='w-fit m-auto'>
                       <hr className='w-28'/>
                       </div>
                      <Link to={url}><p>view collection</p></Link>
                  </div>
                </div>
              </div>
        </div>
    </>
  )
}

export default SaleCart