import React, {useState} from 'react';

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';

const columns = [
  { id: 'vaucherId', label: 'Voucher Id', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 100 },
  { id: 'brand', label: 'Brand', minWidth: 100 },
  { id: 'userId', label: 'userId', minWidth: 100 },
];


const Dataview = (props) => {
  const {data} = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '95%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length>0 && data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log(row);
                const {type, Brand, vaucherId, userId} = row;
                console.log(`Type: ${type}, Brand: ${Brand}`)
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={vaucherId}>
                    <TableCell >
                         {vaucherId}
                    </TableCell>
                    <TableCell >
                         {type}
                    </TableCell>
                    <TableCell >
                         {Brand}
                    </TableCell>
                    <TableCell >
                         {userId}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Dataview;