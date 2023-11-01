import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import '../SideBar.css';
import Cookies from 'js-cookie';

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Get the current URL location

  let usernameFromCookie = Cookies.get('username');
  let link = "http://localhost:3000/login";
  if (usernameFromCookie !== '') {
    link = "http://localhost:3000/profile";
  }

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`SideBar ${collapsed ? 'collapsed' : ''}`}>
      <a className="TopCont">
        <img
          className="marginTop15"
          src={process.env.PUBLIC_URL + '/images/Burger_menu.png'}
          alt="Burger Menu"
          onClick={toggleSidebar}
        />
      </a>
      {!collapsed && (
        <div className="MidCont">
          <a href="http://localhost:3000">
            <img
              src={process.env.PUBLIC_URL + '/images/Home_button.png'}
              alt="Home Button"
              className={location.pathname === '/' ? 'active' : ''}
            />
          </a>
          <img src={process.env.PUBLIC_URL + '/images/Info_button.png'} alt="Info Button" />
          <img src={process.env.PUBLIC_URL + '/images/Contact_button.png'} alt="Contact Button" />
        </div>
      )}
      {!collapsed && (
        <div className="BotCont">
          <a href={link}>
            <img
              src={process.env.PUBLIC_URL + '/images/Account_button.png'}
              alt="Account Button"
              className={location.pathname === '/profile' ? 'active' : ''}
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default SideBar;
