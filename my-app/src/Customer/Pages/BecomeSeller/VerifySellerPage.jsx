import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifySellerPage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // To read query parameters

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const otp = queryParams.get('otp');  // Get OTP from URL

    if (otp) {
      verifyOtp(otp);
    } else {
      setMessage('OTP is missing. Please check the link.');
      setLoading(false);
    }
  }, [location]);

  const verifyOtp = async (otp) => {
    try {
      const response = await axios.patch(`http://localhost:8080/seller/verify/${otp}`); // Use PATCH request

      if (response.status === 200) {
        setMessage('Your email has been verified successfully!');
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-seller-container">
      <h2>Verify Your Account</h2>

      {loading ? <p>Verifying OTP...</p> : <p>{message}</p>}
    </div>
  );
};

export default VerifySellerPage;
