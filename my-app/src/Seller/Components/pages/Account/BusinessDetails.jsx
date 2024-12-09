// import { Box, Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import React from "react";

// const BusinessDetails = () => {
//   const formik = useFormik({
//     initialValues: {
//       businessName: "",
//       GSTIN: "",
//       accountStatus: "",
//     },
//     onSubmit: (values) => {
//       console.log("form submitted, ", values);
//     },
//   });

//   return (
//     <div className="space-y-4">
//       <TextField
//         fullWidth
//         name="businessName"
//         label="Business Name"
//         value={formik.values.businessName}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.businessName && Boolean(formik.errors.businessName)}
//         helperText={formik.touched.businessName && formik.errors.businessName}
//       />
//       <TextField
//         fullWidth
//         name="GSTIN"
//         label="GSTIN"
//         value={formik.values.GSTIN}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
//         helperText={formik.touched.GSTIN && formik.errors.GSTIN}
//       />
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <Button
//           variant="contained"
//           onClick={formik.handleSubmit} // Your submit function here
//           sx={{
//             width: 'auto',
//             maxWidth: '150px',
//             padding: '8px 16px', // Optional: Adjust padding for a more compact look
//           }}
//         >
//           Submit
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default BusinessDetails;



// import { Box, Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";

// const BusinessDetails = () => {
//   // Setting up initial state for form
//   const [initialValues, setInitialValues] = useState({
//     businessName: "",
//     businessEmail: "",
//     businessMobile: "",
//     businessAddress: "",
//   });

//   const [error, setError] = useState("");

//   // Fetch existing business details on component mount
//   useEffect(() => {
//     const fetchBusinessDetails = async () => {
//       const sellerToken = localStorage.getItem("sellerToken");

//       if (!sellerToken) {
//         setError("Authorization token is missing.");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:8080/seller/profile", {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${sellerToken}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(`Failed to fetch business details: ${errorData.message || response.statusText}`);
//         }

//         const data = await response.json();
//         console.log("Fetched Seller Data:", data); // Add this log to inspect API response
        
//         // Access businessDetails within the fetched data and update form
//         if (data.businessDetails) {
//           setInitialValues({
//             businessName: data.businessDetails.businessName || "",
//             businessEmail: data.businessDetails.businessEmail || "",
//             businessMobile: data.businessDetails.businessMobile || "",
//             businessAddress: data.businessDetails.businessAddress || "",
//           });
//         }
//       } catch (err) {
//         console.log("Error:", err);
//         setError(err.message);
//       }
//     };

//     fetchBusinessDetails();
//   }, []);

//   const formik = useFormik({
//     enableReinitialize: true, // Allow form to reinitialize with new initialValues when the data is fetched
//     initialValues,
//     onSubmit: (values) => {
//       console.log("Form submitted with values: ", values);
//       // You can call your API to update the business details here
//     },
//   });

//   return (
//     <div className="space-y-4">
//       {/* Business Name Field */}
//       <TextField
//         fullWidth
//         name="businessName"
//         label="Business Name"
//         value={formik.values.businessName}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.businessName && Boolean(formik.errors.businessName)}
//         helperText={formik.touched.businessName && formik.errors.businessName}
//       />

//       {/* Business Email Field */}
//       <TextField
//         fullWidth
//         name="businessEmail"
//         label="Business Email"
//         value={formik.values.businessEmail}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
//         helperText={formik.touched.businessEmail && formik.errors.businessEmail}
//       />

//       {/* Business Mobile Field */}
//       <TextField
//         fullWidth
//         name="businessMobile"
//         label="Business Mobile"
//         value={formik.values.businessMobile}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.businessMobile && Boolean(formik.errors.businessMobile)}
//         helperText={formik.touched.businessMobile && formik.errors.businessMobile}
//       />

//       {/* Business Address Field */}
//       <TextField
//         fullWidth
//         name="businessAddress"
//         label="Business Address"
//         value={formik.values.businessAddress}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
//         helperText={formik.touched.businessAddress && formik.errors.businessAddress}
//       />

//       {/* Submit Button */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <Button
//           variant="contained"
//           onClick={formik.handleSubmit}
//           sx={{
//             width: 'auto',
//             maxWidth: '150px',
//             padding: '8px 16px',
//           }}
//         >
//           Submit
//         </Button>
//       </Box>

//       {/* Error Message */}
//       {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//     </div>
//   );
// };

// export default BusinessDetails;



import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const BusinessDetails = () => {
  const [initialValues, setInitialValues] = useState({
    businessName: "",
    businessEmail: "",
    businessMobile: "",
    businessAddress: "",
  });

  const [error, setError] = useState("");

  // Fetch existing business details on component mount
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      const sellerToken = localStorage.getItem("sellerToken");

      if (!sellerToken) {
        setError("Authorization token is missing.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/seller/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${sellerToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch business details: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Seller Data:", data);

        if (data.businessDetails) {
          setInitialValues({
            businessName: data.businessDetails.businessName || "",
            businessEmail: data.businessDetails.businessEmail || "",
            businessMobile: data.businessDetails.businessMobile || "",
            businessAddress: data.businessDetails.businessAddress || "",
          });
        }
      } catch (err) {
        console.log("Error:", err);
        setError(err.message);
      }
    };

    fetchBusinessDetails();
  }, []);

  // Formik form setup
  const formik = useFormik({
    enableReinitialize: true, // Allow form to reinitialize with new initialValues when the data is fetched
    initialValues,
    onSubmit: async (values) => {
      const sellerToken = localStorage.getItem("sellerToken");

      if (!sellerToken) {
        setError("Authorization token is missing.");
        return;
      }

      try {
        // Prepare the data to send to backend
        const updatedBusinessDetails = {
          businessName: values.businessName,
          businessEmail: values.businessEmail,
          businessMobile: values.businessMobile,
          businessAddress: values.businessAddress,
        };

        // Send a PUT or PATCH request to update the business details
        const response = await fetch("http://localhost:8080/seller", {
          method: "PATCH", // Assuming PATCH for partial updates
          headers: {
            "Authorization": `Bearer ${sellerToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBusinessDetails),
        });

        // Check if the response is successful
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to update business details: ${errorData.message || response.statusText}`);
        }

        // No alert, just clear previous errors
        setError(""); // Clear previous error message
        // Optionally, you can update the form state if you want to reflect the changes right after submit
        formik.setValues({
          ...formik.values,
          ...updatedBusinessDetails,
        });

        // Optionally log the updated details (can be removed for production)
        console.log("Updated Business Details:", updatedBusinessDetails);

      } catch (err) {
        console.log("Error:", err);
        setError(err.message); // Set error state to show the error message on the UI
      }
    },
  });

  return (
    <div className="space-y-4">
      {/* Business Name Field */}
      <TextField
        fullWidth
        name="businessName"
        label="Business Name"
        value={formik.values.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.businessName && Boolean(formik.errors.businessName)}
        helperText={formik.touched.businessName && formik.errors.businessName}
      />

      {/* Business Email Field */}
      <TextField
        fullWidth
        name="businessEmail"
        label="Business Email"
        value={formik.values.businessEmail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
        helperText={formik.touched.businessEmail && formik.errors.businessEmail}
      />

      {/* Business Mobile Field */}
      <TextField
        fullWidth
        name="businessMobile"
        label="Business Mobile"
        value={formik.values.businessMobile}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.businessMobile && Boolean(formik.errors.businessMobile)}
        helperText={formik.touched.businessMobile && formik.errors.businessMobile}
      />

      {/* Business Address Field */}
      <TextField
        fullWidth
        name="businessAddress"
        label="Business Address"
        value={formik.values.businessAddress}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
        helperText={formik.touched.businessAddress && formik.errors.businessAddress}
      />

      {/* Submit Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          onClick={formik.handleSubmit}
          sx={{
            width: 'auto',
            maxWidth: '150px',
            padding: '8px 16px',
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Error Message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default BusinessDetails;
