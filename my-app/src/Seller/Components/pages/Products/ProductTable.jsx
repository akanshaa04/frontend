import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TablePagination } from '@mui/material';
import { Edit } from '@mui/icons-material';
import axios from 'axios';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductTable() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalProducts, setTotalProducts] = React.useState(0); // To hold the total number of products

  // Fetch products on component mount or page change
  React.useEffect(() => {
    const fetchProducts = async () => {
      const sellerToken = localStorage.getItem('sellerToken');
      if (!sellerToken) {
        setError('Seller token not found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/seller/products', {
          headers: {
            Authorization: `Bearer ${sellerToken}`,
          },
          params: {
            sellerId: 1,  // Replace with actual seller ID
            page: page,
            size: rowsPerPage,
          },
        });

        setProducts(response.data.content);  // Assuming the API returns `content` as product list
        setTotalProducts(response.data.totalElements); // Update the total products count
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Update page state when page changes
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Update rows per page
    setPage(0); // Reset to first page when rows per page changes
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-1 flex-wrap">
                  {/* Display images if available */}
                  {product.images && product.images.map((image, index) => (
                    <img
                      key={index}
                      className="w-20 rounded-md"
                      alt={`Product Image ${index + 1}`}
                      src={image}
                    />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{product.title}</StyledTableCell>
              <StyledTableCell align="right">₹{product.mrp}</StyledTableCell>
              <StyledTableCell align="right">₹{product.sellingPrice}</StyledTableCell>
              <StyledTableCell align="right">{product.color}</StyledTableCell>
              <StyledTableCell align="right">
                <Button size="small">{product.quantity ? 'in_stock' : 'out_of_stock'}</Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton color="primary" size="small">
                  <Edit />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalProducts}  // Use total number of products from the backend
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
