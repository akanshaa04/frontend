import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useAppDispatch, useAppSelector } from '../../../../State/Store';
// import { fetchSellerProducts } from '../../../../State/seller/sellerProductSlice';
import { Button, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

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

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductTable() {
  // const dispatch = useAppDispatch();
  // const { sellerProducts } = useAppSelector(store => store);
  // React.useEffect(() => {
  //   dispatch(fetchSellerProducts(localStorage.getItem('jwt')));
  // }, []);

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
  <StyledTableRow>
    <StyledTableCell component="th" scope="row">
      <div className="flex gap-1 flex-wrap">
        {/* Static images */}
        <img className="w-20 rounded-md" alt="" src="path/to/image1.jpg" />
        <img className="w-20 rounded-md" alt="" src="path/to/image2.jpg" />
      </div>
    </StyledTableCell>
    <StyledTableCell align="right">Product Title 1</StyledTableCell>
    <StyledTableCell align="right">₹1000</StyledTableCell>
    <StyledTableCell align="right">₹800</StyledTableCell>
    <StyledTableCell align="right">Red</StyledTableCell>
    <StyledTableCell align="right">
      <Button size="small">
        in_stock
      </Button>
    </StyledTableCell>
    <StyledTableCell align="right">
      <IconButton color="primary" size="small">
        <Edit />
      </IconButton>
    </StyledTableCell>
  </StyledTableRow>

  <StyledTableRow>
    <StyledTableCell component="th" scope="row">
      <div className="flex gap-1 flex-wrap">
        {/* Static images */}
        <img className="w-20 rounded-md" alt="" src="path/to/image3.jpg" />
        <img className="w-20 rounded-md" alt="" src="path/to/image4.jpg" />
      </div>
    </StyledTableCell>
    <StyledTableCell align="right">Product Title 2</StyledTableCell>
    <StyledTableCell align="right">₹1200</StyledTableCell>
    <StyledTableCell align="right">₹950</StyledTableCell>
    <StyledTableCell align="right">Blue</StyledTableCell>
    <StyledTableCell align="right">
      <Button size="small">
        in_stock
      </Button>
    </StyledTableCell>
    <StyledTableCell align="right">
      <IconButton color="primary" size="small">
        <Edit />
      </IconButton>
    </StyledTableCell>
  </StyledTableRow>

  <StyledTableRow>
    <StyledTableCell component="th" scope="row">
      <div className="flex gap-1 flex-wrap">
        {/* Static images */}
        <img className="w-20 rounded-md" alt="" src="path/to/image5.jpg" />
        <img className="w-20 rounded-md" alt="" src="path/to/image6.jpg" />
      </div>
    </StyledTableCell>
    <StyledTableCell align="right">Product Title 3</StyledTableCell>
    <StyledTableCell align="right">₹1500</StyledTableCell>
    <StyledTableCell align="right">₹1200</StyledTableCell>
    <StyledTableCell align="right">Green</StyledTableCell>
    <StyledTableCell align="right">
      <Button size="small">
        in_stock
      </Button>
    </StyledTableCell>
    <StyledTableCell align="right">
      <IconButton color="primary" size="small">
        <Edit />
      </IconButton>
    </StyledTableCell>
  </StyledTableRow>

  <StyledTableRow>
    <StyledTableCell component="th" scope="row">
      <div className="flex gap-1 flex-wrap">
        {/* Static images */}
        <img className="w-20 rounded-md" alt="" src="path/to/image7.jpg" />
        <img className="w-20 rounded-md" alt="" src="path/to/image8.jpg" />
      </div>
    </StyledTableCell>
    <StyledTableCell align="right">Product Title 4</StyledTableCell>
    <StyledTableCell align="right">₹2000</StyledTableCell>
    <StyledTableCell align="right">₹1600</StyledTableCell>
    <StyledTableCell align="right">Black</StyledTableCell>
    <StyledTableCell align="right">
      <Button size="small">
        in_stock
      </Button>
    </StyledTableCell>
    <StyledTableCell align="right">
      <IconButton color="primary" size="small">
        <Edit />
      </IconButton>
    </StyledTableCell>
  </StyledTableRow>
</TableBody>

      </Table>
    </TableContainer>
  );
}