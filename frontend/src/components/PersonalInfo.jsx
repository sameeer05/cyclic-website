import React, { useState } from 'react';
import { styled } from 'styled-components';
import userImage from '../assets/images/userImage.png';
import { useSelector, useDispatch } from 'react-redux';
import { editUserDetails } from '../redux/apiCalls';
import { mobile } from '../responsive';

const PersonalInfo = () => {
  const [isNameEditable, setIsNameEditable] = useState(false);
  // const [isEmailEditable, setIsEmailEditable] = useState(false);
  const user = useSelector((state) => state.currentUser);
  const [name, setName] = useState(user.name);
  // const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();



  const handleNameEdit = () => {
    setIsNameEditable(true);
  };

  // const handleEmailEdit = () => {
  //   setIsEmailEditable(true);
  // };

  const handleNameSave = (name) => {
    setIsNameEditable(false);
    editUserDetails(dispatch, user._id, user.accessToken, { name })
  };

  // const handleEmailSave = (email) => {
  //   setIsEmailEditable(false);
  //   editUserDetails(user._id, user.accessToken, { email })
  // };

  return (
    <Container>

      <Heading>Personal Information</Heading>
      <Wrapper>
        <ImageContainer>
          <ProfileImage src={userImage} alt="" />
        </ImageContainer>
        <InfoContainer>
          <InfoRow>
            <span>Phone</span>
            <EditableField>{user.phone}</EditableField>
          </InfoRow>
          <InfoRow>
            <span>Name</span>
            <div>

              {isNameEditable ? (
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <EditableField>{name}</EditableField>
              )}
              {isNameEditable ? (
                <div>
                  <EditButton onClick={() => handleNameSave(name)}>Save</EditButton>
                  <EditButton onClick={() => setIsNameEditable(false)} >Cancel</EditButton>
                </div>
              ) : (
                <EditButton onClick={handleNameEdit}>Edit</EditButton>
              )}
            </div>
          </InfoRow>
          <InfoRow>
            <span>E-mail</span>
            <EditableField>{user.email}</EditableField>
            {/* {isEmailEditable ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <EditableField>{email}</EditableField>
            )}
            {isEmailEditable ? (
              <EditButton onClick={() => handleEmailSave(email)}>Save</EditButton>
            ) : (
              <EditButton onClick={handleEmailEdit}>Edit</EditButton>
            )} */}
          </InfoRow>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default PersonalInfo;

const Container = styled.div`
  /* flex: 1; */
  width: 80vw;
  padding: 50px;
  margin: 80px 80px 20px;
  background-color: #EAE3D2;
  border-radius: 5px;
  ${mobile({ padding: '20px', margin: '80px 10px 20px' })}
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: 200;
  ${mobile({ fontSize: '30px' })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  ${mobile({ flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  align-items: baseline;
  /* flex-wrap: wrap; */
`;

const Input = styled.input`
  padding: 10px;
  /* width: 100%; */
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const EditButton = styled.button`
  background-color: #4477CE;
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 8px 15px;
  margin: 5px;
  cursor: pointer;
`;

const EditableField = styled.div`
  display: inline-block;
  border: 2px solid transparent;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  min-width: 100px;
  transition: border 0.3s, padding 0.3s;
`;