// import React, { useState, useEffect } from 'react';
// import UserAddressCard from './UserAddressCard';

// const Address = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedAddressId, setSelectedAddressId] = useState(null); // Track selected address
  
//   // Fetch user data from the backend
//   useEffect(() => {
//     const token = localStorage.getItem('userToken'); // Get token from localStorage
//     if (token) {
//       // Fetch user profile data
//       fetch('http://localhost:8080/users/profile', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`, // Pass token in Authorization header
//         },
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch user data');
//           }
//           return response.json();
//         })
//         .then(data => {
//           setUserData(data); // Store the user data
//           setLoading(false); // Stop loading
//         })
//         .catch(error => {
//           setError(error.message); // Handle error
//           setLoading(false); // Stop loading
//         });
//     } else {
//       setLoading(false);
//       setError('User is not authenticated');
//     }
//   }, []);

//   const handleAddressChange = (addressId) => {
//     setSelectedAddressId(addressId); // Update the selected address ID
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className='space-y-3'>
//       {/* Render address cards dynamically */}
//       {userData && userData.addresses && userData.addresses.length > 0 ? (
//         userData.addresses.map((address) => (
//           <UserAddressCard
//             key={address.id}
//             address={address}
//             isSelected={address.id === selectedAddressId} // Pass selected state
//             onSelect={handleAddressChange} // Handle selection change
//           />
//         ))
//       ) : (
//         <div>No addresses found</div>
//       )}
//     </div>
//   );
// };

// export default Address;





import React, { useState, useEffect } from 'react';
import UserAddressCard from './UserAddressCard';
import AddressForm from '../Checkout/Addressform';

const Address = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null); // Track selected address
  const [showForm, setShowForm] = useState(false); // Manage form visibility

  // Fetch user data from the backend
  useEffect(() => {
    const token = localStorage.getItem('userToken'); // Get token from localStorage
    if (token) {
      // Fetch user profile data
      fetch('http://localhost:8080/users/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Pass token in Authorization header
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data); // Store the user data
          setLoading(false); // Stop loading
        })
        .catch(error => {
          setError(error.message); // Handle error
          setLoading(false); // Stop loading
        });
    } else {
      setLoading(false);
      setError('User is not authenticated');
    }
  }, []);

  const handleAddressChange = (addressId) => {
    setSelectedAddressId(addressId); // Update the selected address ID
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-3">
      <button onClick={() => setShowForm(true)}>Add New Address</button> {/* Button to show form */}
      
      {/* Conditionally render AddressForm based on showForm */}
      {showForm && <AddressForm onClose={() => setShowForm(false)} />}
      
      {/* Render address cards dynamically */}
      {userData && userData.addresses && userData.addresses.length > 0 ? (
        userData.addresses.map((address) => (
          <UserAddressCard
            key={address.id}
            address={address}
            isSelected={address.id === selectedAddressId} // Pass selected state
            onSelect={handleAddressChange} // Handle selection change
          />
        ))
      ) : (
        <div>No addresses found</div>
      )}
    </div>
  );
};

export default Address;
