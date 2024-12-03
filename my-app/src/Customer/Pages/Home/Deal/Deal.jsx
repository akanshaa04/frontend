import React from 'react';
import DealCard from './DealCard';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"; // Uncomment this import to use the Slider component

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between">
        {/* <Slider {...settings}> Enable the Slider component here */}
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <DealCard key={index} /> // Adding key for efficient re-rendering
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Deal;
