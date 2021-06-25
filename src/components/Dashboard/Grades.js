import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, sub, sem, grade) {
  return { id, sub, sem, grade };
}

const rows = [
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),

  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Grades() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Grades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>sem</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.sub}</TableCell>
              <TableCell>{row.sem}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}