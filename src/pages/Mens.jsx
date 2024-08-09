import React, {  useState } from 'react'
import { useRef } from 'react';
import Slider from '../components/home/HeaderSlider'
import { Link, useOutletContext } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import service from '../appwriteConfig/addToCartConfig';
import  {slides,category,price,clothes} from '../clothsCatogaries'


const randomClothes=[
    {id:4,description:"casual waering",productType:"winter wear",image:"img/mens/winter/Hoodies/full-shot-man-with-electric-scooter-outdoors_23-2149356847.avif",price:2300,rating:5,title:"white hoodie"},
    {id:14,description:"man wearing hoodie type shirt",productType:"winter wear",image:"img/mens/winter/Hoodies/vacation-water-man-sex-portrait_1303-543.avif",price:1180,rating:3,title:"hoodie type shirt"},
    {id:5,description:"light clothe hoodie",productType:"winter wear",image:"img/mens/winter/Hoodies/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.avif",price:1600,rating:4,title:"light black hoodie"},
    {id:13,description:"Fashion sweatshirt ",productType:"winter wear",image:"img/mens/winter/Hoodies/skater-wearing-trucker-hat_23-2149431167.avif",price:1880,rating:2,title:"light purple hoodie"},
    {id:7,description:"winter hoodie sweatShirt",productType:"winter wear",image:"img/mens/winter/Hoodies/man-near-green-leaves-background_23-2147805544.avif",price:1800,rating:5,title:"light purple hoodie"},
    {id:3,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/shorts/front-view-man-holding-cap-city_23-2148296631.avif",price:200,rating:5,title:"shaded brown short"},
    {id:1,description:"light weight short for summer",productType:"summer wear",image:"img/mens/summer/shorts/fourteenf.webp",price:400,rating:3,title:"black short"},
    {id:11,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/shorts/sixthimgf.webp",price:500,rating:4,title:"blue short"},
    {id:14,description:"long type shorts",productType:"summer wear",image:"img/mens/summer/shorts/young-tourist-posing_23-2147643237.avif",price:400,rating:4,title:"khaki shorts"},
    {id:2,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/shorts/fourthimgf.webp",price:500,rating:3,title:"khaki shorts "},
    {id:15,description:"white and blue jeans with narrow ans holes",productType:"winter wear",image:"img/mens/winter/jeans/young-handsome-caucasian-man_20279-4587.avif",price:1000,rating:2,title:"white blue jeans"},
    {id:3,description:"business fashion casual jeans",productType:"winter wear",image:"img/mens/winter/jeans/business-fashion-casual-clothing.avif",price:1200,rating:5,title:"formal jeans "},
    {id:14,description:"narrow jeans with  shaded and holes",productType:"winter wear",image:"img/mens/winter/jeans/upset-guy-standing-against-wall-background_132075-8946.avif",price:1300,rating:1,title:"dark blue jeans"},
    {id:4,description:"wide black jeans ",productType:"winter wear",image:"img/mens/winter/jeans/front-view-man-usa-flea-market_23-2149536947.avif",price:1200,rating:5,title:"black jeans "},
    {id:1,description:"narrow blue jeans with shades",productType:"winter wear",image:"img/mens/winter/jeans/african-man-wear-tie-casual-outfit-posing-outdoor-with-mobile-phone_151355-10930.avif",price:700,rating:3,title:"shaded jeans"},
    {id:11,description:"cotton black shaded sweater",productType:"winter wear",image:"img/mens/winter/Sweater/portrait-handsome-fashion-stylish.avif",price:1100,rating:3,title:"black dotted sweater"},
    {id:6,description:"gray sweat sweater ",productType:"winter wear",image:"img/mens/winter/Sweater/fashion-portrait-young-caucasian-man-handsome.avif",price:500,rating:3,title:"gray sweater "},
    {id:15,description:"brown and white collar sweater",productType:"winter wear",image:"img/mens/winter/Sweater/portrait-young-peson-with-their-frinds_23-2149290136.avif",price:1000,rating:2,title:"long collar sweater"},
    {id:16,description:"green shade sweater",productType:"winter wear",image:"img/mens/winter/Sweater/Sorrento6.webp",price:1600,rating:5,title:"sorrento sweater"},
    {id:4,description:"high neck double shaded sweater",productType:"winter wear",image:"img/mens/winter/Sweater/curly-haired-man-with-brown-blouse-posing_23-2148892054.avif",price:800,rating:5,title:"high neck sweater"},
    {id:4,description:"Lorem ipsum dolor sit amet ",productType:"winter wear",image:"img/mens/winter/Sweater/curly-haired-man-with-brown-blouse-posing_23-2148892054.avif",price:200,rating:3,title:"brown"},
    {id:2,description:"Lorem ipsum dolor sit amet",image:"/img/mens/summer/shirt/ninef.webp",price:500,rating:3,title:"white shirt"},
    {id:5,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/shirt/tewntyf.webp",price:8400,rating:5,title:"gray shirt"},
    {id:1,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/mens/summer/shirt/eightimgf.webp",price:400,rating:3,title:"white shirt"},
    {id:6,description:"Lorem ipsum dolor sit amet ",productType:"winter wear",image:"img/mens/winter/Sweater/curly-haired-man-with-brown-blouse-posing_23-2148892054.avif",price:200,rating:3,title:"brown shirt"},
    {id:6,description:"no sleeve jacket with highneck",productType:"winter wear",image:"img/mens/winter/jackets/no-sleap-jacket-black.avif",price:1600,rating:5,title:"black jacket "},
    {id:7,description:"heavy white jacket wiht no sleeve",productType:"winter wear",image:"img/mens/winter/jackets/no-sleap-jacket-white.avif",price:900,rating:3,title:"white jacket"},
    {id:13,description:"jacket with cotton clothe with two color",productType:"winter wear",image:"img/mens/winter/jackets/young-man-enjoying-his-life-offline_23-2149295256.avif",price:1500,rating:3,title:"heavy white jacket"},
    {id:1,description:"full sleeve jacket",productType:"winter wear",image:"img/mens/winter/jackets/full-sleap-jacket-brown.avif",price:1000,rating:4,title:"brown jacket"},
    {id:9,description:"Trench coats with long style",productType:"winter wear",image:"img/mens/winter/jackets/Trench-coats-dark shade-of-brown.avif",price:2000,rating:5,title:"dark shade of brown"},
    {id:1,description:"light weight shirt for summer",productType:"summer wear",image:"img/mens/summer/T-shirts/fifthimgf.webp",price:400,rating:3,title:"white T-shirt"},
    {id:4,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/T-shirts/man-carrying-laptop-outdoors_23-2148022785.avif",price:300,rating:3,title:"check T-shirts"},
    {id:3,description:"Lorem ipsum dolor sit amet",productType:"summer wear",image:"img/mens/summer/T-shirts/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14981.avif",price:200,rating:5,title:"blue check T-shirt"},
    {id:5,description:"half sleeve t-shirts",productType:"summer wear",image:"img/mens/summer/T-shirts/man-traveling-discovering-new-places_23-2149124774.avif",price:400,rating:5,title:"white T-shirt"},
    {id:8,description:"heavy weight shorts",productType:"summer wear",image:"img/mens/summer/T-shirts/sixteenf.avif",price:400,rating:5,title:"black T-shirt"},
]


function Mens({cate}){
    const handleValue=useOutletContext()  
    const filterELe=useRef(null)
    const [cart,setCart]=useState(randomClothes)
    const [progress, setProgress] = useState(0)
    const [loading,setLoading]=useState(null)
    const [title,setTitle]=useState("All Type Clothes")
    const status=useSelector(state=>state.auth.status)
    const userData=useSelector(state=>state.auth.userData)
    const cartData=useSelector(state=>state.auth.cartData)

    const addToCart=async (cart,index)=>{ 
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
            setLoading(index)
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
            setLoading(null)
            handleValue(true)
        }
    }
    const applyFilter=(index)=>{
        const allfilter=document.querySelectorAll(screen.width <= 1024?'.Filter':'.filter')
        let cateCart=null
        let cateTitle=null 
        allfilter.forEach((filter,i)=>{
         if(index == i)
         {
             if(!category[cate][index].isAppliedFilter){
                filter.style.backgroundColor="#92a0b682"
                category[cate][index].isAppliedFilter=true
                cateCart=clothes[cate][index]
                cateTitle=filter.innerHTML
             }
             else{
                allfilter[index].style.backgroundColor=""
                category[cate][index].isAppliedFilter=false
                cateCart=randomClothes
                cateTitle="All Type Clothes"
            }
            if(screen.width <= "1024"){
                filterELe.current.style.left="-256px"
            }
         }
         else{
            if(category[cate][i].isAppliedFilter){
                allfilter[i].style.backgroundColor=""
                category[cate][i].isAppliedFilter=false
            }
         }
       }) 
       setCart(cateCart)
       setTitle(cateTitle)  
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
    <>
      <Slider slides={slides[cate]} />
      <LoadingBar color='#f11946' progress={progress}  />
      <ToastContainer />
      <section className='py-3 m-3'>
        <div ref={filterELe} className='lg:hidden w-64 p-1 pl-5 duration-500 bg-black h-full z-10 fixed top-0 -left-64'>
            <div onClick={()=>{filterELe.current.style.left="-256px"}} className='w-full mt-1'>
                <h1 className='float-right mr-1'><i class="fa-solid fa-x text-2xl text-white" ></i></h1>
            </div>
            <div className='w-full '>    
                <h1 className='text-white w-16 text-2xl mb-1'>Category</h1>
                <hr />
                <div className='p-2 pl-3 text-center mr-7 m-auto'>
                    <ul className='max-w-36'> 
                        {category[cate].map((ct,index)=>(
                            <li key={index} onClick={()=>{applyFilter(index)}} className='Filter cursor-pointer hover:bg-slate-600 m-1 p-1 
                            rounded-2xl border-white border text-white text-center'>{ct.cat}  </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-white w-fit text-2xl mb-1'>Price Range</h1>
                <hr />
                <div className='w-full m-auto pt-2'>
                   <div className='flex w-36 justify-center  flex-wrap'>
                        {price.map((pr,index)=>
                            <p key={index} className='cursor-pointer w-56 hover:bg-slate-600 m-1 p-1 
                            rounded-2xl border-white border text-white text-center'>Rs {pr.rate.min}-{pr.rate.max}</p>
                         )}        
                    </div>
                </div>
            </div>
        </div>
        <div className='sm:px-8 flex justify-center lg:justify-between w-full'>
            <div  className='m-2 lg:hidden '>
                <i onClick={()=>{filterELe.current.style.left="0px" }} class="fa-solid fa-filter w-fit text-white text-2xl"></i>
            </div>
            <div className='max-w-72 lg:sticky lg:top-10 h-fit p-3 lg:block hidden fixed'>
                <div className='w-full'>    
                    <h1 className='text-white w-32 text-4xl mb-3'>Category</h1>
                    <hr />
                    <div className='p-2 pl-3'>
                        <ul className='max-w-72'> 
                            {category[cate].map((ct,index)=>(
                                 <li key={index} onClick={()=>{applyFilter(index)}} className='filter cursor-pointer hover:bg-slate-600 m-1 p-1 
                                rounded-2xl border-white border text-white text-center'>{ct.cat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:block hidden'>
                    <h1 className='text-white w-fit text-4xl mb-3'>Price Range</h1>
                    <hr />
                    <div className=''>
                        <div className='flex w-72 justify-evenly flex-wrap'>
                        {price.map((pr,index)=>
                            <p key={index}  onClick={()=>{applyPrice(index)}} className='price cursor-pointer w-56 hover:bg-slate-600 m-1 p-1 
                            rounded-2xl border-white border text-white text-center'>Rs {pr.rate.min}-{pr.rate.max}</p>
                         )} 
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
                    <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">{title}</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        {cart.map((card,index)=>(
                            <div className="" key={index}>
                                
                                <Link to='/product' state={{card}} >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
                                    bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">
                                        <img src={card.image}
                                        alt="Front of men&#039;s Basic Tee in black." 
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <span className='font-bold'>{card.title}</span>
                                            
                                            </h3>
                                            <p className="mt-1 text-sm width h-10 text-gray-500">{card.description}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">Rs {card.price}</p>
                                    </div>
                                </Link>
                                <div className="flex mb-1">{renderStars(card.rating)}</div>
                                <div className='p-3  text-center cursor-pointer rounded-md bg-gray-200 hover:bg-gray-300 duration-300'
                                 onClick={()=>{addToCart(card,index)}}  >
                                    {loading == index?
                                        <div class="flex flex-row gap-2 justify-center  ">
                                            <div class="w-3 h-3 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                            <div class="w-3 h-3 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                                            <div class="w-3 h-3 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                                        </div>:
                                        <button id={index} className=' text-center'>add to cart</button>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              
            </div>
        </div>
      </section>
    </>
  )
}
export default Mens