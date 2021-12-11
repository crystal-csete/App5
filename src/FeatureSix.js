/** @format */

import React from "react";

const FeatureSix = () => {
  return (
    <div className='featureSix'>
      {/* upper title div */}
      <div className='featSixupWrapperDiv'>
        {/* title div */}
        <div className='featSixHiring'>
          <p className='featSixJobText'>Now Hiring! STORE JOBS</p>
          {/* lower left image div */}
          <div className='featSixImgShopDiv'>
            <i class='fas fa-store'></i>
          </div>
        </div>
      </div>

      {/* wrapper div for lower right divs */}
      <div className='featSixLowWrapperDiv'>
        {/* lower right image div */}
        <div className='featSixImgCharDiv'>
          <i class='fas fa-user-astronaut'></i>
          {/* right side button div */}
          <div className='featSixBtnDiv'>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSix;
