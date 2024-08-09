import React from 'react'
import {  ShoppingBag } from 'lucide-react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import conf from '../config/config';
import { Link } from 'react-router-dom';
import orders from '../appwriteConfig/orderedItem';
import { useNavigate } from 'react-router-dom';

function CheckOut() {
    const location=useLocation()
    const Navigate=useNavigate()
    const {cartData,total,card,quantity,price,status,userData}=location.state || {};
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
    
    const [data, setData] = useState({
        name: status?userData.name:"",
        email: status?userData.email:"",
        phone: "",
        address: "",
        city:"",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const submit = (e) => {
         e.preventDefault(); 
        if(!status){
          
          toast.error("please login first")
          return 
        }
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
          city:data.city,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };        
        const options = {
          key: conf.rezorpayIDKey,
          key_secret:conf.rezorpaySecretKey,
          amount: parseInt((card?price:total)+99) * 100,
          currency: "INR",
          name: "Nexus",
          description: "for testing purpose",
          image:"logo/nexus.png",
          prefill: {
            contact: data.phone, // Example phone number
          },
          handler: async function (response) {
            let order=[]
            if(cartData){
                for(let c of cartData){
                    order.push({
                      title:c.title,
                      image:c.imageUrl,
                      price:String(c.price),
                      rating:Number(c.rating),
                      order_id:response.razorpay_payment_id,
                      date:new Date().toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      }),
                      user_id:status?userData.$id:""   
                    })
                }
            }
            else{
                order.push({
                  title:card.title,
                  image:card.image,
                  price:String(card.price),
                  rating:Number(card.rating),
                  order_id:response.razorpay_payment_id,
                  date:new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }),
                  user_id:status?userData.$id:""   
                }) 
            }
            setData({
              name: "",
              email: "",
              phone: "",
              address: "",
              state: "",
              pincode: "",
              city:""
            });
            for(let e of order){
              await orders.add_order(e)
            }
            order.splice(0,order.length)
            Navigate('/myprofile')
          },
          theme: {
            color: "#07a291db",
          },
        };
    
        const pay = new window.Razorpay(options);
        pay.on('payment.failed',function(){
          alert("payment failed")
        })
        pay.open();  
    };
  return (
    <>
       <header className='w-full p-10 pb-2 bb '>
        <div className='flex  m-auto justify-between items-center max-w-5xl'>
            <Link to='/'> 
            <div className='max-w-12  sm:max-w-20 rounded-e-xl overflow-hidden ml-2'>
                <img src="logo/nexus1.png" alt="logo" />
            </div>  
            </Link>
            <Link to="/cart">
              <div className='text-white cursor-pointer '>
                  <ShoppingBag />
              </div>
            </Link>
        </div>
       </header>
       <section className='w-full p-3 sm:p-6 pt-0'>
        <ToastContainer />
        <div className='flex max-w-6xl justify-center m-auto xl:flex-nowrap flex-wrap-reverse '>
            <div className='text-white w-full p-2 sm:p-5'>
                <form onSubmit={submit}>
                    <div className='w-full'>
                        <div className='flex justify-between px-2 py-1 '>
                            <h1 className='sm:text-2xl'>Contact</h1>
                            { !status &&  <Link to="/login"><p className='underline'>Log in</p></Link>}
                        </div>
                        <input className='w-full p-2 bg-black border1 text-white outline-none rounded-md' type="email" placeholder='Email' 
                            onChange={handleChange}
                            value={data.email}
                            required
                            name="email"
                        />
                        <div className='pl-3 flex'>
                            <input  type="checkbox"  className='rouned-lg mt-1 h-8 w-4'/>
                            <p className='m-2 '>Email me with news and offers</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='sm:text-2xl ml-2 '>Delivery</h1>
                        <div className='w-full py-4'>
                            <select  name="" id="" required className='outline-none rounded-md w-full p-2 border1 bg-black'>
                                <option value="" disabled selected hidden>Country/Region</option>
                                <option value="India">India</option>
                            </select>
                        </div>
                        <div className='w-full py-4'>
                            <input type="text"  placeholder='name' className='outline-none rounded-md w-full p-2 border1 bg-black ' 
                              value={data.name}
                              onChange={handleChange}
                              required
                              name="name"
                            />
                        </div>
                        <div className='w-full py-4'>
                            <input type="text" placeholder='address' className='outline-none rounded-md w-full p-2 border1 bg-black '
                               onChange={handleChange}
                               value={data.address}
                               required
                               name="address"
                            />
                        </div>
                        <div className='w-full py-4'>
                            <input type="text" placeholder='apartment, suite,etc. (optional)' className='outline-none rounded-md w-full p-2 border1 bg-black' />
                        </div>
                        <div className='flex w-full sm:flex-nowrap  flex-wrap'>
                            <input type="text" className='outline-none rounded-md w-full p-2 m-2 ml-0 mr-0 sm:mr-2 border1 bg-black' placeholder='City' 
                              onChange={handleChange}
                              value={data.city}
                              required
                              name="city"
                            />
                            <input type="text"className='outline-none rounded-md w-full p-2 m-2 mx-0 sm:mx-2 border1  bg-black'  placeholder='state'
                              onChange={handleChange}
                              value={data.state}
                              required
                              name="state"
                            />
                            <input type="number" className='outline-none rounded-md w-full p-2 m-2 ml-0 mr-0 sm:mr-2 border1 bg-black'  placeholder='PIN Code'
                              onChange={handleChange}
                              value={data.pincode}
                              required
                              name="pincode"
                            />
                        </div>
                        <div className='flex w-full'>
                            <input type="number" className='outline-none rounded-md w-full p-2 m-2 ml-0 border1 bg-black' 
                            onChange={handleChange}
                            value={data.phone}
                            required
                            name="phone"
                            placeholder='Phone'/>
                        </div>
                        <div className='flex p-2'>
                            <input  type="checkbox" className='rouned-lg mt-1 h-8 w-4 '/>
                            <p className='m-2 '>Save this information for next time</p>
                        </div>
                    </div>
                    <div className='w-full cursor-pointer'>
                        <input type="submit"  value="Place Order" className=' cursor-pointer duration-500 rounded-md w-full p-2
                         text-black hover:text-white  border1 bg-white hover:bg-black text-2xl font-bold '  />
                    </div>
                </form>
            </div>
            <div className='text-white bg-gray-500 h-fit w-full p-2 sm:p-5'>
                {
                  card &&
                  <div className='flex justify-between '>
                    <div className='flex p-2'>
                        <div className='rounded-lg overflow-hidden '>
                          <img src={card.image} width={60} alt="product" /> 
                        </div>
                        <div className='p-2 px-4 mr-4'>
                            <p className='mb-1'>{card.title}</p>
                            <p className='flex'>{renderStars(card.rating)}</p>
                            <p className='flex'>Quantity: {quantity}</p>
                        </div>
                    </div>
                    <div className='p-2'>
                      <p className='w-12'>Rs {price}</p>  
                    </div>
                  </div>
                }
                {
                  cartData &&
                  cartData.map((card)=>(
                    <div className='flex justify-between border-b'>
                      <div className='flex p-2'>
                        <div className='rounded-lg overflow-hidden '>
                           <img src={card.imageUrl} width={60} alt="product" /> 
                        </div>
                        <div className='p-2 px-4 mr-4'>
                            <p className='mb-1'>{card.title}</p>
                            <p className='flex'>{renderStars(card.rating)}</p>
                            <p className='flex'>Quantity: {card.quantity}</p>
                        </div>
                      </div>
                      <div className='p-2'>
                        <p className='w-12'>Rs {card.price}</p>  
                      </div>
                    </div>
                  ))
                }
                <div className=' flex justify-between'> 
                    <div className=' w-full p-2'>
                        <input type="text" className='w-full p-2 rounded-md outline-none bg-slate-200 text-slate-600 '  placeholder='Discount code or gift card' />
                    </div>
                    <div className=' bg-slate-600  m-2 p-2 rounded-md cursor-pointer'>
                        <p className=''>Apply</p>
                    </div>
                </div>
                <div className='flex w-full justify-between p-2 '>
                    <div >
                        <p className='text-gray-300'>subtotal</p>
                        <p className='text-gray-300'>Shipping</p>
                        <h1 className=''>Total</h1>
                    </div>
                    <div>
                        <p className='text-gray-300'>Rs {card?price:total}</p>
                        <p className='text-gray-300'>Rs 99</p>
                        <p>INR Rs {Number(card?price:total)+99}</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default CheckOut