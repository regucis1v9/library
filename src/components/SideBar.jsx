import React from 'react';
import '../App.css';

function SideBar() {
  return (
    <div className="SideBar">
      <div className="TopCont">
        <img src={process.env.PUBLIC_URL + '/images/Burger_menu.png'} alt="Burger Menu" />
      </div>
      <div className="MidCont">
        <img src={process.env.PUBLIC_URL + '/images/Home_button.png'} alt="Home Button" />
        <img src={process.env.PUBLIC_URL + '/images/Info_button.png'} alt="Info Button" />
        <img src={process.env.PUBLIC_URL + '/images/Contact_button.png'} alt="Contact Button" />
      </div>
      <div className="BotCont">
        <img src={process.env.PUBLIC_URL + '/images/Account_button.png'} alt="Account Button" />
      </div>
    </div>
  );
}

export default SideBar;
