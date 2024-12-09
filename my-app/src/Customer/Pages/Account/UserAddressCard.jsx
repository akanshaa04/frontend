// import { Radio } from '@mui/material';
// import React from 'react';

// const UserAddressCard = () => {
//   return (
//     <div className='p-5 border rounded-md flex'>
//       <div>
//         <Radio
//           checked={true} // This can be controlled dynamically if needed
//           // onChange={handleRadioChange} // Implement this function to handle changes
//           value=""
//           name="radio-button"
//         />
//       </div>
//       <div className='space-y-3 pt-3'>
//         <h1>Trendly</h1>
//         <p>City, State, Zip</p>
//         <p><strong>Mobile :</strong> 9289028902</p>
//       </div>
//     </div>
//   );
// }

// export default UserAddressCard;




import { Radio } from '@mui/material';
import React from 'react';

const UserAddressCard = ({ address, isSelected, onSelect }) => {
  const handleChange = () => {
    onSelect(address.id); // Update selected address when radio button is clicked
  };

  return (
    <div className='p-5 border rounded-md flex'>
      <div>
        <Radio
          checked={isSelected} // Only check the radio button if the address is selected
          value={address.id}
          onChange={handleChange} // Trigger the change handler
          name="address-radio-button"
        />
      </div>
      <div className='space-y-3 pt-3'>
        <h1>{address.name}</h1>
        <p>{address.city}, {address.state}, {address.zip}</p>
        <p><strong>Mobile :</strong> {address.mobile}</p>
      </div>
    </div>
  );
};

export default UserAddressCard;
