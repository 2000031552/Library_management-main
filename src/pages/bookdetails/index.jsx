import React from 'react';
// import { useParams } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { mockDataBookdetails } from '../../data/mockData';
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
const BookDetails = () => {
//   const { id } = useParams();
//   const book = mockDataBookdetails.find((book) => book.id === parseInt(id));

//   if (!book) {
//     return <Typography variant="h5">Book not found</Typography>;
//   }
const theme = useTheme();
const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "userid", headerName: "User ID", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "ISBN", headerName: "ISBN", width: 150 },
    
    { field: "borroweddate", headerName: "Borrowed Date", width: 150 },
    { field: "returndate", headerName: "Return Date", width: 150 },
    { field: "status", headerName: "Status" , width: 150}
  ];

  return (
    <Box m="16px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Status" />
        
        
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
      <DataGrid
          rows={mockDataBookdetails}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
           
        />
    </Box>
    </Box>
  );
};

export default BookDetails;
