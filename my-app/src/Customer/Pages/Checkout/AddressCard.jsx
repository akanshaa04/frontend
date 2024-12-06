import React from 'react';
import { Radio } from '@mui/material';

const AddressCard = ({ address, selectedAddress, handleAddressSelect }) => {
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={selectedAddress === address.id}  
          onChange={() => handleAddressSelect(address.id)}  
          value={address.id}
          name="address-radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>{address.name}</h1>
        <p>{address.city}, {address.state}, {address.zip}</p>
        <p><strong>Mobile:</strong> {address.mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
