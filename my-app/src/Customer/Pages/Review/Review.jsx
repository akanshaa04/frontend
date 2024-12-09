import React from 'react';
import ReviewCard from './ReviewCard';
import { Divider } from '@mui/material';

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNhcmVlJTIwdG8lMjBzb2xkfGVufDB8MXwwfHx8MA%3D%3D"
          alt="Product Image"
        />
        <div>
          <div>
            <p className="font-bold text-xl">Sahiba Clothing</p>
            <p className="text-lg text-gray-600">Saree</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">400</span>
              <span className="line-through text-gray-400">999</span>
              <span className="text-primary-color font-semibold">60% off</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <div key={index} className="space-y-5 w-full">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
