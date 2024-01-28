import React, { useState } from 'react';
import styled from 'styled-components';


const OtpLoginForm = ({ onLogin, onSwitchForm }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [user, setUser] = useState(null);

  function handleSendOtp() {
    // setLoading(true);
    console.log('sendOtp me aaya')
    setShowOtpForm(true);
    
  }

  function handleVerifyOtp() {
    // setLoading(true);
    console.log('verifyOtp me aaya')
    const userData = {user: 'user'};
    setUser(userData);
    onLogin();
  }

  return (
    <>
    <div id="recaptcha-container"></div>
    <Form>
      <FormInput
        type="tel"
        placeholder="Mobile Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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
          Login
        </FormButton>
      )}
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

export default OtpLoginForm;
