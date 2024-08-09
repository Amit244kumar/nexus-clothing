import React, { useState, useRef, useEffect } from 'react';
import service from '../../appwriteConfig/addToCartConfig'; 
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
const cards = [
    {
        id: 1,
        image: 'img/mens/thirteenf.webp',
        title: 'Jasper Tote large',
        rating: 5,
        price: 1200,
        
    },
    {
        id: 2,
        image: 'img/mens/tewntyb.webp',
        title: 'Reginald Organic Tee',
        rating: 3 ,
        price: 500,
        
    },
    {
        id: 3,
        image: 'img/mens/tenb.webp',
        title: 'Staten Jacket',
        rating: 4 ,    
        price: 600,
        
    },
    {
        id: 4,
        image: 'img/mens/sixthimgb.webp',
        title: 'Short pents',
        rating: 5     , 
        price: 300,
        
    },
    {
        id: 5,
        image: 'img/mens/sixteenb.avif',
        title: 'Smith Long sleeve jacket',
        rating: 4,
        price: 600,
        
    },
    {
        id: 6,
        image: 'img/mens/shorts2.webp',
        title: 'Short pents',
        rating: 4,
        price: 350,
        
    },
    {
        id: 7,
        image: 'img/mens/seventimgb.webp',
        title: 'Half sleeve shirt',
        rating: 5,
        price: 800,
        
    },
    {
        id: 8,
        image: 'img/mens/seventeenb.webp',
        title: 'Half sleeve shirt',
        rating: 4,
        price: 450,
        
    },
    {
        id: 9,
        image: 'img/mens/secondimgb.webp',
        title: 'Heavy weight Tee',
        rating: 5,
        price: 1000,
        
    },
    {
        id: 10,
        image: 'img/mens/nineteenb.avif',
        title: 'jasper Tote Large',
        rating: 4,
        price: 550,
        
    },
    {
        id: 11,
        image: 'img/mens/nineb.webp',
        title: 'Bubble Tea',
        rating: 4,
        price: 700,
        
    },
    {
        id: 12,
        image: 'img/mens/fourthimgb.webp',
        title: 'Bubble Tea',
        rating: 4,
        price: 560,
        
    },
    {
        id: 13,
        image: 'img/mens/fourteenb.webp',
        title: 'Bubble Tea',
        rating: 4,
        price: 880,
        
    }
];

function Carousel() {
    const [progress, setProgress] = useState(0)
    const handleValue=useOutletContext()
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);
    const status=useSelector(state=>state.auth.status)
    const userData=useSelector(state=>state.auth.userData)
    const cartData=useSelector(state=>state.auth.cartData)
    const addToCart=async (cart)=>{ 
        if(!status)
        {
            toast.error("please login first")
        }
        else{
            for(const c in cartData)   {  
                if(cartData[c].imageUrl === cart.image){
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

            await service.add_item(finalCart)  
            
            setProgress(100)
            handleValue(true)
        }
    }
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDown(false);
        };

        const handleTouchMove = (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDown, startX, scrollLeft]);
    
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
    <>
        <div className='w-fit my-12 m-auto'>
            <h1 className='text-white font-bold text-xl sm:text-3xl'>Our Daily selling Products</h1>
            <hr className='text-white' /> 
        </div>
    <LoadingBar color='#f11946' progress={progress}  />
    <ToastContainer />
        <div
            ref={carouselRef}
            onMouseDown={(e) => {
                setIsDown(true);
                setStartX(e.pageX - carouselRef.current.offsetLeft);
                setScrollLeft(carouselRef.current.scrollLeft);
            }} 
            onTouchStart={(e) => {
                setIsDown(true);
                setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
                setScrollLeft(carouselRef.current.scrollLeft);
            }}
            onMouseLeave={() => setIsDown(false)}
            onMouseUp={() => setIsDown(false)}
            onTouchEnd={() => setIsDown(false)}
            className="overflow-hidden scrollbar-hide mb-4 relative px-0.5"
        >
            <div id='parent'  className="flex gap-4 md:gap-6 lg:gap-8">
                {cards.map((card) => (
                    <div key={card.id} className="flex-none w-60 sm:w-48 md:w-64 snap-center">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm">
                            <Link to="/product" state={{card}} >
                               <img  src={card.image} alt={card.title} className="w-full h-80 object-cover" />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-lg leading-6 font-bold text-gray-900">{card.title}</h3>
                                <div className="flex mt-2">{renderStars(card.rating)}</div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-extrabold text-gray-900">Rs {card.price}</span>
                                    <button onClick={()=>{addToCart(card)}}
                                        title='add to cart'
                                        className="cursor-pointer text-white bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default Carousel;
