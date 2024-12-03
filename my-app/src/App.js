// import React from 'react';
// import './App.css';
// import Navbar from './Customer/Components/Navbar/Navbar';
// import { ThemeProvider } from '@mui/material';
// import customTheme from './Theme/CustomTheme';
// import Home from './Customer/Pages/Home/Home';
// import Product from './Customer/Pages/Product/Product';
// import ProductDetails from './Customer/Pages/PageDetails/ProductDetails';
// import Cart from './Customer/Pages/Cart/Cart';
// import { Route, Router, Routes } from 'react-router-dom';
// import CategorySheet from './Customer/Components/Navbar/CategorySheet';

// function App() {
//   return (
//     <div className="">
//       <ThemeProvider theme={customTheme}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products/:category" element={<Product />} />
//           <Route
//             path="/product-details/:categoryId/:name/:productId"
//             element={<ProductDetails />}
//           />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>

          
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './Customer/Components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import customTheme from './Theme/CustomTheme';
import Home from './Customer/Pages/Home/Home';
import Product from './Customer/Pages/Product/Product';
import ProductDetails from './Customer/Pages/PageDetails/ProductDetails';
import Cart from './Customer/Pages/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import LoginSignupModal from './Customer/Pages/Auth/LoginSignupModal';
import SellerDashboard from './Seller/Components/pages/SellerDashBoard/SellerDashboard';
import Products from './Seller/Components/pages/Products/Products';
import AddProduct from './Seller/Components/pages/Products/AddProduct';
import Payment from './Seller/Components/pages/Payment/Payment';
import Transaction from './Seller/Components/pages/Transaction/Transaction';
import Profile from './Seller/Components/pages/Account/Profile';
import Orders from './Seller/Components/pages/Orders/Orders';
import BecomeSeller from './Customer/Pages/BecomeSeller/BecomeSeller';

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={<LoginSignupModal isOpen={true} onClose={() => window.history.back()} />}
          />
                      <Route path="/become-seller" element={<BecomeSeller/>} />

          <Route path="/seller/*" element={<SellerDashboard />} />

        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
