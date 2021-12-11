/** @format */

import React from "react";

const FeatureFive = () => {
  return (
    <div className='featureFive'>
      {/* wrapper div to wrap middle div and offer date div */}
      <div className='featFiveWrapperDiv'>
        {/* middle "description" text div */}
        <div className='featFiveTextDiv'>
          {/* left side "3.69" text div */}
          <div className='featFiveTitleDiv'>
            <div className='featFivePriceImgDiv'>
              <i class='fas fa-fire-alt fa-3x'></i>
            </div>

            <h1 className='featFiveTitle'>
              COOKIE <br /> DOUGH
            </h1>
          </div>

          <p className='featFiveSubTitle'>Brownie</p>

          {/* middle content div */}
          <div className='featFiveCenterDiv'>
            <p className='featFiveDescText'>
              BROWNIE TOPPED WITH COOKIE DOUGH FROSTING AND M&M'S
              <br />
              MINIS CHOCOLATE CANDIES | 4-PIECE ORDER
            </p>
            {/* order button div inside middle content div */}
            <div className='featFiveBtnDiv'>
              <button>ORDER NOW</button>
            </div>
          </div>
          {/* under all divs "offer section" */}
          <div className='featFiveOfferDate'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        {/* right side image div */}
        <div className='featFiveBlankDiv'>
          <div className='featFiveDealImgDiv'>
            <i class='fas fa-cookie fa-5x'></i>
            <i class='fas fa-cookie fa-5x'></i>
            <i class='fas fa-cookie fa-5x'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFive;
