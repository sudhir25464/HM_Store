import React, { useState } from 'react';
import bg from '../../assets/img/bg.png';
import LeftArrow from '../../assets/img/back.png';
import RightArrow from '../../assets/img/next.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const images = [
  bg,bg,bg,bg
  // 'https://via.placeholder.com/600x400?text=Image+1,
  // 'https://via.placeholder.com/600x400?text=Image+2',
  // 'https://via.placeholder.com/600x400?text=Image+3'
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='sm:px-5 sm:py-1'>
    <div className="relative w-7xl  mx-auto justify-center">
      <div className="overflow-hidden relative h-60">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <button

    
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
     
      >
        <img className='h-10 w-10' src={LeftArrow}></img>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <img className='h-10 w-10' src={RightArrow}></img>
      </button>
    </div>
    </div>
  );
};

export default HomeSlider;