import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Icons from '../icons';

const { ArrowBackIcon } = Icons;

const BookingDetails = ({ formData, onBack, onCheckout }) => {
  return (
    <Container>
      <TopContainer onClick={onBack}>
      <Back>
        <ArrowBackIcon></ArrowBackIcon>
      </Back>
      <Title>Booking Details</Title>
      </TopContainer>
      <h3>Selected Services</h3>
      {formData.serviceData.map((categoryData) => (
        <CategoryContainer key={categoryData.categoryName}>
          <CategoryName>{categoryData.categoryName}</CategoryName>
          <CategoryPrice>₹{categoryData.servicePrice}</CategoryPrice>
        </CategoryContainer>
      ))}
      <h4>Timings</h4>
        <p>{formData.bookingTimings.serviceTiming}</p>
      <h4>Start Date</h4>
      <p>{formData.bookingTimings.startDate}</p>
      <TotalPrice>Total Price: ₹{formData.serviceData.reduce((total, categoryData) => total + categoryData.servicePrice, 0)}</TotalPrice>
      <CheckoutButton onClick={onCheckout}>Checkout</CheckoutButton>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 30px 40px;
  margin: 20px 0 20px;
  border-radius: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  ${mobile({ padding: '30px 10px', width: '100%' })}
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-weight: 200;
  margin: 0 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 55px;
`;

const CategoryName = styled.span`
  font-size: 1rem;
`;

const CategoryPrice = styled.span`
  font-size: 1rem;
`;

const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;

const Back = styled.span`
  display: flex;
  height: 30px;
  width: 30px;
  color: white;
  background-color: #4477CE;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckoutButton = styled.button`
  height: 40px;
  width: 90px;
  margin: 0 0 20px;
  color: white;
  font-size: 15px;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

// const CheckoutButton = styled(BackButton)`
//   margin-top: 20px;
//   margin-bottom: 0;
// `;

export default BookingDetails;
