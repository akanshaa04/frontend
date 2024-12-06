// import React, { useState } from 'react';
// import { Button, TextField, Modal, Box } from '@mui/material';
// import axios from 'axios';

// const LoginSignupModal = ({ isOpen, onClose, onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchUserProfile = async (token) => {
//     try {
//       console.log('Fetching user profile with token:', token);
//       const response = await axios.get('http://localhost:8080/users/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('User profile fetched:', response.data);
//       onLogin(response.data); 
//     } catch (err) {
//       console.error('Error fetching profile:', err);
//       setError('Failed to fetch profile. Please try again.');
//     }
//   };
  
//   const handleSendOtp = async () => {
//     try {
//       setError('');
//       setLoading(true);
//       console.log('Sending OTP for email:', email);
//       const response = await axios.post('http://localhost:8080/auth/signup/otp', {
//         email,
//         role: 'Role_Customer',
//       });
//       console.log('OTP sent:', response.data);
//       setOtpSent(true);
//     } catch (err) {
//       console.error('Error sending OTP:', err);
//       setError('Failed to send OTP. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       setError('');
//       setLoading(true);
//       console.log('Logging in with email and OTP:', { email, otp });
//       const response = await axios.post('http://localhost:8080/auth/login/otp', { email, otp });
//       if (response.status === 200) {
//         const token = response.data.jwt;
//         console.log('Login successful, token received:', token);
//         localStorage.setItem('userToken', token);
//         fetchUserProfile(token);
//         onClose();
//       } else {
//         setError('Invalid OTP or email.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal open={isOpen} onClose={onClose}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <h1 className="text-center font-bold text-xl text-primary-color pb-5">Login as User</h1>
//         <div className="space-y-5">
//           <TextField
//             fullWidth
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!!error}
//             helperText={error}
//           />
//           {otpSent ? (
//             <>
//               <p className="font-medium text-sm opacity-60">Enter OTP sent to your email</p>
//               <TextField
//                 fullWidth
//                 label="OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 error={!!error}
//                 helperText={error}
//               />
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{ py: '11px' }}
//                 onClick={handleLogin}
//                 disabled={loading}
//               >
//                 {loading ? 'Logging In...' : 'Login'}
//               </Button>
//             </>
//           ) : (
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ py: '11px' }}
//               onClick={handleSendOtp}
//               disabled={loading}
//             >
//               {loading ? 'Sending OTP...' : 'Send OTP'}
//             </Button>
//           )}
//           {error && <p className="text-center text-red-500">{error}</p>}
//         </div>
//       </Box>
//     </Modal>
//   );
// };

// export default LoginSignupModal;




import React, { useState } from 'react';
import { Button, TextField, Modal, Box } from '@mui/material';
import axios from 'axios';

const LoginSignupModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState(''); 
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false); 

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
      const url = isSignup ? 'http://localhost:8080/auth/signup/otp' : 'http://localhost:8080/auth/signup/otp';
      const payload = isSignup 
        ? { email, role: 'Role_Customer' }
        : { email };

      console.log(`Sending OTP for ${isSignup ? 'signup' : 'login'} to email:`, email);
      const response = await axios.post(url, payload);
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

  const handleSignup = async () => {
    try {
      setError('');
      setLoading(true);
      console.log('Signing up with email, OTP, and full name:', { fullName, email, otp });
      const response = await axios.post('http://localhost:8080/auth/signup', { 
        fullName, // Now dynamically use the full name from user input
        email,
        otp
      });
      if (response.status === 200) {
        // console.log('Signup successful:', response.data);
        // setOtpSent(false);
        // setError('');
        // onClose();
        const token = response.data.jwt;
        console.log('signup successful, token received:', token);
        localStorage.setItem('userToken', token);
        fetchUserProfile(token);
        onClose();
      } else {
        setError('Invalid OTP or email.');
      }
    } catch (err) {
      console.error('Error during signup:', err);
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
        <h1 className="text-center font-bold text-xl text-primary-color pb-5">
          {isSignup ? 'Signup as User' : 'Login as User'}
        </h1>
        <div className="space-y-5">
          {/* Email Input */}
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
              {/* Only show full name and OTP fields if OTP is sent */}
              {isSignup && (
                <TextField
                  fullWidth
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={!!error}
                  helperText={error}
                />
              )}

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
                onClick={isSignup ? handleSignup : handleLogin}
                disabled={loading}
              >
                {loading ? (isSignup ? 'Signing Up...' : 'Logging In...') : (isSignup ? 'Signup' : 'Login')}
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

          <Button
            fullWidth
            variant="text"
            sx={{ mt: 2 }}
            onClick={() => setIsSignup(!isSignup)} // Toggle between signup and login
          >
            {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Signup'}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default LoginSignupModal;



