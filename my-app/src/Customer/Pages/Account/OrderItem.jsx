import { ElectricBolt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { blue, teal } from '@mui/material/colors';
import React from 'react';

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: blue[400] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img 
            className="w-[70px]" 
            src="https://images.unsplash.com/photo-1610189019383-606d9eaa6766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNhcmVlfGVufDB8MXwwfHx8MA%3D%3D" 
            alt="Product"
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Sahiba Clothing</h1>
          <p>Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI Voice | Split Screen Smartwatch (Black Strap, Free Size)</p>
          <p><strong>Size:</strong> FREE</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
