import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { serialNumber: 1, title: 'First Item' },
  { serialNumber: 2, title: 'Second Item' },
  { serialNumber: 3, title: 'Third Item' },
  // Add more data as needed
];

const QuestionList = () => {
  // const getQuestionList = async () => {
  //   let response = await getQuestionList();
  //   set
  // }
      //   headers: {
      //   "Content-Type": "application/json",
      //   "Authorization": `Bearer ${token}`, 
      // },
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.serialNumber}>
              <TableCell>{item.serialNumber}</TableCell>
              <TableCell>{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuestionList;
