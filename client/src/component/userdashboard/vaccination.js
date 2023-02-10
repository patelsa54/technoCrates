import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Vaccine: string,
  Status: string,
  Place: string,
  Year: number,
 
) {
  return { Vaccine, Status, Place, Year };
}

const rows = [
  createData('Covid19 vaccine', "Yes", "Nagpur",2022),
  createData('hepatitis b', "No", "Raipur",2017),
  createData('Polio', "Yes", "Nagpur",2004),
  createData('Rabbies', "Yes", "Nagpur",2021),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Vaccine Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Vaccine}
              </TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.Place}</TableCell>
              <TableCell align="right">{row.Year}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from "react";

// function vaccination() {
//   return <div>
//   <table class="table-auto">
//   <thead>
//     <tr>
//       <th>Vaccine</th>
//       <th>Status</th>
//       <th>Year</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Covid19 vaccine</td>
//       <td>Yes</td>
//       <td>2022</td>
//     </tr>
//     <tr>
//       <td>hepatitis b</td>
//       <td>No</td>
//       <td>NAN</td>
//     </tr>
//     <tr>
//       <td>Polio</td>
//       <td>Yes</td>
//       <td>2002</td>
//     </tr>
//   </tbody>
// </table>
//   </div>;
// }

// export default vaccination;
