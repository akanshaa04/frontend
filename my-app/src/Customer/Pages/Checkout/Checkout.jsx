import { Box, Button, Modal } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddressCard from './AddressCard';
import PricingCart from '../Cart/PricingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';  
import AddressForm from './Addressform';

const Checkout = () => {
  const { state } = useLocation(); 
  const [open, setOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [cartData, setCartData] = useState(state?.cartData);  
  const [selectedAddress, setSelectedAddress] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    
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

  const handleAddressSelect = (addressId) => {
    setSelectedAddress(addressId);
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
                        handleAddressSelect={handleAddressSelect}  // Pass the selection handler
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
                totalSellingPrice={cartData.totalSellingPrice}
                totalItem={cartData.totalItem}
                totalMrpPrice={cartData.totalMrpPrice}
                discount={cartData.discount}
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
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4
        }}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
