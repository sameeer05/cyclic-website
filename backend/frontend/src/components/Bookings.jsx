import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  /* flex: 1; */
  width: 80vw;
  padding: 50px;
  margin: 20px 80px;
  background-color: #EAE3D2;
  border-radius: 5px;
  ${mobile({ padding: '20px', margin: '20px 10px' })}
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: 200;
  ${mobile({ fontSize: '30px' })}
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHead = styled.thead`
  background: #EAE3D2;
  font-weight: bold;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Bookings = ({ bookings }) => {
  return (
    <Container>
      <Heading>My Bookings</Heading>
      <Table>
        <TableHead>
          <tr>
            <TableHeaderCell>Service</TableHeaderCell>
            <TableHeaderCell>Booking Date</TableHeaderCell>
            <TableHeaderCell>Booked For</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <TableCell>{booking.service}</TableCell>
              <TableCell>{booking.bookingDate}</TableCell>
              <TableCell>{booking.bookedFor}</TableCell>
              <TableCell>{booking.status}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Bookings;
