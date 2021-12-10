/** @format */

import React from "react";
import logo from "./images/logo.png";

const Nav = () => {
  return (
    <div className='navDiv'>
      <nav>
        {/* logo and name div */}
        <div className='navImgDiv'>
          <img src={logo} className='navLogo' alt='pizza logo' />
          <p>Galactic Pizza</p>
        </div>

        {/* unordered list */}
        <ul>
          {/* "My account" list item */}
          <li>
            <a href='#account'>🔽 My Account</a>
          </li>

          {/* "Shopping bag" or "cart" logo list item */}
          <li>
            <a href='#cart'>
              <i class='fa fa-shopping-bag fa-lg'></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
