import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import { mobile } from '../responsive'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactUsContainer>
        <ContactForm />
        <ContactInfo />
      </ContactUsContainer>
      <Footer />
    </div>
  )
}

const ContactUsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 80px;
  margin-top: 65px;
  flex-wrap: wrap;
  ${mobile({
  flexDirection: 'column-reverse',
  alignItems: 'center',
  padding: '10px'
})}
`;
