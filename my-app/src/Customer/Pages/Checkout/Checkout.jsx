import { Box, Button, Modal } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddressCard from './AddressCard';
import PricingCart from '../Cart/PricingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressForm from './Addressform'

const Checkout = () => {
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [cartData, setCartData] = useState(state?.cartData);
  const [selectedAddress, setSelectedAddress] = useState(null); // Tracks selected address ID
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
console.log(userToken);
    if (!userToken) {
      navigate('/login');
      return;
    }

    const fetchAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/profile', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setAddresses(response.data.addresses);
      } catch (error) {
        console.error('Error fetching user addresses:', error);
      }
    };

    fetchAddresses();
  }, [navigate]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleAddressSelect = (addressId) => {
  //   console.log("address " + addressId);
  //   setSelectedAddress(addressId);

  // };

  const handleAddressSelect = (addressId) => {
    const address = addresses.find(address => address.id === addressId);
    console.log("id " + addressId);
    console.log("full address ", address); // Log the address as an object, not as a string
    setSelectedAddress(address);
  };
  

  const handlePayment = async () => {
    const userToken = localStorage.getItem('userToken');
  
    if (!selectedAddress) {
      alert("Please select a shipping address.");
      return;
    }

    console.log("selectedAddress" + selectedAddress);

    try {
      // Step 1: Send the order creation request with the selected shipping address
      const response = await axios.post(
        `http://localhost:8080/api/orders`,
        selectedAddress, // Send selectedAddress directly
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      // Step 2: Remove items from the cart after the order is successfully created
      if (cartData && cartData.cartItems && cartData.cartItems.length > 0) {
        for (let item of cartData.cartItems) {
          await axios.delete(`http://localhost:8080/api/cart/item/${item.id}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
        }
      }

      // Step 3: Clear cart from frontend state and localStorage
      setCartData(null); // Clear the cart data from the state
      localStorage.removeItem('cartData'); // Remove cart data from localStorage

      // Step 4: Navigate to the orders page
      navigate('/account/orders');
    } catch (error) {
      console.error('Error creating order:', error);
      if (error.response) {
        console.error('Response error data:', error.response.data);
      }
    }
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div
              className="space-y-5 p-5 rounded-md border"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Select Address</h1>
                <Button
                  onClick={handleOpen}
                  style={{
                    backgroundColor: '#00796b',
                    color: '#fff',
                    textTransform: 'none',
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                  }}
                >
                  Add New Address
                </Button>
              </div>

              <div className="text-xs font-medium space-y-5">
                <div className="space-y-3">
                  {addresses.length > 0 ? (
                    addresses.map((address, index) => (
                      <AddressCard
                        key={index}
                        address={address}
                        selectedAddress={selectedAddress}
                        handleAddressSelect={handleAddressSelect}
                      />
                    ))
                  ) : (
                    <p>No addresses found. Please add an address.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column for Pricing and Payment */}
          <div>
            <div className="border rounded-md">
              <PricingCart
                totalSellingPrice={cartData ? cartData.totalSellingPrice : 0}
                totalItem={cartData ? cartData.totalItem : 0}
                totalMrpPrice={cartData ? cartData.totalMrpPrice : 0}
                discount={cartData ? cartData.discount : 0}
              />
              <div className="p-5 px-15">
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor: '#00796b', // Green color
                    color: '#fff',
                    padding: '10px',
                    fontSize: '1rem',
                  }}
                  onClick={handlePayment} // Call the handlePayment function on "Pay Now" click
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to add a new address */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Pass the handleClose function to AddressForm */}
          <AddressForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;





