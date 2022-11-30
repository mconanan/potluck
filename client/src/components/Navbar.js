import {
   Link } from "react-router-dom";

   import React from 'react';

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
              props.currentPage === tab.text ? 'tav-link active' : 'nav-link'
            }
            >
              {tab.text}
              </Link>
          </li>
        ))}
        </ul>
        </div>    
    );
}

export default Navbar;