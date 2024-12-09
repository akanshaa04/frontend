// import React from 'react';
// import ProfileFieldCard from './ProfileFieldCard'
// import { Divider } from '@mui/material';

// const UserDetails = () => {
//   return (
//     <div className="flex justify-center py-10">
//       <div className="w-full lg:w-[70%]">
//         <div className="flex items-center pb-3 justify-between">
//           <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
//         </div>
//         <div>
//           <ProfileFieldCard keys="Name" value="Aman" />
//           <Divider />
//           <ProfileFieldCard keys="Email" value="aman@gmail.com" />
//           <Divider />
//           <ProfileFieldCard keys="Mobile" value="1234567890" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;








import React from 'react';
import ProfileFieldCard from './ProfileFieldCard';
import { Divider } from '@mui/material';

const UserDetails = ({ userData }) => {
  // If userData is not provided, show a loading or error message
  if (!userData) {
    return <div>Loading...</div>; // Can also be a spinner or redirect to login
  }

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div>
          {/* Dynamic user details passed as props */}
          <ProfileFieldCard keys="Name" value={userData.fullName} />
          <Divider />
          <ProfileFieldCard keys="Email" value={userData.email} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={userData.mobile} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
