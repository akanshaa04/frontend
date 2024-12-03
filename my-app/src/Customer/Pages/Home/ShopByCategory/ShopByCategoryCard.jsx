import React from 'react'
import './ShopByCategory.css'

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[160px] lg:w-[249px] lg:h-[300px] rounded-lg bg-primary-color">
        <img 
          className="rounded-lg group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGtpdGNoZW58ZW58MHx8MHx8fDA%3Ds" 
          alt="Category Image"
        />
      </div>
      <h1>Kitchen & Table</h1>
    </div>
  )
}

export default ShopByCategoryCard
