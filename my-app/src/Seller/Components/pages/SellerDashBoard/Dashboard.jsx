// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   );
// };

// export default Dashboard;






import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Dashboard = () => {
  // Sample Data with Colorful, Vibrant Colors for the Charts
  const salesByCategory = {
    labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['#734F96', '#2A3D66', '#483D8B', '#4B0082', '#8B008B'], // Vibrant colors
        hoverBackgroundColor: ['#FF5733', '#33FF57', '#339BFF', '#F4C300', '#FF33D1'],
      },
    ],
  };

  const topSellingProducts = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Units Sold',
        data: [500, 400, 350, 200, 150],
        backgroundColor: '#191970', // Tomato red
        borderColor: '#191970',
        borderWidth: 1,
      },
    ],
  };

  const monthlyRevenueGrowth = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [1000, 1200, 1100, 1300, 1250, 1500], // Up and down fluctuations
        fill: false,
        borderColor: '#8B008B', // Orange red
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Seller Analysis Dashboard</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '45%' }}>
          <h3>Sales by Category</h3>
          <Pie data={salesByCategory} />
        </div>

        <div style={{ width: '45%' }}>
          <h3>Top-Selling Products</h3>
          <Bar data={topSellingProducts} />
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Monthly Revenue Growth</h3>
        <Line data={monthlyRevenueGrowth} />
      </div>
    </div>
  );
};

export default Dashboard;
