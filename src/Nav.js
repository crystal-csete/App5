/** @format */

import React from "react";
import logo from "./images/logo.png";

const Nav = () => {
  return (
    <div className='navDiv'>
      <nav>
        <div className='navImgDiv'>
          <img src={logo} className='navLogo' alt='pizza logo' />
        </div>
        <ul>
          <li>
            <a href='#account'>🔽 My Account</a>
          </li>
          <li>
            <a href='#cart'>👜</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
