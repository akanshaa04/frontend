import React, { useState } from 'react';
import { Button, TextField, Modal, Box } from '@mui/material';
import axios from 'axios';

const LoginSignupModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const fetchUserProfile = async (token) => {
  //   try {
  //     console.log('Fetching user profile with token:', token);
  //     const response = await axios.get('http://localhost:8080/users/profile', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log('User profile fetched:', response.data);
  //     onLogin(response.data.name); // Pass username to Navbar
  //   } catch (err) {
  //     console.error('Error fetching profile:', err);
  //     setError('Failed to fetch profile. Please try again.');
  //   }
  // };

  const fetchUserProfile = async (token) => {
    try {
      console.log('Fetching user profile with token:', token);
      const response = await axios.get('http://localhost:8080/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('User profile fetched:', response.data);
      onLogin(response.data); 
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Failed to fetch profile. Please try again.');
    }
  };
  
  const handleSendOtp = async () => {
    try {
      setError('');
      setLoading(true);
      console.log('Sending OTP for email:', email);
      const response = await axios.post('http://localhost:8080/auth/signup/otp', {
        email,
        role: 'Role_Customer',
      });
      console.log('OTP sent:', response.data);
      setOtpSent(true);
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      console.log('Logging in with email and OTP:', { email, otp });
      const response = await axios.post('http://localhost:8080/auth/login/otp', { email, otp });
      if (response.status === 200) {
        const token = response.data.jwt;
        console.log('Login successful, token received:', token);
        localStorage.setItem('userToken', token);
        fetchUserProfile(token);
        onClose();
      } else {
        setError('Invalid OTP or email.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h1 className="text-center font-bold text-xl text-primary-color pb-5">Login as User</h1>
        <div className="space-y-5">
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
          />
          {otpSent ? (
            <>
              <p className="font-medium text-sm opacity-60">Enter OTP sent to your email</p>
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
            </>
          ) : (
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
      </Box>
    </Modal>
  );
};

export default LoginSignupModal;
