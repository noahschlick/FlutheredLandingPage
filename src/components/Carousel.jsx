import React, {useEffect, useRef, useState} from 'react'
import phone from '../assets/iphone-mockup.png'

function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [trigger, setTrigger] = useState(true)
    const intervalRef = useRef(null);
    
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
    
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
   

    

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Call your function here (e.g., nextSlide())
      nextSlide()
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
    
  return (
    <div className="relative flex justify-center z-50 p-10 pr-20 md:pr-10 pt-0 md:pt-10">
      {/*<button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-900" onClick={prevSlide}>
        Previous
  </button>*/}
      <img src={phone} alt="" className="w-[260px] h-[500px] absolute"/>
      <img src={images[currentSlide]} alt="Carousel Slide" className="w-[225px] rounded-[30px]" />
      {/*<button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-900" onClick={nextSlide}>
        Next
</button>*/}
      
    </div>
  )
}

export default Carousel