import { Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  const handleUpdateQuantity = () => {

  };

  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://images.unsplash.com/photo-1610189019383-606d9eaa6766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNhcmVlfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Sahiba Clothings</h1>
          <p>beautiful sarees</p>
          <p>7 days replacement</p>
          <p>
            <strong>Quantity :</strong> 3
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <AddCircleIcon />
            </Button>
          </div>
        </div>

        <div className="pr-5">
          <p className="text-gray-700 font-medium">400</p>
        </div>
      </div>

      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
