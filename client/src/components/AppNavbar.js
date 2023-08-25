import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { logout } from './Redux/actions';
import { useNavigate } from 'react-router-dom';


import './AppNavbar.css';


const AppNavbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const user = useSelector((state) => state.authReducer.user);
  const navigate = useNavigate();

  const logoutt = () => {
    dispatch(logout());
    navigate('/');
  };

  const authLinks = (
    <Fragment>
      <NavItem className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <span  style={{color:"black"}} className="navbar-text mr-3">
            <strong>{user ? user.name : null}
            </strong>
          </span>
        </Link>
      </NavItem>
      <NavItem className="nav-item">
<Link to="/add" className="nav-link">
<span style={{color:"black"}}className="navbar-text mr-3">
<strong>Add</strong>
</span>
</Link>
</NavItem>
      <NavItem className="nav-item">
        <Link to="/list" className="nav-link">
          <span style={{color:"black"}} className="navbar-text mr-3">
            <strong>List Cars</strong>
          </span>
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link to="/map" className="nav-link">
          <span style={{color:"black"}} className="navbar-text mr-3">
            <strong> My Location</strong>
          </span>
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink href="#" onClick={logoutt} className="nav-link">
          <span style={{color:"black"}} className="navbar-text mr-3">Logout</span>
        </NavLink>
      </NavItem>
      
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem className="nav-item">
        <LoginModal />
      </NavItem>
      <NavItem className="nav-item">
        <RegisterModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="white" dark expand="sm" className="mb-5">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              {user ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
