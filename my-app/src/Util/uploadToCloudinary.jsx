// import React, { useState } from 'react';

// const UploadToCloudinary = () => {
//   const [uploadImage, setUploadImage] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');

//   // Cloudinary upload function
//   const uploadToCloudinary = async (pics) => {
//     const cloud_name = "dhhiuwl8x";
//     const upload_preset = "shopping";

//     if (pics) {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", upload_preset);
//       data.append("cloud_name", cloud_name);

//       try {
//         const res = await fetch("https://api.cloudinary.com/v1_1/" + cloud_name + "/upload", {
//           method: "POST",
//           body: data,
//         });
//         const fileData = await res.json();
//         return fileData.url;
//       } catch (error) {
//         console.error("Error uploading image to Cloudinary", error);
//         return null;
//       }
//     } else {
//       console.log("Error: pics not found");
//       return null;
//     }
//   };

//   // Handler for image change
//   const handleImageChange = async (event) => {
//     const file = event.target.files[0];
//     setUploadImage(true);  // Show a loading spinner or indicator
//     const imageUrl = await uploadToCloudinary(file);  // Upload the image
//     if (imageUrl) {
//       setImageUrl(imageUrl);  // Set the image URL if upload is successful
//     }
//     setUploadImage(false);  // Hide the loading indicator
//   };

//   return (
//     <div>
//       <h2>Upload Product Images</h2>
      
//       {/* Image Upload Section */}
//       <input 
//         type="file" 
//         accept="image/*" 
//         onChange={handleImageChange} 
//         disabled={uploadImage}
//       />
      
//       {uploadImage && <p>Uploading...</p>} {/* Show loading message while uploading */}
      
//       {imageUrl && (
//         <div>
//           <p>Uploaded Image:</p>
//           <img src={imageUrl} alt="Uploaded" width="200" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadToCloudinary;  // Default export



export const UploadToCloudinary=async(pics)=>{
  const cloud_name = "dhhiuwl8x";
  const upload_preset = "shopping";

  if(pics){
      const data = new FormData()
      data.append("file", pics)
      data.append("upload_preset", upload_preset)
      data.append("cloud_name", cloud_name)

      const res = await fetch("https://api.cloudinary.com/v1_1/" + cloud_name + "/upload", {
          method : "POST",
          body: data
      })

      const fileData = await res.json();
      return fileData.url;
  }
  else{
      console.log("error : pics not found")
  }
}