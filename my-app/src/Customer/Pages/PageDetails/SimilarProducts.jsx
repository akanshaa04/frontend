import React, { useEffect, useState } from 'react';
import SimilarProductsCard from './SimilarProductsCard';

const SimilarProducts = ({ category }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      console.log("Category: ", category);  
      fetch(`http://localhost:8080/products?category=${category}`)
        .then(response => {
          console.log('Response status:', response.status);  
          return response.json();
        })
        .then(data => {
          console.log('Fetched similar products:', data);  
          setSimilarProducts(data.content);  
          setLoading(false);  
        })
        .catch(error => {
          console.error('Error fetching similar products:', error);  
          setLoading(false);  
        });
    }
  }, [category]);

  if (loading) {
    return <div>Loading similar products...</div>;
  }

  if (!Array.isArray(similarProducts) || similarProducts.length === 0) {
    return <div>No similar products found.</div>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8">
      {similarProducts.map((item) => (
        <SimilarProductsCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default SimilarProducts;