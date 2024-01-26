import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icons from '../icons';
import { mobile } from '../responsive';
import OptionsPopup from './OptionsPopup';

const { AddIcon, RemoveIcon } = Icons;

const BookingForm = ({ service, bookingFormData, setBookingFormData, setTimingsVisible, totalPrice, setTotalPrice }) => {
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useState(false);
  const [formData, setFormData] = useState(bookingFormData.serviceData);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [openedCategory, setOpenedCategory] = useState({});

  useEffect(() => {
    let totalPrice = 0;
    formData.forEach((categoryData) => {
      totalPrice += categoryData.servicePrice;
    });
    setTotalPrice(totalPrice);  }, [formData, setTotalPrice]);

  const openPopup = (categoryName) => {
    setIsOptionsPopupOpen(!isOptionsPopupOpen)
    setOpenedCategory({ [categoryName]: true });
  };

  const removeCategory = (categoryName) => {
    // Create a new array by filtering out the category to be removed
    const updatedFormData = formData.filter((categoryData) => categoryData.categoryName !== categoryName);
    // Update the formData state with the new array
    setFormData(updatedFormData);
  };

  const closeOptionsPopup = () => {
    setIsOptionsPopupOpen(false);
  };

  const handleNext = () => {
    const newFormData = {
      ...bookingFormData,
      serviceData: formData,
      totalPrice: totalPrice,
    };

    setBookingFormData(newFormData);
    setTimingsVisible(true);
    console.log('Form Data: ', formData)
    console.log('New Form Data: ', newFormData)
    console.log('Booking Form Data: ', bookingFormData)
  }

  const isButtonDisabled = Object.keys(formData).length === 0;

  return (
    <Container>
      <Title>Booking Details</Title>
      {service.map((category) => (
        <div key={category.categoryName}>
          <CategoryContainer>
            <CategoryImageContainer>
              <CategoryImage src="https://th.bing.com/th/id/OIG.zoCtBuv5e8pDRLmu0vcd?pid=ImgGn" alt='' />
            </CategoryImageContainer>
            <CategoryDetailContainer>
              <CategoryHeading>{category.categoryName}</CategoryHeading>
              <Label>Starts At : ₹{category.basePrice}</Label>
                {formData.some((data) => data.categoryName === category.categoryName)  ? (
                  <ExpandIcon onClick={() => removeCategory(category.categoryName)}>
                    <RemoveIcon />
                  </ExpandIcon>
                ) : (
                  <ExpandIcon onClick={() => openPopup(category.categoryName)}>
                    <AddIcon />
                  </ExpandIcon>
                )}
            </CategoryDetailContainer>
          </CategoryContainer>
          {openedCategory[category.categoryName] && (
            <OptionsPopup
            isOpen={isOptionsPopupOpen}
            onClose={closeOptionsPopup}
            category={category}
            details={category.details}
            formData={formData}
            basePrice={category.basePrice}
            setFormData={setFormData}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
          )}
        </div>
      ))}
      <BottomContainer>
        <PriceText>Total Price: ₹{totalPrice}</PriceText>
        <Button onClick={handleNext} disabled={isButtonDisabled}>
          Next
        </Button>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 30px 40px;
  margin: 20px 0 20px;
  border-radius: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  ${mobile({ padding: '30px 10px', width: '100%' })}
`;

const Title = styled.h1`
  font-weight: 200;
  margin: 0 0 30px;
`;

const CategoryContainer = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0 10px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  // ${mobile({ width: '90%', })}
`;

const CategoryImageContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 80px;
  width: 80px;
  margin-right: 20px;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CategoryDetailContainer = styled.div`

`;

const CategoryHeading = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  // font-weight: 200;
  ${mobile({ fontSize: '1rem' })}
`;

const ExpandIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 10px; 
  margin-left: 10px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4477CE;
  color: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;


const Label = styled.label`
  font-size: .8rem;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  ${mobile({ padding: ' 0 20px'})}
`;

const PriceText = styled.p`
  /* margin: 20px; */
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

export default BookingForm;
