import React from 'react'
import ElectricCateogory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material';
import Storefront from '@mui/icons-material/Storefront';

const Home = () => {
  return (
    <div className='space-y-5 lg:space-y-10 relative pb-20'>
      <ElectricCateogory />
      <CategoryGrid />
      {/* <Deal /> */}

      <section className='py-20'>
        <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
          Shop By Category
        </h1>
        {/* <ShopByCategory /> */}
      </section>

   

      <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover flex items-center justify-start lg:justify-start'>
        <img className='w-full h-full object-cover' 
        // src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col items-start lg:items-start space-y-3 lg:text-4xl left-4 lg:left-[15rem] font-semibold'>
          {/* <h1>Sell Your Product</h1> */}
          {/* <p className='text-lg md:text-2xl'>with</p> */}
          {/* <p className='logo'>Trendly</p> */}
          <div className='pt-6'>
            {/* <Button
              // startIcon={<Storefront />}
              variant='contained'
              size='large'
              color='primary'
              className='text-white'
            >
              Become Seller
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
