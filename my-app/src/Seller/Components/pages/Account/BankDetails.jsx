// import { Box, Button, TextField } from '@mui/material';
// import { useFormik } from 'formik';
// import React from 'react';

// const BankDetails = () => {
//     const formik = useFormik({
//         initialValues: {
//             accountNumber: "",
//             ifscCode: "",
//             accountHolderName: "",
//         },
//         onSubmit: (values) => {
//             console.log(values, "formik submitted");
//         }
//     });

//     return (
//         <div className="space-y-5">
//             <TextField
//                 fullWidth
//                 required
//                 name="accountNumber"
//                 label="Account Number"
//                 value={formik.values.accountNumber}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
//                 helperText={formik.touched.accountNumber && formik.errors.accountNumber}
//             />
//             <TextField
//                 fullWidth
//                 required
//                 name="ifscCode"
//                 label="IFSC Code"
//                 value={formik.values.ifscCode}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
//                 helperText={formik.touched.ifscCode && formik.errors.ifscCode}
//             />
//             <TextField
//                 fullWidth
//                 required
//                 name="accountHolderName"
//                 label="Account Holder Name"
//                 value={formik.values.accountHolderName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
//                 helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                 <Button
//                     variant="contained"
//                     onClick={formik.handleSubmit} // Your submit function here
//                     sx={{
//                         width: 'auto',
//                         maxWidth: '150px',
//                         padding: '8px 16px', // Optional: Adjust padding for a more compact look
//                     }}
//                 >
//                     Submit
//                 </Button>
//             </Box>
//         </div>
//     );
// };

// export default BankDetails;








// import { Box, Button, TextField } from '@mui/material';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';

// const BankDetails = () => {
//     const [errors, setErrors] = useState({});
//     const [touched, setTouched] = useState({});

//     const formik = useFormik({
//         initialValues: {
//             accountNumber: "",
//             ifscCode: "",
//             accountHolderName: "",
//         },
//         onSubmit: (values) => {
//             // Validate required fields
//             const errors = {};
//             if (!values.accountNumber) {
//                 errors.accountNumber = "Account number is required";
//             }
//             if (!values.ifscCode) {
//                 errors.ifscCode = "IFSC code is required";
//             }
//             if (!values.accountHolderName) {
//                 errors.accountHolderName = "Account holder name is required";
//             }

//             if (Object.keys(errors).length > 0) {
//                 setErrors(errors); // Set the error messages
//                 return;
//             }

//             console.log(values, "formik submitted");
//         },
//         // onBlur event to handle field-level errors
//         validateOnBlur: true,
//         validateOnChange: false,
//     });

//     const handleBlur = (e) => {
//         formik.handleBlur(e);
//         setTouched({
//             ...touched,
//             [e.target.name]: true,
//         });
//     };

//     return (
//         <div className="space-y-5">
//             <TextField
//                 fullWidth
//                 name="accountNumber"
//                 label="Account Number"
//                 value={formik.values.accountNumber}
//                 onChange={formik.handleChange}
//                 onBlur={handleBlur}
//                 error={touched.accountNumber && Boolean(errors.accountNumber)}
//                 helperText={touched.accountNumber && errors.accountNumber}
//             />
//             <TextField
//                 fullWidth
//                 name="ifscCode"
//                 label="IFSC Code"
//                 value={formik.values.ifscCode}
//                 onChange={formik.handleChange}
//                 onBlur={handleBlur}
//                 error={touched.ifscCode && Boolean(errors.ifscCode)}
//                 helperText={touched.ifscCode && errors.ifscCode}
//             />
//             <TextField
//                 fullWidth
//                 name="accountHolderName"
//                 label="Account Holder Name"
//                 value={formik.values.accountHolderName}
//                 onChange={formik.handleChange}
//                 onBlur={handleBlur}
//                 error={touched.accountHolderName && Boolean(errors.accountHolderName)}
//                 helperText={touched.accountHolderName && errors.accountHolderName}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                 <Button
//                     variant="contained"
//                     onClick={formik.handleSubmit} // Submit handler
//                     sx={{
//                         width: 'auto',
//                         maxWidth: '150px',
//                         padding: '8px 16px',
//                     }}
//                 >
//                     Submit
//                 </Button>
//             </Box>
//         </div>
//     );
// };

// export default BankDetails;


import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios or use fetch

const BankDetails = () => {
    const [loading, setLoading] = useState(false); // For loading state

    // Get the sellerToken from localStorage
    const sellerToken = localStorage.getItem('sellerToken'); 

    const formik = useFormik({
        initialValues: {
            accountNumber: "",
            ifscCode: "",
            accountHolderName: "",
        },
        validate: (values) => {
            const errors = {};

            // Validation for required fields
            if (!values.accountNumber) {
                errors.accountNumber = "Account number is required";
            }
            if (!values.ifscCode) {
                errors.ifscCode = "IFSC code is required";
            }
            if (!values.accountHolderName) {
                errors.accountHolderName = "Account holder name is required";
            }

            return errors;
        },
        onSubmit: (values) => {
            // If there are no validation errors, proceed with submit
            if (Object.keys(formik.errors).length === 0) {
                updateBankDetails(values);
            }
        },
    });

    const updateBankDetails = async (bankDetails) => {
        try {
            setLoading(true);

            // Prepare the updated seller object
            const updatedSeller = {
                bankDetails: {
                    accountNumber: bankDetails.accountNumber,
                    ifscCode: bankDetails.ifscCode,
                    accountHolderName: bankDetails.accountHolderName,
                },
            };

            if (!sellerToken) {
                console.error("Seller token is missing");
                setLoading(false);
                return;
            }

            // Make the PATCH request using axios
            const response = await axios.patch(
                'http://localhost:8080/seller', // Your API endpoint
                updatedSeller,
                {
                    headers: {
                        Authorization: `Bearer ${sellerToken}`, // JWT token from localStorage
                    },
                }
            );

            console.log("Updated Seller:", response.data); // Handle the response
        } catch (error) {
            console.error("Error updating seller:", error);
            // Optionally set error state here
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-5">
            <TextField
                fullWidth
                name="accountNumber"
                label="Account Number"
                value={formik.values.accountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
                helperText={formik.touched.accountNumber && formik.errors.accountNumber}
            />
            <TextField
                fullWidth
                name="ifscCode"
                label="IFSC Code"
                value={formik.values.ifscCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
                helperText={formik.touched.ifscCode && formik.errors.ifscCode}
            />
            <TextField
                fullWidth
                name="accountHolderName"
                label="Account Holder Name"
                value={formik.values.accountHolderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
                helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{
                        width: 'auto',
                        maxWidth: '150px',
                        padding: '8px 16px',
                    }}
                    disabled={loading} // Disable while loading
                >
                    {loading ? 'Updating...' : 'Submit'}
                </Button>
            </Box>
        </div>
    );
};

export default BankDetails;
