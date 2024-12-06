import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
  const navigate = useNavigate();
  
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img 
          className="w-[100px]" 
          src="https://images.unsplash.com/photo-1610189019383-606d9eaa6766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNhcmVlfGVufDB8MXwwfHx8MA%3D%3D" 
          alt="Product" 
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{"Sahiba Clothing"}</h1>
          <p>Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI Voice | Split Screen Smartwatch (Black Strap, Free Size)</p>
          <p><strong>Size:</strong> M</p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper />
        {/* orderStatus={"PENDING"} do it tomorrow */}
      </section>
    </Box>
  );
};

export default OrderDetails;
