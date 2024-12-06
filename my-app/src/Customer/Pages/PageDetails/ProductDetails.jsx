import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SimilarProducts from './SimilarProducts'; 
import axios from 'axios';

const ProductDetails = () => {
  const { categoryId, name, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const token = localStorage.getItem('userToken'); // Get user token from local storage
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setSelectedImage(data.images[0]);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  // // Function to handle adding product to the cart
  const handleAddToCart = async () => {
    if (!token) {
      // If no token (user is not logged in), show an alert and redirect to login
      alert('You must be logged in to add items to the cart');
      navigate('/login'); // Redirect to login page
      return; // Stop further execution
    }

    // If logged in, proceed to add the item to the cart
    try {
      const response = await axios.put(
        "http://localhost:8080/api/cart/add",
        {
          productId: product.id,
          size: 'M',  // Make sure this matches the expected field
          quantity: quantity
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Ensure you pass the correct JWT token
          }
        }
      );
      console.log('Item added to cart:', response.data);
      navigate('/cart'); // Redirect to cart page after successful addition
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert('Failed to add product to cart');
    }
  };


  // Function to handle cart state for users who are not logged in
  useEffect(() => {
    if (!token) {
      // If the user is not logged in, clear the cart from localStorage
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, [token]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.images.map((image, index) => (
              <img
                key={index}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={image}
                alt="Product Thumbnail"
                onClick={() => setSelectedImage(image)}   
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src={selectedImage}   
              alt="Main Product"
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">{product.title}</h1>
          <p className="text-gray-500 font-semibold">{categoryId}</p> 

          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>{product.numRatings}</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>{product.numRatings} Ratings</span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹{product.sellingPrice}</span>
              {product.mrpPrice !== product.sellingPrice && (
                <span className="line-through text-gray-400">₹{product.mrpPrice}</span>
              )}
              <span className="text-primary-color font-semibold">
                {Math.round((1 - product.sellingPrice / product.mrpPrice) * 100)}%
              </span>
            </div>
            <p className="text-sm">Inclusive of all taxes, Free Shipping above ₹1500</p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% Money Back Guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on Delivery</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>Quantity</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddCircleIcon />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>

          <div className="mt-5">
            <p>{product.description}</p>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProducts category={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;







