import React from 'react';
import Icons from '../icons';
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from '../assets/images/logo.png'

const { FacebookOutlinedIcon, InstagramIcon, MailOutlineIcon, PhoneIcon, LinkedInIcon } = Icons;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid gray;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({ 'flex-direction': 'column-reverse' })}
`;

const Left = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  padding: 20px;
  ${mobile({ 'align-items': 'center' })}
`;

const Logo = styled.img`
  width: 180px;
  margin: 15px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 20px; */
`;

const Center = styled.div`
  /* flex: 1; */
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({ marginBottom: '15px', })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  /* flex: 1; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ 'align-items': 'center' })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: '5px', })}
`;

const CopyrightContainer = styled.div`

`;

const CopyrightText = styled.div`

`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo}></Logo>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="0A66C2">
              <LinkedInIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>All Services</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px" }} /> +91 98181 02998
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: "10px" }} /> chamaksaathi@gmail.com
          </ContactItem>
        </Right>
      </Wrapper>
      <CopyrightContainer>
        <CopyrightText>&#169; Chamak Saathi { new Date().getFullYear() } </CopyrightText>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;

