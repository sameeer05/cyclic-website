// BookingTimings.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Icons from '../icons';

const { ArrowBackIcon } = Icons;

const BookingTimings = ({ formData, setFormData, handleNext, onBack }) => {
  const [serviceTime, setServiceTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [value, setValue] = useState('');

  const timeOptions = ['08:00 AM', '08:30 AM','09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];

  const handleSaveTimings = () => {
    console.log(`Service Time ${serviceTime} \n Start Date: ${startDate}`)
    if (serviceTime && startDate) {
      const updatedFormData = {
        ...formData,
        bookingTimings: {
            serviceTiming: serviceTime,
            startDate: startDate,
        }
      };
      setFormData(updatedFormData);
      console.log('Updated Form Data: ', updatedFormData);
      handleNext();
    } else {
      // Handle validation or show an error message
    }
  };

  return (
    <Container>
      <TopContainer>
      <Back onClick={onBack}>
        <ArrowBackIcon></ArrowBackIcon>
      </Back>
      <Title>Booking Timings</Title>
      </TopContainer>
      <InputContainer>
        <Label>Service Time</Label>
        <TimeInput value={serviceTime} onChange={(e) => setServiceTime(e.target.value)}>
        {timeOptions.map((time, index) => (
          <TimeOption key={index} value={time}>
            {time}
          </TimeOption>
        ))}
      </TimeInput>
        {/* <Input
          type="text"
          placeholder="Enter Service Time"
          value={serviceTime}
          onChange={(e) => setServiceTime(e.target.value)}
        /> */}
      </InputContainer>
      <InputContainer>
        <Label>Start Date</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleSaveTimings}>Save Timings</Button>
      </ButtonContainer>
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

const Title = styled.h1`
  font-weight: 200;
  margin: 0 0 30px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TimeInput = styled.select`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TimeOption = styled.option`
  height: 80px;
  padding: 5px;
  margin: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  ${mobile({ padding: ' 0 20px' })}
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  color: white;
  font-size: 15px;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export default BookingTimings;
