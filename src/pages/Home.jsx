import React from 'react'
import SaleCart from '../components/home/SaleCart'
import Carousel from '../components/home/Carousel'
import Slider from '../components/home/HeaderSlider'
var slides = [
  {
    imgDesktop: "img/main/front-view-woman-posing-with-black-outfit.jpg",
    imgMobile: "img/main/women-mobile-view.jpg",
    title1: "new collection",
    title2: "WOMEN'S FASHION",
    description: "SAVE UP TO 30% OFF",
  },
  {
    imgDesktop: "img/main/backpack-against-black-background.jpg",
    imgMobile: "img/main/laughing-teenager-bright-shirt-standing-doorway.jpg",
    title1: "new collection",
    title2: "MEN'S FASHION",
    description: "SAVE UP TO 30% OFF",
  },
  {
    imgDesktop: "img/main/young-man-posing_desktop.jpg",
    imgMobile: "img/main/young-man-posing_mobile.avif",
    title1: "new collection",
    title2: "Summer season",
    description: "SAVE UP TO 30% OFF",
  },
  // Add more slides as needed
];

function Home() {
  
  return (
    <>
      {/* <div className='relative'>
        <div className='w-full ' style={{height:'40rem'}} > 
          <div className='absolute overflow-hidden' style={{height:'40rem'}} >
            <img src="img\main\front-view-woman-posing-with-black-outfit.jpg" alt=""
              className='sm:block hidden max-w-full '
            />
            <img src="img\main\women-mobile-view.jpg" alt=""
              className='sm:hidden max-w-full '
            />
          </div>
          <div className='relative text-white w-fit m-auto top-64 p-2 bft'>
              <div className='max-w-5xl text-center'>
                <h1 className='
                md:text-3xl 
                md:font-bold 
                md:tracking-wide
                sm:text-xl 
                sm:font-bold 
                sm:tracking-normal
                text-lg'>new collection</h1>
                <h1 className='
                md:text-8xl 
                md:tracking-wide
                sm:text-5xl 
                sm:tracking-wide 
                text-3xl'>WOMEN'S FASHION</h1>
                <p className='
                md:text-2xl 
                md:tracking-widest
                sm:text-xl 
                sm:tracking-wide
                tracking-normal 
                font-light bt' 
                >SAVE UP TO 30% OFF</p>
                <div className='mt-2 w-fit m-auto border-white '> 
                  <button className='p-3 px-7 rounded-full border-white border-2 btn'>Shop now</button>
                </div>
              </div>
          </div>
        </div>
        <div className='absolute w-full left1'>
          <div className='absolute overflow-hidden' style={{height:'40rem'}} >
            <img src="img\main\front-view-woman-posing-with-black-outfit.jpg" alt=""
              className='sm:block hidden max-w-full '
            />
            <img src="img\main\women-mobile-view.jpg" alt=""
              className='sm:hidden max-w-full '
            />
          </div>
          <div className='relative text-white w-fit m-auto top-64 p-2 bft'>
              <div className='max-w-5xl text-center'>
                <h1 className='
                md:text-3xl 
                md:font-bold 
                md:tracking-wide
                sm:text-xl 
                sm:font-bold 
                sm:tracking-normal
                text-lg'>new collection</h1>
                <h1 className='
                md:text-8xl 
                md:tracking-wide
                sm:text-5xl 
                sm:tracking-wide 
                text-3xl'>WOMEN'S FASHION</h1>
                <p className='
                md:text-2xl 
                md:tracking-widest
                sm:text-xl 
                sm:tracking-wide
                tracking-normal 
                font-light bt' 
                >SAVE UP TO 30% OFF</p>
                <div className='mt-2 w-fit m-auto border-white '> 
                  <button className='p-3 px-7 rounded-full border-white border-2 btn'>Shop now</button>
                </div>
              </div>
          </div>
        </div>
        <div className='absolute w-full left2'>
          <div className='absolute overflow-hidden' style={{height:'40rem'}} >
            <img src="img\main\front-view-woman-posing-with-black-outfit.jpg" alt=""
              className='sm:block hidden max-w-full '
            />
            <img src="img\main\women-mobile-view.jpg" alt=""
              className='sm:hidden max-w-full '
            />
          </div>
          <div className='relative text-white w-fit m-auto top-64 p-2 bft'>
              <div className='max-w-5xl text-center'>
                <h1 className='
                md:text-3xl 
                md:font-bold 
                md:tracking-wide
                sm:text-xl 
                sm:font-bold 
                sm:tracking-normal
                text-lg'>new collection</h1>
                <h1 className='
                md:text-8xl 
                md:tracking-wide
                sm:text-5xl 
                sm:tracking-wide 
                text-3xl'>WOMEN'S FASHION</h1>
                <p className='
                md:text-2xl 
                md:tracking-widest
                sm:text-xl 
                sm:tracking-wide
                tracking-normal 
                font-light bt' 
                >SAVE UP TO 30% OFF</p>
                <div className='mt-2 w-fit m-auto border-white '> 
                  <button className='p-3 px-7 rounded-full border-white border-2 btn'>Shop now</button>
                </div>
              </div>
          </div>
        </div>
        <div className='absolute w-full left3'>
          <div className='absolute overflow-hidden' style={{height:'40rem'}} >
            <img src="img\main\front-view-woman-posing-with-black-outfit.jpg" alt=""
              className='sm:block hidden max-w-full '
            />
            <img src="img\main\women-mobile-view.jpg" alt=""
              className='sm:hidden max-w-full '
            />
          </div>
          <div className='relative text-white w-fit m-auto top-64 p-2 bft'>
              <div className='max-w-5xl text-center'>
                <h1 className='
                md:text-3xl 
                md:font-bold 
                md:tracking-wide
                sm:text-xl 
                sm:font-bold 
                sm:tracking-normal
                text-lg'>new collection</h1>
                <h1 className='
                md:text-8xl 
                md:tracking-wide
                sm:text-5xl 
                sm:tracking-wide 
                text-3xl'>WOMEN'S FASHION</h1>
                <p className='
                md:text-2xl 
                md:tracking-widest
                sm:text-xl 
                sm:tracking-wide
                tracking-normal 
                font-light bt' 
                >SAVE UP TO 30% OFF</p>
                <div className='mt-2 w-fit m-auto border-white '> 
                  <button className='p-3 px-7 rounded-full border-white border-2 btn'>Shop now</button>
                </div>
              </div>
          </div>
        </div>
      </div> */}
      <Slider slides={slides} />
      <section className='p-5 w-fit m-auto'>
          <div className='flex flex-wrap justify-center'>
            <SaleCart 
                url="/womens" 
                imgUrl="img/womens/new-collection .jpg" 
                gender="women" 
            />
            <SaleCart 
                url="/mens" 
                imgUrl="img/mens/new-collection.jpg" 
                gender="men" 
            />
          </div>
      </section>
      <section className='md'>
         <div id='bgv' className='bg-cover w-full  bg-gray-500 bg-no-repeat bg-fixed'>
             <div className='w-fit m-auto bg relative top-10'>
                <div className='w-fit m-auto pt-6 '>
                  <h1 className='sm:text-3xl ff  text-xl font-bold'>our best product</h1>
                </div>
                <div className='flex flex-col sm:flex-row'>
                   <div className=' m-4 sm:m-8'> 
                      <div className=' m-4 max-w-60 relative group '>
                        <img src="img/mens/man-wearing-blue-shorts-up.jpg" className='' alt="" />
                        <div className='absolute  inset-0 sm:-z-10 sm:group-hover:z-0 flex  flex-col justify-end items-center bg-black bg-opacity-50 text-white'>
                          <div className='max-w-96 text-center  sm:block justify-around gap-1 flex flex-wrap  lg:px-16 lg:mb-10 colletion'>
                              <p className='text-wrap max-w-28'>shorts for mens</p>
                              <p className=''><strike className='font-light text-red-700'>800Rs</strike> 500Rs</p>
                              <div className='w-fit m-auto'>
                                 <hr className='w-28 hidden sm:block'/>
                                 <button className='lg:p-2 p-1 bg-gray-300 btn lg:my-2  rounded-lg'>add to cart</button>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className='m-4 max-w-60 relative group ' >
                        <img src="img/sunglass/glasses.jpg" alt=""  />
                        <div className='absolute  inset-0 sm:-z-10 sm:group-hover:z-0 flex  flex-col justify-end items-center bg-black bg-opacity-50 text-white'>
                          <div className='max-w-96 text-center sm:block justify-around gap-1 flex flex-wrap lg:px-16  lg:mb-5 colletion'>
                              <p className='text-wrap max-w-28'>Sunglass</p>
                              <p className=''><strike className='font-light text-red-700'>500Rs</strike> 200Rs</p>
                              <div className='w-fit m-auto'>
                                 <hr className='w-28 hidden sm:block'/>
                                 <button className='lg:p-2 p-1 bg-gray-300 btn my-2 rounded-lg'>add to cart</button>
                              </div>
                          </div>
                        </div>
                      </div>
                   </div>
                   <div className='m-8 hidden md:block'>
                        <div className='m-4 max-w-xl relative group'>
                            <img src="img/mens/outfit-casual-man copy.jpg" alt=""  />
                            <div className='absolute  inset-0 -z-10 group-hover:z-0 flex  flex-col justify-center items-center bg-black bg-opacity-50 text-white'>
                              <div className='max-w-96 text-center  lg:px-16 lg:mb-10 colletion'>
                                  <p className=''>For Winter wear</p>
                                  <p className=''><strike className='font-light text-red-700'>1600Rs</strike> 1000Rs</p>
                                  <div className='w-fit m-auto'>
                                    <hr className='w-28'/>
                                    <button className='lg:p-2 p-1 bg-gray-300 btn my-2 rounded-lg'>add to cart</button>
                              </div>
                          </div>
                        </div>
                        </div>
                   </div>
                   <div className='sm:m-8 m-8 mt-0 '>
                        <div className='m-4 max-w-60 hidden sm:block  relative group'>
                          <img src="img/bags/luxury-hand-bag.jpg" alt="" />
                          <div className='absolute  inset-0 -z-10 group-hover:z-0 flex  flex-col justify-end items-center bg-black bg-opacity-50 text-white'>
                          <div className='max-w-96 text-center  lg:px-16 lg:mb-2 colletion'>
                              <p className=''>luxury leather bag</p>
                              <p className=''><strike className='font-light text-red-700'>8000Rs</strike> 5000Rs</p>
                              <div className='w-fit m-auto'>
                                 <hr className='w-28'/>
                                 <button className='lg:p-2 p-1 bg-gray-300 btn my-2 rounded-lg'>add to cart</button>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className='m-2 sm:m-4 max-w-60 relative  group'>
                            <img src="img/bags/skiny-hand-bag.jpg"  alt="" />  
                            <div className='absolute inset-0 sm:-z-10 sm:group-hover:z-0 flex  flex-col justify-end items-center  bg-black bg-opacity-50 text-white'>
                             <div className='max-w-96 text-center sm:block justify-around gap-1 flex flex-wrap  lg:px-16 lg:mb-10 colletion'>
                              <p className='text-wrap max-w-28'>Sikny leather bag</p>
                              <p className=''><strike className='font-light text-red-700'>5000Rs</strike> 2500Rs</p>
                              <div className='w-fit m-auto'>
                                 <hr className='w-28 hidden sm:block'/>
                                 <button className='lg:p-2 p-1 bg-gray-300 btn my-2 rounded-lg'>add to cart</button>
                              </div>
                            </div>
                        </div>
                        </div>  
                   </div>
                </div>
             </div>
         </div>
      </section>
      <section className='my-24 mx-7 sm:mx-12'>
            <Carousel />
      </section>
      <section className=''>
        <div className='mt bg-cover w-full  bg-gray-500 bg-no-repeat bg-fixed '>
           <div className='w-fit p-5 m-auto font-bold text-white text-xl sm:text-4xl'>
                <h1>Benefits</h1>
                <hr className='' />
           </div>
           <div className='flex justify-center flex-wrap sm:gap-5'>
    
                <div className='m-4 sm:m-8 p-3 colletion  ' >
                   <div className='w-fit m-auto p-6 rounded-full border '>   
                     <i className="text-4xl fa-solid fa-truck text-white"></i>
                   </div>
                    <div className='w-fit m-auto'>
                    <h1 className='m-3 text-white text-xl  sm:text-3xl w-fit'>FREE SHIPPING</h1>
                    </div>
                    <hr />  
                    <div className='max-w-72'>
                    <h1 className='text-white text-center font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime consectetur?</h1>
                    </div>
                </div>
                <div className='m-4 sm:m-8 p-3 colletion  ' >
                   <div className='w-fit m-auto p-6 rounded-full border '>   
                     <i className="text-4xl fa-solid fa-rotate-left text-white"></i>
                   </div>
                    <div className='w-fit m-auto'>
                    <h1 className='m-3 text-white text-xl sm:text-3xl w-fit'>100% MONEY BACK</h1>
                    </div>
                    <hr />  
                    <div className='max-w-72'>
                    <h1 className='text-white text-center font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime consectetur?</h1>
                    </div>
                </div>
                <div className='m-4 sm:m-8 p-3 colletion  ' >
                   <div className='w-fit m-auto p-6 rounded-full border '>   
                     <i className="text-4xl fa-solid fa-headset text-white"></i>
                   </div>
                    <div className='w-fit m-auto'>
                    <h1 className='m-3 text-white text-xl  sm:text-3xl w-fit'>ONLINE SUPPORT</h1>
                    </div>
                    <hr />  
                    <div className='max-w-72'>
                    <h1 className='text-white text-center font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime consectetur?</h1>
                    </div>
                </div>
            </div>
        </div>
      </section>
  </>
  )
}

export default Home