import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import clintDeal from'../../assets/img/people_deal.jpg';

import Keyboard from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import ProductSlider from './ProductSlider';
import Services from './Services';

const Product_instant= () => {
  return (
    <>
      <div className="">
        {/* Gradient background added */}
        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 py-6 px-6 mx-8 rounded-lg">
          {/* Header text */}
          <p className="flex justify-center text-center font-thin sm:text-3xl px-3 text-white">
            We will send you <strong className="mx-1">the Best Price Possible</strong>
          </p>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <button className="flex items-center rounded-full bg-blue-900 cursor-pointer px-7 py-3 font-thin sm:text-2xl text-white hover:bg-blue-700 transition-colors duration-300">
              Get Instant Quote
              <KeyboardArrowRightIcon className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Another section */}

      <div className='grid grid-cols-1 sm:grid-cols-2 mb-4'>

        <div className='left-container px-6'>

          <img className='h-[350px] w-full object-fill sm:mt-5' src={clintDeal}></img>
        </div>
        <div className='right-container p-3'>
        <p className='px-3 py-2 font-semibold sm:text-3xl text-sky-700 sm:mt-20'>Welcome to our Website !</p>
        <p className='px-3 py-5 font-thin font-2xl'>
        H M Store is a well-experienced and reputed trader and supplier of artificial jewelry to the customers. Based in Asansol, our company is offering excellent designer artificial jewelry at affordable rates. Our products are compatible and offer excellent comfort to the customers. Our designer jewelry can be aligned with all types of apparel. We have hired experienced professionals who are procuring excellent artificial
         jewelry from reliable manufacturers at affordable rates. We have achieved a hug.

         </p>
         <div className='px-3 h-[100px] cursor-pointer'><Keyboard/>Read more..</div>
        </div>

      </div>
      <h2 className='mx-5 flex justify-center text-center text-blue-800  font-semibold md:text-3xl text-lg py-3'>Popular Product</h2>
      <ProductSlider/>

<Services/>

      
    </>
  );
};

export default Product_instant;
