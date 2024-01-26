import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Spinner from './Spinner';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { resetOthers } from '../redux/userRedux';

const { CloseIcon } = Icons;


const LoginPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const error = useSelector((state) => state.error);
  const isFetching = useSelector((state) => state.isFetching);
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (message === 'Login Success') {
      navigate('/profile');
      onClose();
    }
    dispatch(resetOthers());
  }, [error, message, dispatch, navigate, onClose]);

  const handleAuthSuccess = () => {
    // navigate('/profile');
    toast.success(message);
    // onClose();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Add or remove the 'no-scroll' class on the body element when the popup opens or closes.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the class when the component unmounts.
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <PopupOverlay isOpen={isOpen}>
      {isFetching && <Spinner />}
      <ToastContainer draggable={false} transition={Zoom} position={toast.POSITION.TOP_CENTER}/>
      <PopupContent>
        <CloseButton onClick={onClose}><CloseIcon style={ {width: '15px', height: '15px',} }/></CloseButton>
        <LoginHeader>{isLogin ? 'Login' : 'Sign Up'}</LoginHeader>
        {isLogin ? (
          <LoginForm onLogin={handleAuthSuccess} onSwitchForm={toggleForm} />
        ) : (
          <SignUpForm onSignUp={handleAuthSuccess} onSwitchForm={toggleForm} />
        )}
      </PopupContent>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
   display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.35); 
  backdrop-filter: blur(6px); 
  -webkit-backdrop-filter: blur(6px); 
  z-index: 9999;
  -webkit-animation: fadeIn 0.25s linear; 
  animation: fadeIn 0.25s linear; 
`;

const PopupContent = styled.div`
  background-color: #fff;
  width: 500px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mobile({width: "70vw"})}
`;

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  background-color: #2270E2;
  color: white;
  font-size: 10vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LoginHeader = styled.h2`
  margin-bottom: 20px;
`;

export default LoginPopup;
