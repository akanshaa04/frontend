import React, { useState, useEffect } from 'react';
import { Favorite, ModeComment } from '@mui/icons-material';
import { Button } from '@mui/material';
import { teal } from '@mui/material/colors';
const SimilarProductsCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = product.images || [];

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div className="group px-4 relative ">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images && images.map((item, index) => (
          <img
            key={index}
            className="card-media object-top"
            src={item}
            alt=""
            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
          />
        ))}
        {isHovered && (
          <div className="indicator flex flex-col items-center space-y-2">
            <div className="flex gap-3">
              <Button variant="contained" color="secondary">
                <Favorite sx={{ color: teal[500] }} />
              </Button>
              <Button>
                <ModeComment sx={{ color: teal[500] }} />
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.color || 'Color not available'}</p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800 font-semibold">
            ₹{product.sellingPrice}
          </span>
          {product.mrpPrice && product.mrpPrice !== product.sellingPrice && (
            <span className="thin-line-through text-gray-400">
              ₹{product.mrpPrice}
            </span>
          )}
          <span className="text-primary-color font-semibold">
            {product.discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsCard;
