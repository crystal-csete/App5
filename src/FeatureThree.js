/** @format */

import React from "react";

const FeatureThree = () => {
  return (
    <div className='featureThree'>
      {/* left side text div */}
      <div className='featThreeCrazyDiv'>
        <h2>Crazy!Crazy!Deals</h2>
      </div>
      {/* right side div */}
      <div className='featThreeBlankDiv'>
        {/* right side overlay div */}
        <div className='featThreeOverlay'>
          <h2>WANT ACCESS TO</h2>
          <p className='featThreeSubTitle'>Exclusive Deals?</p>
          <p className='featThreeDescText'>
            Subscribe for access to exclusive offers, promotions, and NEW
            Crazy!Crazy! Deals
          </p>
          <div className='featThreeBtnDiv'>
            <button>
              <a href='#signup'>SUBSCRIBE NOW ▶</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;
