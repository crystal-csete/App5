/** @format */

import React from "react";

const FeatureEight = () => {
  return (
    <div className='featureEight'>
      {/* upper title div */}
      <div className='featEightTopTextDiv'>
        <p className='featEightTitle'>
          SERVING UP PEACE OF MIND WITH NO-CONTACT ORDERING OPTIONS
        </p>
        <p className='featEightSubTitle'>
          Our pizzas are baked in 475-degree ovens to ensure food safety and
          never touched after baking. Then, now and always.
        </p>
        <p className='featEightOptions'>
          ⬅NO-CONTACT OPTIONS TO GET YOUR PIZZA ➡
        </p>
      </div>

      {/* wrapper for lower divs for "no contact options" */}
      <div className='featEightLowWrapperDiv'>
        {/* "delivery options" div */}
        <div className='featEightOptionDivs'>
          {/* thumbnail image for option divs*/}
          <div className='featEightCarImgDiv'>
            <i class='fa fa-car fa-3x'></i>
          </div>

          {/* "description" text div */}
          <div className='featEightText'>
            <h3>ONLINE OR DELIVERY</h3>
            <p>Left at your door with a ring of the doorbell, if you choose</p>
          </div>
        </div>

        {/* "delivery options" div */}
        <div className='featEightOptionDivs'>
          {/* thumbnail image for option divs*/}
          <div className='featEightCarImgDiv'>
            <i class='fa fa-phone fa-3x'></i>
          </div>

          {/* "description" text div */}
          <div className='featEightText'>
            <h3>ONLINE USING PIZZA PORTAL PICKUP</h3>
            <p>
              Held at a safe temperature for you and accessible using a
              no-contact QR code
            </p>
          </div>
        </div>

        {/* "delivery options" div */}
        <div className='featEightOptionDivs'>
          {/* thumbnail image for option divs*/}
          <div className='featEightCarImgDiv'>
            <i class='fa fa-fire fa-3x'></i>
          </div>

          {/* "description" text div */}
          <div className='featEightText'>
            <h3>HOT N READY PIZZA</h3>
            <p>Held at a safe temperature until you get here</p>
          </div>
        </div>

        {/* "delivery options" div */}
        <div className='featEightOptionDivs'>
          {/* thumbnail image for option divs*/}
          <div className='featEightCarImgDiv'>
            <i class='fa fa-car fa-3x'></i>
          </div>

          {/* "description" text div */}
          <div className='featEightText'>
            <h3>DRIVE THRU & PICK UP WINDOWS</h3>
            <p>At participating stores</p>
          </div>
        </div>
      </div>

      {/* "learn more" button div */}
      <div className='featEightBtnDiv'>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default FeatureEight;
