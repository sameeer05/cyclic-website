import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import bannerImage from "../assets/images/bannerImage.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 90vh;
  min-height: 650px;
  margin-top: 70px;
  padding: 0px 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  /* color: #1A120B; */
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent), 
    url(${bannerImage});
  background-size: cover; // Adjust this to suit your needs
  background-position: center;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '20px',
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), transparent 90%), url(${bannerImage})`,
    // transform: 'rotate(-90deg)',
    // transformOrigin: 'left top',
  })}
`;

const InfoContainer = styled.div`
  width: 40%;
  ${mobile({ 'width': '90%' })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  ${mobile({ fontSize: '40px' })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  color: white;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/about" route
    navigate('/services/all');
  };
  return (
    <Container>
            <InfoContainer>
              <Title>All-in-One Home Services for Busy Lives</Title>
              <Desc>Welcome to Chamak Saathi, your one-stop solution for all your domestic needs – from cooking and cleaning to babysitting and gardening, we’ve got you covered!</Desc>
              <Button onClick={handleButtonClick}>View All Services</Button>
            </InfoContainer>
            
    </Container>
  );
};

export default Banner;