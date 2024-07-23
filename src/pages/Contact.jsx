import React, { useRef, useState } from 'react'
import Input from '../components/Input'
function Contact() {
  
  return (
    <>
    <section>
        <div  className='flex justify-center '>
          <div className="w-full">
            <img src="img/store/store.jpg" className="sm:block hidden w-full h-96" />
            <img src="img/store/blurred-image-background-with-clothing-store_1045533-1343.avif" className="sm:hidden w-full sm:h-96 h-80" />
          </div>
          <div className="absolute text-white top-44 sm:top-64">
                <button className="p-3 px-7 rounded-full text-4xl">Contact</button>
          </div>
    </div>
    </section>
    <section className='sm:p-8 p-2'>
    <div className='w-full max-w-md m-auto'>
    <form className='flex flex-col'>
        <Input
            type="text"
            placeholder="Enter Name"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded"
        />
        <Input
            type="text"
            placeholder="Enter Email"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
            placeholder="Message"
            className="w-full rounded-xl resize-none mb-4 p-4 outline-none border border-gray-300"
            rows={5}
            id=""
        ></textarea>
        <Input
            type="submit"
            value="Submit"
            className="p-2 bg-blue-600 hover:bg-blue-800 duration-500 text-white cursor-pointer w-full text-center rounded"
        />
    </form>
</div>

        <div className=' w-full sm:w-10/12 m-auto'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4115.91895207893!2d77.15665191199945!3d28.65141553951922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721314760263!5m2!1sen!2sin" width="100%" height="450"
            style={{border:"1" ,"border-radius":"30px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
        </div>
    </section>
    </>
    
  )
}

export default Contact