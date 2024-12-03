import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerLoginForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null); 
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

 
  const fetchSellerProfile = async (token) => {
    try {
      console.log("error-----"+token); 
      const response = await axios.get('http://localhost:8080/seller/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data); 
      return response.data;
    } catch (err) {
      setError('Failed to fetch profile. Please try again.');
      console.error('Fetch profile error: ', err);
    }
  };

 
  const handleSendOtp = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.post('http://localhost:8080/auth/signup/otp', {
        email,
        role: 'Role_Seller',
      });

      if (response.status === 200) {
        setOtpSent(true); 
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
      console.error('OTP error: ', err);
    } finally {
      setLoading(false);
    }
  };

 
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/seller/login', {
        email,
        otp,
      });

      if (response.status === 200) {
       
        const token = response.data.jwt;
        console.log(response.data.jwt);
        localStorage.setItem('sellerToken', token);
        setToken(token);
        console.log(token);
        fetchSellerProfile(token);

      } else {
        setError('Invalid OTP or email.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Login error: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profile) {
      navigate('/seller'); 
    }
  }, [profile, navigate]);

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        Login as Seller
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
        />
        {otpSent && (
          <div className="space-y-5">
            <p className="font-medium text-sm opacity-60">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              label="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              error={!!error}
              helperText={error}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ py: '11px' }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login'}
            </Button>
          </div>
        )}
        {!otpSent && (
          <Button
            fullWidth
            variant="contained"
            sx={{ py: '11px' }}
            onClick={handleSendOtp}
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </Button>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SellerLoginForm;
