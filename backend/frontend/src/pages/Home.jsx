import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import MainServices from '../components/MainServices';
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
        <Navbar /> 
        <Banner />
        <MainServices />
        <Testimonials />
        <Choose />
        <Footer />
    </div>
    
  )
}
