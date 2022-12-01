import {
   Link } from "react-router-dom";
   import React from 'react';
  //  import {  Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
  //  import SignUpForm from './SignupForm';
  //  import LoginForm from './LoginForm';
  //  import Auth from '../utils/auth';

function Navbar (props) {
  
    const tabs = [{
      text: "Home",
      link: "/"
    }, {
      text: localStorage.getItem('id_token') ? "Logout": "Login/Signup",
      link: localStorage.getItem('id_token') ? localStorage.removeItem('id_token'): "/Login"
      // text: "Login",
      // link: "/dashboard"



      },

    {
      text: "Dashboard",
      link: "/dashboard"
    }
  ]

    return (
      <>
      <div className="tabs is-centered">
        <h1>Sharecuterie</h1>
      <ul className="nav nav-tabs 12px">
        {tabs.map((tab) => (
          <li className={
            props.currentPage === tab.text ? 'nav-item is-active' : 'nav-item'
          }
          key={tab.text}
          >
           <Link to={tab.link}
            onClick={() => props.handlePageChange(tab.text)} className={
              props.currentPage === tab.text ? 'nav-link active' : 'nav-link'
            }
            >
              {tab.text}
              </Link>
          </li>
        ))}
        </ul>
        </div> 
        </>   
    );
}

// export default Navbar;
// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           {/* <Navbar.Brand as={Link} to='/'>
//             Google Books Search
//           </Navbar.Brand> */}
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar'>
//             <Nav className='ml-auto'>
//               <Nav.Link as={Link} to='/'>
//                 {/* Search For Books */}
//               </Nav.Link>
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/dashboard'>
//                    Create Potluck
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* set modal data up */}
//       <Modal
//         size='lg'
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby='signup-modal'>
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey='login'>
//           <Modal.Header closeButton>
//             <Modal.Title id='signup-modal'>
//               <Nav variant='pills'>
//                 <Nav.Item>
//                   <Nav.Link eventKey='login'>Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey='login'>
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey='signup'>
//                 <SignUpForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

export default Navbar;