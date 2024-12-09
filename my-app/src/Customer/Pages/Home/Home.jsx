// import React from 'react'
// import ElectricCateogory from './ElectricCategory/ElectricCategory'
// import CategoryGrid from './CategoryGrid/CategoryGrid'
// import Deal from './Deal/Deal'
// import ShopByCategory from './ShopByCategory/ShopByCategory'
// import { Button } from '@mui/material';
// import Storefront from '@mui/icons-material/Storefront';
// import Footer from '../../Components/Footer/footer'

// const Home = () => {
//   return (
//     <div className='space-y-5 lg:space-y-10 relative pb-20'>
//       <ElectricCateogory />
//       <CategoryGrid />
//       {/* <Deal /> */}

//       {/* <section className='py-20'>
//         <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
//           Shop By Category
//         </h1>
//         <ShopByCategory />
//       </section> */}

   

//       <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover flex items-center justify-start lg:justify-start'>
//         <img className='w-full h-full object-cover' 
//         // src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <div className='absolute flex flex-col items-start lg:items-start space-y-3 lg:text-4xl left-4 lg:left-[15rem] font-semibold'>
//           {/* <h1>Sell Your Product</h1> */}
//           {/* <p className='text-lg md:text-2xl'>with</p> */}
//           {/* <p className='logo'>Trendly</p> */}
//           <div className='pt-6'>
//             {/* <Button
//               // startIcon={<Storefront />}
//               variant='contained'
//               size='large'
//               color='primary'
//               className='text-white'
//             >
//               Become Seller
//             </Button> */}
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default Home;









import React from 'react';
import ElectricCateogory from './ElectricCategory/ElectricCategory';
import CategoryGrid from './CategoryGrid/CategoryGrid';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Footer from '../../Components/Footer/footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Home = () => {
  return (
    <div className='space-y-5 lg:space-y-10 relative pb-20'>
      <ElectricCateogory />
      <CategoryGrid />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-gray-200">
        <h2 className="text-3xl font-bold text-center text-primary-color pb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          <Card className="shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product"
              className="w-full h-[250px] object-cover"
            />
            <CardContent>
              <Typography variant="h6">Product 1</Typography>
              <Typography variant="body2" color="textSecondary">
                A great product to buy.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>Shop Now</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product"
              className="w-full h-[250px] object-cover"
            />
            <CardContent>
              <Typography variant="h6">Product 2</Typography>
              <Typography variant="body2" color="textSecondary">
                A great product to buy.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>Shop Now</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product"
              className="w-full h-[250px] object-cover"
            />
            <CardContent>
              <Typography variant="h6">Product 3</Typography>
              <Typography variant="body2" color="textSecondary">
                A great product to buy.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>Shop Now</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/300"
              alt="Featured Product"
              className="w-full h-[250px] object-cover"
            />
            <CardContent>
              <Typography variant="h6">Product 4</Typography>
              <Typography variant="body2" color="textSecondary">
                A great product to buy.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>Shop Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Slider / New Arrivals */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-primary-color pb-10">New Arrivals</h2>
        <div className="relative h-[450px]">
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            className="w-full h-full"
          >
            <div>
              <img
                src=""
                alt="New Arrival"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1500x450"
                alt="New Arrival"
                className="w-full h-full object-cover"
              />
            </div>
          </Carousel>
        </div>
      </section>

    </div>
  );
};

export default Home;
