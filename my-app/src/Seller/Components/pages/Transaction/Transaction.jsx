// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Divider, Box } from '@mui/material';

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
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   padding: theme.spacing(3),
//   backgroundColor: theme.palette.background.default,
//   borderRadius: theme.shape.borderRadius,
// }));

// const DialogHeader = styled(Typography)(({ theme }) => ({
//   fontSize: '1.2rem',
//   fontWeight: 600,
//   marginBottom: theme.spacing(2),
//   color: theme.palette.primary.main,
// }));

// const UserInfo = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   padding: theme.spacing(1),
//   border: `1px solid ${theme.palette.divider}`,
//   borderRadius: theme.shape.borderRadius,
// }));

// const UserDetail = styled(Typography)(({ theme }) => ({
//   fontSize: '1rem',
//   fontWeight: 500,
//   marginBottom: theme.spacing(1),
// }));

// export default function Transaction() {
//   const [orders, setOrders] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [openDialog, setOpenDialog] = React.useState(false); // State for dialog visibility
//   const [selectedUser, setSelectedUser] = React.useState(null); // Selected user data
//   const token = localStorage.getItem('sellerToken');

//   // Fetch order data from the backend
//   React.useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/seller/orders', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         if (response.status === 202) {
//           setOrders(response.data); // Set the response data as orders
//         }
//       } catch (error) {
//         console.error('Error fetching orders', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [token]);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     setOpenDialog(true); // Open the dialog when the username is clicked
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false); // Close the dialog
//     setSelectedUser(null); // Reset selected user data
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Date</StyledTableCell>
//               <StyledTableCell>Customer Details</StyledTableCell>
//               <StyledTableCell>Order</StyledTableCell>
//               <StyledTableCell align="right">Amount</StyledTableCell>
//               <StyledTableCell>Payment Status</StyledTableCell>
//               <StyledTableCell>Delivery Date</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {orders.map((order) => (
//               <StyledTableRow key={order.id}>
//                 <StyledTableCell component="th" scope="row">
//                   {new Date(order.orderDate).toLocaleDateString()} {/* Format the date */}
//                 </StyledTableCell>
//                 <StyledTableCell>
//                   <span
//                     style={{ cursor: 'pointer', color: 'blue' }}
//                     onClick={() => handleUserClick(order.user)}
//                   >
//                     {order.user?.fullName || 'N/A'}
//                   </span>
//                 </StyledTableCell>
//                 <StyledTableCell>{order.orderId || 'N/A'}</StyledTableCell> {/* Order ID */}
//                 <StyledTableCell align="right">${order.totalSellingPrice.toFixed(2)}</StyledTableCell> {/* Order amount */}
//                 <StyledTableCell>{order.paymentStatus || 'N/A'}</StyledTableCell> {/* Payment Status */}
//                 <StyledTableCell>{order.deliverDate ? new Date(order.deliverDate).toLocaleDateString() : 'N/A'}</StyledTableCell> {/* Delivery Date */}
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Dialog to show user details */}
//       <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
//         <DialogTitle>User Details</DialogTitle>
//         <StyledDialogContent>
//           {selectedUser ? (
//             <div>
//               {/* <DialogHeader>User Information</DialogHeader> */}
//               <UserInfo>
//                 <UserDetail><strong>Name:</strong> {selectedUser.fullName}</UserDetail>
//                 <UserDetail><strong>Email:</strong> {selectedUser.email}</UserDetail>
//                 <UserDetail><strong>Mobile:</strong> {selectedUser.mobile}</UserDetail>
//                 <UserDetail><strong>Address:</strong> {selectedUser.addresses[0]?.address || 'N/A'}</UserDetail>
//               </UserInfo>
//               <Divider />
//             </div>
//           ) : (
//             <Typography variant="body2" color="textSecondary">No user selected.</Typography>
//           )}
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }




import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Divider, Box, TablePagination } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
}));

const DialogHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const UserInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const UserDetail = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

export default function Transaction() {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false); // State for dialog visibility
  const [selectedUser, setSelectedUser] = React.useState(null); // Selected user data
  const [page, setPage] = React.useState(0); // State for current page
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // State for rows per page
  const token = localStorage.getItem('sellerToken');

  // Fetch order data from the backend
  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/seller/orders', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 202) {
          setOrders(response.data); // Set the response data as orders
        }
      } catch (error) {
        console.error('Error fetching orders', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setOpenDialog(true); // Open the dialog when the username is clicked
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    setSelectedUser(null); // Reset selected user data
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page change
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Slice orders based on current page and rows per page
  const paginatedOrders = orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Customer Details</StyledTableCell>
              <StyledTableCell>Order</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell>Payment Status</StyledTableCell>
              <StyledTableCell>Delivery Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell component="th" scope="row">
                  {new Date(order.orderDate).toLocaleDateString()} {/* Format the date */}
                </StyledTableCell>
                <StyledTableCell>
                  <span
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => handleUserClick(order.user)}
                  >
                    {order.user?.fullName || 'N/A'}
                  </span>
                </StyledTableCell>
                <StyledTableCell>{order.orderId || 'N/A'}</StyledTableCell> {/* Order ID */}
                <StyledTableCell align="right">${order.totalSellingPrice.toFixed(2)}</StyledTableCell> {/* Order amount */}
                <StyledTableCell>{order.paymentStatus || 'N/A'}</StyledTableCell> {/* Payment Status */}
                <StyledTableCell>{order.deliverDate ? new Date(order.deliverDate).toLocaleDateString() : 'N/A'}</StyledTableCell> {/* Delivery Date */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Dialog to show user details */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>User Details</DialogTitle>
        <StyledDialogContent>
          {selectedUser ? (
            <div>
              {/* <DialogHeader>User Information</DialogHeader> */}
              <UserInfo>
                <UserDetail><strong>Name:</strong> {selectedUser.fullName}</UserDetail>
                <UserDetail><strong>Email:</strong> {selectedUser.email}</UserDetail>
                <UserDetail><strong>Mobile:</strong> {selectedUser.mobile}</UserDetail>
                <UserDetail><strong>Address:</strong> {selectedUser.addresses[0]?.address || 'N/A'}</UserDetail>
              </UserInfo>
              <Divider />
            </div>
          ) : (
            <Typography variant="body2" color="textSecondary">No user selected.</Typography>
          )}
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
