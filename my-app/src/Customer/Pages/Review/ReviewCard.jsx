import React from 'react';

const ReviewCard = () => {
  return (
    <div className="review-card p-4 border rounded-md shadow-lg">
      <div className="flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Reviewer"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-lg">John Doe</h3>
          <p className="text-gray-500 text-sm">Verified Buyer</p>
        </div>
      </div>
      <div className="review-content mt-3">
        <p className="text-gray-700">
          "This product is excellent! The quality is amazing, and it looks exactly like the photos. Highly recommend!"
        </p>
      </div>
      <div className="review-rating mt-2 flex items-center">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 text-gray-600">5/5</span>
      </div>
    </div>
  );
};

export default ReviewCard;
