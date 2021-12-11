/** @format */

import React from "react";

const Nav = () => {
  return (
    <div className='navDiv'>
      <nav>
        {/* logo and name div */}
        <div className='navImgDiv'>
          <i
            class='fas fa-user-astronaut fa-3x'
            style={{ color: "#ff6000" }}></i>
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
              <i class='fas fa-shopping-bag fa-lg'></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
