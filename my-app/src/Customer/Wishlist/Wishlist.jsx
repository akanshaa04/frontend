// import React, { useState, useEffect } from 'react';
// import WishlistProductCard from './WishlistProductCard';
// import axios from 'axios';

// const Wishlist = () => {
//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       const token = localStorage.getItem('userToken');
//       try {
//         const response = await axios.get('http://localhost:8080/api/wishlist', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // Assuming wishlist is a set of products
//         setWishlistProducts(response.data.products);
//       } catch (error) {
//         console.error('Error fetching wishlist:', error);
//       }
//     };

//     fetchWishlist();
//   }, []);

//   const handleRemoveFromWishlist = async (productId) => {
//     const token = localStorage.getItem('userToken');
//     try {
//       await axios.post(
//         `http://localhost:8080/api/wishlist/add-product/${productId}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Remove the product locally after API call succeeds
//       setWishlistProducts((prev) => prev.filter((item) => item.id !== productId));
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Wishlist Header */}
//       <div className="text-center mb-8">
//         {/* <h1 className="text-3xl font-bold text-gray-800">This is your Wishlist</h1>
//         <p className="text-gray-600 mt-2">Browse the products you love and save for later!</p> */}
//       </div>

//       {/* Wishlist Products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {wishlistProducts.length > 0 ? (
//           wishlistProducts.map((product) => (
//             <WishlistProductCard
//               key={product.id}
//               product={product}
//               onRemove={handleRemoveFromWishlist}
//             />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-600 text-lg">
//             Your wishlist is empty!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;



import React, { useState, useEffect } from 'react';
import WishlistProductCard from './WishlistProductCard';
import axios from 'axios';
import { Button, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { RemoveShoppingCart } from '@mui/icons-material';

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem('userToken');
      try {
        const response = await axios.get('http://localhost:8080/api/wishlist', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWishlistProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productId) => {
    const token = localStorage.getItem('userToken');
    try {
      await axios.post(
        `http://localhost:8080/api/wishlist/remove-product/${productId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setWishlistProducts((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing product from wishlist:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Wishlist Header */}
        <Box className="text-center mb-12">
          <Typography variant="h4" color="primary" fontWeight="bold">
             Wishlist
          </Typography>
         
        </Box>

        {/* Wishlist Products */}
        <Grid container spacing={4}>
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all">
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="200"
                    image={product.images[0]}
                    title={product.title}
                    className="object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-2">
                      ₹{product.sellingPrice}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="line-through text-gray-400">
                      ₹{product.mrpPrice}
                    </Typography>
                  </CardContent>
                  <Box className="flex justify-between items-center p-3">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<RemoveShoppingCart />}
                      onClick={() => handleRemoveFromWishlist(product.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              
              <Typography variant="h6" color="textSecondary" align="center">
                Your wishlist is empty!
              </Typography>
              <Typography variant="h6" color="textSecondary" align="center">
            Browse the products you love and save for later!
          </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Wishlist;
