import { allServices } from "../data";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  padding: 20px 80px;
  ${mobile({ padding: '20px', })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainServices = () => {
  return (
    <Wrapper>
    <Title>Our Services</Title>
    <Container>
      {allServices.slice(0, 3).map((item) => (
        <ServiceCard item={item} key={item.id} />
      ))}
    <ServiceCard item={{id: 'all', title: 'More Services', img: 'https://th.bing.com/th/id/OIG.zoCtBuv5e8pDRLmu0vcd?pid=ImgGn'}} key={'all'}/>
    </Container>
    </Wrapper>
  );
};

export default MainServices;