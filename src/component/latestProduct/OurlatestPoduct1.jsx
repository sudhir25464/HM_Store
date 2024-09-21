import React from 'react';
import newadd from '../../assets/img/newAddlogo.png';
import lproduct1 from '../../assets/img/product/shopping1.webp';
import lproduct3 from '../../assets/img/product/shopping3.webp';
import lproduct4 from '../../assets/img/product/shopping4.webp';
import lproduct from '../../assets/img/product/shopping.webp';

import './Product.css'; // Custom CSS file for hover effect
import Product_instant from '../home/Product_instant';

const OurlatestPoduct1 = () => {
  return (
    <>
      <div className="bg-white px-5 sm:h-[600px] mb-5">
        <div className="flex justify-center p-1">
          <div className="relative text-black font-thin mt-5 items-center text-4xl mb-2 flex flex-row group">
            <img className="h-12 w-12" src={newadd} alt="logo" />
            <span className="text-yellow-600 group-hover:text-blue-600">Latest</span> Product
            <div className="absolute bottom-0 left-16 top-8 w-[170px] mt-5 h-[2px] bg-yellow-600 group-hover:bg-blue-600 transition-all duration-300"></div>
          </div>
        </div>

        <div className="main-product-container overflow-hidden gap-3 grid md:grid-cols-4 p-2 sm:grid-cols-2 grid-cols-1">
          {/* Product 1 */}
          <div className="flex flex-col product-item px-4 py-2 bg-orange-50 justify-items-center justify-center">
            <img
              src={lproduct1}
              alt="product1"
              className="product-image w-full h-[400px] object-cover rounded"
            />
            <p className="text-center">Product name one</p>
            <div className="product-buttons flex justify-between mx-5 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Inquire</button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500">View more</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col product-item px-4 py-2 bg-orange-50 justify-items-center justify-center">
            <img
              src={lproduct}
              alt="product2"
              className="product-image w-full h-[400px] object-cover rounded"
            />
            <p className="text-center">Product name two</p>
            <div className="product-buttons flex justify-between mx-5 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Inquire</button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500">View more</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col product-item px-4 py-2 bg-orange-50 justify-items-center justify-center">
            <img
              src={lproduct4}
              alt="product3"
              className="product-image w-full h-[400px] object-cover rounded"
            />
            <p className="text-center">Product name three</p>
            <div className="product-buttons flex justify-between mx-5 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Inquire</button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500">View more</button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col product-item px-4 py-2 bg-orange-50 justify-items-center justify-center">
            <img
              src={lproduct3}
              alt="product4"
              className="product-image w-full h-[400px] object-cover rounded"
            />
            <p className="text-center">Product name four</p>
            <div className="product-buttons flex justify-between mx-5 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Inquire</button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-500">View more</button>
            </div>
          </div>
        </div>
      </div>

      <Product_instant />
    </>
  );
};

export default OurlatestPoduct1;
