import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer,toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import service from '../appwriteConfig/addToCartConfig'
import { Link } from 'react-router-dom'

function Product() {
    const location=useLocation()
    const [progress, setProgress] = useState(0)
    const handleValue=useOutletContext()  
    const {card}=location.state || {};
    const [quantity,setQuantity]=useState(1)
    const [price,setPrice]=useState(card.price)
    const status=useSelector(state=>state.auth.status)
    const userData=useSelector(state=>state.auth.userData)
    const cartData=useSelector(state=>state.auth.cartData)   
    console.log(card)
    const incremet=()=>{
        if(quantity>=1 && quantity<8){
            setQuantity(quantity+1)
            setPrice(price+card.price) 
            
        }
    }
    const decrement=()=>{
        if(quantity>1 && quantity<=8){
            setQuantity(quantity-1)
            setPrice(price-card.price)
            
        }
    }
    const addToCart=async (cart)=>{ 
        if(!status)
        {
             toast.error("please login first")
        }
        else{
            for(const c in cartData)   {  
                if(cartData[c].imageUrl === cart.image){
                    toast.error("item already added")
                    return 
                }   
            }
            setProgress(50)
            var finalCart={
                title:cart.title,
                description:cart.description?cart.description:"Lorem ipsum dolor sit.",
                rating:cart.rating,
                price:String(cart.price),
                imageUrl:cart.image,
                quantity:1,
                userId:userData.$id,
            }

            const s=await service.add_item(finalCart)  
            setProgress(100)
            // if(s){
            //      toast.success("item added successfully")
            // }
            handleValue(true)
            
        }
    }
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400">
                        <path d="M12 .587l3.668 7.568L23.5 9.748l-5.732 5.704L19.335 24 12 20.347 4.665 24l1.568-8.548L.5 9.748l7.832-1.593L12 .587z"/>
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27l-4.15 2.18 1.04-4.81-3.64-3.38 4.91-.43L12 7.25l1.84 3.82 4.91.43-3.64 3.38 1.04 4.81z"/>
                    </svg>
                );
            }
        }
        return stars;
    };
    return (
    <section className=' p-3 lg:p-10 relative top-12 mt-24'>
         <LoadingBar color='#f11946' progress={progress}  />
         <ToastContainer />
      <div className='flex p-3  lg:px-40 justify-around flex-wrap mb-10'>
        <div className='' >
           <div className='f1  rounded-lg overflow-hidden sticky top-8'>
              <img src={card.image} className='max-w-full' alt="" />
           </div>
        </div>
        <div className='text-white wid '>
            <div className='sm:p-3 sm:m-3 p-1'>
                <h1 className='sm:text-2xl text-xl font-semibold py-2'>{card.title}</h1>
                <p className='flex '>{renderStars(card.rating)} {card.rating} (5)</p>
            </div>
            <div  className='sm:p-3 sm:m-3 p-1'>
                <p className='font-normal font-serif'>Available in stock</p>
                <p className='font-normal font-serif'>Product type: <span className='font-bold text-gray-300'> {card.productType}</span></p>
                <p className='font-normal font-serif text-gray-300'>{card.description}</p>

            </div>
            <div className='sm:p-3 sm:m-3 p-1'>
                 <p className='font-normal text-lg font-serif'>Product description</p>
                 <p className='font-normal text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci voluptatem voluptas ipsa aspernatur quisquam nam aperiam rerum, accusantium aut ea laboriosam veritatis maxime ipsum harum? Commodi quia officiis ea.</p>
            </div>
            <div className='sm:p-3 sm:m-3 p-1'>
                <h1 className='font-normal text-xl '>Rs {card.price}</h1>
            </div>
            <div className='sm:p-3 sm:m-3 p-1'>
               <p className='font-normal font-serif mb-2'>Quantity:</p>
               <div className='flex gap-5 border w-fit p-1 px-3'>
                  <p className='text-2xl cursor-pointer selection:bg-none' onClick={decrement}>-</p>
                  <p className='text-2xl'>{quantity}</p>
                  <p className='text-2xl cursor-pointer selection:bg-none' onClick={incremet}>+</p>
               </div>
            </div>
            <div className='sm:p-3 sm:m-3 p-1'>
                <p className='text-base'>Subtotal: <span className='text-xl'>Rs {price}</span></p>
            </div>
            <div className='w-full'>
                <div className='group bg-white duration-500 hvr hover:border p-3 lg:m-5 mb-2 cursor-pointer' onClick={()=>{addToCart(card)}}>
                    <p className='font-bold text-xl duration-500 group-hover:text-white text-black text-center'>ADD TO CART</p>
                </div>
                <Link to='/checkout' state={{card,quantity,price,status,userData}}>
                    <div className='group  border duration-500 hover:bg-white p-3 lg:m-5 cursor-pointer '>
                        <p className='font-bold duration-500 group-hover:text-black text-xl text-center'>BUY IT NOW</p>
                    </div>
                </Link>
            </div> 
        </div>
      </div>
    </section>
    )
}

export default Product