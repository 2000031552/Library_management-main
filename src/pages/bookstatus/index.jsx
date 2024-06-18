import React from 'react';
import { useContext,useState } from "react";
import { Box, useTheme , Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
// import { date } from "yup";

const Bookstatus = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
   

  const handleCellClick = (params) => {
    if (params.field === 'name') {
      navigate(`/bookdetails/${params.id}`);
    }
  };
  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "ISBN", headerName: "ISBN", width: 150 },
    {
      field: "name",
      headerName: "BookTitle",
      cellClassName: "name-column--cell",
      width: 200,
    },
    { field: "author", headerName: "Author", width: 200 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "borrowedcount", headerName: "Borrowedcount", width: 150 },
    { field: "overduecount", headerName: "Overduecount", width: 150 }
    
  ];
  const navigate = useNavigate();
   

  return (
    <Box m="16px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Books" subtitle="Books status Data" />
        
        
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onCellClick={handleCellClick}
        />
      </Box>
    </Box>
  );
};

export default Bookstatus;
