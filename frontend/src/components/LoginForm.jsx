import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../redux/apiCalls";
import Spinner from "./Spinner"; 
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetOthers } from '../redux/userRedux';

const LoginForm = ({ onLogin, onSwitchForm }) => {
  const [userIdentifier, setUserIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const message = useSelector((state) => state.user.message);
  // const error = useSelector((state) => state.user.error);
  const isFetching = useSelector((state) => state.isFetching);
  // const user = useSelector((state) => state.user.currentUser);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (error) {
  //     toast.error(message);
  //   }
  //   if (user) {
  //     navigate('/profile');
  //   }
  //   dispatch(resetOthers());
  // }, [error, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { userIdentifier, password });
    onLogin();
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} position={toast.POSITION.TOP_CENTER}/>
      {/* {isFetching && <Spinner />} */}
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="E-mail or Mobile Number"
          value={userIdentifier}
          onChange={(e) => setUserIdentifier(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit" disabled={isFetching}>
          {isFetching ? 'Logging in...' : 'Login'}
        </FormButton>
        <SignUpLink onClick={onSwitchForm}>Or Sign Up</SignUpLink>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  padding: 15px;
  width: 100%;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const FormButton = styled.button`
  margin: 20px;
  padding: 15px 20px;
  font-size: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpLink = styled.span`
  margin-top: 10px;
  cursor: pointer;
  color: #1C3879;
`;

export default LoginForm;
