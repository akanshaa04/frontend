import { ElectricBolt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import axios from 'axios';

const OrderItem = ({ order, userToken }) => {

  // Cancel order handler
  const cancelOrder = (orderId) => {
    axios
      .put(`http://localhost:8080/api/orders/${orderId}/cancel`, {}, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        // Handle successful cancellation
        alert("Order canceled successfully!");
      })
      .catch((error) => {
        console.error("Error canceling the order:", error);
        alert("Failed to cancel the order.");
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Debugging: Check the order data structure
  console.log(order);

  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" ssx={{ bgcolor: '#6a1b9a' }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          {/* Show status with color */}
          <h1 
            className={`font-bold ${order.orderStatus === 'CANCELLED' ? 'text-red-500' : 
              order.orderStatus === 'DELIVERED' ? 'text-green-500' : ''}`}
          >
            {order.orderStatus}
          </h1>
          
          {/* Only show 'Arriving By' if the order is not cancelled or delivered */}
          {order.orderStatus !== 'CANCELLED' && order.orderStatus !== 'DELIVERED' && (
            <p>Arriving By {formatDate(order.deliverDate)}</p>
          )}
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          {/* Check if orderItems exist and if the first orderItem has a product with images */}
          {order.orderItems && order.orderItems.length > 0 &&
            order.orderItems[0].product && order.orderItems[0].product.images &&
            order.orderItems[0].product.images.length > 0 ? (
            <img
              className="w-[70px]"
              src={order.orderItems[0].product.images[0]}
              alt="Product Image"
            />
          ) : (
            <img
              className="w-[70px]"
              src="path/to/default-image.jpg"
              alt="Default Product"
            />
          )}
        </div>

        <div className="w-full space-y-2">
          <h1 className="font-bold">
            {order.orderItems && order.orderItems.length > 0 ? order.orderItems[0].product.title : 'Product Title Not Available'}
          </h1>
          <p>
            {order.orderItems && order.orderItems.length > 0 ? order.orderItems[0].product.description : 'Product Description Not Available'}
          </p>
          <p><strong>Size:</strong> {order.orderItems[0].size}</p>
        </div>
      </div>

      {/* Conditional Cancel Button */}
      {order.orderStatus && order.orderStatus === 'PENDING' && (
        <button
          className="text-red-500 mt-2"
          onClick={() => cancelOrder(order.id)}
        >
          Cancel Order
        </button>
      )}
    </div>
  );
};

export default OrderItem;
