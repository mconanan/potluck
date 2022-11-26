import React from 'react';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import {  Nav } from 'react-bootstrap';
// import Auth from '../utils/auth';


function AppNavbar (props) {
  // const [showModal, setShowModal] = useState(false);
    const tabs = ['Home', 'Signup/Login', 'Dashboard'];
    return (
      <div className="tabs is-centered">
        <h1>Sharecuterie</h1>
      <ul className="nav nav-tabs 12px">
        {tabs.map((tab) => (
          <li className={
            props.currentPage === tab ? 'nav-item is-active' : 'nav-item'
          }
          key={tab}
          >
           <a href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)} className={
              props.currentPage === tab ? 'tav-link active' : 'nav-link'
            }
            >
              {tab}
              {/* <Nav.Link eventKey='login'>Login</Nav.Link> */}
              {/* <input value={props.val} onChange={(e) => { props.onChange(e.target.value) }} /> */}
              </a>
              {/* <Navbar>
                <Container fluid>
             
              <Nav.Link as={Link} to='/'>
               Create a Potluck
              </Nav.Link>
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              </Container>
              </Navbar>
              <Modal show={showModal}>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
                <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
              </Nav>
              </Modal> */}
          </li>
        ))}
        </ul>
        </div>    
    );
}

export default AppNavbar;