import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Import Splide's CSS

const ProductSlider = () => {
  return (
    <section id="image-carousel" aria-label="Beautiful Images">
      <Splide
        options={{
          type: 'loop', // Loop through slides
          perPage: 2, // 2 slides per page
          perMove: 1, // Moves one slide at a time
          autoplay: true, // Enable auto-sliding
          interval: 2000, // 3 seconds for autoplay interval
          breakpoints: {
            640: {
              perPage: 1, // Show 1 slide per page on small screens
            },
          },
        }}
        aria-labelledby="image-carousel"
      >
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
            alt="Beautiful Landscape"
            className="w-full h-[400px] object-cover"
          />
          <div className="text-center mt-2">Description 01: Beautiful Landscape</div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="City Skyline"
            className="w-full h-[400px] object-cover"
          />
          <div className=" text-center mt-2">Description 02: City Skyline</div>
        </SplideSlide>
        {/* Add more slides if needed */}

        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="City Skyline"
            className="w-full h-[400px] object-cover"
          />
          <div className="text-center mt-2">Description 02: City Skyline</div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="City Skyline"
            className="w-full h-[400px] object-cover"
          />
          <div className="text-center mt-2">Description 02: City Skyline</div>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default ProductSlider;
