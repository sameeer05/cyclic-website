import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonalInfo from '../components/PersonalInfo';
import Addresses from '../components/Addresses';
import Bookings from '../components/Bookings';
import { useSelector } from 'react-redux';


const Profile = () => {
  const user = useSelector((state) => state.currentUser);

  return (
    <div>
      <Navbar />
      <PersonalInfo />
      <Addresses />
      <Bookings bookings={user.bookings} />
      <Footer />
    </div>
  );
};

export default Profile;
