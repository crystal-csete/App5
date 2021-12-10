/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='footerSocialLinksDiv'>
        <div className='footerSocialDiv'>
          <ul className='footerSocialList'>
            <li>
              <i class='fa fa-facebook-square fa-3x'></i>
            </li>
            <li>
              <i class='fa fa-twitter-square fa-3x'></i>
            </li>
            <li>
              <i class='fa fa-instagram fa-3x'></i>
            </li>
            <li>
              <i class='fa fa-linkedin fa-3x'></i>
            </li>
          </ul>
        </div>
        <div className='footerAppStoreDiv'>
          <p>ORDER ON OUR MOBILE APP</p>
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>
      <div>
        <div className='footerTermsLinksDiv'>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>California Privacy Policy</li>
            <li>Espanol</li>
          </ul>
        </div>
        <div className='footerRightsDiv'>
          <p>
            2003-2021 Galactic Pizza Enterprises, Inc. All right reserved. The
            Galactic Pizza name, logos and related markes are trademarks
            licensed to Galactic Pizza Enterprises, Inc.
          </p>
        </div>
        <div className='footerAccessDiv'>
          <p>
            If you are using a screen reader and having difficulty, please call
            1-800-555-5555.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
