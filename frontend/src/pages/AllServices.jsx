import React from 'react';
import Navbar from '../components/Navbar';
import AllServicesComponent from '../components/AllServicesComponent';
import Footer from '../components/Footer';

export default function AllServices() {
  return (
    <div>
      <Navbar />
      <div style={{height: '70px', width: '100%'}}></div>
      <AllServicesComponent />
      <Footer />
    </div>
  )
}
