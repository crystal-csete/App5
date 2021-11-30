/** @format */

import React from "react";

const Footer = () => {
  return (
    <div className='footerDiv'>
      <footer>
        <address>
          You can contact us at{" "}
          <a href='http://www.somedomain.com/contact'>www.somedomain.com</a>.
          <br />
          Or contact us by mail: <br />
          Galactic Pizza
          <br />
          98755 Pizza Haven Ave <br />
          Doughyness, CA 98876 <br />
          USA
        </address>
        <div className='footerAd'>
          <p>ad goes here</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
