import React from 'react';
import { Box, useTheme, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const sampleData = [
  { requestId: 1, userId: 101, bookTitle: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: '1925' },
  { requestId: 2, userId: 102, bookTitle: '1984', author: 'George Orwell', publishedDate: '1949' },
  { requestId: 3, userId: 103, bookTitle: 'To Kill a Mockingbird', author: 'Harper Lee', publishedDate: '1960' },
  { requestId: 4, userId: 104, bookTitle: 'Pride and Prejudice', author: 'Jane Austen', publishedDate: '1813' },
  { requestId: 5, userId: 105, bookTitle: 'The Catcher in the Rye', author: 'J.D. Salinger', publishedDate: '1951' },
  { requestId: 6, userId: 106, bookTitle: 'Moby-Dick', author: 'Herman Melville', publishedDate: '1851' },
  { requestId: 7, userId: 107, bookTitle: 'War and Peace', author: 'Leo Tolstoy', publishedDate: '1869' },
  { requestId: 8, userId: 108, bookTitle: 'The Odyssey', author: 'Homer', publishedDate: '8th century BC' },
  { requestId: 9, userId: 109, bookTitle: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publishedDate: '1866' },
  { requestId: 10, userId: 110, bookTitle: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', publishedDate: '1880' },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Requests" subtitle="Total Requests From Users" />
      <Box mt="25px" p="20px" backgroundColor={colors.primary[400]} borderRadius="8px">
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
              <TableCell style={{ color: colors.grey[100] }}>Request ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>User ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Book Title</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Author</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Published Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((request) => (
              <TableRow key={request.requestId} style={{ borderRadius: '8px' }}>
                <TableCell>{request.requestId}</TableCell>
                <TableCell>{request.userId}</TableCell>
                <TableCell>{request.bookTitle}</TableCell>
                <TableCell>{request.author}</TableCell>
                <TableCell>{request.publishedDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default FAQ;
