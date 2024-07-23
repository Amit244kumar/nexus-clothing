import React, { useEffect, useState } from 'react';



const Slider = ({slides=null}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <div className="absolute overflow-hidden w-full h-full">
            <img src={slide.imgDesktop} alt="" className="sm:block hidden w-full" />
            <img src={slide.imgMobile} alt="" className="sm:hidden w-full" />
          </div>
          <div className="relative text-white w-fit m-auto top-64 p-2 bft">
            <div className="max-w-5xl text-center">
              <h1 className="md:text-3xl md:font-bold md:tracking-wide sm:text-xl sm:font-bold sm:tracking-normal text-lg">
                {slide.title1}
              </h1>
              <h1 className="md:text-8xl md:tracking-wide sm:text-5xl sm:tracking-wide text-3xl">
                {slide.title2}
              </h1>
              <p className="md:text-2xl md:tracking-widest sm:text-xl sm:tracking-wide tracking-normal font-light bt">
                {slide.description}
              </p>
              <div className="mt-2 w-fit m-auto border-white">
                <button className="p-3 px-7 rounded-full border-white border-2 btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
