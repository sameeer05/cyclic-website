import React, { useState, useEffect } from 'react';
import Address from './Address';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addAddress, editAddress, deleteAddress } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 80vw;
  padding: 50px;
  margin: 20px 80px;
  background-color: #EAE3D2;
  border-radius: 5px;
  ${mobile({ padding: '20px', margin: '20px 10px' })}
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: 200;
  ${mobile({ fontSize: '30px' })}
`;

const Button = styled.button`
  background-color: #4477CE;
  color: #fff;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;


const Addresses = () => {
  const user = useSelector((state) => state.currentUser);
  const [userAddresses, setUserAddresses] = useState(user.addresses);
  const [newAddress, setNewAddress] = useState('');
  const [newPinCode, setNewPinCode] = useState('');
  const [newCity, setNewCity] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [editingIndex, setEditingIndex] = useState(null); // Track the index of the address being edited
  const dispatch = useDispatch();

  useEffect(() => {
    // Update local state when user.addresses changes
    setUserAddresses(user.addresses);
  }, [user.addresses]);



  const openAddModal = () => {
    setIsEditing(false);

    // setEditingIndex(null);
    setNewAddress('');
    setNewPinCode('');
    setNewCity('');

    setIsAdding(true);
  };

  const closeDialog = () => {
    setIsAdding(false);
    setIsEditing(false);
    // setEditingIndex(null); // Clear the editing index
  };

  const handleAddAddress = (newAddress, newPinCode, newCity) => {
    addAddress(dispatch, user._id, user.accessToken, { address: newAddress, pinCode: newPinCode, city: newCity });
    // setUserAddresses(user.addresses);
    closeDialog();
  };

  const handleEditAddress = (index, newAddress, newPinCode, newCity) => {
    const updatedAddress = {
      address: newAddress,
      pinCode: newPinCode,
      city: newCity,
    };
    editAddress(dispatch, user._id, user.accessToken, index, updatedAddress);
    closeDialog();
  };

  const handleDeleteAddress = (index) => {
    deleteAddress(dispatch, user._id, user.accessToken, index);
  };

  return (
    <Container>
      <Heading>Addresses</Heading>
      {userAddresses.map((address, index) => (
        <Address
          index={index}
          key={index}
          address={address}
          onDelete={() => handleDeleteAddress(index)}
          // onEdit={() => openEditModal(index)} // Pass the index for editing
          // isEditing={false}
          onSave={handleEditAddress}
        />
      ))}
      <div>
        <Button onClick={() => openAddModal()}>+ Add New Address</Button> {/* No index for adding */}
      </div>

      {isAdding && (
        <div className="dialog">
          <h2>
            Add New Address
            {/* {isEditing ? 'Edit Address' : 'Add New Address'} */}
          </h2>
          <Input
            type="text"
            placeholder="Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Pin Code"
            value={newPinCode}
            onChange={(e) => setNewPinCode(e.target.value)}
          />
          <Input
            type="text"
            placeholder="City"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
          {/* {isEditing ? (
            <Button onClick={() => handleEditAddress(editingIndex, newAddress, newPinCode, newCity)}>Save</Button>
          ) : ( */}
            <Button onClick={() => handleAddAddress(newAddress, newPinCode, newCity)}>Add</Button>
          {/* )} */}
          <Button onClick={closeDialog}>Cancel</Button>
        </div>
      )}
    </Container>
  );
};

export default Addresses;
