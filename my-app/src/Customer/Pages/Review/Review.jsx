import React from 'react';

const Review = () => {
  return (
    <div className="review-card p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold">Customer Review</h2>
      <div className="review-body mt-2">
        <p className="text-gray-700">
          "This product is amazing! I loved the quality and the design. It exceeded my expectations."
        </p>
      </div>
      <div className="review-rating mt-2 flex items-center">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 text-gray-600">5/5</span>
      </div>
    </div>
  );
};

export default Review;
