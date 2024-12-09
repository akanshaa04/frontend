// import React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function OrderTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Order Id</StyledTableCell>
//             <StyledTableCell>Products</StyledTableCell>
//             <StyledTableCell align="right">Shipping Address</StyledTableCell>
//             <StyledTableCell align="right">Order Status</StyledTableCell>
//             <StyledTableCell align="right">Update</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell>{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import axios from "axios"; // Make sure to install axios using npm or yarn

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//         backgroundColor: theme.palette.action.hover,
//     },
//     "&:last-child td, &:last-child th": {
//         border: 0,
//     },
// }));

// const OrderTable = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const token = localStorage.getItem("sellerToken");

//     useEffect(() => {
//         // Fetch orders from the backend
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/seller/orders", {
//                     headers: {
//                         "Authorization": `Bearer ${token}`, // Replace with actual JWT token
//                     }
//                 });
//                 setOrders(response.data);
//                 console.log(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching orders", error);
//                 setLoading(false);
//             }
//         };
//         fetchOrders();
//     }, [token]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>Order Id</StyledTableCell>
//                         <StyledTableCell>Products</StyledTableCell>
//                         <StyledTableCell align="right">Shipping Address</StyledTableCell>
//                         <StyledTableCell align="right">Order Status</StyledTableCell>
//                         <StyledTableCell align="right">Update</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {orders.map((order) => (
//                         order.orderItems.map((item) => (
//                             <StyledTableRow key={item.id}>
//                                 <StyledTableCell component="th" scope="row">
//                                     {order.orderId}
//                                 </StyledTableCell>
                          
//                                 <StyledTableCell>
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     {order.shippingAddress ? `${order.shippingAddress.address}, ${order.shippingAddress.city}` : "N/A"}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">{order.orderStatus}</StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     <button onClick={() => updateOrderStatus(order.id)}>
//                                         Update
//                                     </button>
//                                 </StyledTableCell>
//                             </StyledTableRow>
//                         ))
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// // Dummy function to handle status update
// const updateOrderStatus = (orderId) => {
//     console.log("Updating order with ID:", orderId);
// };

// export default OrderTable;





// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import axios from "axios";
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

// // Styling components using MUI
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//         backgroundColor: theme.palette.action.hover,
//     },
//     "&:last-child td, &:last-child th": {
//         border: 0,
//     },
// }));

// const statusColors = {
//     PENDING: "#FFA500", // Orange
//     PLACED: "#00BFFF",  // Deep Sky Blue
//     CONFIRMED: "#008000", // Green
//     SHIPPED: "#0000FF", // Blue
//     DELIVERED: "#32CD32", // Lime Green
//     CANCELLED: "#FF6347", // Tomato
// };

// const statusLabels = {
//     PENDING: "Pending",
//     PLACED: "Placed",
//     CONFIRMED: "Confirmed",
//     SHIPPED: "Shipped",
//     DELIVERED: "Delivered",
//     CANCELLED: "Cancelled",
// };

// const OrderTable = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [selectedStatus, setSelectedStatus] = useState("");
//     const [selectedOrderId, setSelectedOrderId] = useState(null);
//     const token = localStorage.getItem("sellerToken");

//     useEffect(() => {
//         // Fetch orders from the backend
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/api/seller/orders", {
//                     headers: {
//                         "Authorization": `Bearer ${token}`,
//                     },
//                 });
//                 setOrders(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching orders", error);
//                 setLoading(false);
//             }
//         };
//         fetchOrders();
//     }, [token]);

//     // Function to handle changing status
//     const handleChangeStatus = (orderId, currentStatus) => {
//         setSelectedOrderId(orderId);
//         setSelectedStatus(currentStatus);
//         setOpenDialog(true); // Open the dialog to choose a new status
//     };

//     const handleUpdateStatus = async () => {
//         try {
//             // Make a PATCH request to update the status of the order
//             const response = await axios.patch(
//                 `http://localhost:8080/api/seller/orders/${selectedOrderId}/status/${selectedStatus}`,
//                 {},
//                 {
//                     headers: {
//                         "Authorization": `Bearer ${token}`,
//                     },
//                 }
//             );

//             // If the request was successful, update the orders state to reflect the updated status
//             if (response.status === 200) {
//                 // Optionally, update the orders state to reflect the updated status in the UI
//                 setOrders((prevOrders) =>
//                     prevOrders.map((order) =>
//                         order.id === selectedOrderId
//                             ? { ...order, orderStatus: selectedStatus }
//                             : order
//                     )
//                 );

//                 // Close the dialog
//                 setOpenDialog(false);

//                 // Reload the page
//                 window.location.reload();
//             }
//         } catch (error) {
//             console.error("Error updating order status", error);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell>Order Id</StyledTableCell>
//                             <StyledTableCell>Products</StyledTableCell>
//                             <StyledTableCell align="right">Shipping Address</StyledTableCell>
//                             <StyledTableCell align="right">Order Status</StyledTableCell>
//                             <StyledTableCell align="right">Update</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {orders.map((order) => (
//                             <StyledTableRow key={order.id}>
//                                 <StyledTableCell component="th" scope="row">
//                                     {order.orderId}
//                                 </StyledTableCell>
//                                 <StyledTableCell>
//                                     {order.orderItems
//                                         .map((item) => item.product?.title)
//                                         .join(", ") || "No Products"}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     {order.shippingAddress
//                                         ? `${order.shippingAddress.address}, ${order.shippingAddress.city}`
//                                         : "N/A"}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     <span
//                                         style={{
//                                             backgroundColor: statusColors[order.orderStatus],
//                                             color: "white",
//                                             padding: "5px 10px",
//                                             borderRadius: "15px",
//                                         }}
//                                     >
//                                         {statusLabels[order.orderStatus]}
//                                     </span>
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     <Button
//                                         onClick={() =>
//                                             handleChangeStatus(order.id, order.orderStatus)
//                                         }
//                                         variant="outlined"
//                                         color="primary"
//                                     >
//                                         Change Status
//                                     </Button>
//                                 </StyledTableCell>
//                             </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             {/* Modal for status update */}
//             <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//                 <DialogTitle>Update Order Status</DialogTitle>
//                 <DialogContent>
//                     <FormControl fullWidth>
//                         <InputLabel>Status</InputLabel>
//                         <Select
//                             value={selectedStatus}
//                             onChange={(e) => setSelectedStatus(e.target.value)}
//                         >
//                             <MenuItem value="PENDING">Pending</MenuItem>
//                             <MenuItem value="PLACED">Placed</MenuItem>
//                             <MenuItem value="CONFIRMED">Confirmed</MenuItem>
//                             <MenuItem value="SHIPPED">Shipped</MenuItem>
//                             <MenuItem value="DELIVERED">Delivered</MenuItem>
//                             <MenuItem value="CANCELLED">Cancelled</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpenDialog(false)} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleUpdateStatus} color="primary">
//                         Update
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// };

// export default OrderTable;



import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";

// Styling components using MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const statusColors = {
  PENDING: "#FFA500", // Orange
  PLACED: "#00BFFF",  // Deep Sky Blue
  CONFIRMED: "#008000", // Green
  SHIPPED: "#0000FF", // Blue
  DELIVERED: "#32CD32", // Lime Green
  CANCELLED: "#FF6347", // Tomato
};

const statusLabels = {
  PENDING: "Pending",
  PLACED: "Placed",
  CONFIRMED: "Confirmed",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const token = localStorage.getItem("sellerToken");

  useEffect(() => {
    // Fetch orders from the backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/seller/orders", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  const handleChangeStatus = (orderId, currentStatus) => {
    setSelectedOrderId(orderId);
    setSelectedStatus(currentStatus);
    setOpenDialog(true); // Open the dialog to choose a new status
  };

  const handleUpdateStatus = async () => {
    try {
      // Make a PATCH request to update the status of the order
      const response = await axios.patch(
        `http://localhost:8080/api/seller/orders/${selectedOrderId}/status/${selectedStatus}`,
        {},
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      console.log("Response from backend:", response);

      // If the request was successful, update the orders state to reflect the updated status
      if (response.status === 202) {
        console.log("kkkkkkkkkk" + response.status);
        // Optionally, update the orders state to reflect the updated status in the UI
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === selectedOrderId
              ? { ...order, orderStatus: selectedStatus }
              : order
          )
        );

        // Close the dialog
        setOpenDialog(false);

        // Reload the page after dialog closes (use a small timeout to allow the dialog close)
        setTimeout(() => {
          window.location.reload(); // Reload the page after status update
        }, 200); // 200ms delay for smooth UX
      }
    } catch (error) {
      console.error("Error updating order status", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order Id</StyledTableCell>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell align="right">Shipping Address</StyledTableCell>
              <StyledTableCell align="right">Order Status</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell component="th" scope="row">
                  {order.orderId}
                </StyledTableCell>
                <StyledTableCell>
                  {order.orderItems
                    .map((item) => item.product?.title)
                    .join(", ") || "No Products"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.shippingAddress
                    ? `${order.shippingAddress.address}, ${order.shippingAddress.city}`
                    : "N/A"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <span
                    style={{
                      backgroundColor: statusColors[order.orderStatus],
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "15px",
                    }}
                  >
                    {statusLabels[order.orderStatus]}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() =>
                      handleChangeStatus(order.id, order.orderStatus)
                    }
                    variant="outlined"
                    color="primary"
                  >
                    Change Status
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for status update */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Update Order Status</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="PENDING">Pending</MenuItem>
              <MenuItem value="PLACED">Placed</MenuItem>
              <MenuItem value="CONFIRMED">Confirmed</MenuItem>
              <MenuItem value="SHIPPED">Shipped</MenuItem>
              <MenuItem value="DELIVERED">Delivered</MenuItem>
              <MenuItem value="CANCELLED">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateStatus} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderTable;
