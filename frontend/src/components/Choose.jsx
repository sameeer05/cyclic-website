import React from 'react';
import styled from 'styled-components';
import { choose } from '../data';
import { mobile } from '../responsive';

const Wrapper = styled.div`
  padding: 20px 80px;
  ${mobile({ padding: '20px' })}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`

`;

const SmallContainer = styled.div`
  /* flex: 1; */
  margin: 5px;
  width: 450px;
  min-width: 280px;
  height: 300px;
  padding: 20px;
  margin: 10px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around; */
  background-color: #f5fbfd;
  border-radius: 15px;
  /* position: relative; */
`;

const ImageContainer = styled.div`
  height: 40%;
  width: 100%;
  overflow: hidden;
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  /* padding: 40px; */
`;

const Image = styled.img`
  align-self: center;
  height: 100%;
  z-index: 2;
`;

const ContentContainer = styled.div`
  
`;

const Title = styled.h2`
  /* text-align: center;  */
`;

const Desc = styled.p`
  font-size: .9rem;
  text-align: justify;
`;

const Choose = () => {
    return (
        <Wrapper>
            <Heading>Why Choose Us</Heading>
            <Container>
                {choose.map((item) => (
                    <SmallContainer>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <ContentContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                        </ContentContainer>
                    </SmallContainer>
                ))}
            </Container>
        </Wrapper>
    )
}

export default Choose