import { useState } from "react";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 20px;
  font-size: 30px;
  font-weight: 400;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 15px;
  flex: 1;
  width: 100%;
  margin: 15px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin: 20px;
  padding: 15px 20px;
  font-size: 15px;
  background-color: #4682A9;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

// const Error = styled.span`
//   color: red;
// `;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username, password)
  };
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>
            Log In
          </Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link>Forgot Password?</Link>
          <Link>Register</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;