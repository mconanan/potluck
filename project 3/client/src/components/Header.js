import React, { useState } from "react";
import AppNavbar from "./AppNavbar";
import CreatePotluck from "./CreatePotluck";
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";


function Header() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home/>;
      case "SignupForm":
        return <SignupForm/>;
        case "LoginForm":
        return <LoginForm/>;
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
          <AppNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>
              <div>{renderPage(currentPage)}</div>
          </main>
      </div>
  );
}

export default Header;