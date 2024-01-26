import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Address = ({ index, address, onDelete, onEdit, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState(address.address);
  const [editedPinCode, setEditedPinCode] = useState(address.pinCode);
  const [editedCity, setEditedCity] = useState(address.city);

  const handleSaveClick = () => {
    onSave(index, editedAddress, editedPinCode, editedCity);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    // onEdit();
    setIsEditing(true);
    setEditedAddress(address.address);
    setEditedPinCode(address.pinCode);
    setEditedCity(address.city);
  };

  return (
    <AddressContainer>
      {isEditing ? (
        <InputContainer>
          <Input
            type="text"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
          />
          <Input
            type="text"
            value={editedPinCode}
            onChange={(e) => setEditedPinCode(e.target.value)}
          />
          <Input
            type="text"
            value={editedCity}
            onChange={(e) => setEditedCity(e.target.value)}
          />
        </InputContainer>
      ) : (
        <div>
          {address.address}, {address.pinCode} {address.city}
        </div>
      )}
      <ButtonContainer>
        <Button onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button onClick={isEditing ? () => setIsEditing(false) : () => onDelete(index)}>
          {isEditing ? 'Cancel' : 'Delete'}
        </Button>
      </ButtonContainer>
      {/* <Hr /> */}
    </AddressContainer>
  );
};

const AddressContainer = styled.div`
  background-color: #EAE3D2;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start' })}
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const ButtonContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #4477CE;
  color: #fff;
  margin: 5px;
  border-radius: 4px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
`;

// const Hr = styled.hr`
//   color: #000;
// `;

export default Address;