import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Icons from '../icons';
import { useState, useEffect } from 'react';

const { CloseIcon } = Icons;

const OptionsPopup = ({ isOpen, onClose, category, details, formData, basePrice, setFormData, totalPrice, setTotalPrice }) => {
  const [optionsData, setOptionsData] = useState({})
  const [servicePrice, setServicePrice] = useState(basePrice)

  // Add or remove the 'no-scroll' class on the body element when the popup opens or closes.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      // Initialize optionsData from the previous data in formData, if available.
      const existingCategoryData = formData.find((data) => data.categoryName === category.categoryName);
      if (existingCategoryData) {
        setOptionsData(existingCategoryData.serviceData);
        setServicePrice(existingCategoryData.servicePrice);
      }
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the class when the component unmounts.
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, category, formData]);


  // Function to handle Option Click
  const handleOptionClick = (detailName, optionName, basePrice, optionPrice) => {
    // Create a copy of the existing optionsData.
    const newOptionsData = { ...optionsData };

    // Update the selected option for the given detail.
    newOptionsData[detailName] = { optionName, optionPrice };

    // Calculate the new servicePrice by iterating through the optionsData.
    let newServicePrice = basePrice;
    for (const detailId in newOptionsData) {
      const optionData = newOptionsData[detailId];
      newServicePrice += optionData.optionPrice || 0;
    }

    // Update the state with the new optionsData and servicePrice.
    setOptionsData(newOptionsData);
    setServicePrice(newServicePrice);
  }


  // Function to handle Option Popup Submit
  const handleOptionFormSubmit = () => {
    // Create a copy of the existing formData.
    const newFormData = [...formData];
    // Check if the category already exists in the formData.
    const existingCategoryIndex = newFormData.findIndex(
      (categoryData) => categoryData.categoryName === category.categoryName
    );
   
    if (existingCategoryIndex !== -1) {  // Category already exists, update its data.
      newFormData[existingCategoryIndex] = {
        categoryName: category.categoryName,
        optionsData: { ...optionsData },
        servicePrice: servicePrice,
      };
    } else {  // Category doesn't exist, add it to the formData.
      const categoryData = {
        categoryName: category.categoryName,
        optionsData: { ...optionsData },
        servicePrice: servicePrice,
      };

      newFormData.push(categoryData);
    }
  
    // Update the state with the new formData and totalPrice.
    setFormData(newFormData);
    onClose();
  };
  
  

  return (
    <PopupOverlay isOpen={isOpen}>
        <PopupContent>
        <CloseButton onClick={onClose}><CloseIcon style={ {width: '15px', height: '15px',} }/></CloseButton>
        <h2>{category.categoryName}</h2>
      {details.map((detail) => (
        <InputContainer key={detail.id}>
          <Label>{detail.name}</Label>
          <OptionButtonContainer>
            {detail.options.map((option) => (
              <OptionButton
                key={option.name}
                selected={optionsData[detail.id]?.optionName === option.name}
                onClick={() =>
                  handleOptionClick(
                    detail.id,
                    option.name,
                    basePrice,
                    option.optionPrice || 0
                  )
                }
              >
                {option.name}
              </OptionButton>
            ))}
          </OptionButtonContainer>
        </InputContainer>
      ))}
      <p>Service Price: {servicePrice}</p>
      <Button onClick={handleOptionFormSubmit}>Okay</Button>
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

const OptionButton = styled.button`
  margin-bottom: 10px;
  padding: 8px;
  margin: 4px 5px;
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

const InputContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`;

const Label = styled.label`

`;

const OptionButtonContainer = styled.div`

`;

const Button = styled.button`
  height: 40px;
  width: 90px;
  color: white;
  font-size: 15px;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  /* ${mobile({ margin: '20px' })} */
`;



export default OptionsPopup;
