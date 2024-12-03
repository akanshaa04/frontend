import React from 'react';

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-blue-600 w-full h-[12rem] object-cover object-top"
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_gcCDySsoXMTzcH3_PiE0si7vq5BjPN-k6urdKc5vOy1GXNEh8siJ-8ugcSAw1Nv5n1-AI3-0vPcsB8lE4Ukrr9a94rHyfeFLNrQtWqEULrvkpS2ZGwQQAA"
        alt="Smart Watch"
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% off</p>
        <p className="text-balance text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default DealCard;
