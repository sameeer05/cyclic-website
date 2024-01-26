import React from 'react';
import styled from 'styled-components';
import Icons from '../icons';
import { mobile } from '../responsive';

const { PhoneIcon, MailOutlineIcon, PlaceIcon, WhatsAppIcon } = Icons;

function ContactInfo() {
  return (
    <ContactInfoContainer>
      <h2>Contact Information</h2>
      <Row>
      <InfoContainer>
      <IconContainer>
          <PhoneIcon />
        </IconContainer>
        <TextContainer>
          <InfoHeading>Phone No.</InfoHeading>
          <Info>+91 98181 02998</Info>
        </TextContainer>
      </InfoContainer>
      <InfoContainer>
      <IconContainer>
          <MailOutlineIcon />
        </IconContainer>
        <TextContainer>
          <InfoHeading>E-mail</InfoHeading>
          <Info>chamaksaathi@gmail.com</Info>
        </TextContainer>
      </InfoContainer>
      </Row>
      <Row>
      <InfoContainer>
        <IconContainer>
          <PlaceIcon style={{ border: '1px solid gray', borderRadius: '5px', backgroundColor: '#fff', color: 'black', }}/>
        </IconContainer>
        <TextContainer>
          <InfoHeading>Office</InfoHeading>
          <Info>Badshahpur, Gurugram</Info>
        </TextContainer>
      </InfoContainer>
      <InfoContainer>
        <IconContainer>
          <WhatsAppIcon />
        </IconContainer>
        <TextContainer>
          <InfoHeading>WhatsApp</InfoHeading>
          <Info>+91 98181 02998</Info>
        </TextContainer>
      </InfoContainer>
      </Row>
    </ContactInfoContainer>
  )
};

const ContactInfoContainer = styled.div`
  padding: 0 20px;
  flex: 1;
  /* width: calc(50% - 80px); */
  ${mobile({ 'width': '90%' })}
`;

const Row = styled.div`
  display: flex;
  ${mobile({ 'flex-direction': 'column' })};
`;

const InfoContainer = styled.div`
  padding: 5px;
  display: flex;
  flex: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 5px;
  border-radius: 5px;
  /* width: 50%; */
  /* ${mobile({ 'width': '100%' })} */
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoHeading = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

const Info = styled.p`
  padding: 0;
  margin: 0;
  font-size: 13px;
`;

export default ContactInfo;