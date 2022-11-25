// import {
//    Link } from "react-router-dom";

   import React from 'react';


function Navbar (props) {
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
              </a>
          </li>
        ))}
        </ul>
        </div>    
    );
}

export default Navbar;