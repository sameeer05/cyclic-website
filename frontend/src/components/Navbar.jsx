import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginPopup from "./LoginPopup";
import { mobile } from "../responsive";
import logo from "../assets/images/logo.png"
import { resetUser } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false); // State to control the login popup
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const handleLogout = () => {
    dispatch(resetUser());
    navigate('/');
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={logo} alt=''></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/services/all">All Services</NavbarLink>
            <NavbarLink to="/contact"> Contact Us</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink>
            {user &&
              <NavbarLink to="/profile">My Profile</NavbarLink>
            }
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
          {user ? (
            <LoginButton onClick={handleLogout}>Logout</LoginButton>
          ) : (
            <LoginButton onClick={openLoginPopup}>Login</LoginButton>
          )}
        </RightContainer>

      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {user ? (
            <LoginButtonExtended onClick={handleLogout}>Logout</LoginButtonExtended>
          ) : (
            <LoginButtonExtended onClick={openLoginPopup}>Login</LoginButtonExtended>
          )}
          {user &&
            <NavbarLinkExtended to="/profile">My Profile</NavbarLinkExtended>
          }
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/services/all">All Services</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #F9F5EB;
  padding: 0 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  /* width: 100%; */
  height: ${(props) => (props.extendNavbar ? "100vh" : "70px")};
  display: flex;
  flex-direction: column;
  ${mobile({
  padding: '0px 20px',
  height: (props) => (props.extendNavbar ? "100vh" : "65px")
})}

  /* @media (min-width: 700px) {
    height: 80px;
  } */
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: '2' })}
`;

const RightContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
  flex: '1',
  justifyContent: 'flex-end'
})}
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: #000;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px 15px;
  ${mobile({ display: 'none' })}
  
`;

const NavbarLinkExtended = styled(Link)`
  color: #000;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 15px;
`;

const Logo = styled.img`
  max-width: 180px;
  height: 80px;

  ${mobile({ maxHeight: '70px' })}
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  /* color: white; */
  font-size: 45px;
  cursor: pointer;
  display: none;
  ${mobile({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})}

  /* @media (min-width: 700px) {
    display: none;
  } */
`;

const NavbarExtendedContainer = styled.div`
  display: none;
  ${mobile({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})}
`;

const LoginButton = styled.button`
  height: 40px;
  width: 90px;
  color: white;
  font-size: 15px;
  background-color: #4477CE;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  ${mobile({ display: 'none' })}
`;

const LoginButtonExtended = styled(LoginButton)`
  width: 150px;
  height: 50px;
  margin: 15px;
  font-size: 20px;
  ${mobile({ display: 'block' })}
  /* @media (max-width: 700px) {
    display: block;
  } */
`;

export default Navbar;
