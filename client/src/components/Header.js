import React, { useState } from "react";
import Navbar from "./Navbar";
import CreatePotluck from "./CreatePotluck";
import Home from "./Home";
import Signup from "./Signup";
import Dashboard from "./Dashboard";


function Header() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home/>;
      case "Signup":
        return <Signup/>;
      case "CreatePotluck":
        return <CreatePotluck />;
      case "Dashboard":
        return <Dashboard />;
    default:
        return <Home />;
    }
  };
  return (
      <div>

          <nav className='navbar'>
              <div className="navebar-brand"></div>
          </nav>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>
              <div>{renderPage(currentPage)}</div>
          </main>
      </div>
  );
}

export default Header;