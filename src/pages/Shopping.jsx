import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Slider from '../components/home/HeaderSlider'
import { Link } from 'react-router-dom';
// import randomClothes from '../components/randomClothes';
import {hoodies,jacket,jeans,sweater,shirt,shorts,Tshirt,croptop,minidress,WShorts,Whoodies} from '../clothsCatogaries'
const slides = {
    "mens":[{
        imgDesktop: "img/mens/young-friends-having-fun-together_23-2149560756.avif",
        imgMobile:  "img/mens/young-friends-having-fun-together_23-2149560758.jpg",
        title1: "",
        title2: "PARTY FASHION",
        description: "SAVE UP TO 30% OFF",
      },
      {
        imgDesktop: "img/mens/stylish-african-american-man-posing-with-copy-space_23-2148634101.jpg",
        imgMobile: "img/mens/african-american-man-looking-thoughtful_23-2148634064.jpg",
        title1: "",
        title2: "SUMMER SEASON",
        description: "SAVE UP TO 20% OFF",
      },
      {
        imgDesktop: "img/mens/model-sitting-front-door-staring-sideways_23-2148248461.jpg",
        imgMobile: "img/mens/portrait-young-guy-with-coat_23-2148248487.jpg",
        title1: "",
        title2: "WINTER SEASON",
        description: "SAVE UP TO 30% OFF",
      },],
    "womens":[
        {
            imgDesktop: "img/womens/woman-posing_1303-3773.jpg",
            imgMobile:  "img/womens/woman-posing_1303-3774.avif",
            title1: "",
            title2: "PARTY FASHION",
            description: "SAVE UP TO 30% OFF",
          },
          {
            imgDesktop: "img/womens/portrait-young-playful-woman-with-desktop-view.avif",
            imgMobile: "img/womens/full-height-asian-girl-mobile-view.avif",
            title1: "",
            title2: "SUMMER SEASON",
            description: "SAVE UP TO 20% OFF",
          },
          {
            imgDesktop: "img/womens/woman-outside-wooden-desktop-view.jpg",
            imgMobile: "img/womens/woman-outside-wooden-mobile-view.avif",
            title1: "",
            title2: "WINTER SEASON",
            description: "SAVE UP TO 30% OFF",
          },
    ]
};
const category=
  {
      "mens":[
          {
              cat:"hoodies",
              isAppliedFilter:false
          },
          {
              cat:"shorts",
              isAppliedFilter:false
          },
          {
              cat:"jeans",
              isAppliedFilter:false
          },
          {
              cat:"sweater",
              isAppliedFilter:false
          },
          {
              cat:"shirts",
              isAppliedFilter:false
          },
          {
              cat:"jacket",
              isAppliedFilter:false
          },
          {
              cat:"Tshirt",
              isAppliedFilter:false
          }
      ],
      "womens":[
          {
              cat:"Crop Top",
              isAppliedFilter:false
          },
          {
              cat:"Mini Dress",
              isAppliedFilter:false
          },
          {
              cat:"shorts",
              isAppliedFilter:false
          },
          {
              cat:"hoodies",
              isAppliedFilter:false
          },
      ]
}
const price=[
  {
      rate:{
          min:100,
          max:1000
      },
      active:false
  },
  {
      rate:{
          min:1000,
          max:2000
      },
      active:false
  },
  {
      rate:{
          min:2000,
          max:3000
      },
      active:false
  },
  {
      rate:{
          min:3000,
          max:4000
      },
      active:false
  },
]
const clothes={
    "mens":[hoodies,shorts,jeans,sweater,shirt,jacket,Tshirt],
    "womens":[croptop,minidress,WShorts,Whoodies],
}
const randomClothes=[]
const generateRandomClosthes=(cate)=>{
    clothes[cate].forEach((ctgr)=>{
        let length=ctgr.length
        let i=1
        let randomNumber=[]
        let j=undefined
        while(i<=5)
        {
             j=Math.floor(Math.random()*(length))
            if( !randomNumber.includes(j))
            {
                randomClothes.push(ctgr[j])
                randomNumber.push(j)
                i++;
            }
        }
    })
}
function Shopping({cate=''}) {
    randomClothes.splice(0,randomClothes.length)
    generateRandomClosthes(cate)
    const filterELe=useRef(null)
    const [cart,setCart]=useState(randomClothes)
    const [title,setTitle]=useState("All Type Clothes")
    const applyFilter=(index)=>{
        const allfilter=document.querySelectorAll(screen.width <= 1024?'.Filter':'.filter')
        allfilter.forEach((filter,i)=>{
         if(index == i)
         {
             if(!category[cate][index].isAppliedFilter){
                filter.style.backgroundColor="#92a0b682"
                category[cate][index].isAppliedFilter=true
                setCart(clothes[cate][index])
                setTitle(filter.innerHTML)
             }
             else{
                allfilter[index].style.backgroundColor=""
                category[cate][index].isAppliedFilter=false
                setCart(randomClothes)
                setTitle("All Type Clothes")
            }
            if(screen.width <= "1024"){
                filterELe.current.style.left="-256px"
                setOpen(true)
            }
         }
         else{
            allfilter[i].style.backgroundColor=""
            category[cate][i].isAppliedFilter=false
         }
       })   
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
      <section className='py-3 m-3'>
        <div ref={filterELe} className='lg:hidden w-64 p-1 pl-5 duration-500 bg-black h-full z-10 fixed top-0 -left-64'>
            <div onClick={()=>{filterELe.current.style.left="-256px"}} className='w-full mt-1'>
                <h1  className='float-right mr-1'><i class="fa-solid fa-x text-2xl text-white" ></i></h1>
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
            <div className='max-w-72 lg:sticky lg:top-10 h-fit p-3 fixed'>
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
                <div className='w-full'>
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
                                <div className="group relative" key={index}>
                                <Link to="/single-checkout" >
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
                                    bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={card.image}
                                    alt="Front of men&#039;s Basic Tee in black." 
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                            <Link to="/single-checkout">
                                                <span aria-hidden="true" className="absolute font-bold inset-0"></span>
                                                <span className='font-bold'> {card.title}</span>
                                            </Link>
                                            </h3>
                                            <p className="mt-1 text-sm width h-10 text-gray-500">{card.description}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">Rs {card.price}</p>
                                    </div>
                                
                                </Link>
                                <div className="flex mb-1">{renderStars(card.rating)}</div>
                                <div className='p-3  text-center rounded-md bg-gray-200 group-hover:bg-gray-300 duration-300' >
                                    <button className='text-center '>add to cart</button>
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
export default Shopping