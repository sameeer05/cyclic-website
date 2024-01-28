import { allServices } from "../data";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  padding: 20px 80px;
  ${mobile({ padding: '20px', })}
`

const Title = styled.h1`
  font-weight: 200;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const AllServicesComponent = () => {
  return (
    <Wrapper>
    <Title>Our Services</Title>
    <Container>
      {allServices.map((item) => (
        <ServiceCard item={item} key={item.id} />
      ))}
    </Container>
    </Wrapper>
  );
};

export default AllServicesComponent;