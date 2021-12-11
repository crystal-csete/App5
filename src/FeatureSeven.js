/** @format */

import React from "react";

const FeatureSeven = () => {
  return (
    <div className='featureSeven'>
      {/* wrapper div to wrap text and image */}
      <div className='featSevWrapperDiv'>
        {/* left side text div */}
        <div className='featSevTextDiv'>
          <p className='featSevText'>
            RAISE SOME DOUGH FOR YOUR ORGANIZATION WITH GALACTIC PIZZA
            FUNDRAISING
          </p>
          <div className='featSevBtnDiv'>
            <button>LEARN HOW</button>
          </div>
        </div>

        {/* right side image div */}
        <div className='featSevBlankDiv'>
          <div className='featSevImgCharDiv'>
            <i class='fas fa-user-astronaut'></i>
            <i class='fas fa-comments-dollar'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSeven;
