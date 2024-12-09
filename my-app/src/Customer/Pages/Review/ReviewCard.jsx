import { Delete } from '@mui/icons-material';
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material';
import React from 'react';

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Box>
            <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
              Z
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Trendly</p>
              <p className="opacity-70">2024-12-03</p>
            </div>
          </div>
          <Rating readOnly value={4} precision={1} />
          <p>Value for money product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNhcmVlJTIwdG8lMjBzb2xkfGVufDB8MXwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
      <div>
        <IconButton color="error">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
