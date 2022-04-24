import React from "react";
import "../../styles/styleNavBar.css";
import { iconLogo, userImg } from "../../constants";
const NavBar = () => {
  return (
    <div className='mainNavbar'>
      <div className='logo'>
        <img src={iconLogo} alt='...' />
      </div>
      <div className='contentUser'>
        <div className='imgUser'>
          <img src={userImg} alt='...' />
        </div>
        <div className='nameUser'>Muhesi Moses </div>
      </div>
    </div>
  );
};
export default NavBar;
