import React, { useState } from 'react';
// import SellerAccountForm from './SellerAccountForm';
// import SellerLoginForm from './SellerLoginForm';
import SellerAccountForm from './SellerAccountForm';
import { Button } from '@mui/material';
import SellerLoginForm from './SellerLoginForm';
import axios from 'axios';
import { Formik } from 'formik';

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };



const handleCreateAccount = async () => {
  try {
    // Prepare the data for the API call from formik values
    const sellerData = {
      email: Formik.values.email,
      password: Formik.values.password,
      sellerName: Formik.values.sellerName,
      mobile: Formik.values.mobile,
      GSTIN: Formik.values.gstin,
      pickupAddress: {
        name: Formik.values.pickupAddres.name,
        mobile: Formik.values.pickupAddres.mobile,
        pincode: Formik.values.pickupAddres.pincode,
        address: Formik.values.pickupAddres.address,
        locality: Formik.values.pickupAddres.locality,
        city: Formik.values.pickupAddres.city,
        state: Formik.values.pickupAddres.state,
      },
      bankDetails: {
        accountNumber: Formik.values.bankDetails.accountNumber,
        ifscCode: Formik.values.bankDetails.ifscCode,
        accountHolderName: Formik.values.bankDetails.accountHolderName,
      },
      businessDetails: Formik.values.businessDetails,
    };

    // Make the API call
    const response = await axios.post('http://localhost:8080/seller', sellerData);

    // Handle the response (successful account creation)
    console.log('Seller created successfully', response.data);

    // You can also redirect the user to a different page after successful registration
    // window.location.href = '/some/other/page';

  } catch (error) {
    // Handle error (show a message to the user)
    console.error('Error creating seller:', error.response || error.message);
    alert('Failed to create account. Please try again later.');
  }
};


  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
      <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md '>
        {!isLogin ? <SellerAccountForm /> : <SellerLoginForm />}

        <div className='mt-10 space-y-2'>
          <h1 className='text-center text-sm font-medium  mb-3'>
            Have an account?
          </h1>
          <Button onClick={handleShowPage} fullWidth sx={{ py: "11px" }} variant='outlined'>
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      {/* <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
        <div className='lg:w-[70%] px-5 space-y-10'>
          <div className='space-y-2 font-bold text-center'>
            <p className='text-2xl'>Join the Marketplace Revolution</p>
            <p className='text-lg text-primary-color'>Boost your sales today</p>
          </div>
          <img src="https://images.unsplash.com/photo-1641233793781-80c17e84a4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxvbmxpbmUlMjBzZWxsZXJ8ZW58MHwwfDB8fHww" alt='image'/>
        </div>
      </section> */}
    </div>
  );
};

export default BecomeSeller;
