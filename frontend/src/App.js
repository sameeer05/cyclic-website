import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import AllServices from './pages/AllServices';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Service from './pages/Service'
import Profile from './pages/Profile';
import Success from './pages/Success';
import Failure from './pages/Failure';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';

function App() {
  const user = useSelector((state) => state.currentUser);
  const isFetching = useSelector((state) => state.isFetching);
  return (
    <>
      {isFetching && <Spinner />}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services/all' element={<AllServices />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services/:id' element={<Service />} />
          <Route path='/success' element={<Success />} />
          <Route path='/failure' element={<Failure />} />
          {user &&
            <Route path='/profile' element={<Profile />} />
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
