import React, { useState } from 'react'
import conf from '../config/config';
import { toast,ToastContainer } from 'react-toastify';
import {hoodies,jacket,jeans,sweater,shirt,shorts,Tshirt,croptop,minidress,WShorts,Whoodies} from '../clothsCatogaries'
import 'react-toastify/dist/ReactToastify.css';
function CheckOut({single=""}) {
    const [data, setData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      pincode: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
    const submit = (e) => {
      e.preventDefault();
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(data.email)) {
        return toast("Something is wrong ");
      }
  
      const shipping_address = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        state: data.state,
        pincode: data.pincode,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
  
      const options = {
        key: "rzp_test_W7DytJpx7FTfzE",
        key_secret:"vzcPUqr1vUN7Xw6AToiW1yoo",
        amount: parseInt(500) * 100,
        currency: "INR",
        name: "Nexus",
        description: "for testing purpose",
        image:"logo/nexus.png",
        prefill: {
          contact: data.phone, // Example phone number
        },
        handler: function (response) {
          const paymentId = response.razorpay_payment_id;
          console.log(response)
          console.log("Payment ID", paymentId, shipping_address);
          setData({
            name: "",
            email: "",
            phone: "",
            address: "",
            state: "",
            pincode: "",
          });
        },
        theme: {
          color: "#07a291db",
        },
      };
  
      const pay = new window.Razorpay(options);
      pay.open();

    };
  
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
      <>
        <section className='p-3'>
          <h1 className='w-fit m-auto p-2 bg-orange-400'>This is just the demo after completion of website it will generate dynamically</h1>
          <div className='flex md:flex-nowrap flex-wrap '>
          { !single?(
            <div className=' w-full m-auto'>
              <div className='flex flex-col p-4 cart-bg'>
                <div className='w-fit m-auto mb-2'>
                  <h1 className='text-3xl font-semibold text-white'>your cart items</h1>
                </div>
                <div className='max-h-96 scrollable-div overflow-auto  '>
                    {minidress.map((e)=>(
                      <div key={e.id} className='flex flex-row justify-between border-t-2 p-1 px-3'>
                      <div className='flex overflow-auto '>
                          <div className='w-28 overflow-hidden'> 
                            <img src={e.image} alt="" className='rounded-lg'/>   
                          </div> 
                          <div className='m-2'>
                            <h1 className='sm:text-lg  text-sm font-semibold sm:p-1 text-white'>{e.title}</h1>
                            <p className='sm:text-lg  text-sm sm:p-1 text-white'>{e.description}</p>
                            <div className="sm:p-1 flex sm:mb-1 ">{renderStars(e.rating)}</div>
                          </div>
                      </div>
                      <h1 className='font-semibold sm:text-xl text-sm text-white '>Rs {e.price}</h1>
                  </div>
                    ))}
                    
                </div>
                <div className=''>
                    <div className='flex justify-between p-2'>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>subtotal</h1>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>Rs 500</h1>
                    </div>
                    <div className='flex justify-between p-2 '>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>shipping</h1>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>Rs 99</h1>
                    </div>
                    <div className='flex justify-between border-t-2 p-2 '>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>Total</h1>
                      <h1 className='sm:text-xl text-base font-semibold text-white'>Rs 599</h1>
                    </div>
                </div>
              </div>
            </div>):(
            <div className=' w-full m-auto'>
              <div className='bg-slate-700 rounded-2xl overflow-hidden w-fit m-auto'>
                <img src="img/mens/summer/shorts/fourteenf.webp" className='w-fit m-auto' alt="" />
                <div className="mt-4 flex justify-between p-2">
                  <div className='w-fit'>
                    <h3 className="text-sm text-gray-700">
                      <span className='font-bold text-white sm:text-xl text-sm'>white T-shirt</span>
                    </h3>
                    <p className="mt-1 w-fit width sm:text-base text-xs text-white">black mens shorts for summer</p>
                    <div className="flex mb-1">{renderStars(4)}</div>
                  </div>
                  <div className='w-fit'>
                    <p className="text-sm sm:text-xl font-medium w-20 text-white">Rs 500</p>
                    <p className='text-white text-xs sm:text-base'>Shipping <span className='font-semibold'>Rs 50</span></p>
                    <p className='text-white text-xs sm:text-base'>Subtotal <span className='font-semibold'>Rs 550</span></p>
                  </div>
                </div>
              </div>
            </div>
)}
            <div className='w-full'>
              <div className='w-fit m-auto'>
                <h1 className='text-white text-3xl font-semibold'>Secure Checkout</h1>
              </div>
              <div className=''>
                <form className='max-w-2xl m-auto' onSubmit={submit}>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className='w-full outline-none p-2 rounded-lg input'
                      value={data.name}
                      onChange={handleChange}
                      required
                      name="name"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="email"
                      placeholder="Email"
                      className='w-full outline-none p-2 rounded-lg input'
                      onChange={handleChange}
                      value={data.email}
                      required
                      name="email"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="number"
                      placeholder="Phone"
                      className='w-full outline-none p-2 rounded-lg input'
                      onChange={handleChange}
                      value={data.phone}
                      required
                      name="phone"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="text"
                      placeholder="address"
                      className='w-full outline-none p-2 rounded-lg input'
                      onChange={handleChange}
                      value={data.address}
                      required
                      name="address"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="text"
                      placeholder="state"
                      className='w-full outline-none p-2 rounded-lg input'
                      onChange={handleChange}
                      value={data.state}
                      required
                      name="state"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="number"
                      placeholder="pincode"
                      className='w-full outline-none p-2 rounded-lg input'
                      onChange={handleChange}
                      value={data.pincode}
                      required
                      name="pincode"
                    />
                  </div>
                  <div className='sm:m-4 sm:my-8 my-3'>
                    <input
                      type="submit"
                      className='bg-blue-500 hover:bg-blue-700 duration-500 w-full outline-none p-2 rounded-lg input'
                    />
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default CheckOut;