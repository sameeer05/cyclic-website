import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { mobile } from "../responsive"; 


const Container = styled.div`
    margin: 10px;
    min-width: 250px;
    height: 280px;
    border-radius: 15px;
    background-color: #f5fbfd;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      opacity: .5;
    }
  `;

const ImageContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 80%;
  /* padding: 40px; */
`

const Image = styled.img`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  width: 100%;
  z-index: 2;
  `;

const TitleContainer = styled.div`
  align-items: center;
  text-align: center;
`

const Title = styled.h2`
    margin: 12px;
    ${mobile({ fontWeight: '200' })}
`


const ServiceCard = ({ item }) => {
    const navigate = useNavigate()
    return (
      
        <Container onClick={() => navigate(`/services/${item.id}`)}>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <TitleContainer>
            <Title>{item.title}</Title>
          </TitleContainer>
        </Container>
    );
};

export default ServiceCard;