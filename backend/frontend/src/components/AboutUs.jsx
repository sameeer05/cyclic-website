import React from 'react'
import { styled } from 'styled-components'
import myImage from '../assets/images/myImage.jpeg';
import { mobile } from '../responsive';

function AboutUs() {
  return (
    <AboutUsContainer>
      <MissionStatementContainer>
        <Heading>Mission</Heading>
        <SmallHeading>At ChamakSaathi</SmallHeading>
        <Statement>Our mission is to enhance the quality of life for busy individuals and families by providing reliable, professional, and personalized domestic services.</Statement>
      </MissionStatementContainer>
      <NameCardContainer>
        <Heading>Our Team</Heading>
        <NameCardWrapper>
          <NameCard>
            <ImageContainer>
              <Image src={myImage} alt='' />
            </ImageContainer>
            <TextContainer>
              <Name>Vineet Immanuel</Name>
              <Title>CEO</Title>
            </TextContainer>
          </NameCard>
          <NameCard>
            <ImageContainer>
              <Image src={myImage} alt='' />
            </ImageContainer>
            <TextContainer>
              <Name>Jatin Sharma</Name>
              <Title>CTO</Title>
            </TextContainer>
          </NameCard>
          <NameCard>
            <ImageContainer>
              <Image src={myImage} alt='' />
            </ImageContainer>
            <TextContainer>
              <Name>Ishant Garg</Name>
              <Title>COO</Title>
            </TextContainer>
          </NameCard>
        </NameCardWrapper>
      </NameCardContainer>
    </AboutUsContainer>
  )
}

const AboutUsContainer = styled.div`
  padding: 20px 80px;
  margin-top: 65px;
  ${mobile({ padding: '20px 10px' })}
`;

const MissionStatementContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Heading = styled.h1`

`;

const SmallHeading = styled.h4`
  margin: 0;
  padding: 0;
`;

const Statement = styled.p`
  text-align: center;
`;

const NameCardContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameCardWrapper = styled.div`
  /* width: 70%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({ flexDirection: 'column' })}
`;

const NameCard = styled.div`
  width: 200px;
  padding: 10px 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  z-index: 2;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h4`

`;

const Title = styled.h3`

`;

export default AboutUs