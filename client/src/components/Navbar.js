import {
  Link
} from "react-router-dom";

import React from 'react';
import Auth from "../utils/auth";

function Navbar(props) {
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
            <Link to={tab.link}
              onClick={() => props.handlePageChange(tab.text)} className={
                props.currentPage === tab.text ? 'nav-link active' : 'nav-link'
              }
            >
              {tab.text}
            </Link>
          </li>
        ))}
        {Auth.loggedIn() ? <li className="nav-link"


          key="log-out"
        >
          <Link to="#"
            onClick={() => Auth.logout()} className="nav-link"
          >
            log-out
          </Link>
        </li> : null}
      </ul>
    </div>
  );
}


export default Navbar;