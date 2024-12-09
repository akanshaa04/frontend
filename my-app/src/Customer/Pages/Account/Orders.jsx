import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderItem from './OrderItem';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userToken = localStorage.getItem("userToken"); // Retrieving user token from localStorage

  // Fetch orders from backend API
  useEffect(() => {
    if (userToken) {
      axios
        .get('http://localhost:8080/api/orders/user', {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          console.log("Response Data:", response.data); // Log the response

          setOrders(response.data);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    }
  }, [userToken]);

  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>From anytime</p>
      </div>
      <div className="space-y-2">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderItem key={order.id} order={order} userToken={userToken} />
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
