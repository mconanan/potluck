// import {
//    Link } from "react-router-dom";

   import React from 'react';


function Navbar (props) {
    const tabs = [{
      text: "Home",
      link: "/"
    }, {
      text: "Signup/Login",
      link: "/login"
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
           <a href={tab.link}
            onClick={() => props.handlePageChange(tab.text)} className={
              props.currentPage === tab.text ? 'tav-link active' : 'nav-link'
            }
            >
              {tab.text}
              </a>
          </li>
        ))}
        </ul>
        </div>    
    );
}

export default Navbar;