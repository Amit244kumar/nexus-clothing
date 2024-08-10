import React, { useState } from 'react'
import { useRef } from 'react';
import Slider from '../components/home/HeaderSlider'
import { Link, useOutletContext } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import service from '../appwriteConfig/addToCartConfig';
import {slides,category,price,clothes} from '../clothsCatogaries'

var randomClothes=[
    {id:8,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/crop-top/summer-girl-portrait-greens-young.jpg",price:500,rating:3,title:"white half top"}
   ,{id:5,description:"light weight top for summer",productType:"summer wear",image:"img/womens/summer/crop-top/medium-shot-smiley-woman-wearing-hat_23-2149512428.avif",price:800,rating:4,title:"blue full top"}
   ,{id:2,description:"light weight top for summer",productType:"summer wear",image:"img/womens/summer/crop-top/beautiful-cute-blond-teenager.avif",price:800,rating:4,title:"white T-shirt top"}
   ,{id:6,description:"pink sweater like top",productType:"summer wear",image:"img/womens/summer/crop-top/skater-girl-holding-board-neck_23-2147670703.avif",price:400,rating:3,title:"pink top"}
   ,{id:1,description:"white printed fruit",productType:"summer wear",image:"img/womens/summer/crop-top/attractive-smiling-woman.avif",price:600,rating:3,title:"white top"}
   ,{id:2,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/mini-dress/barefoot-teen-with-yellow-dress_1139-101.avif",price:2600,rating:5,title:"yello mini dress"}
   ,{id:1,description:"full pleated skirt",productType:"summer wear",image:"img/womens/summer/mini-dress/asian-woman-holding-eco-friendly-mesh-shopper_273443-607.avif",price:2500,rating:3,title:"pleated skirt"}
   ,{id:8,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/mini-dress/portrait-stylish-happy-cute-smiling.avif",price:3000,rating:5,title:"short mini dress"}
   ,{id:15,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/mini-dress/young-girl-with-pink-skirt-posing-with-sung.avif",price:2700,rating:4,title:"pink mini dress"}
   ,{id:12,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/mini-dress/young-caucasian-calm-happy-pretty-woman-with.jpg",price:2500,rating:4,title:"yello mini dress"}
   ,{id:10,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/shorts/young-traveler-sitting-swing_23-2147641181.avif",price:400,rating:4,title:"Gray shorts "}
   ,{id:1,description:"womens shaded shorts for summer",productType:"summer wear",image:"img/womens/summer/shorts/blonde-girl-standing-street-posing_23-2147652241.avif",price:500,rating:4,title:"shaded shorts"}
   ,{id:5,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/shorts/girl-with-hat-stool_23-2147811532.avif",price:900,rating:5,title:"blue cuted shorts"}
   ,{id:4,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/shorts/female-with-dog-walking-down-street_1301-2396.avif",price:600,rating:4,title:"skiny shorts "}
   ,{id:9,description:"Lorem ipsum dolor sit amet.",productType:"summer wear",image:"img/womens/summer/shorts/young-fit-fashionably-dressed-asian-woman-shorts-bright-blouse-posing-urban-street_1098-17351.avif",price:900,rating:5,title:"shaded shorts"}
   ,{id:4,description:"casual wearing hoodie",productType:"winter wear",image:"img/womens/winter/hoodies/full-shot-young-woman-sitting-couch_23-2149359826.avif",price:1500,rating:5,title:"white hoodie"}
   ,{id:3,description:"chain hoodie with cap",productType:"winter wear",image:"img/womens/winter/hoodies/cute-girl-with-seductive-way-looking_23-2147633746.avif",price:1200,rating:3,title:"gray hoodie"}
   ,{id:10,description:"Lorem ipsum dolor sit amet.",productType:"winter wear",image:"img/womens/winter/hoodies/portrait-cute-woman-with-long-hair_1153-6133.avif",price:1900,rating:4,title:"dark green hoodie"}
   ,{id:12,description:"Lorem ipsum dolor sit amet.",productType:"winter wear",image:"img/womens/winter/hoodies/portrait-young-smiling-brunette-model-city-winter-wearing.avif",price:1600,rating:5,title:"pink hoodie"}
   ,{id:14,description:"Lorem ipsum dolor sit amet.",productType:"winter wear",image:"img/womens/winter/hoodies/smiling-woman-with-beanieposing_23-2148382782.avif",price:1000,rating:5,title:"yellow hoodie"}
]

function Womens({cate}){
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
                description: cart.description?cart.description:"Lorem ipsum dolor sit.",
                rating:cart.rating,
                price:String(cart.price),
                imageUrl:cart.image,
                quantity:1,
                userId:userData.$id,
            }

            const s=await service.add_item(finalCart)  
            setProgress(100)
            setLoading(null)
            
            if(s){
                //  toast.success("item added successfully")
            }
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
             <div  className='m-2 lg:hidden '>
                <i onClick={()=>{filterELe.current.style.left="0px" }} class="fa-solid fa-filter w-fit text-white text-2xl"></i>
            </div>
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
                <div className='w-full lg:block hidden '>
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
                                
                                <Link to="/product" state={{card}} >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
                                    bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">
                                        <img src={card.image}
                                        alt="Front of men&#039;s Basic Tee in black." 
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <span className='font-bold'> {card.title}</span>
                                            </h3>
                                            <p className="mt-1 text-sm width h-10 text-gray-500">{card.description}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">Rs {card.price}</p>
                                    </div>
                                </Link>
                                <div className="flex mb-1">{renderStars(card.rating)}</div>
                                <div className='p-3  text-center  cursor-pointer rounded-md bg-gray-200 hover:bg-gray-300 duration-300'
                                 onClick={()=>{addToCart(card,index)}}>
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
export default Womens