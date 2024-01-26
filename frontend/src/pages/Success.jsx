import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import styled from 'styled-components';
import { mobile } from '../responsive';
import Icons from '../icons';

// const { ArrowBackIcon } = Icons;

const Success = () => {
  const booking = JSON.parse(localStorage.getItem('booking'));
  const user = useSelector((state) => state.currentUser);
  const [bookingData, setBookingData] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const createBooking = async () => {
      console.log(booking);
      try {
        const token = user.accessToken;
        const axiosInstance = userRequest(token);

        // Extract data from the URL query parameter
        const urlParams = new URLSearchParams(location.search);
        const transactionData = JSON.parse(urlParams.get('data'));

        const res = await axiosInstance.post(`/bookings/new/${user._id}`, {
          userId: user._id,
          services: booking.serviceData,
          selectedAddress: {
            address: "test address",
            pinCode: "999999",
            city: "Gurgaon"
          },
          serviceTiming: booking.bookingTimings.serviceTiming,
          startDate: booking.bookingTimings.startDate,
          totalPrice: booking.totalPrice,
          transactionData: transactionData
        });
        setBookingData(res.data);
        console.log('Booking Data : ', bookingData, '\n Response Data ', res.data)
        setBookingId(res.data._id);
        // Reset the booking in local storage
        localStorage.removeItem('booking');
      } catch (err) {
        console.log(err);
      }
    };

    createBooking();

    // bookingData === null && createBooking();

    // bookingId === null && createBooking();
  }, [user, bookingData, dispatch]);

  return (
    <div>
      {bookingData && (
        <Container>
          <TopContainer>
            <Title>Booking Successful</Title>
          </TopContainer>
          <h3>Selected Services</h3>
          {bookingData.serviceData && bookingData.serviceData.map((categoryData) => (
            <CategoryContainer key={categoryData.categoryName}>
              <CategoryName>{categoryData.categoryName}</CategoryName>
              <CategoryPrice>₹{categoryData.servicePrice}</CategoryPrice>
            </CategoryContainer>
          ))}
          <h4>Timings</h4>
          <p>{bookingData.bookingTimings?.serviceTiming}</p>
          <h4>Start Date</h4>
          <p>{bookingData.bookingTimings?.startDate}</p>
          <TotalPrice>Total Price: ₹{bookingData.serviceData?.reduce((total, categoryData) => total + categoryData.servicePrice, 0)}</TotalPrice>
        </Container>
      )}
      <ButtonContainer>
        <HomeButton onClick={() => navigate('/')}>Home</HomeButton>
      </ButtonContainer>
    </div>
  );
}

const Container = styled.div`
  width: 90%;
  padding: 30px 40px;
  margin: 20px 0 20px;
  ${mobile({ padding: '30px 10px', width: '100%' })}
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-weight: 200;
  margin: 0;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.button`
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


export default Success