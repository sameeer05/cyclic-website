import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const ContactFormContainer = styled.div`
  /* width: calc(50% - 80px); */
  flex: 1;
  ${mobile({ 'width': '95%' })}

`;

const FormContainer = styled.div`
  padding: 0 20px;
`;

const Heading = styled.h2`
  opacity: ${({ isEditable }) => (isEditable ? '1' : '0.5')}; 
  transition: opacity 0.3s ease; 
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${mobile({ flexDirection: 'column', margin: '0', })}
`;

const TextInput = styled.input`
  width: 100%;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  opacity: ${({ isEditable }) => (isEditable ? '1' : '0.5')}; 
  transition: opacity 0.3s ease; 
  cursor: ${({ isEditable }) => (isEditable ? 'text' : 'default')}; 
  pointer-events: ${({ isEditable }) => (isEditable ? 'auto' : 'none')}; 
`;

const LargeTextInput = styled.textarea`
  height: 100px;
  width: calc(100% - 20px);
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const ContinueButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
`;

const EditButton = styled(ContinueButton)`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
`;

const ModalContainer = styled.div`
  padding: 0 20px;
`;

const SubmitButtonContainer = styled.div`
  text-align: right;
`;

const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CategoryButton = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    props.selected
      ? `
    background-color: #007bff;
    color: #fff;
  `
      : ''}
`;


function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [query, setQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if all required fields have values to enable/disable the "Continue" button
    setIsContinueButtonDisabled(
      !formData.name || !formData.phone || !formData.email || !isValidPhoneNumber(formData.phone) || !isValidEmail(formData.email)
    );
  }, [formData]);

  const handleContinueClick = () => {
    setShowModal(true);
    setIsEditable(false);
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = () => {
    // Perform any necessary actions with the form data
    console.log('Form Data:', formData);
    console.log('Selected Category:', selectedCategory);
    console.log('User Query:', query);
  };

  const handlePhoneChange = (e) => {
    // Restrict phone input to accept only numeric characters
    const numericValue = e.target.value.replace(/\D/g, '');
    // Ensure the length does not exceed 10 characters
    if (numericValue.length <= 10) {
      setFormData({ ...formData, phone: numericValue });
    }
  };

  const isValidPhoneNumber = (phone) => {
    // Validate if phone contains exactly 10 digits
    return /^\d{10}$/.test(phone);
  };

  const isValidEmail = (email) => {
    // Validate email using a basic regex pattern
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  return (
    <ContactFormContainer>
      <FormContainer>
        <Heading isEditable={isEditable}>Fill the form to contact us quicker</Heading>
        <Row>
          <TextInput
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            readOnly={!isEditable}
            isEditable={isEditable}
          />
          <TextInput
            type="tel"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handlePhoneChange}
            readOnly={!isEditable}
            isEditable={isEditable}
          />
        </Row>
        <Row>
          <TextInput
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            readOnly={!isEditable}
            isEditable={isEditable}
          />
          {isEditable ? (
            <ContinueButton onClick={handleContinueClick} disabled={isContinueButtonDisabled}>
              Continue
            </ContinueButton>
          ) : (
            <EditButton onClick={handleEditClick}>Edit</EditButton>
          )}
        </Row>
      </FormContainer>
      {showModal && (
        <ModalContainer>
          <h2>Choose a category to continue</h2>
          <CategoryButtonsContainer>
            <CategoryButton
              selected={selectedCategory === 'Service-Complaints'}
              onClick={() => handleCategoryClick('Service-Complaints')}
            >
              Service-Complaints
            </CategoryButton>
            <CategoryButton
              selected={selectedCategory === 'Booking-Queries'}
              onClick={() => handleCategoryClick('Booking-Queries')}
            >
              Booking-Queries
            </CategoryButton>
            <CategoryButton
              selected={selectedCategory === 'Payment-Queries'}
              onClick={() => handleCategoryClick('Payment-Queries')}
            >
              Payment-Queries
            </CategoryButton>
            <CategoryButton
              selected={selectedCategory === 'Others'}
              onClick={() => handleCategoryClick('Others')}
            >
              Others
            </CategoryButton>
          </CategoryButtonsContainer>
        </ModalContainer>
      )}
      {showModal && selectedCategory && (
        <ModalContainer>
          <h2>Anything else we need to know</h2>
          <LargeTextInput
            rows={6}
            columns={80}
            placeholder="Describe your Query in a few lines"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SubmitButtonContainer>
            <ContinueButton onClick={handleSubmit}>Submit</ContinueButton>
          </SubmitButtonContainer>
        </ModalContainer>
      )}
    </ContactFormContainer>
  )
}

export default ContactForm