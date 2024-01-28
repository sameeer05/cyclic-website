import React, { useState } from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { allServices } from '../data';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import BookingDetails from '../components/BookingDetails';
import BookingTimings from '../components/BookingTimings';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';

const Wrapper = styled.div`
  margin-top: 65px;
  padding: 30px 80px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  ${mobile({ 'align-items': 'right', 'justify-content': 'center' })}
`;

const Button = styled.button`
  height: 40px;
  width: 90px;
  color: white;
  font-size: 15px;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  ${mobile({ width: '150px', height: '50px' })}
`;


const BookingDropdown = styled.div`
  padding: 0 80px;
  ${mobile({ padding: '0', width: '100vw' })}
  background-color: white;
  
  min-width: 200px;
  border-radius: 5px;
  overflow: hidden;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;



const Service = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const serviceData = allServices[id - 1]

  const [isFormVisible, setFormVisible] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    serviceData: [],
    bookingTimings: {
      serviceTiming: '',
      startDate: '',
    },
    totalPrice: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [isTimingsVisible, setTimingsVisible] = useState(false);
  const user = useSelector((state) => state.currentUser);

  const openBookingForm = () => {
    setFormVisible(true);
  };

  const handleNext = () => {
    if (isTimingsVisible) {
      setTimingsVisible(false);
      setShowBookingDetails(true);
    } else {
      setTimingsVisible(true);
    }
    console.log('Booking Form Data: ', bookingFormData)
  };

  const handleBack = () => {
    if (showBookingDetails) {
      setShowBookingDetails(false);
      setTimingsVisible(true);
    }
    else {
      setTimingsVisible(false);
    }
  };

  const handleCheckout = () => {
    console.log(bookingFormData)
    localStorage.setItem('booking', JSON.stringify(bookingFormData));
    const data ={
      name: user.name,
      amount: bookingFormData.totalPrice,
      number: user.phone,
      MUID: user._id,
      transactionId: 'T' + Date.now(),
  }

  const axiosInstance = userRequest(user.accessToken);

  axiosInstance.post(`/payment/${user._id}`, {...data})
  .then(res => {
    window.location.href = res.data;
  })
  .catch(error => {
    console.log(error);
  }) 
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={serviceData.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{serviceData.title}</Title>
          <Desc>{serviceData.desc}</Desc>
          <ButtonContainer>
            <Button onClick={openBookingForm}>Book Now</Button>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>

      <BookingDropdown visible={isFormVisible || isTimingsVisible}>
        {isTimingsVisible ? (
          // Display BookingTimings component
          <BookingTimings formData={bookingFormData} setFormData={setBookingFormData} handleNext={handleNext} onBack={handleBack}/>
        ) : showBookingDetails ? (
          // Display BookingDetails component
          <BookingDetails formData={bookingFormData} onBack={handleBack} onCheckout={handleCheckout} />
        ) : (
          // Display BookingForm component
          <BookingForm
            service={serviceData.category}
            bookingFormData={bookingFormData}
            setBookingFormData={setBookingFormData}
            setTimingsVisible={setTimingsVisible}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        )}
      </BookingDropdown>
      <Footer />
    </div>
  );
};

export default Service;
