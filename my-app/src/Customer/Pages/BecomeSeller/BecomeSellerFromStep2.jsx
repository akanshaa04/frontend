import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

const BecomeSellerFromStep2 = () => {
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
      console.log(formData);  // Handle the valid form submission
    }
  };

  return (
    <Box sx={{ maxWidth: 'auto' }}>
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
          
        </Grid>
      </form>
    </Box>
  );
};

export default BecomeSellerFromStep2;
