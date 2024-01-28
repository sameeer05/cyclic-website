import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { register, sendEmailOtp } from '../redux/apiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetOthers } from '../redux/userRedux';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpForm = ({ onSignUp, onSwitchForm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpForm, setShowOtpForm] = useState(false);
    const navigate = useNavigate();

    const message = useSelector((state) => state.message);
  const error = useSelector((state) => state.error);
  const isFetching = useSelector((state) => state.isFetching);
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    // if (error) {
    //   toast.error(message);
    // }
    if (message === 'OTP Sent') {
        setShowOtpForm(true);
        toast.success('OTP Sent to E-mail ID');
    }
    // if (user) {
    //   navigate('/profile');
    // }
    // dispatch(resetOthers());
  }, [message]);

    // const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    function handleSendOtp() {
        if (!name || !email || !phone || !password || !confirmPassword) {
            // window.alert('Please fill all the fields');
            toast.warn('Please Fill all the fields');
        } else {
            if ( password !== confirmPassword) {
                toast.warn("Password and Confirm Password do not match");
            } else {
                // setLoading(true);
                sendEmailOtp(dispatch, { email });
                // setShowOtpForm(true);
            }
        }
    }

    function handleVerifyOtp() {
        // setLoading(true);
        register(dispatch, { name, phone, email, password, otp })
        handleSignUp();
    }

    const handleSignUp = () => {
        // Handle sign-up logic
        onSignUp(name, phone, email, otp);
    };

    return (
        <>
            <ToastContainer draggable={false} transition={Zoom} position={toast.POSITION.TOP_CENTER}/>
            <Form>
                <FormInput
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <FormInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormInput
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showOtpForm && (
                    <FormInput
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                )}
                {!showOtpForm ? (
                    <FormButton type="button" onClick={handleSendOtp}>
                        Send OTP
                    </FormButton>
                ) : (
                    <FormButton type="button" onClick={handleVerifyOtp}>
                        Sign Up
                    </FormButton>
                )}
                <LoginLink onClick={onSwitchForm}>Or Login</LoginLink>
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

const LoginLink = styled.span`
  margin-top: 10px;
  cursor: pointer;
  color: #1C3879;
`;

export default SignUpForm;
