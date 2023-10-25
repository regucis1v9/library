import React, { useState } from 'react';
import '../SideBar.css';

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`SideBar ${collapsed ? 'collapsed' : ''}`}>
      <div className="TopCont">
        <img
          src={process.env.PUBLIC_URL + '/images/Burger_menu.png'}
          alt="Burger Menu"
          onClick={toggleSidebar}
        />
      </div>
      {!collapsed && (
        <div className="MidCont">
          <img src={process.env.PUBLIC_URL + '/images/Home_button.png'} alt="Home Button" />
          <img src={process.env.PUBLIC_URL + '/images/Info_button.png'} alt="Info Button" />
          <img src={process.env.PUBLIC_URL + '/images/Contact_button.png'} alt="Contact Button" />
        </div>
      )}
      {!collapsed && (
        <div className="BotCont">
          <img src={process.env.PUBLIC_URL + '/images/Account_button.png'} alt="Account Button" />
        </div>
      )}
    </div>
  );
}

export default SideBar;
