import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

const AddressForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pinCode: '',
    address: '',
    locality: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state
  const [submitError, setSubmitError] = useState(null); // To track submission errors
  const [submitSuccess, setSubmitSuccess] = useState(false); // To track successful submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    // Basic validations
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';
    if (!formData.pinCode || !/^[1-9][0-9]{5}$/.test(formData.pinCode)) newErrors.pinCode = 'Invalid pin code';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.locality) newErrors.locality = 'Locality is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Start submitting
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);
  
      // Get the user token from localStorage
      const token = localStorage.getItem('userToken');
  
      if (!token) {
        setIsSubmitting(false);
        setSubmitError('User is not authenticated');
        return;
      }
  
      // API Call to add the address
      fetch('http://localhost:8080/users/add-address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the Authorization header with Bearer token
        },
        body: JSON.stringify({
          name: formData.name,
          locality: formData.locality,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pinCode: formData.pinCode,
          mobile: formData.mobile,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add address');
          }
          return response.json();
        })
        .then((data) => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          console.log('Address added successfully:', data);
          if (onClose && typeof onClose === 'function') {
            onClose(); // Close the modal after submission
          }
          // onClose(); // Close the form after successful submission
        })
        .catch((error) => {
          setIsSubmitting(false);
          setSubmitError('Failed to add address. Please try again.');
          console.error('Error adding address:', error);
        });
    }
  };
  
  return (
    <Box sx={{ maxWidth: 'auto' }}>
      <p className="text-xl font-bold text-center pb-5">Contact Details</p>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="pinCode"
              label="Pin Code"
              value={formData.pinCode}
              onChange={handleChange}
              error={!!errors.pinCode}
              helperText={errors.pinCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formData.locality}
              onChange={handleChange}
              error={!!errors.locality}
              helperText={errors.locality}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" sx={{ py: '14px' }} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Add Address'}
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Show success or error messages */}
      {submitSuccess && <p style={{ color: 'green' }}>Address added successfully!</p>}
      {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
    </Box>
  );
};

export default AddressForm;










